Ext.define('MyDashboard.view.product.AddProduct', {
    extend: 'Ext.window.Window',
    xtype: 'addproduct',
    title: 'Add Product',
    controller:"addproductcontroller",
   /*  modal: true, */
    width: 400,
    layout: 'fit',
    items: [{
        xtype: 'form',
        reference: 'addform',
        bodyPadding: 10,
        items: [{
                xtype: 'textfield',
                fieldLabel: 'Product Name',
                name: 'name',
                allowBlank: false
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Product Price',
                name: 'price',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Product Category',
                name: 'category',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Image URL',
                name: 'imageUrl',
                allowBlank: false
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Product Quantity',
                name: 'quantity',
                allowBlank: false
            }
        ]
    }],
    buttons: [{
        text: 'Add',
        handler: 'onAddProductSubmit' // Implement this handler to add the product
    }, {
        text: 'Cancel',
        handler: 'onAddProductCancel'
    }]
});
