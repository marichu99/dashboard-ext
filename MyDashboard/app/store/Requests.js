Ext.define('MyDashboard.store.Requests', {
    extend: 'Ext.data.Store',
    alias: "store.requests",
    storeId:"requests",
    model: 'MyDashboard.model.Request',    
    requires: ['MyDashboard.model.Request'],
    autoLoad: true,
    sorters: ["id"],
    pageSize: 40 ,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/requests',
        reader: {
            type: 'json',
            rootProperty: 'rows'
        },
        
    }
});