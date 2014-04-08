Ext.define('CM.support.components.DefaultDateTimeField', {
    requires: ['CM.support.Shared'],

    extend: 'Ext.form.field.Date',
    alias: 'widget.DefaultDateTimeField',

    initComponent: function () {
        this.callParent(arguments);
        this.cls = 'cm-field-date-time-default';
        this.format = Config.timestampFormat;
        this.submitFormat = Config.date.patterns.dbDateTime;
    }

});
