/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.SelectionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.SelectionWindow',
    requires: ['CM.view.EntityPanel','CM.LogUtil'],

    layout: 'fit',
    autoScroll:true,
    modal:true,
    padding: 6,
    width: 400,
    height:300,
    table:undefined,

    initComponent: function () {
        var name = this.params.name,
            table = this.params.table,
            createEntityWindow = this.params.entityEditorWindowProducer,
            createRecord = this.params.recordFactory,
            me = this;

        this.table = table;

        console.log('create SelectionWindow, name='+name);

        var onSelectionChange = function(model)
        {
            console.log('selectionchange event handler');
            var disabled = !model.hasSelection();
            table.up('window').down('button[name=button.select]').setDisabled(disabled);
        };

        this.name = name;
        this.items = [Ext.create('CM.view.EntityPanel',{
            collapsible: false,
            collapsed: false,

            params:{
                table: table,
                prefix: 'table.select.'+name,
                createEntityWindow: createEntityWindow,
                createRecord: createRecord
            }
        })];

        this.buttons = [
            {
                xtype:'button',
                text:'Select',
                disabled: true,
                name: 'button.select',
                handler: function()
                {
                    console.log('firing entitySelection event...');
                    var record = table.getSelectionModel().getSelection()[0];
                    console.log('record="'+record+'" class='+Ext.getDisplayName(record));
                    me.fireEvent('entitySelection', me, record);
                    me.hide();
                }
            },
            {
                xtype:'button',
                text:'Отменить',
                action: 'button.cancel',
                handler: function()
                {
                    me.hide();
                }
            }
        ];

        table.getSelectionModel().on('selectionchange', onSelectionChange);
        this.addEvents('entitySelection');

        this.callParent(arguments);
    },

    setCurrentSelection: function(selection)
    {
        console.log('setCurrentSelector, currentRecord:');
        console.log('initialSelection:');
        CM.LogUtil.logRecord(selection);
        if(selection)
        {
            this.table.getSelectionModel().select(selection);
        }
        else
        {
            this.table.getSelectionModel().deselectAll();
        }
    }

});
