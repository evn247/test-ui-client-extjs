Ext.define('CM.view.DictionariesMain', {
    extend: 'Ext.Container',
    alias: 'widget.DictionariesMain',

    requires: [
        'CM.view.OrganizationPanel'
    ],

    initComponent: function () {
        this.items = [
            {
                xtype:'OrganizationPanel'
            }
        ];


        this.callParent(arguments);
    }

});