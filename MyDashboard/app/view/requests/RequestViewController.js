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

    viewModel.getStore("requests").loadData(requests);
  },
  onAddRequestClicked: function (btn, e, eOpts) {
    console.log(btn.getText() + " was clicked");
    var wd = Ext.create({
      xtype: "requestformwindow",
    });
    wd.show();
  },
  onShowLogs: function (btn, e, eOpts) {
    let requestGrid = this.getView();
    let lowerPanel = Ext.ComponentQuery.query("downpanel")[0];
    if (requestGrid.getHeight() === 600) {
      requestGrid.setHeight(350);
      lowerPanel.setHeight(450);
      btn.setText("Hide Logs");
    } else {
      requestGrid.setHeight(600);
      lowerPanel.setHeight(0);
      btn.setText("Show Logs");
    }
  },
  onDeleteProduct: function () {
    var grid = this.getView();
    var selectedRecord = grid.getSelection()[0];

    if (selectedRecord) {
      console.log(selectedRecord.data._id);
      var id = selectedRecord.data._id;
      Ext.Msg.confirm(
        "Delete",
        "Are you sure you want to delete this request?",
        function (btn) {
          if (btn === "yes") {
            var url = "http://localhost:3000/requests/" + id;
            Ext.Ajax.request({
              url: url,
              method: "DELETE",
              success: function (response) {
                var result = Ext.decode(response.responseText);

                if (result.success) {
                  console.log(url);
                  Ext.Msg.alert("Success", "Request deleted successfully");
                } else {
                  Ext.Msg.alert("Error", result.message);
                }
              },
              failure: function (response) {
                Ext.Msg.alert(
                  "Error",
                  "Failed to delete Requests. Please try again."
                );
              },
            });
            
          }
        }
      );
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
  onSelectTopPanel: function (id) {
    let me = this,
      grid = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences();
    let record = grid.getStore().findRecord("_id", id);
    vm.set("record", record);
    grid.getSelectionModel().select(record);
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
