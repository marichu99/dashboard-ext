/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyDashboard.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes:{
        'home':'onHomeRoute',
        
        'toppanel|loggrid|loginview': {
            action: 'onRoute',
            before: 'onBeforeRoute'
        },
        'toppanel/:id': {
            action: 'onTopPanelSelect',
            before: 'onBeforeTopPanelSelect',
            conditions: {
                ':id': '([0-9]+)'
            }
        },
    },

    onTopPanelSelect:function(id){
        //fire an event to select the record on the user grid
        this.getUserGrid().fireEvent('selectuser',id)
    },
    onBeforeTopPanelSelect: function (id, action){
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
    onHomeRoute:function(){
        let mainPanel = this.getMainPanel();
        if(mainPanel){
            mainPanel.setActiveTab(0)
        }
    },
    onRoute: function () {
        var me = this,
            hash = Ext.util.History.getToken(),
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);
},
getMainList: function () {
    return Ext.ComponentQuery.query('mainlist')[0];
},
getTopPanelGrid: function () {
    return Ext.ComponentQuery.query('toppanel')[0];
},
getMainMenu: function () {
    return Ext.ComponentQuery.query('mainmenu')[0];
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
    onTabChange: function(tabPanel, newTab, oldTab) {
        var className = newTab.className;
        Ext.util.History.add(className);

    },
    openTab: function (record) {
        if (record) {
            let mainlist = this.getMainList();
            let activeTab = mainlist.items.findBy((tabItem) => tabItem.title === record.get('text'));
            if (!activeTab && record.get('leaf')) {
                //create new tab using details from the record
                activeTab = mainlist.add({
                    closable: true,
                    xtype: record.get('className'),
                    title: record.get('text'),
                    iconCls: record.get('iconCls'),
                    className: record.get('className')
                })
            }
            mainlist.setActiveTab(activeTab)
        }
    },

        onItemSelected: function (sender, record) {
            Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        },

        init: function() {
            this.listen({
                component: {
                    'mainlist': {
                        tabchange: 'onTabChange' // Listen to the tabchange event of mainlist(home)
                    }
                }
            });
        },

        onConfirm: function (choice) {
            if (choice === 'yes') {
                //
            }
        }

        
    });
