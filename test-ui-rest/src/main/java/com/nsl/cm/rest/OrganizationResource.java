package com.nsl.cm.rest;

import java.io.IOException;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.nsl.cm.rest.model.RestContract;
import com.nsl.cm.rest.model.RestContractFilter;
import com.nsl.cm.rest.model.RestOrganization;
import com.nsl.cm.rest.model.RestOrganizationFilter;
import com.sun.jersey.api.JResponse;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    @GET
    @Transactional
    @ApiOperation(value = "Find organization",
                  responseClass = "com.nsl.cm.rest.model.RestOrganization",
                  multiValueResponse = true)
    public JResponse find(@QueryParam("page") Integer page,
                          @QueryParam("pageSize") Integer pageSize) {
        logger.debug("find ===>");
        // TODO: implement findContracts method
        return JResponse.ok().build();
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
        // TODO: implement finContractById method
        return JResponse.ok(new RestOrganization()).build();
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
        // TODO: implement createContract method
        organization.setId(System.currentTimeMillis());
        return JResponse.ok(organization).build();
    }

    @PUT
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Update organization",
                  responseClass = "com.nsl.cm.rest.model.RestOrganization")
    public JResponse<RestOrganization> update(
            @PathParam("id")
            @ApiParam(value = "Organization identifier", required = true)
            Long id,
            @ApiParam(value = "Organization instance", required = true)
            RestOrganization organization) {
        logger.debug("update, organization=" + organization);
        // TODO: implement updateContract method
        return JResponse.ok(organization).build();
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
        // TODO: implement delete method
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
        // TODO: implement filter method
        return JResponse.ok().build();
    }
}
