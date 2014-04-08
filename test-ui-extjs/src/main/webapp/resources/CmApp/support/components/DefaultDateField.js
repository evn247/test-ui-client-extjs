Ext.define('CM.support.components.DefaultDateField', {
    requires: ['CM.support.Shared'],

    extend: 'Ext.form.field.Date',
    alias: 'widget.DefaultDateField',

    initComponent: function () {
        this.callParent(arguments);
        this.cls = 'cm-field-date-default';
        this.format = CM.support.Shared.dateFormat;
        this.submitFormat = Config.date.patterns.dbDateTime;
        this.emptyText = Config.dateFormatEmptyString;
    }

});
