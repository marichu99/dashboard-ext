Ext.define("MyDashboard.view.requests.RequestsFormWindowController", {
  extend: "Ext.app.ViewController",
  alias: "controller.requestformcontroller",
  init: function () {},
  onClearClick: function (btn, e, eOpts) {
    // get form
    // reset
  },
  onSaveClick: function (btn, e, eOpts) {
    let window = this.getView();
    console.log(window);
    let references = window.getReferences();

    let form = references["requestform"].getForm();
    values = form.getValues();
    console.log(values);

    if (form.isValid()) {
      Ext.Ajax.request({
        url: "http://localhost:3000/requests",
        method: "POST",

        jsonData: values,
        success: function (response) {
          var result = Ext.decode(response.responseText);

          if (result.success) {
            Ext.Msg.alert("Success: Request Saved Successfully");
          } else {
            Ext.Msg.alert("Error", result.message);
          }
        },
        failure: function (response) {
          Ext.Msg.alert("Error", "Failed to save Requests. Please try again.");
        },
      });
    } else {
      Ext.Msg.alert("Error form is not valid");
    }
  },
});
