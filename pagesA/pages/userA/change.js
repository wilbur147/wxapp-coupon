require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/userA/change" ], {
    "0fd9": function(e, t, a) {
        a.r(t);
        var n, o = a("2ed9"), i = a.n(o);
        for (n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        t.default = i.a;
    },
    "2ed9": function(e, a, i) {
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
                    this.user_info(), this.dataLoad(), this.setting = n.getStorageSync("setting"), null != n.getStorageSync("userinfo") && n.getStorageSync("userinfo") || n.login({
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
                            o: "creditlog"
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
                                e = JSON.parse(e), console.log(e), t.logs = t.logs.concat(e.logs), t.logs = t.logs, 
                                t.page > e.total ? 0 == t.logs.length ? t.loadingType = 4 : t.loadingType = 2 : t.page == e.total ? t.loadingType = 2 : (t.page = t.page + 1, 
                                t.loadingType = 0, t.page = t.page));
                            }
                        });
                    },
                    numChange: function(e) {
                        this.num = e.target.value;
                    },
                    clearInput: function() {
                        this.num = "";
                    },
                    formSubmit: function(e) {
                        var t = e.detail.value, e = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "creditchange"
                        });
                        "" != t.num && 0 != t.num ? n.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                num: t.num
                            },
                            success: function(e) {
                                1 == e.data.status ? n.showToast({
                                    title: e.data.msg
                                }) : n.showToast({
                                    title: e.data.msg,
                                    icon: "none"
                                });
                            }
                        }) : n.showToast({
                            title: "请输入兑换金额",
                            icon: "none"
                        });
                    }
                }
            };
            a.default = e;
        }).call(this, i("543d").default);
    },
    3358: function(e, t, a) {},
    "3bcd": function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "797c": function(e, t, a) {
        var n = a("3358");
        a.n(n).a;
    },
    a22f: function(e, t, a) {
        a.r(t);
        var n, o = a("3bcd"), i = a("0fd9");
        for (n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("797c");
        var u = a("f0c5"), o = Object(u.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    },
    ab3f: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("a22f")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "ab3f", "common/runtime", "common/vendor" ] ] ]);