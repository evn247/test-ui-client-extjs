/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 12:07
 */
Ext.define('CM.controller.Organization', {
    extend: 'Ext.app.Controller',

    views: ['CM.view.OrganizationPanel',
            'CM.view.OrganizationWindow',
            'CM.view.EntityWindow'],

    stores: ['CM.store.Organization',
        'CM.store.Phone',
        'CM.store.Person',
        'CM.store.Account',
        'CM.store.FileData',
        'CM.store.Location'],

    models: ['CM.model.Organization'],

    init: function() {
        console.log('Organization.controller.init');
        this.control({
            'OrganizationPanel grid[name=table.organization]': {
                itemdblclick: this.editOrganization
            },
            'OrganizationPanel button[name=create]': {
                click: this.createOrganization
            },
            'OrganizationWindow button[action=save]': {
                click: this.saveOrganization
            },
            'OrganizationWindow button[name=table.organization.phones.create]': {
                click: this.createPhone
            },
            'OrganizationWindow button[name=table.organization.locations.create]': {
                click: this.createLocation
            },
            'OrganizationWindow button[name=table.organization.managers.create]': {
                click: this.createManager
            },
            'OrganizationWindow button[name=table.organization.accounts.create]': {
                click: this.createAccount
            },
            'OrganizationWindow button[name=table.organization.file_data.create]': {
                click: this.createFileData
            },
            'OrganizationWindow button[name=table.organization.phones.delete]': {
                click: this.deletePhone
            },
            'OrganizationWindow button[name=table.organization.locations.delete]': {
                click: this.deleteLocation
            },
            'OrganizationWindow button[name=table.organization.managers.delete]': {
                click: this.deleteManager
            },
            'OrganizationWindow button[name=table.organization.accounts.delete]': {
                click: this.deleteAccount
            },
            'OrganizationWindow button[name=table.organization.file_data.delete]': {
                click: this.deleteFileData
            },
            'OrganizationWindow grid[name=table.organization.phones]': {
                itemdblclick: this.editPhone
            },
            'OrganizationWindow grid[name=table.organization.locations]': {
                itemdblclick: this.editLocation
            },
            'OrganizationWindow grid[name=table.organization.managers]': {
                itemdblclick: this.editManager
            },
            'OrganizationWindow grid[name=table.organization.accounts]': {
                itemdblclick: this.editAccount
            },
            'OrganizationWindow grid[name=table.organization.file_data]': {
                itemdblclick: this.editFileData
            }
        });
    },
    editOrganization: function(grid, record) {
        var view = Ext.widget('OrganizationWindow');

        view.down('form').loadRecord(record);
        this.setupTablePanel(view, 'grid[name=table.organization.phones]', record.phones());
        this.setupTablePanel(view, 'grid[name=table.organization.managers]', record.managers());
        this.setupTablePanel(view, 'grid[name=table.organization.locations]', record.locations());
        this.setupTablePanel(view, 'grid[name=table.organization.accounts]', record.accounts());
        this.setupTablePanel(view, 'grid[name=table.organization.file_data]', record.fileDatas());
        view.show();
    },

    setupTablePanel: function(view, query, records){
        console.log('setupTablePanel.query='+query);
        var table = view.down(query);
        records.each(function(record){
            table.store.add(record);
        });

    },

    createOrganization:function(button){
        var view = Ext.widget('OrganizationWindow');
        view.down('form');
        view.show();
    },
    saveOrganization:function(button){
        console.log('saveOrganization clicked.');
        var window = button.up('window');
        var record = window.down('form').getRecord();
        console.log('record='+record);
        var data = record.getData(true);
        console.log('record.data='+data);
        window.hide();
    },
    createPhone:function(button){
        console.log('createPhone clicked.');
        // todo: createPhone
    },
    createLocation:function(button){
        console.log('createLocation clicked.');
        // todo: createLocation
    },
    createManager:function(button){
        console.log('createManager clicked.');
        // todo: createManager
    },
    createAccount:function(button){
        console.log('createAccount clicked.');
        // todo: createAccount
    },
    createFileData:function(button){
        console.log('createFileData clicked.');
        // todo: createFileData
    },
    deletePhone:function(button){
        console.log('deletePhone clicked.');
        // todo: deletePhone
    },
    deleteLocation:function(button){
        console.log('deleteLocation clicked.');
        // todo: deleteLocation
    },
    deleteManager:function(button){
        console.log('deleteManager clicked.');
        // todo: deleteManager
    },
    deleteAccount:function(button){
        console.log('deleteAccount clicked.');
        // todo: deleteAccount
    },
    deleteFileData:function(button){
        console.log('deleteFileData clicked.');
        // todo: deleteFileData
    },
    editPhone:function(grid, record){
        console.log('editPhone clicked.');
        var view = Ext.create('CM.view.EntityWindow',{
            title : 'Phone',
            width: 400,
            params:{
                name : 'organization.phone',
                form: {
                    xtype: 'form',
                    padding: 6,
                    layout: {
                        type: 'vbox',
                        align:'stretch'
                    },
                    items: [{
                        xtype: 'textfield',
                        name : 'type',
                        padding: 2,
                        fieldLabel: 'type'
                    },{
                        xtype: 'textfield',
                        padding: 2,
                        name : 'number',
                        fieldLabel: 'Number'
                    },{
                        xtype: 'textfield',
                        padding: 2,
                        name : 'extension',
                        fieldLabel: 'Extension'
                    }]
                }
            }
        });

        view.down('form').loadRecord(record);
        view.show();
    },
    editLocation:function(grid, record){
        console.log('editLocation clicked.');
        // todo: editLocation
    },
    editManager:function(grid, record){
        console.log('editManager clicked.');
        // todo: editManager
    },
    editAccount:function(grid, record){
        console.log('editAccount clicked.');
        // todo: editAccount
    },
    editFileData:function(grid, record){
        console.log('editFileData clicked.');
        // todo: editFileData
    }
});