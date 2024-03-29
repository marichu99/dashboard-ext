Ext.define('MyDashboard.view.registrer.RegisterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',

    onRegisterButtonClick: function() {
        var form = this.lookupReference('registerForm').getForm();
        if (form.isValid()) {
            Ext.Msg.alert('Register', 'Registration button clicked');
            // Add logic to handle registration process
        }
    }
});