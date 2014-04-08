Ext.application({
    extend: 'Ext.app.Application',

    name: 'CM',
    appFolder: 'resources/CmApp',

    requires: [
        'Ext.container.Viewport',
        'CM.support.Shared',
        'CM.auth.User',
        'CM.store.Organization'
    ],

    views: ['CM.view.DocumentsMain',
            'CM.view.DictionariesMain'],

    controllers: ['CM.controller.Organization'
    ],

    config: {
        user: null
    },

    launch: function () {
        var user = Config.user;

        this.setUser(user);

        CM.support.Shared.showLoadingMask('Загрузка');
        function onItemClicked(item) {
            var controlButton = Ext.getCmp('button.control');
            console.log('controlButton.text='+controlButton.text);
            var mainPanel = Ext.getCmp('mainPanel');
            var layout = mainPanel.getLayout();
            if(item.id === 'menu.dictionaries')
            {
                layout.setActiveItem(1);
                controlButton.setText('Dictionaries');
            }
            else if(item.id === 'menu.documents')
            {
                layout.setActiveItem(0);
                controlButton.setText('Documents');
            }
            console.log('controlButton.text=' + controlButton.text);
        }
        var controlMenu = Ext.create('Ext.menu.Menu', {
            id: 'controlMenu',
            items:[
                {text: 'Documents',
                    id:'menu.documents',
                    handler: onItemClicked},
                {text:'Dictionaries',
                    id:'menu.dictionaries',
                    handler: onItemClicked}]
        });

        var mainPanel = Ext.create('Ext.panel.Panel', {
            padding:10,
            layout: 'card',
            id:'mainPanel',

            tbar: ['->', {
                xtype: 'button',
                text: 'Documents',
                id: 'button.control',
                menu: controlMenu}],

            items: [
                {
                    xtype: 'DocumentsMain',
                    width: '100%',
                    border: "10 5 10 5"
                },
                {
                    xtype: 'DictionariesMain',
                    width: '100%',
                    border: "10 5 10 5"
                }
            ]
        });

        Ext.create('Ext.container.Viewport', {
            renderTo: Ext.getBody(),
            layout:   'fit',
            padding:  '10 200 100 200',

            items: [mainPanel]
        });
    }
});