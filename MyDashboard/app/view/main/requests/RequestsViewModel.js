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
        // filteredRequests: function (get) {
        //     var requests = get('requests.data'),
        //         startDate = get('startDate'),
        //         endDate = get('endDate');
    
        //     if (!startDate || !endDate) {
        //         return requests;
        //     }
    
        //     return Ext.Array.filter(requests, function (request) {
        //         var date = new Date(request.date);
        //         return date >= startDate && date <= endDate;
        //     });
        // }
        filteredRequests: function (get) {
            var requests = get('requests.data.items'),
                startDate = get('startDate'),
                endDate = get('endDate');
        
            console.log('Requests:', requests); // Log requests variable
            console.log(typeof(requests.items));  // Returns "object"
            console.log('StartDate:', startDate); // Log startDate variable
            console.log('EndDate:', endDate); // Log endDate variable
        
            if (!Array.isArray(requests) || !startDate || !endDate) {
                console.error('Invalid requests data or missing startDate/endDate'); // Log an error if requests is not an array or startDate/endDate is missing
                return requests; // Return requests as is
            }
        
            return requests.filter((index),function (request) { // Use filter directly on requests
                var date = new Date(request[i].data.date);
                return date >= startDate && date <= endDate;
            });
        }
        
    }
});