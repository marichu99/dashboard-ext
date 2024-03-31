/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("MyDashboard.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "MyDashboard.view.main.MainController",
    "MyDashboard.view.main.MainModel",
    "MyDashboard.view.main.List",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "{name}",
      },
      flex: 0,
    },
    iconCls: "fa-th-list",
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  responsiveConfig: {
    tall: {
      headerPosition: "top",
    },
    wide: {
      headerPosition: "left",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: "Home",
      iconCls: "fa-home",
      // The following grid shares a store with the classic version's grid as well!
      items: [
        {
          xtype: "mainlist",
        },
      ],
    },
    {
      title: "Requests",
      iconCls: "fa-home",
      // The following grid shares a store with the classic version's grid as well!
      items: [
        {
          xtype: "toppanel",
        },
      ],
    },
    {
      title: "Users",
      iconCls: "fa-user",
      bind: {
        html: "{loremIpsum}",
      },
    },
    {
      title: "Logs",
      iconCls: "fa-users",
      items: [
        {
          xtype: "loggrid",
        },
      ],
    },
    {
      title: "Login",
      iconCls: "fa-users",
      items: [
        {
          xtype: "loginview",
        },
      ],
    },


      {
        title:"Email",
        iconCls: "fa-users",
        items: [
          {
              xtype: 'messages-MessageGrid', // Keep it as is
              region: 'center' // Keep it as is
          }
      ]
      },
  
  
    {
      title: "Settings",
      iconCls: "fa-cog",
      bind: {
        html: "{loremIpsum}",
      },
    },
  ],
});
