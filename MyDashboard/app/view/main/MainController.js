/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyDashboard.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes:{
        'request':'onRequestRoute',
        'toppanel|loggrid': {
            action: 'onRoute',
            before: 'onBeforeRoute'
        },
        'requests/:id': {
            action: 'onRequestSelect',
            before: 'onBeforeRequestSelect',
            conditions: {
                ':id': '([0-9]+)'
            }
        },
    },

    onRequestSelect:function(id){
        //fire an event to select the record on the user grid
        this.getUserGrid().fireEvent('selectuser',id)
    },
    onBeforeRequestSelect: function (id, action){
        var me = this,
            hash = 'users',
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);

        //get reference to grid
        let grid = this.getUserGrid();

        //get store
        let store = grid.getStore()
        //find record with the id
        let record = store.findRecord('_id', id);
        if(record){
            action.resume()

        }else{
            action.stop()
        }


    }
,
    onRequestRoute:function(){
        let mainPanel = this.getMainPanel();
        if(mainPanel){
            mainPanel.setActiveTab(0)
        }
    },

    getRequestGrid: function () {
        return Ext.ComponentQuery.query('usergrid')[0];
    },
    onRoute: function () {
        var me = this,
            hash = Ext.util.History.getToken(),
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);
},
onBeforeRoute: function (action) {
    var hash = Ext.util.History.getToken();

//TODO: Make Ajax request to the server
//TODO: Check if the user has permissions to navigate to this path
//TODO: on success => action.resume()
//TODO: on failure => action.stop()
     var hasAccessToUsers = localStorage.getItem("hasAccessToUsers");
                if (hasAccessToUsers) {
                    action.resume()
                } else {
                    Ext.Msg.show({
                        title: 'Failure',
                        msg: 'You do not have permission to access: /' + hash,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR
                    });
                    action.stop()
                }
    },
    locateMenuItem: function (mainMenu, className) {
        let rootNode = mainMenu.getRootNode();
        let record = rootNode.findChild('className', className, true);
        this.openTab(record)
        mainMenu.getSelectionModel().select(record)
    },

        onItemSelected: function (sender, record) {
            Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        },

        onConfirm: function (choice) {
            if (choice === 'yes') {
                //
            }
        }
    });
