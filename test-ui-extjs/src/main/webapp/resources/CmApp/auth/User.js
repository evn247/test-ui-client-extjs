Ext.define('CM.auth.User', {
    requires: [
        'CM.auth.Permissions'
    ],

    config: {
        login: null,
        name: null,
        surname: null,
        patronymic: null,

        roles: [],
        permissions: null
    },

    constructor: function(config) {
        this.initConfig(config);

        return this;
    },

    inRole:function(role){
        var roles=this.getRoles();
        if(roles){
            for(var a=0;a<roles.length;a++){
                if(roles[a]===role){
                    return true;
                }
            }
        }
        return false;
    },

    inRoles:function(roles){
        if(roles){
            for(var a=0;a++;a<roles.length){
                if(!this.inRole(roles[a])){
                    return false;
                }
            }
            return true;
        }
        return false;
    },

    inPermit:function(permission){
        //Проверяем разрешения пользователя
        var permissions=this.getPermissions();
        if(permissions){
            for(var a=0;a<permissions.length;a++){
                if(permissions[a]===permission){
                    return true;
                }
            }
        }

        //Проверяем разрешения роли
        var roles=this.getRoles();
        if(roles){
            for(var a=0;a<roles.length;a++){
                if(NSI.auth.Permissions.inPermit(roles[a], permission)){
                    return true;
                }
            }
        }

        return false;
    },

    isAdministrator: function(){
        return this.inRole('ADMIN');
    },

    isUser: function(){
        return this.inRole('USER');
    },

    getFullName: function(){
        return this.getSurname()+' '+this.getName()+' '+this.getPatronymic();
    }
});