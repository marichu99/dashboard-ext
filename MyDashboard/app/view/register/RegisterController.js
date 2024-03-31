Ext.define("MyDashboard.view.registrer.RegisterController", {
  extend: "Ext.app.ViewController",
  alias: "controller.register",

  onRegisterButtonClick: function () {
    var me = this,
      form = me.getView().down("form"),
      values = form.getValues();
    if (form.isValid()) {
      Ext.Ajax.request({
        url: "http://localhost:6006/api/users/signup",
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
});
