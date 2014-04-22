/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 17:21
 */
Ext.define('CM.store.Contract', {
    extend: 'Ext.data.Store',
    model: 'CM.model.Contract',
    requires: ['CM.LogUtil'],

    autoLoad: true,
    proxy:{
        type: 'ajax',

        pageParam: undefined,

        url: 'resources/data/Contracts.json',

        reader: {
            type: 'json',
            root: 'data'
        }
    },
    listeners : {
        load : function (store, recs) {
            var rec   = recs[0];
            console.log('onLoad, rec:');
            CM.LogUtil.logRecord(rec);
        }
    }
});
