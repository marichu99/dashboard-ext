Ext.define('MyDashboard.store.Requests', {
    extend: 'Ext.data.Store',
    alias: "store.requests",
    model: 'MyDashboard.model.Request',    
    requires: ['MyDashboard.model.Request'],
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/requests',
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    }
});