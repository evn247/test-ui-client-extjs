package com.nsl.cm.db.model;

import javax.persistence.*;

/**
 * <code>Account</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Entity
@Table(name = "account")
@SequenceGenerator(name = "dic_seq", sequenceName = "def_seq", allocationSize = 1)
public class Account
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dic_seq")
    @Column(name = "entry_id")
    private long id;

    @Column(name = "account_name")
    private String accountName;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "bank_corr_account_number")
    private String corrAccountNumber;

    @Column(name = "bank_bik")
    private String bik;

    @ManyToOne
    @JoinColumn(name = "organization_id")
    private Organization organization;



    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        this.id = id;
    }

    public String getAccountName()
    {
        return accountName;
    }

    public void setAccountName(String accountName)
    {
        this.accountName = accountName;
    }

    public String getAccountNumber()
    {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber)
    {
        this.accountNumber = accountNumber;
    }

    public String getBankName()
    {
        return bankName;
    }

    public void setBankName(String bankName)
    {
        this.bankName = bankName;
    }

    public String getCorrAccountNumber()
    {
        return corrAccountNumber;
    }

    public void setCorrAccountNumber(String corrAccountNumber)
    {
        this.corrAccountNumber = corrAccountNumber;
    }

    public String getBik()
    {
        return bik;
    }

    public void setBik(String bik)
    {
        this.bik = bik;
    }

    public Organization getOrganization()
    {
        return organization;
    }

    public void setOrganization(Organization organization)
    {
        this.organization = organization;
    }

    @Override
    public String toString()
    {
        return "Account{" +
               "id=" + id +
               ", accountName='" + accountName + '\'' +
               ", accountNumber='" + accountNumber + '\'' +
               ", bankName='" + bankName + '\'' +
               ", corrAccountNumber='" + corrAccountNumber + '\'' +
               ", bik='" + bik + '\'' +
               ", organization=" + (organization == null ? "NULL" : organization.getId())+
               '}';
    }
}
