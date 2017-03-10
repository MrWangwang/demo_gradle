package com.example.service;


import com.example.dao.DictBankTypeRepository;
import com.example.pojo.DictBankType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by wanghp on 2017/2/17.
 */
@Service
public class DictBankTypeService {
    @Autowired
    DictBankTypeRepository dictBankTypeRepository;

    public  List<DictBankType> list(long id, int pageNumber, int pageSize){
        PageRequest pr =this.buildPageRequest(pageNumber,pageSize);
        return dictBankTypeRepository.list(id,pr);
//        return null;
    }

    public DictBankType save(DictBankType o){
        return dictBankTypeRepository.save(o);
    }

    public DictBankType findById(Long id){
        return dictBankTypeRepository.findById(id);
    }

    //构建PageRequest
    private PageRequest buildPageRequest(int pageNumber, int pagzSize) {
        return new PageRequest(pageNumber - 1, pagzSize, null);
    }
}
