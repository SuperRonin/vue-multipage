var MyHistory = {
    hisKey: "",
    hisHref: "",
    addHistory: function(p) {
        if (sessionStorage.myHistory == null) {
            var arr = new Array();
            arr.push(p);
            sessionStorage.myHistory = JSON.stringify(arr);
        } else {
            var arr = JSON.parse(sessionStorage.myHistory);
            var pos = -1;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].hisKey == p.hisKey) {
                    arr[i].hisHref = p.hisHref;
                    pos = i;
                }
            }
            if (pos >= 0) {
                arr.removeAt(pos);

            }
            arr.push(p);
            sessionStorage.myHistory = JSON.stringify(arr);
        }

    },
    getHistory: function(key) {
        var rs = "";
        var inc = -1;
        if (sessionStorage.myHistory == null || sessionStorage.myHistory == "") {
            return -1;
        }
        var arr = JSON.parse(sessionStorage.myHistory);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].hisKey == key) {
                rs = arr[i].hisHref;
                inc = i;
                break;
            }
        }
        return inc;
    },
    remove: function(p) {
        var arr = JSON.parse(sessionStorage.myHistory);
        var pos = -1;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].hisKey == p) {
                pos = i;
            }
        }
        if (pos >= 0) {
            arr.removeAt(pos);

        }
        sessionStorage.myHistory = JSON.stringify(arr);
    },
    back: function(p) {
        if (sessionStorage.myHistory == null || sessionStorage.myHistory == "") {
            window.location.href = "index.html";
            return;
        }
        var arr = JSON.parse(sessionStorage.myHistory);
        var pos = MyHistory.getHistory(p);
        var newArr = [];
        if (pos > 0) {
            for (var i = 0; i < pos; i++) {
                newArr.push(arr[i]);
            }
        } else {
            newArr.push(arr[0]);
        }

        sessionStorage.myHistory = JSON.stringify(newArr);
        if (pos >= 0) {
            window.location.href = arr[pos].hisHref;
        } else {
            window.location.href = "index.html";
        }

    },
    backRoot: function() {
        if (sessionStorage.myHistory == null || sessionStorage.myHistory == "") {
            window.location.href = "index.html";
            return;
        }
        var arr = JSON.parse(sessionStorage.myHistory);
        var obj = arr[0];
        MyHistory.back(obj.hisKey);
    },
    backPre: function() {
        if (sessionStorage.myHistory == null || sessionStorage.myHistory == "") {
            window.location.href = "index.html";
            return;
        }
        var arr = JSON.parse(sessionStorage.myHistory);
        arr.pop();
        var obj = arr.pop();
        MyHistory.back(obj.hisKey);
    },
    historyback: function() {
        var myHistory = Object.create(MyHistory);
        var pos = window.location.pathname.lastIndexOf("/");
        var pos1 = window.location.pathname.indexOf(".html");
        debugger
        myHistory.hisKey = window.location.pathname.substr(pos + 1, pos1 - pos) + "html";
        myHistory.hisHref = window.location.href;
        MyHistory.addHistory(myHistory);
    },
    clear: function() {
        sessionStorage.removeItem("myHistory");
    },
    historychange: function(key, value) {
        var rs = "";
        var inc = -1;
        if (sessionStorage.myHistory == null || sessionStorage.myHistory == "") {
            return;
        }
        var arr = JSON.parse(sessionStorage.myHistory);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].hisKey == key) {
                arr[i].hisHref = value;
                break;
            }
        }
        sessionStorage.myHistory = JSON.stringify(arr);

    },
    backdefault_back: function(back_key) {
        var href = MyHistory.backdefault_get(back_key);
        window.location.href = href;
    },
    backdefault_add: function(value_back) {
        if (sessionStorage.myhistory_default == null) {
            var arr = new Array();
            arr.push(value_back);
            sessionStorage.myhistory_default = JSON.stringify(arr);
        } else {
            var isExit = false;
            var arr = JSON.parse(sessionStorage.myhistory_default);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].hisKey == value_back.hisKey) {
                    arr[i].hisHref = value_back.hisHref;
                    isExit = true;
                    break;
                }
            }
            if (!isExit) {
                arr.push(value_back);
            }
            sessionStorage.myhistory_default = JSON.stringify(arr);
        }
    },
    backdefault_get: function(back_key) {
        var rs = "";
        var inc = -1;
        var arr = JSON.parse(sessionStorage.myhistory_default);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].hisKey == back_key) {
                rs = arr[i].hisHref;
                inc = i;
                break;
            }
        }
        if (inc > -1) {
            arr.remove(inc);
        }
        sessionStorage.myhistory_default = JSON.stringify(arr);
        return rs;
    },
    backdefault: function(back_key) {
        var myHistory = Object.create(MyHistory);
        myHistory.hisKey = back_key;
        myHistory.hisHref = window.location.href;

        MyHistory.backdefault_add(myHistory);
    },
    backdefault_change: function(back_key, back_key_change) {
        var arr = JSON.parse(sessionStorage.myhistory_default);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].hisKey == back_key) {
                arr[i].hisKey = back_key_change;
                break;
            }
        }
        sessionStorage.myhistory_default = JSON.stringify(arr);
    },
    /**
     * 修改历史记录的参数值 可添加修改
     * @param {Object} key 参数
     * @param {Object} value 参数值
     * @param {Object} html 需要修改的HTML 不传默认当前的
     */
    changeHistoryHrefValue: function changeHistory(key, value, html) {
        // 替换key值为空 返回
        if (!isNull(key)) return;
        // 历史记录为空 返回
        if (!isNull(sessionStorage.myHistory)) return;
        // value值为空 默认为''
        value = isNull(value) ? value : '';
        var hisarr = JSON.parse(sessionStorage.myHistory);
        // html 为空 默认为当前的html
        if (!isNull(html)) {
            var pos = window.location.pathname.lastIndexOf("/");
            var pos1 = window.location.pathname.indexOf(".html");
            html = window.location.pathname.substr(pos + 1, pos1 - pos) + "html";
        }
        // html不存在 直接返回
        var indexUrl = MyHistory.getHistory(html);
        if (indexUrl == -1) return;
        // 获取值
        var href = hisarr[indexUrl].hisHref;
        href = decodeURIComponent(href);
        // 是否有问号 没有直接添加
        var havemark = href.indexOf("?");
        // 是否有这个key，没有直接拼在最后
        var havekey = href.indexOf(key);
        if (havemark == -1) { // 没有问号
            href += '?' + key + '=' + value;
        } else if (havekey == -1) { // 没有这个key
            href = href + "&" + key + "=" + value;
        } else { // 替换当前的值
            var subarr = href.split(key);
            var lasthref = subarr[1];
            var lasthrefindex = lasthref.indexOf('&');
            if (lasthrefindex == -1) {
                href = subarr[0] + key + "=" + value
            } else {
                href = subarr[0] + key + "=" + value + lasthref.substring(lasthrefindex);
            }
        }
        var hrefarr = href.split("?");
        href = hrefarr[0] + '?' + encodeURIComponent(hrefarr[1]);
        MyHistory.historychange(html, href);

    }

}
export default MyHistory