Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        layout: {
            type: 'vbox',
            align: 'stretch',
            pack: 'center'
        },
        title: 'Печать Свидетельства о Регистрации (АДИ-7)',
        items: [
            {
                xtype: 'grid',
                bodyStyle: 'border-width: 0px;',
                layout: {
                    type: 'fit',
                    align: 'stretch',
                    pack: 'center'
                },
                columns: [
                    {
                        text: 'СНИЛС',
                        flex: 1
                    },
                    {
                        text: 'ФИО',
                        flex: 1
                    },
                    {
                        text: 'Дата рождения',
                        flex: 1
                    },
                    {
                        text: 'Место рождения',
                        flex: 1
                    },
                    {
                        text: 'Пол',
                        flex: 1
                    },
                    {
                        text: 'Дата регистрации',
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'panel',
                bodyStyle: 'border-width: 0px;',
                bodyPadding: 10,
                layout: {
                    type: 'vbox'
                },
                buttonAlign: 'end',
                buttons: [
                    {
                        text: 'Печать'
                    },
                    {
                        text: 'Отмена'
                    }
                ]
            }
        ]

    })
});