package com.nsl.cm.rest.model;

/**
 * <code>RestKbk</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestKbk
{
    private long id;
    private String description;
    private String code;

    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        this.id = id;
    }

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
        return "RestKbk{" +
               "id=" + id +
               ", description='" + description + '\'' +
               ", code='" + code + '\'' +
               '}';
    }
}
