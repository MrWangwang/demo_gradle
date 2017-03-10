package com.example.dao;

import com.example.pojo.DictBankType;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by wanghp on 2017/2/22.
 */
@Repository
public interface DictBankTypeRepository extends CrudRepository<DictBankType,Long>,PagingAndSortingRepository<DictBankType, Long>, JpaSpecificationExecutor {

     DictBankType findOne(Long id);

     DictBankType save(DictBankType dictBankType);

    DictBankType findById(Long id);

    @Query("from DictBankType d where d.id=:id")
     List<DictBankType> list(@Param("id") Long id, Pageable pageable);
}
