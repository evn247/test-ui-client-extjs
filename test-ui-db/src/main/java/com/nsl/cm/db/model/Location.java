package com.nsl.cm.db.model;

import javax.persistence.*;
/**
 * <code>Location</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Entity
@Table(name = "location")
@SequenceGenerator(name = "dic_seq", sequenceName = "def_seq", allocationSize = 1)
public class Location
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dic_seq")
    @Column(name = "entry_id")
    private Long id;

    @Column(name = "location_name")
    private String name;

    @Column(name = "address")
    private String streetAddress;

    @Column(name = "city")
    private String city;

    @Column(name = "post_index")
    private String postIndex;

    @ManyToOne
    @JoinColumn(name = "organization_id")
    private Organization organization;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getStreetAddress()
    {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress)
    {
        this.streetAddress = streetAddress;
    }

    public String getCity()
    {
        return city;
    }

    public void setCity(String city)
    {
        this.city = city;
    }

    public String getPostIndex()
    {
        return postIndex;
    }

    public void setPostIndex(String postIndex)
    {
        this.postIndex = postIndex;
    }

    @Override
    public String toString()
    {
        return "Location{" +
               "id=" + id +
               ", name='" + name + '\'' +
               ", streetAddress='" + streetAddress + '\'' +
               ", city='" + city + '\'' +
               ", postIndex='" + postIndex + '\'' +
               '}';
    }
}
