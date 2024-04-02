Ext.define("MyDashboard.store.Menu", {
  extend: "Ext.data.TreeStore",
  alias: "store.menu",
  root: {
    text: "Root",
    expanded: true,
    children: [
      {
        text: "Requests and Logs",
        iconCls: "fa fa-database fa-lg",
        children: [
          {
            text: "Requests",
            iconCls: "fa fa-users",
            className: "toppanel",
            leaf: true,
          },
        ],
      },
      {
        text: "Products and Orders",
        iconCls: "fa fa-database fa-lg",
        children: [
          {
            text: "Products",
            iconCls: "fa fa-users",
            className: "productsgridview",
            leaf: true,
          },
          // {
          //   text: "Todos",
          //   iconCls: "fa-solid fa-list",
          //   className: "todogrid",
          //   leaf: true,
          // }, {
          //   text: "Comments",
          //   iconCls: "fa-solid fa-list",
          //   className: "commentgrid",
          //   leaf: true,
          // },
          // {
          //   text: "Albums",
          //   iconCls: "fa-images",
          //   className: "albumgrid",
          //   leaf: true,
          // },
          // {
          //   text: "Orders",
          //   iconCls: "fas fa-shopping-cart",
          //   className: "checkoutgrid",
          //   leaf: true,
          // },
        ],
      },
    ],
  },
});
