Ext.define("MyDashboard.view.logs.RequestViewController", {
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
  