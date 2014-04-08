Ext.define('CM.auth.Permissions',{
    singleton: true,

    roles: [
        'USER',
        'ADMIN'
    ],

    permissions: [
        //Редактирование справочника
        'DICTIONARY_EDIT',

        //Создание справочника
        'DICTIONARY_EDIT_CREATE',

        //Удаление справочника
        'DICTIONARY_EDIT_DELETE',

        //Изменение справочника
        'DICTIONARY_EDIT_UPDATE'
    ],

    rolePermissions: {
    },

    inPermit:function(role, permission){
        //Проверяем разрешения пользователя
        var permissions=NSI.auth.Permissions.rolePermissions[role];
        if(permissions){
            for(var a=0;a<permissions.length;a++){
                if(permissions[a]==permission){
                    return true;
                }
            }
        }
    }

});