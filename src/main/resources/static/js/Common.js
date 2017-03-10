/**
 * Created by wanghp on 2016/8/5.
 */
function common_back(){
    if(window.navigator.userAgent.indexOf("Firefox")!=-1 ){
        window.history.back();
    }else if(window.navigator.userAgent.indexOf("Chrome") !== -1 ){
        window.history.back();
        return false;
    }else{
        window.history.go(-1);
    }
}