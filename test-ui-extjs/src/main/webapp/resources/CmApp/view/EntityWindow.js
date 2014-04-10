/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.EntityWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.EntityWindow',
    requires: ['CM.view.EntityPanel'],

    layout: {
        type: 'vbox',
        align:'stretch'
    },
    autoScroll:true,
    modal:true,
    padding: 6,

    initComponent: function () {
        var name = this.params.name,
            form = this.params.form,
            tables = this.params.tables;

        console.log('create EntityWindow, name='+name);
        this.name = name;

        this.tbar = [
            {
                xtype: 'button',
                text: 'Create',
                name: name+'.create',
                width: 80
            },
            {
                xtype: 'button',
                text: 'Delete',
                name: name+'.delete',
                width: 80
            }
        ];

        this.items = [form];
        if(tables)
        {
            this.items.push.apply(this.items, tables);
        }


        this.buttons = [
            {
                xtype:'button',
                text: 'Очистить',
                scope: this,
                action: name+'.clear'
            },
            {
                xtype:'button',
                text:'Сохранить',
                action: name+'.save'
            },
            {
                xtype:'button',
                text:'Отменить',
                action: name+'.cancel'
            }
        ];

        this.callParent(arguments);
    }
});
