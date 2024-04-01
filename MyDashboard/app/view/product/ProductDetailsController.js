Ext.define("MyDashboard.view.product.ProductDetailsController", {
  extend: "Ext.app.ViewController",
  alias: "controller.productdetailscontroller",

  onPlaceOrder: function () {
    var selectedProduct = this.getViewModel().get("selectedProduct");
    if (selectedProduct) {
      console.log(
        "Place order clicked for product: " + selectedProduct.get("name")
      );
    }
  },
});
