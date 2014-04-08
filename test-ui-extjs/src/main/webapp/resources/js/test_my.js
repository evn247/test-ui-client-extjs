Ext.onReady(function () {
    var reqCount = 0;

    Ext.define('User', {
        idProperty: 'userId',

        extend: 'Ext.data.Model',

        fields: [
            {
                name: 'userID',
                type: 'int'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'surname',
                type: 'string'
            },

            {
                name: 'date',
                type: 'date'
            },
            {
                name: 'email',
                type: 'string'
            },
            {
                name: 'married',
                type: 'bool'
            }

        ]

    });

    var userStore = Ext.create('Ext.data.Store', {
        model: 'User',
        autoLoad: true,
        pageSize: 2,
        proxy: {
            type: 'ajax',
            url: 'http://localhost:8080/resources/data/tableData.json',


            reader: {
                type: 'json',
                root: 'users'
            },

            success: function () {
                alert('aaaa');
            }

        }
    });


    var table = Ext.create('Ext.grid.Panel', {
        title: 'Таблица',
        store: userStore,

        height: 200,

        plugins:[{
            //ptype:'rowediting',
            ptype:'cellediting',
            clicksToEdit: 1
        }],

        dockedItems: [{
            xtype: 'pagingtoolbar',
            store:userStore,
            dock: 'bottom',
            displayInfo: true,
            beforePageText: 'Страница',
            afterPageText: 'из {0}',
            displayMsg: 'Пользователи {0} - {1} из {2}'
        }]  ,

        columns: [
            {
                xtype: 'rownumberer',
                dataIndex: 'userID',
                header: 'ID'
            },
            {
                header: 'Имя',
                dataIndex: 'name'
            },
            {
                header: 'Фамилия',
                dataIndex: 'surname'
            },
            {
                header: 'Дата рождения',
                dataIndex: 'date',
                xtype: 'datecolumn',
                format: 'd/m/Y',
                flex: 1,

                editor: {
                    xtype:'datefield'
                }
            },
            {
                text: 'Имя',
                xtype: 'templatecolumn',
                tpl: '<b>{name} {surname} </b>',
                dataIndex: 'name',
                editor:{
                    xtype: 'textfield',
                    allowBlank: false
                }
            },

            {
                text: 'E-mail',
                xtype: 'templatecolumn',
                tpl: '{email}'
            },
            {
                text: 'Женат/Замужем',
                dataIndex: 'married',
                xtype: 'booleancolumn',
                trueText: 'Да',
                falseText: 'Нет',
                flex: 1,
                renderer: function(v,m) {
                    var fontweight = v ? 'normal' : 'bold';
                    v=v? 'Да' : 'Нет';
                    m.style='font-weight:'+fontweight;
                    return v;
                }

            },
            {
                text: 'Кастом',
                dataIndex: 'userID',
                renderer:function(a){
                    return 'Колонка '+ a.toString();


                }


            }

            ,{
        xtype:'actioncolumn',
        width:40,
        items:[{
            icon:'del.png',
            handler:function (grid, rowIndex, colIndex) {
                var selection=grid.getSelectionModel();
                selection.select(rowIndex);
                var record=selection.getSelection()[0];

                if(Ext.MessageBox.confirm('Подтверждение','Удалить '+record.get('name')+'?',function(a,b,c){
                    if(a=='yes'){
                        userStore.removeAt(rowIndex);
                    }
                }));
            }
        }]
    }

    ]

    });

    var comboStore = Ext.create('Ext.data.Store', {
        fields: ['name'],
        data: [
            {name: 'JavaScript'},
            {name: 'PHP'},
            {name: 'RUBY'},
            {name: 'Python'},
            {name: 'C (ANSI)'},
            {name: 'C++'},
            {name: 'C#'}
        ]
    });

    var panelCount = 0;

    var treeStore = Ext.create("Ext.data.TreeStore", {
        proxy: {
            type: 'ajax',
            url: 'http://localhost:8080/resources/data/treeData.json'
        },

        sorters: [
            {
                property: 'text',
                direction: 'DESC'
            }
        ]
    });

    var tree = Ext.create('Ext.tree.Panel',
        {
            xtype: 'tree',
            store: treeStore,
            root: {
                text: 'Все страны',
                expanded: true
            },

            listeners: {
                itemclick: function (tree, record, item, index, e, options) {
                    Ext.getCmp('txt').setValue(record.data.text);
                }
            }
            /*,
             root :{
             text: 'Корень',
             "expanded": true,
             children: [{
             text: '1-1',
             leaf: false,
             "expanded": false,
             children:[
             {
             text: '1-1-1',
             leaf: true,
             "expanded": false
             },
             {
             text: '1-1-2',
             leaf: true,
             "expanded": false
             },
             {
             text: '1-1-3',
             leaf: true,
             "expanded": false
             },
             {
             text: '1-1-4',
             leaf: true,
             "expanded": false
             }
             ]
             },
             {
             text: '1-2',
             leaf: false,
             "expanded": false
             },
             {
             text: '1-3',
             leaf: true,
             "expanded": false,
             children: [
             {
             text: '1-3-1',
             leaf: true,
             "expanded": false
             },
             {
             text: '1-3-2',
             leaf: true,
             "expanded": false
             },
             {
             text: '1-3-3',
             leaf: true,
             "expanded": false
             },
             {
             text: '1-3-4',
             leaf: true,
             "expanded": false
             }
             ]
             },
             {
             text: '1-4',
             leaf: true,
             "expanded": false
             }
             ]
             }*/
        });

    var panel = Ext.create('Ext.panel.Panel', {
        title: 'Панель',
        width: 600,
        height: 600,
        id: 'rootPanel',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                xtype: 'panel',
                title: 'Подпанель 1',
                html: 'Засада',
                width: 200,
                height: 100,
                region: 'north',

                dockedItems: [

                    {
                        xtype: 'toolbar',
                        items: [
                            '->',
                            'Тул'
                        ],
                        dock: 'bottom'
                    },

                    {
                        xtype: 'toolbar',
                        items: [
                            'Тул'
                        ],
                        dock: 'left'
                    },

                    {
                        xtype: 'toolbar',
                        items: [
                            'Тул'
                        ],
                        dock: 'right'
                    },

                    {
                        dock: 'top',
                        xtype: 'toolbar',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Добавить панель',
                                handler: function (e, target, zzz) {
                                    panelCount++;
                                    Ext.getCmp('rootPanel').add(
                                        Ext.create('Ext.panel.Panel',
                                            {
                                                title: 'Панель №' + panelCount,
                                                html: 'Содержаньице'
                                            })

                                    );
                                }
                            },
                            '-',
                            {
                                xtype: 'button',
                                text: 'Скрыть/показать',
                                handler: function (e, t, z) {
                                    if (Ext.getCmp('panel2').isHidden()) {
                                        Ext.getCmp('panel2').show();
                                    } else {
                                        Ext.getCmp('panel2').hide();
                                    }
                                }

                            }

                            ,
                            '->',
                            'Верхний тулбар'
                        ]

                    }


                ]

            },
            {
                id: 'panel2',
                xtype: 'panel',
                title: 'Подпанель 2',
                columnWidth: .4,
                region: 'center',
                titleCollapse: true,
                /*layout: {
                 type: 'vbox',
                 align: 'stretch'
                 },*/
                hidden: true,
                items: [
                    Ext.create('Ext.form.ComboBox', {
                        fieldLabel: 'Выбрать язык',
                        store: comboStore,
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'name',
                        typeAhead: true,
                        typeAheadDelay: 100,
                        //hideTrigger: true,
                        renderTo: Ext.getBody()
                    }),

                    {
                        xtype: 'htmleditor',
                        title: 'Редактор HTML',
                        width: 300,
                        height: 200
                    }

                ]
            },

            {
                xtype: 'panel',
                title: 'Подпанель 3',
                columnWidth: .6,
                region: 'west',
                html: 'Ббббб',
                split: true,
                draggable: true,
                collapsible: true,

                html: 'Дэрэво',

                items: [
                    {
                        xtype: 'textfield',
                        id: 'txt'
                    },
                    tree,
                    table
                ],

                tools: [
                    {
                        type: 'help',
                        text: 'Справка',
                        handler: function (e, t, z) {
                            /*userStore.load({params:{
                             aa:reqCount++
                             }});*/

                            userStore.load({
                                url: 'http://localhost:8080/resources/data/tableData.json?aaa=' + reqCount++
                            })
                        }

                    }
                ]

            }

        ],


        bbar: ['->', {
            xtype: 'button',
            text: 'Предыдущее',
            handler: function (but) {
                var layout = panel.getLayout();
                if (layout.getPrev()) {
                    layout.prev();
                }
            }
        }, {
            xtype: 'button',
            text: 'Далее',
            handler: function (but) {
                var layout = panel.getLayout();
                if (layout.getNext()) {
                    layout.next();
                }
            }
        }]

    });

    Ext.create('Ext.container.Viewport', {
        renderTo: Ext.getBody(),
        items: [panel]
    });

    Ext.create('Ext.window.Window', {
            title: 'Авторизация',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            autoHeight: true,

            buttonAlign: 'center',
            width: 300,

            closable: false,
            bodyPadding: 10,
            items: [
                {
                    id: 'loginForm',
                    xtype: 'form',
                    bodyPadding: 10,

                    items: [
                        {
                            id: 'loginField',
                            xtype: 'textfield',
                            fieldLabel: 'Логин',
                            name: 'login',
                            allowBlank: false,
                            value: ''
                        },
                        {
                            id: 'passField',
                            xtype: 'textfield',
                            fieldLabel: 'Пароль',
                            allowBlank: false,
                            name: 'password',
                            inputType: 'password',
                            value: ''
                        }
                    ],

                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                alert('login "' + Ext.getCmp('loginField').value + '" ; password "' + Ext.getCmp('passField').value + '"');

                                Ext.getCmp('loginForm').getForm().submit({
                                    url: 'doLogin.php',
                                    success: function (form, action) {
                                        Ext.MessageBox.alert('Все пучком ', action.result);
                                    },
                                    failure: function (form, action) {
                                        Ext.MessageBox.alert('Обломс', action.result);
                                    }
                                })

                            }
                        },
                        {
                            text: 'Cancel',
                            handler: function () {
                                /*Ext.getCmp('loginField').setValue(null);
                                 Ext.getCmp('passField').setValue(value);*/

                                var form = Ext.getCmp('loginForm').getForm();
                                //Ext.MessageBox.alert(form.validate());

                                for (var i in form.getValues()) {
                                    alert(i + ' ' + form.getValues()[i]);
                                }
                                alert('Cancelled');
                            }
                        }
                    ]

                }

            ]
        }
    ).show();
});
