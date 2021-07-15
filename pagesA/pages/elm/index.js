require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/elm/index" ], {
    "2bf3": function(e, t, a) {
        var o = a("78f7");
        a.n(o).a;
    },
    "78f7": function(e, t, a) {},
    8557: function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return r;
        }), a.d(t, "a", function() {
            return o;
        });
        var o = {
            sjTabBar: function() {
                return a.e("components/sj-tab-bar/sj-tab-bar").then(a.bind(null, "1ba9"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    a465: function(e, t, a) {
        a.r(t);
        var o, n = a("c6e8"), r = a.n(n);
        for (o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = r.a;
    },
    c230: function(e, t, a) {
        a.r(t);
        var o, n = a("8557"), r = a("a465");
        for (o in r) "default" !== o && function(e) {
            a.d(t, e, function() {
                return r[e];
            });
        }(o);
        a("2bf3");
        var i = a("f0c5"), n = Object(i.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = n.exports;
    },
    c59d: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("c230")).default);
        }).call(this, a("543d").createPage);
    },
    c6e8: function(e, t, a) {
        (function(r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
			require('../../../common/main.js');
			const request = require('../../../utils/request');
            var i = getApp(), e = {
                data: function() {
                    return {
                        module_name: i.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: r.getStorageSync("userinfo"),
                        setting: r.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        p: 0,
                        loadposter: 0,
                        appid_type: 0,
                        qudao_tkl: "",
                        h5: "",
                        is_qudao_tkl: 0,
                        showAlert_taobaoauth: !1,
                        elm_url: [],
                        meituan_url: [],
                        show_poster: !1,
                        currentIndex: 0,
                        tabs: [ "外卖", "果蔬商超" ],
                        mainHeight: 800,
                        pageLoading: !0,
                        pagebgcolor: r.getStorageSync("setting").waimaitt_meituanwm_bgcolor,
                        qrcode: "",
                        elmwmqrcode: "",
                        elmscqrcode: "",
                        elmwmposter: "",
                        elmscposter: "",
                        width: 750,
                        cheight: 1334,
                        widthIn: 300,
                        heightIn: 500,
                        bgColor: "#7ACBDC",
                        bgImg: "",
                        imgSrc: null,
                        rpx2px: 1,
                        context: null,
                        multiple: 1,
                        showToast_login: !1,
                        footerCurrent: 0,
                        pageKey: "",
                        height: "",
                        tabBar: [],
						btnBar: [],
						btnBarHeight: 600,
                    };
                },
                components: {
                    gracePage: (a("e5c8"), function() {
                        a.e("graceUI/components/gracePage").then(function() {
                            return resolve(a("1021"));
                        }.bind(null, a)).catch(a.oe);
                    }),
                    graceHeader: function() {
                        a.e("graceUI/components/graceHeader").then(function() {
                            return resolve(a("266b"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceNavBar: function() {
                        a.e("graceUI/components/graceNavBar").then(function() {
                            return resolve(a("a631"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceShade: function() {
                        a.e("graceUI/components/graceShade").then(function() {
                            return resolve(a("31ed"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceDialog: function() {
                        a.e("graceUI/components/graceDialog").then(function() {
                            return resolve(a("f85d"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceLoading: function() {
                        a.e("graceUI/components/graceLoading").then(function() {
                            return resolve(a("1d04"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {},
                onPullDownRefresh: function() {
                    this.loadsetting(), this.loadtabbar();
                },
                onShow: function() {
                    this.tabBar = r.getStorageSync("tabbar");
					this.showBtnBar();
                    for (var e = 0; e < this.tabBar.list.length; e++) -1 != this.tabBar.list[e].url.indexOf("elm/index") && (this.pageKey = e);
                    this.userinfo = r.getStorageSync("userinfo"), -1 != r.getStorageSync("index_nav").indexOf("elmsc") ? this.currentIndex = 1 : r.getStorageSync("index_nav") && (this.currentIndex = 0), 
                    1 == this.currentIndex ? (this.h5 = r.getStorageSync("elmsc_h5"), this.load_elmscqrcode2()) : (this.h5 = r.getStorageSync("elmwm_h5"), 
                    this.load_elmwmqrcode2());
                    var t = i.globalData.util.url("entry/wxapp/api", {
                        m: i.globalData.module_name,
                        o: "chkpid"
                    });
                    r.request({
                        url: t,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            openid: r.getStorageSync("openid")
                        },
                        success: function(e) {
                            e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                            console.log(e), r.setStorageSync("pid_use_time", e), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && (r.setStorageSync("elmwm_url", ""), 
                            r.setStorageSync("elmsc_url", ""), r.setStorageSync("elmwmposter", ""), r.setStorageSync("elmscposter", ""), 
                            r.setStorageSync("pid_time", r.getStorageSync("pid_use_time")));
                        }
                    }), t = i.globalData.util.url("entry/wxapp/api", {
                        m: i.globalData.module_name,
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
                    });
                },
                onReady: function() {
                    var t = this;
                    setTimeout(function() {
                        r.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(e) {
                            t.mainHeight = e.height;
                        }).exec();
                    }, 1e3), setTimeout(function() {
                        t.pageLoading = !1;
                    }, 1500);
                },
                onLoad: function(e) {
                    var t = this;
                    this.module_name = i.globalData.module_name;
                    var a = this;
                    r.setStorageSync("invite_uid", e.uid), r.getStorageSync("tabbar") ? this.tabBar = r.getStorageSync("tabbar") : r.getStorageSync("userinfo") && this.loadtabbar(), 
                    this.loadsetting(), null != r.getStorageSync("userinfo") && r.getStorageSync("userinfo") || r.login({
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
                                    e.data.errno || (r.setStorageSync("openid", e.data.data.openid), "undefined" != r.getStorageSync("tabbar") && r.getStorageSync("tabbar") || a.loadtabbar(), 
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
                    }), this.setting = r.getStorageSync("setting"), this.userinfo = r.getStorageSync("userinfo"), 
                    this.elmwmqrcode = r.getStorageSync("elmwmqrcode"), this.elmscqrcode = r.getStorageSync("elmscqrcode"), 
                    this.elmwmposter = r.getStorageSync("elmwmposter"), this.elmscposter = r.getStorageSync("elmscposter"), 
                    this.pagebgcolor = r.getStorageSync("setting").waimaitt_elmwm_bgcolor, this.bgImg = r.getStorageSync("setting").waimaitt_elmwm_poster ? r.getStorageSync("setting").waimaitt_elmwm_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmwm.png", 
                    a = this;
                    e = i.globalData.util.url("entry/wxapp/api", {
                        m: i.globalData.module_name,
                        o: "chkpid"
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
                            console.log(e), r.setStorageSync("pid_use_time", e), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && (r.setStorageSync("elmwm_url", ""), 
                            r.setStorageSync("elmsc_url", ""), r.setStorageSync("elmwmposter", ""), r.setStorageSync("elmscposter", ""), 
                            r.setStorageSync("pid_time", r.getStorageSync("pid_use_time")));
                        }
                    });
                    e = new Date(new Date().setHours(0, 0, 0, 0)) / 1e3;
                    console.log(e), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && (r.setStorageSync("elmwm_url", ""), 
                    r.setStorageSync("elmsc_url", ""), r.setStorageSync("elmwmposter", ""), r.setStorageSync("elmscposter", ""));
                },
                methods: {
                    change: function(e) {
                        var t = this;
                        console.log(this.tabBar.list), console.log(this.tabBar.list[e]);
                        var a = this.tabBar.list[e];
                        if (this.pageKey = e, r.setStorageSync("pageKey", e), r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type) {
                            if (1 == a.adtype) {
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
                            if (5 != a.adtype) {
                                if (4 == a.adtype) {
                                    if (r.setStorageSync("index_nav", a.url), -1 == a.url.indexOf("../index/") && -1 == a.url.indexOf("../user/") && -1 == a.url.indexOf("../movie/") && -1 == a.url.indexOf("../shop/") && -1 == a.url.indexOf("../kefu/")) return -1 != a.url.indexOf("../../../pages/index/") || -1 != a.url.indexOf("../../../pages/user/") || -1 != a.url.indexOf("../../../pages/kefu/") ? (console.log(a.url), 
                                    void r.redirectTo({
                                        url: a.url
                                    })) : -1 != a.url.indexOf("../../../pages/meituan/") || -1 != a.url.indexOf("../../../pages/elm/") || -1 != a.url.indexOf("../../../pages/eat/") ? (o = a.url.replace("../../../pages/", "../"), 
                                    console.log(a.url), console.log(o), void r.redirectTo({
                                        url: o
                                    })) : -1 != a.url.indexOf("../../pagesA/pages/movie/") || -1 != a.url.indexOf("../../pagesA/pages/shop/") ? (o = a.url.replace("../../pagesA/pages/", "../../../pages/"), 
                                    console.log(a.url), console.log(o), void r.redirectTo({
                                        url: o
                                    })) : -1 != a.url.indexOf("../../pagesA/pages/movieA/") || -1 != a.url.indexOf("../../pagesA/pages/shopA/") || -1 != a.url.indexOf("../../pagesA/pages/meituan/") || -1 != a.url.indexOf("../../pagesA/pages/elm/") || -1 != a.url.indexOf("../../pagesA/pages/eat/") || -1 != a.url.indexOf("../../pagesA/pages/userA/") ? (o = a.url.replace("../../pagesA/pages/", "../"), 
                                    console.log(a.url), console.log(o), void r.redirectTo({
                                        url: o
                                    })) : (-1 != a.url.indexOf("../meituan/") || -1 != a.url.indexOf("../elm/") || a.url.indexOf("../eat/"), 
                                    console.log(a.url), void r.redirectTo({
                                        url: a.url
                                    }));
                                    var o = a.url.replace("../", "../../../pages/");
                                    return console.log(a.url), console.log(o), void r.redirectTo({
                                        url: o
                                    });
                                }
                                2 != a.adtype && 3 != a.adtype || (o = i.globalData.util.url("entry/wxapp/api", {
                                    m: i.globalData.module_name,
                                    o: "ad_kefubind"
                                }), r.request({
                                    url: o,
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
                                this.contact_thumb = r.getStorageSync("setting").dianwo, this.showDialog3());
                            } else r.navigateTo({
                                url: "../kefu/webview?return_url=" + encodeURIComponent(a.url)
                            });
                        } else this.showDialog2();
						
                    },
                    fatherHeight: function(e) {
                        this.height = e;
                    },
                    loadtabbar: function() {
                        var e, t = this;
                        "undefined" != r.getStorageSync("tabbar") && r.getStorageSync("tabbar") ? this.tabBar = r.getStorageSync("tabbar") : (e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
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
                                e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.tabBar = e.data.tabbar, r.setStorageSync("tabbar", t.tabBar);
                            }
                        }));
                    },
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
                                r.setStorageSync("setting", e.setting), t.setting = r.getStorageSync("setting"), 
                                t.systemtype = r.getStorageSync("systemtype");
                            }
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
                    load_elmwmqrcode: function() {
                        this.elmwmqrcode = "../../../static/images/loadding-max.gif";
                        var t = this, e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode"
                        });
                        r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                type: "elmwm",
                                uid: r.getStorageSync("userinfo").user_id
                            },
                            success: function(e) {
                                e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), e.poster_url && e.data ? (t.elmwmqrcode = e.data, r.setStorageSync("elmwmqrcode", e.data), 
                                r.setStorageSync("elmwmposter", e.poster_url)) : t.elmwmqrcode = "../../../static/images/elmwm.png";
                            }
                        });
                    },
                    load_elmscqrcode: function() {
                        this.elmscqrcode = "../../../static/images/loadding-max.gif";
                        var t = this, e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode"
                        });
                        r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                type: "elmsc",
                                uid: r.getStorageSync("userinfo").user_id
                            },
                            success: function(e) {
                                e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), e.poster_url && e.data ? (t.elmscqrcode = e.data, r.setStorageSync("elmscqrcode", e.data), 
                                r.setStorageSync("elmscposter", e.poster_url)) : t.elmscqrcode = "../../../static/images/elmcs.png";
                            }
                        });
                    },
                    load_elmwmqrcode2: function() {
                        var t, e;
                        r.getStorageSync("elmwmqrcode") || (this.elmwmqrcode = "../../../static/images/loadding-max.gif", 
                        t = this, e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode"
                        }), r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                type: "elmwm",
                                uid: r.getStorageSync("userinfo").user_id
                            },
                            success: function(e) {
                                e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.elmwmqrcode = e.data, r.setStorageSync("elmwmqrcode", e.data), -1 != e.poster_url.indexOf("elmsc1") && r.getStorageSync("elmwmposter") || r.setStorageSync("elmwmposter", e.poster_url);
                            }
                        }));
                    },
                    load_elmscqrcode2: function() {
                        var t, e;
                        r.getStorageSync("elmscqrcode") || (this.elmscqrcode = "../../../static/images/loadding-max.gif", 
                        t = this, e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode"
                        }), r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                type: "elmsc",
                                uid: r.getStorageSync("userinfo").user_id
                            },
                            success: function(e) {
                                e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                t.elmscqrcode = e.data, r.setStorageSync("elmscqrcode", e.data), -1 != e.poster_url.indexOf("elmsc1") && r.getStorageSync("elmscposter") || r.setStorageSync("elmscposter", e.poster_url);
                            }
                        }));
                    },
                    userlogin: function() {
                        r.getStorageSync("userinfo").nickname ? this.closeDialog2() : this.showDialog2();
                    },
                    login: function() {
                        var a = this;
                        this.closeDialog2(), r.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? r.getUserProfile({
									desc: '用于完善会员资料',
                                    success: (e) => {
                                        a.userAuth(e, "login");
                                    }
                                }) : a.userAuth(null, "login");
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
                    userAuth: function(ee, o) {
                        var n = this;
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
								console.log(e);
                                r.request({
                                    url: t,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: e,
                                    success: function(e) {
                                        1 == e.data.status ? (e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                        e = JSON.parse(e), r.setStorageSync("userinfo", e.userinfo), n.userinfo = e.userinfo, 
                                        "login" == o && (n.closeDialog2(), r.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        })), 1 == n.currentIndex ? n.load_elmscqrcode2() : n.load_elmwmqrcode2()) : r.showToast({
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
                    updatepid: function() {
                        var e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
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
                    gethongbao_elmwm: function() {
                        if (r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type) {
                            var a = this;
                            if (0 < r.getStorageSync("setting").warn_tplid.length && r.getStorageSync("warn_daynum") < r.getStorageSync("setting").warn_tpl_daynum) wx.requestSubscribeMessage({
                                tmplIds: r.getStorageSync("setting").warn_tplid,
                                success: function(e) {
                                    if (console.log(e), "reject" == e[r.getStorageSync("setting").warn_yhq_tplid]) {
                                        if (0 == a.currentIndex && r.getStorageSync("elmwm_url")) r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmwm_url")
                                        }), a.updatepid(), console.log(r.getStorageSync("elmwm_url")); else if (0 == a.currentIndex && !r.getStorageSync("elmwm_url")) return a.appid_type = 3, 
                                        void a.gettaobaoauth();
                                        if (1 == a.currentIndex && r.getStorageSync("elmsc_url")) r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmsc_url")
                                        }), a.updatepid(), console.log(r.getStorageSync("elmsc_url")); else if (1 == a.currentIndex && !r.getStorageSync("elmsc_url")) return a.appid_type = 4, 
                                        void a.gettaobaoauth();
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
                                                r.setStorageSync("warn_daynum", e.data.warm_daynum);
                                            }
                                        });
                                    } else {
                                        var t = i.globalData.util.url("entry/wxapp/api", {
                                            m: i.globalData.module_name,
                                            o: "subscribemessage"
                                        });
                                        if (r.request({
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
                                        }), 0 == a.currentIndex && r.getStorageSync("elmwm_url")) r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmwm_url")
                                        }), a.updatepid(), console.log(r.getStorageSync("elmwm_url")); else if (0 == a.currentIndex && !r.getStorageSync("elmwm_url")) return a.appid_type = 3, 
                                        void a.gettaobaoauth();
                                        if (1 == a.currentIndex && r.getStorageSync("elmsc_url")) r.navigateToMiniProgram({
                                            appId: "wxece3a9a4c82f58c9",
                                            path: r.getStorageSync("elmsc_url")
                                        }), a.updatepid(), console.log(r.getStorageSync("elmsc_url")); else if (1 == a.currentIndex && !r.getStorageSync("elmsc_url")) return a.appid_type = 4, 
                                        void a.gettaobaoauth();
                                    }
                                },
                                fail: function() {
                                    if (0 == a.currentIndex && r.getStorageSync("elmwm_url")) r.navigateToMiniProgram({
                                        appId: "wxece3a9a4c82f58c9",
                                        path: r.getStorageSync("elmwm_url")
                                    }), a.updatepid(), console.log(r.getStorageSync("elmwm_url")); else if (0 == a.currentIndex && !r.getStorageSync("elmwm_url")) return a.appid_type = 3, 
                                    void a.gettaobaoauth();
                                    if (1 == a.currentIndex && r.getStorageSync("elmsc_url")) r.navigateToMiniProgram({
                                        appId: "wxece3a9a4c82f58c9",
                                        path: r.getStorageSync("elmsc_url")
                                    }), a.updatepid(), console.log(r.getStorageSync("elmsc_url")); else if (1 == a.currentIndex && !r.getStorageSync("elmsc_url")) return a.appid_type = 4, 
                                    void a.gettaobaoauth();
                                }
                            }); else {
                                var e = i.globalData.util.url("entry/wxapp/api", {
                                    m: i.globalData.module_name,
                                    o: "subscribemessage"
                                });
                                if (r.request({
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
                                }), 0 == a.currentIndex && r.getStorageSync("elmwm_url")) r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: r.getStorageSync("elmwm_url")
                                }), a.updatepid(), console.log(r.getStorageSync("elmwm_url")); else if (0 == a.currentIndex && !r.getStorageSync("elmwm_url")) return a.appid_type = 3, 
                                void a.gettaobaoauth();
                                if (1 == a.currentIndex && r.getStorageSync("elmsc_url")) r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: r.getStorageSync("elmsc_url")
                                }), a.updatepid(), console.log(r.getStorageSync("elmsc_url")); else if (1 == a.currentIndex && !r.getStorageSync("elmsc_url")) return a.appid_type = 4, 
                                void a.gettaobaoauth();
                            }
                        } else this.showDialog2();
                    },
                    taobaoauth: function() {
                        var t = this;
                        r.setClipboardData({
                            data: this.qudao_tkl,
                            success: function(e) {
                                r.showToast({
                                    title: "复制成功，请打开淘宝APP授权",
                                    icon: "none"
                                }), t.is_qudao_tkl = 1;
                            }
                        });
                    },
                    tapButton: function() {
                        1 == this.currentIndex ? this.h5 = r.getStorageSync("elmsc_h5") : this.h5 = r.getStorageSync("elmwm_h5"), 
                        r.setClipboardData({
                            data: this.h5,
                            success: function(e) {
                                r.showToast({
                                    title: "复制成功",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    copy_wm: function() {
                        if (1 == r.getStorageSync("setting").poster_type) {
                            if (!r.getStorageSync("elmwm_h5")) return void r.showToast({
                                title: "请先生成海报",
                                icon: "none"
                            });
                            var e = r.getStorageSync("elmwm_h5");
                        } else e = r.getStorageSync("setting").waimaitt_elmwm_tuantext_c;
                        r.setClipboardData({
                            data: e,
                            success: function(e) {
                                r.showToast({
                                    title: "复制成功",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    copy_sc: function() {
                        if (1 == r.getStorageSync("setting").poster_type) {
                            if (!r.getStorageSync("elmsc_h5")) return void r.showToast({
                                title: "请先生成海报",
                                icon: "none"
                            });
                            var e = r.getStorageSync("elmsc_h5");
                        } else e = r.getStorageSync("setting").waimaitt_elmsc_tuantext_c;
                        r.setClipboardData({
                            data: e,
                            success: function(e) {
                                r.showToast({
                                    title: "复制成功",
                                    icon: "none"
                                });
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
                        var a = this;
                        0 == a.currentIndex ? a.appid_type = 3 : a.appid_type = 4;
                        var e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
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
                                0 != e.data.status ? (t = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                t = JSON.parse(t), 1 == e.data.status ? (3 == a.appid_type && (r.setStorageSync("elmwm_url", t.elmwm_url), 
                                a.elmwmqrcode = t.elmwm_qrcode, a.closeDialog1(), r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: t.elmwm_url
                                }), console.log(r.getStorageSync("elmwm_url"))), 4 == a.appid_type && (r.setStorageSync("elmsc_url", t.elmsc_url), 
                                a.elmscqrcode = t.elmsc_qrcode, a.closeDialog1(), r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: t.elmsc_url
                                }), console.log(r.getStorageSync("elmsc_url")))) : r.showModal({
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
                        var t = this, a = this;
                        if (0 == a.currentIndex && r.getStorageSync("elmwm_url")) return r.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: r.getStorageSync("elmwm_url")
                        }), void console.log(r.getStorageSync("elmwm_url"));
                        if (1 == a.currentIndex && r.getStorageSync("elmsc_url")) return r.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: r.getStorageSync("elmsc_url")
                        }), void console.log(r.getStorageSync("elmsc_url"));
                        0 == a.currentIndex ? a.appid_type = 3 : a.appid_type = 4;
                        var e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
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
                                }) : 2 == e.data.status && (e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                e = JSON.parse(e), 3 == t.appid_type && (r.setStorageSync("elmwm_url", e.elmwm_url), 
                                r.setStorageSync("elmwm_h5", e.elmwm_h5), r.setStorageSync("elmwm_qrcode2", e.elmwm_qrcode), 
                                r.setStorageSync("pid_time", +e.pid_time), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", e.is_qudao), r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: e.elmwm_url
                                }), console.log(r.getStorageSync("elmwm_url"))), 4 == t.appid_type && (r.setStorageSync("elmsc_url", e.elmsc_url), 
                                r.setStorageSync("elmsc_h5", e.elmsc_h5), r.setStorageSync("elmsc_qrcode2", e.elmsc_qrcode), 
                                r.setStorageSync("pid_time", +e.pid_time), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", e.is_qudao), r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: e.elmsc_url
                                }), console.log(r.getStorageSync("elmsc_url"))));
                            }
                        });
                    },
                    gettaobaoauth1: function(e) {
                        var t = this, a = this;
                        0 == a.currentIndex ? a.appid_type = 3 : a.appid_type = 4;
                        var o = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode_mtelm"
                        });
                        r.request({
                            url: o,
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
                                }) : 2 == e.data.status && (e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                e = JSON.parse(e), 3 == t.appid_type && (r.setStorageSync("elmwm_url", e.elmwm_url), 
                                r.setStorageSync("elmwm_h5", e.elmwm_h5), r.setStorageSync("elmwm_qrcode2", e.elmwm_qrcode), 
                                r.setStorageSync("pid_time", +e.pid_time), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", e.is_qudao)), 4 == t.appid_type && (r.setStorageSync("elmsc_url", e.elmsc_url), 
                                r.setStorageSync("elmsc_h5", e.elmsc_h5), r.setStorageSync("elmsc_qrcode2", e.elmsc_qrcode), 
                                r.setStorageSync("pid_time", +e.pid_time), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", e.is_qudao)));
                            }
                        });
                    },
                    close_poster: function() {
                        this.show_poster = !1;
                    },
                    previewImage: function(e) {
                        r.previewImage({
                            urls: [ e.currentTarget.dataset.src ],
                            current: 0
                        });
                    },
                    navChange: function(e) {
                        r.setStorageSync("index_nav", ""), this.loadposter = 0, this.currentIndex = e, 1 == this.currentIndex ? (this.pagebgcolor = r.getStorageSync("setting").waimaitt_elmsc_bgcolor, 
                        this.bgImg = r.getStorageSync("setting").waimaitt_elmsc_poster ? r.getStorageSync("setting").waimaitt_elmsc_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmsc.png", 
                        this.qrcode = r.getStorageSync("elmscqrcode"), this.load_elmscqrcode2()) : (this.pagebgcolor = r.getStorageSync("setting").waimaitt_elmwm_bgcolor, 
                        this.bgImg = r.getStorageSync("setting").waimaitt_elmwm_poster ? r.getStorageSync("setting").waimaitt_elmwm_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmwm.png", 
                        this.qrcode = r.getStorageSync("elmwmqrcode"), this.load_elmwmqrcode2());
                    },
                    swiperChange: function(e) {
                        r.setStorageSync("index_nav", ""), this.loadposter = 0;
                        e = e.detail.current;
                        this.currentIndex = e, 1 == this.currentIndex ? (this.pagebgcolor = r.getStorageSync("setting").waimaitt_elmsc_bgcolor, 
                        this.bgImg = r.getStorageSync("setting").waimaitt_elmsc_poster ? r.getStorageSync("setting").waimaitt_elmsc_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmsc.png", 
                        this.qrcode = r.getStorageSync("elmscqrcode"), this.elmscposter ? this.imgSrc = this.elmscposter : this.imgSrc = "", 
                        this.load_elmscqrcode2()) : (this.pagebgcolor = r.getStorageSync("setting").waimaitt_elmwm_bgcolor, 
                        this.bgImg = r.getStorageSync("setting").waimaitt_elmwm_poster ? r.getStorageSync("setting").waimaitt_elmwm_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmwm.png", 
                        this.qrcode = r.getStorageSync("elmwmqrcode"), this.elmwmposter ? this.imgSrc = this.elmwmposter : this.imgSrc = "", 
                        this.load_elmwmqrcode2());
                    },
                    goback: function() {
                        r.navigateBack({});
                    },
                    gohome: function() {
                        r.switchTab({
                            url: "../index/index"
                        });
                    },
                    getposter_elmwm1: function() {
                        var t, e, a = this;
                        r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? (e = "", 
                        e = 0 == (t = this).currentIndex ? (t.appid_type = 3, r.getStorageSync("elmwm_qrcode2")) : (t.appid_type = 4, 
                        r.getStorageSync("elmsc_qrcode2")), 1 != r.getStorageSync("setting").poster_type || e || (e = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "gettaobaoauth"
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
                                1 == e.data.status ? (t.showDialog1(), t.qudao_tkl = e.data.data) : 0 == e.data.status ? r.showToast({
                                    title: "获取授权信息出错",
                                    icon: "none"
                                }) : 2 == e.data.status && (e = i.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                e = JSON.parse(e), 3 == a.appid_type && (r.setStorageSync("elmwm_url", e.elmwm_url), 
                                r.setStorageSync("elmwm_h5", e.elmwm_h5), r.setStorageSync("elmwm_qrcode2", e.elmwm_qrcode), 
                                r.setStorageSync("pid_time", +e.pid_time), r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", e.is_qudao), console.log(r.getStorageSync("elmwm_url"))), 
                                4 == a.appid_type && (r.setStorageSync("elmsc_url", e.elmsc_url), r.setStorageSync("elmsc_h5", e.elmsc_h5), 
                                r.setStorageSync("elmsc_qrcode2", e.elmsc_qrcode), r.setStorageSync("pid_time", +e.pid_time), 
                                r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && r.setStorageSync("pid_use_time", r.getStorageSync("pid_time")), 
                                r.setStorageSync("is_qudao", e.is_qudao), console.log(r.getStorageSync("elmsc_url"))));
                            }
                        })), 1 == this.currentIndex ? r.getStorageSync("elmscposter") && -1 != r.getStorageSync("elmscposter").indexOf("mp.weixin") ? r.navigateTo({
                            url: "../movieA/webview?return_url=" + encodeURIComponent(r.getStorageSync("elmscposter"))
                        }) : (r.showLoading({
                            title: "加载中...",
                            mask: !1
                        }), r.getStorageSync("elmscposter") || r.setStorageSync("elmscposter", r.getStorageSync("setting").static_domain + "addons/" + t.module_name + "/static/images/poster/1.png"), 
                        r.getImageInfo({
                            src: r.getStorageSync("elmscposter"),
                            success: function(e) {
                                t.show_poster = !0, t.imgSrc = r.getStorageSync("elmscposter"), t.h5 = r.getStorageSync("elmsc_h5"), 
                                r.hideLoading();
                            },
                            fail: function(e) {
                                t.loadposter = 1, t.getposter_elmwm();
                            }
                        })) : r.getStorageSync("elmwmposter") && -1 != r.getStorageSync("elmwmposter").indexOf("mp.weixin") ? r.navigateTo({
                            url: "../movieA/webview?return_url=" + encodeURIComponent(r.getStorageSync("elmwmposter"))
                        }) : (r.showLoading({
                            title: "加载中...",
                            mask: !1
                        }), r.getStorageSync("elmwmposter") || r.setStorageSync("elmwmposter", r.getStorageSync("setting").static_domain + "addons/" + t.module_name + "/static/images/poster/1.png"), 
                        r.getImageInfo({
                            src: r.getStorageSync("elmwmposter"),
                            success: function(e) {
                                t.show_poster = !0, t.imgSrc = r.getStorageSync("elmwmposter"), t.h5 = r.getStorageSync("elmwm_h5"), 
                                r.hideLoading();
                            },
                            fail: function(e) {
                                t.loadposter = 1, t.getposter_elmwm();
                            }
                        }))) : this.showDialog2();
                    },
                    getposter_elmwm: function() {
                        var t = this;
                        1 == this.currentIndex ? (t.qrcode = t.elmscqrcode, r.getStorageSync("elmscposter") ? -1 != r.getStorageSync("elmscposter").indexOf("mp.weixin") || r.getImageInfo({
                            src: r.getStorageSync("elmscposter"),
                            success: function(e) {
                                t.imgSrc = r.getStorageSync("elmscposter");
                            },
                            fail: function(e) {
                                t.context = r.createCanvasContext("graceCanvas"), t.initSize(), setTimeout(function() {
                                    t.draw();
                                }, 1e3);
                            }
                        }) : (t.context = r.createCanvasContext("graceCanvas"), t.initSize(), setTimeout(function() {
                            t.draw();
                        }, 1e3))) : (t.qrcode = t.elmwmqrcode, r.getStorageSync("elmwmposter") ? -1 != r.getStorageSync("elmwmposter").indexOf("mp.weixin") || r.getImageInfo({
                            src: r.getStorageSync("elmwmposter"),
                            success: function(e) {
                                t.imgSrc = r.getStorageSync("elmwmposter");
                            },
                            fail: function(e) {
                                t.context = r.createCanvasContext("graceCanvas"), t.initSize(), setTimeout(function() {
                                    t.draw();
                                }, 1e3);
                            }
                        }) : (t.context = r.createCanvasContext("graceCanvas"), t.initSize(), setTimeout(function() {
                            t.draw();
                        }, 1e3)));
                    },
                    initSize: function() {
                        this.widthIn = r.upx2px(this.width) * this.multiple, this.heightIn = r.upx2px(this.cheight) * this.multiple;
                    },
                    draw: function() {
                        var e = this;
                        this.step01(), "" != this.bgImg ? this.drawBGIMG(this.bgImg, function() {
                            e.step03();
                        }) : this.step03();
                    },
                    step01: function() {},
                    step03: function() {
                        var n = this;
                        1 == this.currentIndex ? 1 == r.getStorageSync("setting").poster_type ? this.qrcode = r.getStorageSync("elmsc_qrcode2") : this.qrcode = this.elmscqrcode : 1 == r.getStorageSync("setting").poster_type ? this.qrcode = r.getStorageSync("elmwm_qrcode2") : this.qrcode = this.elmwmqrcode, 
                        r.downloadFile({
                            url: this.qrcode,
                            success: function(e) {
                                var t, a, o;
                                200 === e.statusCode && (console.log("ok"), t = 0 == n.currentIndex ? (a = r.getStorageSync("setting").waimaitt_elmwm_poster_qrcode ? r.getStorageSync("setting").waimaitt_elmwm_poster_qrcode : 350, 
                                o = r.getStorageSync("setting").waimaitt_elmwm_poster_qrcodex ? r.getStorageSync("setting").waimaitt_elmwm_poster_qrcodex : 0, 
                                r.getStorageSync("setting").waimaitt_elmwm_poster_qrcodey ? r.getStorageSync("setting").waimaitt_elmwm_poster_qrcodey : 615) : (a = r.getStorageSync("setting").waimaitt_elmsc_poster_qrcode ? r.getStorageSync("setting").waimaitt_elmsc_poster_qrcode : 350, 
                                o = r.getStorageSync("setting").waimaitt_elmsc_poster_qrcodex ? r.getStorageSync("setting").waimaitt_elmsc_poster_qrcodex : 0, 
                                r.getStorageSync("setting").waimaitt_elmsc_poster_qrcodey ? r.getStorageSync("setting").waimaitt_elmsc_poster_qrcodey : 615), 
                                a = r.upx2px(a) * n.multiple, o = r.upx2px(o) * n.multiple, o = (n.widthIn - a + o) / 2, 
                                n.context.drawImage(e.tempFilePath, o, n.heightIn - r.upx2px(t) * n.multiple, a, a), 
                                n.drawIt());
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    },
                    drawText: function(e, t, a, o, n, r) {},
                    drawIt: function() {
                        var t = this;
                        this.imgSrc = "", this.context.draw(!0, function() {
                            r.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: t.widthIn,
                                height: t.heightIn,
                                destWidth: t.widthIn,
                                destHeight: t.heightIn,
                                canvasId: "graceCanvas",
                                success: function(e) {
                                    console.log(e), 1 == t.loadposter && (t.show_poster = !0, t.loadposter = 0), 1 == t.currentIndex ? (t.elmscposter = e.tempFilePath, 
                                    t.imgSrc = e.tempFilePath, t.h5 = r.getStorageSync("elmsc_h5"), r.setStorageSync("elmscposter", e.tempFilePath)) : (t.elmwmposter = e.tempFilePath, 
                                    t.imgSrc = e.tempFilePath, r.setStorageSync("elmwmposter", e.tempFilePath), t.h5 = r.getStorageSync("elmwm_h5")), 
                                    setTimeout(function() {
                                        r.hideLoading();
                                    }, 1e3);
                                },
                                fail: function(e) {
                                    console.log(e), r.hideLoading();
                                }
                            });
                        });
                    },
                    drawBGIMG: function(e, a) {
                        var o = this;
                        r.downloadFile({
                            url: e,
                            success: function(t) {
                                200 == t.statusCode && r.getImageInfo({
                                    src: t.tempFilePath,
                                    success: function(e) {
                                        e = o.widthIn / e.width * e.height;
                                        console.log(e), o.context.drawImage(t.tempFilePath, 0, 0, o.widthIn, e), a();
                                    }
                                });
                            }
                        });
                    },
					showBtnBar: async function() {
						const [res, err] = await request({
						  api: '/program/mall/moreCoupon'
						})
						if (!err) {
						  const {data = {}} = res
						  if (data && data.elm.length > 0 ) {
							  this.btnBar = data.elm;
							  if (this.btnBar.length > 0) {
							  	this.btnBarHeight = 600 + (this.btnBar.length * 50)
							  }
						  }
						}
					},
					addCouponTo: function(e) {
						const {index} = e.currentTarget.dataset
						r.navigateToMiniProgram({
							appId: this.btnBar[index].appid,
							path: this.btnBar[index].path
						})
					},
                    onShareAppMessage: function() {
                        var e = "pages/index/index?to=elm&uid=" + r.getStorageSync("userinfo").user_id;
                        return {
                            title: r.getStorageSync("setting").sharetitle,
                            imageUrl: r.getStorageSync("setting").sharethumb,
                            path: e
                        };
                    }
                }
            };
            t.default = e;
        }).call(this, a("543d").default);
    }
}, [ [ "c59d", "common/runtime", "common/vendor" ] ] ]);