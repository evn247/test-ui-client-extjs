package com.nsl.cm.db.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * <code>Contract</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Entity
@Table(name = "contract")
@SequenceGenerator(name = "doc_seq", sequenceName = "def_seq", allocationSize = 1)
public class Contract
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "doc_seq")
    @Column(name = "entry_id")
    private long id;

    @Column(name = "contract_number")
    private String contractNumber;
    @Column(name = "client_full_name")
    private String clientFullName;
    @Column(name = "client_short_name")
    private String clientShortName;
    @Column(name = "client_city")
    private String clientCity;
    @Column(name = "client_street_address")
    private String clientStreetAddress;
    @Column(name = "client_region")
    private String clientRegion;
    @Column(name = "client_post_index")
    private String clientPostIndex;
    @Column(name = "client_phone_type")
    private String clientPhoneType;
    @Column(name = "clinent_phone_number")
    private String clientPhoneNumber;
    @Column(name = "client_phone_ext")
    private String clientPhoneExt;
    @Column(name = "client_officer_position")
    private String clientOfficerPosition;
    @Column(name = "client_officer_full_name")
    private String clientOfficerFullName;
    @Column(name = "client_officer_phone_number")
    private String clientOfficerPhoneNumber;
    @Column(name = "client_officer_phone_type")
    private String clientOfficerPhoneType;
    @Column(name = "client_officer_phone_ext")
    private String clientOfficerPhoneExt;
    @Column(name = "client_lot_city")
    private String clientLotCity;
    @Column(name = "client_lot_street_address")
    private String clientLotStreetAddress;
    @Column(name = "client_lot_region")
    private String clientLotRegion;
    @Column(name = "client_lot_post_index")
    private String clientLotPostIndex;
    @Column(name = "client_account_number")
    private String clientAccountNumber;
    @Column(name = "client_bank")
    private String clientBank;
    @Column(name = "client_bank_bik")
    private String clientBankBik;
    @Column(name = "client_bank_corr_account")
    private String clientBankCorrAccount;
    @Column(name = "client_kbk")
    private String clientKbk;
    @Column(name = "type")
    private String type;
    @Column(name = "status")
    private String status;
    @Column(name = "term_of_payment")
    private String termOfPayment;
    @Column(name = "prepay_percent")
    private String prepayPercent;
    @Column(name = "contract_date")
    private Date date;
    @Column(name = "manager_name")
    private String manager;

    @OneToOne(optional=true)
    @JoinColumn(name = "client_address_id")
    private Location address;

    @OneToOne(optional=true)
    @JoinColumn(name = "site_address_id")
    private Location site;

    @OneToOne(optional=true)
    @JoinColumn(name = "organization_id")
    private Organization client;

    @OneToOne(optional=true)
    @JoinColumn(name = "organization_phone_id")
    private Phone clientPhone;

    @OneToOne(optional=true)
    @JoinColumn(name = "account_id")
    private Account account;

    @OneToOne(optional=true)
    @JoinColumn(name = "officer_id")
    private Employee executiveOfficer;

    @OneToOne(optional=true)
    @JoinColumn(name = "kbk_id")
    private Kbk kbk;

    @OneToOne(optional=true)
    @JoinColumn(name = "officer_phone_id")
    private Phone executiveOfficerPhone;

    @OneToMany(mappedBy = "contract")
    private List<ContractServiceLine> services;

    public Contract()
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

    public Date getDate()
    {
        return date;
    }

    public void setDate(Date date)
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

    public Location getSite()
    {
        return site;
    }

    public void setSite(Location site)
    {
        this.site = site;
    }

    public Organization getClient()
    {
        return client;
    }

    public void setClient(Organization client)
    {
        this.client = client;
    }

    public Phone getClientPhone()
    {
        return clientPhone;
    }

    public void setClientPhone(Phone clientPhone)
    {
        this.clientPhone = clientPhone;
    }

    public Account getAccount()
    {
        return account;
    }

    public void setAccount(Account account)
    {
        this.account = account;
    }

    public Employee getExecutiveOfficer()
    {
        return executiveOfficer;
    }

    public void setExecutiveOfficer(Employee executiveOfficer)
    {
        this.executiveOfficer = executiveOfficer;
    }

    public Kbk getKbk()
    {
        return kbk;
    }

    public void setKbk(Kbk kbk)
    {
        this.kbk = kbk;
    }

    public Phone getExecutiveOfficerPhone()
    {
        return executiveOfficerPhone;
    }

    public void setExecutiveOfficerPhone(Phone executiveOfficerPhone)
    {
        this.executiveOfficerPhone = executiveOfficerPhone;
    }

    public List<ContractServiceLine> getServices()
    {
        return services;
    }

    public void setServices(List<ContractServiceLine> services)
    {
        this.services = services;
    }

    @Override
    public String toString()
    {
        return "Contract{" +
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
