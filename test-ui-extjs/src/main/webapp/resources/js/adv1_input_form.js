Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        title: 'Ввод документа АДВ-1',
        renderTo: Ext.getBody(),
        bodyPadding: 20,
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        width: 400,
                        bodyStyle: 'border-width: 0px; padding: 20px 20px 0px 20px;',
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                id: 'lastName',
                                xtype: 'textfield',
                                labelAlign: 'left',
                                fieldLabel: 'Фамилия',
                                labelWidth: 150,
                                name: 'lastName',
                                value: ''
                            },
                            {
                                id: 'firstName',
                                labelWidth: 150,
                                labelAlign: 'left',
                                xtype: 'textfield',
                                fieldLabel: 'Имя',
                                name: 'name',
                                value: ''
                            },
                            {
                                id: 'middleName',
                                labelWidth: 150,
                                labelAlign: 'left',
                                xtype: 'textfield',
                                fieldLabel: 'Отчетство',
                                name: 'middleName',
                                value: ''
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Пол',
                                id: 'sex'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Тип даты рождения',
                                id: 'typeBirthday'
                            },
                            {
                                xtype: 'datefield',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Дата рождения',
                                id: 'Birthday'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Гражданство',
                                id: 'nationality'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        width: 15
                    },
                    {
                        xtype: 'panel',
                        title: 'Место рождения',
                        bodyPadding: 20,
                        width: 400,
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Тип места рождения',
                                id: 'typePlaceBirthday'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Город',
                                id: 'cityBirthday'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Район',
                                id: 'districtBirthday'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Область',
                                id: 'regionBirthday'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Страна',
                                id: 'countryBirthday'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        title: 'Адрес постоянного места жительства (адрес регистрации)',
                        bodyPadding: 20,
                        width: 400,
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Тип адреса',
                                id: 'typeAddressRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Страна',
                                id: 'countryRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Индекс',
                                id: 'indexRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Регион',
                                id: 'regionRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Район',
                                id: 'districtRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Город',
                                id: 'cityRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Населенный пункт',
                                id: 'populationCenterRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Улица',
                                id: 'streetRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Дом',
                                id: 'houseRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Корпус',
                                id: 'blockRegistration'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Квартира',
                                id: 'flatRegistration'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        width: 15
                    },
                    {
                        xtype: 'panel',
                        title: 'Адрес места жительства фактический',
                        bodyPadding: 20,
                        width: 400,
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Тип адреса',
                                id: 'typeAddressReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Страна',
                                id: 'countryReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Индекс',
                                id: 'indexReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Регион',
                                id: 'regionReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Район',
                                id: 'districtReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Город',
                                id: 'cityReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Населенный пункт',
                                id: 'populationCenterReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Улица',
                                id: 'streetReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Дом',
                                id: 'houseReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Корпус',
                                id: 'blockReal'
                            },
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Квартира',
                                id: 'flatReal'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                height: 15
            },
            {
                xtype: 'panel',
                width: 815,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                bodyStyle: 'border-width: 0px; padding: 0px 20px 0px 20px',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Телефоны',
                        id: 'phones'
                    }
                ]
            },
            {
                xtype: 'container',
                height: 15
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        title: 'Документ удостоверяющий личность',
                        bodyPadding: 20,
                        width: 400,
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'combobox',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Вид документа',
                                id: 'typeDoc'
                            },
                            {
                                xtype: 'textfield',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Серия',
                                id: 'serial'
                            },
                            {
                                xtype: 'textfield',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Номер',
                                id: 'number'
                            },
                            {
                                xtype: 'datefield',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Дата выдачи',
                                id: 'dateIssue'
                            },
                            {
                                xtype: 'textfield',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Кем выдан',
                                id: 'issuedBy'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        width: 415
                    }
                ]
            },
            {
                xtype: 'container',
                height: 15
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        width: 400,
                        bodyStyle: 'border-width: 0px; padding: 0px 20px 0px 20px',
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'datefield',
                                labelWidth: 150,
                                labelAlign: 'left',
                                fieldLabel: 'Дата заполнения',
                                id: 'dateFilling'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        width: 415,
                        buttonAlign: 'end',
                        layout: {
                            type: 'vbox'
                        },
                        bodyStyle: 'border-width: 0px; padding: 0px 20px 0px 20px',
                        buttons: [
                            {
                                text: 'Сохранить'
                            },
                            {
                                text: 'Отмена'
                            }
                        ]
                    }
                ]
            }
        ]
    })
});