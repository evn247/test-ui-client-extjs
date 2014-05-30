package com.nsl.cm.rest.translator;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.nsl.cm.db.model.Account;
import com.nsl.cm.db.model.Contract;
import com.nsl.cm.db.model.ContractServiceLine;
import com.nsl.cm.db.model.Kbk;
import com.nsl.cm.db.model.Organization;
import com.nsl.cm.db.model.Service;
import com.nsl.cm.rest.model.RestAccount;
import com.nsl.cm.rest.model.RestContract;
import com.nsl.cm.rest.model.RestContractServiceLine;
import com.nsl.cm.rest.model.RestKbk;
import com.nsl.cm.rest.model.RestLocation;
import com.nsl.cm.rest.model.RestOrganization;
import com.nsl.cm.rest.model.RestPerson;
import com.nsl.cm.rest.model.RestPhone;
import com.nsl.cm.rest.model.RestService;
import org.joda.time.DateTime;

/**
 * <code>ContractTranslator</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class ContractTranslator extends AbstractTranslator<RestContract, Contract>
{
    private final static Translator<RestService, Service> SERVICE_TRANSLATOR = new ServiceTranslator();
    private final static Translator<RestOrganization, Organization> ORGANIZATION_TRANSLATOR = new OrganizationTranslator();
    private final static Translator<RestKbk, Kbk> KBK_TRANSLATOR = new KbkTranslator();

    @Override
    public Contract translate(RestContract contract)
    {
        Contract result = new Contract();

        Organization organization = ORGANIZATION_TRANSLATOR.translate(contract.getClient());
        result.setClient(organization);
        Account account = translate(contract.getAccount());
        account.setOrganization(organization == null ? null : organization);

        result.setAccount(account);
        result.setClientPhone(translate(contract.getClientPhone()));
        result.setExecutiveOfficer(translate(contract.getExecutiveOfficer()));
        result.setExecutiveOfficerPhone(translate(contract.getExecutiveOfficerPhone()));
        result.setKbk(KBK_TRANSLATOR.translate(contract.getKbk()));
        result.setSite(translate(contract.getSite()));

        result.setClientAccountNumber(contract.getClientAccountNumber());
        result.setClientBank(contract.getClientBank());
        result.setClientBankBik(contract.getClientBankBik());
        result.setClientBankCorrAccount(contract.getClientBankCorrAccount());
        result.setClientCity(contract.getClientCity());
        result.setClientFullName(contract.getClientFullName());
        result.setClientKbk(contract.getClientKbk());
        result.setClientLotCity(contract.getClientLotCity());
        result.setClientLotPostIndex(contract.getClientLotPostIndex());
        result.setClientLotRegion(contract.getClientLotRegion());
        result.setClientLotStreetAddress(contract.getClientLotStreetAddress());
        result.setClientOfficerFullName(contract.getClientOfficerFullName());
        result.setClientOfficerPhoneExt(contract.getClientOfficerPhoneExt());
        result.setClientOfficerPhoneNumber(contract.getClientOfficerPhoneNumber());
        result.setClientOfficerPhoneType(contract.getClientOfficerPhoneType());
        result.setClientOfficerPosition(contract.getClientOfficerPosition());
        result.setClientPhoneNumber(contract.getClientPhoneNumber());
        result.setClientPhoneExt(contract.getClientPhoneExt());
        result.setClientPhoneNumber(contract.getClientPhoneNumber());
        result.setClientPhoneType(contract.getClientPhoneType());
        result.setClientPostIndex(contract.getClientPostIndex());
        result.setClientRegion(contract.getClientRegion());
        result.setClientShortName(contract.getClientShortName());
        result.setClientStreetAddress(contract.getClientStreetAddress());
        result.setContractNumber(contract.getContractNumber());
        result.setDate(contract.getDate().toDate());
        result.setId(contract.getId());
        result.setManager(contract.getManager());
        result.setPrepayPercent(contract.getPrepayPercent());
        result.setServices(translate(contract.getServices()));
        result.setStatus(contract.getStatus());
        result.setTermOfPayment(contract.getTermOfPayment());
        result.setType(contract.getType());

        return result;
    }

    @Override
    public RestContract reverse(Contract contract)
    {
        RestContract result = new RestContract();

        RestAccount account = translate(contract.getAccount());
        result.setAccount(account);
        result.setAccountId(account.getId());

        RestOrganization organization = ORGANIZATION_TRANSLATOR.reverse(contract.getClient());
        result.setClient(organization);
        result.setClientId(organization.getId());

        RestPhone phone = translate(contract.getClientPhone());
        result.setClientPhone(phone);
        result.setClientPhoneId(phone.getId());

        RestPerson officer = translate(contract.getExecutiveOfficer());
        result.setExecutiveOfficer(officer);
        result.setExecutiveOfficerId(officer.getId());

        phone = translate(contract.getExecutiveOfficerPhone());
        result.setExecutiveOfficerPhone(phone);
        result.setExecutiveOfficerPhoneId(phone.getId());

        RestKbk kbk = translate(contract.getKbk());
        result.setKbk(kbk);
        result.setKbkId(kbk.getId());

        RestLocation location = translate(contract.getSite());
        result.setSite(location);
        result.setSiteId(location.getId());

        result.setClientAccountNumber(contract.getClientAccountNumber());
        result.setClientBank(contract.getClientBank());
        result.setClientBankBik(contract.getClientBankBik());
        result.setClientBankCorrAccount(contract.getClientBankCorrAccount());
        result.setClientCity(contract.getClientCity());
        result.setClientFullName(contract.getClientFullName());
        result.setClientKbk(contract.getClientKbk());
        result.setClientLotCity(contract.getClientLotCity());
        result.setClientLotPostIndex(contract.getClientLotPostIndex());
        result.setClientLotRegion(contract.getClientLotRegion());
        result.setClientLotStreetAddress(contract.getClientLotStreetAddress());
        result.setClientOfficerFullName(contract.getClientOfficerFullName());
        result.setClientOfficerPhoneExt(contract.getClientOfficerPhoneExt());
        result.setClientOfficerPhoneNumber(contract.getClientOfficerPhoneNumber());
        result.setClientOfficerPhoneType(contract.getClientOfficerPhoneType());
        result.setClientOfficerPosition(contract.getClientOfficerPosition());
        result.setClientPhoneNumber(contract.getClientPhoneNumber());
        result.setClientPhoneExt(contract.getClientPhoneExt());
        result.setClientPhoneNumber(contract.getClientPhoneNumber());
        result.setClientPhoneType(contract.getClientPhoneType());
        result.setClientPostIndex(contract.getClientPostIndex());
        result.setClientRegion(contract.getClientRegion());
        result.setClientShortName(contract.getClientShortName());
        result.setClientStreetAddress(contract.getClientStreetAddress());
        result.setContractNumber(contract.getContractNumber());
        result.setDate(new DateTime(contract.getDate().getTime()));
        result.setId(contract.getId());
        result.setManager(contract.getManager());
        result.setPrepayPercent(contract.getPrepayPercent());
        result.setServices(reverse(contract.getServices()));
        result.setStatus(contract.getStatus());
        result.setTermOfPayment(contract.getTermOfPayment());
        result.setType(contract.getType());

        return result;
    }

    /**
     * Converts contract lines.
     * @param services the list of contract lines
     * @return the
     */
    private List<ContractServiceLine> translate(List<RestContractServiceLine> services)
    {
        List<ContractServiceLine> resultList = new ArrayList<>(services.size());
        for(RestContractServiceLine restLine : services)
        {
            ContractServiceLine line = new ContractServiceLine();
            line.setFullName(restLine.getFullName());
            line.setId(restLine.getId());
            line.setPrice(BigDecimal.valueOf(restLine.getPrice()));
            line.setShortName(restLine.getShortName());
            line.setService(SERVICE_TRANSLATOR.translate(restLine.getService()));

            resultList.add(line);
        }
        return resultList;
    }

    /**
     * Converts contract lines.
     * @param services the list of contract lines
     * @return the
     */
    private List<RestContractServiceLine> reverse(List<ContractServiceLine> services)
    {
        List<RestContractServiceLine> resultList = new ArrayList<>(services.size());
        for(ContractServiceLine line : services)
        {
            RestContractServiceLine restLine = new RestContractServiceLine();
            restLine.setFullName(line.getFullName());
            restLine.setId(line.getId());
            restLine.setPrice(line.getPrice().doubleValue());
            restLine.setShortName(line.getShortName());
            restLine.setService(SERVICE_TRANSLATOR.reverse(line.getService()));

            resultList.add(restLine);
        }
        return resultList;
    }

}
