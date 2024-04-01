Ext.define('MyDashboard.store.Products', {
    extend: 'Ext.data.Store',
    alias: "store.products",
    storeId:"products",
    model: 'MyDashboard.model.Product',    
    requires: ['MyDashboard.model.Product'],
    autoLoad: true,
    sorters: ["id"],
    proxy: {
        type: 'rest',
        url: 'http://localhost:6060/api/products',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});