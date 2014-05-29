package com.nsl.cm.rest.translator;

/**
 * <code>Translator</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public interface Translator<T1, T2>
{
    /**
     * Translates object from to TO instance.
     * @param from the source object
     * @return the translated object
     */
    T2 translate(T1 from);

    /**
     * Performs revers translation.
     * @param from the source object
     * @return the translated object
     */
    T1 reverse(T2 from);
}
