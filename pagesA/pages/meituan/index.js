require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/meituan/index" ], {
    2942: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("0cda"), e(a("66fd")), t(e(a("72a9")).default);
        }).call(this, a("543d").createPage);
    },
    "2b33": function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return r;
        }), a.d(e, "a", function() {
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
    "2d4a": function(t, e, a) {},
    "72a9": function(t, e, a) {
        a.r(e);
        var o, n = a("2b33"), r = a("b2f5");
        for (o in r) "default" !== o && function(t) {
            a.d(e, t, function() {
                return r[t];
            });
        }(o);
        a("a54f");
        var i = a("f0c5"), n = Object(i.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = n.exports;
    },
    "7c3e": function(t, a, o) {
        (function(r) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
			require('../../../common/main.js');
            var i = getApp(), e = o("e5c8"), t = {
                data: function() {
                    return {
                        module_name: i.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: r.getStorageSync("userinfo"),
                        setting: r.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        h5: "",
                        cz: 0,
                        loadposter: 0,
                        appid_type: 0,
                        qudao_tkl: "",
                        is_qudao_tkl: 0,
                        showAlert_taobaoauth: !1,
                        elm_url: [],
                        meituan_url: [],
                        show_poster: !1,
                        currentIndex: 0,
                        tabs: [ "外卖", "商超" ],
                        mainHeight: 800,
                        pageLoading: !0,
                        pagebgcolor: r.getStorageSync("setting").waimaitt_meituanwm_bgcolor,
                        qrcode: "",
                        mtwmqrcode: "",
                        mtscqrcode: "",
                        mtwmposter: "",
                        mtscposter: "",
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
                        page: {},
                        url: "",
                        title: "",
                        op: "",
                        home_url: "",
                        contact_title: "",
                        contact_title_text: "",
                        contact_title_desc: "",
                        contact_id: "",
                        contact_type: "",
                        contact_thumb: "",
                        pageKey: "",
                        height: "",
                        tabBar: [],
                        mtpic: 0
                    };
                },
                components: {
                    gracePage: function() {
                        o.e("graceUI/components/gracePage").then(function() {
                            return resolve(o("1021"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    graceHeader: function() {
                        o.e("graceUI/components/graceHeader").then(function() {
                            return resolve(o("266b"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    graceNavBar: function() {
                        o.e("graceUI/components/graceNavBar").then(function() {
                            return resolve(o("a631"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    graceShade: function() {
                        o.e("graceUI/components/graceShade").then(function() {
                            return resolve(o("31ed"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    graceDialog: function() {
                        o.e("graceUI/components/graceDialog").then(function() {
                            return resolve(o("f85d"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    graceLoading: function() {
                        o.e("graceUI/components/graceLoading").then(function() {
                            return resolve(o("1d04"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    graceAnalysis: function() {
                        o.e("graceUI/components/graceAnalysis").then(function() {
                            return resolve(o("b6ee"));
                        }.bind(null, o)).catch(o.oe);
                    }
                },
                props: {},
                onShow: function() {
                    this.tabBar = r.getStorageSync("tabbar");
                    for (var t = 0; t < this.tabBar.list.length; t++) -1 != this.tabBar.list[t].url.indexOf("meituan/index") && (this.pageKey = t);
                    this.userinfo = r.getStorageSync("userinfo"), -1 != r.getStorageSync("index_nav").indexOf("mtsc") ? this.currentIndex = 1 : r.getStorageSync("index_nav") && (this.currentIndex = 0), 
                    1 == this.currentIndex ? (this.h5 = r.getStorageSync("mtsc_h5"), this.load_mtscqrcode2()) : (this.h5 = r.getStorageSync("mtwm_h5"), 
                    this.load_mtwmqrcode2()), this.meituan_urlFun2();
                    var e = i.globalData.util.url("entry/wxapp/api", {
                        m: i.globalData.module_name,
                        o: "subscribemessage"
                    });
                    r.request({
                        url: e,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            openid: r.getStorageSync("openid"),
                            type: 2
                        },
                        success: function(t) {
                            r.setStorageSync("warn_daynum", t.data.warm_daynum);
                        }
                    });
                },
                onReady: function() {
                    var e = this;
                    setTimeout(function() {
                        r.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(t) {
                            e.mainHeight = t.height;
                        }).exec();
                    }, 1e3), setTimeout(function() {
                        e.pageLoading = !1;
                    }, 1500);
                },
                onPullDownRefresh: function() {
                    this.loadsetting(), this.loadtabbar();
                },
                onLoad: function(t) {
                    var e = this;
                    this.module_name = i.globalData.module_name;
                    var a = this;
                    r.setStorageSync("invite_uid", t.uid), r.getStorageSync("tabbar") ? this.tabBar = r.getStorageSync("tabbar") : r.getStorageSync("userinfo") && this.loadtabbar(), 
                    this.setting = r.getStorageSync("setting"), this.userinfo = r.getStorageSync("userinfo"), 
                    this.mtwmqrcode = r.getStorageSync("mtwmqrcode"), this.mtscqrcode = r.getStorageSync("mtscqrcode"), 
                    this.mtwmposter = r.getStorageSync("mtwmposter"), this.mtscposter = r.getStorageSync("mtscposter"), 
                    this.pagebgcolor = r.getStorageSync("setting").waimaitt_meituanwm_bgcolor, this.bgImg = r.getStorageSync("setting").waimaitt_meituanwm_poster ? r.getStorageSync("setting").waimaitt_meituanwm_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/meituan.png", 
                    this.loadsetting(), null != r.getStorageSync("userinfo") && r.getStorageSync("userinfo") || r.login({
                        success: function(t) {
                            e.wxCode = t.code;
                            t = t.code;
                            i.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: t
                                },
                                cachetime: 0,
                                success: function(t) {
                                    var e;
                                    t.data.errno || (r.setStorageSync("openid", t.data.data.openid), "undefined" != r.getStorageSync("tabbar") && r.getStorageSync("tabbar") || a.loadtabbar(), 
                                    r.setStorageSync("unionid", t.data.data.userinfo.unionid), e = i.globalData.util.url("entry/wxapp/api", {
                                        m: i.globalData.module_name,
                                        o: "userinfo"
                                    }), r.request({
                                        url: e,
                                        method: "GET",
                                        data: {
                                            openid: t.data.data.openid,
                                            invite_uid: r.getStorageSync("invite_uid")
                                        },
                                        success: function(t) {
                                            t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                            t.openid && (r.setStorageSync("userinfo", t.userinfo), r.setStorageSync("pid_use_time", t.pid_time), 
                                            r.getStorageSync("pid_time") != r.getStorageSync("pid_use_time") && (r.setStorageSync("elmwm_url", ""), 
                                            r.setStorageSync("elmsc_url", ""), r.setStorageSync("elmwmposter", ""), r.setStorageSync("elmscposter", ""), 
                                            r.setStorageSync("pid_time", r.getStorageSync("pid_use_time"))), a.systemtype = r.getStorageSync("systemtype"), 
                                            a.userinfo = t.userinfo, a.getWxCode());
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                methods: {
                    change: function(t) {
                        var e = this;
                        console.log(this.tabBar.list), console.log(this.tabBar.list[t]);
                        var a = this.tabBar.list[t];
                        if (console.log(a), this.pageKey = t, r.setStorageSync("pageKey", t), r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type) {
                            if (1 == a.adtype) {
                                if (1 == a.appid_type && r.getStorageSync("mtwm_url")) return void r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: r.getStorageSync("mtwm_url")
                                });
                                if (1 == a.appid_type && !r.getStorageSync("mtwm_url")) return e.appid_type = 1, 
                                void e.meituan_urlFun();
                                if (2 == a.appid_type && r.getStorageSync("mtsc_url")) return void r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: r.getStorageSync("mtsc_url")
                                });
                                if (2 == a.appid_type && !r.getStorageSync("mtsc_url")) return e.appid_type = 2, 
                                void e.meituan_urlFun();
                                if (3 == a.appid_type && r.getStorageSync("elmwm_url")) return r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: r.getStorageSync("elmwm_url")
                                }), e.updatepid(), void console.log(r.getStorageSync("elmwm_url"));
                                if (3 == a.appid_type && !r.getStorageSync("elmwm_url")) return e.appid_type = 3, 
                                void e.gettaobaoauth();
                                if (4 == a.appid_type && r.getStorageSync("elmsc_url")) return r.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: r.getStorageSync("elmsc_url")
                                }), e.updatepid(), void console.log(r.getStorageSync("elmsc_url"));
                                if (4 == a.appid_type && !r.getStorageSync("elmsc_url")) return console.log("ccc"), 
                                e.appid_type = 4, void e.gettaobaoauth();
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
                                    success: function(t) {}
                                }), this.contact_title_desc = "", this.contact_type = "ad", this.contact_id = a.adid, 
                                this.contact_title = a.title, this.contact_title_text = a.title_text, this.contact_title_desc = a.title_desc, 
                                this.contact_thumb = r.getStorageSync("setting").dianwo, this.showDialog3());
                            } else r.navigateTo({
                                url: "../movieA/webview?return_url=" + encodeURIComponent(a.url)
                            });
                        } else this.showDialog2();
                    },
                    fatherHeight: function(t) {
                        this.height = t;
                    },
                    loadsetting: function() {
                        var e = this, t = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "setting"
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
                            success: function(t) {
                                t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                r.setStorageSync("setting", t.setting), e.setting = r.getStorageSync("setting"), 
                                e.systemtype = r.getStorageSync("systemtype");
                            }
                        });
                    },
                    loadtabbar: function() {
                        var t, e = this;
                        "undefined" != r.getStorageSync("tabbar") && r.getStorageSync("tabbar") ? this.tabBar = r.getStorageSync("tabbar") : (t = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "tabbar"
                        }), r.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.tabBar = t.data.tabbar, r.setStorageSync("tabbar", e.tabBar);
                            }
                        }));
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
                    tapButton: function() {
                        1 == this.currentIndex ? this.h5 = r.getStorageSync("mtsc_h5") : this.h5 = r.getStorageSync("mtwm_h5"), 
                        r.setClipboardData({
                            data: this.h5,
                            success: function(t) {
                                r.showToast({
                                    title: "复制成功",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    copy_wm: function() {
                        var t = 1 == r.getStorageSync("setting").poster_type ? r.getStorageSync("mtwm_h5") : r.getStorageSync("setting").waimaitt_meituanwm_tuantext_c;
                        r.setClipboardData({
                            data: t,
                            success: function(t) {
                                r.showToast({
                                    title: "复制成功",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    copy_sc: function() {
                        var t = 1 == r.getStorageSync("setting").poster_type ? r.getStorageSync("mtsc_h5") : r.getStorageSync("setting").waimaitt_meituansc_tuantext_c;
                        r.setClipboardData({
                            data: t,
                            success: function(t) {
                                r.showToast({
                                    title: "复制成功",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    userlogin: function() {
                        r.getStorageSync("userinfo").nickname ? this.closeDialog2() : this.showDialog2();
                    },
                    login: function(e) {
                        var a = this;
                        this.closeDialog2(), r.getSetting({
                            success: function(t) {
                                t.authSetting["scope.userInfo"] ? r.getUserProfile({
									desc: '用于完善会员资料',
                                    success: function(t) {
                                        a.userAuth(e, t, "login");
                                    }
                                }) : a.userAuth(e, null, "login");
                            }
                        });
                    },
                    getWxCode: function() {
                        var e = this;
                        wx.login({
                            success: function(t) {
                                e.wxCode = t.code;
                            }
                        });
                    },
                    userAuth: function(a, tt, o) {
                        var n = this;
                        "getUserProfile:ok" == tt.errMsg ? wx.login({
                            success: function(t) {
                                var e = i.globalData.util.url("entry/wxapp/api", {
                                    m: i.globalData.module_name,
                                    o: "userinfo"
                                }), t = {
                                    code: t.code,
                                    encryptedData: tt.encryptedData,
                                    iv: tt.iv,
                                    openid: r.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                r.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: t,
                                    success: function(t) {
                                        1 == t.data.status && (t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), 
                                        t = JSON.parse(t), r.setStorageSync("userinfo", t.userinfo), n.userinfo = t.userinfo, 
                                        "login" == o && (n.closeDialog2(), r.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        })), 1 == n.currentIndex ? n.load_mtscqrcode2() : n.load_mtwmqrcode2());
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
                    meituan_urlFun: function() {
                        var e = this, a = this;
                        if (1 == a.appid_type && r.getStorageSync("mtwm_url")) return 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                            urls: [ r.getStorageSync("mtwmqrcode2") ]
                        }) : void r.navigateToMiniProgram({
                            appId: "wxde8ac0a21135c07d",
                            path: r.getStorageSync("mtwm_url")
                        });
                        if (2 == a.appid_type && r.getStorageSync("mtsc_url")) return 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                            urls: [ r.getStorageSync("mtscqrcode2") ]
                        }) : void r.navigateToMiniProgram({
                            appId: "wxde8ac0a21135c07d",
                            path: r.getStorageSync("mtsc_url")
                        });
                        var t = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode_mtelm"
                        });
                        r.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                appid_type: a.appid_type
                            },
                            success: function(t) {
                                t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log(t), 1 == a.appid_type && (r.setStorageSync("mtwm_url", t.mtwm_url), 
                                r.setStorageSync("mtwm_h5", t.mtwm_h5), r.setStorageSync("mtwmqrcode2", t.mtwm_qrcode), 
                                e.h5 = t.mtwm_h5, 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? r.previewImage({
                                    urls: [ r.getStorageSync("mtwmqrcode2") ]
                                }) : r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: t.mtwm_url
                                })), 2 == a.appid_type && (r.setStorageSync("mtsc_url", t.mtsc_url), r.setStorageSync("mtsc_h5", t.mtsc_h5), 
                                r.setStorageSync("mtscqrcode2", t.mtsc_qrcode), e.h5 = t.mtsc_h5, 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? r.previewImage({
                                    urls: [ r.getStorageSync("mtscqrcode2") ]
                                }) : r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: t.mtsc_url
                                }));
                            }
                        });
                    },
                    meituan_urlFun2: function() {
                        var t, e = this, a = this;
                        0 == this.currentIndex && r.getStorageSync("mtwmqrcode2") || 1 == this.currentIndex && r.getStorageSync("mtscqrcode2") || (1 == this.currentIndex ? a.appid_type = 2 : a.appid_type = 1, 
                        t = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode_mtelm"
                        }), r.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                appid_type: a.appid_type,
                                type: 1
                            },
                            success: function(t) {
                                t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log(t), 1 == a.appid_type && (r.setStorageSync("mtwm_h5", t.mtwm_h5), r.setStorageSync("mtwmqrcode2", t.mtwm_qrcode), 
                                e.h5 = t.mtwm_h5), 2 == a.appid_type && (r.setStorageSync("mtsc_h5", t.mtsc_h5), 
                                r.setStorageSync("mtscqrcode2", t.mtsc_qrcode), e.h5 = t.mtsc_h5);
                            }
                        }));
                    },
                    gethongbao_mtwm: function() {
                        var a = this;
                        if (r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type) {
                            if (!(0 < r.getStorageSync("setting").warn_tplid.length && r.getStorageSync("warn_daynum") < r.getStorageSync("setting").warn_tpl_daynum)) {
                                var t = i.globalData.util.url("entry/wxapp/api", {
                                    m: i.globalData.module_name,
                                    o: "subscribemessage"
                                });
                                return (r.request({
                                    url: t,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        openid: r.getStorageSync("openid"),
                                        type: 2
                                    },
                                    success: function(t) {
                                        r.setStorageSync("warn_daynum", t.data.warm_daynum);
                                    }
                                }), 1 == a.currentIndex && r.getStorageSync("mtsc_url")) ? 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                                    urls: [ r.getStorageSync("mtscqrcode2") ]
                                }) : void r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: r.getStorageSync("mtsc_url")
                                }) : 1 != a.currentIndex || r.getStorageSync("mtsc_url") ? 0 == a.currentIndex && r.getStorageSync("mtwm_url") ? 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                                    urls: [ r.getStorageSync("mtwmqrcode2") ]
                                }) : void r.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: r.getStorageSync("mtwm_url")
                                }) : 0 != a.currentIndex || r.getStorageSync("mtwm_url") ? void 0 : (a.appid_type = 1, 
                                void a.meituan_urlFun()) : (a.appid_type = 2, void a.meituan_urlFun());
                            }
                            wx.requestSubscribeMessage({
                                tmplIds: r.getStorageSync("setting").warn_tplid,
                                success: function(t) {
                                    if (console.log(t), "reject" != t[r.getStorageSync("setting").warn_yhq_tplid]) return e = i.globalData.util.url("entry/wxapp/api", {
                                        m: i.globalData.module_name,
                                        o: "subscribemessage"
                                    }), r.request({
                                        url: e,
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        data: {
                                            openid: r.getStorageSync("openid"),
                                            type: 1
                                        },
                                        success: function(t) {
                                            r.setStorageSync("warn_daynum", t.data.warm_daynum);
                                        }
                                    }), 1 == a.currentIndex && r.getStorageSync("mtsc_url") ? 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtscqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtsc_url")
                                    }) : 1 != a.currentIndex || r.getStorageSync("mtsc_url") ? 0 == a.currentIndex && r.getStorageSync("mtwm_url") ? 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtwmqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtwm_url")
                                    }) : 0 != a.currentIndex || r.getStorageSync("mtwm_url") ? void 0 : (a.appid_type = 1, 
                                    void a.meituan_urlFun()) : (a.appid_type = 2, void a.meituan_urlFun());
                                    if (1 == a.currentIndex && r.getStorageSync("mtsc_url")) return 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtscqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtsc_url")
                                    });
                                    if (1 == a.currentIndex && !r.getStorageSync("mtsc_url")) return a.appid_type = 2, 
                                    void a.meituan_urlFun();
                                    if (0 == a.currentIndex && r.getStorageSync("mtwm_url")) return 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtwmqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtwm_url")
                                    });
                                    if (0 == a.currentIndex && !r.getStorageSync("mtwm_url")) return a.appid_type = 1, 
                                    void a.meituan_urlFun();
                                    var e = i.globalData.util.url("entry/wxapp/api", {
                                        m: i.globalData.module_name,
                                        o: "subscribemessage"
                                    });
                                    r.request({
                                        url: e,
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        data: {
                                            openid: r.getStorageSync("openid"),
                                            type: 1
                                        },
                                        success: function(t) {
                                            r.setStorageSync("warn_daynum", t.data.warm_daynum);
                                        }
                                    });
                                },
                                fail: function() {
                                    return 1 == a.currentIndex && r.getStorageSync("mtsc_url") ? 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtscqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtsc_url")
                                    }) : 1 != a.currentIndex || r.getStorageSync("mtsc_url") ? 0 == a.currentIndex && r.getStorageSync("mtwm_url") ? 1 == r.getStorageSync("setting").mtpic && 1 == r.getStorageSync("setting").poster_type ? void r.previewImage({
                                        urls: [ r.getStorageSync("mtwmqrcode2") ]
                                    }) : void r.navigateToMiniProgram({
                                        appId: "wxde8ac0a21135c07d",
                                        path: r.getStorageSync("mtwm_url")
                                    }) : 0 != a.currentIndex || r.getStorageSync("mtwm_url") ? void 0 : (a.appid_type = 1, 
                                    void a.meituan_urlFun()) : (a.appid_type = 2, void a.meituan_urlFun());
                                }
                            });
                        } else this.showDialog2();
                    },
                    close_poster: function() {
                        this.show_poster = !1;
                    },
                    previewImage: function(t) {
                        r.previewImage({
                            urls: [ t.currentTarget.dataset.src ],
                            current: 0
                        });
                    },
                    navChange: function(t) {
                        r.setStorageSync("index_nav", ""), this.loadposter = 0, this.currentIndex = t, 1 == this.currentIndex ? (this.pagebgcolor = r.getStorageSync("setting").waimaitt_meituansc_bgcolor, 
                        this.bgImg = r.getStorageSync("setting").waimaitt_meituansc_poster ? r.getStorageSync("setting").waimaitt_meituansc_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/meituan.png", 
                        this.qrcode = r.getStorageSync("mtscqrcode"), this.meituan_urlFun2(), this.load_mtscqrcode2()) : (this.pagebgcolor = r.getStorageSync("setting").waimaitt_meituanwm_bgcolor, 
                        this.bgImg = r.getStorageSync("setting").waimaitt_meituanwm_poster ? r.getStorageSync("setting").waimaitt_meituanwm_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/meituan.png", 
                        this.qrcode = r.getStorageSync("mtwmqrcode"), this.meituan_urlFun2(), this.load_mtwmqrcode2());
                    },
                    load_mtwmqrcode: function() {
                        this.mtwmqrcode = "../../../static/images/loadding-max.gif";
                        var e = this, t = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode"
                        });
                        r.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                type: "mtwm",
                                uid: r.getStorageSync("userinfo").user_id
                            },
                            success: function(t) {
                                console.log(t);
                                t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log(t), t.poster_url && t.data ? (e.mtwmqrcode = t.data, r.setStorageSync("mtwmqrcode", t.data), 
                                r.setStorageSync("mtwmposter", t.poster_url)) : e.mtwmqrcode = "../../../static/images/mtwm.png";
                            }
                        });
                    },
                    load_mtscqrcode: function() {
                        this.mtscqrcode = "../../../static/images/loadding-max.gif";
                        var e = this, t = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode"
                        });
                        r.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                type: "mtsc",
                                uid: r.getStorageSync("userinfo").user_id
                            },
                            success: function(t) {
                                t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                t.poster_url && t.data ? (e.mtscqrcode = t.data, r.setStorageSync("mtscqrcode", t.data), 
                                r.setStorageSync("mtscposter", t.poster_url)) : e.mtscqrcode = "../../../static/images/mtsc.png";
                            }
                        });
                    },
                    load_mtwmqrcode2: function() {
                        var e, t;
                        r.getStorageSync("mtwmqrcode") || (this.mtwmqrcode = "../../../static/images/loadding-max.gif", 
                        e = this, t = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode"
                        }), r.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                type: "mtwm",
                                uid: r.getStorageSync("userinfo").user_id
                            },
                            success: function(t) {
                                console.log(t);
                                t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log(t), e.mtwmqrcode = t.data, r.setStorageSync("mtwmqrcode", t.data), -1 != t.poster_url.indexOf("elmsc1") && r.getStorageSync("mtwmposter") || r.setStorageSync("mtwmposter", t.poster_url);
                            }
                        }));
                    },
                    load_mtscqrcode2: function() {
                        var e, t;
                        r.getStorageSync("mtscqrcode") || (this.mtscqrcode = "../../../static/images/loadding-max.gif", 
                        e = this, t = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "qrcode"
                        }), r.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: r.getStorageSync("openid"),
                                type: "mtsc",
                                uid: r.getStorageSync("userinfo").user_id
                            },
                            success: function(t) {
                                t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.mtscqrcode = t.data, r.setStorageSync("mtscqrcode", t.data), -1 != t.poster_url.indexOf("elmsc1") && r.getStorageSync("mtscposter") || r.setStorageSync("mtscposter", t.poster_url);
                            }
                        }));
                    },
                    swiperChange: function(t) {
                        r.setStorageSync("index_nav", ""), this.loadposter = 0;
                        t = t.detail.current;
                        this.currentIndex = t, 1 == this.currentIndex ? (this.pagebgcolor = r.getStorageSync("setting").waimaitt_meituansc_bgcolor, 
                        this.bgImg = r.getStorageSync("setting").waimaitt_meituasc_poster ? r.getStorageSync("setting").waimaitt_meituansc_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/meituan.png", 
                        this.qrcode = r.getStorageSync("mtscqrcode"), this.meituan_urlFun2(), this.load_mtscqrcode2(), 
                        this.mtscposter ? this.imgSrc = this.mtscposter : this.imgSrc = "") : (this.pagebgcolor = r.getStorageSync("setting").waimaitt_meituanwm_bgcolor, 
                        this.bgImg = r.getStorageSync("setting").waimaitt_meituawm_poster ? r.getStorageSync("setting").waimaitt_meituanwm_poster : r.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/meituan.png", 
                        this.qrcode = r.getStorageSync("mtwmqrcode"), this.meituan_urlFun2(), this.load_mtwmqrcode2(), 
                        this.mtwmposter ? this.imgSrc = this.mtwmposter : this.imgSrc = "");
                    },
                    goback: function() {
                        r.navigateBack({});
                    },
                    gohome: function() {
                        r.navigateTo({
                            url: "../index/index"
                        });
                    },
                    getposter_mtwm1: function() {
                        var e;
                        r.getStorageSync("userinfo").nickname || 1 != r.getStorageSync("setting").login_type ? 1 == (e = this).currentIndex ? r.getStorageSync("mtscposter") && -1 != r.getStorageSync("mtscposter").indexOf("mp.weixin") ? r.navigateTo({
                            url: "../movieA/webview?return_url=" + encodeURIComponent(r.getStorageSync("mtscposter"))
                        }) : (r.showLoading({
                            title: "加载中...",
                            mask: !1
                        }), r.getStorageSync("mtscposter") || r.setStorageSync("mtscposter", r.getStorageSync("setting").static_domain + "addons/" + e.module_name + "/static/images/poster/1.png"), 
                        r.getImageInfo({
                            src: r.getStorageSync("mtscposter"),
                            success: function(t) {
                                e.show_poster = !0, e.imgSrc = r.getStorageSync("mtscposter"), e.h5 = r.getStorageSync("mtsc_h5"), 
                                r.hideLoading();
                            },
                            fail: function(t) {
                                e.loadposter = 1, e.getposter_mtwm();
                            }
                        })) : r.getStorageSync("mtwmposter") && -1 != r.getStorageSync("mtwmposter").indexOf("mp.weixin") ? r.navigateTo({
                            url: "../movieA/webview?return_url=" + encodeURIComponent(r.getStorageSync("mtwmposter"))
                        }) : (r.showLoading({
                            title: "加载中...",
                            mask: !1
                        }), r.getStorageSync("mtwmposter") || r.setStorageSync("mtwmposter", r.getStorageSync("setting").static_domain + "addons/" + e.module_name + "/static/images/poster/1.png"), 
                        r.getImageInfo({
                            src: r.getStorageSync("mtwmposter"),
                            success: function(t) {
                                e.show_poster = !0, e.imgSrc = r.getStorageSync("mtwmposter"), e.h5 = r.getStorageSync("mtwm_h5"), 
                                r.hideLoading();
                            },
                            fail: function(t) {
                                e.loadposter = 1, e.getposter_mtwm();
                            }
                        })) : this.showDialog2();
                    },
                    getposter_mtwm: function() {
                        var e = this;
                        1 == this.currentIndex ? (e.qrcode = r.getStorageSync("mtscqrcode"), r.getStorageSync("mtscposter") ? -1 != r.getStorageSync("mtscposter").indexOf("mp.weixin") || r.getImageInfo({
                            src: r.getStorageSync("mtscposter"),
                            success: function(t) {
                                e.imgSrc = r.getStorageSync("mtscposter"), e.h5 = r.getStorageSync("mtsc_h5");
                            },
                            fail: function(t) {
                                e.context = r.createCanvasContext("graceCanvas"), e.initSize(), setTimeout(function() {
                                    e.draw();
                                }, 1e3);
                            }
                        }) : (e.context = r.createCanvasContext("graceCanvas"), e.initSize(), setTimeout(function() {
                            e.draw();
                        }, 1e3))) : (e.qrcode = r.getStorageSync("mtwmqrcode"), r.getStorageSync("mtwmposter") ? -1 != r.getStorageSync("mtwmposter").indexOf("mp.weixin") || r.getImageInfo({
                            src: r.getStorageSync("mtwmposter"),
                            success: function(t) {
                                e.imgSrc = r.getStorageSync("mtwmposter"), e.h5 = r.getStorageSync("mtwm_h5");
                            },
                            fail: function(t) {
                                console.log(r.getStorageSync("mtwmposter")), e.context = r.createCanvasContext("graceCanvas"), 
                                e.initSize(), setTimeout(function() {
                                    e.draw();
                                }, 1e3);
                            }
                        }) : (e.context = r.createCanvasContext("graceCanvas"), e.initSize(), setTimeout(function() {
                            e.draw();
                        }, 1e3)));
                    },
                    initSize: function() {
                        var t = e.system();
                        this.rpx2px = t.rpx2px, this.widthIn = r.upx2px(this.width) * this.multiple, this.heightIn = r.upx2px(this.cheight) * this.multiple, 
                        console.log(r.getStorageSync("mtwmposter"));
                    },
                    draw: function() {
                        var t = this;
                        "" != this.bgImg ? (console.log(this.bgImg), this.drawBGIMG(this.bgImg, function() {
                            t.step03();
                        })) : this.step03();
                    },
                    step03: function() {
                        var n = this;
                        1 == r.getStorageSync("setting").poster_type && 0 == this.currentIndex ? this.qrcode = r.getStorageSync("mtwmqrcode2") : 1 == r.getStorageSync("setting").poster_type && 1 == this.currentIndex && (this.qrcode = r.getStorageSync("mtscqrcode2")), 
                        console.log(this.qrcode), r.downloadFile({
                            url: this.qrcode,
                            success: function(t) {
                                var e, a, o;
                                200 === t.statusCode && (console.log("ok"), e = 0 == n.currentIndex ? (a = r.getStorageSync("setting").waimaitt_meituanwm_poster_qrcode ? r.getStorageSync("setting").waimaitt_meituanwm_poster_qrcode : 350, 
                                o = r.getStorageSync("setting").waimaitt_meituanwm_poster_qrcodex ? r.getStorageSync("setting").waimaitt_meituanwm_poster_qrcodex : 0, 
                                r.getStorageSync("setting").waimaitt_meituanwm_poster_qrcodey ? r.getStorageSync("setting").waimaitt_meituanwm_poster_qrcodey : 615) : (a = r.getStorageSync("setting").waimaitt_meituansc_poster_qrcode ? r.getStorageSync("setting").waimaitt_meituansc_poster_qrcode : 350, 
                                o = r.getStorageSync("setting").waimaitt_meituansc_poster_qrcodex ? r.getStorageSync("setting").waimaitt_meituansc_poster_qrcodex : 0, 
                                r.getStorageSync("setting").waimaitt_meituansc_poster_qrcodey ? r.getStorageSync("setting").waimaitt_meituansc_poster_qrcodey : 615), 
                                a = r.upx2px(a) * n.multiple, o = r.upx2px(o) * n.multiple, o = (n.widthIn - a + o) / 2, 
                                n.context.drawImage(t.tempFilePath, o, n.heightIn - r.upx2px(e) * n.multiple, a, a), 
                                n.drawIt());
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    drawText: function(t, e, a, o, n, r) {},
                    drawIt: function() {
                        var e = this;
                        this.imgSrc = "", this.context.draw(!0, function() {
                            r.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: e.widthIn,
                                height: e.heightIn,
                                destWidth: e.widthIn,
                                destHeight: e.heightIn,
                                canvasId: "graceCanvas",
                                success: function(t) {
                                    console.log(t), 1 == e.loadposter && (e.show_poster = !0, e.loadposter = 0), 1 == e.currentIndex ? (e.mtscposter = t.tempFilePath, 
                                    e.imgSrc = t.tempFilePath, r.setStorageSync("mtscposter", t.tempFilePath)) : (e.mtwmposter = t.tempFilePath, 
                                    e.imgSrc = t.tempFilePath, r.setStorageSync("mtwmposter", t.tempFilePath)), setTimeout(function() {
                                        r.hideLoading();
                                    }, 1e3);
                                },
                                fail: function(t) {
                                    console.log(t), r.hideLoading();
                                }
                            });
                        });
                    },
                    drawBGIMG: function(t, a) {
                        var o = this;
                        console.log(t), r.downloadFile({
                            url: t,
                            success: function(e) {
                                console.log(e), 200 == e.statusCode && (console.log(e.tempFilePath), r.getImageInfo({
                                    src: e.tempFilePath,
                                    success: function(t) {
                                        t = o.widthIn / t.width * t.height;
                                        console.log(t), o.context.drawImage(e.tempFilePath, 0, 0, o.widthIn, t), a();
                                    }
                                }));
                            },
                            fail: function(t) {
                                console.log(t), r.hideLoading();
                            }
                        });
                    },
										addCouponTo: function() {
											// r.request({
											//     url: t,
											//     method: "POST",
											//     header: {
											//         "content-type": "application/x-www-form-urlencoded"
											//     },
											//     data: {
											//         openid: r.getStorageSync("openid"),
											//         type: 1
											//     },
											//     success: function(e) {
											       
											//     }
											// });
											r.navigateToMiniProgram({
											    appId: "wx77af438b3505c00e",
											    path: 'subPackages/webview/index?lch=cps:mix:5:86081985a9be798ae7437656dbae0d4d145:e7d54f63ae38756cb8f6:22:65604&url=https%3A%2F%2Fdpurl.cn%2FkFV2mGCz'
											})
										},
                    onShareAppMessage: function() {
                        var t = "pages/index/index?to=meituan&uid=" + r.getStorageSync("userinfo").user_id;
                        return {
                            title: r.getStorageSync("setting").sharetitle,
                            imageUrl: r.getStorageSync("setting").sharethumb,
                            path: t
                        };
                    }
                }
            };
            a.default = t;
        }).call(this, o("543d").default);
    },
    a54f: function(t, e, a) {
        var o = a("2d4a");
        a.n(o).a;
    },
    b2f5: function(t, e, a) {
        a.r(e);
        var o, n = a("7c3e"), r = a.n(n);
        for (o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = r.a;
    }
}, [ [ "2942", "common/runtime", "common/vendor" ] ] ]);