package com.nsl.cm.rest.translator;

import java.util.HashMap;
import java.util.Map;

import com.nsl.cm.rest.model.RestContractFilter;
import com.nsl.cm.rest.model.RestKbkFilter;
import com.nsl.cm.rest.model.RestServiceFilter;

/**
* <code>RestServiceFilterTranslator</code>
*
* @author Eduard Napolov <Eduard.Napolov@R-Style.com>
* @version 1.0
*/
public class RestServiceFilterTranslator extends AbstractFilterTranslator<RestServiceFilter, Map<String,Object>>
{
    @Override
    public Map<String, Object> translate(RestServiceFilter restServiceFilter)
    {
        HashMap<String, Object> map = new HashMap<>();
        if(restServiceFilter != null)
        {
            putIfNotNull(map, "name", restServiceFilter.getName());
        }
        return map;
    }
}
