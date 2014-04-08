Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Ext.ux', 'extjs/src/ux/');

Ext.require(['Ext.data.*', 'Ext.grid.*']);

Ext.override(Ext.Window, {
    closeAction: 'hide'
})

var globId = '';

var combineRecordTerm = '';

var idDictArray = new Array();

var selDict = '';

var selDictRec = '';


try {


    // модель

    Ext.define('nsi.Mode.Dict', {
        extend: 'Ext.data.Model',
        fields: [
            {
                name: 'id',
                type: 'int',
                useNull: true
            },
            'name',
            'type',
            'termCount'
        ], validations: [
            {
                type: 'length',
                field: 'name',
                min: 1
            },
            {
                type: 'length',
                field: 'type',
                min: 1
            },
            {
                type: 'length',
                field: 'termCount',
                min: 1
            }
        ]
    });


    Ext.define('nsi.Mode.Dict.Rec', {
        extend: 'Ext.data.Model',
        fields: ['id', 'number', 'terms', 'code']
    })

    Ext.onReady(function () {


        function combineRecords(combineRecordTerm, code) {
            var f = Ext.getCmp('dictionaryPanel');

            Ext.Ajax.request({
                id: 'ajaxReq',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: "POST",
                url: "http://10.0.12.55:8080/nsi/dictionaries/" + globId + "/records/combine",
                //url: "/core-nsi-rest/dictionaries/" + globId + "/records/combine",
                //                        jsonData: {
                //                        "name":"testikQQQQ","type":"" + number + "","termCount":"2"
                //                        },
                jsonData: {
                    "record": {
                        "terms": [
                            combineRecordTerm
                        ],
                        "code": code

                    },
                    //  "numbers": idDictArray
                    "numbers": idDictArray
                },
                success: function (response, options) {
                    dictionaryRecordStore.load();
                    alert('Записи успешно объединены');
                    alert(response.responseText);
                    //                    Ext.Msg.alert("Message", response.responseText);
                    //                    var data = Ext.decode(response.responseText);
                    //                    Ext.Msg.alert("Message", data.msg);
                },
                failure: function (response, options) {
                    //                            alert("FAILURE " + response.responseText);
                    //                            var data = Ext.decode(response.responseText);
                    //                            Ext.Msg.alert("Message", data.msg);
                }
            });

        }

        var dictionaryStore = Ext.create('Ext.data.Store', {
            autoLoad: true,
            autoSync: true,
            model: 'nsi.Mode.Dict',
            id: 'dst',
            proxy: {
                type: 'rest',
                //  url: 'http://10.0.12.55:8080/nsi/dictionaries/',
                url: 'http://10.0.12.55:8080/nsi/dictionaries/',
                //  url:'http://10.0.12.55:8080/nsi/dictionaries/5',

                reader: {
                    type: 'json',
                    root: 'data'
                },
                writer: {
                    type: 'json'
                }
            },
            listeners: {
                write: function (store, operation) {

                    var record = operation.getRecords()[0],
                        name = Ext.String.capitalize(operation.action),
                        verb;


                    if (name == 'Destroy') {
                        record = operation.records[0];
                        verb = 'Destroyed';
                    } else {
                        verb = name + 'd';
                    }
                    //   Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));

                }
            }
        });

        var dictionaryRecordStore = Ext.create('Ext.data.Store', {
            autoLoad: true,
            autoSync: true,
            model: 'nsi.Mode.Dict.Rec',
            // fields: [],
            proxy: {
                type: 'rest',
                // url: 'http://10.0.12.55:8080/nsi/dictionaries/',
                url: 'http://10.0.12.55:8080/nsi/dictionaries/',
                reader: {
                    type: 'json',
                    root: 'data'
                },
                writer: {
                    type: 'json'
                }
            }

        });


//        var rowEditingDict = Ext.create('Ext.grid.plugin.RowEditing', {
//            listeners: {
//                cancelEdit: function (rowEditing, context) {
//                    // Canceling editing of a locally added, unsaved record: remove it
//                    if (context.record.phantom) {
//                        store.remove(context.record);
//                    }
//                }
//            }
//        });

        var pagingtbDict = Ext.create('Ext.toolbar.Paging', {
            store: dictionaryStore,
            pageSize: 10,
            displayInfo: true,
            displayMsg: 'Registros {0} - {1} de {2}',
            emptyMsg: 'No hay registros'
        });

        var pagingtbDictRec = Ext.create('Ext.toolbar.Paging', {
            store: dictionaryRecordStore,
            pageSize: 10,
            displayInfo: true,
            displayMsg: 'Registros {0} - {1} de {2}',
            emptyMsg: 'No hay registros'
        });


        function sort_and_unique(my_array) {
            my_array.sort();
            for (var i = 1; i < my_array.length; i++) {
                if (my_array[i] === my_array[i - 1]) {
                    my_array.splice(i--, 1);
                }
            }
            return my_array;
        };


        var menuDictGrid = Ext.create('Ext.menu.Menu', {
            plain: true,
            width: '240px',
            hidden: true,
            floating: true, // usually you want this set to True (default)
            renderTo: Ext.getBody(), // usually rendered by it's containing component
            items: [
                {
                    id: 'add',
                    text: 'Добавить'
                },
                {
                    id: 'edit',
                    text: 'Редактировать'
                },
                {
                    id: 'del',
                    text: 'Удалить'
                },
                {
                    id: 'showrec',
                    text: 'Просмотреть записи справочника'
                }
            ],
            listeners: {
                click: function (menu, item, e, eOpts) {
                    var store = Ext.getCmp('dictGrid').getStore();
                    var storeRec = Ext.getCmp('dictRecGrid').getStore();
                    if (item.id == 'add') {
                        Ext.getCmp('#btn').setHandler(newDictEnter);
                        // очистка содержимого окна
                        Ext.getCmp('dictForm').getForm().setValues({
                            name: '',
                            type: null,
                            termCount: null
                        })
                        editDicWindow.show();
                    } else if (item.id == 'edit') {
                        Ext.getCmp('dictForm').getForm().setValues({
                            name: selDict.data.name,
                            type: selDict.data.type,
                            termCount: selDict.data.termCount
                        })
                        editDicWindow.show();

                    } else if (item.id == 'del') {
                        Ext.Msg.confirm('Confirm', 'Справочник будет удален, продолжить?', function (buttonText) {
                            if (buttonText == "yes") {
                                store.remove(selDict);
                            }
                        });
                    } else if (item.id == 'showrec') {
                        var ids = selDict.data.id;
                        storeRec.getProxy().url = 'http://10.0.12.55:8080/nsi/' + 'dictionaries/' + ids + '/records';
                        //   str.getProxy().url = 'http://10.0.12.55:8080/nsi/dictionaries/' + ids + '/records';
                        storeRec.load();
                        //dictRecWindow.showAt(50, 50);
                        // dictRecWindow.show();
                        var south = Ext.getCmp('south');
                        Ext.suspendLayouts();
                        //  south.remove(0);
                        south.add({
                            xtype: 'dictRec'
                        });
                        Ext.resumeLayouts(true);
                        // Ext.getCmp('south').add({xtype:'dg'});
                    }
                }
            }

        });

        var menuDictRecGrid = Ext.create('Ext.menu.Menu', {
            // plain: true,
            width: '240px',
            hidden: true,
            floating: true, // usually you want this set to True (default)
            renderTo: Ext.getBody(), // usually rendered by it's containing component
            items: [
                {
                    id: 'addR',
                    text: 'Добавить'
                },
                {
                    id: 'editR',
                    text: 'Редактировать'
                },
                {
                    id: 'delR',
                    text: 'Удалить'
                },
                {
                    id: 'showrecR',
                    text: 'Просмотреть термины справочника'
                }
            ],
            listeners: {
                click: function (menu, item, e, eOpts) {
                    var store = Ext.getCmp('dictRecGrid').getStore();
                    var storeRec = Ext.getCmp('dictRecGrid').getStore();
                    if (item.id == 'addR') {
                        editDicRecWindow.show();
                    } else if (item.id == 'editR') {
                        Ext.getCmp('dictRecForm').getForm().setValues({
                            number: selDictRec.data.number,
                            terms: selDictRec.data.terms,
                            code: selDictRec.data.code
                        })
                        editDicRecWindow.show();
                    } else if (item.id == 'delR') {
                        Ext.Msg.confirm('Confirm', 'Справочник будет удален, продолжить?', function (buttonText) {
                            if (buttonText == "yes") {
                                storeRec.remove(selDict);
                            }
                        })
                    } else if (item.id == 'showrecR') {
//                                var ids = selDict.data.id;
//                                storeRec.getProxy().url = 'http://10.0.12.55:8080/nsi/' + 'dictionaries/' + ids + '/records';
//                                //   str.getProxy().url = 'http://10.0.12.55:8080/nsi/dictionaries/' + ids + '/records';
//                                storeRec.load();
//                              //dictRecWindow.showAt(50, 50);
//                                dictRecWindow.show();
                    }
                }
            }

        });

//        var dictionaryGr = Ext.create('Ext.grid.Panel', {
////            renderTo: document.body,
////            plugins: [rowEditingDict],
////            width: '80%',
////            height:'80%',
//      //      alias: 'widget.dictGrid',
//            frame: true,
//            title: 'Справочники',
//            store: dictionaryStore,
//            iconCls: 'icon-user',
//            id: 'dictGrid',
//            selModel: selectModelDict,
//            listeners: {
//                itemcontextmenu: function (dv, record, item, index, e) {
//                    //            if(type != 'dc') {
//                    //                return false;
//                    //            }
//                    //            e.stopEvent();   // Prevent the browser to show its default contextmenu
//                    //
//                    //            this.contextMenu.index = index;   // It's important! you'll need the rowIndex (the row that right clicked on it) on future.
//                    //            //this.contextMenu.getSelectionModel();
//                    //            this.contextMenu.showAt(e.getXY());   // Get the current X and Y coordinates and show the gridCtxMenu (my custom created menu) on that location.
//                    //            var selectedUnitRecord = this.getStore().getAt(index);
//                    //            selectedUnitId = selectedUnitRecord.get('id');
//                    //  menuGrid.show();
//                },
//                beforeitemcontextmenu: function (view, record, item, index, e) {
//                    e.stopEvent();
//                    menuDictGrid.showAt(e.getXY());
//                }
//
//            },
//            columns: [{
//                    text: 'Идентификатор',
//                    sortable: true,
//                    dataIndex: 'id'
//                }, {
//                    text: 'Имя',
//                    flex: 1,
//                    sortable: true,
//                    dataIndex: 'name',
//                    field: {
//                        xtype: 'textfield'
//                    }
//                }, {
//                    header: 'Тип',
//                    width: 80,
//                    sortable: true,
//                    dataIndex: 'type',
//                    field: {
//                        xtype: 'textfield'
//                    }
//                }, {
//                    text: 'Количество',
//                    width: 80,
//                    sortable: true,
//                    dataIndex: 'termCount',
//                    field: {
//                        xtype: 'textfield'
//                    }
//                }
//                //
//                //            , {
//                //                xtype: 'actioncolumn',
//                //                width: 50,
//                //                dataIndex: 'editColumn',
//                //                items: [{
//                //                    icon: 'images/edit.png', // Use a URL in the icon config
//                //                    tooltip: 'Edit',
//                //                    handler: function (grid, rowIndex, colIndex, item, e, record) {
//                //                        var ids = record.get('id');
//                //                        globId = ids;
//                //                        var str = Ext.getCmp('dictRecGrid').getStore();
//                //                        // str.getProxy().extraParams = {id : ids};
//                //                        //  str.getProxy().url = 'http://10.0.12.55:8080/' + 'nsi/dictionaries/' + ids + '/records';
//                //                        str.getProxy().url = 'http://10.0.12.55:8080/nsi/' + 'dictionaries/' + ids + '/records';
//                //                        //   str.getProxy().url = 'http://10.0.12.55:8080/nsi/dictionaries/' + ids + '/records';
//                //                        str.load();
//                //                        dictWindow.showAt(50, 50);
//                //                    }
//                //
//                //
//                //                }]
//                //            }
//
//            ],
//            dockedItems: [{
//                xtype: 'toolbar',
//                items: [
//                    //                {
//                    //                    text: 'Добавить справочник',
//                    //                    iconCls: 'icon-add',
//                    //                    handler: function () {
//                    //                        store.insert(0, new nsi.Mode.Dict());
//                    //                        rowEditingDict.startEdit(0, 0);
//                    //                    }
//                    //                }, '-',
//                    //                 {
//                    //                    itemId: 'delete',
//                    //                    text: 'Удалить справочник',
//                    //                    iconCls: 'icon-delete',
//                    //                    disabled: true,
//                    //                    handler: function () {
//                    //                        var selection = grid.getView().getSelectionModel().getSelection()[0];
//                    //                        if (selection) {
//                    //
//                    //                            Ext.Msg.confirm('Confirm', 'Справочник будет удален, продолжить?', function (
//                    //                                buttonText) {
//                    //                                if (buttonText == "yes") {
//                    //                                    debugger;
//                    //                                    store.remove(selection);
//                    //                                }
//                    //                            });
//                    //
//                    //                        }
//                    //                    }
//                    //                }
//                ]
//            }],
//            bbar: pagingtbDict
//        });

//       Ext.create('Ext.grid.Panel', {
//    //    Ext.define('Myapp1',{
//                            extend:'Ext.panel.Panel',
//                            alias: 'widget.dictGrid1',
//                            frame: true,
//                            title: 'Справочники',
//                            store: dictionaryStore,
//                            iconCls: 'icon-user',
//                            id: 'xxx',
//                            selModel: selectModelDict,
////                            listeners: {
////                                beforeitemcontextmenu: function (view, record, item, index, e) {
////                                    e.stopEvent();
////                                    menuDictGrid.showAt(e.getXY());
////                                }
////
////                            },
//                            columns: [{
//                                    text: 'Идентификатор',
//                                    sortable: true,
//                                    dataIndex: 'id'
//                                }, {
//                                    text: 'Имя',
//                                    flex: 1,
//                                    sortable: true,
//                                    dataIndex: 'name',
//                                    field: {
//                                        xtype: 'textfield'
//                                    }
//                                }, {
//                                    header: 'Тип',
//                                    width: 80,
//                                    sortable: true,
//                                    dataIndex: 'type',
//                                    field: {
//                                        xtype: 'textfield'
//                                    }
//                                }, {
//                                    text: 'Количество',
//                                    width: 80,
//                                    sortable: true,
//                                    dataIndex: 'termCount',
//                                    field: {
//                                        xtype: 'textfield'
//                                    }
//                                }
//
//                            ],
//                            bbar: pagingtbDict
//                })

        Ext.define('Myapp', {
            extend: 'Ext.grid.Panel',
            alias: 'widget.dict',
            frame: true,
            title: 'Справочники',
            store: dictionaryStore,
            iconCls: 'icon-user',
            id: 'dictGrid',
            selModel: selectModelDict,
            height: '50%',
            renderTo: Ext.getBody(),
            listeners: {
                beforeitemcontextmenu: function (view, record, item, index, e) {
                    e.stopEvent();
                    menuDictGrid.showAt(e.getXY());
                    //  menuDictGrid.show();
                }

            },
            columns: [
                {
                    text: 'Идентификатор',
                    sortable: true,
                    dataIndex: 'id'
                },
                {
                    text: 'Имя',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'name',
                    field: {
                        xtype: 'textfield'
                    }
                },
                {
                    header: 'Тип',
                    width: 80,
                    sortable: true,
                    dataIndex: 'type',
                    field: {
                        xtype: 'textfield'
                    }
                },
                {
                    text: 'Количество',
                    width: 80,
                    sortable: true,
                    dataIndex: 'termCount',
                    field: {
                        xtype: 'textfield'
                    }
                }

            ],
            bbar: pagingtbDict
        })

        //  var dictionaryGrid = Ext.create('widget.dictgrid');


        var dictGridd = Ext.create('Ext.panel.Panel', {
            //  title : 'Админика',
            renderTo: document.body,
            layout: 'border',
//                       defaults : {
//                       padding: '3'
//                       },
            //requires: ['dictGrid'],
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    title: 'Фильтр',
                    html: 'контент контент контент ',
                    width: screen.width * 0.2
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    items: [
                        {
                            xtype: 'dict',
                            region: 'center',
                            title: 'Справочники',
                            height: (screen.height) * 0.4
                        },
                        {
                            id: 'south',
                            // xtype: 'panel',
                            //  xtype: 'dg',
                            region: 'south',
                            //  height:(screen.height)*0.5,
                            //  layout:'fit',
                            title: 'Записи справочников'

                        }
                    ]
                }
            ]
        });


        var rowEditingDictRec = Ext.create('Ext.grid.plugin.RowEditing', {
            listeners: {
                cancelEdit: function (rowEditing, context) {
                    // Canceling editing of a locally added, unsaved record: remove it
                    if (context.record.phantom) {
                        dictionaryRecordStore.remove(context.record);
                    }
                }
            }
        });

        var dictRecNumb = '';

        var selectModelDictRec = new Ext.selection.CheckboxModel({
            listeners: {
                selectionchange: function (selectionModel, selected, options) {
                    records = selected;
                    if (records.length != 0) {
                        for (var i = 0; i < records.length; i++) {
                            idDictArray.push(selected[i].get('number'));
                        }
                    }
                }
            }
        });

        var selectModelDict = new Ext.selection.CheckboxModel({
            listeners: {
                selectionchange: function (selectionModel, selected, options) {

                }
            }
        });

        function addDictRecordsToWindow() {
            editDicWindow.removeAll();
            editDicWindow.add({
                bodyPadding: 10,
                items: [
                    {
                        xtype: 'textfield',
                        id: 'number',
                        fieldLabel: 'Номер',
                        allowBlank: false,
                        anchor: '70%'
                    },
                    {
                        xtype: 'textfield',
                        id: 'terms',
                        fieldLabel: 'Имя',
                        allowBlank: false,
                        anchor: '70%'
                    },
                    {
                        xtype: 'textfield',
                        id: 'code',
                        fieldLabel: 'Код',
                        allowBlank: false,
                        anchor: '70%'
                    }
                ],
                buttons: [
                    {
                        text: 'Ввод',
                        handler: function () {
                            var number = Ext.getCmp('number').value;
                            var terms = Ext.getCmp('terms').value;
                            var code = Ext.getCmp('code').value;
                            var ids = globId;
                            //  store1.getProxy().url = 'http://10.0.12.55:8080/' + 'nsi/dictionaries/' + ids + '/records';
                            dictionaryRecordStore.getProxy().url = 'http://10.0.12.55:8080/nsi/' + 'dictionaries/' + ids + '/records';
                            dictionaryRecordStore.sync();
                            dictionaryRecordStore.insert(0, new nsi.Mode.Dict.Rec({
                                number: number,
                                terms: [terms],
                                code: code
                            }));
                            editDicWindow.close();
                        }
                    }
                ]

            })
        }

        function addDictToWindow() {
            var dictionaryStore = Ext.getCmp('dictGrid').getStore();
            editDicWindow.removeAll();
            editDicWindow.add({
                bodyPadding: 10,
                items: [
                    {
                        xtype: 'textfield',
                        id: 'name',
                        fieldLabel: 'Имя',
                        allowBlank: false,
                        anchor: '70%',
                        value: ''
                    },
                    {
                        xtype: 'textfield',
                        id: 'type',
                        fieldLabel: 'Тип',
                        allowBlank: false,
                        anchor: '70%',
                        value: ''
                    },
                    {
                        xtype: 'textfield',
                        id: 'termCount',
                        fieldLabel: 'Количество',
                        allowBlank: false,
                        anchor: '70%',
                        value: ''
                    }
                ],
                buttons: [
                    {
                        text: 'Ввод',
                        handler: function () {
                            var name = Ext.getCmp('name').value;
                            var type = Ext.getCmp('type').value;
                            var termCount = Ext.getCmp('termCount').value;
                            dictionaryStore.getProxy().url = 'http://10.0.12.55:8080/nsi/dictionaries/' + ids + '/records';
                            // dictionaryStore.getProxy().url = 'http://10.0.12.55:8080/nsi/' + 'dictionaries/';
                            dictionaryStore.insert(0, new nsi.Mode.Dict({
                                name: name,
                                type: type,
                                termCount: termCount
                            }));
                            // dictionaryStore.sync();
                            editDicWindow.close();
                        }
                    }
                ]

            })
        }

//        var dictionaryRecordGrid = Ext.create('Ext.grid.Panel', {
//          //  plugins: [rowEditingDictRec],
//            title: 'Справочники',
//            id: 'dictRecGrid',
//            alias:'widget.dictRec',
//            store: dictionaryRecordStore,
////            selModel: selectModelDictRec,
////            width: screen.width,
////            height: screen.height,
//            columns: [{
//                text: 'Номер',
//                sortable: true,
//                dataIndex: 'number'
//            }, {
//                text: 'Имя',
//                flex: 1,
//                sortable: true,
//                dataIndex: 'terms',
//                field: {
//                    xtype: 'textfield'
//                }
//            }, {
//                header: 'Код',
//                width: 80,
//                sortable: true,
//                dataIndex: 'code',
//                field: {
//                    xtype: 'textfield'
//                }
//            }],
//            listeners : {
//                            beforeitemcontextmenu: function (view, record, item, index, e) {
//                                e.stopEvent();
//                                menuDictRecGrid.showAt(e.getXY());
//                            }
//            },
////            dockedItems: [{
////                xtype: 'toolbar',
////                items: [{
////                    text: 'Добавить справочник',
////                    iconCls: 'icon-add',
////                    handler: function () {
////                        addDictRecordsToWindow();
////                        recordsWindow.show();
////
////                    }
////                }, '-', {
////                    itemId: 'delete',
////                    text: 'Удалить справочник',
////                    iconCls: 'icon-delete',
////                    disabled: true,
////                    handler: function () {
////                        var selection = dictionaryRecordGrid.getView().getSelectionModel().getSelection()[0];
////                        if (selection) {
////                            var ids = globId;
////                            Ext.Msg.confirm('Confirm', 'Справочник будет удален, продолжить?', function (
////                                buttonText) {
////                                if (buttonText == "yes") {
////                                    dictRecNumb = selection.data.number;
////                                    //  store1.getProxy().url = 'http://10.0.12.55:8080/' + 'nsi/dictionaries/' + ids + '/records/' + nm1;
////                                    dictionaryRecordStore.getProxy().url = 'http://10.0.12.55:8080/nsi/' + 'dictionaries/' + ids + '/records/' + dictRecNumb;
////                                    dictionaryRecordStore.remove(selection);
////                                }
////                            });
////
////                        }
////                    }
////                }, '-', {
////                    itemId: 'union',
////                    text: 'Объединить записи',
////                    iconCls: 'icon-add',
////                    disabled: true,
////
////                    handler: function () {
////                        combineRecordsWindow.show();
////                    }
////
////                }]
////            }],
//            bbar: pagingtbDictRec
//
//        });
//
        Ext.define('DictRec', {
            //  plugins: [rowEditingDictRec],
            extend: 'Ext.grid.Panel',
            alias: 'widget.dictRec',
            //  title: 'Справочники',
            id: 'dictRecGrid',
            store: dictionaryRecordStore,
            //            selModel: selectModelDictRec,
            //            width: screen.width,
            //            height: screen.height,
            frame: true,
            height: '50%',
            columns: [
                {
                    text: 'Номер',
                    sortable: true,
                    dataIndex: 'number'
                },
                {
                    text: 'Имя',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'terms',
                    field: {
                        xtype: 'textfield'
                    }
                },
                {
                    header: 'Код',
                    width: 80,
                    sortable: true,
                    dataIndex: 'code',
                    field: {
                        xtype: 'textfield'
                    }
                }
            ],
            listeners: {
                beforeitemcontextmenu: function (view, record, item, index, e) {
                    e.stopEvent();
                    menuDictRecGrid.showAt(e.getXY());
                }
            },
            bbar: pagingtbDictRec

        });


        var dictionaryRecordGrid = Ext.create('widget.dictRec');


        dictionaryRecordGrid.getSelectionModel().on('selectionchange', function (selModel, selections) {
            selDictRec = selections[0];
//            try {
//                dictionaryRecordGrid.down('#delete').setDisabled(selections.length === 0);
//                dictionaryRecordGrid.down('#union').setDisabled(selections.length === 0);
//            } catch (err) {
//                console.log(err);
//            }
        });

        var dictRecWindow = Ext.create('Ext.window.Window', {
            items: [dictionaryRecordGrid],
            autoHeight: true,
            autoScroll: true,
            maximizable: true,
            width: '100%',
            height: '100%',
            closeAction: 'hide',
            shadow: true, // тень
            resizable: true, // возможность изменения размеров окна.
            draggable: true, // возможность перетаскивания окна.
            closable: true, // спрятать иконку закрытия окна в заголовке
            modal: true,
            layout: 'fit'
        });

        var dictWindow = Ext.create('Ext.window.Window', {
            //  items: [Ext.create('widget.dg')],
            items: [dictGridd],
            autoScroll: true,
            maximizable: true,
            closeAction: 'hide',
            width: '100%',
            height: '100%',
            shadow: true, // тень
            resizable: true, // возможность изменения размеров окна.
            draggable: true, // возможность перетаскивания окна.
            closable: true, // спрятать иконку закрытия окна в заголовке
            modal: true,
            layout: 'fit'
        });


        //*************************************************<####################>************************************************

        // показываем основную панель
        dictWindow.show();

        //*************************************************<####################>************************************************


        // Аутентификация
        var loginForm = new Ext.FormPanel({

            url: 'login.php',
            frame: true,
            items: [
                {
                    xtype: 'textfield',
                    id: 'login',
                    fieldLabel: 'Login',
                    allowBlank: false,
                    anchor: '90%'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Password',
                    name: 'password',
                    inputType: 'password',
                    anchor: '90%',
                    allowBlank: false
                }
            ],

            buttons: [
                {
                    text: 'Login',
                    handler: function () {
                        loginForm.getForm().submit({
                            waitTitle: 'пожалуйста подождите...',
                            waitMsg: 'вход в систему выполняется'
                        });
                    }
                }
            ]
        });
        //   Ext.create('Ext.window.Window', {
        //new Ext.FormPanel
//        var recordsForm =  Ext.create('Ext.form.Panel', {
//            id: 'recForm',
//            frame: false,
//            bodyStyle: 'padding: 10px 10px 0 10px;',
//            bodyPadding: 5,
//            items: [{
//                xtype: 'textfield',
//                id: 'number',
//                fieldLabel: 'Номер',
//                allowBlank: false,
//                anchor: '90%'
//            }, {
//                xtype: 'textfield',
//                id: 'terms',
//                fieldLabel: 'Имя',
//                allowBlank: false,
//                anchor: '90%'
//            }, {
//                xtype: 'textfield',
//                id: 'code',
//                fieldLabel: 'Код',
//                allowBlank: false,
//                anchor: '90%'
//            }],
//
//            buttons: [{
//                text: 'Ввод2',
//                handler: function () {
//                    var number = Ext.getCmp('number').value;
//                    var terms = Ext.getCmp('terms').value;
//                    var code = Ext.getCmp('code').value;
//                    var ids = globId;
//                    //  store1.getProxy().url = 'http://10.0.12.55:8080/' + 'nsi/dictionaries/' + ids + '/records';
//                    dictionaryRecordStore.getProxy().url = 'http://10.0.12.55:8080/nsi/' + 'dictionaries/' + ids + '/records';
//                    dictionaryRecordStore.sync();
//                    dictionaryRecordStore.insert(0, new nsi.Mode.Dict.Rec({
//                        number: number,
//                        terms: [terms],
//                        code: code
//                    }));
//                    recordsWindow.close();
//                }
//            }]
//        });

        // Dictionary Record Form
        // -----------------------------------------------------------------------
        var combineRecordsForm = new Ext.FormPanel({
            id: 'recForm',
            frame: true,
            bodyPadding: '10 10 0',
            items: [
                {
                    xtype: 'textfield',
                    id: 'terms',
                    fieldLabel: 'Имя',
                    allowBlank: false,
                    anchor: '90%'
                },
                {
                    xtype: 'textfield',
                    id: 'code',
                    fieldLabel: 'Код',
                    allowBlank: false,
                    anchor: '90%'
                }
            ],
            buttons: [
                {
                    text: 'Объединить записи',
                    handler: function (button, event) {
                        combineRecordTerm = Ext.getCmp('terms').value;
                        var code = Ext.getCmp('code').value;
                        var ids = globId;
                        idDictArray = sort_and_unique(idDictArray);
                        combineRecords(combineRecordTerm, code);
                        combineRecordsWindow.close();

                    }
                }
            ]
        });


        function updateDictEnter() {
            var name = Ext.getCmp('name').value;
            var type = Ext.getCmp('type').value;
            var termCount = Ext.getCmp('termCount').value;
            //  store1.getProxy().url = 'http://10.0.12.55:8080/' + 'nsi/dictionaries/' + ids + '/records';
            dictionaryStore.getProxy().url = 'http://10.0.12.55:8080/nsi/' + 'dictionaries/';
            var rowIndex = Ext.getCmp('dictGrid').getStore().indexOf(selDict);
            selDict.set('name', name);
            selDict.set('type', type);
            selDict.set('termCount', termCount);
            selDict.commit();
            editDicWindow.close();

        }

        function newDictEnter() {
            var name = Ext.getCmp('name').value;
            var type = Ext.getCmp('type').value;
            var termCount = Ext.getCmp('termCount').value;
            var ids = globId;
            //  store1.getProxy().url = 'http://10.0.12.55:8080/nsi/dictionaries/' + ids + '/records';
            dictionaryStore.getProxy().url = '/http://10.0.12.55:8080/nsi/' + 'dictionaries/';
            dictionaryStore.sync();
            dictionaryStore.insert(0, new nsi.Mode.Dict({
                name: name,
                type: type,
                termCount: termCount
            }));
            editDicWindow.close();
        }

        // Dictionary Form
        // -----------------------------------------------------------------------
        var dictForm = new ExtFormPanel.({
            id: 'dictForm',
            frame: true,
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    id: 'name',
                    fieldLabel: 'Имя',
                    //  allowBlank: false,
                    anchor: '70%',
                    value: ''
                },
                {
                    xtype: 'textfield',
                    id: 'type',
                    fieldLabel: 'Тип',
                    //   allowBlank: false,
                    anchor: '70%',
                    value: ''
                },
                {
                    xtype: 'textfield',
                    id: 'termCount',
                    fieldLabel: 'Количество',
                    //   allowBlank: false,
                    anchor: '70%',
                    value: ''
                },
                {
                    xtype: 'textfield',
                    id: 'xxx1',
                    fieldLabel: 'XXX',
                    //   allowBlank: false,
                    anchor: '70%',
                    value: '' }
            ],
            buttons: [
                {
                    text: 'Ввод',
                    id: '#btn',
                    handler: updateDictEnter
                }
            ]
        });

        // Dictionary Form
        // -----------------------------------------------------------------------
        var dictRecForm = new Ext.FormPanel({
            id: 'dictRecForm',
            frame: true,
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    id: 'number',
                    fieldLabel: 'Номер',
                    //  allowBlank: false,
                    anchor: '70%',
                    value: ''
                },
                {
                    xtype: 'textfield',
                    id: 'terms',
                    fieldLabel: 'Имя',
                    // allowBlank: false,
                    anchor: '70%',
                    value: ''
                },
                {
                    xtype: 'textfield',
                    id: 'code',
                    fieldLabel: 'Код',
                    // allowBlank: false,
                    anchor: '70%',
                    value: ''
                }
            ],
            buttons: [
                {
                    text: 'Ввод',
                    handler: function () {
                        var number = Ext.getCmp('number').value;
                        var terms = Ext.getCmp('terms').value;
                        var code = Ext.getCmp('code').value;
                        //  store1.getProxy().url = 'http://10.0.12.55:8080/' + 'nsi/dictionaries/' + ids + '/records';
                        dictionaryRecordStore.getProxy().url = 'http://10.0.12.55:8080/nsi/' + 'dictionaries/' + ids + '/records';
                        // var rowIndex = Ext.getCmp('dictGrid').getStore().indexOf(selDict);
                        selDictRec.set('number', number);
                        selDictRec.set('terms', terms);
                        selDictRec.set('code', code);
                        selDictRec.commit();
                        dictRecWindow.close();
                    }
                }
            ]
        });

        var editDicWindow = new Ext.Window({
            frame: true,
            title: 'Редактирование справочника',
            width: 330,
            closable: true,
            items: dictForm
        });

        var editDicRecWindow = new Ext.Window({
            frame: true,
            title: 'Редактирование записей справочника',
            width: 330,
            closable: true,
            items: dictRecForm
        });

        var combineRecordsWindow = new Ext.Window({
            frame: true,
            title: 'Редактирование записей',
            width: 330,
            closable: true,
            items: combineRecordsForm
        });

        var loginWindow = new Ext.Window({
            frame: true,
            title: 'Редактирование записей',
            width: 330,
            closable: false,
            items: loginForm
        });
        var dictionaryGr = Ext.getCmp('dictGrid');

        dictionaryGr.getSelectionModel().on('selectionchange', function (selModel, selections, records) {
            selDict = selections[0];
            //            try {
            //                dictionaryGrid.down('#delete').setDisabled(selections.length === 0);
            //                //  grid.down('#union').setDisabled(selections.length === 0);
            //            } catch (err) {
            //                console.log(err);
            //            }
        });
    });
} catch (err) {
    alert("oops error" + err); // Malformed response most likely
    console.log("oops error" + err);
}