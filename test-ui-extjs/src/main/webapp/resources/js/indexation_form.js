Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        bodyPadding: 20,
        title: 'Индексация пенсий',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        buttonAlign: 'end',
        items: [
            {
                xtype: 'panel',
                width: 600,
                bodyStyle: 'border-width: 0px; padding: 0px 0px 20px 0px',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'textfield',
                        labelWidth: 350,
                        labelAlign: 'left',
                        fieldLabel: 'Номер постановления Правительства',
                        id: 'numberResolutionGov'
                    },
                    {
                        xtype: 'datefield',
                        labelWidth: 350,
                        labelAlign: 'left',
                        fieldLabel: 'Дата постановления Правительства',
                        id: 'dateResolutionGov'
                    },
                    {
                        xtype: 'datefield',
                        labelWidth: 350,
                        labelAlign: 'left',
                        fieldLabel: 'Дата, с которой производится индексация',
                        id: 'startDateIndex'
                    },
                    {
                        xtype: 'datefield',
                        labelWidth: 350,
                        labelAlign: 'left',
                        fieldLabel: 'Дата определения РПК, который подлежит индексации',
                        id: 'rpkDateIndex'
                    },
                    {
                        xtype: 'textfield',
                        labelWidth: 350,
                        labelAlign: 'left',
                        fieldLabel: 'Коэффициент индексации',
                        id: 'ratioIndex'
                    }
                ],
                buttons: [
                    {
                        text: 'Сохранить'
                    },
                    {
                        text: 'Отмена'
                    }
                ]
            }
        ]
    });
});
