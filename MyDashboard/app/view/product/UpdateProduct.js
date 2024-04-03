Ext.define('MyDashboard.view.product.UpdateProduct', {
    extend: 'Ext.window.Window',
    xtype: 'updateproduct',
  
    controller:"updateproductcontroller",
    title: 'Update Product',
    width: 400,
    height: 300,
    layout: 'fit',
    modal: true,
    closable: true,

   
  viewModel: {
    data: {
      selectedProduct: {} // Initialize selectedProduct data
    }
  },

  // Other configurations for the window

  items: [{
    xtype: 'form',
    reference: 'updateform',
    layout: 'form',
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Product  ID',
        bind: '{selectedProduct.id}', // Bind to the selectedLproduct data
        readOnly: true, // Make the field non-editable
      },{
      xtype: 'textfield',
      fieldLabel: 'Product Name',
      bind: '{selectedProduct.name}' // Bind to the selectedProduct data
    }, {
      xtype: 'textfield',
      fieldLabel: 'Product Price',
      bind: '{selectedProduct.price}' // Bind to the selectedProduct data
    }, {
      xtype: 'textfield',
      fieldLabel: 'Image URL',
      bind: '{selectedProduct.imageUrl}' // Bind to the selectedProduct data
    }, {
      xtype: 'numberfield',
      fieldLabel: 'Quantity',
      bind: '{selectedProduct.quantity}' // Bind to the selectedProduct data
    }]
  }],

 
  
    buttons: [{
      text: 'Save',
      handler: 'onSaveUpdateProduct'
    }, {
      text: 'Cancel',
      handler: 'onCancelUpdateProduct'
    }]
  });
  