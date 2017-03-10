package com.example.security;

import com.example.dao.SysUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by zhm on 16-10-18.
 */
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = false)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private SysUserRepository sysUserRepository;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/login","/css/**","/image/*").permitAll()
                .anyRequest().authenticated().and().formLogin()
                .loginPage("/login").defaultSuccessUrl("/").permitAll().and().logout().permitAll().and().csrf().disable();

    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    public MyAuthenticationProvider authenticationProvider() throws Exception {
        MyAuthenticationProvider authenticationProvider = new MyAuthenticationProvider(sysUserRepository);
        return authenticationProvider;
    }
}