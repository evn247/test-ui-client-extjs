/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 12:07
 */
Ext.define('CM.controller.Service', {
    extend: 'Ext.app.Controller',
    requires: ['CM.view.Util','CM.LogUtil'],

    views: ['CM.view.ServicePanel',
            'CM.view.ServiceWindow'],

    stores: ['CM.store.Service'],

    models: ['CM.model.Service'],

    init: function() {
        console.log('Service.controller.init');
        this.control({
            'ServicePanel grid[name=table.service]': {
                itemdblclick: this.editService
            },
            'ServicePanel button[name=create]': {
                click: this.createService
            },
            'ServiceWindow button[action=save]': {
                click: this.saveService
            },
            'ServiceWindow button[action=cancel]': {
                click: this.cancelEdit
            }
        });
    },
    editService: function(grid, record) {
        console.log('record.class='+Ext.getClassName(record));
        var view = Ext.widget('ServiceWindow');

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

    createService:function(button){
        var view = Ext.widget('ServiceWindow');
        view.down('form').loadRecord(Ext.create('CM.model.Service'));
        view.show();
    },
    saveService:function(button){
        console.log('saveService clicked.');
        var window = button.up('window');
        var record = window.down('form').updateRecord().getRecord();
        CM.view.Util.saveRecord(record);

        window.hide();
    }
});