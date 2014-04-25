/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.SelectionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.SelectionWindow',
    requires: ['CM.view.EntityPanel','CM.LogUtil'],

    layout: {
        type: 'vbox',
        align:'stretch'
    },
    autoScroll:true,
    modal:true,
    padding: 6,

    initComponent: function () {
        var name = this.params.name,
            table = this.params.table,
            createEntityWindow = this.params.entityEditorWindowProducer,
            createRecord = this.params.recordFactory,
            me = this;

        console.log('create SelectionWindow, name='+name);
        this.name = name;
        this.items = [Ext.create('CM.view.EntityPanel',{
            collapsible: false,
            collapsed: false,

            params:{
                table: table,
                createEntityWindow: createEntityWindow,
                createRecord: createRecord
            }
        })];

        this.buttons = [
            {
                xtype:'button',
                text:'Select',
                action: name+'.save',
                handler: function()
                {
                    console.log('firing entitySelection event...');
                    me.fireEvent('entitySelection', window, record);
                    me.hide();
                }
            },
            {
                xtype:'button',
                text:'Отменить',
                action: name+'.cancel',
                handler: function()
                {
                    me.hide();
                }
            }
        ];

        this.addEvents('entitySelection');

        this.callParent(arguments);
    },

    setCurrentSelection: function(currentSelection)
    {
        console.log('setCurrentSelector, currentRecord:');
        CM.LogUtil.logRecord(currentSelection);
    }

});
