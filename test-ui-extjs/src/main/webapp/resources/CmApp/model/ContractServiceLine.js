/**
 * User: Eduard.Napolov
 * Date: 17.04.14
 * Time: 15:55
 */
Ext.define('CM.model.ContractServiceLine', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id', 'fullName','shortName', 'price', 'serviceId'],
    associations: [{
        type: 'hasOne',
        model: 'CM.model.Service',
        name: 'service',
        getterName:'getService',
        setterName:'setService',
        foreignKey:'serviceId',
        associatedName : 'Service',
        associationKey : 'service'
    }]
});