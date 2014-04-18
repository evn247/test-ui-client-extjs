/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:09
 */
Ext.define('CM.model.Contract', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id', 'type', 'status', 'termOfUse', 'date',
             'site_id', 'client_id', 'account_id',
             'executive_office_id', 'kbk_id', 'manager'],
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
        foreignKey:'executive_office_id',
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
        type: 'hasMany',
        model: 'CM.model.ContractServiceLine',
        name: 'services'
    }]
});