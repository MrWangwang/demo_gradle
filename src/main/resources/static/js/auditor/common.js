/* ---------------------------------- [ 表格背景工具-begin ] ----------------------------------- */
(function ($) {

    $.fn.dataGrid = function (pars) {
        var conf = {
            mouseOverColor: "#ffffff",
            mouseOutColor: "#ffffff",
            clickColor: "#D8F79D",
            activeBgEventClass: "activeBgEventClass"
        };

        $.extend(conf, pars);

        this.each(function () {
            $(this).mouseover(function () {
                var className = $(this).attr("class");
                className = className == undefined || className == null ? "" : className;
                if (className.indexOf(conf.activeBgEventClass) == -1) {
                    $(this).css("background", conf.mouseOverColor);
                }
            })
                .mouseout(function () {
                    var className = $(this).attr("class");
                    className = className == undefined || className == null ? "" : className;
                    if (className.indexOf(conf.activeBgEventClass) == -1) {
                        $(this).css("background", conf.mouseOutColor);
                    }
                })
                .click(function () {
                    var className = $(this).attr("class");
                    className = className == undefined || className == null ? "" : className;
                    if (className.indexOf(conf.activeBgEventClass) == -1) {
                        $("." + conf.activeBgEventClass, $(this).parent()).css("background", conf.mouseOutColor);
                        $("." + conf.activeBgEventClass, $(this).parent()).removeClass(conf.activeBgEventClass);
                        $(this).addClass(conf.activeBgEventClass);
                        this.style.background = conf.clickColor;
                    }
                });
        });
    }

})(jQuery);
/* ---------------------------------- [ 表格背景工具-end ] ----------------------------------- */

/* ---------------------------------- [ 分页工具-begin ] ----------------------------------- */
var action;
function pageJS(page) {
    $("#page").val(page);

    var max = parseInt($("#max").val());
    $("#offset").val((page - 1) * max)
    //search(false);
    checkSearchText();
    $("form:first").submit();
}
function pagePlusJS(pages) {
    var page = $("#page").val();
    if (isNaN(page) || page < 1 || page > pages || page.indexOf(".") == 1) {
        flag = false;
        alert("page error");
    } else {
        var max = parseInt($("#max").val());
        $("#offset").val((page - 1) * max)
        //search(false);
        checkSearchText();
        $("form:first").submit();
    }
}
function turnpage(totalpages) {
    var v_page = $('#page').val();
    var txt_page = $('#page');
    if (!/^\d+$/.test(v_page) || v_page < 1 || v_page > totalpages) {
        alert('错误的页码！');
        txt_page.focus();
    } else {
        var pageIndex = v_page > 0 ? v_page : 1;
        pagePlusJS(pageIndex);
    }
}
function checkSearchText() {
    $("input[type=text]", $("#searchBox")).each(function () {
        if ($(this).val().indexOf("请输入") != -1) {
            $(this).val("");
        }
    });
}
/* ---------------------------------- [ 分页工具-end ] ----------------------------------- */

/* ---------------------------------- [ 省市代码选择-begin ] ----------------------------------- */
(function ($) {

    $.fn.areacode = function (pars) {
        var areaList = {
            "请选择": [
                ["请选择", "0"]
            ],
            "北京": [
                ["东城区", "10"],
                ["西城区", "1001"],
                ["崇文区", "1002"],
                ["宣武区", "1003"],
                ["朝阳区", "1004"],
                ["丰台区", "1005"],
                ["石景山区", "1006"],
                ["海淀区", "1007"],
                ["门头沟区", "1008"],
                ["房山区", "1009"],
                ["通州区", "1020"],
                ["顺义区", "1021"],
                ["延庆县", "1022"],
                ["昌平县", "1023"],
                ["怀柔县", "1024"],
                ["密云县", "1025"],
                ["平谷县", "1026"],
                ["大兴县", "1027"]
            ],
            "天津": [
                ["和平区", "22"],
                ["河东区", "2201"],
                ["河西区", "2202"],
                ["南开区", "2203"],
                ["河北区", "2204"],
                ["红桥区", "2205"],
                ["塘沽区", "2206"],
                ["大港区", "2207"],
                ["汉沽区", "2208"],
                ["东丽区", "2209"],
                ["西青区", "2220"],
                ["津南区", "2221"],
                ["北辰区", "2222"],
                ["蓟县", "2223"],
                ["宝坻县", "2224"],
                ["武清县", "2225"],
                ["宁河县", "2226"],
                ["静海县", "2227"]
            ],
            "上海": [
                ["南市区", "21"],
                ["卢湾区", "2101"],
                ["徐汇区", "2102"],
                ["长宁区", "2103"],
                ["静安区", "2104"],
                ["普陀区", "2105"],
                ["闸北区", "2106"],
                ["虹口区", "2107"],
                ["杨浦区", "2108"],
                ["闵行区", "2109"],
                ["宝山区", "2120"],
                ["嘉定区", "2121"],
                ["浦东新区", "2122"],
                ["金山区", "2123"],
                ["松江区", "2124"],
                ["崇明县", "2125"],
                ["青浦县", "2126"],
                ["南汇县", "2127"],
                ["奉贤县", "2128"],
                ["黄浦区", "2129"]
            ],
            "重庆": [
                ["重庆市", "23"],
                ["城口县", "2301"],
                ["大足县", "2302"],
                ["垫江县", "2303"],
                ["丰都县", "2304"],
                ["奉节县", "2305"],
                ["河川市", "2306"],
                ["江津市", "2307"],
                ["开县", "2308"],
                ["梁平县", "2309"],
                ["南川市", "2320"],
                ["彭水苗族土家族自治县", "2321"],
                ["荣昌县", "2322"],
                ["石柱土家族自治县", "2323"],
                ["铜梁县", "2324"],
                ["巫山县", "2325"],
                ["巫溪县", "2326"],
                ["武隆县", "2327"],
                ["秀山土家苗族自治区", "2328"],
                ["永川市", "2329"],
                ["酉阳土家苗族自治区", "2330"],
                ["云阳县", "2331"],
                ["忠县", "2332"],
                ["潼南县", "2333"],
                ["碧山县", "2334"],
                ["綦江县", "2335"]
            ],
            "香港": [
                ["香港", "1852"],
                ["九龙", "18521"],
                ["新界", "18522"],
                ["大屿", "18523"]
            ],
            "澳门": [
                ["澳门", "1853"]
            ],
            "西藏": [
                ["阿里", "897"],
                ["昌都", "895"],
                ["拉萨", "891"],
                ["林芝", "894"],
                ["那曲", "896"],
                ["日喀则", "892"],
                ["山南", "893"]
            ],
            "新疆": [
                ["阿克苏", "997"],
                ["阿拉尔", "9971"],
                ["巴音郭楞蒙古自治州", "996"],
                ["博尔塔拉蒙古自治州", "909"],
                ["昌吉回族自治州", "994"],
                ["哈密", "902"],
                ["和田", "903"],
                ["喀什", "998"],
                ["克拉玛依", "990"],
                ["克孜勒苏柯尔克孜自治州", "908"],
                ["石河子", "993"],
                ["图木舒克", "9981"],
                ["吐鲁番", "995"],
                ["乌鲁木齐", "991"],
                ["奎屯", "992"],
                ["五家渠", "9941"],
                ["伊犁哈萨克自治州", "999"]
            ],
            "内蒙古": [
                ["阿拉善盟", "483"],
                ["巴彦淖尔盟", "478"],
                ["包头", "472"],
                ["赤峰", "476"],
                ["呼和浩特", "471"],
                ["呼伦贝尔", "470"],
                ["通辽", "475"],
                ["乌海", "473"],
                ["乌兰察布盟", "474"],
                ["锡林郭勒盟", "479"],
                ["兴安盟", "482"],
                ["鄂尔多斯", "477"]
            ],
            "广西": [
                ["百色", "776"],
                ["北海", "779"],
                ["崇左", "771"],
                ["防城港", "770"],
                ["桂林", "773"],
                ["贵港", "775"],
                ["河池", "778"],
                ["贺州", "774"],
                ["来宾", "772"],
                ["柳州", "7721"],
                ["南宁", "7711"],
                ["钦州", "777"],
                ["梧州", "7741"],
                ["玉林", "7751"]
            ],
            "宁夏": [
                ["固原", "954"],
                ["石嘴山", "952"],
                ["吴忠", "953"],
                ["银川", "951"]
            ],
            "山西": [
                ["长治", "355"],
                ["大同", "352"],
                ["晋城", "356"],
                ["晋中", "354"],
                ["临汾", "357"],
                ["吕梁", "358"],
                ["朔州", "349"],
                ["太原", "351"],
                ["忻州", "350"],
                ["阳泉", "353"],
                ["运城", "359"]
            ],
            "河南": [
                ["安阳", "372"],
                ["鹤壁", "392"],
                ["济源", "391"],
                ["焦作", "3911"],
                ["洛阳", "379"],
                ["南阳", "377"],
                ["开封", "378"],
                ["平顶山", "375"],
                ["三门峡", "398"],
                ["商丘", "370"],
                ["信阳", "376"],
                ["新乡", "373"],
                ["许昌", "374"],
                ["郑州", "371"],
                ["周口", "394"],
                ["驻马店", "396"],
                ["漯河", "395"],
                ["濮阳", "393"]
            ],
            "河北": [
                ["保定", "312"],
                ["沧州", "317"],
                ["邯郸", "310"],
                ["承德", "314"],
                ["衡水", "318"],
                ["秦皇岛", "335"],
                ["廊坊", "316"],
                ["石家庄", "311"],
                ["唐山", "315"],
                ["邢台", "319"],
                ["张家口", "313"]
            ],
            "江西": [
                ["抚州", "794"],
                ["赣州", "797"],
                ["吉安", "796"],
                ["景德镇", "798"],
                ["九江", "792"],
                ["南昌", "791"],
                ["上饶", "793"],
                ["萍乡", "799"],
                ["新余", "790"],
                ["宜春", "795"],
                ["鹰潭", "701"]
            ],
            "湖南": [
                ["常德", "736"],
                ["长沙", "731"],
                ["郴州", "735"],
                ["衡阳", "734"],
                ["怀化", "745"],
                ["娄底", "738"],
                ["邵阳", "739"],
                ["湘潭", "732"],
                ["湘西土家族苗族自治州", "743"],
                ["益阳", "737"],
                ["永州", "746"],
                ["岳阳", "730"],
                ["张家界", "744"],
                ["株洲", "733"]
            ],
            "江苏": [
                ["常州", "519"],
                ["连云港", "518"],
                ["淮安", "517"],
                ["南京", "25"],
                ["南通", "513"],
                ["苏州", "512"],
                ["宿迁", "527"],
                ["泰州", "523"],
                ["无锡", "510"],
                ["徐州", "516"],
                ["盐城", "515"],
                ["扬州", "514"],
                ["镇江", "511"]
            ],
            "浙江": [
                ["杭州", "571"],
                ["湖州", "572"],
                ["嘉兴", "573"],
                ["金华", "579"],
                ["丽水", "578"],
                ["宁波", "574"],
                ["绍兴", "575"],
                ["台州", "576"],
                ["温州", "577"],
                ["舟山", "580"],
                ["衢州", "570"]
            ],
            "安徽": [
                ["安庆", "556"],
                ["蚌埠", "552"],
                ["巢湖", "565"],
                ["池州", "566"],
                ["滁州", "550"],
                ["阜阳", "558"],
                ["合肥", "551"],
                ["淮北", "561"],
                ["淮南", "554"],
                ["黄山", "559"],
                ["六安", "564"],
                ["马鞍山", "555"],
                ["宿州", "557"],
                ["铜陵", "562"],
                ["芜湖", "553"],
                ["宣城", "563"],
                ["亳州", "5581"]
            ],
            "湖北": [
                ["鄂州", "711"],
                ["恩施土家族苗族自治州", "718"],
                ["黄冈", "713"],
                ["黄石", "714"],
                ["荆门", "727"],
                ["荆州", "716"],
                ["神农架林区", "719"],
                ["潜江", "728"],
                ["十堰", "7191"],
                ["随州", "722"],
                ["天门", "7281"],
                ["武汉", "27"],
                ["咸宁", "715"],
                ["仙桃", "7282"],
                ["襄樊", "710"],
                ["孝感", "712"],
                ["宜昌", "717"]
            ],
            "黑龙江": [
                ["大庆", "459"],
                ["大兴安岭", "457"],
                ["哈尔滨", "451"],
                ["鹤岗", "468"],
                ["黑河", "456"],
                ["鸡西", "467"],
                ["佳木斯", "454"],
                ["牡丹江", "453"],
                ["七台河", "464"],
                ["齐齐哈尔", "452"],
                ["双鸭山", "4641"],
                ["绥化 ", "455"],
                ["伊春", "458"]
            ],
            "吉林": [
                ["白城", "436"],
                ["白山", "439"],
                ["长春", "431"],
                ["吉林", "432"],
                ["辽源", "437"],
                ["四平", "434"],
                ["松原", "438"],
                ["通化", "435"],
                ["延边朝鲜族自治州", "433"]
            ],
            "辽宁": [
                ["鞍山", "412"],
                ["本溪", "414"],
                ["朝阳", "421"],
                ["大连", "456"],
                ["丹东", "415"],
                ["抚顺", "413"],
                ["阜新", "418"],
                ["葫芦岛", "429"],
                ["锦州", "416"],
                ["辽阳", "419"],
                ["盘锦", "427"],
                ["沈阳", "24"],
                ["铁岭", "410"],
                ["营口", "417"]
            ],
            "陕西": [
                ["安康", "915"],
                ["宝鸡", "917"],
                ["汉中", "916"],
                ["商洛", "914"],
                ["铜川", "919"],
                ["西安", "29"],
                ["渭南", "913"],
                ["咸阳", "910"],
                ["延安", "911"],
                ["榆林", "912"]
            ],
            "甘肃": [
                ["白银", "943"],
                ["定西", "932"],
                ["甘南藏族自治区", "941"],
                ["嘉峪关", "937"],
                ["金昌", "935"],
                ["酒泉", "9371"],
                ["兰州", "931"],
                ["临夏回族自治区", "930"],
                ["陇南", "939"],
                ["平凉", "933"],
                ["庆阳", "934"],
                ["天水", "938"],
                ["武威", "9351"],
                ["张掖", "936"]
            ],
            "青海": [
                ["德令哈", "977"],
                ["共和市", "974"],
                ["海东市", "972"],
                ["玛沁市", "975"],
                ["同仁市", "973"],
                ["西宁", "971"],
                ["玉树", "976"]
            ],
            "云南": [
                ["保山", "875"],
                ["楚雄彝族自治州", "878"],
                ["大理白族自治州", "872"],
                ["德宏傣族景颇族自治州", "692"],
                ["迪庆藏族自治州", "887"],
                ["红河哈尼族彝族自治州", "873"],
                ["昆明", "871"],
                ["丽江", "888"],
                ["临沧", "883"],
                ["怒江傈僳族自治州", "886"],
                ["曲靖", "874"],
                ["思茅", "879"],
                ["文山壮族苗族自治州", "876"],
                ["西双版纳傣族自治州", "691"],
                ["玉溪", "877"],
                ["昭通", "870"]
            ],
            "贵州": [
                ["安顺", "853"],
                ["毕节", "857"],
                ["贵阳", "851"],
                ["六盘水", "858"],
                ["黔东南苗族侗族自治州", "855"],
                ["黔南布依族苗族自治州", "854"],
                ["铜仁", "856"],
                ["遵义", "852"],
                ["黔西南布依族苗族自治州", "859"]
            ],
            "四川": [
                ["阿坝藏族羌族自治州", "837"],
                ["巴中", "827"],
                ["德阳", "838"],
                ["成都", "28"],
                ["达州", "818"],
                ["甘孜藏族自治州", "836"],
                ["广安", "826"],
                ["广元", "839"],
                ["乐山", "833"],
                ["凉山彝族自治州", "834"],
                ["眉山", "281"],
                ["绵阳", "816"],
                ["南充", "817"],
                ["内江", "832"],
                ["攀枝花", "812"],
                ["遂宁", "825"],
                ["雅安", "835"],
                ["宜宾", "831"],
                ["资阳", "282"],
                ["自贡", "813"],
                ["泸州", "830"]
            ],
            "福建": [
                ["福州", "591"],
                ["龙岩", "597"],
                ["南平", "599"],
                ["宁德", "593"],
                ["莆田", "594"],
                ["泉州", "595"],
                ["三明", "598"],
                ["漳州", "596"],
                ["厦门", "592"]
            ],
            "山东": [
                ["滨州", "543"],
                ["德州", "534"],
                ["东营", "546"],
                ["荷泽", "530"],
                ["济南", "531"],
                ["济宁", "537"],
                ["莱芜", "634"],
                ["聊城", "635"],
                ["临沂", "539"],
                ["青岛", "532"],
                ["日照", "633"],
                ["泰安", "538"],
                ["威海", "631"],
                ["潍坊", "536"],
                ["烟台", "535"],
                ["枣庄", "632"],
                ["淄博", "533"]
            ],
            "广东": [
                ["潮州", "768"],
                ["东莞", "769"],
                ["佛山", "757"],
                ["广州", "20"],
                ["河源", "762"],
                ["江门", "750"],
                ["揭阳", "663"],
                ["惠州", "752"],
                ["茂名", "668"],
                ["梅州", "753"],
                ["清远", "763"],
                ["汕头", "754"],
                ["汕尾", "660"],
                ["韶关", "751"],
                ["深圳", "755"],
                ["阳江", "662"],
                ["云浮", "766"],
                ["湛江", "759"],
                ["肇庆", "758"],
                ["中山", "760"],
                ["珠海", "756"]
            ],
            "海南": [
                ["白沙黎族自治县", "898"],
                ["保亭黎族苗族自治县", "8981"],
                ["昌江黎族自治县", "8982"],
                ["澄迈县", "8983"],
                ["定安县", "8984"],
                ["海口", "8985"],
                ["东方", "890"],
                ["乐东黎族自治县", "8986"],
                ["临高县", "8987"],
                ["陵水黎族自治县", "8988"],
                ["琼海", "8989"],
                ["琼中黎族苗族自治县", "8980"],
                ["三亚", "899"],
                ["屯昌县", "8990"],
                ["万宁", "8991"],
                ["文昌", "8992"],
                ["五指山", "8993"],
                ["儋州", "8901"]
            ],
            "台湾": [
                ["台北市", "886"],
                ["高雄市", "8861"],
                ["台南市", "8862"],
                ["台中市", "8863"],
                ["基隆", "8864"],
                ["新竹", "8865"]
            ]
        };

        var conf = {
            province: "province",
            city: "city",
            areacode: "areacode",
            selectedAraecode: null
        };

        $.extend(conf, pars);

        this.each(function () {
            $(this).empty();
            for (provinceName in areaList) {
                this.options[this.options.length] = new Option(provinceName, provinceName);
                if (conf.selectedProvince != null && provinceName == conf.selectedProvince) {
                    this.options[this.options.length - 1].selected = true;
                }
            }
            $(this).change(function () {
                loadCity($("option:selected", $(this)).val());
            });
            if (conf.selectedAraecode == null) {
                loadCity($("option:selected", $(this)).val());
            }
        });

        function loadCity(provinceName) {
            $("#" + conf.city).each(function () {
                var cityList = areaList[provinceName];
                if (cityList != undefined && cityList.length > 0) {
                    $(this).empty();
                    for (var i = 0; i < cityList.length; i++) {
                        this.options[this.options.length] = new Option(cityList[i][0], cityList[i][1]);
                    }
                    $(this).change(function () {
                        loadAraecode($("option:selected", $(this)).val());
                    });
                    loadAraecode($("option:selected", $(this)).val());
                }
            });
        }

        function loadAraecode(araecode) {
            $("#" + conf.areacode).val(araecode);
        }

        function initAraecode() {
            var pname = null;
            var areacode = null;
            if (conf.selectedAraecode != null) {
                for (provinceName in areaList) {
                    var cityList = areaList[provinceName];
                    if (cityList != undefined && cityList.length > 0) {
                        for (var i = 0; i < cityList.length; i++) {
                            if (conf.selectedAraecode == formatAreacod(cityList[i][1])) {
                                pname = provinceName;
                                areacode = cityList[i][1];
                            }
                        }
                    }
                }
            }

            if (pname != null && areacode != null) {
                $("#" + conf.province + " option").each(function () {
                    if (pname == this.value) {
                        this.selected = true;
                        loadCity(pname);
                    }
                });
                $("#" + conf.city + " option").each(function () {
                    if (areacode == this.value) {
                        this.selected = true;
                        loadAraecode(areacode);
                    }
                });
            }
        }

        function formatAreacod(value) {
            var len = 4 - value.length;
            for (var i = 0; i < len; i++) {
                value = "0" + value;
            }
            return value;
        }

        if (conf.selectedAraecode != null) {
            conf.province = $(this).attr("id");
            initAraecode();
        }
    }
})(jQuery);
/* ---------------------------------- [ 省市代码选择-end ] ----------------------------------- */

/* ---------------------------------- [ 下拉选择-end ] ----------------------------------- */
function pickSelectedAfter() {
}
(function ($) {
    $.flexselect = function (select, options) {
        this.init(select, options);
    };

    $.extend($.flexselect.prototype, {
        settings: {
            allowMismatch: false,
            selectedClass: "flexselect_selected",
            dropdownClass: "flexselect_dropdown",
            inputIdTransform: function (id) {
                return id + "_flexselect";
            },
            inputNameTransform: function (name) {
                return;
            },
            dropdownIdTransform: function (id) {
                return id + "_flexselect_dropdown";
            }
        },
        select: null,
        input: null,
        hidden: null,
        dropdown: null,
        dropdownList: null,
        cache: [],
        results: [],
        lastAbbreviation: null,
        abbreviationBeforeFocus: null,
        selectedIndex: 0,
        picked: false,
        dropdownMouseover: false, // Workaround for poor IE behaviors

        init: function (select, options) {
            this.settings = $.extend({}, this.settings, options);
            this.select = $(select);
            this.preloadCache();
            this.renderControls();
            this.wire();
        },

        preloadCache: function () {
            this.cache = this.select.children("option").map(function () {
                return { name: $.trim($(this).text()), value: $(this).val(), score: 0.0 };
            });
        },

        renderControls: function () {
            var selected = this.select.children("option:selected");

            this.hidden = $("<input type='hidden'/>").attr({
                id: this.select.attr("id"),
                name: this.select.attr("name")
            }).val(selected.val());

            this.input = $("<input type='text' autocomplete='off' />").attr({
                id: this.settings.inputIdTransform(this.select.attr("id")),
                name: this.settings.inputNameTransform(this.select.attr("name")),
                accesskey: this.select.attr("accesskey"),
                tabindex: this.select.attr("tabindex"),
                style: this.select.attr("style")
            }).addClass(this.select.attr("class")).val($.trim(selected.text()));

            this.dropdown = $("<div></div>").attr({
                id: this.settings.dropdownIdTransform(this.select.attr("id"))
            }).addClass(this.settings.dropdownClass);
            this.dropdownList = $("<ul></ul>");
            this.dropdown.append(this.dropdownList);

//      this.select.after(this.input).after(this.hidden).remove();
            this.select.after(this.input).after(this.hidden).attr("id", this.id + "_old").attr("name", this.name + "_old").hide();
//      this.select.after(this.input).after(this.hidden).attr("name", this.name + "_old").hide();
            $("body").append(this.dropdown);
        },
        wire: function () {
            var self = this;
            this.input.click(function () {
                self.lastAbbreviation = null;
                self.focus();
            });
            this.input.mouseup(function (event) {
                // This is so Safari selection actually occurs.
                event.preventDefault();
            });
            this.input.focus(function () {
                self.abbreviationBeforeFocus = self.input.val();
                self.input.select();
                if (!self.picked) self.filterResults();
            });
            this.input.blur(function () {
                if (!self.dropdownMouseover) {
                    self.hide();
                    if (!self.settings.allowMismatch && !self.picked) self.reset();
                }
            });
            this.dropdownList.mouseover(function (event) {
                if (event.target.tagName == "LI") {
                    var rows = self.dropdown.find("li");
                    self.markSelected(rows.index($(event.target)));
                }
            });
            this.dropdownList.mouseleave(function () {
                self.markSelected(-1);
            });
            this.dropdownList.mouseup(function (event) {
                self.pickSelected();
                self.focusAndHide();
            });
            this.dropdown.mouseover(function (event) {
                self.dropdownMouseover = true;
            });
            this.dropdown.mouseleave(function (event) {
                self.dropdownMouseover = false;
            });
            this.dropdown.mousedown(function (event) {
                event.preventDefault();
            });
            this.input.keyup(function (event) {
                switch (event.keyCode) {
                    case 13: // return
                        event.preventDefault();
                        self.pickSelected();
                        self.focusAndHide();
                        break;
                    case 27: // esc
                        event.preventDefault();
                        self.reset();
                        self.focusAndHide();
                        break;
                    default:
                        self.filterResults();
                        break;
                }
            });
            this.input.keydown(function (event) {
                switch (event.keyCode) {
                    case 9:  // tab
                        self.pickSelected();
                        self.hide();
                        break;
                    case 33: // pgup
                        event.preventDefault();
                        self.markFirst();
                        break;
                    case 34: // pgedown
                        event.preventDefault();
                        self.markLast();
                        break;
                    case 38: // up
                        event.preventDefault();
                        self.moveSelected(-1);
                        break;
                    case 40: // down
                        event.preventDefault();
                        self.moveSelected(1);
                        break;
                    case 13: // return
                    case 27: // esc
                        event.preventDefault();
                        event.stopPropagation();
                        break;
                }
            });
        },
        filterResults: function () {
            var abbreviation = this.input.val();
            if (abbreviation == this.lastAbbreviation) return;
            var results = [];
            $.each(this.cache, function () {
                this.score = LiquidMetal.score(this.name, abbreviation);
                if (this.score > 0.0) results.push(this);
            });
            this.results = results;
            this.sortResults();
            this.renderDropdown();
            this.markFirst();
            this.lastAbbreviation = abbreviation;
            this.picked = false;
        },
        sortResults: function () {
            this.results.sort(function (a, b) {
                return b.score - a.score;
            });
        },
        renderDropdown: function () {
            var dropdownBorderWidth = this.dropdown.outerWidth() - this.dropdown.innerWidth();
            var inputOffset = this.input.offset();
            this.dropdown.css({
                width: (this.input.outerWidth() - dropdownBorderWidth) + "px",
                top: (inputOffset.top + this.input.outerHeight()) + "px",
                left: inputOffset.left + "px"
            });
            var list = this.dropdownList.html("");
            $.each(this.results, function () {
                // list.append($("<li/>").html(this.name + " <small>[" + Math.round(this.score*100)/100 + "]</small>"));
                list.append($("<li/>").html(this.name));
            });
            this.dropdown.show();
        },
        markSelected: function (n) {
            if (n > this.results.length) return;

            var rows = this.dropdown.find("li");
            rows.removeClass(this.settings.selectedClass);
            this.selectedIndex = n;

            if (n >= 0) $(rows[n]).addClass(this.settings.selectedClass);
        },
        pickSelected: function () {
            var selected = this.results[this.selectedIndex];
            if (selected) {
                this.input.val(selected.name);
                this.hidden.val(selected.value);
                this.picked = true;
            } else if (this.settings.allowMismatch) {
                this.hidden.val("");
            } else {
                this.reset();
            }
            pickSelectedAfter();
        },
        hide: function () {
            this.dropdown.hide();
            this.lastAbbreviation = null;
        },
        moveSelected: function (n) {
            this.markSelected(this.selectedIndex + n);
        },
        markFirst: function () {
            this.markSelected(0);
        },
        markLast: function () {
            this.markSelected(this.results.length - 1);
        },
        reset: function () {
            this.input.val(this.abbreviationBeforeFocus);
        },
        focus: function () {
            this.input.focus();
        },
        focusAndHide: function () {
            this.focus();
            this.hide();
        }
    });

    $.fn.flexselect = function (options) {
        this.each(function () {
            if (this.tagName == "SELECT") new $.flexselect(this, options);
        });
        return this;
    };
})(jQuery);
var LiquidMetal = function () {
    var SCORE_NO_MATCH = 0.0;
    var SCORE_MATCH = 1.0;
    var SCORE_TRAILING = 0.8;
    var SCORE_TRAILING_BUT_STARTED = 0.9;
    var SCORE_BUFFER = 0.85;
    return {
        score: function (string, abbreviation) {
            // Short circuits
            if (abbreviation.length == 0) return SCORE_TRAILING;
            if (abbreviation.length > string.length) return SCORE_NO_MATCH;

            var scores = this.buildScoreArray(string, abbreviation);

            var sum = 0.0;
            for (var i in scores) {
                sum += scores[i];
            }
            return (sum / scores.length);
        },

        buildScoreArray: function (string, abbreviation) {
            var scores = new Array(string.length);
            var lower = string.toLowerCase();
            var chars = abbreviation.toLowerCase().split("");

            var lastIndex = -1;
            var started = false;
            for (var i in chars) {
                var c = chars[i];
                var index = lower.indexOf(c, lastIndex + 1);
                if (index < 0) return fillArray(scores, SCORE_NO_MATCH);
                if (index == 0) started = true;

                if (isNewWord(string, index)) {
                    scores[index - 1] = 1;
                    fillArray(scores, SCORE_BUFFER, lastIndex + 1, index - 1);
                }
                else if (isUpperCase(string, index)) {
                    fillArray(scores, SCORE_BUFFER, lastIndex + 1, index);
                }
                else {
                    fillArray(scores, SCORE_NO_MATCH, lastIndex + 1, index);
                }
                scores[index] = SCORE_MATCH;
                lastIndex = index;
            }
            var trailingScore = started ? SCORE_TRAILING_BUT_STARTED : SCORE_TRAILING;
            fillArray(scores, trailingScore, lastIndex + 1);
            return scores;
        }
    };
    function isUpperCase(string, index) {
        var c = string.charAt(index);
        return ("A" <= c && c <= "Z");
    }

    function isNewWord(string, index) {
        var c = string.charAt(index - 1);
        return (c == " " || c == "\t");
    }

    function fillArray(array, value, from, to) {
        from = Math.max(from || 0, 0);
        to = Math.min(to || array.length, array.length);
        for (var i = from; i < to; i++) {
            array[i] = value;
        }
        return array;
    }

}();
/* ---------------------------------- [ 下拉选择-end ] ----------------------------------- */

