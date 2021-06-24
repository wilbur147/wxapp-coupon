require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/userA/account" ], {
    "027a": function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("6192")).default);
        }).call(this, a("543d").createPage);
    },
    "550a": function(e, t, a) {
        a.r(t);
        var n, o = a("9f00"), i = a.n(o);
        for (n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        t.default = i.a;
    },
    "5fcb": function(e, t, a) {},
    6192: function(e, t, a) {
        a.r(t);
        var n, o = a("9ff9"), i = a("550a");
        for (n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("9918");
        var r = a("f0c5"), o = Object(r.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    },
    9918: function(e, t, a) {
        var n = a("5fcb");
        a.n(n).a;
    },
    "9f00": function(e, t, a) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = getApp(), e = {
                data: function() {
                    return {
                        module_name: o.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: n.getStorageSync("userinfo"),
                        setting: n.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        logs: [],
                        page: 1,
                        loadingType: 0
                    };
                },
                components: {
                    gracePage: function() {
                        a.e("graceUI/components/gracePage").then(function() {
                            return resolve(a("1021"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceLoading: function() {
                        a.e("graceUI/components/graceLoading").then(function() {
                            return resolve(a("1d04"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceEmptyNew: function() {
                        a.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(a("f8df"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {},
                onLoad: function(e) {
                    var t = this, a = this;
                    this.module_name = o.globalData.module_name;
                    n.setStorageSync("invite_uid", e.uid), this.loadsetting(), null != n.getStorageSync("userinfo") && n.getStorageSync("userinfo") ? (this.userinfo = n.getStorageSync("userinfo"), 
                    this.dataLoad()) : n.login({
                        success: function(e) {
                            t.wxCode = e.code;
                            e = e.code;
                            o.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var t;
                                    e.data.errno || (n.setStorageSync("openid", e.data.data.openid), a.dataLoad(), n.setStorageSync("unionid", e.data.data.userinfo.unionid), 
                                    t = o.globalData.util.url("entry/wxapp/api", {
                                        m: o.globalData.module_name,
                                        o: "userinfo"
                                    }), n.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: n.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (n.setStorageSync("userinfo", e.userinfo), n.setStorageSync("pid_use_time", e.pid_time), 
                                            n.getStorageSync("pid_time") != n.getStorageSync("pid_use_time") && (n.setStorageSync("elmwm_url", ""), 
                                            n.setStorageSync("elmsc_url", ""), n.setStorageSync("elmwmposter", ""), n.setStorageSync("elmscposter", ""), 
                                            n.setStorageSync("pid_time", n.getStorageSync("pid_use_time"))), a.systemtype = n.getStorageSync("systemtype"), 
                                            a.userinfo = e.userinfo);
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                onShow: function(e) {
                    this.user_info();
                },
                onReachBottom: function() {
                    1 != this.loadingType && 2 != this.loadingType && this.dataLoad();
                },
                onPullDownRefresh: function() {
                    this.user_info();
                },
                methods: {
                    loadsetting: function() {
                        var t = this, e = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "setting"
                        });
                        n.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid")
                            },
                            success: function(e) {
                                e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                n.setStorageSync("setting", e.setting), t.setting = n.getStorageSync("setting"), 
                                t.systemtype = n.getStorageSync("systemtype");
                            }
                        });
                    },
                    user_info: function() {
                        var t = this, e = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "userinfo"
                        });
                        n.request({
                            url: e,
                            method: "GET",
                            data: {
                                openid: n.getStorageSync("openid"),
                                invite_uid: n.getStorageSync("invite_uid")
                            },
                            success: function(e) {
                                e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                e.openid && (n.setStorageSync("userinfo", e.userinfo), t.userinfo = e.userinfo, 
                                n.stopPullDownRefresh());
                            }
                        });
                    },
                    dataLoad: function() {
                        var t = this, e = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "logs"
                        });
                        this.loadingType = 1, n.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                page: this.page
                            },
                            success: function(e) {
                                1 == e.data.status && (e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                e = JSON.parse(e), t.logs = t.logs.concat(e.logs), t.logs = t.logs, t.page > e.total ? 0 == t.logs.length ? t.loadingType = 4 : t.loadingType = 2 : t.page == e.total ? t.loadingType = 2 : (t.page = t.page + 1, 
                                t.loadingType = 0, t.page = t.page));
                            }
                        });
                    },
                    openCash: function() {
                        n.navigateTo({
                            url: "cash"
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, a("543d").default);
    },
    "9ff9": function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
}, [ [ "027a", "common/runtime", "common/vendor" ] ] ]);