/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:13
 */
Ext.define('CM.model.Phone', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id', 'type', 'number', 'extension']
});