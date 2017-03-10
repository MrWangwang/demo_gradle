package com.example.pojo;

import javax.persistence.*;

/**
 * Created by wanghp on 2017/2/23.
 */
@Entity
@Table(name = "sys_user")
public class SysUser {
    @Id
    @SequenceGenerator(name="seqSysUser",sequenceName="seq_SysUser")
    private Long id;

    //登录用户名
    @Column(name = "login_name")
    private String loginName;

    //登录密码
    @Column(name = "login_pwd")
    private String loginPwd;

    public SysUser() {
    }

    public SysUser(String loginName, String loginPwd) {
        this.loginName = loginName;
        this.loginPwd = loginPwd;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLoginPwd() {
        return loginPwd;
    }

    public void setLoginPwd(String loginPwd) {
        this.loginPwd = loginPwd;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }
}
