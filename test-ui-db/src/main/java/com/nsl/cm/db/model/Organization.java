package com.nsl.cm.db.model;

import java.util.List;
import javax.persistence.*;

/**
 * <code>Contract</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Entity
@Table(name = "organization")
@SequenceGenerator(name = "dic_seq", sequenceName = "def_seq", allocationSize = 1)
public class Organization
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dic_seq")
    @Column(name = "entry_id")
    private long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "short_name")
    private String shortName;

    @Column(name = "inn")
    private String inn;

    @Column(name = "kpp")
    private String kpp;

    @Column(name = "web_site")
    private String website;

    @Column(name = "email")
    private String email;

    @OneToOne(optional=true)
    @JoinColumn(name = "address_id")
    private Location address;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "phone_assoc",
               joinColumns = {@JoinColumn(name = "one_entry_id")},
               inverseJoinColumns = {@JoinColumn(name = "many_entry_id")})
    private List<Phone> phones;

    @OneToMany(mappedBy = "organization")
    private List<Employee> managers;

    @OneToMany(mappedBy = "organization")
    private List<Account> accounts;

    @OneToMany(mappedBy = "organization")
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

    public List<Employee> getManagers()
    {
        return managers;
    }

    public void setManagers(List<Employee> managers)
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
               ", address=" + address +
               ", phones=" + phones +
               ", managers=" + managers +
               ", accounts=" + accounts +
               ", locations=" + locations +
               '}';
    }
}
