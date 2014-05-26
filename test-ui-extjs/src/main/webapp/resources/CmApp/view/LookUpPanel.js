/**
 * User: Eduard.Napolov
 * Date: 08.04.14
 * Time: 12:01
 */
Ext.define('CM.view.LookUpPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.LookUpPanel',
    requires: ['CM.LogUtil','CM.view.LookUpField'],
    layout: {
        type: 'hbox',
        align:'stretch'
    },
    textField:undefined,
    createEntityWindow:null,
    createRecord:null,
    updateOwner:null,
    readOwner:null,
    renderer:null,

    initComponent: function () {
        var me = this,
            fieldLabel = this.params.fieldLabel;
        this.createEntityWindow = this.params.entityEditorWindowProducer;
        this.createRecord = this.params.recordFactory;
        this.updateOwner = this.params.updateOwner;
        this.readOwner = this.params.readOwner;
        this.renderer = this.params.renderer;

        console.log('create LookUpPanel, renderer:'+this.renderer);

        var updateOwnerRecord = function(window, record)
        {
            console.log('updateOwnerRecord called, record:');
            CM.LogUtil.logRecord(record);

            var owner = me.up('form').getRecord();
            console.log('current owner record:');
            CM.LogUtil.logRecord(owner);

            me.updateOwner(owner, record);
            me.textField.updateValue(record);
        };

        var editRecord =function(record)
        {
            record.beginEdit();
            var view = me.createEntityWindow(record);
            view.on('save', updateOwnerRecord);
            view.show();
        };

        this.setBorder(false);

        this.textField = Ext.create('CM.view.LookUpField',{
            padding: 2,
            fieldLabel: fieldLabel,
            flex: 1,
            params:{
                renderer: me.renderer,
                reader: me.readOwner
            }
        });
        this.items = [this.textField,
        {
            xtype:'button',
            text: '...',
            scope: this,
            handler:function(button){
                console.log('lookup button handler called...');
                var record = me.up('form').getRecord();
                console.log('current record:');
                CM.LogUtil.logRecord(record);
                var ownerRecord = me.readOwner(record);
                if(!ownerRecord)
                {
                    ownerRecord = me.createRecord();
                }
                editRecord(ownerRecord);
            }
        }];

        this.callParent(arguments);
    }
});
