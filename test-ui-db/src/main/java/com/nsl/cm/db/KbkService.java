package com.nsl.cm.db;

import java.util.Collection;
import java.util.Map;
import javax.ejb.ApplicationException;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.nsl.cm.db.mapper.KbkSearchMapper;
import com.nsl.cm.db.model.Kbk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * <code>KbkService</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Component
@Transactional(propagation = Propagation.REQUIRED)
@ApplicationException(rollback = true)
public class KbkService extends AbstractService<Kbk, Long>
{
    @Autowired
    private KbkSearchMapper searchMapper;

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public Kbk create(Kbk entity)
    {
        return entityManager.merge(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
    public Kbk get(Long id)
    {
        return entityManager.find(Kbk.class, id);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public Kbk update(Kbk entity)
    {
        return entityManager.merge(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public void delete(Kbk entity)
    {
        entityManager.remove(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
    public Collection<Kbk> search(Map<String, Object> filter, int page, int pageSize)
    {
        return searchMapper.find(filter, page, pageSize);
    }
}
