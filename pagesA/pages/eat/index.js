require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/eat/index" ], {
    "2b04": function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("0cda"), e(a("66fd")), t(e(a("a186")).default);
        }).call(this, a("543d").createPage);
    },
    "40b8": function(t, e, a) {},
    a186: function(t, e, a) {
        a.r(e);
        var o, n = a("c456"), i = a("c07d");
        for (o in i) "default" !== o && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(o);
        a("ea89");
        var s = a("f0c5"), n = Object(s.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = n.exports;
    },
    c07d: function(t, e, a) {
        a.r(e);
        var o, n = a("c3f5"), i = a.n(n);
        for (o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = i.a;
    },
    c3f5: function(e, a, n) {
        (function(i) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var o = getApp(), s = n("ca02"), e = {
                data: function() {
                    return {
                        module_name: o.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: i.getStorageSync("userinfo"),
                        setting: i.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        foodList: [],
                        tempFoodList: [],
                        wingList: [],
                        eatWhat: "？？？",
                        btnText: i.getStorageSync("setting").eatwhat_go,
                        isRun: !1,
                        showMenu: !1,
                        showPopup: !1,
                        inputMenuName: "",
                        screenWidth: i.getSystemInfoSync().screenWidth,
                        screenHeight: i.getSystemInfoSync().screenHeight,
                        setInter: "",
                        pageKey: "",
                        height: "",
                        tabBar: []
                    };
                },
                components: {},
                props: {},
                onShow: function() {},
                onReady: function() {},
                onLoad: function(e) {
                    var a = this;
                    this.module_name = o.globalData.module_name;
                    i.setStorageSync("invite_uid", e.uid), this.setting = i.getStorageSync("setting"), 
                    this.userinfo = i.getStorageSync("userinfo"), this.loadsetting(), null != i.getStorageSync("userinfo") && i.getStorageSync("userinfo") || i.login({
                        success: function(e) {
                            a.wxCode = e.code;
                            e = e.code;
                            o.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var a;
                                    e.data.errno || (i.setStorageSync("openid", e.data.data.openid), i.setStorageSync("unionid", e.data.data.userinfo.unionid), 
                                    a = o.globalData.util.url("entry/wxapp/api", {
                                        m: o.globalData.module_name,
                                        o: "userinfo"
                                    }), i.request({
                                        url: a,
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
                                            i.setStorageSync("pid_time", i.getStorageSync("pid_use_time"))), t.systemtype = i.getStorageSync("systemtype"), 
                                            t.userinfo = e.userinfo, t.getWxCode());
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
                        if (this.pageKey = t, i.setStorageSync("pageKey", t), i.getStorageSync("userinfo").nickname || 1 != i.getStorageSync("setting").login_type) {
                            if (1 == a.adtype) {
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
                            if (5 != a.adtype) {
                                if (4 == a.adtype) return -1 != a.url.indexOf("index/index") || -1 != a.url.indexOf("user/index") ? (i.setStorageSync("index_nav", a.url), 
                                void i.switchTab({
                                    url: a.url
                                })) : void i.navigateTo({
                                    url: a.url
                                });
                                2 != a.adtype && 3 != a.adtype || (e = o.globalData.util.url("entry/wxapp/api", {
                                    m: o.globalData.module_name,
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
                                this.contact_thumb = i.getStorageSync("setting").dianwo, this.showDialog3());
                            } else i.navigateTo({
                                url: "../kefu/webview?return_url=" + encodeURIComponent(a.url)
                            });
                        } else this.showDialog2();
                    },
                    fatherHeight: function(t) {
                        this.height = t;
                    },
                    loadtabbar: function() {
                        var t, e = this;
                        "undefined" != i.getStorageSync("tabbar") && i.getStorageSync("tabbar") ? this.tabBar = i.getStorageSync("tabbar") : (t = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
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
                                t = o.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.tabBar = t.data.tabbar;
                            }
                        }));
                    },
                    getWxCode: function() {
                        var e = this;
                        wx.login({
                            success: function(t) {
                                e.wxCode = t.code;
                            }
                        });
                    },
                    onShareAppMessage: function() {
                        var t = "pages/index/index?to=eatwhat&uid=" + i.getStorageSync("userinfo").user_id;
                        return console.log(t), {
                            title: i.getStorageSync("setting").eatwhat_sharetitle,
                            imageUrl: i.getStorageSync("setting").eatwhat_sharethumb,
                            path: t
                        };
                    },
                    onShareTimeline: function() {
                        var t = "uid=" + i.getStorageSync("userinfo").user_id;
                        return {
                            title: i.getStorageSync("setting").eatwhat_sharetitle,
                            imageUrl: i.getStorageSync("setting").eatwhat_sharethumb,
                            query: t
                        };
                    },
                    loadsetting: function() {
                        var e = this, t = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
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
                                t = o.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                i.setStorageSync("setting", t.setting), e.setting = i.getStorageSync("setting"), 
                                e.systemtype = i.getStorageSync("systemtype"), console.log(e.userinfo.foodlist), 
                                console.log(i.getStorageSync("setting").eatwhat_foodlist), 0 == i.getStorageSync("userinfo").foodlist.length ? (i.setStorageSync("eatwhat_foodlist", i.getStorageSync("setting").eatwhat_foodlist), 
                                e.userinfo.foodlist = i.getStorageSync("eatwhat_foodlist")) : i.setStorageSync("eatwhat_foodlist", e.userinfo.foodlist), 
                                e.btnText = i.getStorageSync("setting").eatwhat_go, e.initFoodList(), e.initSwingList(), 
                                i.setNavigationBarTitle({
                                    title: i.getStorageSync("setting").eatwhat_navigationBarTitleText
                                }), i.setNavigationBarColor({
                                    backgroundColor: i.getStorageSync("setting").eatwhat_navigationBarBackgroundColor,
                                    frontColor: i.getStorageSync("setting").eatwhat_navigationBarTextStyle
                                });
                            }
                        });
                    },
                    inputMenu: function(t) {
                        this.inputMenuName = t.detail.value.trim();
                    },
                    clickModifyMenu: function() {
                        this.showMenu = !0;
                    },
                    clickCloseMenu: function() {
                        this.showMenu = !1;
                    },
                    deleteItem: function(t) {
                        console.log(t), this.foodList.splice(t.currentTarget.dataset.id, 1), i.setStorageSync("eatwhat_foodlist", this.foodList), 
                        t = this;
                        t = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "addfoodlist"
                        });
                        i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                foodlist: this.foodList
                            },
                            success: function(t) {}
                        });
                    },
                    clickButton: function() {
                        var t = this;
                        if (this.foodList && 0 != this.foodList.length) {
                            if (this.isRun) return clearInterval(this.setInter), this.btnText = i.getStorageSync("setting").eatwhat_go, 
                            this.tempFoodList = [], this.isRun = !1;
                            this.isRun = !0, this.btnText = "停止", this.setInter = setInterval(function() {
                                t.eatWhat = t.foodList[Math.floor(t.foodList.length * Math.random())], t.pushOneFood(), 
                                100 < t.tempFoodList.length && t.tempFoodList.splice(50, t.tempFoodList.length - 50);
                            }, 80);
                        } else i.showToast({
                            title: "请先添加菜单",
                            icon: "none"
                        });
                    },
                    addToMenu: function() {
                        this.foodList && 200 <= this.foodList.length ? i.showToast({
                            title: "菜品超过限制",
                            icon: "none"
                        }) : this.showPopup = !0;
                    },
                    clickEnsureAdd: function() {
                        this.inputMenuName ? this.checkHasName() ? i.showToast({
                            title: "菜品已存在",
                            icon: "none"
                        }) : (this.foodList.push(this.inputMenuName), i.setStorageSync("eatwhat_foodlist", this.foodList), 
                        this.showPopup = !1) : i.showToast({
                            title: "菜品名不能为空",
                            icon: "none"
                        });
                        var t = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "addfoodlist"
                        });
                        i.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                foodlist: this.foodList
                            },
                            success: function(t) {}
                        });
                    },
                    closePopup: function() {
                        this.showPopup = !1;
                    },
                    removeItem: function() {},
                    checkHasName: function() {
                        if (!this.foodList || 0 == this.foodList.length) return !1;
                        for (var t = 0; t < this.foodList.length; t++) if (this.foodList[t] == this.inputMenuName) return !0;
                        return !1;
                    },
                    pushOneFood: function() {
                        this.tempFoodList.push({
                            text: this.foodList[Math.floor(this.foodList.length * Math.random())],
                            textSize: 14 + 20 * Math.random(),
                            color: s.eatTextColor[Math.floor(s.eatTextColor.length * Math.random())],
                            left: (this.screenWidth - 100) * Math.random(),
                            top: (this.screenHeight - 150) * Math.random()
                        });
                    },
                    initFoodList: function() {
                        this.foodList = i.getStorageSync("eatwhat_foodlist");
                    },
                    initSwingList: function() {
                        var o = this, n = i.getStorageSync("setting").eatwhat_foodlist;
                        setInterval(function() {
                            var t = (0, s.generateRandomName)(), e = n[Math.floor(Math.random() * n.length)], a = .2 * Math.ceil(Math.random() * o.screenHeight);
                            o.wingList.push({
                                text: t + "今天吃了" + e,
                                top: a
                            }), 100 <= o.wingList.length && o.wingList.splice(90, o.wingList.length - 90);
                        }, 1500);
                    }
                }
            };
            a.default = e;
        }).call(this, n("543d").default);
    },
    c456: function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return n;
        }), a.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    ea89: function(t, e, a) {
        var o = a("40b8");
        a.n(o).a;
    }
}, [ [ "2b04", "common/runtime", "common/vendor", "pagesA/common/vendor" ] ] ]);