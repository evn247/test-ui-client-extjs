package com.nsl.cm.rest.translator;

import java.util.ArrayList;
import java.util.Collection;

/**
 * <code>CollectionTranslator</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public class CollectionTranslator<T1, T2>
{
    private Translator<T1, T2> elementTranslator;

    /**
     * Creates an instance.
     * @param elementTranslator converts collection element
     */
    public CollectionTranslator(Translator<T1, T2> elementTranslator)
    {
        this.elementTranslator = elementTranslator;
    }

    public Collection<T2> translate(Collection<T1> from)
    {
        ArrayList<T2> result = new ArrayList<>(from == null ? 0 : from.size());
        if(from != null)
        {
            for(T1 element : from)
            {
                result.add(elementTranslator.translate(element));
            }
        }
        return result;
    }

    public Collection<T1> reverse(Collection<T2> from)
    {
        ArrayList<T1> result = new ArrayList<>(from == null ? 0 : from.size());
        if(from != null)
        {
            for(T2 element : from)
            {
                result.add(elementTranslator.reverse(element));
            }
        }
        return result;
    }
}
