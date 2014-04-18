/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.ServiceWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ServiceWindow',

    title: 'Service',
    layout: {
        type: 'vbox',
        align:'stretch'
    },
    autoShow: true,
    autoScroll:true,
    modal:true,

    width: 600,
    padding: 6,

    initComponent: function() {
        this.items = [
        {
            xtype: 'form',
            padding: 6,
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            items: [{
                xtype: 'textfield',
                padding: 2,
                name : 'fullName',
                fieldLabel: 'Full Name'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'shortName',
                fieldLabel: 'Short Name'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'price',
                fieldLabel: 'Price'
            }]
        }];

        this.buttons = [{
                xtype:'button',
                text: 'Очистить',
                scope: this,
                action: 'clear'
            },
            {
                xtype:'button',
                text:'Сохранить',
                action: 'save'
            },
            {
                xtype:'button',
                text:'Отменить',
                action: 'cancel'
            }
        ];

        this.callParent(arguments);
    }
});
