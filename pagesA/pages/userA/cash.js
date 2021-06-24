require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/userA/cash" ], {
    "0e0a": function(t, e, a) {
        a.r(e);
        var n, o = a("c1d4"), i = a("65ca");
        for (n in i) "default" !== n && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(n);
        a("47ad");
        var u = a("f0c5"), o = Object(u.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = o.exports;
    },
    "47ad": function(t, e, a) {
        var n = a("a960");
        a.n(n).a;
    },
    "65ca": function(t, e, a) {
        a.r(e);
        var n, o = a("87af"), i = a.n(o);
        for (n in o) "default" !== n && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(n);
        e.default = i.a;
    },
    "6ca6": function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("0cda"), e(a("66fd")), t(e(a("0e0a")).default);
        }).call(this, a("543d").createPage);
    },
    "87af": function(e, a, i) {
        (function(n) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var o = getApp(), e = {
                data: function() {
                    return {
                        module_name: o.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: n.getStorageSync("userinfo"),
                        setting: n.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        num: "",
                        logs: [],
                        page: 1,
                        loadingType: 0
                    };
                },
                components: {
                    gracePage: function() {
                        i.e("graceUI/components/gracePage").then(function() {
                            return resolve(i("1021"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceLoading: function() {
                        i.e("graceUI/components/graceLoading").then(function() {
                            return resolve(i("1d04"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceEmptyNew: function() {
                        i.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(i("f8df"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                props: {},
                onLoad: function(e) {
                    var a = this;
                    n.setStorageSync("invite_uid", e.uid), this.module_name = o.globalData.module_name, 
                    this.user_info(), this.dataLoad(), this.setting = n.getStorageSync("setting"), n.setNavigationBarTitle({
                        title: n.getStorageSync("setting").cash_tixian_title
                    }), null != n.getStorageSync("userinfo") && n.getStorageSync("userinfo") || n.login({
                        success: function(e) {
                            a.wxCode = e.code;
                            e = e.code;
                            o.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var a;
                                    e.data.errno || (n.setStorageSync("openid", e.data.data.openid), n.setStorageSync("unionid", e.data.data.userinfo.unionid), 
                                    a = o.globalData.util.url("entry/wxapp/api", {
                                        m: o.globalData.module_name,
                                        o: "userinfo"
                                    }), n.request({
                                        url: a,
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
                                            n.setStorageSync("pid_time", n.getStorageSync("pid_use_time"))), t.systemtype = n.getStorageSync("systemtype"), 
                                            t.userinfo = e.userinfo);
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                onPullDownRefresh: function() {
                    this.user_info(), this.logs = [], this.page = 1, this.loadingType = 0, this.dataLoad();
                },
                onReachBottom: function() {
                    1 != this.loadingType && 2 != this.loadingType && this.dataLoad();
                },
                methods: {
                    info: function() {
                        n.navigateTo({
                            url: "info"
                        });
                    },
                    user_info: function() {
                        var e = this, t = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "userinfo"
                        });
                        n.request({
                            url: t,
                            method: "GET",
                            data: {
                                openid: n.getStorageSync("openid"),
                                invite_uid: n.getStorageSync("invite_uid")
                            },
                            success: function(t) {
                                t = o.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                t.openid && (n.setStorageSync("userinfo", t.userinfo), e.userinfo = t.userinfo, 
                                n.stopPullDownRefresh());
                            }
                        });
                    },
                    dataLoad: function() {
                        var e = this, t = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "cashlog"
                        });
                        this.loadingType = 1, n.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                page: this.page
                            },
                            success: function(t) {
                                1 == t.data.status && (t = o.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), 
                                t = JSON.parse(t), console.log(t), e.logs = e.logs.concat(t.logs), e.logs = e.logs, 
                                e.page > t.total ? 0 == e.logs.length ? e.loadingType = 4 : e.loadingType = 2 : e.page == t.total ? e.loadingType = 2 : (e.page = e.page + 1, 
                                e.loadingType = 0, e.page = e.page));
                            }
                        });
                    },
                    numChange: function(t) {
                        this.num = t.target.value;
                    },
                    clearInput: function() {
                        this.num = "";
                    },
                    formSubmit: function(t) {
                        var e = t.detail.value, t = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "cash"
                        });
                        "" != e.num && 0 != e.num ? n.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                num: e.num
                            },
                            success: function(t) {
                                1 == t.data.status ? n.showToast({
                                    title: t.data.msg
                                }) : n.showToast({
                                    title: t.data.msg,
                                    icon: "none"
                                });
                            }
                        }) : n.showToast({
                            title: n.getStorageSync("setting").cash_tixian_qtxtxje,
                            icon: "none"
                        });
                    }
                }
            };
            a.default = e;
        }).call(this, i("543d").default);
    },
    a960: function(t, e, a) {},
    c1d4: function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
}, [ [ "6ca6", "common/runtime", "common/vendor" ] ] ]);