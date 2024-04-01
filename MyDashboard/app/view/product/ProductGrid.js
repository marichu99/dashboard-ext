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
    rowediting: {
      clicksToEdit: 1,
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
