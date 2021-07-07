(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/shop/task" ], {
    "1fae": function(n, i, e) {
        e.d(i, "b", function() {
            return t;
        }), e.d(i, "c", function() {
            return a;
        }), e.d(i, "a", function() {});
        var t = function() {
            var i = this;
            i.$createElement;
            i._self._c, i._isMounted || (i.e0 = function(n) {
                i.userinfo.User_watch;
            }, i.e1 = function(n, i) {
                var e = arguments[arguments.length - 1].currentTarget.dataset;
                (e.eventParams || e["event-params"]).tdItem.is_receive_state;
            });
        }, a = [];
    },
    3082: function(n, i, e) {
        e.r(i);
        var t, a = e("1fae"), o = e("fc1f");
        for (t in o) "default" !== t && function(n) {
            e.d(i, n, function() {
                return o[n];
            });
        }(t);
        e("3d0c");
        var s = e("f0c5"), a = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        i.default = a.exports;
    },
    "3d0c": function(n, i, e) {
        var t = e("798e");
        e.n(t).a;
    },
    7586: function(n, i, e) {
        (function(n) {
            function i(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("0cda"), i(e("66fd")), n(i(e("3082")).default);
        }).call(this, e("543d").createPage);
    },
    "798e": function(n, i, e) {},
    fc1f: function(n, i, e) {
        e.r(i);
        var t, a = e("fc45"), o = e.n(a);
        for (t in a) "default" !== t && function(n) {
            e.d(i, n, function() {
                return a[n];
            });
        }(t);
        i.default = o.a;
    },
    fc45: function(i, e, t) {
        (function(u) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = getApp(), i = {
                data: function() {
                    return {
                        module_name: r.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: u.getStorageSync("userinfo"),
                        setting: u.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        switch1Checked: !1,
                        userImg: "",
                        progress1: "60/100",
                        progress2: "60/100",
                        isSignin: !1,
                        signinList: [ {
                            signinId: 1,
                            signinCoin: "",
                            signinDay: 1,
                            signinedType: !1,
                            signiningType: !0,
                            signinFuture: !0,
                            lookAd: !1
                        }, {
                            signinId: 2,
                            signinCoin: "",
                            signinDay: 2,
                            signinedType: !1,
                            signiningType: !0,
                            signinFuture: !0,
                            lookAd: !1
                        }, {
                            signinId: 3,
                            signinCoin: "",
                            signinDay: 3,
                            signinedType: !1,
                            signiningType: !0,
                            signinFuture: !0,
                            lookAd: !1
                        }, {
                            signinId: 4,
                            signinCoin: "",
                            signinDay: 4,
                            signinedType: !1,
                            signiningType: !0,
                            signinFuture: !0,
                            lookAd: !1
                        }, {
                            signinId: 5,
                            signinCoin: "",
                            signinDay: 5,
                            signinedType: !1,
                            signiningType: !0,
                            signinFuture: !0,
                            lookAd: !1
                        }, {
                            signinId: 6,
                            signinCoin: "",
                            signinDay: 6,
                            signinedType: !1,
                            signiningType: !0,
                            signinFuture: !0,
                            lookAd: !1
                        }, {
                            signinId: 7,
                            signinCoin: "",
                            signinDay: 7,
                            signinedType: !1,
                            signiningType: !0,
                            signinFuture: !0,
                            lookAd: !1
                        } ],
                        continuity: 0,
                        taskList: [],
                        donetaskList: [],
                        videoO: "",
                        notice: "",
                        recording: "",
                        lookAd: "",
                        pageKey: "",
                        height: 1334,
                        tabBar: []
                    };
                },
                components: {
                    gracePage: function() {
                        t.e("graceUI/components/gracePage").then(function() {
                            return resolve(t("1021"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    graceDialog: function() {
                        t.e("graceUI/components/graceDialog").then(function() {
                            return resolve(t("f85d"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    graceSingleSlider: function() {
                        t.e("graceUI/components/graceSingleSlider").then(function() {
                            return resolve(t("0093"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                props: {},
                onReady: function() {},
                onPullDownRefresh: function() {
                    this.getsignin(), this.loadsetting();
                },
                onLoad: function(n) {
                    var i = this, e = this;
                    this.userinfo = u.getStorageSync("userinfo");
                    u.setStorageSync("invite_uid", n.uid), this.module_name = r.globalData.module_name, 
                    this.loadsetting(), this.loadtasks(), this.loaddonetasks(), u.login({
                        success: function(n) {
                            i.wxCode = n.code;
                            n = n.code;
                            r.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: n
                                },
                                cachetime: 0,
                                success: function(n) {
                                    n.data.errno || (u.setStorageSync("openid", n.data.data.openid), u.setStorageSync("unionid", n.data.data.userinfo.unionid), 
                                    e.getWxCode(), e.getsignin());
                                }
                            });
                        }
                    });
                },
                onShow: function() {
                    var a = this, o = new Date(new Date().toLocaleDateString()).getTime(), s = new Date(new Date().toLocaleDateString()).getTime() + 864e5 - 1, n = r.globalData.util.url("entry/wxapp/api", {
                        m: r.globalData.module_name,
                        o: "userinfo"
                    });
                    u.request({
                        url: n,
                        method: "GET",
                        data: {
                            openid: u.getStorageSync("openid")
                        },
                        success: function(n) {
                            var i, n = r.globalData.crypt.Decrypt(n.data.data.data, n.data.data.key), e = JSON.parse(n);
                            if (console.log(e), e.openid) {
                                u.setStorageSync("userinfo", e.userinfo), a.userinfo = e.userinfo, a.continuity = +e.userinfo.sign_in_continuity, 
                                1 == e.userinfo.sign_in_continuity ? ((n = a.signinList.map(function(n) {
                                    var i = n;
                                    return console.log(n), i.signinedType = !1, i.signiningType = !0, i.signinFuture = !0, 
                                    i;
                                }))[0] = {
                                    signinId: a.signinList[0].signinId,
                                    signinCoin: a.signinList[0].signinCoin,
                                    signinDay: a.signinList[0].signinDay,
                                    signinedType: !0,
                                    signiningType: !1,
                                    signinFuture: !1,
                                    lookAd: a.signinList[0].lookAd
                                }, a.signinList = n, console.log(n)) : i = 0, 7 == e.userinfo.sign_in_continuity && (i = 1), 
                                console.log(a.signinList);
                                for (var t = 0; t <= a.signinList.length - i; t++) t <= +e.userinfo.sign_in_continuity ? (console.log(t), 
                                a.signinList[t].signinedType = !0, a.signinList[t].signiningType = !1, a.signinList[t].signinFuture = !1) : t > +e.userinfo.sign_in_continuity && (a.signinList[t - 1].signinedType = !1, 
                                a.signinList[t - 1].signiningType = !0, a.signinList[t - 1].signinFuture = !0);
                                e.userinfo.sign_in && o < 1e3 * e.userinfo.sign_in && s > 1e3 * e.userinfo.sign_in && (a.signinList[+e.userinfo.sign_in_continuity - i].lookAd = !0, 
                                a.isSignin = !0, a.signinList = a.signinList);
                            }
                        }
                    });
                },
                onHide: function() {},
                onUnload: function() {},
                onReachBottom: function() {},
                methods: {
                    loadtabbar: function() {
                        var n, i = this;
                        "undefined" != u.getStorageSync("tabbar") && u.getStorageSync("tabbar") ? this.tabBar = u.getStorageSync("tabbar") : (n = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "tabbar"
                        }), u.request({
                            url: n,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: u.getStorageSync("openid")
                            },
                            success: function(n) {
                                n = r.globalData.crypt.Decrypt(n.data.data.data, n.data.data.key), n = JSON.parse(n);
                                i.tabBar = n.data.tabbar;
                            }
                        }));
                    },
                    change: function(n) {
                        console.log(this.tabBar.list), console.log(this.tabBar.list[n]);
                        var i = this.tabBar.list[n];
                        if (this.pageKey = n, u.setStorageSync("pageKey", n), 1 == i.adtype) {
                            if (1 == i.appid_type && u.getStorageSync("mtwm_url")) return void u.navigateToMiniProgram({
                                appId: "wxde8ac0a21135c07d",
                                path: u.getStorageSync("mtwm_url")
                            });
                            if (1 == i.appid_type && !u.getStorageSync("mtwm_url")) return this.appid_type = 1, 
                            void this.meituan_urlFun();
                            if (2 == i.appid_type && u.getStorageSync("mtsc_url")) return void u.navigateToMiniProgram({
                                appId: "wxde8ac0a21135c07d",
                                path: u.getStorageSync("mtsc_url")
                            });
                            if (0 == i.appid_type) return void u.navigateToMiniProgram({
                                appId: i.appid,
                                path: i.path
                            });
                        }
                        if (5 != i.adtype) {
                            if (4 == i.adtype) {
                                u.setStorageSync("index_nav", i.url);
                                var e = getCurrentPages();
                                e.reverse();
                                for (var t = i.url.replace("../", ""), a = 0; a < e.length; a++) if (-1 != e[a].route.indexOf(t)) return void u.navigateBack({
                                    delta: a
                                });
                                return -1 != i.url.indexOf("../index/") || -1 != i.url.indexOf("../user/") || -1 != i.url.indexOf("../meituan/") || -1 != i.url.indexOf("../elm/") || -1 != i.url.indexOf("../eat/") ? (t = i.url.replace("../", "../../../pages/"), 
                                void u.redirectTo({
                                    url: t
                                })) : -1 == i.url.indexOf("../../../pages/index/") && -1 == i.url.indexOf("../../../pages/user/") && -1 == i.url.indexOf("../../../pages/meituan/") && -1 == i.url.indexOf("../../../pages/elm/") && -1 == i.url.indexOf("../../../pages/eat/") ? -1 != i.url.indexOf("../../pagesA/pages/movie/") || -1 != i.url.indexOf("../../pagesA/pages/shop/") ? (t = i.url.replace("../../pagesA/pages/", "../"), 
                                void u.navigateTo({
                                    url: t
                                })) : (-1 != i.url.indexOf("../movie/") || i.url.indexOf("../shop/"), void u.navigateTo({
                                    url: i.url
                                })) : void u.redirectTo({
                                    url: i.url
                                });
                            }
                        } else u.navigateTo({
                            url: "../kefu/webview?return_url=" + encodeURIComponent(i.url)
                        });
                    },
                    fatherHeight: function(n) {
                        this.height = n;
                    },
                    opentask: function(n) {
                        0 < n.currentTarget.dataset.page_id ? u.navigateTo({
                            url: "../../pagesA/pages/movieA/page?page_id=" + n.currentTarget.dataset.page_id
                        }) : n.currentTarget.dataset.url && u.navigateTo({
                            url: "../../pagesA/pages/movieA/webview?return_url=" + encodeURIComponent(n.currentTarget.dataset.url)
                        });
                    },
                    opendonetask: function(n) {
                        0 < n.currentTarget.dataset.page_id ? u.navigateTo({
                            url: "../../pagesA/pages/movieA/page?page_id=" + n.currentTarget.dataset.page_id
                        }) : n.currentTarget.dataset.url && u.navigateTo({
                            url: "../../pagesA/pages/movieA/webview?return_url=" + encodeURIComponent(n.currentTarget.dataset.url)
                        });
                    },
                    regetsignin: function() {
                        var a = this, o = new Date(new Date().toLocaleDateString()).getTime(), s = new Date(new Date().toLocaleDateString()).getTime() + 864e5 - 1, n = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "userinfo"
                        });
                        u.request({
                            url: n,
                            method: "GET",
                            data: {
                                openid: u.getStorageSync("openid")
                            },
                            success: function(n) {
                                var n = r.globalData.crypt.Decrypt(n.data.data.data, n.data.data.key), i = JSON.parse(n);
                                if (console.log(i), i.openid) {
                                    u.setStorageSync("userinfo", i.userinfo), a.userinfo = i.userinfo, a.continuity = +i.userinfo.sign_in_continuity;
                                    var e = 0;
                                    1 == i.userinfo.sign_in_continuity ? ((n = a.signinList.map(function(n) {
                                        var i = n;
                                        return console.log(n), i.signinedType = !1, i.signiningType = !0, i.signinFuture = !0, 
                                        i;
                                    }))[0] = {
                                        signinId: a.signinList[0].signinId,
                                        signinCoin: a.signinList[0].signinCoin,
                                        signinDay: a.signinList[0].signinDay,
                                        signinedType: !0,
                                        signiningType: !1,
                                        signinFuture: !1,
                                        lookAd: a.signinList[0].lookAd
                                    }, a.signinList = n, console.log(n)) : 7 == i.userinfo.sign_in_continuity && (e = 1);
                                    for (var t = 0; t <= a.signinList.length - e; t++) t <= +i.userinfo.sign_in_continuity ? (a.signinList[t].signinedType = !0, 
                                    a.signinList[t].signiningType = !1, a.signinList[t].signinFuture = !1) : t > +i.userinfo.sign_in_continuity && (a.signinList[t - 1].signinedType = !1, 
                                    a.signinList[t - 1].signiningType = !0, a.signinList[t - 1].signinFuture = !0);
                                    console.log(+i.userinfo.sign_in_continuity), console.log(e), console.log(+i.userinfo.sign_in_continuity - e), 
                                    i.userinfo.sign_in && o < 1e3 * i.userinfo.sign_in && s > 1e3 * i.userinfo.sign_in && (a.signinList[+i.userinfo.sign_in_continuity - e].lookAd = !0, 
                                    a.isSignin = !0, a.signinList = a.signinList);
                                }
                            }
                        });
                    },
                    getsignin: function() {
                        var i = this, n = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "getsignin"
                        });
                        u.request({
                            url: n,
                            method: "GET",
                            data: {
                                openid: u.getStorageSync("openid")
                            },
                            success: function(n) {
                                n.status = 0, console.log(n);
                                n = n.data.data;
                                i.signinList[0].signinCoin = n.signin_one_day, i.signinList[1].signinCoin = n.signin_two_day, 
                                i.signinList[2].signinCoin = n.signin_three_day, i.signinList[3].signinCoin = n.signin_four_day, 
                                i.signinList[4].signinCoin = n.signin_five_day, i.signinList[5].signinCoin = n.signin_six_day, 
                                i.signinList[6].signinCoin = n.signin_seven_day, i.signinList = i.signinList, i.regetsignin();
                            }
                        });
                    },
                    getWxCode: function() {
                        var i = this;
                        wx.login({
                            success: function(n) {
                                i.wxCode = n.code;
                            }
                        });
                    },
                    login: function(i) {
                        var e = this;
                        this.closeDialog2(), u.getSetting({
                            success: function(n) {
                                n.authSetting["scope.userInfo"] ? u.getUserProfile({
									desc: '用于完善会员资料',
                                    success: function(n) {
                                        e.userAuth(i, n, "login");
                                    }
                                }) : e.userAuth(i, null, "login");
                            }
                        });
                    },
                    userAuth: function(e, nn, t) {
                        var a = this;
                        "getUserProfile:ok" == nn.errMsg ? wx.login({
                            success: function(n) {
                                var i = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "userinfo"
                                }), n = {
                                    code: n.code,
                                    encryptedData: nn.encryptedData,
                                    iv: nn.iv,
                                    openid: u.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                u.request({
                                    url: i,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: n,
                                    success: function(n) {
                                        1 == n.data.status ? (n = r.globalData.crypt.Decrypt(n.data.data.data, n.data.data.key), 
                                        n = JSON.parse(n), u.setStorageSync("userinfo", n.userinfo), a.userinfo = n.userinfo, 
                                        "login" == t && (a.closeDialog2(), u.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        }))) : u.showToast({
                                            title: "您取消了请求",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        }) : u.showToast({
                            title: "获取用户信息失败",
                            icon: "none"
                        });
                    },
                    tasklq: function(n) {
                        var i = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "tasklq"
                        });
                        u.request({
                            url: i,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: u.getStorageSync("openid"),
                                taskid: n.currentTarget.dataset.taskid
                            },
                            success: function(n) {
                                n = r.globalData.crypt.Decrypt(n.data.data.data, n.data.data.key);
                                1 == JSON.parse(n).status ? u.showToast({
                                    title: "领取成功",
                                    icon: "none"
                                }) : u.showToast({
                                    title: "领取失败",
                                    icon: "none"
                                });
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
                    userlogin: function() {
                        u.getStorageSync("userinfo").nickname || 1 != u.getStorageSync("setting").login_type ? this.closeDialog2() : this.showDialog2();
                    },
                    loadsetting: function() {
                        var i = this, n = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "setting"
                        });
                        u.request({
                            url: n,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: u.getStorageSync("openid")
                            },
                            success: function(n) {
                                n = r.globalData.crypt.Decrypt(n.data.data.data, n.data.data.key), n = JSON.parse(n);
                                u.setStorageSync("setting", n.setting), i.setting = u.getStorageSync("setting"), 
                                u.setNavigationBarColor({
                                    backgroundColor: "#ff5756",
                                    frontColor: "white"
                                }), u.stopPullDownRefresh();
                            }
                        });
                    },
                    loadtasks: function() {
                        var i = this, n = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "tasklist"
                        });
                        u.request({
                            url: n,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: u.getStorageSync("openid")
                            },
                            success: function(n) {
                                n = r.globalData.crypt.Decrypt(n.data.data.data, n.data.data.key), n = JSON.parse(n);
                                console.log(n), i.taskList = n.data.tasklist;
                            }
                        });
                    },
                    loaddonetasks: function() {
                        var i = this, n = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "donetasklist"
                        });
                        u.request({
                            url: n,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: u.getStorageSync("openid")
                            },
                            success: function(n) {
                                n = r.globalData.crypt.Decrypt(n.data.data.data, n.data.data.key), n = JSON.parse(n);
                                console.log(n), i.donetaskList = n.data.donetasklist;
                            }
                        });
                    },
                    coinDouble: function(n) {
                        for (var i = this, e = "", t = i.signinList.filter(function(n) {
                            return 1 == n.signinedType;
                        }), a = 0; a < t.length; a++) e = t[a];
                        var o = null;
                        u.createRewardedVideoAd && ((o = u.createRewardedVideoAd({
                            adUnitId: u.getStorageSync("setting").ad_jili_id
                        })).onLoad(function(n) {}), o.onError(function(n) {}), o.onClose(function(n) {
                            n && n.isEnded && (u.request({
                                url: r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "adDoublecredit"
                                }),
                                method: "GET",
                                data: {
                                    openid: u.getStorageSync("openid"),
                                    goold: e.signinCoin
                                },
                                success: function(n) {
                                    console.log(n), 1 == n.status && (i.lookAd = !0);
                                }
                            }), i.getsignin());
                        })), o && o.show().catch(function() {
                            o.load().then(function() {
                                return o.show();
                            }).catch(function(n) {});
                        });
                    },
                    coinCenterFun: function() {
                        var i = this;
                        u.request({
                            url: n.globalData.data.api + "do=IndexRewrite&action=UserDailyTasks&token=" + i.token,
                            method: "get",
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(n) {
                                i.setData({
                                    taskList: n.info
                                });
                            }
                        });
                    },
                    bindGoTask: function() {
                        u.navigateTo({
                            url: "/pages/index/index"
                        });
                    },
                    bindChooseHb: function(i) {
                        var e = this, t = i.currentTarget.dataset.index;
                        e.setData({
                            hbIndex: t
                        }), u.request({
                            url: n.globalData.data.api + "do=IndexRewrite&action=MinusGoldPay&token=" + e.token + "&task_id=" + e.hongbaoList[t].id,
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(n) {
                                e.userInfo.gold < e.hongbaoList[t].minus_gold ? e.setData({
                                    dhhbWindow: !0
                                }) : (e.userInfoFun(), e.hongbaoListFun(), u.setStorageSync("onlyIndex", e.hongbaoList[t].only), 
                                e.hongbaoList[t].task_frequency == e.hongbaoList[t].task_count ? u.showToast({
                                    title: "已领取"
                                }) : e.setData({
                                    dhhbWindow: !0
                                }));
                            }
                        });
                    },
                    bindClose: function() {
                        this.setData({
                            dhhbWindow: !1
                        });
                    },
                    hongbaoListFun: function() {
                        var e = this;
                        u.request({
                            url: n.globalData.data.api + "do=IndexRewrite&action=TaskRedPacket&token=" + e.token,
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(n) {
                                var i = n.info.map(function(n) {
                                    return n.hongbaoHide = !1, n.hongbaoHand = !1, n;
                                });
                                i[0].hongbaoHide = !0, i[0].hongbaoHand = !0, e.setData({
                                    hongbaoList: n.info
                                });
                            }
                        });
                    },
                    userSignin: function() {
                        u.getStorageSync("userinfo").nickname ? this.isSignin ? 1 == this.userinfo.User_watch || 1 == this.setting.ad_is_everyday_video && this.coinDouble() : this.bindSignin() : this.showDialog2();
                    },
                    bindSignin: function() {
                        var i = this, n = (new Date(new Date().toLocaleDateString()).getTime(), new Date(new Date().toLocaleDateString()).getTime(), 
                        i.notice, i.signinList.filter(function(n) {
                            return 1 == n.signinedType;
                        }));
                        n.length, n.length, u.getStorageSync("setting").warn_qiandao_tplid ? wx.requestSubscribeMessage({
                            tmplIds: [ u.getStorageSync("setting").warn_qiandao_tplid ],
                            success: function(n) {
                                console.log(n), n.errMsg, i.moban();
                            },
                            fail: function(n) {}
                        }) : i.moban();
                    },
                    moban: function() {
                        var e = this, t = new Date(new Date().toLocaleDateString()).getTime(), a = new Date(new Date().toLocaleDateString()).getTime() + 864e5 - 1, n = e.signinList.filter(function(n) {
                            return 1 == n.signinedType;
                        }), o = n.length <= 6 ? n.length : n.length - 1, n = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "getsignin"
                        });
                        u.request({
                            url: n,
                            method: "GET",
                            data: {
                                openid: u.getStorageSync("openid"),
                                goold: e.signinList[o].signinCoin
                            },
                            success: function(n) {
                                var i = n, n = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "userinfo"
                                });
                                u.request({
                                    url: n,
                                    method: "GET",
                                    data: {
                                        openid: u.getStorageSync("openid")
                                    },
                                    success: function(n) {
                                        n = r.globalData.crypt.Decrypt(n.data.data.data, n.data.data.key), n = JSON.parse(n);
                                        console.log(n), n.openid && (u.setStorageSync("userinfo", n.userinfo), e.userinfo = n.userinfo, 
                                        e.regetsignin(), console.log(e.userinfo.sign_in), console.log(t), console.log(a), 
                                        console.log(1e3 * e.userinfo.sign_in), e.userinfo.sign_in && t < 1e3 * e.userinfo.sign_in && a > 1e3 * e.userinfo.sign_in && (e.signinList[o].lookAd = !0, 
                                        e.isSignin = !0, e.signinList = e.signinList), u.showToast({
                                            title: i.data.msg,
                                            icon: "none"
                                        }));
                                    }
                                });
                            }
                        });
                    },
                    prizeGoodsDetail: function(n) {
                        n = n.currentTarget.dataset.index, n = this.prizeGoodsList[n].id;
                        u.navigateTo({
                            url: "/pages/prizedetails/prizedetails?goodsid=" + n
                        });
                    },
                    bindTaskThree: function(r) {
                        var g = this;
                        u.chooseAddress && u.chooseAddress({
                            success: function(i) {
                                var e, t, a, o, s;
                                "chooseAddress:ok" === i.errMsg && (e = i.userName, t = i.telNumber, a = i.detailInfo, 
                                o = i.provinceName, s = i.cityName, i = i.countyName, u.request({
                                    url: n.globalData.data.api + "do=IndexRewrite&action=IncludeAddressUser&token=" + g.token + "&name=" + e + "&phone=" + t + "&address=" + (o + s + i + a) + "&task_id=" + r,
                                    method: "get",
                                    header: {
                                        "content-type": "application/json"
                                    },
                                    success: function(n) {
                                        g.coinCenterFun();
                                    }
                                }));
                            },
                            fail: function(n) {
                                "chooseAddress:fail auth deny" === n.errMsg && u.openSetting({
                                    success: function(n) {}
                                });
                            }
                        });
                    },
                    bindGoWelfare: function(n) {
                        n = n.currentTarget.dataset.index;
                        1 == this.taskList.WelfareTask[n].only ? u.navigateTo({
                            url: "/pages/Luckygift/Luckygift"
                        }) : 2 == this.taskList.WelfareTask[n].only && this.bindTaskThree(this.taskList.WelfareTask[n].id);
                    },
                    bindGoDaily: function(n) {
                        var i = this, n = n.currentTarget.dataset.index;
                        3 == i.taskList.DailyTasks[n].only || (4 == i.taskList.DailyTasks[n].only ? (u.switchTab({
                            url: "/pages/index/index"
                        }), u.setStorageSync("onlyIndex", i.taskList.DailyTasks[n].only)) : 5 == i.taskList.DailyTasks[n].only && u.navigateTo({
                            url: "/pages/Luckyfortreasure/Luckyfortreasure?only=" + i.taskList.DailyTasks[n].only
                        }));
                    },
                    bindWelfare: function(i) {
                        var e = this, i = i.currentTarget.dataset.index;
                        u.request({
                            url: n.globalData.data.api + "do=IndexRewrite&action=IncreaseGoldCoins&token=" + e.token + "&task_id=" + e.taskList.WelfareTask[i].id,
                            method: "get",
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(n) {
                                u.showToast({
                                    title: n.info,
                                    icon: "none"
                                }), e.onLoad();
                            }
                        });
                    },
                    bindDaily: function(i) {
                        var e = this, i = i.currentTarget.dataset.index;
                        u.request({
                            url: n.globalData.data.api + "do=IndexRewrite&action=IncreaseGoldCoins&token=" + e.token + "&task_id=" + e.taskList.DailyTasks[i].id,
                            method: "get",
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(n) {
                                u.showToast({
                                    title: n.info,
                                    icon: "none"
                                }), e.onLoad();
                            }
                        });
                    }
                }
            };
            e.default = i;
        }).call(this, t("543d").default);
    }
}, [ [ "7586", "common/runtime", "common/vendor" ] ] ]);