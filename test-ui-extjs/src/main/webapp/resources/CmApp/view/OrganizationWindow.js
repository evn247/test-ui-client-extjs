/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.OrganizationWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.OrganizationWindow',
    requires: ['CM.view.EntityPanel','CM.view.ViewFactory'],

    title: 'Organization',
    layout: {
        type: 'vbox',
        align:'stretch'
    },
    autoShow: true,
    autoScroll:true,
    modal:true,

    width: 800,
    height:600,
    padding: 6,

    initComponent: function() {
        this.items = [
        {
            xtype: 'form',
            padding: 6,
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            items: [{
                xtype: 'textfield',
                padding: 2,
                name : 'name',
                fieldLabel: 'Name'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'inn',
                fieldLabel: 'INN'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'website',
                fieldLabel: 'Web-Site'
            },{
                xtype: 'textfield',
                padding: 2,
                name : 'email',
                fieldLabel: 'E-Mail'
            },{
                xtype:'textfield',
                editable:false,
                padding: 2,
                name:"address_id",
                fieldLabel:"Judicial address",
                listeners:{
                    change:function(src, newValue, oldValue){
                        console.log('onChange, newValue:'+newValue+' class='+Ext.getClassName(newValue));
                        console.log('onChange, oldValue:'+oldValue);
                    }
                }
            }]
        },
        CM.view.ViewFactory.createOrganizationPhonePanel(),
        CM.view.ViewFactory.createOrganizationManagerPanel(),
        CM.view.ViewFactory.createOrganizationLocationPanel(),
        CM.view.ViewFactory.createOrganizationAccountPanel()
        ];

        this.buttons = [{
                xtype:'button',
                text: 'Очистить',
                scope: this,
                action: 'clear'
            },
            {
                xtype:'button',
                text:'Сохранить',
                action: 'save'
            },
            {
                xtype:'button',
                text:'Отменить',
                action: 'cancel'
            }
        ];

        this.callParent(arguments);
    }
});
