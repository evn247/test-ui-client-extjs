package com.nsl.cm.rest.model;

/**
 * <code>RestLocation</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestLocation
{
    private Long id;
    private String name;
    private String streetAddress;
    private String city;
    private String postIndex;

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
        return "RestLocation{" +
               "id=" + id +
               ", name='" + name + '\'' +
               ", streetAddress='" + streetAddress + '\'' +
               ", city='" + city + '\'' +
               ", postIndex='" + postIndex + '\'' +
               '}';
    }
}
