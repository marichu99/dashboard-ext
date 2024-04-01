Ext.define('MyDashboard.view.product.ProductDetails', {
    extend: 'Ext.window.Window',
    xtype: 'productdetails',
  
    requires: [
      'MyDashboard.model.Product'
    ],
  
    viewModel: {
      type: 'productviewmodel'
    },
  
    bind: {
      title: 'Product Details - {selectedProduct.name}'
    },
  
    controller: 'productdetailscontroller',
  
    bodyPadding: 10,
    closable: true,
    autoShow: true,
    draggable: true,
    resizable: true,
    layout: 'fit',
  
    items: [{
      xtype: 'form',
      reference: 'form',
      layout: {
        type: 'vbox',
        align: 'center'
      },
      items: [{
        xtype: 'image',
        bind: {
          src: '{selectedProduct.imageUrl}'
        },
        height: 200,
        width: 400
      }, {
        xtype: 'displayfield',
        fieldLabel: 'Name',
        bind: '{selectedProduct.name}'
      }, {
        xtype: 'displayfield',
        fieldLabel: 'Category',
        bind: '{selectedProduct.category}'
      }, {
        xtype: 'displayfield',
        fieldLabel: 'Quantity',
        bind: '{selectedProduct.quantity}'
      }]
    }],
  
    buttons: [{
      text: 'Place Order',
      handler: 'onPlaceOrder'
    }]
  });
  