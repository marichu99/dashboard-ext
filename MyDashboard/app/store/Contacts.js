Ext.define('MyDashboard.store.Contacts', {
    extend: 'Ext.data.Store',
    alias: 'store.Contacts',
    model: 'MyDashboard.model.Contact',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/contacts.json',
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    }
});
