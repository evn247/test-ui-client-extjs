package com.nsl.cm.db;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.nsl.cm.db.mapper.SearchMapper;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * <code>AbstractService</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
public abstract class AbstractService<E, ID> implements DatabaseService<E, ID>
{
    protected EntityManager entityManager;

    /**
     * Installs entity manager to perform JPA operations. Called by container.
     * @param entityManager performs DB operations
     */
    @PersistenceContext
    public void setEntityManager(EntityManager entityManager)
    {
        this.entityManager = entityManager;
    }
}
