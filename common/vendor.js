var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    "055b": function(e, l) {
        e.exports = {
            base64_encode: function(e) {
                for (var l, a, t, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, u = e.length, o = ""; r < u; ) {
                    if (l = 255 & e.charCodeAt(r++), r == u) {
                        o += n.charAt(l >> 2), o += n.charAt((3 & l) << 4), o += "==";
                        break;
                    }
                    if (a = e.charCodeAt(r++), r == u) {
                        o += n.charAt(l >> 2), o += n.charAt((3 & l) << 4 | (240 & a) >> 4), o += n.charAt((15 & a) << 2), 
                        o += "=";
                        break;
                    }
                    t = e.charCodeAt(r++), o += n.charAt(l >> 2), o += n.charAt((3 & l) << 4 | (240 & a) >> 4), 
                    o += n.charAt((15 & a) << 2 | (192 & t) >> 6), o += n.charAt(63 & t);
                }
                return o;
            },
            base64_decode: function(e) {
                for (var l, a, t, n, r = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1), u = 0, o = e.length, i = ""; u < o; ) {
                    for (;l = r[255 & e.charCodeAt(u++)], u < o && -1 == l; ) ;
                    if (-1 == l) break;
                    for (;a = r[255 & e.charCodeAt(u++)], u < o && -1 == a; ) ;
                    if (-1 == a) break;
                    i += String.fromCharCode(l << 2 | (48 & a) >> 4);
                    do {
                        if (61 == (t = 255 & e.charCodeAt(u++))) return i;
                    } while (t = r[t], u < o && -1 == t);
                    if (-1 == t) break;
                    i += String.fromCharCode((15 & a) << 4 | (60 & t) >> 2);
                    do {
                        if (61 == (n = 255 & e.charCodeAt(u++))) return i;
                    } while (n = r[n], u < o && -1 == n);
                    if (-1 == n) break;
                    i += String.fromCharCode((3 & t) << 6 | n);
                }
                return i;
            }
        };
    },
    "0cda": function(e, l) {},
    "0d88": function d88(module, exports, __webpack_require__) {
        (function(uni) {
            var _base = __webpack_require__("055b"), _md = _interopRequireDefault(__webpack_require__("926e"));
            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function _defineProperty(e, l, a) {
                return l in e ? Object.defineProperty(e, l, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[l] = a, e;
            }
            var util = {};
            function getQuery(e) {
                var l = [];
                if (-1 != e.indexOf("?")) for (var a = e.split("?")[1].split("&"), t = 0; t < a.length; t++) a[t].split("=")[0] && unescape(a[t].split("=")[1]) && (l[t] = {
                    name: a[t].split("=")[0],
                    value: unescape(a[t].split("=")[1])
                });
                return l;
            }
            function getUrlParam(e, l) {
                l = new RegExp("(^|&)" + l + "=([^&]*)(&|$)"), l = e.split("?")[1].match(l);
                return null != l ? unescape(l[2]) : null;
            }
            function getSign(e, l, a) {
                var t = __webpack_require__("eb84"), n = __webpack_require__("926e"), r = "", u = getUrlParam(e, "sign");
                if (u || l && l.sign) return !1;
                if (e && (r = getQuery(e)), l) {
                    var o, i = [];
                    for (o in l) o && l[o] && (i = i.concat({
                        name: o,
                        value: l[o]
                    }));
                    r = r.concat(i);
                }
                r = t.sortBy(r, "name"), r = t.uniq(r, !0, "name");
                for (var s = "", v = 0; v < r.length; v++) r[v] && r[v].name && r[v].value && (s += r[v].name + "=" + r[v].value, 
                v < r.length - 1 && (s += "&"));
                return n(s + (a = a || getApp().globalData.siteInfo.token));
            }
            util.base64_encode = function(e) {
                return (0, _base.base64_encode)(e);
            }, util.base64_decode = function(e) {
                return (0, _base.base64_decode)(e);
            }, util.md5 = function(e) {
                return (0, _md.default)(e);
            }, util.url = function(e, l) {
                var a = getApp(), t = a.globalData.siteInfo.siteroot + "?i=" + a.globalData.siteInfo.uniacid + "&t=" + a.globalData.siteInfo.multiid + "&v=" + a.globalData.siteInfo.version + "&from=wxapp&";
                if (e && ((e = e.split("/"))[0] && (t += "c=" + e[0] + "&"), e[1] && (t += "a=" + e[1] + "&"), 
                e[2] && (t += "do=" + e[2] + "&")), l && "object" === (void 0 === l ? "undefined" : _typeof(l))) for (var n in l) n && l.hasOwnProperty(n) && l[n] && (t += n + "=" + l[n] + "&");
                return t;
            }, util.getSign = function(e, l, a) {
                return getSign(e, l, a);
            }, util.request = function(a) {
                __webpack_require__("eb84");
                var e = __webpack_require__("926e"), t = getApp();
                (a = a || {}).cachetime = a.cachetime || 0, a.showLoading = void 0 === a.showLoading || a.showLoading;
                var l = uni.getStorageSync("userInfo").sessionid, n = a.url;
                -1 == n.indexOf("http://") && -1 == n.indexOf("https://") && (n = util.url(n)), 
                getUrlParam(n, "state") || a.data && a.data.state || !l || (n = n + "&state=we7sid-" + l), 
                a.data && a.data.m || !(r = getCurrentPages()).length || (r = r[getCurrentPages().length - 1]) && r.__route__ && (n = n + "&m=" + r.__route__.split("/")[0]);
                var r = getSign(n, a.data);
                if (r && (n = n + "&sign=" + r), !n) return !1;
                if (uni.showNavigationBarLoading(), a.showLoading && util.showLoading(), a.cachetime) {
                    var u = e(n), o = uni.getStorageSync(u), i = Date.parse(new Date());
                    if (o && o.data) {
                        if (o.expire > i) return a.complete && "function" == typeof a.complete && a.complete(o), 
                        a.success && "function" == typeof a.success && a.success(o), console.log("cache:" + n), 
                        uni.hideLoading(), uni.hideNavigationBarLoading(), !0;
                        uni.removeStorageSync(u);
                    }
                }
                uni.request((_defineProperty(o = {
                    url: n,
                    data: a.data || {},
                    header: a.header || {},
                    method: a.method || "GET"
                }, "header", {
                    "content-type": "application/x-www-form-urlencoded"
                }), _defineProperty(o, "success", function(e) {
                    if (uni.hideNavigationBarLoading(), uni.hideLoading(), e.data.errno) {
                        if ("41009" == e.data.errno) return uni.setStorageSync("userInfo", ""), void util.getUserInfo(function() {
                            util.request(a);
                        });
                        var l;
                        a.fail && "function" == typeof a.fail ? a.fail(e) : e.data.message && (l = null != e.data.data && e.data.data.redirect ? e.data.data.redirect : "", 
                        t.globalData.util.message(e.data.message, l, "error"));
                    } else a.success && "function" == typeof a.success && a.success(e), a.cachetime && (e = {
                        data: e.data,
                        expire: i + 1e3 * a.cachetime
                    }, uni.setStorageSync(u, e));
                }), _defineProperty(o, "fail", function(e) {
                    uni.hideNavigationBarLoading(), uni.hideLoading();
                    var l = __webpack_require__("926e")(n), l = uni.getStorageSync(l);
                    if (l && l.data) return a.success && "function" == typeof a.success && a.success(l), 
                    console.log("failreadcache:" + n), !0;
                    a.fail && "function" == typeof a.fail && a.fail(e);
                }), _defineProperty(o, "complete", function(e) {
                    a.complete && "function" == typeof a.complete && a.complete(e);
                }), o));
            }, util.getUserInfo = function(a) {
                function e() {
                    console.log("start login");
                    var l = {
                        sessionid: "",
                        wxInfo: "",
                        memberInfo: ""
                    };
                    uni.login({
                        success: function(e) {
                            util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e.code
                                },
                                cachetime: 0,
                                success: function(e) {
                                    e.data.errno || (l.sessionid = e.data.data.sessionid, uni.setStorageSync("userInfo", l), 
                                    uni.getUserInfo({
                                        success: function(e) {
                                            l.wxInfo = e.userInfo, uni.setStorageSync("userInfo", l), util.request({
                                                url: "auth/session/userinfo",
                                                data: {
                                                    signature: e.signature,
                                                    rawData: e.rawData,
                                                    iv: e.iv,
                                                    encryptedData: e.encryptedData
                                                },
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                cachetime: 0,
                                                success: function(e) {
                                                    e.data.errno || (l.memberInfo = e.data.data, uni.setStorageSync("userInfo", l)), 
                                                    "function" == typeof a && a(l);
                                                }
                                            });
                                        },
                                        fail: function() {
                                            "function" == typeof a && a(l);
                                        },
                                        complete: function() {}
                                    }));
                                }
                            });
                        },
                        fail: function() {
                            uni.showModal({
                                title: "获取信息失败",
                                content: "请允许授权以便为您提供给服务",
                                success: function(e) {
                                    e.confirm && util.getUserInfo();
                                }
                            });
                        }
                    });
                }
                var l = uni.getStorageSync("userInfo");
                l.sessionid ? uni.checkSession({
                    success: function() {
                        "function" == typeof a && a(l);
                    },
                    fail: function() {
                        l.sessionid = "", console.log("relogin"), uni.removeStorageSync("userInfo"), e();
                    }
                }) : e();
            }, util.navigateBack = function(l) {
                var e, a = l.delta || 1;
                l.data && ((e = (e = getCurrentPages())[e.length - (a + 1)]).pageForResult ? e.pageForResult(l.data) : e = l.data), 
                uni.navigateBack({
                    delta: a,
                    success: function(e) {
                        "function" == typeof l.success && l.success(e);
                    },
                    fail: function(e) {
                        "function" == typeof l.fail && l.fail(e);
                    },
                    complete: function() {
                        "function" == typeof l.complete && l.complete();
                    }
                });
            }, util.footer = function(e) {
                var l, e = e, a = getApp().globalData.tabBar;
                for (l in a.list) a.list[l].pageUrl = a.list[l].pagePath.replace(/(\?|#)[^"]*/g, "");
                e.tabBar = a, e.tabBar.thisurl = e.__route__;
            }, util.message = function(e, l, a) {
                if (!e) return !0;
                var t, n, r;
                "object" == (void 0 === e ? "undefined" : _typeof(e)) && (l = e.redirect, a = e.type, 
                e = e.title), l && (t = l.substring(0, 9), r = n = "", "navigate:" == t ? (r = "navigateTo", 
                n = l.substring(9)) : "redirect:" == t ? (r = "redirectTo", n = l.substring(9)) : (n = l, 
                r = "redirectTo")), console.log(n), "success" == (a = a || "success") ? uni.showToast({
                    title: e,
                    icon: "success",
                    duration: 2e3,
                    mask: !!n,
                    complete: function() {
                        n && setTimeout(function() {
                            uni[r]({
                                url: n
                            });
                        }, 1800);
                    }
                }) : "error" == a && uni.showModal({
                    title: "系统信息",
                    content: e,
                    showCancel: !1,
                    complete: function() {
                        n && uni[r]({
                            url: n
                        });
                    }
                });
            }, util.user = util.getUserInfo, util.showLoading = function() {
                uni.getStorageSync("isShowLoading") && (uni.hideLoading(), uni.setStorageSync("isShowLoading", !1)), 
                uni.showLoading({
                    title: "加载中",
                    complete: function() {
                        uni.setStorageSync("isShowLoading", !0);
                    },
                    fail: function() {
                        uni.setStorageSync("isShowLoading", !1);
                    }
                });
            }, util.showImage = function(e) {
                e = e ? e.currentTarget.dataset.preview : "";
                if (!e) return !1;
                uni.previewImage({
                    urls: [ e ]
                });
            }, util.parseContent = function(e) {
                if (!e) return e;
                var l = e.match(new RegExp([ "\ud83c[\udf00-\udfff]", "\ud83d[\udc00-\ude4f]", "\ud83d[\ude80-\udeff]" ].join("|"), "g"));
                if (l) for (var a in l) e = e.replace(l[a], "[U+" + l[a].codePointAt(0).toString(16).toUpperCase() + "]");
                return e;
            }, util.date = function() {
                this.isLeapYear = function(e) {
                    return 0 == e.getYear() % 4 && (e.getYear() % 100 != 0 || e.getYear() % 400 == 0);
                }, this.dateToStr = function(e, l) {
                    e = arguments[0] || "yyyy-MM-dd HH:mm:ss", l = arguments[1] || new Date();
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/yyyy|YYYY/, l.getFullYear())).replace(/yy|YY/, 9 < l.getYear() % 100 ? (l.getYear() % 100).toString() : "0" + l.getYear() % 100)).replace(/MM/, 9 < l.getMonth() ? l.getMonth() + 1 : "0" + (l.getMonth() + 1))).replace(/M/g, l.getMonth())).replace(/w|W/g, [ "日", "一", "二", "三", "四", "五", "六" ][l.getDay()])).replace(/dd|DD/, 9 < l.getDate() ? l.getDate().toString() : "0" + l.getDate())).replace(/d|D/g, l.getDate())).replace(/hh|HH/, 9 < l.getHours() ? l.getHours().toString() : "0" + l.getHours())).replace(/h|H/g, l.getHours())).replace(/mm/, 9 < l.getMinutes() ? l.getMinutes().toString() : "0" + l.getMinutes())).replace(/m/g, l.getMinutes())).replace(/ss|SS/, 9 < l.getSeconds() ? l.getSeconds().toString() : "0" + l.getSeconds())).replace(/s|S/g, l.getSeconds());
                }, this.dateAdd = function(e, l, a) {
                    switch (a = arguments[2] || new Date(), e) {
                      case "s":
                        return new Date(a.getTime() + 1e3 * l);

                      case "n":
                        return new Date(a.getTime() + 6e4 * l);

                      case "h":
                        return new Date(a.getTime() + 36e5 * l);

                      case "d":
                        return new Date(a.getTime() + 864e5 * l);

                      case "w":
                        return new Date(a.getTime() + 6048e5 * l);

                      case "m":
                        return new Date(a.getFullYear(), a.getMonth() + l, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds());

                      case "y":
                        return new Date(a.getFullYear() + l, a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds());
                    }
                }, this.dateDiff = function(e, l, a) {
                    switch (e) {
                      case "s":
                        return parseInt((a - l) / 1e3);

                      case "n":
                        return parseInt((a - l) / 6e4);

                      case "h":
                        return parseInt((a - l) / 36e5);

                      case "d":
                        return parseInt((a - l) / 864e5);

                      case "w":
                        return parseInt((a - l) / 6048e5);

                      case "m":
                        return a.getMonth() + 1 + 12 * (a.getFullYear() - l.getFullYear()) - (l.getMonth() + 1);

                      case "y":
                        return a.getFullYear() - l.getFullYear();
                    }
                }, this.strToDate = function(dateStr) {
                    var data = dateStr, reCat = /(\d{1,4})/gm, t = data.match(reCat);
                    return t[1] = t[1] - 1, eval("var d = new Date(" + t.join(",") + ");"), d;
                }, this.strFormatToDate = function(e, l) {
                    var a = 0, t = -1, n = l.length;
                    -1 < (t = e.indexOf("yyyy")) && t < n && (a = l.substr(t, 4));
                    var r = 0;
                    -1 < (t = e.indexOf("MM")) && t < n && (r = parseInt(l.substr(t, 2)) - 1);
                    var u = 0;
                    -1 < (t = e.indexOf("dd")) && t < n && (u = parseInt(l.substr(t, 2)));
                    var o = 0;
                    (-1 < (t = e.indexOf("HH")) || 1 < (t = e.indexOf("hh"))) && t < n && (o = parseInt(l.substr(t, 2)));
                    var i = 0;
                    -1 < (t = e.indexOf("mm")) && t < n && (i = l.substr(t, 2));
                    var s = 0;
                    return -1 < (t = e.indexOf("ss")) && t < n && (s = l.substr(t, 2)), new Date(a, r, u, o, i, s);
                }, this.dateToLong = function(e) {
                    return e.getTime();
                }, this.longToDate = function(e) {
                    return new Date(e);
                }, this.isDate = function(e, l) {
                    null == l && (l = "yyyyMMdd");
                    var a = l.indexOf("yyyy");
                    if (-1 == a) return !1;
                    var t = e.substring(a, a + 4), a = l.indexOf("MM");
                    if (-1 == a) return !1;
                    a = e.substring(a, a + 2), l = l.indexOf("dd");
                    if (-1 == l) return !1;
                    l = e.substring(l, l + 2);
                    return !(!isNumber(t) || "2100" < t || t < "1900" || !isNumber(a) || "12" < a || a < "01" || l > getMaxDay(t, a) || l < "01");
                }, this.getMaxDay = function(e, l) {
                    return 4 == l || 6 == l || 9 == l || 11 == l ? "30" : 2 == l ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? "29" : "28" : "31";
                }, this.isNumber = function(e) {
                    return /^\d+$/g.test(e);
                }, this.toArray = function(e) {
                    e = arguments[0] || new Date();
                    var l = Array();
                    return l[0] = e.getFullYear(), l[1] = e.getMonth(), l[2] = e.getDate(), l[3] = e.getHours(), 
                    l[4] = e.getMinutes(), l[5] = e.getSeconds(), l;
                }, this.datePart = function(e, l) {
                    l = arguments[1] || new Date();
                    var a = "";
                    switch (e) {
                      case "y":
                        a = l.getFullYear();
                        break;

                      case "M":
                        a = l.getMonth() + 1;
                        break;

                      case "d":
                        a = l.getDate();
                        break;

                      case "w":
                        a = [ "日", "一", "二", "三", "四", "五", "六" ][l.getDay()];
                        break;

                      case "ww":
                        a = l.WeekNumOfYear();
                        break;

                      case "h":
                        a = l.getHours();
                        break;

                      case "m":
                        a = l.getMinutes();
                        break;

                      case "s":
                        a = l.getSeconds();
                    }
                    return a;
                }, this.maxDayOfDate = function(e) {
                    (e = arguments[0] || new Date()).setDate(1), e.setMonth(e.getMonth() + 1);
                    e = e.getTime() - 864e5;
                    return new Date(e).getDate();
                };
            }, module.exports = util;
        }).call(this, __webpack_require__("543d").default);
    },
    "10cd": function(e, l, a) {
        (function(o) {
            e.exports = {
                get: function(e, l, a, t) {
                    o.request({
                        url: e,
                        data: l,
                        method: "GET",
                        dataType: "json",
                        header: t,
                        success: function(e) {
                            a(e.data);
                        },
                        fail: function() {
                            o.showToast({
                                title: "网络请求失败",
                                icon: "none"
                            });
                        }
                    });
                },
                post: function(e, l, a, t, n) {
                    switch (a) {
                      case "form":
                        var r = {
                            "content-type": "application/x-www-form-urlencoded"
                        };
                        break;

                      case "json":
                        r = {
                            "content-type": "application/json"
                        };
                        break;

                      default:
                        r = {
                            "content-type": "application/json"
                        };
                    }
                    for (var u in t) r[u] = t[u];
                    o.request({
                        url: e,
                        data: l,
                        method: "POST",
                        dataType: "json",
                        header: r,
                        success: function(e) {
                            n(e.data);
                        },
                        fail: function() {
                            o.showToast({
                                title: "网络请求失败",
                                icon: "none"
                            });
                        }
                    });
                }
            };
        }).call(this, a("543d").default);
    },
    "3f31": function(e, l) {
        var a, t, n, s, r, i, T = function(o) {
            function a() {}
            var e = {}, l = e.lib = {}, t = l.Base = {
                extend: function(e) {
                    a.prototype = this;
                    var l = new a();
                    return e && l.mixIn(e), l.hasOwnProperty("init") || (l.init = function() {
                        l.$super.init.apply(this, arguments);
                    }), (l.init.prototype = l).$super = this, l;
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e;
                },
                init: function() {},
                mixIn: function(e) {
                    for (var l in e) e.hasOwnProperty(l) && (this[l] = e[l]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString);
                },
                clone: function() {
                    return this.init.prototype.extend(this);
                }
            }, i = l.WordArray = t.extend({
                init: function(e, l) {
                    e = this.words = e || [], this.sigBytes = null != l ? l : 4 * e.length;
                },
                toString: function(e) {
                    return (e || r).stringify(this);
                },
                concat: function(e) {
                    var l = this.words, a = e.words, t = this.sigBytes;
                    if (e = e.sigBytes, this.clamp(), t % 4) for (var n = 0; n < e; n++) l[t + n >>> 2] |= (a[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 24 - (t + n) % 4 * 8; else if (65535 < a.length) for (n = 0; n < e; n += 4) l[t + n >>> 2] = a[n >>> 2]; else l.push.apply(l, a);
                    return this.sigBytes += e, this;
                },
                clamp: function() {
                    var e = this.words, l = this.sigBytes;
                    e[l >>> 2] &= 4294967295 << 32 - l % 4 * 8, e.length = o.ceil(l / 4);
                },
                clone: function() {
                    var e = t.clone.call(this);
                    return e.words = this.words.slice(0), e;
                },
                random: function(e) {
                    for (var l = [], a = 0; a < e; a += 4) l.push(4294967296 * o.random() | 0);
                    return new i.init(l, e);
                }
            }), n = e.enc = {}, r = n.Hex = {
                stringify: function(e) {
                    var l = e.words;
                    e = e.sigBytes;
                    for (var a = [], t = 0; t < e; t++) {
                        var n = l[t >>> 2] >>> 24 - t % 4 * 8 & 255;
                        a.push((n >>> 4).toString(16)), a.push((15 & n).toString(16));
                    }
                    return a.join("");
                },
                parse: function(e) {
                    for (var l = e.length, a = [], t = 0; t < l; t += 2) a[t >>> 3] |= parseInt(e.substr(t, 2), 16) << 24 - t % 8 * 4;
                    return new i.init(a, l / 2);
                }
            }, u = n.Latin1 = {
                stringify: function(e) {
                    var l = e.words;
                    e = e.sigBytes;
                    for (var a = [], t = 0; t < e; t++) a.push(String.fromCharCode(l[t >>> 2] >>> 24 - t % 4 * 8 & 255));
                    return a.join("");
                },
                parse: function(e) {
                    for (var l = e.length, a = [], t = 0; t < l; t++) a[t >>> 2] |= (255 & e.charCodeAt(t)) << 24 - t % 4 * 8;
                    return new i.init(a, l);
                }
            }, s = n.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(u.stringify(e)));
                    } catch (e) {
                        throw Error("Malformed UTF-8 data");
                    }
                },
                parse: function(e) {
                    return u.parse(unescape(encodeURIComponent(e)));
                }
            }, v = l.BufferedBlockAlgorithm = t.extend({
                reset: function() {
                    this._data = new i.init(), this._nDataBytes = 0;
                },
                _append: function(e) {
                    "string" == typeof e && (e = s.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                },
                _process: function(e) {
                    var l = this._data, a = l.words, t = l.sigBytes, n = this.blockSize, r = t / (4 * n);
                    if (e = (r = e ? o.ceil(r) : o.max((0 | r) - this._minBufferSize, 0)) * n, t = o.min(4 * e, t), 
                    e) {
                        for (var u = 0; u < e; u += n) this._doProcessBlock(a, u);
                        u = a.splice(0, e), l.sigBytes -= t;
                    }
                    return new i.init(u, t);
                },
                clone: function() {
                    var e = t.clone.call(this);
                    return e._data = this._data.clone(), e;
                },
                _minBufferSize: 0
            });
            l.Hasher = v.extend({
                cfg: t.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset();
                },
                reset: function() {
                    v.reset.call(this), this._doReset();
                },
                update: function(e) {
                    return this._append(e), this._process(), this;
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function(a) {
                    return function(e, l) {
                        return new a.init(l).finalize(e);
                    };
                },
                _createHmacHelper: function(a) {
                    return function(e, l) {
                        return new c.HMAC.init(a, l).finalize(e);
                    };
                }
            });
            var c = e.algo = {};
            return e;
        }(Math);
        i = T.lib.WordArray, T.enc.Base64 = {
            stringify: function(e) {
                var l = e.words, a = e.sigBytes, t = this._map;
                e.clamp(), e = [];
                for (var n = 0; n < a; n += 3) for (var r = (l[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 16 | (l[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255) << 8 | l[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, u = 0; u < 4 && n + .75 * u < a; u++) e.push(t.charAt(r >>> 6 * (3 - u) & 63));
                if (l = t.charAt(64)) for (;e.length % 4; ) e.push(l);
                return e.join("");
            },
            parse: function(e) {
                var l = e.length, a = this._map, t = a.charAt(64);
                !t || -1 != (t = e.indexOf(t)) && (l = t), t = [];
                for (var n, r, u = 0, o = 0; o < l; o++) o % 4 && (n = a.indexOf(e.charAt(o - 1)) << o % 4 * 2, 
                r = a.indexOf(e.charAt(o)) >>> 6 - o % 4 * 2, t[u >>> 2] |= (n | r) << 24 - u % 4 * 8, 
                u++);
                return i.create(t, u);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, function(r) {
            function O(e, l, a, t, n, r, u) {
                return ((e = e + (l & a | ~l & t) + n + u) << r | e >>> 32 - r) + l;
            }
            function k(e, l, a, t, n, r, u) {
                return ((e = e + (l & t | a & ~t) + n + u) << r | e >>> 32 - r) + l;
            }
            function x(e, l, a, t, n, r, u) {
                return ((e = e + (l ^ a ^ t) + n + u) << r | e >>> 32 - r) + l;
            }
            function A(e, l, a, t, n, r, u) {
                return ((e = e + (a ^ (l | ~t)) + n + u) << r | e >>> 32 - r) + l;
            }
            for (var e = T, l = e.lib, a = l.WordArray, t = l.Hasher, E = (l = e.algo, []), n = 0; n < 64; n++) E[n] = 4294967296 * r.abs(r.sin(n + 1)) | 0;
            l = l.MD5 = t.extend({
                _doReset: function() {
                    this._hash = new a.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(e, l) {
                    for (var a = 0; a < 16; a++) {
                        var t = l + a, n = e[t];
                        e[t] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                    }
                    a = this._hash.words, t = e[l + 0], n = e[l + 1];
                    var r = e[l + 2], u = e[l + 3], o = e[l + 4], i = e[l + 5], s = e[l + 6], v = e[l + 7], c = e[l + 8], b = e[l + 9], f = e[l + 10], p = e[l + 11], h = e[l + 12], d = e[l + 13], y = e[l + 14], g = e[l + 15], _ = O(_ = a[0], S = a[1], w = a[2], m = a[3], t, 7, E[0]), m = O(m, _, S, w, n, 12, E[1]), w = O(w, m, _, S, r, 17, E[2]), S = O(S, w, m, _, u, 22, E[3]);
                    _ = O(_, S, w, m, o, 7, E[4]), m = O(m, _, S, w, i, 12, E[5]), w = O(w, m, _, S, s, 17, E[6]), 
                    S = O(S, w, m, _, v, 22, E[7]), _ = O(_, S, w, m, c, 7, E[8]), m = O(m, _, S, w, b, 12, E[9]), 
                    w = O(w, m, _, S, f, 17, E[10]), S = O(S, w, m, _, p, 22, E[11]), _ = O(_, S, w, m, h, 7, E[12]), 
                    m = O(m, _, S, w, d, 12, E[13]), w = O(w, m, _, S, y, 17, E[14]), _ = k(_, S = O(S, w, m, _, g, 22, E[15]), w, m, n, 5, E[16]), 
                    m = k(m, _, S, w, s, 9, E[17]), w = k(w, m, _, S, p, 14, E[18]), S = k(S, w, m, _, t, 20, E[19]), 
                    _ = k(_, S, w, m, i, 5, E[20]), m = k(m, _, S, w, f, 9, E[21]), w = k(w, m, _, S, g, 14, E[22]), 
                    S = k(S, w, m, _, o, 20, E[23]), _ = k(_, S, w, m, b, 5, E[24]), m = k(m, _, S, w, y, 9, E[25]), 
                    w = k(w, m, _, S, u, 14, E[26]), S = k(S, w, m, _, c, 20, E[27]), _ = k(_, S, w, m, d, 5, E[28]), 
                    m = k(m, _, S, w, r, 9, E[29]), w = k(w, m, _, S, v, 14, E[30]), _ = x(_, S = k(S, w, m, _, h, 20, E[31]), w, m, i, 4, E[32]), 
                    m = x(m, _, S, w, c, 11, E[33]), w = x(w, m, _, S, p, 16, E[34]), S = x(S, w, m, _, y, 23, E[35]), 
                    _ = x(_, S, w, m, n, 4, E[36]), m = x(m, _, S, w, o, 11, E[37]), w = x(w, m, _, S, v, 16, E[38]), 
                    S = x(S, w, m, _, f, 23, E[39]), _ = x(_, S, w, m, d, 4, E[40]), m = x(m, _, S, w, t, 11, E[41]), 
                    w = x(w, m, _, S, u, 16, E[42]), S = x(S, w, m, _, s, 23, E[43]), _ = x(_, S, w, m, b, 4, E[44]), 
                    m = x(m, _, S, w, h, 11, E[45]), w = x(w, m, _, S, g, 16, E[46]), _ = A(_, S = x(S, w, m, _, r, 23, E[47]), w, m, t, 6, E[48]), 
                    m = A(m, _, S, w, v, 10, E[49]), w = A(w, m, _, S, y, 15, E[50]), S = A(S, w, m, _, i, 21, E[51]), 
                    _ = A(_, S, w, m, h, 6, E[52]), m = A(m, _, S, w, u, 10, E[53]), w = A(w, m, _, S, f, 15, E[54]), 
                    S = A(S, w, m, _, n, 21, E[55]), _ = A(_, S, w, m, c, 6, E[56]), m = A(m, _, S, w, g, 10, E[57]), 
                    w = A(w, m, _, S, s, 15, E[58]), S = A(S, w, m, _, d, 21, E[59]), _ = A(_, S, w, m, o, 6, E[60]), 
                    m = A(m, _, S, w, p, 10, E[61]), w = A(w, m, _, S, r, 15, E[62]), S = A(S, w, m, _, b, 21, E[63]), 
                    a[0] = a[0] + _ | 0, a[1] = a[1] + S | 0, a[2] = a[2] + w | 0, a[3] = a[3] + m | 0;
                },
                _doFinalize: function() {
                    var e = this._data, l = e.words, a = 8 * this._nDataBytes, t = 8 * e.sigBytes;
                    l[t >>> 5] |= 128 << 24 - t % 32;
                    var n = r.floor(a / 4294967296);
                    for (l[15 + (64 + t >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                    l[14 + (64 + t >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                    e.sigBytes = 4 * (l.length + 1), this._process(), l = (e = this._hash).words, a = 0; a < 4; a++) t = l[a], 
                    l[a] = 16711935 & (t << 8 | t >>> 24) | 4278255360 & (t << 24 | t >>> 8);
                    return e;
                },
                clone: function() {
                    var e = t.clone.call(this);
                    return e._hash = this._hash.clone(), e;
                }
            }), e.MD5 = t._createHelper(l), e.HmacMD5 = t._createHmacHelper(l);
        }(Math), t = (a = T).lib, n = t.Base, s = t.WordArray, r = (t = a.algo).EvpKDF = n.extend({
            cfg: n.extend({
                keySize: 4,
                hasher: t.MD5,
                iterations: 1
            }),
            init: function(e) {
                this.cfg = this.cfg.extend(e);
            },
            compute: function(e, l) {
                for (var a = (u = this.cfg).hasher.create(), t = s.create(), n = t.words, r = u.keySize, u = u.iterations; n.length < r; ) {
                    o && a.update(o);
                    var o = a.update(e).finalize(l);
                    a.reset();
                    for (var i = 1; i < u; i++) o = a.finalize(o), a.reset();
                    t.concat(o);
                }
                return t.sigBytes = 4 * r, t;
            }
        }), a.EvpKDF = function(e, l, a) {
            return r.create(a).compute(e, l);
        }, T.lib.Cipher || function() {
            var e = T, l = e.lib, a = l.Base, u = l.WordArray, t = l.BufferedBlockAlgorithm, n = e.enc.Base64, r = e.algo.EvpKDF, o = l.Cipher = t.extend({
                cfg: a.extend(),
                createEncryptor: function(e, l) {
                    return this.create(this._ENC_XFORM_MODE, e, l);
                },
                createDecryptor: function(e, l) {
                    return this.create(this._DEC_XFORM_MODE, e, l);
                },
                init: function(e, l, a) {
                    this.cfg = this.cfg.extend(a), this._xformMode = e, this._key = l, this.reset();
                },
                reset: function() {
                    t.reset.call(this), this._doReset();
                },
                process: function(e) {
                    return this._append(e), this._process();
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize();
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function(t) {
                    return {
                        encrypt: function(e, l, a) {
                            return ("string" == typeof l ? f : b).encrypt(t, e, l, a);
                        },
                        decrypt: function(e, l, a) {
                            return ("string" == typeof l ? f : b).decrypt(t, e, l, a);
                        }
                    };
                }
            });
            function i(e, l, a) {
                var t = this._iv;
                t ? this._iv = void 0 : t = this._prevBlock;
                for (var n = 0; n < a; n++) e[l + n] ^= t[n];
            }
            l.StreamCipher = o.extend({
                _doFinalize: function() {
                    return this._process(!0);
                },
                blockSize: 1
            });
            var s = e.mode = {}, v = (l.BlockCipherMode = a.extend({
                createEncryptor: function(e, l) {
                    return this.Encryptor.create(e, l);
                },
                createDecryptor: function(e, l) {
                    return this.Decryptor.create(e, l);
                },
                init: function(e, l) {
                    this._cipher = e, this._iv = l;
                }
            })).extend();
            v.Encryptor = v.extend({
                processBlock: function(e, l) {
                    var a = this._cipher, t = a.blockSize;
                    i.call(this, e, l, t), a.encryptBlock(e, l), this._prevBlock = e.slice(l, l + t);
                }
            }), v.Decryptor = v.extend({
                processBlock: function(e, l) {
                    var a = this._cipher, t = a.blockSize, n = e.slice(l, l + t);
                    a.decryptBlock(e, l), i.call(this, e, l, t), this._prevBlock = n;
                }
            }), s = s.CBC = v, v = (e.pad = {}).Pkcs7 = {
                pad: function(e, l) {
                    for (var a = 4 * l, t = (a -= e.sigBytes % a) << 24 | a << 16 | a << 8 | a, n = [], r = 0; r < a; r += 4) n.push(t);
                    a = u.create(n, a), e.concat(a);
                },
                unpad: function(e) {
                    e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2];
                }
            }, l.BlockCipher = o.extend({
                cfg: o.cfg.extend({
                    mode: s,
                    padding: v
                }),
                reset: function() {
                    o.reset.call(this);
                    var e, l = (a = this.cfg).iv, a = a.mode;
                    this._xformMode == this._ENC_XFORM_MODE ? e = a.createEncryptor : (e = a.createDecryptor, 
                    this._minBufferSize = 1), this._mode = e.call(a, this, l && l.words);
                },
                _doProcessBlock: function(e, l) {
                    this._mode.processBlock(e, l);
                },
                _doFinalize: function() {
                    var e, l = this.cfg.padding;
                    return this._xformMode == this._ENC_XFORM_MODE ? (l.pad(this._data, this.blockSize), 
                    e = this._process(!0)) : (e = this._process(!0), l.unpad(e)), e;
                },
                blockSize: 4
            });
            var c = l.CipherParams = a.extend({
                init: function(e) {
                    this.mixIn(e);
                },
                toString: function(e) {
                    return (e || this.formatter).stringify(this);
                }
            }), b = (s = (e.format = {}).OpenSSL = {
                stringify: function(e) {
                    var l = e.ciphertext;
                    return ((e = e.salt) ? u.create([ 1398893684, 1701076831 ]).concat(e).concat(l) : l).toString(n);
                },
                parse: function(e) {
                    var l, a = (e = n.parse(e)).words;
                    return 1398893684 == a[0] && 1701076831 == a[1] && (l = u.create(a.slice(2, 4)), 
                    a.splice(0, 4), e.sigBytes -= 16), c.create({
                        ciphertext: e,
                        salt: l
                    });
                }
            }, l.SerializableCipher = a.extend({
                cfg: a.extend({
                    format: s
                }),
                encrypt: function(e, l, a, t) {
                    t = this.cfg.extend(t);
                    var n = e.createEncryptor(a, t);
                    return l = n.finalize(l), n = n.cfg, c.create({
                        ciphertext: l,
                        key: a,
                        iv: n.iv,
                        algorithm: e,
                        mode: n.mode,
                        padding: n.padding,
                        blockSize: e.blockSize,
                        formatter: t.format
                    });
                },
                decrypt: function(e, l, a, t) {
                    return t = this.cfg.extend(t), l = this._parse(l, t.format), e.createDecryptor(a, t).finalize(l.ciphertext);
                },
                _parse: function(e, l) {
                    return "string" == typeof e ? l.parse(e, this) : e;
                }
            })), f = (e = (e.kdf = {}).OpenSSL = {
                execute: function(e, l, a, t) {
                    return t = t || u.random(8), e = r.create({
                        keySize: l + a
                    }).compute(e, t), a = u.create(e.words.slice(l), 4 * a), e.sigBytes = 4 * l, c.create({
                        key: e,
                        iv: a,
                        salt: t
                    });
                }
            }, l.PasswordBasedCipher = b.extend({
                cfg: b.cfg.extend({
                    kdf: e
                }),
                encrypt: function(e, l, a, t) {
                    return a = (t = this.cfg.extend(t)).kdf.execute(a, e.keySize, e.ivSize), t.iv = a.iv, 
                    (e = b.encrypt.call(this, e, l, a.key, t)).mixIn(a), e;
                },
                decrypt: function(e, l, a, t) {
                    return t = this.cfg.extend(t), l = this._parse(l, t.format), a = t.kdf.execute(a, e.keySize, e.ivSize, l.salt), 
                    t.iv = a.iv, b.decrypt.call(this, e, l, a.key, t);
                }
            }));
        }(), function() {
            for (var e = T, l = e.lib.BlockCipher, a = e.algo, u = [], t = [], n = [], r = [], o = [], i = [], s = [], v = [], c = [], b = [], f = [], p = 0; p < 256; p++) f[p] = p < 128 ? p << 1 : p << 1 ^ 283;
            for (var h = 0, d = 0, p = 0; p < 256; p++) {
                var y = (y = d ^ d << 1 ^ d << 2 ^ d << 3 ^ d << 4) >>> 8 ^ 255 & y ^ 99;
                u[h] = y;
                var g = f[t[y] = h], _ = f[g], m = f[_], w = 257 * f[y] ^ 16843008 * y;
                n[h] = w << 24 | w >>> 8, r[h] = w << 16 | w >>> 16, o[h] = w << 8 | w >>> 24, i[h] = w, 
                w = 16843009 * m ^ 65537 * _ ^ 257 * g ^ 16843008 * h, s[y] = w << 24 | w >>> 8, 
                v[y] = w << 16 | w >>> 16, c[y] = w << 8 | w >>> 24, b[y] = w, h ? (h = g ^ f[f[f[m ^ g]]], 
                d ^= f[f[d]]) : h = d = 1;
            }
            var S = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], a = a.AES = l.extend({
                _doReset: function() {
                    for (var e, l = this._key, a = l.words, t = l.sigBytes / 4, n = (l = 4 * ((this._nRounds = t + 6) + 1), 
                    this._keySchedule = []), r = 0; r < l; r++) r < t ? n[r] = a[r] : (e = n[r - 1], 
                    r % t ? 6 < t && 4 == r % t && (e = u[e >>> 24] << 24 | u[e >>> 16 & 255] << 16 | u[e >>> 8 & 255] << 8 | u[255 & e]) : (e = u[(e = e << 8 | e >>> 24) >>> 24] << 24 | u[e >>> 16 & 255] << 16 | u[e >>> 8 & 255] << 8 | u[255 & e], 
                    e ^= S[r / t | 0] << 24), n[r] = n[r - t] ^ e);
                    for (a = this._invKeySchedule = [], t = 0; t < l; t++) r = l - t, e = t % 4 ? n[r] : n[r - 4], 
                    a[t] = t < 4 || r <= 4 ? e : s[u[e >>> 24]] ^ v[u[e >>> 16 & 255]] ^ c[u[e >>> 8 & 255]] ^ b[u[255 & e]];
                },
                encryptBlock: function(e, l) {
                    this._doCryptBlock(e, l, this._keySchedule, n, r, o, i, u);
                },
                decryptBlock: function(e, l) {
                    var a = e[l + 1];
                    e[l + 1] = e[l + 3], e[l + 3] = a, this._doCryptBlock(e, l, this._invKeySchedule, s, v, c, b, t), 
                    a = e[l + 1], e[l + 1] = e[l + 3], e[l + 3] = a;
                },
                _doCryptBlock: function(e, l, a, t, n, r, u, o) {
                    for (var i = this._nRounds, s = e[l] ^ a[0], v = e[l + 1] ^ a[1], c = e[l + 2] ^ a[2], b = e[l + 3] ^ a[3], f = 4, p = 1; p < i; p++) var h = t[s >>> 24] ^ n[v >>> 16 & 255] ^ r[c >>> 8 & 255] ^ u[255 & b] ^ a[f++], d = t[v >>> 24] ^ n[c >>> 16 & 255] ^ r[b >>> 8 & 255] ^ u[255 & s] ^ a[f++], y = t[c >>> 24] ^ n[b >>> 16 & 255] ^ r[s >>> 8 & 255] ^ u[255 & v] ^ a[f++], b = t[b >>> 24] ^ n[s >>> 16 & 255] ^ r[v >>> 8 & 255] ^ u[255 & c] ^ a[f++], s = h, v = d, c = y;
                    h = (o[s >>> 24] << 24 | o[v >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & b]) ^ a[f++], 
                    d = (o[v >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[b >>> 8 & 255] << 8 | o[255 & s]) ^ a[f++], 
                    y = (o[c >>> 24] << 24 | o[b >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & v]) ^ a[f++], 
                    b = (o[b >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[v >>> 8 & 255] << 8 | o[255 & c]) ^ a[f++], 
                    e[l] = h, e[l + 1] = d, e[l + 2] = y, e[l + 3] = b;
                },
                keySize: 8
            });
            e.AES = l._createHelper(a);
        }(), e.exports = T;
    },
    "543d": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.createApp = Fe, l.createComponent = Ge, l.createPage = Ve, l.createSubpackageApp = Ye, 
        l.default = void 0;
        var t, s = (t = a("66fd")) && t.__esModule ? t : {
            default: t
        };
        function n(l, e) {
            var a, t = Object.keys(l);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(l), e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable;
            })), t.push.apply(t, a)), t;
        }
        function r(e, l) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, l) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var a = [], t = !0, n = !1, r = void 0;
                    try {
                        for (var u, o = e[Symbol.iterator](); !(t = (u = o.next()).done) && (a.push(u.value), 
                        !l || a.length !== l); t = !0) ;
                    } catch (e) {
                        n = !0, r = e;
                    } finally {
                        try {
                            t || null == o.return || o.return();
                        } finally {
                            if (n) throw r;
                        }
                    }
                    return a;
                }
            }(e, l) || o(e, l) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function v(e, l, a) {
            return l in e ? Object.defineProperty(e, l, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[l] = a, e;
        }
        function u(e) {
            return i(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }(e) || o(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function o(e, l) {
            if (e) {
                if ("string" == typeof e) return c(e, l);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? c(e, l) : void 0;
            }
        }
        function i(e) {
            if (Array.isArray(e)) return c(e);
        }
        function c(e, l) {
            (null == l || l > e.length) && (l = e.length);
            for (var a = 0, t = new Array(l); a < l; a++) t[a] = e[a];
            return t;
        }
        var b = Object.prototype.toString, f = Object.prototype.hasOwnProperty;
        function p(e) {
            return "function" == typeof e;
        }
        function h(e) {
            return "string" == typeof e;
        }
        function d(e) {
            return "[object Object]" === b.call(e);
        }
        function y(e, l) {
            return f.call(e, l);
        }
        function g() {}
        function _(l) {
            var a = Object.create(null);
            return function(e) {
                return a[e] || (a[e] = l(e));
            };
        }
        var m = /-(\w)/g, w = _(function(e) {
            return e.replace(m, function(e, l) {
                return l ? l.toUpperCase() : "";
            });
        }), S = [ "invoke", "success", "fail", "complete", "returnValue" ], O = {}, k = {};
        function x(e, l) {
            e = l ? e ? e.concat(l) : Array.isArray(l) ? l : [ l ] : e;
            return e && function(e) {
                for (var l = [], a = 0; a < e.length; a++) -1 === l.indexOf(e[a]) && l.push(e[a]);
                return l;
            }(e);
        }
        function A(l, a) {
            Object.keys(a).forEach(function(e) {
                -1 !== S.indexOf(e) && p(a[e]) && (l[e] = x(l[e], a[e]));
            });
        }
        function E(a, t) {
            a && t && Object.keys(t).forEach(function(e) {
                var l;
                -1 !== S.indexOf(e) && p(t[e]) && (l = a[e], e = t[e], -1 !== (e = l.indexOf(e)) && l.splice(e, 1));
            });
        }
        function T(e) {
            return e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e) && "function" == typeof e.then;
        }
        function P(e, l) {
            for (var a = !1, t = 0; t < e.length; t++) {
                var n = e[t];
                if (a) a = Promise.resolve(function(l) {
                    return function(e) {
                        return l(e) || e;
                    };
                }(n)); else {
                    n = n(l);
                    if (T(n) && (a = Promise.resolve(n)), !1 === n) return {
                        then: function() {}
                    };
                }
            }
            return a || {
                then: function(e) {
                    return e(l);
                }
            };
        }
        function I(t, e) {
            var n = 1 < arguments.length && void 0 !== e ? e : {};
            return [ "success", "fail", "complete" ].forEach(function(l) {
                var a;
                Array.isArray(t[l]) && (a = n[l], n[l] = function(e) {
                    P(t[l], e).then(function(e) {
                        return p(a) && a(e) || e;
                    });
                });
            }), n;
        }
        function j(e, l) {
            var a = [];
            Array.isArray(O.returnValue) && a.push.apply(a, u(O.returnValue));
            e = k[e];
            return e && Array.isArray(e.returnValue) && a.push.apply(a, u(e.returnValue)), a.forEach(function(e) {
                l = e(l) || l;
            }), l;
        }
        function C(e, l, a) {
            for (var t = arguments.length, n = new Array(3 < t ? t - 3 : 0), r = 3; r < t; r++) n[r - 3] = arguments[r];
            var u = function(e) {
                var l = Object.create(null);
                Object.keys(O).forEach(function(e) {
                    "returnValue" !== e && (l[e] = O[e].slice());
                });
                var a = k[e];
                return a && Object.keys(a).forEach(function(e) {
                    "returnValue" !== e && (l[e] = (l[e] || []).concat(a[e]));
                }), l;
            }(e);
            return u && Object.keys(u).length ? Array.isArray(u.invoke) ? P(u.invoke, a).then(function(e) {
                return l.apply(void 0, [ I(u, e) ].concat(n));
            }) : l.apply(void 0, [ I(u, a) ].concat(n)) : l.apply(void 0, [ a ].concat(n));
        }
        var $ = {
            returnValue: function(e) {
                return T(e) ? e.then(function(e) {
                    return e[1];
                }).catch(function(e) {
                    return e[0];
                }) : e;
            }
        }, D = /^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, N = /^create|Manager$/, M = [ "createBLEConnection" ], F = [ "createBLEConnection" ], R = /^on|^off/;
        function L(e) {
            return N.test(e) && -1 === M.indexOf(e);
        }
        function U(e) {
            return D.test(e) && -1 === F.indexOf(e);
        }
        function B(e) {
            return !(L(e) || U(e) || (e = e, R.test(e) && "onPush" !== e));
        }
        function q(n, r) {
            return B(n) ? function() {
                for (var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length, t = new Array(1 < e ? e - 1 : 0), l = 1; l < e; l++) t[l - 1] = arguments[l];
                return p(a.success) || p(a.fail) || p(a.complete) ? j(n, C.apply(void 0, [ n, r, a ].concat(t))) : j(n, new Promise(function(e, l) {
                    C.apply(void 0, [ n, r, Object.assign({}, a, {
                        success: e,
                        fail: l
                    }) ].concat(t));
                }).then(function(e) {
                    return [ null, e ];
                }).catch(function(e) {
                    return [ e ];
                }));
            } : r;
        }
        Promise.prototype.finally || (Promise.prototype.finally = function(l) {
            var a = this.constructor;
            return this.then(function(e) {
                return a.resolve(l()).then(function() {
                    return e;
                });
            }, function(e) {
                return a.resolve(l()).then(function() {
                    throw e;
                });
            });
        });
        var H = !1, z = 0, K = 0;
        var $ = {
            promiseInterceptor: $
        }, V = Object.freeze({
            __proto__: null,
            upx2px: function(e, l) {
                return 0 === z && (a = (n = wx.getSystemInfoSync()).platform, t = n.pixelRatio, 
                n = n.windowWidth, z = n, K = t, H = "ios" === a), 0 === (e = Number(e)) ? 0 : ((l = e / 750 * (l || z)) < 0 && (l = -l), 
                0 === (l = Math.floor(l + 1e-4)) && (l = 1 !== K && H ? .5 : 1), e < 0 ? -l : l);
                var a, t, n;
            },
            addInterceptor: function(e, l) {
                "string" == typeof e && d(l) ? A(k[e] || (k[e] = {}), l) : d(e) && A(O, e);
            },
            removeInterceptor: function(e, l) {
                "string" == typeof e ? d(l) ? E(k[e], l) : delete k[e] : d(e) && E(O, e);
            },
            interceptors: $
        });
        var G, Y = "__DC_STAT_UUID";
        var $ = {
            returnValue: function(e) {
                var l;
                l = e, (G = G || wx.getStorageSync(Y)) || (G = Date.now() + "" + Math.floor(1e7 * Math.random()), 
                wx.setStorage({
                    key: Y,
                    data: G
                })), l.deviceId = G, (l = e).safeArea && (e = l.safeArea, l.safeAreaInsets = {
                    top: e.top,
                    left: e.left,
                    right: l.windowWidth - e.right,
                    bottom: l.windowHeight - e.bottom
                });
            }
        }, W = {
            redirectTo: {
                name: function(e) {
                    return "back" === e.exists && e.delta ? "navigateBack" : "redirectTo";
                },
                args: function(e) {
                    var l;
                    "back" === e.exists && e.url && (-1 === (l = function(e) {
                        for (var l = getCurrentPages(), a = l.length; a--; ) {
                            var t = l[a];
                            if (t.$page && t.$page.fullPath === e) return a;
                        }
                        return -1;
                    }(e.url)) || 0 < (l = getCurrentPages().length - 1 - l) && (e.delta = l));
                }
            },
            previewImage: {
                args: function(e) {
                    var a = parseInt(e.current);
                    if (!isNaN(a)) {
                        var t = e.urls;
                        if (Array.isArray(t)) {
                            var l = t.length;
                            if (l) return a < 0 ? a = 0 : l <= a && (a = l - 1), 0 < a ? (e.current = t[a], 
                            e.urls = t.filter(function(e, l) {
                                return !(l < a) || e !== t[a];
                            })) : e.current = t[0], {
                                indicator: !1,
                                loop: !1
                            };
                        }
                    }
                }
            },
            getSystemInfo: $,
            getSystemInfoSync: $
        }, X = [ "success", "fail", "cancel", "complete" ];
        function J(l, a, t) {
            return function(e) {
                return a(Z(l, e, t));
            };
        }
        function Q(e, l, a, t, n) {
            var r = 2 < arguments.length && void 0 !== a ? a : {}, u = 3 < arguments.length && void 0 !== t ? t : {}, o = 4 < arguments.length && void 0 !== n && n;
            if (d(l)) {
                var i, s, v = !0 === o ? l : {};
                for (i in p(r) && (r = r(l, v) || {}), l) y(r, i) ? (p(s = r[i]) && (s = s(l[i], l, v)), 
                s ? h(s) ? v[s] = l[i] : d(s) && (v[s.name || i] = s.value) : console.warn("微信小程序 ".concat(e, "暂不支持").concat(i))) : -1 !== X.indexOf(i) ? p(l[i]) && (v[i] = J(e, l[i], u)) : o || (v[i] = l[i]);
                return v;
            }
            return p(l) && (l = J(e, l, u)), l;
        }
        function Z(e, l, a, t) {
            t = 3 < arguments.length && void 0 !== t && t;
            return p(W.returnValue) && (l = W.returnValue(e, l)), Q(e, l, a, {}, t);
        }
        function ee(n, e) {
            if (y(W, n)) {
                var r = W[n];
                return r ? function(e, l) {
                    var a = r;
                    p(r) && (a = r(e));
                    var t = [ e = Q(n, e, a.args, a.returnValue) ];
                    void 0 !== l && t.push(l), p(a.name) ? n = a.name(e) : h(a.name) && (n = a.name);
                    t = wx[n].apply(wx, t);
                    return U(n) ? Z(n, t, a.returnValue, L(n)) : t;
                } : function() {
                    console.error("微信小程序 暂不支持".concat(n));
                };
            }
            return e;
        }
        var le = Object.create(null);
        [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(e) {
            var t;
            le[e] = (t = e, function(e) {
                var l = e.fail, a = e.complete, e = {
                    errMsg: "".concat(t, ":fail:暂不支持 ").concat(t, " 方法")
                };
                p(l) && l(e), p(a) && a(e);
            });
        });
        var ae = {
            oauth: [ "weixin" ],
            share: [ "weixin" ],
            payment: [ "wxpay" ],
            push: [ "weixin" ]
        };
        var te, ne = Object.freeze({
            __proto__: null,
            getProvider: function(e) {
                var l = e.service, a = e.success, t = e.fail, n = e.complete, e = !1;
                ae[l] ? (e = {
                    errMsg: "getProvider:ok",
                    service: l,
                    provider: ae[l]
                }, p(a) && a(e)) : (e = {
                    errMsg: "getProvider:fail:服务[" + l + "]不存在"
                }, p(t) && t(e)), p(n) && n(e);
            }
        }), re = function() {
            return te = te || new s.default();
        };
        function ue(e, l, a) {
            return e[l].apply(e, a);
        }
        var oe = Object.freeze({
            __proto__: null,
            $on: function() {
                return ue(re(), "$on", Array.prototype.slice.call(arguments));
            },
            $off: function() {
                return ue(re(), "$off", Array.prototype.slice.call(arguments));
            },
            $once: function() {
                return ue(re(), "$once", Array.prototype.slice.call(arguments));
            },
            $emit: function() {
                return ue(re(), "$emit", Array.prototype.slice.call(arguments));
            }
        }), ie = Object.freeze({
            __proto__: null
        }), se = Page, ve = Component, ce = /:/g, be = _(function(e) {
            return w(e.replace(ce, "-"));
        });
        function fe(n) {
            var r;
            wx.canIUse("nextTick") && (r = n.triggerEvent, n.triggerEvent = function(e) {
                for (var l = arguments.length, a = new Array(1 < l ? l - 1 : 0), t = 1; t < l; t++) a[t - 1] = arguments[t];
                return r.apply(n, [ be(e) ].concat(a));
            });
        }
        function pe(e, l) {
            var t = l[e];
            l[e] = t ? function() {
                fe(this);
                for (var e = arguments.length, l = new Array(e), a = 0; a < e; a++) l[a] = arguments[a];
                return t.apply(this, l);
            } : function() {
                fe(this);
            };
        }
        se.__$wrappered || (se.__$wrappered = !0, Page = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return pe("onLoad", e), se(e);
        }, Page.after = se.after, Component = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return pe("created", e), ve(e);
        });
        function he(e, l, a) {
            l.forEach(function(l) {
                !function l(a, e) {
                    if (!e) return !0;
                    if (s.default.options && Array.isArray(s.default.options[a])) return !0;
                    if (p(e = e.default || e)) return !!p(e.extendOptions[a]) || !!(e.super && e.super.options && Array.isArray(e.super.options[a]));
                    if (p(e[a])) return !0;
                    e = e.mixins;
                    return Array.isArray(e) ? !!e.find(function(e) {
                        return l(a, e);
                    }) : void 0;
                }(l, a) || (e[l] = function(e) {
                    return this.$vm && this.$vm.__call_hook(l, e);
                });
            });
        }
        var de = [ String, Number, Boolean, Object, Array, null ];
        function ye(a) {
            return function(e, l) {
                this.$vm && (this.$vm[a] = e);
            };
        }
        function ge(e, l) {
            return Array.isArray(l) && 1 === l.length ? l[0] : l;
        }
        function _e(t, e) {
            var n = {};
            return 1 < arguments.length && void 0 !== e && e || (n.vueId = {
                type: String,
                value: ""
            }, n.generic = {
                type: Object,
                value: null
            }, n.vueSlots = {
                type: null,
                value: [],
                observer: function(e, l) {
                    var a = Object.create(null);
                    e.forEach(function(e) {
                        a[e] = !0;
                    }), this.setData({
                        $slots: a
                    });
                }
            }), Array.isArray(t) ? t.forEach(function(e) {
                n[e] = {
                    type: null,
                    observer: ye(e)
                };
            }) : d(t) && Object.keys(t).forEach(function(e) {
                var l, a = t[e];
                d(a) ? (p(l = a.default) && (l = l()), a.type = ge(0, a.type), n[e] = {
                    type: -1 !== de.indexOf(a.type) ? a.type : null,
                    value: l,
                    observer: ye(e)
                }) : (a = ge(0, a), n[e] = {
                    type: -1 !== de.indexOf(a) ? a : null,
                    observer: ye(e)
                });
            }), n;
        }
        function me(a, e, t) {
            var n = {};
            return Array.isArray(e) && e.length && e.forEach(function(e, l) {
                var r, u;
                "string" == typeof e ? e ? "$event" === e ? n["$" + l] = t : "arguments" === e ? t.detail && t.detail.__args__ ? n["$" + l] = t.detail.__args__ : n["$" + l] = [ t ] : 0 === e.indexOf("$event.") ? n["$" + l] = a.__get_value(e.replace("$event.", ""), t) : n["$" + l] = a.__get_value(e) : n["$" + l] = a : n["$" + l] = (u = r = a, 
                e.forEach(function(e) {
                    var l, a, t = e[0], n = e[2];
                    !t && void 0 === n || (a = e[1], e = e[3], Number.isInteger(t) ? l = t : t ? "string" == typeof t && t && (l = 0 === t.indexOf("#s#") ? t.substr(3) : r.__get_value(t, u)) : l = u, 
                    Number.isInteger(l) ? u = n : a ? Array.isArray(l) ? u = l.find(function(e) {
                        return r.__get_value(a, e) === n;
                    }) : d(l) ? u = Object.keys(l).find(function(e) {
                        return r.__get_value(a, l[e]) === n;
                    }) : console.error("v-for 暂不支持循环数据：", l) : u = l[n], e && (u = r.__get_value(e, u)));
                }), u);
            }), n;
        }
        function we(e, l, a, t, n, r) {
            var a = 2 < arguments.length && void 0 !== a ? a : [], t = 3 < arguments.length && void 0 !== t ? t : [], u = 4 < arguments.length ? n : void 0, o = 5 < arguments.length ? r : void 0, i = !1;
            if (u && (i = l.currentTarget && l.currentTarget.dataset && "wx" === l.currentTarget.dataset.comType, 
            !a.length)) return i ? [ l ] : l.detail.__args__ || l.detail;
            var s = me(e, t, l), v = [];
            return a.forEach(function(e) {
                "$event" === e ? "__set_model" !== o || u ? u && !i ? v.push(l.detail.__args__[0]) : v.push(l) : v.push(l.target.value) : Array.isArray(e) && "o" === e[0] ? v.push(function(e) {
                    for (var l = {}, a = 1; a < e.length; a++) {
                        var t = e[a];
                        l[t[0]] = t[1];
                    }
                    return l;
                }(e)) : "string" == typeof e && y(s, e) ? v.push(s[e]) : v.push(e);
            }), v;
        }
        var Se = "~", Oe = "^";
        function ke(o) {
            var i = this, e = ((o = function(e) {
                try {
                    e.mp = JSON.parse(JSON.stringify(e));
                } catch (e) {}
                return e.stopPropagation = g, e.preventDefault = g, e.target = e.target || {}, y(e, "detail") || (e.detail = {}), 
                y(e, "markerId") && (e.detail = "object" === _typeof(e.detail) ? e.detail : {}, 
                e.detail.markerId = e.markerId), d(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), 
                e;
            }(o)).currentTarget || o.target).dataset;
            if (!e) return console.warn("事件信息不存在");
            e = e.eventOpts || e["event-opts"];
            if (!e) return console.warn("事件信息不存在");
            var t = o.type, s = [];
            return e.forEach(function(e) {
                var l = e[0], a = e[1], r = l.charAt(0) === Oe, u = (l = r ? l.slice(1) : l).charAt(0) === Se;
                l = u ? l.slice(1) : l, !a || (e = t) !== (l = l) && ("regionchange" !== l || "begin" !== e && "end" !== e) || a.forEach(function(e) {
                    var l = e[0];
                    if (l) {
                        var a = i.$vm;
                        if (a.$options.generic && (a = function(e) {
                            for (var l = e.$parent; l && l.$parent && (l.$options.generic || l.$parent.$options.generic || l.$scope._$vuePid); ) l = l.$parent;
                            return l && l.$parent;
                        }(a) || a), "$emit" !== l) {
                            var t = a[l];
                            if (!p(t)) throw new Error(" _vm.".concat(l, " is not a function"));
                            if (u) {
                                if (t.once) return;
                                t.once = !0;
                            }
                            var n = we(i.$vm, o, e[1], e[2], r, l), n = Array.isArray(n) ? n : [];
                            /=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(t.toString()) && (n = n.concat([ , , , , , , , , , , o ])), 
                            s.push(t.apply(a, n));
                        } else a.$emit.apply(a, we(i.$vm, o, e[1], e[2], r, l));
                    }
                });
            }), "input" === t && 1 === s.length && void 0 !== s[0] ? s[0] : void 0;
        }
        var xe = {}, Ae = [];
        var Ee = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ];
        function Te() {
            s.default.prototype.getOpenerEventChannel = function() {
                return this.$scope.getOpenerEventChannel();
            };
            var a = s.default.prototype.__call_hook;
            s.default.prototype.__call_hook = function(e, l) {
                return "onLoad" === e && l && l.__id__ && (this.__eventChannel__ = function(e) {
                    if (e) {
                        var l = xe[e];
                        return delete xe[e], l;
                    }
                    return Ae.shift();
                }(l.__id__), delete l.__id__), a.call(this, e, l);
            };
        }
        function Pe(l, e) {
            var t = e.mocks, n = e.initRefs;
            Te(), l.$options.store && (s.default.prototype.$store = l.$options.store), s.default.prototype.mpHost = "mp-weixin", 
            s.default.mixin({
                beforeCreate: function() {
                    var l, e, a;
                    this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = v({
                        data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                    delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (n(this), 
                    e = t, a = (l = this).$mp[l.mpType], e.forEach(function(e) {
                        y(a, e) && (l[e] = a[e]);
                    })));
                }
            });
            var a = {
                onLaunch: function(e) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                    this.$vm = l, this.$vm.$mp = {
                        app: this
                    }, (this.$vm.$scope = this).$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                    this.$vm.__call_hook("mounted", e), this.$vm.__call_hook("onLaunch", e));
                }
            };
            a.globalData = l.$options.globalData || {};
            var r = l.$options.methods;
            return r && Object.keys(r).forEach(function(e) {
                a[e] = r[e];
            }), he(a, Ee), a;
        }
        var Ie = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ];
        function je(e) {
            return Behavior(e);
        }
        function Ce() {
            return !!this.route;
        }
        function $e(e) {
            this.triggerEvent("__l", e);
        }
        function De(e) {
            var l = e.$scope;
            Object.defineProperty(e, "$refs", {
                get: function() {
                    var a = {};
                    return function a(e, t, n) {
                        e.selectAllComponents(t).forEach(function(e) {
                            var l = e.dataset.ref;
                            n[l] = e.$vm || e, "scoped" === e.dataset.vueGeneric && e.selectAllComponents(".scoped-ref").forEach(function(e) {
                                a(e, t, n);
                            });
                        });
                    }(l, ".vue-ref", a), l.selectAllComponents(".vue-ref-in-for").forEach(function(e) {
                        var l = e.dataset.ref;
                        a[l] || (a[l] = []), a[l].push(e.$vm || e);
                    }), a;
                }
            });
        }
        function Ne(e) {
            var l, a = e.detail || e.value, e = a.vuePid, a = a.vueOptions;
            e && (l = function e(l, a) {
                for (var t, n = l.$children, r = n.length - 1; 0 <= r; r--) {
                    var u = n[r];
                    if (u.$scope._$vueId === a) return u;
                }
                for (var o = n.length - 1; 0 <= o; o--) if (t = e(n[o], a)) return t;
            }(this.$vm, e)), l = l || this.$vm, a.parent = l;
        }
        function Me(e) {
            return Pe(e, {
                mocks: Ie,
                initRefs: De
            });
        }
        function Fe(e) {
            return App(Me(e)), e;
        }
        function Re(e) {
            return "%" + e.charCodeAt(0).toString(16);
        }
        var Le = /[!'()*]/g, Ue = /%2C/g, Be = function(e) {
            return encodeURIComponent(e).replace(Le, Re).replace(Ue, ",");
        };
        function qe(e, l) {
            var l = 1 < arguments.length && void 0 !== l ? l : {}, u = l.isPage, o = l.initRelation, l = r((l = s.default, 
            [ l = p(e = (e = e).default || e) ? e : l.extend(e), e = l.options ]), 2), i = l[0], e = l[1], l = function(l) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(a), !0).forEach(function(e) {
                        v(l, e, a[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach(function(e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return l;
            }({
                multipleSlots: !0,
                addGlobalClass: !0
            }, e.options || {});
            e["mp-weixin"] && e["mp-weixin"].options && Object.assign(l, e["mp-weixin"].options);
            var a = {
                options: l,
                data: function(e, l) {
                    var a = e.data || {}, t = e.methods || {};
                    if ("function" == typeof a) try {
                        a = a.call(l);
                    } catch (e) {
                        Object({
                            NODE_ENV: "production",
                            VUE_APP_NAME: "外卖侠",
                            VUE_APP_PLATFORM: "mp-weixin",
                            BASE_URL: "/"
                        }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", a);
                    } else try {
                        a = JSON.parse(JSON.stringify(a));
                    } catch (e) {}
                    return d(a) || (a = {}), Object.keys(t).forEach(function(e) {
                        -1 !== l.__lifecycle_hooks__.indexOf(e) || y(a, e) || (a[e] = t[e]);
                    }), a;
                }(e, s.default.prototype),
                behaviors: function(e, l) {
                    var a = e.behaviors, t = e.extends, n = e.mixins, r = e.props;
                    r || (e.props = r = []);
                    var u = [];
                    return Array.isArray(a) && a.forEach(function(e) {
                        u.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(r) ? (r.push("name"), 
                        r.push("value")) : (r.name = {
                            type: String,
                            default: ""
                        }, r.value = {
                            type: [ String, Number, Boolean, Array, Object, Date ],
                            default: ""
                        }));
                    }), d(t) && t.props && u.push(l({
                        properties: _e(t.props, !0)
                    })), Array.isArray(n) && n.forEach(function(e) {
                        d(e) && e.props && u.push(l({
                            properties: _e(e.props, !0)
                        }));
                    }), u;
                }(e, je),
                properties: _e(e.props, !1, e.__file),
                lifetimes: {
                    attached: function() {
                        var l, e, a, t, n = this.properties, r = {
                            mpType: u.call(this) ? "page" : "component",
                            mpInstance: this,
                            propsData: n
                        };
                        e = n.vueId, a = this, 1 === (t = (e = (e || "").split(",")).length) ? a._$vueId = e[0] : 2 === t && (a._$vueId = e[0], 
                        a._$vuePid = e[1]), o.call(this, {
                            vuePid: this._$vuePid,
                            vueOptions: r
                        }), this.$vm = new i(r), r = this.$vm, n = n.vueSlots, Array.isArray(n) && n.length && (l = Object.create(null), 
                        n.forEach(function(e) {
                            l[e] = !0;
                        }), r.$scopedSlots = r.$slots = l), this.$vm.$mount();
                    },
                    ready: function() {
                        this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                    },
                    detached: function() {
                        this.$vm && this.$vm.$destroy();
                    }
                },
                pageLifetimes: {
                    show: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageShow", e);
                    },
                    hide: function() {
                        this.$vm && this.$vm.__call_hook("onPageHide");
                    },
                    resize: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageResize", e);
                    }
                },
                methods: {
                    __l: Ne,
                    __e: ke
                }
            };
            return e.externalClasses && (a.externalClasses = e.externalClasses), Array.isArray(e.wxsCallMethods) && e.wxsCallMethods.forEach(function(l) {
                a.methods[l] = function(e) {
                    return this.$vm[l](e);
                };
            }), u ? a : [ a, i ];
        }
        function He(e) {
            return qe(e, {
                isPage: Ce,
                initRelation: $e
            });
        }
        var ze = [ "onShow", "onHide", "onUnload" ];
        function Ke(e, l) {
            l.isPage, l.initRelation;
            l = He(e);
            return he(l.methods, ze, e), l.methods.onLoad = function(e) {
                this.options = e;
                var l = Object.assign({}, e);
                delete l.__id__, this.$page = {
                    fullPath: "/" + (this.route || this.is) + function(t, e) {
                        var n = 1 < arguments.length && void 0 !== e ? e : Be;
                        return (e = t ? Object.keys(t).map(function(l) {
                            var e = t[l];
                            if (void 0 === e) return "";
                            if (null === e) return n(l);
                            if (Array.isArray(e)) {
                                var a = [];
                                return e.forEach(function(e) {
                                    void 0 !== e && (null === e ? a.push(n(l)) : a.push(n(l) + "=" + n(e)));
                                }), a.join("&");
                            }
                            return n(l) + "=" + n(e);
                        }).filter(function(e) {
                            return 0 < e.length;
                        }).join("&") : null) ? "?".concat(e) : "";
                    }(l)
                }, this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e);
            }, l;
        }
        function Ve(e) {
            return Component(Ke(e, {
                isPage: Ce,
                initRelation: $e
            }));
        }
        function Ge(e) {
            return Component(He(e));
        }
        function Ye(e) {
            var l, t = Me(e), n = getApp({
                allowDefault: !0
            }), a = n.globalData;
            return a && Object.keys(t.globalData).forEach(function(e) {
                y(a, e) || (a[e] = t.globalData[e]);
            }), Object.keys(t).forEach(function(e) {
                y(n, e) || (n[e] = t[e]);
            }), p(t.onShow) && wx.onAppShow && wx.onAppShow(function() {
                for (var e = arguments.length, l = new Array(e), a = 0; a < e; a++) l[a] = arguments[a];
                t.onShow.apply(n, l);
            }), p(t.onHide) && wx.onAppHide && wx.onAppHide(function() {
                for (var e = arguments.length, l = new Array(e), a = 0; a < e; a++) l[a] = arguments[a];
                t.onHide.apply(n, l);
            }), p(t.onLaunch) && (l = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync(), 
            t.onLaunch.call(n, l)), e;
        }
        ze.push.apply(ze, [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ]), 
        [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ].forEach(function(e) {
            W[e] = !1;
        }), [].forEach(function(e) {
            var l = W[e] && W[e].name ? W[e].name : e;
            wx.canIUse(l) || (W[e] = !1);
        });
        var We = {};
        "undefined" != typeof Proxy ? We = new Proxy({}, {
            get: function(e, l) {
                return y(e, l) ? e[l] : V[l] || (ie[l] ? q(l, ie[l]) : ne[l] ? q(l, ne[l]) : le[l] ? q(l, le[l]) : oe[l] || (y(wx, l) || y(W, l) ? q(l, ee(l, wx[l])) : void 0));
            },
            set: function(e, l, a) {
                return e[l] = a, !0;
            }
        }) : (Object.keys(V).forEach(function(e) {
            We[e] = V[e];
        }), Object.keys(le).forEach(function(e) {
            We[e] = q(e, le[e]);
        }), Object.keys(ne).forEach(function(e) {
            We[e] = q(e, le[e]);
        }), Object.keys(oe).forEach(function(e) {
            We[e] = oe[e];
        }), Object.keys(ie).forEach(function(e) {
            We[e] = q(e, ie[e]);
        }), Object.keys(wx).forEach(function(e) {
            (y(wx, e) || y(W, e)) && (We[e] = q(e, ee(e, wx[e])));
        })), wx.createApp = Fe, wx.createPage = Ve, wx.createComponent = Ge, wx.createSubpackageApp = Ye, 
        l.default = We;
    },
    "5f91": function(e, l) {
        var t, n = [ [ "div", "line-height:2em;" ], [ "h1", "font-size:3em; line-height:1.5em;" ], [ "h2", "font-size:2em; line-height:1.8em;" ], [ "h3", "font-size:1.6em; line-height:2em;" ], [ "h4", "font-size:1.2em; line-height:2em;" ], [ "h5", "font-size:1em; line-height:2em;" ], [ "h6", "font-size:0.9em; line-height:2em;" ], [ "p", "font-size:1em; line-height:2em;" ], [ "b", "font-size:1em; line-height:2em;" ], [ "strong", "font-size:1em; line-height:2em;" ], [ "code", "font-size:1em; line-height:1.2em; background:#F6F7F8; padding:8px 2%; width:96%;" ], [ "img", "max-width:100%; margin:8px 0; width:100%; height:auto;" ], [ "blockquote", "font-size:1em; border-left:3px solid #D1D1D1; line-height:2em; border-radius:5px; background:#F6F7F8; padding:8px 2%;" ], [ "ul", "padding:5px 0; list-style:none; padding:0; margin:0;" ], [ "li", "line-height:1.5em; padding:5px 0; list-style:none; padding:0; margin:0; margin-top:10px;" ], [ "table", "width:100%; border-left:1px solid #F2F3F4; border-top:1px solid #F2F3F4;" ], [ "th", "border-right:1px solid #F2F3F4; border-bottom:1px solid #F2F3F4;" ], [ "td", "border-right:1px solid #F2F3F4; border-bottom:1px solid #F2F3F4; padding-left:5px;" ] ];
        e.exports = {
            format: function(e) {
                e = (e = (e = e.replace(/<pre[\s\S]*pre>?/gi, function(e) {
                    return (e = (e = e.replace(/[\n]/gi, "<br />")).replace(/    /gi, '<span style="padding-left:2em;"></span>')).replace(/[\t]/gi, '<span style="padding-left:2em;"></span>');
                })).replace(/<pre/gi, '<p style="font-size:1em; margin:12px 0; line-height:1.2em; background:#F6F7F8; border-radius:5px; padding:8px 4%; width:92%;"')).replace(/<\/pre/gi, "</p");
                for (var l = 0; l < n.length; l++) !function(a) {
                    t = new RegExp("<" + n[a][0] + ">|<" + n[a][0] + " (.*?)>", "gi"), e = e.replace(t, function(e) {
                        if (-1 == e.indexOf("style=")) return l = new RegExp("<" + n[a][0] + "(.*?)(/?)>", "gi"), 
                        e.replace(l, "<" + n[a][0] + '$1 style="' + n[a][1] + '$2">');
                        var l = new RegExp("<" + n[a][0] + '(.*?)style="(.*?)"(.*?)(/?)>', "gi");
                        return e.replace(l, "<" + n[a][0] + '$1style="$2 ' + n[a][1] + '"$3$4>');
                    });
                }(l);
                return e;
            }
        };
    },
    "66fd": function(e, Ca, l) {
        l.r(Ca), function(e) {
            var h = Object.freeze({});
            function d(e) {
                return null == e;
            }
            function y(e) {
                return null != e;
            }
            function g(e) {
                return !0 === e;
            }
            function i(e) {
                return "string" == typeof e || "number" == typeof e || "symbol" === (void 0 === e ? "undefined" : _typeof(e)) || "boolean" == typeof e;
            }
            function _(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : _typeof(e));
            }
            var t = Object.prototype.toString;
            function s(e) {
                return "[object Object]" === t.call(e);
            }
            function n(e) {
                var l = parseFloat(String(e));
                return 0 <= l && Math.floor(l) === l && isFinite(e);
            }
            function m(e) {
                return y(e) && "function" == typeof e.then && "function" == typeof e.catch;
            }
            function l(e) {
                return null == e ? "" : Array.isArray(e) || s(e) && e.toString === t ? JSON.stringify(e, null, 2) : String(e);
            }
            function a(e) {
                var l = parseFloat(e);
                return isNaN(l) ? e : l;
            }
            function r(e, l) {
                for (var a = Object.create(null), t = e.split(","), n = 0; n < t.length; n++) a[t[n]] = !0;
                return l ? function(e) {
                    return a[e.toLowerCase()];
                } : function(e) {
                    return a[e];
                };
            }
            r("slot,component", !0);
            var v = r("key,ref,slot,slot-scope,is");
            function w(e, l) {
                if (e.length) {
                    l = e.indexOf(l);
                    if (-1 < l) return e.splice(l, 1);
                }
            }
            var u = Object.prototype.hasOwnProperty;
            function c(e, l) {
                return u.call(e, l);
            }
            function o(l) {
                var a = Object.create(null);
                return function(e) {
                    return a[e] || (a[e] = l(e));
                };
            }
            var b = /-(\w)/g, f = o(function(e) {
                return e.replace(b, function(e, l) {
                    return l ? l.toUpperCase() : "";
                });
            }), p = o(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }), S = /\B([A-Z])/g, O = o(function(e) {
                return e.replace(S, "-$1").toLowerCase();
            });
            var k = Function.prototype.bind ? function(e, l) {
                return e.bind(l);
            } : function(a, t) {
                function e(e) {
                    var l = arguments.length;
                    return l ? 1 < l ? a.apply(t, arguments) : a.call(t, e) : a.call(t);
                }
                return e._length = a.length, e;
            };
            function x(e, l) {
                l = l || 0;
                for (var a = e.length - l, t = new Array(a); a--; ) t[a] = e[a + l];
                return t;
            }
            function A(e, l) {
                for (var a in l) e[a] = l[a];
                return e;
            }
            function E(e) {
                for (var l = {}, a = 0; a < e.length; a++) e[a] && A(l, e[a]);
                return l;
            }
            function T(e, l, a) {}
            var P = function(e, l, a) {
                return !1;
            }, I = function(e) {
                return e;
            };
            function j(l, a) {
                if (l === a) return !0;
                var e = _(l), t = _(a);
                if (!e || !t) return !e && !t && String(l) === String(a);
                try {
                    var n = Array.isArray(l), r = Array.isArray(a);
                    if (n && r) return l.length === a.length && l.every(function(e, l) {
                        return j(e, a[l]);
                    });
                    if (l instanceof Date && a instanceof Date) return l.getTime() === a.getTime();
                    if (n || r) return !1;
                    n = Object.keys(l), r = Object.keys(a);
                    return n.length === r.length && n.every(function(e) {
                        return j(l[e], a[e]);
                    });
                } catch (e) {
                    return !1;
                }
            }
            function C(e, l) {
                for (var a = 0; a < e.length; a++) if (j(e[a], l)) return a;
                return -1;
            }
            function $(e) {
                var l = !1;
                return function() {
                    l || (l = !0, e.apply(this, arguments));
                };
            }
            var D = [ "component", "directive", "filter" ], N = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], M = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: P,
                isReservedAttr: P,
                isUnknownElement: P,
                getTagNamespace: T,
                parsePlatformTagName: I,
                mustUseProp: P,
                async: !0,
                _lifecycleHooks: N
            };
            function F(e, l, a, t) {
                Object.defineProperty(e, l, {
                    value: a,
                    enumerable: !!t,
                    writable: !0,
                    configurable: !0
                });
            }
            var R = new RegExp("[^" + /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source + ".$_\\d]");
            var L, U = "__proto__" in {}, B = "undefined" != typeof window, q = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, H = q && WXEnvironment.platform.toLowerCase(), z = B && window.navigator.userAgent.toLowerCase(), P = z && /msie|trident/.test(z), K = (z && z.indexOf("msie 9.0"), 
            z && z.indexOf("edge/"), z && z.indexOf("android"), z && /iphone|ipad|ipod|ios/.test(z) || "ios" === H), V = (z && /chrome\/\d+/.test(z), 
            z && /phantomjs/.test(z), z && z.match(/firefox\/(\d+)/), {}.watch);
            if (B) try {
                var G = {};
                Object.defineProperty(G, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, G);
            } catch (e) {}
            var Y = function() {
                return void 0 === L && (L = !B && !q && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV), 
                L;
            }, W = B && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            function X(e) {
                return "function" == typeof e && /native code/.test(e.toString());
            }
            var J, Q = "undefined" != typeof Symbol && X(Symbol) && "undefined" != typeof Reflect && X(Reflect.ownKeys);
            function Z() {
                this.set = Object.create(null);
            }
            J = "undefined" != typeof Set && X(Set) ? Set : (Z.prototype.has = function(e) {
                return !0 === this.set[e];
            }, Z.prototype.add = function(e) {
                this.set[e] = !0;
            }, Z.prototype.clear = function() {
                this.set = Object.create(null);
            }, Z);
            var ee = T, le = 0, ae = function() {
                this.id = le++, this.subs = [];
            };
            function te(e) {
                ae.SharedObject.targetStack.push(e), ae.SharedObject.target = e, ae.target = e;
            }
            function ne() {
                ae.SharedObject.targetStack.pop(), ae.SharedObject.target = ae.SharedObject.targetStack[ae.SharedObject.targetStack.length - 1], 
                ae.target = ae.SharedObject.target;
            }
            ae.prototype.addSub = function(e) {
                this.subs.push(e);
            }, ae.prototype.removeSub = function(e) {
                w(this.subs, e);
            }, ae.prototype.depend = function() {
                ae.SharedObject.target && ae.SharedObject.target.addDep(this);
            }, ae.prototype.notify = function() {
                for (var e = this.subs.slice(), l = 0, a = e.length; l < a; l++) e[l].update();
            }, ae.SharedObject = {}, ae.SharedObject.target = null, ae.SharedObject.targetStack = [];
            var re = function(e, l, a, t, n, r, u, o) {
                this.tag = e, this.data = l, this.children = a, this.text = t, this.elm = n, this.ns = void 0, 
                this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = l && l.key, this.componentOptions = u, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, z = {
                child: {
                    configurable: !0
                }
            };
            z.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(re.prototype, z);
            var ue = function(e) {
                void 0 === e && (e = "");
                var l = new re();
                return l.text = e, l.isComment = !0, l;
            };
            function oe(e) {
                return new re(void 0, void 0, void 0, String(e));
            }
            var ie = Array.prototype, se = Object.create(ie);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(r) {
                var u = ie[r];
                F(se, r, function() {
                    for (var e = [], l = arguments.length; l--; ) e[l] = arguments[l];
                    var a, t = u.apply(this, e), n = this.__ob__;
                    switch (r) {
                      case "push":
                      case "unshift":
                        a = e;
                        break;

                      case "splice":
                        a = e.slice(2);
                    }
                    return a && n.observeArray(a), n.dep.notify(), t;
                });
            });
            var ve = Object.getOwnPropertyNames(se), ce = !0;
            function be(e) {
                ce = e;
            }
            var fe = function(e) {
                var l;
                this.value = e, this.dep = new ae(), this.vmCount = 0, F(e, "__ob__", this), Array.isArray(e) ? (!U || e.push !== e.__proto__.push ? pe(e, se, ve) : (l = se, 
                e.__proto__ = l), this.observeArray(e)) : this.walk(e);
            };
            function pe(e, l, a) {
                for (var t = 0, n = a.length; t < n; t++) {
                    var r = a[t];
                    F(e, r, l[r]);
                }
            }
            function he(e, l) {
                var a;
                if (_(e) && !(e instanceof re)) return c(e, "__ob__") && e.__ob__ instanceof fe ? a = e.__ob__ : ce && !Y() && (Array.isArray(e) || s(e)) && Object.isExtensible(e) && !e._isVue && (a = new fe(e)), 
                l && a && a.vmCount++, a;
            }
            function de(a, e, t, l, n) {
                var r, u, o, i = new ae(), s = Object.getOwnPropertyDescriptor(a, e);
                s && !1 === s.configurable || (r = s && s.get, u = s && s.set, r && !u || 2 !== arguments.length || (t = a[e]), 
                o = !n && he(t), Object.defineProperty(a, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var e = r ? r.call(a) : t;
                        return ae.SharedObject.target && (i.depend(), o && (o.dep.depend(), Array.isArray(e) && function e(l) {
                            for (var a = void 0, t = 0, n = l.length; t < n; t++) (a = l[t]) && a.__ob__ && a.__ob__.dep.depend(), 
                            Array.isArray(a) && e(a);
                        }(e))), e;
                    },
                    set: function(e) {
                        var l = r ? r.call(a) : t;
                        e === l || e != e && l != l || r && !u || (u ? u.call(a, e) : t = e, o = !n && he(e), 
                        i.notify());
                    }
                }));
            }
            function ye(e, l, a) {
                if (Array.isArray(e) && n(l)) return e.length = Math.max(e.length, l), e.splice(l, 1, a), 
                a;
                if (l in e && !(l in Object.prototype)) return e[l] = a;
                var t = e.__ob__;
                return e._isVue || t && t.vmCount || (t ? (de(t.value, l, a), t.dep.notify()) : e[l] = a), 
                a;
            }
            function ge(e, l) {
                var a;
                Array.isArray(e) && n(l) ? e.splice(l, 1) : (a = e.__ob__, e._isVue || a && a.vmCount || c(e, l) && (delete e[l], 
                a && a.dep.notify()));
            }
            fe.prototype.walk = function(e) {
                for (var l = Object.keys(e), a = 0; a < l.length; a++) de(e, l[a]);
            }, fe.prototype.observeArray = function(e) {
                for (var l = 0, a = e.length; l < a; l++) he(e[l]);
            };
            var _e = M.optionMergeStrategies;
            function me(e, l) {
                if (!l) return e;
                for (var a, t, n, r = Q ? Reflect.ownKeys(l) : Object.keys(l), u = 0; u < r.length; u++) "__ob__" !== (a = r[u]) && (t = e[a], 
                n = l[a], c(e, a) ? t !== n && s(t) && s(n) && me(t, n) : ye(e, a, n));
                return e;
            }
            function we(a, t, n) {
                return n ? function() {
                    var e = "function" == typeof t ? t.call(n, n) : t, l = "function" == typeof a ? a.call(n, n) : a;
                    return e ? me(e, l) : l;
                } : t ? a ? function() {
                    return me("function" == typeof t ? t.call(this, this) : t, "function" == typeof a ? a.call(this, this) : a);
                } : t : a;
            }
            function Se(e, l) {
                e = l ? e ? e.concat(l) : Array.isArray(l) ? l : [ l ] : e;
                return e && function(e) {
                    for (var l = [], a = 0; a < e.length; a++) -1 === l.indexOf(e[a]) && l.push(e[a]);
                    return l;
                }(e);
            }
            function Oe(e, l, a, t) {
                e = Object.create(e || null);
                return l ? A(e, l) : e;
            }
            _e.data = function(e, l, a) {
                return a ? we(e, l, a) : l && "function" != typeof l ? e : we(e, l);
            }, N.forEach(function(e) {
                _e[e] = Se;
            }), D.forEach(function(e) {
                _e[e + "s"] = Oe;
            }), _e.watch = function(e, l, a, t) {
                if (e === V && (e = void 0), l === V && (l = void 0), !l) return Object.create(e || null);
                if (!e) return l;
                var n, r = {};
                for (n in A(r, e), l) {
                    var u = r[n], o = l[n];
                    u && !Array.isArray(u) && (u = [ u ]), r[n] = u ? u.concat(o) : Array.isArray(o) ? o : [ o ];
                }
                return r;
            }, _e.props = _e.methods = _e.inject = _e.computed = function(e, l, a, t) {
                if (!e) return l;
                var n = Object.create(null);
                return A(n, e), l && A(n, l), n;
            }, _e.provide = we;
            var ke = function(e, l) {
                return void 0 === l ? e : l;
            };
            function xe(a, t, n) {
                if ("function" == typeof t && (t = t.options), function(e) {
                    var l = e.props;
                    if (l) {
                        var a, t, n = {};
                        if (Array.isArray(l)) for (a = l.length; a--; ) "string" == typeof (t = l[a]) && (n[f(t)] = {
                            type: null
                        }); else if (s(l)) for (var r in l) t = l[r], n[f(r)] = s(t) ? t : {
                            type: t
                        };
                        e.props = n;
                    }
                }(t), function(e) {
                    var l = e.inject;
                    if (l) {
                        var a = e.inject = {};
                        if (Array.isArray(l)) for (var t = 0; t < l.length; t++) a[l[t]] = {
                            from: l[t]
                        }; else if (s(l)) for (var n in l) {
                            var r = l[n];
                            a[n] = s(r) ? A({
                                from: n
                            }, r) : {
                                from: r
                            };
                        }
                    }
                }(t), function(e) {
                    var l = e.directives;
                    if (l) for (var a in l) {
                        var t = l[a];
                        "function" == typeof t && (l[a] = {
                            bind: t,
                            update: t
                        });
                    }
                }(t), !t._base && (t.extends && (a = xe(a, t.extends, n)), t.mixins)) for (var e = 0, l = t.mixins.length; e < l; e++) a = xe(a, t.mixins[e], n);
                var r, u = {};
                for (r in a) o(r);
                for (r in t) c(a, r) || o(r);
                function o(e) {
                    var l = _e[e] || ke;
                    u[e] = l(a[e], t[e], n, e);
                }
                return u;
            }
            function Ae(e, l, a) {
                if ("string" == typeof a) {
                    var t = e[l];
                    if (c(t, a)) return t[a];
                    e = f(a);
                    if (c(t, e)) return t[e];
                    l = p(e);
                    return c(t, l) ? t[l] : t[a] || t[e] || t[l];
                }
            }
            function Ee(e, l, a, t) {
                var n = l[e], r = !c(a, e), l = a[e], a = Ie(Boolean, n.type);
                return -1 < a && (r && !c(n, "default") ? l = !1 : "" !== l && l !== O(e) || ((r = Ie(String, n.type)) < 0 || a < r) && (l = !0)), 
                void 0 === l && (l = function(e, l, a) {
                    if (c(l, "default")) {
                        var t = l.default;
                        return e && e.$options.propsData && void 0 === e.$options.propsData[a] && void 0 !== e._props[a] ? e._props[a] : "function" == typeof t && "Function" !== Te(l.type) ? t.call(e) : t;
                    }
                }(t, n, e), e = ce, be(!0), he(l), be(e)), l;
            }
            function Te(e) {
                e = e && e.toString().match(/^\s*function (\w+)/);
                return e ? e[1] : "";
            }
            function Pe(e, l) {
                return Te(e) === Te(l);
            }
            function Ie(e, l) {
                if (!Array.isArray(l)) return Pe(l, e) ? 0 : -1;
                for (var a = 0, t = l.length; a < t; a++) if (Pe(l[a], e)) return a;
                return -1;
            }
            function je(e, l, a) {
                te();
                try {
                    if (l) for (var t = l; t = t.$parent; ) {
                        var n = t.$options.errorCaptured;
                        if (n) for (var r = 0; r < n.length; r++) try {
                            if (!1 === n[r].call(t, e, l, a)) return;
                        } catch (e) {
                            $e(e, t, "errorCaptured hook");
                        }
                    }
                    $e(e, l, a);
                } finally {
                    ne();
                }
            }
            function Ce(e, l, a, t, n) {
                var r;
                try {
                    (r = a ? e.apply(l, a) : e.call(l)) && !r._isVue && m(r) && !r._handled && (r.catch(function(e) {
                        return je(e, t, n + " (Promise/async)");
                    }), r._handled = !0);
                } catch (e) {
                    je(e, t, n);
                }
                return r;
            }
            function $e(l, e, a) {
                if (M.errorHandler) try {
                    return M.errorHandler.call(null, l, e, a);
                } catch (e) {
                    e !== l && De(e);
                }
                De(l);
            }
            function De(e) {
                if (!B && !q || "undefined" == typeof console) throw e;
                console.error(e);
            }
            var Ne, Me, Fe, Re, Le = [], Ue = !1;
            function Be() {
                Ue = !1;
                for (var e = Le.slice(0), l = Le.length = 0; l < e.length; l++) e[l]();
            }
            function qe(e, l) {
                var a;
                if (Le.push(function() {
                    if (e) try {
                        e.call(l);
                    } catch (e) {
                        je(e, l, "nextTick");
                    } else a && a(l);
                }), Ue || (Ue = !0, Me()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                    a = e;
                });
            }
            Me = "undefined" != typeof Promise && X(Promise) ? (Ne = Promise.resolve(), function() {
                Ne.then(Be), K && setTimeout(T);
            }) : P || "undefined" == typeof MutationObserver || !X(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString() ? "undefined" != typeof setImmediate && X(setImmediate) ? function() {
                setImmediate(Be);
            } : function() {
                setTimeout(Be, 0);
            } : (Fe = 1, N = new MutationObserver(Be), Re = document.createTextNode(String(Fe)), 
            N.observe(Re, {
                characterData: !0
            }), function() {
                Fe = (Fe + 1) % 2, Re.data = String(Fe);
            });
            var He = new J();
            function ze(e) {
                (function e(l, a) {
                    var t, n, r = Array.isArray(l);
                    if (!(!r && !_(l) || Object.isFrozen(l) || l instanceof re)) {
                        if (l.__ob__) {
                            var u = l.__ob__.dep.id;
                            if (a.has(u)) return;
                            a.add(u);
                        }
                        if (r) for (t = l.length; t--; ) e(l[t], a); else for (n = Object.keys(l), t = n.length; t--; ) e(l[n[t]], a);
                    }
                })(e, He), He.clear();
            }
            var Ke = o(function(e) {
                var l = "&" === e.charAt(0), a = "~" === (e = l ? e.slice(1) : e).charAt(0), t = "!" === (e = a ? e.slice(1) : e).charAt(0);
                return {
                    name: e = t ? e.slice(1) : e,
                    once: a,
                    capture: t,
                    passive: l
                };
            });
            function Ve(e, l, a, t, n, r) {
                var u, o, i, s;
                for (u in e) o = e[u], i = l[u], s = Ke(u), d(o) || (d(i) ? (d(o.fns) && (o = e[u] = function(e, n) {
                    function r() {
                        var e = arguments, l = r.fns;
                        if (!Array.isArray(l)) return Ce(l, null, arguments, n, "v-on handler");
                        for (var a = l.slice(), t = 0; t < a.length; t++) Ce(a[t], null, e, n, "v-on handler");
                    }
                    return r.fns = e, r;
                }(o, r)), g(s.once) && (o = e[u] = n(s.name, o, s.capture)), a(s.name, o, s.capture, s.passive, s.params)) : o !== i && (i.fns = o, 
                e[u] = i));
                for (u in l) d(e[u]) && t((s = Ke(u)).name, l[u], s.capture);
            }
            function Ge(e, l, a, t) {
                var n = l.options.mpOptions && l.options.mpOptions.properties;
                if (d(n)) return a;
                var r = l.options.mpOptions.externalClasses || [], u = e.attrs, o = e.props;
                if (y(u) || y(o)) for (var i in n) {
                    var s = O(i);
                    (Ye(a, o, i, s, !0) || Ye(a, u, i, s, !1)) && a[i] && -1 !== r.indexOf(s) && t[f(a[i])] && (a[i] = t[f(a[i])]);
                }
                return a;
            }
            function Ye(e, l, a, t, n) {
                if (y(l)) {
                    if (c(l, a)) return e[a] = l[a], n || delete l[a], !0;
                    if (c(l, t)) return e[a] = l[t], n || delete l[t], !0;
                }
                return !1;
            }
            function We(e) {
                return i(e) ? [ oe(e) ] : Array.isArray(e) ? function e(l, a) {
                    var t, n, r, u, o = [];
                    for (t = 0; t < l.length; t++) d(n = l[t]) || "boolean" == typeof n || (r = o.length - 1, 
                    u = o[r], Array.isArray(n) ? 0 < n.length && (Xe((n = e(n, (a || "") + "_" + t))[0]) && Xe(u) && (o[r] = oe(u.text + n[0].text), 
                    n.shift()), o.push.apply(o, n)) : i(n) ? Xe(u) ? o[r] = oe(u.text + n) : "" !== n && o.push(oe(n)) : Xe(n) && Xe(u) ? o[r] = oe(u.text + n.text) : (g(l._isVList) && y(n.tag) && d(n.key) && y(a) && (n.key = "__vlist" + a + "_" + t + "__"), 
                    o.push(n)));
                    return o;
                }(e) : void 0;
            }
            function Xe(e) {
                return y(e) && y(e.text) && !1 === e.isComment;
            }
            function Je(e) {
                var l = e.$options.provide;
                l && (e._provided = "function" == typeof l ? l.call(e) : l);
            }
            function Qe(l) {
                var a = Ze(l.$options.inject, l);
                a && (be(!1), Object.keys(a).forEach(function(e) {
                    de(l, e, a[e]);
                }), be(!0));
            }
            function Ze(e, l) {
                if (e) {
                    for (var a = Object.create(null), t = Q ? Reflect.ownKeys(e) : Object.keys(e), n = 0; n < t.length; n++) {
                        var r = t[n];
                        if ("__ob__" !== r) {
                            for (var u, o = e[r].from, i = l; i; ) {
                                if (i._provided && c(i._provided, o)) {
                                    a[r] = i._provided[o];
                                    break;
                                }
                                i = i.$parent;
                            }
                            i || "default" in e[r] && (u = e[r].default, a[r] = "function" == typeof u ? u.call(l) : u);
                        }
                    }
                    return a;
                }
            }
            function el(e, l) {
                if (!e || !e.length) return {};
                for (var a, t = {}, n = 0, r = e.length; n < r; n++) {
                    var u = e[n], o = u.data;
                    o && o.attrs && o.attrs.slot && delete o.attrs.slot, u.context !== l && u.fnContext !== l || !o || null == o.slot ? (u.asyncMeta && u.asyncMeta.data && "page" === u.asyncMeta.data.slot ? t.page || (t.page = []) : t.default || (t.default = [])).push(u) : (o = t[o = o.slot] || (t[o] = []), 
                    "template" === u.tag ? o.push.apply(o, u.children || []) : o.push(u));
                }
                for (a in t) t[a].every(ll) && delete t[a];
                return t;
            }
            function ll(e) {
                return e.isComment && !e.asyncFactory || " " === e.text;
            }
            function al(e, l, a) {
                var t, n, r = 0 < Object.keys(l).length, u = e ? !!e.$stable : !r, o = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (u && a && a !== h && o === a.$key && !r && !a.$hasNormal) return a;
                    for (var i in t = {}, e) e[i] && "$" !== i[0] && (t[i] = function(e, l, a) {
                        function t() {
                            var e = arguments.length ? a.apply(null, arguments) : a({});
                            return (e = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) && !Array.isArray(e) ? [ e ] : We(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
                        }
                        return a.proxy && Object.defineProperty(e, l, {
                            get: t,
                            enumerable: !0,
                            configurable: !0
                        }), t;
                    }(l, i, e[i]));
                } else t = {};
                for (n in l) n in t || (t[n] = function(e, l) {
                    return function() {
                        return e[l];
                    };
                }(l, n));
                return e && Object.isExtensible(e) && (e._normalized = t), F(t, "$stable", u), F(t, "$key", o), 
                F(t, "$hasNormal", r), t;
            }
            function tl(e, l) {
                var a, t, n, r, u;
                if (Array.isArray(e) || "string" == typeof e) for (a = new Array(e.length), t = 0, 
                n = e.length; t < n; t++) a[t] = l(e[t], t, t, t); else if ("number" == typeof e) for (a = new Array(e), 
                t = 0; t < e; t++) a[t] = l(t + 1, t, t, t); else if (_(e)) if (Q && e[Symbol.iterator]) {
                    a = [];
                    for (var o = e[Symbol.iterator](), i = o.next(); !i.done; ) a.push(l(i.value, a.length, t, t++)), 
                    i = o.next();
                } else for (r = Object.keys(e), a = new Array(r.length), t = 0, n = r.length; t < n; t++) u = r[t], 
                a[t] = l(e[u], u, t, t);
                return y(a) || (a = []), a._isVList = !0, a;
            }
            function nl(e, l, a, t) {
                var n = this.$scopedSlots[e], l = n ? (a = a || {}, t && (a = A(A({}, t), a)), n(a, this, a._i) || l) : this.$slots[e] || l, a = a && a.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, l) : l;
            }
            function rl(e) {
                return Ae(this.$options, "filters", e) || I;
            }
            function ul(e, l) {
                return Array.isArray(e) ? -1 === e.indexOf(l) : e !== l;
            }
            function ol(e, l, a, t, n) {
                a = M.keyCodes[l] || a;
                return n && t && !M.keyCodes[l] ? ul(n, t) : a ? ul(a, e) : t ? O(t) !== l : void 0;
            }
            function il(t, n, r, u, o) {
                if (r && _(r)) {
                    var i;
                    Array.isArray(r) && (r = E(r));
                    for (var e in r) !function(l) {
                        i = "class" === l || "style" === l || v(l) ? t : (a = t.attrs && t.attrs.type, u || M.mustUseProp(n, a, l) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {}));
                        var e = f(l), a = O(l);
                        e in i || a in i || (i[l] = r[l], !o) || ((t.on || (t.on = {}))["update:" + l] = function(e) {
                            r[l] = e;
                        });
                    }(e);
                }
                return t;
            }
            function sl(e, l) {
                var a = this._staticTrees || (this._staticTrees = []), t = a[e];
                return t && !l || cl(t = a[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), 
                t;
            }
            function vl(e, l, a) {
                return cl(e, "__once__" + l + (a ? "_" + a : ""), !0), e;
            }
            function cl(e, l, a) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) e[t] && "string" != typeof e[t] && bl(e[t], l + "_" + t, a); else bl(e, l, a);
            }
            function bl(e, l, a) {
                e.isStatic = !0, e.key = l, e.isOnce = a;
            }
            function fl(e, l) {
                if (l && s(l)) {
                    var a, t = e.on = e.on ? A({}, e.on) : {};
                    for (a in l) {
                        var n = t[a], r = l[a];
                        t[a] = n ? [].concat(n, r) : r;
                    }
                }
                return e;
            }
            function pl(e, l, a, t) {
                l = l || {
                    $stable: !a
                };
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    Array.isArray(r) ? pl(r, l, a) : r && (r.proxy && (r.fn.proxy = !0), l[r.key] = r.fn);
                }
                return t && (l.$key = t), l;
            }
            function hl(e, l) {
                for (var a = 0; a < l.length; a += 2) {
                    var t = l[a];
                    "string" == typeof t && t && (e[l[a]] = l[a + 1]);
                }
                return e;
            }
            function dl(e, l) {
                return "string" == typeof e ? l + e : e;
            }
            function yl(e) {
                e._o = vl, e._n = a, e._s = l, e._l = tl, e._t = nl, e._q = j, e._i = C, e._m = sl, 
                e._f = rl, e._k = ol, e._b = il, e._v = oe, e._e = ue, e._u = pl, e._g = fl, e._d = hl, 
                e._p = dl;
            }
            function gl(e, l, a, n, t) {
                var r, u = this, o = t.options;
                c(n, "_uid") ? (r = Object.create(n))._original = n : n = (r = n)._original;
                var t = g(o._compiled), i = !t;
                this.data = e, this.props = l, this.children = a, this.parent = n, this.listeners = e.on || h, 
                this.injections = Ze(o.inject, n), this.slots = function() {
                    return u.$slots || al(e.scopedSlots, u.$slots = el(a, n)), u.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return al(e.scopedSlots, this.slots());
                    }
                }), t && (this.$options = o, this.$slots = this.slots(), this.$scopedSlots = al(e.scopedSlots, this.$slots)), 
                o._scopeId ? this._c = function(e, l, a, t) {
                    t = Al(r, e, l, a, t, i);
                    return t && !Array.isArray(t) && (t.fnScopeId = o._scopeId, t.fnContext = n), t;
                } : this._c = function(e, l, a, t) {
                    return Al(r, e, l, a, t, i);
                };
            }
            function _l(e, l, a, t) {
                var n, e = ((e = new re((n = e).tag, n.data, n.children && n.children.slice(), n.text, n.elm, n.context, n.componentOptions, n.asyncFactory)).ns = n.ns, 
                e.isStatic = n.isStatic, e.key = n.key, e.isComment = n.isComment, e.fnContext = n.fnContext, 
                e.fnOptions = n.fnOptions, e.fnScopeId = n.fnScopeId, e.asyncMeta = n.asyncMeta, 
                e.isCloned = !0, e);
                return e.fnContext = a, e.fnOptions = t, l.slot && ((e.data || (e.data = {})).slot = l.slot), 
                e;
            }
            function ml(e, l) {
                for (var a in l) e[f(a)] = l[a];
            }
            yl(gl.prototype);
            var wl = {
                init: function(e, l) {
                    var a, t, n;
                    e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive ? wl.prepatch(e, e) : (e.componentInstance = (n = {
                        _isComponent: !0,
                        _parentVnode: a = e,
                        parent: t = Dl
                    }, y(t = a.data.inlineTemplate) && (n.render = t.render, n.staticRenderFns = t.staticRenderFns), 
                    new a.componentOptions.Ctor(n))).$mount(l ? e.elm : void 0, l);
                },
                prepatch: function(e, l) {
                    var a = l.componentOptions;
                    !function(e, l, a, t, n) {
                        var r = t.data.scopedSlots, u = e.$scopedSlots, u = !!(r && !r.$stable || u !== h && !u.$stable || r && e.$scopedSlots.$key !== r.$key), r = !!(n || e.$options._renderChildren || u);
                        if (e.$options._parentVnode = t, e.$vnode = t, e._vnode && (e._vnode.parent = t), 
                        e.$options._renderChildren = n, e.$attrs = t.data.attrs || h, e.$listeners = a || h, 
                        l && e.$options.props) {
                            be(!1);
                            for (var o = e._props, i = e.$options._propKeys || [], s = 0; s < i.length; s++) {
                                var v = i[s], c = e.$options.props;
                                o[v] = Ee(v, c, l, e);
                            }
                            be(!0), e.$options.propsData = l;
                        }
                        e._$updateProperties && e._$updateProperties(e), a = a || h, u = e.$options._parentListeners, 
                        e.$options._parentListeners = a, $l(e, a, u), r && (e.$slots = el(n, t.context), 
                        e.$forceUpdate());
                    }(l.componentInstance = e.componentInstance, a.propsData, a.listeners, l, a.children);
                },
                insert: function(e) {
                    var l = e.context, a = e.componentInstance;
                    a._isMounted || (Fl(a, "onServiceCreated"), Fl(a, "onServiceAttached"), a._isMounted = !0, 
                    Fl(a, "mounted")), e.data.keepAlive && (l._isMounted ? ((l = a)._inactive = !1, 
                    Ll.push(l)) : Ml(a, !0));
                },
                destroy: function(e) {
                    var l = e.componentInstance;
                    l._isDestroyed || (e.data.keepAlive ? function e(l, a) {
                        if (!(a && (l._directInactive = !0, Nl(l)) || l._inactive)) {
                            l._inactive = !0;
                            for (var t = 0; t < l.$children.length; t++) e(l.$children[t]);
                            Fl(l, "deactivated");
                        }
                    }(l, !0) : l.$destroy());
                }
            }, Sl = Object.keys(wl);
            function Ol(e, l, a, t, n) {
                if (!d(e)) {
                    var r, u = a.$options._base;
                    if (_(e) && (e = u.extend(e)), "function" == typeof e) {
                        if (d(e.cid) && void 0 === (e = function(l, a) {
                            if (g(l.error) && y(l.errorComp)) return l.errorComp;
                            if (y(l.resolved)) return l.resolved;
                            var e = Tl;
                            if (e && y(l.owners) && -1 === l.owners.indexOf(e) && l.owners.push(e), g(l.loading) && y(l.loadingComp)) return l.loadingComp;
                            if (e && !y(l.owners)) {
                                var t = l.owners = [ e ], n = !0, r = null, u = null;
                                e.$on("hook:destroyed", function() {
                                    return w(t, e);
                                });
                                var o = function(e) {
                                    for (var l = 0, a = t.length; l < a; l++) t[l].$forceUpdate();
                                    e && (t.length = 0, null !== r && (clearTimeout(r), r = null), null !== u && (clearTimeout(u), 
                                    u = null));
                                }, i = $(function(e) {
                                    l.resolved = Pl(e, a), n ? t.length = 0 : o(!0);
                                }), s = $(function(e) {
                                    y(l.errorComp) && (l.error = !0, o(!0));
                                }), v = l(i, s);
                                return _(v) && (m(v) ? d(l.resolved) && v.then(i, s) : m(v.component) && (v.component.then(i, s), 
                                y(v.error) && (l.errorComp = Pl(v.error, a)), y(v.loading) && (l.loadingComp = Pl(v.loading, a), 
                                0 === v.delay ? l.loading = !0 : r = setTimeout(function() {
                                    r = null, d(l.resolved) && d(l.error) && (l.loading = !0, o(!1));
                                }, v.delay || 200)), y(v.timeout) && (u = setTimeout(function() {
                                    u = null, d(l.resolved) && s(null);
                                }, v.timeout)))), n = !1, l.loading ? l.loadingComp : l.resolved;
                            }
                        }(r = e, u))) return v = r, c = l, b = a, u = t, f = n, (p = ue()).asyncFactory = v, 
                        p.asyncMeta = {
                            data: c,
                            context: b,
                            children: u,
                            tag: f
                        }, p;
                        l = l || {}, sa(e), y(l.model) && (f = e.options, i = l, p = f.model && f.model.prop || "value", 
                        s = f.model && f.model.event || "input", (i.attrs || (i.attrs = {}))[p] = i.model.value, 
                        f = i.on || (i.on = {}), p = f[s], i = i.model.callback, void (y(p) ? (Array.isArray(p) ? -1 === p.indexOf(i) : p !== i) && (f[s] = [ i ].concat(p)) : f[s] = i));
                        s = function(e, l, a) {
                            var t = l.options.props;
                            if (d(t)) return Ge(e, l, {}, a);
                            var n = {}, r = e.attrs, u = e.props;
                            if (y(r) || y(u)) for (var o in t) {
                                var i = O(o);
                                Ye(n, u, o, i, !0) || Ye(n, r, o, i, !1);
                            }
                            return Ge(e, l, n, a);
                        }(l, e, a);
                        if (g(e.options.functional)) return function(e, l, a, t, n) {
                            var r = e.options, u = {}, o = r.props;
                            if (y(o)) for (var i in o) u[i] = Ee(i, o, l || h); else y(a.attrs) && ml(u, a.attrs), 
                            y(a.props) && ml(u, a.props);
                            var s = new gl(a, u, n, t, e);
                            if ((e = r.render.call(null, s._c, s)) instanceof re) return _l(e, a, s.parent, r);
                            if (Array.isArray(e)) {
                                for (var v = We(e) || [], c = new Array(v.length), b = 0; b < v.length; b++) c[b] = _l(v[b], a, s.parent, r);
                                return c;
                            }
                        }(e, s, l, a, t);
                        i = l.on;
                        l.on = l.nativeOn, g(e.options.abstract) && (o = l.slot, l = {}, o && (l.slot = o)), 
                        function(e) {
                            for (var l = e.hook || (e.hook = {}), a = 0; a < Sl.length; a++) {
                                var t = Sl[a], n = l[t], r = wl[t];
                                n === r || n && n._merged || (l[t] = n ? function(a, t) {
                                    function e(e, l) {
                                        a(e, l), t(e, l);
                                    }
                                    return e._merged = !0, e;
                                }(r, n) : r);
                            }
                        }(l);
                        var o = e.options.name || n;
                        return new re("vue-component-" + e.cid + (o ? "-" + o : ""), l, void 0, void 0, void 0, a, {
                            Ctor: e,
                            propsData: s,
                            listeners: i,
                            tag: n,
                            children: t
                        }, r);
                    }
                }
                var i, s, v, c, b, f, p;
            }
            var kl = 1, xl = 2;
            function Al(e, l, a, t, n, r) {
                return (Array.isArray(a) || i(a)) && (n = t, t = a, a = void 0), g(r) && (n = xl), 
                e = e, l = l, t = t, n = n, y(a = a) && y(a.__ob__) ? ue() : (y(a) && y(a.is) && (l = a.is), 
                l ? (Array.isArray(t) && "function" == typeof t[0] && ((a = a || {}).scopedSlots = {
                    default: t[0]
                }, t.length = 0), n === xl ? t = We(t) : n === kl && (t = function(e) {
                    for (var l = 0; l < e.length; l++) if (Array.isArray(e[l])) return Array.prototype.concat.apply([], e);
                    return e;
                }(t)), t = "string" == typeof l ? (u = e.$vnode && e.$vnode.ns || M.getTagNamespace(l), 
                M.isReservedTag(l) ? new re(M.parsePlatformTagName(l), a, t, void 0, void 0, e) : a && a.pre || !y(o = Ae(e.$options, "components", l)) ? new re(l, a, t, void 0, void 0, e) : Ol(o, a, e, t, l)) : Ol(l, a, e, t), 
                Array.isArray(t) ? t : y(t) ? (y(u) && function e(l, a, t) {
                    if (l.ns = a, "foreignObject" === l.tag && (a = void 0, t = !0), y(l.children)) for (var n = 0, r = l.children.length; n < r; n++) {
                        var u = l.children[n];
                        y(u.tag) && (d(u.ns) || g(t) && "svg" !== u.tag) && e(u, a, t);
                    }
                }(t, u), y(a) && function(e) {
                    _(e.style) && ze(e.style), _(e.class) && ze(e.class);
                }(a), t) : ue()) : ue());
                var u, o;
            }
            var El, Tl = null;
            function Pl(e, l) {
                return (e.__esModule || Q && "Module" === e[Symbol.toStringTag]) && (e = e.default), 
                _(e) ? l.extend(e) : e;
            }
            function Il(e, l) {
                El.$on(e, l);
            }
            function jl(e, l) {
                El.$off(e, l);
            }
            function Cl(l, a) {
                var t = El;
                return function e() {
                    null !== a.apply(null, arguments) && t.$off(l, e);
                };
            }
            function $l(e, l, a) {
                Ve(l, a || {}, Il, jl, Cl, El = e), El = void 0;
            }
            var Dl = null;
            function Nl(e) {
                for (;e = e && e.$parent; ) if (e._inactive) return 1;
            }
            function Ml(e, l) {
                if (l) {
                    if (e._directInactive = !1, Nl(e)) return;
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var a = 0; a < e.$children.length; a++) Ml(e.$children[a]);
                    Fl(e, "activated");
                }
            }
            function Fl(e, l) {
                te();
                var a = e.$options[l], t = l + " hook";
                if (a) for (var n = 0, r = a.length; n < r; n++) Ce(a[n], e, null, e, t);
                e._hasHookEvent && e.$emit("hook:" + l), ne();
            }
            var Rl = [], Ll = [], Ul = {}, Bl = !1, ql = !1, Hl = 0;
            var zl, Kl = Date.now;
            function Vl() {
                var e, l;
                for (Kl(), ql = !0, Rl.sort(function(e, l) {
                    return e.id - l.id;
                }), Hl = 0; Hl < Rl.length; Hl++) (e = Rl[Hl]).before && e.before(), l = e.id, Ul[l] = null, 
                e.run();
                var a = Ll.slice(), t = Rl.slice();
                Hl = Rl.length = Ll.length = 0, Bl = ql = !(Ul = {}), function(e) {
                    for (var l = 0; l < e.length; l++) e[l]._inactive = !0, Ml(e[l], !0);
                }(a), function(e) {
                    for (var l = e.length; l--; ) {
                        var a = e[l], t = a.vm;
                        t._watcher === a && t._isMounted && !t._isDestroyed && Fl(t, "updated");
                    }
                }(t), W && M.devtools && W.emit("flush");
            }
            !B || P || (zl = window.performance) && "function" == typeof zl.now && Kl() > document.createEvent("Event").timeStamp && (Kl = function() {
                return zl.now();
            });
            var Gl = 0, Yl = function(e, l, a, t, n) {
                this.vm = e, n && (e._watcher = this), e._watchers.push(this), t ? (this.deep = !!t.deep, 
                this.user = !!t.user, this.lazy = !!t.lazy, this.sync = !!t.sync, this.before = t.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = a, this.id = ++Gl, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new J(), this.newDepIds = new J(), this.expression = "", 
                "function" == typeof l ? this.getter = l : (this.getter = function(e) {
                    if (!R.test(e)) {
                        var a = e.split(".");
                        return function(e) {
                            for (var l = 0; l < a.length; l++) {
                                if (!e) return;
                                e = e[a[l]];
                            }
                            return e;
                        };
                    }
                }(l), this.getter || (this.getter = T)), this.value = this.lazy ? void 0 : this.get();
            };
            Yl.prototype.get = function() {
                var e;
                te(this);
                var l = this.vm;
                try {
                    e = this.getter.call(l, l);
                } catch (e) {
                    if (!this.user) throw e;
                    je(e, l, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && ze(e), ne(), this.cleanupDeps();
                }
                return e;
            }, Yl.prototype.addDep = function(e) {
                var l = e.id;
                this.newDepIds.has(l) || (this.newDepIds.add(l), this.newDeps.push(e), this.depIds.has(l) || e.addSub(this));
            }, Yl.prototype.cleanupDeps = function() {
                for (var e = this.deps.length; e--; ) {
                    var l = this.deps[e];
                    this.newDepIds.has(l.id) || l.removeSub(this);
                }
                var a = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = a, this.newDepIds.clear(), a = this.deps, 
                this.deps = this.newDeps, this.newDeps = a, this.newDeps.length = 0;
            }, Yl.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                    var l = e.id;
                    if (null == Ul[l]) {
                        if (Ul[l] = !0, ql) {
                            for (var a = Rl.length - 1; Hl < a && Rl[a].id > e.id; ) a--;
                            Rl.splice(a + 1, 0, e);
                        } else Rl.push(e);
                        Bl || (Bl = !0, qe(Vl));
                    }
                }(this);
            }, Yl.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || _(e) || this.deep) {
                        var l = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, l);
                        } catch (e) {
                            je(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, e, l);
                    }
                }
            }, Yl.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, Yl.prototype.depend = function() {
                for (var e = this.deps.length; e--; ) this.deps[e].depend();
            }, Yl.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || w(this.vm._watchers, this);
                    for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
                    this.active = !1;
                }
            };
            var Wl = {
                enumerable: !0,
                configurable: !0,
                get: T,
                set: T
            };
            function Xl(e, l, a) {
                Wl.get = function() {
                    return this[l][a];
                }, Wl.set = function(e) {
                    this[l][a] = e;
                }, Object.defineProperty(e, a, Wl);
            }
            function Jl(e) {
                e._watchers = [];
                var l = e.$options;
                l.props && function(a, t) {
                    var e, n = a.$options.propsData || {}, r = a._props = {}, u = a.$options._propKeys = [];
                    for (e in a.$parent && be(!1), t) !function(e) {
                        u.push(e);
                        var l = Ee(e, t, n, a);
                        de(r, e, l), e in a || Xl(a, "_props", e);
                    }(e);
                    be(!0);
                }(e, l.props), l.methods && function(e, l) {
                    for (var a in e.$options.props, l) e[a] = "function" != typeof l[a] ? T : k(l[a], e);
                }(e, l.methods), l.data ? function(e) {
                    var l = e.$options.data;
                    s(l = e._data = "function" == typeof l ? function(e, l) {
                        te();
                        try {
                            return e.call(l, l);
                        } catch (e) {
                            return je(e, l, "data()"), {};
                        } finally {
                            ne();
                        }
                    }(l, e) : l || {}) || (l = {});
                    for (var a = Object.keys(l), t = e.$options.props, n = (e.$options.methods, a.length); n--; ) {
                        var r = a[n];
                        t && c(t, r) || function(e) {
                            return 36 === (e = (e + "").charCodeAt(0)) || 95 === e;
                        }(r) || Xl(e, "_data", r);
                    }
                    he(l, !0);
                }(e) : he(e._data = {}, !0), l.computed && function(e, l) {
                    var a, t = e._computedWatchers = Object.create(null), n = Y();
                    for (a in l) {
                        var r = l[a], u = "function" == typeof r ? r : r.get;
                        n || (t[a] = new Yl(e, u || T, T, Ql)), a in e || Zl(e, a, r);
                    }
                }(e, l.computed), l.watch && l.watch !== V && function(e, l) {
                    for (var a in l) {
                        var t = l[a];
                        if (Array.isArray(t)) for (var n = 0; n < t.length; n++) aa(e, a, t[n]); else aa(e, a, t);
                    }
                }(e, l.watch);
            }
            var Ql = {
                lazy: !0
            };
            function Zl(e, l, a) {
                var t = !Y();
                "function" == typeof a ? (Wl.get = t ? ea(l) : la(a), Wl.set = T) : (Wl.get = a.get ? t && !1 !== a.cache ? ea(l) : la(a.get) : T, 
                Wl.set = a.set || T), Object.defineProperty(e, l, Wl);
            }
            function ea(l) {
                return function() {
                    var e = this._computedWatchers && this._computedWatchers[l];
                    if (e) return e.dirty && e.evaluate(), ae.SharedObject.target && e.depend(), e.value;
                };
            }
            function la(e) {
                return function() {
                    return e.call(this, this);
                };
            }
            function aa(e, l, a, t) {
                return s(a) && (a = (t = a).handler), "string" == typeof a && (a = e[a]), e.$watch(l, a, t);
            }
            var ta, na, ra, ua, oa, ia = 0;
            function sa(e) {
                var l, a, t = e.options;
                return !e.super || (l = sa(e.super)) !== e.superOptions && (e.superOptions = l, 
                (a = function(e) {
                    var l, a, t = e.options, n = e.sealedOptions;
                    for (a in t) t[a] !== n[a] && ((l = l || {})[a] = t[a]);
                    return l;
                }(e)) && A(e.extendOptions, a), (t = e.options = xe(l, e.extendOptions)).name && (t.components[t.name] = e)), 
                t;
            }
            function va(e) {
                this._init(e);
            }
            function ca(e) {
                e.cid = 0;
                var u = 1;
                e.extend = function(e) {
                    e = e || {};
                    var l = this, a = l.cid, t = e._Ctor || (e._Ctor = {});
                    if (t[a]) return t[a];
                    function n(e) {
                        this._init(e);
                    }
                    var r = e.name || l.options.name;
                    return ((n.prototype = Object.create(l.prototype)).constructor = n).cid = u++, n.options = xe(l.options, e), 
                    n.super = l, n.options.props && function(e) {
                        for (var l in e.options.props) Xl(e.prototype, "_props", l);
                    }(n), n.options.computed && function(e) {
                        var l, a = e.options.computed;
                        for (l in a) Zl(e.prototype, l, a[l]);
                    }(n), n.extend = l.extend, n.mixin = l.mixin, n.use = l.use, D.forEach(function(e) {
                        n[e] = l[e];
                    }), r && (n.options.components[r] = n), n.superOptions = l.options, n.extendOptions = e, 
                    n.sealedOptions = A({}, n.options), t[a] = n;
                };
            }
            function ba(e) {
                return e && (e.Ctor.options.name || e.tag);
            }
            function fa(e, l) {
                return Array.isArray(e) ? -1 < e.indexOf(l) : "string" == typeof e ? -1 < e.split(",").indexOf(l) : (a = e, 
                !("[object RegExp]" !== t.call(a)) && e.test(l));
                var a;
            }
            function pa(e, l) {
                var a, t = e.cache, n = e.keys, r = e._vnode;
                for (a in t) {
                    var u = t[a];
                    !u || (u = ba(u.componentOptions)) && !l(u) && ha(t, a, n, r);
                }
            }
            function ha(e, l, a, t) {
                var n = e[l];
                !n || t && n.tag === t.tag || n.componentInstance.$destroy(), e[l] = null, w(a, l);
            }
            va.prototype._init = function(e) {
                var l, a, t, n = this;
                n._uid = ia++, n._isVue = !0, e && e._isComponent ? (a = e, t = (l = n).$options = Object.create(l.constructor.options), 
                l = a._parentVnode, t.parent = a.parent, l = (t._parentVnode = l).componentOptions, 
                t.propsData = l.propsData, t._parentListeners = l.listeners, t._renderChildren = l.children, 
                t._componentTag = l.tag, a.render && (t.render = a.render, t.staticRenderFns = a.staticRenderFns)) : n.$options = xe(sa(n.constructor), e || {}, n), 
                function(e) {
                    var l = e.$options, a = l.parent;
                    if (a && !l.abstract) {
                        for (;a.$options.abstract && a.$parent; ) a = a.$parent;
                        a.$children.push(e);
                    }
                    e.$parent = a, e.$root = a ? a.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, 
                    e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, 
                    e._isBeingDestroyed = !1;
                }((n._renderProxy = n)._self = n), function(e) {
                    e._events = Object.create(null), e._hasHookEvent = !1;
                    var l = e.$options._parentListeners;
                    l && $l(e, l);
                }(n), function(n) {
                    n._vnode = null, n._staticTrees = null;
                    var e = n.$options, l = n.$vnode = e._parentVnode, a = l && l.context;
                    n.$slots = el(e._renderChildren, a), n.$scopedSlots = h, n._c = function(e, l, a, t) {
                        return Al(n, e, l, a, t, !1);
                    }, n.$createElement = function(e, l, a, t) {
                        return Al(n, e, l, a, t, !0);
                    }, l = l && l.data, de(n, "$attrs", l && l.attrs || h, null, !0), de(n, "$listeners", e._parentListeners || h, null, !0);
                }(n), Fl(n, "beforeCreate"), n._$fallback || Qe(n), Jl(n), n._$fallback || Je(n), 
                n._$fallback || Fl(n, "created"), n.$options.el && n.$mount(n.$options.el);
            }, oa = va, Object.defineProperty(oa.prototype, "$data", {
                get: function() {
                    return this._data;
                }
            }), Object.defineProperty(oa.prototype, "$props", {
                get: function() {
                    return this._props;
                }
            }), oa.prototype.$set = ye, oa.prototype.$delete = ge, oa.prototype.$watch = function(e, l, a) {
                if (s(l)) return aa(this, e, l, a);
                (a = a || {}).user = !0;
                var t = new Yl(this, e, l, a);
                if (a.immediate) try {
                    l.call(this, t.value);
                } catch (e) {
                    je(e, this, 'callback for immediate watcher "' + t.expression + '"');
                }
                return function() {
                    t.teardown();
                };
            }, ua = /^hook:/, (ra = va).prototype.$on = function(e, l) {
                var a = this;
                if (Array.isArray(e)) for (var t = 0, n = e.length; t < n; t++) a.$on(e[t], l); else (a._events[e] || (a._events[e] = [])).push(l), 
                ua.test(e) && (a._hasHookEvent = !0);
                return a;
            }, ra.prototype.$once = function(e, l) {
                var a = this;
                function t() {
                    a.$off(e, t), l.apply(a, arguments);
                }
                return t.fn = l, a.$on(e, t), a;
            }, ra.prototype.$off = function(e, l) {
                var a = this;
                if (!arguments.length) return a._events = Object.create(null), a;
                if (Array.isArray(e)) {
                    for (var t = 0, n = e.length; t < n; t++) a.$off(e[t], l);
                    return a;
                }
                var r, u = a._events[e];
                if (!u) return a;
                if (!l) return a._events[e] = null, a;
                for (var o = u.length; o--; ) if ((r = u[o]) === l || r.fn === l) {
                    u.splice(o, 1);
                    break;
                }
                return a;
            }, ra.prototype.$emit = function(e) {
                var l = this._events[e];
                if (l) {
                    l = 1 < l.length ? x(l) : l;
                    for (var a = x(arguments, 1), t = 'event handler for "' + e + '"', n = 0, r = l.length; n < r; n++) Ce(l[n], this, a, this, t);
                }
                return this;
            }, (na = va).prototype._update = function(e, l) {
                var a, t = this, n = t.$el, r = t._vnode, u = (a = Dl, function() {
                    Dl = a;
                });
                (Dl = t)._vnode = e, t.$el = r ? t.__patch__(r, e) : t.__patch__(t.$el, e, l, !1), 
                u(), n && (n.__vue__ = null), t.$el && (t.$el.__vue__ = t), t.$vnode && t.$parent && t.$vnode === t.$parent._vnode && (t.$parent.$el = t.$el);
            }, na.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update();
            }, na.prototype.$destroy = function() {
                var e = this;
                if (!e._isBeingDestroyed) {
                    Fl(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                    var l = e.$parent;
                    !l || l._isBeingDestroyed || e.$options.abstract || w(l.$children, e), e._watcher && e._watcher.teardown();
                    for (var a = e._watchers.length; a--; ) e._watchers[a].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), 
                    Fl(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
                }
            }, yl((ta = va).prototype), ta.prototype.$nextTick = function(e) {
                return qe(e, this);
            }, ta.prototype._render = function() {
                var l, a = this, e = a.$options, t = e.render, e = e._parentVnode;
                e && (a.$scopedSlots = al(e.data.scopedSlots, a.$slots, a.$scopedSlots)), a.$vnode = e;
                try {
                    Tl = a, l = t.call(a._renderProxy, a.$createElement);
                } catch (e) {
                    je(e, a, "render"), l = a._vnode;
                } finally {
                    Tl = null;
                }
                return Array.isArray(l) && 1 === l.length && (l = l[0]), l instanceof re || (l = ue()), 
                l.parent = e, l;
            };
            var da, ya, ga, P = [ String, RegExp, Array ], _a = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: P,
                        exclude: P,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var e in this.cache) ha(this.cache, e, this.keys);
                    },
                    mounted: function() {
                        var e = this;
                        this.$watch("include", function(l) {
                            pa(e, function(e) {
                                return fa(l, e);
                            });
                        }), this.$watch("exclude", function(l) {
                            pa(e, function(e) {
                                return !fa(l, e);
                            });
                        });
                    },
                    render: function() {
                        var e = this.$slots.default, l = function(e) {
                            if (Array.isArray(e)) for (var l = 0; l < e.length; l++) {
                                var a = e[l];
                                if (y(a) && (y(a.componentOptions) || (t = a).isComment && t.asyncFactory)) return a;
                            }
                            var t;
                        }(e), a = l && l.componentOptions;
                        if (a) {
                            var t = ba(a), n = this.include, r = this.exclude;
                            if (n && (!t || !fa(n, t)) || r && t && fa(r, t)) return l;
                            r = this.cache, t = this.keys, a = null == l.key ? a.Ctor.cid + (a.tag ? "::" + a.tag : "") : l.key;
                            r[a] ? (l.componentInstance = r[a].componentInstance, w(t, a), t.push(a)) : (r[a] = l, 
                            t.push(a), this.max && t.length > parseInt(this.max) && ha(r, t[0], t, this._vnode)), 
                            l.data.keepAlive = !0;
                        }
                        return l || e && e[0];
                    }
                }
            };
            da = va, ga = {
                get: function() {
                    return M;
                }
            }, Object.defineProperty(da, "config", ga), da.util = {
                warn: ee,
                extend: A,
                mergeOptions: xe,
                defineReactive: de
            }, da.set = ye, da.delete = ge, da.nextTick = qe, da.observable = function(e) {
                return he(e), e;
            }, da.options = Object.create(null), D.forEach(function(e) {
                da.options[e + "s"] = Object.create(null);
            }), A((da.options._base = da).options.components, _a), da.use = function(e) {
                var l = this._installedPlugins || (this._installedPlugins = []);
                if (-1 < l.indexOf(e)) return this;
                var a = x(arguments, 1);
                return a.unshift(this), "function" == typeof e.install ? e.install.apply(e, a) : "function" == typeof e && e.apply(null, a), 
                l.push(e), this;
            }, da.mixin = function(e) {
                return this.options = xe(this.options, e), this;
            }, ca(da), ya = da, D.forEach(function(a) {
                ya[a] = function(e, l) {
                    return l ? ("component" === a && s(l) && (l.name = l.name || e, l = this.options._base.extend(l)), 
                    "directive" === a && "function" == typeof l && (l = {
                        bind: l,
                        update: l
                    }), this.options[a + "s"][e] = l) : this.options[a + "s"][e];
                };
            }), Object.defineProperty(va.prototype, "$isServer", {
                get: Y
            }), Object.defineProperty(va.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(va, "FunctionalRenderContext", {
                value: gl
            }), va.version = "2.6.11";
            var ma = "[object Array]", wa = "[object Object]";
            function Sa(e, l) {
                var a = {};
                return function a(t, e) {
                    if (t !== e) {
                        var l = ka(t), n = ka(e);
                        if (l == wa && n == wa) {
                            if (Object.keys(t).length >= Object.keys(e).length) for (var r in e) {
                                var u = t[r];
                                void 0 === u ? t[r] = null : a(u, e[r]);
                            }
                        } else l == ma && n == ma && t.length >= e.length && e.forEach(function(e, l) {
                            a(t[l], e);
                        });
                    }
                }(e, l), function u(o, i, s, v) {
                    if (o !== i) {
                        var e = ka(o), l = ka(i);
                        if (e == wa) if (l != wa || Object.keys(o).length < Object.keys(i).length) Oa(v, s, o); else {
                            var a, t = function(a) {
                                var e = o[a], t = i[a], l = ka(e), n = ka(t);
                                if (l != ma && l != wa) e != i[a] && Oa(v, ("" == s ? "" : s + ".") + a, e); else if (l == ma) n != ma || e.length < t.length ? Oa(v, ("" == s ? "" : s + ".") + a, e) : e.forEach(function(e, l) {
                                    u(e, t[l], ("" == s ? "" : s + ".") + a + "[" + l + "]", v);
                                }); else if (l == wa) if (n != wa || Object.keys(e).length < Object.keys(t).length) Oa(v, ("" == s ? "" : s + ".") + a, e); else for (var r in e) u(e[r], t[r], ("" == s ? "" : s + ".") + a + "." + r, v);
                            };
                            for (a in o) t(a);
                        } else e != ma || l != ma || o.length < i.length ? Oa(v, s, o) : o.forEach(function(e, l) {
                            u(e, i[l], s + "[" + l + "]", v);
                        });
                    }
                }(e, l, "", a), a;
            }
            function Oa(e, l, a) {
                e[l] = a;
            }
            function ka(e) {
                return Object.prototype.toString.call(e);
            }
            function xa(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    var l;
                    Object({
                        NODE_ENV: "production",
                        VUE_APP_NAME: "外卖侠",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && (l = e.$scope, console.log("[" + +new Date() + "][" + (l.is || l.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]"));
                    for (var a = e.__next_tick_callbacks.slice(0), t = e.__next_tick_callbacks.length = 0; t < a.length; t++) a[t]();
                }
            }
            function Aa(l, e) {
                var a, t, n;
                return l.__next_tick_pending || (a = l, Rl.find(function(e) {
                    return a._watcher === e;
                })) ? (Object({
                    NODE_ENV: "production",
                    VUE_APP_NAME: "外卖侠",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && (t = l.$scope, console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + l._uid + "]:nextMPTick")), 
                l.__next_tick_callbacks || (l.__next_tick_callbacks = []), l.__next_tick_callbacks.push(function() {
                    if (e) try {
                        e.call(l);
                    } catch (e) {
                        je(e, l, "nextTick");
                    } else n && n(l);
                }), e || "undefined" == typeof Promise ? void 0 : new Promise(function(e) {
                    n = e;
                })) : (Object({
                    NODE_ENV: "production",
                    VUE_APP_NAME: "外卖侠",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && (t = l.$scope, console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + l._uid + "]:nextVueTick")), 
                qe(e, l));
            }
            function Ea() {}
            function Ta(e) {
                return Array.isArray(e) ? function(e) {
                    for (var l, a = "", t = 0, n = e.length; t < n; t++) y(l = Ta(e[t])) && "" !== l && (a && (a += " "), 
                    a += l);
                    return a;
                }(e) : _(e) ? function(e) {
                    var l, a = "";
                    for (l in e) e[l] && (a && (a += " "), a += l);
                    return a;
                }(e) : "string" == typeof e ? e : "";
            }
            var Pa = o(function(e) {
                var l = {}, a = /:(.+)/;
                return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                    !e || 1 < (e = e.split(a)).length && (l[e[0].trim()] = e[1].trim());
                }), l;
            });
            var Ia = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ];
            var ja = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onInit", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
            va.prototype.__patch__ = function(e, l) {
                var a = this;
                if (null !== l && ("page" === this.mpType || "component" === this.mpType)) {
                    var t = this.$scope, n = Object.create(null);
                    try {
                        n = function(a) {
                            var l = Object.create(null);
                            [].concat(Object.keys(a._data || {}), Object.keys(a._computedWatchers || {})).reduce(function(e, l) {
                                return e[l] = a[l], e;
                            }, l);
                            var e = a.__composition_api_state__ || a.__secret_vfa_state__;
                            return (e = e && e.rawBindings) && Object.keys(e).forEach(function(e) {
                                l[e] = a[e];
                            }), Object.assign(l, a.$mp.data || {}), Array.isArray(a.$options.behaviors) && -1 !== a.$options.behaviors.indexOf("uni://form-field") && (l.name = a.name, 
                            l.value = a.value), JSON.parse(JSON.stringify(l));
                        }(this);
                    } catch (e) {
                        console.error(e);
                    }
                    n.__webviewId__ = t.data.__webviewId__;
                    var r = Object.create(null);
                    Object.keys(n).forEach(function(e) {
                        r[e] = t.data[e];
                    });
                    l = !1 === this.$shouldDiffData ? n : Sa(n, r);
                    Object.keys(l).length ? (Object({
                        NODE_ENV: "production",
                        VUE_APP_NAME: "外卖侠",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + this._uid + "]差量更新", JSON.stringify(l)), 
                    this.__next_tick_pending = !0, t.setData(l, function() {
                        a.__next_tick_pending = !1, xa(a);
                    })) : xa(this);
                }
            }, va.prototype.$mount = function(e, l) {
                return t = l, (a = this).mpType && ("app" === a.mpType && (a.$options.render = Ea), 
                a.$options.render || (a.$options.render = Ea), a._$fallback || Fl(a, "beforeMount"), 
                new Yl(a, function() {
                    a._update(a._render(), t);
                }, T, {
                    before: function() {
                        a._isMounted && !a._isDestroyed && Fl(a, "beforeUpdate");
                    }
                }, !0), t = !1), a;
                var a, t;
            }, function(e) {
                var t = e.extend;
                e.extend = function(l) {
                    var a = (l = l || {}).methods;
                    return a && Object.keys(a).forEach(function(e) {
                        -1 !== ja.indexOf(e) && (l[e] = a[e], delete a[e]);
                    }), t.call(this, l);
                };
                var l = e.config.optionMergeStrategies, a = l.created;
                ja.forEach(function(e) {
                    l[e] = a;
                }), e.prototype.__lifecycle_hooks__ = ja;
            }(va), function(t) {
                t.config.errorHandler = function(e, l, a) {
                    t.util.warn("Error in " + a + ': "' + e.toString() + '"', l), console.error(e);
                    l = getApp();
                    l && l.onError && l.onError(e);
                };
                var l = t.prototype.$emit;
                t.prototype.$emit = function(e) {
                    return this.$scope && e && this.$scope.triggerEvent(e, {
                        __args__: x(arguments, 1)
                    }), l.apply(this, arguments);
                }, t.prototype.$nextTick = function(e) {
                    return Aa(this, e);
                }, Ia.forEach(function(l) {
                    t.prototype[l] = function(e) {
                        return this.$scope && this.$scope[l] ? this.$scope[l](e) : "undefined" != typeof my ? "createSelectorQuery" === l ? my.createSelectorQuery(e) : "createIntersectionObserver" === l ? my.createIntersectionObserver(e) : void 0 : void 0;
                    };
                }), t.prototype.__init_provide = Je, t.prototype.__init_injections = Qe, t.prototype.__call_hook = function(e, l) {
                    var a = this;
                    te();
                    var t, n = a.$options[e], r = e + " hook";
                    if (n) for (var u = 0, o = n.length; u < o; u++) t = Ce(n[u], a, l ? [ l ] : null, a, r);
                    return a._hasHookEvent && a.$emit("hook:" + e, l), ne(), t;
                }, t.prototype.__set_model = function(e, l, a, t) {
                    Array.isArray(t) && (-1 !== t.indexOf("trim") && (a = a.trim()), -1 !== t.indexOf("number") && (a = this._n(a))), 
                    (e = e || this)[l] = a;
                }, t.prototype.__set_sync = function(e, l, a) {
                    (e = e || this)[l] = a;
                }, t.prototype.__get_orig = function(e) {
                    return s(e) && e.$orig || e;
                }, t.prototype.__get_value = function(e, l) {
                    return function e(l, a) {
                        var t = a.split("."), a = t[0];
                        return 0 === a.indexOf("__$n") && (a = parseInt(a.replace("__$n", ""))), 1 === t.length ? l[a] : e(l[a], t.slice(1).join("."));
                    }(l || this, e);
                }, t.prototype.__get_class = function(e, l) {
                    return e = e, y(l = l) || y(e) ? (l = l, e = Ta(e), l ? e ? l + " " + e : l : e || "") : "";
                }, t.prototype.__get_style = function(e, l) {
                    if (!e && !l) return "";
                    var e = (e = e, Array.isArray(e) ? E(e) : "string" == typeof e ? Pa(e) : e), a = l ? A(l, e) : e;
                    return Object.keys(a).map(function(e) {
                        return O(e) + ":" + a[e];
                    }).join(";");
                }, t.prototype.__map = function(e, l) {
                    var a, t, n, r, u;
                    if (Array.isArray(e)) {
                        for (a = new Array(e.length), t = 0, n = e.length; t < n; t++) a[t] = l(e[t], t);
                        return a;
                    }
                    if (_(e)) {
                        for (r = Object.keys(e), a = Object.create(null), t = 0, n = r.length; t < n; t++) a[u = r[t]] = l(e[u], u, t);
                        return a;
                    }
                    if ("number" != typeof e) return [];
                    for (a = new Array(e), t = 0, n = e; t < n; t++) a[t] = l(t, t);
                    return a;
                };
            }(va), Ca.default = va;
        }.call(this, l("c8ba"));
    },
    7141: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = [ {
            label: "北京市",
            value: "110000"
        }, {
            label: "天津市",
            value: "120000"
        }, {
            label: "河北省",
            value: "130000"
        }, {
            label: "山西省",
            value: "140000"
        }, {
            label: "内蒙古自治区",
            value: "150000"
        }, {
            label: "辽宁省",
            value: "210000"
        }, {
            label: "吉林省",
            value: "220000"
        }, {
            label: "黑龙江省",
            value: "230000"
        }, {
            label: "上海市",
            value: "310000"
        }, {
            label: "江苏省",
            value: "320000"
        }, {
            label: "浙江省",
            value: "330000"
        }, {
            label: "安徽省",
            value: "340000"
        }, {
            label: "福建省",
            value: "350000"
        }, {
            label: "江西省",
            value: "360000"
        }, {
            label: "山东省",
            value: "370000"
        }, {
            label: "河南省",
            value: "410000"
        }, {
            label: "湖北省",
            value: "420000"
        }, {
            label: "湖南省",
            value: "430000"
        }, {
            label: "广东省",
            value: "440000"
        }, {
            label: "广西壮族自治区",
            value: "450000"
        }, {
            label: "海南省",
            value: "460000"
        }, {
            label: "重庆市",
            value: "500000"
        }, {
            label: "四川省",
            value: "510000"
        }, {
            label: "贵州省",
            value: "520000"
        }, {
            label: "云南省",
            value: "530000"
        }, {
            label: "西藏自治区",
            value: "540000"
        }, {
            label: "陕西省",
            value: "610000"
        }, {
            label: "甘肃省",
            value: "620000"
        }, {
            label: "青海省",
            value: "630000"
        }, {
            label: "宁夏回族自治区",
            value: "640000"
        }, {
            label: "新疆维吾尔自治区",
            value: "650000"
        }, {
            label: "台湾",
            value: "710000"
        }, {
            label: "香港",
            value: "810000"
        }, {
            label: "澳门",
            value: "820000"
        } ];
        l.default = t;
    },
    "926e": function(e, l) {
        function c(e, l) {
            var a = (65535 & e) + (65535 & l);
            return (e >> 16) + (l >> 16) + (a >> 16) << 16 | 65535 & a;
        }
        function o(e, l, a, t, n, r) {
            return c((r = c(c(l, e), c(t, r))) << (n = n) | r >>> 32 - n, a);
        }
        function b(e, l, a, t, n, r, u) {
            return o(l & a | ~l & t, e, l, n, r, u);
        }
        function f(e, l, a, t, n, r, u) {
            return o(l & t | a & ~t, e, l, n, r, u);
        }
        function p(e, l, a, t, n, r, u) {
            return o(l ^ a ^ t, e, l, n, r, u);
        }
        function h(e, l, a, t, n, r, u) {
            return o(a ^ (l | ~t), e, l, n, r, u);
        }
        function u(e, l) {
            var a, t, n, r;
            e[l >> 5] |= 128 << l % 32, e[14 + (l + 64 >>> 9 << 4)] = l;
            for (var u = 1732584193, o = -271733879, i = -1732584194, s = 271733878, v = 0; v < e.length; v += 16) u = b(a = u, t = o, n = i, r = s, e[v], 7, -680876936), 
            s = b(s, u, o, i, e[v + 1], 12, -389564586), i = b(i, s, u, o, e[v + 2], 17, 606105819), 
            o = b(o, i, s, u, e[v + 3], 22, -1044525330), u = b(u, o, i, s, e[v + 4], 7, -176418897), 
            s = b(s, u, o, i, e[v + 5], 12, 1200080426), i = b(i, s, u, o, e[v + 6], 17, -1473231341), 
            o = b(o, i, s, u, e[v + 7], 22, -45705983), u = b(u, o, i, s, e[v + 8], 7, 1770035416), 
            s = b(s, u, o, i, e[v + 9], 12, -1958414417), i = b(i, s, u, o, e[v + 10], 17, -42063), 
            o = b(o, i, s, u, e[v + 11], 22, -1990404162), u = b(u, o, i, s, e[v + 12], 7, 1804603682), 
            s = b(s, u, o, i, e[v + 13], 12, -40341101), i = b(i, s, u, o, e[v + 14], 17, -1502002290), 
            u = f(u, o = b(o, i, s, u, e[v + 15], 22, 1236535329), i, s, e[v + 1], 5, -165796510), 
            s = f(s, u, o, i, e[v + 6], 9, -1069501632), i = f(i, s, u, o, e[v + 11], 14, 643717713), 
            o = f(o, i, s, u, e[v], 20, -373897302), u = f(u, o, i, s, e[v + 5], 5, -701558691), 
            s = f(s, u, o, i, e[v + 10], 9, 38016083), i = f(i, s, u, o, e[v + 15], 14, -660478335), 
            o = f(o, i, s, u, e[v + 4], 20, -405537848), u = f(u, o, i, s, e[v + 9], 5, 568446438), 
            s = f(s, u, o, i, e[v + 14], 9, -1019803690), i = f(i, s, u, o, e[v + 3], 14, -187363961), 
            o = f(o, i, s, u, e[v + 8], 20, 1163531501), u = f(u, o, i, s, e[v + 13], 5, -1444681467), 
            s = f(s, u, o, i, e[v + 2], 9, -51403784), i = f(i, s, u, o, e[v + 7], 14, 1735328473), 
            u = p(u, o = f(o, i, s, u, e[v + 12], 20, -1926607734), i, s, e[v + 5], 4, -378558), 
            s = p(s, u, o, i, e[v + 8], 11, -2022574463), i = p(i, s, u, o, e[v + 11], 16, 1839030562), 
            o = p(o, i, s, u, e[v + 14], 23, -35309556), u = p(u, o, i, s, e[v + 1], 4, -1530992060), 
            s = p(s, u, o, i, e[v + 4], 11, 1272893353), i = p(i, s, u, o, e[v + 7], 16, -155497632), 
            o = p(o, i, s, u, e[v + 10], 23, -1094730640), u = p(u, o, i, s, e[v + 13], 4, 681279174), 
            s = p(s, u, o, i, e[v], 11, -358537222), i = p(i, s, u, o, e[v + 3], 16, -722521979), 
            o = p(o, i, s, u, e[v + 6], 23, 76029189), u = p(u, o, i, s, e[v + 9], 4, -640364487), 
            s = p(s, u, o, i, e[v + 12], 11, -421815835), i = p(i, s, u, o, e[v + 15], 16, 530742520), 
            u = h(u, o = p(o, i, s, u, e[v + 2], 23, -995338651), i, s, e[v], 6, -198630844), 
            s = h(s, u, o, i, e[v + 7], 10, 1126891415), i = h(i, s, u, o, e[v + 14], 15, -1416354905), 
            o = h(o, i, s, u, e[v + 5], 21, -57434055), u = h(u, o, i, s, e[v + 12], 6, 1700485571), 
            s = h(s, u, o, i, e[v + 3], 10, -1894986606), i = h(i, s, u, o, e[v + 10], 15, -1051523), 
            o = h(o, i, s, u, e[v + 1], 21, -2054922799), u = h(u, o, i, s, e[v + 8], 6, 1873313359), 
            s = h(s, u, o, i, e[v + 15], 10, -30611744), i = h(i, s, u, o, e[v + 6], 15, -1560198380), 
            o = h(o, i, s, u, e[v + 13], 21, 1309151649), u = h(u, o, i, s, e[v + 4], 6, -145523070), 
            s = h(s, u, o, i, e[v + 11], 10, -1120210379), i = h(i, s, u, o, e[v + 2], 15, 718787259), 
            o = h(o, i, s, u, e[v + 9], 21, -343485551), u = c(u, a), o = c(o, t), i = c(i, n), 
            s = c(s, r);
            return [ u, o, i, s ];
        }
        function i(e) {
            for (var l = "", a = 32 * e.length, t = 0; t < a; t += 8) l += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return l;
        }
        function s(e) {
            var l = [];
            for (l[(e.length >> 2) - 1] = void 0, t = 0; t < l.length; t += 1) l[t] = 0;
            for (var a = 8 * e.length, t = 0; t < a; t += 8) l[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return l;
        }
        function t(e) {
            for (var l, a = "0123456789abcdef", t = "", n = 0; n < e.length; n += 1) l = e.charCodeAt(n), 
            t += a.charAt(l >>> 4 & 15) + a.charAt(15 & l);
            return t;
        }
        function a(e) {
            return unescape(encodeURIComponent(e));
        }
        function n(e) {
            return i(u(s(e = a(e)), 8 * e.length));
        }
        function r(e, l) {
            return function(e, l) {
                var a, t = s(e), n = [], r = [];
                for (n[15] = r[15] = void 0, 16 < t.length && (t = u(t, 8 * e.length)), a = 0; a < 16; a += 1) n[a] = 909522486 ^ t[a], 
                r[a] = 1549556828 ^ t[a];
                return l = u(n.concat(s(l)), 512 + 8 * l.length), i(u(r.concat(l), 640));
            }(a(e), a(l));
        }
        e.exports = function(e, l, a) {
            return l ? a ? r(l, e) : t(r(l, e)) : a ? n(e) : t(n(e));
        };
    },
    "96cf": function(e, l) {
        function r(e, l, a, t) {
            var n, r, u, o, l = l && l.prototype instanceof s ? l : s, l = Object.create(l.prototype), t = new c(t || []);
            return l._invoke = (n = e, r = a, u = t, o = d, function(e, l) {
                if (o === g) throw new Error("Generator is already running");
                if (o === _) {
                    if ("throw" === e) throw l;
                    return f();
                }
                for (u.method = e, u.arg = l; ;) {
                    var a = u.delegate;
                    if (a) {
                        var t = function e(l, a) {
                            var t = l.iterator[a.method];
                            if (t === h) {
                                if (a.delegate = null, "throw" === a.method) {
                                    if (l.iterator.return && (a.method = "return", a.arg = h, e(l, a), "throw" === a.method)) return m;
                                    a.method = "throw", a.arg = new TypeError("The iterator does not provide a 'throw' method");
                                }
                                return m;
                            }
                            t = i(t, l.iterator, a.arg);
                            if ("throw" === t.type) return a.method = "throw", a.arg = t.arg, a.delegate = null, 
                            m;
                            var t = t.arg;
                            return t ? t.done ? (a[l.resultName] = t.value, a.next = l.nextLoc, "return" !== a.method && (a.method = "next", 
                            a.arg = h), a.delegate = null, m) : t : (a.method = "throw", a.arg = new TypeError("iterator result is not an object"), 
                            a.delegate = null, m);
                        }(a, u);
                        if (t) {
                            if (t === m) continue;
                            return t;
                        }
                    }
                    if ("next" === u.method) u.sent = u._sent = u.arg; else if ("throw" === u.method) {
                        if (o === d) throw o = _, u.arg;
                        u.dispatchException(u.arg);
                    } else "return" === u.method && u.abrupt("return", u.arg);
                    o = g;
                    t = i(n, r, u);
                    if ("normal" === t.type) {
                        if (o = u.done ? _ : y, t.arg === m) continue;
                        return {
                            value: t.arg,
                            done: u.done
                        };
                    }
                    "throw" === t.type && (o = _, u.method = "throw", u.arg = t.arg);
                }
            }), l;
        }
        function i(e, l, a) {
            try {
                return {
                    type: "normal",
                    arg: e.call(l, a)
                };
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                };
            }
        }
        function s() {}
        function a() {}
        function t() {}
        function n(e) {
            [ "next", "throw", "return" ].forEach(function(l) {
                e[l] = function(e) {
                    return this._invoke(l, e);
                };
            });
        }
        function u(u) {
            var l;
            this._invoke = function(a, t) {
                function e() {
                    return new Promise(function(e, l) {
                        !function l(e, a, t, n) {
                            e = i(u[e], u, a);
                            if ("throw" !== e.type) {
                                var r = e.arg, a = r.value;
                                return a && "object" === (void 0 === a ? "undefined" : _typeof(a)) && O.call(a, "__await") ? Promise.resolve(a.__await).then(function(e) {
                                    l("next", e, t, n);
                                }, function(e) {
                                    l("throw", e, t, n);
                                }) : Promise.resolve(a).then(function(e) {
                                    r.value = e, t(r);
                                }, function(e) {
                                    return l("throw", e, t, n);
                                });
                            }
                            n(e.arg);
                        }(a, t, e, l);
                    });
                }
                return l = l ? l.then(e, e) : e();
            };
        }
        function o(e) {
            var l = {
                tryLoc: e[0]
            };
            1 in e && (l.catchLoc = e[1]), 2 in e && (l.finallyLoc = e[2], l.afterLoc = e[3]), 
            this.tryEntries.push(l);
        }
        function v(e) {
            var l = e.completion || {};
            l.type = "normal", delete l.arg, e.completion = l;
        }
        function c(e) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], e.forEach(o, this), this.reset(!0);
        }
        function b(l) {
            if (l) {
                var e = l[x];
                if (e) return e.call(l);
                if ("function" == typeof l.next) return l;
                if (!isNaN(l.length)) {
                    var a = -1, e = function e() {
                        for (;++a < l.length; ) if (O.call(l, a)) return e.value = l[a], e.done = !1, e;
                        return e.value = h, e.done = !0, e;
                    };
                    return e.next = e;
                }
            }
            return {
                next: f
            };
        }
        function f() {
            return {
                value: h,
                done: !0
            };
        }
        var p, h, d, y, g, _, m, w, S, O, k, x, A, E, T;
        p = function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self;
        }() || Function("return this")(), S = Object.prototype, O = S.hasOwnProperty, k = "function" == typeof Symbol ? Symbol : {}, 
        x = k.iterator || "@@iterator", A = k.asyncIterator || "@@asyncIterator", E = k.toStringTag || "@@toStringTag", 
        k = "object" === (void 0 === e ? "undefined" : _typeof(e)), (T = p.regeneratorRuntime) ? k && (e.exports = T) : ((T = p.regeneratorRuntime = k ? e.exports : {}).wrap = r, 
        d = "suspendedStart", y = "suspendedYield", g = "executing", _ = "completed", m = {}, 
        (p = {})[x] = function() {
            return this;
        }, (k = (k = Object.getPrototypeOf) && k(k(b([])))) && k !== S && O.call(k, x) && (p = k), 
        w = t.prototype = s.prototype = Object.create(p), (a.prototype = w.constructor = t).constructor = a, 
        t[E] = a.displayName = "GeneratorFunction", T.isGeneratorFunction = function(e) {
            e = "function" == typeof e && e.constructor;
            return !!e && (e === a || "GeneratorFunction" === (e.displayName || e.name));
        }, T.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t, E in e || (e[E] = "GeneratorFunction")), 
            e.prototype = Object.create(w), e;
        }, T.awrap = function(e) {
            return {
                __await: e
            };
        }, n(u.prototype), u.prototype[A] = function() {
            return this;
        }, T.AsyncIterator = u, T.async = function(e, l, a, t) {
            var n = new u(r(e, l, a, t));
            return T.isGeneratorFunction(l) ? n : n.next().then(function(e) {
                return e.done ? e.value : n.next();
            });
        }, n(w), w[E] = "Generator", w[x] = function() {
            return this;
        }, w.toString = function() {
            return "[object Generator]";
        }, T.keys = function(a) {
            var e, t = [];
            for (e in a) t.push(e);
            return t.reverse(), function e() {
                for (;t.length; ) {
                    var l = t.pop();
                    if (l in a) return e.value = l, e.done = !1, e;
                }
                return e.done = !0, e;
            };
        }, T.values = b, c.prototype = {
            constructor: c,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = h, this.done = !1, this.delegate = null, 
                this.method = "next", this.arg = h, this.tryEntries.forEach(v), !e) for (var l in this) "t" === l.charAt(0) && O.call(this, l) && !isNaN(+l.slice(1)) && (this[l] = h);
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function(a) {
                if (this.done) throw a;
                var t = this;
                function e(e, l) {
                    return r.type = "throw", r.arg = a, t.next = e, l && (t.method = "next", t.arg = h), 
                    !!l;
                }
                for (var l = this.tryEntries.length - 1; 0 <= l; --l) {
                    var n = this.tryEntries[l], r = n.completion;
                    if ("root" === n.tryLoc) return e("end");
                    if (n.tryLoc <= this.prev) {
                        var u = O.call(n, "catchLoc"), o = O.call(n, "finallyLoc");
                        if (u && o) {
                            if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
                            if (this.prev < n.finallyLoc) return e(n.finallyLoc);
                        } else if (u) {
                            if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
                        } else {
                            if (!o) throw new Error("try statement without catch or finally");
                            if (this.prev < n.finallyLoc) return e(n.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(e, l) {
                for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                    var t = this.tryEntries[a];
                    if (t.tryLoc <= this.prev && O.call(t, "finallyLoc") && this.prev < t.finallyLoc) {
                        var n = t;
                        break;
                    }
                }
                n && ("break" === e || "continue" === e) && n.tryLoc <= l && l <= n.finallyLoc && (n = null);
                var r = n ? n.completion : {};
                return r.type = e, r.arg = l, n ? (this.method = "next", this.next = n.finallyLoc, 
                m) : this.complete(r);
            },
            complete: function(e, l) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                this.method = "return", this.next = "end") : "normal" === e.type && l && (this.next = l), 
                m;
            },
            finish: function(e) {
                for (var l = this.tryEntries.length - 1; 0 <= l; --l) {
                    var a = this.tryEntries[l];
                    if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), v(a), m;
                }
            },
            catch: function(e) {
                for (var l = this.tryEntries.length - 1; 0 <= l; --l) {
                    var a = this.tryEntries[l];
                    if (a.tryLoc === e) {
                        var t, n = a.completion;
                        return "throw" === n.type && (t = n.arg, v(a)), t;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, l, a) {
                return this.delegate = {
                    iterator: b(e),
                    resultName: l,
                    nextLoc: a
                }, "next" === this.method && (this.arg = h), m;
            }
        });
    },
    a34a: function(e, l, a) {
        e.exports = a("bbdd");
    },
    a9ff: function(e, ke, xe) {
        (function(e, d) {
            var l;
            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return t(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, l) {
                    if (e) {
                        if ("string" == typeof e) return t(e, l);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? t(e, l) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function t(e, l) {
                (null == l || l > e.length) && (l = e.length);
                for (var a = 0, t = new Array(l); a < l; a++) t[a] = e[a];
                return t;
            }
            function n(e, l) {
                for (var a = 0; a < l.length; a++) {
                    var t = l[a];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
                    Object.defineProperty(e, t.key, t);
                }
            }
            function b(e, l, a) {
                return l && n(e.prototype, l), a && n(e, a), e;
            }
            function a(e, l, a) {
                return l in e ? Object.defineProperty(e, l, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[l] = a, e;
            }
            function f(e, l) {
                if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function");
            }
            function r(e, l) {
                if ("function" != typeof l && null !== l) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(l && l.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), l && p(e, l);
            }
            function u(a) {
                var t = v();
                return function() {
                    var e, l = h(a);
                    return e = t ? (e = h(this).constructor, Reflect.construct(l, arguments, e)) : l.apply(this, arguments), 
                    l = this, !(e = e) || "object" !== (void 0 === e ? "undefined" : _typeof(e)) && "function" != typeof e ? o(l) : e;
                };
            }
            function o(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function i(e) {
                var t = "function" == typeof Map ? new Map() : void 0;
                return (i = function(e) {
                    if (null === e || (l = e, -1 === Function.toString.call(l).indexOf("[native code]"))) return e;
                    var l;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, a);
                    }
                    function a() {
                        return s(e, arguments, h(this).constructor);
                    }
                    return a.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: a,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), p(a, e);
                })(e);
            }
            function s(e, l, a) {
                return (s = v() ? Reflect.construct : function(e, l, a) {
                    var t = [ null ];
                    t.push.apply(t, l);
                    t = new (Function.bind.apply(e, t))();
                    return a && p(t, a.prototype), t;
                }).apply(null, arguments);
            }
            function v() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }
            function p(e, l) {
                return (p = Object.setPrototypeOf || function(e, l) {
                    return e.__proto__ = l, e;
                })(e, l);
            }
            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            Object.defineProperty(ke, "__esModule", {
                value: !0
            }), ke.default = void 0, (l = xe("a34a")) && l.__esModule;
            var y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
            function g(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
            }
            function _(e, l, a) {
                return e(a = {
                    path: l,
                    exports: {},
                    require: function(e, l) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                        }(null == l && a.path);
                    }
                }, a.exports), a.exports;
            }
            var m = _(function(e, l) {
                var s, a, t, n, r, v, u, o, i, c, b;
                function f() {}
                e.exports = (s = Math, a = Object.create || function(e) {
                    return f.prototype = e, e = new f(), f.prototype = null, e;
                }, n = (t = {}).lib = {}, r = n.Base = {
                    extend: function(e) {
                        var l = a(this);
                        return e && l.mixIn(e), l.hasOwnProperty("init") && this.init !== l.init || (l.init = function() {
                            l.$super.init.apply(this, arguments);
                        }), (l.init.prototype = l).$super = this, l;
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e;
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var l in e) e.hasOwnProperty(l) && (this[l] = e[l]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString);
                    },
                    clone: function() {
                        return this.init.prototype.extend(this);
                    }
                }, v = n.WordArray = r.extend({
                    init: function(e, l) {
                        e = this.words = e || [], this.sigBytes = null != l ? l : 4 * e.length;
                    },
                    toString: function(e) {
                        return (e || u).stringify(this);
                    },
                    concat: function(e) {
                        var l = this.words, a = e.words, t = this.sigBytes, n = e.sigBytes;
                        if (this.clamp(), t % 4) for (var r = 0; r < n; r++) {
                            var u = a[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            l[t + r >>> 2] |= u << 24 - (t + r) % 4 * 8;
                        } else for (r = 0; r < n; r += 4) l[t + r >>> 2] = a[r >>> 2];
                        return this.sigBytes += n, this;
                    },
                    clamp: function() {
                        var e = this.words, l = this.sigBytes;
                        e[l >>> 2] &= 4294967295 << 32 - l % 4 * 8, e.length = s.ceil(l / 4);
                    },
                    clone: function() {
                        var e = r.clone.call(this);
                        return e.words = this.words.slice(0), e;
                    },
                    random: function(e) {
                        for (var l = [], a = 0; a < e; a += 4) {
                            var t = function(l) {
                                var a = 987654321, t = 4294967295;
                                return function() {
                                    var e = ((a = 36969 * (65535 & a) + (a >> 16) & t) << 16) + (l = 18e3 * (65535 & l) + (l >> 16) & t) & t;
                                    return e /= 4294967296, (e += .5) * (.5 < s.random() ? 1 : -1);
                                };
                            }(4294967296 * (n || s.random())), n = 987654071 * t();
                            l.push(4294967296 * t() | 0);
                        }
                        return new v.init(l, e);
                    }
                }), e = t.enc = {}, u = e.Hex = {
                    stringify: function(e) {
                        for (var l = e.words, a = e.sigBytes, t = [], n = 0; n < a; n++) {
                            var r = l[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                            t.push((r >>> 4).toString(16)), t.push((15 & r).toString(16));
                        }
                        return t.join("");
                    },
                    parse: function(e) {
                        for (var l = e.length, a = [], t = 0; t < l; t += 2) a[t >>> 3] |= parseInt(e.substr(t, 2), 16) << 24 - t % 8 * 4;
                        return new v.init(a, l / 2);
                    }
                }, o = e.Latin1 = {
                    stringify: function(e) {
                        for (var l = e.words, a = e.sigBytes, t = [], n = 0; n < a; n++) {
                            var r = l[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                            t.push(String.fromCharCode(r));
                        }
                        return t.join("");
                    },
                    parse: function(e) {
                        for (var l = e.length, a = [], t = 0; t < l; t++) a[t >>> 2] |= (255 & e.charCodeAt(t)) << 24 - t % 4 * 8;
                        return new v.init(a, l);
                    }
                }, i = e.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(o.stringify(e)));
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data");
                        }
                    },
                    parse: function(e) {
                        return o.parse(unescape(encodeURIComponent(e)));
                    }
                }, c = n.BufferedBlockAlgorithm = r.extend({
                    reset: function() {
                        this._data = new v.init(), this._nDataBytes = 0;
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = i.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                    },
                    _process: function(e) {
                        var l = this._data, a = l.words, t = l.sigBytes, n = this.blockSize, r = t / (4 * n), u = (r = e ? s.ceil(r) : s.max((0 | r) - this._minBufferSize, 0)) * n, t = s.min(4 * u, t);
                        if (u) {
                            for (var o = 0; o < u; o += n) this._doProcessBlock(a, o);
                            var i = a.splice(0, u);
                            l.sigBytes -= t;
                        }
                        return new v.init(i, t);
                    },
                    clone: function() {
                        var e = r.clone.call(this);
                        return e._data = this._data.clone(), e;
                    },
                    _minBufferSize: 0
                }), n.Hasher = c.extend({
                    cfg: r.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset();
                    },
                    reset: function() {
                        c.reset.call(this), this._doReset();
                    },
                    update: function(e) {
                        return this._append(e), this._process(), this;
                    },
                    finalize: function(e) {
                        return e && this._append(e), this._doFinalize();
                    },
                    blockSize: 16,
                    _createHelper: function(a) {
                        return function(e, l) {
                            return new a.init(l).finalize(e);
                        };
                    },
                    _createHmacHelper: function(a) {
                        return function(e, l) {
                            return new b.HMAC.init(a, l).finalize(e);
                        };
                    }
                }), b = t.algo = {}, t);
            }), w = (_(function(e, l) {
                var n;
                e.exports = (n = m, function(i) {
                    var e = n, l = e.lib, a = l.WordArray, t = l.Hasher, l = e.algo, A = [];
                    !function() {
                        for (var e = 0; e < 64; e++) A[e] = 4294967296 * i.abs(i.sin(e + 1)) | 0;
                    }();
                    l = l.MD5 = t.extend({
                        _doReset: function() {
                            this._hash = new a.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, l) {
                            for (var a = 0; a < 16; a++) {
                                var t = l + a, n = e[t];
                                e[t] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                            }
                            var r = this._hash.words, u = e[l + 0], o = e[l + 1], i = e[l + 2], s = e[l + 3], v = e[l + 4], c = e[l + 5], b = e[l + 6], f = e[l + 7], p = e[l + 8], h = e[l + 9], d = e[l + 10], y = e[l + 11], g = e[l + 12], _ = e[l + 13], m = e[l + 14], w = e[l + 15], S = E(S = r[0], x = r[1], k = r[2], O = r[3], u, 7, A[0]), O = E(O, S, x, k, o, 12, A[1]), k = E(k, O, S, x, i, 17, A[2]), x = E(x, k, O, S, s, 22, A[3]);
                            S = E(S, x, k, O, v, 7, A[4]), O = E(O, S, x, k, c, 12, A[5]), k = E(k, O, S, x, b, 17, A[6]), 
                            x = E(x, k, O, S, f, 22, A[7]), S = E(S, x, k, O, p, 7, A[8]), O = E(O, S, x, k, h, 12, A[9]), 
                            k = E(k, O, S, x, d, 17, A[10]), x = E(x, k, O, S, y, 22, A[11]), S = E(S, x, k, O, g, 7, A[12]), 
                            O = E(O, S, x, k, _, 12, A[13]), k = E(k, O, S, x, m, 17, A[14]), S = T(S, x = E(x, k, O, S, w, 22, A[15]), k, O, o, 5, A[16]), 
                            O = T(O, S, x, k, b, 9, A[17]), k = T(k, O, S, x, y, 14, A[18]), x = T(x, k, O, S, u, 20, A[19]), 
                            S = T(S, x, k, O, c, 5, A[20]), O = T(O, S, x, k, d, 9, A[21]), k = T(k, O, S, x, w, 14, A[22]), 
                            x = T(x, k, O, S, v, 20, A[23]), S = T(S, x, k, O, h, 5, A[24]), O = T(O, S, x, k, m, 9, A[25]), 
                            k = T(k, O, S, x, s, 14, A[26]), x = T(x, k, O, S, p, 20, A[27]), S = T(S, x, k, O, _, 5, A[28]), 
                            O = T(O, S, x, k, i, 9, A[29]), k = T(k, O, S, x, f, 14, A[30]), S = P(S, x = T(x, k, O, S, g, 20, A[31]), k, O, c, 4, A[32]), 
                            O = P(O, S, x, k, p, 11, A[33]), k = P(k, O, S, x, y, 16, A[34]), x = P(x, k, O, S, m, 23, A[35]), 
                            S = P(S, x, k, O, o, 4, A[36]), O = P(O, S, x, k, v, 11, A[37]), k = P(k, O, S, x, f, 16, A[38]), 
                            x = P(x, k, O, S, d, 23, A[39]), S = P(S, x, k, O, _, 4, A[40]), O = P(O, S, x, k, u, 11, A[41]), 
                            k = P(k, O, S, x, s, 16, A[42]), x = P(x, k, O, S, b, 23, A[43]), S = P(S, x, k, O, h, 4, A[44]), 
                            O = P(O, S, x, k, g, 11, A[45]), k = P(k, O, S, x, w, 16, A[46]), S = I(S, x = P(x, k, O, S, i, 23, A[47]), k, O, u, 6, A[48]), 
                            O = I(O, S, x, k, f, 10, A[49]), k = I(k, O, S, x, m, 15, A[50]), x = I(x, k, O, S, c, 21, A[51]), 
                            S = I(S, x, k, O, g, 6, A[52]), O = I(O, S, x, k, s, 10, A[53]), k = I(k, O, S, x, d, 15, A[54]), 
                            x = I(x, k, O, S, o, 21, A[55]), S = I(S, x, k, O, p, 6, A[56]), O = I(O, S, x, k, w, 10, A[57]), 
                            k = I(k, O, S, x, b, 15, A[58]), x = I(x, k, O, S, _, 21, A[59]), S = I(S, x, k, O, v, 6, A[60]), 
                            O = I(O, S, x, k, y, 10, A[61]), k = I(k, O, S, x, i, 15, A[62]), x = I(x, k, O, S, h, 21, A[63]), 
                            r[0] = r[0] + S | 0, r[1] = r[1] + x | 0, r[2] = r[2] + k | 0, r[3] = r[3] + O | 0;
                        },
                        _doFinalize: function() {
                            var e = this._data, l = e.words, a = 8 * this._nDataBytes, t = 8 * e.sigBytes;
                            l[t >>> 5] |= 128 << 24 - t % 32;
                            var n = i.floor(a / 4294967296), a = a;
                            l[15 + (64 + t >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                            l[14 + (64 + t >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            e.sigBytes = 4 * (l.length + 1), this._process();
                            for (var l = this._hash, r = l.words, u = 0; u < 4; u++) {
                                var o = r[u];
                                r[u] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                            }
                            return l;
                        },
                        clone: function() {
                            var e = t.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    });
                    function E(e, l, a, t, n, r, u) {
                        u = e + (l & a | ~l & t) + n + u;
                        return (u << r | u >>> 32 - r) + l;
                    }
                    function T(e, l, a, t, n, r, u) {
                        u = e + (l & t | a & ~t) + n + u;
                        return (u << r | u >>> 32 - r) + l;
                    }
                    function P(e, l, a, t, n, r, u) {
                        u = e + (l ^ a ^ t) + n + u;
                        return (u << r | u >>> 32 - r) + l;
                    }
                    function I(e, l, a, t, n, r, u) {
                        u = e + (a ^ (l | ~t)) + n + u;
                        return (u << r | u >>> 32 - r) + l;
                    }
                    e.MD5 = t._createHelper(l), e.HmacMD5 = t._createHmacHelper(l);
                }(Math), n.MD5);
            }), _(function(e, l) {
                var o;
                e.exports = (e = m.lib.Base, o = m.enc.Utf8, void (m.algo.HMAC = e.extend({
                    init: function(e, l) {
                        e = this._hasher = new e.init(), "string" == typeof l && (l = o.parse(l));
                        var a = e.blockSize, t = 4 * a;
                        l.sigBytes > t && (l = e.finalize(l)), l.clamp();
                        for (var e = this._oKey = l.clone(), l = this._iKey = l.clone(), n = e.words, r = l.words, u = 0; u < a; u++) n[u] ^= 1549556828, 
                        r[u] ^= 909522486;
                        e.sigBytes = l.sigBytes = t, this.reset();
                    },
                    reset: function() {
                        var e = this._hasher;
                        e.reset(), e.update(this._iKey);
                    },
                    update: function(e) {
                        return this._hasher.update(e), this;
                    },
                    finalize: function(e) {
                        var l = this._hasher, e = l.finalize(e);
                        return l.reset(), l.finalize(this._oKey.clone().concat(e));
                    }
                })));
            }), _(function(e, l) {
                e.exports = m.HmacMD5;
            }));
            function S(e) {
                return function(l) {
                    if (!((l = l || {}).success || l.fail || l.complete)) return e.call(this, l);
                    e.call(this, l).then(function(e) {
                        l.success && l.success(e), l.complete && l.complete(e);
                    }, function(e) {
                        l.fail && l.fail(e), l.complete && l.complete(e);
                    });
                };
            }
            var O, k, x, A = function() {
                r(t, i(Error));
                var a = u(t);
                function t(e) {
                    var l;
                    return f(this, t), (l = a.call(this, e.message)).errMsg = e.message || "", Object.defineProperties(o(l), {
                        code: {
                            get: function() {
                                return e.code;
                            }
                        },
                        requestId: {
                            get: function() {
                                return e.requestId;
                            }
                        },
                        message: {
                            get: function() {
                                return this.errMsg;
                            },
                            set: function(e) {
                                this.errMsg = e;
                            }
                        }
                    }), l;
                }
                return t;
            }();
            try {
                O = xe("f318").default || xe("f318");
            } catch (y) {
                O = {
                    appid: ""
                };
            }
            function E(e) {
                for (var l = 0 < arguments.length && void 0 !== e ? e : 8, a = ""; a.length < l; ) a += Math.random().toString(32).substring(2);
                return a.substring(0, l);
            }
            function T() {
                var e = {
                    "app-plus": "n",
                    h5: "h5",
                    "mp-weixin": "wx"
                };
                return a(e, [ "y", "a", "p", "mp-ali" ].reverse().join(""), "ali"), a(e, "mp-baidu", "bd"), 
                a(e, "mp-toutiao", "tt"), a(e, "mp-qq", "qq"), a(e, "quickapp-native", "qn"), e["mp-weixin"];
            }
            function P() {
                return {
                    ak: O.appid,
                    p: "android" === x ? "a" : "i",
                    ut: T(),
                    uuid: function() {
                        if ("n" !== T()) return k || (k = E(32), d.setStorage({
                            key: "__DC_CLOUD_UUID",
                            data: k
                        })), k;
                        try {
                            k = plus.runtime.getDCloudId();
                        } catch (e) {
                            k = "";
                        }
                        return k;
                    }()
                };
            }
            var I, j = function(l, e) {
                var a = "";
                return Object.keys(l).sort().forEach(function(e) {
                    l[e] && (a = a + "&" + e + "=" + l[e]);
                }), a = a.slice(1), w(a, e).toString();
            }, C = function(e, l) {
                return new Promise(function(a, t) {
                    l(Object.assign(e, {
                        complete: function(e) {
                            var l = (e = e || {}).data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
                            if (!e.statusCode || 400 <= e.statusCode) return t(new A({
                                code: "SYS_ERR",
                                message: e.errMsg || "request:fail",
                                requestId: l
                            }));
                            e = e.data;
                            if (e.error) return t(new A({
                                code: e.error.code,
                                message: e.error.message,
                                requestId: l
                            }));
                            e.result = e.data, e.requestId = l, delete e.data, a(e);
                        }
                    }));
                });
            }, $ = {
                request: function(e) {
                    return d.request(e);
                },
                uploadFile: function(e) {
                    return d.uploadFile(e);
                },
                setStorageSync: function(e, l) {
                    return d.setStorageSync(e, l);
                },
                getStorageSync: function(e) {
                    return d.getStorageSync(e);
                },
                removeStorageSync: function(e) {
                    return d.removeStorageSync(e);
                },
                clearStorageSync: function() {
                    return d.clearStorageSync();
                }
            }, D = (b(G, [ {
                key: "setAccessToken",
                value: function(e) {
                    this.accessToken = e;
                }
            }, {
                key: "requestWrapped",
                value: function(e) {
                    return C(e, this.adapter.request);
                }
            }, {
                key: "requestAuth",
                value: function(e) {
                    return this.requestWrapped(e);
                }
            }, {
                key: "request",
                value: function(l, e) {
                    var t = this;
                    return this.hasAccessToken ? e ? this.requestWrapped(l) : this.requestWrapped(l).catch(function(a) {
                        return new Promise(function(e, l) {
                            !a || "GATEWAY_INVALID_TOKEN" !== a.code && "InvalidParameter.InvalidToken" !== a.code ? l(a) : e();
                        }).then(function() {
                            return t.getAccessToken();
                        }).then(function() {
                            var e = t.rebuildRequest(l);
                            return t.request(e, !0);
                        });
                    }) : this.getAccessToken().then(function() {
                        var e = t.rebuildRequest(l);
                        return t.request(e, !0);
                    });
                }
            }, {
                key: "rebuildRequest",
                value: function(e) {
                    e = Object.assign({}, e);
                    return e.data.token = this.accessToken, e.header["x-basement-token"] = this.accessToken, 
                    e.header["x-serverless-sign"] = j(e.data, this.config.clientSecret), e;
                }
            }, {
                key: "setupRequest",
                value: function(e, l) {
                    var a = Object.assign({}, e, {
                        spaceId: this.config.spaceId,
                        timestamp: Date.now()
                    }), e = {
                        "Content-Type": "application/json"
                    };
                    return "auth" !== l && (a.token = this.accessToken, e["x-basement-token"] = this.accessToken), 
                    e["x-serverless-sign"] = j(a, this.config.clientSecret), {
                        url: this.config.requestUrl,
                        method: "POST",
                        data: a,
                        dataType: "json",
                        header: e
                    };
                }
            }, {
                key: "getAccessToken",
                value: function() {
                    var t = this;
                    return this.requestAuth(this.setupRequest({
                        method: "serverless.auth.user.anonymousAuthorize",
                        params: "{}"
                    }, "auth")).then(function(a) {
                        return new Promise(function(e, l) {
                            a.result && a.result.accessToken ? (t.setAccessToken(a.result.accessToken), e(t.accessToken)) : l(new A({
                                code: "AUTH_FAILED",
                                message: "获取accessToken失败"
                            }));
                        });
                    });
                }
            }, {
                key: "authorize",
                value: function() {
                    this.getAccessToken();
                }
            }, {
                key: "callFunction",
                value: function(e) {
                    e = {
                        method: "serverless.function.runtime.invoke",
                        params: JSON.stringify({
                            functionTarget: e.name,
                            functionArgs: e.data || {}
                        })
                    };
                    return this.request(this.setupRequest(e));
                }
            }, {
                key: "getOSSUploadOptionsFromPath",
                value: function(e) {
                    e = {
                        method: "serverless.file.resource.generateProximalSign",
                        params: JSON.stringify(e)
                    };
                    return this.request(this.setupRequest(e));
                }
            }, {
                key: "uploadFileToOSS",
                value: function(e) {
                    var t = this, n = e.url, r = e.formData, u = e.name, o = e.filePath, i = e.fileType, s = e.onUploadProgress;
                    return new Promise(function(l, a) {
                        var e = t.adapter.uploadFile({
                            url: n,
                            formData: r,
                            name: u,
                            filePath: o,
                            fileType: i,
                            header: {
                                "X-OSS-server-side-encrpytion": "AES256"
                            },
                            success: function(e) {
                                e && e.statusCode < 400 ? l(e) : a(new A({
                                    code: "UPLOAD_FAILED",
                                    message: "文件上传失败"
                                }));
                            },
                            fail: function(e) {
                                a(e);
                            }
                        });
                        "function" == typeof s && e && "function" == typeof e.onProgressUpdate && e.onProgressUpdate(function(e) {
                            s({
                                loaded: e.totalBytesSent,
                                total: e.totalBytesExpectedToSend
                            });
                        });
                    });
                }
            }, {
                key: "reportOSSUpload",
                value: function(e) {
                    e = {
                        method: "serverless.file.resource.report",
                        params: JSON.stringify(e)
                    };
                    return this.request(this.setupRequest(e));
                }
            }, {
                key: "uploadFile",
                value: function(e) {
                    var l = this, t = e.filePath, a = e.cloudPath, n = e.fileType, r = void 0 === n ? "image" : n, u = e.onUploadProgress, e = e.config;
                    if (!a) throw new A({
                        code: "CLOUDPATH_REQUIRED",
                        message: "cloudPath不可为空"
                    });
                    var o, i, e = e && e.envType || this.config.envType;
                    return this.getOSSUploadOptionsFromPath({
                        env: e,
                        filename: a
                    }).then(function(e) {
                        e = e.result;
                        o = e.id, i = "https://" + e.cdnDomain + "/" + e.ossPath;
                        e = {
                            url: "https://" + e.host,
                            formData: {
                                "Cache-Control": "max-age=2592000",
                                "Content-Disposition": "attachment",
                                OSSAccessKeyId: e.accessKeyId,
                                Signature: e.signature,
                                host: e.host,
                                id: o,
                                key: e.ossPath,
                                policy: e.policy,
                                success_action_status: 200
                            },
                            fileName: "file",
                            name: "file",
                            filePath: t,
                            fileType: r
                        };
                        return l.uploadFileToOSS(Object.assign({}, e, {
                            onUploadProgress: u
                        }));
                    }).then(function() {
                        return l.reportOSSUpload({
                            id: o
                        });
                    }).then(function(a) {
                        return new Promise(function(e, l) {
                            a.success ? e({
                                success: !0,
                                filePath: t,
                                fileID: i
                            }) : l(new A({
                                code: "UPLOAD_FAILED",
                                message: "文件上传失败"
                            }));
                        });
                    });
                }
            }, {
                key: "deleteFile",
                value: function(e) {
                    e = e.fileList, e = {
                        method: "serverless.file.resource.delete",
                        params: JSON.stringify({
                            id: e[0]
                        })
                    };
                    return this.request(this.setupRequest(e));
                }
            }, {
                key: "getTempFileURL",
                value: function() {
                    var a = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).fileList;
                    return new Promise(function(e, l) {
                        Array.isArray(a) && 0 !== a.length || l(new A({
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是非空的字符串"
                        })), e({
                            fileList: a.map(function(e) {
                                return {
                                    fileID: e,
                                    tempFileURL: e
                                };
                            })
                        });
                    });
                }
            }, {
                key: "hasAccessToken",
                get: function() {
                    return !!this.accessToken;
                }
            } ]), G), N = function(e) {
                var l = new D(e);
                [ "deleteFile", "getTempFileURL" ].forEach(function(e) {
                    l[e] = S(l[e]).bind(l);
                });
                var a = {
                    signInAnonymously: function() {
                        return l.authorize();
                    },
                    getLoginState: function() {
                        return Promise.resolve(!1);
                    }
                };
                return l.auth = function() {
                    return a;
                }, l.customAuth = l.auth, l;
            }, M = _(function(e, l) {
                Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l.getQuery = function(e, l) {
                    if ("undefined" == typeof window) return !1;
                    l = l || window.location.search, e = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), 
                    e = l.substr(l.indexOf("?") + 1).match(e);
                    return null != e ? e[2] : "";
                }, l.getHash = function(e) {
                    e = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)"));
                    return e ? e[1] : "";
                }, l.removeParam = function(e, l) {
                    var a = l.split("?")[0], t = [], l = -1 !== l.indexOf("?") ? l.split("?")[1] : "";
                    if ("" !== l) {
                        for (var n = (t = l.split("&")).length - 1; 0 <= n; --n) t[n].split("=")[0] === e && t.splice(n, 1);
                        a = a + "?" + t.join("&");
                    }
                    return a;
                }, l.createPromiseCallback = function() {
                    var e;
                    if (!Promise) {
                        (e = function() {}).promise = {};
                        var l = function() {
                            throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
                        };
                        return Object.defineProperty(e.promise, "then", {
                            get: l
                        }), Object.defineProperty(e.promise, "catch", {
                            get: l
                        }), e;
                    }
                    l = new Promise(function(a, t) {
                        e = function(e, l) {
                            return e ? t(e) : a(l);
                        };
                    });
                    return e.promise = l, e;
                }, l.getWeixinCode = function() {
                    return l.getQuery("code") || l.getHash("code");
                }, l.getMiniAppCode = function() {
                    return new Promise(function(l, a) {
                        wx.login({
                            success: function(e) {
                                l(e.code);
                            },
                            fail: function(e) {
                                a(e);
                            }
                        });
                    });
                }, l.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }, l.isString = function(e) {
                    return "string" == typeof e;
                }, l.isUndefined = function(e) {
                    return void 0 === e;
                }, l.isInstanceOf = function(e, l) {
                    return e instanceof l;
                }, l.isFormData = function(e) {
                    return "[object FormData]" === Object.prototype.toString.call(e);
                }, l.genSeqId = function() {
                    return Math.random().toString(16).slice(2);
                }, l.getArgNames = function(e) {
                    e = e.toString();
                    return e.slice(e.indexOf("(") + 1, e.indexOf(")")).match(/([^\s,]+)/g);
                }, l.formatUrl = function(e, l, a) {
                    void 0 === a && (a = {});
                    var t, n = /\?/.test(l), r = "";
                    for (t in a) "" === r ? n || (l += "?") : r += "&", r += t + "=" + encodeURIComponent(a[t]);
                    return /^http(s)?\:\/\//.test(l += r) ? l : "" + e + l;
                };
            }), F = "dist/index.js", R = "./dist/index.d.ts", L = {
                build: "npm run tsc && webpack",
                tsc: "tsc -p tsconfig.json",
                "tsc:w": "tsc -p tsconfig.json -w",
                test: "jest --verbose false -i",
                e2e: 'NODE_ENV=e2e webpack && jest --config="./jest.e2e.config.js"  --verbose false -i "e2e"',
                start: "webpack-dev-server --hot --open",
                eslint: 'eslint "./**/*.js" "./**/*.ts"',
                "eslint-fix": 'eslint --fix "./**/*.js" "./**/*.ts"',
                test_web: "npm run tsc && webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist --host jimmytest-088bef.tcb.qcloud.la --port 80 --disableHostCheck true --mode development --config webpack.test.js"
            }, U = {
                type: "git",
                url: "https://github.com/TencentCloudBase/tcb-js-sdk"
            }, B = [ "tcb", "js-sdk" ], q = {
                "@cloudbase/adapter-interface": "^0.2.0",
                "@cloudbase/adapter-wx_mp": "^0.2.1",
                "@cloudbase/database": "^0.9.8"
            }, H = {
                "@babel/core": "^7.6.2",
                "@babel/plugin-proposal-class-properties": "^7.5.5",
                "@babel/plugin-proposal-object-rest-spread": "^7.6.2",
                "@babel/plugin-transform-runtime": "^7.6.2",
                "@babel/preset-env": "^7.6.2",
                "@babel/preset-typescript": "^7.6.0",
                "@babel/runtime": "^7.6.2",
                "@types/jest": "^23.1.4",
                "@types/node": "^10.14.4",
                "@types/superagent": "^4.1.4",
                axios: "^0.19.0",
                "babel-eslint": "^10.0.1",
                "babel-loader": "^8.0.6",
                "babel-polyfill": "^6.26.0",
                eslint: "^5.16.0",
                "eslint-config-alloy": "^1.4.2",
                "eslint-config-prettier": "^4.1.0",
                "eslint-plugin-prettier": "^3.0.1",
                "eslint-plugin-typescript": "^1.0.0-rc.3",
                express: "^4.17.1",
                husky: "^3.1.0",
                jest: "^24.7.1",
                "jest-puppeteer": "^4.3.0",
                "lint-staged": "^9.5.0",
                "power-assert": "^1.6.1",
                puppeteer: "^1.20.0",
                "serve-static": "^1.14.1",
                "ts-jest": "^23.10.4",
                "ts-loader": "^6.2.1",
                typescript: "^3.4.3",
                "typescript-eslint-parser": "^22.0.0",
                webpack: "^4.41.3",
                "webpack-bundle-analyzer": "^3.4.1",
                "webpack-cli": "^3.3.0",
                "webpack-dev-server": "^3.3.1",
                "webpack-merge": "^4.2.2",
                "webpack-visualizer-plugin": "^0.1.11"
            }, z = {
                hooks: {
                    "pre-commit": "lint-staged"
                }
            }, e = {
                name: "tcb-js-sdk",
                version: "1.3.5",
                description: "js sdk for tcb",
                main: F,
                types: R,
                scripts: L,
                repository: U,
                keywords: B,
                author: "jimmyjzhang",
                license: "ISC",
                dependencies: q,
                devDependencies: H,
                husky: z,
                "lint-staged": {
                    "*.{js,ts}": [ "eslint --fix", "git add" ]
                }
            }, K = (z = Object.freeze({
                __proto__: null,
                name: "tcb-js-sdk",
                version: "1.3.5",
                description: "js sdk for tcb",
                main: F,
                types: R,
                scripts: L,
                repository: U,
                keywords: B,
                author: "jimmyjzhang",
                license: "ISC",
                dependencies: q,
                devDependencies: H,
                husky: z,
                default: e
            })) && z.default || z, V = _(function(e, l) {
                var a = y && y.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var l = {};
                    if (null != e) for (var a in e) Object.hasOwnProperty.call(e, a) && (l[a] = e[a]);
                    return l.default = e, l;
                };
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                a = a(K);
                l.SDK_VERISON = a.version, l.ACCESS_TOKEN = "access_token", l.ACCESS_TOKEN_Expire = "access_token_expire", 
                l.REFRESH_TOKEN = "refresh_token", l.ANONYMOUS_UUID = "anonymous_uuid", l.LOGIN_TYPE_KEY = "login_type", 
                l.protocol = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:", 
                l.BASE_URL = "//tcb-api.tencentcloudapi.com/web";
            });
            function G(l) {
                f(this, G), [ "spaceId", "clientSecret" ].forEach(function(e) {
                    if (!Object.prototype.hasOwnProperty.call(l, e)) throw new Error("缺少参数" + e);
                }), this.config = Object.assign({}, {
                    endpoint: "https://api.bspapp.com"
                }, l), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", 
                this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, 
                this.adapter = $;
            }
            (e = I = I || {}).local = "local", e.none = "none", e.session = "session";
            var Y = Object.freeze({
                __proto__: null,
                get StorageType() {
                    return I;
                },
                AbstractSDKRequest: function() {},
                AbstractStorage: function() {},
                formatUrl: function(e, l, a) {
                    void 0 === a && (a = {});
                    var t, n = /\?/.test(l), r = "";
                    for (t in a) "" === r ? n || (l += "?") : r += "&", r += t + "=" + encodeURIComponent(a[t]);
                    return /^http(s)?\:\/\//.test(l += r) ? l : "" + e + l;
                }
            }), W = _(function(e, l) {
                var t, a = y && y.__extends || (t = function(e, l) {
                    return (t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(e, l) {
                        e.__proto__ = l;
                    } || function(e, l) {
                        for (var a in l) l.hasOwnProperty(a) && (e[a] = l[a]);
                    })(e, l);
                }, function(e, l) {
                    function a() {
                        this.constructor = e;
                    }
                    t(e, l), e.prototype = null === l ? Object.create(l) : (a.prototype = l.prototype, 
                    new a());
                }), u = y && y.__assign || function() {
                    return (u = Object.assign || function(e) {
                        for (var l, a = 1, t = arguments.length; a < t; a++) for (var n in l = arguments[a]) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                        return e;
                    }).apply(this, arguments);
                }, n = y && y.__awaiter || function(e, u, o, i) {
                    return new (o = o || Promise)(function(a, l) {
                        function t(e) {
                            try {
                                r(i.next(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function n(e) {
                            try {
                                r(i.throw(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function r(e) {
                            var l;
                            e.done ? a(e.value) : ((l = e.value) instanceof o ? l : new o(function(e) {
                                e(l);
                            })).then(t, n);
                        }
                        r((i = i.apply(e, u || [])).next());
                    });
                }, r = y && y.__generator || function(a, t) {
                    var n, r, u, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1];
                        },
                        trys: [],
                        ops: []
                    }, e = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this;
                    }), e;
                    function l(l) {
                        return function(e) {
                            return function(l) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (;o; ) try {
                                    if (n = 1, r && (u = 2 & l[0] ? r.return : l[0] ? r.throw || ((u = r.return) && u.call(r), 
                                    0) : r.next) && !(u = u.call(r, l[1])).done) return u;
                                    switch (r = 0, u && (l = [ 2 & l[0], u.value ]), l[0]) {
                                      case 0:
                                      case 1:
                                        u = l;
                                        break;

                                      case 4:
                                        return o.label++, {
                                            value: l[1],
                                            done: !1
                                        };

                                      case 5:
                                        o.label++, r = l[1], l = [ 0 ];
                                        continue;

                                      case 7:
                                        l = o.ops.pop(), o.trys.pop();
                                        continue;

                                      default:
                                        if (!((u = 0 < (u = o.trys).length && u[u.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue;
                                        }
                                        if (3 === l[0] && (!u || l[1] > u[0] && l[1] < u[3])) {
                                            o.label = l[1];
                                            break;
                                        }
                                        if (6 === l[0] && o.label < u[1]) {
                                            o.label = u[1], u = l;
                                            break;
                                        }
                                        if (u && o.label < u[2]) {
                                            o.label = u[2], o.ops.push(l);
                                            break;
                                        }
                                        u[2] && o.ops.pop(), o.trys.pop();
                                        continue;
                                    }
                                    l = t.call(a, o);
                                } catch (e) {
                                    l = [ 6, e ], r = 0;
                                } finally {
                                    n = u = 0;
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                };
                            }([ l, e ]);
                        };
                    }
                };
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                var o, i = (o = Y.AbstractSDKRequest, a(s, o), s.prototype.get = function(e) {
                    return this._request(u(u({}, e), {
                        method: "get"
                    }));
                }, s.prototype.post = function(e) {
                    return this._request(u(u({}, e), {
                        method: "post"
                    }));
                }, s.prototype.upload = function(e) {
                    var l, a = e.data, t = e.file, n = e.name, r = new FormData();
                    for (l in a) r.append(l, a[l]);
                    return r.append("key", n), r.append("file", t), this._request(u(u({}, e), {
                        data: r,
                        method: "post"
                    }));
                }, s.prototype.download = function(t) {
                    return n(this, void 0, void 0, function() {
                        var l, a;
                        return r(this, function(e) {
                            return l = decodeURIComponent(new URL(t.url).pathname.split("/").pop() || ""), (a = document.createElement("a")).href = t.url, 
                            a.setAttribute("download", l), a.setAttribute("target", "_blank"), document.body.appendChild(a), 
                            a.click(), [ 2, new Promise(function(e) {
                                e({
                                    statusCode: 200,
                                    tempFilePath: t.url
                                });
                            }) ];
                        });
                    });
                }, s.prototype._request = function(o) {
                    var i = String(o.method).toLowerCase() || "get";
                    return new Promise(function(l) {
                        var e, a = o.url, t = o.headers, n = void 0 === t ? {} : t, r = o.data, t = o.responseType, a = M.formatUrl(V.protocol, a, "get" === i ? r : {}), u = new XMLHttpRequest();
                        for (e in u.open(i, a), t && (u.responseType = t), n) u.setRequestHeader(e, n[e]);
                        u.onreadystatechange = function() {
                            if (4 === u.readyState) {
                                var e = {
                                    statusCode: u.status
                                };
                                try {
                                    e.data = JSON.parse(u.responseText);
                                } catch (e) {}
                                l(e);
                            }
                        }, u.send("post" === i && M.isFormData(r) ? r : JSON.stringify(r || {}));
                    });
                }, s);
                function s() {
                    return null !== o && o.apply(this, arguments) || this;
                }
                l.WebRequest = i, l.genAdapter = function() {
                    return {
                        root: window,
                        reqClass: i,
                        wsClass: WebSocket,
                        localStorage: localStorage,
                        sessionStorage: sessionStorage
                    };
                };
            }), X = _(function(e, l) {
                var a = y && y.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var l = {};
                    if (null != e) for (var a in e) Object.hasOwnProperty.call(e, a) && (l[a] = e[a]);
                    return l.default = e, l;
                };
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                var t, n = a(W);
                (a = t = l.RUNTIME || (l.RUNTIME = {})).WEB = "web", a.WX_MP = "wx_mp", l.useAdapters = function(e) {
                    for (var l = 0, a = M.isArray(e) ? e : [ e ]; l < a.length; l++) {
                        var t = a[l], n = t.isMatch, r = t.genAdapter, t = t.runtime;
                        if (n()) return {
                            adapter: r(),
                            runtime: t
                        };
                    }
                }, l.useDefaultAdapter = function() {
                    return {
                        adapter: n.genAdapter(),
                        runtime: t.WEB
                    };
                }, l.Adapter = {
                    adapter: null,
                    runtime: void 0
                };
            }), J = _(function(e, l) {
                var t, a = y && y.__extends || (t = function(e, l) {
                    return (t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(e, l) {
                        e.__proto__ = l;
                    } || function(e, l) {
                        for (var a in l) l.hasOwnProperty(a) && (e[a] = l[a]);
                    })(e, l);
                }, function(e, l) {
                    function a() {
                        this.constructor = e;
                    }
                    t(e, l), e.prototype = null === l ? Object.create(l) : (a.prototype = l.prototype, 
                    new a());
                });
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                var n = (r.prototype.setStore = function(e, l, a) {
                    try {
                        if (!this.storageClass) return;
                    } catch (e) {
                        return;
                    }
                    var t, n = {};
                    n.version = a || "localCachev1", n.content = l, t = JSON.stringify(n);
                    try {
                        this.storageClass.setItem(e, t);
                    } catch (e) {
                        return;
                    }
                }, r.prototype.getStore = function(e, l) {
                    try {
                        if (!this.storageClass) return;
                    } catch (e) {
                        return "";
                    }
                    l = l || "localCachev1";
                    var a = this.storageClass.getItem(e);
                    return a && 0 <= a.indexOf(l) ? JSON.parse(a).content : "";
                }, r.prototype.removeStore = function(e) {
                    this.storageClass.removeItem(e);
                }, r);
                function r(e) {
                    switch (X.Adapter.adapter.primaryStorage || e) {
                      case "local":
                        this.storageClass = X.Adapter.adapter.localStorage || new o();
                        break;

                      case "none":
                        this.storageClass = new o();
                        break;

                      default:
                        this.storageClass = X.Adapter.adapter.sessionStorage || new o();
                    }
                }
                l.Cache = n;
                var u, o = (u = Y.AbstractStorage, a(i, u), i.prototype.setItem = function(e, l) {
                    X.Adapter.adapter.root.tcbObject[e] = l;
                }, i.prototype.getItem = function(e) {
                    return X.Adapter.adapter.root.tcbObject[e];
                }, i.prototype.removeItem = function(e) {
                    delete X.Adapter.adapter.root.tcbObject[e];
                }, i.prototype.clear = function() {
                    delete X.Adapter.adapter.root.tcbObject;
                }, i);
                function i() {
                    var e = u.call(this) || this;
                    return X.Adapter.adapter.root.tcbObject || (X.Adapter.adapter.root.tcbObject = {}), 
                    e;
                }
            }), Q = _(function(e, l) {
                var t, a = y && y.__extends || (t = function(e, l) {
                    return (t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(e, l) {
                        e.__proto__ = l;
                    } || function(e, l) {
                        for (var a in l) l.hasOwnProperty(a) && (e[a] = l[a]);
                    })(e, l);
                }, function(e, l) {
                    function a() {
                        this.constructor = e;
                    }
                    t(e, l), e.prototype = null === l ? Object.create(l) : (a.prototype = l.prototype, 
                    new a());
                }), r = y && y.__spreadArrays || function() {
                    for (var e = 0, l = 0, a = arguments.length; l < a; l++) e += arguments[l].length;
                    for (var t = Array(e), n = 0, l = 0; l < a; l++) for (var r = arguments[l], u = 0, o = r.length; u < o; u++, 
                    n++) t[n] = r[u];
                    return t;
                };
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                function u(e, l) {
                    this.data = l || null, this.name = e;
                }
                l.IEvent = u;
                var n, o = (a(i, n = u), i);
                function i(e, l) {
                    l = n.call(this, "error", {
                        error: e,
                        data: l
                    }) || this;
                    return l.error = e, l;
                }
                l.IErrorEvent = o;
                s.prototype.on = function(e, l) {
                    return a = e, e = l, (l = this._listeners)[a] = l[a] || [], l[a].push(e), this;
                    var a;
                }, s.prototype.off = function(e, l) {
                    return a = e, (e = this._listeners) && e[a] && (-1 !== (l = e[a].indexOf(l)) && e[a].splice(l, 1)), 
                    this;
                    var a;
                }, s.prototype.fire = function(e, l) {
                    if (M.isInstanceOf(e, o)) return console.error(e.error), this;
                    var a = M.isString(e) ? new u(e, l || {}) : e, e = a.name;
                    if (this._listens(e)) for (var t = 0, n = (a.target = this)._listeners[e] ? r(this._listeners[e]) : []; t < n.length; t++) n[t].call(this, a);
                    return this;
                }, s.prototype._listens = function(e) {
                    return this._listeners[e] && 0 < this._listeners[e].length;
                }, a = s;
                function s() {
                    this._listeners = {};
                }
                var v = new (l.IEventEmitter = a)();
                l.addEventListener = function(e, l) {
                    v.on(e, l);
                }, l.activateEvent = function(e, l) {
                    void 0 === l && (l = {}), v.fire(e, l);
                }, l.removeEventListener = function(e, l) {
                    v.off(e, l);
                }, l.EVENTS = {
                    LOGIN_STATE_CHANGED: "loginStateChanged",
                    LOGIN_STATE_EXPIRE: "loginStateExpire",
                    LOGIN_TYPE_CHANGE: "loginTypeChanged",
                    ANONYMOUS_CONVERTED: "anonymousConverted",
                    REFRESH_ACCESS_TOKEN: "refreshAccessToken"
                };
            }), Z = _(function(e, l) {
                var b = y && y.__assign || function() {
                    return (b = Object.assign || function(e) {
                        for (var l, a = 1, t = arguments.length; a < t; a++) for (var n in l = arguments[a]) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                        return e;
                    }).apply(this, arguments);
                }, a = y && y.__awaiter || function(e, u, o, i) {
                    return new (o = o || Promise)(function(a, l) {
                        function t(e) {
                            try {
                                r(i.next(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function n(e) {
                            try {
                                r(i.throw(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function r(e) {
                            var l;
                            e.done ? a(e.value) : ((l = e.value) instanceof o ? l : new o(function(e) {
                                e(l);
                            })).then(t, n);
                        }
                        r((i = i.apply(e, u || [])).next());
                    });
                }, f = y && y.__generator || function(a, t) {
                    var n, r, u, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1];
                        },
                        trys: [],
                        ops: []
                    }, e = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this;
                    }), e;
                    function l(l) {
                        return function(e) {
                            return function(l) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (;o; ) try {
                                    if (n = 1, r && (u = 2 & l[0] ? r.return : l[0] ? r.throw || ((u = r.return) && u.call(r), 
                                    0) : r.next) && !(u = u.call(r, l[1])).done) return u;
                                    switch (r = 0, u && (l = [ 2 & l[0], u.value ]), l[0]) {
                                      case 0:
                                      case 1:
                                        u = l;
                                        break;

                                      case 4:
                                        return o.label++, {
                                            value: l[1],
                                            done: !1
                                        };

                                      case 5:
                                        o.label++, r = l[1], l = [ 0 ];
                                        continue;

                                      case 7:
                                        l = o.ops.pop(), o.trys.pop();
                                        continue;

                                      default:
                                        if (!((u = 0 < (u = o.trys).length && u[u.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue;
                                        }
                                        if (3 === l[0] && (!u || l[1] > u[0] && l[1] < u[3])) {
                                            o.label = l[1];
                                            break;
                                        }
                                        if (6 === l[0] && o.label < u[1]) {
                                            o.label = u[1], u = l;
                                            break;
                                        }
                                        if (u && o.label < u[2]) {
                                            o.label = u[2], o.ops.push(l);
                                            break;
                                        }
                                        u[2] && o.ops.pop(), o.trys.pop();
                                        continue;
                                    }
                                    l = t.call(a, o);
                                } catch (e) {
                                    l = [ 6, e ], r = 0;
                                } finally {
                                    n = u = 0;
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                };
                            }([ l, e ]);
                        };
                    }
                };
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                var p = [ "auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously" ], t = {
                    "X-SDK-Version": V.SDK_VERISON
                };
                function n(r, e, u) {
                    var o = r[e];
                    r[e] = function(a) {
                        var t = {}, n = {};
                        u.forEach(function(e) {
                            var l = e.call(r, a), e = l.data, l = l.headers;
                            Object.assign(t, e), Object.assign(n, l);
                        });
                        var l = a.data;
                        return l && function() {
                            if (M.isFormData(l)) for (var e in t) l.append(e, t[e]); else a.data = b(b({}, l), t);
                        }(), a.headers = b(b({}, a.headers || {}), n), o.call(r, a);
                    };
                }
                function r() {
                    var e = M.genSeqId();
                    return {
                        data: {
                            seqId: e
                        },
                        headers: b(b({}, t), {
                            "x-seqid": e
                        })
                    };
                }
                var u = (o.prototype.post = function(l) {
                    return a(this, void 0, void 0, function() {
                        return f(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return [ 4, this._reqClass.post(l) ];

                              case 1:
                                return [ 2, e.sent() ];
                            }
                        });
                    });
                }, o.prototype.upload = function(l) {
                    return a(this, void 0, void 0, function() {
                        return f(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return [ 4, this._reqClass.upload(l) ];

                              case 1:
                                return [ 2, e.sent() ];
                            }
                        });
                    });
                }, o.prototype.download = function(l) {
                    return a(this, void 0, void 0, function() {
                        return f(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return [ 4, this._reqClass.download(l) ];

                              case 1:
                                return [ 2, e.sent() ];
                            }
                        });
                    });
                }, o.prototype.refreshAccessToken = function() {
                    return a(this, void 0, void 0, function() {
                        var l, a;
                        return f(this, function(e) {
                            switch (e.label) {
                              case 0:
                                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), 
                                e.label = 1;

                              case 1:
                                return e.trys.push([ 1, 3, , 4 ]), [ 4, this._refreshAccessTokenPromise ];

                              case 2:
                                return l = e.sent(), [ 3, 4 ];

                              case 3:
                                return a = e.sent(), a = a, [ 3, 4 ];

                              case 4:
                                if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, 
                                a) throw a;
                                return [ 2, l ];
                            }
                        });
                    });
                }, o.prototype._refreshAccessToken = function() {
                    return a(this, void 0, void 0, function() {
                        var l, a;
                        return f(this, function(e) {
                            switch (e.label) {
                              case 0:
                                if (this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), 
                                !(l = this.cache.getStore(this.refreshTokenKey))) throw new Error("[tcb-js-sdk] 未登录CloudBase");
                                return a = {
                                    refresh_token: l
                                }, this.cache.getStore(this.loginTypeKey) === ee.LOGINTYPE.ANONYMOUS && (a.anonymous_uuid = this.cache.getStore(this.anonymousUuidKey)), 
                                [ 4, this.request("auth.getJwt", a) ];

                              case 1:
                                if ((l = e.sent()).data.code) throw "SIGN_PARAM_INVALID" !== (a = l.data.code) && "REFRESH_TOKEN_EXPIRED" !== a && "INVALID_REFRESH_TOKEN" !== a || (Q.activateEvent(Q.EVENTS.LOGIN_STATE_EXPIRE), 
                                this.cache.removeStore(this.refreshTokenKey)), new Error("[tcb-js-sdk] 刷新access token失败：" + l.data.code);
                                return l.data.access_token ? (Q.activateEvent(Q.EVENTS.REFRESH_ACCESS_TOKEN), this.cache.setStore(this.accessTokenKey, l.data.access_token), 
                                this.cache.setStore(this.accessTokenExpireKey, l.data.access_token_expire + Date.now()), 
                                Q.activateEvent(Q.EVENTS.LOGIN_TYPE_CHANGE, l.data.login_type), [ 2, {
                                    accessToken: l.data.access_token,
                                    accessTokenExpire: l.data.access_token_expire
                                } ]) : (l.data.refresh_token && (this.cache.removeStore(this.refreshTokenKey), this.cache.setStore(this.refreshTokenKey, l.data.refresh_token), 
                                this._refreshAccessToken()), [ 2 ]);
                            }
                        });
                    });
                }, o.prototype.getAccessToken = function() {
                    return a(this, void 0, void 0, function() {
                        var l, a, t, n;
                        return f(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return l = this.cache.getStore(this.accessTokenKey), a = this.cache.getStore(this.accessTokenExpireKey), 
                                t = !0, (n = this._shouldRefreshAccessTokenHook) ? [ 4, this._shouldRefreshAccessTokenHook(l, a) ] : [ 3, 2 ];

                              case 1:
                                n = !e.sent(), e.label = 2;

                              case 2:
                                return n && (t = !1), (!l || !a || a < Date.now()) && t ? [ 2, this.refreshAccessToken() ] : [ 2, {
                                    accessToken: l,
                                    accessTokenExpire: a
                                } ];
                            }
                        });
                    });
                }, o.prototype.request = function(s, v, c) {
                    return a(this, void 0, void 0, function() {
                        var l, a, t, n, r, u, o, i;
                        return f(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return o = "application/x-www-form-urlencoded", l = b({
                                    action: s,
                                    env: this.config.env,
                                    dataVersion: "2019-08-16"
                                }, v), -1 !== p.indexOf(s) ? [ 3, 2 ] : (u = l, [ 4, this.getAccessToken() ]);

                              case 1:
                                u.access_token = e.sent().accessToken, e.label = 2;

                              case 2:
                                if ("storage.uploadFile" === s) {
                                    for (t in a = new FormData()) a.hasOwnProperty(t) && void 0 !== a[t] && a.append(t, l[t]);
                                    o = "multipart/form-data";
                                } else o = "application/json;charset=UTF-8", a = l;
                                return i = {
                                    headers: {
                                        "content-type": o
                                    }
                                }, c && c.onUploadProgress && (i.onUploadProgress = c.onUploadProgress), n = v.parse, 
                                r = v.query, u = v.search, o = {
                                    env: this.config.env
                                }, n && (o.parse = !0), r && (o = b(b({}, r), o)), o = M.formatUrl(V.protocol, V.BASE_URL, o), 
                                u && (o += u), [ 4, this.post(b({
                                    url: o,
                                    data: a
                                }, i)) ];

                              case 3:
                                if (i = e.sent(), 200 !== Number(i.status) && 200 !== Number(i.statusCode) || !i.data) throw new Error("network request error");
                                return [ 2, i ];
                            }
                        });
                    });
                }, o.prototype.send = function(t, n) {
                    return void 0 === n && (n = {}), a(this, void 0, void 0, function() {
                        var l, a;
                        return f(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return [ 4, this.request(t, n, {
                                    onUploadProgress: n.onUploadProgress
                                }) ];

                              case 1:
                                return l = e.sent(), clearTimeout(void 0), "ACCESS_TOKEN_EXPIRED" !== l.data.code || -1 !== p.indexOf(t) ? [ 3, 4 ] : [ 4, this.refreshAccessToken() ];

                              case 2:
                                return e.sent(), [ 4, this.request(t, n, {
                                    onUploadProgress: n.onUploadProgress
                                }) ];

                              case 3:
                                if ((a = e.sent()).data.code) throw new Error("[" + a.data.code + "] " + a.data.message);
                                return [ 2, a.data ];

                              case 4:
                                if (l.data.code) throw new Error("[" + l.data.code + "] " + l.data.message);
                                return [ 2, l.data ];
                            }
                        });
                    });
                }, o);
                function o(e) {
                    void 0 === e && (e = {}), this.config = e, this.cache = new J.Cache(e.persistence), 
                    this.accessTokenKey = V.ACCESS_TOKEN + "_" + e.env, this.accessTokenExpireKey = V.ACCESS_TOKEN_Expire + "_" + e.env, 
                    this.refreshTokenKey = V.REFRESH_TOKEN + "_" + e.env, this.anonymousUuidKey = V.ANONYMOUS_UUID + "_" + e.env, 
                    this.loginTypeKey = V.LOGIN_TYPE_KEY + "_" + e.env, this._reqClass = new X.Adapter.adapter.reqClass(), 
                    n(this._reqClass, "post", [ r ]), n(this._reqClass, "upload", [ r ]), n(this._reqClass, "download", [ r ]);
                }
                l.Request = u;
            }), ee = _(function(e, l) {
                var a, r = y && y.__awaiter || function(e, u, o, i) {
                    return new (o = o || Promise)(function(a, l) {
                        function t(e) {
                            try {
                                r(i.next(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function n(e) {
                            try {
                                r(i.throw(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function r(e) {
                            var l;
                            e.done ? a(e.value) : ((l = e.value) instanceof o ? l : new o(function(e) {
                                e(l);
                            })).then(t, n);
                        }
                        r((i = i.apply(e, u || [])).next());
                    });
                }, u = y && y.__generator || function(a, t) {
                    var n, r, u, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1];
                        },
                        trys: [],
                        ops: []
                    }, e = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this;
                    }), e;
                    function l(l) {
                        return function(e) {
                            return function(l) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (;o; ) try {
                                    if (n = 1, r && (u = 2 & l[0] ? r.return : l[0] ? r.throw || ((u = r.return) && u.call(r), 
                                    0) : r.next) && !(u = u.call(r, l[1])).done) return u;
                                    switch (r = 0, u && (l = [ 2 & l[0], u.value ]), l[0]) {
                                      case 0:
                                      case 1:
                                        u = l;
                                        break;

                                      case 4:
                                        return o.label++, {
                                            value: l[1],
                                            done: !1
                                        };

                                      case 5:
                                        o.label++, r = l[1], l = [ 0 ];
                                        continue;

                                      case 7:
                                        l = o.ops.pop(), o.trys.pop();
                                        continue;

                                      default:
                                        if (!((u = 0 < (u = o.trys).length && u[u.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue;
                                        }
                                        if (3 === l[0] && (!u || l[1] > u[0] && l[1] < u[3])) {
                                            o.label = l[1];
                                            break;
                                        }
                                        if (6 === l[0] && o.label < u[1]) {
                                            o.label = u[1], u = l;
                                            break;
                                        }
                                        if (u && o.label < u[2]) {
                                            o.label = u[2], o.ops.push(l);
                                            break;
                                        }
                                        u[2] && o.ops.pop(), o.trys.pop();
                                        continue;
                                    }
                                    l = t.call(a, o);
                                } catch (e) {
                                    l = [ 6, e ], r = 0;
                                } finally {
                                    n = u = 0;
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                };
                            }([ l, e ]);
                        };
                    }
                };
                Object.defineProperty(l, "__esModule", {
                    value: !0
                }), (t = a = l.LOGINTYPE || (l.LOGINTYPE = {})).ANONYMOUS = "ANONYMOUS", t.WECHAT = "WECHAT", 
                t.CUSTOM = "CUSTOM", t.NULL = "NULL";
                var t = (n.prototype.init = function() {
                    this.httpRequest = new Z.Request(this.config), this.cache = new J.Cache(this.config.persistence), 
                    this.accessTokenKey = V.ACCESS_TOKEN + "_" + this.config.env, this.accessTokenExpireKey = V.ACCESS_TOKEN_Expire + "_" + this.config.env, 
                    this.refreshTokenKey = V.REFRESH_TOKEN + "_" + this.config.env, this.loginTypeKey = V.LOGIN_TYPE_KEY + "_" + this.config.env;
                }, n.prototype.onLoginTypeChanged = function(e) {
                    this._loginType = e.data, this.cache.setStore(this.loginTypeKey, this._loginType);
                }, Object.defineProperty(n.prototype, "loginType", {
                    get: function() {
                        return this._loginType;
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.setRefreshToken = function(e) {
                    this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), 
                    this.cache.setStore(this.refreshTokenKey, e);
                }, n.prototype.getRefreshTokenByWXCode = function(a, t, n) {
                    return r(this, void 0, void 0, function() {
                        var l;
                        return u(this, function(e) {
                            return l = X.Adapter.runtime === X.RUNTIME.WX_MP ? "1" : "0", [ 2, this.httpRequest.send("auth.getJwt", {
                                appid: a,
                                loginType: t,
                                code: n,
                                hybridMiniapp: l
                            }).then(function(e) {
                                if (e.code) throw new Error("[tcb-js-sdk] 微信登录失败: " + e.code);
                                if (e.refresh_token) return {
                                    refreshToken: e.refresh_token,
                                    accessToken: e.access_token,
                                    accessTokenExpire: e.access_token_expire
                                };
                                throw new Error("[tcb-js-sdk] getJwt未返回refreshToken");
                            }) ];
                        });
                    });
                }, n);
                function n(e) {
                    this._loginType = a.NULL, this.config = e, this.onLoginTypeChanged = this.onLoginTypeChanged.bind(this), 
                    Q.addEventListener(Q.EVENTS.LOGIN_TYPE_CHANGE, this.onLoginTypeChanged);
                }
                l.default = t;
            }), le = _(function(e, l) {
                var t, a = y && y.__extends || (t = function(e, l) {
                    return (t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(e, l) {
                        e.__proto__ = l;
                    } || function(e, l) {
                        for (var a in l) l.hasOwnProperty(a) && (e[a] = l[a]);
                    })(e, l);
                }, function(e, l) {
                    function a() {
                        this.constructor = e;
                    }
                    t(e, l), e.prototype = null === l ? Object.create(l) : (a.prototype = l.prototype, 
                    new a());
                }), n = y && y.__awaiter || function(e, u, o, i) {
                    return new (o = o || Promise)(function(a, l) {
                        function t(e) {
                            try {
                                r(i.next(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function n(e) {
                            try {
                                r(i.throw(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function r(e) {
                            var l;
                            e.done ? a(e.value) : ((l = e.value) instanceof o ? l : new o(function(e) {
                                e(l);
                            })).then(t, n);
                        }
                        r((i = i.apply(e, u || [])).next());
                    });
                }, u = y && y.__generator || function(a, t) {
                    var n, r, u, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1];
                        },
                        trys: [],
                        ops: []
                    }, e = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this;
                    }), e;
                    function l(l) {
                        return function(e) {
                            return function(l) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (;o; ) try {
                                    if (n = 1, r && (u = 2 & l[0] ? r.return : l[0] ? r.throw || ((u = r.return) && u.call(r), 
                                    0) : r.next) && !(u = u.call(r, l[1])).done) return u;
                                    switch (r = 0, u && (l = [ 2 & l[0], u.value ]), l[0]) {
                                      case 0:
                                      case 1:
                                        u = l;
                                        break;

                                      case 4:
                                        return o.label++, {
                                            value: l[1],
                                            done: !1
                                        };

                                      case 5:
                                        o.label++, r = l[1], l = [ 0 ];
                                        continue;

                                      case 7:
                                        l = o.ops.pop(), o.trys.pop();
                                        continue;

                                      default:
                                        if (!((u = 0 < (u = o.trys).length && u[u.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue;
                                        }
                                        if (3 === l[0] && (!u || l[1] > u[0] && l[1] < u[3])) {
                                            o.label = l[1];
                                            break;
                                        }
                                        if (6 === l[0] && o.label < u[1]) {
                                            o.label = u[1], u = l;
                                            break;
                                        }
                                        if (u && o.label < u[2]) {
                                            o.label = u[2], o.ops.push(l);
                                            break;
                                        }
                                        u[2] && o.ops.pop(), o.trys.pop();
                                        continue;
                                    }
                                    l = t.call(a, o);
                                } catch (e) {
                                    l = [ 6, e ], r = 0;
                                } finally {
                                    n = u = 0;
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                };
                            }([ l, e ]);
                        };
                    }
                }, r = y && y.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var l = {};
                    if (null != e) for (var a in e) Object.hasOwnProperty.call(e, a) && (l[a] = e[a]);
                    return l.default = e, l;
                };
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                var o, i, s = r(M), v = r(ee);
                (r = o = o || {}).snsapi_base = "snsapi_base", r.snsapi_userinfo = "snsapi_userinfo", 
                r.snsapi_login = "snsapi_login", (r = i = i || {}).redirect = "redirect", r.prompt = "prompt";
                var c, b = {}, a = (c = v.default, a(f, c), f.prototype.signIn = function() {
                    return n(this, void 0, void 0, function() {
                        var l, a;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                b[this.config.env] || (b[this.config.env] = this._signIn()), e.label = 1;

                              case 1:
                                return e.trys.push([ 1, 3, , 4 ]), [ 4, b[this.config.env] ];

                              case 2:
                                return l = e.sent(), [ 3, 4 ];

                              case 3:
                                return a = e.sent(), a = a, [ 3, 4 ];

                              case 4:
                                if (b[this.config.env] = null, a) throw a;
                                return [ 2, l ];
                            }
                        });
                    });
                }, f.prototype._signIn = function() {
                    return n(this, void 0, void 0, function() {
                        var a, t, n, r;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                if (a = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), 
                                a) {
                                    if (t && t > Date.now()) return [ 2, {
                                        credential: {
                                            accessToken: a,
                                            refreshToken: this.cache.getStore(this.refreshTokenKey)
                                        }
                                    } ];
                                    this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey);
                                }
                                if (!1 === Object.values(o).includes(o[this.scope])) throw new Error("错误的scope类型");
                                return X.Adapter.runtime !== X.RUNTIME.WX_MP ? [ 3, 2 ] : [ 4, s.getMiniAppCode() ];

                              case 1:
                                return r = e.sent(), [ 3, 4 ];

                              case 2:
                                return [ 4, s.getWeixinCode() ];

                              case 3:
                                if (!(r = e.sent())) return [ 2, this.redirect() ];
                                e.label = 4;

                              case 4:
                                return l = this.scope, n = l !== o.snsapi_login ? "WECHAT-PUBLIC" : "WECHAT-OPEN", 
                                [ 4, this.getRefreshTokenByWXCode(this.appid, n, r) ];

                              case 5:
                                return n = e.sent(), r = n.refreshToken, this.cache.setStore(this.refreshTokenKey, r), 
                                n.accessToken && this.cache.setStore(this.accessTokenKey, n.accessToken), n.accessTokenExpire && this.cache.setStore(this.accessTokenExpireKey, n.accessTokenExpire + Date.now()), 
                                Q.activateEvent(Q.EVENTS.LOGIN_STATE_CHANGED), Q.activateEvent(Q.EVENTS.LOGIN_TYPE_CHANGE, v.LOGINTYPE.WECHAT), 
                                [ 2, {
                                    credential: {
                                        refreshToken: r
                                    }
                                } ];
                            }
                            var l;
                        });
                    });
                }, f.prototype.redirect = function() {
                    var e = s.removeParam("code", location.href), e = s.removeParam("state", e);
                    e = encodeURIComponent(e);
                    var l = "//open.weixin.qq.com/connect/oauth2/authorize";
                    "snsapi_login" === this.scope && (l = "//open.weixin.qq.com/connect/qrconnect"), 
                    "redirect" === i[this.loginMode] && (location.href = l + "?appid=" + this.appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this.scope + "&state=" + this.state + "#wechat_redirect");
                }, f);
                function f(e, l, a, t, n) {
                    var r = c.call(this, e) || this;
                    return r.config = e, r.appid = l, r.scope = X.Adapter.runtime === X.RUNTIME.WX_MP ? "snsapi_base" : a, 
                    r.state = n || "weixin", r.loginMode = t || "redirect", r;
                }
                l.default = a;
            }), ae = _(function(e, l) {
                var t, a = y && y.__extends || (t = function(e, l) {
                    return (t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(e, l) {
                        e.__proto__ = l;
                    } || function(e, l) {
                        for (var a in l) l.hasOwnProperty(a) && (e[a] = l[a]);
                    })(e, l);
                }, function(e, l) {
                    function a() {
                        this.constructor = e;
                    }
                    t(e, l), e.prototype = null === l ? Object.create(l) : (a.prototype = l.prototype, 
                    new a());
                }), n = y && y.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var l, a = 1, t = arguments.length; a < t; a++) for (var n in l = arguments[a]) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                        return e;
                    }).apply(this, arguments);
                }, r = y && y.__awaiter || function(e, u, o, i) {
                    return new (o = o || Promise)(function(a, l) {
                        function t(e) {
                            try {
                                r(i.next(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function n(e) {
                            try {
                                r(i.throw(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function r(e) {
                            var l;
                            e.done ? a(e.value) : ((l = e.value) instanceof o ? l : new o(function(e) {
                                e(l);
                            })).then(t, n);
                        }
                        r((i = i.apply(e, u || [])).next());
                    });
                }, u = y && y.__generator || function(a, t) {
                    var n, r, u, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1];
                        },
                        trys: [],
                        ops: []
                    }, e = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this;
                    }), e;
                    function l(l) {
                        return function(e) {
                            return function(l) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (;o; ) try {
                                    if (n = 1, r && (u = 2 & l[0] ? r.return : l[0] ? r.throw || ((u = r.return) && u.call(r), 
                                    0) : r.next) && !(u = u.call(r, l[1])).done) return u;
                                    switch (r = 0, u && (l = [ 2 & l[0], u.value ]), l[0]) {
                                      case 0:
                                      case 1:
                                        u = l;
                                        break;

                                      case 4:
                                        return o.label++, {
                                            value: l[1],
                                            done: !1
                                        };

                                      case 5:
                                        o.label++, r = l[1], l = [ 0 ];
                                        continue;

                                      case 7:
                                        l = o.ops.pop(), o.trys.pop();
                                        continue;

                                      default:
                                        if (!((u = 0 < (u = o.trys).length && u[u.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue;
                                        }
                                        if (3 === l[0] && (!u || l[1] > u[0] && l[1] < u[3])) {
                                            o.label = l[1];
                                            break;
                                        }
                                        if (6 === l[0] && o.label < u[1]) {
                                            o.label = u[1], u = l;
                                            break;
                                        }
                                        if (u && o.label < u[2]) {
                                            o.label = u[2], o.ops.push(l);
                                            break;
                                        }
                                        u[2] && o.ops.pop(), o.trys.pop();
                                        continue;
                                    }
                                    l = t.call(a, o);
                                } catch (e) {
                                    l = [ 6, e ], r = 0;
                                } finally {
                                    n = u = 0;
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                };
                            }([ l, e ]);
                        };
                    }
                }, o = y && y.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var l = {};
                    if (null != e) for (var a in e) Object.hasOwnProperty.call(e, a) && (l[a] = e[a]);
                    return l.default = e, l;
                };
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                var i, s = o(ee), a = (i = s.default, a(v, i), v.prototype.init = function() {
                    i.prototype.init.call(this);
                }, v.prototype.signIn = function() {
                    return r(this, void 0, void 0, function() {
                        var l, a, t;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return l = this.cache.getStore(this._anonymousUuidKey) || void 0, a = this.cache.getStore(this.refreshTokenKey) || void 0, 
                                [ 4, this.httpRequest.send("auth.signInAnonymously", {
                                    anonymous_uuid: l,
                                    refresh_token: a
                                }) ];

                              case 1:
                                return (t = e.sent()).uuid && t.refresh_token ? (this._setAnonymousUUID(t.uuid), 
                                this.setRefreshToken(t.refresh_token), [ 4, this.httpRequest.refreshAccessToken() ]) : [ 3, 3 ];

                              case 2:
                                return e.sent(), Q.activateEvent(Q.EVENTS.LOGIN_STATE_CHANGED), Q.activateEvent(Q.EVENTS.LOGIN_TYPE_CHANGE, s.LOGINTYPE.ANONYMOUS), 
                                [ 2, {
                                    credential: {
                                        refreshToken: t.refresh_token
                                    }
                                } ];

                              case 3:
                                throw new Error("[tcb-js-sdk] 匿名登录失败");
                            }
                        });
                    });
                }, v.prototype.linkAndRetrieveDataWithTicket = function(n) {
                    return r(this, void 0, void 0, function() {
                        var l, a, t;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return l = this.cache.getStore(this._anonymousUuidKey), a = this.cache.getStore(this.refreshTokenKey), 
                                [ 4, this.httpRequest.send("auth.linkAndRetrieveDataWithTicket", {
                                    anonymous_uuid: l,
                                    refresh_token: a,
                                    ticket: n
                                }) ];

                              case 1:
                                return (t = e.sent()).refresh_token ? (this._clearAnonymousUUID(), this.setRefreshToken(t.refresh_token), 
                                [ 4, this.httpRequest.refreshAccessToken() ]) : [ 3, 3 ];

                              case 2:
                                return e.sent(), Q.activateEvent(Q.EVENTS.ANONYMOUS_CONVERTED, {
                                    refresh_token: t.refresh_token
                                }), Q.activateEvent(Q.EVENTS.LOGIN_TYPE_CHANGE, s.LOGINTYPE.CUSTOM), [ 2, {
                                    credential: {
                                        refreshToken: t.refresh_token
                                    }
                                } ];

                              case 3:
                                throw new Error("[tcb-js-sdk] 匿名转化失败");
                            }
                        });
                    });
                }, v.prototype.getAllStore = function() {
                    var e = {};
                    return e[this.refreshTokenKey] = this.cache.getStore(this.refreshTokenKey) || "", 
                    e[this._loginTypeKey] = this.cache.getStore(this._loginTypeKey) || "", e[this.accessTokenKey] = this.cache.getStore(this.accessTokenKey) || "", 
                    e[this.accessTokenExpireKey] = this.cache.getStore(this.accessTokenExpireKey) || "", 
                    e;
                }, v.prototype._setAnonymousUUID = function(e) {
                    this.cache.removeStore(this._anonymousUuidKey), this.cache.setStore(this._anonymousUuidKey, e), 
                    this.cache.setStore(this._loginTypeKey, s.LOGINTYPE.ANONYMOUS);
                }, v.prototype._clearAnonymousUUID = function() {
                    this.cache.removeStore(this._anonymousUuidKey);
                }, v);
                function v(e) {
                    e = i.call(this, n(n({}, e), {
                        persistence: "local"
                    })) || this;
                    return e._anonymousUuidKey = V.ANONYMOUS_UUID + "_" + e.config.env, e._loginTypeKey = V.LOGIN_TYPE_KEY + "_" + e.config.env, 
                    e;
                }
                l.AnonymousAuthProvider = a;
            }), te = _(function(e, l) {
                var t, a = y && y.__extends || (t = function(e, l) {
                    return (t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(e, l) {
                        e.__proto__ = l;
                    } || function(e, l) {
                        for (var a in l) l.hasOwnProperty(a) && (e[a] = l[a]);
                    })(e, l);
                }, function(e, l) {
                    function a() {
                        this.constructor = e;
                    }
                    t(e, l), e.prototype = null === l ? Object.create(l) : (a.prototype = l.prototype, 
                    new a());
                }), n = y && y.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var l, a = 1, t = arguments.length; a < t; a++) for (var n in l = arguments[a]) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                        return e;
                    }).apply(this, arguments);
                }, r = y && y.__awaiter || function(e, u, o, i) {
                    return new (o = o || Promise)(function(a, l) {
                        function t(e) {
                            try {
                                r(i.next(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function n(e) {
                            try {
                                r(i.throw(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function r(e) {
                            var l;
                            e.done ? a(e.value) : ((l = e.value) instanceof o ? l : new o(function(e) {
                                e(l);
                            })).then(t, n);
                        }
                        r((i = i.apply(e, u || [])).next());
                    });
                }, u = y && y.__generator || function(a, t) {
                    var n, r, u, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1];
                        },
                        trys: [],
                        ops: []
                    }, e = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this;
                    }), e;
                    function l(l) {
                        return function(e) {
                            return function(l) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (;o; ) try {
                                    if (n = 1, r && (u = 2 & l[0] ? r.return : l[0] ? r.throw || ((u = r.return) && u.call(r), 
                                    0) : r.next) && !(u = u.call(r, l[1])).done) return u;
                                    switch (r = 0, u && (l = [ 2 & l[0], u.value ]), l[0]) {
                                      case 0:
                                      case 1:
                                        u = l;
                                        break;

                                      case 4:
                                        return o.label++, {
                                            value: l[1],
                                            done: !1
                                        };

                                      case 5:
                                        o.label++, r = l[1], l = [ 0 ];
                                        continue;

                                      case 7:
                                        l = o.ops.pop(), o.trys.pop();
                                        continue;

                                      default:
                                        if (!((u = 0 < (u = o.trys).length && u[u.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue;
                                        }
                                        if (3 === l[0] && (!u || l[1] > u[0] && l[1] < u[3])) {
                                            o.label = l[1];
                                            break;
                                        }
                                        if (6 === l[0] && o.label < u[1]) {
                                            o.label = u[1], u = l;
                                            break;
                                        }
                                        if (u && o.label < u[2]) {
                                            o.label = u[2], o.ops.push(l);
                                            break;
                                        }
                                        u[2] && o.ops.pop(), o.trys.pop();
                                        continue;
                                    }
                                    l = t.call(a, o);
                                } catch (e) {
                                    l = [ 6, e ], r = 0;
                                } finally {
                                    n = u = 0;
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                };
                            }([ l, e ]);
                        };
                    }
                }, o = y && y.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }, i = y && y.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var l = {};
                    if (null != e) for (var a in e) Object.hasOwnProperty.call(e, a) && (l[a] = e[a]);
                    return l.default = e, l;
                };
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                var s, v = o(le), c = i(ee), a = (s = c.default, a(b, s), b.prototype.init = function() {
                    s.prototype.init.call(this), this.customAuthProvider = new c.default(this.config), 
                    this.customAuthProvider.init();
                }, b.prototype.weixinAuthProvider = function(e) {
                    var l = e.appid, a = e.scope, t = e.loginMode, e = e.state, e = new v.default(this.config, l, a, t, e);
                    return e.init(), e;
                }, b.prototype.signInAnonymously = function() {
                    return r(this, void 0, void 0, function() {
                        var t = this;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return this._anonymousAuthProvider || (this._anonymousAuthProvider = new ae.AnonymousAuthProvider(this.config), 
                                this._anonymousAuthProvider.init()), Q.addEventListener(Q.EVENTS.LOGIN_TYPE_CHANGE, function(e) {
                                    if (e && e.data === c.LOGINTYPE.ANONYMOUS) {
                                        var l, a = t._anonymousAuthProvider.getAllStore();
                                        for (l in a) a[l] && t.httpRequest.cache.setStore(l, a[l]);
                                    }
                                }), [ 4, this._anonymousAuthProvider.signIn() ];

                              case 1:
                                return [ 2, e.sent() ];
                            }
                        });
                    });
                }, b.prototype.linkAndRetrieveDataWithTicket = function(a) {
                    return r(this, void 0, void 0, function() {
                        var l = this;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return this._anonymousAuthProvider || (this._anonymousAuthProvider = new ae.AnonymousAuthProvider(this.config), 
                                this._anonymousAuthProvider.init()), Q.addEventListener(Q.EVENTS.ANONYMOUS_CONVERTED, function(e) {
                                    e = e.data.refresh_token;
                                    e && l.httpRequest.cache.setStore(l.refreshTokenKey, e);
                                }), [ 4, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(a) ];

                              case 1:
                                return [ 2, e.sent() ];
                            }
                        });
                    });
                }, b.prototype.signOut = function() {
                    return r(this, void 0, void 0, function() {
                        var l, a, t, n, r;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                if (this.loginType === c.LOGINTYPE.ANONYMOUS) throw new Error("[tcb-js-sdk] 匿名用户不支持登出操作");
                                return r = this.httpRequest, l = r.cache, a = r.refreshTokenKey, t = r.accessTokenKey, 
                                n = r.accessTokenExpireKey, (r = l.getStore(a)) ? [ 4, this.httpRequest.send("auth.logout", {
                                    refresh_token: r
                                }) ] : [ 2 ];

                              case 1:
                                return r = e.sent(), l.removeStore(a), l.removeStore(t), l.removeStore(n), Q.activateEvent(Q.EVENTS.LOGIN_STATE_CHANGED), 
                                Q.activateEvent(Q.EVENTS.LOGIN_TYPE_CHANGE, c.LOGINTYPE.NULL), [ 2, r ];
                            }
                        });
                    });
                }, b.prototype.getAccessToken = function() {
                    return r(this, void 0, void 0, function() {
                        var l;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return l = {}, [ 4, this.httpRequest.getAccessToken() ];

                              case 1:
                                return [ 2, (l.accessToken = e.sent().accessToken, l.env = this.config.env, l) ];
                            }
                        });
                    });
                }, b.prototype.onLoginStateExpire = function(e) {
                    Q.addEventListener("loginStateExpire", e);
                }, b.prototype.getLoginState = function() {
                    return r(this, void 0, void 0, function() {
                        var l, a, t;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                if (a = this.httpRequest, l = a.cache, t = a.refreshTokenKey, a = a.accessTokenKey, 
                                !(t = l.getStore(t))) return [ 3, 5 ];
                                e.label = 1;

                              case 1:
                                return e.trys.push([ 1, 3, , 4 ]), [ 4, this.httpRequest.refreshAccessToken() ];

                              case 2:
                                return e.sent(), [ 3, 4 ];

                              case 3:
                                return e.sent(), [ 2, null ];

                              case 4:
                                return [ 2, {
                                    isAnonymous: this.loginType === c.LOGINTYPE.ANONYMOUS,
                                    credential: {
                                        refreshToken: t,
                                        accessToken: l.getStore(a)
                                    }
                                } ];

                              case 5:
                                return [ 2, null ];
                            }
                        });
                    });
                }, b.prototype.signInWithTicket = function(n) {
                    return r(this, void 0, void 0, function() {
                        var l, a, t;
                        return u(this, function(e) {
                            switch (e.label) {
                              case 0:
                                if ("string" != typeof n) throw new Error("ticket must be a string");
                                return a = this.httpRequest, l = a.cache, a = a.refreshTokenKey, [ 4, this.httpRequest.send("auth.signInWithTicket", {
                                    ticket: n,
                                    refresh_token: l.getStore(a) || ""
                                }) ];

                              case 1:
                                return (t = e.sent()).refresh_token ? (this.customAuthProvider.setRefreshToken(t.refresh_token), 
                                [ 4, this.httpRequest.refreshAccessToken() ]) : [ 3, 3 ];

                              case 2:
                                return e.sent(), Q.activateEvent(Q.EVENTS.LOGIN_STATE_CHANGED), Q.activateEvent(Q.EVENTS.LOGIN_TYPE_CHANGE, c.LOGINTYPE.CUSTOM), 
                                [ 2, {
                                    credential: {
                                        refreshToken: t.refresh_token
                                    }
                                } ];

                              case 3:
                                throw new Error("[tcb-js-sdk] 自定义登录失败");
                            }
                        });
                    });
                }, b.prototype.shouldRefreshAccessToken = function(e) {
                    this.httpRequest._shouldRefreshAccessTokenHook = e.bind(this);
                }, b.prototype.getUserInfo = function() {
                    return this.httpRequest.send("auth.getUserInfo", {}).then(function(e) {
                        return e.code ? e : n(n({}, e.data), {
                            requestId: e.seqId
                        });
                    });
                }, b);
                function b(e) {
                    var l = s.call(this, e) || this;
                    return l.config = e, l;
                }
                l.default = a;
            }), ne = _(function(e, o) {
                var l = y && y.__awaiter || function(e, u, o, i) {
                    return new (o = o || Promise)(function(a, l) {
                        function t(e) {
                            try {
                                r(i.next(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function n(e) {
                            try {
                                r(i.throw(e));
                            } catch (e) {
                                l(e);
                            }
                        }
                        function r(e) {
                            var l;
                            e.done ? a(e.value) : ((l = e.value) instanceof o ? l : new o(function(e) {
                                e(l);
                            })).then(t, n);
                        }
                        r((i = i.apply(e, u || [])).next());
                    });
                }, i = y && y.__generator || function(a, t) {
                    var n, r, u, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1];
                        },
                        trys: [],
                        ops: []
                    }, e = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this;
                    }), e;
                    function l(l) {
                        return function(e) {
                            return function(l) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (;o; ) try {
                                    if (n = 1, r && (u = 2 & l[0] ? r.return : l[0] ? r.throw || ((u = r.return) && u.call(r), 
                                    0) : r.next) && !(u = u.call(r, l[1])).done) return u;
                                    switch (r = 0, u && (l = [ 2 & l[0], u.value ]), l[0]) {
                                      case 0:
                                      case 1:
                                        u = l;
                                        break;

                                      case 4:
                                        return o.label++, {
                                            value: l[1],
                                            done: !1
                                        };

                                      case 5:
                                        o.label++, r = l[1], l = [ 0 ];
                                        continue;

                                      case 7:
                                        l = o.ops.pop(), o.trys.pop();
                                        continue;

                                      default:
                                        if (!((u = 0 < (u = o.trys).length && u[u.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue;
                                        }
                                        if (3 === l[0] && (!u || l[1] > u[0] && l[1] < u[3])) {
                                            o.label = l[1];
                                            break;
                                        }
                                        if (6 === l[0] && o.label < u[1]) {
                                            o.label = u[1], u = l;
                                            break;
                                        }
                                        if (u && o.label < u[2]) {
                                            o.label = u[2], o.ops.push(l);
                                            break;
                                        }
                                        u[2] && o.ops.pop(), o.trys.pop();
                                        continue;
                                    }
                                    l = t.call(a, o);
                                } catch (e) {
                                    l = [ 6, e ], r = 0;
                                } finally {
                                    n = u = 0;
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                };
                            }([ l, e ]);
                        };
                    }
                };
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.uploadFile = function(e, o) {
                    o = o || M.createPromiseCallback();
                    var i = new Z.Request(this.config), s = e.cloudPath, v = e.filePath, c = e.onUploadProgress, b = e.fileType || "image";
                    return i.send("storage.getUploadMetadata", {
                        path: s
                    }).then(function(e) {
                        var l = e.data, a = l.url, t = l.authorization, n = l.token, r = l.fileId, l = l.cosFileId, u = e.requestId, n = {
                            key: s,
                            signature: t,
                            "x-cos-meta-fileid": l,
                            success_action_status: "201",
                            "x-cos-security-token": n
                        };
                        i.upload({
                            url: a,
                            data: n,
                            file: v,
                            name: s,
                            fileType: b,
                            onUploadProgress: c
                        }).then(function(e) {
                            201 === e.statusCode ? o(null, {
                                fileID: r,
                                requestId: u
                            }) : o(new Error("STORAGE_REQUEST_FAIL: " + e.data));
                        }).catch(function(e) {
                            o(e);
                        });
                    }).catch(function(e) {
                        o(e);
                    }), o.promise;
                }, o.deleteFile = function(e, l) {
                    e = e.fileList;
                    if (l = l || M.createPromiseCallback(), !e || !Array.isArray(e)) return {
                        code: "INVALID_PARAM",
                        message: "fileList必须是非空的数组"
                    };
                    for (var a = 0, t = e; a < t.length; a++) {
                        var n = t[a];
                        if (!n || "string" != typeof n) return {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是非空的字符串"
                        };
                    }
                    e = {
                        fileid_list: e
                    };
                    return new Z.Request(this.config).send("storage.batchDeleteFile", e).then(function(e) {
                        e.code ? l(null, e) : l(null, {
                            fileList: e.data.delete_list,
                            requestId: e.requestId
                        });
                    }).catch(function(e) {
                        l(e);
                    }), l.promise;
                }, o.getTempFileURL = function(e, l) {
                    e = e.fileList;
                    l = l || M.createPromiseCallback(), e && Array.isArray(e) || l(null, {
                        code: "INVALID_PARAM",
                        message: "fileList必须是非空的数组"
                    });
                    for (var a = [], t = 0, n = e; t < n.length; t++) {
                        var r = n[t];
                        "object" == (void 0 === r ? "undefined" : _typeof(r)) ? (r.hasOwnProperty("fileID") && r.hasOwnProperty("maxAge") || l(null, {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是包含fileID和maxAge的对象"
                        }), a.push({
                            fileid: r.fileID,
                            max_age: r.maxAge
                        })) : "string" == typeof r ? a.push({
                            fileid: r
                        }) : l(null, {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是字符串"
                        });
                    }
                    e = {
                        file_list: a
                    };
                    return new Z.Request(this.config).send("storage.batchGetDownloadUrl", e).then(function(e) {
                        e.code ? l(null, e) : l(null, {
                            fileList: e.data.download_list,
                            requestId: e.requestId
                        });
                    }).catch(function(e) {
                        l(e);
                    }), l.promise;
                }, o.downloadFile = function(e, r) {
                    var u = e.fileID;
                    return l(this, void 0, void 0, function() {
                        var l, a, t, n;
                        return i(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return [ 4, o.getTempFileURL.call(this, {
                                    fileList: [ {
                                        fileID: u,
                                        maxAge: 600
                                    } ]
                                }) ];

                              case 1:
                                return n = e.sent(), "SUCCESS" !== (l = n.fileList[0]).code ? [ 2, r ? r(l) : new Promise(function(e) {
                                    e(l);
                                }) ] : (a = l.download_url, a = encodeURI(a), t = new Z.Request(this.config), r ? [ 4, t.download({
                                    url: a
                                }) ] : [ 3, 3 ]);

                              case 2:
                                return n = e.sent(), r(n), [ 3, 4 ];

                              case 3:
                                return [ 2, t.download({
                                    url: a
                                }) ];

                              case 4:
                                return [ 2 ];
                            }
                        });
                    });
                };
            }), re = _(function(e, l) {
                Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l.callFunction = function(e, l) {
                    var a, t = e.name, n = e.data, r = e.query, u = e.parse, o = e.search, i = l || M.createPromiseCallback();
                    try {
                        a = n ? JSON.stringify(n) : "";
                    } catch (e) {
                        return Promise.reject(e);
                    }
                    if (!t) return Promise.reject(new Error("函数名不能为空"));
                    t = {
                        query: r,
                        parse: u,
                        search: o,
                        function_name: t,
                        request_data: a
                    };
                    return new Z.Request(this.config).send("functions.invokeFunction", t).then(function(e) {
                        if (e.code) i(null, e); else {
                            var l = e.data.response_data;
                            if (u) i(null, {
                                result: l,
                                requestId: e.requestId
                            }); else try {
                                l = JSON.parse(e.data.response_data), i(null, {
                                    result: l,
                                    requestId: e.requestId
                                });
                            } catch (e) {
                                i(new Error("response data must be json"));
                            }
                        }
                        return i.promise;
                    }).catch(function(e) {
                        i(e);
                    }), i.promise;
                };
            }), z = g(_(function(e) {
                var l = y && y.__assign || function() {
                    return (l = Object.assign || function(e) {
                        for (var l, a = 1, t = arguments.length; a < t; a++) for (var n in l = arguments[a]) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                        return e;
                    }).apply(this, arguments);
                }, a = y && y.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }, t = y && y.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var l = {};
                    if (null != e) for (var a in e) Object.hasOwnProperty.call(e, a) && (l[a] = e[a]);
                    return l.default = e, l;
                }, n = a(te), r = t(ne), u = t(re), o = {
                    timeout: 15e3
                }, i = (s.prototype.init = function(e) {
                    return this.config = l(l({}, o), e), X.Adapter.adapter || this._useDefaultAdapter(), 
                    new s(this.config);
                }, s.prototype.auth = function(e) {
                    e = (void 0 === e ? {} : e).persistence;
                    return this.authObj || (this.config = l(l({}, this.config), {
                        persistence: e || X.Adapter.adapter.primaryStorage || "session"
                    }), this.authObj = new n.default(this.config), this.authObj.init()), this.authObj;
                }, s.prototype.on = function(e, l) {
                    return Q.addEventListener.apply(this, [ e, l ]);
                }, s.prototype.off = function(e, l) {
                    return Q.removeEventListener.apply(this, [ e, l ]);
                }, s.prototype.callFunction = function(e, l) {
                    return u.callFunction.apply(this, [ e, l ]);
                }, s.prototype.deleteFile = function(e, l) {
                    return r.deleteFile.apply(this, [ e, l ]);
                }, s.prototype.getTempFileURL = function(e, l) {
                    return r.getTempFileURL.apply(this, [ e, l ]);
                }, s.prototype.downloadFile = function(e, l) {
                    return r.downloadFile.apply(this, [ e, l ]);
                }, s.prototype.uploadFile = function(e, l) {
                    return r.uploadFile.apply(this, [ e, l ]);
                }, s.prototype.useAdapters = function(e) {
                    var l = X.useAdapters(e) || {}, e = l.adapter, l = l.runtime;
                    e && (X.Adapter.adapter = e), l && (X.Adapter.runtime = l);
                }, s.prototype._useDefaultAdapter = function() {
                    var e = X.useDefaultAdapter(), l = e.adapter, e = e.runtime;
                    X.Adapter.adapter = l, X.Adapter.runtime = e;
                }, new s());
                function s(e) {
                    var l = this;
                    this.config = e || this.config, this.authObj = void 0, Q.addEventListener(Q.EVENTS.LOGIN_TYPE_CHANGE, function(e) {
                        e.data === ee.LOGINTYPE.ANONYMOUS && (l.config.persistence = "local");
                    });
                }
                try {
                    window.tcb = i;
                } catch (e) {}
                e.exports = i;
            }));
            function ue(e, l, a) {
                void 0 === a && (a = {});
                var t, n = /\?/.test(l), r = "";
                for (t in a) "" === r ? n || (l += "?") : r += "&", r += t + "=" + encodeURIComponent(a[t]);
                return /^http(s)?:\/\//.test(l += r) ? l : "" + e + l;
            }
            var oe = (b(se, [ {
                key: "post",
                value: function(e) {
                    var t = e.url, n = e.data, r = e.headers;
                    return new Promise(function(l, a) {
                        $.request({
                            url: ue("https:", t),
                            data: n,
                            method: "POST",
                            header: r,
                            success: function(e) {
                                l(e);
                            },
                            fail: function(e) {
                                a(e);
                            }
                        });
                    });
                }
            }, {
                key: "upload",
                value: function(o) {
                    return new Promise(function(a, l) {
                        var e = o.url, t = o.file, n = o.data, r = o.headers, u = o.fileType, r = $.uploadFile({
                            url: ue("https:", e),
                            name: "file",
                            formData: Object.assign({}, n),
                            filePath: t,
                            fileType: u,
                            header: r,
                            success: function(e) {
                                var l = {
                                    statusCode: e.statusCode,
                                    data: e.data || {}
                                };
                                200 === e.statusCode && n.success_action_status && (l.statusCode = parseInt(n.success_action_status, 10)), 
                                a(l);
                            },
                            fail: function(e) {
                                l(new Error(e.errMsg || "uploadFile:fail"));
                            }
                        });
                        "function" == typeof o.onUploadProgress && r && "function" == typeof r.onProgressUpdate && r.onProgressUpdate(function(e) {
                            o.onUploadProgress({
                                loaded: e.totalBytesSent,
                                total: e.totalBytesExpectedToSend
                            });
                        });
                    });
                }
            } ]), se), ie = {
                setItem: function(e, l) {
                    $.setStorageSync(e, l);
                },
                getItem: function(e) {
                    return $.getStorageSync(e);
                },
                removeItem: function(e) {
                    $.removeStorageSync(e);
                },
                clear: function() {
                    $.clearStorageSync();
                }
            }, e = {
                genAdapter: function() {
                    return {
                        root: {},
                        reqClass: oe,
                        localStorage: ie,
                        primaryStorage: "local"
                    };
                },
                isMatch: function() {
                    return !0;
                },
                runtime: "uni_app"
            };
            function se() {
                f(this, se);
            }
            z.useAdapters(e);
            var ve, ce, be = z, fe = be.init;
            function pe(e) {
                ve || (ve = {
                    PLATFORM: "mp-weixin",
                    OS: x,
                    APPID: O.appid,
                    CLIENT_SDK_VERSION: "1.0.0"
                }, ce = P());
                var l = JSON.parse(JSON.stringify(e.data || {})), a = e.name, t = this.config.spaceId, n = {
                    tencent: "t",
                    aliyun: "a"
                }[this.config.provider], n = Object.assign({}, ce, {
                    fn: a,
                    sid: t,
                    pvd: n
                });
                Object.assign(l, {
                    clientInfo: ve,
                    uniCloudClientInfo: encodeURIComponent(JSON.stringify(n))
                }), l.uniIdToken || (r = $.getStorageSync("uni_id_token") || $.getStorageSync("uniIdToken")) && (l.uniIdToken = r);
                var r = d.getSystemInfoSync().deviceId;
                return l.uniCloudDeviceId = r, e.data = l, e;
            }
            be.init = function(e) {
                e.env = e.spaceId;
                var l = fe.call(this, e);
                l.config.provider = "tencent", l.config.spaceId = e.spaceId;
                var a = l.auth;
                return l.auth = function(e) {
                    var l = a.call(this, e);
                    return [ "linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo" ].forEach(function(e) {
                        l[e] = S(l[e]).bind(l);
                    }), l;
                }, l.customAuth = l.auth, [ "deleteFile", "getTempFileURL", "downloadFile" ].forEach(function(e) {
                    l[e] = S(l[e]).bind(l);
                }), l;
            };
            var he = Symbol("CLIENT_DB_INTERNAL");
            function de(e, t) {
                return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = he, 
                new Proxy(e, {
                    get: function(e, l, a) {
                        return Object.prototype.hasOwnProperty.call(e, l) || e[l] || "string" != typeof l ? e[l] : t.get(e, l, a);
                    }
                });
            }
            var ye = function() {
                r(t, i(Error));
                var a = u(t);
                function t(e, l) {
                    return f(this, t), (e = a.call(this, e)).code = l, e;
                }
                return t;
            }();
            function ge(l) {
                switch (Object.prototype.toString.call(l).slice(8, -1).toLowerCase()) {
                  case "array":
                    return l.map(ge);

                  case "object":
                    return l._internalType === he || Object.keys(l).forEach(function(e) {
                        l[e] = ge(l[e]);
                    }), l;

                  case "regexp":
                    return {
                        $regexp: {
                            source: l.source,
                            flags: l.flags
                        }
                    };

                  case "date":
                    return {
                        $date: l.toISOString()
                    };

                  default:
                    return l;
                }
            }
            function _e() {
                var e, l, a = $.getStorageSync("uni_id_token") || "", t = a.split(".");
                if (!a || 3 !== t.length) return {
                    uid: null,
                    role: [],
                    permission: []
                };
                try {
                    e = JSON.parse((l = t[1], decodeURIComponent(atob(l).split("").map(function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                    }).join(""))));
                } catch (a) {
                    throw new Error("获取当前用户信息出错，详细错误信息为：" + a.message);
                }
                return e;
            }
            var me, we = g(_(function(e, l) {
                Object.defineProperty(l, "__esModule", {
                    value: !0
                });
                var f = "chooseAndUploadFile:fail";
                function p(e, a) {
                    return e.tempFiles.forEach(function(e, l) {
                        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), a && (e.fileType = a), 
                        e.cloudPath = Date.now() + "_" + l + e.name.substring(e.name.lastIndexOf("."));
                    }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function(e) {
                        return e.path;
                    })), e;
                }
                function h(l, e, a) {
                    var t = a.onChooseFile, n = a.onUploadProgress;
                    return e.then(function(l) {
                        if (t) {
                            var e = t(l);
                            if (void 0 !== e) return Promise.resolve(e).then(function(e) {
                                return void 0 === e ? l : e;
                            });
                        }
                        return l;
                    }).then(function(e) {
                        return !1 === e ? {
                            errMsg: "chooseAndUploadFile:ok",
                            tempFilePaths: [],
                            tempFiles: []
                        } : function(n, r, e, l) {
                            var a = 2 < arguments.length && void 0 !== e ? e : 5, u = 3 < arguments.length ? l : void 0;
                            (r = Object.assign({}, r)).errMsg = "chooseAndUploadFile:ok";
                            var o = r.tempFiles, i = o.length, s = 0;
                            return new Promise(function(e) {
                                for (;s < a; ) !function l() {
                                    var a = s++;
                                    {
                                        var t;
                                        i <= a ? o.find(function(e) {
                                            return !e.url && !e.errMsg;
                                        }) || e(r) : (t = o[a], n.uploadFile({
                                            filePath: t.path,
                                            cloudPath: t.cloudPath,
                                            fileType: t.fileType,
                                            onUploadProgress: function(e) {
                                                e.index = a, e.tempFile = t, e.tempFilePath = t.path, u && u(e);
                                            }
                                        }).then(function(e) {
                                            t.url = e.fileID, a < i && l();
                                        }).catch(function(e) {
                                            t.errMsg = e.errMsg || e.message, a < i && l();
                                        }));
                                    }
                                }();
                            });
                        }(l, e, 5, n);
                    });
                }
                l.initChooseAndUploadFile = function(b) {
                    return function() {
                        var t, n, e, a, r, o, i, u, s, v, c, l = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                            type: "all"
                        };
                        return "image" === l.type ? h(b, (u = l.count, s = l.sizeType, v = l.sourceType, 
                        c = l.extension, new Promise(function(l, a) {
                            d.chooseImage({
                                count: u,
                                sizeType: s,
                                sourceType: v,
                                extension: c,
                                success: function(e) {
                                    l(p(e, "image"));
                                },
                                fail: function(e) {
                                    a({
                                        errMsg: e.errMsg.replace("chooseImage:fail", f)
                                    });
                                }
                            });
                        })), l) : "video" === l.type ? h(b, (e = l.camera, a = l.compressed, r = l.maxDuration, 
                        o = l.sourceType, i = l.extension, new Promise(function(u, l) {
                            d.chooseVideo({
                                camera: e,
                                compressed: a,
                                maxDuration: r,
                                sourceType: o,
                                extension: i,
                                success: function(e) {
                                    var l = e.tempFilePath, a = e.duration, t = e.size, n = e.height, r = e.width;
                                    u(p({
                                        errMsg: "chooseVideo:ok",
                                        tempFilePaths: [ l ],
                                        tempFiles: [ {
                                            name: e.tempFile && e.tempFile.name || "",
                                            path: l,
                                            size: t,
                                            type: e.tempFile && e.tempFile.type || "",
                                            width: r,
                                            height: n,
                                            duration: a,
                                            fileType: "video",
                                            cloudPath: ""
                                        } ]
                                    }, "video"));
                                },
                                fail: function(e) {
                                    l({
                                        errMsg: e.errMsg.replace("chooseVideo:fail", f)
                                    });
                                }
                            });
                        })), l) : h(b, (t = l.count, n = l.extension, new Promise(function(l, a) {
                            var e = d.chooseFile;
                            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (e = wx.chooseMessageFile), 
                            "function" != typeof e) return a({
                                errMsg: f + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
                            });
                            e({
                                type: "all",
                                count: t,
                                extension: n,
                                success: function(e) {
                                    l(p(e));
                                },
                                fail: function(e) {
                                    a({
                                        errMsg: e.errMsg.replace("chooseFile:fail", f)
                                    });
                                }
                            });
                        })), l);
                    };
                };
            })), Se = (b(Oe, [ {
                key: "init",
                value: function(e) {
                    var a = {}, l = !1 !== e.debugFunction && !1;
                    switch (e.provider) {
                      case "tencent":
                        a = be.init(Object.assign(e, {
                            useDebugFunction: l
                        }));
                        break;

                      case "aliyun":
                        a = N(Object.assign(e, {
                            useDebugFunction: l
                        }));
                        break;

                      default:
                        throw new Error("未提供正确的provider参数");
                    }
                    a.isReady = !1;
                    var t, v, n = a.auth();
                    return a.initUniCloud = n.getLoginState().then(function(e) {
                        return e ? Promise.resolve() : n.signInAnonymously();
                    }).then(function() {
                        return Promise.resolve();
                    }).then(function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, l = e.address, e = e.port;
                        l ? (a.localAddress = l, a.localPort = e) : a.debugInfo && (e = console.warn, "remote" === a.debugInfo.initialLaunchType ? (a.debugInfo.forceRemote = !0, 
                        e("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试")) : e("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试"));
                    }).then(function() {
                        return new Promise(function(e) {
                            setTimeout(function() {
                                x = d.getSystemInfoSync().platform, k = d.getStorageSync("__DC_CLOUD_UUID") || E(32), 
                                e();
                            }, 0);
                        });
                    }).then(function() {
                        a.isReady = !0;
                    }), function(a) {
                        var l = a.callFunction;
                        a.callFunction = function(r) {
                            var u = this;
                            return (this.isReady ? Promise.resolve() : this.initUniCloud).then(function() {
                                var e = pe.call(u, r), n = {
                                    aliyun: "aliyun",
                                    tencent: "tcb"
                                }[u.config.provider];
                                return new Promise(function(a, t) {
                                    l.call(u, e).then(function(e) {
                                        var l;
                                        u.config.useDebugFunction && e && e.requestId && (l = JSON.stringify({
                                            spaceId: u.config.spaceId,
                                            functionName: r.name,
                                            requestId: e.requestId
                                        }), console.log("[".concat(n, "-request]").concat(l, "[/").concat(n, "-request]"))), 
                                        a(e);
                                    }).catch(function(e) {
                                        var l;
                                        u.config.useDebugFunction && e && e.requestId && (l = JSON.stringify({
                                            spaceId: u.config.spaceId,
                                            functionName: r.name,
                                            requestId: e.requestId
                                        }), console.log("[".concat(n, "-request]").concat(l, "[/").concat(n, "-request]"))), 
                                        e && e.message && (e.message = "[".concat(r.name, "]: ").concat(e.message)), t(e);
                                    });
                                });
                            });
                        };
                        var t = a.callFunction;
                        a.originCallFunction = a.callFunction, a.callFunction = function(e) {
                            return S(function(e) {
                                var l = this;
                                return (a.isReady ? Promise.resolve() : a.initUniCloud).then(function() {
                                    return t.call(l, e);
                                });
                            }).call(this, e);
                        };
                    }(a), function(e) {
                        var a = e.uploadFile;
                        e.uploadFile = function(e) {
                            var l = this;
                            return (this.isReady ? Promise.resolve() : this.initUniCloud).then(function() {
                                return a.call(l, e);
                            });
                        };
                        var l = e.uploadFile;
                        e.uploadFile = function(e) {
                            return S(l).call(this, e);
                        };
                    }(a), (v = a).database = function() {
                        if (this._database) return this._database;
                        var u = {}, o = {}, a = (b(n, [ {
                            key: "toJSON",
                            value: function() {
                                for (var e = this, l = [ e.content ]; e.prevStage; ) e = e.prevStage, l.push(e.content);
                                return {
                                    $db: l.reverse().map(function(e) {
                                        return {
                                            $method: e.$method,
                                            $param: e.$param
                                        };
                                    })
                                };
                            }
                        }, {
                            key: "get",
                            value: function() {
                                return this._send("get", Array.from(arguments));
                            }
                        }, {
                            key: "add",
                            value: function() {
                                return this._send("add", Array.from(arguments));
                            }
                        }, {
                            key: "remove",
                            value: function() {
                                return this._send("remove", Array.from(arguments));
                            }
                        }, {
                            key: "update",
                            value: function() {
                                return this._send("update", Array.from(arguments));
                            }
                        }, {
                            key: "end",
                            value: function() {
                                return this._send("end", Array.from(arguments));
                            }
                        }, {
                            key: "set",
                            value: function() {
                                throw new Error("客户端禁止使用set方法");
                            }
                        }, {
                            key: "_send",
                            value: function(e, l) {
                                var a = this.toJSON();
                                return a.$db.push({
                                    $method: e,
                                    $param: l
                                }), v.callFunction({
                                    name: "DCloud-clientDB",
                                    data: {
                                        action: this.actionName,
                                        command: a
                                    }
                                }).then(function(e) {
                                    var l = e.result, a = l.code, t = l.message, n = l.token, r = l.tokenExpired;
                                    return a ? Promise.reject(new ye(t, a)) : (n && r && u.refreshToken && u.refreshToken.forEach(function(e) {
                                        e({
                                            token: n,
                                            tokenExpired: r
                                        });
                                    }), n && r && o.refreshToken && o.refreshToken.forEach(function(e) {
                                        e({
                                            token: n,
                                            tokenExpired: r
                                        });
                                    }), Promise.resolve(e));
                                }).catch(function(e) {
                                    var l = new ye(e.message, e.code || "SYSTEM_ERROR");
                                    return o.error && o.error.forEach(function(e) {
                                        e(l);
                                    }), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), 
                                    Promise.reject(e);
                                });
                            }
                        }, {
                            key: "useAggregate",
                            get: function() {
                                for (var e = this, l = !1; e.prevStage; ) {
                                    var a = (e = e.prevStage).content.$method;
                                    if ("aggregate" === a || "pipeline" === a) {
                                        l = !0;
                                        break;
                                    }
                                }
                                return l;
                            }
                        }, {
                            key: "count",
                            get: function() {
                                if (!this.useAggregate) return function() {
                                    return this._send("count", Array.from(arguments));
                                };
                                var e = this;
                                return function() {
                                    return i({
                                        $method: "count",
                                        $param: ge(Array.from(arguments))
                                    }, e, e.actionName);
                                };
                            }
                        } ]), n), t = [ "db.Geo", "db.command", "command.aggregate" ];
                        function n(e, l, a) {
                            f(this, n), this.content = e, this.prevStage = l, this.actionName = a;
                        }
                        function r(e, l) {
                            return -1 < t.indexOf("".concat(e, ".").concat(l));
                        }
                        function i(e, l, t) {
                            return de(new a(e, l, t), {
                                get: function(e, l) {
                                    var a = "db";
                                    return e && e.content && (a = e.content.$method), r(a, l) ? i({
                                        $method: l
                                    }, e, t) : function() {
                                        return i({
                                            $method: l,
                                            $param: ge(Array.from(arguments))
                                        }, e, t);
                                    };
                                }
                            });
                        }
                        function s(e) {
                            var l = e.path, a = e.method;
                            return b(t, [ {
                                key: "toJSON",
                                value: function() {
                                    return {
                                        $newDb: [].concat(c(l.map(function(e) {
                                            return {
                                                $method: e
                                            };
                                        })), [ {
                                            $method: a,
                                            $param: this.param
                                        } ])
                                    };
                                }
                            } ]), t;
                            function t() {
                                f(this, t), this.param = Array.from(arguments);
                            }
                        }
                        var e = {
                            auth: {
                                on: function(e, l) {
                                    u[e] = u[e] || [], -1 < u[e].indexOf(l) || u[e].push(l);
                                },
                                off: function(e, l) {
                                    u[e] = u[e] || [];
                                    l = u[e].indexOf(l);
                                    -1 !== l && u[e].splice(l, 1);
                                }
                            },
                            on: function(e, l) {
                                o[e] = o[e] || [], -1 < o[e].indexOf(l) || o[e].push(l);
                            },
                            off: function(e, l) {
                                o[e] = o[e] || [];
                                l = o[e].indexOf(l);
                                -1 !== l && o[e].splice(l, 1);
                            },
                            env: de({}, {
                                get: function(e, l) {
                                    return {
                                        $env: l
                                    };
                                }
                            }),
                            action: function(a) {
                                return de({}, {
                                    get: function(e, l) {
                                        return r("db", l) ? i({
                                            $method: l
                                        }, null, a) : function() {
                                            return i({
                                                $method: l,
                                                $param: ge(Array.from(arguments))
                                            }, null, a);
                                        };
                                    }
                                });
                            },
                            Geo: de({}, {
                                get: function(e, l) {
                                    return s({
                                        path: [ "Geo" ],
                                        method: l
                                    });
                                }
                            }),
                            getCloudEnv: function(e) {
                                if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
                                return {
                                    $env: e.replace("$cloudEnv_", "")
                                };
                            },
                            get serverDate() {
                                return s({
                                    path: [],
                                    method: "serverDate"
                                });
                            },
                            get RegExp() {
                                return s({
                                    path: [],
                                    method: "RegExp"
                                });
                            }
                        }, e = de(e, {
                            get: function(e, l) {
                                return r("db", l) ? i({
                                    $method: l
                                }) : function() {
                                    return i({
                                        $method: l,
                                        $param: ge(Array.from(arguments))
                                    });
                                };
                            }
                        });
                        return this._database = e;
                    }, (t = a).getCurrentUserInfo = _e, t.chooseAndUploadFile = S(we.initChooseAndUploadFile(t)), 
                    a.init = this.init, a;
                }
            } ]), new Oe()), z = {};
            function Oe() {
                f(this, Oe);
            }
            1 === [].length ? (z = [][0], Se = Se.init(z)) : (me = 0 < [].length ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在cloudfunctions目录右键关联服务空间", 
            [ "auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo" ].forEach(function(e) {
                Se[e] = function() {
                    return console.error(me), Promise.reject(new A({
                        code: "SYS_ERR",
                        message: me
                    }));
                };
            })), Object.assign(Se, {
                get mixinDatacom() {
                    return o = Se, {
                        props: {
                            localdata: {
                                type: Array,
                                default: function() {
                                    return [];
                                }
                            },
                            options: {
                                type: [ Object, Array ],
                                default: function() {
                                    return {};
                                }
                            },
                            collection: {
                                type: String,
                                default: ""
                            },
                            action: {
                                type: String,
                                default: ""
                            },
                            field: {
                                type: String,
                                default: ""
                            },
                            orderby: {
                                type: String,
                                default: ""
                            },
                            where: {
                                type: [ String, Object ],
                                default: ""
                            },
                            pageData: {
                                type: String,
                                default: "add"
                            },
                            pageCurrent: {
                                type: Number,
                                default: 1
                            },
                            pageSize: {
                                type: Number,
                                default: 20
                            },
                            getcount: {
                                type: [ Boolean, String ],
                                default: !1
                            },
                            gettree: {
                                type: [ Boolean, String ],
                                default: !1
                            },
                            gettreepath: {
                                type: [ Boolean, String ],
                                default: !1
                            },
                            startwith: {
                                type: String,
                                default: ""
                            },
                            limitlevel: {
                                type: Number,
                                default: 10
                            },
                            groupby: {
                                type: String,
                                default: ""
                            },
                            groupField: {
                                type: String,
                                default: ""
                            },
                            distinct: {
                                type: [ Boolean, String ],
                                default: !1
                            },
                            manual: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data: function() {
                            return {
                                mixinDatacomLoading: !1,
                                mixinDatacomHasMore: !1,
                                mixinDatacomResData: [],
                                mixinDatacomErrorMessage: "",
                                mixinDatacomPage: {}
                            };
                        },
                        created: function() {
                            var r = this;
                            this.mixinDatacomPage = {
                                current: this.pageCurrent,
                                size: this.pageSize,
                                count: 0
                            }, this.$watch(function() {
                                var l = [];
                                return [ "pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct" ].forEach(function(e) {
                                    l.push(r[e]);
                                }), l;
                            }, function(e, l) {
                                for (var a = !1, t = [], n = 2; n < e.length; n++) e[n] !== l[n] && (t.push(e[n]), 
                                a = !0);
                                e[0] !== l[0] && (r.mixinDatacomPage.current = r.pageCurrent), r.mixinDatacomPage.size = r.pageSize, 
                                r.onMixinDatacomPropsChange(a, t);
                            });
                        },
                        methods: {
                            onMixinDatacomPropsChange: function(e, l) {},
                            mixinDatacomEasyGet: function() {
                                var a = this, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, l = e.getone, t = void 0 !== l && l, n = e.success, r = e.fail;
                                this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", 
                                this.mixinDatacomGet().then(function(e) {
                                    a.mixinDatacomLoading = !1;
                                    var l = e.result, e = l.data, l = l.count;
                                    a.getcount && (a.mixinDatacomPage.count = l), a.mixinDatacomHasMore = e.length < a.pageSize;
                                    e = t ? e.length ? e[0] : void 0 : e;
                                    a.mixinDatacomResData = e, n && n(e);
                                }).catch(function(e) {
                                    a.mixinDatacomLoading = !1, a.mixinDatacomErrorMessage = e, r && r(e);
                                }));
                            },
                            mixinDatacomGet: function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, l = o.database(), a = e.action || this.action;
                                a && (l = l.action(a));
                                var t = e.collection || this.collection, l = l.collection(t), n = e.where || this.where;
                                n && Object.keys(n).length && (l = l.where(n));
                                var r = e.field || this.field;
                                r && (l = l.field(r));
                                var u = e.groupby || this.groupby;
                                u && (l = l.groupBy(u));
                                a = e.groupField || this.groupField;
                                a && (l = l.groupField(a)), !0 === (void 0 !== e.distinct ? e : this).distinct && (l = l.distinct());
                                t = e.orderby || this.orderby;
                                t && (l = l.orderBy(t));
                                n = void 0 !== e.pageCurrent ? e.pageCurrent : this.mixinDatacomPage.current, r = void 0 !== e.pageSize ? e.pageSize : this.mixinDatacomPage.size, 
                                u = (void 0 !== e.getcount ? e : this).getcount, a = (void 0 !== e.gettree ? e : this).gettree, 
                                t = (void 0 !== e.gettreepath ? e : this).gettreepath, u = {
                                    getCount: u
                                }, e = {
                                    limitLevel: (void 0 !== e.limitlevel ? e : this).limitlevel,
                                    startWith: (void 0 !== e.startwith ? e : this).startwith
                                };
                                return a && (u.getTree = e), t && (u.getTreePath = e), l = l.skip(r * (n - 1)).limit(r).get(u);
                            }
                        }
                    };
                    var o;
                }
            }), ke.default = Se;
        }).call(this, xe("c8ba"), xe("543d").default);
    },
    aeb7: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = [ [ [ {
            label: "东城区",
            value: "110101"
        }, {
            label: "西城区",
            value: "110102"
        }, {
            label: "朝阳区",
            value: "110105"
        }, {
            label: "丰台区",
            value: "110106"
        }, {
            label: "石景山区",
            value: "110107"
        }, {
            label: "海淀区",
            value: "110108"
        }, {
            label: "门头沟区",
            value: "110109"
        }, {
            label: "房山区",
            value: "110111"
        }, {
            label: "通州区",
            value: "110112"
        }, {
            label: "顺义区",
            value: "110113"
        }, {
            label: "昌平区",
            value: "110114"
        }, {
            label: "大兴区",
            value: "110115"
        }, {
            label: "怀柔区",
            value: "110116"
        }, {
            label: "平谷区",
            value: "110117"
        }, {
            label: "密云区",
            value: "110118"
        }, {
            label: "延庆区",
            value: "110119"
        } ] ], [ [ {
            label: "和平区",
            value: "120101"
        }, {
            label: "河东区",
            value: "120102"
        }, {
            label: "河西区",
            value: "120103"
        }, {
            label: "南开区",
            value: "120104"
        }, {
            label: "河北区",
            value: "120105"
        }, {
            label: "红桥区",
            value: "120106"
        }, {
            label: "东丽区",
            value: "120110"
        }, {
            label: "西青区",
            value: "120111"
        }, {
            label: "津南区",
            value: "120112"
        }, {
            label: "北辰区",
            value: "120113"
        }, {
            label: "武清区",
            value: "120114"
        }, {
            label: "宝坻区",
            value: "120115"
        }, {
            label: "滨海新区",
            value: "120116"
        }, {
            label: "宁河区",
            value: "120117"
        }, {
            label: "静海区",
            value: "120118"
        }, {
            label: "蓟州区",
            value: "120119"
        } ] ], [ [ {
            label: "长安区",
            value: "130102"
        }, {
            label: "桥西区",
            value: "130104"
        }, {
            label: "新华区",
            value: "130105"
        }, {
            label: "井陉矿区",
            value: "130107"
        }, {
            label: "裕华区",
            value: "130108"
        }, {
            label: "藁城区",
            value: "130109"
        }, {
            label: "鹿泉区",
            value: "130110"
        }, {
            label: "栾城区",
            value: "130111"
        }, {
            label: "井陉县",
            value: "130121"
        }, {
            label: "正定县",
            value: "130123"
        }, {
            label: "行唐县",
            value: "130125"
        }, {
            label: "灵寿县",
            value: "130126"
        }, {
            label: "高邑县",
            value: "130127"
        }, {
            label: "深泽县",
            value: "130128"
        }, {
            label: "赞皇县",
            value: "130129"
        }, {
            label: "无极县",
            value: "130130"
        }, {
            label: "平山县",
            value: "130131"
        }, {
            label: "元氏县",
            value: "130132"
        }, {
            label: "赵县",
            value: "130133"
        }, {
            label: "石家庄高新技术产业开发区",
            value: "130171"
        }, {
            label: "石家庄循环化工园区",
            value: "130172"
        }, {
            label: "辛集市",
            value: "130181"
        }, {
            label: "晋州市",
            value: "130183"
        }, {
            label: "新乐市",
            value: "130184"
        } ], [ {
            label: "路南区",
            value: "130202"
        }, {
            label: "路北区",
            value: "130203"
        }, {
            label: "古冶区",
            value: "130204"
        }, {
            label: "开平区",
            value: "130205"
        }, {
            label: "丰南区",
            value: "130207"
        }, {
            label: "丰润区",
            value: "130208"
        }, {
            label: "曹妃甸区",
            value: "130209"
        }, {
            label: "滦县",
            value: "130223"
        }, {
            label: "滦南县",
            value: "130224"
        }, {
            label: "乐亭县",
            value: "130225"
        }, {
            label: "迁西县",
            value: "130227"
        }, {
            label: "玉田县",
            value: "130229"
        }, {
            label: "唐山市芦台经济技术开发区",
            value: "130271"
        }, {
            label: "唐山市汉沽管理区",
            value: "130272"
        }, {
            label: "唐山高新技术产业开发区",
            value: "130273"
        }, {
            label: "河北唐山海港经济开发区",
            value: "130274"
        }, {
            label: "遵化市",
            value: "130281"
        }, {
            label: "迁安市",
            value: "130283"
        } ], [ {
            label: "海港区",
            value: "130302"
        }, {
            label: "山海关区",
            value: "130303"
        }, {
            label: "北戴河区",
            value: "130304"
        }, {
            label: "抚宁区",
            value: "130306"
        }, {
            label: "青龙满族自治县",
            value: "130321"
        }, {
            label: "昌黎县",
            value: "130322"
        }, {
            label: "卢龙县",
            value: "130324"
        }, {
            label: "秦皇岛市经济技术开发区",
            value: "130371"
        }, {
            label: "北戴河新区",
            value: "130372"
        } ], [ {
            label: "邯山区",
            value: "130402"
        }, {
            label: "丛台区",
            value: "130403"
        }, {
            label: "复兴区",
            value: "130404"
        }, {
            label: "峰峰矿区",
            value: "130406"
        }, {
            label: "肥乡区",
            value: "130407"
        }, {
            label: "永年区",
            value: "130408"
        }, {
            label: "临漳县",
            value: "130423"
        }, {
            label: "成安县",
            value: "130424"
        }, {
            label: "大名县",
            value: "130425"
        }, {
            label: "涉县",
            value: "130426"
        }, {
            label: "磁县",
            value: "130427"
        }, {
            label: "邱县",
            value: "130430"
        }, {
            label: "鸡泽县",
            value: "130431"
        }, {
            label: "广平县",
            value: "130432"
        }, {
            label: "馆陶县",
            value: "130433"
        }, {
            label: "魏县",
            value: "130434"
        }, {
            label: "曲周县",
            value: "130435"
        }, {
            label: "邯郸经济技术开发区",
            value: "130471"
        }, {
            label: "邯郸冀南新区",
            value: "130473"
        }, {
            label: "武安市",
            value: "130481"
        } ], [ {
            label: "桥东区",
            value: "130502"
        }, {
            label: "桥西区",
            value: "130503"
        }, {
            label: "邢台县",
            value: "130521"
        }, {
            label: "临城县",
            value: "130522"
        }, {
            label: "内丘县",
            value: "130523"
        }, {
            label: "柏乡县",
            value: "130524"
        }, {
            label: "隆尧县",
            value: "130525"
        }, {
            label: "任县",
            value: "130526"
        }, {
            label: "南和县",
            value: "130527"
        }, {
            label: "宁晋县",
            value: "130528"
        }, {
            label: "巨鹿县",
            value: "130529"
        }, {
            label: "新河县",
            value: "130530"
        }, {
            label: "广宗县",
            value: "130531"
        }, {
            label: "平乡县",
            value: "130532"
        }, {
            label: "威县",
            value: "130533"
        }, {
            label: "清河县",
            value: "130534"
        }, {
            label: "临西县",
            value: "130535"
        }, {
            label: "河北邢台经济开发区",
            value: "130571"
        }, {
            label: "南宫市",
            value: "130581"
        }, {
            label: "沙河市",
            value: "130582"
        } ], [ {
            label: "竞秀区",
            value: "130602"
        }, {
            label: "莲池区",
            value: "130606"
        }, {
            label: "满城区",
            value: "130607"
        }, {
            label: "清苑区",
            value: "130608"
        }, {
            label: "徐水区",
            value: "130609"
        }, {
            label: "涞水县",
            value: "130623"
        }, {
            label: "阜平县",
            value: "130624"
        }, {
            label: "定兴县",
            value: "130626"
        }, {
            label: "唐县",
            value: "130627"
        }, {
            label: "高阳县",
            value: "130628"
        }, {
            label: "容城县",
            value: "130629"
        }, {
            label: "涞源县",
            value: "130630"
        }, {
            label: "望都县",
            value: "130631"
        }, {
            label: "安新县",
            value: "130632"
        }, {
            label: "易县",
            value: "130633"
        }, {
            label: "曲阳县",
            value: "130634"
        }, {
            label: "蠡县",
            value: "130635"
        }, {
            label: "顺平县",
            value: "130636"
        }, {
            label: "博野县",
            value: "130637"
        }, {
            label: "雄县",
            value: "130638"
        }, {
            label: "保定高新技术产业开发区",
            value: "130671"
        }, {
            label: "保定白沟新城",
            value: "130672"
        }, {
            label: "涿州市",
            value: "130681"
        }, {
            label: "定州市",
            value: "130682"
        }, {
            label: "安国市",
            value: "130683"
        }, {
            label: "高碑店市",
            value: "130684"
        } ], [ {
            label: "桥东区",
            value: "130702"
        }, {
            label: "桥西区",
            value: "130703"
        }, {
            label: "宣化区",
            value: "130705"
        }, {
            label: "下花园区",
            value: "130706"
        }, {
            label: "万全区",
            value: "130708"
        }, {
            label: "崇礼区",
            value: "130709"
        }, {
            label: "张北县",
            value: "130722"
        }, {
            label: "康保县",
            value: "130723"
        }, {
            label: "沽源县",
            value: "130724"
        }, {
            label: "尚义县",
            value: "130725"
        }, {
            label: "蔚县",
            value: "130726"
        }, {
            label: "阳原县",
            value: "130727"
        }, {
            label: "怀安县",
            value: "130728"
        }, {
            label: "怀来县",
            value: "130730"
        }, {
            label: "涿鹿县",
            value: "130731"
        }, {
            label: "赤城县",
            value: "130732"
        }, {
            label: "张家口市高新技术产业开发区",
            value: "130771"
        }, {
            label: "张家口市察北管理区",
            value: "130772"
        }, {
            label: "张家口市塞北管理区",
            value: "130773"
        } ], [ {
            label: "双桥区",
            value: "130802"
        }, {
            label: "双滦区",
            value: "130803"
        }, {
            label: "鹰手营子矿区",
            value: "130804"
        }, {
            label: "承德县",
            value: "130821"
        }, {
            label: "兴隆县",
            value: "130822"
        }, {
            label: "滦平县",
            value: "130824"
        }, {
            label: "隆化县",
            value: "130825"
        }, {
            label: "丰宁满族自治县",
            value: "130826"
        }, {
            label: "宽城满族自治县",
            value: "130827"
        }, {
            label: "围场满族蒙古族自治县",
            value: "130828"
        }, {
            label: "承德高新技术产业开发区",
            value: "130871"
        }, {
            label: "平泉市",
            value: "130881"
        } ], [ {
            label: "新华区",
            value: "130902"
        }, {
            label: "运河区",
            value: "130903"
        }, {
            label: "沧县",
            value: "130921"
        }, {
            label: "青县",
            value: "130922"
        }, {
            label: "东光县",
            value: "130923"
        }, {
            label: "海兴县",
            value: "130924"
        }, {
            label: "盐山县",
            value: "130925"
        }, {
            label: "肃宁县",
            value: "130926"
        }, {
            label: "南皮县",
            value: "130927"
        }, {
            label: "吴桥县",
            value: "130928"
        }, {
            label: "献县",
            value: "130929"
        }, {
            label: "孟村回族自治县",
            value: "130930"
        }, {
            label: "河北沧州经济开发区",
            value: "130971"
        }, {
            label: "沧州高新技术产业开发区",
            value: "130972"
        }, {
            label: "沧州渤海新区",
            value: "130973"
        }, {
            label: "泊头市",
            value: "130981"
        }, {
            label: "任丘市",
            value: "130982"
        }, {
            label: "黄骅市",
            value: "130983"
        }, {
            label: "河间市",
            value: "130984"
        } ], [ {
            label: "安次区",
            value: "131002"
        }, {
            label: "广阳区",
            value: "131003"
        }, {
            label: "固安县",
            value: "131022"
        }, {
            label: "永清县",
            value: "131023"
        }, {
            label: "香河县",
            value: "131024"
        }, {
            label: "大城县",
            value: "131025"
        }, {
            label: "文安县",
            value: "131026"
        }, {
            label: "大厂回族自治县",
            value: "131028"
        }, {
            label: "廊坊经济技术开发区",
            value: "131071"
        }, {
            label: "霸州市",
            value: "131081"
        }, {
            label: "三河市",
            value: "131082"
        } ], [ {
            label: "桃城区",
            value: "131102"
        }, {
            label: "冀州区",
            value: "131103"
        }, {
            label: "枣强县",
            value: "131121"
        }, {
            label: "武邑县",
            value: "131122"
        }, {
            label: "武强县",
            value: "131123"
        }, {
            label: "饶阳县",
            value: "131124"
        }, {
            label: "安平县",
            value: "131125"
        }, {
            label: "故城县",
            value: "131126"
        }, {
            label: "景县",
            value: "131127"
        }, {
            label: "阜城县",
            value: "131128"
        }, {
            label: "河北衡水经济开发区",
            value: "131171"
        }, {
            label: "衡水滨湖新区",
            value: "131172"
        }, {
            label: "深州市",
            value: "131182"
        } ] ], [ [ {
            label: "小店区",
            value: "140105"
        }, {
            label: "迎泽区",
            value: "140106"
        }, {
            label: "杏花岭区",
            value: "140107"
        }, {
            label: "尖草坪区",
            value: "140108"
        }, {
            label: "万柏林区",
            value: "140109"
        }, {
            label: "晋源区",
            value: "140110"
        }, {
            label: "清徐县",
            value: "140121"
        }, {
            label: "阳曲县",
            value: "140122"
        }, {
            label: "娄烦县",
            value: "140123"
        }, {
            label: "山西转型综合改革示范区",
            value: "140171"
        }, {
            label: "古交市",
            value: "140181"
        } ], [ {
            label: "城区",
            value: "140202"
        }, {
            label: "矿区",
            value: "140203"
        }, {
            label: "南郊区",
            value: "140211"
        }, {
            label: "新荣区",
            value: "140212"
        }, {
            label: "阳高县",
            value: "140221"
        }, {
            label: "天镇县",
            value: "140222"
        }, {
            label: "广灵县",
            value: "140223"
        }, {
            label: "灵丘县",
            value: "140224"
        }, {
            label: "浑源县",
            value: "140225"
        }, {
            label: "左云县",
            value: "140226"
        }, {
            label: "大同县",
            value: "140227"
        }, {
            label: "山西大同经济开发区",
            value: "140271"
        } ], [ {
            label: "城区",
            value: "140302"
        }, {
            label: "矿区",
            value: "140303"
        }, {
            label: "郊区",
            value: "140311"
        }, {
            label: "平定县",
            value: "140321"
        }, {
            label: "盂县",
            value: "140322"
        }, {
            label: "山西阳泉经济开发区",
            value: "140371"
        } ], [ {
            label: "城区",
            value: "140402"
        }, {
            label: "郊区",
            value: "140411"
        }, {
            label: "长治县",
            value: "140421"
        }, {
            label: "襄垣县",
            value: "140423"
        }, {
            label: "屯留县",
            value: "140424"
        }, {
            label: "平顺县",
            value: "140425"
        }, {
            label: "黎城县",
            value: "140426"
        }, {
            label: "壶关县",
            value: "140427"
        }, {
            label: "长子县",
            value: "140428"
        }, {
            label: "武乡县",
            value: "140429"
        }, {
            label: "沁县",
            value: "140430"
        }, {
            label: "沁源县",
            value: "140431"
        }, {
            label: "山西长治高新技术产业园区",
            value: "140471"
        }, {
            label: "潞城市",
            value: "140481"
        } ], [ {
            label: "城区",
            value: "140502"
        }, {
            label: "沁水县",
            value: "140521"
        }, {
            label: "阳城县",
            value: "140522"
        }, {
            label: "陵川县",
            value: "140524"
        }, {
            label: "泽州县",
            value: "140525"
        }, {
            label: "高平市",
            value: "140581"
        } ], [ {
            label: "朔城区",
            value: "140602"
        }, {
            label: "平鲁区",
            value: "140603"
        }, {
            label: "山阴县",
            value: "140621"
        }, {
            label: "应县",
            value: "140622"
        }, {
            label: "右玉县",
            value: "140623"
        }, {
            label: "怀仁县",
            value: "140624"
        }, {
            label: "山西朔州经济开发区",
            value: "140671"
        } ], [ {
            label: "榆次区",
            value: "140702"
        }, {
            label: "榆社县",
            value: "140721"
        }, {
            label: "左权县",
            value: "140722"
        }, {
            label: "和顺县",
            value: "140723"
        }, {
            label: "昔阳县",
            value: "140724"
        }, {
            label: "寿阳县",
            value: "140725"
        }, {
            label: "太谷县",
            value: "140726"
        }, {
            label: "祁县",
            value: "140727"
        }, {
            label: "平遥县",
            value: "140728"
        }, {
            label: "灵石县",
            value: "140729"
        }, {
            label: "介休市",
            value: "140781"
        } ], [ {
            label: "盐湖区",
            value: "140802"
        }, {
            label: "临猗县",
            value: "140821"
        }, {
            label: "万荣县",
            value: "140822"
        }, {
            label: "闻喜县",
            value: "140823"
        }, {
            label: "稷山县",
            value: "140824"
        }, {
            label: "新绛县",
            value: "140825"
        }, {
            label: "绛县",
            value: "140826"
        }, {
            label: "垣曲县",
            value: "140827"
        }, {
            label: "夏县",
            value: "140828"
        }, {
            label: "平陆县",
            value: "140829"
        }, {
            label: "芮城县",
            value: "140830"
        }, {
            label: "永济市",
            value: "140881"
        }, {
            label: "河津市",
            value: "140882"
        } ], [ {
            label: "忻府区",
            value: "140902"
        }, {
            label: "定襄县",
            value: "140921"
        }, {
            label: "五台县",
            value: "140922"
        }, {
            label: "代县",
            value: "140923"
        }, {
            label: "繁峙县",
            value: "140924"
        }, {
            label: "宁武县",
            value: "140925"
        }, {
            label: "静乐县",
            value: "140926"
        }, {
            label: "神池县",
            value: "140927"
        }, {
            label: "五寨县",
            value: "140928"
        }, {
            label: "岢岚县",
            value: "140929"
        }, {
            label: "河曲县",
            value: "140930"
        }, {
            label: "保德县",
            value: "140931"
        }, {
            label: "偏关县",
            value: "140932"
        }, {
            label: "五台山风景名胜区",
            value: "140971"
        }, {
            label: "原平市",
            value: "140981"
        } ], [ {
            label: "尧都区",
            value: "141002"
        }, {
            label: "曲沃县",
            value: "141021"
        }, {
            label: "翼城县",
            value: "141022"
        }, {
            label: "襄汾县",
            value: "141023"
        }, {
            label: "洪洞县",
            value: "141024"
        }, {
            label: "古县",
            value: "141025"
        }, {
            label: "安泽县",
            value: "141026"
        }, {
            label: "浮山县",
            value: "141027"
        }, {
            label: "吉县",
            value: "141028"
        }, {
            label: "乡宁县",
            value: "141029"
        }, {
            label: "大宁县",
            value: "141030"
        }, {
            label: "隰县",
            value: "141031"
        }, {
            label: "永和县",
            value: "141032"
        }, {
            label: "蒲县",
            value: "141033"
        }, {
            label: "汾西县",
            value: "141034"
        }, {
            label: "侯马市",
            value: "141081"
        }, {
            label: "霍州市",
            value: "141082"
        } ], [ {
            label: "离石区",
            value: "141102"
        }, {
            label: "文水县",
            value: "141121"
        }, {
            label: "交城县",
            value: "141122"
        }, {
            label: "兴县",
            value: "141123"
        }, {
            label: "临县",
            value: "141124"
        }, {
            label: "柳林县",
            value: "141125"
        }, {
            label: "石楼县",
            value: "141126"
        }, {
            label: "岚县",
            value: "141127"
        }, {
            label: "方山县",
            value: "141128"
        }, {
            label: "中阳县",
            value: "141129"
        }, {
            label: "交口县",
            value: "141130"
        }, {
            label: "孝义市",
            value: "141181"
        }, {
            label: "汾阳市",
            value: "141182"
        } ] ], [ [ {
            label: "新城区",
            value: "150102"
        }, {
            label: "回民区",
            value: "150103"
        }, {
            label: "玉泉区",
            value: "150104"
        }, {
            label: "赛罕区",
            value: "150105"
        }, {
            label: "土默特左旗",
            value: "150121"
        }, {
            label: "托克托县",
            value: "150122"
        }, {
            label: "和林格尔县",
            value: "150123"
        }, {
            label: "清水河县",
            value: "150124"
        }, {
            label: "武川县",
            value: "150125"
        }, {
            label: "呼和浩特金海工业园区",
            value: "150171"
        }, {
            label: "呼和浩特经济技术开发区",
            value: "150172"
        } ], [ {
            label: "东河区",
            value: "150202"
        }, {
            label: "昆都仑区",
            value: "150203"
        }, {
            label: "青山区",
            value: "150204"
        }, {
            label: "石拐区",
            value: "150205"
        }, {
            label: "白云鄂博矿区",
            value: "150206"
        }, {
            label: "九原区",
            value: "150207"
        }, {
            label: "土默特右旗",
            value: "150221"
        }, {
            label: "固阳县",
            value: "150222"
        }, {
            label: "达尔罕茂明安联合旗",
            value: "150223"
        }, {
            label: "包头稀土高新技术产业开发区",
            value: "150271"
        } ], [ {
            label: "海勃湾区",
            value: "150302"
        }, {
            label: "海南区",
            value: "150303"
        }, {
            label: "乌达区",
            value: "150304"
        } ], [ {
            label: "红山区",
            value: "150402"
        }, {
            label: "元宝山区",
            value: "150403"
        }, {
            label: "松山区",
            value: "150404"
        }, {
            label: "阿鲁科尔沁旗",
            value: "150421"
        }, {
            label: "巴林左旗",
            value: "150422"
        }, {
            label: "巴林右旗",
            value: "150423"
        }, {
            label: "林西县",
            value: "150424"
        }, {
            label: "克什克腾旗",
            value: "150425"
        }, {
            label: "翁牛特旗",
            value: "150426"
        }, {
            label: "喀喇沁旗",
            value: "150428"
        }, {
            label: "宁城县",
            value: "150429"
        }, {
            label: "敖汉旗",
            value: "150430"
        } ], [ {
            label: "科尔沁区",
            value: "150502"
        }, {
            label: "科尔沁左翼中旗",
            value: "150521"
        }, {
            label: "科尔沁左翼后旗",
            value: "150522"
        }, {
            label: "开鲁县",
            value: "150523"
        }, {
            label: "库伦旗",
            value: "150524"
        }, {
            label: "奈曼旗",
            value: "150525"
        }, {
            label: "扎鲁特旗",
            value: "150526"
        }, {
            label: "通辽经济技术开发区",
            value: "150571"
        }, {
            label: "霍林郭勒市",
            value: "150581"
        } ], [ {
            label: "东胜区",
            value: "150602"
        }, {
            label: "康巴什区",
            value: "150603"
        }, {
            label: "达拉特旗",
            value: "150621"
        }, {
            label: "准格尔旗",
            value: "150622"
        }, {
            label: "鄂托克前旗",
            value: "150623"
        }, {
            label: "鄂托克旗",
            value: "150624"
        }, {
            label: "杭锦旗",
            value: "150625"
        }, {
            label: "乌审旗",
            value: "150626"
        }, {
            label: "伊金霍洛旗",
            value: "150627"
        } ], [ {
            label: "海拉尔区",
            value: "150702"
        }, {
            label: "扎赉诺尔区",
            value: "150703"
        }, {
            label: "阿荣旗",
            value: "150721"
        }, {
            label: "莫力达瓦达斡尔族自治旗",
            value: "150722"
        }, {
            label: "鄂伦春自治旗",
            value: "150723"
        }, {
            label: "鄂温克族自治旗",
            value: "150724"
        }, {
            label: "陈巴尔虎旗",
            value: "150725"
        }, {
            label: "新巴尔虎左旗",
            value: "150726"
        }, {
            label: "新巴尔虎右旗",
            value: "150727"
        }, {
            label: "满洲里市",
            value: "150781"
        }, {
            label: "牙克石市",
            value: "150782"
        }, {
            label: "扎兰屯市",
            value: "150783"
        }, {
            label: "额尔古纳市",
            value: "150784"
        }, {
            label: "根河市",
            value: "150785"
        } ], [ {
            label: "临河区",
            value: "150802"
        }, {
            label: "五原县",
            value: "150821"
        }, {
            label: "磴口县",
            value: "150822"
        }, {
            label: "乌拉特前旗",
            value: "150823"
        }, {
            label: "乌拉特中旗",
            value: "150824"
        }, {
            label: "乌拉特后旗",
            value: "150825"
        }, {
            label: "杭锦后旗",
            value: "150826"
        } ], [ {
            label: "集宁区",
            value: "150902"
        }, {
            label: "卓资县",
            value: "150921"
        }, {
            label: "化德县",
            value: "150922"
        }, {
            label: "商都县",
            value: "150923"
        }, {
            label: "兴和县",
            value: "150924"
        }, {
            label: "凉城县",
            value: "150925"
        }, {
            label: "察哈尔右翼前旗",
            value: "150926"
        }, {
            label: "察哈尔右翼中旗",
            value: "150927"
        }, {
            label: "察哈尔右翼后旗",
            value: "150928"
        }, {
            label: "四子王旗",
            value: "150929"
        }, {
            label: "丰镇市",
            value: "150981"
        } ], [ {
            label: "乌兰浩特市",
            value: "152201"
        }, {
            label: "阿尔山市",
            value: "152202"
        }, {
            label: "科尔沁右翼前旗",
            value: "152221"
        }, {
            label: "科尔沁右翼中旗",
            value: "152222"
        }, {
            label: "扎赉特旗",
            value: "152223"
        }, {
            label: "突泉县",
            value: "152224"
        } ], [ {
            label: "二连浩特市",
            value: "152501"
        }, {
            label: "锡林浩特市",
            value: "152502"
        }, {
            label: "阿巴嘎旗",
            value: "152522"
        }, {
            label: "苏尼特左旗",
            value: "152523"
        }, {
            label: "苏尼特右旗",
            value: "152524"
        }, {
            label: "东乌珠穆沁旗",
            value: "152525"
        }, {
            label: "西乌珠穆沁旗",
            value: "152526"
        }, {
            label: "太仆寺旗",
            value: "152527"
        }, {
            label: "镶黄旗",
            value: "152528"
        }, {
            label: "正镶白旗",
            value: "152529"
        }, {
            label: "正蓝旗",
            value: "152530"
        }, {
            label: "多伦县",
            value: "152531"
        }, {
            label: "乌拉盖管委会",
            value: "152571"
        } ], [ {
            label: "阿拉善左旗",
            value: "152921"
        }, {
            label: "阿拉善右旗",
            value: "152922"
        }, {
            label: "额济纳旗",
            value: "152923"
        }, {
            label: "内蒙古阿拉善经济开发区",
            value: "152971"
        } ] ], [ [ {
            label: "和平区",
            value: "210102"
        }, {
            label: "沈河区",
            value: "210103"
        }, {
            label: "大东区",
            value: "210104"
        }, {
            label: "皇姑区",
            value: "210105"
        }, {
            label: "铁西区",
            value: "210106"
        }, {
            label: "苏家屯区",
            value: "210111"
        }, {
            label: "浑南区",
            value: "210112"
        }, {
            label: "沈北新区",
            value: "210113"
        }, {
            label: "于洪区",
            value: "210114"
        }, {
            label: "辽中区",
            value: "210115"
        }, {
            label: "康平县",
            value: "210123"
        }, {
            label: "法库县",
            value: "210124"
        }, {
            label: "新民市",
            value: "210181"
        } ], [ {
            label: "中山区",
            value: "210202"
        }, {
            label: "西岗区",
            value: "210203"
        }, {
            label: "沙河口区",
            value: "210204"
        }, {
            label: "甘井子区",
            value: "210211"
        }, {
            label: "旅顺口区",
            value: "210212"
        }, {
            label: "金州区",
            value: "210213"
        }, {
            label: "普兰店区",
            value: "210214"
        }, {
            label: "长海县",
            value: "210224"
        }, {
            label: "瓦房店市",
            value: "210281"
        }, {
            label: "庄河市",
            value: "210283"
        } ], [ {
            label: "铁东区",
            value: "210302"
        }, {
            label: "铁西区",
            value: "210303"
        }, {
            label: "立山区",
            value: "210304"
        }, {
            label: "千山区",
            value: "210311"
        }, {
            label: "台安县",
            value: "210321"
        }, {
            label: "岫岩满族自治县",
            value: "210323"
        }, {
            label: "海城市",
            value: "210381"
        } ], [ {
            label: "新抚区",
            value: "210402"
        }, {
            label: "东洲区",
            value: "210403"
        }, {
            label: "望花区",
            value: "210404"
        }, {
            label: "顺城区",
            value: "210411"
        }, {
            label: "抚顺县",
            value: "210421"
        }, {
            label: "新宾满族自治县",
            value: "210422"
        }, {
            label: "清原满族自治县",
            value: "210423"
        } ], [ {
            label: "平山区",
            value: "210502"
        }, {
            label: "溪湖区",
            value: "210503"
        }, {
            label: "明山区",
            value: "210504"
        }, {
            label: "南芬区",
            value: "210505"
        }, {
            label: "本溪满族自治县",
            value: "210521"
        }, {
            label: "桓仁满族自治县",
            value: "210522"
        } ], [ {
            label: "元宝区",
            value: "210602"
        }, {
            label: "振兴区",
            value: "210603"
        }, {
            label: "振安区",
            value: "210604"
        }, {
            label: "宽甸满族自治县",
            value: "210624"
        }, {
            label: "东港市",
            value: "210681"
        }, {
            label: "凤城市",
            value: "210682"
        } ], [ {
            label: "古塔区",
            value: "210702"
        }, {
            label: "凌河区",
            value: "210703"
        }, {
            label: "太和区",
            value: "210711"
        }, {
            label: "黑山县",
            value: "210726"
        }, {
            label: "义县",
            value: "210727"
        }, {
            label: "凌海市",
            value: "210781"
        }, {
            label: "北镇市",
            value: "210782"
        } ], [ {
            label: "站前区",
            value: "210802"
        }, {
            label: "西市区",
            value: "210803"
        }, {
            label: "鲅鱼圈区",
            value: "210804"
        }, {
            label: "老边区",
            value: "210811"
        }, {
            label: "盖州市",
            value: "210881"
        }, {
            label: "大石桥市",
            value: "210882"
        } ], [ {
            label: "海州区",
            value: "210902"
        }, {
            label: "新邱区",
            value: "210903"
        }, {
            label: "太平区",
            value: "210904"
        }, {
            label: "清河门区",
            value: "210905"
        }, {
            label: "细河区",
            value: "210911"
        }, {
            label: "阜新蒙古族自治县",
            value: "210921"
        }, {
            label: "彰武县",
            value: "210922"
        } ], [ {
            label: "白塔区",
            value: "211002"
        }, {
            label: "文圣区",
            value: "211003"
        }, {
            label: "宏伟区",
            value: "211004"
        }, {
            label: "弓长岭区",
            value: "211005"
        }, {
            label: "太子河区",
            value: "211011"
        }, {
            label: "辽阳县",
            value: "211021"
        }, {
            label: "灯塔市",
            value: "211081"
        } ], [ {
            label: "双台子区",
            value: "211102"
        }, {
            label: "兴隆台区",
            value: "211103"
        }, {
            label: "大洼区",
            value: "211104"
        }, {
            label: "盘山县",
            value: "211122"
        } ], [ {
            label: "银州区",
            value: "211202"
        }, {
            label: "清河区",
            value: "211204"
        }, {
            label: "铁岭县",
            value: "211221"
        }, {
            label: "西丰县",
            value: "211223"
        }, {
            label: "昌图县",
            value: "211224"
        }, {
            label: "调兵山市",
            value: "211281"
        }, {
            label: "开原市",
            value: "211282"
        } ], [ {
            label: "双塔区",
            value: "211302"
        }, {
            label: "龙城区",
            value: "211303"
        }, {
            label: "朝阳县",
            value: "211321"
        }, {
            label: "建平县",
            value: "211322"
        }, {
            label: "喀喇沁左翼蒙古族自治县",
            value: "211324"
        }, {
            label: "北票市",
            value: "211381"
        }, {
            label: "凌源市",
            value: "211382"
        } ], [ {
            label: "连山区",
            value: "211402"
        }, {
            label: "龙港区",
            value: "211403"
        }, {
            label: "南票区",
            value: "211404"
        }, {
            label: "绥中县",
            value: "211421"
        }, {
            label: "建昌县",
            value: "211422"
        }, {
            label: "兴城市",
            value: "211481"
        } ] ], [ [ {
            label: "南关区",
            value: "220102"
        }, {
            label: "宽城区",
            value: "220103"
        }, {
            label: "朝阳区",
            value: "220104"
        }, {
            label: "二道区",
            value: "220105"
        }, {
            label: "绿园区",
            value: "220106"
        }, {
            label: "双阳区",
            value: "220112"
        }, {
            label: "九台区",
            value: "220113"
        }, {
            label: "农安县",
            value: "220122"
        }, {
            label: "长春经济技术开发区",
            value: "220171"
        }, {
            label: "长春净月高新技术产业开发区",
            value: "220172"
        }, {
            label: "长春高新技术产业开发区",
            value: "220173"
        }, {
            label: "长春汽车经济技术开发区",
            value: "220174"
        }, {
            label: "榆树市",
            value: "220182"
        }, {
            label: "德惠市",
            value: "220183"
        } ], [ {
            label: "昌邑区",
            value: "220202"
        }, {
            label: "龙潭区",
            value: "220203"
        }, {
            label: "船营区",
            value: "220204"
        }, {
            label: "丰满区",
            value: "220211"
        }, {
            label: "永吉县",
            value: "220221"
        }, {
            label: "吉林经济开发区",
            value: "220271"
        }, {
            label: "吉林高新技术产业开发区",
            value: "220272"
        }, {
            label: "吉林中国新加坡食品区",
            value: "220273"
        }, {
            label: "蛟河市",
            value: "220281"
        }, {
            label: "桦甸市",
            value: "220282"
        }, {
            label: "舒兰市",
            value: "220283"
        }, {
            label: "磐石市",
            value: "220284"
        } ], [ {
            label: "铁西区",
            value: "220302"
        }, {
            label: "铁东区",
            value: "220303"
        }, {
            label: "梨树县",
            value: "220322"
        }, {
            label: "伊通满族自治县",
            value: "220323"
        }, {
            label: "公主岭市",
            value: "220381"
        }, {
            label: "双辽市",
            value: "220382"
        } ], [ {
            label: "龙山区",
            value: "220402"
        }, {
            label: "西安区",
            value: "220403"
        }, {
            label: "东丰县",
            value: "220421"
        }, {
            label: "东辽县",
            value: "220422"
        } ], [ {
            label: "东昌区",
            value: "220502"
        }, {
            label: "二道江区",
            value: "220503"
        }, {
            label: "通化县",
            value: "220521"
        }, {
            label: "辉南县",
            value: "220523"
        }, {
            label: "柳河县",
            value: "220524"
        }, {
            label: "梅河口市",
            value: "220581"
        }, {
            label: "集安市",
            value: "220582"
        } ], [ {
            label: "浑江区",
            value: "220602"
        }, {
            label: "江源区",
            value: "220605"
        }, {
            label: "抚松县",
            value: "220621"
        }, {
            label: "靖宇县",
            value: "220622"
        }, {
            label: "长白朝鲜族自治县",
            value: "220623"
        }, {
            label: "临江市",
            value: "220681"
        } ], [ {
            label: "宁江区",
            value: "220702"
        }, {
            label: "前郭尔罗斯蒙古族自治县",
            value: "220721"
        }, {
            label: "长岭县",
            value: "220722"
        }, {
            label: "乾安县",
            value: "220723"
        }, {
            label: "吉林松原经济开发区",
            value: "220771"
        }, {
            label: "扶余市",
            value: "220781"
        } ], [ {
            label: "洮北区",
            value: "220802"
        }, {
            label: "镇赉县",
            value: "220821"
        }, {
            label: "通榆县",
            value: "220822"
        }, {
            label: "吉林白城经济开发区",
            value: "220871"
        }, {
            label: "洮南市",
            value: "220881"
        }, {
            label: "大安市",
            value: "220882"
        } ], [ {
            label: "延吉市",
            value: "222401"
        }, {
            label: "图们市",
            value: "222402"
        }, {
            label: "敦化市",
            value: "222403"
        }, {
            label: "珲春市",
            value: "222404"
        }, {
            label: "龙井市",
            value: "222405"
        }, {
            label: "和龙市",
            value: "222406"
        }, {
            label: "汪清县",
            value: "222424"
        }, {
            label: "安图县",
            value: "222426"
        } ] ], [ [ {
            label: "道里区",
            value: "230102"
        }, {
            label: "南岗区",
            value: "230103"
        }, {
            label: "道外区",
            value: "230104"
        }, {
            label: "平房区",
            value: "230108"
        }, {
            label: "松北区",
            value: "230109"
        }, {
            label: "香坊区",
            value: "230110"
        }, {
            label: "呼兰区",
            value: "230111"
        }, {
            label: "阿城区",
            value: "230112"
        }, {
            label: "双城区",
            value: "230113"
        }, {
            label: "依兰县",
            value: "230123"
        }, {
            label: "方正县",
            value: "230124"
        }, {
            label: "宾县",
            value: "230125"
        }, {
            label: "巴彦县",
            value: "230126"
        }, {
            label: "木兰县",
            value: "230127"
        }, {
            label: "通河县",
            value: "230128"
        }, {
            label: "延寿县",
            value: "230129"
        }, {
            label: "尚志市",
            value: "230183"
        }, {
            label: "五常市",
            value: "230184"
        } ], [ {
            label: "龙沙区",
            value: "230202"
        }, {
            label: "建华区",
            value: "230203"
        }, {
            label: "铁锋区",
            value: "230204"
        }, {
            label: "昂昂溪区",
            value: "230205"
        }, {
            label: "富拉尔基区",
            value: "230206"
        }, {
            label: "碾子山区",
            value: "230207"
        }, {
            label: "梅里斯达斡尔族区",
            value: "230208"
        }, {
            label: "龙江县",
            value: "230221"
        }, {
            label: "依安县",
            value: "230223"
        }, {
            label: "泰来县",
            value: "230224"
        }, {
            label: "甘南县",
            value: "230225"
        }, {
            label: "富裕县",
            value: "230227"
        }, {
            label: "克山县",
            value: "230229"
        }, {
            label: "克东县",
            value: "230230"
        }, {
            label: "拜泉县",
            value: "230231"
        }, {
            label: "讷河市",
            value: "230281"
        } ], [ {
            label: "鸡冠区",
            value: "230302"
        }, {
            label: "恒山区",
            value: "230303"
        }, {
            label: "滴道区",
            value: "230304"
        }, {
            label: "梨树区",
            value: "230305"
        }, {
            label: "城子河区",
            value: "230306"
        }, {
            label: "麻山区",
            value: "230307"
        }, {
            label: "鸡东县",
            value: "230321"
        }, {
            label: "虎林市",
            value: "230381"
        }, {
            label: "密山市",
            value: "230382"
        } ], [ {
            label: "向阳区",
            value: "230402"
        }, {
            label: "工农区",
            value: "230403"
        }, {
            label: "南山区",
            value: "230404"
        }, {
            label: "兴安区",
            value: "230405"
        }, {
            label: "东山区",
            value: "230406"
        }, {
            label: "兴山区",
            value: "230407"
        }, {
            label: "萝北县",
            value: "230421"
        }, {
            label: "绥滨县",
            value: "230422"
        } ], [ {
            label: "尖山区",
            value: "230502"
        }, {
            label: "岭东区",
            value: "230503"
        }, {
            label: "四方台区",
            value: "230505"
        }, {
            label: "宝山区",
            value: "230506"
        }, {
            label: "集贤县",
            value: "230521"
        }, {
            label: "友谊县",
            value: "230522"
        }, {
            label: "宝清县",
            value: "230523"
        }, {
            label: "饶河县",
            value: "230524"
        } ], [ {
            label: "萨尔图区",
            value: "230602"
        }, {
            label: "龙凤区",
            value: "230603"
        }, {
            label: "让胡路区",
            value: "230604"
        }, {
            label: "红岗区",
            value: "230605"
        }, {
            label: "大同区",
            value: "230606"
        }, {
            label: "肇州县",
            value: "230621"
        }, {
            label: "肇源县",
            value: "230622"
        }, {
            label: "林甸县",
            value: "230623"
        }, {
            label: "杜尔伯特蒙古族自治县",
            value: "230624"
        }, {
            label: "大庆高新技术产业开发区",
            value: "230671"
        } ], [ {
            label: "伊春区",
            value: "230702"
        }, {
            label: "南岔区",
            value: "230703"
        }, {
            label: "友好区",
            value: "230704"
        }, {
            label: "西林区",
            value: "230705"
        }, {
            label: "翠峦区",
            value: "230706"
        }, {
            label: "新青区",
            value: "230707"
        }, {
            label: "美溪区",
            value: "230708"
        }, {
            label: "金山屯区",
            value: "230709"
        }, {
            label: "五营区",
            value: "230710"
        }, {
            label: "乌马河区",
            value: "230711"
        }, {
            label: "汤旺河区",
            value: "230712"
        }, {
            label: "带岭区",
            value: "230713"
        }, {
            label: "乌伊岭区",
            value: "230714"
        }, {
            label: "红星区",
            value: "230715"
        }, {
            label: "上甘岭区",
            value: "230716"
        }, {
            label: "嘉荫县",
            value: "230722"
        }, {
            label: "铁力市",
            value: "230781"
        } ], [ {
            label: "向阳区",
            value: "230803"
        }, {
            label: "前进区",
            value: "230804"
        }, {
            label: "东风区",
            value: "230805"
        }, {
            label: "郊区",
            value: "230811"
        }, {
            label: "桦南县",
            value: "230822"
        }, {
            label: "桦川县",
            value: "230826"
        }, {
            label: "汤原县",
            value: "230828"
        }, {
            label: "同江市",
            value: "230881"
        }, {
            label: "富锦市",
            value: "230882"
        }, {
            label: "抚远市",
            value: "230883"
        } ], [ {
            label: "新兴区",
            value: "230902"
        }, {
            label: "桃山区",
            value: "230903"
        }, {
            label: "茄子河区",
            value: "230904"
        }, {
            label: "勃利县",
            value: "230921"
        } ], [ {
            label: "东安区",
            value: "231002"
        }, {
            label: "阳明区",
            value: "231003"
        }, {
            label: "爱民区",
            value: "231004"
        }, {
            label: "西安区",
            value: "231005"
        }, {
            label: "林口县",
            value: "231025"
        }, {
            label: "牡丹江经济技术开发区",
            value: "231071"
        }, {
            label: "绥芬河市",
            value: "231081"
        }, {
            label: "海林市",
            value: "231083"
        }, {
            label: "宁安市",
            value: "231084"
        }, {
            label: "穆棱市",
            value: "231085"
        }, {
            label: "东宁市",
            value: "231086"
        } ], [ {
            label: "爱辉区",
            value: "231102"
        }, {
            label: "嫩江县",
            value: "231121"
        }, {
            label: "逊克县",
            value: "231123"
        }, {
            label: "孙吴县",
            value: "231124"
        }, {
            label: "北安市",
            value: "231181"
        }, {
            label: "五大连池市",
            value: "231182"
        } ], [ {
            label: "北林区",
            value: "231202"
        }, {
            label: "望奎县",
            value: "231221"
        }, {
            label: "兰西县",
            value: "231222"
        }, {
            label: "青冈县",
            value: "231223"
        }, {
            label: "庆安县",
            value: "231224"
        }, {
            label: "明水县",
            value: "231225"
        }, {
            label: "绥棱县",
            value: "231226"
        }, {
            label: "安达市",
            value: "231281"
        }, {
            label: "肇东市",
            value: "231282"
        }, {
            label: "海伦市",
            value: "231283"
        } ], [ {
            label: "加格达奇区",
            value: "232701"
        }, {
            label: "松岭区",
            value: "232702"
        }, {
            label: "新林区",
            value: "232703"
        }, {
            label: "呼中区",
            value: "232704"
        }, {
            label: "呼玛县",
            value: "232721"
        }, {
            label: "塔河县",
            value: "232722"
        }, {
            label: "漠河县",
            value: "232723"
        } ] ], [ [ {
            label: "黄浦区",
            value: "310101"
        }, {
            label: "徐汇区",
            value: "310104"
        }, {
            label: "长宁区",
            value: "310105"
        }, {
            label: "静安区",
            value: "310106"
        }, {
            label: "普陀区",
            value: "310107"
        }, {
            label: "虹口区",
            value: "310109"
        }, {
            label: "杨浦区",
            value: "310110"
        }, {
            label: "闵行区",
            value: "310112"
        }, {
            label: "宝山区",
            value: "310113"
        }, {
            label: "嘉定区",
            value: "310114"
        }, {
            label: "浦东新区",
            value: "310115"
        }, {
            label: "金山区",
            value: "310116"
        }, {
            label: "松江区",
            value: "310117"
        }, {
            label: "青浦区",
            value: "310118"
        }, {
            label: "奉贤区",
            value: "310120"
        }, {
            label: "崇明区",
            value: "310151"
        } ] ], [ [ {
            label: "玄武区",
            value: "320102"
        }, {
            label: "秦淮区",
            value: "320104"
        }, {
            label: "建邺区",
            value: "320105"
        }, {
            label: "鼓楼区",
            value: "320106"
        }, {
            label: "浦口区",
            value: "320111"
        }, {
            label: "栖霞区",
            value: "320113"
        }, {
            label: "雨花台区",
            value: "320114"
        }, {
            label: "江宁区",
            value: "320115"
        }, {
            label: "六合区",
            value: "320116"
        }, {
            label: "溧水区",
            value: "320117"
        }, {
            label: "高淳区",
            value: "320118"
        } ], [ {
            label: "锡山区",
            value: "320205"
        }, {
            label: "惠山区",
            value: "320206"
        }, {
            label: "滨湖区",
            value: "320211"
        }, {
            label: "梁溪区",
            value: "320213"
        }, {
            label: "新吴区",
            value: "320214"
        }, {
            label: "江阴市",
            value: "320281"
        }, {
            label: "宜兴市",
            value: "320282"
        } ], [ {
            label: "鼓楼区",
            value: "320302"
        }, {
            label: "云龙区",
            value: "320303"
        }, {
            label: "贾汪区",
            value: "320305"
        }, {
            label: "泉山区",
            value: "320311"
        }, {
            label: "铜山区",
            value: "320312"
        }, {
            label: "丰县",
            value: "320321"
        }, {
            label: "沛县",
            value: "320322"
        }, {
            label: "睢宁县",
            value: "320324"
        }, {
            label: "徐州经济技术开发区",
            value: "320371"
        }, {
            label: "新沂市",
            value: "320381"
        }, {
            label: "邳州市",
            value: "320382"
        } ], [ {
            label: "天宁区",
            value: "320402"
        }, {
            label: "钟楼区",
            value: "320404"
        }, {
            label: "新北区",
            value: "320411"
        }, {
            label: "武进区",
            value: "320412"
        }, {
            label: "金坛区",
            value: "320413"
        }, {
            label: "溧阳市",
            value: "320481"
        } ], [ {
            label: "虎丘区",
            value: "320505"
        }, {
            label: "吴中区",
            value: "320506"
        }, {
            label: "相城区",
            value: "320507"
        }, {
            label: "姑苏区",
            value: "320508"
        }, {
            label: "吴江区",
            value: "320509"
        }, {
            label: "苏州工业园区",
            value: "320571"
        }, {
            label: "常熟市",
            value: "320581"
        }, {
            label: "张家港市",
            value: "320582"
        }, {
            label: "昆山市",
            value: "320583"
        }, {
            label: "太仓市",
            value: "320585"
        } ], [ {
            label: "崇川区",
            value: "320602"
        }, {
            label: "港闸区",
            value: "320611"
        }, {
            label: "通州区",
            value: "320612"
        }, {
            label: "海安县",
            value: "320621"
        }, {
            label: "如东县",
            value: "320623"
        }, {
            label: "南通经济技术开发区",
            value: "320671"
        }, {
            label: "启东市",
            value: "320681"
        }, {
            label: "如皋市",
            value: "320682"
        }, {
            label: "海门市",
            value: "320684"
        } ], [ {
            label: "连云区",
            value: "320703"
        }, {
            label: "海州区",
            value: "320706"
        }, {
            label: "赣榆区",
            value: "320707"
        }, {
            label: "东海县",
            value: "320722"
        }, {
            label: "灌云县",
            value: "320723"
        }, {
            label: "灌南县",
            value: "320724"
        }, {
            label: "连云港经济技术开发区",
            value: "320771"
        }, {
            label: "连云港高新技术产业开发区",
            value: "320772"
        } ], [ {
            label: "淮安区",
            value: "320803"
        }, {
            label: "淮阴区",
            value: "320804"
        }, {
            label: "清江浦区",
            value: "320812"
        }, {
            label: "洪泽区",
            value: "320813"
        }, {
            label: "涟水县",
            value: "320826"
        }, {
            label: "盱眙县",
            value: "320830"
        }, {
            label: "金湖县",
            value: "320831"
        }, {
            label: "淮安经济技术开发区",
            value: "320871"
        } ], [ {
            label: "亭湖区",
            value: "320902"
        }, {
            label: "盐都区",
            value: "320903"
        }, {
            label: "大丰区",
            value: "320904"
        }, {
            label: "响水县",
            value: "320921"
        }, {
            label: "滨海县",
            value: "320922"
        }, {
            label: "阜宁县",
            value: "320923"
        }, {
            label: "射阳县",
            value: "320924"
        }, {
            label: "建湖县",
            value: "320925"
        }, {
            label: "盐城经济技术开发区",
            value: "320971"
        }, {
            label: "东台市",
            value: "320981"
        } ], [ {
            label: "广陵区",
            value: "321002"
        }, {
            label: "邗江区",
            value: "321003"
        }, {
            label: "江都区",
            value: "321012"
        }, {
            label: "宝应县",
            value: "321023"
        }, {
            label: "扬州经济技术开发区",
            value: "321071"
        }, {
            label: "仪征市",
            value: "321081"
        }, {
            label: "高邮市",
            value: "321084"
        } ], [ {
            label: "京口区",
            value: "321102"
        }, {
            label: "润州区",
            value: "321111"
        }, {
            label: "丹徒区",
            value: "321112"
        }, {
            label: "镇江新区",
            value: "321171"
        }, {
            label: "丹阳市",
            value: "321181"
        }, {
            label: "扬中市",
            value: "321182"
        }, {
            label: "句容市",
            value: "321183"
        } ], [ {
            label: "海陵区",
            value: "321202"
        }, {
            label: "高港区",
            value: "321203"
        }, {
            label: "姜堰区",
            value: "321204"
        }, {
            label: "泰州医药高新技术产业开发区",
            value: "321271"
        }, {
            label: "兴化市",
            value: "321281"
        }, {
            label: "靖江市",
            value: "321282"
        }, {
            label: "泰兴市",
            value: "321283"
        } ], [ {
            label: "宿城区",
            value: "321302"
        }, {
            label: "宿豫区",
            value: "321311"
        }, {
            label: "沭阳县",
            value: "321322"
        }, {
            label: "泗阳县",
            value: "321323"
        }, {
            label: "泗洪县",
            value: "321324"
        }, {
            label: "宿迁经济技术开发区",
            value: "321371"
        } ] ], [ [ {
            label: "上城区",
            value: "330102"
        }, {
            label: "下城区",
            value: "330103"
        }, {
            label: "江干区",
            value: "330104"
        }, {
            label: "拱墅区",
            value: "330105"
        }, {
            label: "西湖区",
            value: "330106"
        }, {
            label: "滨江区",
            value: "330108"
        }, {
            label: "萧山区",
            value: "330109"
        }, {
            label: "余杭区",
            value: "330110"
        }, {
            label: "富阳区",
            value: "330111"
        }, {
            label: "临安区",
            value: "330112"
        }, {
            label: "桐庐县",
            value: "330122"
        }, {
            label: "淳安县",
            value: "330127"
        }, {
            label: "建德市",
            value: "330182"
        } ], [ {
            label: "海曙区",
            value: "330203"
        }, {
            label: "江北区",
            value: "330205"
        }, {
            label: "北仑区",
            value: "330206"
        }, {
            label: "镇海区",
            value: "330211"
        }, {
            label: "鄞州区",
            value: "330212"
        }, {
            label: "奉化区",
            value: "330213"
        }, {
            label: "象山县",
            value: "330225"
        }, {
            label: "宁海县",
            value: "330226"
        }, {
            label: "余姚市",
            value: "330281"
        }, {
            label: "慈溪市",
            value: "330282"
        } ], [ {
            label: "鹿城区",
            value: "330302"
        }, {
            label: "龙湾区",
            value: "330303"
        }, {
            label: "瓯海区",
            value: "330304"
        }, {
            label: "洞头区",
            value: "330305"
        }, {
            label: "永嘉县",
            value: "330324"
        }, {
            label: "平阳县",
            value: "330326"
        }, {
            label: "苍南县",
            value: "330327"
        }, {
            label: "文成县",
            value: "330328"
        }, {
            label: "泰顺县",
            value: "330329"
        }, {
            label: "温州经济技术开发区",
            value: "330371"
        }, {
            label: "瑞安市",
            value: "330381"
        }, {
            label: "乐清市",
            value: "330382"
        } ], [ {
            label: "南湖区",
            value: "330402"
        }, {
            label: "秀洲区",
            value: "330411"
        }, {
            label: "嘉善县",
            value: "330421"
        }, {
            label: "海盐县",
            value: "330424"
        }, {
            label: "海宁市",
            value: "330481"
        }, {
            label: "平湖市",
            value: "330482"
        }, {
            label: "桐乡市",
            value: "330483"
        } ], [ {
            label: "吴兴区",
            value: "330502"
        }, {
            label: "南浔区",
            value: "330503"
        }, {
            label: "德清县",
            value: "330521"
        }, {
            label: "长兴县",
            value: "330522"
        }, {
            label: "安吉县",
            value: "330523"
        } ], [ {
            label: "越城区",
            value: "330602"
        }, {
            label: "柯桥区",
            value: "330603"
        }, {
            label: "上虞区",
            value: "330604"
        }, {
            label: "新昌县",
            value: "330624"
        }, {
            label: "诸暨市",
            value: "330681"
        }, {
            label: "嵊州市",
            value: "330683"
        } ], [ {
            label: "婺城区",
            value: "330702"
        }, {
            label: "金东区",
            value: "330703"
        }, {
            label: "武义县",
            value: "330723"
        }, {
            label: "浦江县",
            value: "330726"
        }, {
            label: "磐安县",
            value: "330727"
        }, {
            label: "兰溪市",
            value: "330781"
        }, {
            label: "义乌市",
            value: "330782"
        }, {
            label: "东阳市",
            value: "330783"
        }, {
            label: "永康市",
            value: "330784"
        } ], [ {
            label: "柯城区",
            value: "330802"
        }, {
            label: "衢江区",
            value: "330803"
        }, {
            label: "常山县",
            value: "330822"
        }, {
            label: "开化县",
            value: "330824"
        }, {
            label: "龙游县",
            value: "330825"
        }, {
            label: "江山市",
            value: "330881"
        } ], [ {
            label: "定海区",
            value: "330902"
        }, {
            label: "普陀区",
            value: "330903"
        }, {
            label: "岱山县",
            value: "330921"
        }, {
            label: "嵊泗县",
            value: "330922"
        } ], [ {
            label: "椒江区",
            value: "331002"
        }, {
            label: "黄岩区",
            value: "331003"
        }, {
            label: "路桥区",
            value: "331004"
        }, {
            label: "三门县",
            value: "331022"
        }, {
            label: "天台县",
            value: "331023"
        }, {
            label: "仙居县",
            value: "331024"
        }, {
            label: "温岭市",
            value: "331081"
        }, {
            label: "临海市",
            value: "331082"
        }, {
            label: "玉环市",
            value: "331083"
        } ], [ {
            label: "莲都区",
            value: "331102"
        }, {
            label: "青田县",
            value: "331121"
        }, {
            label: "缙云县",
            value: "331122"
        }, {
            label: "遂昌县",
            value: "331123"
        }, {
            label: "松阳县",
            value: "331124"
        }, {
            label: "云和县",
            value: "331125"
        }, {
            label: "庆元县",
            value: "331126"
        }, {
            label: "景宁畲族自治县",
            value: "331127"
        }, {
            label: "龙泉市",
            value: "331181"
        } ] ], [ [ {
            label: "瑶海区",
            value: "340102"
        }, {
            label: "庐阳区",
            value: "340103"
        }, {
            label: "蜀山区",
            value: "340104"
        }, {
            label: "包河区",
            value: "340111"
        }, {
            label: "长丰县",
            value: "340121"
        }, {
            label: "肥东县",
            value: "340122"
        }, {
            label: "肥西县",
            value: "340123"
        }, {
            label: "庐江县",
            value: "340124"
        }, {
            label: "合肥高新技术产业开发区",
            value: "340171"
        }, {
            label: "合肥经济技术开发区",
            value: "340172"
        }, {
            label: "合肥新站高新技术产业开发区",
            value: "340173"
        }, {
            label: "巢湖市",
            value: "340181"
        } ], [ {
            label: "镜湖区",
            value: "340202"
        }, {
            label: "弋江区",
            value: "340203"
        }, {
            label: "鸠江区",
            value: "340207"
        }, {
            label: "三山区",
            value: "340208"
        }, {
            label: "芜湖县",
            value: "340221"
        }, {
            label: "繁昌县",
            value: "340222"
        }, {
            label: "南陵县",
            value: "340223"
        }, {
            label: "无为县",
            value: "340225"
        }, {
            label: "芜湖经济技术开发区",
            value: "340271"
        }, {
            label: "安徽芜湖长江大桥经济开发区",
            value: "340272"
        } ], [ {
            label: "龙子湖区",
            value: "340302"
        }, {
            label: "蚌山区",
            value: "340303"
        }, {
            label: "禹会区",
            value: "340304"
        }, {
            label: "淮上区",
            value: "340311"
        }, {
            label: "怀远县",
            value: "340321"
        }, {
            label: "五河县",
            value: "340322"
        }, {
            label: "固镇县",
            value: "340323"
        }, {
            label: "蚌埠市高新技术开发区",
            value: "340371"
        }, {
            label: "蚌埠市经济开发区",
            value: "340372"
        } ], [ {
            label: "大通区",
            value: "340402"
        }, {
            label: "田家庵区",
            value: "340403"
        }, {
            label: "谢家集区",
            value: "340404"
        }, {
            label: "八公山区",
            value: "340405"
        }, {
            label: "潘集区",
            value: "340406"
        }, {
            label: "凤台县",
            value: "340421"
        }, {
            label: "寿县",
            value: "340422"
        } ], [ {
            label: "花山区",
            value: "340503"
        }, {
            label: "雨山区",
            value: "340504"
        }, {
            label: "博望区",
            value: "340506"
        }, {
            label: "当涂县",
            value: "340521"
        }, {
            label: "含山县",
            value: "340522"
        }, {
            label: "和县",
            value: "340523"
        } ], [ {
            label: "杜集区",
            value: "340602"
        }, {
            label: "相山区",
            value: "340603"
        }, {
            label: "烈山区",
            value: "340604"
        }, {
            label: "濉溪县",
            value: "340621"
        } ], [ {
            label: "铜官区",
            value: "340705"
        }, {
            label: "义安区",
            value: "340706"
        }, {
            label: "郊区",
            value: "340711"
        }, {
            label: "枞阳县",
            value: "340722"
        } ], [ {
            label: "迎江区",
            value: "340802"
        }, {
            label: "大观区",
            value: "340803"
        }, {
            label: "宜秀区",
            value: "340811"
        }, {
            label: "怀宁县",
            value: "340822"
        }, {
            label: "潜山县",
            value: "340824"
        }, {
            label: "太湖县",
            value: "340825"
        }, {
            label: "宿松县",
            value: "340826"
        }, {
            label: "望江县",
            value: "340827"
        }, {
            label: "岳西县",
            value: "340828"
        }, {
            label: "安徽安庆经济开发区",
            value: "340871"
        }, {
            label: "桐城市",
            value: "340881"
        } ], [ {
            label: "屯溪区",
            value: "341002"
        }, {
            label: "黄山区",
            value: "341003"
        }, {
            label: "徽州区",
            value: "341004"
        }, {
            label: "歙县",
            value: "341021"
        }, {
            label: "休宁县",
            value: "341022"
        }, {
            label: "黟县",
            value: "341023"
        }, {
            label: "祁门县",
            value: "341024"
        } ], [ {
            label: "琅琊区",
            value: "341102"
        }, {
            label: "南谯区",
            value: "341103"
        }, {
            label: "来安县",
            value: "341122"
        }, {
            label: "全椒县",
            value: "341124"
        }, {
            label: "定远县",
            value: "341125"
        }, {
            label: "凤阳县",
            value: "341126"
        }, {
            label: "苏滁现代产业园",
            value: "341171"
        }, {
            label: "滁州经济技术开发区",
            value: "341172"
        }, {
            label: "天长市",
            value: "341181"
        }, {
            label: "明光市",
            value: "341182"
        } ], [ {
            label: "颍州区",
            value: "341202"
        }, {
            label: "颍东区",
            value: "341203"
        }, {
            label: "颍泉区",
            value: "341204"
        }, {
            label: "临泉县",
            value: "341221"
        }, {
            label: "太和县",
            value: "341222"
        }, {
            label: "阜南县",
            value: "341225"
        }, {
            label: "颍上县",
            value: "341226"
        }, {
            label: "阜阳合肥现代产业园区",
            value: "341271"
        }, {
            label: "阜阳经济技术开发区",
            value: "341272"
        }, {
            label: "界首市",
            value: "341282"
        } ], [ {
            label: "埇桥区",
            value: "341302"
        }, {
            label: "砀山县",
            value: "341321"
        }, {
            label: "萧县",
            value: "341322"
        }, {
            label: "灵璧县",
            value: "341323"
        }, {
            label: "泗县",
            value: "341324"
        }, {
            label: "宿州马鞍山现代产业园区",
            value: "341371"
        }, {
            label: "宿州经济技术开发区",
            value: "341372"
        } ], [ {
            label: "金安区",
            value: "341502"
        }, {
            label: "裕安区",
            value: "341503"
        }, {
            label: "叶集区",
            value: "341504"
        }, {
            label: "霍邱县",
            value: "341522"
        }, {
            label: "舒城县",
            value: "341523"
        }, {
            label: "金寨县",
            value: "341524"
        }, {
            label: "霍山县",
            value: "341525"
        } ], [ {
            label: "谯城区",
            value: "341602"
        }, {
            label: "涡阳县",
            value: "341621"
        }, {
            label: "蒙城县",
            value: "341622"
        }, {
            label: "利辛县",
            value: "341623"
        } ], [ {
            label: "贵池区",
            value: "341702"
        }, {
            label: "东至县",
            value: "341721"
        }, {
            label: "石台县",
            value: "341722"
        }, {
            label: "青阳县",
            value: "341723"
        } ], [ {
            label: "宣州区",
            value: "341802"
        }, {
            label: "郎溪县",
            value: "341821"
        }, {
            label: "广德县",
            value: "341822"
        }, {
            label: "泾县",
            value: "341823"
        }, {
            label: "绩溪县",
            value: "341824"
        }, {
            label: "旌德县",
            value: "341825"
        }, {
            label: "宣城市经济开发区",
            value: "341871"
        }, {
            label: "宁国市",
            value: "341881"
        } ] ], [ [ {
            label: "鼓楼区",
            value: "350102"
        }, {
            label: "台江区",
            value: "350103"
        }, {
            label: "仓山区",
            value: "350104"
        }, {
            label: "马尾区",
            value: "350105"
        }, {
            label: "晋安区",
            value: "350111"
        }, {
            label: "闽侯县",
            value: "350121"
        }, {
            label: "连江县",
            value: "350122"
        }, {
            label: "罗源县",
            value: "350123"
        }, {
            label: "闽清县",
            value: "350124"
        }, {
            label: "永泰县",
            value: "350125"
        }, {
            label: "平潭县",
            value: "350128"
        }, {
            label: "福清市",
            value: "350181"
        }, {
            label: "长乐市",
            value: "350182"
        } ], [ {
            label: "思明区",
            value: "350203"
        }, {
            label: "海沧区",
            value: "350205"
        }, {
            label: "湖里区",
            value: "350206"
        }, {
            label: "集美区",
            value: "350211"
        }, {
            label: "同安区",
            value: "350212"
        }, {
            label: "翔安区",
            value: "350213"
        } ], [ {
            label: "城厢区",
            value: "350302"
        }, {
            label: "涵江区",
            value: "350303"
        }, {
            label: "荔城区",
            value: "350304"
        }, {
            label: "秀屿区",
            value: "350305"
        }, {
            label: "仙游县",
            value: "350322"
        } ], [ {
            label: "梅列区",
            value: "350402"
        }, {
            label: "三元区",
            value: "350403"
        }, {
            label: "明溪县",
            value: "350421"
        }, {
            label: "清流县",
            value: "350423"
        }, {
            label: "宁化县",
            value: "350424"
        }, {
            label: "大田县",
            value: "350425"
        }, {
            label: "尤溪县",
            value: "350426"
        }, {
            label: "沙县",
            value: "350427"
        }, {
            label: "将乐县",
            value: "350428"
        }, {
            label: "泰宁县",
            value: "350429"
        }, {
            label: "建宁县",
            value: "350430"
        }, {
            label: "永安市",
            value: "350481"
        } ], [ {
            label: "鲤城区",
            value: "350502"
        }, {
            label: "丰泽区",
            value: "350503"
        }, {
            label: "洛江区",
            value: "350504"
        }, {
            label: "泉港区",
            value: "350505"
        }, {
            label: "惠安县",
            value: "350521"
        }, {
            label: "安溪县",
            value: "350524"
        }, {
            label: "永春县",
            value: "350525"
        }, {
            label: "德化县",
            value: "350526"
        }, {
            label: "金门县",
            value: "350527"
        }, {
            label: "石狮市",
            value: "350581"
        }, {
            label: "晋江市",
            value: "350582"
        }, {
            label: "南安市",
            value: "350583"
        } ], [ {
            label: "芗城区",
            value: "350602"
        }, {
            label: "龙文区",
            value: "350603"
        }, {
            label: "云霄县",
            value: "350622"
        }, {
            label: "漳浦县",
            value: "350623"
        }, {
            label: "诏安县",
            value: "350624"
        }, {
            label: "长泰县",
            value: "350625"
        }, {
            label: "东山县",
            value: "350626"
        }, {
            label: "南靖县",
            value: "350627"
        }, {
            label: "平和县",
            value: "350628"
        }, {
            label: "华安县",
            value: "350629"
        }, {
            label: "龙海市",
            value: "350681"
        } ], [ {
            label: "延平区",
            value: "350702"
        }, {
            label: "建阳区",
            value: "350703"
        }, {
            label: "顺昌县",
            value: "350721"
        }, {
            label: "浦城县",
            value: "350722"
        }, {
            label: "光泽县",
            value: "350723"
        }, {
            label: "松溪县",
            value: "350724"
        }, {
            label: "政和县",
            value: "350725"
        }, {
            label: "邵武市",
            value: "350781"
        }, {
            label: "武夷山市",
            value: "350782"
        }, {
            label: "建瓯市",
            value: "350783"
        } ], [ {
            label: "新罗区",
            value: "350802"
        }, {
            label: "永定区",
            value: "350803"
        }, {
            label: "长汀县",
            value: "350821"
        }, {
            label: "上杭县",
            value: "350823"
        }, {
            label: "武平县",
            value: "350824"
        }, {
            label: "连城县",
            value: "350825"
        }, {
            label: "漳平市",
            value: "350881"
        } ], [ {
            label: "蕉城区",
            value: "350902"
        }, {
            label: "霞浦县",
            value: "350921"
        }, {
            label: "古田县",
            value: "350922"
        }, {
            label: "屏南县",
            value: "350923"
        }, {
            label: "寿宁县",
            value: "350924"
        }, {
            label: "周宁县",
            value: "350925"
        }, {
            label: "柘荣县",
            value: "350926"
        }, {
            label: "福安市",
            value: "350981"
        }, {
            label: "福鼎市",
            value: "350982"
        } ] ], [ [ {
            label: "东湖区",
            value: "360102"
        }, {
            label: "西湖区",
            value: "360103"
        }, {
            label: "青云谱区",
            value: "360104"
        }, {
            label: "湾里区",
            value: "360105"
        }, {
            label: "青山湖区",
            value: "360111"
        }, {
            label: "新建区",
            value: "360112"
        }, {
            label: "南昌县",
            value: "360121"
        }, {
            label: "安义县",
            value: "360123"
        }, {
            label: "进贤县",
            value: "360124"
        } ], [ {
            label: "昌江区",
            value: "360202"
        }, {
            label: "珠山区",
            value: "360203"
        }, {
            label: "浮梁县",
            value: "360222"
        }, {
            label: "乐平市",
            value: "360281"
        } ], [ {
            label: "安源区",
            value: "360302"
        }, {
            label: "湘东区",
            value: "360313"
        }, {
            label: "莲花县",
            value: "360321"
        }, {
            label: "上栗县",
            value: "360322"
        }, {
            label: "芦溪县",
            value: "360323"
        } ], [ {
            label: "濂溪区",
            value: "360402"
        }, {
            label: "浔阳区",
            value: "360403"
        }, {
            label: "柴桑区",
            value: "360404"
        }, {
            label: "武宁县",
            value: "360423"
        }, {
            label: "修水县",
            value: "360424"
        }, {
            label: "永修县",
            value: "360425"
        }, {
            label: "德安县",
            value: "360426"
        }, {
            label: "都昌县",
            value: "360428"
        }, {
            label: "湖口县",
            value: "360429"
        }, {
            label: "彭泽县",
            value: "360430"
        }, {
            label: "瑞昌市",
            value: "360481"
        }, {
            label: "共青城市",
            value: "360482"
        }, {
            label: "庐山市",
            value: "360483"
        } ], [ {
            label: "渝水区",
            value: "360502"
        }, {
            label: "分宜县",
            value: "360521"
        } ], [ {
            label: "月湖区",
            value: "360602"
        }, {
            label: "余江县",
            value: "360622"
        }, {
            label: "贵溪市",
            value: "360681"
        } ], [ {
            label: "章贡区",
            value: "360702"
        }, {
            label: "南康区",
            value: "360703"
        }, {
            label: "赣县区",
            value: "360704"
        }, {
            label: "信丰县",
            value: "360722"
        }, {
            label: "大余县",
            value: "360723"
        }, {
            label: "上犹县",
            value: "360724"
        }, {
            label: "崇义县",
            value: "360725"
        }, {
            label: "安远县",
            value: "360726"
        }, {
            label: "龙南县",
            value: "360727"
        }, {
            label: "定南县",
            value: "360728"
        }, {
            label: "全南县",
            value: "360729"
        }, {
            label: "宁都县",
            value: "360730"
        }, {
            label: "于都县",
            value: "360731"
        }, {
            label: "兴国县",
            value: "360732"
        }, {
            label: "会昌县",
            value: "360733"
        }, {
            label: "寻乌县",
            value: "360734"
        }, {
            label: "石城县",
            value: "360735"
        }, {
            label: "瑞金市",
            value: "360781"
        } ], [ {
            label: "吉州区",
            value: "360802"
        }, {
            label: "青原区",
            value: "360803"
        }, {
            label: "吉安县",
            value: "360821"
        }, {
            label: "吉水县",
            value: "360822"
        }, {
            label: "峡江县",
            value: "360823"
        }, {
            label: "新干县",
            value: "360824"
        }, {
            label: "永丰县",
            value: "360825"
        }, {
            label: "泰和县",
            value: "360826"
        }, {
            label: "遂川县",
            value: "360827"
        }, {
            label: "万安县",
            value: "360828"
        }, {
            label: "安福县",
            value: "360829"
        }, {
            label: "永新县",
            value: "360830"
        }, {
            label: "井冈山市",
            value: "360881"
        } ], [ {
            label: "袁州区",
            value: "360902"
        }, {
            label: "奉新县",
            value: "360921"
        }, {
            label: "万载县",
            value: "360922"
        }, {
            label: "上高县",
            value: "360923"
        }, {
            label: "宜丰县",
            value: "360924"
        }, {
            label: "靖安县",
            value: "360925"
        }, {
            label: "铜鼓县",
            value: "360926"
        }, {
            label: "丰城市",
            value: "360981"
        }, {
            label: "樟树市",
            value: "360982"
        }, {
            label: "高安市",
            value: "360983"
        } ], [ {
            label: "临川区",
            value: "361002"
        }, {
            label: "东乡区",
            value: "361003"
        }, {
            label: "南城县",
            value: "361021"
        }, {
            label: "黎川县",
            value: "361022"
        }, {
            label: "南丰县",
            value: "361023"
        }, {
            label: "崇仁县",
            value: "361024"
        }, {
            label: "乐安县",
            value: "361025"
        }, {
            label: "宜黄县",
            value: "361026"
        }, {
            label: "金溪县",
            value: "361027"
        }, {
            label: "资溪县",
            value: "361028"
        }, {
            label: "广昌县",
            value: "361030"
        } ], [ {
            label: "信州区",
            value: "361102"
        }, {
            label: "广丰区",
            value: "361103"
        }, {
            label: "上饶县",
            value: "361121"
        }, {
            label: "玉山县",
            value: "361123"
        }, {
            label: "铅山县",
            value: "361124"
        }, {
            label: "横峰县",
            value: "361125"
        }, {
            label: "弋阳县",
            value: "361126"
        }, {
            label: "余干县",
            value: "361127"
        }, {
            label: "鄱阳县",
            value: "361128"
        }, {
            label: "万年县",
            value: "361129"
        }, {
            label: "婺源县",
            value: "361130"
        }, {
            label: "德兴市",
            value: "361181"
        } ] ], [ [ {
            label: "历下区",
            value: "370102"
        }, {
            label: "市中区",
            value: "370103"
        }, {
            label: "槐荫区",
            value: "370104"
        }, {
            label: "天桥区",
            value: "370105"
        }, {
            label: "历城区",
            value: "370112"
        }, {
            label: "长清区",
            value: "370113"
        }, {
            label: "章丘区",
            value: "370114"
        }, {
            label: "平阴县",
            value: "370124"
        }, {
            label: "济阳县",
            value: "370125"
        }, {
            label: "商河县",
            value: "370126"
        }, {
            label: "济南高新技术产业开发区",
            value: "370171"
        } ], [ {
            label: "市南区",
            value: "370202"
        }, {
            label: "市北区",
            value: "370203"
        }, {
            label: "黄岛区",
            value: "370211"
        }, {
            label: "崂山区",
            value: "370212"
        }, {
            label: "李沧区",
            value: "370213"
        }, {
            label: "城阳区",
            value: "370214"
        }, {
            label: "即墨区",
            value: "370215"
        }, {
            label: "青岛高新技术产业开发区",
            value: "370271"
        }, {
            label: "胶州市",
            value: "370281"
        }, {
            label: "平度市",
            value: "370283"
        }, {
            label: "莱西市",
            value: "370285"
        } ], [ {
            label: "淄川区",
            value: "370302"
        }, {
            label: "张店区",
            value: "370303"
        }, {
            label: "博山区",
            value: "370304"
        }, {
            label: "临淄区",
            value: "370305"
        }, {
            label: "周村区",
            value: "370306"
        }, {
            label: "桓台县",
            value: "370321"
        }, {
            label: "高青县",
            value: "370322"
        }, {
            label: "沂源县",
            value: "370323"
        } ], [ {
            label: "市中区",
            value: "370402"
        }, {
            label: "薛城区",
            value: "370403"
        }, {
            label: "峄城区",
            value: "370404"
        }, {
            label: "台儿庄区",
            value: "370405"
        }, {
            label: "山亭区",
            value: "370406"
        }, {
            label: "滕州市",
            value: "370481"
        } ], [ {
            label: "东营区",
            value: "370502"
        }, {
            label: "河口区",
            value: "370503"
        }, {
            label: "垦利区",
            value: "370505"
        }, {
            label: "利津县",
            value: "370522"
        }, {
            label: "广饶县",
            value: "370523"
        }, {
            label: "东营经济技术开发区",
            value: "370571"
        }, {
            label: "东营港经济开发区",
            value: "370572"
        } ], [ {
            label: "芝罘区",
            value: "370602"
        }, {
            label: "福山区",
            value: "370611"
        }, {
            label: "牟平区",
            value: "370612"
        }, {
            label: "莱山区",
            value: "370613"
        }, {
            label: "长岛县",
            value: "370634"
        }, {
            label: "烟台高新技术产业开发区",
            value: "370671"
        }, {
            label: "烟台经济技术开发区",
            value: "370672"
        }, {
            label: "龙口市",
            value: "370681"
        }, {
            label: "莱阳市",
            value: "370682"
        }, {
            label: "莱州市",
            value: "370683"
        }, {
            label: "蓬莱市",
            value: "370684"
        }, {
            label: "招远市",
            value: "370685"
        }, {
            label: "栖霞市",
            value: "370686"
        }, {
            label: "海阳市",
            value: "370687"
        } ], [ {
            label: "潍城区",
            value: "370702"
        }, {
            label: "寒亭区",
            value: "370703"
        }, {
            label: "坊子区",
            value: "370704"
        }, {
            label: "奎文区",
            value: "370705"
        }, {
            label: "临朐县",
            value: "370724"
        }, {
            label: "昌乐县",
            value: "370725"
        }, {
            label: "潍坊滨海经济技术开发区",
            value: "370772"
        }, {
            label: "青州市",
            value: "370781"
        }, {
            label: "诸城市",
            value: "370782"
        }, {
            label: "寿光市",
            value: "370783"
        }, {
            label: "安丘市",
            value: "370784"
        }, {
            label: "高密市",
            value: "370785"
        }, {
            label: "昌邑市",
            value: "370786"
        } ], [ {
            label: "任城区",
            value: "370811"
        }, {
            label: "兖州区",
            value: "370812"
        }, {
            label: "微山县",
            value: "370826"
        }, {
            label: "鱼台县",
            value: "370827"
        }, {
            label: "金乡县",
            value: "370828"
        }, {
            label: "嘉祥县",
            value: "370829"
        }, {
            label: "汶上县",
            value: "370830"
        }, {
            label: "泗水县",
            value: "370831"
        }, {
            label: "梁山县",
            value: "370832"
        }, {
            label: "济宁高新技术产业开发区",
            value: "370871"
        }, {
            label: "曲阜市",
            value: "370881"
        }, {
            label: "邹城市",
            value: "370883"
        } ], [ {
            label: "泰山区",
            value: "370902"
        }, {
            label: "岱岳区",
            value: "370911"
        }, {
            label: "宁阳县",
            value: "370921"
        }, {
            label: "东平县",
            value: "370923"
        }, {
            label: "新泰市",
            value: "370982"
        }, {
            label: "肥城市",
            value: "370983"
        } ], [ {
            label: "环翠区",
            value: "371002"
        }, {
            label: "文登区",
            value: "371003"
        }, {
            label: "威海火炬高技术产业开发区",
            value: "371071"
        }, {
            label: "威海经济技术开发区",
            value: "371072"
        }, {
            label: "威海临港经济技术开发区",
            value: "371073"
        }, {
            label: "荣成市",
            value: "371082"
        }, {
            label: "乳山市",
            value: "371083"
        } ], [ {
            label: "东港区",
            value: "371102"
        }, {
            label: "岚山区",
            value: "371103"
        }, {
            label: "五莲县",
            value: "371121"
        }, {
            label: "莒县",
            value: "371122"
        }, {
            label: "日照经济技术开发区",
            value: "371171"
        }, {
            label: "日照国际海洋城",
            value: "371172"
        } ], [ {
            label: "莱城区",
            value: "371202"
        }, {
            label: "钢城区",
            value: "371203"
        } ], [ {
            label: "兰山区",
            value: "371302"
        }, {
            label: "罗庄区",
            value: "371311"
        }, {
            label: "河东区",
            value: "371312"
        }, {
            label: "沂南县",
            value: "371321"
        }, {
            label: "郯城县",
            value: "371322"
        }, {
            label: "沂水县",
            value: "371323"
        }, {
            label: "兰陵县",
            value: "371324"
        }, {
            label: "费县",
            value: "371325"
        }, {
            label: "平邑县",
            value: "371326"
        }, {
            label: "莒南县",
            value: "371327"
        }, {
            label: "蒙阴县",
            value: "371328"
        }, {
            label: "临沭县",
            value: "371329"
        }, {
            label: "临沂高新技术产业开发区",
            value: "371371"
        }, {
            label: "临沂经济技术开发区",
            value: "371372"
        }, {
            label: "临沂临港经济开发区",
            value: "371373"
        } ], [ {
            label: "德城区",
            value: "371402"
        }, {
            label: "陵城区",
            value: "371403"
        }, {
            label: "宁津县",
            value: "371422"
        }, {
            label: "庆云县",
            value: "371423"
        }, {
            label: "临邑县",
            value: "371424"
        }, {
            label: "齐河县",
            value: "371425"
        }, {
            label: "平原县",
            value: "371426"
        }, {
            label: "夏津县",
            value: "371427"
        }, {
            label: "武城县",
            value: "371428"
        }, {
            label: "德州经济技术开发区",
            value: "371471"
        }, {
            label: "德州运河经济开发区",
            value: "371472"
        }, {
            label: "乐陵市",
            value: "371481"
        }, {
            label: "禹城市",
            value: "371482"
        } ], [ {
            label: "东昌府区",
            value: "371502"
        }, {
            label: "阳谷县",
            value: "371521"
        }, {
            label: "莘县",
            value: "371522"
        }, {
            label: "茌平县",
            value: "371523"
        }, {
            label: "东阿县",
            value: "371524"
        }, {
            label: "冠县",
            value: "371525"
        }, {
            label: "高唐县",
            value: "371526"
        }, {
            label: "临清市",
            value: "371581"
        } ], [ {
            label: "滨城区",
            value: "371602"
        }, {
            label: "沾化区",
            value: "371603"
        }, {
            label: "惠民县",
            value: "371621"
        }, {
            label: "阳信县",
            value: "371622"
        }, {
            label: "无棣县",
            value: "371623"
        }, {
            label: "博兴县",
            value: "371625"
        }, {
            label: "邹平县",
            value: "371626"
        } ], [ {
            label: "牡丹区",
            value: "371702"
        }, {
            label: "定陶区",
            value: "371703"
        }, {
            label: "曹县",
            value: "371721"
        }, {
            label: "单县",
            value: "371722"
        }, {
            label: "成武县",
            value: "371723"
        }, {
            label: "巨野县",
            value: "371724"
        }, {
            label: "郓城县",
            value: "371725"
        }, {
            label: "鄄城县",
            value: "371726"
        }, {
            label: "东明县",
            value: "371728"
        }, {
            label: "菏泽经济技术开发区",
            value: "371771"
        }, {
            label: "菏泽高新技术开发区",
            value: "371772"
        } ] ], [ [ {
            label: "中原区",
            value: "410102"
        }, {
            label: "二七区",
            value: "410103"
        }, {
            label: "管城回族区",
            value: "410104"
        }, {
            label: "金水区",
            value: "410105"
        }, {
            label: "上街区",
            value: "410106"
        }, {
            label: "惠济区",
            value: "410108"
        }, {
            label: "中牟县",
            value: "410122"
        }, {
            label: "郑州经济技术开发区",
            value: "410171"
        }, {
            label: "郑州高新技术产业开发区",
            value: "410172"
        }, {
            label: "郑州航空港经济综合实验区",
            value: "410173"
        }, {
            label: "巩义市",
            value: "410181"
        }, {
            label: "荥阳市",
            value: "410182"
        }, {
            label: "新密市",
            value: "410183"
        }, {
            label: "新郑市",
            value: "410184"
        }, {
            label: "登封市",
            value: "410185"
        } ], [ {
            label: "龙亭区",
            value: "410202"
        }, {
            label: "顺河回族区",
            value: "410203"
        }, {
            label: "鼓楼区",
            value: "410204"
        }, {
            label: "禹王台区",
            value: "410205"
        }, {
            label: "祥符区",
            value: "410212"
        }, {
            label: "杞县",
            value: "410221"
        }, {
            label: "通许县",
            value: "410222"
        }, {
            label: "尉氏县",
            value: "410223"
        }, {
            label: "兰考县",
            value: "410225"
        } ], [ {
            label: "老城区",
            value: "410302"
        }, {
            label: "西工区",
            value: "410303"
        }, {
            label: "瀍河回族区",
            value: "410304"
        }, {
            label: "涧西区",
            value: "410305"
        }, {
            label: "吉利区",
            value: "410306"
        }, {
            label: "洛龙区",
            value: "410311"
        }, {
            label: "孟津县",
            value: "410322"
        }, {
            label: "新安县",
            value: "410323"
        }, {
            label: "栾川县",
            value: "410324"
        }, {
            label: "嵩县",
            value: "410325"
        }, {
            label: "汝阳县",
            value: "410326"
        }, {
            label: "宜阳县",
            value: "410327"
        }, {
            label: "洛宁县",
            value: "410328"
        }, {
            label: "伊川县",
            value: "410329"
        }, {
            label: "洛阳高新技术产业开发区",
            value: "410371"
        }, {
            label: "偃师市",
            value: "410381"
        } ], [ {
            label: "新华区",
            value: "410402"
        }, {
            label: "卫东区",
            value: "410403"
        }, {
            label: "石龙区",
            value: "410404"
        }, {
            label: "湛河区",
            value: "410411"
        }, {
            label: "宝丰县",
            value: "410421"
        }, {
            label: "叶县",
            value: "410422"
        }, {
            label: "鲁山县",
            value: "410423"
        }, {
            label: "郏县",
            value: "410425"
        }, {
            label: "平顶山高新技术产业开发区",
            value: "410471"
        }, {
            label: "平顶山市新城区",
            value: "410472"
        }, {
            label: "舞钢市",
            value: "410481"
        }, {
            label: "汝州市",
            value: "410482"
        } ], [ {
            label: "文峰区",
            value: "410502"
        }, {
            label: "北关区",
            value: "410503"
        }, {
            label: "殷都区",
            value: "410505"
        }, {
            label: "龙安区",
            value: "410506"
        }, {
            label: "安阳县",
            value: "410522"
        }, {
            label: "汤阴县",
            value: "410523"
        }, {
            label: "滑县",
            value: "410526"
        }, {
            label: "内黄县",
            value: "410527"
        }, {
            label: "安阳高新技术产业开发区",
            value: "410571"
        }, {
            label: "林州市",
            value: "410581"
        } ], [ {
            label: "鹤山区",
            value: "410602"
        }, {
            label: "山城区",
            value: "410603"
        }, {
            label: "淇滨区",
            value: "410611"
        }, {
            label: "浚县",
            value: "410621"
        }, {
            label: "淇县",
            value: "410622"
        }, {
            label: "鹤壁经济技术开发区",
            value: "410671"
        } ], [ {
            label: "红旗区",
            value: "410702"
        }, {
            label: "卫滨区",
            value: "410703"
        }, {
            label: "凤泉区",
            value: "410704"
        }, {
            label: "牧野区",
            value: "410711"
        }, {
            label: "新乡县",
            value: "410721"
        }, {
            label: "获嘉县",
            value: "410724"
        }, {
            label: "原阳县",
            value: "410725"
        }, {
            label: "延津县",
            value: "410726"
        }, {
            label: "封丘县",
            value: "410727"
        }, {
            label: "长垣县",
            value: "410728"
        }, {
            label: "新乡高新技术产业开发区",
            value: "410771"
        }, {
            label: "新乡经济技术开发区",
            value: "410772"
        }, {
            label: "新乡市平原城乡一体化示范区",
            value: "410773"
        }, {
            label: "卫辉市",
            value: "410781"
        }, {
            label: "辉县市",
            value: "410782"
        } ], [ {
            label: "解放区",
            value: "410802"
        }, {
            label: "中站区",
            value: "410803"
        }, {
            label: "马村区",
            value: "410804"
        }, {
            label: "山阳区",
            value: "410811"
        }, {
            label: "修武县",
            value: "410821"
        }, {
            label: "博爱县",
            value: "410822"
        }, {
            label: "武陟县",
            value: "410823"
        }, {
            label: "温县",
            value: "410825"
        }, {
            label: "焦作城乡一体化示范区",
            value: "410871"
        }, {
            label: "沁阳市",
            value: "410882"
        }, {
            label: "孟州市",
            value: "410883"
        } ], [ {
            label: "华龙区",
            value: "410902"
        }, {
            label: "清丰县",
            value: "410922"
        }, {
            label: "南乐县",
            value: "410923"
        }, {
            label: "范县",
            value: "410926"
        }, {
            label: "台前县",
            value: "410927"
        }, {
            label: "濮阳县",
            value: "410928"
        }, {
            label: "河南濮阳工业园区",
            value: "410971"
        }, {
            label: "濮阳经济技术开发区",
            value: "410972"
        } ], [ {
            label: "魏都区",
            value: "411002"
        }, {
            label: "建安区",
            value: "411003"
        }, {
            label: "鄢陵县",
            value: "411024"
        }, {
            label: "襄城县",
            value: "411025"
        }, {
            label: "许昌经济技术开发区",
            value: "411071"
        }, {
            label: "禹州市",
            value: "411081"
        }, {
            label: "长葛市",
            value: "411082"
        } ], [ {
            label: "源汇区",
            value: "411102"
        }, {
            label: "郾城区",
            value: "411103"
        }, {
            label: "召陵区",
            value: "411104"
        }, {
            label: "舞阳县",
            value: "411121"
        }, {
            label: "临颍县",
            value: "411122"
        }, {
            label: "漯河经济技术开发区",
            value: "411171"
        } ], [ {
            label: "湖滨区",
            value: "411202"
        }, {
            label: "陕州区",
            value: "411203"
        }, {
            label: "渑池县",
            value: "411221"
        }, {
            label: "卢氏县",
            value: "411224"
        }, {
            label: "河南三门峡经济开发区",
            value: "411271"
        }, {
            label: "义马市",
            value: "411281"
        }, {
            label: "灵宝市",
            value: "411282"
        } ], [ {
            label: "宛城区",
            value: "411302"
        }, {
            label: "卧龙区",
            value: "411303"
        }, {
            label: "南召县",
            value: "411321"
        }, {
            label: "方城县",
            value: "411322"
        }, {
            label: "西峡县",
            value: "411323"
        }, {
            label: "镇平县",
            value: "411324"
        }, {
            label: "内乡县",
            value: "411325"
        }, {
            label: "淅川县",
            value: "411326"
        }, {
            label: "社旗县",
            value: "411327"
        }, {
            label: "唐河县",
            value: "411328"
        }, {
            label: "新野县",
            value: "411329"
        }, {
            label: "桐柏县",
            value: "411330"
        }, {
            label: "南阳高新技术产业开发区",
            value: "411371"
        }, {
            label: "南阳市城乡一体化示范区",
            value: "411372"
        }, {
            label: "邓州市",
            value: "411381"
        } ], [ {
            label: "梁园区",
            value: "411402"
        }, {
            label: "睢阳区",
            value: "411403"
        }, {
            label: "民权县",
            value: "411421"
        }, {
            label: "睢县",
            value: "411422"
        }, {
            label: "宁陵县",
            value: "411423"
        }, {
            label: "柘城县",
            value: "411424"
        }, {
            label: "虞城县",
            value: "411425"
        }, {
            label: "夏邑县",
            value: "411426"
        }, {
            label: "豫东综合物流产业聚集区",
            value: "411471"
        }, {
            label: "河南商丘经济开发区",
            value: "411472"
        }, {
            label: "永城市",
            value: "411481"
        } ], [ {
            label: "浉河区",
            value: "411502"
        }, {
            label: "平桥区",
            value: "411503"
        }, {
            label: "罗山县",
            value: "411521"
        }, {
            label: "光山县",
            value: "411522"
        }, {
            label: "新县",
            value: "411523"
        }, {
            label: "商城县",
            value: "411524"
        }, {
            label: "固始县",
            value: "411525"
        }, {
            label: "潢川县",
            value: "411526"
        }, {
            label: "淮滨县",
            value: "411527"
        }, {
            label: "息县",
            value: "411528"
        }, {
            label: "信阳高新技术产业开发区",
            value: "411571"
        } ], [ {
            label: "川汇区",
            value: "411602"
        }, {
            label: "扶沟县",
            value: "411621"
        }, {
            label: "西华县",
            value: "411622"
        }, {
            label: "商水县",
            value: "411623"
        }, {
            label: "沈丘县",
            value: "411624"
        }, {
            label: "郸城县",
            value: "411625"
        }, {
            label: "淮阳县",
            value: "411626"
        }, {
            label: "太康县",
            value: "411627"
        }, {
            label: "鹿邑县",
            value: "411628"
        }, {
            label: "河南周口经济开发区",
            value: "411671"
        }, {
            label: "项城市",
            value: "411681"
        } ], [ {
            label: "驿城区",
            value: "411702"
        }, {
            label: "西平县",
            value: "411721"
        }, {
            label: "上蔡县",
            value: "411722"
        }, {
            label: "平舆县",
            value: "411723"
        }, {
            label: "正阳县",
            value: "411724"
        }, {
            label: "确山县",
            value: "411725"
        }, {
            label: "泌阳县",
            value: "411726"
        }, {
            label: "汝南县",
            value: "411727"
        }, {
            label: "遂平县",
            value: "411728"
        }, {
            label: "新蔡县",
            value: "411729"
        }, {
            label: "河南驻马店经济开发区",
            value: "411771"
        } ], [ {
            label: "济源市",
            value: "419001"
        } ] ], [ [ {
            label: "江岸区",
            value: "420102"
        }, {
            label: "江汉区",
            value: "420103"
        }, {
            label: "硚口区",
            value: "420104"
        }, {
            label: "汉阳区",
            value: "420105"
        }, {
            label: "武昌区",
            value: "420106"
        }, {
            label: "青山区",
            value: "420107"
        }, {
            label: "洪山区",
            value: "420111"
        }, {
            label: "东西湖区",
            value: "420112"
        }, {
            label: "汉南区",
            value: "420113"
        }, {
            label: "蔡甸区",
            value: "420114"
        }, {
            label: "江夏区",
            value: "420115"
        }, {
            label: "黄陂区",
            value: "420116"
        }, {
            label: "新洲区",
            value: "420117"
        } ], [ {
            label: "黄石港区",
            value: "420202"
        }, {
            label: "西塞山区",
            value: "420203"
        }, {
            label: "下陆区",
            value: "420204"
        }, {
            label: "铁山区",
            value: "420205"
        }, {
            label: "阳新县",
            value: "420222"
        }, {
            label: "大冶市",
            value: "420281"
        } ], [ {
            label: "茅箭区",
            value: "420302"
        }, {
            label: "张湾区",
            value: "420303"
        }, {
            label: "郧阳区",
            value: "420304"
        }, {
            label: "郧西县",
            value: "420322"
        }, {
            label: "竹山县",
            value: "420323"
        }, {
            label: "竹溪县",
            value: "420324"
        }, {
            label: "房县",
            value: "420325"
        }, {
            label: "丹江口市",
            value: "420381"
        } ], [ {
            label: "西陵区",
            value: "420502"
        }, {
            label: "伍家岗区",
            value: "420503"
        }, {
            label: "点军区",
            value: "420504"
        }, {
            label: "猇亭区",
            value: "420505"
        }, {
            label: "夷陵区",
            value: "420506"
        }, {
            label: "远安县",
            value: "420525"
        }, {
            label: "兴山县",
            value: "420526"
        }, {
            label: "秭归县",
            value: "420527"
        }, {
            label: "长阳土家族自治县",
            value: "420528"
        }, {
            label: "五峰土家族自治县",
            value: "420529"
        }, {
            label: "宜都市",
            value: "420581"
        }, {
            label: "当阳市",
            value: "420582"
        }, {
            label: "枝江市",
            value: "420583"
        } ], [ {
            label: "襄城区",
            value: "420602"
        }, {
            label: "樊城区",
            value: "420606"
        }, {
            label: "襄州区",
            value: "420607"
        }, {
            label: "南漳县",
            value: "420624"
        }, {
            label: "谷城县",
            value: "420625"
        }, {
            label: "保康县",
            value: "420626"
        }, {
            label: "老河口市",
            value: "420682"
        }, {
            label: "枣阳市",
            value: "420683"
        }, {
            label: "宜城市",
            value: "420684"
        } ], [ {
            label: "梁子湖区",
            value: "420702"
        }, {
            label: "华容区",
            value: "420703"
        }, {
            label: "鄂城区",
            value: "420704"
        } ], [ {
            label: "东宝区",
            value: "420802"
        }, {
            label: "掇刀区",
            value: "420804"
        }, {
            label: "京山县",
            value: "420821"
        }, {
            label: "沙洋县",
            value: "420822"
        }, {
            label: "钟祥市",
            value: "420881"
        } ], [ {
            label: "孝南区",
            value: "420902"
        }, {
            label: "孝昌县",
            value: "420921"
        }, {
            label: "大悟县",
            value: "420922"
        }, {
            label: "云梦县",
            value: "420923"
        }, {
            label: "应城市",
            value: "420981"
        }, {
            label: "安陆市",
            value: "420982"
        }, {
            label: "汉川市",
            value: "420984"
        } ], [ {
            label: "沙市区",
            value: "421002"
        }, {
            label: "荆州区",
            value: "421003"
        }, {
            label: "公安县",
            value: "421022"
        }, {
            label: "监利县",
            value: "421023"
        }, {
            label: "江陵县",
            value: "421024"
        }, {
            label: "荆州经济技术开发区",
            value: "421071"
        }, {
            label: "石首市",
            value: "421081"
        }, {
            label: "洪湖市",
            value: "421083"
        }, {
            label: "松滋市",
            value: "421087"
        } ], [ {
            label: "黄州区",
            value: "421102"
        }, {
            label: "团风县",
            value: "421121"
        }, {
            label: "红安县",
            value: "421122"
        }, {
            label: "罗田县",
            value: "421123"
        }, {
            label: "英山县",
            value: "421124"
        }, {
            label: "浠水县",
            value: "421125"
        }, {
            label: "蕲春县",
            value: "421126"
        }, {
            label: "黄梅县",
            value: "421127"
        }, {
            label: "龙感湖管理区",
            value: "421171"
        }, {
            label: "麻城市",
            value: "421181"
        }, {
            label: "武穴市",
            value: "421182"
        } ], [ {
            label: "咸安区",
            value: "421202"
        }, {
            label: "嘉鱼县",
            value: "421221"
        }, {
            label: "通城县",
            value: "421222"
        }, {
            label: "崇阳县",
            value: "421223"
        }, {
            label: "通山县",
            value: "421224"
        }, {
            label: "赤壁市",
            value: "421281"
        } ], [ {
            label: "曾都区",
            value: "421303"
        }, {
            label: "随县",
            value: "421321"
        }, {
            label: "广水市",
            value: "421381"
        } ], [ {
            label: "恩施市",
            value: "422801"
        }, {
            label: "利川市",
            value: "422802"
        }, {
            label: "建始县",
            value: "422822"
        }, {
            label: "巴东县",
            value: "422823"
        }, {
            label: "宣恩县",
            value: "422825"
        }, {
            label: "咸丰县",
            value: "422826"
        }, {
            label: "来凤县",
            value: "422827"
        }, {
            label: "鹤峰县",
            value: "422828"
        } ], [ {
            label: "仙桃市",
            value: "429004"
        }, {
            label: "潜江市",
            value: "429005"
        }, {
            label: "天门市",
            value: "429006"
        }, {
            label: "神农架林区",
            value: "429021"
        } ] ], [ [ {
            label: "芙蓉区",
            value: "430102"
        }, {
            label: "天心区",
            value: "430103"
        }, {
            label: "岳麓区",
            value: "430104"
        }, {
            label: "开福区",
            value: "430105"
        }, {
            label: "雨花区",
            value: "430111"
        }, {
            label: "望城区",
            value: "430112"
        }, {
            label: "长沙县",
            value: "430121"
        }, {
            label: "浏阳市",
            value: "430181"
        }, {
            label: "宁乡市",
            value: "430182"
        } ], [ {
            label: "荷塘区",
            value: "430202"
        }, {
            label: "芦淞区",
            value: "430203"
        }, {
            label: "石峰区",
            value: "430204"
        }, {
            label: "天元区",
            value: "430211"
        }, {
            label: "株洲县",
            value: "430221"
        }, {
            label: "攸县",
            value: "430223"
        }, {
            label: "茶陵县",
            value: "430224"
        }, {
            label: "炎陵县",
            value: "430225"
        }, {
            label: "云龙示范区",
            value: "430271"
        }, {
            label: "醴陵市",
            value: "430281"
        } ], [ {
            label: "雨湖区",
            value: "430302"
        }, {
            label: "岳塘区",
            value: "430304"
        }, {
            label: "湘潭县",
            value: "430321"
        }, {
            label: "湖南湘潭高新技术产业园区",
            value: "430371"
        }, {
            label: "湘潭昭山示范区",
            value: "430372"
        }, {
            label: "湘潭九华示范区",
            value: "430373"
        }, {
            label: "湘乡市",
            value: "430381"
        }, {
            label: "韶山市",
            value: "430382"
        } ], [ {
            label: "珠晖区",
            value: "430405"
        }, {
            label: "雁峰区",
            value: "430406"
        }, {
            label: "石鼓区",
            value: "430407"
        }, {
            label: "蒸湘区",
            value: "430408"
        }, {
            label: "南岳区",
            value: "430412"
        }, {
            label: "衡阳县",
            value: "430421"
        }, {
            label: "衡南县",
            value: "430422"
        }, {
            label: "衡山县",
            value: "430423"
        }, {
            label: "衡东县",
            value: "430424"
        }, {
            label: "祁东县",
            value: "430426"
        }, {
            label: "衡阳综合保税区",
            value: "430471"
        }, {
            label: "湖南衡阳高新技术产业园区",
            value: "430472"
        }, {
            label: "湖南衡阳松木经济开发区",
            value: "430473"
        }, {
            label: "耒阳市",
            value: "430481"
        }, {
            label: "常宁市",
            value: "430482"
        } ], [ {
            label: "双清区",
            value: "430502"
        }, {
            label: "大祥区",
            value: "430503"
        }, {
            label: "北塔区",
            value: "430511"
        }, {
            label: "邵东县",
            value: "430521"
        }, {
            label: "新邵县",
            value: "430522"
        }, {
            label: "邵阳县",
            value: "430523"
        }, {
            label: "隆回县",
            value: "430524"
        }, {
            label: "洞口县",
            value: "430525"
        }, {
            label: "绥宁县",
            value: "430527"
        }, {
            label: "新宁县",
            value: "430528"
        }, {
            label: "城步苗族自治县",
            value: "430529"
        }, {
            label: "武冈市",
            value: "430581"
        } ], [ {
            label: "岳阳楼区",
            value: "430602"
        }, {
            label: "云溪区",
            value: "430603"
        }, {
            label: "君山区",
            value: "430611"
        }, {
            label: "岳阳县",
            value: "430621"
        }, {
            label: "华容县",
            value: "430623"
        }, {
            label: "湘阴县",
            value: "430624"
        }, {
            label: "平江县",
            value: "430626"
        }, {
            label: "岳阳市屈原管理区",
            value: "430671"
        }, {
            label: "汨罗市",
            value: "430681"
        }, {
            label: "临湘市",
            value: "430682"
        } ], [ {
            label: "武陵区",
            value: "430702"
        }, {
            label: "鼎城区",
            value: "430703"
        }, {
            label: "安乡县",
            value: "430721"
        }, {
            label: "汉寿县",
            value: "430722"
        }, {
            label: "澧县",
            value: "430723"
        }, {
            label: "临澧县",
            value: "430724"
        }, {
            label: "桃源县",
            value: "430725"
        }, {
            label: "石门县",
            value: "430726"
        }, {
            label: "常德市西洞庭管理区",
            value: "430771"
        }, {
            label: "津市市",
            value: "430781"
        } ], [ {
            label: "永定区",
            value: "430802"
        }, {
            label: "武陵源区",
            value: "430811"
        }, {
            label: "慈利县",
            value: "430821"
        }, {
            label: "桑植县",
            value: "430822"
        } ], [ {
            label: "资阳区",
            value: "430902"
        }, {
            label: "赫山区",
            value: "430903"
        }, {
            label: "南县",
            value: "430921"
        }, {
            label: "桃江县",
            value: "430922"
        }, {
            label: "安化县",
            value: "430923"
        }, {
            label: "益阳市大通湖管理区",
            value: "430971"
        }, {
            label: "湖南益阳高新技术产业园区",
            value: "430972"
        }, {
            label: "沅江市",
            value: "430981"
        } ], [ {
            label: "北湖区",
            value: "431002"
        }, {
            label: "苏仙区",
            value: "431003"
        }, {
            label: "桂阳县",
            value: "431021"
        }, {
            label: "宜章县",
            value: "431022"
        }, {
            label: "永兴县",
            value: "431023"
        }, {
            label: "嘉禾县",
            value: "431024"
        }, {
            label: "临武县",
            value: "431025"
        }, {
            label: "汝城县",
            value: "431026"
        }, {
            label: "桂东县",
            value: "431027"
        }, {
            label: "安仁县",
            value: "431028"
        }, {
            label: "资兴市",
            value: "431081"
        } ], [ {
            label: "零陵区",
            value: "431102"
        }, {
            label: "冷水滩区",
            value: "431103"
        }, {
            label: "祁阳县",
            value: "431121"
        }, {
            label: "东安县",
            value: "431122"
        }, {
            label: "双牌县",
            value: "431123"
        }, {
            label: "道县",
            value: "431124"
        }, {
            label: "江永县",
            value: "431125"
        }, {
            label: "宁远县",
            value: "431126"
        }, {
            label: "蓝山县",
            value: "431127"
        }, {
            label: "新田县",
            value: "431128"
        }, {
            label: "江华瑶族自治县",
            value: "431129"
        }, {
            label: "永州经济技术开发区",
            value: "431171"
        }, {
            label: "永州市金洞管理区",
            value: "431172"
        }, {
            label: "永州市回龙圩管理区",
            value: "431173"
        } ], [ {
            label: "鹤城区",
            value: "431202"
        }, {
            label: "中方县",
            value: "431221"
        }, {
            label: "沅陵县",
            value: "431222"
        }, {
            label: "辰溪县",
            value: "431223"
        }, {
            label: "溆浦县",
            value: "431224"
        }, {
            label: "会同县",
            value: "431225"
        }, {
            label: "麻阳苗族自治县",
            value: "431226"
        }, {
            label: "新晃侗族自治县",
            value: "431227"
        }, {
            label: "芷江侗族自治县",
            value: "431228"
        }, {
            label: "靖州苗族侗族自治县",
            value: "431229"
        }, {
            label: "通道侗族自治县",
            value: "431230"
        }, {
            label: "怀化市洪江管理区",
            value: "431271"
        }, {
            label: "洪江市",
            value: "431281"
        } ], [ {
            label: "娄星区",
            value: "431302"
        }, {
            label: "双峰县",
            value: "431321"
        }, {
            label: "新化县",
            value: "431322"
        }, {
            label: "冷水江市",
            value: "431381"
        }, {
            label: "涟源市",
            value: "431382"
        } ], [ {
            label: "吉首市",
            value: "433101"
        }, {
            label: "泸溪县",
            value: "433122"
        }, {
            label: "凤凰县",
            value: "433123"
        }, {
            label: "花垣县",
            value: "433124"
        }, {
            label: "保靖县",
            value: "433125"
        }, {
            label: "古丈县",
            value: "433126"
        }, {
            label: "永顺县",
            value: "433127"
        }, {
            label: "龙山县",
            value: "433130"
        }, {
            label: "湖南吉首经济开发区",
            value: "433172"
        }, {
            label: "湖南永顺经济开发区",
            value: "433173"
        } ] ], [ [ {
            label: "荔湾区",
            value: "440103"
        }, {
            label: "越秀区",
            value: "440104"
        }, {
            label: "海珠区",
            value: "440105"
        }, {
            label: "天河区",
            value: "440106"
        }, {
            label: "白云区",
            value: "440111"
        }, {
            label: "黄埔区",
            value: "440112"
        }, {
            label: "番禺区",
            value: "440113"
        }, {
            label: "花都区",
            value: "440114"
        }, {
            label: "南沙区",
            value: "440115"
        }, {
            label: "从化区",
            value: "440117"
        }, {
            label: "增城区",
            value: "440118"
        } ], [ {
            label: "武江区",
            value: "440203"
        }, {
            label: "浈江区",
            value: "440204"
        }, {
            label: "曲江区",
            value: "440205"
        }, {
            label: "始兴县",
            value: "440222"
        }, {
            label: "仁化县",
            value: "440224"
        }, {
            label: "翁源县",
            value: "440229"
        }, {
            label: "乳源瑶族自治县",
            value: "440232"
        }, {
            label: "新丰县",
            value: "440233"
        }, {
            label: "乐昌市",
            value: "440281"
        }, {
            label: "南雄市",
            value: "440282"
        } ], [ {
            label: "罗湖区",
            value: "440303"
        }, {
            label: "福田区",
            value: "440304"
        }, {
            label: "南山区",
            value: "440305"
        }, {
            label: "宝安区",
            value: "440306"
        }, {
            label: "龙岗区",
            value: "440307"
        }, {
            label: "盐田区",
            value: "440308"
        }, {
            label: "龙华区",
            value: "440309"
        }, {
            label: "坪山区",
            value: "440310"
        } ], [ {
            label: "香洲区",
            value: "440402"
        }, {
            label: "斗门区",
            value: "440403"
        }, {
            label: "金湾区",
            value: "440404"
        } ], [ {
            label: "龙湖区",
            value: "440507"
        }, {
            label: "金平区",
            value: "440511"
        }, {
            label: "濠江区",
            value: "440512"
        }, {
            label: "潮阳区",
            value: "440513"
        }, {
            label: "潮南区",
            value: "440514"
        }, {
            label: "澄海区",
            value: "440515"
        }, {
            label: "南澳县",
            value: "440523"
        } ], [ {
            label: "禅城区",
            value: "440604"
        }, {
            label: "南海区",
            value: "440605"
        }, {
            label: "顺德区",
            value: "440606"
        }, {
            label: "三水区",
            value: "440607"
        }, {
            label: "高明区",
            value: "440608"
        } ], [ {
            label: "蓬江区",
            value: "440703"
        }, {
            label: "江海区",
            value: "440704"
        }, {
            label: "新会区",
            value: "440705"
        }, {
            label: "台山市",
            value: "440781"
        }, {
            label: "开平市",
            value: "440783"
        }, {
            label: "鹤山市",
            value: "440784"
        }, {
            label: "恩平市",
            value: "440785"
        } ], [ {
            label: "赤坎区",
            value: "440802"
        }, {
            label: "霞山区",
            value: "440803"
        }, {
            label: "坡头区",
            value: "440804"
        }, {
            label: "麻章区",
            value: "440811"
        }, {
            label: "遂溪县",
            value: "440823"
        }, {
            label: "徐闻县",
            value: "440825"
        }, {
            label: "廉江市",
            value: "440881"
        }, {
            label: "雷州市",
            value: "440882"
        }, {
            label: "吴川市",
            value: "440883"
        } ], [ {
            label: "茂南区",
            value: "440902"
        }, {
            label: "电白区",
            value: "440904"
        }, {
            label: "高州市",
            value: "440981"
        }, {
            label: "化州市",
            value: "440982"
        }, {
            label: "信宜市",
            value: "440983"
        } ], [ {
            label: "端州区",
            value: "441202"
        }, {
            label: "鼎湖区",
            value: "441203"
        }, {
            label: "高要区",
            value: "441204"
        }, {
            label: "广宁县",
            value: "441223"
        }, {
            label: "怀集县",
            value: "441224"
        }, {
            label: "封开县",
            value: "441225"
        }, {
            label: "德庆县",
            value: "441226"
        }, {
            label: "四会市",
            value: "441284"
        } ], [ {
            label: "惠城区",
            value: "441302"
        }, {
            label: "惠阳区",
            value: "441303"
        }, {
            label: "博罗县",
            value: "441322"
        }, {
            label: "惠东县",
            value: "441323"
        }, {
            label: "龙门县",
            value: "441324"
        } ], [ {
            label: "梅江区",
            value: "441402"
        }, {
            label: "梅县区",
            value: "441403"
        }, {
            label: "大埔县",
            value: "441422"
        }, {
            label: "丰顺县",
            value: "441423"
        }, {
            label: "五华县",
            value: "441424"
        }, {
            label: "平远县",
            value: "441426"
        }, {
            label: "蕉岭县",
            value: "441427"
        }, {
            label: "兴宁市",
            value: "441481"
        } ], [ {
            label: "城区",
            value: "441502"
        }, {
            label: "海丰县",
            value: "441521"
        }, {
            label: "陆河县",
            value: "441523"
        }, {
            label: "陆丰市",
            value: "441581"
        } ], [ {
            label: "源城区",
            value: "441602"
        }, {
            label: "紫金县",
            value: "441621"
        }, {
            label: "龙川县",
            value: "441622"
        }, {
            label: "连平县",
            value: "441623"
        }, {
            label: "和平县",
            value: "441624"
        }, {
            label: "东源县",
            value: "441625"
        } ], [ {
            label: "江城区",
            value: "441702"
        }, {
            label: "阳东区",
            value: "441704"
        }, {
            label: "阳西县",
            value: "441721"
        }, {
            label: "阳春市",
            value: "441781"
        } ], [ {
            label: "清城区",
            value: "441802"
        }, {
            label: "清新区",
            value: "441803"
        }, {
            label: "佛冈县",
            value: "441821"
        }, {
            label: "阳山县",
            value: "441823"
        }, {
            label: "连山壮族瑶族自治县",
            value: "441825"
        }, {
            label: "连南瑶族自治县",
            value: "441826"
        }, {
            label: "英德市",
            value: "441881"
        }, {
            label: "连州市",
            value: "441882"
        } ], [ {
            label: "东莞市",
            value: "441900"
        } ], [ {
            label: "中山市",
            value: "442000"
        } ], [ {
            label: "湘桥区",
            value: "445102"
        }, {
            label: "潮安区",
            value: "445103"
        }, {
            label: "饶平县",
            value: "445122"
        } ], [ {
            label: "榕城区",
            value: "445202"
        }, {
            label: "揭东区",
            value: "445203"
        }, {
            label: "揭西县",
            value: "445222"
        }, {
            label: "惠来县",
            value: "445224"
        }, {
            label: "普宁市",
            value: "445281"
        } ], [ {
            label: "云城区",
            value: "445302"
        }, {
            label: "云安区",
            value: "445303"
        }, {
            label: "新兴县",
            value: "445321"
        }, {
            label: "郁南县",
            value: "445322"
        }, {
            label: "罗定市",
            value: "445381"
        } ] ], [ [ {
            label: "兴宁区",
            value: "450102"
        }, {
            label: "青秀区",
            value: "450103"
        }, {
            label: "江南区",
            value: "450105"
        }, {
            label: "西乡塘区",
            value: "450107"
        }, {
            label: "良庆区",
            value: "450108"
        }, {
            label: "邕宁区",
            value: "450109"
        }, {
            label: "武鸣区",
            value: "450110"
        }, {
            label: "隆安县",
            value: "450123"
        }, {
            label: "马山县",
            value: "450124"
        }, {
            label: "上林县",
            value: "450125"
        }, {
            label: "宾阳县",
            value: "450126"
        }, {
            label: "横县",
            value: "450127"
        } ], [ {
            label: "城中区",
            value: "450202"
        }, {
            label: "鱼峰区",
            value: "450203"
        }, {
            label: "柳南区",
            value: "450204"
        }, {
            label: "柳北区",
            value: "450205"
        }, {
            label: "柳江区",
            value: "450206"
        }, {
            label: "柳城县",
            value: "450222"
        }, {
            label: "鹿寨县",
            value: "450223"
        }, {
            label: "融安县",
            value: "450224"
        }, {
            label: "融水苗族自治县",
            value: "450225"
        }, {
            label: "三江侗族自治县",
            value: "450226"
        } ], [ {
            label: "秀峰区",
            value: "450302"
        }, {
            label: "叠彩区",
            value: "450303"
        }, {
            label: "象山区",
            value: "450304"
        }, {
            label: "七星区",
            value: "450305"
        }, {
            label: "雁山区",
            value: "450311"
        }, {
            label: "临桂区",
            value: "450312"
        }, {
            label: "阳朔县",
            value: "450321"
        }, {
            label: "灵川县",
            value: "450323"
        }, {
            label: "全州县",
            value: "450324"
        }, {
            label: "兴安县",
            value: "450325"
        }, {
            label: "永福县",
            value: "450326"
        }, {
            label: "灌阳县",
            value: "450327"
        }, {
            label: "龙胜各族自治县",
            value: "450328"
        }, {
            label: "资源县",
            value: "450329"
        }, {
            label: "平乐县",
            value: "450330"
        }, {
            label: "荔浦县",
            value: "450331"
        }, {
            label: "恭城瑶族自治县",
            value: "450332"
        } ], [ {
            label: "万秀区",
            value: "450403"
        }, {
            label: "长洲区",
            value: "450405"
        }, {
            label: "龙圩区",
            value: "450406"
        }, {
            label: "苍梧县",
            value: "450421"
        }, {
            label: "藤县",
            value: "450422"
        }, {
            label: "蒙山县",
            value: "450423"
        }, {
            label: "岑溪市",
            value: "450481"
        } ], [ {
            label: "海城区",
            value: "450502"
        }, {
            label: "银海区",
            value: "450503"
        }, {
            label: "铁山港区",
            value: "450512"
        }, {
            label: "合浦县",
            value: "450521"
        } ], [ {
            label: "港口区",
            value: "450602"
        }, {
            label: "防城区",
            value: "450603"
        }, {
            label: "上思县",
            value: "450621"
        }, {
            label: "东兴市",
            value: "450681"
        } ], [ {
            label: "钦南区",
            value: "450702"
        }, {
            label: "钦北区",
            value: "450703"
        }, {
            label: "灵山县",
            value: "450721"
        }, {
            label: "浦北县",
            value: "450722"
        } ], [ {
            label: "港北区",
            value: "450802"
        }, {
            label: "港南区",
            value: "450803"
        }, {
            label: "覃塘区",
            value: "450804"
        }, {
            label: "平南县",
            value: "450821"
        }, {
            label: "桂平市",
            value: "450881"
        } ], [ {
            label: "玉州区",
            value: "450902"
        }, {
            label: "福绵区",
            value: "450903"
        }, {
            label: "容县",
            value: "450921"
        }, {
            label: "陆川县",
            value: "450922"
        }, {
            label: "博白县",
            value: "450923"
        }, {
            label: "兴业县",
            value: "450924"
        }, {
            label: "北流市",
            value: "450981"
        } ], [ {
            label: "右江区",
            value: "451002"
        }, {
            label: "田阳县",
            value: "451021"
        }, {
            label: "田东县",
            value: "451022"
        }, {
            label: "平果县",
            value: "451023"
        }, {
            label: "德保县",
            value: "451024"
        }, {
            label: "那坡县",
            value: "451026"
        }, {
            label: "凌云县",
            value: "451027"
        }, {
            label: "乐业县",
            value: "451028"
        }, {
            label: "田林县",
            value: "451029"
        }, {
            label: "西林县",
            value: "451030"
        }, {
            label: "隆林各族自治县",
            value: "451031"
        }, {
            label: "靖西市",
            value: "451081"
        } ], [ {
            label: "八步区",
            value: "451102"
        }, {
            label: "平桂区",
            value: "451103"
        }, {
            label: "昭平县",
            value: "451121"
        }, {
            label: "钟山县",
            value: "451122"
        }, {
            label: "富川瑶族自治县",
            value: "451123"
        } ], [ {
            label: "金城江区",
            value: "451202"
        }, {
            label: "宜州区",
            value: "451203"
        }, {
            label: "南丹县",
            value: "451221"
        }, {
            label: "天峨县",
            value: "451222"
        }, {
            label: "凤山县",
            value: "451223"
        }, {
            label: "东兰县",
            value: "451224"
        }, {
            label: "罗城仫佬族自治县",
            value: "451225"
        }, {
            label: "环江毛南族自治县",
            value: "451226"
        }, {
            label: "巴马瑶族自治县",
            value: "451227"
        }, {
            label: "都安瑶族自治县",
            value: "451228"
        }, {
            label: "大化瑶族自治县",
            value: "451229"
        } ], [ {
            label: "兴宾区",
            value: "451302"
        }, {
            label: "忻城县",
            value: "451321"
        }, {
            label: "象州县",
            value: "451322"
        }, {
            label: "武宣县",
            value: "451323"
        }, {
            label: "金秀瑶族自治县",
            value: "451324"
        }, {
            label: "合山市",
            value: "451381"
        } ], [ {
            label: "江州区",
            value: "451402"
        }, {
            label: "扶绥县",
            value: "451421"
        }, {
            label: "宁明县",
            value: "451422"
        }, {
            label: "龙州县",
            value: "451423"
        }, {
            label: "大新县",
            value: "451424"
        }, {
            label: "天等县",
            value: "451425"
        }, {
            label: "凭祥市",
            value: "451481"
        } ] ], [ [ {
            label: "秀英区",
            value: "460105"
        }, {
            label: "龙华区",
            value: "460106"
        }, {
            label: "琼山区",
            value: "460107"
        }, {
            label: "美兰区",
            value: "460108"
        } ], [ {
            label: "海棠区",
            value: "460202"
        }, {
            label: "吉阳区",
            value: "460203"
        }, {
            label: "天涯区",
            value: "460204"
        }, {
            label: "崖州区",
            value: "460205"
        } ], [ {
            label: "西沙群岛",
            value: "460321"
        }, {
            label: "南沙群岛",
            value: "460322"
        }, {
            label: "中沙群岛的岛礁及其海域",
            value: "460323"
        } ], [ {
            label: "儋州市",
            value: "460400"
        } ], [ {
            label: "五指山市",
            value: "469001"
        }, {
            label: "琼海市",
            value: "469002"
        }, {
            label: "文昌市",
            value: "469005"
        }, {
            label: "万宁市",
            value: "469006"
        }, {
            label: "东方市",
            value: "469007"
        }, {
            label: "定安县",
            value: "469021"
        }, {
            label: "屯昌县",
            value: "469022"
        }, {
            label: "澄迈县",
            value: "469023"
        }, {
            label: "临高县",
            value: "469024"
        }, {
            label: "白沙黎族自治县",
            value: "469025"
        }, {
            label: "昌江黎族自治县",
            value: "469026"
        }, {
            label: "乐东黎族自治县",
            value: "469027"
        }, {
            label: "陵水黎族自治县",
            value: "469028"
        }, {
            label: "保亭黎族苗族自治县",
            value: "469029"
        }, {
            label: "琼中黎族苗族自治县",
            value: "469030"
        } ] ], [ [ {
            label: "万州区",
            value: "500101"
        }, {
            label: "涪陵区",
            value: "500102"
        }, {
            label: "渝中区",
            value: "500103"
        }, {
            label: "大渡口区",
            value: "500104"
        }, {
            label: "江北区",
            value: "500105"
        }, {
            label: "沙坪坝区",
            value: "500106"
        }, {
            label: "九龙坡区",
            value: "500107"
        }, {
            label: "南岸区",
            value: "500108"
        }, {
            label: "北碚区",
            value: "500109"
        }, {
            label: "綦江区",
            value: "500110"
        }, {
            label: "大足区",
            value: "500111"
        }, {
            label: "渝北区",
            value: "500112"
        }, {
            label: "巴南区",
            value: "500113"
        }, {
            label: "黔江区",
            value: "500114"
        }, {
            label: "长寿区",
            value: "500115"
        }, {
            label: "江津区",
            value: "500116"
        }, {
            label: "合川区",
            value: "500117"
        }, {
            label: "永川区",
            value: "500118"
        }, {
            label: "南川区",
            value: "500119"
        }, {
            label: "璧山区",
            value: "500120"
        }, {
            label: "铜梁区",
            value: "500151"
        }, {
            label: "潼南区",
            value: "500152"
        }, {
            label: "荣昌区",
            value: "500153"
        }, {
            label: "开州区",
            value: "500154"
        }, {
            label: "梁平区",
            value: "500155"
        }, {
            label: "武隆区",
            value: "500156"
        } ], [ {
            label: "城口县",
            value: "500229"
        }, {
            label: "丰都县",
            value: "500230"
        }, {
            label: "垫江县",
            value: "500231"
        }, {
            label: "忠县",
            value: "500233"
        }, {
            label: "云阳县",
            value: "500235"
        }, {
            label: "奉节县",
            value: "500236"
        }, {
            label: "巫山县",
            value: "500237"
        }, {
            label: "巫溪县",
            value: "500238"
        }, {
            label: "石柱土家族自治县",
            value: "500240"
        }, {
            label: "秀山土家族苗族自治县",
            value: "500241"
        }, {
            label: "酉阳土家族苗族自治县",
            value: "500242"
        }, {
            label: "彭水苗族土家族自治县",
            value: "500243"
        } ] ], [ [ {
            label: "锦江区",
            value: "510104"
        }, {
            label: "青羊区",
            value: "510105"
        }, {
            label: "金牛区",
            value: "510106"
        }, {
            label: "武侯区",
            value: "510107"
        }, {
            label: "成华区",
            value: "510108"
        }, {
            label: "龙泉驿区",
            value: "510112"
        }, {
            label: "青白江区",
            value: "510113"
        }, {
            label: "新都区",
            value: "510114"
        }, {
            label: "温江区",
            value: "510115"
        }, {
            label: "双流区",
            value: "510116"
        }, {
            label: "郫都区",
            value: "510117"
        }, {
            label: "金堂县",
            value: "510121"
        }, {
            label: "大邑县",
            value: "510129"
        }, {
            label: "蒲江县",
            value: "510131"
        }, {
            label: "新津县",
            value: "510132"
        }, {
            label: "都江堰市",
            value: "510181"
        }, {
            label: "彭州市",
            value: "510182"
        }, {
            label: "邛崃市",
            value: "510183"
        }, {
            label: "崇州市",
            value: "510184"
        }, {
            label: "简阳市",
            value: "510185"
        } ], [ {
            label: "自流井区",
            value: "510302"
        }, {
            label: "贡井区",
            value: "510303"
        }, {
            label: "大安区",
            value: "510304"
        }, {
            label: "沿滩区",
            value: "510311"
        }, {
            label: "荣县",
            value: "510321"
        }, {
            label: "富顺县",
            value: "510322"
        } ], [ {
            label: "东区",
            value: "510402"
        }, {
            label: "西区",
            value: "510403"
        }, {
            label: "仁和区",
            value: "510411"
        }, {
            label: "米易县",
            value: "510421"
        }, {
            label: "盐边县",
            value: "510422"
        } ], [ {
            label: "江阳区",
            value: "510502"
        }, {
            label: "纳溪区",
            value: "510503"
        }, {
            label: "龙马潭区",
            value: "510504"
        }, {
            label: "泸县",
            value: "510521"
        }, {
            label: "合江县",
            value: "510522"
        }, {
            label: "叙永县",
            value: "510524"
        }, {
            label: "古蔺县",
            value: "510525"
        } ], [ {
            label: "旌阳区",
            value: "510603"
        }, {
            label: "罗江区",
            value: "510604"
        }, {
            label: "中江县",
            value: "510623"
        }, {
            label: "广汉市",
            value: "510681"
        }, {
            label: "什邡市",
            value: "510682"
        }, {
            label: "绵竹市",
            value: "510683"
        } ], [ {
            label: "涪城区",
            value: "510703"
        }, {
            label: "游仙区",
            value: "510704"
        }, {
            label: "安州区",
            value: "510705"
        }, {
            label: "三台县",
            value: "510722"
        }, {
            label: "盐亭县",
            value: "510723"
        }, {
            label: "梓潼县",
            value: "510725"
        }, {
            label: "北川羌族自治县",
            value: "510726"
        }, {
            label: "平武县",
            value: "510727"
        }, {
            label: "江油市",
            value: "510781"
        } ], [ {
            label: "利州区",
            value: "510802"
        }, {
            label: "昭化区",
            value: "510811"
        }, {
            label: "朝天区",
            value: "510812"
        }, {
            label: "旺苍县",
            value: "510821"
        }, {
            label: "青川县",
            value: "510822"
        }, {
            label: "剑阁县",
            value: "510823"
        }, {
            label: "苍溪县",
            value: "510824"
        } ], [ {
            label: "船山区",
            value: "510903"
        }, {
            label: "安居区",
            value: "510904"
        }, {
            label: "蓬溪县",
            value: "510921"
        }, {
            label: "射洪县",
            value: "510922"
        }, {
            label: "大英县",
            value: "510923"
        } ], [ {
            label: "市中区",
            value: "511002"
        }, {
            label: "东兴区",
            value: "511011"
        }, {
            label: "威远县",
            value: "511024"
        }, {
            label: "资中县",
            value: "511025"
        }, {
            label: "内江经济开发区",
            value: "511071"
        }, {
            label: "隆昌市",
            value: "511083"
        } ], [ {
            label: "市中区",
            value: "511102"
        }, {
            label: "沙湾区",
            value: "511111"
        }, {
            label: "五通桥区",
            value: "511112"
        }, {
            label: "金口河区",
            value: "511113"
        }, {
            label: "犍为县",
            value: "511123"
        }, {
            label: "井研县",
            value: "511124"
        }, {
            label: "夹江县",
            value: "511126"
        }, {
            label: "沐川县",
            value: "511129"
        }, {
            label: "峨边彝族自治县",
            value: "511132"
        }, {
            label: "马边彝族自治县",
            value: "511133"
        }, {
            label: "峨眉山市",
            value: "511181"
        } ], [ {
            label: "顺庆区",
            value: "511302"
        }, {
            label: "高坪区",
            value: "511303"
        }, {
            label: "嘉陵区",
            value: "511304"
        }, {
            label: "南部县",
            value: "511321"
        }, {
            label: "营山县",
            value: "511322"
        }, {
            label: "蓬安县",
            value: "511323"
        }, {
            label: "仪陇县",
            value: "511324"
        }, {
            label: "西充县",
            value: "511325"
        }, {
            label: "阆中市",
            value: "511381"
        } ], [ {
            label: "东坡区",
            value: "511402"
        }, {
            label: "彭山区",
            value: "511403"
        }, {
            label: "仁寿县",
            value: "511421"
        }, {
            label: "洪雅县",
            value: "511423"
        }, {
            label: "丹棱县",
            value: "511424"
        }, {
            label: "青神县",
            value: "511425"
        } ], [ {
            label: "翠屏区",
            value: "511502"
        }, {
            label: "南溪区",
            value: "511503"
        }, {
            label: "宜宾县",
            value: "511521"
        }, {
            label: "江安县",
            value: "511523"
        }, {
            label: "长宁县",
            value: "511524"
        }, {
            label: "高县",
            value: "511525"
        }, {
            label: "珙县",
            value: "511526"
        }, {
            label: "筠连县",
            value: "511527"
        }, {
            label: "兴文县",
            value: "511528"
        }, {
            label: "屏山县",
            value: "511529"
        } ], [ {
            label: "广安区",
            value: "511602"
        }, {
            label: "前锋区",
            value: "511603"
        }, {
            label: "岳池县",
            value: "511621"
        }, {
            label: "武胜县",
            value: "511622"
        }, {
            label: "邻水县",
            value: "511623"
        }, {
            label: "华蓥市",
            value: "511681"
        } ], [ {
            label: "通川区",
            value: "511702"
        }, {
            label: "达川区",
            value: "511703"
        }, {
            label: "宣汉县",
            value: "511722"
        }, {
            label: "开江县",
            value: "511723"
        }, {
            label: "大竹县",
            value: "511724"
        }, {
            label: "渠县",
            value: "511725"
        }, {
            label: "达州经济开发区",
            value: "511771"
        }, {
            label: "万源市",
            value: "511781"
        } ], [ {
            label: "雨城区",
            value: "511802"
        }, {
            label: "名山区",
            value: "511803"
        }, {
            label: "荥经县",
            value: "511822"
        }, {
            label: "汉源县",
            value: "511823"
        }, {
            label: "石棉县",
            value: "511824"
        }, {
            label: "天全县",
            value: "511825"
        }, {
            label: "芦山县",
            value: "511826"
        }, {
            label: "宝兴县",
            value: "511827"
        } ], [ {
            label: "巴州区",
            value: "511902"
        }, {
            label: "恩阳区",
            value: "511903"
        }, {
            label: "通江县",
            value: "511921"
        }, {
            label: "南江县",
            value: "511922"
        }, {
            label: "平昌县",
            value: "511923"
        }, {
            label: "巴中经济开发区",
            value: "511971"
        } ], [ {
            label: "雁江区",
            value: "512002"
        }, {
            label: "安岳县",
            value: "512021"
        }, {
            label: "乐至县",
            value: "512022"
        } ], [ {
            label: "马尔康市",
            value: "513201"
        }, {
            label: "汶川县",
            value: "513221"
        }, {
            label: "理县",
            value: "513222"
        }, {
            label: "茂县",
            value: "513223"
        }, {
            label: "松潘县",
            value: "513224"
        }, {
            label: "九寨沟县",
            value: "513225"
        }, {
            label: "金川县",
            value: "513226"
        }, {
            label: "小金县",
            value: "513227"
        }, {
            label: "黑水县",
            value: "513228"
        }, {
            label: "壤塘县",
            value: "513230"
        }, {
            label: "阿坝县",
            value: "513231"
        }, {
            label: "若尔盖县",
            value: "513232"
        }, {
            label: "红原县",
            value: "513233"
        } ], [ {
            label: "康定市",
            value: "513301"
        }, {
            label: "泸定县",
            value: "513322"
        }, {
            label: "丹巴县",
            value: "513323"
        }, {
            label: "九龙县",
            value: "513324"
        }, {
            label: "雅江县",
            value: "513325"
        }, {
            label: "道孚县",
            value: "513326"
        }, {
            label: "炉霍县",
            value: "513327"
        }, {
            label: "甘孜县",
            value: "513328"
        }, {
            label: "新龙县",
            value: "513329"
        }, {
            label: "德格县",
            value: "513330"
        }, {
            label: "白玉县",
            value: "513331"
        }, {
            label: "石渠县",
            value: "513332"
        }, {
            label: "色达县",
            value: "513333"
        }, {
            label: "理塘县",
            value: "513334"
        }, {
            label: "巴塘县",
            value: "513335"
        }, {
            label: "乡城县",
            value: "513336"
        }, {
            label: "稻城县",
            value: "513337"
        }, {
            label: "得荣县",
            value: "513338"
        } ], [ {
            label: "西昌市",
            value: "513401"
        }, {
            label: "木里藏族自治县",
            value: "513422"
        }, {
            label: "盐源县",
            value: "513423"
        }, {
            label: "德昌县",
            value: "513424"
        }, {
            label: "会理县",
            value: "513425"
        }, {
            label: "会东县",
            value: "513426"
        }, {
            label: "宁南县",
            value: "513427"
        }, {
            label: "普格县",
            value: "513428"
        }, {
            label: "布拖县",
            value: "513429"
        }, {
            label: "金阳县",
            value: "513430"
        }, {
            label: "昭觉县",
            value: "513431"
        }, {
            label: "喜德县",
            value: "513432"
        }, {
            label: "冕宁县",
            value: "513433"
        }, {
            label: "越西县",
            value: "513434"
        }, {
            label: "甘洛县",
            value: "513435"
        }, {
            label: "美姑县",
            value: "513436"
        }, {
            label: "雷波县",
            value: "513437"
        } ] ], [ [ {
            label: "南明区",
            value: "520102"
        }, {
            label: "云岩区",
            value: "520103"
        }, {
            label: "花溪区",
            value: "520111"
        }, {
            label: "乌当区",
            value: "520112"
        }, {
            label: "白云区",
            value: "520113"
        }, {
            label: "观山湖区",
            value: "520115"
        }, {
            label: "开阳县",
            value: "520121"
        }, {
            label: "息烽县",
            value: "520122"
        }, {
            label: "修文县",
            value: "520123"
        }, {
            label: "清镇市",
            value: "520181"
        } ], [ {
            label: "钟山区",
            value: "520201"
        }, {
            label: "六枝特区",
            value: "520203"
        }, {
            label: "水城县",
            value: "520221"
        }, {
            label: "盘州市",
            value: "520281"
        } ], [ {
            label: "红花岗区",
            value: "520302"
        }, {
            label: "汇川区",
            value: "520303"
        }, {
            label: "播州区",
            value: "520304"
        }, {
            label: "桐梓县",
            value: "520322"
        }, {
            label: "绥阳县",
            value: "520323"
        }, {
            label: "正安县",
            value: "520324"
        }, {
            label: "道真仡佬族苗族自治县",
            value: "520325"
        }, {
            label: "务川仡佬族苗族自治县",
            value: "520326"
        }, {
            label: "凤冈县",
            value: "520327"
        }, {
            label: "湄潭县",
            value: "520328"
        }, {
            label: "余庆县",
            value: "520329"
        }, {
            label: "习水县",
            value: "520330"
        }, {
            label: "赤水市",
            value: "520381"
        }, {
            label: "仁怀市",
            value: "520382"
        } ], [ {
            label: "西秀区",
            value: "520402"
        }, {
            label: "平坝区",
            value: "520403"
        }, {
            label: "普定县",
            value: "520422"
        }, {
            label: "镇宁布依族苗族自治县",
            value: "520423"
        }, {
            label: "关岭布依族苗族自治县",
            value: "520424"
        }, {
            label: "紫云苗族布依族自治县",
            value: "520425"
        } ], [ {
            label: "七星关区",
            value: "520502"
        }, {
            label: "大方县",
            value: "520521"
        }, {
            label: "黔西县",
            value: "520522"
        }, {
            label: "金沙县",
            value: "520523"
        }, {
            label: "织金县",
            value: "520524"
        }, {
            label: "纳雍县",
            value: "520525"
        }, {
            label: "威宁彝族回族苗族自治县",
            value: "520526"
        }, {
            label: "赫章县",
            value: "520527"
        } ], [ {
            label: "碧江区",
            value: "520602"
        }, {
            label: "万山区",
            value: "520603"
        }, {
            label: "江口县",
            value: "520621"
        }, {
            label: "玉屏侗族自治县",
            value: "520622"
        }, {
            label: "石阡县",
            value: "520623"
        }, {
            label: "思南县",
            value: "520624"
        }, {
            label: "印江土家族苗族自治县",
            value: "520625"
        }, {
            label: "德江县",
            value: "520626"
        }, {
            label: "沿河土家族自治县",
            value: "520627"
        }, {
            label: "松桃苗族自治县",
            value: "520628"
        } ], [ {
            label: "兴义市",
            value: "522301"
        }, {
            label: "兴仁县",
            value: "522322"
        }, {
            label: "普安县",
            value: "522323"
        }, {
            label: "晴隆县",
            value: "522324"
        }, {
            label: "贞丰县",
            value: "522325"
        }, {
            label: "望谟县",
            value: "522326"
        }, {
            label: "册亨县",
            value: "522327"
        }, {
            label: "安龙县",
            value: "522328"
        } ], [ {
            label: "凯里市",
            value: "522601"
        }, {
            label: "黄平县",
            value: "522622"
        }, {
            label: "施秉县",
            value: "522623"
        }, {
            label: "三穗县",
            value: "522624"
        }, {
            label: "镇远县",
            value: "522625"
        }, {
            label: "岑巩县",
            value: "522626"
        }, {
            label: "天柱县",
            value: "522627"
        }, {
            label: "锦屏县",
            value: "522628"
        }, {
            label: "剑河县",
            value: "522629"
        }, {
            label: "台江县",
            value: "522630"
        }, {
            label: "黎平县",
            value: "522631"
        }, {
            label: "榕江县",
            value: "522632"
        }, {
            label: "从江县",
            value: "522633"
        }, {
            label: "雷山县",
            value: "522634"
        }, {
            label: "麻江县",
            value: "522635"
        }, {
            label: "丹寨县",
            value: "522636"
        } ], [ {
            label: "都匀市",
            value: "522701"
        }, {
            label: "福泉市",
            value: "522702"
        }, {
            label: "荔波县",
            value: "522722"
        }, {
            label: "贵定县",
            value: "522723"
        }, {
            label: "瓮安县",
            value: "522725"
        }, {
            label: "独山县",
            value: "522726"
        }, {
            label: "平塘县",
            value: "522727"
        }, {
            label: "罗甸县",
            value: "522728"
        }, {
            label: "长顺县",
            value: "522729"
        }, {
            label: "龙里县",
            value: "522730"
        }, {
            label: "惠水县",
            value: "522731"
        }, {
            label: "三都水族自治县",
            value: "522732"
        } ] ], [ [ {
            label: "五华区",
            value: "530102"
        }, {
            label: "盘龙区",
            value: "530103"
        }, {
            label: "官渡区",
            value: "530111"
        }, {
            label: "西山区",
            value: "530112"
        }, {
            label: "东川区",
            value: "530113"
        }, {
            label: "呈贡区",
            value: "530114"
        }, {
            label: "晋宁区",
            value: "530115"
        }, {
            label: "富民县",
            value: "530124"
        }, {
            label: "宜良县",
            value: "530125"
        }, {
            label: "石林彝族自治县",
            value: "530126"
        }, {
            label: "嵩明县",
            value: "530127"
        }, {
            label: "禄劝彝族苗族自治县",
            value: "530128"
        }, {
            label: "寻甸回族彝族自治县",
            value: "530129"
        }, {
            label: "安宁市",
            value: "530181"
        } ], [ {
            label: "麒麟区",
            value: "530302"
        }, {
            label: "沾益区",
            value: "530303"
        }, {
            label: "马龙县",
            value: "530321"
        }, {
            label: "陆良县",
            value: "530322"
        }, {
            label: "师宗县",
            value: "530323"
        }, {
            label: "罗平县",
            value: "530324"
        }, {
            label: "富源县",
            value: "530325"
        }, {
            label: "会泽县",
            value: "530326"
        }, {
            label: "宣威市",
            value: "530381"
        } ], [ {
            label: "红塔区",
            value: "530402"
        }, {
            label: "江川区",
            value: "530403"
        }, {
            label: "澄江县",
            value: "530422"
        }, {
            label: "通海县",
            value: "530423"
        }, {
            label: "华宁县",
            value: "530424"
        }, {
            label: "易门县",
            value: "530425"
        }, {
            label: "峨山彝族自治县",
            value: "530426"
        }, {
            label: "新平彝族傣族自治县",
            value: "530427"
        }, {
            label: "元江哈尼族彝族傣族自治县",
            value: "530428"
        } ], [ {
            label: "隆阳区",
            value: "530502"
        }, {
            label: "施甸县",
            value: "530521"
        }, {
            label: "龙陵县",
            value: "530523"
        }, {
            label: "昌宁县",
            value: "530524"
        }, {
            label: "腾冲市",
            value: "530581"
        } ], [ {
            label: "昭阳区",
            value: "530602"
        }, {
            label: "鲁甸县",
            value: "530621"
        }, {
            label: "巧家县",
            value: "530622"
        }, {
            label: "盐津县",
            value: "530623"
        }, {
            label: "大关县",
            value: "530624"
        }, {
            label: "永善县",
            value: "530625"
        }, {
            label: "绥江县",
            value: "530626"
        }, {
            label: "镇雄县",
            value: "530627"
        }, {
            label: "彝良县",
            value: "530628"
        }, {
            label: "威信县",
            value: "530629"
        }, {
            label: "水富县",
            value: "530630"
        } ], [ {
            label: "古城区",
            value: "530702"
        }, {
            label: "玉龙纳西族自治县",
            value: "530721"
        }, {
            label: "永胜县",
            value: "530722"
        }, {
            label: "华坪县",
            value: "530723"
        }, {
            label: "宁蒗彝族自治县",
            value: "530724"
        } ], [ {
            label: "思茅区",
            value: "530802"
        }, {
            label: "宁洱哈尼族彝族自治县",
            value: "530821"
        }, {
            label: "墨江哈尼族自治县",
            value: "530822"
        }, {
            label: "景东彝族自治县",
            value: "530823"
        }, {
            label: "景谷傣族彝族自治县",
            value: "530824"
        }, {
            label: "镇沅彝族哈尼族拉祜族自治县",
            value: "530825"
        }, {
            label: "江城哈尼族彝族自治县",
            value: "530826"
        }, {
            label: "孟连傣族拉祜族佤族自治县",
            value: "530827"
        }, {
            label: "澜沧拉祜族自治县",
            value: "530828"
        }, {
            label: "西盟佤族自治县",
            value: "530829"
        } ], [ {
            label: "临翔区",
            value: "530902"
        }, {
            label: "凤庆县",
            value: "530921"
        }, {
            label: "云县",
            value: "530922"
        }, {
            label: "永德县",
            value: "530923"
        }, {
            label: "镇康县",
            value: "530924"
        }, {
            label: "双江拉祜族佤族布朗族傣族自治县",
            value: "530925"
        }, {
            label: "耿马傣族佤族自治县",
            value: "530926"
        }, {
            label: "沧源佤族自治县",
            value: "530927"
        } ], [ {
            label: "楚雄市",
            value: "532301"
        }, {
            label: "双柏县",
            value: "532322"
        }, {
            label: "牟定县",
            value: "532323"
        }, {
            label: "南华县",
            value: "532324"
        }, {
            label: "姚安县",
            value: "532325"
        }, {
            label: "大姚县",
            value: "532326"
        }, {
            label: "永仁县",
            value: "532327"
        }, {
            label: "元谋县",
            value: "532328"
        }, {
            label: "武定县",
            value: "532329"
        }, {
            label: "禄丰县",
            value: "532331"
        } ], [ {
            label: "个旧市",
            value: "532501"
        }, {
            label: "开远市",
            value: "532502"
        }, {
            label: "蒙自市",
            value: "532503"
        }, {
            label: "弥勒市",
            value: "532504"
        }, {
            label: "屏边苗族自治县",
            value: "532523"
        }, {
            label: "建水县",
            value: "532524"
        }, {
            label: "石屏县",
            value: "532525"
        }, {
            label: "泸西县",
            value: "532527"
        }, {
            label: "元阳县",
            value: "532528"
        }, {
            label: "红河县",
            value: "532529"
        }, {
            label: "金平苗族瑶族傣族自治县",
            value: "532530"
        }, {
            label: "绿春县",
            value: "532531"
        }, {
            label: "河口瑶族自治县",
            value: "532532"
        } ], [ {
            label: "文山市",
            value: "532601"
        }, {
            label: "砚山县",
            value: "532622"
        }, {
            label: "西畴县",
            value: "532623"
        }, {
            label: "麻栗坡县",
            value: "532624"
        }, {
            label: "马关县",
            value: "532625"
        }, {
            label: "丘北县",
            value: "532626"
        }, {
            label: "广南县",
            value: "532627"
        }, {
            label: "富宁县",
            value: "532628"
        } ], [ {
            label: "景洪市",
            value: "532801"
        }, {
            label: "勐海县",
            value: "532822"
        }, {
            label: "勐腊县",
            value: "532823"
        } ], [ {
            label: "大理市",
            value: "532901"
        }, {
            label: "漾濞彝族自治县",
            value: "532922"
        }, {
            label: "祥云县",
            value: "532923"
        }, {
            label: "宾川县",
            value: "532924"
        }, {
            label: "弥渡县",
            value: "532925"
        }, {
            label: "南涧彝族自治县",
            value: "532926"
        }, {
            label: "巍山彝族回族自治县",
            value: "532927"
        }, {
            label: "永平县",
            value: "532928"
        }, {
            label: "云龙县",
            value: "532929"
        }, {
            label: "洱源县",
            value: "532930"
        }, {
            label: "剑川县",
            value: "532931"
        }, {
            label: "鹤庆县",
            value: "532932"
        } ], [ {
            label: "瑞丽市",
            value: "533102"
        }, {
            label: "芒市",
            value: "533103"
        }, {
            label: "梁河县",
            value: "533122"
        }, {
            label: "盈江县",
            value: "533123"
        }, {
            label: "陇川县",
            value: "533124"
        } ], [ {
            label: "泸水市",
            value: "533301"
        }, {
            label: "福贡县",
            value: "533323"
        }, {
            label: "贡山独龙族怒族自治县",
            value: "533324"
        }, {
            label: "兰坪白族普米族自治县",
            value: "533325"
        } ], [ {
            label: "香格里拉市",
            value: "533401"
        }, {
            label: "德钦县",
            value: "533422"
        }, {
            label: "维西傈僳族自治县",
            value: "533423"
        } ] ], [ [ {
            label: "城关区",
            value: "540102"
        }, {
            label: "堆龙德庆区",
            value: "540103"
        }, {
            label: "林周县",
            value: "540121"
        }, {
            label: "当雄县",
            value: "540122"
        }, {
            label: "尼木县",
            value: "540123"
        }, {
            label: "曲水县",
            value: "540124"
        }, {
            label: "达孜县",
            value: "540126"
        }, {
            label: "墨竹工卡县",
            value: "540127"
        }, {
            label: "格尔木藏青工业园区",
            value: "540171"
        }, {
            label: "拉萨经济技术开发区",
            value: "540172"
        }, {
            label: "西藏文化旅游创意园区",
            value: "540173"
        }, {
            label: "达孜工业园区",
            value: "540174"
        } ], [ {
            label: "桑珠孜区",
            value: "540202"
        }, {
            label: "南木林县",
            value: "540221"
        }, {
            label: "江孜县",
            value: "540222"
        }, {
            label: "定日县",
            value: "540223"
        }, {
            label: "萨迦县",
            value: "540224"
        }, {
            label: "拉孜县",
            value: "540225"
        }, {
            label: "昂仁县",
            value: "540226"
        }, {
            label: "谢通门县",
            value: "540227"
        }, {
            label: "白朗县",
            value: "540228"
        }, {
            label: "仁布县",
            value: "540229"
        }, {
            label: "康马县",
            value: "540230"
        }, {
            label: "定结县",
            value: "540231"
        }, {
            label: "仲巴县",
            value: "540232"
        }, {
            label: "亚东县",
            value: "540233"
        }, {
            label: "吉隆县",
            value: "540234"
        }, {
            label: "聂拉木县",
            value: "540235"
        }, {
            label: "萨嘎县",
            value: "540236"
        }, {
            label: "岗巴县",
            value: "540237"
        } ], [ {
            label: "卡若区",
            value: "540302"
        }, {
            label: "江达县",
            value: "540321"
        }, {
            label: "贡觉县",
            value: "540322"
        }, {
            label: "类乌齐县",
            value: "540323"
        }, {
            label: "丁青县",
            value: "540324"
        }, {
            label: "察雅县",
            value: "540325"
        }, {
            label: "八宿县",
            value: "540326"
        }, {
            label: "左贡县",
            value: "540327"
        }, {
            label: "芒康县",
            value: "540328"
        }, {
            label: "洛隆县",
            value: "540329"
        }, {
            label: "边坝县",
            value: "540330"
        } ], [ {
            label: "巴宜区",
            value: "540402"
        }, {
            label: "工布江达县",
            value: "540421"
        }, {
            label: "米林县",
            value: "540422"
        }, {
            label: "墨脱县",
            value: "540423"
        }, {
            label: "波密县",
            value: "540424"
        }, {
            label: "察隅县",
            value: "540425"
        }, {
            label: "朗县",
            value: "540426"
        } ], [ {
            label: "乃东区",
            value: "540502"
        }, {
            label: "扎囊县",
            value: "540521"
        }, {
            label: "贡嘎县",
            value: "540522"
        }, {
            label: "桑日县",
            value: "540523"
        }, {
            label: "琼结县",
            value: "540524"
        }, {
            label: "曲松县",
            value: "540525"
        }, {
            label: "措美县",
            value: "540526"
        }, {
            label: "洛扎县",
            value: "540527"
        }, {
            label: "加查县",
            value: "540528"
        }, {
            label: "隆子县",
            value: "540529"
        }, {
            label: "错那县",
            value: "540530"
        }, {
            label: "浪卡子县",
            value: "540531"
        } ], [ {
            label: "那曲县",
            value: "542421"
        }, {
            label: "嘉黎县",
            value: "542422"
        }, {
            label: "比如县",
            value: "542423"
        }, {
            label: "聂荣县",
            value: "542424"
        }, {
            label: "安多县",
            value: "542425"
        }, {
            label: "申扎县",
            value: "542426"
        }, {
            label: "索县",
            value: "542427"
        }, {
            label: "班戈县",
            value: "542428"
        }, {
            label: "巴青县",
            value: "542429"
        }, {
            label: "尼玛县",
            value: "542430"
        }, {
            label: "双湖县",
            value: "542431"
        } ], [ {
            label: "普兰县",
            value: "542521"
        }, {
            label: "札达县",
            value: "542522"
        }, {
            label: "噶尔县",
            value: "542523"
        }, {
            label: "日土县",
            value: "542524"
        }, {
            label: "革吉县",
            value: "542525"
        }, {
            label: "改则县",
            value: "542526"
        }, {
            label: "措勤县",
            value: "542527"
        } ] ], [ [ {
            label: "新城区",
            value: "610102"
        }, {
            label: "碑林区",
            value: "610103"
        }, {
            label: "莲湖区",
            value: "610104"
        }, {
            label: "灞桥区",
            value: "610111"
        }, {
            label: "未央区",
            value: "610112"
        }, {
            label: "雁塔区",
            value: "610113"
        }, {
            label: "阎良区",
            value: "610114"
        }, {
            label: "临潼区",
            value: "610115"
        }, {
            label: "长安区",
            value: "610116"
        }, {
            label: "高陵区",
            value: "610117"
        }, {
            label: "鄠邑区",
            value: "610118"
        }, {
            label: "蓝田县",
            value: "610122"
        }, {
            label: "周至县",
            value: "610124"
        } ], [ {
            label: "王益区",
            value: "610202"
        }, {
            label: "印台区",
            value: "610203"
        }, {
            label: "耀州区",
            value: "610204"
        }, {
            label: "宜君县",
            value: "610222"
        } ], [ {
            label: "渭滨区",
            value: "610302"
        }, {
            label: "金台区",
            value: "610303"
        }, {
            label: "陈仓区",
            value: "610304"
        }, {
            label: "凤翔县",
            value: "610322"
        }, {
            label: "岐山县",
            value: "610323"
        }, {
            label: "扶风县",
            value: "610324"
        }, {
            label: "眉县",
            value: "610326"
        }, {
            label: "陇县",
            value: "610327"
        }, {
            label: "千阳县",
            value: "610328"
        }, {
            label: "麟游县",
            value: "610329"
        }, {
            label: "凤县",
            value: "610330"
        }, {
            label: "太白县",
            value: "610331"
        } ], [ {
            label: "秦都区",
            value: "610402"
        }, {
            label: "杨陵区",
            value: "610403"
        }, {
            label: "渭城区",
            value: "610404"
        }, {
            label: "三原县",
            value: "610422"
        }, {
            label: "泾阳县",
            value: "610423"
        }, {
            label: "乾县",
            value: "610424"
        }, {
            label: "礼泉县",
            value: "610425"
        }, {
            label: "永寿县",
            value: "610426"
        }, {
            label: "彬县",
            value: "610427"
        }, {
            label: "长武县",
            value: "610428"
        }, {
            label: "旬邑县",
            value: "610429"
        }, {
            label: "淳化县",
            value: "610430"
        }, {
            label: "武功县",
            value: "610431"
        }, {
            label: "兴平市",
            value: "610481"
        } ], [ {
            label: "临渭区",
            value: "610502"
        }, {
            label: "华州区",
            value: "610503"
        }, {
            label: "潼关县",
            value: "610522"
        }, {
            label: "大荔县",
            value: "610523"
        }, {
            label: "合阳县",
            value: "610524"
        }, {
            label: "澄城县",
            value: "610525"
        }, {
            label: "蒲城县",
            value: "610526"
        }, {
            label: "白水县",
            value: "610527"
        }, {
            label: "富平县",
            value: "610528"
        }, {
            label: "韩城市",
            value: "610581"
        }, {
            label: "华阴市",
            value: "610582"
        } ], [ {
            label: "宝塔区",
            value: "610602"
        }, {
            label: "安塞区",
            value: "610603"
        }, {
            label: "延长县",
            value: "610621"
        }, {
            label: "延川县",
            value: "610622"
        }, {
            label: "子长县",
            value: "610623"
        }, {
            label: "志丹县",
            value: "610625"
        }, {
            label: "吴起县",
            value: "610626"
        }, {
            label: "甘泉县",
            value: "610627"
        }, {
            label: "富县",
            value: "610628"
        }, {
            label: "洛川县",
            value: "610629"
        }, {
            label: "宜川县",
            value: "610630"
        }, {
            label: "黄龙县",
            value: "610631"
        }, {
            label: "黄陵县",
            value: "610632"
        } ], [ {
            label: "汉台区",
            value: "610702"
        }, {
            label: "南郑区",
            value: "610703"
        }, {
            label: "城固县",
            value: "610722"
        }, {
            label: "洋县",
            value: "610723"
        }, {
            label: "西乡县",
            value: "610724"
        }, {
            label: "勉县",
            value: "610725"
        }, {
            label: "宁强县",
            value: "610726"
        }, {
            label: "略阳县",
            value: "610727"
        }, {
            label: "镇巴县",
            value: "610728"
        }, {
            label: "留坝县",
            value: "610729"
        }, {
            label: "佛坪县",
            value: "610730"
        } ], [ {
            label: "榆阳区",
            value: "610802"
        }, {
            label: "横山区",
            value: "610803"
        }, {
            label: "府谷县",
            value: "610822"
        }, {
            label: "靖边县",
            value: "610824"
        }, {
            label: "定边县",
            value: "610825"
        }, {
            label: "绥德县",
            value: "610826"
        }, {
            label: "米脂县",
            value: "610827"
        }, {
            label: "佳县",
            value: "610828"
        }, {
            label: "吴堡县",
            value: "610829"
        }, {
            label: "清涧县",
            value: "610830"
        }, {
            label: "子洲县",
            value: "610831"
        }, {
            label: "神木市",
            value: "610881"
        } ], [ {
            label: "汉滨区",
            value: "610902"
        }, {
            label: "汉阴县",
            value: "610921"
        }, {
            label: "石泉县",
            value: "610922"
        }, {
            label: "宁陕县",
            value: "610923"
        }, {
            label: "紫阳县",
            value: "610924"
        }, {
            label: "岚皋县",
            value: "610925"
        }, {
            label: "平利县",
            value: "610926"
        }, {
            label: "镇坪县",
            value: "610927"
        }, {
            label: "旬阳县",
            value: "610928"
        }, {
            label: "白河县",
            value: "610929"
        } ], [ {
            label: "商州区",
            value: "611002"
        }, {
            label: "洛南县",
            value: "611021"
        }, {
            label: "丹凤县",
            value: "611022"
        }, {
            label: "商南县",
            value: "611023"
        }, {
            label: "山阳县",
            value: "611024"
        }, {
            label: "镇安县",
            value: "611025"
        }, {
            label: "柞水县",
            value: "611026"
        } ] ], [ [ {
            label: "城关区",
            value: "620102"
        }, {
            label: "七里河区",
            value: "620103"
        }, {
            label: "西固区",
            value: "620104"
        }, {
            label: "安宁区",
            value: "620105"
        }, {
            label: "红古区",
            value: "620111"
        }, {
            label: "永登县",
            value: "620121"
        }, {
            label: "皋兰县",
            value: "620122"
        }, {
            label: "榆中县",
            value: "620123"
        }, {
            label: "兰州新区",
            value: "620171"
        } ], [ {
            label: "嘉峪关市",
            value: "620201"
        } ], [ {
            label: "金川区",
            value: "620302"
        }, {
            label: "永昌县",
            value: "620321"
        } ], [ {
            label: "白银区",
            value: "620402"
        }, {
            label: "平川区",
            value: "620403"
        }, {
            label: "靖远县",
            value: "620421"
        }, {
            label: "会宁县",
            value: "620422"
        }, {
            label: "景泰县",
            value: "620423"
        } ], [ {
            label: "秦州区",
            value: "620502"
        }, {
            label: "麦积区",
            value: "620503"
        }, {
            label: "清水县",
            value: "620521"
        }, {
            label: "秦安县",
            value: "620522"
        }, {
            label: "甘谷县",
            value: "620523"
        }, {
            label: "武山县",
            value: "620524"
        }, {
            label: "张家川回族自治县",
            value: "620525"
        } ], [ {
            label: "凉州区",
            value: "620602"
        }, {
            label: "民勤县",
            value: "620621"
        }, {
            label: "古浪县",
            value: "620622"
        }, {
            label: "天祝藏族自治县",
            value: "620623"
        } ], [ {
            label: "甘州区",
            value: "620702"
        }, {
            label: "肃南裕固族自治县",
            value: "620721"
        }, {
            label: "民乐县",
            value: "620722"
        }, {
            label: "临泽县",
            value: "620723"
        }, {
            label: "高台县",
            value: "620724"
        }, {
            label: "山丹县",
            value: "620725"
        } ], [ {
            label: "崆峒区",
            value: "620802"
        }, {
            label: "泾川县",
            value: "620821"
        }, {
            label: "灵台县",
            value: "620822"
        }, {
            label: "崇信县",
            value: "620823"
        }, {
            label: "华亭县",
            value: "620824"
        }, {
            label: "庄浪县",
            value: "620825"
        }, {
            label: "静宁县",
            value: "620826"
        }, {
            label: "平凉工业园区",
            value: "620871"
        } ], [ {
            label: "肃州区",
            value: "620902"
        }, {
            label: "金塔县",
            value: "620921"
        }, {
            label: "瓜州县",
            value: "620922"
        }, {
            label: "肃北蒙古族自治县",
            value: "620923"
        }, {
            label: "阿克塞哈萨克族自治县",
            value: "620924"
        }, {
            label: "玉门市",
            value: "620981"
        }, {
            label: "敦煌市",
            value: "620982"
        } ], [ {
            label: "西峰区",
            value: "621002"
        }, {
            label: "庆城县",
            value: "621021"
        }, {
            label: "环县",
            value: "621022"
        }, {
            label: "华池县",
            value: "621023"
        }, {
            label: "合水县",
            value: "621024"
        }, {
            label: "正宁县",
            value: "621025"
        }, {
            label: "宁县",
            value: "621026"
        }, {
            label: "镇原县",
            value: "621027"
        } ], [ {
            label: "安定区",
            value: "621102"
        }, {
            label: "通渭县",
            value: "621121"
        }, {
            label: "陇西县",
            value: "621122"
        }, {
            label: "渭源县",
            value: "621123"
        }, {
            label: "临洮县",
            value: "621124"
        }, {
            label: "漳县",
            value: "621125"
        }, {
            label: "岷县",
            value: "621126"
        } ], [ {
            label: "武都区",
            value: "621202"
        }, {
            label: "成县",
            value: "621221"
        }, {
            label: "文县",
            value: "621222"
        }, {
            label: "宕昌县",
            value: "621223"
        }, {
            label: "康县",
            value: "621224"
        }, {
            label: "西和县",
            value: "621225"
        }, {
            label: "礼县",
            value: "621226"
        }, {
            label: "徽县",
            value: "621227"
        }, {
            label: "两当县",
            value: "621228"
        } ], [ {
            label: "临夏市",
            value: "622901"
        }, {
            label: "临夏县",
            value: "622921"
        }, {
            label: "康乐县",
            value: "622922"
        }, {
            label: "永靖县",
            value: "622923"
        }, {
            label: "广河县",
            value: "622924"
        }, {
            label: "和政县",
            value: "622925"
        }, {
            label: "东乡族自治县",
            value: "622926"
        }, {
            label: "积石山保安族东乡族撒拉族自治县",
            value: "622927"
        } ], [ {
            label: "合作市",
            value: "623001"
        }, {
            label: "临潭县",
            value: "623021"
        }, {
            label: "卓尼县",
            value: "623022"
        }, {
            label: "舟曲县",
            value: "623023"
        }, {
            label: "迭部县",
            value: "623024"
        }, {
            label: "玛曲县",
            value: "623025"
        }, {
            label: "碌曲县",
            value: "623026"
        }, {
            label: "夏河县",
            value: "623027"
        } ] ], [ [ {
            label: "城东区",
            value: "630102"
        }, {
            label: "城中区",
            value: "630103"
        }, {
            label: "城西区",
            value: "630104"
        }, {
            label: "城北区",
            value: "630105"
        }, {
            label: "大通回族土族自治县",
            value: "630121"
        }, {
            label: "湟中县",
            value: "630122"
        }, {
            label: "湟源县",
            value: "630123"
        } ], [ {
            label: "乐都区",
            value: "630202"
        }, {
            label: "平安区",
            value: "630203"
        }, {
            label: "民和回族土族自治县",
            value: "630222"
        }, {
            label: "互助土族自治县",
            value: "630223"
        }, {
            label: "化隆回族自治县",
            value: "630224"
        }, {
            label: "循化撒拉族自治县",
            value: "630225"
        } ], [ {
            label: "门源回族自治县",
            value: "632221"
        }, {
            label: "祁连县",
            value: "632222"
        }, {
            label: "海晏县",
            value: "632223"
        }, {
            label: "刚察县",
            value: "632224"
        } ], [ {
            label: "同仁县",
            value: "632321"
        }, {
            label: "尖扎县",
            value: "632322"
        }, {
            label: "泽库县",
            value: "632323"
        }, {
            label: "河南蒙古族自治县",
            value: "632324"
        } ], [ {
            label: "共和县",
            value: "632521"
        }, {
            label: "同德县",
            value: "632522"
        }, {
            label: "贵德县",
            value: "632523"
        }, {
            label: "兴海县",
            value: "632524"
        }, {
            label: "贵南县",
            value: "632525"
        } ], [ {
            label: "玛沁县",
            value: "632621"
        }, {
            label: "班玛县",
            value: "632622"
        }, {
            label: "甘德县",
            value: "632623"
        }, {
            label: "达日县",
            value: "632624"
        }, {
            label: "久治县",
            value: "632625"
        }, {
            label: "玛多县",
            value: "632626"
        } ], [ {
            label: "玉树市",
            value: "632701"
        }, {
            label: "杂多县",
            value: "632722"
        }, {
            label: "称多县",
            value: "632723"
        }, {
            label: "治多县",
            value: "632724"
        }, {
            label: "囊谦县",
            value: "632725"
        }, {
            label: "曲麻莱县",
            value: "632726"
        } ], [ {
            label: "格尔木市",
            value: "632801"
        }, {
            label: "德令哈市",
            value: "632802"
        }, {
            label: "乌兰县",
            value: "632821"
        }, {
            label: "都兰县",
            value: "632822"
        }, {
            label: "天峻县",
            value: "632823"
        }, {
            label: "大柴旦行政委员会",
            value: "632857"
        }, {
            label: "冷湖行政委员会",
            value: "632858"
        }, {
            label: "茫崖行政委员会",
            value: "632859"
        } ] ], [ [ {
            label: "兴庆区",
            value: "640104"
        }, {
            label: "西夏区",
            value: "640105"
        }, {
            label: "金凤区",
            value: "640106"
        }, {
            label: "永宁县",
            value: "640121"
        }, {
            label: "贺兰县",
            value: "640122"
        }, {
            label: "灵武市",
            value: "640181"
        } ], [ {
            label: "大武口区",
            value: "640202"
        }, {
            label: "惠农区",
            value: "640205"
        }, {
            label: "平罗县",
            value: "640221"
        } ], [ {
            label: "利通区",
            value: "640302"
        }, {
            label: "红寺堡区",
            value: "640303"
        }, {
            label: "盐池县",
            value: "640323"
        }, {
            label: "同心县",
            value: "640324"
        }, {
            label: "青铜峡市",
            value: "640381"
        } ], [ {
            label: "原州区",
            value: "640402"
        }, {
            label: "西吉县",
            value: "640422"
        }, {
            label: "隆德县",
            value: "640423"
        }, {
            label: "泾源县",
            value: "640424"
        }, {
            label: "彭阳县",
            value: "640425"
        } ], [ {
            label: "沙坡头区",
            value: "640502"
        }, {
            label: "中宁县",
            value: "640521"
        }, {
            label: "海原县",
            value: "640522"
        } ] ], [ [ {
            label: "天山区",
            value: "650102"
        }, {
            label: "沙依巴克区",
            value: "650103"
        }, {
            label: "新市区",
            value: "650104"
        }, {
            label: "水磨沟区",
            value: "650105"
        }, {
            label: "头屯河区",
            value: "650106"
        }, {
            label: "达坂城区",
            value: "650107"
        }, {
            label: "米东区",
            value: "650109"
        }, {
            label: "乌鲁木齐县",
            value: "650121"
        }, {
            label: "乌鲁木齐经济技术开发区",
            value: "650171"
        }, {
            label: "乌鲁木齐高新技术产业开发区",
            value: "650172"
        } ], [ {
            label: "独山子区",
            value: "650202"
        }, {
            label: "克拉玛依区",
            value: "650203"
        }, {
            label: "白碱滩区",
            value: "650204"
        }, {
            label: "乌尔禾区",
            value: "650205"
        } ], [ {
            label: "高昌区",
            value: "650402"
        }, {
            label: "鄯善县",
            value: "650421"
        }, {
            label: "托克逊县",
            value: "650422"
        } ], [ {
            label: "伊州区",
            value: "650502"
        }, {
            label: "巴里坤哈萨克自治县",
            value: "650521"
        }, {
            label: "伊吾县",
            value: "650522"
        } ], [ {
            label: "昌吉市",
            value: "652301"
        }, {
            label: "阜康市",
            value: "652302"
        }, {
            label: "呼图壁县",
            value: "652323"
        }, {
            label: "玛纳斯县",
            value: "652324"
        }, {
            label: "奇台县",
            value: "652325"
        }, {
            label: "吉木萨尔县",
            value: "652327"
        }, {
            label: "木垒哈萨克自治县",
            value: "652328"
        } ], [ {
            label: "博乐市",
            value: "652701"
        }, {
            label: "阿拉山口市",
            value: "652702"
        }, {
            label: "精河县",
            value: "652722"
        }, {
            label: "温泉县",
            value: "652723"
        } ], [ {
            label: "库尔勒市",
            value: "652801"
        }, {
            label: "轮台县",
            value: "652822"
        }, {
            label: "尉犁县",
            value: "652823"
        }, {
            label: "若羌县",
            value: "652824"
        }, {
            label: "且末县",
            value: "652825"
        }, {
            label: "焉耆回族自治县",
            value: "652826"
        }, {
            label: "和静县",
            value: "652827"
        }, {
            label: "和硕县",
            value: "652828"
        }, {
            label: "博湖县",
            value: "652829"
        }, {
            label: "库尔勒经济技术开发区",
            value: "652871"
        } ], [ {
            label: "阿克苏市",
            value: "652901"
        }, {
            label: "温宿县",
            value: "652922"
        }, {
            label: "库车县",
            value: "652923"
        }, {
            label: "沙雅县",
            value: "652924"
        }, {
            label: "新和县",
            value: "652925"
        }, {
            label: "拜城县",
            value: "652926"
        }, {
            label: "乌什县",
            value: "652927"
        }, {
            label: "阿瓦提县",
            value: "652928"
        }, {
            label: "柯坪县",
            value: "652929"
        } ], [ {
            label: "阿图什市",
            value: "653001"
        }, {
            label: "阿克陶县",
            value: "653022"
        }, {
            label: "阿合奇县",
            value: "653023"
        }, {
            label: "乌恰县",
            value: "653024"
        } ], [ {
            label: "喀什市",
            value: "653101"
        }, {
            label: "疏附县",
            value: "653121"
        }, {
            label: "疏勒县",
            value: "653122"
        }, {
            label: "英吉沙县",
            value: "653123"
        }, {
            label: "泽普县",
            value: "653124"
        }, {
            label: "莎车县",
            value: "653125"
        }, {
            label: "叶城县",
            value: "653126"
        }, {
            label: "麦盖提县",
            value: "653127"
        }, {
            label: "岳普湖县",
            value: "653128"
        }, {
            label: "伽师县",
            value: "653129"
        }, {
            label: "巴楚县",
            value: "653130"
        }, {
            label: "塔什库尔干塔吉克自治县",
            value: "653131"
        } ], [ {
            label: "和田市",
            value: "653201"
        }, {
            label: "和田县",
            value: "653221"
        }, {
            label: "墨玉县",
            value: "653222"
        }, {
            label: "皮山县",
            value: "653223"
        }, {
            label: "洛浦县",
            value: "653224"
        }, {
            label: "策勒县",
            value: "653225"
        }, {
            label: "于田县",
            value: "653226"
        }, {
            label: "民丰县",
            value: "653227"
        } ], [ {
            label: "伊宁市",
            value: "654002"
        }, {
            label: "奎屯市",
            value: "654003"
        }, {
            label: "霍尔果斯市",
            value: "654004"
        }, {
            label: "伊宁县",
            value: "654021"
        }, {
            label: "察布查尔锡伯自治县",
            value: "654022"
        }, {
            label: "霍城县",
            value: "654023"
        }, {
            label: "巩留县",
            value: "654024"
        }, {
            label: "新源县",
            value: "654025"
        }, {
            label: "昭苏县",
            value: "654026"
        }, {
            label: "特克斯县",
            value: "654027"
        }, {
            label: "尼勒克县",
            value: "654028"
        } ], [ {
            label: "塔城市",
            value: "654201"
        }, {
            label: "乌苏市",
            value: "654202"
        }, {
            label: "额敏县",
            value: "654221"
        }, {
            label: "沙湾县",
            value: "654223"
        }, {
            label: "托里县",
            value: "654224"
        }, {
            label: "裕民县",
            value: "654225"
        }, {
            label: "和布克赛尔蒙古自治县",
            value: "654226"
        } ], [ {
            label: "阿勒泰市",
            value: "654301"
        }, {
            label: "布尔津县",
            value: "654321"
        }, {
            label: "富蕴县",
            value: "654322"
        }, {
            label: "福海县",
            value: "654323"
        }, {
            label: "哈巴河县",
            value: "654324"
        }, {
            label: "青河县",
            value: "654325"
        }, {
            label: "吉木乃县",
            value: "654326"
        } ], [ {
            label: "石河子市",
            value: "659001"
        }, {
            label: "阿拉尔市",
            value: "659002"
        }, {
            label: "图木舒克市",
            value: "659003"
        }, {
            label: "五家渠市",
            value: "659004"
        }, {
            label: "铁门关市",
            value: "659006"
        } ] ], [ [ {
            label: "台北",
            value: "660101"
        } ], [ {
            label: "高雄",
            value: "660201"
        } ], [ {
            label: "基隆",
            value: "660301"
        } ], [ {
            label: "台中",
            value: "660401"
        } ], [ {
            label: "台南",
            value: "660501"
        } ], [ {
            label: "新竹",
            value: "660601"
        } ], [ {
            label: "嘉义",
            value: "660701"
        } ], [ {
            label: "宜兰",
            value: "660801"
        } ], [ {
            label: "桃园",
            value: "660901"
        } ], [ {
            label: "苗栗",
            value: "661001"
        } ], [ {
            label: "彰化",
            value: "661101"
        } ], [ {
            label: "南投",
            value: "661201"
        } ], [ {
            label: "云林",
            value: "661301"
        } ], [ {
            label: "屏东",
            value: "661401"
        } ], [ {
            label: "台东",
            value: "661501"
        } ], [ {
            label: "花莲",
            value: "661601"
        } ], [ {
            label: "澎湖",
            value: "661701"
        } ] ], [ [ {
            label: "香港岛",
            value: "670101"
        } ], [ {
            label: "九龙",
            value: "670201"
        } ], [ {
            label: "新界",
            value: "670301"
        } ] ], [ [ {
            label: "澳门半岛",
            value: "680101"
        } ], [ {
            label: "氹仔岛",
            value: "680201"
        } ], [ {
            label: "路环岛",
            value: "680301"
        } ], [ {
            label: "路氹城",
            value: "680401"
        } ] ], [ [ {
            label: "钓鱼岛全岛",
            value: "690101"
        } ] ] ];
        l.default = t;
    },
    b5b2: function(e, l, a) {
        (function(a) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var e = {
                sysInfo: null,
                compareVersion: function(e, l) {
                    e = e.split("."), l = l.split(".");
                    for (var a = Math.max(e.length, l.length); e.length < a; ) e.push("0");
                    for (;l.length < a; ) l.push("0");
                    for (var t = 0; t < a; t++) {
                        var n = parseInt(e[t], 10), r = parseInt(l[t], 10);
                        if (r < n) return 1;
                        if (n < r) return -1;
                    }
                    return 0;
                },
                getSystemInfoSync: function() {
                    var l = this.sysInfo;
                    if (!l) try {
                        l = a.getSystemInfoSync(), this.sysInfo = l;
                    } catch (e) {
                        l = {};
                    }
                    return l;
                },
                getWindowWidthSync: function() {
                    return this.getSystemInfoSync().windowWidth || a.getSystemInfoSync().windowWidth;
                },
                getWindowHeightSync: function() {
                    var e, l = a.getSystemInfoSync();
                    return l && (e = l.windowHeight), e;
                },
                getSDKVersionInt: function() {
                    var e = this.getSystemInfoSync().SDKVersion;
                    return !!e && +e.split(".").join("");
                },
                getIpxJudgment: function() {
                    return this.sysInfo || (this.sysInfo = this.getSystemInfoSync()), !!this.sysInfo.model && /(iPhone\sX)|(iPhone12)/.test(this.sysInfo.model);
                },
                init: function() {
                    this.systemInfo = a.getSystemInfoSync(), console.log("isIphoneX:" + this.isIphoneX());
                },
                isAndroid: function() {
                    return 0 <= this.systemInfo.system.indexOf("android") || 0 <= this.systemInfo.system.indexOf("Android");
                },
                isIOS: function() {
                    return 0 <= this.systemInfo.system.indexOf("iOS") || 0 <= this.systemInfo.system.indexOf("IOS");
                },
                screenWidth: function() {
                    if (!this.systemInfo) throw new TypeError("必须在app中调用一次init");
                    return this.systemInfo.windowWidth;
                },
                screenHeight: function() {
                    if (!this.systemInfo) throw new TypeError("必须在app中调用一次init");
                    return this.systemInfo.windowHeight;
                },
                navigationBarHeight: function() {
                    return this.systemInfo.statusBarHeight + 44;
                },
                rpxTopx: function(e) {
                    return e / 750 * this.systemInfo.windowWidth;
                },
                isIphoneX: function() {
                    return 0 <= this.systemInfo.model.indexOf("iPhone X") || 0 <= this.systemInfo.model.indexOf("iPhone XR") || 0 <= this.systemInfo.model.indexOf("iPhone XS");
                }
            };
            l.default = e;
        }).call(this, a("543d").default);
    },
    bbdd: function(e, l, a) {
        var t = function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self;
        }() || Function("return this")(), n = t.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime"), r = n && t.regeneratorRuntime;
        if (t.regeneratorRuntime = void 0, e.exports = a("96cf"), n) t.regeneratorRuntime = r; else try {
            delete t.regeneratorRuntime;
        } catch (e) {
            t.regeneratorRuntime = void 0;
        }
    },
    bcb3: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = [ [ {
            label: "北京市",
            value: "110000"
        } ], [ {
            label: "天津市",
            value: "120000"
        } ], [ {
            label: "石家庄市",
            value: "130100"
        }, {
            label: "唐山市",
            value: "130200"
        }, {
            label: "秦皇岛市",
            value: "130300"
        }, {
            label: "邯郸市",
            value: "130400"
        }, {
            label: "邢台市",
            value: "130500"
        }, {
            label: "保定市",
            value: "130600"
        }, {
            label: "张家口市",
            value: "130700"
        }, {
            label: "承德市",
            value: "130800"
        }, {
            label: "沧州市",
            value: "130900"
        }, {
            label: "廊坊市",
            value: "131000"
        }, {
            label: "衡水市",
            value: "131100"
        } ], [ {
            label: "太原市",
            value: "140100"
        }, {
            label: "大同市",
            value: "140200"
        }, {
            label: "阳泉市",
            value: "140300"
        }, {
            label: "长治市",
            value: "140400"
        }, {
            label: "晋城市",
            value: "140500"
        }, {
            label: "朔州市",
            value: "140600"
        }, {
            label: "晋中市",
            value: "140700"
        }, {
            label: "运城市",
            value: "140800"
        }, {
            label: "忻州市",
            value: "140900"
        }, {
            label: "临汾市",
            value: "141000"
        }, {
            label: "吕梁市",
            value: "141100"
        } ], [ {
            label: "呼和浩特市",
            value: "150100"
        }, {
            label: "包头市",
            value: "150200"
        }, {
            label: "乌海市",
            value: "150300"
        }, {
            label: "赤峰市",
            value: "150400"
        }, {
            label: "通辽市",
            value: "150500"
        }, {
            label: "鄂尔多斯市",
            value: "150600"
        }, {
            label: "呼伦贝尔市",
            value: "150700"
        }, {
            label: "巴彦淖尔市",
            value: "150800"
        }, {
            label: "乌兰察布市",
            value: "150900"
        }, {
            label: "兴安盟",
            value: "152200"
        }, {
            label: "锡林郭勒盟",
            value: "152500"
        }, {
            label: "阿拉善盟",
            value: "152900"
        } ], [ {
            label: "沈阳市",
            value: "210100"
        }, {
            label: "大连市",
            value: "210200"
        }, {
            label: "鞍山市",
            value: "210300"
        }, {
            label: "抚顺市",
            value: "210400"
        }, {
            label: "本溪市",
            value: "210500"
        }, {
            label: "丹东市",
            value: "210600"
        }, {
            label: "锦州市",
            value: "210700"
        }, {
            label: "营口市",
            value: "210800"
        }, {
            label: "阜新市",
            value: "210900"
        }, {
            label: "辽阳市",
            value: "211000"
        }, {
            label: "盘锦市",
            value: "211100"
        }, {
            label: "铁岭市",
            value: "211200"
        }, {
            label: "朝阳市",
            value: "211300"
        }, {
            label: "葫芦岛市",
            value: "211400"
        } ], [ {
            label: "长春市",
            value: "220100"
        }, {
            label: "吉林市",
            value: "220200"
        }, {
            label: "四平市",
            value: "220300"
        }, {
            label: "辽源市",
            value: "220400"
        }, {
            label: "通化市",
            value: "220500"
        }, {
            label: "白山市",
            value: "220600"
        }, {
            label: "松原市",
            value: "220700"
        }, {
            label: "白城市",
            value: "220800"
        }, {
            label: "延边朝鲜族自治州",
            value: "222400"
        } ], [ {
            label: "哈尔滨市",
            value: "230100"
        }, {
            label: "齐齐哈尔市",
            value: "230200"
        }, {
            label: "鸡西市",
            value: "230300"
        }, {
            label: "鹤岗市",
            value: "230400"
        }, {
            label: "双鸭山市",
            value: "230500"
        }, {
            label: "大庆市",
            value: "230600"
        }, {
            label: "伊春市",
            value: "230700"
        }, {
            label: "佳木斯市",
            value: "230800"
        }, {
            label: "七台河市",
            value: "230900"
        }, {
            label: "牡丹江市",
            value: "231000"
        }, {
            label: "黑河市",
            value: "231100"
        }, {
            label: "绥化市",
            value: "231200"
        }, {
            label: "大兴安岭地区",
            value: "232700"
        } ], [ {
            label: "上海市",
            value: "310100"
        } ], [ {
            label: "南京市",
            value: "320100"
        }, {
            label: "无锡市",
            value: "320200"
        }, {
            label: "徐州市",
            value: "320300"
        }, {
            label: "常州市",
            value: "320400"
        }, {
            label: "苏州市",
            value: "320500"
        }, {
            label: "南通市",
            value: "320600"
        }, {
            label: "连云港市",
            value: "320700"
        }, {
            label: "淮安市",
            value: "320800"
        }, {
            label: "盐城市",
            value: "320900"
        }, {
            label: "扬州市",
            value: "321000"
        }, {
            label: "镇江市",
            value: "321100"
        }, {
            label: "泰州市",
            value: "321200"
        }, {
            label: "宿迁市",
            value: "321300"
        } ], [ {
            label: "杭州市",
            value: "330100"
        }, {
            label: "宁波市",
            value: "330200"
        }, {
            label: "温州市",
            value: "330300"
        }, {
            label: "嘉兴市",
            value: "330400"
        }, {
            label: "湖州市",
            value: "330500"
        }, {
            label: "绍兴市",
            value: "330600"
        }, {
            label: "金华市",
            value: "330700"
        }, {
            label: "衢州市",
            value: "330800"
        }, {
            label: "舟山市",
            value: "330900"
        }, {
            label: "台州市",
            value: "331000"
        }, {
            label: "丽水市",
            value: "331100"
        } ], [ {
            label: "合肥市",
            value: "340100"
        }, {
            label: "芜湖市",
            value: "340200"
        }, {
            label: "蚌埠市",
            value: "340300"
        }, {
            label: "淮南市",
            value: "340400"
        }, {
            label: "马鞍山市",
            value: "340500"
        }, {
            label: "淮北市",
            value: "340600"
        }, {
            label: "铜陵市",
            value: "340700"
        }, {
            label: "安庆市",
            value: "340800"
        }, {
            label: "黄山市",
            value: "341000"
        }, {
            label: "滁州市",
            value: "341100"
        }, {
            label: "阜阳市",
            value: "341200"
        }, {
            label: "宿州市",
            value: "341300"
        }, {
            label: "六安市",
            value: "341500"
        }, {
            label: "亳州市",
            value: "341600"
        }, {
            label: "池州市",
            value: "341700"
        }, {
            label: "宣城市",
            value: "341800"
        } ], [ {
            label: "福州市",
            value: "350100"
        }, {
            label: "厦门市",
            value: "350200"
        }, {
            label: "莆田市",
            value: "350300"
        }, {
            label: "三明市",
            value: "350400"
        }, {
            label: "泉州市",
            value: "350500"
        }, {
            label: "漳州市",
            value: "350600"
        }, {
            label: "南平市",
            value: "350700"
        }, {
            label: "龙岩市",
            value: "350800"
        }, {
            label: "宁德市",
            value: "350900"
        } ], [ {
            label: "南昌市",
            value: "360100"
        }, {
            label: "景德镇市",
            value: "360200"
        }, {
            label: "萍乡市",
            value: "360300"
        }, {
            label: "九江市",
            value: "360400"
        }, {
            label: "新余市",
            value: "360500"
        }, {
            label: "鹰潭市",
            value: "360600"
        }, {
            label: "赣州市",
            value: "360700"
        }, {
            label: "吉安市",
            value: "360800"
        }, {
            label: "宜春市",
            value: "360900"
        }, {
            label: "抚州市",
            value: "361000"
        }, {
            label: "上饶市",
            value: "361100"
        } ], [ {
            label: "济南市",
            value: "370100"
        }, {
            label: "青岛市",
            value: "370200"
        }, {
            label: "淄博市",
            value: "370300"
        }, {
            label: "枣庄市",
            value: "370400"
        }, {
            label: "东营市",
            value: "370500"
        }, {
            label: "烟台市",
            value: "370600"
        }, {
            label: "潍坊市",
            value: "370700"
        }, {
            label: "济宁市",
            value: "370800"
        }, {
            label: "泰安市",
            value: "370900"
        }, {
            label: "威海市",
            value: "371000"
        }, {
            label: "日照市",
            value: "371100"
        }, {
            label: "莱芜市",
            value: "371200"
        }, {
            label: "临沂市",
            value: "371300"
        }, {
            label: "德州市",
            value: "371400"
        }, {
            label: "聊城市",
            value: "371500"
        }, {
            label: "滨州市",
            value: "371600"
        }, {
            label: "菏泽市",
            value: "371700"
        } ], [ {
            label: "郑州市",
            value: "410100"
        }, {
            label: "开封市",
            value: "410200"
        }, {
            label: "洛阳市",
            value: "410300"
        }, {
            label: "平顶山市",
            value: "410400"
        }, {
            label: "安阳市",
            value: "410500"
        }, {
            label: "鹤壁市",
            value: "410600"
        }, {
            label: "新乡市",
            value: "410700"
        }, {
            label: "焦作市",
            value: "410800"
        }, {
            label: "濮阳市",
            value: "410900"
        }, {
            label: "许昌市",
            value: "411000"
        }, {
            label: "漯河市",
            value: "411100"
        }, {
            label: "三门峡市",
            value: "411200"
        }, {
            label: "南阳市",
            value: "411300"
        }, {
            label: "商丘市",
            value: "411400"
        }, {
            label: "信阳市",
            value: "411500"
        }, {
            label: "周口市",
            value: "411600"
        }, {
            label: "驻马店市",
            value: "411700"
        }, {
            label: "省直辖县级行政区划",
            value: "419000"
        } ], [ {
            label: "武汉市",
            value: "420100"
        }, {
            label: "黄石市",
            value: "420200"
        }, {
            label: "十堰市",
            value: "420300"
        }, {
            label: "宜昌市",
            value: "420500"
        }, {
            label: "襄阳市",
            value: "420600"
        }, {
            label: "鄂州市",
            value: "420700"
        }, {
            label: "荆门市",
            value: "420800"
        }, {
            label: "孝感市",
            value: "420900"
        }, {
            label: "荆州市",
            value: "421000"
        }, {
            label: "黄冈市",
            value: "421100"
        }, {
            label: "咸宁市",
            value: "421200"
        }, {
            label: "随州市",
            value: "421300"
        }, {
            label: "恩施土家族苗族自治州",
            value: "422800"
        }, {
            label: "省直辖县级行政区划",
            value: "429000"
        } ], [ {
            label: "长沙市",
            value: "430100"
        }, {
            label: "株洲市",
            value: "430200"
        }, {
            label: "湘潭市",
            value: "430300"
        }, {
            label: "衡阳市",
            value: "430400"
        }, {
            label: "邵阳市",
            value: "430500"
        }, {
            label: "岳阳市",
            value: "430600"
        }, {
            label: "常德市",
            value: "430700"
        }, {
            label: "张家界市",
            value: "430800"
        }, {
            label: "益阳市",
            value: "430900"
        }, {
            label: "郴州市",
            value: "431000"
        }, {
            label: "永州市",
            value: "431100"
        }, {
            label: "怀化市",
            value: "431200"
        }, {
            label: "娄底市",
            value: "431300"
        }, {
            label: "湘西土家族苗族自治州",
            value: "433100"
        } ], [ {
            label: "广州市",
            value: "440100"
        }, {
            label: "韶关市",
            value: "440200"
        }, {
            label: "深圳市",
            value: "440300"
        }, {
            label: "珠海市",
            value: "440400"
        }, {
            label: "汕头市",
            value: "440500"
        }, {
            label: "佛山市",
            value: "440600"
        }, {
            label: "江门市",
            value: "440700"
        }, {
            label: "湛江市",
            value: "440800"
        }, {
            label: "茂名市",
            value: "440900"
        }, {
            label: "肇庆市",
            value: "441200"
        }, {
            label: "惠州市",
            value: "441300"
        }, {
            label: "梅州市",
            value: "441400"
        }, {
            label: "汕尾市",
            value: "441500"
        }, {
            label: "河源市",
            value: "441600"
        }, {
            label: "阳江市",
            value: "441700"
        }, {
            label: "清远市",
            value: "441800"
        }, {
            label: "东莞市",
            value: "441900"
        }, {
            label: "中山市",
            value: "442000"
        }, {
            label: "潮州市",
            value: "445100"
        }, {
            label: "揭阳市",
            value: "445200"
        }, {
            label: "云浮市",
            value: "445300"
        } ], [ {
            label: "南宁市",
            value: "450100"
        }, {
            label: "柳州市",
            value: "450200"
        }, {
            label: "桂林市",
            value: "450300"
        }, {
            label: "梧州市",
            value: "450400"
        }, {
            label: "北海市",
            value: "450500"
        }, {
            label: "防城港市",
            value: "450600"
        }, {
            label: "钦州市",
            value: "450700"
        }, {
            label: "贵港市",
            value: "450800"
        }, {
            label: "玉林市",
            value: "450900"
        }, {
            label: "百色市",
            value: "451000"
        }, {
            label: "贺州市",
            value: "451100"
        }, {
            label: "河池市",
            value: "451200"
        }, {
            label: "来宾市",
            value: "451300"
        }, {
            label: "崇左市",
            value: "451400"
        } ], [ {
            label: "海口市",
            value: "460100"
        }, {
            label: "三亚市",
            value: "460200"
        }, {
            label: "三沙市",
            value: "460300"
        }, {
            label: "儋州市",
            value: "460400"
        }, {
            label: "省直辖县级行政区划",
            value: "469000"
        } ], [ {
            label: "市辖区",
            value: "500100"
        }, {
            label: "县",
            value: "500200"
        } ], [ {
            label: "成都市",
            value: "510100"
        }, {
            label: "自贡市",
            value: "510300"
        }, {
            label: "攀枝花市",
            value: "510400"
        }, {
            label: "泸州市",
            value: "510500"
        }, {
            label: "德阳市",
            value: "510600"
        }, {
            label: "绵阳市",
            value: "510700"
        }, {
            label: "广元市",
            value: "510800"
        }, {
            label: "遂宁市",
            value: "510900"
        }, {
            label: "内江市",
            value: "511000"
        }, {
            label: "乐山市",
            value: "511100"
        }, {
            label: "南充市",
            value: "511300"
        }, {
            label: "眉山市",
            value: "511400"
        }, {
            label: "宜宾市",
            value: "511500"
        }, {
            label: "广安市",
            value: "511600"
        }, {
            label: "达州市",
            value: "511700"
        }, {
            label: "雅安市",
            value: "511800"
        }, {
            label: "巴中市",
            value: "511900"
        }, {
            label: "资阳市",
            value: "512000"
        }, {
            label: "阿坝藏族羌族自治州",
            value: "513200"
        }, {
            label: "甘孜藏族自治州",
            value: "513300"
        }, {
            label: "凉山彝族自治州",
            value: "513400"
        } ], [ {
            label: "贵阳市",
            value: "520100"
        }, {
            label: "六盘水市",
            value: "520200"
        }, {
            label: "遵义市",
            value: "520300"
        }, {
            label: "安顺市",
            value: "520400"
        }, {
            label: "毕节市",
            value: "520500"
        }, {
            label: "铜仁市",
            value: "520600"
        }, {
            label: "黔西南布依族苗族自治州",
            value: "522300"
        }, {
            label: "黔东南苗族侗族自治州",
            value: "522600"
        }, {
            label: "黔南布依族苗族自治州",
            value: "522700"
        } ], [ {
            label: "昆明市",
            value: "530100"
        }, {
            label: "曲靖市",
            value: "530300"
        }, {
            label: "玉溪市",
            value: "530400"
        }, {
            label: "保山市",
            value: "530500"
        }, {
            label: "昭通市",
            value: "530600"
        }, {
            label: "丽江市",
            value: "530700"
        }, {
            label: "普洱市",
            value: "530800"
        }, {
            label: "临沧市",
            value: "530900"
        }, {
            label: "楚雄彝族自治州",
            value: "532300"
        }, {
            label: "红河哈尼族彝族自治州",
            value: "532500"
        }, {
            label: "文山壮族苗族自治州",
            value: "532600"
        }, {
            label: "西双版纳傣族自治州",
            value: "532800"
        }, {
            label: "大理白族自治州",
            value: "532900"
        }, {
            label: "德宏傣族景颇族自治州",
            value: "533100"
        }, {
            label: "怒江傈僳族自治州",
            value: "533300"
        }, {
            label: "迪庆藏族自治州",
            value: "533400"
        } ], [ {
            label: "拉萨市",
            value: "540100"
        }, {
            label: "日喀则市",
            value: "540200"
        }, {
            label: "昌都市",
            value: "540300"
        }, {
            label: "林芝市",
            value: "540400"
        }, {
            label: "山南市",
            value: "540500"
        }, {
            label: "那曲地区",
            value: "542400"
        }, {
            label: "阿里地区",
            value: "542500"
        } ], [ {
            label: "西安市",
            value: "610100"
        }, {
            label: "铜川市",
            value: "610200"
        }, {
            label: "宝鸡市",
            value: "610300"
        }, {
            label: "咸阳市",
            value: "610400"
        }, {
            label: "渭南市",
            value: "610500"
        }, {
            label: "延安市",
            value: "610600"
        }, {
            label: "汉中市",
            value: "610700"
        }, {
            label: "榆林市",
            value: "610800"
        }, {
            label: "安康市",
            value: "610900"
        }, {
            label: "商洛市",
            value: "611000"
        } ], [ {
            label: "兰州市",
            value: "620100"
        }, {
            label: "嘉峪关市",
            value: "620200"
        }, {
            label: "金昌市",
            value: "620300"
        }, {
            label: "白银市",
            value: "620400"
        }, {
            label: "天水市",
            value: "620500"
        }, {
            label: "武威市",
            value: "620600"
        }, {
            label: "张掖市",
            value: "620700"
        }, {
            label: "平凉市",
            value: "620800"
        }, {
            label: "酒泉市",
            value: "620900"
        }, {
            label: "庆阳市",
            value: "621000"
        }, {
            label: "定西市",
            value: "621100"
        }, {
            label: "陇南市",
            value: "621200"
        }, {
            label: "临夏回族自治州",
            value: "622900"
        }, {
            label: "甘南藏族自治州",
            value: "623000"
        } ], [ {
            label: "西宁市",
            value: "630100"
        }, {
            label: "海东市",
            value: "630200"
        }, {
            label: "海北藏族自治州",
            value: "632200"
        }, {
            label: "黄南藏族自治州",
            value: "632300"
        }, {
            label: "海南藏族自治州",
            value: "632500"
        }, {
            label: "果洛藏族自治州",
            value: "632600"
        }, {
            label: "玉树藏族自治州",
            value: "632700"
        }, {
            label: "海西蒙古族藏族自治州",
            value: "632800"
        } ], [ {
            label: "银川市",
            value: "640100"
        }, {
            label: "石嘴山市",
            value: "640200"
        }, {
            label: "吴忠市",
            value: "640300"
        }, {
            label: "固原市",
            value: "640400"
        }, {
            label: "中卫市",
            value: "640500"
        } ], [ {
            label: "乌鲁木齐市",
            value: "650100"
        }, {
            label: "克拉玛依市",
            value: "650200"
        }, {
            label: "吐鲁番市",
            value: "650400"
        }, {
            label: "哈密市",
            value: "650500"
        }, {
            label: "昌吉回族自治州",
            value: "652300"
        }, {
            label: "博尔塔拉蒙古自治州",
            value: "652700"
        }, {
            label: "巴音郭楞蒙古自治州",
            value: "652800"
        }, {
            label: "阿克苏地区",
            value: "652900"
        }, {
            label: "克孜勒苏柯尔克孜自治州",
            value: "653000"
        }, {
            label: "喀什地区",
            value: "653100"
        }, {
            label: "和田地区",
            value: "653200"
        }, {
            label: "伊犁哈萨克自治州",
            value: "654000"
        }, {
            label: "塔城地区",
            value: "654200"
        }, {
            label: "阿勒泰地区",
            value: "654300"
        }, {
            label: "自治区直辖县级行政区划",
            value: "659000"
        } ], [ {
            label: "台北",
            value: "660100"
        }, {
            label: "高雄",
            value: "660200"
        }, {
            label: "基隆",
            value: "660300"
        }, {
            label: "台中",
            value: "660400"
        }, {
            label: "台南",
            value: "660500"
        }, {
            label: "新竹",
            value: "660600"
        }, {
            label: "嘉义",
            value: "660700"
        }, {
            label: "宜兰",
            value: "660800"
        }, {
            label: "桃园",
            value: "660900"
        }, {
            label: "苗栗",
            value: "661000"
        }, {
            label: "彰化",
            value: "661100"
        }, {
            label: "南投",
            value: "661200"
        }, {
            label: "云林",
            value: "661300"
        }, {
            label: "屏东",
            value: "661400"
        }, {
            label: "台东",
            value: "661500"
        }, {
            label: "花莲",
            value: "661600"
        }, {
            label: "澎湖",
            value: "661700"
        } ], [ {
            label: "香港岛",
            value: "670100"
        }, {
            label: "九龙",
            value: "670200"
        }, {
            label: "新界",
            value: "670300"
        } ], [ {
            label: "澳门半岛",
            value: "680100"
        }, {
            label: "氹仔岛",
            value: "680200"
        }, {
            label: "路环岛",
            value: "680300"
        }, {
            label: "路氹城",
            value: "680400"
        } ] ];
        l.default = t;
    },
    c08c: function(e, l) {
        var a = require("../siteinfo.js");
        e.exports = a;
    },
    c742: function(e, l, a) {
        var t, n = (t = a("3f31")) && t.__esModule ? t : {
            default: t
        };
        e.exports.Decrypt = function(e, l) {
            return l = n.default.enc.Utf8.parse(l), n.default.AES.decrypt(e, l, {
                iv: l,
                padding: n.default.pad.Pkcs7
            }).toString(n.default.enc.Utf8);
        };
    },
    c8ba: function(e, l) {
        var a = function() {
            return this;
        }();
        try {
            a = a || new Function("return this")();
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && (a = window);
        }
        e.exports = a;
    },
    e5c8: function(e, l, a) {
        (function(o) {
            e.exports = {
                verson: function() {
                    console.log("1.0");
                },
                navigate: function(e, l, a, t, n) {
                    switch (a = a || function() {}, t = t || function() {}, n = n || function() {}, 
                    l = l || "navigateTo") {
                      case "navigateTo":
                        o.navigateTo({
                            url: e,
                            success: a,
                            fail: t,
                            complete: n
                        });
                        break;

                      case "redirectTo":
                        o.redirectTo({
                            url: e,
                            success: a,
                            fail: t,
                            complete: n
                        });
                        break;

                      case "switchTab":
                        o.switchTab({
                            url: e,
                            success: a,
                            fail: t,
                            complete: n
                        });
                        break;

                      case "reLaunch":
                        o.reLaunch({
                            url: e,
                            success: a,
                            fail: t,
                            complete: n
                        });
                    }
                },
                back: function(e) {
                    e = e || 1, o.navigateBack({
                        delta: e
                    });
                },
                get: function(e, l, a, t, n) {
                    var r = this;
                    n = n || function() {
                        r.msg("网络请求失败");
                    }, a = a || {}, null != this.__before && (this.__before(), this.__before = null), 
                    o.request({
                        url: e,
                        data: l,
                        method: "GET",
                        dataType: "json",
                        header: a,
                        success: function(e) {
                            t(e.data);
                        },
                        fail: n,
                        complete: function() {
                            null != r.__after && (r.__after(), r.__after = null);
                        }
                    });
                },
                post: function(e, l, a, t, n, r) {
                    var u = this;
                    switch (r = r || function() {
                        u.msg("网络请求失败");
                    }, t = t || {}, a = a || "form", null != this.__before && (this.__before(), this.__before = null), 
                    a) {
                      case "form":
                        t["content-type"] = "application/x-www-form-urlencoded";
                        break;

                      case "json":
                        t["content-type"] = "application/json";
                        break;

                      default:
                        t["content-type"] = "application/x-www-form-urlencoded";
                    }
                    o.request({
                        url: e,
                        data: l,
                        method: "POST",
                        dataType: "json",
                        header: t,
                        success: function(e) {
                            n(e.data);
                        },
                        fail: r,
                        complete: function() {
                            null != u.__after && (u.__after(), u.__after = null);
                        }
                    });
                },
                __before: null,
                setBefore: function(e) {
                    this.__before = e;
                },
                __after: null,
                setAfter: function(e) {
                    this.__after = e;
                },
                setStorage: function(e) {
                    try {
                        for (var l in e) o.setStorageSync(l, e[l] + "");
                        return !0;
                    } catch (e) {
                        return !1;
                    }
                },
                getStorage: function(e) {
                    try {
                        var l = o.getStorageSync(e);
                        return "" != l && l;
                    } catch (e) {
                        return !1;
                    }
                },
                removeStorage: function(e) {
                    try {
                        return o.removeStorageSync(e), !0;
                    } catch (e) {
                        return !1;
                    }
                },
                clearStorage: function() {
                    try {
                        o.clearStorageSync();
                    } catch (e) {}
                },
                chooseImgs: function(e, l, a, t) {
                    e.count || (e.count = 1), e.sizeType || (e.sizeType = [ "original", "compressed" ]), 
                    e.sourceType || (e.sourceType = [ "album", "camera" ]), o.chooseImage({
                        count: e.count,
                        sizeType: e.sizeType,
                        sourceType: e.sourceType,
                        success: function(e) {
                            l(e.tempFilePaths);
                        },
                        fail: function(e) {
                            a && a(e);
                        },
                        complete: function(e) {
                            t && t(e);
                        }
                    });
                },
                getImageInfo: function(e, l, a, t) {
                    o.getImageInfo({
                        src: e,
                        success: function(e) {
                            l(e);
                        },
                        fail: function(e) {
                            a && a(e);
                        },
                        complete: function(e) {
                            t && t(e);
                        }
                    });
                },
                previewImage: function(e, l) {
                    o.previewImage({
                        urls: e,
                        current: l
                    });
                },
                system: function() {
                    try {
                        var e = o.getSystemInfoSync();
                        return e.model = e.model.replace(" ", ""), e.model = e.model.toLowerCase(), -1 != e.model.indexOf("iphonex") || -1 != e.model.indexOf("iphone11") ? (e.iPhoneXBottomHeightRpx = 50, 
                        e.iPhoneXBottomHeightPx = o.upx2px(50)) : (e.iPhoneXBottomHeightRpx = 0, e.iPhoneXBottomHeightPx = 0), 
                        e;
                    } catch (e) {
                        return null;
                    }
                },
                msg: function(e) {
                    o.showToast({
                        title: e,
                        icon: "none"
                    });
                },
                showLoading: function(e) {
                    o.showLoading({
                        title: e
                    });
                },
                setNavBar: function(e) {
                    e.title && o.setNavigationBarTitle({
                        title: e.title
                    }), e.color && o.setNavigationBarColor({
                        frontColor: e.color.frontColor,
                        backgroundColor: e.color.backgroundColor,
                        animation: {
                            duration: 400,
                            timingFunc: "easeIn"
                        }
                    }), e.loading ? o.showNavigationBarLoading() : o.hideNavigationBarLoading();
                },
                select: function(e, l) {
                    o.createSelectorQuery().select(e).boundingClientRect().exec(function(e) {
                        l(e[0]);
                    });
                },
                selectAll: function(e, l) {
                    o.createSelectorQuery().selectAll(e).boundingClientRect().exec(function(e) {
                        l(e[0]);
                    });
                },
                arrayConcat: function() {
                    for (var e = [], l = 0; l < arguments.length; l++) e = e.concat(arguments[l]);
                    return e;
                },
                arrayDrop: function(e, l, a) {
                    return l = l || 0, a = a || 1, e.splice(l, a), e;
                },
                arrayIndexOf: function(e, l) {
                    for (var a = -1, t = 0; t < e.length; t++) if (e[t] == l) return a = t;
                    return a;
                },
                arrayDifference: function(e, l) {
                    var a = new Set(l);
                    return e.filter(function(e) {
                        return !a.has(e);
                    });
                },
                arrayShuffle: function(e) {
                    for (var l = e.length; l; ) {
                        var a = Math.floor(Math.random() * l--), t = [ e[a], e[l] ];
                        e[l] = t[0], e[a] = t[1], console.log(a);
                    }
                    return e;
                },
                arraySum: function(e) {
                    return e.reduce(function(e, l) {
                        return e + l;
                    }, 0);
                },
                arrayAvg: function(e) {
                    return e.reduce(function(e, l) {
                        return e + l;
                    }, 0) / e.length;
                },
                arrayEach: function(e, l) {
                    for (var a = 0; a < e.length; a++) l(e[a], a);
                },
                random: function(e, l) {
                    switch (arguments.length) {
                      case 1:
                        return parseInt(Math.random() * e + 1, 10);

                      case 2:
                        return parseInt(Math.random() * (l - e + 1) + e, 10);

                      default:
                        return 0;
                    }
                },
                uuid: function(e) {
                    var l, a, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = [];
                    if (e) for (l = 0; l < e; l++) n[l] = t[0 | Math.random() * t.length]; else for (n[8] = n[13] = n[18] = n[23] = "-", 
                    n[14] = "4", l = 0; l < 36; l++) n[l] || (a = 0 | 16 * Math.random(), n[l] = t[19 == l ? 3 & a | 8 : a]);
                    return n.join("");
                },
                now: function(e, l) {
                    var a = new Date().getTime();
                    return l && (a += l), "number" == (e = e || "number") ? a : this.toDate(a / 1e3, "str");
                },
                toDate: function(e, l) {
                    e = parseInt(e);
                    var a = new Date();
                    e < 9e10 ? a.setTime(1e3 * e) : a.setTime(e);
                    var t = a.getFullYear(), n = (n = a.getMonth() + 1) < 10 ? "0" + n : n, r = (r = a.getDate()) < 10 ? "0" + r : r, u = (u = a.getHours()) < 10 ? "0" + u : u, e = (e = a.getMinutes()) < 10 ? "0" + e : e, a = (a = a.getSeconds()) < 10 ? "0" + a : a;
                    return "str" == l ? t + "-" + n + "-" + r + " " + u + ":" + e + ":" + a : [ t, n, r, u, e, a ];
                },
                toTimeStamp: function(e) {
                    var l = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);
                    if (null == l) {
                        var a = e.match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);
                        if (null == a) return console.log("时间格式错误 E001"), !1;
                        var t = parseInt(a[3]), n = parseInt(a[1]), r = parseInt(a[2]), u = parseInt(a[4]), o = parseInt(a[5]), a = parseInt(a[6]);
                    } else t = parseInt(l[1]), n = parseInt(l[2]), r = parseInt(l[3]), u = parseInt(l[4]), 
                    o = parseInt(l[5]), a = parseInt(l[6]);
                    return t < 1e3 || u < 0 || 24 < u || o < 0 || 60 < o || a < 0 || 60 < a ? (console.log("时间格式错误"), 
                    !1) : Date.parse(new Date(t, n - 1, r, u, o, a));
                },
                fromTime: function(e) {
                    e < 9e10 && (e *= 1e3);
                    var l = new Date().getTime() - e;
                    return (l = parseInt(l / 1e3)) < 180 ? "刚刚" : 180 <= l && l < 3600 ? parseInt(l / 60) + "分钟前" : 3600 <= l && l < 86400 ? parseInt(l / 3600) + "小时前" : 86400 <= l && l < 2592e3 ? parseInt(l / 86400) + "天前" : this.toDate(e, "str");
                },
                delay: function(e, l) {
                    return setTimeout(l, e);
                },
                interval: function(e, l) {
                    return setInterval(l, e);
                },
                assign: function(e, l, a) {
                    e[l] = a;
                },
                removeByKey: function(e, l) {
                    delete e[l];
                },
                each: function(e, l) {
                    for (var a in e) l(a, e[a]);
                },
                isEmptyObj: function(e) {
                    return "{}" === JSON.stringify(e);
                }
            };
        }).call(this, a("543d").default);
    },
    eb84: function($, e, l) {
        (function() {
            function l() {}
            function c(e) {
                return e instanceof c ? e : this instanceof c ? void (this._wrapped = e) : new c(e);
            }
            var t = Array.prototype, u = Object.prototype, e = Function.prototype, n = t.push, o = t.slice, v = u.toString, a = u.hasOwnProperty, r = Array.isArray, i = Object.keys, s = e.bind, b = Object.create;
            ($.exports = c).VERSION = "1.8.2";
            function f(n, r, e) {
                if (void 0 === r) return n;
                switch (null == e ? 3 : e) {
                  case 1:
                    return function(e) {
                        return n.call(r, e);
                    };

                  case 2:
                    return function(e, l) {
                        return n.call(r, e, l);
                    };

                  case 3:
                    return function(e, l, a) {
                        return n.call(r, e, l, a);
                    };

                  case 4:
                    return function(e, l, a, t) {
                        return n.call(r, e, l, a, t);
                    };
                }
                return function() {
                    return n.apply(r, arguments);
                };
            }
            function p(e, l, a) {
                return null == e ? c.identity : c.isFunction(e) ? f(e, l, a) : c.isObject(e) ? c.matcher(e) : c.property(e);
            }
            c.iteratee = function(e, l) {
                return p(e, l, 1 / 0);
            };
            function h(e) {
                return c.isObject(e) ? b ? b(e) : (l.prototype = e, e = new l(), l.prototype = null, 
                e) : {};
            }
            function d(e) {
                return "number" == typeof (e = null != e && e.length) && 0 <= e && e <= g;
            }
            var y = function(i, s) {
                return function(e) {
                    var l = arguments.length;
                    if (l < 2 || null == e) return e;
                    for (var a = 1; a < l; a++) for (var t = arguments[a], n = i(t), r = n.length, u = 0; u < r; u++) {
                        var o = n[u];
                        s && void 0 !== e[o] || (e[o] = t[o]);
                    }
                    return e;
                };
            }, g = Math.pow(2, 53) - 1;
            function _(o) {
                return function(e, l, a, t) {
                    l = f(l, t, 4);
                    var n = !d(e) && c.keys(e), r = (n || e).length, t = 0 < o ? 0 : r - 1;
                    return arguments.length < 3 && (a = e[n ? n[t] : t], t += o), function(e, l, a, t, n, r) {
                        for (;0 <= n && n < r; n += o) {
                            var u = t ? t[n] : n;
                            a = l(a, e[u], u, e);
                        }
                        return a;
                    }(e, l, a, n, t, r);
                };
            }
            c.each = c.forEach = function(e, l, a) {
                if (l = f(l, a), d(e)) for (n = 0, r = e.length; n < r; n++) l(e[n], n, e); else for (var t = c.keys(e), n = 0, r = t.length; n < r; n++) l(e[t[n]], t[n], e);
                return e;
            }, c.map = c.collect = function(e, l, a) {
                l = p(l, a);
                for (var t = !d(e) && c.keys(e), n = (t || e).length, r = Array(n), u = 0; u < n; u++) {
                    var o = t ? t[u] : u;
                    r[u] = l(e[o], o, e);
                }
                return r;
            }, c.reduce = c.foldl = c.inject = _(1), c.reduceRight = c.foldr = _(-1), c.find = c.detect = function(e, l, a) {
                a = d(e) ? c.findIndex(e, l, a) : c.findKey(e, l, a);
                if (void 0 !== a && -1 !== a) return e[a];
            }, c.filter = c.select = function(e, t, l) {
                var n = [];
                return t = p(t, l), c.each(e, function(e, l, a) {
                    t(e, l, a) && n.push(e);
                }), n;
            }, c.reject = function(e, l, a) {
                return c.filter(e, c.negate(p(l)), a);
            }, c.every = c.all = function(e, l, a) {
                l = p(l, a);
                for (var t = !d(e) && c.keys(e), n = (t || e).length, r = 0; r < n; r++) {
                    var u = t ? t[r] : r;
                    if (!l(e[u], u, e)) return !1;
                }
                return !0;
            }, c.some = c.any = function(e, l, a) {
                l = p(l, a);
                for (var t = !d(e) && c.keys(e), n = (t || e).length, r = 0; r < n; r++) {
                    var u = t ? t[r] : r;
                    if (l(e[u], u, e)) return !0;
                }
                return !1;
            }, c.contains = c.includes = c.include = function(e, l, a) {
                return d(e) || (e = c.values(e)), 0 <= c.indexOf(e, l, "number" == typeof a && a);
            }, c.invoke = function(e, a) {
                var t = o.call(arguments, 2), n = c.isFunction(a);
                return c.map(e, function(e) {
                    var l = n ? a : e[a];
                    return null == l ? l : l.apply(e, t);
                });
            }, c.pluck = function(e, l) {
                return c.map(e, c.property(l));
            }, c.where = function(e, l) {
                return c.filter(e, c.matcher(l));
            }, c.findWhere = function(e, l) {
                return c.find(e, c.matcher(l));
            }, c.max = function(e, t, l) {
                var a, n, r = -1 / 0, u = -1 / 0;
                if (null == t && null != e) for (var o = 0, i = (e = d(e) ? e : c.values(e)).length; o < i; o++) a = e[o], 
                r < a && (r = a); else t = p(t, l), c.each(e, function(e, l, a) {
                    n = t(e, l, a), (u < n || n === -1 / 0 && r === -1 / 0) && (r = e, u = n);
                });
                return r;
            }, c.min = function(e, t, l) {
                var a, n, r = 1 / 0, u = 1 / 0;
                if (null == t && null != e) for (var o = 0, i = (e = d(e) ? e : c.values(e)).length; o < i; o++) (a = e[o]) < r && (r = a); else t = p(t, l), 
                c.each(e, function(e, l, a) {
                    ((n = t(e, l, a)) < u || n === 1 / 0 && r === 1 / 0) && (r = e, u = n);
                });
                return r;
            }, c.shuffle = function(e) {
                for (var l, a = d(e) ? e : c.values(e), t = a.length, n = Array(t), r = 0; r < t; r++) (l = c.random(0, r)) !== r && (n[r] = n[l]), 
                n[l] = a[r];
                return n;
            }, c.sample = function(e, l, a) {
                return null == l || a ? (d(e) || (e = c.values(e)), e[c.random(e.length - 1)]) : c.shuffle(e).slice(0, Math.max(0, l));
            }, c.sortBy = function(e, t, l) {
                return t = p(t, l), c.pluck(c.map(e, function(e, l, a) {
                    return {
                        value: e,
                        index: l,
                        criteria: t(e, l, a)
                    };
                }).sort(function(e, l) {
                    var a = e.criteria, t = l.criteria;
                    if (a !== t) {
                        if (t < a || void 0 === a) return 1;
                        if (a < t || void 0 === t) return -1;
                    }
                    return e.index - l.index;
                }), "value");
            };
            e = function(r) {
                return function(a, t, e) {
                    var n = {};
                    return t = p(t, e), c.each(a, function(e, l) {
                        l = t(e, l, a);
                        r(n, e, l);
                    }), n;
                };
            };
            c.groupBy = e(function(e, l, a) {
                c.has(e, a) ? e[a].push(l) : e[a] = [ l ];
            }), c.indexBy = e(function(e, l, a) {
                e[a] = l;
            }), c.countBy = e(function(e, l, a) {
                c.has(e, a) ? e[a]++ : e[a] = 1;
            }), c.toArray = function(e) {
                return e ? c.isArray(e) ? o.call(e) : d(e) ? c.map(e, c.identity) : c.values(e) : [];
            }, c.size = function(e) {
                return null == e ? 0 : (d(e) ? e : c.keys(e)).length;
            }, c.partition = function(e, t, l) {
                t = p(t, l);
                var n = [], r = [];
                return c.each(e, function(e, l, a) {
                    (t(e, l, a) ? n : r).push(e);
                }), [ n, r ];
            }, c.first = c.head = c.take = function(e, l, a) {
                if (null != e) return null == l || a ? e[0] : c.initial(e, e.length - l);
            }, c.initial = function(e, l, a) {
                return o.call(e, 0, Math.max(0, e.length - (null == l || a ? 1 : l)));
            }, c.last = function(e, l, a) {
                if (null != e) return null == l || a ? e[e.length - 1] : c.rest(e, Math.max(0, e.length - l));
            }, c.rest = c.tail = c.drop = function(e, l, a) {
                return o.call(e, null == l || a ? 1 : l);
            }, c.compact = function(e) {
                return c.filter(e, c.identity);
            };
            function m(e, l, a, t) {
                for (var n = [], r = 0, u = t || 0, o = e && e.length; u < o; u++) {
                    var i = e[u];
                    if (d(i) && (c.isArray(i) || c.isArguments(i))) {
                        l || (i = m(i, l, a));
                        var s = 0, v = i.length;
                        for (n.length += v; s < v; ) n[r++] = i[s++];
                    } else a || (n[r++] = i);
                }
                return n;
            }
            function w(r) {
                return function(e, l, a) {
                    l = p(l, a);
                    for (var t = null != e && e.length, n = 0 < r ? 0 : t - 1; 0 <= n && n < t; n += r) if (l(e[n], n, e)) return n;
                    return -1;
                };
            }
            c.flatten = function(e, l) {
                return m(e, l, !1);
            }, c.without = function(e) {
                return c.difference(e, o.call(arguments, 1));
            }, c.uniq = c.unique = function(e, l, a, t) {
                if (null == e) return [];
                c.isBoolean(l) || (t = a, a = l, l = !1), null != a && (a = p(a, t));
                for (var n = [], r = [], u = 0, o = e.length; u < o; u++) {
                    var i = e[u], s = a ? a(i, u, e) : i;
                    l ? (u && r === s || n.push(i), r = s) : a ? c.contains(r, s) || (r.push(s), n.push(i)) : c.contains(n, i) || n.push(i);
                }
                return n;
            }, c.union = function() {
                return c.uniq(m(arguments, !0, !0));
            }, c.intersection = function(e) {
                if (null == e) return [];
                for (var l = [], a = arguments.length, t = 0, n = e.length; t < n; t++) {
                    var r = e[t];
                    if (!c.contains(l, r)) {
                        for (var u = 1; u < a && c.contains(arguments[u], r); u++) ;
                        u === a && l.push(r);
                    }
                }
                return l;
            }, c.difference = function(e) {
                var l = m(arguments, !0, !0, 1);
                return c.filter(e, function(e) {
                    return !c.contains(l, e);
                });
            }, c.zip = function() {
                return c.unzip(arguments);
            }, c.unzip = function(e) {
                for (var l = e && c.max(e, "length").length || 0, a = Array(l), t = 0; t < l; t++) a[t] = c.pluck(e, t);
                return a;
            }, c.object = function(e, l) {
                for (var a = {}, t = 0, n = e && e.length; t < n; t++) l ? a[e[t]] = l[t] : a[e[t][0]] = e[t][1];
                return a;
            }, c.indexOf = function(e, l, a) {
                var t = 0, n = e && e.length;
                if ("number" == typeof a) t = a < 0 ? Math.max(0, n + a) : a; else if (a && n) return e[t = c.sortedIndex(e, l)] === l ? t : -1;
                if (l != l) return c.findIndex(o.call(e, t), c.isNaN);
                for (;t < n; t++) if (e[t] === l) return t;
                return -1;
            }, c.lastIndexOf = function(e, l, a) {
                var t = e ? e.length : 0;
                if ("number" == typeof a && (t = a < 0 ? t + a + 1 : Math.min(t, a + 1)), l != l) return c.findLastIndex(o.call(e, 0, t), c.isNaN);
                for (;0 <= --t; ) if (e[t] === l) return t;
                return -1;
            }, c.findIndex = w(1), c.findLastIndex = w(-1), c.sortedIndex = function(e, l, a, t) {
                for (var n = (a = p(a, t, 1))(l), r = 0, u = e.length; r < u; ) {
                    var o = Math.floor((r + u) / 2);
                    a(e[o]) < n ? r = o + 1 : u = o;
                }
                return r;
            }, c.range = function(e, l, a) {
                arguments.length <= 1 && (l = e || 0, e = 0), a = a || 1;
                for (var t = Math.max(Math.ceil((l - e) / a), 0), n = Array(t), r = 0; r < t; r++, 
                e += a) n[r] = e;
                return n;
            };
            function S(e, l, a, t, n) {
                return t instanceof l ? (a = h(e.prototype), n = e.apply(a, n), c.isObject(n) ? n : a) : e.apply(a, n);
            }
            c.bind = function(l, a) {
                if (s && l.bind === s) return s.apply(l, o.call(arguments, 1));
                if (!c.isFunction(l)) throw new TypeError("Bind must be called on a function");
                var t = o.call(arguments, 2);
                return function e() {
                    return S(l, e, a, this, t.concat(o.call(arguments)));
                };
            }, c.partial = function(r) {
                var u = o.call(arguments, 1);
                return function e() {
                    for (var l = 0, a = u.length, t = Array(a), n = 0; n < a; n++) t[n] = u[n] === c ? arguments[l++] : u[n];
                    for (;l < arguments.length; ) t.push(arguments[l++]);
                    return S(r, e, this, this, t);
                };
            }, c.bindAll = function(e) {
                var l, a, t = arguments.length;
                if (t <= 1) throw new Error("bindAll must be passed function names");
                for (l = 1; l < t; l++) e[a = arguments[l]] = c.bind(e[a], e);
                return e;
            }, c.memoize = function(a, t) {
                function n(e) {
                    var l = n.cache, e = "" + (t ? t.apply(this, arguments) : e);
                    return c.has(l, e) || (l[e] = a.apply(this, arguments)), l[e];
                }
                return n.cache = {}, n;
            }, c.defer = c.partial(c.delay = function(e, l) {
                var a = o.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, a);
                }, l);
            }, c, 1), c.throttle = function(a, t, n) {
                var r, u, o, i = null, s = 0;
                n = n || {};
                function v() {
                    s = !1 === n.leading ? 0 : c.now(), i = null, o = a.apply(r, u), i || (r = u = null);
                }
                return function() {
                    var e = c.now();
                    s || !1 !== n.leading || (s = e);
                    var l = t - (e - s);
                    return r = this, u = arguments, l <= 0 || t < l ? (i && (clearTimeout(i), i = null), 
                    s = e, o = a.apply(r, u), i || (r = u = null)) : i || !1 === n.trailing || (i = setTimeout(v, l)), 
                    o;
                };
            }, c.debounce = function(l, a, t) {
                function n() {
                    var e = c.now() - i;
                    e < a && 0 <= e ? r = setTimeout(n, a - e) : (r = null, t || (s = l.apply(o, u), 
                    r || (o = u = null)));
                }
                var r, u, o, i, s;
                return function() {
                    o = this, u = arguments, i = c.now();
                    var e = t && !r;
                    return r = r || setTimeout(n, a), e && (s = l.apply(o, u), o = u = null), s;
                };
            }, c.wrap = function(e, l) {
                return c.partial(l, e);
            }, c.negate = function(e) {
                return function() {
                    return !e.apply(this, arguments);
                };
            }, c.compose = function() {
                var a = arguments, t = a.length - 1;
                return function() {
                    for (var e = t, l = a[t].apply(this, arguments); e--; ) l = a[e].call(this, l);
                    return l;
                };
            }, c.after = function(e, l) {
                return function() {
                    if (--e < 1) return l.apply(this, arguments);
                };
            }, c.once = c.partial(c.before = function(e, l) {
                var a;
                return function() {
                    return 0 < --e && (a = l.apply(this, arguments)), e <= 1 && (l = null), a;
                };
            }, 2);
            var O = !{
                toString: null
            }.propertyIsEnumerable("toString"), k = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
            function x(e, l) {
                var a = k.length, t = e.constructor, n = c.isFunction(t) && t.prototype || u, r = "constructor";
                for (c.has(e, r) && !c.contains(l, r) && l.push(r); a--; ) (r = k[a]) in e && e[r] !== n[r] && !c.contains(l, r) && l.push(r);
            }
            c.keys = function(e) {
                if (!c.isObject(e)) return [];
                if (i) return i(e);
                var l, a = [];
                for (l in e) c.has(e, l) && a.push(l);
                return O && x(e, a), a;
            }, c.allKeys = function(e) {
                if (!c.isObject(e)) return [];
                var l, a = [];
                for (l in e) a.push(l);
                return O && x(e, a), a;
            }, c.values = function(e) {
                for (var l = c.keys(e), a = l.length, t = Array(a), n = 0; n < a; n++) t[n] = e[l[n]];
                return t;
            }, c.mapObject = function(e, l, a) {
                l = p(l, a);
                for (var t, n = c.keys(e), r = n.length, u = {}, o = 0; o < r; o++) u[t = n[o]] = l(e[t], t, e);
                return u;
            }, c.pairs = function(e) {
                for (var l = c.keys(e), a = l.length, t = Array(a), n = 0; n < a; n++) t[n] = [ l[n], e[l[n]] ];
                return t;
            }, c.invert = function(e) {
                for (var l = {}, a = c.keys(e), t = 0, n = a.length; t < n; t++) l[e[a[t]]] = a[t];
                return l;
            }, c.functions = c.methods = function(e) {
                var l, a = [];
                for (l in e) c.isFunction(e[l]) && a.push(l);
                return a.sort();
            }, c.extend = y(c.allKeys), c.extendOwn = c.assign = y(c.keys), c.findKey = function(e, l, a) {
                l = p(l, a);
                for (var t, n = c.keys(e), r = 0, u = n.length; r < u; r++) if (l(e[t = n[r]], t, e)) return t;
            }, c.pick = function(e, l, a) {
                var t, n, r = {}, u = e;
                if (null == u) return r;
                c.isFunction(l) ? (n = c.allKeys(u), t = f(l, a)) : (n = m(arguments, !1, !1, 1), 
                t = function(e, l, a) {
                    return l in a;
                }, u = Object(u));
                for (var o = 0, i = n.length; o < i; o++) {
                    var s = n[o], v = u[s];
                    t(v, s, u) && (r[s] = v);
                }
                return r;
            }, c.omit = function(e, l, a) {
                var t;
                return l = c.isFunction(l) ? c.negate(l) : (t = c.map(m(arguments, !1, !1, 1), String), 
                function(e, l) {
                    return !c.contains(t, l);
                }), c.pick(e, l, a);
            }, c.defaults = y(c.allKeys, !0), c.create = function(e, l) {
                e = h(e);
                return l && c.extendOwn(e, l), e;
            }, c.clone = function(e) {
                return c.isObject(e) ? c.isArray(e) ? e.slice() : c.extend({}, e) : e;
            }, c.tap = function(e, l) {
                return l(e), e;
            }, c.isMatch = function(e, l) {
                var a = c.keys(l), t = a.length;
                if (null == e) return !t;
                for (var n = Object(e), r = 0; r < t; r++) {
                    var u = a[r];
                    if (l[u] !== n[u] || !(u in n)) return !1;
                }
                return !0;
            };
            function A(e, l, a, t) {
                if (e === l) return 0 !== e || 1 / e == 1 / l;
                if (null == e || null == l) return e === l;
                if (e instanceof c && (e = e._wrapped), l instanceof c && (l = l._wrapped), (u = v.call(e)) !== v.call(l)) return !1;
                switch (u) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + e == "" + l;

                  case "[object Number]":
                    return +e != +e ? +l != +l : 0 == +e ? 1 / +e == 1 / l : +e == +l;

                  case "[object Date]":
                  case "[object Boolean]":
                    return +e == +l;
                }
                var n = "[object Array]" === u;
                if (!n) {
                    if ("object" != (void 0 === e ? "undefined" : _typeof(e)) || "object" != (void 0 === l ? "undefined" : _typeof(l))) return !1;
                    var r = e.constructor, u = l.constructor;
                    if (r !== u && !(c.isFunction(r) && r instanceof r && c.isFunction(u) && u instanceof u) && "constructor" in e && "constructor" in l) return !1;
                }
                t = t || [];
                for (var o = (a = a || []).length; o--; ) if (a[o] === e) return t[o] === l;
                if (a.push(e), t.push(l), n) {
                    if ((o = e.length) !== l.length) return !1;
                    for (;o--; ) if (!A(e[o], l[o], a, t)) return !1;
                } else {
                    var i, s = c.keys(e), o = s.length;
                    if (c.keys(l).length !== o) return !1;
                    for (;o--; ) if (i = s[o], !c.has(l, i) || !A(e[i], l[i], a, t)) return !1;
                }
                return a.pop(), t.pop(), !0;
            }
            c.isEqual = function(e, l) {
                return A(e, l);
            }, c.isEmpty = function(e) {
                return null == e || (d(e) && (c.isArray(e) || c.isString(e) || c.isArguments(e)) ? 0 === e.length : 0 === c.keys(e).length);
            }, c.isElement = function(e) {
                return !(!e || 1 !== e.nodeType);
            }, c.isArray = r || function(e) {
                return "[object Array]" === v.call(e);
            }, c.isObject = function(e) {
                var l = void 0 === e ? "undefined" : _typeof(e);
                return "function" === l || "object" === l && !!e;
            }, c.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(l) {
                c["is" + l] = function(e) {
                    return v.call(e) === "[object " + l + "]";
                };
            }), c.isArguments(arguments) || (c.isArguments = function(e) {
                return c.has(e, "callee");
            }), "object" != ("undefined" == typeof Int8Array ? "undefined" : _typeof(Int8Array)) && (c.isFunction = function(e) {
                return "function" == typeof e || !1;
            }), c.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e));
            }, c.isNaN = function(e) {
                return c.isNumber(e) && e !== +e;
            }, c.isBoolean = function(e) {
                return !0 === e || !1 === e || "[object Boolean]" === v.call(e);
            }, c.isNull = function(e) {
                return null === e;
            }, c.isUndefined = function(e) {
                return void 0 === e;
            }, c.has = function(e, l) {
                return null != e && a.call(e, l);
            }, c.noConflict = function() {
                return root._ = previousUnderscore, this;
            }, c.identity = function(e) {
                return e;
            }, c.constant = function(e) {
                return function() {
                    return e;
                };
            }, c.noop = function() {}, c.property = function(l) {
                return function(e) {
                    return null == e ? void 0 : e[l];
                };
            }, c.propertyOf = function(l) {
                return null == l ? function() {} : function(e) {
                    return l[e];
                };
            }, c.matcher = c.matches = function(l) {
                return l = c.extendOwn({}, l), function(e) {
                    return c.isMatch(e, l);
                };
            }, c.times = function(e, l, a) {
                var t = Array(Math.max(0, e));
                l = f(l, a, 1);
                for (var n = 0; n < e; n++) t[n] = l(n);
                return t;
            }, c.random = function(e, l) {
                return null == l && (l = e, e = 0), e + Math.floor(Math.random() * (l - e + 1));
            }, c.now = Date.now || function() {
                return new Date().getTime();
            };
            e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, y = c.invert(e), r = function(l) {
                function a(e) {
                    return l[e];
                }
                var e = "(?:" + c.keys(l).join("|") + ")", t = RegExp(e), n = RegExp(e, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, t.test(e) ? e.replace(n, a) : e;
                };
            };
            c.escape = r(e), c.unescape = r(y), c.result = function(e, l, a) {
                l = null == e ? void 0 : e[l];
                return void 0 === l && (l = a), c.isFunction(l) ? l.call(e) : l;
            };
            var E = 0;
            c.uniqueId = function(e) {
                var l = ++E + "";
                return e ? e + l : l;
            }, c.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            function T(e) {
                return "\\" + I[e];
            }
            var P = /(.)^/, I = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, j = /\\|'|\r|\n|\u2028|\u2029/g;
            c.template = function(r, e, l) {
                !e && l && (e = l), e = c.defaults({}, e, c.templateSettings);
                var a = RegExp([ (e.escape || P).source, (e.interpolate || P).source, (e.evaluate || P).source ].join("|") + "|$", "g"), u = 0, o = "__p+='";
                r.replace(a, function(e, l, a, t, n) {
                    return o += r.slice(u, n).replace(j, T), u = n + e.length, l ? o += "'+\n((__t=(" + l + "))==null?'':_.escape(__t))+\n'" : a ? o += "'+\n((__t=(" + a + "))==null?'':__t)+\n'" : t && (o += "';\n" + t + "\n__p+='"), 
                    e;
                }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    var t = new Function(e.variable || "obj", "_", o);
                } catch (e) {
                    throw e.source = o, e;
                }
                l = function(e) {
                    return t.call(this, e, c);
                }, a = e.variable || "obj";
                return l.source = "function(" + a + "){\n" + o + "}", l;
            }, c.chain = function(e) {
                e = c(e);
                return e._chain = !0, e;
            };
            function C(e, l) {
                return e._chain ? c(l).chain() : l;
            }
            (c.mixin = function(a) {
                c.each(c.functions(a), function(e) {
                    var l = c[e] = a[e];
                    c.prototype[e] = function() {
                        var e = [ this._wrapped ];
                        return n.apply(e, arguments), C(this, l.apply(c, e));
                    };
                });
            })(c), c.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(l) {
                var a = t[l];
                c.prototype[l] = function() {
                    var e = this._wrapped;
                    return a.apply(e, arguments), "shift" !== l && "splice" !== l || 0 !== e.length || delete e[0], 
                    C(this, e);
                };
            }), c.each([ "concat", "join", "slice" ], function(e) {
                var l = t[e];
                c.prototype[e] = function() {
                    return C(this, l.apply(this._wrapped, arguments));
                };
            }), c.prototype.valueOf = c.prototype.toJSON = c.prototype.value = function() {
                return this._wrapped;
            }, c.prototype.toString = function() {
                return "" + this._wrapped;
            };
        }).call(this);
    },
    f0c5: function(e, l, a) {
        function t(e, l, a, t, n, r, u, o, i, s) {
            var v, c, b = "function" == typeof e ? e.options : e;
            if (i) {
                b.components || (b.components = {});
                var f, p = Object.prototype.hasOwnProperty;
                for (f in i) p.call(i, f) && !p.call(b.components, f) && (b.components[f] = i[f]);
            }
            return s && ((s.beforeCreate || (s.beforeCreate = [])).unshift(function() {
                this[s.__module] = this;
            }), (b.mixins || (b.mixins = [])).push(s)), l && (b.render = l, b.staticRenderFns = a, 
            b._compiled = !0), t && (b.functional = !0), r && (b._scopeId = "data-v-" + r), 
            u ? (v = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), 
                n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(u);
            }, b._ssrRegister = v) : n && (v = o ? function() {
                n.call(this, this.$root.$options.shadowRoot);
            } : n), v && (b.functional ? (b._injectStyles = v, c = b.render, b.render = function(e, l) {
                return v.call(l), c(e, l);
            }) : (o = b.beforeCreate, b.beforeCreate = o ? [].concat(o, v) : [ v ])), {
                exports: e,
                options: b
            };
        }
        a.d(l, "a", function() {
            return t;
        });
    },
    f318: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        l.default = {
            appid: "__UNI__379FB84"
        };
    }
} ]);