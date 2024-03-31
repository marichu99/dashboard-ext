Ext.define('MyDashboard.view.requests.RequestsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.requestsviewmodel',
    stores: {
        requests: {
            type: 'requests',
            autoLoad: true
        }
    },
    data: {
        startDate: null,
        endDate: null
    },
    formulas: {
        filteredRequests: function (get) {
            const requestsStore = Ext.ComponentQuery.query('requestgridview')[0].getStore();            
            var requests = get('requests.data.items'),
                startDate = get('startDate'),
                endDate = get('endDate');
        
            if (!Array.isArray(requests) || !startDate || !endDate) {
                console.error('Invalid requests data or missing startDate/endDate'); // Log an error if requests is not an array or startDate/endDate is missing
                return requests; // Return requests as is
            }

            requestsStore.filterBy(function(record) {
                const date = new Date(record.get('date'));
                return date >= startDate && date <= endDate;
            });
        
            // return requests.filter(constructor => {
            //     const date = new Date(constructor.data.date);
            //     console.log(date >= startDate && date <= endDate)
            //     return date >= startDate && date <= endDate;
            // });
        }
        
        
    }
});