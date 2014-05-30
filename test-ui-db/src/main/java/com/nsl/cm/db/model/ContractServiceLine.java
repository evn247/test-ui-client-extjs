package com.nsl.cm.db.model;

import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * <code>ContractServiceLine</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Entity
@Table(name = "contract_service_line")
@SequenceGenerator(name = "doc_seq", sequenceName = "def_seq", allocationSize = 1)
public class ContractServiceLine
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "doc_seq")
    @Column(name = "entry_id")
    private long id;

    @Column(name = "full_name")
    private String fullName;
    @Column(name = "short_name")
    private String shortName;
    @Column(name = "price")
    private BigDecimal price;

    @OneToOne(optional=true)
    @JoinColumn(name = "service_id")
    private Service service;

    @ManyToOne
    @JoinColumn(name = "contract_id")
    private Contract contract;

    public Contract getContract()
    {
        return contract;
    }

    public void setContract(Contract contract)
    {
        this.contract = contract;
    }

    public Service getService()
    {
        return service;
    }

    public void setService(Service service)
    {
        this.service = service;
    }

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
        return "ContractServiceLine{" +
               "id=" + id +
               ", fullName='" + fullName + '\'' +
               ", shortName='" + shortName + '\'' +
               ", price=" + price +
               ", service=" + service +
               ", contract=" + (contract == null ? "NULL" : contract.getId())+
               '}';
    }
}
