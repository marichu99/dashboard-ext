Ext.define('MyDashboard.store.Messages', {
    extend: 'Ext.data.Store',
    alias: 'store.Messages',
    model: 'MyDashboard.model.Message',
    autoLoad: true,
    sorters: [
        {
            property: 'date',
            direction: 'DESC'
        }
    ],
    proxy: {
        type: 'ajax',
        url: 'data/messages.json', 
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    }
});
