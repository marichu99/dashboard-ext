Ext.define('MyDashboard.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        
        /* var form = this.getView().getForm();
        if (form.isValid()) {
            Ext.Msg.alert('Login', 'Login button clicked');
        } */

        var form = this.getView().getForm();
        if (form.isValid()) {
            // Retrieve form values
            var values = form.getValues();

            // Display form values in an alert
            Ext.Msg.alert('Login Details', 
                'Username: ' + values.username + '<br>' +
                'Email: ' + values.email + '<br>' +
                'Password: ' + values.password
            );
        }
    },

   // LoginController.js
    onRegisterButtonClick: function() {
        var registrationView = Ext.create('MyDashboard.view.register.RegisterView');
        registrationView.show();
    }
});
