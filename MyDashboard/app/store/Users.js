Ext.define('MyDashboard.store.Users', {
    extend: 'Ext.data.Store',
    alias: "store.users",
    model: 'MyDashboard.model.Login',    
    requires: ['MyDashboard.model.Login'],
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:7000/api/users/login',
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    }
});