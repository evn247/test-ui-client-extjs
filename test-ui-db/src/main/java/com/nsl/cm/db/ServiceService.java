package com.nsl.cm.db;

import java.util.Collection;
import java.util.Map;
import javax.ejb.ApplicationException;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.nsl.cm.db.mapper.ContractSearchMapper;
import com.nsl.cm.db.mapper.ServiceSearchMapper;
import com.nsl.cm.db.model.Contract;
import com.nsl.cm.db.model.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * <code>ServiceService</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Component
@Transactional(propagation = Propagation.REQUIRED)
@ApplicationException(rollback = true)
public class ServiceService extends AbstractService<Service, Long>
{
    @Autowired
    private ServiceSearchMapper searchMapper;

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public Service create(Service entity)
    {
        return entityManager.merge(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
    public Service get(Long id)
    {
        return entityManager.find(Service.class, id);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public Service update(Service entity)
    {
        return entityManager.merge(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public void delete(Service entity)
    {
        entityManager.remove(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
    public Collection<Service> search(Map<String, Object> filter, int page, int pageSize)
    {
        return searchMapper.find(filter, page, pageSize);
    }
}
