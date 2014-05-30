package com.nsl.cm.rest.model;

/**
 * <code>RestContractFilter</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestOrganizationFilter
{
    private String name;
    private String inn;
    private String kpp;

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getInn()
    {
        return inn;
    }

    public void setInn(String inn)
    {
        this.inn = inn;
    }

    public String getKpp()
    {
        return kpp;
    }

    public void setKpp(String kpp)
    {
        this.kpp = kpp;
    }

    @Override
    public String toString()
    {
        return "RestOrganizationFilter{" +
               "name='" + name + '\'' +
               ", inn='" + inn + '\'' +
               ", kpp='" + kpp + '\'' +
               '}';
    }
}
