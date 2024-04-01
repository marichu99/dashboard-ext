Ext.define("MyDashboard.view.requests.ProductGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.productviewcontroller",
  stores: ["products"],

  onShowProductDetails: function (button) {
    var grid = button.up("grid"); // Find the nearest grid panel
    var selectedRecords = grid.getSelection(); // Get selected records

    if (selectedRecords.length > 0) {
      var selectedRecord = selectedRecords[0]; // Assuming single selection
      var productDetailsWindow = Ext.create(
        "MyDashboard.view.product.ProductDetails",
        {
          viewModel: {
            data: {
              selectedProduct: selectedRecord,
            },
          },
        }
      );

      productDetailsWindow.show();
    } else {
      Ext.Msg.alert("No Selection", "Please select a product.");
    }
  },

  onProductGridCellClick: function (
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
