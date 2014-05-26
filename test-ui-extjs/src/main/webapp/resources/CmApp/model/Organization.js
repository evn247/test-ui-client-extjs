/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:09
 */
Ext.define('CM.model.Organization', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id', 'fullName','shortName', 'inn', 'kpp', 'website', 'email', 'addressId'],
    associations: [{
        type: 'hasOne',
        model: 'CM.model.Location',
        name: 'address',
        getterName:'getAddress',
        setterName:'setAddress',
        foreignKey:'addressId',
        associatedName : 'Location',
        associationKey : 'address'
    },{
        type: 'hasMany',
        model: 'CM.model.Phone',
        name: 'phones'
    },{
        type: 'hasMany',
        model: 'CM.model.Person',
        name: 'managers'
    },{
        type: 'hasMany',
        model: 'CM.model.Account',
        name: 'accounts'
    },{
        type: 'hasMany',
        model: 'CM.model.Location',
        name: 'locations'
    },{
        type: 'hasMany',
        model: 'CM.model.FileData',
        name: 'fileDatas'
    }]
});