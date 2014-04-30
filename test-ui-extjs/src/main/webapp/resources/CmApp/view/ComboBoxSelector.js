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
    readOwner:null,
    renderer:null,

    initComponent: function () {
        var me = this,
            fieldLabel = this.params.fieldLabel,
            displayField = this.params.displayField,
            selectionHandler = this.params.selectionHandler;
        me.updateOwner = this.params.updateOwner;
        me.readOwner = this.params.readOwner;
        me.renderer = this.params.renderer;

        // create copy store to shield real store from changes.
        var comboBoxStore = Ext.create('Ext.data.Store',
            {
                fields: ['data', 'displayName']
            });

        console.log('create ComboBoxSelector, renderer:'+me.renderer);

        me.setBorder(false);

        me.comboBox = Ext.create('Ext.form.ComboBox',{
            padding: 2,
            name : 'comboBox.',
            fieldLabel: fieldLabel,
            displayField: displayField,
            store:comboBoxStore
        });
        this.items = [me.comboBox];

        this.callParent(arguments);
    },
    setRecord:function(record)
    {
        var newStore = this.readOwner(record);
        var store = this.comboBox.store;
        var me = this;
        store.removeAll();
        newStore.each(function(record)
        {
            var v = {"data":record, "displayName":me.renderer(record)};
            store.add(v);
        });
    }
});
