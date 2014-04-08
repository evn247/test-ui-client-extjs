/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 17:21
 */
Ext.define('CM.store.Organization', {
    extend: 'Ext.data.Store',
    model: 'CM.model.Organization',

    autoLoad: true,

    proxy:{
        type: 'ajax',

        pageParam: undefined,

        url: 'resources/data/Organizations.json',

        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
