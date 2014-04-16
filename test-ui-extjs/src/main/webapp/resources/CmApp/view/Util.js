/**
 * User: Eduard.Napolov
 * Date: 11.04.14
 * Time: 15:28
 */
Ext.define('CM.view.Util', {
    statics:{
        setupTablePanel: function(view, query, records){
            console.log('setupTablePanel.query='+query);
            var table = view.down(query);
            CM.view.Util.copy(records, table.store);
        },
        copyFromTablePanel: function(window, query, records){
            console.log('copyFromTablePanel.query='+query);
            var store = window.down(query).store;
            console.log('view.query.store:');
            CM.LogUtil.logStore(store);
            records.removeAll(true);
            CM.view.Util.copy(store, records);
            console.log('updated records:');
            CM.LogUtil.logStore(records);
        },
        copy:function(from, to)
        {
            from.each(function(record)
            {
                to.add(record);
            });
        },
        join:function(record, delim, fields){
            var value = '';
            for(var i = 0; i < fields.length; i++)
            {
                var fieldValue = record.get(fields[i]);
                if(fieldValue)
                {
                    if(value.length > 0)
                    {
                        value += delim;
                    }
                    value += fieldValue;
                }
            }

            return value;
        },
        saveRecord:function(record){
            console.log('saveRecord.record:');
            record.endEdit();
            CM.LogUtil.logRecord(record);

            var stores = record.stores;
            console.log('record stores:'+stores);
            for(var i = 0; i < stores.length; i++)
            {
                var store = stores[i];
                CM.LogUtil.logStore(store);
                console.log('updatedRecords:');
                CM.LogUtil.logRecords(store.getUpdatedRecords());
                if(!record.getId())
                {
                    console.log('potentially new entry');

                    var found = false;
                    store.each(function(entry){
                        console.log('checking entry:');
                        CM.LogUtil.logRecord(entry);
                        if(entry === record){
                            console.log('entry matched record!');
                            found = true;
                        }
                    });

                    console.log('found='+found);
                    if(!found)
                    {
                        store.add(record);
                    }
                }
                console.log('committing store...');
                store.commitChanges();
            }
        }
    }
});

