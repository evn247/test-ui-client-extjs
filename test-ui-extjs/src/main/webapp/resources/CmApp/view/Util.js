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
        copy:function(from, to)
        {
            from.each(function(record)
            {
                to.add(record);
            });
        }
    }
});

