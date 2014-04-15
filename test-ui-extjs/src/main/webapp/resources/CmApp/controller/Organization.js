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
    grid:null,

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
        this.grid = grid;
        var view = Ext.widget('OrganizationWindow');

        console.log('record.class='+Ext.getClassName(record));
        console.log('record.getAddress:');
        CM.LogUtil.logRecord(record.getAddress());


        view.down('form').loadRecord(record);
        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.phones]', record.phones());
        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.managers]', record.managers());
        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.locations]', record.locations());
        CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.accounts]', record.accounts());
        view.show();
    },


    createOrganization:function(button){
        var view = Ext.widget('OrganizationWindow');
        view.down('form').loadRecord(Ext.create('CM.model.Organization'));
        view.show();
    },
    saveOrganization:function(button){
        console.log('saveOrganization clicked.');
        var window = button.up('window');
        var record = window.down('form').getRecord();
        var table = this.grid;
        if(!record.getId())
        {
            console.log('potentially new entry');

            var found = false;
            table.store.each(function(entry){
                console.log('checking entry:');
                CM.LogUtil.logRecord(entry);
                if(entry === record){
                    console.log('entry matched record!');
                    found = true;
                }
            });

            console.log('found='+found);
            if(!found)
            {
                table.store.add(record);
            }
            table.store.commitChanges();
        }
        CM.view.Util.copyFromTablePanel(window, 'grid[name=table.organization.phones]', record.phones());
        CM.view.Util.copyFromTablePanel(window, 'grid[name=table.organization.managers]', record.managers());
        CM.view.Util.copyFromTablePanel(window, 'grid[name=table.organization.locations]', record.locations());
        CM.view.Util.copyFromTablePanel(window, 'grid[name=table.organization.accounts]', record.accounts());

        window.hide();
    }
});