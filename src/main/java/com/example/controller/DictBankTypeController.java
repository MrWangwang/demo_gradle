package com.example.controller;

import com.example.service.DictBankTypeService;
import com.example.pojo.DictBankType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by wanghp on 2017/2/16.
 */
@RestController
@RequestMapping(value = "/bankType")
public class DictBankTypeController {
    @Autowired
    DictBankTypeService dictBankTypeService;

    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public List<DictBankType> list(HttpServletRequest request, HttpServletResponse response){
//        int page = Integer.parseInt(request.getParameter("page"));
//        int pageSize = Integer.parseInt(request.getParameter("pageSize"));
        System.out.printf("111");
        List<DictBankType> list = dictBankTypeService.list(141,1,5);
        return list;
    }

    @RequestMapping(value = "/save",method = RequestMethod.GET)
    public void save(){
        DictBankType o = new DictBankType();
        o.setBankTypeCode("01");
        o.setBankTypeName("测试");
        dictBankTypeService.save(o);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    public DictBankType find(@PathVariable("id") Long id){
        DictBankType o = dictBankTypeService.findById(id);
        return o;
    }

}
