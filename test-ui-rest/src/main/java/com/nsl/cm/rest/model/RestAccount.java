package com.nsl.cm.rest.model;

/**
 * <code>RestAccount</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestAccount
{
    private long id;
    private String accountName;
    private String accountNumber;
    private String bankName;
    private String corrAccountNumber;
    private String bik;

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

    @Override
    public String toString()
    {
        return "RestAccount{" +
               "id=" + id +
               ", accountName='" + accountName + '\'' +
               ", accountNumber='" + accountNumber + '\'' +
               ", bankName='" + bankName + '\'' +
               ", corrAccountNumber='" + corrAccountNumber + '\'' +
               ", bik='" + bik + '\'' +
               '}';
    }
}
