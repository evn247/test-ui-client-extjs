package com.nsl.cm.rest.model;

import org.joda.time.DateTime;

/**
 * <code>RestContractFilter</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestContractFilter
{
    private String contractNumber;
    private String clientFullName;
    private String clientOfficerFullName;
    private String type;
    private String status;
    private DateTime date;
    private String manager;

    public String getContractNumber()
    {
        return contractNumber;
    }

    public void setContractNumber(String contractNumber)
    {
        this.contractNumber = contractNumber;
    }

    public String getClientFullName()
    {
        return clientFullName;
    }

    public void setClientFullName(String clientFullName)
    {
        this.clientFullName = clientFullName;
    }

    public String getClientOfficerFullName()
    {
        return clientOfficerFullName;
    }

    public void setClientOfficerFullName(String clientOfficerFullName)
    {
        this.clientOfficerFullName = clientOfficerFullName;
    }

    public String getType()
    {
        return type;
    }

    public void setType(String type)
    {
        this.type = type;
    }

    public String getStatus()
    {
        return status;
    }

    public void setStatus(String status)
    {
        this.status = status;
    }

    public DateTime getDate()
    {
        return date;
    }

    public void setDate(DateTime date)
    {
        this.date = date;
    }

    public String getManager()
    {
        return manager;
    }

    public void setManager(String manager)
    {
        this.manager = manager;
    }

    @Override
    public String toString()
    {
        return "RestContractFilter{" +
               "contractNumber='" + contractNumber + '\'' +
               ", clientFullName='" + clientFullName + '\'' +
               ", clientOfficerFullName='" + clientOfficerFullName + '\'' +
               ", type='" + type + '\'' +
               ", status='" + status + '\'' +
               ", date=" + date +
               ", manager='" + manager + '\'' +
               '}';
    }
}
