package com.nsl.cm.rest.translator;

import com.nsl.cm.db.model.Account;
import com.nsl.cm.db.model.Employee;
import com.nsl.cm.db.model.Location;
import com.nsl.cm.db.model.Organization;
import com.nsl.cm.rest.model.RestAccount;
import com.nsl.cm.rest.model.RestLocation;
import com.nsl.cm.rest.model.RestOrganization;
import com.nsl.cm.rest.model.RestPerson;

/**
 * <code>OrganizationTranslator</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class OrganizationTranslator extends AbstractTranslator<RestOrganization, Organization>
{


    @Override
    public Organization translate(RestOrganization from)
    {
        final Organization result = new Organization();
        if(from != null)
        {
            result.setId(from.getId());
            result.setAccounts(new CollectionTranslator<>(new AbstractTranslator<RestAccount, Account>(){

                @Override
                protected Account translate(RestAccount account)
                {
                    Account translated = super.translate(account);
                    translated.setOrganization(result);
                    return translated;
                }

                @Override
                public RestAccount reverse(Account from)
                {
                    return translate(from);
                }
            }).translate(from.getAccounts()));
            result.setAddress(translate(from.getAddress()));
            result.setEmail(from.getEmail());
            result.setFullName(from.getFullName());
            result.setInn(from.getInn());
            result.setKpp(from.getKpp());
            result.setLocations(new CollectionTranslator<>(new AbstractTranslator<RestLocation, Location>(){

                @Override
                protected Location translate(RestLocation location)
                {
                    Location tmp = super.translate(location);
                    tmp.setOrganization(result);
                    return tmp;
                }

                @Override
                public RestLocation reverse(Location from)
                {
                    return translate(from);
                }
            }).translate(from.getLocations()));
            result.setManagers(new CollectionTranslator<>(new AbstractTranslator<RestPerson, Employee>(){
                @Override
                protected Employee translate(RestPerson person)
                {
                    Employee tmp = super.translate(person);
                    tmp.setOrganization(result);
                    return tmp;
                }

                @Override
                public RestPerson reverse(Employee from)
                {
                    return translate(from);
                }
            }).translate(from.getManagers()));

            result.setPhones(PHONE_LIST_TRANSLATOR.translate(from.getPhones()));
            result.setShortName(from.getShortName());
            result.setWebsite(from.getWebsite());
        }
        return result;
    }

    @Override
    public RestOrganization reverse(Organization from)
    {
        RestOrganization result = new RestOrganization();
        if(from != null)
        {
            result.setId(from.getId());
            result.setAccounts(new CollectionTranslator<>(new AbstractTranslator<RestAccount, Account>(){
                @Override
                public RestAccount reverse(Account from)
                {
                    return translate(from);
                }
            }).reverse(from.getAccounts()));

            RestLocation location = translate(from.getAddress());
            result.setAddress(location);
            result.setAddressId(location.getId());

            result.setEmail(from.getEmail());
            result.setFullName(from.getFullName());
            result.setInn(from.getInn());
            result.setKpp(from.getKpp());
            result.setLocations(new CollectionTranslator<>(new AbstractTranslator<RestLocation, Location>(){
                @Override
                public RestLocation reverse(Location from)
                {
                    return translate(from);
                }
            }).reverse(from.getLocations()));
            result.setManagers(new CollectionTranslator<>(new AbstractTranslator<RestPerson, Employee>(){
        @Override
        public RestPerson reverse(Employee from)
        {
            return translate(from);
        }
    }).reverse(from.getManagers()));
            result.setPhones(PHONE_LIST_TRANSLATOR.reverse(from.getPhones()));
            result.setShortName(from.getShortName());
            result.setWebsite(from.getWebsite());
        }
        return result;
    }
}
