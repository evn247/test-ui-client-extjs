/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:09
 */
Ext.define('CM.model.Contract', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id', 'client_full_name', 'client_short_name',
             'client_city','client_street_address','client_region','client_post_index',
             'client_phone_type', 'client_phone_number', 'client_phone_ext',
             'client_officer_position','client_officer_full_name',
             'client_officer_phone_number','client_officer_phone_type','client_officer_phone_ext',
             'client_lot_city','client_lot_street_address','client_lot_region','client_lot_post_index',
             'client_account_number','client_bank','client_bank_bik','client_bank_corr_account','client_kbk',
             'type', 'status', 'termOfPayment', 'prepay_percent', 'date',
             'site_id', 'client_id', 'client_phone_id', 'account_id',
             'executive_officer_id','executive_officer_phone_id', 'kbk_id', 'manager'],
    associations: [{
        type: 'hasOne',
        model: 'CM.model.Location',
        name: 'clientSite',
        getterName:'getSiteAddress',
        setterName:'setSiteAddress',
        foreignKey:'site_id',
        associatedName : 'Location',
        associationKey : 'site'
    },{
        type: 'hasOne',
        model: 'CM.model.Organization',
        name: 'client',
        getterName:'getClient',
        setterName:'setClient',
        foreignKey:'client_id',
        associatedName : 'Organization',
        associationKey : 'client'
    },{
        type: 'hasOne',
        model: 'CM.model.Phone',
        name: 'clientPhone',
        getterName:'getClientPhone',
        setterName:'setClientPhone',
        foreignKey:'client_phone_id',
        associatedName : 'Phone',
        associationKey : 'clientPhone'
    },{
        type: 'hasOne',
        model: 'CM.model.Account',
        name: 'account',
        getterName:'getAccount',
        setterName:'setAccount',
        foreignKey:'account_id',
        associatedName : 'Account',
        associationKey : 'account'
    },{
        type: 'hasOne',
        model: 'CM.model.Person',
        name: 'executiveOfficer',
        getterName:'getExecutiveOfficer',
        setterName:'setExecutiveOfficer',
        foreignKey:'executive_officer_id',
        associatedName : 'Person',
        associationKey : 'executiveOfficer'
    },{
        type: 'hasOne',
        model: 'CM.model.Kbk',
        name: 'kbk',
        getterName:'getKbk',
        setterName:'setKbk',
        foreignKey:'kbk_id',
        associatedName : 'Kbk',
        associationKey : 'kbk'
    },{
        type: 'hasOne',
        model: 'CM.model.Phone',
        name: 'executivePhone',
        getterName:'getOfficerPhone',
        setterName:'setOfficerPhone',
        foreignKey:'executive_officer_phone_id',
        associatedName : 'Phone',
        associationKey : 'executiveOfficerPhone'
    },{
        type: 'hasMany',
        model: 'CM.model.ContractServiceLine',
        name: 'services'
    }]
});