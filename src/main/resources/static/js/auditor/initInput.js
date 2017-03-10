$(function () {
    chooseDates();

    var addAccountInput = function () {
        $("#addAccount").click(
            function () {

                var addcontent = $("<tbody>"
                    + "<tr class='dataTr'>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      账户名称<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='4' class='blockTd'>"
                    + "      <input type='text' name='accountName' size='35' class='disabled_class'/>"
                    + "  </td>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      开户行<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='4' class='blockTd'>"
                    + "      <input type='text' name='openingBank' size='35' class='disabled_class'/>"
                    + "      <input type='button' value='查询联行号' onclick='firmNoDialog(this,1)' class='disabled_class'>"
                    + "  </td>"
                    + "<td colspan='2' class='blockTd' align='right'>"
                    + "    账户类别<font color='#FF0000'>*</font>"
                    + "</td>"
                    + "<td colspan='3' class='blockTd'>"
                    + "    <select class='disabled_class' name='accountType'>"
                    + "    <option value='common'>对公账户</option>"
                    + "    <option value='priv'>个人账户</option>"
                    + "    </select>"
                    + "</td>"
                    + "</tr>"
                    + "<tr class='dataTr'>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      账号<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='4' class='blockTd'>"
                    + "      <input type='text' name='accountNo' size='35' onKeyUp=\"value=value.replace(/\\D/g,'')\" maxlength='20' class='disabled_class'/>"
                    + "  </td>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      联行号<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='9' class='blockTd'>"
                    + "      <input type='text' name='firmNo' size='35' onKeyUp=\"value=value.replace(/[^\\d|-]/g,'')\" maxlength='64' class='disabled_class'/>"
                    + "      <a href='#' class='href_class'>删除</a>"
                    + "  </td>"
                    + "</tr>"
                    + "</tbody>");

                $('#accountInfoId').append(addcontent);

                $(addcontent).find("a").click(function () {
                    $(this).parent().parent().parent().remove();
                    return false;
                });
            });
    };

    addAccountInput();

    var addSubbranchInput = function () {
        $("#addSubbranch").click(
            function () {

                var addcontent = $("<tbody name='sub_tr'>"
                    + "<tr class='dataTr'>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      分店名称<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='5' class='blockTd'>"
                    + "      <input type='text' name='subName' size='35' class='disabled_class'/>"
                    + "  </td>"
                    + "  <td colspan='3' class='blockTd' align='right'>"
                    + "      分店地址<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='5' class='blockTd'>"
                    + "      <input type='text' name='subAddress' size='35' class='disabled_class'/>"
                    + "  </td>"
                    + "</tr>"
                    + "<tr class='dataTr'>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      联系人<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='5' class='blockTd'>"
                    + "      <input type='text' name='subAssociater' class='disabled_class'/>"
                    + "  </td>"
                    + "  <td colspan='3' class='blockTd' align='right'>"
                    + "      联系电话<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='5' class='blockTd'>"
                    + "      <input type='text' name='subphoneAreacode' size='4' class='disabled_class'/>&nbsp;-&nbsp;"
                    + "      <input type='text' name='subPhone' class='disabled_class'/>"
                    + "  </td>"
                    + "</tr>"
                    + "<tr class='dataTr'>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      开户名称<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='4' class='blockTd'>"
                    + "      <input type='text' name='branchAccname' size='35' class='disabled_class'/>"
                    + "  </td>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      开户行<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='4' class='blockTd'>"
                    + "      <input type='text' name='branchBank' size='35' class='disabled_class'/>"
                    + "      <input type='button' value='查询联行号' onclick='firmNoDialog(this,2)' class='disabled_class'>"
                    + "  </td>"
                    + "<td colspan='2' class='blockTd' align='right'>"
                    + "    账户类别<font color='#FF0000'>*</font>"
                    + "</td>"
                    + "<td colspan='3' class='blockTd'>"
                    + "    <select class='disabled_class' name='branchAcctype'>"
                    + "    <option value='common'>对公账户</option>"
                    + "    <option value='priv'>个人账户</option>"
                    + "    </select>"
                    + "</td>"
                    + "</tr>"
                    + "<tr class='dataTr'>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      账号<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='4' class='blockTd'>"
                    + "      <input type='text' name='branchAcc' size='35' onKeyUp=\"value=value.replace(/\\D/g,'')\" maxlength='20' class='disabled_class'/>"
                    + "  </td>"
                    + "  <td colspan='2' class='blockTd' align='right'>"
                    + "      联行号<font color='#FF0000'>*</font>"
                    + "  </td>"
                    + "  <td colspan='9' class='blockTd'>"
                    + "      <input type='text' name='branchFirmno' size='35' onKeyUp=\"value=value.replace(/[^\\d|-]/g,'')\" maxlength='64' class='disabled_class'/>"
                    + "      <a href='#' class='href_class'>删除</a>"
                    + "  </td>"
                    + "</tr>"
                    + "</tbody>");

                $('#subbranch_table').append(addcontent);

                $(addcontent).find("a").click(function () {
                    $(this).parent().parent().parent().remove();
                    return false;
                });
            });
    };

    addSubbranchInput();

    //注册button click 事件, 按钮点击 验证输入内容
    $("#submitButton").click(function () {
        //首先验证图片是否上传
        if (document.getElementById("infoId").value == "") {
            if (whetherImagesUploaded() == "") {
                alert("请首先上传商户图片信息");
                return false;
            }
        }
        var form2 = document.getElementById("mainForm");
        form2.action = Server.ContextPath + "merchantinfo/save";
        form2.target = "";
        var blankMsg = "";
        blankMsg = branchValid();
        blankMsg = blankMsg + validData();
        //提示信息
        if (blankMsg.length > 0) {
            alert(blankMsg);
            return false;
        }
        $(this).css("display", "none");
        $("#submitStatus").css("display", "block");
        return true;
    });

});
