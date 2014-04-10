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
            tables = this.params.tables,
            me = this;

        console.log('create EntityWindow, name='+name);
        this.name = name;
        this.items = [form];
        if(tables)
        {
            this.items.push.apply(this.items, tables);
        }

        var findStores = function(button)
        {
            var stores = [];
            var tables=button.up('window').down('grid');
            if(tables)
            {
                for(var i = 0; i < tables.length; i++)
                {
                    stores.push(tables.store);
                }
            }
            return stores;
        };

        var resetWindow = function(button)
        {
            me.down('form').reset();
            var tables=me.down('grid');
            if(tables)
            {
                for(var i = 0; i < tables.length; i++)
                {
                    tables.store.removeAll();
                }
            }
        };

        this.buttons = [
            {
                xtype:'button',
                text: 'Очистить',
                scope: this,
                action: name+'.clear',
                handler: resetWindow
            },
            {
                xtype:'button',
                text:'Сохранить',
                action: name+'.save',
                handler: function(button)
                {
                    var record = me.down('form').updateRecord().getRecord();
                    console.log('record.number before endEdit='+record.get('number'));
                    record.endEdit();
                    console.log('record.number after endEdit='+record.get('number'));
                    console.log('firing save event...');
                    me.fireEvent('save', window, record, findStores(button));
                    me.hide();
                }
            },
            {
                xtype:'button',
                text:'Отменить',
                action: name+'.cancel',
                handler: function(button)
                {
                    var record = me.down('form').getRecord();
                    record.cancelEdit();
                    me.hide();
                }
            }
        ];

        this.addEvents('save','cancel');

        this.callParent(arguments);
    }

});
