Ext.define('MyDashboard.view.moviews.DownPanel',{
    extend:'Ext.tab.Panel',
    xtype:'downpanel',
    height:0,
    items: [{
        title: 'Logs',
        items: [
           {
                xtype:'loggrid'
           }
        ]
    }]
})