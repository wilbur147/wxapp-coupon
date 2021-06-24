(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    3581: function(e, t, n) {
        n.r(t);
        var o, r = n("857f");
        for (o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("9ffd");
        var a = n("f0c5"), a = Object(a.a)(r.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = a.exports;
    },
    "54bb": function(e, t, n) {},
    "857f": function(e, t, n) {
        n.r(t);
        var o, r = n("ad3d"), a = n.n(r);
        for (o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    9334: function(e, t, r) {
        (function(e) {
            r("0cda");
            var t = o(r("66fd")), n = o(r("3581"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(t, e) {
                var n, o = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), o.push.apply(o, n)), o;
            }
            t.default.config.productionTip = !1, n.default.mpType = "app", e(new t.default(function(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(r), !0).forEach(function(e) {
                        var t, n;
                        t = o, e = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
                    });
                }
                return o;
            }({}, n.default))).$mount();
        }).call(this, r("543d").createApp);
    },
    "9ffd": function(e, t, n) {
        var o = n("54bb");
        n.n(o).a;
    },
    ad3d: function(e, t, n) {
        (function(o) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                onLaunch: function(e) {
                    var n = this;
                    o.hideTabBar(), o.setStorageSync("enter_scene", e.scene), 1154 == e.scene && o.setStorageSync("openid", "sharetimeline"), 
                    o.getSystemInfo({
                        success: function(e) {
                            -1 != e.system.toLowerCase().indexOf("ios") ? o.setStorageSync("systemtype", "ios") : o.setStorageSync("systemtype", "android"), 
                            n.globalData.statusBar = e.statusBarHeight;
                            var t = o.getMenuButtonBoundingClientRect();
                            n.globalData.custom = t, n.globalData.customBar = t.bottom + t.top - e.statusBarHeight;
                        }
                    });
                },
                globalData: {
                    compareVersion: function(e, t) {
                        e = e.split("."), t = t.split(".");
                        for (var n = Math.max(e.length, t.length); e.length < n; ) e.push("0");
                        for (;t.length < n; ) t.push("0");
                        for (var o = 0; o < n; o++) {
                            var r = parseInt(e[o], 10), a = parseInt(t[o], 10);
                            if (a < r) return 1;
                            if (r < a) return -1;
                        }
                        return 0;
                    },
                    util: n("0d88"),
                    crypt: n("c742"),
                    timeline: 0,
                    siteInfo: n("c08c"),
                    module_name: "asterye_waimaixia",
										userLocation: null, //用户的位置信息
										selectCity: null //用户切换的城市
                },
                onShow: function(e) {},
                onHide: function() {},
                methods: {}
            };
            t.default = e;
        }).call(this, n("543d").default);
    }
}, [ [ "9334", "common/runtime", "common/vendor" ] ] ]);