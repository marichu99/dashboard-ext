Ext.define('MyDashboard.view.product.UpdateProductController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.updateproductcontroller',
  
    onSaveUpdateProduct: function () {

         var form = this.lookupReference('updateform'); // Get reference to the form


    var values = form.getForm().getValues(); // Get form field values

    // Log the selectedProduct data before form submission
    console.log('Selected Product Data:', this.getViewModel().get('selectedProduct'));


    // Construct the updated product request object
    var updatedProductRequest = {
        id: values.id, // Product ID
        name: values.name,
        price: values.price,
        category: values.category,
        imageUrl: values.imageUrl,
        quantity: values.quantity
    };

     // Set the productId explicitly from selectedProduct.id
      values.id = this.getView().getViewModel().get('selectedProduct.id');
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
     

  });
  