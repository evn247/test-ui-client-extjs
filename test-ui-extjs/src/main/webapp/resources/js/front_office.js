Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        title: 'Фронт офис',
        renderTo: Ext.getBody(),
        height: 400,
        width: 400,
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        buttonAlign: 'center',
        items: [
            {
                xtype: 'button',
                scale: 'large',
                width: 250,
                text: 'Ввод АДВ-1',
                id: 'enterADV1Btn'
            },
            {
                xtype: 'container',
                height: 20
            },
            {
                xtype: 'button',
                scale: 'large',
                width: 250,
                text: 'Ввод документа об индексации пенсии',
                id: 'enterDocIndexationPensionBtn'
            },
            {
                xtype: 'container',
                height: 20
            },
            {
                xtype: 'button',
                scale: 'large',
                width: 250,
                text: 'Печать свидетельства о регистрации',
                id: 'printRegistrationCertificateBtn'
            },
            {
                xtype: 'container',
                height: 20
            },
            {
                xtype: 'button',
                scale: 'large',
                width: 250,
                text: 'Выход',
                id: 'exitBtn'
            }
        ]
    });
});