var Url = 'http://10.0.12.55:8080/nsi/';

var dictRecId = 0;

var baseHeight = screen.height * 0.65;

Ext.override(Ext.Window, {
    closeAction: 'hide'
})

//  Ext.override(Ext.menu.Menu, {
//      closeAction: 'hide'
//  })


Ext.application({
    requires: [
        'Ext.container.Viewport', 'Ext.tab.Panel'
    ],
    name: 'NSI',
    appFolder: 'resources/nsi',
//    views: ['dictPanel','dictFilter','dictList'],
//    models:['dictModel'],
//    stores:['dictStore'],
    controllers: ['dictCntrl', 'dictMenuCntrl', 'dictRecCntrl'],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'vbox',
            align: 'stretch',
            height: baseHeight,
            border: '0 0 0 0',
            items: [
                {
                    xtype: 'container',
                    height: 70,
                    width: '100%',
                    html: '<table style="width:100%"><tr><td style="width:55px;"><img src="resources/images/logo_mini.png"/></td><td><h1 style="margin-left:10px; margin-top:20px;">НСИ</h1></td></tr></table>'
                },
                {
                    xtype: 'tabpanel',
                    id: 'menuPanel',
                    //border: false,
                    width: '100%',
                    plain: true,
                    activeTab: 0,
                    items: [
                        {
                            id: 'citizenRegistryTab',
                            title: 'Справочники',
                            border: false,
                            layout: 'fit',
                            html: 'Справочники',
                            items: [
                                {
                                    xtype: 'dictPanel'
                                }
                            ]
                        },
                        {
                            id: 'applicationsTab',
                            title: 'Реестры',
                            border: false,
                            layout: 'fit',
                            html: 'Реестры'
                        }
                    ]
                }
            ]
        });
    }
})