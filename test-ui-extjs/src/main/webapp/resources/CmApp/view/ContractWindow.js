/**
 * User: Eduard.Napolov
 * Date: 04.04.14
 * Time: 15:08
 */
Ext.define('CM.view.ContractWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ContractWindow',
    requires: ['CM.view.EntityPanel',
               'CM.view.ViewFactory',
               'CM.view.LookUpPanel',
               'CM.view.ComboBoxSelector',
               'CM.view.SelectorPanel',
               'CM.view.SelectionWindow',
               'CM.view.Util'],

    title: 'Contract',
    layout: {
        type: 'vbox',
        align:'stretch'
    },
    autoShow: true,
    autoScroll:true,
    modal:true,
    record: null,
    width:800,

    padding: 6,

    initComponent: function() {
        var me = this;

        this.items = [
        {
            xtype: 'form',
            border:false,
            padding: 6,
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            items: [
            Ext.create('Ext.panel.Panel',{
                layout: {
                    type: 'vbox',
                    align:'stretch'
                },
                collapsible: false,
                collapsed: false,
                border:false,
                items:[
                    {

                        xtype:'SelectorPanel',
                        name:'clientSelector',
                        params:{
                            fieldLabel: 'Full Name',

                            selectorTable: Ext.create('Ext.grid.Panel',{
                                name: 'table.select.organization',
                                store:'orgStore',
                                selModel: Ext.create('Ext.selection.RowModel', {
                                    singleSelect: true
                                }),

                                columns: [
                                    {
                                        xtype:'rownumberer'
                                    },
                                    {
                                        header: 'Short Name',
                                        dataIndex: 'shortName',
                                        flex:1
                                    },
                                    {
                                        header: 'INN',
                                        dataIndex: 'inn',
                                        flex:1
                                    },
                                    {
                                        header: 'KPP',
                                        dataIndex: 'kpp'
                                    }
                                ]
                            }),

                            selectorWindowName: 'Organization',

                            recordFactory:function(){
                                return Ext.create('CM.model.Organization');
                            },
                            entityEditorWindowProducer: function(record){
                                var view = Ext.widget('OrganizationWindow');

                                record.beginEdit();
                                view.down('form').loadRecord(record);
                                CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.phones]', record.phones());
                                CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.managers]', record.managers());
                                CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.locations]', record.locations());
                                CM.view.Util.setupTablePanel(view, 'grid[name=table.organization.accounts]', record.accounts());
                                view.show();
                                return view;
                            },
                            updateOwner:function(owner, record){
                                owner.setClient(record);
                            },
                            readOwner:function(record){
                                return record.getClient();
                            },
                            renderer:function(record)
                            {
                                return record.get('fullName');
                            },
                            selectionHandler:function(window, record)
                            {
                                console.log('ContractWindow.selectionHandler called');
                                me.record.set('clientShortName', record.get('shortName'));
                                me.record.set('clientFullName', record.get('fullName'));

                                var address = record.getAddress();
                                me.record.set('clientCity', address.get('city'));
                                me.record.set('clientStreetAddress', address.get('streetAddress'));
                                me.record.set('clientRegion', address.get('region'));
                                me.record.set('clientPostIndex', address.get('postIndex'));

                                // reset linked entities
                                me.resetRecordOnOrganizationChange();
                                // update compounding components
                                me.onClientChange(me.record);

                                console.log('Updated record is:');
                                CM.LogUtil.logRecord(me.record);

                                me.down('form').loadRecord(me.record);
                            }
                        }
                    },{
                        xtype: 'textfield',
                        padding: 2,
                        readOnly:true,
                        name : 'clientShortName',
                        fieldLabel: 'Short Name'
                    },
                    Ext.create('CM.view.LookUpField',{
                        padding: 2,
                        name : 'clientAddress',
                        fieldLabel: 'Client Address',
                        readOnly:true,
                        flex: 1,
                        params:{
                            renderer: function(record){
                                return CM.view.Util.join(record, ',',['postIndex','region','city','streetAddress']);
                            },
                            reader: function(record){
                                return record.getAddress();
                            }
                        }
                    }),
                    Ext.create('CM.view.ComboBoxSelector',{
                        padding: 2,
                        name : 'clientPhone',
                        flex: 1,
                        params:{
                            fieldLabel: 'Client Phone',
                            renderer: function(record){
                                return CM.view.Util.join(record, ' ',['type','number','extension']);
                            },
                            dataReader: function(record){
                                return record.getClient().phones();
                            },
                            currentRecordReader:function(record){
                                return record.getClientPhone();
                            },
                            selectionHandler:function(record){
                                console.log('clientPhone.selectionHandler.record:'+record);
                                CM.LogUtil.logRecord(record);

                                me.record.set('clientPhoneType', record.get('type'));
                                me.record.set('clientPhoneNumber', record.get('number'));
                                me.record.set('clientPhoneExt', record.get('extension'));

                                me.record.setClientPhone(record);

                                console.log('Updated record is:');
                                CM.LogUtil.logRecord(me.record);

                                me.down('form').loadRecord(me.record);

                            }
                        }

                    }),
                    Ext.create('Ext.panel.Panel',{
                        layout: {
                            type: 'hbox',
                            align:'stretch'
                        },
                        collapsible: false,
                        collapsed: false,
                        border:false,
                        items:[
                            Ext.create('CM.view.ComboBoxSelector',{
                            padding: 2,
                            name : 'clientOfficer',
                            flex: 1,
                            params:{
                                fieldLabel: 'Client Officer',
                                renderer: function(record){
                                    var position = record.get('position');
                                    var fullName = CM.view.Util.join(record,
                                        ' ',['lastName', 'firstName', 'middleName']);
                                    return position + ':' + fullName;
                                },
                                dataReader: function(record){
                                    return record.getClient()
                                        ? record.getClient().managers()
                                        : Ext.create('Ext.data.Store');
                                },
                                currentRecordReader:function(record){
                                    return record.getExecutiveOfficer();
                                },
                                selectionHandler:function(record){
                                    console.log('clientOfficer.selectionHandler.record:'+record);
                                    CM.LogUtil.logRecord(record);

                                    me.record.set('clientOfficerPosition', record.get('position'));
                                    me.record.set('clientOfficerFullName',
                                        CM.view.Util.join(record,
                                            ' ',['lastName','firstName','middleName']));

                                    me.record.setExecutiveOfficer(record);

                                    // update linked component.
                                    me.down('ComboBoxSelector[name=officerPhone]').setRecord(me.record);

                                    console.log('Updated record is:');
                                    CM.LogUtil.logRecord(me.record);

                                    me.down('form').loadRecord(me.record);
                                }
                            }

                        }),Ext.create('CM.view.ComboBoxSelector',{
                            padding: 2,
                            name : 'officerPhone',
                            flex: 1,
                            params:{
                                fieldLabel: 'Officer Phone',
                                renderer: function(record){
                                    return CM.view.Util.join(record, ' ',['type','number','extension']);
                                },
                                dataReader: function(record){
                                    return record.getExecutiveOfficer()
                                        ? record.getExecutiveOfficer().phones()
                                        : Ext.create('Ext.data.Store');
                                },
                                currentRecordReader:function(record){
                                    return record.getOfficerPhone();
                                },
                                selectionHandler:function(record){
                                    console.log('officerPhone.selectionHandler.record:'+record);
                                    CM.LogUtil.logRecord(record);

                                    me.record.set('clientOfficerPhoneType', record.get('type'));
                                    me.record.set('clientOfficerPhoneNumber', record.get('number'));
                                    me.record.set('clientOfficerPhoneExt', record.get('extension'));

                                    me.record.setExecutiveOfficer(record);

                                    console.log('Updated record is:');
                                    CM.LogUtil.logRecord(me.record);

                                    me.down('form').loadRecord(me.record);

                                }
                            }

                        })]
                    }),,
                    Ext.create('CM.view.ComboBoxSelector',{
                        padding: 2,
                        name : 'lot',
                        flex: 1,
                        params:{
                            fieldLabel: 'Lot',
                            renderer: function(record){
                                var name = record.get('name');
                                var address = CM.view.Util.join(record, ',',['postIndex','region','city','streetAddress']);
                                return name ? name +':'+address : address;
                            },
                            dataReader: function(record){
                                return record.getClient()
                                    ? record.getClient().locations()
                                    : Ext.create('Ext.data.Location');
                            },
                            currentRecordReader:function(record){
                                return record.getSiteAddress();
                            },
                            selectionHandler:function(record){
                                console.log('lot.selectionHandler.record:'+record);
                                CM.LogUtil.logRecord(record);

                                me.record.set('clientLotCity', record.get('city'));
                                me.record.set('clientLotStreetAddress', record.get('streetAddress'));
                                me.record.set('clientLotRegion', record.get('region'));
                                me.record.set('clientLotPostIndex', record.get('postIndex'));

                                me.record.setSiteAddress(record);

                                console.log('Updated record is:');
                                CM.LogUtil.logRecord(me.record);

                                me.down('form').loadRecord(me.record);
                            }
                        }

                    }),
                    Ext.create('CM.view.ComboBoxSelector',{
                        padding: 2,
                        name : 'account',
                        flex: 1,
                        params:{
                            fieldLabel: 'Account',
                            renderer: function(record){
                                return CM.view.Util.join(record, ':',['accountName','accountNumber']);
                            },
                            dataReader: function(record){
                                return record.getClient()
                                    ? record.getClient().accounts()
                                    : Ext.create('Ext.data.Account');
                            },
                            currentRecordReader:function(record){
                                return record.getAccount();
                            },
                            selectionHandler:function(record){
                                console.log('account.selectionHandler.record:'+record);
                                CM.LogUtil.logRecord(record);

                                me.record.set('clientAccountNumber', record.get('accountNumber'));
                                me.record.set('clientBank', record.get('bankName'));
                                me.record.set('clientBankBik', record.get('bik'));
                                me.record.set('clientBankCorrAccount', record.get('corrAccountNumber'));

                                me.record.setAccount(record);

                                console.log('Updated record is:');
                                CM.LogUtil.logRecord(me.record);

                                me.down('form').loadRecord(me.record);
                            }
                        }

                    }),
                    Ext.create('CM.view.LookUpField',{
                        padding: 2,
                        name : 'bank',
                        fieldLabel: 'Bank',
                        readOnly:true,
                        flex: 1,
                        params:{
                            renderer: function(record){
                                var bank = record.get('clientBank');
                                var bik = record.get('clientBankBik');
                                var corr = record.get('clientBankCorrAccount');
                                var v = bank ? bank +', ' : '';
                                v += (bik ? 'Bik:'+bik : '');
                                v += (corr ? (v.length > 0 ? ', ':'')+'Corr Account:'+corr: '');
                                return v;
                            },
                            reader: function(record){
                                return record;
                            }
                        }
                    }),
                    {
                        xtype:'SelectorPanel',
                        name:'kbkSelector',
                        params:{
                            fieldLabel: 'KBK',

                            selectorTable: Ext.create('Ext.grid.Panel',{
                                name: 'table.select.kbk',
                                store:'kbkStore',
                                selModel: Ext.create('Ext.selection.RowModel', {
                                    singleSelect: true
                                }),

                                columns: [
                                    {
                                        xtype:'rownumberer'
                                    },
                                    {
                                        header: 'Description',
                                        dataIndex: 'description',
                                        flex:1
                                    },
                                    {
                                        header: 'Code',
                                        dataIndex: 'code'
                                    }
                                ]
                            }),

                            selectorWindowName: 'KBK',

                            recordFactory:function(){
                                return Ext.create('CM.model.KBK');
                            },
                            entityEditorWindowProducer: function(record){
                                var view = Ext.widget('KbkWindow');

                                record.beginEdit();
                                view.down('form').loadRecord(record);
                                view.show();
                                return view;
                            },
                            updateOwner:function(owner, record){
                                owner.setKbk(record);
                            },
                            readOwner:function(record){
                                return record.getKbk();
                            },
                            renderer:function(record)
                            {
                                return CM.view.Util.join(record, ':', ['description','code']);
                            },
                            selectionHandler:function(window, record)
                            {
                                console.log('ContractWindow.kbk.selectionHandler called');
                                me.record.set('clientKbk', record.get('code'));

                                console.log('Updated record is:');
                                CM.LogUtil.logRecord(me.record);

                                me.down('form').loadRecord(me.record);
                            }
                        }
                    }
                ]
            }),
            Ext.create('Ext.panel.Panel',{
                layout: {
                    type: 'hbox',
                    align:'stretch'
                },
                collapsible: false,
                collapsed: false,
                border:false,
                items:[{
                    xtype: 'combobox',
                    padding: 2,
                    editable:false,
                    name : 'termOfPayment',
                    fieldLabel: 'Term',
                    store: Ext.create('Ext.data.Store',{
                        id:0,
                        fields:['value'],
                        data:[{"value":'Post-Pay'},{"value":'Advance'}]
                    }),
                    valueField:'value',
                    displayField:'value',
                    queryMode:'local',
                    listeners:{
                        'select': function(combo, records){
                            console.log('select, records[0].value='+records[0].get('value'));
                            me.record.set('termOfPayment', records[0]);
                            var field = me.down('textfield[name=prepayPercent]');
                            if(records[0].get('value') === 'Advance'){
                                field.enable();
                            }
                            else{
                                field.setValue('');
                                field.disable();
                            }
                        }
                    }
                },{
                    xtype: 'textfield',
                    padding: 2,
                    name : 'prepayPercent',
                    fieldLabel: 'Prepay percent'
                }]
            }),
            Ext.create('Ext.panel.Panel',{
                layout: {
                    type: 'hbox',
                    align:'stretch'
                },
                collapsible: false,
                collapsed: false,
                border:false,
                items:[
                {
                    xtype: 'datefield',
                    padding: 2,
                    name : 'date',
                    fieldLabel: 'Date'
                },
                {
                    xtype: 'textfield',
                    padding: 2,
                    flex:1,
                    name : 'manager',
                    fieldLabel: 'Manager'
                }
                ]
            }),
            Ext.create('Ext.panel.Panel',{
                layout: {
                    type: 'hbox',
                    align:'stretch'
                },
                collapsible: false,
                collapsed: false,
                border: false,

                items:[
                {
                    xtype: 'textfield',
                    readOnly:true,
                    padding: 2,
                    name : 'type',
                    fieldLabel: 'Type'
                },{
                    xtype: 'textfield',
                    readOnly:true,
                    padding: 2,
                    name : 'status',
                    fieldLabel: 'Status'
                }]
            }),
            Ext.create('CM.view.EntityPanel',{
                collapsible: false,
                collapsed: false,
                border: false,
                params:{
                    title:'Services',
                    recordFactory:function(){
                        var line = Ext.create('CM.model.ContractServiceLine');
                        line.setService(Ext.create('CM.model.Service'));
                        return line;
                    },
                    createEntityWindow: function(record){
                        var view = Ext.create('CM.view.EntityWindow',{
                            title : 'Service',
                            width: 400,
                            params:{
                                name : 'contract.service',
                                form: {
                                    xtype: 'form',
                                    padding: 6,
                                    layout: {
                                        type: 'vbox',
                                        align:'stretch'
                                    },
                                    items: [{

                                        xtype:'SelectorPanel',
                                        name:'serviceSelector',
                                        params:{
                                            fieldLabel: 'Full Name',
                                            selectorTable: Ext.create('Ext.grid.Panel',{
                                                name: 'table.select.organization.service',
                                                store:'serviceStore',
                                                selModel: Ext.create('Ext.selection.RowModel', {
                                                    singleSelect: true
                                                }),

                                                columns: [
                                                    {
                                                        xtype:'rownumberer'
                                                    },
                                                    {
                                                        header: 'Short Name',
                                                        dataIndex: 'shortName',
                                                        flex:1
                                                    },
                                                    {
                                                        header: 'Price',
                                                        dataIndex: 'price'
                                                    }
                                                ]
                                            }),

                                            selectorWindowName: 'Service',

                                            recordFactory:function(){
                                                return Ext.create('CM.model.Service');
                                            },
                                            entityEditorWindowProducer: function(record){
                                                var view = Ext.widget('ServiceWindow');

                                                record.beginEdit();
                                                view.down('form').loadRecord(record);
                                                view.show();
                                                return view;
                                            },
                                            updateOwner:function(owner, record){
                                                console.log('updateOwner, owner:');
                                                CM.LogUtil.logRecord(owner);
                                                console.log('record:');
                                                CM.LogUtil.logRecord(record);
                                                owner.setService(record);
                                            },
                                            readOwner:function(record){
                                                return record.getService();
                                            },
                                            renderer:function(record)
                                            {
                                                return record.get('fullName');
                                            },
                                            selectionHandler:function(window, record)
                                            {
                                                console.log('ContractWindow.Service.selectionHandler called, record:');
                                                CM.LogUtil.logRecord(record);
                                                var serviceLine = view.down('form').getRecord();
                                                console.log('line:');
                                                CM.LogUtil.logRecord(serviceLine);
                                                serviceLine.set('shortName', record.get('shortName'));
                                                serviceLine.set('fullName', record.get('fullName'));
                                                serviceLine.set('price', record.get('price'));

                                                console.log('Updated record is:');
                                                CM.LogUtil.logRecord(serviceLine);

                                                view.down('form').loadRecord(serviceLine);
                                            }
                                        }
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'shortName',
                                        fieldLabel: 'Short Name'
                                    },{
                                        xtype: 'textfield',
                                        padding: 2,
                                        name : 'price',
                                        fieldLabel: 'Price'
                                    }]
                                },
                                tables:[]
                            }
                        });
                        view.down('form').loadRecord(record);
                        view.down('SelectorPanel').setRecord(record);

                        return view;
                    },
                    table: Ext.create('Ext.grid.Panel',{
                        name: 'contract.service.lines',
                        store:Ext.create('CM.store.ContractServiceLine'),

                        columns: [
                            {
                                xtype:'rownumberer'
                            },
                            {
                                header: 'Full name',
                                dataIndex: 'fullName',
                                flex:1
                            },
                            {
                                header: 'Short name',
                                dataIndex: 'shortName',
                                flex:1
                            },
                            {
                                header: 'Price',
                                dataIndex: 'price'
                            }
                        ]
                    })
                }
            })
            ]
        }];

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
    },

    loadRecord:function(record)
    {
        this.record = record;
        this.down('form').loadRecord(record);
        this.down('SelectorPanel[name=clientSelector]').setRecord(record);
        this.down('SelectorPanel[name=kbkSelector]').setRecord(record);
        this.onClientChange(record);
    },
    onClientChange: function(record){
        console.log('onClientChange...');
        this.down('LookUpField[name=clientAddress]').updateValue(record.getClient().getAddress());
        this.down('LookUpField[name=bank]').updateValue(record);
        this.down('ComboBoxSelector[name=clientPhone]').setRecord(record);
        this.down('ComboBoxSelector[name=clientOfficer]').setRecord(record);
        this.down('ComboBoxSelector[name=officerPhone]').setRecord(record);
        this.down('ComboBoxSelector[name=lot]').setRecord(record);
        this.down('ComboBoxSelector[name=account]').setRecord(record);
    },
    resetRecordOnOrganizationChange: function(){
        console.log('reset fields...');
        this.record.setClientPhone(Ext.create('CM.model.Phone'));
        this.record.setAccount(Ext.create('CM.model.Account'));
        this.record.setExecutiveOfficer(Ext.create('CM.model.Person'));
        this.record.setOfficerPhone(Ext.create('CM.model.Phone'));
        this.record.setSiteAddress(Ext.create('CM.model.Location'));
        this.record.setAccount(Ext.create('CM.model.Account'));
        this.record.set('clientAccountNumber', '');
        this.record.set('clientBank', '');
        this.record.set('clientBankBik', '');
        this.record.set('clientBankCorrAccount', '');
    },
    getRecord: function()
    {
        console.log('getRecord called');
        return this.record;
    },
    createContract:function(){
        var contract = Ext.create('CM.model.Contract');
        contract.set('type','Contract');
        contract.set('status', 'Draft');
        contract.set('date', new Date());
        this.loadRecord(contract)
    }

});
