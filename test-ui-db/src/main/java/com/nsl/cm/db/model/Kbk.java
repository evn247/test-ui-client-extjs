package com.nsl.cm.db.model;

import javax.persistence.*;

/**
 * <code>Kbk</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Entity
@Table(name = "kbk")
@SequenceGenerator(name = "dic_seq", sequenceName = "def_seq", allocationSize = 1)
public class Kbk
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dic_seq")
    @Column(name = "entry_id")
    private long id;

    @Column(name = "description")
    private String description;
    @Column(name = "code")
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
        return "Kbk{" +
               "id=" + id +
               ", description='" + description + '\'' +
               ", code='" + code + '\'' +
               '}';
    }
}
