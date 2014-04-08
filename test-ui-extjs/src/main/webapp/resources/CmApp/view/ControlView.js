/**
 * User: Eduard.Napolov
 * Date: 25.03.14
 * Time: 11:08
 */
Ext.define('CM.view.ControlView', {
    requires: [
    ],
    extend: 'Ext.Container',
    alias: 'widget.ControlView',

    initComponent: function () {
        alert("ControlView.initComponent()");
        this.items = [
            {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },

                html: 'Control View'
            }
        ];

        this.callParent(arguments);
    }

});