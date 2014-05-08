/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 12:07
 */
Ext.define('CM.controller.Contract', {
    extend: 'Ext.app.Controller',
    requires: ['CM.view.Util','CM.LogUtil'],

    views: ['CM.view.ContractPanel',
            'CM.view.ContractWindow'],

    stores: ['CM.store.Contract'],

    models: ['CM.model.Contract'],

    init: function() {
        console.log('Contract.controller.init');
        this.control({
            'ContractPanel grid[name=table.contract]': {
                itemdblclick: this.editContract
            },
            'ContractPanel button[name=create]': {
                click: this.createContract
            },
            'ContractWindow button[action=save]': {
                click: this.saveContract
            },
            'ContractWindow button[action=cancel]': {
                click: this.cancelEdit
            }
        });
    },
    editContract: function(grid, record) {
        console.log('record.class='+Ext.getClassName(record));
        var view = Ext.widget('ContractWindow');

        record.beginEdit();
        view.loadRecord(record);
        view.show();
    },

    cancelEdit:function(button){
        var window = button.up('window');
        var record = window.down('form').getRecord();
        record.cancelEdit();
        window.hide();
    },

    createContract:function(button){
        var view = Ext.widget('ContractWindow');
        view.createContract();
        view.show();
    },
    saveContract:function(button){
        console.log('saveContract clicked.');
        var window = button.up('window');
        var record = window.down('form').updateRecord().getRecord();
        CM.view.Util.saveRecord(record);

        window.hide();
    }
});