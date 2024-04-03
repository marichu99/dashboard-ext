Ext.define("MyDashboard.view.requests.RequestsFormWindow", {
  extend: "Ext.window.Window",
  xtype: "requestformwindow",
  controller: "requestformcontroller",
  title: "Add request",
  height: 350,
  width: 520,
  autoShow: true,
  closable: true,
  modal: true,
  items: [
    {
      xtype: "form",
      reference: "requestform",
      itemId: "requestform",
      jsonSubmit: true,
      bodyPadding: 10,
      modelValidation: true,
      layout: "form",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Request Name",
          name: "name",
          emptyText: "request name",
        },

        {
          xtype: "combobox",
          fieldLabel: "Status",
          name: "status",
          emptyText: "Select Status",
          store: ["Open", "Close"],
          anchor: "90%",
        },
        {
          allowBlank: true,
          xtype: "datefield",
          fieldLabel: "Date",
          name: "date",
          emptyText: "Request Date",
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "IP Adress",
          name: "ipAddress",
          emptyText: "title",
        },

        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Resource URL",
          name: "resourceUrl",
          emptyText: "Resource URL",
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
      handler: "onSaveClick",
    },
  ],
});
