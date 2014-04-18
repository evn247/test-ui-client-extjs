/**
 * User: Eduard.Napolov
 * Date: 17.04.14
 * Time: 15:55
 */
Ext.define('CM.model.Service', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id', 'fullName','shortName', 'price']
});