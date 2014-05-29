package com.nsl.cm.rest.model;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.DateTime;

/**
 * <code>RestContract</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestContract
{
    private long id;
    private String contractNumber;
    private String clientFullName;
    private String clientShortName;
    private String clientCity;
    private String clientStreetAddress;
    private String clientRegion;
    private String clientPostIndex;
    private String clientPhoneType;
    private String clientPhoneNumber;
    private String clientPhoneExt;
    private String clientOfficerPosition;
    private String clientOfficerFullName;
    private String clientOfficerPhoneNumber;
    private String clientOfficerPhoneType;
    private String clientOfficerPhoneExt;
    private String clientLotCity;
    private String clientLotStreetAddress;
    private String clientLotRegion;
    private String clientLotPostIndex;
    private String clientAccountNumber;
    private String clientBank;
    private String clientBankBik;
    private String clientBankCorrAccount;
    private String clientKbk;
    private String type;
    private String status;
    private String termOfPayment;
    private String prepayPercent;
    private DateTime date;
    private String manager;
    private long siteId;
    private long clientId;
    private long clientPhoneId;
    private long accountId;
    private long executiveOfficerId;
    private long executiveOfficerPhoneId;
    private long kbkId;
    private RestLocation site;
    private RestOrganization client;
    private RestPhone clientPhone;
    private RestAccount account;
    private RestPerson executiveOfficer;
    private RestKbk kbk;
    private RestPhone executiveOfficerPhone;
    private List<RestContractServiceLine> services;

    public RestContract()
    {
        services = new ArrayList<>();
    }

    public void setId(long id)
    {
        this.id = id;
    }

    public long getId()
    {
        return id;
    }

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

    public String getClientShortName()
    {
        return clientShortName;
    }

    public void setClientShortName(String clientShortName)
    {
        this.clientShortName = clientShortName;
    }

    public String getClientCity()
    {
        return clientCity;
    }

    public void setClientCity(String clientCity)
    {
        this.clientCity = clientCity;
    }

    public String getClientStreetAddress()
    {
        return clientStreetAddress;
    }

    public void setClientStreetAddress(String clientStreetAddress)
    {
        this.clientStreetAddress = clientStreetAddress;
    }

    public String getClientRegion()
    {
        return clientRegion;
    }

    public void setClientRegion(String clientRegion)
    {
        this.clientRegion = clientRegion;
    }

    public String getClientPostIndex()
    {
        return clientPostIndex;
    }

    public void setClientPostIndex(String clientPostIndex)
    {
        this.clientPostIndex = clientPostIndex;
    }

    public String getClientPhoneType()
    {
        return clientPhoneType;
    }

    public void setClientPhoneType(String clientPhoneType)
    {
        this.clientPhoneType = clientPhoneType;
    }

    public String getClientPhoneNumber()
    {
        return clientPhoneNumber;
    }

    public void setClientPhoneNumber(String clientPhoneNumber)
    {
        this.clientPhoneNumber = clientPhoneNumber;
    }

    public String getClientPhoneExt()
    {
        return clientPhoneExt;
    }

    public void setClientPhoneExt(String clientPhoneExt)
    {
        this.clientPhoneExt = clientPhoneExt;
    }

    public String getClientOfficerPosition()
    {
        return clientOfficerPosition;
    }

    public void setClientOfficerPosition(String clientOfficerPosition)
    {
        this.clientOfficerPosition = clientOfficerPosition;
    }

    public String getClientOfficerFullName()
    {
        return clientOfficerFullName;
    }

    public void setClientOfficerFullName(String clientOfficerFullName)
    {
        this.clientOfficerFullName = clientOfficerFullName;
    }

    public String getClientOfficerPhoneNumber()
    {
        return clientOfficerPhoneNumber;
    }

    public void setClientOfficerPhoneNumber(String clientOfficerPhoneNumber)
    {
        this.clientOfficerPhoneNumber = clientOfficerPhoneNumber;
    }

    public String getClientOfficerPhoneType()
    {
        return clientOfficerPhoneType;
    }

    public void setClientOfficerPhoneType(String clientOfficerPhoneType)
    {
        this.clientOfficerPhoneType = clientOfficerPhoneType;
    }

    public String getClientOfficerPhoneExt()
    {
        return clientOfficerPhoneExt;
    }

    public void setClientOfficerPhoneExt(String clientOfficerPhoneExt)
    {
        this.clientOfficerPhoneExt = clientOfficerPhoneExt;
    }

    public String getClientLotCity()
    {
        return clientLotCity;
    }

    public void setClientLotCity(String clientLotCity)
    {
        this.clientLotCity = clientLotCity;
    }

    public String getClientLotStreetAddress()
    {
        return clientLotStreetAddress;
    }

    public void setClientLotStreetAddress(String clientLotStreetAddress)
    {
        this.clientLotStreetAddress = clientLotStreetAddress;
    }

    public String getClientLotRegion()
    {
        return clientLotRegion;
    }

    public void setClientLotRegion(String clientLotRegion)
    {
        this.clientLotRegion = clientLotRegion;
    }

    public String getClientLotPostIndex()
    {
        return clientLotPostIndex;
    }

    public void setClientLotPostIndex(String clientLotPostIndex)
    {
        this.clientLotPostIndex = clientLotPostIndex;
    }

    public String getClientAccountNumber()
    {
        return clientAccountNumber;
    }

    public void setClientAccountNumber(String clientAccountNumber)
    {
        this.clientAccountNumber = clientAccountNumber;
    }

    public String getClientBank()
    {
        return clientBank;
    }

    public void setClientBank(String clientBank)
    {
        this.clientBank = clientBank;
    }

    public String getClientBankBik()
    {
        return clientBankBik;
    }

    public void setClientBankBik(String clientBankBik)
    {
        this.clientBankBik = clientBankBik;
    }

    public String getClientBankCorrAccount()
    {
        return clientBankCorrAccount;
    }

    public void setClientBankCorrAccount(String clientBankCorrAccount)
    {
        this.clientBankCorrAccount = clientBankCorrAccount;
    }

    public String getClientKbk()
    {
        return clientKbk;
    }

    public void setClientKbk(String clientKbk)
    {
        this.clientKbk = clientKbk;
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

    public String getTermOfPayment()
    {
        return termOfPayment;
    }

    public void setTermOfPayment(String termOfPayment)
    {
        this.termOfPayment = termOfPayment;
    }

    public String getPrepayPercent()
    {
        return prepayPercent;
    }

    public void setPrepayPercent(String prepayPercent)
    {
        this.prepayPercent = prepayPercent;
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

    public long getSiteId()
    {
        return siteId;
    }

    public void setSiteId(long siteId)
    {
        this.siteId = siteId;
    }

    public long getClientId()
    {
        return clientId;
    }

    public void setClientId(long clientId)
    {
        this.clientId = clientId;
    }

    public long getClientPhoneId()
    {
        return clientPhoneId;
    }

    public void setClientPhoneId(long clientPhoneId)
    {
        this.clientPhoneId = clientPhoneId;
    }

    public long getAccountId()
    {
        return accountId;
    }

    public void setAccountId(long accountId)
    {
        this.accountId = accountId;
    }

    public long getExecutiveOfficerId()
    {
        return executiveOfficerId;
    }

    public void setExecutiveOfficerId(long executiveOfficerId)
    {
        this.executiveOfficerId = executiveOfficerId;
    }

    public long getExecutiveOfficerPhoneId()
    {
        return executiveOfficerPhoneId;
    }

    public void setExecutiveOfficerPhoneId(long executiveOfficerPhoneId)
    {
        this.executiveOfficerPhoneId = executiveOfficerPhoneId;
    }

    public long getKbkId()
    {
        return kbkId;
    }

    public void setKbkId(long kbkId)
    {
        this.kbkId = kbkId;
    }

    public RestLocation getSite()
    {
        return site;
    }

    public void setSite(RestLocation site)
    {
        this.site = site;
    }

    public RestOrganization getClient()
    {
        return client;
    }

    public void setClient(RestOrganization client)
    {
        this.client = client;
    }

    public RestPhone getClientPhone()
    {
        return clientPhone;
    }

    public void setClientPhone(RestPhone clientPhone)
    {
        this.clientPhone = clientPhone;
    }

    public RestAccount getAccount()
    {
        return account;
    }

    public void setAccount(RestAccount account)
    {
        this.account = account;
    }

    public RestPerson getExecutiveOfficer()
    {
        return executiveOfficer;
    }

    public void setExecutiveOfficer(RestPerson executiveOfficer)
    {
        this.executiveOfficer = executiveOfficer;
    }

    public RestKbk getKbk()
    {
        return kbk;
    }

    public void setKbk(RestKbk kbk)
    {
        this.kbk = kbk;
    }

    public RestPhone getExecutiveOfficerPhone()
    {
        return executiveOfficerPhone;
    }

    public void setExecutiveOfficerPhone(RestPhone executiveOfficerPhone)
    {
        this.executiveOfficerPhone = executiveOfficerPhone;
    }

    public List<RestContractServiceLine> getServices()
    {
        return services;
    }

    public void setServices(List<RestContractServiceLine> services)
    {
        this.services = services;
    }

    @Override
    public String toString()
    {
        return "RestContract{" +
               "id=" + id +
               ", contractNumber='" + contractNumber + '\'' +
               ", clientFullName='" + clientFullName + '\'' +
               ", clientShortName='" + clientShortName + '\'' +
               ", clientCity='" + clientCity + '\'' +
               ", clientStreetAddress='" + clientStreetAddress + '\'' +
               ", clientRegion='" + clientRegion + '\'' +
               ", clientPostIndex='" + clientPostIndex + '\'' +
               ", clientPhoneType='" + clientPhoneType + '\'' +
               ", clientPhoneNumber='" + clientPhoneNumber + '\'' +
               ", clientPhoneExt='" + clientPhoneExt + '\'' +
               ", clientOfficerPosition='" + clientOfficerPosition + '\'' +
               ", clientOfficerFullName='" + clientOfficerFullName + '\'' +
               ", clientOfficerPhoneNumber='" + clientOfficerPhoneNumber + '\'' +
               ", clientOfficerPhoneType='" + clientOfficerPhoneType + '\'' +
               ", clientOfficerPhoneExt='" + clientOfficerPhoneExt + '\'' +
               ", clientLotCity='" + clientLotCity + '\'' +
               ", clientLotStreetAddress='" + clientLotStreetAddress + '\'' +
               ", clientLotRegion='" + clientLotRegion + '\'' +
               ", clientLotPostIndex='" + clientLotPostIndex + '\'' +
               ", clientAccountNumber='" + clientAccountNumber + '\'' +
               ", clientBank='" + clientBank + '\'' +
               ", clientBankBik='" + clientBankBik + '\'' +
               ", clientBankCorrAccount='" + clientBankCorrAccount + '\'' +
               ", clientKbk='" + clientKbk + '\'' +
               ", type='" + type + '\'' +
               ", status='" + status + '\'' +
               ", termOfPayment='" + termOfPayment + '\'' +
               ", prepayPercent='" + prepayPercent + '\'' +
               ", date=" + date +
               ", manager='" + manager + '\'' +
               ", siteId=" + siteId +
               ", clientId=" + clientId +
               ", clientPhoneId=" + clientPhoneId +
               ", accountId=" + accountId +
               ", executiveOfficerId=" + executiveOfficerId +
               ", executiveOfficerPhoneId=" + executiveOfficerPhoneId +
               ", kbkId=" + kbkId +
               ", site=" + site +
               ", client=" + client +
               ", clientPhone=" + clientPhone +
               ", account=" + account +
               ", executiveOfficer=" + executiveOfficer +
               ", kbk=" + kbk +
               ", executiveOfficerPhone=" + executiveOfficerPhone +
               ", services=" + services +
               '}';
    }
}
