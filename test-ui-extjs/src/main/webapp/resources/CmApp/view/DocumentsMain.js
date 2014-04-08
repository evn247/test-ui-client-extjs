/**
 * Main panel for documents.
 */
Ext.define('CM.view.DocumentsMain', {
    extend: 'Ext.Container',
    alias: 'widget.DocumentsMain',
    layout: 'fit',

    initComponent: function () {
        this.items = [
            {
                html: 'DOCUMENTS_MAIN_PLACEHOLDER'
            }
        ];


        this.callParent(arguments);
    }

});