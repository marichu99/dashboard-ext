Ext.define('MyDashboard.view.moviews.TopPanel',{
    extend:'Ext.tab.Panel',
    xtype:'toppanel',
    
    items:[
        {
            xtype:'requestgridview',
           
        },
        {
            xtype:'downpanel',
            scrollable:true,
           
        }
    ]
})