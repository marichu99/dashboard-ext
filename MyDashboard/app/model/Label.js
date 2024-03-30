Ext.define('MyDashboard.model.Label', {
    extend: 'Ext.data.TreeModel',
    fields: [
        'name',
        { name: 'unreadCount', type: 'int' }
    ]
});
