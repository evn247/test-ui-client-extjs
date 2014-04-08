package com.nsl.cm.auth;

import java.util.Set;

/**
 * <code>PrincipalProviderHelper</code>
 *
 * @author Eduard Napolov
 * @version 1.0
 */
public interface PrincipalProviderHelper<PT>
{
    PrincipalDetails getPrincipal(String identity);

    Set<PT> getPermissions(String identity);
}
