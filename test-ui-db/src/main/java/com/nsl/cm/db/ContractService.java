package com.nsl.cm.db;

import java.util.Collection;
import java.util.Map;
import javax.ejb.ApplicationException;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.nsl.cm.db.mapper.ContractSearchMapper;
import com.nsl.cm.db.mapper.OrganizationSearchMapper;
import com.nsl.cm.db.model.Contract;
import com.nsl.cm.db.model.Organization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * <code>ContractService</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Component
@Transactional(propagation = Propagation.REQUIRED)
@ApplicationException(rollback = true)
public class ContractService extends AbstractService<Contract, Long>
{
    @Autowired
    private ContractSearchMapper searchMapper;

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public Contract create(Contract entity)
    {
        return entityManager.merge(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
    public Contract get(Long id)
    {
        return entityManager.find(Contract.class, id);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public Contract update(Contract entity)
    {
        return entityManager.merge(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public void delete(Contract entity)
    {
        entityManager.remove(entity);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
    public Collection<Contract> search(Map<String, Object> filter, int page, int pageSize)
    {
        return searchMapper.find(filter, page, pageSize);
    }
}
