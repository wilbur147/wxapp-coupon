
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "15e8": function(e, t, a) {
        a.r(t);
        var i, n = a("f368"), o = a.n(n);
        for (i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = o.a;
    },
    "44f2": function(e, t, a) {},
    "47e9": function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {
            return i;
        });
        var i = {
            addMiniTip: function() {
                return Promise.all([ a.e("common/vendor"), a.e("components/add-mini-tip/add-mini-tip") ]).then(a.bind(null, "00a6"));
            },
            sjTabBar: function() {
                return a.e("components/sj-tab-bar/sj-tab-bar").then(a.bind(null, "1ba9"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "4d92": function(e, t, a) {
        var i = a("44f2");
        a.n(i).a;
    },
    b628: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("b7bc")).default);
        }).call(this, a("543d").createPage);
    },
    b7bc: function(e, t, a) {
        a.r(t);
        var i, n = a("47e9"), o = a("15e8");
        for (i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        a("4d92");
        var r = a("f0c5"), n = Object(r.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = n.exports;
    },
    f368: function(e, t, i) {
        (function(r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
						const request = require('../../utils/request')	
					require('../../common/main.js');
            var a = null, g = getApp(), e = {
                data: function() {
                    return {
                        warn_num: r.getStorageSync("userinfo").s_1_num,
                        module_name: g.globalData.module_name,
                        appid_type: 0,
                        movielist: [],
                        movie_hotshuliang: 0,
                        qudao_tkl: "",
                        is_qudao_tkl: 0,
                        showAlert_taobaoauth: !1,
                        showAlert_login: !1,
                        elm_url: [],
                        meituan_url: [],
                        wxCode: "",
                        userinfo: r.getStorageSync("userinfo"),
                        waimaidaohang: [],
                        waimailist: [],
                        systemtype: r.getStorageSync("systemtype"),
                        setting: r.getStorageSync("setting"),
                        showAlert_meituan: !1,
                        kwd: "",
                        showAlert: !1,
                        currentCateIndex: 0,
                        leftTo: "cate1",
                        productListTo: "",
                        mainCate: [],
                        allProducts: [],
                        allProducts_temp: [],
                        mainHeight: 500,
                        scrollTimer: null,
                        swiperItems: [],
                        contact_title: "",
                        contact_title_text: "",
                        contact_title_desc: "",
                        contact_id: "",
                        contact_type: "",
                        contact_thumb: "",
                        youlikes: [],
                        indexCateAndProducts: [],
                        top: 0,
                        footerCurrent: 0,
                        showToast_login: !1,
                        pageKey: 0,
                        height: "",
                        tabBar: [],
                        elmwm_act_id: 0,
                        mtpic: 0
                    };
                },
                components: {
                    gracePage: function() {
                        i.e("graceUI/components/gracePage").then(function() {
                            return resolve(i("1021"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceSearch: function() {
                        i.e("graceUI/components/graceSearch").then(function() {
                            return resolve(i("de21"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceSwiper: function() {
                        i.e("graceUI/components/graceSwiper").then(function() {
                            return resolve(i("9fc3"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    addMiniTip: function() {
                        Promise.all([ i.e("common/vendor"), i.e("components/add-mini-tip/add-mini-tip") ]).then(function() {
                            return resolve(i("00a6"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceDialog: function() {
                        i.e("graceUI/components/graceDialog").then(function() {
                            return resolve(i("f85d"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceCoupons: function() {
                        i.e("graceUI/components/graceCoupons").then(function() {
                            return resolve(i("6546"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceFullLoading: function() {
                        i.e("graceUI/components/graceFullLoading").then(function() {
                            return resolve(i("3be5"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceImg: function() {
                        i.e("graceUI/components/graceImg").then(function() {
                            return resolve(i("1d6e"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                props: {},
                onReady: function() {
                    this.autoUpdate();
                },
                onShow: function() {
                    if (this.tabBar = r.getStorageSync("tabbar"), "undefined" != this.tabBar.list) for (var e = 0; e < this.tabBar.list.length; e++) -1 != this.tabBar.list[e].url.indexOf("index/index") && (this.pageKey = e);
                    var t;
                    r.getStorageSync("openid") && (t = g.globalData.util.url("entry/wxapp/api", {
                        m: g.globalData.module_name,
                        o: "chkpid"
                    }), r.request({
                        url: t,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            openid: r.getStorageSync("openid")
                        },
                        success: function(e) {
                            e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                            r.setStorageSync("pid_use_time", e), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && (r.setStorageSync("elmwm_url", ""), 
                            r.setStorageSync("elmsc_url", ""), r.setStorageSync("elmwmposter", ""), r.setStorageSync("elmscposter", ""), 
                            r.setStorageSync("pid_time", r.getStorageSync("pid_use_time")));
                        }
                    }), t = g.globalData.util.url("entry/wxapp/api", {
                        m: g.globalData.module_name,
                        o: "subscribemessage"
                    }), r.request({
                        url: t,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            openid: r.getStorageSync("openid"),
                            type: 2
                        },
                        success: function(e) {
                            r.setStorageSync("warn_daynum", e.data.warm_daynum);
                        }
                    })), a && a.show().catch(function(e) {
                        console.error(e);
                    });
                },
                onPullDownRefresh: function() {
                    var e = this;
                    e.loadsetting(), e.loadWaimaidaohang(), e.loadWaimailist(), e.loadmovielist(), e.load_goods(), 
                    e.loadtabbar(), e.loadSwiperitems();
                },
                onLoad: function(e) {
                    var t = this, a = this;
                    this.module_name = g.globalData.module_name;
                    var i = e;
                    r.setStorageSync("invite_uid", i.uid), a.loadsetting(), a.loadSwiperitems(), a.loadWaimaidaohang(), 
                    a.loadWaimailist(), a.loadmovielist(), a.load_goods(), r.login({
                        success: function(e) {
                            t.wxCode = e.code;
                            e = e.code;
                            g.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var t;
                                    e.data.errno || (r.setStorageSync("openid", e.data.data.openid), a.loadtabbar(), 
                                    a.loadSwiperitems(), a.loadWaimaidaohang(), a.loadWaimailist(), t = g.globalData.util.url("entry/wxapp/api", {
                                        m: g.globalData.module_name,
                                        o: "userinfo"
                                    }), r.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: r.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (r.setStorageSync("userinfo", e.userinfo), r.setStorageSync("pid_use_time", e.pid_time), 
                                            r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && (r.setStorageSync("elmwm_url", ""), 
                                            r.setStorageSync("elmsc_url", ""), r.setStorageSync("elmwmposter", ""), r.setStorageSync("elmscposter", ""), 
                                            r.setStorageSync("pid_time", r.getStorageSync("pid_use_time"))), a.systemtype = r.getStorageSync("systemtype"), 
                                            a.userinfo = e.userinfo, a.getWxCode(), r.getStorageSync("userinfo").s_1_num ? a.warn_num = r.getStorageSync("userinfo").s_1_num : a.warn_num = 0, 
                                            i.to && ("meituan" == i.to ? wx.navigateTo({
                                                url: "../../pagesA/pages/meituan/index"
                                            }) : "elm" == i.to ? wx.navigateTo({
                                                url: "../../pagesA/pages/elm/index"
                                            }) : "user" == i.to ? wx.navigateTo({
                                                url: "../user/index"
                                            }) : "eatwhat" == i.to ? r.navigateTo({
                                                url: "../../pagesA/pages/eat/index"
                                            }) : "ranking" == i.to ? r.navigateTo({
                                                url: "../../pagesA/pages/userA/ranking"
                                            }) : "account" == i.to ? r.navigateTo({
                                                url: "../../pagesA/pages/userA/account"
                                            }) : "page" == i.to && r.navigateTo({
                                                url: "../index/page?page_id=" + i.page_id
                                            })));
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                onShareAppMessage: function() {
                    var e = "pages/index/index?uid=" + r.getStorageSync("userinfo").user_id;
                    return {
                        title: r.getStorageSync("setting").sharetitle,
                        imageUrl: r.getStorageSync("setting").sharethumb,
                        path: e
                    };
                },
                methods: {
                    change: function(e) {
                        var t = this, a = this.tabBar.list[e];
                        if (this.pageKey = e, r.setStorageSync("pageKey", e), 1 == a.adtype) {
                            if (1 == a.appid_type && r.getStorageSync("mtwm_url")) return void r.navigateToMiniProgram({
                                appId: "wxde8ac0a21135c07d",
                                path: r.getStorageSync("mtwm_url")
                            });
                            if (1 == a.appid_type && !r.getStorageSync("mtwm_url")) return t.appid_type = 1, 
                            void t.meituan_urlFun();
                            if (2 == a.appid_type && r.getStorageSync("mtsc_url")) return void r.navigateToMiniProgram({
                                appId: "wxde8ac0a21135c07d",
                                path: r.getStorageSync("mtsc_url")
                            });
                            if (2 == a.appid_type && !r.getStorageSync("mtsc_url")) return t.appid_type = 2, 
                            void t.meituan_urlFun();
                            if (3 == a.appid_type && r.getStorageSync("elmwm_url")) return r.navigateToMiniProgram({
                                appId: "wxece3a9a4c82f58c9",
                                path: r.getStorageSync("elmwm_url")
                            }), t.updatepid(), void console.log(r.getStorageSync("elmwm_url"));
                            if (3 == a.appid_type && !r.getStorageSync("elmwm_url")) return t.appid_type = 3, 
                            void t.gettaobaoauth();
                            if (4 == a.appid_type && r.getStorageSync("elmsc_url")) return r.navigateToMiniProgram({
                                appId: "wxece3a9a4c82f58c9",
                                path: r.getStorageSync("elmsc_url")
                            }), t.updatepid(), void console.log(r.getStorageSync("elmsc_url"));
                            if (4 == a.appid_type && !r.getStorageSync("elmsc_url")) return console.log("ccc"), 
                            t.appid_type = 4, void t.gettaobaoauth();
                            if (0 == a.appid_type) return void r.navigateToMiniProgram({
                                appId: a.appid,
                                path: a.path
                            });
                        }
						if (a.url.indexOf('shopping/shopping') != -1) {
							r.redirectTo({
							    url: "/pagesB/pages/shopping/shopping"
							});
						}
                        if (5 != a.adtype) if (4 != a.adtype) 2 != a.adtype && 3 != a.adtype || (t = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "ad_kefubind"
                        }), r.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                adtype: "ad",
                                adid: a.adid,
                                openid: r.getStorageSync("openid")
                            },
                            success: function(e) {}
                        }), this.contact_title_desc = "", this.contact_type = "ad", this.contact_id = a.adid, 
                        this.contact_title = a.title, this.contact_title_text = a.title_text, this.contact_title_desc = a.title_desc, 
                        this.contact_thumb = r.getStorageSync("setting").dianwo, this.showDialog3()); else {
                            r.setStorageSync("index_nav", a.url);
                            var i = getCurrentPages();
                            i.reverse();
                            for (var n = a.url.replace("../", ""), o = 0; o < i.length; o++) if (-1 != i[o].route.indexOf(n)) return void r.navigateBack({
                                delta: o
                            });
                            if (-1 == a.url.indexOf("../index/") && -1 == a.url.indexOf("../user/") && -1 == a.url.indexOf("../movie/") && -1 == a.url.indexOf("../shop/") && -1 == a.url.indexOf("../kefu/")) return -1 != a.url.indexOf("../../../pages/index/") || -1 != a.url.indexOf("../../../pages/user/") || -1 != a.url.indexOf("../../../pages/kefu/") ? (n = a.url.replace("../../../pages/", "../"), 
                            void r.redirectTo({
                                url: n
                            })) : -1 != a.url.indexOf("../../../pages/meituan/") || -1 != a.url.indexOf("../../../pages/elm/") || -1 != a.url.indexOf("../../../pages/eat/") ? (n = a.url.replace("../../../pages/", "../../pagesA/pages/"), 
                            void r.redirectTo({
                                url: n
                            })) : -1 != a.url.indexOf("../../pagesA/pages/movie/") || -1 != a.url.indexOf("../../pagesA/pages/shop/") ? (n = a.url.replace("../../pagesA/pages/", "../"), 
                            void r.redirectTo({
                                url: n
                            })) : -1 == a.url.indexOf("../../pagesA/pages/movieA/") && -1 == a.url.indexOf("../../pagesA/pages/shopA/") && -1 == a.url.indexOf("../../pagesA/pages/meituan/") && -1 == a.url.indexOf("../../pagesA/pages/elm/") && -1 == a.url.indexOf("../../pagesA/pages/eat/") && -1 == a.url.indexOf("../../pagesA/pages/userA/") && (-1 != a.url.indexOf("../meituan/") || -1 != a.url.indexOf("../elm/") || -1 != a.url.indexOf("../eat/")) ? (n = a.url.replace("../", "../../pagesA/pages/"), 
                            void r.redirectTo({
                                url: n
                            })) : -1 == a.url.indexOf("../shopping/shopping") ? (n = a.url.replace("../", "../../pagesB/pages/"), 
                            void r.redirectTo({
                                url: n
                            })) : void r.redirectTo({
                                url: a.url
                            });
                            r.redirectTo({
                                url: a.url
                            });
                        } else r.navigateTo({
                            url: "../kefu/webview?return_url=" + encodeURIComponent(a.url)
                        });
                    },
                    fatherHeight: function(e) {
                        this.height = e;
                    },
                    eat: function() {
                        r.navigateTo({
                            url: "../../pagesA/pages/eat/index"
                        });
                    },
                    showDialog1: function() {
                        this.$refs.showAlert_taobaoauth.open();
                    },
                    closeDialog1: function() {
                        this.$refs.showAlert_taobaoauth.hide();
                    },
                    showDialog2: function() {
                        this.$refs.showAlert_login.open();
                    },
                    closeDialog2: function() {
                        this.$refs.showAlert_login.hide();
                    },
                    showDialog3: function() {
                        this.$refs.showAlert.open();
                    },
                    closeDialog3: function() {
                        this.$refs.showAlert.hide();
                    },
                    userlogin: function() {
                        r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? this.closeDialog2() : this.showDialog2();
                    },
                    checksubmessage: function(e) {
                        var a;
                        r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (a = this, 
                        wx.requestSubscribeMessage({
                            tmplIds: r.getStorageSync("setting").warn_tplid,
                            success: function(e) {
                                console.log(e), "reject" == e[r.getStorageSync("setting").warn_yhq_tplid] ? wx.showToast({
                                    title: "您拒绝了订阅消息",
                                    duration: 1e3,
                                    success: function(e) {}
                                }) : wx.showToast({
                                    title: "订阅成功",
                                    duration: 1e3,
                                    success: function(e) {
                                        var t = g.globalData.util.url("entry/wxapp/api", {
                                            m: g.globalData.module_name,
                                            o: "subscribemessage"
                                        });
                                        r.request({
                                            url: t,
                                            method: "POST",
                                            header: {
                                                "content-type": "application/x-www-form-urlencoded"
                                            },
                                            data: {
                                                openid: r.getStorageSync("openid"),
                                                type: 1
                                            },
                                            success: function(e) {
                                                var t = a.userinfo;
                                                a.warn_num++, t.s_1_num++, a.userinfo = t, r.setStorageSync("warn_daynum", e.data.warm_daynum);
                                            }
                                        });
                                    }
                                });
                            },
                            fail: function(e) {}
                        })) : this.showDialog2();
                    },
                    getWxCode: function() {
                        var t = this;
                        wx.login({
                            success: function(e) {
                                t.wxCode = e.code;
                            }
                        });
                    },
                    updatepid: function() {
                        var e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "updatepid"
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
                            success: function(e) {}
                        });
                    },
                    login: function(t) {
                        var a = this;
                        this.closeDialog2(), r.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? r.getUserProfile({
									desc: '用于完善会员资料',
                                    success: function(e) {
                                        a.userAuth(t, e, "login");
                                    }
                                }) : a.userAuth(t, null, "login");
                            }
                        });
                    },
                    userAuth: function(a, ee, i) {
                        var n = this;
                        "getUserProfile:ok" == ee.errMsg && wx.login({
                            success: function(e) {
                                var t = g.globalData.util.url("entry/wxapp/api", {
                                    m: g.globalData.module_name,
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
                                        1 == e.data.status && (e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                        e = JSON.parse(e), r.setStorageSync("userinfo", e.userinfo), n.userinfo = e.userinfo, 
                                        "login" == i && (n.closeDialog2(), r.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        })));
                                    }
                                });
                            }
                        });
                    },
                    closeAlert: function() {
                        this.closeDialog2();
                    },
                    loadsetting: function() {
                        var t = this, e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
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
                                e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                r.setStorageSync("setting", e.setting), t.setting = e.setting, r.getStorageSync("setting").ad_index_cp_id && wx.createInterstitialAd && ((a = wx.createInterstitialAd({
                                    adUnitId: r.getStorageSync("setting").ad_index_cp_id
                                })).onLoad(function() {}), a.onError(function(e) {
                                    console.log("onError event emit", e);
                                }), a.onClose(function() {}), a && a.show().catch(function(e) {
                                    console.log("onError event emit", e);
                                })), t.systemtype = r.getStorageSync("systemtype"), r.setNavigationBarTitle({
                                    title: r.getStorageSync("setting").waimaitt_navigationBarTitleText
                                }), r.setNavigationBarColor({
                                    backgroundColor: r.getStorageSync("setting").waimaitt_navigationBarBackgroundColor,
                                    frontColor: r.getStorageSync("setting").waimaitt_navigationBarTextStyle
                                });
                            }
                        });
                    },
                    meituan_urlFun: function() {
                        var e, t = this;
                        1 == t.appid_type && r.getStorageSync("mtwm_url") ? r.navigateToMiniProgram({
                            appId: "wxde8ac0a21135c07d",
                            path: r.getStorageSync("mtwm_url")
                        }) : 2 == t.appid_type && r.getStorageSync("mtsc_url") ? r.navigateToMiniProgram({
                            appId: "wxde8ac0a21135c07d",
                            path: r.getStorageSync("mtsc_url")
                        }) : (e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "qrcode_mtelm"
                        }), r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                appid_type: t.appid_type
                            },
                            success: function(e) {
                                e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log("qrcode_mtelm:" + e), 1 == t.appid_type && (r.setStorageSync("mtwm_url", e.mtwm_url), 
                                r.setStorageSync("mtwm_h5", e.mtwm_h5), r.setStorageSync("mtwmqrcode2", e.mtwm_qrcode), 
                                1 == t.mtpic ? r.previewImage({
                                    urls: [ r.getStorageSync("mtwmqrcode2") ]
                                }) : r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: e.mtwm_url
                                })), 2 == t.appid_type && (r.setStorageSync("mtsc_url", e.mtsc_url), r.setStorageSync("mtsc_h5", e.mtsc_h5), 
                                r.setStorageSync("mtscqrcode2", e.mtsc_qrcode), 1 == t.mtpic ? r.previewImage({
                                    urls: [ r.getStorageSync("mtscqrcode2") ]
                                }) : r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: e.mtsc_url
                                }));
                            }
                        }));
                    },
                    loadSwiperitems: function() {
                        var t = this, e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "ad"
                        });
                        r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                cateid: 1,
                                openid: r.getStorageSync("openid")
                            },
                            success: function(e) {
                                e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.swiperItems = e.data.swiperitems, r.stopPullDownRefresh();
                            }
                        });
                    },
                    load_goods: function() {
                        var t = this, e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "goods"
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
                                e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.youlikes = e.data.items;
                            }
                        });
                    },
                    taped: function(a) {
                        if (r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type) {
                            var i = this;
                            if (1 == this.swiperItems[a].is_ios && "ios" == r.getStorageSync("systemtype") && 0 == r.getStorageSync("setting").ios) {
                                var e = g.globalData.util.url("entry/wxapp/api", {
                                    m: g.globalData.module_name,
                                    o: "ad_kefubind"
                                });
                                return r.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        adtype: "ad",
                                        adid: i.swiperItems[a].item_id,
                                        openid: r.getStorageSync("openid")
                                    },
                                    success: function(e) {}
                                }), this.contact_type = "ad", this.contact_id = this.swiperItems[a].item_id, this.contact_title = this.swiperItems[a].title, 
                                this.contact_title_text = "暂不可用", this.contact_title_desc = "由于相关规范，ios功能暂不可用", 
                                this.contact_thumb = r.getStorageSync("setting").dianwo, void this.showDialog3();
                            }
                            if (1 == i.swiperItems[a].adtype) {
                                if (0 < i.swiperItems[a].appid_type && i.swiperItems[a].appid_type <= 4) if (0 < r.getStorageSync("setting").warn_tplid.length && r.getStorageSync("warn_daynum") < r.getStorageSync("setting").warn_tpl_daynum) wx.requestSubscribeMessage({
                                    tmplIds: r.getStorageSync("setting").warn_tplid,
                                    success: function(e) {
                                        if (console.log(e), "reject" == e[r.getStorageSync("setting").warn_yhq_tplid]) return 1 == i.swiperItems[a].appid_type && r.getStorageSync("mtwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == i.swiperItems[a].mtpic ? void r.previewImage({
                                            urls: [ r.getStorageSync("mtwmqrcode2") ]
                                        }) : void r.navigateToMiniProgram({
                                            appId: "wxde8ac0a21135c07d",
                                            path: r.getStorageSync("mtwm_url")
                                        }) : void i.showDialog2() : 1 != i.swiperItems[a].appid_type || r.getStorageSync("mtwm_url") ? 2 == i.swiperItems[a].appid_type && r.getStorageSync("mtsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == i.swiperItems[a].mtpic ? void r.previewImage({
                                            urls: [ r.getStorageSync("mtscqrcode2") ]
                                        }) : void r.navigateToMiniProgram({
                                            appId: "wxde8ac0a21135c07d",
                                            path: r.getStorageSync("mtsc_url")
                                        }) : void i.showDialog2() : 2 != i.swiperItems[a].appid_type || r.getStorageSync("mtsc_url") ? 3 == i.swiperItems[a].appid_type && r.getStorageSync("elmwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmwm_url")
                                        }), i.updatepid(), void console.log(r.getStorageSync("elmwm_url"))) : void i.showDialog2() : 3 != i.swiperItems[a].appid_type || r.getStorageSync("elmwm_url") ? 4 == i.swiperItems[a].appid_type && r.getStorageSync("elmsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmsc_url")
                                        }), i.updatepid(), void console.log(r.getStorageSync("elmsc_url"))) : void i.showDialog2() : 4 != i.swiperItems[a].appid_type || r.getStorageSync("elmsc_url") ? void r.request({
                                            url: t,
                                            method: "POST",
                                            header: {
                                                "content-type": "application/x-www-form-urlencoded"
                                            },
                                            data: {
                                                openid: r.getStorageSync("openid"),
                                                type: 1
                                            },
                                            success: function(e) {
                                                r.setStorageSync("warn_daynum", e.data.warm_daynum);
                                            }
                                        }) : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 4, 
                                        void i.gettaobaoauth()) : void i.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 3, 
                                        void i.gettaobaoauth()) : void i.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 2, 
                                        i.mtpic = i.swiperItems[a].mtpic, void i.meituan_urlFun()) : void i.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 1, 
                                        i.mtpic = i.swiperItems[a].mtpic, void i.meituan_urlFun()) : void i.showDialog2();
                                        var t = g.globalData.util.url("entry/wxapp/api", {
                                            m: g.globalData.module_name,
                                            o: "subscribemessage"
                                        });
                                        return r.request({
                                            url: t,
                                            method: "POST",
                                            header: {
                                                "content-type": "application/x-www-form-urlencoded"
                                            },
                                            data: {
                                                openid: r.getStorageSync("openid"),
                                                type: 1
                                            },
                                            success: function(e) {
                                                var t = i.userinfo;
                                                i.warn_num++, t.s_1_num++, i.userinfo = t, r.setStorageSync("warn_daynum", e.data.warm_daynum);
                                            }
                                        }), 1 == i.swiperItems[a].appid_type && r.getStorageSync("mtwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == i.swiperItems[a].mtpic ? void r.previewImage({
                                            urls: [ r.getStorageSync("mtwmqrcode2") ]
                                        }) : void r.navigateToMiniProgram({
                                            appId: "wxde8ac0a21135c07d",
                                            path: r.getStorageSync("mtwm_url")
                                        }) : void i.showDialog2() : 1 != i.swiperItems[a].appid_type || r.getStorageSync("mtwm_url") ? 2 == i.swiperItems[a].appid_type && r.getStorageSync("mtsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == i.swiperItems[a].mtpic ? void r.previewImage({
                                            urls: [ r.getStorageSync("mtscqrcode2") ]
                                        }) : void r.navigateToMiniProgram({
                                            appId: "wxde8ac0a21135c07d",
                                            path: r.getStorageSync("mtsc_url")
                                        }) : void i.showDialog2() : 2 != i.swiperItems[a].appid_type || r.getStorageSync("mtsc_url") ? 3 == i.swiperItems[a].appid_type && r.getStorageSync("elmwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmwm_url")
                                        }), i.updatepid(), void console.log(r.getStorageSync("elmwm_url"))) : void i.showDialog2() : 3 != i.swiperItems[a].appid_type || r.getStorageSync("elmwm_url") ? 4 == i.swiperItems[a].appid_type && r.getStorageSync("elmsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmsc_url")
                                        }), i.updatepid(), void console.log(r.getStorageSync("elmsc_url"))) : void i.showDialog2() : 4 != i.swiperItems[a].appid_type || r.getStorageSync("elmsc_url") ? void 0 : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 4, 
                                        void i.gettaobaoauth()) : void i.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 3, 
                                        void i.gettaobaoauth()) : void i.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 2, 
                                        i.mtpic = i.swiperItems[a].mtpic, void i.meituan_urlFun()) : void i.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 1, 
                                        i.mtpic = i.swiperItems[a].mtpic, void i.meituan_urlFun()) : void i.showDialog2();
                                    },
                                    fail: function() {
                                        return 1 == i.swiperItems[a].appid_type && r.getStorageSync("mtwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == i.swiperItems[a].mtpic ? void r.previewImage({
                                            urls: [ r.getStorageSync("mtwmqrcode2") ]
                                        }) : void r.navigateToMiniProgram({
                                            appId: "wxde8ac0a21135c07d",
                                            path: r.getStorageSync("mtwm_url")
                                        }) : void i.showDialog2() : 1 != i.swiperItems[a].appid_type || r.getStorageSync("mtwm_url") ? 2 == i.swiperItems[a].appid_type && r.getStorageSync("mtsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == i.swiperItems[a].mtpic ? void r.previewImage({
                                            urls: [ r.getStorageSync("mtscqrcode2") ]
                                        }) : void r.navigateToMiniProgram({
                                            appId: "wxde8ac0a21135c07d",
                                            path: r.getStorageSync("mtsc_url")
                                        }) : void i.showDialog2() : 2 != i.swiperItems[a].appid_type || r.getStorageSync("mtsc_url") ? 3 == i.swiperItems[a].appid_type && r.getStorageSync("elmwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmwm_url")
                                        }), i.updatepid(), void console.log(r.getStorageSync("elmwm_url"))) : void i.showDialog2() : 3 != i.swiperItems[a].appid_type || r.getStorageSync("elmwm_url") ? 4 == i.swiperItems[a].appid_type && r.getStorageSync("elmsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmsc_url")
                                        }), i.updatepid(), void console.log(r.getStorageSync("elmsc_url"))) : void i.showDialog2() : 4 != i.swiperItems[a].appid_type || r.getStorageSync("elmsc_url") ? void 0 : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 4, 
                                        void i.gettaobaoauth()) : void i.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 3, 
                                        void i.gettaobaoauth()) : void i.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 2, 
                                        i.mtpic = i.swiperItems[a].mtpic, void i.meituan_urlFun()) : void i.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 1, 
                                        i.mtpic = i.swiperItems[a].mtpic, void i.meituan_urlFun()) : void i.showDialog2();
                                    }
                                }); else {
                                    if (e = g.globalData.util.url("entry/wxapp/api", {
                                        m: g.globalData.module_name,
                                        o: "subscribemessage"
                                    }), r.request({
                                        url: e,
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        data: {
                                            openid: r.getStorageSync("openid"),
                                            type: 2
                                        },
                                        success: function(e) {
                                            r.setStorageSync("warn_daynum", e.data.warm_daynum);
                                        }
                                    }), 1 == i.swiperItems[a].appid_type && r.getStorageSync("mtwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == i.swiperItems[a].mtpic ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtwmqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtwm_url")
                                    }) : void i.showDialog2();
                                    if (1 == i.swiperItems[a].appid_type && !r.getStorageSync("mtwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 1, 
                                    i.mtpic = i.swiperItems[a].mtpic, void i.meituan_urlFun()) : void i.showDialog2();
                                    if (2 == i.swiperItems[a].appid_type && r.getStorageSync("mtsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == i.swiperItems[a].mtpic ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtscqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtsc_url")
                                    }) : void i.showDialog2();
                                    if (2 == i.swiperItems[a].appid_type && !r.getStorageSync("mtsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 2, 
                                    i.mtpic = i.swiperItems[a].mtpic, void i.meituan_urlFun()) : void i.showDialog2();
                                    if (3 == i.swiperItems[a].appid_type && r.getStorageSync("elmwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                        appId: "wxece3a9a4c82f58c9",
                                        path: r.getStorageSync("elmwm_url")
                                    }), i.updatepid(), void console.log(r.getStorageSync("elmwm_url"))) : void i.showDialog2();
                                    if (3 == i.swiperItems[a].appid_type && !r.getStorageSync("elmwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 3, 
                                    void i.gettaobaoauth()) : void i.showDialog2();
                                    if (4 == i.swiperItems[a].appid_type && r.getStorageSync("elmsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                        appId: "wxece3a9a4c82f58c9",
                                        path: r.getStorageSync("elmsc_url")
                                    }), i.updatepid(), void console.log(r.getStorageSync("elmsc_url"))) : void i.showDialog2();
                                    if (4 == i.swiperItems[a].appid_type && !r.getStorageSync("elmsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 4, 
                                    void i.gettaobaoauth()) : void i.showDialog2();
                                }
                                if (0 == i.swiperItems[a].appid_type) return void r.navigateToMiniProgram({
                                    appId: i.swiperItems[a].appid,
                                    path: i.swiperItems[a].path
                                });
                            }
                            if (5 == i.swiperItems[a].adtype && r.navigateTo({
                                url: "../kefu/webview?return_url=" + encodeURIComponent(i.swiperItems[a].url)
                            }), 4 != i.swiperItems[a].adtype) 2 != i.swiperItems[a].adtype && 3 != i.swiperItems[a].adtype || (e = g.globalData.util.url("entry/wxapp/api", {
                                m: g.globalData.module_name,
                                o: "ad_kefubind"
                            }), r.request({
                                url: e,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: {
                                    adtype: "ad",
                                    adid: i.swiperItems[a].item_id,
                                    openid: r.getStorageSync("openid")
                                },
                                success: function(e) {}
                            }), i.contact_title_desc = "", i.contact_type = "ad", i.contact_id = i.swiperItems[a].item_id, 
                            i.contact_title = i.swiperItems[a].title, i.contact_title_text = i.swiperItems[a].title_text, 
                            i.contact_title_desc = i.swiperItems[a].title_desc, i.contact_thumb = r.getStorageSync("setting").dianwo, 
                            i.showDialog3()); else if (r.setStorageSync("index_nav", i.swiperItems[a].url), 
                            -1 == i.swiperItems[a].url.indexOf("../index/") && -1 == i.swiperItems[a].url.indexOf("../user/") && -1 == i.swiperItems[a].url.indexOf("../movie/") && -1 == i.swiperItems[a].url.indexOf("../shop/") && -1 == i.swiperItems[a].url.indexOf("../kefu/")) {
                                if (-1 == i.swiperItems[a].url.indexOf("../../../pages/index/") && -1 == i.swiperItems[a].url.indexOf("../../../pages/user/") && -1 == i.swiperItems[a].url.indexOf("../../../pages/kefu/")) return -1 != i.swiperItems[a].url.indexOf("../../../pages/meituan/") || -1 != i.swiperItems[a].url.indexOf("../../../pages/elm/") || -1 != i.swiperItems[a].url.indexOf("../../../pages/eat/") ? (t = i.swiperItems[a].url.replace("../../../pages/", "../../pagesA/pages/"), 
                                void r.navigateTo({
                                    url: t
                                })) : -1 != i.swiperItems[a].url.indexOf("../../pagesA/pages/movie/") || -1 != i.swiperItems[a].url.indexOf("../../pagesA/pages/shop/") ? (t = i.swiperItems[a].url.replace("../../pagesA/pages/", "../"), 
                                void r.navigateTo({
                                    url: t
                                })) : -1 == i.swiperItems[a].url.indexOf("../../pagesA/pages/movieA/") && -1 == i.swiperItems[a].url.indexOf("../../pagesA/pages/shopA/") && -1 == i.swiperItems[a].url.indexOf("../../pagesA/pages/meituan/") && -1 == i.swiperItems[a].url.indexOf("../../pagesA/pages/elm/") && -1 == i.swiperItems[a].url.indexOf("../../pagesA/pages/eat/") && -1 == i.swiperItems[a].url.indexOf("../../pagesA/pages/userA/") && (-1 != i.swiperItems[a].url.indexOf("../meituan/") || -1 != i.swiperItems[a].url.indexOf("../elm/") || -1 != i.swiperItems[a].url.indexOf("../eat/")) ? (t = i.swiperItems[a].url.replace("../", "../../pagesA/pages/"), 
                                void r.navigateTo({
                                    url: t
                                })) : void r.navigateTo({
                                    url: i.swiperItems[a].url
                                });
                                var t = i.swiperItems[a].url.replace("../../../pages/", "../");
                                r.navigateTo({
                                    url: t
                                });
                            } else r.navigateTo({
                                url: i.swiperItems[a].url
                            });
                        } else this.showDialog2();
                    },
                    loadWaimaidaohang: function() {
                        var t = this, e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "waimaidaohang"
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
                                e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.waimaidaohang = e.data.waimaidaohang;
                            }
                        });
                    },
                    loadtabbar: function() {
                        var t = this, e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "tabbar"
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
                                e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.tabBar = e.data.tabbar, r.setStorageSync("tabbar", t.tabBar);
                            }
                        });
                    },
                    loadWaimailist: function() {
                        var t = this, e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "waimailist"
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
                                e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.waimailist = e.data.waimailist;
                            }
                        });
                    },
                    loadmovielist: async function() {
                        var t = this, e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "movielist"
                        });
                        // r.request({
                        //     url: e,
                        //     method: "POST",
                        //     header: {
                        //         "content-type": "application/x-www-form-urlencoded"
                        //     },
                        //     data: {
                        //         openid: r.getStorageSync("openid"),
                        //         index: 1
                        //     },
                        //     success: function(e) {
                        //         e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                        //         t.movielist = e.data.movie, r.setStorageSync("hotmovie", e.data.movie.hot), t.movie_hotshuliang = e.data.movie.hotshuliang;
                        //     }
                        // });
												const [res, err] = await request({
												  api: '/program/movie/movieList'
												})
												if (!err) {
												  let {
												    movieList = [], movieIds = [], total = 0
												  } = res
												  const movieList0 = t.formatImgUrl(movieList)
													if(movieList0){
														movieList = movieList0.map(data =>{
															return {
																'filmId': data.id,
																'name': data.nm,
																'pic': data.img,
															}
														})
													}
													const moiveObj = {
														'hotshuliang':  total,
														'hotindex': movieList
													}
													t.movielist = moiveObj,t.movie_hotshuliang = total;
												}
                    },
										//处理图片url
										formatImgUrl(arr, cutTitle = false) {
										  //小程序不能在{{}}调用函数，所以我们只能在获取API的数据时处理，而不能在wx:for的每一项中处理
										  if (!Array.isArray(arr)) {
										    return
										  }
										  let newArr = []
										  arr.forEach(item => {
										    let title = item.comingTitle
										    if (cutTitle) {
										      title = item.comingTitle.split(' ')[0]
										    }
										    let imgUrl = item.img.replace('w.h', '128.180')
										    newArr.push({
										      ...item,
										      comingTitle: title,
										      img: imgUrl
										    })
										  })
										  return newArr
										},
                    openShopad: function(a) {
                        if (r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type) {
                            var i = this;
                            if (1 == a.currentTarget.dataset.is_ios && "ios" == r.getStorageSync("systemtype") && 0 == r.getStorageSync("setting").ios) {
                                var e = g.globalData.util.url("entry/wxapp/api", {
                                    m: g.globalData.module_name,
                                    o: "ad_kefubind"
                                });
                                return r.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        adtype: "ad",
                                        adid: a.currentTarget.dataset.adid,
                                        openid: r.getStorageSync("openid")
                                    },
                                    success: function(e) {}
                                }), this.contact_type = "ad", this.contact_id = a.currentTarget.dataset.adid, this.contact_title = a.currentTarget.dataset.title, 
                                this.contact_title_text = "暂不支持购买", this.contact_title_desc = "苹果iOS系统手机暂不支持购买，请分享给非iOS系统的微信购买！", 
                                this.contact_thumb = r.getStorageSync("setting").dianwo, void this.showDialog3();
                            }
                            if (1 == a.currentTarget.dataset.adtype) {
                                if (0 < a.currentTarget.dataset.appid_type && a.currentTarget.dataset.appid_type <= 4) {
                                    if (0 == r.getStorageSync("setting").warn_tplid.length) return 1 == a.currentTarget.dataset.appid_type && r.getStorageSync("mtwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == a.currentTarget.dataset.mtpic ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtwmqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtwm_url")
                                    }) : void this.showDialog2() : 1 != a.currentTarget.dataset.appid_type || r.getStorageSync("mtwm_url") ? 2 == a.currentTarget.dataset.appid_type && r.getStorageSync("mtsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == a.currentTarget.dataset.mtpic ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtscqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtsc_url")
                                    }) : void this.showDialog2() : 2 != a.currentTarget.dataset.appid_type || r.getStorageSync("mtsc_url") ? 3 == a.currentTarget.dataset.appid_type && r.getStorageSync("elmwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                        appId: "wxece3a9a4c82f58c9",
                                        path: r.getStorageSync("elmwm_url")
                                    }), i.updatepid(), void console.log(r.getStorageSync("elmwm_url"))) : void this.showDialog2() : 3 != a.currentTarget.dataset.appid_type || r.getStorageSync("elmwm_url") ? 4 == a.currentTarget.dataset.appid_type && r.getStorageSync("elmsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                        appId: "wxece3a9a4c82f58c9",
                                        path: r.getStorageSync("elmsc_url")
                                    }), i.updatepid(), void console.log(r.getStorageSync("elmsc_url"))) : void this.showDialog2() : 4 != a.currentTarget.dataset.appid_type || r.getStorageSync("elmsc_url") ? void 0 : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (console.log("ccc"), 
                                    i.appid_type = 4, void i.gettaobaoauth()) : void this.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 3, 
                                    void i.gettaobaoauth()) : void this.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 2, 
                                    i.mtpic = a.currentTarget.dataset.mtpic, void i.meituan_urlFun()) : void this.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 1, 
                                    i.mtpic = a.currentTarget.dataset.mtpic, void i.meituan_urlFun()) : void this.showDialog2();
                                    if (0 < r.getStorageSync("setting").warn_tplid.length && r.getStorageSync("warn_daynum") < r.getStorageSync("setting").warn_tpl_daynum) wx.requestSubscribeMessage({
                                        tmplIds: r.getStorageSync("setting").warn_tplid,
                                        success: function(e) {
                                            if (console.log(e), "reject" == e[r.getStorageSync("setting").warn_yhq_tplid]) return 1 == a.currentTarget.dataset.appid_type && r.getStorageSync("mtwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == a.currentTarget.dataset.mtpic ? void r.previewImage({
                                                urls: [ r.getStorageSync("mtwmqrcode2") ]
                                            }) : void r.navigateToMiniProgram({
                                                appId: "wxde8ac0a21135c07d",
                                                path: r.getStorageSync("mtwm_url")
                                            }) : void this.showDialog2() : 1 != a.currentTarget.dataset.appid_type || r.getStorageSync("mtwm_url") ? 2 == a.currentTarget.dataset.appid_type && r.getStorageSync("mtsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == a.currentTarget.dataset.mtpic ? void r.previewImage({
                                                urls: [ r.getStorageSync("mtscqrcode2") ]
                                            }) : void r.navigateToMiniProgram({
                                                appId: "wxde8ac0a21135c07d",
                                                path: r.getStorageSync("mtsc_url")
                                            }) : void this.showDialog2() : 2 != a.currentTarget.dataset.appid_type || r.getStorageSync("mtsc_url") ? 3 == a.currentTarget.dataset.appid_type && r.getStorageSync("elmwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                                appId: "wxece3a9a4c82f58c9",
                                                path: r.getStorageSync("elmwm_url")
                                            }), i.updatepid(), void console.log(r.getStorageSync("elmwm_url"))) : void this.showDialog2() : 3 != a.currentTarget.dataset.appid_type || r.getStorageSync("elmwm_url") ? 4 == a.currentTarget.dataset.appid_type && r.getStorageSync("elmsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                                appId: "wxece3a9a4c82f58c9",
                                                path: r.getStorageSync("elmsc_url")
                                            }), i.updatepid(), void console.log(r.getStorageSync("elmsc_url"))) : void this.showDialog2() : 4 != a.currentTarget.dataset.appid_type || r.getStorageSync("elmsc_url") ? void r.request({
                                                url: t,
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                data: {
                                                    openid: r.getStorageSync("openid"),
                                                    type: 1
                                                },
                                                success: function(e) {
                                                    r.setStorageSync("warn_daynum", e.data.warm_daynum);
                                                }
                                            }) : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (console.log("ccc"), 
                                            i.appid_type = 4, void i.gettaobaoauth()) : void this.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 3, 
                                            void i.gettaobaoauth()) : void this.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 2, 
                                            i.mtpic = a.currentTarget.dataset.mtpic, void i.meituan_urlFun()) : void this.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 1, 
                                            i.mtpic = a.currentTarget.dataset.mtpic, void i.meituan_urlFun()) : void this.showDialog2();
                                            var t = g.globalData.util.url("entry/wxapp/api", {
                                                m: g.globalData.module_name,
                                                o: "subscribemessage"
                                            });
                                            return r.request({
                                                url: t,
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                data: {
                                                    openid: r.getStorageSync("openid"),
                                                    type: 1
                                                },
                                                success: function(e) {
                                                    var t = i.userinfo;
                                                    i.warn_num++, t.s_1_num++, i.userinfo = t, r.setStorageSync("warn_daynum", e.data.warm_daynum);
                                                }
                                            }), 1 == a.currentTarget.dataset.appid_type && r.getStorageSync("mtwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == a.currentTarget.dataset.mtpic ? void r.previewImage({
                                                urls: [ r.getStorageSync("mtwmqrcode2") ]
                                            }) : void r.navigateToMiniProgram({
                                                appId: "wxde8ac0a21135c07d",
                                                path: r.getStorageSync("mtwm_url")
                                            }) : void this.showDialog2() : 1 != a.currentTarget.dataset.appid_type || r.getStorageSync("mtwm_url") ? 2 == a.currentTarget.dataset.appid_type && r.getStorageSync("mtsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == a.currentTarget.dataset.mtpic ? void r.previewImage({
                                                urls: [ r.getStorageSync("mtscqrcode2") ]
                                            }) : void r.navigateToMiniProgram({
                                                appId: "wxde8ac0a21135c07d",
                                                path: r.getStorageSync("mtsc_url")
                                            }) : void this.showDialog2() : 2 != a.currentTarget.dataset.appid_type || r.getStorageSync("mtsc_url") ? 3 == a.currentTarget.dataset.appid_type && r.getStorageSync("elmwm_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                                appId: "wxece3a9a4c82f58c9",
                                                path: r.getStorageSync("elmwm_url")
                                            }), i.updatepid(), void console.log(r.getStorageSync("elmwm_url"))) : void this.showDialog2() : 3 != a.currentTarget.dataset.appid_type || r.getStorageSync("elmwm_url") ? 4 == a.currentTarget.dataset.appid_type && r.getStorageSync("elmsc_url") ? r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                                appId: "wxece3a9a4c82f58c9",
                                                path: r.getStorageSync("elmsc_url")
                                            }), i.updatepid(), void console.log(r.getStorageSync("elmsc_url"))) : void this.showDialog2() : 4 != a.currentTarget.dataset.appid_type || r.getStorageSync("elmsc_url") ? void 0 : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (console.log("ccc"), 
                                            i.appid_type = 4, void i.gettaobaoauth()) : void this.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 3, 
                                            void i.gettaobaoauth()) : void this.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 2, 
                                            i.mtpic = a.currentTarget.dataset.mtpic, void i.meituan_urlFun()) : void this.showDialog2() : r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 1, 
                                            i.mtpic = a.currentTarget.dataset.mtpic, void i.meituan_urlFun()) : void this.showDialog2();
                                        },
                                        fail: function(e) {}
                                    }); else {
                                        if (e = g.globalData.util.url("entry/wxapp/api", {
                                            m: g.globalData.module_name,
                                            o: "subscribemessage"
                                        }), r.request({
                                            url: e,
                                            method: "POST",
                                            header: {
                                                "content-type": "application/x-www-form-urlencoded"
                                            },
                                            data: {
                                                openid: r.getStorageSync("openid"),
                                                type: 2
                                            },
                                            success: function(e) {
                                                r.setStorageSync("warn_daynum", e.data.warm_daynum);
                                            }
                                        }), 1 == a.currentTarget.dataset.appid_type && r.getStorageSync("mtwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == a.currentTarget.dataset.mtpic ? void r.previewImage({
                                            urls: [ r.getStorageSync("mtwmqrcode2") ]
                                        }) : void r.navigateToMiniProgram({
                                            appId: "wxde8ac0a21135c07d",
                                            path: r.getStorageSync("mtwm_url")
                                        }) : void this.showDialog2();
                                        if (1 == a.currentTarget.dataset.appid_type && !r.getStorageSync("mtwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 1, 
                                        i.mtpic = a.currentTarget.dataset.mtpic, void i.meituan_urlFun()) : void this.showDialog2();
                                        if (2 == a.currentTarget.dataset.appid_type && r.getStorageSync("mtsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == a.currentTarget.dataset.mtpic ? void r.previewImage({
                                            urls: [ r.getStorageSync("mtscqrcode2") ]
                                        }) : void r.navigateToMiniProgram({
                                            appId: "wxde8ac0a21135c07d",
                                            path: r.getStorageSync("mtsc_url")
                                        }) : void this.showDialog2();
                                        if (2 == a.currentTarget.dataset.appid_type && !r.getStorageSync("mtsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 2, 
                                        i.mtpic = a.currentTarget.dataset.mtpic, void i.meituan_urlFun()) : void this.showDialog2();
                                        if (3 == a.currentTarget.dataset.appid_type && r.getStorageSync("elmwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmwm_url")
                                        }), i.updatepid(), void console.log(r.getStorageSync("elmwm_url"))) : void this.showDialog2();
                                        if (3 == a.currentTarget.dataset.appid_type && !r.getStorageSync("elmwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (i.appid_type = 3, 
                                        void i.gettaobaoauth()) : void this.showDialog2();
                                        if (4 == a.currentTarget.dataset.appid_type && r.getStorageSync("elmsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmsc_url")
                                        }), i.updatepid(), void console.log(r.getStorageSync("elmsc_url"))) : void this.showDialog2();
                                        if (4 == a.currentTarget.dataset.appid_type && !r.getStorageSync("elmsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (console.log("ccc"), 
                                        i.appid_type = 4, void i.gettaobaoauth()) : void this.showDialog2();
                                    }
                                }
                                if (0 == a.currentTarget.dataset.appid_type) return void r.navigateToMiniProgram({
                                    appId: a.currentTarget.dataset.appid,
                                    path: a.currentTarget.dataset.path
                                });
                            }
                            if (5 != a.currentTarget.dataset.adtype) if (4 != a.currentTarget.dataset.adtype) 2 != a.currentTarget.dataset.adtype && 3 != a.currentTarget.dataset.adtype || (e = g.globalData.util.url("entry/wxapp/api", {
                                m: g.globalData.module_name,
                                o: "ad_kefubind"
                            }), r.request({
                                url: e,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: {
                                    adtype: "ad",
                                    adid: a.currentTarget.dataset.adid,
                                    openid: r.getStorageSync("openid")
                                },
                                success: function(e) {}
                            }), this.contact_title_desc = "", this.contact_type = "ad", this.contact_id = a.currentTarget.dataset.adid, 
                            this.contact_title = a.currentTarget.dataset.title, this.contact_title_text = a.currentTarget.dataset.title_text, 
                            this.contact_title_desc = a.currentTarget.dataset.title_desc, this.contact_thumb = r.getStorageSync("setting").dianwo, 
                            this.showDialog3()); else if (r.setStorageSync("index_nav", a.currentTarget.dataset.url), 
                            -1 == a.currentTarget.dataset.url.indexOf("../index/") && -1 == a.currentTarget.dataset.url.indexOf("../user/") && -1 == a.currentTarget.dataset.url.indexOf("../movie/") && -1 == a.currentTarget.dataset.url.indexOf("../shop/") && -1 == a.currentTarget.dataset.url.indexOf("../kefu/")) {
                                if (-1 == a.currentTarget.dataset.url.indexOf("../../../pages/index/") && -1 == a.currentTarget.dataset.url.indexOf("../../../pages/user/") && -1 == a.currentTarget.dataset.url.indexOf("../../../pages/kefu/")) return -1 != a.currentTarget.dataset.url.indexOf("../../../pages/meituan/") || -1 != a.currentTarget.dataset.url.indexOf("../../../pages/elm/") || -1 != a.currentTarget.dataset.url.indexOf("../../../pages/eat/") ? (t = a.currentTarget.dataset.url.replace("../../../pages/", "../../pagesA/pages/"), 
                                void r.navigateTo({
                                    url: t
                                })) : -1 != a.currentTarget.dataset.url.indexOf("../../pagesA/pages/movie/") || -1 != a.currentTarget.dataset.url.indexOf("../../pagesA/pages/shop/") ? (t = a.currentTarget.dataset.url.replace("../../pagesA/pages/", "../"), 
                                void r.navigateTo({
                                    url: t
                                })) : -1 == a.currentTarget.dataset.url.indexOf("../../pagesA/pages/movieA/") && -1 == a.currentTarget.dataset.url.indexOf("../../pagesA/pages/shopA/") && -1 == a.currentTarget.dataset.url.indexOf("../../pagesA/pages/meituan/") && -1 == a.currentTarget.dataset.url.indexOf("../../pagesA/pages/elm/") && -1 == a.currentTarget.dataset.url.indexOf("../../pagesA/pages/eat/") && -1 == a.currentTarget.dataset.url.indexOf("../../pagesA/pages/userA/") && (-1 != a.currentTarget.dataset.url.indexOf("../meituan/") || -1 != a.currentTarget.dataset.url.indexOf("../elm/") || -1 != a.currentTarget.dataset.url.indexOf("../eat/")) ? (t = a.currentTarget.dataset.url.replace("../", "../../pagesA/pages/"), 
                                void r.navigateTo({
                                    url: t
                                })) : void r.navigateTo({
                                    url: a.currentTarget.dataset.url
                                });
                                var t = a.currentTarget.dataset.url.replace("../../../pages/", "../");
                                r.navigateTo({
                                    url: t
                                });
                            } else r.navigateTo({
                                url: a.currentTarget.dataset.url
                            }); else r.navigateTo({
                                url: "../kefu/webview?return_url=" + encodeURIComponent(a.currentTarget.dataset.url)
                            });
                        } else this.showDialog2();
                    },
                    taobaoauth: function() {
                        var t = this;
                        r.setClipboardData({
                            data: this.qudao_tkl,
                            success: function(e) {
                                r.showToast({
                                    title: "复制成功，请打开淘宝授权",
                                    icon: "none"
                                }), t.is_qudao_tkl = 1;
                            }
                        });
                    },
                    retaobaoauth: function() {
                        this.is_qudao_tkl = 0, this.qudao_tkl = "", this.gettaobaoauth();
                    },
                    notaobaoauth: function() {
                        3 == this.appid_type && r.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: r.getStorageSync("setting").default_elmwmpath
                        }), 4 == this.appid_type && r.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: r.getStorageSync("setting").default_elmscpath
                        });
                    },
                    openProductInfo: function(e) {
                        r.navigateTo({
                            url: "../../pagesA/pages/shopA/detail?item_id=" + e.currentTarget.dataset.productid
                        });
                    },
                    openMovieInfo: function(e) {
												r.navigateTo({
														url: "../../subPages/pages/movie-detail/movie-detail?movieId=" + e.currentTarget.dataset.movie.filmId
												});
										},
                    again_getLocation: function() {
                        var t = this;
                        r.getSetting({
                            success: function(e) {
                                null != e.authSetting["scope.userLocation"] && 1 != e.authSetting["scope.userLocation"] ? r.showModal({
                                    title: "是否授权当前位置",
                                    content: "需要获取您的地理位置，请确认授权，否则无法获取您所需数据",
                                    success: function(e) {
                                        e.cancel ? r.showModal({
                                            title: "系统提示",
                                            content: "请授权获取您的位置信息",
                                            showCancel: !0,
                                            success: function(e) {
                                                e.confirm;
                                            }
                                        }) : e.confirm && r.openSetting({
                                            success: function(e) {
                                                1 == e.authSetting["scope.userLocation"] ? (r.showToast({
                                                    title: "授权成功",
                                                    icon: "success",
                                                    duration: 1e3
                                                }), t.openMovieInfo(t)) : r.showModal({
                                                    title: "系统提示",
                                                    content: "请授权获取您的位置信息",
                                                    showCancel: !1,
                                                    success: function(e) {
                                                        e.confirm;
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }) : (e.authSetting["scope.userLocation"], t.openMovieInfo(t));
                            }
                        });
                    },
                    taobaoauth_done: function() {
                        var a = this, e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "taobaoauth_done"
                        });
                        r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                appid_type: a.appid_type
                            },
                            success: function(e) {
                                var t;
                                0 != e.data.status ? (t = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                t = JSON.parse(t), 1 == e.data.status ? (3 == a.appid_type && (r.setStorageSync("elmwm_url", t.elmwm_url), 
                                r.setStorageSync("elmwmqrcode", t.elmwm_qrcode), r.setStorageSync("elmwm_h5", t.elmwm_h5), 
                                r.setStorageSync("pid_time", +t.pid_time), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", t.is_qudao), a.closeDialog1(), r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: t.elmwm_url
                                })), 4 == a.appid_type && (r.setStorageSync("elmsc_url", t.elmsc_url), r.setStorageSync("elmscqrcode", t.elmsc_qrcode), 
                                r.setStorageSync("elmsc_h5", t.elmsc_h5), r.setStorageSync("pid_time", +t.pid_time), 
                                r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", t.is_qudao), a.closeDialog1(), r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: t.elmsc_url
                                }))) : r.showModal({
                                    title: "提示",
                                    content: "未获取到您的授权信息，请重试！",
                                    showCancel: !1,
                                    success: function(e) {
                                        e.confirm || e.cancel;
                                    }
                                })) : r.showModal({
                                    title: "提示",
                                    content: "未获取到您的授权信息，请重试！",
                                    showCancel: !1,
                                    success: function(e) {
                                        e.confirm || e.cancel;
                                    }
                                });
                            }
                        });
                    },
                    gettaobaoauth: function() {
                        var t = this, a = this, e = g.globalData.util.url("entry/wxapp/api", {
                            m: g.globalData.module_name,
                            o: "gettaobaoauth"
                        });
                        r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                appid_type: a.appid_type
                            },
                            success: function(e) {
                                1 == e.data.status ? (a.showDialog1(), a.qudao_tkl = e.data.data) : 0 == e.data.status ? r.showToast({
                                    title: "获取授权信息出错",
                                    icon: "none"
                                }) : 2 == e.data.status && (e = g.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                e = JSON.parse(e), console.log("gettaobaoauth:" + e), 3 == t.appid_type && (r.setStorageSync("elmwm_url", e.elmwm_url), 
                                r.setStorageSync("elmwmqrcode", e.elmwm_qrcode), r.setStorageSync("elmwm_h5", e.elmwm_h5), 
                                r.setStorageSync("pid_time", +e.pid_time), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", e.is_qudao), r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: e.elmwm_url
                                }), console.log(r.getStorageSync("elmwm_url"))), 4 == t.appid_type && (r.setStorageSync("elmsc_url", e.elmsc_url), 
                                r.setStorageSync("elmscqrcode", e.elmsc_qrcode), r.setStorageSync("elmsc_h5", e.elmsc_h5), 
                                r.setStorageSync("pid_time", +e.pid_time), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", e.is_qudao), r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: e.elmsc_url
                                }), console.log(r.getStorageSync("elmsc_url"))));
                            }
                        });
                    },
                    closeContact: function() {
                        this.closeDialog3();
                    },
                    addmini: function() {
                        this.$refs.addmini.showAddMiniProgramTips = 1;
                    },
                    autoUpdate: function() {
                        var t = r.getUpdateManager();
                        t.onCheckForUpdate(), t.onUpdateReady(function() {
                            r.showModal({
                                title: "更新提示",
                                content: "新版本已经准备好，是否重启应用？",
                                success: function(e) {
                                    e.confirm && t.applyUpdate();
                                }
                            });
                        });
                    },
                    changCate: function(e) {
                        var t, a = e.currentTarget.dataset.cateid, i = e.currentTarget.dataset.maincateid, n = this.mainCate;
                        for (t in this.mainCate) n[t].hidden = t == i ? 0 : 1;
                        this.productListTo = "", this.currentCateIndex = a, this.mainCate = n, this.kwd = "", 
                        this.allProducts_temp = [], this.rscroll();
                    },
                    more: function(e) {
                        r.navigateTo({
                            url: "../shop/index"
                        });
                    },
                    movie: function(e) {
                        r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? r.navigateTo({
                            url: "/subPages/pages/movie/movie"
                        }) : this.showDialog2();
                    },
                    rscroll: function() {
                        var e = this;
                        null != this.scrollTimer && clearTimeout(this.scrollTimer), this.scrollTimer = setTimeout(function() {
                            e.getIndex();
                        }, 100);
                    },
                    onShareTimeline: function() {
                        var e = "uid=" + r.getStorageSync("userinfo").user_id;
                        return {
                            title: r.getStorageSync("setting").sharetitle,
                            imageUrl: r.getStorageSync("setting").sharethumb,
                            query: e
                        };
                    }
                }
            };
            t.default = e;
        }).call(this, i("543d").default);
    }
}, [ [ "b628", "common/runtime", "common/vendor" ] ] ]);