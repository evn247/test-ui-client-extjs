/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.ContractWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ContractWindow',
    requires: ['CM.view.EntityPanel',
               'CM.view.ViewFactory',
               'CM.view.LookUpPanel',
               'CM.view.ComboBoxSelector',
               'CM.view.SelectorPanel',
               'CM.view.SelectionWindow',
               'CM.view.Util'],

    title: 'Contract',
    layout: {
        type: 'vbox',
        align:'stretch'
    },
    autoShow: true,
    autoScroll:true,
    modal:true,
    record: null,

    width: 800,
    height:600,
    padding: 6,

    initComponent: function() {
        var me = this;

        this.items = [
        {
            xtype: 'form',
            padding: 6,
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            items: [{

                xtype:'SelectorPanel',
                name:'clientSelector',
                params:{
                    fieldLabel: 'Full Name',

                    selectorTable: Ext.create('Ext.grid.Panel',{
                        name: 'table.select.organization',
                        store:'orgStore',
                        selModel: Ext.create('Ext.selection.RowModel', {
                                                 singleSelect: true
                                             }),

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
                                dataIndex: 'inn',
                                flex:1
                            },
                            {
                                header: 'KPP',
                                dataIndex: 'kpp'
                            }
                        ]
                    }),

                    selectorWindowName: 'Organization',

                    recordFactory:function(){
                        return Ext.create('CM.model.Location');
                    },
                    entityEditorWindowProducer: function(record){
                        var view = Ext.widget('OrganizationWindow');

                        record.beginEdit();
                        view.down('form').loadRecord(record);
                        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.phones]', record.phones());
                        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.managers]', record.managers());
                        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.locations]', record.locations());
                        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.accounts]', record.accounts());
                        view.show();
                        return view;
                    },
                    updateOwner:function(owner, record){
                        owner.setClient(record);
                    },
                    readOwner:function(record){
                        return record.getClient();
                    },
                    renderer:function(record)
                    {
                        return record.get('fullName');
                    },
                    selectionHandler:function(window, record)
                    {
                        console.log('ContractWindow.selectionHandler called');
                        me.record.set('client_short_name', record.get('shortName'));
                        me.record.set('client_full_name', record.get('fullName'));

                        var address = record.getAddress();
                        me.record.set('client_city', address.get('city'));
                        me.record.set('client_street_address', address.get('streetAddress'));
                        me.record.set('client_region', address.get('region'));
                        me.record.set('client_post_index', address.get('postIndex'));

                        // todo: copy properties.

                        // todo: update compounding components
                        me.down('LookUpField[name=clientAddress]').updateValue(address);

                        console.log('Updated record is:');
                        CM.LogUtil.logRecord(me.record);

                        me.down('form').loadRecord(me.record);
                    }
                }
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_short_name',
                fieldLabel: 'Short Name'
            },
            Ext.create('CM.view.LookUpField',{
                padding: 2,
                name : 'clientAddress',
                fieldLabel: 'Client Address',
                flex: 1,
                params:{
                    renderer: function(record){
                        return CM.view.Util.join(record, ',',['postIndex','region','city','streetAddress']);
                    },
                    reader: function(record){
                        return record.getAddress();
                    }
                }
            }),Ext.create('CM.view.ComboBoxSelector',{
                    padding: 2,
                    name : 'clientPhone',
                    fieldLabel: 'Client Phone',
                    displayField:'number',
                    model: 'CM.model.Phone',
                    flex: 1,
                    params:{
                        renderer: function(record){
                            return CM.view.Util.join(record, ' ',['type','number','extension']);
                        },
                        readOwner: function(record){
                            return record.getClient().phones();
                        }
                    }

            }),{
                xtype: 'textfield',
                padding: 2,
                name : 'client_officer_position',
                fieldLabel: 'Position'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_officer_full_name',
                fieldLabel: 'Officer'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_officer_phone_number',
                fieldLabel: 'Phone'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_officer_phone_type',
                fieldLabel: 'Type'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_officer_phone_ext',
                fieldLabel: 'Ext'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_lot_city',
                fieldLabel: 'Lot City'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_lot_street_address',
                fieldLabel: 'Street'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_lot_region',
                fieldLabel: 'Region'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_lot_post_index',
                fieldLabel: 'Post Index'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_account_number',
                fieldLabel: 'Account'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_bank',
                fieldLabel: 'Bank'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_bank_bik',
                fieldLabel: 'Bik'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_bank_corr_account',
                fieldLabel: 'Corr Account'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_kbk',
                fieldLabel: 'KBK'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'type',
                fieldLabel: 'Type'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'status',
                fieldLabel: 'Status'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'termOfPayment',
                fieldLabel: 'Term'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'prepay_percent',
                fieldLabel: 'Prepay percent'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'date',
                fieldLabel: 'Date'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'manager',
                fieldLabel: 'Manager'
            }]
        }];

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
    },

    loadRecord:function(record)
    {
        this.record = record;
        this.down('form').loadRecord(record);
        this.down('SelectorPanel[name=clientSelector]').setRecord(record);
        this.down('LookUpField[name=clientAddress]').updateValue(record.getClient().getAddress());
        this.down('ComboBoxSelector[name=clientPhone]').setRecord(record);
    },

    getRecord: function()
    {
        console.log('getRecord called');
        return null;
    }
});
