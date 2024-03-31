Ext.define('MyDashboard.view.login.LoginView', {
    extend: "Ext.window.Window",
    xtype: 'loginview',
    requires: ["MyDashboard.view.login.LoginController", "Ext.form.Panel"],
    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,
    draggable: false,
    resizable: false,
    layout: 'fit',
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

