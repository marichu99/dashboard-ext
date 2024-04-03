Ext.define('MsTraining.view.logs.LogView', {
    extend: 'Ext.grid.Panel',
    xtype: 'loggrid',
    reference: 'loggrid',
    controller: 'loggridcontroller',
    scrollable: true,
    store: {
        type: 'logs'
    },
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'type', text: 'Type', flex: 1 },
        { dataIndex: 'message', text: 'Message' },
        { dataIndex: 'time', text: 'time', flex: 1 },
    ],
    features: [{
        ftype: "grouping",
    }],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'MULTI'
    },
    tbar:[
        {
            text:'Add Log',
            handler:'onAddLog'
        },
        {
            text: 'View Log',
            handler: 'onViewLog',
            bind:{
                disabled: '{!loggrid.selection}'
            }
        }
    ]
})