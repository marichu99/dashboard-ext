/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyDashboard.Application',

    name: 'MyDashboard',

    requires: [
        // This will automatically load all classes in the MyDashboard namespace
        // so that application classes do not need to require each other.
        'MyDashboard.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyDashboard.view.main.Main'
});
