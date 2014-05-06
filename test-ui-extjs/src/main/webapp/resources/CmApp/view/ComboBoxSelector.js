/**
 * User: Eduard.Napolov
 * Date: 08.04.14
 * Time: 12:01
 */
Ext.define('CM.view.ComboBoxSelector', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ComboBoxSelector',
    requires: ['CM.LogUtil','CM.view.Util'],
    layout: 'fit',

    comboBox:undefined,
    store:null,
    updateOwner:null,
    dataReader:null,
    currentRecordReader:null,
    renderer:null,

    initComponent: function () {
        var me = this,
            fieldLabel = this.params.fieldLabel,
            selectionHandler = this.params.selectionHandler;
        me.updateOwner = this.params.updateOwner;
        me.dataReader = this.params.dataReader;
        me.currentRecordReader = this.params.currentRecordReader;
        me.renderer = this.params.renderer;

        // create copy store to shield real store from changes.
        var comboBoxStore = Ext.create('Ext.data.Store',
            {
                fields: ['data', 'displayName']
            });

        console.log('create ComboBoxSelector, fieldLabel:'+fieldLabel+' renderer:'+me.renderer);

        me.setBorder(false);

        me.comboBox = Ext.create('Ext.form.ComboBox',{
            name : 'comboBox.',
            fieldLabel: fieldLabel,
            displayField: 'displayName',
            valueField:'data',
            editable:false,
            store:comboBoxStore,
            queryMode: 'local'
        });
        me.comboBox.on('select', function(combo, records){
            selectionHandler(records[0].get('data'));
        });
        this.items = [me.comboBox];

        this.callParent(arguments);
    },
    setRecord:function(record)
    {
        this.comboBox.suspendEvents();
        var currentRecord = this.currentRecordReader(record);
        console.log('setRecord.');
        console.log('currentRecord:');
        CM.LogUtil.logRecord(currentRecord);
        var newStore = this.dataReader(record);
        console.log('newStore:');
        CM.LogUtil.logStore(newStore);
        var store = this.comboBox.store;
        var me = this;
        store.removeAll();
        me.comboBox.clearValue();
        newStore.each(function(record)
        {
            var displayName = me.renderer(record);
            var v = {"data":record, "displayName":displayName};
            store.add(v);
            if(record.getId() === currentRecord.getId()){

                me.comboBox.setValue(displayName);
            }
        });
        this.comboBox.resumeEvents();
    }
});
