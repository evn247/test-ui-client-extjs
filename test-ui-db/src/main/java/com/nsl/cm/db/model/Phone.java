package com.nsl.cm.db.model;

/**
 * <code>Phone</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class Phone
{
    private Long id;
    private String type;
    private String number;
    private String extension;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getType()
    {
        return type;
    }

    public void setType(String type)
    {
        this.type = type;
    }

    public String getNumber()
    {
        return number;
    }

    public void setNumber(String number)
    {
        this.number = number;
    }

    public String getExtension()
    {
        return extension;
    }

    public void setExtension(String extension)
    {
        this.extension = extension;
    }

    @Override
    public String toString()
    {
        return "Phone{" +
               "id=" + id +
               ", type='" + type + '\'' +
               ", number='" + number + '\'' +
               ", extension='" + extension + '\'' +
               '}';
    }
}