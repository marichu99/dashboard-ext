Ext.define('MyDashboard.view.logs.UpdateLogWindow', {
    extend: 'Ext.window.Window',
    xtype: 'updatelog',
  
    controller:"updatelogcontroller",
    title: 'Update Log',
    width: 400,
    height: 300,
    layout: 'fit',
    modal: true,
    closable: true,

   
  viewModel: {
    data: {
      selectedLog: {} // Initialize selectedLog data
    }
  },

  // Other configurations for the window

  items: [{
    xtype: 'form',
    reference: 'updateform',
    layout: 'form',
    items: [{
      xtype: 'textfield',
      fieldLabel: 'Log ID',
      bind: '{selectedLog._id}' // Bind to the selectedLog data
    }, {
      xtype: 'textfield',
      fieldLabel: 'Log Type',
      bind: '{selectedLog.message}' // Bind to the selectedLog data
    }, {
      xtype: 'textfield',
      fieldLabel: 'Log Time',
      bind: '{selectedLog.time}' // Bind to the selectedLog data
    }]
  }],

 
  
    buttons: [{
      text: 'Save',
      handler: 'onSaveUpdateLog'
    }, {
      text: 'Cancel',
      handler: 'onCancelUpdateLog'
    }]
  });
  