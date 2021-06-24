require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/movieA/detail" ], {
    2037: function(e, t, a) {
        a.r(t);
        var n, o = a("f5f3"), i = a("4038");
        for (n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("609c");
        var c = a("f0c5"), o = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    },
    4038: function(e, t, a) {
        a.r(t);
        var n, o = a("c9c2"), i = a.n(o);
        for (n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        t.default = i.a;
    },
    "609c": function(e, t, a) {
        var n = a("dde6");
        a.n(n).a;
    },
    "96f4": function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("2037")).default);
        }).call(this, a("543d").createPage);
    },
    c9c2: function(e, t, a) {
        (function(i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c = getApp(), e = {
                data: function() {
                    return {
                        module_name: c.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: i.getStorageSync("userinfo"),
                        setting: i.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        empty: 0,
                        mainHeight: 900,
                        pageLoading: !0,
                        city: 0,
                        currentIndex: 0,
                        movie_id: 0,
                        movie_detail: [],
                        day: [],
                        day_detail: [],
                        date: 0,
                        pageIndex: 1,
                        pageSize: 20,
                        lon: "",
                        lat: "",
                        cinemaList: []
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
                    },
                    graceFlex: function() {
                        a.e("graceUI/components/graceFlex").then(function() {
                            return resolve(a("b5c9"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceSearch: function() {
                        a.e("graceUI/components/graceSearch").then(function() {
                            return resolve(a("de21"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceEmptyNew: function() {
                        a.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(a("f8df"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {},
                onShow: function() {
                    this.userinfo = i.getStorageSync("userinfo");
                },
                onReady: function() {},
                onLoad: function(e) {
                    var t = this, a = this;
                    this.module_name = c.globalData.module_name;
                    a.movie_detail = i.getStorageSync("moviedetail"), i.setStorageSync("invite_uid", e.uid), 
                    i.getStorageSync("cityid") ? this.loadmoviedetail() : this.getLocation(), this.setting = i.getStorageSync("setting"), 
                    this.userinfo = i.getStorageSync("userinfo"), null != i.getStorageSync("userinfo") && i.getStorageSync("userinfo") || i.login({
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
                                    e.data.errno || (i.setStorageSync("openid", e.data.data.openid), i.setStorageSync("unionid", e.data.data.userinfo.unionid), 
                                    t = c.globalData.util.url("entry/wxapp/api", {
                                        m: c.globalData.module_name,
                                        o: "userinfo"
                                    }), i.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: i.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (i.setStorageSync("userinfo", e.userinfo), i.setStorageSync("pid_use_time", e.pid_time), 
                                            i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && (i.setStorageSync("elmwm_url", ""), 
                                            i.setStorageSync("elmsc_url", ""), i.setStorageSync("elmwmposter", ""), i.setStorageSync("elmscposter", ""), 
                                            i.setStorageSync("pid_time", i.getStorageSync("pid_use_time"))), a.systemtype = i.getStorageSync("systemtype"), 
                                            a.userinfo = e.userinfo, a.getWxCode());
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                methods: {
                    opencinema: function(e) {
                        i.setStorageSync("cinemadetail", e.currentTarget.dataset.cinemaid), i.navigateTo({
                            url: "cinema?movie_id=" + e.currentTarget.dataset.movieid + "&cinema_id=" + e.currentTarget.dataset.cinemaid.cinemaId + "&date=" + e.currentTarget.dataset.date
                        });
                    },
                    navChange: function(e) {
                        this.currentIndex = e, this.cinemaList = [], this.pageIndex = 1, this.date = this.day[e], 
                        this.loadcinemaList(), i.showLoading({
                            title: "加载中...",
                            mask: !1
                        });
                    },
                    swiperChange: function(e) {
                        e = e.detail.current;
                        this.currentIndex = e, this.cinemaList = [], this.pageIndex = 1, this.date = this.day[e], 
                        this.loadcinemaList(), i.showLoading({
                            title: "加载中...",
                            mask: !1
                        });
                    },
                    getLocation: function() {
                        var a = this;
                        i.getLocation({
                            type: "wgs84",
                            success: function(e) {
                                var t = c.globalData.util.url("entry/wxapp/api", {
                                    m: c.globalData.module_name,
                                    o: "movieaddress"
                                });
                                i.setStorageSync("lon", e.longitude), i.setStorageSync("lat", e.latitude), i.request({
                                    url: t,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        lon: e.longitude,
                                        lat: e.latitude
                                    },
                                    success: function(e) {
                                        e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                        a.city = e.data.cityid, i.setStorageSync("cityid", e.data.cityid), a.loadmoviedetail();
                                    }
                                });
                            },
                            fail: function(e) {
                                a.lat = 0, a.lon = 0;
                            }
                        });
                    },
                    again_getLocation: function() {
                        var t = this;
                        i.getSetting({
                            success: function(e) {
                                null != e.authSetting["scope.userLocation"] && 1 != e.authSetting["scope.userLocation"] ? i.showModal({
                                    title: "是否授权当前位置",
                                    content: "需要获取您的地理位置，请确认授权，否则无法获取您所需数据",
                                    success: function(e) {
                                        e.cancel ? i.showToast({
                                            title: "授权失败",
                                            icon: "success",
                                            duration: 1e3
                                        }) : e.confirm && i.openSetting({
                                            success: function(e) {
                                                1 == e.authSetting["scope.userLocation"] ? (i.showToast({
                                                    title: "授权成功",
                                                    icon: "success",
                                                    duration: 1e3
                                                }), t.getLocation(t)) : i.showToast({
                                                    title: "授权失败",
                                                    icon: "success",
                                                    duration: 1e3
                                                });
                                            }
                                        });
                                    }
                                }) : (e.authSetting["scope.userLocation"], t.getLocation(t));
                            }
                        });
                    },
                    confirm: function(e) {
                        this.value1 = e, this.loadmovielist();
                    },
                    clear: function(e) {
                        this.value1 = "", this.loadmovielist();
                    },
                    showDialog2: function() {
                        this.$refs.showAlert_login.open();
                    },
                    closeDialog2: function() {
                        this.$refs.showAlert_login.hide();
                    },
                    scrollend: function() {},
                    loadmoviedetail: function() {
                        i.showLoading({
                            title: "加载中...",
                            mask: !1
                        });
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "moviedetail"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                id: t.movie_detail.filmId,
                                cityid: i.getStorageSync("cityid")
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                if (console.log(e), !e.data) return t.empty = 1, void i.hideLoading();
                                t.day = e.data.day, t.date = e.data.day[0], t.pageIndex = 1, t.currentIndex = 0, 
                                t.loadcinemaList(), i.setNavigationBarTitle({
                                    title: t.movie_detail.name
                                });
                            }
                        });
                    },
                    loadcinemaList: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "cinemaList"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                id: t.movie_detail.filmId,
                                cityid: i.getStorageSync("cityid"),
                                date: t.date,
                                pageIndex: t.pageIndex,
                                pageSize: t.pageSize,
                                lon: i.getStorageSync("lon"),
                                lat: i.getStorageSync("lat")
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.cinemaList = e.data.cinemaList, i.hideLoading();
                            }
                        });
                    },
                    userlogin: function() {
                        i.getStorageSync("userinfo").nickname ? this.closeDialog2() : this.showDialog2();
                    },
                    login: function(t) {
                        var a = this;
                        this.closeDialog2(), i.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? i.getUserInfo({
                                    success: function(e) {
                                        a.userAuth(t, e.userInfo, "login");
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
                                        1 == e.data.status ? (e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                        e = JSON.parse(e), i.setStorageSync("userinfo", e.userinfo), o.userinfo = e.userinfo, 
                                        "login" == n && (o.closeDialog2(), i.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        })), 1 == o.currentIndex ? o.load_mtscqrcode2() : o.load_mtwmqrcode2()) : i.showToast({
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
                    onShareAppMessage: function() {
                        var e = "pages/index/index?to=meituan&uid=" + i.getStorageSync("userinfo").user_id;
                        return {
                            title: i.getStorageSync("setting").sharetitle,
                            imageUrl: i.getStorageSync("setting").sharethumb,
                            path: e
                        };
                    }
                }
            };
            t.default = e;
        }).call(this, a("543d").default);
    },
    dde6: function(e, t, a) {},
    f5f3: function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {});
        var n = function() {
            var e = this, t = (e.$createElement, e._self._c, e.movie_detail.publishDate ? e.movie_detail.publishDate.substring(0, 10) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t
                }
            });
        }, o = [];
    }
}, [ [ "96f4", "common/runtime", "common/vendor" ] ] ]);