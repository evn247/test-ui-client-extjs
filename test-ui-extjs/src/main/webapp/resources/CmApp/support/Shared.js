Ext.define('CM.support.Shared', {
    requires: [
    ],

    singleton: true,

    dateFormat: Config.dateFormat,
    dateFormatEmptyString: Config.dateFormatEmptyString,

    booleanToInteger: function (value) {
        if (value === true) {
            return 1;
        } else if (value === false) {
            return 0;
        } else return null;
    },

    getServerDate: function () {
        return new Date();
    },

    isActualVersion: function (start, end, now) {
        if (!now) {
            now = this.getServerDate();
        }
        if (!(start && end)) {
            return true;
        } else if (!end && now.getTime() >= start.getTime()) {
            return true;
        } else if (!start && now.getTime() <= end.getTime()) {
            return true;
        } else {
            return Ext.Date.between(now, start, end);
        }
    },

    formatVersionDate: function (v) {
        if (v) {
            if (v.valueOf() == Config.dateUnlimited.valueOf()) {
                return 'бессрочно';
            } else if (v.valueOf() == Config.dateUnlimitedStart.valueOf()) {
                return '';
            } else {
                return Ext.Date.format(v, NSI.support.Shared.dateFormat);
            }
        }
    },

    formatVersionDateRange: function (sd, ed) {
        return (sd ? this.formatVersionDate(sd) : '') + ' - ' + (sd ? this.formatVersionDate(ed) : '');
    },

    formatDate: function (date) {
        return Ext.Date.format(date, this.dateFormat);
    },

    formatTimestamp: function (date) {
        return Ext.Date.format(date, Config.timestampFormat);
    },

    filterBorderDates: function (date) {
        if (date) {
            if (
                (date.valueOf() == Config.dateUnlimited.valueOf())
                    ||
                    (date.valueOf() == Config.dateUnlimitedStart.valueOf())
                ) {
                return null;
            }
        }
        return date;
    },

    warning: function (message) {
        Ext.MessageBox.alert('Внимание!', message);
    },

    info: function (message, title) {
        Ext.MessageBox.alert(title ? title : 'Информация', message);
    },

    confirm: function (message, yes, no) {
        Ext.MessageBox.confirm('Подтверждение', message, function (btn) {
            if (btn === 'yes') {
                if (yes != null) {
                    yes();
                }
            }
            else {
                if (no != null)no();
            }
        });

    },

    error: function (message) {
        Ext.MessageBox.alert('Ошибка', message);
    },

    debug: function (object) {
        Ext.MessageBox.alert('Отладка', object != null ? object.toSource() : 'null');
    },

    config: {
    },

    ajaxIndicatorCounter: 0,

    showLoadingMask: function (loadingMessage) {
        Ext.Ajax.on('beforerequest', function (conn, options, eOpts) {

            if (this.ajaxIndicatorCounter == 0) {
                Ext.getBody().mask(loadingMessage, 'loading');
                this.ajaxIndicatorCounter++;
            }

        }, Ext.getBody());
        Ext.Ajax.on('requestcomplete',
            function () {
                this.ajaxIndicatorCounter--;
                if (this.ajaxIndicatorCounter == 0)Ext.getBody().unmask, Ext.getBody();
            });
        Ext.Ajax.on('requestexception', function () {
            this.ajaxIndicatorCounter--;
            if (this.ajaxIndicatorCounter == 0)Ext.getBody().unmask, Ext.getBody();
        }, Ext.getBody());
    }
});