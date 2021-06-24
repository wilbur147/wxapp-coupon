require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/userA/ranking" ], {
    "129a": function(e, t, a) {
        a.r(t);
        var n, o = a("23dd"), i = a.n(o);
        for (n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        t.default = i.a;
    },
    "23dd": function(e, a, i) {
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
                        rankingList: [],
                        pageLoading: !0,
                        myranking: "",
                        myfans: 0
                    };
                },
                onLoad: function(e) {
                    var a = this;
                    n.setStorageSync("invite_uid", e.uid), this.module_name = o.globalData.module_name, 
                    this.setting = n.getStorageSync("setting"), this.userinfo = n.getStorageSync("userinfo"), 
                    null != n.getStorageSync("userinfo") && n.getStorageSync("userinfo") || n.login({
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
                    e = o.globalData.util.url("entry/wxapp/api", {
                        m: o.globalData.module_name,
                        o: "ranking"
                    });
                    n.request({
                        url: e,
                        method: "GET",
                        data: {
                            openid: n.getStorageSync("openid")
                        },
                        success: function(e) {
                            e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                            console.log(e), a.rankingList = e.data.ranking, a.myranking = e.data.myranking, 
                            a.myfans = e.data.myfans, a.pageLoading = !1;
                        }
                    });
                },
                methods: {},
                components: {
                    gracePage: function() {
                        i.e("graceUI/components/gracePage").then(function() {
                            return resolve(i("1021"));
                        }.bind(null, i)).catch(i.oe);
                    }
                }
            };
            a.default = e;
        }).call(this, i("543d").default);
    },
    "452b": function(e, t, a) {
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
    "76a5": function(e, t, a) {
        var n = a("b147");
        a.n(n).a;
    },
    b147: function(e, t, a) {},
    c22e: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("fbbe")).default);
        }).call(this, a("543d").createPage);
    },
    fbbe: function(e, t, a) {
        a.r(t);
        var n, o = a("452b"), i = a("129a");
        for (n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("76a5");
        var r = a("f0c5"), o = Object(r.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    }
}, [ [ "c22e", "common/runtime", "common/vendor" ] ] ]);