package com.nsl.cm.db.model;

import javax.persistence.*;

/**
 * <code>Phone</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Entity
@Table(name = "phone")
@SequenceGenerator(name = "dic_seq", sequenceName = "def_seq", allocationSize = 1)
public class Phone
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dic_seq")
    @Column(name = "entry_id")
    private Long id;

    @Column(name = "type")
    private String type;
    @Column(name = "number")
    private String number;
    @Column(name = "extension")
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
