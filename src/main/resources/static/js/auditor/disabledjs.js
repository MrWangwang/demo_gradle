$(function () {
    downSelect();

    var verdictVal = $("#verdict_id").val();
    $(".disabled_class").attr("disabled", true);
    $(".href_class").remove();

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
    $("input[name='verdict']").each(function () {
        if ($(this).val() == verdictVal) {
            $(this).attr("checked", "checked");
        }
    });

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

});
