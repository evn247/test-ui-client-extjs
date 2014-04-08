/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 12:07
 */
Ext.define('CM.controller.Organization', {
    extend: 'Ext.app.Controller',

    views: ['CM.view.OrganizationPanel',
            'CM.view.OrganizationWindow'],

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
        Ext.Msg.alert('MESSAGE','saveOrganization clicked.');
        var window = button.up('window');
        window.hide();
    }
});