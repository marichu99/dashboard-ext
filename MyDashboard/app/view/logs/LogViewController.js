Ext.define("MyDashboard.view.logs.LogViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.loggridcontroller",
  stores: ["logs"],

  onAddLog: function (btn, e, eOpts) {
    console.log(btn.getText() + " was clicked");
    var wd = Ext.create({
      xtype: "logformwindow",
    });
    wd.show();
  },
  onUpdateLog: function () {
    var grid = this.getView();
    var selectedRecord = grid.getSelection()[0];
  
    if (selectedRecord) {
      Ext.create('MyDashboard.view.logs.UpdateLogWindow', {
        viewModel: {
          data: {
            selectedLog: selectedRecord.getData() // Pass the selected product data to the window
          }
        }
      }).show();
    }
  },

  onDeleteLog: function () {
    var grid = this.getView();
    var selectedRecord = grid.getSelection()[0];

    var me = this,
      form = me.getView().down("form"),
      values = form.getValues();

    if (selectedRecord) {
      console.log(selectedRecord.data._id);
      var id = selectedRecord.data._id;
      Ext.Msg.confirm(
        "Delete",
        "Are you sure you want to delete this Log?",
        function (btn) {
          if (btn === "yes") {
            var url = "http://localhost:3000/logs/" + id;
            Ext.Ajax.request({
              url: url,
              method: "DELETE",
              success: function (response) {
                var result = Ext.decode(response.responseText);

                if (result.success) {
                  console.log(url);
                  Ext.Msg.alert("Success", "Logs deleted successfully");
                } else {
                  Ext.Msg.alert("Error", result.message);
                }
              },
              failure: function (response) {
                Ext.Msg.alert(
                  "Error",
                  "Failed to delete logs. Please try again."
                );
              },
            });
          }
        }
      );
    }
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
});
