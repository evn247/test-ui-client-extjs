package com.nsl.cm.db;

import java.util.Collection;
import java.util.Map;
import javax.ejb.ApplicationException;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.nsl.cm.db.mapper.OrganizationSearchMapper;
import com.nsl.cm.db.model.Organization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * <code>OrganizationService</code>
 *
 * @author Eduard Napolov <Eduard.Napolov@R-Style.com>
 * @version 1.0
 */
@Component
@Transactional(propagation = Propagation.REQUIRED)
@ApplicationException(rollback = true)
public class OrganizationService extends AbstractService<Organization, Long>
{
    @Autowired
    private OrganizationSearchMapper searchMapper;

    @Override
    @TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
    public Organization get(Long id)
    {
        return entityManager.find(Organization.class, id);
    }

    @Override
    @TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
    public Collection<Organization> search(Map<String, Object> filter, int page, int pageSize)
    {
        return searchMapper.find(filter, page, pageSize);
    }
}
