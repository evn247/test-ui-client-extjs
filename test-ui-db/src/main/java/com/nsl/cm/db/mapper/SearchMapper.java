package com.nsl.cm.db.mapper;

import java.util.Collection;
import java.util.Map;

import com.nsl.cm.db.model.Organization;

/**
 * <code>SearchMapper</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public interface SearchMapper<E>
{
    /**
     * Searches for entities matching specified filter.
     * @param filter the filter data
     * @param page the page number
     * @param pageSize the page size
     * @return the collection of entities matching this filter
     */
    Collection<E> find(Map<String, Object> filter, int page, int pageSize);
}
