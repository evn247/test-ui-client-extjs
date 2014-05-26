package com.nsl.cm.rest.model;

import java.util.List;

/**
 * <code>RestContract</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestOrganization
{
    private long id;
    private String fullName;
    private String shortName;
    private String inn;
    private String kpp;
    private String website;
    private String email;
    private String addressId;
    private RestLocation address;
    private List<RestPhone> phones;
    private List<RestPerson> managers;
    private List<RestAccount> accounts;
    private List<RestLocation> locations;

    public String getFullName()
    {
        return fullName;
    }

    public void setFullName(String fullName)
    {
        this.fullName = fullName;
    }

    public String getShortName()
    {
        return shortName;
    }

    public void setShortName(String shortName)
    {
        this.shortName = shortName;
    }

    public String getInn()
    {
        return inn;
    }

    public void setInn(String inn)
    {
        this.inn = inn;
    }

    public String getKpp()
    {
        return kpp;
    }

    public void setKpp(String kpp)
    {
        this.kpp = kpp;
    }

    public String getWebsite()
    {
        return website;
    }

    public void setWebsite(String website)
    {
        this.website = website;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getAddressId()
    {
        return addressId;
    }

    public void setAddressId(String addressId)
    {
        this.addressId = addressId;
    }

    public RestLocation getAddress()
    {
        return address;
    }

    public void setAddress(RestLocation address)
    {
        this.address = address;
    }

    public List<RestPhone> getPhones()
    {
        return phones;
    }

    public void setPhones(List<RestPhone> phones)
    {
        this.phones = phones;
    }

    public List<RestPerson> getManagers()
    {
        return managers;
    }

    public void setManagers(List<RestPerson> managers)
    {
        this.managers = managers;
    }

    public List<RestAccount> getAccounts()
    {
        return accounts;
    }

    public void setAccounts(List<RestAccount> accounts)
    {
        this.accounts = accounts;
    }

    public List<RestLocation> getLocations()
    {
        return locations;
    }

    public void setLocations(List<RestLocation> locations)
    {
        this.locations = locations;
    }

    public void setId(long id)
    {
        this.id = id;
    }

    public long getId()
    {
        return id;
    }

    @Override
    public String toString()
    {
        return "RestOrganization{" +
               "id=" + id +
               ", fullName='" + fullName + '\'' +
               ", shortName='" + shortName + '\'' +
               ", inn='" + inn + '\'' +
               ", kpp='" + kpp + '\'' +
               ", website='" + website + '\'' +
               ", email='" + email + '\'' +
               ", addressId='" + addressId + '\'' +
               ", address=" + address +
               ", phones=" + phones +
               ", managers=" + managers +
               ", accounts=" + accounts +
               ", locations=" + locations +
               '}';
    }
}
