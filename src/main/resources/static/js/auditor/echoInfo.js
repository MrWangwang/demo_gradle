$(function () {
    downSelect();

    var appStatusVal = $("#status_id").val();
    if (appStatusVal != null && appStatusVal != "" && appStatusVal > 0) {
        $(".disabled_class").attr("disabled", true);
        $(".result_class").attr("disabled", true);
        $("input").attr("disabled", true);
        $("#subDiv").attr("style", "display: none");
        $(".href_class").remove();
        $("#img_table").remove();
    }

    //回显收单经验
    var experience = $("#experience").val();
    $("input[name='acquireExperience']").each(function () {
        if ($(this).val() == experience) {
            $(this).attr("checked", "checked");
        }
    });

    //显示省市地址
    var showCity = function () {
        var c1 = $("#c1").val();
        var c2 = $("#c2").val();

        if ($("#infoId").val() == "") {
            $("#province_r").areacode({province: "province_r",
                city: "city_r",
                areacode: "areacodeReg",
                selectedAraecode: null});
            $("#province_b").areacode({province: "province_b",
                city: "city_b",
                areacode: "areacodeBus",
                selectedAraecode: null});
        } else {
            $("#province_r").areacode({province: "province_r",
                city: "city_r",
                areacode: "areacodeReg",
                selectedAraecode: parseInt(c1)});
            $("#province_b").areacode({province: "province_b",
                city: "city_b",
                areacode: "areacodeBus",
                selectedAraecode: parseInt(c2)});
        }
    }
    showCity();

    //回显审核结果
//    $("input[name='verdict']").each(function() {
//        if ($(this).val() == verdictVal) {
//            $(this).attr("checked","checked");
//        }
//    });

    //回显终端类型
//    var terminal = $("#terminal").val();
//    $("input[name='terminalType']").each(function() {
//        if ($(this).val() == terminal) {
//            $(this).attr("checked","checked");
//        }
//    });

    //显示分店信息
    var hasstor = $("#hasstor").val();
    $("input[name='hasBranch']").each(function () {
        if ($(this).val() == hasstor) {
            $(this).attr("checked", "checked");
        }
    });
    if ($("input[name='hasBranch']:checked").val() == 0) {
        $("#subbranch_table").attr("style", "display:none;");
        $("#addSubbranch").parent().parent().attr("style", "display:none;");
        $("#sub_td").attr("rowspan", 1);
    } else {
        $("#subbranch_table").attr("style", "");
        $("#addSubbranch").parent().parent().attr("style", "");
        $("#sub_td").attr("rowspan", 2);
    }

    //显示按笔收费 收费上限 条件金额
    var chargeWay = $("#chargeWay").val();
    if (chargeWay == null) {
        chargeWay = 1;
    }
    $("input[name='chargeWay']").each(function () {
        if ($(this).val() == chargeWay) {
            $(this).attr("checked", "checked");
        }
    });
    if ($("input[name='chargeWay']:checked").val() == 1) {
        $("#chargeSpan").attr("style", "display:none;");
    } else {
        $("#chargeSpan").attr("style", "");
    }

    $("#specialFile").change(function () {
        if ($(this).val() != "") {
            if (!/.((JPEG)|(JPG)|(BMP)|(GIF)|(PNG))$/.test($(this).val().toUpperCase())) {
                alert("上传图片格式错误,图片限于bmp,png,gif,jpeg,jpg格式！\n");
                $(this).after($(this).clone(true).val(""));
                $(this).remove();
            }
        }
    });

    $("#special_img_href").click(function () {
        if (confirm("确定要删除吗?")) {
            $(this).parent().remove();
            return false;
        }
    });

});

//审核意见的验证
function suggestionValid() {
    var ver = $("input[name='verdict']:checked").val();
    var sug = $("#suggestion").val();
    var wmsg = "";
    if (ver == 0 && sug.trim() == "") {
        wmsg = "请填写审核意见！\n";
    }
    return wmsg;
}

//显示审核意见
function showSuggestion(e) {
    if (e.value == 1) {
        $('#suggestion_div').hide();
    } else {
        $('#suggestion_div').show();
        $('#suggestion').focus();
    }
}

function closeDiv() {
    $("#idContainer").CloseDiv();
}

//给图片赋予属性
function showImage(val) {
    var content = '<a href="' + val + '" rel="' + val + '">'
        + '<img class="artZoom" src="' + val + '" height="100%" width="100%"/>'
        + '</a>'
    $('#dialogImage').html(content);
    $('#dialogImage').dialog('open');
}

