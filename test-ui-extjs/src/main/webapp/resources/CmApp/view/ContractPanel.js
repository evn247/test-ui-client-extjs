/**
 * User: Eduard.Napolov
 * Date: 02.04.14
 * Time: 12:08
 */
Ext.define('CM.view.ContractPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ContractPanel',
    collapsible: true,
    layout: 'fit',
    autoScroll:true,

    title: 'Contract',

    requires: ['CM.store.Contract'],

    initComponent: function () {
        this.tbar = [
            {
                xtype: 'button',
                text: 'Create',
                name:'create',
                id:'contract.create',
                iconCls:'button-create',
                width: 80
            }
        ];

        this.items = [
            Ext.create('Ext.grid.Panel',
                        {
                            name : 'table.contract',
                            flex: 1,
                            columns: [
                                {
                                    xtype:'rownumberer'
                                },
                                {
                                    header: 'Type',
                                    dataIndex: 'type'
                                },
                                {
                                    header: 'Short Name',
                                    dataIndex: 'clientShortName',
                                    flex:1
                                },

                                {
                                    header: 'Date',
                                    dataIndex: 'date'
                                },
                                {
                                    header: 'Status',
                                    dataIndex: 'status'
                                }
                            ],
                            selType: 'rowmodel',
                            store : Ext.create('CM.store.Contract')
                        })
        ];

        this.callParent(arguments);
    }

});
