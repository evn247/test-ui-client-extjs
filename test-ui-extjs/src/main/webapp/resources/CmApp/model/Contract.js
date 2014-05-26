/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:09
 */
Ext.define('CM.model.Contract', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id', 'clientFullName', 'clientShortName',
             'clientCity','clientStreetAddress','clientRegion','clientPostIndex',
             'clientPhoneType', 'clientPhoneNumber', 'clientPhoneExt',
             'clientOfficerPosition','clientOfficerFullName',
             'clientOfficerPhoneNumber','clientOfficerPhoneType','clientOfficerPhoneExt',
             'clientLotCity','clientLotStreetAddress','clientLotRegion','clientLotPostIndex',
             'clientAccountNumber','clientBank','clientBankBik','clientBankCorrAccount','clientKbk',
             'type', 'status', 'termOfPayment', 'prepayPercent', 'date',
             'siteId', 'clientId', 'clientPhoneId', 'accountId',
             'executiveOfficerId','executiveOfficerPhoneId', 'kbkId', 'manager'],
    associations: [{
        type: 'hasOne',
        model: 'CM.model.Location',
        name: 'clientSite',
        getterName:'getSiteAddress',
        setterName:'setSiteAddress',
        foreignKey:'siteId',
        associatedName : 'Location',
        associationKey : 'site'
    },{
        type: 'hasOne',
        model: 'CM.model.Organization',
        name: 'client',
        getterName:'getClient',
        setterName:'setClient',
        foreignKey:'clientId',
        associatedName : 'Organization',
        associationKey : 'client'
    },{
        type: 'hasOne',
        model: 'CM.model.Phone',
        name: 'clientPhone',
        getterName:'getClientPhone',
        setterName:'setClientPhone',
        foreignKey:'clientPhoneId',
        associatedName : 'ClientPhone',
        associationKey : 'clientPhone'
    },{
        type: 'hasOne',
        model: 'CM.model.Account',
        name: 'account',
        getterName:'getAccount',
        setterName:'setAccount',
        foreignKey:'accountId',
        associatedName : 'Account',
        associationKey : 'account'
    },{
        type: 'hasOne',
        model: 'CM.model.Person',
        name: 'executiveOfficer',
        getterName:'getExecutiveOfficer',
        setterName:'setExecutiveOfficer',
        foreignKey:'executiveOfficerId',
        associatedName : 'Person',
        associationKey : 'executiveOfficer'
    },{
        type: 'hasOne',
        model: 'CM.model.Kbk',
        name: 'kbk',
        getterName:'getKbk',
        setterName:'setKbk',
        foreignKey:'kbkId',
        associatedName : 'Kbk',
        associationKey : 'kbk'
    },{
        type: 'hasOne',
        model: 'CM.model.Phone',
        name: 'executivePhone',
        getterName:'getOfficerPhone',
        setterName:'setOfficerPhone',
        foreignKey:'executiveOfficerPhoneId',
        associatedName : 'ExecutivePhone',
        associationKey : 'executiveOfficerPhone'
    },{
        type: 'hasMany',
        model: 'CM.model.ContractServiceLine',
        name: 'services'
    }]
});