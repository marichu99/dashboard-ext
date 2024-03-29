Ext.define('MyDashboard.view.login.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'loginview',
    title: 'Login Page',
    controller: 'login', 
    width: 400,
    bodyPadding: 20,
    layout: 'center', // Center the form on the page
    items: {
        xtype: 'form', // Corrected xtype to 'form'
        reference: 'form', // Added reference for easier access in the controller
        layout: {
            type: 'vbox',
            align: 'center'
        },
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
            allowBlank: false
        }]
    },
    buttons: [{
        text: 'Login',
        listeners: {
            click: 'onLoginClick'
        }
      /*   handler: 'onLoginClick' */
    }, {
        text: 'Signup',
        listeners: {
            click: 'onRegisterButtonClick'
        }
        /* handler: 'onRegisterButtonClick' */
    }]
});

