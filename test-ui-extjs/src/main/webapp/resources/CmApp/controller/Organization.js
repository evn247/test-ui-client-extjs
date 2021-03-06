/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 12:07
 */
Ext.define('CM.controller.Organization', {
    extend: 'Ext.app.Controller',
    requires: ['CM.view.Util','CM.LogUtil'],

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
            'OrganizationWindow button[action=cancel]': {
                click: this.cancelEdit
            }
        });
    },
    editOrganization: function(grid, record) {
        console.log('record.class='+Ext.getClassName(record));
        var view = Ext.widget('OrganizationWindow');

        record.beginEdit();
        view.down('form').loadRecord(record);
        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.phones]', record.phones());
        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.managers]', record.managers());
        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.locations]', record.locations());
        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.accounts]', record.accounts());
        view.show();
    },

    cancelEdit:function(button){
        var window = button.up('window');
        var record = window.down('form').getRecord();
        record.cancelEdit();
        window.hide();
    },

    createOrganization:function(button){
        var view = Ext.widget('OrganizationWindow');
        view.down('form').loadRecord(Ext.create('CM.model.Organization'));
        view.show();
    },
    saveOrganization:function(button){
        console.log('saveOrganization clicked.');
        var window = button.up('window');
        var record = window.down('form').updateRecord().getRecord();
        CM.view.Util.saveRecord(record);

        CM.view.Util.copyFromTablePanel(window, 'grid[name=table.organization.phones]', record.phones());
        CM.view.Util.copyFromTablePanel(window, 'grid[name=table.organization.managers]', record.managers());
        CM.view.Util.copyFromTablePanel(window, 'grid[name=table.organization.locations]', record.locations());
        CM.view.Util.copyFromTablePanel(window, 'grid[name=table.organization.accounts]', record.accounts());

        window.hide();
    }
});