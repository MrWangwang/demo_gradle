package com.example.controller;

import com.example.dao.SysUserRepository;
import com.example.pojo.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.ui.Model;

/**
 * Created by wanghp on 2017/2/16.
 */
@Controller
public class LoginController {

    @Autowired
    private SysUserRepository sysUserRepository;

    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public String login(String name, Model model){
        model.addAttribute("name", "whp");
        return "index";
    }

    @RequestMapping(value = "/authentication",method = RequestMethod.POST)
    public String authentication(String username, String password){
        SysUser u = sysUserRepository.findByLoginName(username);
        return "hello";
    }

    @RequestMapping("/hello/{name}")
    public String hello(@PathVariable("name") String name, Model model) {
        model.addAttribute("name", name);
        return "hello";
    }

}
