/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define("MyDashboard.Application", {
  extend: "Ext.app.Application",

  requires: ["MyDashboard.view.login.LoginView", "MyDashboard.view.main.Main"],
  name: "MyDashboard",

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

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
  launch: function () {
    
    var loggedIn;
    loggedIn = localStorage.getItem("appLoggedIn");
    console.log("The logged in value is ", loggedIn);

    Ext.widget(loggedIn ? "app-main" : "loginview");
  },

  //  defaultToken: 'request',
  //   listen: {
  //     global: {
  //       unmatchedroute: 'onUnmatchedRoute'
  //     }
  //   },

  //   onUnmatchedRoute: function (token) {
  //     Ext.Msg.show({
  //       title: 'Failure',
  //       msg: 'Unknown path: /' + token,
  //       buttons: Ext.Msg.OK,
  //       icon: Ext.Msg.ERROR
  //     });
  //     }
});
