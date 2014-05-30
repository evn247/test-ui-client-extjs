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
import com.nsl.cm.db.model.Contract;
import com.nsl.cm.rest.model.RestContract;
import com.nsl.cm.rest.model.RestContractFilter;
import com.nsl.cm.rest.translator.CollectionTranslator;
import com.nsl.cm.rest.translator.ContractTranslator;
import com.nsl.cm.rest.translator.RestContractFilterTranslator;
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
 * Rest API provider for contract entities.
 * @author Edouard Napolov
 */
@Path("contract")
@Api("/contract")
@Produces({MediaType.APPLICATION_JSON + ";charset=utf-8"})
public class ContractResource
{
    private final static Logger logger = LoggerFactory.getLogger(ContractResource.class);

    private final static Translator<RestContractFilter, Map<String, Object>> FILTER_TRANSLATOR
            = new RestContractFilterTranslator();

    private final static Translator<RestContract, Contract> CONTRACT_TRANSLATOR = new ContractTranslator();

    private final static CollectionTranslator<RestContract, Contract> COLLECTION_TRANSLATOR
            = new CollectionTranslator<>(CONTRACT_TRANSLATOR);

    @Autowired
    private ContractService contractService;

    @GET
    @Transactional
    @ApiOperation(value = "Find all contracts",
                  responseClass = "com.nsl.cm.rest.model.RestContract",
                  multiValueResponse = true)
    public JResponse<Collection<RestContract>> find(
                          @QueryParam("page") Integer page,
                          @QueryParam("pageSize") Integer pageSize) {
        logger.debug("findContracts ===>");
        return JResponse.ok(COLLECTION_TRANSLATOR.reverse(contractService.search(FILTER_TRANSLATOR.translate(null), page, pageSize))).build();
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
        return JResponse.ok(CONTRACT_TRANSLATOR.reverse(contractService.get(id))).build();
    }

    @POST
    @Transactional
    @ApiOperation(value = "Create new contract",
                  responseClass = "com.nsl.cm.rest.model.RestContract")
    public JResponse<RestContract> create(
            @ApiParam(value = "Contract instance", required = true)
            RestContract contract) throws IOException
    {
        logger.debug("createContract, contract=" + contract);
        return JResponse.ok(CONTRACT_TRANSLATOR.reverse(
                contractService.create(CONTRACT_TRANSLATOR.translate(contract)))).build();
    }

    @PUT
    @Transactional
    @ApiOperation(value = "Update contract",
                  responseClass = "com.nsl.cm.rest.model.RestContract")
    public JResponse<RestContract> update(
            @ApiParam(value = "Contract instance", required = true)
            RestContract contract) {
        logger.debug("updateContract, contract=" + contract);
        return JResponse.ok(CONTRACT_TRANSLATOR.reverse(
                contractService.update(CONTRACT_TRANSLATOR.translate(contract)))).build();
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
        contractService.delete(contractService.get(id));
        return JResponse.ok().build();
    }

    @POST
    @Path("/filter")
    @Transactional
    @ApiOperation(value = "Get contracts by filters",
                  responseClass = "com.nsl.cm.rest.model.RestContract",
                  multiValueResponse = true)
    public JResponse<Collection<RestContract>> filter(
            @ApiParam(value = "Filter data", required = true)
            RestContractFilter filter,
            @QueryParam("page") Integer page, @QueryParam("pageSize") Integer pageSize) {
        logger.debug("filter="+filter);
        return JResponse.ok(COLLECTION_TRANSLATOR.reverse(
                contractService.search(FILTER_TRANSLATOR.translate(filter), page, pageSize))).build();
    }

}
