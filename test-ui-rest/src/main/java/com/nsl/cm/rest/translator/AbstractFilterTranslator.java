package com.nsl.cm.rest.translator;

import java.util.Map;

/**
 * <code>AbstractFilterTranslator</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public abstract class AbstractFilterTranslator<FROM, TO> implements Translator<FROM, TO>
{
    @Override
    public FROM reverse(TO from)
    {
        throw new UnsupportedOperationException("reverse is not supported for filters!");
    }

    /**
     * Adds value to the map if it's not null.
     * @param map the map to be updated
     * @param name the key to the map
     * @param value the value to put if not null
     */
    protected void putIfNotNull(Map<String, Object> map, String name, Object value)
    {
        if(value != null)
        {
            map.put(name, value);
        }
    }
}
