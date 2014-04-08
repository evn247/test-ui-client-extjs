package com.nsl.ui;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PageController {
    @RequestMapping(value = "/authorization", method = RequestMethod.GET)
    public String authorization(ModelMap model) {
        return "authorization";
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String cm(ModelMap model) {
        System.out.println("PageController.cm");
        return "CmApp";
    }
}
