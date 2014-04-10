/**
 * User: Eduard.Napolov
 * Date: 08.04.14
 * Time: 12:01
 */
Ext.define('CM.view.EntityPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.EntityPanel',
    collapsible: true,
    collapsed: true,
    layout: 'fit',
    autoScroll:true,
    table:null,
    createEntityWindow:null,

    initComponent: function () {
        var prefix = this.params.table.name;
        var me = this;
        this.table = this.params.table;
        this.createEntityWindow = this.params.entityEditorWindowProducer;

        var onSelectionChange = function(model)
        {
            console.log('selectionchange event handler');
            var disabled = !model.hasSelection();
            me.table.up('panel').down('button[name$=delete]').setDisabled(disabled);
            me.table.up('panel').down('button[name$=edit]').setDisabled(disabled);

        };
        var updateStore = function(window, record)
        {
            console.log('updateStore called');
            me.table.store.commitChanges();
            me.table.store.resumeEvents();
        };
        var editRecord =function(record)
        {
            me.table.store.suspendEvents();
            record.beginEdit();
            var view = me.createEntityWindow();
            view.on('save', updateStore);
            view.down('form').loadRecord(record);
            view.show();
        };
        var onItemDoubleClick = function(grid, record)
        {
            console.log('itemdblclick for '+me.table.name+' record='+record);
            editRecord(record);
        };
        var onItemEditClick =function()
        {
            console.log('handle.edit.button');
            editRecord(me.table.getSelectionModel().getSelection()[0]);
        };
        var onItemCreateClick=function()
        {
            console.log('handle.create.button');
            me.createEntityWindow().show();
        };
        var onItemDeleteClick =function()
        {
            console.log('handle.delete.button');
            me.table.store.remove(me.table.getSelectionModel().getSelection());
        };


        // enable/disable button depending on selection
        this.table.getSelectionModel().on('selectionchange', onSelectionChange);
        this.table.on('itemdblclick', onItemDoubleClick);

        console.log('create EntityPanel, prefix='+prefix);
        this.title = this.params.title;

        this.tbar = [
            {
                xtype: 'button',
                text: 'Create',
                name: prefix+'.create',
                width: 80,
                handler: onItemCreateClick
            },
            {
                xtype: 'button',
                text: 'Edit',
                name: prefix+'.edit',
                disabled: true,
                width: 80,
                handler: onItemEditClick
            },
            {
                xtype: 'button',
                text: 'Delete',
                disabled: true,
                name: prefix+'.delete',
                width: 80,
                handler: onItemDeleteClick
            }
        ];

        this.items = [this.params.table];


        this.callParent(arguments);
    }
});
