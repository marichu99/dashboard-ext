Ext.define('MyDashboard.view.moviews.DownPanel',{
    extend:'Ext.tab.Panel',
    xtype:'downpanel',
    reference:"downpanel",
    height:0,
    scrollable: true,
    items: [{
        title: 'Logs',
        items: [
           {
                xtype:'loggrid'
           }
        ]
    }]
})