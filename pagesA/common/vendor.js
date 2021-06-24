(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/common/vendor" ], {
    "01b2": function(e, r) {
        e.exports = {
            error: "",
            check: function(e, r) {
                e = JSON.stringify(e);
                for (var t = JSON.parse(e), n = 0; n < r.length; n++) {
                    if (!r[n].checkType) return !0;
                    if (!r[n].name) return !0;
                    if (!r[n].errorMsg) return !0;
                    if (!t[r[n].name] || "" == t[r[n].name]) return this.error = r[n].errorMsg, !1;
                    switch ("string" == typeof t[r[n].name] && (t[r[n].name] = t[r[n].name].replace(/\s/g, "")), 
                    r[n].checkType) {
                      case "string":
                        var a = new RegExp("^.{" + r[n].checkRule + "}$");
                        if (!a.test(t[r[n].name])) return this.error = r[n].errorMsg, !1;
                        break;

                      case "int":
                        var s = r[n].checkRule.split(",");
                        if (r.length < 2 ? (s[0] = Number(s[0]) - 1, s[1] = "") : (s[0] = Number(s[0]) - 1, 
                        s[1] = Number(s[1]) - 1), !(a = new RegExp("^(-[1-9]|[1-9])[0-9]{" + s[0] + "," + s[1] + "}$")).test(t[r[n].name])) return this.error = r[n].errorMsg, 
                        !1;
                        break;

                      case "between":
                        if (!this.isNumber(t[r[n].name])) return this.error = r[n].errorMsg, !1;
                        var o = r[n].checkRule.split(",");
                        if (o[0] = Number(o[0]), o[1] = Number(o[1]), t[r[n].name] > o[1] || t[r[n].name] < o[0]) return this.error = r[n].errorMsg, 
                        !1;
                        break;

                      case "betweenD":
                        if (!(a = /^-?\d+$/).test(t[r[n].name])) return this.error = r[n].errorMsg, !1;
                        if ((o = r[n].checkRule.split(","))[0] = Number(o[0]), o[1] = Number(o[1]), t[r[n].name] > o[1] || t[r[n].name] < o[0]) return this.error = r[n].errorMsg, 
                        !1;
                        break;

                      case "betweenF":
                        if (!(a = /^-?[0-9][0-9]?.+[0-9]+$/).test(t[r[n].name])) return this.error = r[n].errorMsg, 
                        !1;
                        if ((o = r[n].checkRule.split(","))[0] = Number(o[0]), o[1] = Number(o[1]), t[r[n].name] > o[1] || t[r[n].name] < o[0]) return this.error = r[n].errorMsg, 
                        !1;
                        break;

                      case "same":
                        if (t[r[n].name] != r[n].checkRule) return this.error = r[n].errorMsg, !1;
                        break;

                      case "notsame":
                        if (t[r[n].name] == r[n].checkRule) return this.error = r[n].errorMsg, !1;
                        break;

                      case "email":
                        if (!(a = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(t[r[n].name])) return this.error = r[n].errorMsg, 
                        !1;
                        break;

                      case "phoneno":
                        if (!(a = /^1[0-9]{10,10}$/).test(t[r[n].name])) return this.error = r[n].errorMsg, 
                        !1;
                        break;

                      case "zipcode":
                        if (!(a = /^[0-9]{6}$/).test(t[r[n].name])) return this.error = r[n].errorMsg, !1;
                        break;

                      case "reg":
                        if (!(a = new RegExp(r[n].checkRule)).test(t[r[n].name])) return this.error = r[n].errorMsg, 
                        !1;
                        break;

                      case "in":
                        if (-1 == r[n].checkRule.indexOf(t[r[n].name])) return this.error = r[n].errorMsg, 
                        !1;
                        break;

                      case "notnull":
                        if (null == t[r[n].name] || t[r[n].name].length < 1) return this.error = r[n].errorMsg, 
                        !1;
                        break;

                      case "samewith":
                        if (t[r[n].name] != t[r[n].checkRule]) return this.error = r[n].errorMsg, !1;
                        break;

                      case "numbers":
                        if (!(a = new RegExp("^[0-9]{" + r[n].checkRule + "}$")).test(t[r[n].name])) return this.error = r[n].errorMsg, 
                        !1;
                    }
                }
                return !0;
            },
            isNumber: function(e) {
                return NaN != (e = Number(e));
            }
        };
    },
    "730d": function(e, r) {
        e.exports = {
            currentTime: function(e, r) {
                var t = new Date().getTime();
                return r && (t += r), e ? this.formatDateTime(t / 1e3, "str") : t;
            },
            formatDateTime: function(e, r) {
                e = parseInt(e);
                var t = new Date();
                e < 9e10 ? t.setTime(1e3 * e) : t.setTime(e);
                var n = t.getFullYear(), a = (a = t.getMonth() + 1) < 10 ? "0" + a : a, s = (s = t.getDate()) < 10 ? "0" + s : s, o = (o = t.getHours()) < 10 ? "0" + o : o, e = (e = t.getMinutes()) < 10 ? "0" + e : e, t = (t = t.getSeconds()) < 10 ? "0" + t : t;
                return "str" == r ? n + "-" + a + "-" + s + " " + o + ":" + e + ":" + t : [ n, a, s, o, e, t ];
            },
            dateTimeToTimeStamp: function(e) {
                var r = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);
                if (null == r) {
                    var t = e.match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);
                    if (null == t) return console.log("时间格式错误 E001"), !1;
                    var n = parseInt(t[3]), a = parseInt(t[1]), s = parseInt(t[2]), o = parseInt(t[4]), i = parseInt(t[5]), t = parseInt(t[6]);
                } else n = parseInt(r[1]), a = parseInt(r[2]), s = parseInt(r[3]), o = parseInt(r[4]), 
                i = parseInt(r[5]), t = parseInt(r[6]);
                return n < 1e3 || o < 0 || 24 < o || i < 0 || 60 < i || t < 0 || 60 < t ? (console.log("时间格式错误"), 
                !1) : Date.parse(new Date(n, a - 1, s, o, i, t)) / 1e3;
            },
            fromTimer: function(e) {
                var r = new Date().getTime() - 1e3 * e;
                return (r = parseInt(r / 1e3)) < 180 ? "刚刚" : 180 <= r && r < 3600 ? parseInt(r / 60) + "分钟前" : 3600 <= r && r < 86400 ? parseInt(r / 3600) + "小时前" : 86400 <= r && r < 2592e3 ? parseInt(r / 86400) + "天前" : this.formatDateTime(e, "str");
            }
        };
    },
    ca02: function(e, t) {
        !function() {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var e = t.DEFAULT_FOOD_LIST = [ "火锅", "粤菜", "沙县小吃", "蒸菜", "酸辣粉", "涮羊肉", "油泼面", "干拌面", "湘菜", "东北菜" ], r = (t.eatTextColor = [ "#F29B76", "#F39800", "#993E3D", "#FFD986", "#AD9158", "#B96C0C", "#D1D8A0", "#A6B888", "#F74021" ], 
            t.StorageKey = {
                FOOD_LIST: "FOOD_LIST"
            }, t.generateRandomFood = function() {
                return e[Math.floor(e.length * Math.random())];
            }, t.generateRandomName = function() {
                return r[Math.floor(r.length * Math.random())] + "*";
            }, [ "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹" ]);
        }();
    }
} ]);