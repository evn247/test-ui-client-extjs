/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:13
 */
Ext.define('CM.model.Location', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'addressLine1', 'addressLine2', 'city','region','postIndex']
});