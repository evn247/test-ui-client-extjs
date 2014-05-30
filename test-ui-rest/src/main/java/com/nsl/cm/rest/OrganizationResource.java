package com.nsl.cm.rest;

import java.io.IOException;
import java.util.Collection;
import java.util.Map;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.nsl.cm.db.ContractService;
import com.nsl.cm.db.OrganizationService;
import com.nsl.cm.db.model.Organization;
import com.nsl.cm.rest.model.RestContract;
import com.nsl.cm.rest.model.RestOrganization;
import com.nsl.cm.rest.model.RestOrganizationFilter;
import com.nsl.cm.rest.translator.CollectionTranslator;
import com.nsl.cm.rest.translator.OrganizationTranslator;
import com.nsl.cm.rest.translator.RestOrganizationFilterTranslator;
import com.nsl.cm.rest.translator.Translator;
import com.sun.jersey.api.JResponse;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 * Rest API provider for organization entities.
 * @author Edouard Napolov
 */
@Path("organization")
@Api("/organization")
@Produces({MediaType.APPLICATION_JSON + ";charset=utf-8"})
public class OrganizationResource
{
    private final static Logger logger = LoggerFactory.getLogger(OrganizationResource.class);

    private final static Translator<RestOrganizationFilter, Map<String, Object>> FILTER_TRANSLATOR
            = new RestOrganizationFilterTranslator();

    private final static Translator<RestOrganization, Organization> ORGANIZATION_TRANSLATOR
            = new OrganizationTranslator();

    private final static CollectionTranslator<RestOrganization, Organization> COLLECTION_TRANSLATOR
            = new CollectionTranslator<>(ORGANIZATION_TRANSLATOR);

    @Autowired
    private OrganizationService organizationService;

    @GET
    @Transactional
    @ApiOperation(value = "Find organization",
                  responseClass = "com.nsl.cm.rest.model.RestOrganization",
                  multiValueResponse = true)
    public JResponse<Collection<RestOrganization>> find(@QueryParam("page") Integer page,
                          @QueryParam("pageSize") Integer pageSize) {
        logger.debug("find ===>");
        return JResponse.ok(COLLECTION_TRANSLATOR.reverse(organizationService.search(FILTER_TRANSLATOR.translate(null), page, pageSize))).build();
    }

    @GET
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Get organization instance",
                  responseClass = "com.nsl.cm.rest.model.RestOrganization")
    public JResponse<RestOrganization> findById(
            @PathParam("id")
            @ApiParam(value = "Organization identifier", required = true)
            Long id) {
        logger.debug("findById, id="+id);
        return JResponse.ok(ORGANIZATION_TRANSLATOR.reverse(organizationService.get(id))).build();
    }

    @POST
    @Transactional
    @ApiOperation(value = "Create new organization",
                  responseClass = "com.nsl.cm.rest.model.RestOrganization")
    public JResponse<RestOrganization> create(
            @ApiParam(value = "Organization instance", required = true)
            RestOrganization organization) throws IOException
    {
        logger.debug("create, organization="+organization);
        return JResponse.ok(ORGANIZATION_TRANSLATOR.reverse(
                organizationService.create(ORGANIZATION_TRANSLATOR.translate(organization)))).build();
    }

    @PUT
    @Transactional
    @ApiOperation(value = "Update organization",
                  responseClass = "com.nsl.cm.rest.model.RestOrganization")
    public JResponse<RestOrganization> update(
            @ApiParam(value = "Organization instance", required = true)
            RestOrganization organization) {
        logger.debug("update, organization=" + organization);
        return JResponse.ok(ORGANIZATION_TRANSLATOR.reverse(
                organizationService.update(ORGANIZATION_TRANSLATOR.translate(organization)))).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Delete organization")
    public JResponse delete(
            @PathParam("id")
            @ApiParam(value = "Organization identifier", required = true)
            Long id) {
        logger.debug("delete, id="+id);
        organizationService.delete(organizationService.get(id));
        return JResponse.ok().build();
    }

    @POST
    @Path("/filter")
    @Transactional
    @ApiOperation(value = "Get organizations by filters",
                  responseClass = "com.nsl.cm.rest.model.RestOrganization",
                  multiValueResponse = true)
    public JResponse filter(
            @ApiParam(value = "Filter data", required = true)
            RestOrganizationFilter filter,
            @QueryParam("page") Integer page, @QueryParam("pageSize") Integer pageSize) {
        logger.debug("filter="+filter);
        return JResponse.ok(COLLECTION_TRANSLATOR.reverse(
                organizationService.search(FILTER_TRANSLATOR.translate(filter), page, pageSize))).build();
    }
}
