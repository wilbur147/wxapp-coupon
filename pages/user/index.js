(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/index" ], {
    "21f4": function(t, a, n) {
        (function(i) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
			
			require('../../common/main.js');
            var s = getApp(), e = n("e5c8"), t = {
                data: function() {
                    return {
                        module_name: s.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: i.getStorageSync("userinfo"),
                        setting: i.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        showAlert: !1,
                        loadposter: 0,
                        contact_title: "",
                        top: 160,
                        contact_title_text: "",
                        contact_title_desc: "",
                        contact_id: "",
                        contact_type: "",
                        contact_thumb: "",
                        pageLoading: !0,
                        showToast_login: !1,
                        user_income: {
                            today: 0,
                            month: 0,
                            last_month: 0
                        },
                        tools: [],
                        footerCurrent: 0,
                        show_poster: !1,
                        qrcode: "",
                        myqrcode: "",
                        myposter: "",
                        width: 750,
                        cheight: 1334,
                        widthIn: 300,
                        heightIn: 500,
                        bgColor: "#7ACBDC",
                        bgImg: "",
                        imgSrc: null,
                        rpx2px: 1,
                        context: null,
                        pageKey: "",
                        height: 1334,
                        tabBar: [],
                        multiple: 2.1
                    };
                },
                components: {
                    gracePage: function() {
                        n.e("graceUI/components/gracePage").then(function() {
                            return resolve(n("1021"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceLoading: function() {
                        n.e("graceUI/components/graceLoading").then(function() {
                            return resolve(n("1d04"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceFullLoading: function() {
                        n.e("graceUI/components/graceFullLoading").then(function() {
                            return resolve(n("3be5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceEmptyNew: function() {
                        n.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(n("f8df"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceDialog: function() {
                        n.e("graceUI/components/graceDialog").then(function() {
                            return resolve(n("f85d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceFlex: function() {
                        n.e("graceUI/components/graceFlex").then(function() {
                            return resolve(n("b5c9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {},
                onShow: function() {
                    console.log(getCurrentPages()), this.tabBar = i.getStorageSync("tabbar"), console.log(this.tabBar.list);
                    for (var t = 0; t < this.tabBar.list.length; t++) -1 != this.tabBar.list[t].url.indexOf("user/index") && (this.pageKey = t);
                    this.userinfo = i.getStorageSync("userinfo"), this.load_myqrcode2();
                },
                onPullDownRefresh: function() {
                    this.user_info(), this.loadtools(), this.load_income(), this.loadtabbar();
                },
                onLoad: function(t) {
                    var e = this;
                    this.module_name = s.globalData.module_name, this.loadtools();
                    var a = this;
                    i.getStorageSync("tabbar") ? this.tabBar = i.getStorageSync("tabbar") : i.getStorageSync("userinfo") && this.loadtabbar(), 
                    this.module_name = s.globalData.module_name;
                    i.setStorageSync("invite_uid", t.uid), this.loadsetting(), null != i.getStorageSync("userinfo") && i.getStorageSync("userinfo") || i.login({
                        success: function(t) {
                            e.wxCode = t.code;
                            t = t.code;
                            s.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: t
                                },
                                cachetime: 0,
                                success: function(t) {
                                    var e;
                                    t.data.errno || (i.setStorageSync("openid", t.data.data.openid), "undefined" != i.getStorageSync("tabbar") && i.getStorageSync("tabbar") || a.loadtabbar(), 
                                    i.setStorageSync("unionid", t.data.data.userinfo.unionid), e = s.globalData.util.url("entry/wxapp/api", {
                                        m: s.globalData.module_name,
                                        o: "userinfo"
                                    }), i.request({
                                        url: e,
                                        method: "GET",
                                        data: {
                                            openid: t.data.data.openid,
                                            invite_uid: i.getStorageSync("invite_uid")
                                        },
                                        success: function(t) {
                                            t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                            t.openid && (i.setStorageSync("userinfo", t.userinfo), "undefined" != i.getStorageSync("tabbar") && i.getStorageSync("tabbar") || a.loadtabbar(), 
                                            i.setStorageSync("pid_use_time", t.pid_time), i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && (i.setStorageSync("elmwm_url", ""), 
                                            i.setStorageSync("elmsc_url", ""), i.setStorageSync("elmwmposter", ""), i.setStorageSync("elmscposter", ""), 
                                            i.setStorageSync("pid_time", i.getStorageSync("pid_use_time"))), a.systemtype = i.getStorageSync("systemtype"), 
                                            a.userinfo = t.userinfo, a.getWxCode());
                                        }
                                    }));
                                }
                            });
                        }
                    }), this.userinfo = i.getStorageSync("userinfo"), this.setting = i.getStorageSync("setting"), 
                    1 == this.setting.income_type && (this.top = 110), this.myqrcode = i.getStorageSync("myqrcode"), 
                    this.myposter = i.getStorageSync("myposter"), this.bgImg = i.getStorageSync("setting").myposter ? i.getStorageSync("setting").myposter : i.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/meituan.png", 
                    this.user_info(), this.load_income();
                },
                methods: {
                    change: function(t) {
                        var e = this, a = this.tabBar.list[t];
                        if (this.pageKey = t, i.setStorageSync("pageKey", t), 1 == a.adtype) {
                            if (1 == a.appid_type && i.getStorageSync("mtwm_url")) return void i.navigateToMiniProgram({
                                appId: "wxde8ac0a21135c07d",
                                path: i.getStorageSync("mtwm_url")
                            });
                            if (1 == a.appid_type && !i.getStorageSync("mtwm_url")) return e.appid_type = 1, 
                            void e.meituan_urlFun();
                            if (2 == a.appid_type && i.getStorageSync("mtsc_url")) return void i.navigateToMiniProgram({
                                appId: "wxde8ac0a21135c07d",
                                path: i.getStorageSync("mtsc_url")
                            });
                            if (2 == a.appid_type && !i.getStorageSync("mtsc_url")) return e.appid_type = 2, 
                            void e.meituan_urlFun();
                            if (3 == a.appid_type && i.getStorageSync("elmwm_url")) return i.navigateToMiniProgram({
                                appId: "wxece3a9a4c82f58c9",
                                path: i.getStorageSync("elmwm_url")
                            }), e.updatepid(), void console.log(i.getStorageSync("elmwm_url"));
                            if (3 == a.appid_type && !i.getStorageSync("elmwm_url")) return e.appid_type = 3, 
                            void e.gettaobaoauth();
                            if (4 == a.appid_type && i.getStorageSync("elmsc_url")) return i.navigateToMiniProgram({
                                appId: "wxece3a9a4c82f58c9",
                                path: i.getStorageSync("elmsc_url")
                            }), e.updatepid(), void console.log(i.getStorageSync("elmsc_url"));
                            if (4 == a.appid_type && !i.getStorageSync("elmsc_url")) return console.log("ccc"), 
                            e.appid_type = 4, void e.gettaobaoauth();
                            if (0 == a.appid_type) return void i.navigateToMiniProgram({
                                appId: a.appid,
                                path: a.path
                            });
                        }
												if (a.url.indexOf('shopping/shopping') != -1) {
													i.redirectTo({
															url: "/pagesB/pages/shopping/shopping"
													});
												}
                        if (5 != a.adtype) if (4 != a.adtype) 2 != a.adtype && 3 != a.adtype || (e = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "ad_kefubind"
                        }), i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                adtype: "ad",
                                adid: a.adid,
                                openid: i.getStorageSync("openid")
                            },
                            success: function(t) {}
                        }), this.contact_title_desc = "", this.contact_type = "ad", this.contact_id = a.adid, 
                        this.contact_title = a.title, this.contact_title_text = a.title_text, this.contact_title_desc = a.title_desc, 
                        this.contact_thumb = i.getStorageSync("setting").dianwo, this.showDialog3()); else {
                            i.setStorageSync("index_nav", a.url);
                            var n = getCurrentPages();
                            n.reverse();
                            for (var o = a.url.replace("../", ""), r = 0; r < n.length; r++) if (-1 != n[r].route.indexOf(o)) return void i.navigateBack({
                                delta: r
                            });
                            if (-1 == a.url.indexOf("../index/") && -1 == a.url.indexOf("../user/") && -1 == a.url.indexOf("../movie/") && -1 == a.url.indexOf("../shop/") && -1 == a.url.indexOf("../kefu/")) return -1 != a.url.indexOf("../../../pages/index/") || -1 != a.url.indexOf("../../../pages/user/") || -1 != a.url.indexOf("../../../pages/kefu/") ? (o = a.url.replace("../../../pages/", "../"), 
                            void i.redirectTo({
                                url: o
                            })) : -1 != a.url.indexOf("../../../pages/meituan/") || -1 != a.url.indexOf("../../../pages/elm/") || -1 != a.url.indexOf("../../../pages/eat/") ? (o = a.url.replace("../../../pages/", "../../pagesA/pages/"), 
                            void i.redirectTo({
                                url: o
                            })) : -1 != a.url.indexOf("../../pagesA/pages/movie/") || -1 != a.url.indexOf("../../pagesA/pages/shop/") ? (o = a.url.replace("../../pagesA/pages/", "../"), 
                            void i.redirectTo({
                                url: o
                            })) : -1 == a.url.indexOf("../../pagesA/pages/movieA/") && -1 == a.url.indexOf("../../pagesA/pages/shopA/") && -1 == a.url.indexOf("../../pagesA/pages/meituan/") && -1 == a.url.indexOf("../../pagesA/pages/elm/") && -1 == a.url.indexOf("../../pagesA/pages/eat/") && -1 == a.url.indexOf("../../pagesA/pages/userA/") && (-1 != a.url.indexOf("../meituan/") || -1 != a.url.indexOf("../elm/") || -1 != a.url.indexOf("../eat/")) ? (o = a.url.replace("../", "../../pagesA/pages/"), 
                            void i.redirectTo({
                                url: o
                            })) : void i.redirectTo({
                                url: a.url
                            });
                            i.redirectTo({
                                url: a.url
                            });
                        } else i.navigateTo({
                            url: "../kefu/webview?return_url=" + encodeURIComponent(a.url)
                        });
						
                    },
                    fatherHeight: function(t) {
                        this.height = t;
                    },
                    loadsetting: function() {
                        var e = this, t = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "setting"
                        });
                        i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                i.setStorageSync("setting", t.setting), e.setting = i.getStorageSync("setting"), 
                                e.systemtype = i.getStorageSync("systemtype");
                            }
                        });
                    },
                    loadtabbar: function() {
                        var t, e = this;
                        "undefined" != i.getStorageSync("tabbar") && i.getStorageSync("tabbar") ? this.tabBar = i.getStorageSync("tabbar") : (t = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "tabbar"
                        }), i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.tabBar = t.data.tabbar, i.setStorageSync("tabbar", e.tabBar);
                            }
                        }));
                    },
                    showDialog1: function() {
                        this.$refs.showAlert_taobaoauth.open();
                    },
                    closeDialog1: function() {
                        this.$refs.showAlert_taobaoauth.hide();
                    },
                    showDialog3: function() {
                        this.$refs.showAlert.open();
                    },
                    closeDialog3: function() {
                        this.$refs.showAlert.hide();
                    },
                    showDialog2: function() {
                        this.$refs.showAlert_login.open();
                    },
                    closeDialog2: function() {
                        this.$refs.showAlert_login.hide();
                    },
                    findorder_do: function(t) {
                        var e = this, a = t.detail.value;
                        a.orderno ? (t = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "findorder"
                        }), i.request({
                            url: t,
                            method: "GET",
                            data: {
                                openid: i.getStorageSync("openid"),
                                orderno: a.orderno
                            },
                            success: function(t) {
                                t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log(t.data), 1 == t.data ? (i.showToast({
                                    title: "订单找回成功",
                                    icon: "none"
                                }), e.load_income()) : 2 == t.data ? i.showToast({
                                    title: "该订单已结算，无法找回",
                                    icon: "none"
                                }) : i.showToast({
                                    title: "未找到该订单",
                                    icon: "none"
                                });
                            }
                        })) : i.showToast({
                            title: "请输入订单号",
                            icon: "none"
                        });
                    },
                    user_info: function() {
                        var e = this, t = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "userinfo"
                        });
                        i.request({
                            url: t,
                            method: "GET",
                            data: {
                                openid: i.getStorageSync("openid"),
                                invite_uid: i.getStorageSync("invite_uid")
                            },
                            success: function(t) {
                                t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                t.openid && (i.setStorageSync("userinfo", t.userinfo), e.userinfo = t.userinfo);
                            }
                        });
                    },
                    close_poster: function() {
                        this.show_poster = !1;
                    },
                    load_income: function() {
                        var e = this, t = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "user_income"
                        });
                        i.request({
                            url: t,
                            method: "GET",
                            data: {
                                openid: i.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log(t), e.user_income = t.data, i.stopPullDownRefresh();
                            }
                        });
                    },
                    previewImage: function(t) {
                        i.previewImage({
                            urls: [ t.currentTarget.dataset.src ],
                            current: 0
                        });
                    },
                    load_myqrcode: function() {
                        var e = this, t = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "qrcode"
                        });
                        i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                type: "my",
                                uid: i.getStorageSync("userinfo").user_id
                            },
                            success: function(t) {
                                t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                t.poster_url ? (e.myqrcode = t.data, i.setStorageSync("myqrcode", t.data), i.setStorageSync("myposter", t.poster_url)) : e.myqrcode = "../../static/images/mtwm.png";
                            }
                        });
                    },
                    load_myqrcode2: function() {
                        var e = this, t = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "qrcode"
                        });
                        i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                type: "my",
                                uid: i.getStorageSync("userinfo").user_id
                            },
                            success: function(t) {
                                t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.myqrcode = t.data, i.setStorageSync("myqrcode", t.data), -1 != t.poster_url.indexOf("elmsc1") && i.getStorageSync("myposter") || i.setStorageSync("myposter", t.poster_url);
                            }
                        });
                    },
                    getposter_mtwm1: function() {
                        var e;
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? (e = this, 
                        i.getStorageSync("myposter") && -1 != i.getStorageSync("myposter").indexOf("mp.weixin") ? i.navigateTo({
                            url: "../kefu/webview?return_url=" + encodeURIComponent(i.getStorageSync("myposter"))
                        }) : (i.showLoading({
                            title: "加载中...",
                            mask: !1
                        }), i.getStorageSync("myposter") || i.setStorageSync("myposter", i.getStorageSync("setting").static_domain + "addons/" + e.module_name + "/static/images/poster/1.png"), 
                        i.getImageInfo({
                            src: i.getStorageSync("myposter"),
                            success: function(t) {
                                e.show_poster = !0, e.imgSrc = i.getStorageSync("myposter"), i.hideLoading();
                            },
                            fail: function(t) {
                                e.loadposter = 1, e.getposter_mtwm();
                            }
                        }))) : this.showDialog2();
                    },
                    getposter_mtwm: function() {
                        var e = this;
                        i.getStorageSync("myposter") ? -1 != i.getStorageSync("myposter").indexOf("mp.weixin") || i.getImageInfo({
                            src: i.getStorageSync("myposter"),
                            success: function(t) {
                                e.imgSrc = i.getStorageSync("myposter");
                            },
                            fail: function(t) {
                                e.context = i.createCanvasContext("graceCanvas"), e.initSize(), setTimeout(function() {
                                    e.draw();
                                }, 1e3);
                            }
                        }) : (e.context = i.createCanvasContext("graceCanvas"), e.initSize(), setTimeout(function() {
                            e.draw();
                        }, 1e3)), this.qrcode = this.myqrcode;
                    },
                    initSize: function() {
                        var t = e.system();
                        this.rpx2px = t.rpx2px, this.widthIn = i.upx2px(this.width) * this.multiple, this.heightIn = i.upx2px(this.cheight) * this.multiple;
                    },
                    draw: function() {
                        var t = this;
                        this.step01(), "" != this.bgImg ? this.drawBGIMG(this.bgImg, function() {
                            t.step03();
                        }) : this.step03();
                    },
                    step01: function() {
                        this.context.setFillStyle(this.bgColor), this.context.fillRect(0, 0, this.widthIn, this.heightIn);
                    },
                    step03: function() {
                        var o = this;
                        i.downloadFile({
                            url: this.qrcode,
                            success: function(t) {
                                var e, a, n;
                                200 === t.statusCode && (console.log("ok"), a = i.getStorageSync("setting").myposter_qrcode ? i.getStorageSync("setting").myposter_qrcode : 350, 
                                n = i.getStorageSync("setting").myposter_qrcodex ? i.getStorageSync("setting").myposter_qrcodex : 0, 
                                e = i.getStorageSync("setting").myposter_qrcodey ? i.getStorageSync("setting").myposter_qrcodey : 615, 
                                a = i.upx2px(a) * o.multiple, n = i.upx2px(n) * o.multiple, n = (o.widthIn - a + n) / 2, 
                                o.context.drawImage(t.tempFilePath, n, o.heightIn - i.upx2px(e) * o.multiple, a, a), 
                                o.drawIt());
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    drawText: function(t, e, a, n, o, r) {
                        this.context.setFontSize(o), this.context.setFillStyle(n), this.context.setTextAlign(r), 
                        this.context.fillText(t, e, a);
                    },
                    drawIt: function() {
                        var e = this;
                        this.imgSrc = "", this.context.draw(!0, function() {
                            i.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: e.widthIn,
                                height: e.heightIn,
                                destWidth: e.widthIn,
                                destHeight: e.heightIn,
                                canvasId: "graceCanvas",
                                success: function(t) {
                                    console.log(t), 1 == e.loadposter && (e.show_poster = !0, e.loadposter = 0), e.myposter = t.tempFilePath, 
                                    e.imgSrc = t.tempFilePath, i.setStorageSync("myposter", t.tempFilePath), setTimeout(function() {
                                        i.hideLoading();
                                    }, 1e3);
                                },
                                fail: function(t) {
                                    console.log(t), i.hideLoading(), i.showToast({
                                        title: "海报生成失败",
                                        icon: "none"
                                    });
                                }
                            });
                        });
                    },
                    drawBGIMG: function(t, a) {
                        var n = this;
                        i.downloadFile({
                            url: t,
                            success: function(e) {
                                200 == e.statusCode && i.getImageInfo({
                                    src: e.tempFilePath,
                                    success: function(t) {
                                        t = n.widthIn / t.width * t.height;
                                        console.log(t), n.context.drawImage(e.tempFilePath, 0, 0, n.widthIn, t), a();
                                    }
                                });
                            }
                        });
                    },
                    userlogin: function() {
                        i.getStorageSync("userinfo").nickname ? this.closeDialog2() : this.showDialog2();
                    },
                    login: function(e) {
                        var a = this;
                        this.closeDialog2(), i.getSetting({
                            success: function(t) {
                                t.authSetting["scope.userInfo"] ? i.getUserProfile({
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
                    userAuth: function(a, tt, n) {
                        var o = this;
                        "getUserProfile:ok" == tt.errMsg ? wx.login({
                            success: function(t) {
                                var e = s.globalData.util.url("entry/wxapp/api", {
                                    m: s.globalData.module_name,
                                    o: "userinfo"
                                }), t = {
                                    code: t.code,
                                    encryptedData: tt.encryptedData,
                                    iv: tt.iv,
                                    openid: i.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                i.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: t,
                                    success: function(t) {
                                        1 == t.data.status ? (t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), 
                                        t = JSON.parse(t), i.setStorageSync("userinfo", t.userinfo), o.userinfo = t.userinfo, 
                                        "login" == n && (o.closeDialog2(), i.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        })), o.load_myqrcode2()) : i.showToast({
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
                    info: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/info"
                        }) : this.showDialog2();
                    },
                    ranking: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/ranking"
                        }) : this.showDialog2();
                    },
                    myfans: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/fans?op=myfans"
                        }) : this.showDialog2();
                    },
                    toposter: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "poster"
                        }) : this.showDialog2();
                    },
                    otherfans: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/fans?op=otherfans"
                        }) : this.showDialog2();
                    },
                    myorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/order?op=my"
                        }) : this.showDialog2();
                    },
                    movieorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "movieorder?op=all"
                        }) : this.showDialog2();
                    },
                    creditorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "creditorder"
                        }) : this.showDialog2();
                    },
                    findorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? this.showDialog1() : this.showDialog2();
                    },
                    cash: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? 1 != i.getStorageSync("setting").income_type && i.navigateTo({
                            url: "../../pagesA/pages/userA/account"
                        }) : this.showDialog2();
                    },
                    fansorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/order?op=fans"
                        }) : this.showDialog2();
                    },
                    wjsorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/order?op=wjs"
                        }) : this.showDialog2();
                    },
                    yjsorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/order?op=yjs"
                        }) : this.showDialog2();
                    },
                    todayorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/order?op=today"
                        }) : this.showDialog2();
                    },
                    monthorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/order?op=month"
                        }) : this.showDialog2();
                    },
                    lastmonthorder: function() {
                        i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type ? i.navigateTo({
                            url: "../../pagesA/pages/userA/order?op=lastmonth"
                        }) : this.showDialog2();
                    },
                    loadtools: function() {
                        var e = this, t = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "ad"
                        });
                        i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                cateid: 9,
                                openid: i.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = s.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.tools = t.data.swiperitems;
                            }
                        });
                    },
                    opentools: function(t) {
                        if (i.getStorageSync("userinfo").nickname) {
                            if (1 == t.currentTarget.dataset.is_ios && "ios" == i.getStorageSync("systemtype") && 0 == i.getStorageSync("setting").ios) {
                                var e = s.globalData.util.url("entry/wxapp/api", {
                                    m: s.globalData.module_name,
                                    o: "ad_kefubind"
                                });
                                return i.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        adtype: "ad",
                                        adid: t.currentTarget.dataset.adid,
                                        openid: i.getStorageSync("openid")
                                    },
                                    success: function(t) {}
                                }), this.contact_type = "ad", this.contact_id = t.currentTarget.dataset.adid, this.contact_title = t.currentTarget.dataset.title, 
                                this.contact_title_text = "暂不支持购买", this.contact_title_desc = "苹果iOS系统手机暂不支持购买，请分享给非iOS系统的微信购买！", 
                                this.contact_thumb = i.getStorageSync("setting").dianwo, void this.showDialog3();
                            }
                            if (1 != t.currentTarget.dataset.adtype || 0 != t.currentTarget.dataset.appid_type) if (5 != t.currentTarget.dataset.adtype) if (4 != t.currentTarget.dataset.adtype) 2 != t.currentTarget.dataset.adtype && 3 != t.currentTarget.dataset.adtype || (e = s.globalData.util.url("entry/wxapp/api", {
                                m: s.globalData.module_name,
                                o: "ad_kefubind"
                            }), i.request({
                                url: e,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: {
                                    adtype: "ad",
                                    adid: t.currentTarget.dataset.adid,
                                    openid: i.getStorageSync("openid")
                                },
                                success: function(t) {}
                            }), this.contact_title_desc = "", this.contact_type = "ad", this.contact_id = t.currentTarget.dataset.adid, 
                            this.contact_title = t.currentTarget.dataset.title, this.contact_title_text = t.currentTarget.dataset.title_text, 
                            this.contact_title_desc = t.currentTarget.dataset.title_desc, this.contact_thumb = i.getStorageSync("setting").dianwo, 
                            this.showDialog3()); else if (-1 == t.currentTarget.dataset.url.indexOf("../index/") && -1 == t.currentTarget.dataset.url.indexOf("../user/") && -1 == t.currentTarget.dataset.url.indexOf("../movie/") && -1 == t.currentTarget.dataset.url.indexOf("../shop/") && -1 == t.currentTarget.dataset.url.indexOf("../kefu/")) {
                                if (-1 == t.currentTarget.dataset.url.indexOf("../../../pages/index/") && -1 == t.currentTarget.dataset.url.indexOf("../../../pages/user/") && -1 == t.currentTarget.dataset.url.indexOf("../../../pages/kefu/")) return -1 != t.currentTarget.dataset.url.indexOf("../../../pages/meituan/") || -1 != t.currentTarget.dataset.url.indexOf("../../../pages/elm/") || -1 != t.currentTarget.dataset.url.indexOf("../../../pages/eat/") ? (a = t.currentTarget.dataset.url.replace("../../../pages/", "../../pagesA/pages/"), 
                                void i.navigateTo({
                                    url: a
                                })) : -1 != t.currentTarget.dataset.url.indexOf("../../pagesA/pages/movie/") || -1 != t.currentTarget.dataset.url.indexOf("../../pagesA/pages/shop/") ? (a = t.currentTarget.dataset.url.replace("../../pagesA/pages/", "../"), 
                                void i.navigateTo({
                                    url: a
                                })) : -1 == t.currentTarget.dataset.url.indexOf("../../pagesA/pages/movieA/") && -1 == t.currentTarget.dataset.url.indexOf("../../pagesA/pages/shopA/") && -1 == t.currentTarget.dataset.url.indexOf("../../pagesA/pages/meituan/") && -1 == t.currentTarget.dataset.url.indexOf("../../pagesA/pages/elm/") && -1 == t.currentTarget.dataset.url.indexOf("../../pagesA/pages/eat/") && -1 == t.currentTarget.dataset.url.indexOf("../../pagesA/pages/userA/") && (-1 != t.currentTarget.dataset.url.indexOf("../meituan/") || -1 != t.currentTarget.dataset.url.indexOf("../elm/") || -1 != t.currentTarget.dataset.url.indexOf("../eat/")) ? (a = t.currentTarget.dataset.url.replace("../", "../../pagesA/pages/"), 
                                void i.navigateTo({
                                    url: a
                                })) : void i.navigateTo({
                                    url: t.currentTarget.dataset.url
                                });
                                var a = t.currentTarget.dataset.url.replace("../../../pages/", "../");
                                i.navigateTo({
                                    url: a
                                });
                            } else i.navigateTo({
                                url: t.currentTarget.dataset.url
                            }); else i.navigateTo({
                                url: "../kefu/webview?return_url=" + encodeURIComponent(t.currentTarget.dataset.url)
                            }); else i.navigateToMiniProgram({
                                appId: t.currentTarget.dataset.appid,
                                path: t.currentTarget.dataset.path
                            });
                        } else this.showDialog2();
                    }
                }
            };
            a.default = t;
        }).call(this, n("543d").default);
    },
    "306b": function(t, e, a) {
        a.r(e);
        var n, o = a("faf0"), r = a("d6a0");
        for (n in r) "default" !== n && function(t) {
            a.d(e, t, function() {
                return r[t];
            });
        }(n);
        a("e912");
        var i = a("f0c5"), o = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = o.exports;
    },
    d637: function(t, e, a) {},
    d6a0: function(t, e, a) {
        a.r(e);
        var n, o = a("21f4"), r = a.n(o);
        for (n in o) "default" !== n && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(n);
        e.default = r.a;
    },
    e912: function(t, e, a) {
        var n = a("d637");
        a.n(n).a;
    },
    ec9a: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("0cda"), e(a("66fd")), t(e(a("306b")).default);
        }).call(this, a("543d").createPage);
    },
    faf0: function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return r;
        }), a.d(e, "a", function() {
            return n;
        });
        var n = {
            sjTabBar: function() {
                return a.e("components/sj-tab-bar/sj-tab-bar").then(a.bind(null, "1ba9"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    }
}, [ [ "ec9a", "common/runtime", "common/vendor" ] ] ]);