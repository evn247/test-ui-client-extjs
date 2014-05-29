package com.nsl.cm.rest.translator;

import java.math.BigDecimal;

import com.nsl.cm.db.model.Service;
import com.nsl.cm.rest.model.RestService;

/**
 * <code>ServiceTranslator</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class ServiceTranslator extends  AbstractTranslator<RestService, Service>
{
    @Override
    public Service translate(RestService restService)
    {
        Service result = new Service();
        result.setId(restService.getId());
        result.setFullName(restService.getFullName());
        result.setShortName(restService.getShortName());
        result.setPrice(BigDecimal.valueOf(restService.getPrice()));

        return result;
    }

    @Override
    public RestService reverse(Service service)
    {
        RestService result = new RestService();
        result.setId(service.getId());
        result.setFullName(service.getFullName());
        result.setShortName(service.getShortName());
        BigDecimal price = service.getPrice();
        result.setPrice(price == null ? 0 : price.doubleValue());
        return result;
    }
}
