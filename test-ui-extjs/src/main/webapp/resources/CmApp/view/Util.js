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
        }
    }
});

