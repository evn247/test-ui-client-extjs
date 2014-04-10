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
            'EntityWindow':{
                save:function(window, record, stores){
                    console.log('save event. window='+window+' record='+record+' stores='+stores);
                }
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
        this.copy(records, table.store);
    },
    copy:function(from, to)
    {
        from.each(function(record)
        {
            to.add(record);
        });
    },

    createOrganization:function(button){
        var view = Ext.widget('OrganizationWindow');
        view.show();
    },
    saveOrganization:function(button){
        console.log('saveOrganization clicked.');
        var window = button.up('window');
        var record = window.down('form').getRecord();
        console.log('record='+record);
        console.log('id='+record.get('id')+' name='+record.get('name'));
        var phones = record.phones();
        var store = window.down('grid[name=table.organization.phones]').store;
        console.log('store='+store);
        console.log('count='+store.getCount());
        console.log('phones.count='+phones.getCount());
        phones.removeAll(true);
        console.log('after remove phones.count='+phones.getCount());
        this.copy(store, phones);
        console.log('after copy phones.count='+phones.getCount());

        window.hide();
    }
});