/**
 * User: Eduard.Napolov
 * Date: 08.04.14
 * Time: 12:01
 */
Ext.define('CM.view.SelectorPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SelectorPanel',
    requires: ['CM.LogUtil','CM.view.LookUpField'],
    layout: {
        type: 'hbox',
        align:'stretch'
    },
    textField:undefined,
    selectorStore:null,
    selectorWindowName:null,
    updateOwner:null,
    readOwner:null,
    renderer:null,

    initComponent: function () {
        var me = this,
            fieldLabel = this.params.fieldLabel,
            selectorTable = this.params.selectorTable,
            selectorWindowName = this.params.selectorWindowName,
            entityEditorWindowProducer = this.params.entityEditorWindowProducer,
            recordFactory = this.params.recordFactory,
            selectionHandler = this.params.selectionHandler;
        this.selectorWindowName = this.params.selectorWindowName;
        this.updateOwner = this.params.updateOwner;
        this.readOwner = this.params.readOwner;
        this.renderer = this.params.renderer;

        console.log('create SelectorPanel, renderer:'+this.renderer);

        selectorTable.getSelectionModel().bindStore(selectorTable.getStore());

        var updateOwnerRecord = function(window, record)
        {
            console.log('SelectorPanel.updateOwnerRecord called, record:');
            CM.LogUtil.logRecord(record);

            var owner = me.up('form').getRecord();
            console.log('current owner record:');
            CM.LogUtil.logRecord(owner);

            me.updateOwner(owner, record);
            me.textField.updateValue(record);
        };

        var showSelectionWindow =function(currentSelection)
        {
            var view = Ext.create('CM.view.SelectionWindow',{
                title:selectorWindowName,
                params:{
                    table: selectorTable,
                    entityEditorWindowProducer: entityEditorWindowProducer,
                    recordFactory: recordFactory
                }
            });
            view.setCurrentSelection(currentSelection);
            view.on('entitySelection', updateOwnerRecord);
            view.on('entitySelection', selectionHandler);
            view.show();
        };

        this.setBorder(false);

        this.textField = Ext.create('CM.view.LookUpField',{
            padding: 2,
            name : 'address_id',
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
                showSelectionWindow(me.readOwner(record));
            }
        }];

        this.callParent(arguments);
    },
    setRecord:function(record)
    {
        this.textField.updateValue(this.readOwner(record))
    }
});
