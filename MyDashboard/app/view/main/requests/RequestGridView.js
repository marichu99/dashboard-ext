Ext.define("MyDashboard.view.requests.RequestGridView", {
  extend: "Ext.grid.Panel",
  xtype: "requestgridview",
  title: "Requests",
  controller:"requestviewcontroller",

  store: {
    type: "requests",
  },
  viewModel: {
    type: "requestsviewmodel",
  },
  tbar: {
    overflowHandler: "menu",
    items: [
      {
        fieldLabel: "Start Date",
        xtype: "datefield",
        reference: "startDate",
        bind: "{startDate}",
      },
      {
        xtype: "datefield",
        fieldLabel: "End Date",
        reference: "endDate",
        bind: "{endDate}",
      },
      {
        xtype: "button",
        text: "Filter",
        handler: "onFilterClick",
      },
    ],
  },
  columns: [
    {
      text: "Date",
      dataIndex: "date",
      flex: 1,
      xtype: "datecolumn",
      format: "Y-m-d",
    },
    { text: "IP Address", dataIndex: "ipAddress", flex: 1 },
    {
      text: "Resource URL",
      dataIndex: "resourceUrl",
      flex: 1,
    },
  ],
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  viewConfig: {
      scrollable: true,
    },
});
