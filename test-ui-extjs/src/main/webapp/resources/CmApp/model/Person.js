/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:13
 */
Ext.define('CM.model.Person', {
    extend: 'Ext.data.Model',
    fields: ['id', 'firstName', 'lastName', 'middleName', 'position','email'],
    associations: [{
        type: 'hasMany',
        model: 'CmApp.model.Phone',
        name: 'phones'
    }]
});