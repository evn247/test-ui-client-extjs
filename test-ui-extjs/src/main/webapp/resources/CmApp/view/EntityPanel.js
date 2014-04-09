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

    initComponent: function () {
        var prefix = this.params.table.name;
        var table = this.params.table;
        table.getSelectionModel().on('selectionchange', function(model)
        {
            console.log('selectionchange event handler');
            var button = table.up('panel').down('button[name='+prefix+'.delete]');
            console.log('button='+button);
            button.setDisabled(!model.hasSelection());
        });
        console.log('create EntityPanel, prefix='+prefix);
        this.title = this.params.title;

        this.tbar = [
            {
                xtype: 'button',
                text: 'Create',
                name: prefix+'.create',
                width: 80
            },
            {
                xtype: 'button',
                text: 'Delete',
                disabled: true,
                name: prefix+'.delete',
                width: 80,
                handler: function(button)
                {
                    console.log('handle.delete.button');
                    var table = button.up('panel').down('grid[name='+prefix+']');
                    var selectionModel = table.getSelectionModel();
                    if(selectionModel.hasSelection())
                    {
                        table.store.remove(selectionModel.getSelection());
                    }
                }
            }
        ];

        this.items = [table];

        this.callParent(arguments);
    }

});
