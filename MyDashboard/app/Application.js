/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define("MyDashboard.Application", {
  extend: "Ext.app.Application",

  name: "MyDashboard",

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

<<<<<<< HEAD
        defaultToken: 'home',
        listen: {
          global: {
            unmatchedroute: 'onUnmatchedRoute'
          }
=======
  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
  launch: function (profile) {
    var navView = Ext.create("Ext.NavigationView", {
      items: [
        {
          xtype: "loginview",
>>>>>>> 592afba... add ajax request to the login and signup views
        },
      ],
    });
    Ext.Viewport.setActiveItem(navView);
  },

  //  defaultToken: 'request',
  //   listen: {
  //     global: {
  //       unmatchedroute: 'onUnmatchedRoute'
  //     }
  //   },

<<<<<<< HEAD
        onUnmatchedRoute: function (token) {
          Ext.Msg.show({
            title: 'Failure',
            msg: 'Unknown path: /' + token,
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.ERROR
          });
          } 
=======
  //   onUnmatchedRoute: function (token) {
  //     Ext.Msg.show({
  //       title: 'Failure',
  //       msg: 'Unknown path: /' + token,
  //       buttons: Ext.Msg.OK,
  //       icon: Ext.Msg.ERROR
  //     });
  //     }
>>>>>>> 592afba... add ajax request to the login and signup views
});
