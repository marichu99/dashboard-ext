// RegistrationModel.js
Ext.define('MyDashboard.model.Register', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'username', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'password', type: 'string' }
    ],
    validators: {
        passwordMatch: [
            { type: 'presence', message: 'This field is required' },
            { type: 'format', matcher: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, message: 'Invalid password format' }
        ]
    }
});
