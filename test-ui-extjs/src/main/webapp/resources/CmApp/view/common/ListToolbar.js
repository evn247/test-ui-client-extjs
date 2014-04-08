Ext.define('CM.view.common.ListToolbar', {
    requires: [
        'CM.support.components.DefaultButton',
        'CM.view.common.ListToolbarButtons'
    ],

    visibleButtons: {},

    extend: 'Ext.container.Container',
    alias: 'widget.ListToolbar',

    searchOnReset: true,

    doReset: function () {
        var form = this.down('form[name=search]');
        if (form.isDirty()) {
            this.resetCallback(form);
            if (this.searchOnReset) {
                this.searchCallback(form);
            }
        }
    },

    resetCallback: function (form) {
        form.getForm().reset();
    },

    searchCallback: function (form) {
        var button = form.down('button[name=search]');
        button.fireEvent('click', button);
    },

    initComponent: function () {
        var me = this;

        this.layout = {
            type: 'hbox',
            align: 'middle'
        };

        this.items = [
            {
                xtype: 'ListToolbarButtons',
                visibleButtons: this.visibleButtons
            },

            {
                xtype: 'container',
                name: 'extra',

                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'middle'
                },

                flex: 1
            },

            {
                xtype: 'form',
                cls: 'no-background',
                border: false,
                name: 'search',

                hidden: !me.visibleButtons['search'],

                layout: {
                    type: 'hbox',
                    pack: 'end',
                    align: 'middle'
                },

                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Поиск:',
                        labelAlign: 'right',
                        name: 'content',
                        emptyText: 'контекстный поиск',
                        width: 400
                    },
                    {
                        xtype: 'button',
                        cls: 'cm-button-default',
                        text: 'Поиск',
                        name: 'search',
                        margin: '0 10 0 20'
                    },
                    {
                        xtype: 'button',
                        cls: 'cm-button-default',
                        name: 'reset',
                        text: 'Сбросить',
                        margin: '0 0 0 0'
                        ,
                        handler: function (button) {
                            button.up('ListToolbar').doReset();
                        }
                    }

                    /*{
                        xtype: 'splitbutton',
                        cls: 'nsi-button-default',
                        text: 'Поиск',
                        name: 'search',
                        margin: '0 15 0 20',

                        menu: new Ext.menu.Menu({
                            items: [
                                {
                                    name: 'reset',
                                    text: 'Сбросить', handler: function (menuItem) {
                                    menuItem.up('ListToolbar').doReset();
                                }}
                            ]
                        })
                    }*/
                ]
            }


        ];

        this.callParent(arguments);
    }

});
