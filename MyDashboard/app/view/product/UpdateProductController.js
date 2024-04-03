Ext.define('MyDashboard.view.product.UpdateProductController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.updateproductcontroller',
  
    onSaveUpdateProduct: function () {
        var form = this.getView().down('form');
        if (form.isValid()) {
          var values = form.getValues();
          Ext.Ajax.request({
            url: 'http://localhost:6060/api/products/' + values.id, // Update the URL with the appropriate endpoint for updating a product
            method: 'PUT', // Using PUT method for updating
            headers: {
              'Content-Type': 'application/json'
            },
            jsonData: values,
            success: function (response) {
              var responseData = Ext.decode(response.responseText);
              if (responseData.success) {
                Ext.Msg.alert('Success', 'Product updated successfully!');
                // Optionally, you can reload the product grid to reflect the changes
              } else {
                Ext.Msg.alert('Error', responseData.msg || 'Failed to update product.');
              }
            },
            failure: function (response) {
              Ext.Msg.alert('Error', 'Failed to update product.');
            }
          });
          this.getView().close(); // Close the window after sending the request
        }
      },
      
    onCancelUpdateProduct: function () {
      this.getView().close();
    }
  });
  