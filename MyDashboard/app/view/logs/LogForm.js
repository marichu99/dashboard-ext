Ext.define("MyDashboard.view.logs.LogForm", {
  extend: "Ext.window.Window",
  xtype: "logformwindow",
  controller: "logformcontroller",
  title: "Add log",
  height: 350,
  width: 520,
  autoShow: true,
  closable: true,
  modal: true,
  items: [
    {
      xtype: "form",
      reference: "logform",
      itemId: "logform",
      jsonSubmit: true,
      bodyPadding: 10,
      modelValidation: true,
      layout: "form",
      items: [
        {
          xtype: "combobox",
          fieldLabel: "Log Type",
          name: "type",
          emptyText: "Select LogType",
          store: ["Debug", "Error", "Info-log", "Warning"],
          anchor: "90%",
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Log Message",
          name: "message",
          emptyText: "log message",
        },
        {
          allowBlank: true,
          xtype: "datefield",
          fieldLabel: "Log Time",
          name: "time",
          emptyText: "log time",
        },
      ],
    },
  ],
  buttons: [
    {
      text: "Clear",
      handler: "onClearClick",
    },
    {
      text: "Save",
      handler: "onLoginClick",
    },
  ],
});
