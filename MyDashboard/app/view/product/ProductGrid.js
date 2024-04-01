Ext.define("MyDashboard.view.product.ProductGrid", {
  extend: "Ext.grid.Panel",
  xtype: "productsgridview",
  title: "Products",
  controller: "productviewcontroller",

  store: {
    type: "products",
  },
  //   viewModel: {
  //     type: "productviewmodel",
  //   },
  height: 600,
  plugins: {
    cellediting: {
      clicksToEdit: 2,
    },
  },
  selModel: {
    selType: "checkboxmodel",
    mode: "SINGLE",
  },

  tbar: {
    overflowHandler: "menu",
    items: [
      {
        text: "Show Product Details",
        handler: "onShowProductDetails",
        bind: {
          disabled: "{!productsgridview.selection}",
        },
      },
    ],
  },
  columns: [
    {
      text: "Product Name",
      dataIndex: "name",
      flex: 1,
    },
    { text: "Product Price", dataIndex: "price", flex: 1 },
    { text: "Product Category", dataIndex: "category", flex: 1 },
    { text: "Product Quantity", dataIndex: "quantity", flex: 1 },
    {
      text: "Actions",
      xtype: 'widgetcolumn',
      widget: {
        xtype: 'button',
        text: 'Show Details',
        handler: 'onShowProductDetails'
      }
    }
  ],
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  viewConfig: {
    scrollable: true,
  },
  listeners: {
    cellclick: "onProductGridCellClick",
  },
  
});
