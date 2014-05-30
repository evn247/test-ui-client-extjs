package com.nsl.cm.rest.translator;

import java.util.HashMap;
import java.util.Map;

import com.nsl.cm.rest.model.RestKbkFilter;

/**
* <code>RestKbkFilterTranslator</code>
*
* @author Eduard Napolov <Eduard.Napolov@R-Style.com>
* @version 1.0
*/
public class RestKbkFilterTranslator extends AbstractFilterTranslator<RestKbkFilter, Map<String,Object>>
{
    @Override
    public Map<String, Object> translate(RestKbkFilter restKbkFilter)
    {
        HashMap<String, Object> map = new HashMap<>();
        if(restKbkFilter != null)
        {
            putIfNotNull(map, "code", restKbkFilter.getCode());
            putIfNotNull(map, "description", restKbkFilter.getDescription());
        }
        return map;
    }
}
