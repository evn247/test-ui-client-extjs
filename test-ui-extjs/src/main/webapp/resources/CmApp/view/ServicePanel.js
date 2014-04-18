/**
 * User: Eduard.Napolov
 * Date: 02.04.14
 * Time: 12:08
 */
Ext.define('CM.view.ServicePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ServicePanel',
    collapsible: true,
    collapsed: true,
    layout: 'fit',
    autoScroll:true,

    title: 'Service',

    requires: ['CM.store.Service'],

    initComponent: function () {
        this.tbar = [
            {
                xtype: 'button',
                text: 'Create',
                name:'create',
                id:'service.create',
                iconCls:'button-create',
                width: 80
            }
        ];

        this.items = [
            Ext.create('Ext.grid.Panel',
                        {
                            name : 'table.service',
                            flex: 1,
                            columns: [
                                {
                                    xtype:'rownumberer'
                                },
                                {
                                    header: 'Full Name',
                                    dataIndex: 'fullName',
                                    flex:1
                                },
                                {
                                    header: 'Short Name',
                                    dataIndex: 'shortName',
                                    flex:1
                                },
                                {
                                    header: 'Price',
                                    dataIndex: 'price'
                                }
                            ],
                            selType: 'rowmodel',
                            store : Ext.create('CM.store.Service')
                        })
        ];

        this.callParent(arguments);
    }

});
