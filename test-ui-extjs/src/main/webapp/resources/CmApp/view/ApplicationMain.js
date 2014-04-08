Ext.define('CM.view.ApplicationMain', {
    extend: 'Ext.Container',
    alias: 'widget.ApplicationMain',
    layout: 'card',

    requires: [
        'CM.view.DictionariesMain',
        'CM.view.DocumentsMain'
    ],

    initComponent: function () {
        this.items = [
            {
                xtype: 'DictionariesMain'
            },
            {
                xtype: 'DocumentsMain'
            }
        ];


        this.callParent(arguments);
    }

});