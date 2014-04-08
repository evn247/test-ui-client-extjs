Ext.onReady(function () {
    Ext.create('Ext.window.Window', {
            title: 'Авторизация',
            layout: 'vbox',
            buttonAlign: 'center',
            height: 130,
            width: 280,
            closable: false,
            bodyPadding: 10,
            items: [
                {
                    id: 'loginField',
                    xtype: 'textfield',
                    fieldLabel: 'Логин',
                    name: 'login',
                    value: ''
                },
                {
                    id: 'passField',
                    xtype: 'textfield',
                    fieldLabel: 'Пароль',
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
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }
    ).show();
});
