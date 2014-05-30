package com.nsl.cm.rest.translator;

import java.util.HashMap;
import java.util.Map;

import com.nsl.cm.rest.model.RestOrganizationFilter;

/**
 * <code>RestOrganizationFilterTranslator</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class RestOrganizationFilterTranslator extends AbstractFilterTranslator<RestOrganizationFilter, Map<String, Object>>
{
    @Override
    public Map<String, Object> translate(RestOrganizationFilter restOrganizationFilter)
    {
        HashMap<String, Object> map = new HashMap<>();
        if(restOrganizationFilter != null)
        {
            putIfNotNull(map, "name", restOrganizationFilter.getName());
            putIfNotNull(map, "inn", restOrganizationFilter.getInn());
            putIfNotNull(map, "kpp", restOrganizationFilter.getKpp());
        }
        return map;
    }
}
