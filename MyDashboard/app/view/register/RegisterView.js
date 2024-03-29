Ext.define('MyDashboard.view.register.RegisterView', {
    extend: 'Ext.window.Window',
    xtype: 'registerview',
    title: 'Registration Form',
    width: 400,
    height: 350, // Increased height to accommodate the confirm password field
    layout: 'fit',
    items: [{
        xtype: 'form', // Form added around the items
        reference: 'registrationForm',
        bodyPadding: 20,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Username',
            name: 'username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            allowBlank: false,
            vtype: 'email'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Password',
            name: 'password',
            inputType: 'password',
            allowBlank: false,
            itemId: 'passwordField' // Add itemId for referencing in validation
        }, {
            xtype: 'textfield',
            fieldLabel: 'Confirm Password',
            name: 'confirmPassword',
            inputType: 'password',
            allowBlank: false,
            validator: function(value) {
                var password = this.up('form').down('#passwordField').getValue();
                if (value !== password) {
                    return 'Passwords do not match';
                }
                return true;
            }
        }],
        buttons: [{
            text: 'Register',
            listeners: {
                click: 'onRegisterButtonClick'
            }
            /* handler: 'onRegisterButtonClick' */
        }]
    }]
});
