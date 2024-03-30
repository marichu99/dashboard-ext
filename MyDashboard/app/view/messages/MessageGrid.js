Ext.define('MyDahboard.view.messages.MessageGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.messages-MessageGrid',

    viewConfig: {
        getRowClass: function(messageRecord) {
            var cls = [];
            if (messageRecord.get('unread')) {
                cls.push('unread');
            }
            return cls.join('');
        }
    },
    


    columns: [
        {
            dataIndex: 'fullName',
            minWidth: 250,
            header: false, // Keep it as is
            tdCls: 'full-name' // Keep it as is
        },
        {
            dataIndex: 'subject',
            flex: 1,
            header: false // Keep it as is
        },
        {
            xtype: 'datecolumn',
            dataIndex: 'date',
            header: 'Received', // Keep it as is
            width: 100,
            header: false, // Keep it as is
            align: 'end', // Keep it as is
            format: 'j M \'y' // Keep it as is
        }
    ]
    
});
