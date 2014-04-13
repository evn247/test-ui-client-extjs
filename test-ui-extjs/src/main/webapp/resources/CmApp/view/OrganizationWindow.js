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
        this.items = [
        {
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
        CM.view.ViewFactory.createOrganizationManagerPanel(),
        Ext.create('CM.view.EntityPanel', {
            params:{
                title:'Locations',
                recordFactory:function(){
                    return Ext.create('CM.model.Location');
                },
                entityEditorWindowProducer: function(record){
                    var view = Ext.create('CM.view.EntityWindow',{
                        title : 'Locations',
                        width: 400,
                        params:{
                            name : 'organization.location',
                            form: {
                                xtype: 'form',
                                padding: 6,
                                layout: {
                                    type: 'vbox',
                                    align:'stretch'
                                },
                                items: [{
                                    xtype: 'textfield',
                                    name : 'name',
                                    padding: 2,
                                    fieldLabel: 'Name'
                                },{
                                    xtype: 'textfield',
                                    padding: 2,
                                    name : 'city',
                                    fieldLabel: 'City'
                                },{
                                    xtype: 'textfield',
                                    padding: 2,
                                    name : 'streetAddress',
                                    fieldLabel: 'Street Address'
                                },{
                                    xtype: 'textfield',
                                    padding: 2,
                                    name : 'region',
                                    fieldLabel: 'Region'
                                },{
                                    xtype: 'textfield',
                                    padding: 2,
                                    name : 'postIndex',
                                    fieldLabel: 'Post Index'
                                }]
                            },
                            tables:[]
                        }
                    });
                    view.down('form').loadRecord(record);

                    return view;
                },
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
                recordFactory:function(){
                    return Ext.create('CM.model.Account');
                },
                entityEditorWindowProducer: function(record){
                    var view = Ext.create('CM.view.EntityWindow',{
                        title : 'Locations',
                        width: 400,
                        params:{
                            name : 'organization.account',
                            form: {
                                xtype: 'form',
                                padding: 6,
                                layout: {
                                    type: 'vbox',
                                    align:'stretch'
                                },
                                items: [{
                                    xtype: 'textfield',
                                    name : 'type',
                                    padding: 2,
                                    fieldLabel: 'Type'
                                },{
                                    xtype: 'textfield',
                                    padding: 2,
                                    name : 'name',
                                    fieldLabel: 'Name'
                                },{
                                    xtype: 'textfield',
                                    padding: 2,
                                    name : 'number',
                                    fieldLabel: 'Number'
                                }]
                            },
                            tables:[]
                        }
                    });
                    view.down('form').loadRecord(record);

                    return view;
                },
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
                recordFactory:function(){
                    return Ext.create('CM.model.FileData');
                },
                entityEditorWindowProducer: function(record){
                    var view = Ext.create('CM.view.EntityWindow',{
                        title : 'File Data',
                        width: 400,
                        params:{
                            name : 'organization.fileData',
                            form: {
                                xtype: 'form',
                                padding: 6,
                                layout: {
                                    type: 'vbox',
                                    align:'stretch'
                                },
                                items: [{
                                    xtype: 'textfield',
                                    name : 'fileName',
                                    padding: 2,
                                    fieldLabel: 'Name'
                                },{
                                    xtype: 'textfield',
                                    padding: 2,
                                    name : 'createDate',
                                    fieldLabel: 'Created'
                                },{
                                    xtype: 'textfield',
                                    padding: 2,
                                    name : 'size',
                                    fieldLabel: 'Size'
                                },{
                                    xtype: 'textfield',
                                    padding: 2,
                                    name : 'description',
                                    fieldLabel: 'Description'
                                }]
                            },
                            tables:[]
                        }
                    });
                    view.down('form').loadRecord(record);

                    return view;
                },
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
