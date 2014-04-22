/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.ContractWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ContractWindow',
    requires: ['CM.view.EntityPanel','CM.view.ViewFactory','CM.view.LookUpPanel'],

    title: 'Contract',
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
                name : 'client_full_name',
                fieldLabel: 'Full Name'
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
    }
});
