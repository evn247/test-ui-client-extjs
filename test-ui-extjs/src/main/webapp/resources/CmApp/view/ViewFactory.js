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
                    recordFactory:function(){
                        return Ext.create('CM.model.Phone');
                    },
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
                    table: Ext.create('Ext.grid.Panel',{
                        name: 'table.organization.phones',
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
                    })
                }
            });
        },
        createOrganizationManagerPhonePanel:function(){
            return Ext.create('CM.view.EntityPanel',{
                params:{
                    title:'Phones',
                    recordFactory:function(){
                        return Ext.create('CM.model.Phone');
                    },
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
                    table: Ext.create('Ext.grid.Panel',{
                        name: 'table.phones',
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
                    })
                }
            });
        },
        createOrganizationManagerPanel:function(record){
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
        }
    }

});
