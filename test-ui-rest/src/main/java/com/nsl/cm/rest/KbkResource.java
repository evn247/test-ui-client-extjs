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

import com.nsl.cm.db.KbkService;
import com.nsl.cm.db.model.Kbk;
import com.nsl.cm.rest.model.RestContract;
import com.nsl.cm.rest.model.RestContractFilter;
import com.nsl.cm.rest.model.RestKbk;
import com.nsl.cm.rest.model.RestKbkFilter;
import com.nsl.cm.rest.translator.CollectionTranslator;
import com.nsl.cm.rest.translator.KbkTranslator;
import com.nsl.cm.rest.translator.RestKbkFilterTranslator;
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
 * Rest API provider for KBK entities.
 * @author Edouard Napolov
 */
@Path("kbk")
@Api("/kbk")
@Produces({MediaType.APPLICATION_JSON + ";charset=utf-8"})
public class KbkResource
{
    private final static Logger logger = LoggerFactory.getLogger(KbkResource.class);

    private final static Translator<RestKbkFilter, Map<String, Object>> FILTER_TRANSLATOR
            = new RestKbkFilterTranslator();

    private final static Translator<RestKbk, Kbk> KBK_TRANSLATOR = new KbkTranslator();

    private final static CollectionTranslator<RestKbk, Kbk> COLLECTION_TRANSLATOR
            = new CollectionTranslator<>(KBK_TRANSLATOR);

    @Autowired
    private KbkService kbkService;

    @GET
    @Transactional
    @ApiOperation(value = "Find all KBK entities",
                  responseClass = "com.nsl.cm.rest.model.RestKbk",
                  multiValueResponse = true)
    public JResponse<Collection<RestKbk>> find(
                          @QueryParam("page") Integer page,
                          @QueryParam("pageSize") Integer pageSize) {
        logger.debug("find ===>");
        return JResponse.ok(COLLECTION_TRANSLATOR.reverse(kbkService.search(FILTER_TRANSLATOR.translate(null), page, pageSize))).build();
    }

    @GET
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Get KBK instance",
                  responseClass = "com.nsl.cm.rest.model.RestKBK")
    public JResponse<RestKbk> findById(
            @PathParam("id")
            @ApiParam(value = "KBK identifier", required = true)
            Long id) {
        logger.debug("findById, id="+id);
        return JResponse.ok(KBK_TRANSLATOR.reverse(kbkService.get(id))).build();
    }

    @POST
    @Transactional
    @ApiOperation(value = "Create new KBK entity",
                  responseClass = "com.nsl.cm.rest.model.RestKbk")
    public JResponse<RestKbk> create(
            @ApiParam(value = "Kbk instance", required = true)
            RestKbk kbk) throws IOException
    {
        logger.debug("create, kbk=" + kbk);
        return JResponse.ok(KBK_TRANSLATOR.reverse(
                kbkService.create(KBK_TRANSLATOR.translate(kbk)))).build();
    }

    @PUT
    @Transactional
    @ApiOperation(value = "Update kbk",
                  responseClass = "com.nsl.cm.rest.model.RestKbk")
    public JResponse<RestKbk> update(
            @ApiParam(value = "Kbk instance", required = true)
            RestKbk kbk) {
        logger.debug("update, kbk=" + kbk);
        return JResponse.ok(KBK_TRANSLATOR.reverse(
                kbkService.update(KBK_TRANSLATOR.translate(kbk)))).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    @ApiOperation(value = "Delete kbk")
    public JResponse delete(
            @PathParam("id")
            @ApiParam(value = "Kbk identifier", required = true)
            Long id) {
        logger.debug("delete, id="+id);
        kbkService.delete(kbkService.get(id));
        return JResponse.ok().build();
    }

    @POST
    @Path("/filter")
    @Transactional
    @ApiOperation(value = "Get KBKs by filters",
                  responseClass = "com.nsl.cm.rest.model.RestKbk",
                  multiValueResponse = true)
    public JResponse<Collection<RestKbk>> filter(
            @ApiParam(value = "Filter data", required = true)
            RestKbkFilter filter,
            @QueryParam("page") Integer page, @QueryParam("pageSize") Integer pageSize) {
        logger.debug("filter="+filter);
        return JResponse.ok(COLLECTION_TRANSLATOR.reverse(
                kbkService.search(FILTER_TRANSLATOR.translate(filter), page, pageSize))).build();
    }

}
