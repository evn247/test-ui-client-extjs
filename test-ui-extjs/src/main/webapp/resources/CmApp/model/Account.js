/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:13
 */
Ext.define('CM.model.Account', {
    extend: 'Ext.data.Model',
    fields: ['id', 'accountName', 'accountNumber', 'bankName', 'corrAccountNumber', 'bik', 'kbk']
});