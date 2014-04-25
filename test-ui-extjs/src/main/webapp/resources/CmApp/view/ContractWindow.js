/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.ContractWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ContractWindow',
    requires: ['CM.view.EntityPanel','CM.view.ViewFactory','CM.view.LookUpPanel','CM.view.SelectorPanel'],

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
                params:{
                    fieldLabel: 'Full Name',

                    selectorTable: null,

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
                        me.record.set('shortName', record.get('shortName'));
                        // todo: copy properties.
                    }
                }
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_short_name',
                fieldLabel: 'Short Name'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_city',
                fieldLabel: 'City'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_street_address',
                fieldLabel: 'Street'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_region',
                fieldLabel: 'Region'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_post_index',
                fieldLabel: 'Post Index'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_phone_type',
                fieldLabel: 'Type'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_phone_number',
                fieldLabel: 'Phone'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'client_phone_ext',
                fieldLabel: 'Ext'
            },{
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
    },

    getRecord: function()
    {
        console.log('getRecord called');
        return null;
    }
});
