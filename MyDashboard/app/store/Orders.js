Ext.define('MyDashboard.store.Orders', {
    extend: 'Ext.data.Store',
    alias: "store.orders",
    storeId:"orders",
    model: 'MyDashboard.model.Order',    
    requires: ['MyDashboard.model.Order'],
    autoLoad: true,
    sorters: ["id"],
    proxy: {
        type: 'rest', 
      /*   type: 'ajax', */
        url: 'http://localhost:6060/api/orders',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});