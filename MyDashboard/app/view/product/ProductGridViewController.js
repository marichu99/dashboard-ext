Ext.define("MyDashboard.view.requests.ProductGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.productviewcontroller",
  stores: ["products"],

  onShowProductDetails: function (btn, e, eOpts) {
    // var productDetails = Ext.create('MyDashboard.view.ProductDetails', {
    //     record: button.up('productlist').getStore().getAt(button.up('productlist').getStore().indexOf(button.up('productlistitem').getRecord()))
    // });
    // productDetails.show();
    var store = this.getStore();
    
    Ext.Ajax.request({
      url: 'http://localhost:6060/api/products',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json', 
      },

      success: function(response, options) {
          // handle success response
          var responseData = Ext.decode(response.responseText);
          // store.loadData(products);
          console.log("The fetch is successful");
          console.log(responseData);
      },
      failure: function(response, options) {
          // handle failure response
          console.log('Request failed:',response);
      }
  });
  
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
