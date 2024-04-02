Ext.define('MyDashboard.view.moviews.TopPanel',{
    extend:'Ext.panel.Panel',
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