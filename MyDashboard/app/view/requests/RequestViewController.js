Ext.define("MyDashboard.view.requests.RequestViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.requestviewcontroller",
  stores: ["requests"],
  onFilterClick: function () {
    var viewModel = this.getViewModel(),
      startDate = viewModel.get("startDate"),
      endDate = viewModel.get("endDate");

    if (!startDate || !endDate) {
      Ext.Msg.alert("Error", "Please enter both start and end dates.");
      return;
    }

    // Fetch logs from server or database based on the selected dates
    // For demonstration purposes, we will use a static array of logs
    var logs = [
      {
        date: "2022-01-01",
        ipAddress: "192.168.1.1",
        resourceUrl: "/resource1",
      },
      {
        date: "2022-01-02",
        ipAddress: "192.168.1.2",
        resourceUrl: "/resource2",
      },
    ];

    viewModel.getStore("requests").loadData(requests);
  },
  onShowLogs: function (btn, e, eOpts) {
    let requestGrid = this.getView();
    let lowerPanel = Ext.ComponentQuery.query("downpanel")[0];
    if (requestGrid.getHeight() === 600) {
      requestGrid.setHeight(400);
      lowerPanel.setHeight(400);
      btn.setText("Hide Logs");
    } else {
      requestGrid.setHeight(600);
      lowerPanel.setHeight(0);
      btn.setText("Show Logs");
    }
  },
  onLogGridCellDblClick: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {
    console.log(record.get("Logname"));
  },
  onLogGridCellContextMenu: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {},
  onSelectLog: function (id) {
    let me = this,
      grid = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences();
    let record = grid.getStore().findRecord("_id", id);
    vm.set("record", record);
    grid.getSelectionModel().select(record);
  },
  onSelectRequest: function (id) {
    let me = this,
        grid = me.getView(),
        vm = me.getViewModel(),
        refs = me.getReferences();
    let record = grid.getStore().findRecord('_id', id)
    vm.set("record", record)
    grid.getSelectionModel().select(record)
},
  onLogGridCellClick: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {
    let logStore = Ext.ComponentQuery.query("loggrid")[0].getStore();
    logStore.reload({
      params: {
        id: record.get("_id"),
      },
    });
    console.log(record.get("_id"));
  },
});
