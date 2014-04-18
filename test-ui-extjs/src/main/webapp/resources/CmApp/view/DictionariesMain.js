Ext.define('CM.view.DictionariesMain', {
    extend: 'Ext.Container',
    alias: 'widget.DictionariesMain',

    requires: [
        'CM.view.OrganizationPanel',
        'CM.view.ServicePanel'
    ],

    initComponent: function () {
        this.items = [
            {
                xtype:'OrganizationPanel'
            },
            {
                xtype:'ServicePanel'
            }
        ];


        this.callParent(arguments);
    }

});