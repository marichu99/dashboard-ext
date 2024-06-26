Ext.define("MyDashboard.view.requests.RequestGridView", {
  extend: "Ext.grid.Panel",
  xtype: "requestgridview",
  title: "Requests",
  controller: "requestviewcontroller",

  store: {
    type: "requests",
  },
  viewModel: {
    type: "requestsviewmodel",
  },
  height: 600,
  plugins: {
    rowediting: {
      clicksToEdit: 3,
    },
  },
  selModel: {
    selType: "checkboxmodel",
    mode: "MULTI",
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
        listeners: {
          click: "onFilterClick",
        },
      },
      {
        text: "Add request",
        xtype: "button",
        iconCls: "fas fa-plus",
        listeners: {
          click: "onAddRequestClicked",
        },
      },
      {
        text: "Update Request",
        handler: "onUpdateRequest",
        bind: {
          disabled: "{!requestgridview.selection}",
        },
      },
      {
        text: "Delete Request",
        handler: "onDeleteProduct",
        bind: {
          disabled: "{!requestgridview.selection}",
        },
      },
      "->",
      {
        text: "Show Logs",
        handler: "onShowLogs",
        bind: {
          disabled: "{!requestgridview.selection}",
        },
      },
    ],
  },
  columns: [
    { text: "Request ID", dataIndex: "_id", flex: 1 },
    { text: "Request Name", dataIndex: "name", flex: 1 },
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
      renderer: function (value) {
        return Ext.String.format(
          '<a href="{0}" target="_blank">{1}</a>',
          value, // URL
          value // Display text (URL)
        );
      },
    },
  ],
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  viewConfig: {
    scrollable: true,
  },
  listeners: {
    // cellclick: "onLogGridCellClick",
    celldblclick: "onLogGridCellDblClick",
    cellcontextmenu: "onLogGridCellContextMenu",
    selectLog: "onSelectLog",
    //cellcontextmenu:'onRequestGridCellContextMenu',
    selecttoppanel: "onSelectTopPanel",
  },
});
