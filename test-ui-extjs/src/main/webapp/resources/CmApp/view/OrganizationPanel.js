/**
 * User: Eduard.Napolov
 * Date: 02.04.14
 * Time: 12:08
 */
Ext.define('CM.view.OrganizationPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.OrganizationPanel',
    collapsible: true,
    collapsed: true,
    layout: 'fit',
    autoScroll:true,

    title: 'Organization',

    requires: ['CM.store.Organization'],

    initComponent: function () {
        this.tbar = [
            {
                xtype: 'button',
                text: 'Create',
                name:'create',
                id:'org.create',
                iconCls:'button-create',
                width: 80
            }
        ];

        this.items = [
            Ext.create('Ext.grid.Panel',
                        {
                            name : 'table.organization',
                            flex: 1,
                            columns: [
                                {
                                    xtype:'rownumberer'
                                },
                                {
                                    header: 'Short Name',
                                    dataIndex: 'shortName',
                                    flex:1
                                },
                                {
                                    header: 'INN',
                                    dataIndex: 'inn'
                                },
                                {
                                    header: 'KPP',
                                    dataIndex: 'kpp'
                                },
                                {
                                    header: 'Web-site',
                                    dataIndex: 'website'
                                },
                                {
                                    header: 'E-mail',
                                    dataIndex: 'email',
                                    flex:1
                                }
                            ],
                            selType: 'rowmodel',
                            store : 'orgStore'
                        })
        ];

        this.callParent(arguments);
    }

});
