package com.nsl.cm.rest.model;

import org.joda.time.DateTime;

/**
 * <code>RestKbkFilter</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestKbkFilter
{
    private String description;
    private String code;

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public String getCode()
    {
        return code;
    }

    public void setCode(String code)
    {
        this.code = code;
    }

    @Override
    public String toString()
    {
        return "RestKbkFilter{" +
               "description='" + description + '\'' +
               ", code='" + code + '\'' +
               '}';
    }
}
