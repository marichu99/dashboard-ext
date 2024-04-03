Ext.define('MyDashboard.model.Product', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int', readOnly: true }, // Make id non-editable
        'name', 'price', 'category','quantity','imageUrl'],
});

