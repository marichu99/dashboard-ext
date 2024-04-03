Ext.define('MyDashboard.view.product.AddProductController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addproductcontroller',
  
    onAddProductSubmit: function(button) {
        var form = button.up('window').down('form');
        var values = form.getValues();
    
        Ext.Ajax.request({
            url: 'http://localhost:6060/api/products', // Replace with your actual backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            jsonData: values,
            success: function(response) {
              var responseData = Ext.decode(response.responseText);
              if (responseData.success) {
                  Ext.Msg.alert('Success', 'Product added successfully!');
                  
                  /* // Reload the product store to reflect the changes
                  var productGrid = Ext.ComponentQuery.query('productgrid')[0];
                  var productStore = productGrid.getStore();
                  productStore.reload(); */
              } else {
                  Ext.Msg.alert('Error', responseData.msg || 'Failed to add product.');
              }
          },
          failure: function(response) {
              Ext.Msg.alert('Error', 'Failed to add product.');
          }
        });
      },
    onCancelUpdateProduct: function () {
      this.getView().close();
    }
  });
  