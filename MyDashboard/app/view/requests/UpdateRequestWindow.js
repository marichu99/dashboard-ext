Ext.define("MyDashboard.view.requests.UpdateRequestWindow", {
  extend: "Ext.window.Window",
  xtype: "updaterequest",

  controller: "updaterequestcontroller",
  title: "Update Request",
  width: 400,
  height: 300,
  layout: "fit",
  modal: true,
  closable: true,

  viewModel: {
    data: {
      selectedRequest: {}, // Initialize selectedRequest data
    },
  },

  // Other configurations for the window

  items: [
    {
      xtype: "form",
      reference: "updateform",
      layout: "form",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Request ID",
          bind: "{selectedRequest._id}", // Bind to the selectedRequest data
        },
        {
          xtype: "textfield",
          fieldLabel: "Request Name",
          bind: "{selectedRequest.name}", // Bind to the selectedRequest data
        },
        {
          xtype: "textfield",
          fieldLabel: "Request Date",
          bind: "{selectedRequest.date}", // Bind to the selectedRequest data
        },
        {
          xtype: "textfield",
          fieldLabel: "Request IP",
          bind: "{selectedRequest.ipAddress}", // Bind to the selectedRequest data
        },
        {
          xtype: "textfield",
          fieldLabel: "Request URL",
          bind: "{selectedRequest.resourceUrl}", // Bind to the selectedRequest data
        },
      ],
    },
  ],

  buttons: [
    {
      text: "Save",
      handler: "onSaveUpdateLog",
    },
    {
      text: "Cancel",
      handler: "onCancelUpdateLog",
    },
  ],
});
