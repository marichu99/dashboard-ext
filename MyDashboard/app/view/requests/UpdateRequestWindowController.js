Ext.define("MyDashboard.view.logs.UpdateRequestWindowController", {
    extend: "Ext.app.ViewController",
    alias: "controller.updaterequestcontroller",
  
    onSaveUpdateLog: function () {
      var form = this.getView().down("form");
      var values = form.getValues();
      var id = Ext.Object.getValues(values)[0];
  
  
  
      var url = "http://localhost:3000/requests/"+id;
      console.log("The values is ", values);
      console.log(id)
      if (form.isValid()) {      
  
        Ext.Ajax.request({
          url: url,
          method: "PUT", // Using PUT method for updating
          jsonData: values,
          headers: {
            "Content-Type": "application/json",
          },
          jsonData: values,
          success: function (response) {
            var responseData = Ext.decode(response.responseText);
            if (responseData.success) {
              Ext.Msg.alert("Success", "Requests updated successfully!");
            } else {
              Ext.Msg.alert(
                "Error",
                responseData.msg || "Failed to update Requests."
              );
            }
          },
          failure: function (response) {
            Ext.Msg.alert("Error", "Failed to update Requests.");
          },
        });
        this.getView().close(); // Close the window after sending the request
      }
    },
  
    onCancelUpdateProduct: function () {
      this.getView().close();
    },
  });
  