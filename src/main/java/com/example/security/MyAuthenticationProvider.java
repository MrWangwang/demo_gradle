package com.example.security;

import com.example.dao.SysUserRepository;
import com.example.pojo.SysUser;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import java.util.HashSet;
import java.util.Set;

public class MyAuthenticationProvider implements AuthenticationProvider {
    private SysUserRepository userInfoRepository;

    public MyAuthenticationProvider(SysUserRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    @Override
    public Authentication authenticate(Authentication authentication) {
        UsernamePasswordAuthenticationToken auth = (UsernamePasswordAuthenticationToken) authentication;
        String username = String.valueOf(auth.getPrincipal());
        String password = String.valueOf(auth.getCredentials());
        SysUser user = userInfoRepository.findByLoginName(username);
        // 2. Check the passwords match.
        String sha1Hex = DigestUtils.sha1Hex(password);
        if (!user.getLoginPwd().equalsIgnoreCase(new String(DigestUtils.sha1Hex(password)))) {
            throw new BadCredentialsException("Bad Credentials");
        }
        // 3. Preferably clear the password in the user object before storing in authentication object
        user.setLoginPwd("");
        // 4. Return an authenticated token, containing user data and authorities
        return new UsernamePasswordAuthenticationToken(user.getLoginName(), null, getAuthorities(user));
    }

    private Set getAuthorities(SysUser user) {
        //可以添加用户权限
        Set authorities = new HashSet();
//        authorities.add()
        return authorities;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }
}