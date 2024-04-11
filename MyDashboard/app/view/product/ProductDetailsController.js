Ext.define("MyDashboard.view.product.ProductDetailsController", {
  extend: "Ext.app.ViewController",
  alias: "controller.productdetailscontroller",

  onPlaceOrder: function () {
    var productDetailsWindow = this.getView();
    var viewModel = productDetailsWindow.getViewModel();

    // Retrieve bound values from the view model
    var productId = viewModel.get("selectedProduct.id");
    var productName = viewModel.get("selectedProduct.name");
    var productCategory = viewModel.get("selectedProduct.category");
    var productQuantity = viewModel.get("selectedProduct.quantity");
    var productImageUrl = viewModel.get("selectedProduct.imageUrl");

    // Now you have the product details, you can perform further processing
    console.log("Product Name:", productName);
    console.log("Product ID:", productId);
    console.log("Product Category:", productCategory);
    console.log("Product Quantity:", productQuantity);
    console.log("Product Image URL:", productImageUrl);

    var selectedProducts = [productId, productQuantity];
    var orderItems = [];
    let i;
    for (i = 0; i < selectedProducts.length / 2; i++) {
      orderItems.push({
        productCode: productId, // Assuming 'id' is the product code
        quantity: productQuantity,
      });
    }

    var orderData = {
      orderItems: orderItems,
    };

    // Convert orderData to JSON string
    // var jsonData = Ext.JSON.encode(orderData);
    var jsonData=orderData
    console.log("The JSON DATA is", jsonData); // Output JSON data

    // Example: Sending data to server for order processing
    Ext.Ajax.request({
      url: "http://localhost:6001/api/orders/placeOrder",
      method: "POST",
      jsonData,
      success: function (response) {
        var responseData = Ext.decode(response.responseText);
        if (responseData.success) {
          Ext.Msg.alert("Success", "Product added successfully!");
          // Update your product list in the frontend if needed
        } else {
          Ext.Msg.alert("Error", responseData.msg || "Failed to add product.");
        }
      },
      failure: function (response) {
        Ext.Msg.alert("Error", "Failed to add product.");
      },
    });
  },

  onAddProductSubmit: function (button) {
    var form = button.up("window").down("form");
    var values = form.getValues();

    Ext.Ajax.request({
      url: "http://localhost:6060/api/products", 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      jsonData: values,
      success: function (response) {
        var responseData = Ext.decode(response.responseText);
        if (responseData.success) {
          Ext.Msg.alert("Success", "Product added successfully!");
          // Update your product list in the frontend if needed
        } else {
          Ext.Msg.alert("Error", responseData.msg || "Failed to add product.");
        }
      },
      failure: function (response) {
        Ext.Msg.alert("Error", "Failed to add product.");
      },
    });
  },
});
