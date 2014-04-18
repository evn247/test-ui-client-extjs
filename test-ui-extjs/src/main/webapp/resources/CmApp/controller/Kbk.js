/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 12:07
 */
Ext.define('CM.controller.Kbk', {
    extend: 'Ext.app.Controller',
    requires: ['CM.view.Util','CM.LogUtil'],

    views: ['CM.view.KbkPanel',
            'CM.view.KbkWindow'],

    stores: ['CM.store.Kbk'],

    models: ['CM.model.Kbk'],

    init: function() {
        console.log('Kbk.controller.init');
        this.control({
            'KbkPanel grid[name=table.kbk]': {
                itemdblclick: this.editKbk
            },
            'KbkPanel button[name=create]': {
                click: this.createKbk
            },
            'KbkWindow button[action=save]': {
                click: this.saveKbk
            },
            'KbkWindow button[action=cancel]': {
                click: this.cancelEdit
            }
        });
    },
    editKbk: function(grid, record) {
        console.log('record.class='+Ext.getClassName(record));
        var view = Ext.widget('KbkWindow');

        record.beginEdit();
        view.down('form').loadRecord(record);
        view.show();
    },

    cancelEdit:function(button){
        var window = button.up('window');
        var record = window.down('form').getRecord();
        record.cancelEdit();
        window.hide();
    },

    createKbk:function(button){
        var view = Ext.widget('KbkWindow');
        view.down('form').loadRecord(Ext.create('CM.model.Kbk'));
        view.show();
    },
    saveKbk:function(button){
        console.log('saveKbk clicked.');
        var window = button.up('window');
        var record = window.down('form').updateRecord().getRecord();
        CM.view.Util.saveRecord(record);

        window.hide();
    }
});