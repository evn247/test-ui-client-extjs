package com.nsl.cm.db;

import javax.ejb.ApplicationException;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.nsl.cm.db.mapper.SearchMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * <code>AbstractService</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Transactional(propagation = Propagation.REQUIRED)
@ApplicationException(rollback = true)
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

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public E create(E entity)
    {
        return entityManager.merge(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public E update(E entity)
    {
        return entityManager.merge(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public void delete(E entity)
    {
        entityManager.remove(entity);
    }
}
