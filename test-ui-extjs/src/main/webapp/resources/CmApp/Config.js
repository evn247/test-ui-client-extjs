Ext.define('Config', {
    singleton: true,

    dateFormat: 'd.m.Y',
    dateFormatEmptyString: 'дд.мм.гггг',

    timestampFormat: 'd.m.Y H:i:s',

    dateUnlimited: new Date('3999-01-01T00:00:00.000'),
    dateUnlimitedStart: new Date('1700-01-01T00:00:00.000'),

    restAdminBaseUrl: null,

    COMBO_EMPTY_TITLE: 'выберите значение',
    COMBO_EMPTY_ITEM: 'не выбрано',

    date: {
        patterns: {
            dbDateTime: "Y-m-d\\TH:i:s.uP", //Формат времени REST сервисов

            dbTermTimestampFormat: "Y-m-d H:i:s", //Формат времени атрибута справочника TIMESTAMP: ID5

            ISO8601Long: "d-m-Y H:i:sP",
            ISO8601Short: "d-m-Y",

            ShortDate: "j.n.y",
            FullDateTime: "l, F d, Y g:i:s A",
            LongTime: "g:i:s A",
            SortableDateTime: "d-m-Y\\ H:i:s",
            UniversalSortableDateTime: "Y-m-d H:i:sO",
            CustomFormat: "H:i d-m"
        }
    },

    objectType: {
        SYSTEM: 1,
        ADMINISTRATOR: 2,
        USER: 3
    },

    config: {
        RESTServer: {
            getURL: function () {
                return Config.restAdminBaseUrl;
            }
        }
    }
});

//Сброс значения combobox, если не выбрана запись
Ext.override(Ext.form.ComboBox, {
    getSelectedIndex: function () {
        var v = this.getValue();
        var r = this.findRecord(this.valueField || this.displayField, v);
        return(this.store.indexOf(r));
    },

    getSelected: function () {
        var v = this.getValue();
        var r = this.findRecord(this.valueField || this.displayField, v);
        return(r);
    },

    beforeBlur: function () {
        if (this.getRawValue().length === 0 || !this.value) {
            this.lastSelection = [];
            this.setValue(undefined);
        }
        this.callOverridden();
    }
});

Ext.Ajax.timeout = 120000; // 120 seconds

Ext.override(Ext.data.proxy.Ajax, { timeout: 120000 });
Ext.override(Ext.data.proxy.Rest, { timeout: 120000 });
Ext.override(Ext.form.action.Action, { timeout: 120000 });

Ext.override(Ext.Window, {
    constrainHeader: true
});

Ext.override(Ext.form.field.ComboBox, {
    addEmptyOption:function(title, item){
        var label = title || this.emptyText || Config.COMBO_EMPTY_TITLE;
        var item = item || this.emptyText || Config.COMBO_EMPTY_ITEM
        this.emptyText = label;
        this.store.insert(0, {
            title: item
        });
    }
});

Ext.override(Ext.data.Store, {
    deepCloneStore: function () {

        var source = this;

        var target = Ext.create('Ext.data.Store', {
            model: source.model
        });

        Ext.each(source.getRange(), function (record) {
            var newRecordData = Ext.clone(record.copy().data);
            var model = new source.model(newRecordData, newRecordData.id);
            target.add(model);
        });

        return target;
    }
});