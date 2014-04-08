package com.nsl.cm.auth;

import java.util.HashSet;
import java.util.Set;

/**
 * <code>DefaultPrincipalProviderHelper</code>
 *
 * @author Eduard Napolov
 * @version 1.0
 */
public class DefaultPrincipalProviderHelper implements PrincipalProviderHelper<CmPermissions> {
    @Override
    public PrincipalDetails getPrincipal(String identity) {
        PrincipalDetails principalDetails = new PrincipalDetails();
        principalDetails.setId(identity);

        principalDetails.setName(identity.substring(0, 1).toUpperCase() + identity.substring(1));
        principalDetails.setPatronym(identity.substring(0, 1).toUpperCase() + ".");
        principalDetails.setSurname(identity.substring(0, 1).toUpperCase() + ".");

        principalDetails.setPermissions(getPermissions(identity));
        return principalDetails;
    }

    @Override
    public Set<CmPermissions> getPermissions(String identity) {
        if ("aistest_fa".equals(identity)) {
            Set<CmPermissions> result = new HashSet<CmPermissions>();
            //Редактирование справочника
            result.add(CmPermissions.CLASSIFIER_EDIT);

            //Создание справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE);
            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_TYPE_ADMIN);    //Можем создавать ADMIN справочник
            //CmPermissions.CLASSIFIER_EDIT_CREATE_TYPE_SYSTEM);   //Можем создавать SYSTEM справочник
            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_TYPE_USER);     //Можем создавать USER справочник

            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_STATUS_INITIAL);  //Можем создать статус INITIAL
            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_STATUS_ACTIVE);   //Можем создать статус ACTIVE
            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_STATUS_INACTIVE); //Можем создать статус INACTIVE

            //Удаление справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_DELETE);
            result.add(CmPermissions.CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_ADMIN);    //Можем удалить ADMIN справочник
            //CmPermissions.CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_SYSTEM);   //Можем удалить SYSTEM справочник
            result.add(CmPermissions.CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_USER);     //Можем удалить USER справочник

            //Изменение справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY);
            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_ADMIN);    //Можем редактировать ADMIN
            // справочник
            //CmPermissions.CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_SYSTEM);   //Можем редактировать SYSTEM справочник
            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_USER);     //Можем редактировать USER справочник

            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_STATUS_INITIAL);  //Можем менять статус INITIAL
            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_STATUS_ACTIVE);   //Можем менять статус ACTIVE
            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_STATUS_INACTIVE); //Можем менять статус INACTIVE

            //Редактировние структуры атрибутов справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_STRUCTURE);

            //Редактирование контента справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT);

            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_CREATE);
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_INITIAL);  //Можем создать статус INITIAL
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_ACTIVE);   //Можем создать статус ACTIVE
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_INACTIVE); //Можем создать статус INACTIVE

            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_DELETE);

            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_MODIFY);
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_INITIAL);  //Можем менять статус INITIAL
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_ACTIVE);   //Можем менять статус ACTIVE
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_INACTIVE); //Можем менять статус INACTIVE
            return result;
        } else if ("aistest_ro".equals(identity)) {
            Set<CmPermissions> result = new HashSet<CmPermissions>();

            //Редактирование справочника
            result.add(CmPermissions.CLASSIFIER_EDIT);

            //Создание справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE);
            //result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_TYPE_ADMIN);    //Можем создавать ADMIN справочник
            //result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_TYPE_SYSTEM);   //Можем создавать SYSTEM справочник
            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_TYPE_USER);     //Можем создавать USER справочник

            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_STATUS_INITIAL);  //Можем создать статус INITIAL
            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_STATUS_ACTIVE);   //Можем создать статус ACTIVE
            result.add(CmPermissions.CLASSIFIER_EDIT_CREATE_STATUS_INACTIVE); //Можем создать статус INACTIVE

            //Удаление справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_DELETE);
            //result.add(CmPermissions.CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_ADMIN);    //Можем удалить ADMIN справочник
            //result.add(CmPermissions.CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_SYSTEM);   //Можем удалить SYSTEM справочник
            result.add(CmPermissions.CLASSIFIER_EDIT_DELETE_ALLOW_TYPE_USER);     //Можем удалить USER справочник

            //Изменение справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY);
            //result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_ADMIN);    //Можем редактировать ADMIN
            // справочник
            //result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_SYSTEM);   //Можем редактировать SYSTEM
            // справочник
            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_ALLOW_TYPE_USER);     //Можем редактировать USER справочник

            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_STATUS_INITIAL);  //Можем менять статус INITIAL
            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_STATUS_ACTIVE);   //Можем менять статус ACTIVE
            result.add(CmPermissions.CLASSIFIER_EDIT_MODIFY_STATUS_INACTIVE); //Можем менять статус INACTIVE

            //Редактировние структуры атрибутов справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_STRUCTURE);

            //Редактирование контента справочника
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT);

            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_CREATE);
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_INITIAL);  //Можем создать статус INITIAL
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_ACTIVE);   //Можем создать статус ACTIVE
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_CREATE_STATUS_INACTIVE); //Можем создать статус INACTIVE

            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_DELETE);

            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_MODIFY);
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_INITIAL);  //Можем менять статус INITIAL
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_ACTIVE);   //Можем менять статус ACTIVE
            result.add(CmPermissions.CLASSIFIER_EDIT_CONTENT_MODIFY_STATUS_INACTIVE); //Можем менять статус INACTIVE
            return result;
        } else if ("aistest".equals(identity)) {
            return new HashSet<CmPermissions>();
        }

        return new HashSet<CmPermissions>();
    }
}
