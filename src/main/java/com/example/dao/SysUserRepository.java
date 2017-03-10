package com.example.dao;

import com.example.pojo.SysUser;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;

/**
 * Created by wanghp on 2017/2/23.
 */
@Repository
@Table(name = "sys_user")
public interface SysUserRepository extends CrudRepository<SysUser,Long>,PagingAndSortingRepository<SysUser,Long>,JpaSpecificationExecutor<SysUser> {
    SysUser findByLoginName(String loginName);
}
