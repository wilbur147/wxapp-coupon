require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/userA/fans" ], {
    "0d8a": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "0ec2": function(e, t, n) {
        n.r(t);
        var a, r = n("0d8a"), o = n("3668");
        for (a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("4a77");
        var i = n("f0c5"), r = Object(i.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = r.exports;
    },
    "21c8": function(e, t, n) {},
    3668: function(e, t, n) {
        n.r(t);
        var a, r = n("9136"), o = n.n(r);
        for (a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    "4a77": function(e, t, n) {
        var a = n("21c8");
        n.n(a).a;
    },
    "7ee8": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("0cda"), t(n("66fd")), e(t(n("0ec2")).default);
        }).call(this, n("543d").createPage);
    },
    9136: function(e, t, n) {
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = getApp(), e = (n("10cd"), {
                data: function() {
                    return {
                        module_name: r.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: a.getStorageSync("userinfo"),
                        setting: a.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        swiperCurrentIndex: 0,
                        tabs: [ "全部" ],
                        mainHeight: 0,
                        orders: [ [] ],
                        pages: [ 1 ],
                        loadingTypes: [ 3 ],
                        pageLoading: !0,
                        type: ""
                    };
                },
                onReady: function() {
                    var n = this;
                    setTimeout(function() {
                        a.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(t) {
                            a.createSelectorQuery().select("#nav").fields({
                                size: !0
                            }, function(e) {
                                n.mainHeight = t.height - e.height, n.pageLoading = !1;
                            }).exec();
                        }).exec();
                    }, 1500);
                },
                onLoad: function(e) {
                    var t = this, n = this;
                    a.setStorageSync("invite_uid", e.uid), this.module_name = r.globalData.module_name, 
                    this.type = e.op, this.loadsetting(), null != a.getStorageSync("userinfo") && a.getStorageSync("userinfo") ? (this.getOrders(), 
                    this.userinfo = a.getStorageSync("userinfo")) : a.login({
                        success: function(e) {
                            t.wxCode = e.code;
                            e = e.code;
                            r.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var t;
                                    e.data.errno || (a.setStorageSync("openid", e.data.data.openid), n.getOrders(), 
                                    a.setStorageSync("unionid", e.data.data.userinfo.unionid), t = r.globalData.util.url("entry/wxapp/api", {
                                        m: r.globalData.module_name,
                                        o: "userinfo"
                                    }), a.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: a.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (a.setStorageSync("userinfo", e.userinfo), a.setStorageSync("pid_use_time", e.pid_time), 
                                            a.getStorageSync("pid_time") != a.getStorageSync("pid_use_time") && (a.setStorageSync("elmwm_url", ""), 
                                            a.setStorageSync("elmsc_url", ""), a.setStorageSync("elmwmposter", ""), a.setStorageSync("elmscposter", ""), 
                                            a.setStorageSync("pid_time", a.getStorageSync("pid_use_time"))), n.systemtype = a.getStorageSync("systemtype"), 
                                            n.userinfo = e.userinfo);
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                watch: {
                    swiperCurrentIndex: function(e) {
                        this.orders[this.swiperCurrentIndex].length < 1 && 3 == this.loadingTypes[this.swiperCurrentIndex] && this.getOrders();
                    }
                },
                methods: {
                    loadsetting: function() {
                        var t = this, e = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "setting"
                        });
                        a.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: a.getStorageSync("openid")
                            },
                            success: function(e) {
                                e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                a.setStorageSync("setting", e.setting), t.setting = e.setting;
                            }
                        });
                    },
                    navChange: function(e) {
                        this.swiperCurrentIndex = e;
                    },
                    swiperChange: function(e) {
                        e = e.detail.current;
                        this.swiperCurrentIndex = e;
                    },
                    scrollend: function(e) {
                        console.log(e), 3 == this.loadingTypes[this.swiperCurrentIndex] && this.getOrders();
                    },
                    getOrders: function() {
                        var t = this;
                        console.log("类型 : " + this.tabs[this.swiperCurrentIndex] + " 第" + this.pages[this.swiperCurrentIndex] + "页"), 
                        this.loadingTypes.splice(this.swiperCurrentIndex, 1, 1);
                        var e = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "fans"
                        }), n = {
                            openid: a.getStorageSync("openid"),
                            type: this.type,
                            status: this.tabs[this.swiperCurrentIndex],
                            page: this.pages[this.swiperCurrentIndex]
                        };
                        a.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: n,
                            success: function(e) {
                                e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                "ok" == e.status || "nomore" == e.status ? (1 == t.pages[t.swiperCurrentIndex] ? t.orders.splice(t.swiperCurrentIndex, 1, e.orders) : t.orders[t.swiperCurrentIndex] = t.orders[t.swiperCurrentIndex].concat(e.orders), 
                                t.pages[t.swiperCurrentIndex]++, "nomore" == e.status ? t.loadingTypes.splice(t.swiperCurrentIndex, 1, 2) : t.loadingTypes.splice(t.swiperCurrentIndex, 1, 3)) : "empty" == e.status ? (console.log("empty"), 
                                t.loadingTypes.splice(t.swiperCurrentIndex, 1, 5)) : "nomore" == e.status && (console.log("nomore"), 
                                t.loadingTypes.splice(t.swiperCurrentIndex, 1, 2));
                            }
                        });
                    }
                },
                components: {
                    gracePage: function() {
                        n.e("graceUI/components/gracePage").then(function() {
                            return resolve(n("1021"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceNavBar: function() {
                        n.e("graceUI/components/graceNavBar").then(function() {
                            return resolve(n("a631"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceEmpty: function() {
                        n.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(n("f8df"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceLoading: function() {
                        n.e("graceUI/components/graceLoading").then(function() {
                            return resolve(n("1d04"));
                        }.bind(null, n)).catch(n.oe);
                    }
                }
            });
            t.default = e;
        }).call(this, n("543d").default);
    }
}, [ [ "7ee8", "common/runtime", "common/vendor" ] ] ]);