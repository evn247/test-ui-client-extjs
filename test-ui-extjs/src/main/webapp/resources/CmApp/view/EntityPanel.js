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
        console.log('create EntityPanel, prefix='+prefix);
        this.title = this.params.title;

        this.tbar = [
            {
                xtype: 'button',
                text: 'Create',
                name: prefix+'.create',
                iconCls:'button-create',
                width: 80
            },
            {
                xtype: 'button',
                text: 'Delete',
                name: prefix+'.delete',
                iconCls:'button-delete',
                width: 80
            }
        ];

        this.items = [table];

        this.callParent(arguments);
    }

});
