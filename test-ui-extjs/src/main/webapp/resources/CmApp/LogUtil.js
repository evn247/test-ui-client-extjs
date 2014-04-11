/**
 * User: Eduard.Napolov
 * Date: 11.04.14
 * Time: 11:56
 */
Ext.define('CM.LogUtil', {
    statics:{
        logRecord: function(record)
        {
            if (record) {
                var fields = record.fields;
                var msg = Ext.getClassName(record) + '{';
                var first = true;
                fields.each(function (field) {
                    var fieldName = field.name;
                    if (!first)msg += ',';
                    msg += (fieldName + '=' + record.get(fieldName));
                    first = false;
                });
                msg +='}';
                console.log(msg);
            }
            else
            {
                console.log('record is:'+record);
            }
        },

        logStore:function(store)
        {
            if (store) {
                store.each(function (record) {
                    CM.LogUtil.logRecord(record);
                });
            }
            else
             console.log('store is:'+store);
        },

        logRecords:function(records){
            if(records)
            {
                if(records.length === 0) console.log('records are empty');

                for(var i = 0; i < records.length; i++)
                {
                    CM.LogUtil.logRecord(records[i]);
                }
            }
            else
                console.log('records are: '+records);
        }
    }
});
