/**
 * Created with IntelliJ IDEA.
 * User: Maksim.Gaidamakin
 * Date: 08.10.13
 * Time: 13:33
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NSI.support.components.column.DefaultLinkColumn', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.DefaultLinkColumn',

    initComponent: function () {
        this.renderer = function (v) {
            return v ? ('<a href="#" role="parent">' + v + '</a>') : null;
        };
        this.callParent(arguments);
    }

})
