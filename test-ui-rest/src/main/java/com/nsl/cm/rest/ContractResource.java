package com.nsl.cm.rest;

import java.io.IOException;
import java.util.Collection;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.nsl.cm.rest.model.RestContract;
import com.nsl.cm.rest.model.RestContractFilter;
import com.sun.jersey.api.JResponse;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;

/**
 * Rest API provider for contract entities.
 * @author Edouard Napolov
 */
@Path("contract")
@Api("/contract")
@Produces({MediaType.APPLICATION_JSON + ";charset=utf-8"})
public class ContractResource
{
    private final static Logger logger = LoggerFactory.getLogger(ContractResource.class);

    @GET
    @Transactional
    @ApiOperation(value = "Find contract",
                  responseClass = "com.nsl.cm.rest.model.RestContract",
                  multiValueResponse = true)
    public JResponse find(@QueryParam("page") Integer page,
                                                    @QueryParam("pageSize") Integer pageSize) {
        logger.debug("findContracts ===>");
        // TODO: implement findContracts method
        return JResponse.ok().build();
    }

    @GET
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Get contract instance",
                  responseClass = "com.nsl.cm.rest.model.RestContract")
    public JResponse<RestContract> findById(
            @PathParam("id")
            @ApiParam(value = "Contract identifier", required = true)
            Long id) {
        logger.debug("findContractById, id="+id);
        // TODO: implement finContractById method
        return JResponse.ok(new RestContract()).build();
    }

    @POST
    @Transactional
    @ApiOperation(value = "Create new contract",
                  responseClass = "com.nsl.cm.rest.model.RestContract")
    public JResponse<RestContract> create(
            @ApiParam(value = "Contract instance", required = true)
            RestContract contract) throws IOException
    {
        logger.debug("createContract, contract="+contract);
        // TODO: implement createContract method
        contract.setId(System.currentTimeMillis());
        return JResponse.ok(contract).build();
    }

    @PUT
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Update contract",
                  responseClass = "com.nsl.cm.rest.model.RestContract")
    public JResponse<RestContract> update(
            @PathParam("id")
            @ApiParam(value = "Contract identifier", required = true)
            Long id,
            @ApiParam(value = "Contract instance", required = true)
            RestContract contract) {
        logger.debug("updateContract, contract=" + contract);
        // TODO: implement updateContract method
        return JResponse.ok(contract).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Delete contract")
    public JResponse delete(
            @PathParam("id")
            @ApiParam(value = "Contract identifier", required = true)
            Long id) {
        logger.debug("delete, id="+id);
        // TODO: implement delete method
        return JResponse.ok().build();
    }

    @POST
    @Path("/{id}/filter")
    @Transactional
    @ApiOperation(value = "Get contracts by filters",
                  responseClass = "com.nsl.cm.rest.model.RestContract",
                  multiValueResponse = true)
    public JResponse filter(
            @ApiParam(value = "Filter data", required = true)
            RestContractFilter filter,
            @QueryParam("page") Integer page, @QueryParam("pageSize") Integer pageSize) {
        logger.debug("filter="+filter);
        // TODO: implement filter method
        return JResponse.ok().build();
    }
}
