Ext.define('MyDashboard.store.Labels', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.Labels',
    model: 'MyDashboard.model.Label',
    root: {
        name: 'Test',
        expanded: true
    },
    proxy: {
        type: 'ajax',
         url: 'data/labels.json', 
    }
});
