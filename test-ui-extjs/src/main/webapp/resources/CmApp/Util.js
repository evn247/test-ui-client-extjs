Ext.define('Util', {
    singleton: true,

    getUser: function(){
        return CM.getApplication().getUser();
    },

    inPermit: function(permission){
        return CM.getApplication().getUser().inPermit(permission)
    },

    inPermits: function(permissions){
        permissions.forEach(function(permission){
            if(!CM.getApplication().getUser().inPermit(permission))return false;
        });
        return true;
    },

    inRole: function(role){
        return CM.getApplication().getUser().inRole(role)
    },

    inRoles: function(roles){
        return CM.getApplication().getUser().inRoles(roles)
    },

    mask: function (object, loadingMessage) {
        if(!object){
            object=Ext.getBody();
        }

        if(!loadingMessage){
            loadingMessage='Загрузка';
        }

        object.mask(loadingMessage, 'loading');
    },

    unmask: function (object, loadingMessage) {
        if(!object){
            object=Ext.getBody();
        }

        object.unmask();
    }
});
