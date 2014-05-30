package com.nsl.cm.rest.translator;

import com.nsl.cm.db.model.Kbk;
import com.nsl.cm.rest.model.RestKbk;

/**
 * <code>KbkTranslator</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class KbkTranslator extends AbstractTranslator<RestKbk, Kbk>
{
    @Override
    public RestKbk reverse(Kbk kbk)
    {
        RestKbk result = new RestKbk();
        if (kbk != null)
        {
            result.setId(kbk.getId());
            result.setCode(kbk.getCode());
            result.setDescription(kbk.getDescription());
        }
        return result;
    }

    @Override
    public Kbk translate(RestKbk kbk)
    {
        Kbk result = new Kbk();
        if (kbk != null)
        {
            result.setId(kbk.getId());
            result.setCode(kbk.getCode());
            result.setDescription(kbk.getDescription());
        }
        return result;
    }

}
