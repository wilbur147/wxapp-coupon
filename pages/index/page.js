(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/page" ], {
    6252: function(e, a, n) {
        (function(o) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var i = getApp(), r = n("5f91"), e = {
                data: function() {
                    return {
                        module_name: i.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: o.getStorageSync("userinfo"),
                        setting: o.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        page: {},
                        shop: {},
                        showWechat: !1,
                        userId: "",
                        demoHtml: ""
                    };
                },
                components: {
                    gracePage: function() {
                        n.e("graceUI/components/gracePage").then(function() {
                            return resolve(n("1021"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceAnalysis: function() {
                        n.e("graceUI/components/graceAnalysis").then(function() {
                            return resolve(n("b6ee"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceDialog: function() {
                        n.e("graceUI/components/graceDialog").then(function() {
                            return resolve(n("f85d"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {},
                onLoad: function(e) {
                    var a = this;
                    o.setStorageSync("invite_uid", e.uid);
                    var n = e.page_id, e = i.globalData.util.url("entry/wxapp/api", {
                        m: i.globalData.module_name,
                        o: "page"
                    });
                    o.request({
                        url: e,
                        method: "GET",
                        data: {
                            page_id: n
                        },
                        success: function(e) {
                            e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                            a.page = e.page, a.demoHtml = r.format(e.page.content), o.setNavigationBarTitle({
                                title: e.page.title
                            });
                        }
                    }), null != o.getStorageSync("userinfo") && o.getStorageSync("userinfo") || o.login({
                        success: function(e) {
                            a.wxCode = e.code;
                            e = e.code;
                            i.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var a;
                                    e.data.errno || (o.setStorageSync("openid", e.data.data.openid), o.setStorageSync("unionid", e.data.data.userinfo.unionid), 
                                    a = i.globalData.util.url("entry/wxapp/api", {
                                        m: i.globalData.module_name,
                                        o: "userinfo"
                                    }), o.request({
                                        url: a,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: o.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (o.setStorageSync("userinfo", e.userinfo), o.setStorageSync("pid_use_time", e.pid_time), 
                                            o.getStorageSync("pid_time") != o.getStorageSync("pid_use_time") && (o.setStorageSync("elmwm_url", ""), 
                                            o.setStorageSync("elmsc_url", ""), o.setStorageSync("elmwmposter", ""), o.setStorageSync("elmscposter", ""), 
                                            o.setStorageSync("pid_time", o.getStorageSync("pid_use_time"))), t.userinfo = e.userinfo, 
                                            t.getWxCode());
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                onShareAppMessage: function() {
                    return {
                        title: this.page.title,
                        imageUrl: this.page.thumb,
                        path: "pages/index/index?uid=" + o.getStorageSync("userinfo").user_id + "&to=page&page_id=" + this.page.page_id
                    };
                },
                methods: {
                    openHome: function() {
                        o.switchTab({
                            url: "../index/index?uid=" + o.getStorageSync("userinfo").user_id
                        });
                    }
                }
            };
            a.default = e;
        }).call(this, n("543d").default);
    },
    "72d5": function(e, t, a) {
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
    "8cee": function(e, t, a) {
        var n = a("a79f");
        a.n(n).a;
    },
    "9c79": function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("9faf")).default);
        }).call(this, a("543d").createPage);
    },
    "9faf": function(e, t, a) {
        a.r(t);
        var n, o = a("72d5"), i = a("af40");
        for (n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("8cee");
        var r = a("f0c5"), o = Object(r.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    },
    a79f: function(e, t, a) {},
    af40: function(e, t, a) {
        a.r(t);
        var n, o = a("6252"), i = a.n(o);
        for (n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        t.default = i.a;
    }
}, [ [ "9c79", "common/runtime", "common/vendor" ] ] ]);