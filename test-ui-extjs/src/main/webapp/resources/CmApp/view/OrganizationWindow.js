/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.OrganizationWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.OrganizationWindow',

    title: 'Organization',
    layout: {
        type: 'vbox',
        align:'stretch'
    },
    autoShow: true,
    modal:true,

    width: 600,
    height:400,
    padding: 6,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            items: [{
                xtype: 'textfield',
                name : 'name',
                fieldLabel: 'Name'
            },{
                xtype: 'textfield',
                name : 'inn',
                fieldLabel: 'INN'
            },{
                xtype: 'textfield',
                name : 'website',
                fieldLabel: 'Web-Site'
            },{
                xtype: 'textfield',
                name : 'email',
                fieldLabel: 'E-Mail'
            }]
        },
        Ext.create('Ext.grid.Panel',
            {
                name: 'table_organization_phones',
                title:'Phones',
                collapsible:true,
                collapsed:true,
                store:Ext.create('CM.store.Phone'),

                columns: [
                    {
                        xtype:'rownumberer'
                    },
                    {
                        header: 'Type',
                        dataIndex: 'type',
                        flex:1
                    },
                    {
                        header: 'Number',
                        dataIndex: 'number',
                        flex:1
                    },
                    {
                        header: 'Extension',
                        dataIndex: 'extension'
                    }
                ]

            }),
        Ext.create('Ext.grid.Panel',
            {
                name: 'table_organization_managers',
                title:'Managers',
                collapsible:true,
                collapsed:true,
                store:Ext.create('CM.store.Person'),
                columns: [
                    {
                        xtype:'rownumberer'
                    },
                    {
                        header: 'First Name',
                        dataIndex: 'firstName',
                        flex:1
                    },
                    {
                        header: 'Last Name',
                        dataIndex: 'lastName',
                        flex:1
                    },
                    {
                        header: 'Middle Name',
                        dataIndex: 'middleName'
                    },
                    {
                        header: 'Position',
                        dataIndex: 'position'
                    },
                    {
                        header: 'E-mail',
                        dataIndex: 'email'
                    }
                ]
            }),
        Ext.create('Ext.grid.Panel',
            {
                name: 'table_organization_locations',
                title:'Locations',
                collapsible:true,
                collapsed:true,
                store: Ext.create('CM.store.Location'),
                columns: [
                    {
                        xtype:'rownumberer'
                    },
                    {
                        header: 'Name',
                        dataIndex: 'name',
                        flex:1
                    },
                    {
                        header: 'Address Line 1',
                        dataIndex: 'addressLine1',
                        flex:1
                    },
                    {
                        header: 'Address Line 2',
                        dataIndex: 'addressLine2'
                    },
                    {
                        header: 'City',
                        dataIndex: 'city'
                    },
                    {
                        header: 'Region',
                        dataIndex: 'region'
                    },
                    {
                        header: 'Post Index',
                        dataIndex: 'postIndex'
                    }
                ]

            }),
        Ext.create('Ext.grid.Panel',
            {
                name: 'table_organization_accounts',
                title:'Accounts',
                collapsible:true,
                collapsed:true,
                store: Ext.create('CM.store.Account'),
                columns: [
                    {
                        xtype:'rownumberer'
                    },
                    {
                        header: 'Type',
                        dataIndex: 'type',
                        flex:1
                    },
                    {
                        header: 'Name',
                        dataIndex: 'name'
                    },
                    {
                        header: 'Number',
                        dataIndex: 'number',
                        flex:1
                    }
                ]
            }),
        Ext.create('Ext.grid.Panel',
            {
                name: 'table_organization_file_data',
                title:'File Data',
                collapsible:true,
                collapsed:true,
                store: Ext.create('CM.store.FileData'),
                columns: [
                    {
                        xtype:'rownumberer'
                    },
                    {
                        header: 'Name',
                        dataIndex: 'fileName',
                        flex:1
                    },
                    {
                        header: 'Created',
                        dataIndex: 'createDate'
                    },
                    {
                        header: 'Size',
                        dataIndex: 'size',
                        flex:1
                    },
                    {
                        header: 'Description',
                        dataIndex: 'description',
                        flex:1
                    }
                ]
            })
        ];
        this.buttons = [{
                xtype:'button',
                text: 'Очистить',
                scope: this,
                action: 'clear'
            },{
                xtype:'button',
                text:'Сохранить',
                action: 'save'
            }
        ];

        this.callParent(arguments);
    }
});
