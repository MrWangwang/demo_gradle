var action;

function pageJS(page) {
    document.getElementById("page").value = page;

    var offset = $("offset");
    var max = parseInt($V("max"));
    offset.value = (page - 1) * max;
    search(false);
}

function pagePlusJS(pages) {
    var page = document.getElementById("page").value;

    if (isNaN(page) || page < 1 || page > pages || page.indexOf(".") == 1) {
        flag = false;

        alert("page error");
    }
    else {
        var offset = $("offset");
        var max = parseInt($V("max"));
        offset.value = (pages - 1) * max;
        search(false);
    }
}


function turnpage(totalpages) {
    var v_page = $V('page');
    var txt_page = $('page');
    if (!/^\d+$/.test(v_page) || v_page < 1 || v_page > totalpages) {
        alert('错误的页码！');
        txt_page.focus();
    } else {
        var pageIndex = v_page > 0 ? v_page : 1;
        pagePlusJS(pageIndex);
    }
}