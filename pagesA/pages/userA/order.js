require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/userA/order" ], {
    "518d": function(e, n, o) {
        (function(r) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = getApp(), e = (o("10cd"), {
                data: function() {
                    return {
                        module_name: a.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: r.getStorageSync("userinfo"),
                        setting: r.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        swiperCurrentIndex: 0,
                        tabs: [ "全部", "已付款", "已完成", "已取消" ],
                        mainHeight: 0,
                        orders: [ [], [], [], [] ],
                        pages: [ 1, 1, 1, 1 ],
                        loadingTypes: [ 3, 3, 3, 3 ],
                        pageLoading: !0,
                        type: ""
                    };
                },
                onReady: function() {
                    var n = this;
                    setTimeout(function() {
                        r.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(t) {
                            r.createSelectorQuery().select("#nav").fields({
                                size: !0
                            }, function(e) {
                                n.mainHeight = t.height - e.height, n.pageLoading = !1;
                            }).exec();
                        }).exec();
                    }, 1500);
                },
                onLoad: function(e) {
                    var n = this;
                    r.setStorageSync("invite_uid", e.uid), this.module_name = a.globalData.module_name, 
                    this.setting = r.getStorageSync("setting"), this.type = e.op, "wjs" != this.type && "yjs" != this.type && "today" != this.type && "month" != this.type && "lastmonth" != this.type || (this.tabs = [ "全部" ], 
                    this.orders = [ [] ], this.pages = [ 1 ], this.loadingTypes = [ 3 ]), this.getOrders(), 
                    null != r.getStorageSync("userinfo") && r.getStorageSync("userinfo") || r.login({
                        success: function(e) {
                            n.wxCode = e.code;
                            e = e.code;
                            a.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var n;
                                    e.data.errno || (r.setStorageSync("openid", e.data.data.openid), r.setStorageSync("unionid", e.data.data.userinfo.unionid), 
                                    n = a.globalData.util.url("entry/wxapp/api", {
                                        m: a.globalData.module_name,
                                        o: "userinfo"
                                    }), r.request({
                                        url: n,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: r.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = a.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (r.setStorageSync("userinfo", e.userinfo), r.setStorageSync("pid_use_time", e.pid_time), 
                                            r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && (r.setStorageSync("elmwm_url", ""), 
                                            r.setStorageSync("elmsc_url", ""), r.setStorageSync("elmwmposter", ""), r.setStorageSync("elmscposter", ""), 
                                            r.setStorageSync("pid_time", r.getStorageSync("pid_use_time"))), t.systemtype = r.getStorageSync("systemtype"), 
                                            t.userinfo = e.userinfo);
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
                        var e = a.globalData.util.url("entry/wxapp/api", {
                            m: a.globalData.module_name,
                            o: "orders"
                        }), n = {
                            openid: r.getStorageSync("openid"),
                            type: this.type,
                            status: this.tabs[this.swiperCurrentIndex],
                            page: this.pages[this.swiperCurrentIndex]
                        };
                        r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: n,
                            success: function(e) {
                                e = a.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
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
                        o.e("graceUI/components/gracePage").then(function() {
                            return resolve(o("1021"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    graceNavBar: function() {
                        o.e("graceUI/components/graceNavBar").then(function() {
                            return resolve(o("a631"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    graceEmpty: function() {
                        o.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(o("f8df"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    graceLoading: function() {
                        o.e("graceUI/components/graceLoading").then(function() {
                            return resolve(o("1d04"));
                        }.bind(null, o)).catch(o.oe);
                    }
                }
            });
            n.default = e;
        }).call(this, o("543d").default);
    },
    "678d": function(e, t, n) {
        var r = n("de1d");
        n.n(r).a;
    },
    "6fd8": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "8f0b": function(e, t, n) {
        n.r(t);
        var r, a = n("518d"), o = n.n(a);
        for (r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    acac: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("0cda"), t(n("66fd")), e(t(n("f495")).default);
        }).call(this, n("543d").createPage);
    },
    de1d: function(e, t, n) {},
    f495: function(e, t, n) {
        n.r(t);
        var r, a = n("6fd8"), o = n("8f0b");
        for (r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("678d");
        var s = n("f0c5"), a = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = a.exports;
    }
}, [ [ "acac", "common/runtime", "common/vendor" ] ] ]);