require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/userA/creditorderdetail" ], {
    "07e6": function(t, e, a) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = getApp(), t = {
                data: function() {
                    return {
                        module_name: o.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: n.getStorageSync("userinfo"),
                        setting: n.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        mainHeight: 0,
                        pageLoading: !0,
                        orderid: "",
                        goodsDetail: []
                    };
                },
                onReady: function() {},
                onLoad: function(t) {
                    n.setStorageSync("invite_uid", t.uid), this.module_name = o.globalData.module_name, 
                    this.setting = n.getStorageSync("setting"), this.orderid = t.id, this.getOrders();
                },
                methods: {
                    bindCopy1: function() {
                        n.setClipboardData({
                            data: this.goodsDetail.orderid,
                            success: function(t) {
                                n.getClipboardData({
                                    success: function(t) {}
                                });
                            }
                        });
                    },
                    bindCopy2: function() {
                        n.setClipboardData({
                            data: this.goodsDetail.courier_number,
                            success: function(t) {
                                n.getClipboardData({
                                    success: function(t) {}
                                });
                            }
                        });
                    },
                    bindCopy3: function() {
                        n.setClipboardData({
                            data: this.goodsDetail.reback,
                            success: function(t) {
                                n.getClipboardData({
                                    success: function(t) {}
                                });
                            }
                        });
                    },
                    bindSh: function() {
                        var e = this, t = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "creditordersh"
                        }), a = {
                            openid: n.getStorageSync("openid"),
                            orderid: this.orderid
                        };
                        n.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: a,
                            success: function(t) {
                                t = o.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key);
                                1 == JSON.parse(t).shstatus ? (n.showToast({
                                    title: "确认收货成功",
                                    icon: "none"
                                }), e.goodsDetail.status = 2) : n.showToast({
                                    title: "确认收货失败",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    getOrders: function() {
                        var e = this, t = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "creditorderdetail"
                        }), a = {
                            openid: n.getStorageSync("openid"),
                            orderid: this.orderid
                        };
                        n.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: a,
                            success: function(t) {
                                t = o.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log(t), e.goodsDetail = t.detail;
                            }
                        });
                    }
                },
                components: {
                    gracePage: (a("e5c8"), function() {
                        a.e("graceUI/components/gracePage").then(function() {
                            return resolve(a("1021"));
                        }.bind(null, a)).catch(a.oe);
                    })
                }
            };
            e.default = t;
        }).call(this, a("543d").default);
    },
    "20aa": function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    4318: function(t, e, a) {
        a.r(e);
        var n, o = a("20aa"), i = a("c5bb");
        for (n in i) "default" !== n && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(n);
        a("72ee");
        var d = a("f0c5"), o = Object(d.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = o.exports;
    },
    "72ee": function(t, e, a) {
        var n = a("af4c");
        a.n(n).a;
    },
    af4c: function(t, e, a) {},
    b0c9: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("0cda"), e(a("66fd")), t(e(a("4318")).default);
        }).call(this, a("543d").createPage);
    },
    c5bb: function(t, e, a) {
        a.r(e);
        var n, o = a("07e6"), i = a.n(o);
        for (n in o) "default" !== n && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(n);
        e.default = i.a;
    }
}, [ [ "b0c9", "common/runtime", "common/vendor" ] ] ]);