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

  onAddProduct: function() {
    Ext.create('MyDashboard.view.product.AddProduct').show();
  },
  
  onAddProductCancel: function(button) {
    var window = button.up('window'); // Get reference to the window
    if (window) {
        window.close(); // Close the window
    }
},
onUpdateProduct: function () {
  var grid = this.getView();
  var selectedRecord = grid.getSelection()[0];

  if (selectedRecord) {
    Ext.create('MyDashboard.view.product.UpdateProduct', {
      viewModel: {
        data: {
          selectedProduct: selectedRecord.getData() // Pass the selected product data to the window
        }
      }
    }).show();
  }
},

/* onSaveUpdateProduct: function () {
  var window = this.getView();
  var form = window.down('form');
  var values = form.getValues();

  Ext.Ajax.request({
    url: 'http://localhost:6060/api/products/' + values.id, // Update the URL with the appropriate endpoint for updating a product
    method: 'PUT', //  using PUT method for updating
    headers: {
      'Content-Type': 'application/json'
    },
    jsonData: values,
    success: function (response) {
      var responseData = Ext.decode(response.responseText);
      if (responseData.success) {
        Ext.Msg.alert('Success', 'Product updated successfully!');

        // Optionally, you can reload the product grid to reflect the changes
         // Reload the product store to reflect the changes
         Ext.getStore('products').reload();
        window.close(); // Close the update window after successful update
      } else {
        Ext.Msg.alert('Error', responseData.msg || 'Failed to update product.');
      }
    },
    failure: function (response) {
      Ext.Msg.alert('Error', 'Failed to update product.');
    }
  });
}, */

onDeleteProduct: function () {
  var grid = this.getView();
  var selectedRecord = grid.getSelection()[0];

  if (selectedRecord) {
    Ext.Msg.confirm('Delete', 'Are you sure you want to delete this product?', function (btn) {
      if (btn === 'yes') {
        // Send a request to delete the product from the backend
        Ext.Ajax.request({
          url: 'http://localhost:6060/api/products/' + selectedRecord.get('id'), // Update the URL with the appropriate endpoint for deleting a product
          method: 'DELETE', // Use DELETE method for deletion
          success: function (response) {
            var responseData = Ext.decode(response.responseText);
            if (responseData.success) {
              Ext.Msg.alert('Success', 'Product deleted successfully!');
              
              // Optionally, you can reload the product grid to reflect the changes
              grid.getStore().remove(selectedRecord); // Remove the record from the frontend grid
            } else {
              Ext.Msg.alert('Error', responseData.msg || 'Failed to delete product.');
            }
          },
          failure: function (response) {
            Ext.Msg.alert('Error', 'Failed to delete product.');
          }
        });
      }
    });
  }
},


  /* onProductGridCellClick: function (
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
  }, */
});
