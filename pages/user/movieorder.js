(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/movieorder" ], {
    "03b4": function(e, t, a) {
        var n = a("8ab2");
        a.n(n).a;
    },
    "0654": function(e, t, a) {
        a.d(t, "b", function() {
            return r;
        }), a.d(t, "c", function() {
            return i;
        }), a.d(t, "a", function() {
            return n;
        });
        var n = {
            sjTabBar: function() {
                return a.e("components/sj-tab-bar/sj-tab-bar").then(a.bind(null, "1ba9"));
            },
            sjMovietabBar: function() {
                return a.e("components/sj-movietab-bar/sj-movietab-bar").then(a.bind(null, "d433"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "4df1": function(e, t, a) {
        (function(i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = getApp(), e = (a("10cd"), {
                data: function() {
                    return {
                        module_name: o.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: i.getStorageSync("userinfo"),
                        setting: i.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        swiperCurrentIndex: 0,
                        tabs: [ "全部订单", "已出票", "已取消" ],
                        mainHeight: 0,
                        orders: [ [], [], [] ],
                        pages: [ 1, 1, 1 ],
                        loadingTypes: [ 3, 3, 3 ],
                        pageLoading: !0,
                        type: "",
                        pageKey: "",
                        height: 1334,
                        tabBar: []
                    };
                },
                onShow: function() {
                    var e = "tabbar";
                    0 == i.getStorageSync("setting").movie_tabbar_isindex && (e = "movietabbar"), this.tabBar = i.getStorageSync(e);
                    for (var t = 0; t < this.tabBar.list.length; t++) -1 != this.tabBar.list[t].url.indexOf("user/movieorder") && (this.pageKey = t);
                },
                onReady: function() {
                    var a = this;
                    setTimeout(function() {
                        i.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(t) {
                            i.createSelectorQuery().select("#nav").fields({
                                size: !0
                            }, function(e) {
                                a.mainHeight = t.height - e.height, a.pageLoading = !1;
                            }).exec();
                        }).exec();
                    }, 1500);
                },
                onLoad: function(e) {
                    var t = this, a = this;
                    this.module_name = o.globalData.module_name;
                    var n = e, r = "tabbar";
                    0 == i.getStorageSync("setting").movie_tabbar_isindex && (r = "movietabbar"), i.getStorageSync(r) ? this.tabBar = i.getStorageSync(r) : i.getStorageSync("userinfo") && this.loadtabbar(), 
                    i.setStorageSync("invite_uid", n.uid), this.loadsetting(), this.type = e.op, null != i.getStorageSync("userinfo") && i.getStorageSync("userinfo") ? (this.userinfo = i.getStorageSync("userinfo"), 
                    this.getOrders()) : i.login({
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
                                    e.data.errno || (i.setStorageSync("openid", e.data.data.openid), "undefined" != i.getStorageSync(r) && i.getStorageSync(r) || a.loadtabbar(), 
                                    a.getOrders(), i.setStorageSync("unionid", e.data.data.userinfo.unionid), t = o.globalData.util.url("entry/wxapp/api", {
                                        m: o.globalData.module_name,
                                        o: "userinfo"
                                    }), i.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: i.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (i.setStorageSync("userinfo", e.userinfo), i.setStorageSync("pid_use_time", e.pid_time), 
                                            i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && (i.setStorageSync("elmwm_url", ""), 
                                            i.setStorageSync("elmsc_url", ""), i.setStorageSync("elmwmposter", ""), i.setStorageSync("elmscposter", ""), 
                                            i.setStorageSync("pid_time", i.getStorageSync("pid_use_time"))), a.systemtype = i.getStorageSync("systemtype"), 
                                            a.userinfo = e.userinfo);
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
                    loadtabbar: function() {
                        var a = this, e = "tabbar";
                        0 == i.getStorageSync("setting").movie_tabbar_isindex && (e = "movietabbar"), "undefined" != i.getStorageSync(e) && i.getStorageSync(e) ? this.tabBar = i.getStorageSync(e) : (e = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: e
                        }), i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid")
                            },
                            success: function(e) {
                                var t = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(t), t = "tabbar";
                                0 == i.getStorageSync("setting").movie_tabbar_isindex && (t = "movietabbar"), a.tabBar = e.data.tabbar, 
                                i.setStorageSync(t, a.tabBar);
                            }
                        }));
                    },
                    change: function(e) {
                        var t = this.tabBar.list[e];
                        if (this.pageKey = e, 1 == i.getStorageSync("setting").movie_tabbar_isindex ? i.setStorageSync("pageKey", e) : i.setStorageSync("moviepageKey", e), 
                        1 == t.adtype) {
                            if (1 == t.appid_type && i.getStorageSync("mtwm_url")) return void i.navigateToMiniProgram({
                                appId: "wxde8ac0a21135c07d",
                                path: i.getStorageSync("mtwm_url")
                            });
                            if (1 == t.appid_type && !i.getStorageSync("mtwm_url")) return this.appid_type = 1, 
                            void this.meituan_urlFun();
                            if (2 == t.appid_type && i.getStorageSync("mtsc_url")) return void i.navigateToMiniProgram({
                                appId: "wxde8ac0a21135c07d",
                                path: i.getStorageSync("mtsc_url")
                            });
                            if (0 == t.appid_type) return void i.navigateToMiniProgram({
                                appId: t.appid,
                                path: t.path
                            });
                        }
                        if (5 != t.adtype) {
                            if (4 == t.adtype) {
                                i.setStorageSync("index_nav", t.url);
                                for (var a = getCurrentPages(), n = t.url.replace("../", ""), r = 0; r < a.length; r++) if (-1 != a[r].route.indexOf(n)) return void i.navigateBack({
                                    delta: r
                                });
                                if (-1 == t.url.indexOf("../index/") && -1 == t.url.indexOf("../user/") && -1 == t.url.indexOf("../movie/") && -1 == t.url.indexOf("../shop/") && -1 == t.url.indexOf("../kefu/")) return -1 != t.url.indexOf("../../../pages/index/") || -1 != t.url.indexOf("../../../pages/user/") || -1 != t.url.indexOf("../../../pages/kefu/") ? (n = t.url.replace("../../../pages/", "../"), 
                                void i.navigateTo({
                                    url: n
                                })) : -1 != t.url.indexOf("../../../pages/meituan/") || -1 != t.url.indexOf("../../../pages/elm/") || -1 != t.url.indexOf("../../../pages/eat/") ? (n = t.url.replace("../../../pages/", "../../pagesA/pages/"), 
                                void i.navigateTo({
                                    url: n
                                })) : -1 != t.url.indexOf("../../pagesA/pages/movie/") || -1 != t.url.indexOf("../../pagesA/pages/shop/") ? (n = t.url.replace("../../pagesA/pages/", "../"), 
                                void i.navigateTo({
                                    url: n
                                })) : -1 == t.url.indexOf("../../pagesA/pages/movieA/") && -1 == t.url.indexOf("../../pagesA/pages/shopA/") && -1 == t.url.indexOf("../../pagesA/pages/meituan/") && -1 == t.url.indexOf("../../pagesA/pages/elm/") && -1 == t.url.indexOf("../../pagesA/pages/eat/") && -1 == t.url.indexOf("../../pagesA/pages/userA/") && (-1 != t.url.indexOf("../meituan/") || -1 != t.url.indexOf("../elm/") || -1 != t.url.indexOf("../eat/")) ? (n = t.url.replace("../", "../../pagesA/pages/"), 
                                void i.navigateTo({
                                    url: n
                                })) : void i.navigateTo({
                                    url: t.url
                                });
                                i.navigateTo({
                                    url: t.url
                                });
                            }
                        } else i.navigateTo({
                            url: "../kefu/webview?return_url=" + encodeURIComponent(t.url)
                        });
                    },
                    fatherHeight: function(e) {
                        this.height = e;
                    },
                    loadsetting: function() {
                        var t = this, e = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "setting"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid")
                            },
                            success: function(e) {
                                e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                i.setStorageSync("setting", e.setting), t.setting = e.setting;
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
                        var a = this;
                        this.closeDialog2(), i.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? i.getUserProfile({
									desc: '用于完善会员资料',
                                    success: function(e) {
                                        a.userAuth(t, e, "login");
                                    }
                                }) : a.userAuth(t, null, "login");
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
                    userAuth: function(a, ee, n) {
                        var r = this;
                        "getUserProfile:ok" == ee.errMsg ? wx.login({
                            success: function(e) {
                                var t = o.globalData.util.url("entry/wxapp/api", {
                                    m: o.globalData.module_name,
                                    o: "userinfo"
                                }), e = {
                                    code: e.code,
                                    encryptedData: ee.encryptedData,
                                    iv: ee.iv,
                                    openid: i.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                i.request({
                                    url: t,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: e,
                                    success: function(e) {
                                        1 == e.data.status ? (e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                        e = JSON.parse(e), i.setStorageSync("userinfo", e.userinfo), r.userinfo = e.userinfo, 
                                        "login" == n && (r.closeDialog2(), i.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        })), r.load_myqrcode2()) : i.showToast({
                                            title: "您取消了请求",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        }) : i.showToast({
                            title: "获取用户信息失败",
                            icon: "none"
                        });
                    },
                    closeAlert: function() {
                        this.closeDialog2();
                    },
                    openmovieorder: function(e) {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/movieorderdetail?id=" + e.currentTarget.dataset.movieorderid
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
                        var e = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "movieorders"
                        }), a = {
                            openid: i.getStorageSync("openid"),
                            type: this.type,
                            status: this.tabs[this.swiperCurrentIndex],
                            page: this.pages[this.swiperCurrentIndex]
                        };
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: a,
                            success: function(e) {
                                e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
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
                        a.e("graceUI/components/gracePage").then(function() {
                            return resolve(a("1021"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceNavBar: function() {
                        a.e("graceUI/components/graceNavBar").then(function() {
                            return resolve(a("a631"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceEmpty: function() {
                        a.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(a("f8df"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceLoading: function() {
                        a.e("graceUI/components/graceLoading").then(function() {
                            return resolve(a("1d04"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceDialog: function() {
                        a.e("graceUI/components/graceDialog").then(function() {
                            return resolve(a("f85d"));
                        }.bind(null, a)).catch(a.oe);
                    }
                }
            });
            t.default = e;
        }).call(this, a("543d").default);
    },
    "8ab2": function(e, t, a) {},
    d5aa: function(e, t, a) {
        a.r(t);
        var n, r = a("4df1"), i = a.n(r);
        for (n in r) "default" !== n && function(e) {
            a.d(t, e, function() {
                return r[e];
            });
        }(n);
        t.default = i.a;
    },
    d700: function(e, t, a) {
        a.r(t);
        var n, r = a("0654"), i = a("d5aa");
        for (n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("03b4");
        var o = a("f0c5"), r = Object(o.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = r.exports;
    },
    e314: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("d700")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "e314", "common/runtime", "common/vendor" ] ] ]);