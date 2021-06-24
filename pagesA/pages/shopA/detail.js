require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/shopA/detail" ], {
    "5b03": function(e, t, a) {
        a.r(t);
        var n, o = a("835d"), i = a("98c2");
        for (n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("eef5");
        var c = a("f0c5"), o = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    },
    "7cb8": function(e, t, a) {},
    "835d": function(e, t, a) {
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
    "841f": function(e, a, n) {
        (function(o) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var i = getApp(), e = {
                data: function() {
                    return {
                        module_name: i.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: o.getStorageSync("userinfo"),
                        setting: o.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        detail: null,
                        mainHeight: 300,
                        pageLoading: !0,
                        showWechat: !1,
                        showshare: !1,
                        showAlert: !1,
                        paper: "",
                        authorize: !1
                    };
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
                    graceShade: function() {
                        n.e("graceUI/components/graceShade").then(function() {
                            return resolve(n("31ed"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceDialog: function() {
                        n.e("graceUI/components/graceDialog").then(function() {
                            return resolve(n("f85d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceBottomDialog: function() {
                        n.e("graceUI/components/graceBottomDialog").then(function() {
                            return resolve(n("f7a1"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceLoading: function() {
                        n.e("graceUI/components/graceLoading").then(function() {
                            return resolve(n("1d04"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceAnalysis: function() {
                        n.e("graceUI/components/graceAnalysis").then(function() {
                            return resolve(n("b6ee"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {},
                onLoad: function(e) {
                    var a = this;
                    o.setStorageSync("invite_uid", e.uid), this.item_id = e.item_id, null != o.getStorageSync("userinfo") && o.getStorageSync("userinfo") || o.login({
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
                                            e.openid && (o.setStorageSync("userinfo", e.userinfo), t.userinfo = e.userinfo);
                                        }
                                    }));
                                }
                            });
                        }
                    });
                    e = i.globalData.util.url("entry/wxapp/api", {
                        m: i.globalData.module_name,
                        o: "item"
                    });
                    o.request({
                        url: e,
                        method: "POST",
                        data: {
                            item_id: this.item_id,
                            openid: o.getStorageSync("openid")
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            1 == e.data.status ? (e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                            e = JSON.parse(e), a.detail = e.detail) : (o.showToast({
                                title: "网络请求失败"
                            }), o.navigateBack({
                                delta: 1
                            })), o.hideLoading();
                        }
                    });
                },
                methods: {
                    backHome: function() {
                        o.navigateTo({
                            url: "../../../pages/index/index"
                        });
                    },
                    myitemorder: function() {
                        o.navigateTo({
                            url: "../../../pages/user/creditorder"
                        });
                    },
                    tapToOrder: function() {
                        var e, a = this, n = 0 < a.detail.market_price ? (e = "是否确认购买", "购买成功") : (e = "是否确认兑换", 
                        "兑换成功");
                        o.showModal({
                            title: "提示",
                            content: e,
                            showCancel: !0,
                            success: function(e) {
                                e.confirm && wx.chooseAddress({
                                    success: function(e) {
                                        var t = i.globalData.util.url("entry/wxapp/api", {
                                            m: i.globalData.module_name,
                                            o: "plan"
                                        });
                                        o.request({
                                            url: t,
                                            method: "GET",
                                            data: {
                                                item_id: a.item_id,
                                                openid: o.getStorageSync("openid"),
                                                userName: e.userName,
                                                provinceName: e.provinceName,
                                                cityName: e.cityName,
                                                countyName: e.countyName,
                                                detailInfo: e.detailInfo,
                                                telNumber: e.telNumber
                                            },
                                            success: function(e) {
                                                1 == e.data.status ? o.showModal({
                                                    title: "提示",
                                                    content: n,
                                                    showCancel: !1,
                                                    success: function(e) {
                                                        e.confirm && o.redirectTo({
                                                            url: "../../../pages/user/creditorder"
                                                        });
                                                    }
                                                }) : 2 == e.data.status ? i.globalData.util.request({
                                                    url: "entry/wxapp/pay",
                                                    data: {
                                                        m: i.globalData.module_name,
                                                        type: "item",
                                                        order_id: e.data.order_id
                                                    },
                                                    cachetime: 0,
                                                    success: function(e) {
                                                        e.data && e.data.data && !e.data.errno && wx.requestPayment({
                                                            timeStamp: e.data.data.timeStamp,
                                                            nonceStr: e.data.data.nonceStr,
                                                            package: e.data.data.package,
                                                            signType: "MD5",
                                                            paySign: e.data.data.paySign,
                                                            success: function(e) {
                                                                o.showModal({
                                                                    title: "系统提示",
                                                                    content: "支付成功",
                                                                    showCancel: !1,
                                                                    success: function(e) {
                                                                        e.confirm && wx.requestSubscribeMessage({
                                                                            tmplIds: o.getStorageSync("setting").item_tplid,
                                                                            success: function(e) {
                                                                                o.showToast({
                                                                                    title: "订阅成功",
                                                                                    icon: "none"
                                                                                }), o.redirectTo({
                                                                                    url: "../../../pages/user/creditorder"
                                                                                });
                                                                            },
                                                                            fail: function(e) {
                                                                                o.showToast({
                                                                                    title: "您已取消订阅",
                                                                                    icon: "none"
                                                                                }), o.redirectTo({
                                                                                    url: "../../../pages/user/creditorder"
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            },
                                                            fail: function(e) {
                                                                o.showModal({
                                                                    title: "系统提示",
                                                                    content: "支付失败",
                                                                    showCancel: !1
                                                                });
                                                            }
                                                        });
                                                    },
                                                    fail: function(e) {
                                                        o.showModal({
                                                            title: "系统提示",
                                                            content: e.data.message || "错误",
                                                            showCancel: !1,
                                                            success: function(e) {}
                                                        });
                                                    }
                                                }) : o.showToast({
                                                    title: e.data.msg,
                                                    icon: "none"
                                                });
                                            }
                                        });
                                    },
                                    fail: function(e) {
                                        o.showToast({
                                            title: "您已取消",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            };
            a.default = e;
        }).call(this, n("543d").default);
    },
    "98c2": function(e, t, a) {
        a.r(t);
        var n, o = a("841f"), i = a.n(o);
        for (n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        t.default = i.a;
    },
    b8b5: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("5b03")).default);
        }).call(this, a("543d").createPage);
    },
    eef5: function(e, t, a) {
        var n = a("7cb8");
        a.n(n).a;
    }
}, [ [ "b8b5", "common/runtime", "common/vendor" ] ] ]);