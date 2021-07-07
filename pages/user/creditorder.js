(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/creditorder" ], {
    "08e2": function(e, t, n) {},
    "0ee5": function(e, t, n) {
        var a = n("08e2");
        n.n(a).a;
    },
    a569: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("0cda"), t(n("66fd")), e(t(n("b88c")).default);
        }).call(this, n("543d").createPage);
    },
    b88c: function(e, t, n) {
        n.r(t);
        var a, o = n("cc5a"), r = n("bbea");
        for (a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        n("0ee5");
        var i = n("f0c5"), o = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    },
    bbea: function(e, t, n) {
        n.r(t);
        var a, o = n("c2c3"), r = n.n(o);
        for (a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = r.a;
    },
    c2c3: function(e, t, n) {
        (function(r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = getApp(), e = (n("10cd"), {
                data: function() {
                    return {
                        module_name: i.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: r.getStorageSync("userinfo"),
                        setting: r.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        swiperCurrentIndex: 0,
                        tabs: [ "全部订单", "已发货", "已完成" ],
                        mainHeight: 0,
                        orders: [ [], [], [] ],
                        pages: [ 1, 1, 1 ],
                        loadingTypes: [ 3, 3, 3 ],
                        pageLoading: !0,
                        type: ""
                    };
                },
                onShow: function() {},
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
                    var t = this, n = this;
                    r.setStorageSync("invite_uid", e.uid), this.loadsetting(), this.module_name = i.globalData.module_name, 
                    this.type = e.op, null != r.getStorageSync("userinfo") && r.getStorageSync("userinfo") ? (this.getOrders(), 
                    this.userinfo = r.getStorageSync("userinfo")) : r.login({
                        success: function(e) {
                            t.wxCode = e.code;
                            e = e.code;
                            i.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var t;
                                    e.data.errno || (r.setStorageSync("openid", e.data.data.openid), n.getOrders(), 
                                    r.setStorageSync("unionid", e.data.data.userinfo.unionid), t = i.globalData.util.url("entry/wxapp/api", {
                                        m: i.globalData.module_name,
                                        o: "userinfo"
                                    }), r.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: r.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (r.setStorageSync("userinfo", e.userinfo), n.userinfo = e.userinfo);
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
                        var t = this, e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "setting"
                        });
                        r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid")
                            },
                            success: function(e) {
                                e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                r.setStorageSync("setting", e.setting), t.setting = e.setting;
                            }
                        });
                    },
                    showDialog2: function() {
                        this.$refs.showAlert_login.open();
                    },
                    closeDialog2: function() {
                        this.$refs.showAlert_login.hide();
                    },
                    login: function(t) {
                        var n = this;
                        this.closeDialog2(), r.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? r.getUserProfile({
									desc: '用于完善会员资料',
                                    success: function(e) {
                                        n.userAuth(t, e, "login");
                                    }
                                }) : n.userAuth(t, null, "login");
                            }
                        });
                    },
                    getWxCode: function() {
                        var t = this;
                        wx.login({
                            success: function(e) {
                                t.wxCode = e.code;
                            }
                        });
                    },
                    userAuth: function(n, ee, a) {
                        var o = this;
                        "getUserProfile:ok" == ee.errMsg ? wx.login({
                            success: function(e) {
                                var t = i.globalData.util.url("entry/wxapp/api", {
                                    m: i.globalData.module_name,
                                    o: "userinfo"
                                }), e = {
                                    code: e.code,
                                    encryptedData: ee.encryptedData,
                                    iv: ee.iv,
                                    openid: r.getStorageSync("openid"),
                                    invite_uid: r.getStorageSync("invite_uid")
                                };
                                r.request({
                                    url: t,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: e,
                                    success: function(e) {
                                        1 == e.data.status ? (e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                        e = JSON.parse(e), r.setStorageSync("userinfo", e.userinfo), o.userinfo = e.userinfo, 
                                        "login" == a && (o.closeDialog2(), r.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        })), o.load_myqrcode2()) : r.showToast({
                                            title: "您取消了请求",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        }) : r.showToast({
                            title: "获取用户信息失败",
                            icon: "none"
                        });
                    },
                    closeAlert: function() {
                        this.closeDialog2();
                    },
                    creditorderdetail: function(e) {
                        r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? r.navigateTo({
                            url: "../../pagesA/pages/userA/creditorderdetail?id=" + e.currentTarget.dataset.creditorderid
                        }) : this.showDialog2();
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
                        var e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "creditorders"
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
                                e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
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
                    },
                    graceDialog: function() {
                        n.e("graceUI/components/graceDialog").then(function() {
                            return resolve(n("f85d"));
                        }.bind(null, n)).catch(n.oe);
                    }
                }
            });
            t.default = e;
        }).call(this, n("543d").default);
    },
    cc5a: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
}, [ [ "a569", "common/runtime", "common/vendor" ] ] ]);