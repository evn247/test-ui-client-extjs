/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:13
 */
Ext.define('CM.model.Location', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'streetAddress', 'city','region','postIndex']
});