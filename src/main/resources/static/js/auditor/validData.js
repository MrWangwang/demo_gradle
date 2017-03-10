/**
 *  非空验证
 */
function blankValid() {
    var result = "";

    if ($("#areaMerch").val() == "") {
        result = result + "区域不能为空！\n";
    }

    if ($("#registeredName").val() == "") {
        result = result + "注册名称不能为空！\n";
    }

    if ($("#businessMerchantName").val() == "") {
        result = result + "经营商户名称不能为空！\n";
    }

    //行业类型
    result = result + indusFunction();

    if ($("#telePhone").val() == "") {
        result = result + "商户固定电话不能为空！\n";
    }

    if ($("#province_r").val() == "" || $("#province_r").val() == "0" || $("#city_r").val() == "" || $("#city_r").val() == "0") {
        result = result + "注册地址省市不能为空！\n";
    }
    if ($("#areacodeReg").val() == "" || $("#areacodeReg").val() == "0" || $("#registeredAddress").val() == "") {
        result = result + "注册地址不能为空！\n";
    }

    if ($("#applyStoreTotal").val() == "") {
        result = result + "申请店面总量不能为空！\n";
    }

    if ($("#province_b").val() == "" || $("#province_b").val() == "0" || $("#city_b").val() == "" || $("#city_b").val() == "0") {
        result = result + "经营地址省市不能为空！\n";
    }
    if ($("#areacodeBus").val() == "" || $("#areacodeBus").val() == "0" || $("#businessAddress").val() == "") {
        result = result + "经营地址不能为空！\n";
    }

    if ($("#businesserName").val() == "") {
        result = result + "业务联系人不能为空！\n";
    }

    if ($("#businesserPhone").val() == "") {
        result = result + "业务联系人电话不能为空！\n";
    }

    if ($("#businesserEmail").val() == "") {
        result = result + "业务联系人邮箱不能为空！\n";
    }

    if ($("#accounterName").val() == "") {
        result = result + "财务联系人不能为空！\n";
    }

    if ($("#accounterPhone").val() == "") {
        result = result + "财务联系人电话不能为空！\n";
    }

    if ($("#accounterEmail").val() == "") {
        result = result + "财务联系人邮箱不能为空！\n";
    }

    if ($("#reconciliationName").val() == "") {
        result = result + "对账联系人不能为空！\n";
    }

    if ($("#reconciliationPhone").val() == "") {
        result = result + "对账联系人电话不能为空！\n";
    }

    if ($("#reconciliationEmail").val() == "") {
        result = result + "对账联系人邮箱不能为空！\n";
    }

    //财务信息
    result = result + accInfoValid();

    //商户资料
//    if($("#infoId").val() != ""){
//        result = result + initImgFile();
//    }else{
//        //result = result + merchantDataValid();
//    }

    //收单经验
    var experience = "";
    /*$("input[name='acquireExperience']").each(function() {
     if ($(this).attr("checked")) {
     experience = $(this).val();
     }
     });*/
    experience = $("input[name='acquireExperience']:checked").val();
    if (experience == "" || experience == undefined) {
        result = result + "请选择收单经验！\n";
    }

    if ($("#acquireBank").val() == "") {
        result = result + "收单银行不能为空！\n";
    }

    if ($("#dealRate").val() == "") {
        result = result + "收单业务交易手续费扣率不能为空！\n";
    }

    if ($("#accountCycle").val() == "") {
        result = result + "资金结算周期不能为空！\n";
    }

    if ($("#mainBbusiness").val() == "") {
        result = result + "主营业务不能为空！\n";
    }

    if ($("#businessType").val() == "") {
        result = result + "经营性质不能为空！\n";
    }

    if ($("#openTime").val() == "") {
        result = result + "开业时间不能为空！\n";
    }

    if ($("#businessArea").val() == "") {
        result = result + "经营面积不能为空！\n";
    }

    if ($("#averagePrice").val() == "") {
        result = result + "平均客单价不能为空！\n";
    }

    if ($("#businessCapacity").val() == "") {
        result = result + "经营饱和量不能为空！\n";
    }

    if ($("#turnedCount").val() == "") {
        result = result + "日翻台率不能为空！\n";
    }

    if ($("#merchantRoom").val() == "") {
        result = result + "商户包间不能为空！\n";
    }

    if ($("#sanSeat").val() == "") {
        result = result + "散座/散台不能为空！\n";
    }

    if ($("#businessCycle").val() == "") {
        result = result + "日营业周期不能为空！\n";
    }

    if ($("#heightTime").val() == "") {
        result = result + "日高峰时间不能为空！\n";
    }

    if ($("#accountTime").val() == "") {
        result = result + "日结算时点不能为空！\n";
    }

    if ($("#antipatdayDealMoney").val() == "") {
        result = result + "预计日交易金额不能为空！\n";
    }

    if ($("#antipatmonthDealMoney").val() == "") {
        result = result + "预计月交易金额不能为空！\n";
    }

    if ($("#antipatdayCardMoney").val() == "") {
        result = result + "预计日刷卡交易金额不能为空！\n";
    }

    if ($("#antipatmonthCardMoney").val() == "") {
        result = result + "预计月刷卡交易金额不能为空！\n";
    }

    if ($("#antipatdayCardCount").val() == "") {
        result = result + "预计日刷卡交易笔数不能为空！\n";
    }

    if ($("#averageDealMoney").val() == "") {
        result = result + "平均单笔交易金额不能为空！\n";
    }

    if ($("#monthHeightTime").val() == "") {
        result = result + "预计月交易高峰不能为空！\n";
    }
    if ($("#yearHeighttime").val() == "") {
        result = result + "预计年交易高峰不能为空！\n";
    }
    if ($("#businessLicense").val() == "") {
        result = result + "营业执照号不能为空！\n";
    }
    if ($("#validityDate").val() == "") {
        result = result + "营业执照有效期不能为空！\n";
    }
    if ($("#legalPerson").val() == "") {
        result = result + "法人姓名不能为空！\n";
    }
    if ($("#dutyNo").val() == "") {
        result = result + "税号不能为空！\n";
    }
    if ($("#credentialNo").val() == "") {
        result = result + "身份证号不能为空！\n";
    }
    if ($("#registDate").val() == "") {
        result = result + "注册日期不能为空！\n";
    }
    if ($("#registMoney").val() == "") {
        result = result + "注册资金不能为空！\n";
    }

    if ($("#salesmanId").val() == "" || $("#salesmanId_flexselect").val() == "") {
        result = result + "业务拓展人员不能为空！\n";
    }

    return result;
}


/**
 * 行业类型
 */
function indusFunction() {
    var wmsg = "";
    if ($("#industryTypes").val() == "") {
        wmsg = "请选择行业类型！\n";
    }
    return wmsg;
};

/**
 * 财务信息
 */
function accInfoValid() {
    var wmsg = "";

    if ($("input[name='accountName']").val() == undefined) {
        wmsg = wmsg + "财务信息不能为空！\n";
    }

    $("input[name='accountName']").each(function () {
        if ($(this).val() == "") {
            wmsg = wmsg + "账户名称不能为空！\n";
        }
    });

    $("input[name='openingBank']").each(function () {
        if ($(this).val() == "") {
            wmsg = wmsg + "开户行不能为空！\n";
        }
    });

    $("input[name='accountNo']").each(function () {
        if ($(this).val() == "") {
            wmsg = wmsg + "账号不能为空！\n";
        }
    });

    $("input[name='firmNo']").each(function () {
        if ($(this).val() == "") {
            wmsg = wmsg + "联行号不能为空！\n";
        }
    });

    return wmsg;
};

/**
 * 商户资料
 */
function merchantDataValid() {
    var wmsg = "";
    if ($("#file1").val() == "") {
        wmsg = wmsg + "营业执照（副本）复印件不能为空！\n";
    }

    if ($("#file2").val() == "") {
        wmsg = wmsg + "法人身份证复印件不能为空！\n";
    }

    if ($("#file5").val() == "") {
        wmsg = wmsg + "税务登记证（副本）复印件或者完税证明（个体执照）不能为空！\n";
    }

    //商户照片 数量必须大于2张
    var count = 0;
    $("input[name='fileType9']").each(function () {
        if ($(this).val() != "") {
            count++;
        }
    });
    if (count < 2) {
        wmsg = wmsg + "商户照片数量必须大于等于2张！\n";
    }

    return wmsg;
}

function imgTypeValid() {
    var wmsg = "";
    $("input[type='file']").each(function () {
        if ($(this).val() != "") {
            if (!/.((JPEG)|(JPG)|(BMP)|(GIF)|(PNG))$/.test($(this).val().toUpperCase())) {
                wmsg = wmsg + "上传图片格式错误,图片限于bmp,png,gif,jpeg,jpg格式！\n";
            }
        }
    });
    return wmsg;
}

function validData() {
    var blankInfo = blankValid();//非空验证
    var validResult = validSaveData();
    return blankInfo + validResult;
}
function validEMail() {
    // 业务， 财务， 对账 联系人邮箱
    var returnStr = "";
    var businessserEmail = $("#businesserEmail").val();
    var accounterEmail = $("#accounterEmail").val();
    var reconciliationEmail = $("#reconciliationEmail").val();
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (businessserEmail != "" && !myreg.test(businessserEmail)) {
        returnStr += "业务联系人邮箱输入错误！\n";
    }
    if (accounterEmail != "" && !myreg.test(accounterEmail)) {
        returnStr += "财物联系人邮箱输入错误！\n";
    }
    if (reconciliationEmail != "" && !myreg.test(reconciliationEmail)) {
        returnStr += "对账联系人邮箱输入错误！\n";
    }
    return returnStr;
}
function validPhone() {
    //业务， 财务， 对账 联系人电话
    var returnStr = "";
    var businesserPhone = $("#businesserPhone").val();
    var accounterPhone = $("#accounterPhone").val();
    var reconciliationPhone = $("#reconciliationPhone").val();
    var telePhone = $("#telePhone").val();
    //var mobile = /^(13+\d{9})|(159+\d{8})|(158+\d{8})|(153+\d{8})$/; //手机号码
    var mobile = /^(\d{11})$/;
    //var phone = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;//固话
    var phone = /^(\d{3,11})$/;
    if (telePhone != "" && (mobile.test(telePhone) || phone.test(telePhone)) == false) {
        returnStr += "固定电话输入错误！\n";
    }
    if (businesserPhone != "" && (mobile.test(businesserPhone) || phone.test(businesserPhone)) == false) {
        returnStr += "业务联系人电话输入错误！\n";
    }
    if (accounterPhone != "" && (mobile.test(accounterPhone) || phone.test(accounterPhone)) == false) {
        returnStr += "财物联系人电话输入错误！\n";
    }
    if (reconciliationPhone != "" && (mobile.test(reconciliationPhone) || phone.test(reconciliationPhone)) == false) {
        returnStr += "对账联系人电话输入错误！\n";
    }
    //验证分店联系人电话时,是在选择有分店的情况下完成的
    if ($("#hasBranch").attr("checked") == true) {
        $("input[name='subPhone']").each(function () {
            if ($(this).val() != "" && (mobile.test($(this).val()) || phone.test($(this).val())) == false) {
                returnStr = returnStr + "分店联系电话入错误！\n";
            }
        });
    }
    return returnStr;
}
function validCardNum() {
    //财务信息 财号 联行号
    return "";
}
function validDouble() {
    // 收单业务交易手续费扣率 ,平均客单价 ,预计日交易金额  预计月交易金额,预计日刷卡交易金额 ,预计月刷卡交易金额
    //预计日刷卡交易笔数 ,平均单笔交易金额
    var returnStr = "";
    var dealRate = $("#dealRate").val();                                //  收单业务交易手续费扣率
    var businessCapacity = $("#businessCapacity").val();                  //经营饱和量
    var turnedCount = $("#turnedCount").val();                             //日翻台率
    var sanSeat = $("#sanSeat").val();                                    //散座/散台
    var antipatdayCardCount = $("#antipatdayCardCount").val();                    //预计日刷卡交易笔数
    var averagePrice = $("#averagePrice").val();                       //  平均客单价
    var antipatdayDealMoney = $("#antipatdayDealMoney").val();        //  预计日交易金额
    var antipatdayDealMoney2 = $("#antipatdayDealMoney2").val();        //  预计日交易金额
    var antipatmonthDealMoney = $("#antipatmonthDealMoney").val();    //  预计月交易金额
    var antipatmonthDealMoney2 = $("#antipatmonthDealMoney2").val();    //  预计月交易金额
    var antipatdayCardMoney = $("#antipatdayCardMoney").val();        // 预计日刷卡交易金额
    var antipatdayCardMoney2 = $("#antipatdayCardMoney2").val();        // 预计日刷卡交易金额
    var antipatmonthCardMoney = $("#antipatmonthCardMoney").val();    // 预计月刷卡交易金额
    var antipatmonthCardMoney2 = $("#antipatmonthCardMoney2").val();    // 预计月刷卡交易金额
    //  var dealRate=$("#dealRate").val();                                  //预计日刷卡交易笔数
    var averageDealMoney = $("#averageDealMoney").val();               //平均单笔交易金额
    var averageDealMoney2 = $("#averageDealMoney2").val();               //平均单笔交易金额
    var antipatdayCardCount2 = $("#antipatdayCardCount2").val();               //平均单笔交易金额
    var doubleData = /^[-\+]?\d+(\.\d+)?$/;
    if (dealRate != "" && !doubleData.test(dealRate)) {
        returnStr += "收单业务交易手续费扣率输入错误！\n";
    }
    if (businessCapacity != "" && !doubleData.test(businessCapacity)) {
        returnStr += "经营饱和量输入错误！\n";
    }
    if (turnedCount != "" && !doubleData.test(turnedCount)) {
        returnStr += "日翻台率输入错误！\n";
    }
    if (sanSeat != "" && !doubleData.test(sanSeat)) {
        returnStr += "散座/散台输入错误！\n";
    }
    if (antipatdayCardCount != "" && !doubleData.test(antipatdayCardCount)) {
        returnStr += "预计日刷卡交易笔数输入错误！\n";
    }
    if (averagePrice != "" && !doubleData.test(averagePrice)) {
        returnStr += "平均客单价输入错误！\n";
    }
    if (antipatdayDealMoney != "" && !doubleData.test(antipatdayDealMoney)) {
        returnStr += "预计日交易金额输入错误！\n";
    }

    if (antipatdayDealMoney2 != "" && !doubleData.test(antipatdayDealMoney2)) {
        returnStr += "预计日交易金额输入错误！\n";
    }
    if (antipatmonthDealMoney != "" && !doubleData.test(antipatmonthDealMoney)) {
        returnStr += "预计月交易金额输入错误！\n";
    }
    if (antipatmonthDealMoney2 != "" && !doubleData.test(antipatmonthDealMoney2)) {
        returnStr += "预计月交易金额输入错误！\n";
    }
    if (antipatdayCardMoney != "" && !doubleData.test(antipatdayCardMoney)) {
        returnStr += "预计日刷卡交易金额输入错误！\n";
    }
    if (antipatdayCardMoney2 != "" && !doubleData.test(antipatdayCardMoney2)) {
        returnStr += "预计日刷卡交易金额输入错误！\n";
    }
    if (antipatmonthCardMoney != "" && !doubleData.test(antipatmonthCardMoney)) {
        returnStr += "预计月刷卡交易金额输入错误！\n";
    }
    if (antipatmonthCardMoney2 != "" && !doubleData.test(antipatmonthCardMoney2)) {
        returnStr += "预计月刷卡交易金额输入错误！\n";
    }
    if (averageDealMoney != "" && !doubleData.test(averageDealMoney)) {
        returnStr += "平均单笔交易输入错误！\n";
    }
    if (averageDealMoney2 != "" && !doubleData.test(averageDealMoney2)) {
        returnStr += "平均单笔交易输入错误！\n";
    }
    if (antipatdayCardCount2 != "" && !doubleData.test(antipatdayCardCount2)) {
        returnStr += "预计日刷卡交易笔数输入错误！\n";
    }
    return returnStr;

}
function validInteger() {
    //资金结算周期 ,经营饱和量,日翻台率,散座/散台
    var returnStr = "";
    var accountCycle = $("#accountCycle").val();                           //资金结算周期
    var terminalNum = $("#terminalNum").val();
    var posNum = $("#posNum").val();
    var integerData = /^[-\+]?\d+$/;
    if (accountCycle != "" && !integerData.test(accountCycle)) {
        returnStr += "资金结算周期输入错误！\n";
    }
    if (terminalNum != "" && !integerData.test(terminalNum)) {
        returnStr += "终端数量输入错误！\n";
    }
    if (posNum != "" && !integerData.test(posNum)) {
        returnStr += "POS设备数量输入错误！\n";
    }
    return returnStr;

}

/**
 * 增加商户照片上传
 */
function addFileUpload(element) {
    var content = "<p><input type='file' name='fileType9' onblur='addFileUpload(this);' class='disabled_class'/></p>";
    if (element.value != "") {
        $("#fileUp9").append(content);
    }
}
function addFileUpload7(element) {
    var content = "<p><input type='file' name='fileType7' onblur='addFileUpload7(this);' class='disabled_class'/></p>";
    if (element.value != "") {
        $("#fileUp7").append(content);
    }
}

//显示行业类型为其他的
function showMe(e) {
    if (e.value == 6) {
        $("#type6").attr("style", "display: hidden");
    } else {
        $("#type6").attr("style", "display: none");
    }
}

var delImgId = "";
//删除图片
function delete_img(param_id, param_type) {
    if (confirm("确定要删除吗?")) {
        delImgId = delImgId + "|" + param_id + "_" + param_type + "|" + ",";

        if (delImgId != "") {
            $("#img_data").val(delImgId);
        }

        $("#del_img_" + param_id).remove();
    }
}

//删除财务信息
function delete_accInfo(param) {
    $("#del_accna_" + param).remove();
    $("#del_accno_" + param).remove();
}

//图片验证
function initImgFile() {
    var temp = "";
    var wmsg = "";
    var loadType1 = 0;
    var loadType2 = 0;
    var loadType5 = 0;
    var loadType9 = 0;
    var returnStr = $("#fileListString").val();
    if (returnStr != "") {
        var returnArray = returnStr.split(":");
        for (var i = 0; i < returnArray.length; i++) {
            var loadType = returnArray[i].split(",")[0];
            if (loadType == "1") {
                loadType1++;
            }
            if (loadType == "2") {
                loadType2++;
            }
            if (loadType == "5") {
                loadType5++;
            }
            if (loadType == "9") {
                loadType9++;
            }
        }
    }
    $(".show_class").each(function () {
        temp = temp + "|" + $(this).val() + "|" + ",";
    });

    if (temp.indexOf("_1|") == -1 && loadType1 == 0) {
        wmsg = wmsg + "请上传-营业执照（副本）复印件！\n";
    }

    if (temp.indexOf("_2|") == -1 && loadType2 == 0) {
        wmsg = wmsg + "请上传-法人身份证复印件 \n";
    }

    if (temp.indexOf("_5|") == -1 && loadType5 == 0) {
        wmsg = wmsg + "请上传-税务登记证（副本）复印件或者完税证明（个体执照） \n";
    }
    var index = temp.indexOf("_9|");
    var lastIndex = temp.lastIndexOf("_9|");
    if (index == -1 && loadType9 == 0) {
        wmsg = wmsg + "没有商户照片，至少需要两张商户照片 \n";     //没有商户照片的情况
    }
    if (index == -1 && loadType9 == 1) {
        wmsg = wmsg + "只上传了一张商户照片，至少需要两张商户照片 \n";
    }
    if (index != -1 && index == lastIndex && loadType9 == 0) {
        wmsg = wmsg + "只保留了一张商户照片，至少需要两张商户照片 \n";
    }
    if (wmsg != "") {
        clearFileType();
        wmsg += " \n " + "※已上传的必要照片信息※ \n" + "营业执照（副本）复印件-" + loadType1 + "张 \n" + "法人身份证复印件-" + loadType2 + "张 \n"
            + "税务登记证（副本）复印件或者完税证明（个体执照）-" + loadType5 + "张 \n" + "商户照片（含门面、门牌、店内、银台、包间、开放式经营场所内容-" + loadType9 + "张 \n";
        document.getElementById("imageButton").disabled = "";
        document.getElementById("imageButton").value = "批量上传选择的图片";

    }
    return wmsg;
}

//显示分店信息
function showSubbranch(e) {
    if (e.value == 1) {
        $("#subbranch_table").attr("style", "");
        $("#addSubbranch").parent().parent().attr("style", "");
        if ($("input[name='subName']").val() == undefined) {
            $("#addSubbranch").click();
        }
        $("#sub_td").attr("rowspan", 2);
    } else {
        $("#subbranch_table").attr("style", "display:none;");
        $("#addSubbranch").parent().parent().attr("style", "display:none;");
        $("#sub_td").attr("rowspan", 1);
    }
}

//删除特殊经营信息图片
function delete_special(param) {
    $("#span_" + param).remove();
    return false;
}

//验证存在分店时的必输项
function branchValid() {
    var wmsg = "";
    var ver = $("input[name='hasBranch']:checked").val();
    if (ver == 1) {
        if ($("input[name='subName']").val() == undefined) {
            wmsg = wmsg + "分店信息不能为空！\n";
        }

        $("input[name='subName']").each(function () {
            if ($(this).val() == "") {
                wmsg = wmsg + "分店名称不能为空！\n";
            }
        });

        $("input[name='subAddress']").each(function () {
            if ($(this).val() == "") {
                wmsg = wmsg + "分店地址不能为空！\n";
            }
        });

        $("input[name='subAssociater']").each(function () {
            if ($(this).val() == "") {
                wmsg = wmsg + "分店联系人不能为空！\n";
            }
        });

        $("input[name='subPhone']").each(function () {
            if ($(this).val() == "") {
                wmsg = wmsg + "分店联系电话不能为空！\n";
            }
        });

        $("input[name='branchAccname']").each(function () {
            if ($(this).val() == "") {
                wmsg = wmsg + "分店开户名称不能为空！\n";
            }
        });
        $("input[name='branchBank']").each(function () {
            if ($(this).val() == "") {
                wmsg = wmsg + "分店开户行不能为空！\n";
            }
        });
        $("input[name='branchAcc']").each(function () {
            if ($(this).val() == "") {
                wmsg = wmsg + "分店账号不能为空！\n";
            }
        });
        $("input[name='branchFirmno']").each(function () {
            if ($(this).val() == "") {
                wmsg = wmsg + "分店联行号不能为空！\n";
            }
        });
    }
    return wmsg;
}

//删除分店信息
function delete_subbranc(param) {
    $("#del_subn_" + param).remove();
    $("#del_subo_" + param).remove();
    $("#del_accName_" + param).remove();
    $("#del_firmno_" + param).remove();
}
function whetherImagesUploaded() {
    var msg = $("#fileListString").val();
    return msg;
}
function checkFileType() {
    var flag = true;
    if ($("#file1").val() == "" && $("#file2").val() == "" && $("#file3").val() == "" && $("#file4").val() == "" && $("#file5").val() == ""
        && $("#file6").val() == "" && $("#file8").val() == "") {
        var message = "";

        $("input[name='fileType7']").each(function () {
            if ($(this).val() != "") {
                message = "noBlank";
            }
        });
        $("input[name='fileType9']").each(function () {
            if ($(this).val() != "") {
                message = "noBlank";
            }
        });
        if (message == "") {
            flag = false;
        }
    }
    return flag;
}
//清空图片选择
function clearFileType() {
    var temp;
    temp = document.getElementById("file1");
    temp.outerHTML = temp.outerHTML;
    temp.value = "";
    temp = document.getElementById("file2");
    temp.outerHTML = temp.outerHTML;
    temp.value = "";
    temp = document.getElementById("file3");
    temp.outerHTML = temp.outerHTML;
    temp.value = "";
    temp = document.getElementById("file4");
    temp.outerHTML = temp.outerHTML;
    temp.value = "";
    temp = document.getElementById("file5");
    temp.outerHTML = temp.outerHTML;
    temp.value = "";
    temp = document.getElementById("file6");
    temp.outerHTML = temp.outerHTML;
//    temp.value="";
//     temp=  document.getElementById("file7");
//    temp.outerHTML=temp.outerHTML;
    temp.value = "";
    temp = document.getElementById("file8");
    temp.outerHTML = temp.outerHTML;
    temp.value = "";
    $("input[name='fileType7']").each(function () {
        temp = $(this);
        temp.after(temp.clone().val(''));
        temp.remove();
    });
    $("input[name='fileType9']").each(function () {
        temp = $(this);
        temp.after(temp.clone().val(''));
        temp.remove();
    });
}

function validSaveData() {
    var blankInfo = "";
    var mainInfo = validEMail();          //验证邮箱
    var phoneInfo = validPhone();          //验证电话
    var cardNumInfo = validCardNum();        //验证卡号
    var doubleInfo = validDouble();         //验证double
    var integerInfo = validInteger();     //验证整数
    var credNo = $("#credentialNo").val();
    if (credNo != "" && (credNo.length != 15 && credNo.length != 18)) {
        blankInfo = blankInfo + "身份证号码输入错误!\n";
    }
    if ($("#backup").val().length > 100) {
        blankInfo = blankInfo + "备注字数不能大于一百字!\n";
    }
    return blankInfo + mainInfo + phoneInfo + cardNumInfo + doubleInfo + integerInfo;
}


//显示 按笔收费 收费上限 条件金额
function showCharge(e) {
    if (e.value == 0) {
        $("#chargeSpan").attr("style", "");
    } else {
        $("#chargeSpan").attr("style", "display:none;");
    }
}
