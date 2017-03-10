var CONTEXTPATH = '/';

var scripts = document.getElementsByTagName("script");
for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].getAttribute("src").indexOf("main.js") >= 0) {
        var jsPath = scripts[i].getAttribute("src").replace("main.js", '');
        //alert("jsPath="+jsPath);
        if (jsPath.indexOf("/") == 0 || jsPath.indexOf("://") > 0) {
            CONTEXTPATH = jsPath;
            break;
        }
        var arr1 = jsPath.split("/");
        var path = window.location.href;
        if (path.indexOf("?") != -1) {
            path = path.substring(0, path.indexOf("?"));
        }
        var arr2 = path.split("/");
        arr2.splice(arr2.length - 1, 1);
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] == "..") {
                arr2.splice(arr2.length - 1, 1);
            }
        }
        CONTEXTPATH = arr2.join('/') + '/';
        break;
    }
}
//alert(CONTEXTPATH);
var Server = {};
Server.ContextPath = CONTEXTPATH;
Server.loadScript = function (url) {
    document.write('<script type="text/javascript" src="' + Server.ContextPath + url + '"><\/script>');
}
//������Щjs��main.js��ͬһ��Ŀ¼
Server.loadScript("jquery.js");
Server.loadScript("common.js");
Server.loadScript("my97/WdatePicker.js");

var disables = function () {
    $("a[ztype=Disable]").each(function () {
        $(this).addClass("zPushBtnDisabled");
        this.disabled = "true";
        $("img", $(this)).each(function () {
            this.disabled = "true";
        });
    });
}
var chooseDates = function () {
//    $("input[ztype='Date']").datepicker({ changeYear:true, changeMonth:true, duration: "fast", yearRange: "1800:2050"});
    $("input[ztype='Date']").click(function () {
        WdatePicker();
    });
    var imgUrl = "url(" + CONTEXTPATH + "images/icons/icon5.gif) #FFFFFF no-repeat right";
    $("input[ztype='Date']").css({background: imgUrl, paddingRight: "22px"});
}
var downSelect = function () {
    $("select[ztype='DownSelect']").flexselect();
}
function back(){
    if(window.navigator.userAgent.indexOf("Firefox")!=-1 ||
        window.navigator.userAgent.indexOf("Chrome") !== -1 ){
        var referurl;
        referurl=document.referrer;
        window.location.href=referurl;
        return false;
    }else{
        window.history.go(-1);
    }
}