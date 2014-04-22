/**
 * Main panel for documents.
 */
Ext.define('CM.view.DocumentsMain', {
    extend: 'Ext.Container',
    alias: 'widget.DocumentsMain',
    layout: 'fit',

    requires: [
        'CM.view.ContractPanel'
    ],

    initComponent: function () {
        this.items = [
            {
                xtype:'ContractPanel'
            }
        ];


        this.callParent(arguments);
    }

});