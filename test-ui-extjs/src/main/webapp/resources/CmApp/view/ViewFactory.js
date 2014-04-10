/**
 * User: Eduard.Napolov
 * Date: 10.04.14
 * Time: 14:30
 */
Ext.define('CM.view.ViewFactory', {
    statics:{
        createOrganizationPhonePanel:function(){
            return         Ext.create('CM.view.EntityPanel',{
                params:{
                    title:'Phones',
                    entityEditorWindowProducer: function(){
                        return Ext.create('CM.view.EntityWindow',{
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
                                }
                            }
                        });
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
        }
    }

});
