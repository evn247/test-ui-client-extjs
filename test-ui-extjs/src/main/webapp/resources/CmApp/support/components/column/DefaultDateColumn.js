/**
 * Created with IntelliJ IDEA.
 * User: Maksim.Gaidamakin
 * Date: 08.10.13
 * Time: 13:33
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NSI.support.components.column.DefaultDateColumn', {
    requires: ['NSI.support.Shared'],

    extend: 'Ext.grid.column.Column',
    alias: 'widget.DefaultDateColumn',

    initComponent: function () {
        this.width = 100;

        this.renderer = function (v) {
            return NSI.support.Shared.formatVersionDate(v);
        };

        this.callParent(arguments);
    }

})
