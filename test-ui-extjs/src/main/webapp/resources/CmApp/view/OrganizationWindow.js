/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.OrganizationWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.OrganizationWindow',
    requires: ['CM.view.EntityPanel','CM.view.ViewFactory'],

    title: 'Organization',
    layout: {
        type: 'vbox',
        align:'stretch'
    },
    autoShow: true,
    autoScroll:true,
    modal:true,

    width: 800,
    height:600,
    padding: 6,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            padding: 6,
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            items: [{
                xtype: 'textfield',
                padding: 2,
                name : 'name',
                fieldLabel: 'Name'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'inn',
                fieldLabel: 'INN'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'website',
                fieldLabel: 'Web-Site'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'email',
                fieldLabel: 'E-Mail'
            }]
        },
        CM.view.ViewFactory.createOrganizationPhonePanel(),
        Ext.create('CM.view.EntityPanel', {
            params:{
                title:'Managers',
                table: Ext.create('Ext.grid.Panel',{
                    name: 'table.organization.managers',
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
                })
            }
        }),
        Ext.create('CM.view.EntityPanel', {
            params:{
                title:'Locations',
                table: Ext.create('Ext.grid.Panel',
                    {
                        name: 'table.organization.locations',
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
                                header: 'City',
                                dataIndex: 'city'
                            },
                            {
                                header: 'Street Address',
                                dataIndex: 'streetAddress',
                                flex:1
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
                    }
                )
            }
        }),
        Ext.create('CM.view.EntityPanel', {
            params:{
                title:'Accounts',
                table:Ext.create('Ext.grid.Panel',{
                        name: 'table.organization.accounts',
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
                    }
                )
            }
        }),
        Ext.create('CM.view.EntityPanel', {
            params:{
                title:'File Data',
                table: Ext.create('Ext.grid.Panel',{
                    name: 'table.organization.file_data',
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
            }
        })];
        this.buttons = [{
                xtype:'button',
                text: 'Очистить',
                scope: this,
                action: 'clear'
            },
            {
                xtype:'button',
                text:'Сохранить',
                action: 'save'
            },
            {
                xtype:'button',
                text:'Отменить',
                action: 'cancel'
            }
        ];

        this.callParent(arguments);
    }
});
