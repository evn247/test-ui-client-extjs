/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 17:21
 */
Ext.define('CM.store.Organization', {
    extend: 'Ext.data.Store',
    model: 'CM.model.Organization',
    requires: ['CM.LogUtil'],
    storeId: 'orgStore',

    autoLoad: true,
    proxy:{
        type: 'ajax',

        pageParam: undefined,

        url: 'resources/data/Organizations.json',

        reader: {
            type: 'json',
            root: 'data'
        }
    },
    listeners : {
        load : function (store, recs) {
            var rec   = recs[0],
                address  = rec.getAddress();
            console.log('onLoad, rec:');
            CM.LogUtil.logRecord(rec);
            console.log('onLoad, address:');
            CM.LogUtil.logRecord(address);
        }
    }
});
