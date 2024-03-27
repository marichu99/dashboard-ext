Ext.define('MyDashboard.view.requests.RequestViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.requestviewcontroller',
    stores: ["requests"],
    onFilterClick: function () {
        var viewModel = this.getViewModel(),
            startDate = viewModel.get('startDate'),
            endDate = viewModel.get('endDate');

        if (!startDate || !endDate) {
            Ext.Msg.alert('Error', 'Please enter both start and end dates.');
            return;
        }

        // Fetch logs from server or database based on the selected dates
        // For demonstration purposes, we will use a static array of logs
        var logs = [{
            date: '2022-01-01',
            ipAddress: '192.168.1.1',
            resourceUrl: '/resource1'
        }, {
            date: '2022-01-02',
            ipAddress: '192.168.1.2',
            resourceUrl: '/resource2'
        }];

        viewModel.getStore('requests').loadData(requests);
    }
});