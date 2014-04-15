/**
 * User: Eduard.Napolov
 * Date: 10.04.14
 * Time: 14:30
 */
Ext.define('CM.view.ViewFactory', {
    statics:{
        createOrganizationPhonePanel:function(){
            return Ext.create('CM.view.EntityPanel',{
                params:{
                    title:'Phones',
                    recordFactory:CM.view.ViewFactory.createPhoneRecordFactory,
                    entityEditorWindowProducer: function(record){
                        var view = Ext.create('CM.view.EntityWindow',{
                            title : 'Phone',
                            width: 400,
                            params:{
                                name : 'organization.phone',
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
                                        fieldLabel: 'type'
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'number',
                                        fieldLabel: 'Number'
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'extension',
                                        fieldLabel: 'Extension'
                                    }]
                                },
                                tables:[]
                            }
                        });
                        view.down('form').loadRecord(record);

                        return view;
                    },
                    table: CM.view.ViewFactory.createPhoneTable('table.organization.phones')
                }
            });
        },
        createPhoneRecordFactory:function(){
            return Ext.create('CM.model.Phone');
        },
        createPhoneTable: function(name){
            return Ext.create('Ext.grid.Panel',{
                name: name,
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
            });
        },
        createOrganizationManagerPhonePanel:function(){
            return Ext.create('CM.view.EntityPanel',{
                params:{
                    title:'Phones',
                    recordFactory:CM.view.ViewFactory.createPhoneRecordFactory,
                    entityEditorWindowProducer: function(record){
                        var view = Ext.create('CM.view.EntityWindow',{
                            title : 'Phone',
                            width: 400,
                            params:{
                                name : 'organization.manager.phone',
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
                                        fieldLabel: 'type'
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'number',
                                        fieldLabel: 'Number'
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'extension',
                                        fieldLabel: 'Extension'
                                    }]
                                },
                                tables:[]
                            }
                        });
                        view.down('form').loadRecord(record);

                        return view;
                    },
                    table: CM.view.ViewFactory.createPhoneTable('table.organization.manager.phones')
                }
            });
        },
        createOrganizationManagerPanel:function(){
            return Ext.create('CM.view.EntityPanel', {
                params:{
                    title:'Managers',
                    recordFactory:function(){
                        return Ext.create('CM.model.Person');
                    },
                    entityEditorWindowProducer: function(record){
                        var view = Ext.create('CM.view.EntityWindow',{
                            title : 'Managers',
                            width: 400,
                            params:{
                                name : 'organization.managers',
                                form: {
                                    xtype: 'form',
                                    padding: 6,
                                    layout: {
                                        type: 'vbox',
                                        align:'stretch'
                                    },
                                    items: [{
                                        xtype: 'textfield',
                                        name : 'firstName',
                                        padding: 2,
                                        fieldLabel: 'First Name'
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'lastName',
                                        fieldLabel: 'Family Name'
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'middleName',
                                        fieldLabel: 'Middle Name'
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'position',
                                        fieldLabel: 'Position'
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'email',
                                        fieldLabel: 'E-mail'
                                    }]
                                },
                                tables:[CM.view.ViewFactory.createOrganizationManagerPhonePanel()]
                            }
                        });
                        CM.LogUtil.logRecord(record);
                        console.log('person.phones:');
                        CM.LogUtil.logStore(record.phones());
                        view.down('form').loadRecord(record);
                        CM.view.Util.setupTablePanel(view, 'grid', record.phones());
                        return view;
                    },
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
            });
        },
        createPhoneForm:function(){
            return {
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
                    fieldLabel: 'type'
                },{
                    xtype: 'textfield',
                    padding: 2,
                    name : 'number',
                    fieldLabel: 'Number'
                },{
                    xtype: 'textfield',
                    padding: 2,
                    name : 'extension',
                    fieldLabel: 'Extension'
                }]
            };
        },
        createLocationWindowProducer:function(record){
            var view = Ext.create('CM.view.EntityWindow',{
                title : 'Locations',
                width: 400,
                params:{
                    name : 'location.window',
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
        createOrganizationLocationPanel:function(){
            console.log('createOrganizationLocationPanel called');
            return Ext.create('CM.view.EntityPanel', {
                params:{
                    title:'Locations',
                    recordFactory:function(){
                        return Ext.create('CM.model.Location');
                    },
                    entityEditorWindowProducer: CM.view.ViewFactory.createLocationWindowProducer,
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
            });
        },
        createOrganizationAccountPanel:function(){
            return Ext.create('CM.view.EntityPanel', {
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
            });
        },
        createOrganizationFileDataPanel:function(){
            return Ext.create('CM.view.EntityPanel', {
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
            });
        }
    }
});
