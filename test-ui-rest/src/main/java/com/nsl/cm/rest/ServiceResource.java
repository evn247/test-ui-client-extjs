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

import com.nsl.cm.db.ServiceService;
import com.nsl.cm.db.model.Service;
import com.nsl.cm.rest.model.RestService;
import com.nsl.cm.rest.model.RestServiceFilter;
import com.nsl.cm.rest.translator.CollectionTranslator;
import com.nsl.cm.rest.translator.RestServiceFilterTranslator;
import com.nsl.cm.rest.translator.ServiceTranslator;
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
 * Rest API provider for Service entities.
 * @author Edouard Napolov
 */
@Path("service")
@Api("/service")
@Produces({MediaType.APPLICATION_JSON + ";charset=utf-8"})
public class ServiceResource
{
    private final static Logger logger = LoggerFactory.getLogger(ServiceResource.class);

    private final static Translator<RestServiceFilter, Map<String, Object>> FILTER_TRANSLATOR
            = new RestServiceFilterTranslator();

    private final static Translator<RestService, Service> SERVICE_TRANSLATOR = new ServiceTranslator();

    private final static CollectionTranslator<RestService, Service> COLLECTION_TRANSLATOR
            = new CollectionTranslator<>(SERVICE_TRANSLATOR);

    @Autowired
    private ServiceService serviceService;

    @GET
    @Transactional
    @ApiOperation(value = "Find all Service entities",
                  responseClass = "com.nsl.cm.rest.model.RestService",
                  multiValueResponse = true)
    public JResponse<Collection<RestService>> find(
                          @QueryParam("page") Integer page,
                          @QueryParam("pageSize") Integer pageSize) {
        logger.debug("find ===>");
        return JResponse.ok(COLLECTION_TRANSLATOR.reverse(
                serviceService.search(FILTER_TRANSLATOR.translate(null), page, pageSize))).build();
    }

    @GET
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Get Service instance",
                  responseClass = "com.nsl.cm.rest.model.RestService")
    public JResponse<RestService> findById(
            @PathParam("id")
            @ApiParam(value = "Service identifier", required = true)
            Long id) {
        logger.debug("findById, id="+id);
        return JResponse.ok(SERVICE_TRANSLATOR.reverse(serviceService.get(id))).build();
    }

    @POST
    @Transactional
    @ApiOperation(value = "Create new Service entity",
                  responseClass = "com.nsl.cm.rest.model.RestService")
    public JResponse<RestService> create(
            @ApiParam(value = "Service instance", required = true)
            RestService service) throws IOException
    {
        logger.debug("create, service=" + service);
        return JResponse.ok(SERVICE_TRANSLATOR.reverse(
                serviceService.create(SERVICE_TRANSLATOR.translate(service)))).build();
    }

    @PUT
    @Transactional
    @ApiOperation(value = "Update service",
                  responseClass = "com.nsl.cm.rest.model.RestService")
    public JResponse<RestService> update(
            @ApiParam(value = "Service instance", required = true)
            RestService service) {
        logger.debug("update, service=" + service);
        return JResponse.ok(SERVICE_TRANSLATOR.reverse(
                serviceService.update(SERVICE_TRANSLATOR.translate(service)))).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Delete service")
    public JResponse delete(
            @PathParam("id")
            @ApiParam(value = "Service identifier", required = true)
            Long id) {
        logger.debug("delete, id="+id);
        serviceService.delete(serviceService.get(id));
        return JResponse.ok().build();
    }

    @POST
    @Path("/filter")
    @Transactional
    @ApiOperation(value = "Get Services by filters",
                  responseClass = "com.nsl.cm.rest.model.RestService",
                  multiValueResponse = true)
    public JResponse<Collection<RestService>> filter(
            @ApiParam(value = "Filter data", required = true)
            RestServiceFilter filter,
            @QueryParam("page") Integer page, @QueryParam("pageSize") Integer pageSize) {
        logger.debug("filter="+filter);
        return JResponse.ok(COLLECTION_TRANSLATOR.reverse(
                serviceService.search(FILTER_TRANSLATOR.translate(filter), page, pageSize))).build();
    }

}
