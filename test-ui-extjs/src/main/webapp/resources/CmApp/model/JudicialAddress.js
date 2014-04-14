/**
 * User: Eduard.Napolov
 * Date: 01.04.14
 * Time: 10:13
 */
Ext.define('CM.model.JudicialAddress', {
    extend: 'CM.model.Location',
    toDisplayString:function(){
        return this.get('postIndex')+', '+this.get('Region')+', '+this.get('City')+', '+this.get('streetAddress');
    }
});