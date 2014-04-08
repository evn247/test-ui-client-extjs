Ext.define('CM.view.common.ListToolbarButtons', {
    extend: 'Ext.container.Container',
    alias: 'widget.ListToolbarButtons',

    visibleButtons: {},

    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'container',
                name: 'buttons',
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'middle'
                },
                items: [
                    {
                        xtype: 'button',
                        iconAlign: 'left',
                        iconCls: 'button-add',
                        cls: 'action-button',
                        text: 'Создать',
                        name: 'create',
                        margin: '0 15 0 0',
                        hidden: !me.visibleButtons['create']
                    }
                ]
            }
        ]

        me.callParent(arguments);
    }

});
