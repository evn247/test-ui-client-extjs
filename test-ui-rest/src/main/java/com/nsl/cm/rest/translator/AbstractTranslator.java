package com.nsl.cm.rest.translator;

import com.nsl.cm.db.model.Account;
import com.nsl.cm.db.model.Employee;
import com.nsl.cm.db.model.Kbk;
import com.nsl.cm.db.model.Location;
import com.nsl.cm.db.model.Phone;
import com.nsl.cm.rest.model.RestAccount;
import com.nsl.cm.rest.model.RestKbk;
import com.nsl.cm.rest.model.RestLocation;
import com.nsl.cm.rest.model.RestPerson;
import com.nsl.cm.rest.model.RestPhone;

/**
 * <code>AbstractTranslator</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public abstract class AbstractTranslator<T1, T2> implements Translator<T1, T2>
{
    protected final static CollectionTranslator<RestPhone, Phone> PHONE_LIST_TRANSLATOR
            = new CollectionTranslator<>(new AbstractTranslator<RestPhone, Phone>()
    {
        @Override
        public RestPhone reverse(Phone from)
        {
            return translate(from);
        }
    });
    /**
     * Translates location entity to internal format.
     * @param location the source
     * @return the result of translation
     */
    protected Location translate(RestLocation location)
    {
        Location result = new Location();
        if (location != null)
        {
            result.setId(location.getId());
            result.setCity(location.getCity());
            result.setName(location.getName());
            result.setPostIndex(location.getPostIndex());
            result.setStreetAddress(location.getStreetAddress());
        }
        return result;
    }

    /**
     * Translates location entity to external format.
     * @param location the source
     * @return the result of translation
     */
    protected RestLocation translate(Location location)
    {
        RestLocation result = new RestLocation();
        if (location != null)
        {
            result.setId(location.getId());
            result.setCity(location.getCity());
            result.setName(location.getName());
            result.setPostIndex(location.getPostIndex());
            result.setStreetAddress(location.getStreetAddress());
        }
        return result;
    }

    /**
     * Translates KBK entity to internal format.
     * @param kbk the source
     * @return the result of translation
     */
    protected Kbk translate(RestKbk kbk)
    {
        Kbk result = new Kbk();
        if (kbk != null)
        {
            result.setId(kbk.getId());
            result.setCode(kbk.getCode());
            result.setDescription(kbk.getDescription());
        }
        return result;
    }

    /**
     * Translates KBK entity to external format.
     * @param kbk the source
     * @return the result of translation
     */
    protected RestKbk translate(Kbk kbk)
    {
        RestKbk result = new RestKbk();
        if (kbk != null)
        {
            result.setId(kbk.getId());
            result.setCode(kbk.getCode());
            result.setDescription(kbk.getDescription());
        }
        return result;
    }

    /**
     * Translates Person entity to internal format.
     * @param person the source
     * @return the result of translation
     */
    protected Employee translate(RestPerson person)
    {
        Employee result = new Employee();
        if (person != null)
        {
            result.setId(person.getId());
            result.setEmail(person.getEmail());
            result.setFirstName(person.getFirstName());
            result.setLastName(person.getLastName());
            result.setMiddleName(person.getMiddleName());
            result.setPosition(person.getPosition());
            result.setPhones(PHONE_LIST_TRANSLATOR.translate(person.getPhones()));
        }
        return result;
    }

    /**
     * Translates Employee entity to external format.
     * @param employee the source
     * @return the result of translation
     */
    protected RestPerson translate(Employee employee)
    {
        RestPerson result = new RestPerson();
        if (employee != null)
        {
            result.setId(employee.getId());
            result.setEmail(employee.getEmail());
            result.setFirstName(employee.getFirstName());
            result.setLastName(employee.getLastName());
            result.setMiddleName(employee.getMiddleName());
            result.setPosition(employee.getPosition());
            result.setPhones(PHONE_LIST_TRANSLATOR.reverse(employee.getPhones()));
        }

        return result;
    }

    /**
     * Translates Phone entity to internal format.
     * @param phone the source
     * @return the result of translation
     */
    protected Phone translate(RestPhone phone)
    {
        Phone result = new Phone();
        if (phone != null)
        {
            result.setId(phone.getId());
            result.setExtension(phone.getExtension());
            result.setNumber(phone.getNumber());
            result.setType(phone.getType());
        }

        return result;
    }

    /**
     * Translates Phone entity to external format.
     * @param phone the source
     * @return the result of translation
     */
    protected RestPhone translate(Phone phone)
    {
        RestPhone result = new RestPhone();

        if (phone != null)
        {
            result.setId(phone.getId());
            result.setExtension(phone.getExtension());
            result.setNumber(phone.getNumber());
            result.setType(phone.getType());
        }

        return result;
    }

    /**
     * Translates Account entity to internal format.
     * @param account the source
     * @return the result of translation
     */
    protected Account translate(RestAccount account)
    {
        Account result = new Account();

        if (account != null)
        {
            result.setId(account.getId());
            result.setAccountName(account.getAccountName());
            result.setAccountNumber(account.getAccountNumber());
            result.setBankName(account.getBankName());
            result.setBik(account.getBik());
            result.setCorrAccountNumber(account.getCorrAccountNumber());
        }
        return result;
    }

    /**
     * Translates Account entity to external format.
     * @param account the source
     * @return the result of translation
     */
    protected RestAccount translate(Account account)
    {
        RestAccount result = new RestAccount();
        if(account != null)
        {
            result.setId(account.getId());
            result.setAccountName(account.getAccountName());
            result.setAccountNumber(account.getAccountNumber());
            result.setBankName(account.getBankName());
            result.setBik(account.getBik());
            result.setCorrAccountNumber(account.getCorrAccountNumber());
        }
        return result;
    }
}
