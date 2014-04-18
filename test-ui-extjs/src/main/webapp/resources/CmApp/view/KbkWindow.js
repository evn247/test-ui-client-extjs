/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.KbkWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.KbkWindow',

    title: 'KBK',
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
                name : 'description',
                fieldLabel: 'Description'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'code',
                fieldLabel: 'Code'
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
