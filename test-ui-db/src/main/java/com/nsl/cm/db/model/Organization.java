package com.nsl.cm.db.model;

import java.util.List;

/**
 * <code>Contract</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class Organization
{
    private long id;
    private String fullName;
    private String shortName;
    private String inn;
    private String kpp;
    private String website;
    private String email;
    private String addressId;
    private Location address;
    private List<Phone> phones;
    private List<Person> managers;
    private List<Account> accounts;
    private List<Location> locations;

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

    public Location getAddress()
    {
        return address;
    }

    public void setAddress(Location address)
    {
        this.address = address;
    }

    public List<Phone> getPhones()
    {
        return phones;
    }

    public void setPhones(List<Phone> phones)
    {
        this.phones = phones;
    }

    public List<Person> getManagers()
    {
        return managers;
    }

    public void setManagers(List<Person> managers)
    {
        this.managers = managers;
    }

    public List<Account> getAccounts()
    {
        return accounts;
    }

    public void setAccounts(List<Account> accounts)
    {
        this.accounts = accounts;
    }

    public List<Location> getLocations()
    {
        return locations;
    }

    public void setLocations(List<Location> locations)
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
        return "Organization{" +
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
