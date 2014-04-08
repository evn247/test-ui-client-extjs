Ext.define('CM.support.components.ButtonPanelSaveCancel', {
    extend: 'Ext.container.Container',

    requires: ['CM.support.components.DefaultButton'],

    alias: 'widget.ButtonPanelSaveCancel',

    catcher : null,

    okTitle: 'Сохранить',
    okDisabled: false,

    cancelTitle: 'Закрыть',

    initComponent: function () {
        var me = this;

        this.addEvents(['save','cancel']);

        this.layout = {
            type: 'hbox',
            pack: 'end'
        };

        this.items = [
            {
                xtype: 'container',
                autoHeight: true,
                items: this.extra,
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'left'
                }
            },
            {
                xtype: 'DefaultButton',
                text: me.okTitle,
                disabled: me.okDisabled,

                name: 'save',
                handler: function(button,event){
                    var dst=me.catcher ? me.catcher : me;
                    dst.fireEvent('save', dst, button, event);
                }
            },
            {
                xtype: 'DefaultButton',
                text: me.cancelTitle,
                name: 'cancel',
                margin: '0 0 0 10',
                handler: function(button,event){
                    var dst=me.catcher ? me.catcher : me;
                    dst.fireEvent('cancel', dst, button, event);
                }
            }
        ];

        this.callParent(arguments);
    }

});
