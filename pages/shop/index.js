(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/shop/index" ], {
    "25d5": function(e, t, a) {
        a.r(t);
        var n, o = a("f7ff"), i = a("8805");
        for (n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("7c30");
        var r = a("f0c5"), o = Object(r.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    },
    "2e8e": function(e, t, a) {
        (function(r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c = getApp(), n = null, e = {
                data: function() {
                    return {
                        module_name: c.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: r.getStorageSync("userinfo"),
                        setting: r.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        swiperItems: [],
                        youlikes: [],
                        contact_title: "",
                        contact_title_text: "",
                        contact_title_desc: "",
                        contact_id: "",
                        contact_type: "",
                        contact_thumb: "",
                        showAlert: !1,
                        appid_type: 0,
                        qudao_tkl: "",
                        is_qudao_tkl: 0,
                        showAlert_taobaoauth: !1,
                        elm_url: [],
                        meituan_url: [],
                        taskClose: !1,
                        unLogin: !1,
                        title: "",
                        token: "",
                        navHei: "",
                        selfInfor: "",
                        redInfor: "",
                        imgUrl: "",
                        taskLqList: [],
                        tixian: 1,
                        hongbao_image: "",
                        navList: [],
                        config: [],
                        koiplazaList: [],
                        koiplazaListOld: [],
                        boutiqueList: [],
                        firstAd: [],
                        picture: "",
                        wxVideoZ: "",
                        selfhelpList: [],
                        lvList: [],
                        animationData: {},
                        isMoney: !1,
                        isGreAni: !0,
                        isNewRed: !0,
                        isGetBtn: !1,
                        newPeopleMoney: "",
                        onlyIndex: "",
                        drawals: "",
                        Control: "",
                        isauthorize: !1,
                        status: 0,
                        res: "",
                        RedCoupon: "",
                        selected: 0,
                        iv: "",
                        encryptedData: "",
                        hasUserInfo: "",
                        recording: "",
                        loadingType: 0,
                        page: 1,
                        tasknum: 0,
                        pageKey: "",
                        height: 1334,
                        tabBar: [],
                        is_tabbar: 0
                    };
                },
                components: {
                    gracePage: function() {
                        a.e("graceUI/components/gracePage").then(function() {
                            return resolve(a("1021"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceSearch: function() {
                        a.e("graceUI/components/graceSearch").then(function() {
                            return resolve(a("de21"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceSwiper: function() {
                        a.e("graceUI/components/graceSwiper").then(function() {
                            return resolve(a("9fc3"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    addMiniTip: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/add-mini-tip/add-mini-tip") ]).then(function() {
                            return resolve(a("00a6"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceDialog: function() {
                        a.e("graceUI/components/graceDialog").then(function() {
                            return resolve(a("f85d"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceCoupons: function() {
                        a.e("graceUI/components/graceCoupons").then(function() {
                            return resolve(a("6546"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceLoading: function() {
                        a.e("graceUI/components/graceLoading").then(function() {
                            return resolve(a("1d04"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceFullLoading: function() {
                        a.e("graceUI/components/graceFullLoading").then(function() {
                            return resolve(a("3be5"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceImg: function() {
                        a.e("graceUI/components/graceImg").then(function() {
                            return resolve(a("1d6e"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceEmptyNew: function() {
                        a.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(a("f8df"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {},
                onReady: function() {
                    r.getSystemInfo({
                        success: function(e) {
                            e.windowHeight;
                        }
                    });
                },
                onLoad: function(e) {
                    var t = this;
                    console.log("onLoad"), wx.createInterstitialAd && ((n = wx.createInterstitialAd({
                        adUnitId: r.getStorageSync("setting").ad_cp_id
                    })).onLoad(function() {}), n.onError(function(e) {
                        console.log("onError event emit", e);
                    }), n.onClose(function() {}));
                    var a = this;
                    this.userinfo = r.getStorageSync("userinfo");
                    r.getStorageSync("tabbar") ? this.tabBar = r.getStorageSync("tabbar") : r.getStorageSync("userinfo") && this.loadtabbar(), 
                    r.setStorageSync("invite_uid", e.uid), this.module_name = c.globalData.module_name, 
                    this.loadsetting(), this.load_goods(), this.jifendaohang(), null != r.getStorageSync("userinfo") && r.getStorageSync("userinfo") || r.login({
                        success: function(e) {
                            t.wxCode = e.code;
                            e = e.code;
                            c.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var t;
                                    e.data.errno || (r.setStorageSync("openid", e.data.data.openid), "undefined" != r.getStorageSync("tabbar") && r.getStorageSync("tabbar") || a.loadtabbar(), 
                                    r.setStorageSync("unionid", e.data.data.userinfo.unionid), t = c.globalData.util.url("entry/wxapp/api", {
                                        m: c.globalData.module_name,
                                        o: "userinfo"
                                    }), r.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: r.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (r.setStorageSync("userinfo", e.userinfo), r.setStorageSync("pid_use_time", e.pid_time), 
                                            r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && (r.setStorageSync("elmwm_url", ""), 
                                            r.setStorageSync("elmsc_url", ""), r.setStorageSync("elmwmposter", ""), r.setStorageSync("elmscposter", ""), 
                                            r.setStorageSync("pid_time", r.getStorageSync("pid_use_time"))), a.systemtype = r.getStorageSync("systemtype"), 
                                            a.userinfo = e.userinfo, a.getWxCode());
                                        }
                                    }));
                                }
                            });
                        }
                    }), this.loadtasknum();
                },
                onPullDownRefresh: function() {
                    this.page = 1, this.loadingType = 0, this.youlikes = [], this.user_info(), this.loadsetting(), 
                    this.load_goods(), this.jifendaohang();
                },
                onReachBottom: function() {
                    1 != this.loadingType && 2 != this.loadingType && this.load_goods();
                },
                onShow: function() {
                    console.log("onshow"), console.log(getCurrentPages()), this.tabBar = r.getStorageSync("tabbar"), 
                    console.log(this.tabBar.list);
                    for (var e = 0; e < this.tabBar.list.length; e++) -1 != this.tabBar.list[e].url.indexOf("shop/index") && (this.pageKey = e);
                    this.userinfo = r.getStorageSync("userinfo"), n && n.show().catch(function(e) {
                        console.log("onError event emit", e);
                    });
                },
                onShareAppMessage: function() {
                    var e = "pages/shop/index?uid=" + r.getStorageSync("userinfo").user_id;
                    return {
                        title: r.getStorageSync("setting").sharetitle,
                        imageUrl: r.getStorageSync("setting").sharethumb,
                        path: e
                    };
                },
                onHide: function() {},
                onUnload: function() {},
                methods: {
                    loadtabbar: function() {
                        var e, t = this;
                        "undefined" != r.getStorageSync("tabbar") && r.getStorageSync("tabbar") ? this.tabBar = r.getStorageSync("tabbar") : (e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "tabbar"
                        }), r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid")
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.tabBar = e.data.tabbar;
                            }
                        }));
                    },
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
                        if (5 != a.adtype) if (4 != a.adtype) 2 != a.adtype && 3 != a.adtype || (t = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
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
                            var n = getCurrentPages();
                            n.reverse();
                            for (var o = a.url.replace("../", ""), i = 0; i < n.length; i++) if (-1 != n[i].route.indexOf(o)) return void r.navigateBack({
                                delta: i
                            });
                            if (-1 == a.url.indexOf("../index/") && -1 == a.url.indexOf("../user/") && -1 == a.url.indexOf("../movie/") && -1 == a.url.indexOf("../shop/") && -1 == a.url.indexOf("../kefu/")) return -1 != a.url.indexOf("../../../pages/index/") || -1 != a.url.indexOf("../../../pages/user/") || -1 != a.url.indexOf("../../../pages/kefu/") ? (o = a.url.replace("../../../pages/", "../"), 
                            void r.navigateTo({
                                url: o
                            })) : -1 != a.url.indexOf("../../../pages/meituan/") || -1 != a.url.indexOf("../../../pages/elm/") || -1 != a.url.indexOf("../../../pages/eat/") ? (o = a.url.replace("../../../pages/", "../../pagesA/pages/"), 
                            void r.navigateTo({
                                url: o
                            })) : -1 != a.url.indexOf("../../pagesA/pages/movie/") || -1 != a.url.indexOf("../../pagesA/pages/shop/") ? (o = a.url.replace("../../pagesA/pages/", "../"), 
                            void r.navigateTo({
                                url: o
                            })) : -1 == a.url.indexOf("../../pagesA/pages/movieA/") && -1 == a.url.indexOf("../../pagesA/pages/shopA/") && -1 == a.url.indexOf("../../pagesA/pages/meituan/") && -1 == a.url.indexOf("../../pagesA/pages/elm/") && -1 == a.url.indexOf("../../pagesA/pages/eat/") && -1 == a.url.indexOf("../../pagesA/pages/userA/") && (-1 != a.url.indexOf("../meituan/") || -1 != a.url.indexOf("../elm/") || -1 != a.url.indexOf("../eat/")) ? (o = a.url.replace("../", "../../pagesA/pages/"), 
                            void r.navigateTo({
                                url: o
                            })) : void r.navigateTo({
                                url: a.url
                            });
                            r.navigateTo({
                                url: a.url
                            });
                        } else r.navigateTo({
                            url: "../kefu/webview?return_url=" + encodeURIComponent(a.url)
                        });
                    },
                    fatherHeight: function(e) {
                        this.height = e;
                    },
                    user_info: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "userinfo"
                        });
                        r.request({
                            url: e,
                            method: "GET",
                            data: {
                                openid: r.getStorageSync("openid"),
                                invite_uid: r.getStorageSync("invite_uid")
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                e.openid && (r.setStorageSync("userinfo", e.userinfo), t.userinfo = e.userinfo);
                            }
                        });
                    },
                    openShopad: function(e) {
                        if (r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type) {
                            var t = this;
                            if (1 == e.currentTarget.dataset.is_ios && "ios" == r.getStorageSync("systemtype") && 0 == r.getStorageSync("setting").ios) {
                                var a = c.globalData.util.url("entry/wxapp/api", {
                                    m: c.globalData.module_name,
                                    o: "ad_kefubind"
                                });
                                return r.request({
                                    url: a,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        adtype: "ad",
                                        adid: e.currentTarget.dataset.adid,
                                        openid: r.getStorageSync("openid")
                                    },
                                    success: function(e) {}
                                }), this.contact_type = "ad", this.contact_id = e.currentTarget.dataset.adid, this.contact_title = e.currentTarget.dataset.title, 
                                this.contact_title_text = "暂不支持购买", this.contact_title_desc = "苹果iOS系统手机暂不支持购买，请分享给非iOS系统的微信购买！", 
                                this.contact_thumb = r.getStorageSync("setting").dianwo, void this.showDialog3();
                            }
                            if (1 == e.currentTarget.dataset.adtype) {
                                if (1 == e.currentTarget.dataset.appid_type && r.getStorageSync("mtwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? void r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: r.getStorageSync("mtwm_url")
                                }) : void this.showDialog2();
                                if (1 == e.currentTarget.dataset.appid_type && !r.getStorageSync("mtwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (t.appid_type = 1, 
                                void t.meituan_urlFun()) : void this.showDialog2();
                                if (2 == e.currentTarget.dataset.appid_type && r.getStorageSync("mtsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? void r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: r.getStorageSync("mtsc_url")
                                }) : void this.showDialog2();
                                if (2 == e.currentTarget.dataset.appid_type && !r.getStorageSync("mtsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (t.appid_type = 2, 
                                void t.meituan_urlFun()) : void this.showDialog2();
                                if (3 == e.currentTarget.dataset.appid_type && r.getStorageSync("elmwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: r.getStorageSync("elmwm_url")
                                }), t.updatepid(), void console.log(r.getStorageSync("elmwm_url"))) : void this.showDialog2();
                                if (3 == e.currentTarget.dataset.appid_type && !r.getStorageSync("elmwm_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (t.appid_type = 3, 
                                void t.gettaobaoauth()) : void this.showDialog2();
                                if (4 == e.currentTarget.dataset.appid_type && r.getStorageSync("elmsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: r.getStorageSync("elmsc_url")
                                }), t.updatepid(), void console.log(r.getStorageSync("elmsc_url"))) : void this.showDialog2();
                                if (4 == e.currentTarget.dataset.appid_type && !r.getStorageSync("elmsc_url")) return r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (console.log("ccc"), 
                                t.appid_type = 4, void t.gettaobaoauth()) : void this.showDialog2();
                                if (0 == e.currentTarget.dataset.appid_type) return void r.navigateToMiniProgram({
                                    appId: e.currentTarget.dataset.appid,
                                    path: e.currentTarget.dataset.path
                                });
                            }
                            if (5 != e.currentTarget.dataset.adtype) if (4 != e.currentTarget.dataset.adtype) 2 != e.currentTarget.dataset.adtype && 3 != e.currentTarget.dataset.adtype || (a = c.globalData.util.url("entry/wxapp/api", {
                                m: c.globalData.module_name,
                                o: "ad_kefubind"
                            }), r.request({
                                url: a,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: {
                                    adtype: "ad",
                                    adid: e.currentTarget.dataset.adid,
                                    openid: r.getStorageSync("openid")
                                },
                                success: function(e) {}
                            }), this.contact_title_desc = "", this.contact_type = "ad", this.contact_id = e.currentTarget.dataset.adid, 
                            this.contact_title = e.currentTarget.dataset.title, this.contact_title_text = e.currentTarget.dataset.title_text, 
                            this.contact_title_desc = e.currentTarget.dataset.title_desc, this.contact_thumb = r.getStorageSync("setting").dianwo, 
                            this.showDialog3()); else if (r.setStorageSync("index_nav", e.currentTarget.dataset.url), 
                            -1 == e.currentTarget.dataset.url.indexOf("../index/") && -1 == e.currentTarget.dataset.url.indexOf("../user/") && -1 == e.currentTarget.dataset.url.indexOf("../movie/") && -1 == e.currentTarget.dataset.url.indexOf("../shop/") && -1 == e.currentTarget.dataset.url.indexOf("../kefu/")) {
                                if (-1 == e.currentTarget.dataset.url.indexOf("../../../pages/index/") && -1 == e.currentTarget.dataset.url.indexOf("../../../pages/user/") && -1 == e.currentTarget.dataset.url.indexOf("../../../pages/kefu/")) return -1 != e.currentTarget.dataset.url.indexOf("../../../pages/meituan/") || -1 != e.currentTarget.dataset.url.indexOf("../../../pages/elm/") || -1 != e.currentTarget.dataset.url.indexOf("../../../pages/eat/") ? (n = e.currentTarget.dataset.url.replace("../../../pages/", "../../pagesA/pages/"), 
                                void r.navigateTo({
                                    url: n
                                })) : -1 != e.currentTarget.dataset.url.indexOf("../../pagesA/pages/movie/") || -1 != e.currentTarget.dataset.url.indexOf("../../pagesA/pages/shop/") ? (n = e.currentTarget.dataset.url.replace("../../pagesA/pages/", "../"), 
                                void r.navigateTo({
                                    url: n
                                })) : -1 == e.currentTarget.dataset.url.indexOf("../../pagesA/pages/movieA/") && -1 == e.currentTarget.dataset.url.indexOf("../../pagesA/pages/shopA/") && -1 == e.currentTarget.dataset.url.indexOf("../../pagesA/pages/meituan/") && -1 == e.currentTarget.dataset.url.indexOf("../../pagesA/pages/elm/") && -1 == e.currentTarget.dataset.url.indexOf("../../pagesA/pages/eat/") && -1 == e.currentTarget.dataset.url.indexOf("../../pagesA/pages/userA/") && (-1 != e.currentTarget.dataset.url.indexOf("../meituan/") || -1 != e.currentTarget.dataset.url.indexOf("../elm/") || -1 != e.currentTarget.dataset.url.indexOf("../eat/")) ? (n = e.currentTarget.dataset.url.replace("../", "../../pagesA/pages/"), 
                                void r.navigateTo({
                                    url: n
                                })) : void r.navigateTo({
                                    url: e.currentTarget.dataset.url
                                });
                                var n = e.currentTarget.dataset.url.replace("../../../pages/", "../");
                                r.navigateTo({
                                    url: n
                                });
                            } else r.navigateTo({
                                url: e.currentTarget.dataset.url
                            }); else r.navigateTo({
                                url: "../kefu/webview?return_url=" + encodeURIComponent(e.currentTarget.dataset.url)
                            });
                        } else this.showDialog2();
                    },
                    meituan_urlFun: function() {
                        var e, t = this;
                        1 == t.appid_type && r.getStorageSync("mtwm_url") ? r.navigateToMiniProgram({
                            appId: "wxde8ac0a21135c07d",
                            path: r.getStorageSync("mtwm_url")
                        }) : 2 == t.appid_type && r.getStorageSync("mtsc_url") ? r.navigateToMiniProgram({
                            appId: "wxde8ac0a21135c07d",
                            path: r.getStorageSync("mtsc_url")
                        }) : (e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
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
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log("qrcode_mtelm:" + e), 1 == t.appid_type && (r.setStorageSync("mtwm_url", e.mtwm_url), 
                                r.setStorageSync("mtwm_h5", e.mtwm_h5), r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: e.mtwm_url
                                })), 2 == t.appid_type && (r.setStorageSync("mtsc_url", e.mtsc_url), r.setStorageSync("mtsc_h5", e.mtsc_h5), 
                                r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: e.mtsc_url
                                }));
                            }
                        }));
                    },
                    closeAlert: function() {
                        this.closeDialog2();
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
                        var e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
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
                                e.authSetting["scope.userInfo"] ? r.getUserInfo({
                                    success: function(e) {
                                        a.userAuth(t, e.userInfo, "login");
                                    }
                                }) : a.userAuth(t, null, "login");
                            }
                        });
                    },
                    gotask: function(e) {
                        r.navigateTo({
                            url: "task"
                        });
                    },
                    change1: function(e) {
                        wx.navigateTo({
                            url: "../../pagesA/pages/userA/change"
                        });
                    },
                    userAuth: function(a, e, n) {
                        var o = this;
                        "getUserInfo:ok" == a.detail.errMsg ? wx.login({
                            success: function(e) {
                                var t = c.globalData.util.url("entry/wxapp/api", {
                                    m: c.globalData.module_name,
                                    o: "userinfo"
                                }), e = {
                                    code: e.code,
                                    encryptedData: a.detail.encryptedData,
                                    iv: a.detail.iv,
                                    openid: r.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                r.request({
                                    url: t,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: e,
                                    success: function(e) {
                                        1 == e.data.status ? (e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                        e = JSON.parse(e), r.setStorageSync("userinfo", e.userinfo), o.userinfo = e.userinfo, 
                                        "login" == n && (o.closeDialog2(), r.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        }))) : r.showToast({
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
                    taobaoauth_done: function() {
                        var a = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
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
                                0 != e.data.status ? (t = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
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
                        var t = this, a = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
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
                                }) : 2 == e.data.status && (e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
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
                    loadsetting: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
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
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                r.setStorageSync("setting", e.setting), t.setting = e.setting, r.setNavigationBarColor({
                                    backgroundColor: "#ff5756",
                                    frontColor: "white"
                                }), r.stopPullDownRefresh();
                            }
                        });
                    },
                    loadtasknum: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "tasknum"
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
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.tasknum = e.tasknum;
                            }
                        });
                    },
                    openProductInfo: function(e) {
                        r.navigateTo({
                            url: "../../pagesA/pages/shopA/detail?item_id=" + e.currentTarget.dataset.productid
                        });
                    },
                    load_goods: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "goods"
                        });
                        this.loadingType = 1, r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                page: t.page,
                                pagesize: 8
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                0 < e.total && (t.youlikes = t.youlikes.concat(e.data.items)), t.page > e.total ? 0 == t.youlikes.length ? (t.youlikes = [], 
                                t.loadingType = 4) : t.loadingType = 2 : t.page == e.total ? t.loadingType = 2 : (t.page = t.page + 1, 
                                t.loadingType = 0, t.page = t.page);
                            }
                        });
                    },
                    jifendaohang: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "jifendaohang"
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
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.navList = e.data.jifendaohang;
                            }
                        });
                    },
                    getRedMoney: function() {
                        this.isGreAni = !1;
                        var e = r.createAnimation({
                            duration: 2e3,
                            timingFunction: "ease"
                        });
                        (this.animation = e).rotateY(1080).step(), this.animationData = e.export();
                    },
                    bindReceive: function() {
                        this.selfInformation(), this.isNewRed = !1;
                    },
                    selfInformation: function() {
                        r.getStorageSync("token");
                    },
                    goLuckDetail: function(e) {
                        var t = e.currentTarget.dataset.index, a = this.lvList[t].relation_id, n = this.lvList[t].member.id, o = this.lvList[t].task_condition, e = this.selfInfor.id, t = this.onlyIndex;
                        r.navigateTo({
                            url: "/pages/luckydrawdetails/luckydrawdetails?luckydetail=" + a + "&only=+ " + t + "&luckydrawHide=2&fenxiang_id=" + a + "&fenxiang_condition=" + o + "&fenxiang_memberid=" + n + "&userid=" + e
                        });
                    },
                    taskProgressFun: function() {},
                    bindOpenScroll: function() {
                        var e = this;
                        this.taskClose = !this.taskClose, setTimeout(function() {
                            e.taskClose = !1;
                        }, 8e3);
                    },
                    bindSuccess: function() {},
                    bindScrollClose: function() {
                        this.taskClose = !1;
                    },
                    scroll: function() {},
                    koiplazaCurrent: function() {},
                    bScroll: function() {},
                    swiperCurrent: function() {}
                }
            };
            t.default = e;
        }).call(this, a("543d").default);
    },
    "7c30": function(e, t, a) {
        var n = a("bcd5");
        a.n(n).a;
    },
    8805: function(e, t, a) {
        a.r(t);
        var n, o = a("2e8e"), i = a.n(o);
        for (n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        t.default = i.a;
    },
    bcd5: function(e, t, a) {},
    dd02: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("25d5")).default);
        }).call(this, a("543d").createPage);
    },
    f7ff: function(e, t, a) {
        a.d(t, "b", function() {
            return o;
        }), a.d(t, "c", function() {
            return i;
        }), a.d(t, "a", function() {
            return n;
        });
        var n = {
            sjTabBar: function() {
                return a.e("components/sj-tab-bar/sj-tab-bar").then(a.bind(null, "1ba9"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    }
}, [ [ "dd02", "common/runtime", "common/vendor" ] ] ]);