Ext.define('CM.support.components.DefaultRowNumberer', {
    extend: 'Ext.grid.column.RowNumberer',
    alias: 'widget.DefaultRowNumberer',

    initComponent: function () {
        this.width = 50;
        this.header = '№';
        this.callParent(arguments);
    }
})
