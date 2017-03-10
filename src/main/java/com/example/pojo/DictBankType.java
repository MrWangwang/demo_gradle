package com.example.pojo;


import javax.persistence.*;

/**
 * Created by wanghp on 2017/2/16.
 */
@Entity
@Table(name="dict_bank_type")
public class DictBankType {
    @Id
    @SequenceGenerator(name="seqDictBankType",sequenceName="seq_dictbankType")
    private long id;
    @Column(name="bank_type_code")
    private String  bankTypeCode;
    @Column(name="bank_type_name")
    private String bankTypeName;

    public DictBankType(String bankTypeName, String bankTypeCode) {
        this.bankTypeName = bankTypeName;
        this.bankTypeCode = bankTypeCode;
    }

    public DictBankType() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBankTypeName() {
        return bankTypeName;
    }

    public void setBankTypeName(String bankTypeName) {
        this.bankTypeName = bankTypeName;
    }

    public String getBankTypeCode() {
        return bankTypeCode;
    }

    public void setBankTypeCode(String bankTypeCode) {
        this.bankTypeCode = bankTypeCode;
    }
}
