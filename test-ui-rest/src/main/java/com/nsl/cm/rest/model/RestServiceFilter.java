package com.nsl.cm.rest.model;

/**
 * <code>RestKbkFilter</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestServiceFilter
{
    private String name;

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    @Override
    public String toString()
    {
        return "RestKbkFilter{" +
               "name='" + name + '\'' +
               '}';
    }
}
