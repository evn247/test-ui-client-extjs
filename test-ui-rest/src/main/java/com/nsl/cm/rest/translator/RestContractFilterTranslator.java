package com.nsl.cm.rest.translator;

import java.util.HashMap;
import java.util.Map;

import com.nsl.cm.rest.model.RestContractFilter;

/**
* <code>RestContractFilterTranslator</code>
*
* @author Eduard Napolov <Eduard.Napolov@R-Style.com>
* @version 1.0
*/
public class RestContractFilterTranslator extends AbstractFilterTranslator<RestContractFilter, Map<String,Object>>
{
    @Override
    public Map<String, Object> translate(RestContractFilter restContractFilter)
    {
        HashMap<String, Object> map = new HashMap<>();
        putIfNotNull(map, "contractNumber", restContractFilter.getContractNumber());
        putIfNotNull(map, "clientName", restContractFilter.getClientFullName());
        putIfNotNull(map, "officerName", restContractFilter.getClientOfficerFullName());
        putIfNotNull(map, "date", restContractFilter.getDate());
        putIfNotNull(map, "type", restContractFilter.getType());
        putIfNotNull(map, "status", restContractFilter.getStatus());
        putIfNotNull(map, "manager", restContractFilter.getManager());
        return map;
    }
}
