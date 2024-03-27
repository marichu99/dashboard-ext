Ext.define('MyDashboard.store.Logs', {
    extend: 'Ext.data.Store',
    alias: "store.logs",
    model: 'MyDashboard.model.Log',    
    requires: ['MyDashboard.model.Log'],
    autoLoad: true,
    groupField: "type",
    pageSize: 10,
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/logs',
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    }
});