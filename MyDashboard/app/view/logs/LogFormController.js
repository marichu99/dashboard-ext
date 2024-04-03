Ext.define("MyDashboard.view.logs.LogFormController", {
  extend: "Ext.app.ViewController",
  alias: "controller.logformcontroller",

  onLoginClick: function () {
    let window = this.getView();
    console.log(window);
    let references = window.getReferences();

    let form = references["logform"].getForm();
    values = form.getValues();
    console.log(values);
    //  get the login window
    if (form.isValid()) {
      console.log("The form is valid");
      Ext.Ajax.request({
        url: "http://localhost:3000/logs",
        method: "POST",

        jsonData: values,
        success: function (response) {
          var result = Ext.decode(response.responseText);

          if (result.success) {
            Ext.Msg.alert("Success logs added successfully");
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
