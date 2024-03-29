Ext.define('MyDashboard.model.Login', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'username', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'password', type: 'string' }
    ]
});