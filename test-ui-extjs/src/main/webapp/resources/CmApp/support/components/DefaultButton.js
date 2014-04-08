Ext.define('CM.support.components.DefaultButton', {
    extend: 'Ext.button.Button',
    alias: 'widget.DefaultButton',

    initComponent: function () {
        this.cls = 'cm-button-default';
        this.callParent(arguments);
    }

})
