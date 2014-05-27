package com.nsl.cm.db.model;

import java.math.BigDecimal;
import javax.persistence.*;
/**
 * <code>Service</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Entity
@Table(name = "service")
@SequenceGenerator(name = "dic_seq", sequenceName = "def_seq", allocationSize = 1)
public class Service
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dic_seq")
    @Column(name = "entry_id")
    private long id;
    @Column(name = "full_name")
    private String fullName;
    @Column(name = "short_name")
    private String shortName;
    @Column(name = "price")
    private BigDecimal price;

    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        this.id = id;
    }

    public String getFullName()
    {
        return fullName;
    }

    public void setFullName(String fullName)
    {
        this.fullName = fullName;
    }

    public String getShortName()
    {
        return shortName;
    }

    public void setShortName(String shortName)
    {
        this.shortName = shortName;
    }

    public BigDecimal getPrice()
    {
        return price;
    }

    public void setPrice(BigDecimal price)
    {
        this.price = price;
    }

    @Override
    public String toString()
    {
        return "Service{" +
               "id=" + id +
               ", fullName='" + fullName + '\'' +
               ", shortName='" + shortName + '\'' +
               ", price=" + price +
               '}';
    }
}
