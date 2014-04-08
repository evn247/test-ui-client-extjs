package com.nsl.cm.auth;

import java.util.HashSet;
import java.util.Set;

/**
 * <code>PrincipalDetails</code>
 *
 * @author Eduard Napolov
 * @version 1.0
 */
public class PrincipalDetails<PT, T>
{
    private T id;
    private java.lang.String name;
    private java.lang.String surname;
    private java.lang.String patronym;
    private java.util.Set<PT> permissions;

    public PrincipalDetails()
    {
        permissions = new HashSet<>();
    }


    public T getId() { return id; }

    public void setId(T id) { this.id = id; }


    public Set<PT> getPermissions() { return permissions; }

    public void setPermissions(Set<PT> permissions) { this.permissions = permissions; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name;}

    public String getPatronym() { return patronym;}

    public void setPatronym(String patronym) { this.patronym = patronym;}

    public String getSurname() { return surname; }

    public void setSurname(String surname) { this.surname = surname; }
}
