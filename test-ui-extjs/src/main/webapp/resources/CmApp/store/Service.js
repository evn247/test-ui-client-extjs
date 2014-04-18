/**
 * User: Eduard.Napolov
 * Date: 17.04.14
 * Time: 15:56
 */
Ext.define('CM.store.Service', {
    extend: 'Ext.data.Store',
    model: 'CM.model.Service',
    autoLoad: true,
    proxy:{
        type: 'ajax',

        pageParam: undefined,

        url: 'resources/data/Services.json',

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

