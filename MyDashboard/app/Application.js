/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyDashboard.Application', {
    extend: 'Ext.app.Application',

    name: 'MyDashboard',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    // launch:function(profile){
    //     var loggedIn;
    //     loggedIn = localStorage.getItem("MsAppLoggedIn");
    //     console.log(loggedIn);
    //     // Ext.widget(loggedIn ? 'app-main' : 'login');
    //     /*Ext.create({
    //       xtype: loggedIn ? 'app-main' : 'login'
    //     })*/
    //      Ext.widget(loggedIn ? 'app-main' : 'login');
    //   },

        defaultToken: 'home',
        listen: {
          global: {
            unmatchedroute: 'onUnmatchedRoute'
          }
        },

        onUnmatchedRoute: function (token) {
          Ext.Msg.show({
            title: 'Failure',
            msg: 'Unknown path: /' + token,
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.ERROR
          });
          } 
});
