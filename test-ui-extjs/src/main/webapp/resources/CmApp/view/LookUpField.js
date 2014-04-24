/**
 * User: Eduard.Napolov
 * Date: 08.04.14
 * Time: 12:01
 */
Ext.define('CM.view.LookUpField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.LookUpField',
    requires: ['CM.LogUtil','CM.view.Util'],
    renderer:null,
    reader:null,

    initComponent: function () {
        var me = this;
        this.callParent(arguments);
        this.renderer = this.params.renderer;
        this.reader = this.params.reader;

        this.on('change', function (src, newValue) {
            console.log('change event for lookup field, newValue='+newValue);

            var record = me.up('form').getRecord();
            console.log('current record:');
            CM.LogUtil.logRecord(record);
            var value = me.reader(record);
            me.updateValue(value);
        });
    },
    updateValue:function(record){
        console.log('updateValue, record:');
        CM.LogUtil.logRecord(record);
        this.suspendEvents();
        if(record)
        {
            this.setValue(this.renderer(record));
        }

        this.resumeEvents();
    }
});
