Server.getHttpRequest = function () {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        for (var i = 5; i > 1; i--) {
            try {
                if (i == 2) {
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    request = new ActiveXObject("Msxml2.XMLHTTP." + i + ".0");
                }
            } catch (ex) {

            }
        }
    }
    return request;
}

Server.waitfunc = null;
Server.returncount = 0;

Server.post = function (url, dataCollection, func) {
    Server.waitfunc = func;
    var Request = Server.getHttpRequest();

    Request.open("POST", url, true);
    Request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var params = "";
    if (dataCollection) {
        params += dataCollection.toQueryString();
    }
    //alert("params:"+params);
    Request.onreadystatechange = function () {
        Server.onPostComplete(Request, func);
    };
    Server.returncount = 0;
    setTimeout("Server.responseTimeout()", 5000);//5���ִ��ontimeout
    Request.send(params);
}

Server.onPostComplete = function (Request, func) {
    if (Request.readyState == 4 && Request.status == 200) {
        //alert(Request.responseText);
        if (Server.returncount == 0) {
            Server.returncount++;
            func(Request.responseText);

        }
    }
}

Server.responseTimeout = function (func) {
    if (Server.returncount == 0) {
        Server.returncount++;
        Server.waitfunc("timeout");
    }
}