/**
 * User: Eduard.Napolov
 * Date: 08.04.14
 * Time: 12:01
 */
Ext.define('CM.view.LookUpField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.LookUpField',
    requires: ['CM.LogUtil','CM.view.Util'],

    initComponent: function () {
        var me = this;
        this.callParent(arguments);

        this.on('change', function (src, newValue) {
            console.log('change event for lookup field, newValue='+newValue);

            var record = me.up('form').getRecord();
            console.log('current record:');
            CM.LogUtil.logRecord(record);
            var address = record.getAddress();
            me.updateValue(address);
        });
    },
    updateValue:function(record){
        console.log('updateValue, record:');
        CM.LogUtil.logRecord(record);
        this.suspendEvents();
        if(record)
        {
            this.setValue(CM.view.Util.join(record, ', ', ['region', 'city', 'streetAddress']));
        }

        this.resumeEvents();
    }
});
