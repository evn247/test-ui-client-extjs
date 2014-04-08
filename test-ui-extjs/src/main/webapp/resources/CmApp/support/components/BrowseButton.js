Ext.define('CM.support.components.BrowseButton', {
    extend: 'Ext.button.Button',
    alias: 'widget.browseButton',

    initComponent: function () {
        this.cls = 'cm-button-browse';
        this.text='...';
        this.callParent(arguments);
    }
})
