package com.nsl.cm.rest.model;

/**
 * <code>RestContractServiceLine</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestContractServiceLine
{
    private long id;
    private String fullName;
    private String shortName;
    private double price;
    private long serviceId;
    private RestService service;

    public RestService getService()
    {
        return service;
    }

    public void setService(RestService service)
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

    public double getPrice()
    {
        return price;
    }

    public void setPrice(double price)
    {
        this.price = price;
    }

    public long getServiceId()
    {
        return serviceId;
    }

    public void setServiceId(long serviceId)
    {
        this.serviceId = serviceId;
    }

    @Override
    public String toString()
    {
        return "RestContractServiceLine{" +
               "id=" + id +
               ", fullName='" + fullName + '\'' +
               ", shortName='" + shortName + '\'' +
               ", price=" + price +
               ", serviceId=" + serviceId +
               ", service=" + service +
               '}';
    }
}
