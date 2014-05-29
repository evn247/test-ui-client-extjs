package com.nsl.cm.db;

import java.util.Collection;
import java.util.Map;

/**
 * <code>DatabaseService</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public interface DatabaseService<E, ID>
{
    /**
     * Creates entity.
     * @param entity the entity to be created
     * @return the new entity
     */
    E create(E entity);

    /**
     * Returns entity by ID.
     * @param id the entity ID
     * @return the entity
     */
    E get(ID id);

    /**
     * Updates entity.
     * @param entity the entity to update
     */
    E update(E entity);

    /**
     * Deletes entity.
     * @param entity the entity to be deleted
     */
    void delete(E entity);

    /**
     * Searches entities.
     * @param filter the search parameters
     * @param page the page number
     * @param pageSize  the page size
     * @return the collection of entities.
     */
    Collection<E> search(Map<String, Object> filter, int page, int pageSize);
}
