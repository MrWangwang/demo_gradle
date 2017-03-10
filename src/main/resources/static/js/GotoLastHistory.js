function gotoLastHistory(originalUrl){
    if(originalUrl){
        var menuUrlArr = new Array();
        menuUrlArr.push("../index/sysInfo");
        menuUrlArr.push("../index/merchantInfo");
        menuUrlArr.push("../index/main");
        menuUrlArr.push("../index/respInfo");
        menuUrlArr.push('_Menu_120')    //首页

        menuUrlArr.push("../acquirer/list");
        menuUrlArr.push("../acqMerchant/list");
        menuUrlArr.push("../acqMerchantTerminal/list");
        menuUrlArr.push("_Menu_121");   //通道管理

        menuUrlArr.push("../merchantReview/list");
        menuUrlArr.push("../mobileMerchant_tab.gsp");
        menuUrlArr.push("../merchantReview/config");
        menuUrlArr.push("_Menu_123");   //进件管理

        menuUrlArr.push("../merchantTerminalSn/list");
        menuUrlArr.push("../cmMerchant/list");
        menuUrlArr.push("../mobileMerchant/list");
        menuUrlArr.push("../merchantTerminal/list");
        menuUrlArr.push("../mobileMerTerminal/list");
        menuUrlArr.push("../merchantFile/list");
        menuUrlArr.push("../merchantTerminal_tab.gsp");
        menuUrlArr.push("../merchantCashier/list");
        menuUrlArr.push("../WSBanner/list");
        menuUrlArr.push("../WSSession/list");
        menuUrlArr.push("_Menu_122");   //商户管理

        menuUrlArr.push("../agency/list");
        menuUrlArr.push("../mcrKsn/list");
        menuUrlArr.push("../mcrSerialNumber/tab");
        menuUrlArr.push("_Menu_129");   //代理商管理

        menuUrlArr.push("../transCurrent/list");
        menuUrlArr.push("../mobileTransCurrent/list");
        menuUrlArr.push("../transHistory/list");
        menuUrlArr.push("../mobileTransHistory/list");
        menuUrlArr.push("../transHistory/abnormal");
        menuUrlArr.push("../mobileTransHistory/abnormal");
        menuUrlArr.push("../report/list");
        menuUrlArr.push("_Menu_125");   //交易管理

        menuUrlArr.push("../icpayTransCurrent/list");
        menuUrlArr.push("../icpayTransHistory/list");
        menuUrlArr.push("../icpayRefund/list");
        menuUrlArr.push("_Menu_133");   //外卡交易

        menuUrlArr.push("../transRoute/list");
        menuUrlArr.push("../merchantGroup/list");
        menuUrlArr.push("../acqMerchantGrp/list");
        menuUrlArr.push("_Menu_124");   //路由管理

        menuUrlArr.push("../transLimit/list");
        menuUrlArr.push("../transRule/list");
        menuUrlArr.push("../whitelistMerchant/list");
        menuUrlArr.push("../transRisk/list");
        menuUrlArr.push("../mobileTransRisk/list");
        menuUrlArr.push("../blacklistCardbin/list");
        menuUrlArr.push("../blacklistCard/list");
        menuUrlArr.push("_Menu_128");   //风险管理

        menuUrlArr.push("../settle/clearingflow");
        menuUrlArr.push("../merchantReconciliation/list");
        menuUrlArr.push("../merchantSettleBatch/list?status=0&amp;batchDirect=0");
        menuUrlArr.push("../merchantSettleBatch/list?status=6&amp;batchDirect=6");
        menuUrlArr.push("../merchantSettleBatch/list?status=1&amp;batchDirect=1");
        menuUrlArr.push("../merchantSettleBatch/list?status=2&amp;batchDirect=2");
        menuUrlArr.push("../merchantSettleBatch/list?status=all&amp;batchDirect=all");
        menuUrlArr.push("../merchantAccount/list");
        menuUrlArr.push("../merchantAccountRecord/list");
        menuUrlArr.push("../merchantAccount/noSettle");
        menuUrlArr.push("../merchantAccount/doSettle");
        menuUrlArr.push("_Menu_126");   //结算管理

        menuUrlArr.push("../sysOrg/list");
        menuUrlArr.push("../sysUser/list");
        menuUrlArr.push("../sysRole/list");
        menuUrlArr.push("../sysPermItem/list");
        menuUrlArr.push("../sysLog/list");
        menuUrlArr.push("../dict");
        menuUrlArr.push("../keyStore/list");
        menuUrlArr.push("_Menu_127");   //系统管理

        var lastUri = originalUrl.substr(originalUrl.indexOf('/',1));
        lastUri = '..'+lastUri.replace('grails/','').replace('.dispatch','');
        var targetTag = new Array();
        for(var i=0; i<menuUrlArr.length; i++){
            menuUrlArr[i] == lastUri ? targetTag.push(lastUri):'';
            if(targetTag.length > 0 &&  /^_Menu_1[0-9]{2}$/.test(menuUrlArr[i])){
                targetTag.push(menuUrlArr[i]);
                break;
            }
        }

        targetTag[1] ? document.getElementById(targetTag[1]).click() : "";
    }
}