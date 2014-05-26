package com.nsl.cm.rest.model;

import java.util.List;

/**
 * <code>RestPerson</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestPerson
{
    private long id;
    private String firstName;
    private String lastName;
    private String middleName;
    private String position;
    private String email;
    private List<RestPhone> phones;

    public List<RestPhone> getPhones()
    {
        return phones;
    }

    public void setPhones(List<RestPhone> phones)
    {
        this.phones = phones;
    }

    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        this.id = id;
    }

    public String getFirstName()
    {
        return firstName;
    }

    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public void setLastName(String lastName)
    {
        this.lastName = lastName;
    }

    public String getMiddleName()
    {
        return middleName;
    }

    public void setMiddleName(String middleName)
    {
        this.middleName = middleName;
    }

    public String getPosition()
    {
        return position;
    }

    public void setPosition(String position)
    {
        this.position = position;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    @Override
    public String toString()
    {
        return "RestPerson{" +
               "id=" + id +
               ", firstName='" + firstName + '\'' +
               ", lastName='" + lastName + '\'' +
               ", middleName='" + middleName + '\'' +
               ", position='" + position + '\'' +
               ", email='" + email + '\'' +
               ", phones=" + phones +
               '}';
    }
}
