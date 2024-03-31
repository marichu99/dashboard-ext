Ext.define("MyDashboard.view.login.LoginController", {
  extend: "Ext.app.ViewController",
  alias: "controller.login",

  onLoginClick: function () {
    var me = this,
      form = me.getView().down("form"),
      values = form.getValues();

    if (form.isValid()) {
      Ext.Ajax.request({
        url: "http://localhost:6006/api/users/login",
        method: "POST",
        
        jsonData: values,
        success: function (response) {
          var result = Ext.decode(response.responseText);

          if (result.success) {
            Ext.Msg.alert("Success", result.message);
            me.redirectTo("main");
          } else {
            Ext.Msg.alert("Error", result.message);
          }
        },
        failure: function (response) {
          Ext.Msg.alert("Error", "Failed to log in. Please try again.");
        },
      });
    }
  },

  // LoginController.js
  onRegisterButtonClick: function () {
    var registrationView = Ext.create("MyDashboard.view.register.RegisterView");
    registrationView.show();
  },
});
