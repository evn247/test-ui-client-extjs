/**
 * User: Eduard.Napolov
 * Date: 08.04.14
 * Time: 12:01
 */
Ext.define('CM.view.EntityPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.EntityPanel',
    requires: ['CM.LogUtil'],
    collapsible: true,
    collapsed: true,
    layout: 'fit',
    autoScroll:true,
    table:null,
    createEntityWindow:null,
    createRecord:null,

    initComponent: function () {
        var prefix = this.params.table.name;
        var me = this;
        this.table = this.params.table;
        this.createEntityWindow = this.params.entityEditorWindowProducer;
        this.createRecord = this.params.recordFactory;

        console.log('create EntityPanel, prefix='+prefix);

        var onSelectionChange = function(model)
        {
            console.log('selectionchange event handler');
            var disabled = !model.hasSelection();
            me.table.up('panel').down('button[name$=delete]').setDisabled(disabled);
            me.table.up('panel').down('button[name$=edit]').setDisabled(disabled);

        };
        var updateStore = function(window, record)
        {
            console.log('updateStore called, record:');
            CM.LogUtil.logRecord(record);

            console.log('store content before commit:');
            CM.LogUtil.logStore(me.table.store);

            if(!record.getId())
            {
                console.log('potentially new entry');

                var found = false;
                me.table.store.each(function(entry){
                    console.log('checking entry:');
                    CM.LogUtil.logRecord(entry);
                        if(entry === record){
                            console.log('entry matched record!');
                            found = true;
                        }
                });

                console.log('found='+found);
                if(!found)
                {
                    me.table.store.add(record);
                }

            }

            var changes = me.table.store.getUpdatedRecords();
            console.log('updated records:');
            CM.LogUtil.logRecords(changes);
            me.table.store.commitChanges();

            console.log('store content after commit:');
            CM.LogUtil.logStore(me.table.store);
        };
        var editRecord =function(record)
        {
            record.beginEdit();
            var view = me.createEntityWindow(record);
            view.on('save', updateStore);
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
            editRecord(me.createRecord());
        };
        var onItemDeleteClick =function()
        {
            console.log('handle.delete.button');
            me.table.store.remove(me.table.getSelectionModel().getSelection());
        };


        // enable/disable button depending on selection
        this.table.getSelectionModel().on('selectionchange', onSelectionChange);
        this.table.on('itemdblclick', onItemDoubleClick);

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
