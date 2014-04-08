package com.nsl.cm.auth;

/**
 * <code>CmPermissions</code>
 *
 * @author Eduard Napolov
 * @version 1.0
 */
public enum CmPermissions
{
    //Редактирование справочника
    CLASSIFIER_EDIT("nsi/CmPermissions/CLASSIFIER_EDIT"),

    //Создание справочника
    CLASSIFIER_EDIT_CREATE("nsi/CmPermissions/CLASSIFIER_EDIT_CREATE"),
    CLASSIFIER_EDIT_CREATE_TYPE_ADMIN("nsi/CmPermissions/CLASSIFIER_EDIT_CREATE_TYPE_ADMIN"),    //Можем создавать ADMIN справочник
    CLASSIFIER_EDIT_CREATE_TYPE_SYSTEM("nsi/CmPermissions/CLASSIFIER_EDIT_CREATE_TYPE_SYSTEM"),   //Можем создавать SYSTEM справочник
    CLASSIFIER_EDIT_CREATE_TYPE_USER("nsi/CmPermissions/CLASSIFIER_EDIT_CREATE_TYPE_USER"),     //Можем создавать USER справочник
    CLASSIFIER_EDIT_CREATE_STATUS_INITIAL("nsi/CmPermissions/CLASSIFIER_EDIT_CREATE_STATUS_INITIAL"),  //Можем создать статус INITIAL
    CLASSIFIER_EDIT_CREATE_STATUS_ACTIVE("nsi/CmPermissions/CLASSIFIER_EDIT_CREATE_STATUS_ACTIVE"),   //Можем создать статус ACTIVE
    CLASSIFIER_EDIT_CREATE_STATUS_INACTIVE("nsi/CmPermissions/CLASSIFIER_EDIT_CREATE_STATUS_INACTIVE"), //Можем создать статус INACTIVE
    //Удаление справочника
    CLASSIFIER_EDIT_DELETE("nsi/CmPermissions/CLASSIFIER_EDIT_DELETE"),
    CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_ADMIN("nsi/CmPermissions/CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_ADMIN"),
    //Можем удалить ADMIN справочник
    CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_SYSTEM("nsi/CmPermissions/CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_SYSTEM"),
    //Можем удалить SYSTEM справочник
    CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_USER("nsi/CmPermissions/CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_USER"),
    //Можем удалить USER справочник
    //Изменение справочника
    CLASSIFIER_EDIT_MODIFY("nsi/CmPermissions/CLASSIFIER_EDIT_MODIFY"),
    CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_ADMIN("nsi/CmPermissions/CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_ADMIN"),
    //Можем редактировать ADMIN справочник
    CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_SYSTEM("nsi/CmPermissions/CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_SYSTEM"),
    //Можем редактировать SYSTEM справочник
    CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_USER("nsi/CmPermissions/CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_USER"),
    //Можем редактировать USER справочник
    CLASSIFIER_EDIT_MODIFY_STATUS_INITIAL("nsi/CmPermissions/CLASSIFIER_EDIT_MODIFY_STATUS_INITIAL"),  //Можем менять статус INITIAL
    CLASSIFIER_EDIT_MODIFY_STATUS_ACTIVE("nsi/CmPermissions/CLASSIFIER_EDIT_MODIFY_STATUS_ACTIVE"),   //Можем менять статус ACTIVE
    CLASSIFIER_EDIT_MODIFY_STATUS_INACTIVE("nsi/CmPermissions/CLASSIFIER_EDIT_MODIFY_STATUS_INACTIVE"), //Можем менять статус INACTIVE
    //Редактировние структуры атрибутов справочника
    CLASSIFIER_EDIT_STRUCTURE("nsi/CmPermissions/CLASSIFIER_EDIT_STRUCTURE"),

    //Редактирование контента справочника
    CLASSIFIER_EDIT_CONTENT("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT"),

    CLASSIFIER_EDIT_CONTENT_CREATE("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT_CREATE"),
    CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_INITIAL("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_INITIAL"),
    //Можем создать статус INITIAL
    CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_ACTIVE("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_ACTIVE"),
    //Можем создать статус ACTIVE
    CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_INACTIVE("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_INACTIVE"),
    //Можем создать статус INACTIVE
    CLASSIFIER_EDIT_CONTENT_DELETE("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT_DELETE"),

    CLASSIFIER_EDIT_CONTENT_MODIFY("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT_MODIFY"),
    CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_INITIAL("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_INITIAL"),
    //Можем менять статус INITIAL
    CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_ACTIVE("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_ACTIVE"),
    //Можем менять статус ACTIVE
    CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_INACTIVE("nsi/CmPermissions/CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_INACTIVE"); //Можем менять
    // статус INACTIVE
    private String value;

    CmPermissions(String value) {
        this.value = value;
    }

    public String value() {
        return value;
    }
}