/**
 * User: Eduard.Napolov
 * Date: 17.04.14
 * Time: 15:56
 */
Ext.define('CM.store.Kbk', {
    extend: 'Ext.data.Store',
    model: 'CM.model.Kbk',
    autoLoad: true,
    proxy:{
        type: 'ajax',

        pageParam: undefined,

        url: 'resources/data/Kbk.json',

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

