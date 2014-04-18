/**
 * User: Eduard.Napolov
 * Date: 02.04.14
 * Time: 12:08
 */
Ext.define('CM.view.KbkPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.KbkPanel',
    collapsible: true,
    collapsed: true,
    layout: 'fit',
    autoScroll:true,

    title: 'KBK',

    requires: ['CM.store.Kbk'],

    initComponent: function () {
        this.tbar = [
            {
                xtype: 'button',
                text: 'Create',
                name:'create',
                id:'kbk.create',
                iconCls:'button-create',
                width: 80
            }
        ];

        this.items = [
            Ext.create('Ext.grid.Panel',
                        {
                            name : 'table.kbk',
                            flex: 1,
                            columns: [
                                {
                                    xtype:'rownumberer'
                                },
                                {
                                    header: 'Description',
                                    dataIndex: 'description',
                                    flex:1
                                },
                                {
                                    header: 'Code',
                                    dataIndex: 'code',
                                    flex:1
                                }
                            ],
                            selType: 'rowmodel',
                            store : Ext.create('CM.store.Kbk')
                        })
        ];

        this.callParent(arguments);
    }

});
