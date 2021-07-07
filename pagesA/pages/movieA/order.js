require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/movieA/order" ], {
    "02fb": function(e, t, a) {
        a.r(t);
        var i, o = a("e2b0"), n = a.n(o);
        for (i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = n.a;
    },
    1442: function(e, t, a) {
        a.r(t);
        var i, o = a("6c66"), n = a("02fb");
        for (i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        a("643b");
        var r = a("f0c5"), o = Object(r.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    },
    "510f": function(e, t, a) {},
    "643b": function(e, t, a) {
        var i = a("510f");
        a.n(i).a;
    },
    "6c66": function(e, t, a) {
        a.d(t, "b", function() {
            return i;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    a19c: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("1442")).default);
        }).call(this, a("543d").createPage);
    },
    e2b0: function(e, t, a) {
        (function(n) {
            function o(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = getApp(), i = a("730d"), d = a("01b2"), e = {
                data: function() {
                    return {
                        module_name: r.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: n.getStorageSync("userinfo"),
                        setting: n.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        mainHeight: 900,
                        pageLoading: !0,
                        cinemadetail: [],
                        moviedetail: [],
                        showdetail: [],
                        order: [],
                        discount: 0,
                        timer1: i.currentTime("str", 3e5),
                        timeend: 0,
                        pagehide: 0,
                        mobile: ""
                    };
                },
                components: {
                    gracePage: function() {
                        a.e("graceUI/components/gracePage").then(function() {
                            return resolve(a("1021"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceCountDown: function() {
                        a.e("graceUI/components/graceCountDown1").then(function() {
                            return resolve(a("0130"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {},
                onShow: function() {
                    this.userinfo = n.getStorageSync("userinfo"), this.pagehide = 0;
                },
                onHide: function() {
                    this.pagehide = 1;
                },
                onLoad: function(e) {
                    var t = this, a = this;
                    a.timer1 = i.currentTime("str", 3e5), a.module_name = r.globalData.module_name, 
                    a.cinemadetail = n.getStorageSync("cinemadetail"), a.moviedetail = n.getStorageSync("moviedetail"), 
                    a.showdetail = n.getStorageSync("showdetail"), a.order = n.getStorageSync("order_info"), 
                    a.timeend = 0, a.discount = Math.round(100 * (a.order.selectedOriginPrice - a.order.selectedRealPrice)) / 100, 
                    this.setting = n.getStorageSync("setting"), this.userinfo = n.getStorageSync("userinfo"), 
                    this.usershowList(), null != n.getStorageSync("userinfo") && n.getStorageSync("userinfo") || n.login({
                        success: function(e) {
                            t.wxCode = e.code;
                            e = e.code;
                            r.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var t;
                                    e.data.errno || (n.setStorageSync("openid", e.data.data.openid), n.setStorageSync("unionid", e.data.data.userinfo.unionid), 
                                    t = r.globalData.util.url("entry/wxapp/api", {
                                        m: r.globalData.module_name,
                                        o: "userinfo"
                                    }), n.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: n.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (n.setStorageSync("userinfo", e.userinfo), n.setStorageSync("pid_use_time", e.pid_time), 
                                            n.getStorageSync("pid_time") != n.getStorageSync("pid_use_time") && (n.setStorageSync("elmwm_url", ""), 
                                            n.setStorageSync("elmsc_url", ""), n.setStorageSync("elmwmposter", ""), n.setStorageSync("elmscposter", ""), 
                                            n.setStorageSync("pid_time", n.getStorageSync("pid_use_time"))), a.systemtype = n.getStorageSync("systemtype"), 
                                            a.userinfo = e.userinfo, a.getWxCode());
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                methods: {
                    loginToCall: function(t) {
                        var a = this;
                        n.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? n.getUserProfile({
									desc: '用于完善会员资料',
                                    success: function(e) {
                                        a.userAuth(t, e, "call");
                                    }
                                }) : a.userAuth(t, null, "call");
                            }
                        });
                    },
                    usershowList: function() {
                        var e = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "cinemaMovieList"
                        });
                        n.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                type: 3,
                                cinemaId: this.order.cinemaId
                            },
                            success: function(e) {}
                        });
                    },
                    formSubmit: function(e) {
                        var t, a, i = this;
                        1 != i.timeend ? (console.log(JSON.stringify(e.detail.value)), a = e.detail.value, 
                        d.check(a, [ {
                            name: "mobile",
                            checkType: "phoneno",
                            errorMsg: "请填写手机号码"
                        }, {
                            name: "xuzhi",
                            checkType: "same",
                            checkRule: "1",
                            errorMsg: "请勾选已读购票须知"
                        } ]) ? (t = e.detail.value.applyseat ? 1 : 2, a = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "seatbuy"
                        }), wx.request({
                            url: a,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: (o(e = {
                                openid: n.getStorageSync("openid"),
                                order_acceptChangeSeat: t,
                                order_reservedPhone: e.detail.value.mobile,
                                order_filmId: i.order.filmId,
                                order_showId: i.order.showId,
                                order_filmName: i.order.filmName,
                                order_filmPic: i.order.filmPic,
                                order_time: i.order.time,
                                order_cinemaName: i.order.cinemaName,
                                order_cinemaId: i.order.cinemaId,
                                order_hallName: i.order.hallName,
                                order_seat: i.order.seat,
                                order_showTime: i.order.showTime,
                                order_stopSellTime: i.order.stopSellTime
                            }, "order_showId", i.order.showId), o(e, "order_duration", i.order.duration), o(e, "order_movieTheaterName", i.order.movieTheaterName), 
                            o(e, "order_ticketNum", i.order.ticketNum), o(e, "order_selectedOriginPrice", i.order.selectedOriginPrice), 
                            o(e, "order_selectedRealPrice", i.order.selectedRealPrice), e),
                            success: function(e) {
                                1 == e.data.status ? r.globalData.util.request({
                                    url: "entry/wxapp/pay",
                                    data: {
                                        m: r.globalData.module_name,
                                        type: "movie",
                                        order_id: e.data.data.order_id
                                    },
                                    cachetime: 0,
                                    success: function(e) {
                                        e.data && e.data.data && !e.data.errno && wx.requestPayment({
                                            timeStamp: e.data.data.timeStamp,
                                            nonceStr: e.data.data.nonceStr,
                                            package: e.data.data.package,
                                            signType: "MD5",
                                            paySign: e.data.data.paySign,
                                            success: function(e) {
                                                n.showModal({
                                                    title: "系统提示",
                                                    content: "支付成功",
                                                    showCancel: !1,
                                                    success: function(e) {
                                                        e.confirm && wx.requestSubscribeMessage({
                                                            tmplIds: n.getStorageSync("setting").movie_tplid,
                                                            success: function(e) {
                                                                n.showToast({
                                                                    title: "订阅成功",
                                                                    icon: "none"
                                                                }), n.redirectTo({
                                                                    url: "../../../pages/user/movieorder"
                                                                });
                                                            },
                                                            fail: function(e) {
                                                                n.showToast({
                                                                    title: "您已取消订阅",
                                                                    icon: "none"
                                                                }), n.redirectTo({
                                                                    url: "../../../pages/user/movieorder"
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            },
                                            fail: function(e) {
                                                n.showModal({
                                                    title: "系统提示",
                                                    content: "支付失败",
                                                    showCancel: !1
                                                });
                                            }
                                        });
                                    },
                                    fail: function(e) {
                                        n.showModal({
                                            title: "系统提示",
                                            content: e.data.message || "错误",
                                            showCancel: !1,
                                            success: function(e) {}
                                        });
                                    }
                                }) : n.showToast({
                                    title: e.data.msg,
                                    icon: "none"
                                });
                            }
                        })) : n.showToast({
                            title: d.error,
                            icon: "none"
                        })) : n.showModal({
                            title: "系统提示",
                            content: "支付超时，请重新选择座位",
                            showCancel: !1,
                            success: function() {
                                n.navigateBack({
                                    delta: 1
                                });
                            }
                        });
                    },
                    endDo: function(e) {
                        this.timeend = 1;
                    },
                    xieyi: function() {
                        console.log(this.setting.movie_xieyi_url), -1 != this.setting.movie_xieyi_url.indexOf("/page") ? n.navigateTo({
                            url: this.setting.movie_xieyi_url
                        }) : n.navigateTo({
                            url: "webview?return_url=" + encodeURIComponent(this.setting.movie_xieyi_url)
                        });
                    },
                    opencinema: function(e) {
                        n.navigateTo({
                            url: "cinema?movie_id=" + e.currentTarget.dataset.movieid + "&cinema_id=" + e.currentTarget.dataset.cinemaid
                        });
                    },
                    navChange: function(e) {
                        this.currentIndex = e, this.shows = [], this.pageIndex = 1, this.moviedate = this.day[e], 
                        this.loadMovieList(), n.showLoading({
                            title: "加载中...",
                            mask: !1
                        });
                    },
                    swiperChange: function(e) {
                        console.log(e);
                        e = e.detail.current;
                        this.currentIndex = e, this.shows = [], this.pageIndex = 1, this.moviedate = this.day[e], 
                        this.loadMovieList(), n.showLoading({
                            title: "加载中...",
                            mask: !1
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
                    openLocation: function() {
                        wx.openLocation({
                            lat: this.cinemaMovieList.lat,
                            lon: this.cinemaMovieList.lon,
                            address: this.cinemaMovieList.address,
                            name: this.cinemaMovieList.name,
                            scale: 18
                        });
                    },
                    loadmoviedetail: function() {
                        var t = this, e = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "moviedetail"
                        });
                        n.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                id: t.movie_id,
                                cityid: n.getStorageSync("cityid")
                            },
                            success: function(e) {
                                e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.movie_detail = e.data.detail, t.pageIndex = 1, t.currentIndex = 0, 
                                t.loadcinemaList();
                            }
                        });
                    },
                    loadshows: function() {
                        var t = this;
                        t.shows = [];
                        var e = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "shows"
                        });
                        n.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                id: t.movie_id,
                                cityid: n.getStorageSync("cityid"),
                                date: t.date,
                                pageIndex: t.pageIndex,
                                pageSize: t.pageSize,
                                cinemaId: t.cinema_id
                            },
                            success: function(e) {
                                e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.shows = e.data.shows, n.hideLoading();
                            }
                        });
                    },
                    loadcinemaMovieList: function() {
                        var i = this, e = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "cinemaMovieList"
                        });
                        n.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                id: i.movie_id,
                                type: 1,
                                cinemaId: i.cinema_id
                            },
                            success: function(e) {
                                var t, e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), a = JSON.parse(e);
                                for (t in console.log(a), i.cinemaMovieList_list = a.data.movieList, i.lat = n.getStorageSync("cinemadetail").latitude, 
                                i.lon = n.getStorageSync("cinemadetail").longitude, a.data.movieList) a.data.movieList[t].filmId == i.movie_id && (i.film = a.data.movieList[t], 
                                i.current = t);
                                i.loadMovieList();
                            }
                        });
                    },
                    loadMovieList: function() {
                        var t = this, e = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "cinemaMovieList"
                        });
                        n.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                id: t.movie_id,
                                type: 2,
                                cinemaId: t.cinema_id,
                                moviedate: t.moviedate
                            },
                            success: function(e) {
                                e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.shows = e.data.movieaction, t.day = e.data.moviedate, n.hideLoading();
                            }
                        });
                    },
                    loadmovieday: function() {
                        var t = this, e = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "cinemaMovieList"
                        });
                        n.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: n.getStorageSync("openid"),
                                id: t.movie_id,
                                type: 3,
                                cinemaId: t.cinema_id
                            },
                            success: function(e) {
                                e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.day = e.data.day, t.day_detail = e.data.day_detail, t.date = t.day_detail[0].date, 
                                t.loadMovieList(), n.hideLoading();
                            }
                        });
                    },
                    changemovie: function(e) {
                        this.film = e.currentTarget.dataset.movie, this.movie_id = this.film.filmId, this.moviedate = this.film.publishDate.substring(0, 10), 
                        this.loadMovieList();
                    },
                    swiperChangeHandler: function(e) {
                        e = e.detail.current;
                        this.scrollType = "loading", this.currentTab = 0, this.current = e;
                        e = this.cinemaMovieList_list[e];
                        this.film = e, n.setStorageSync("moviedetail", e), this.movie_id = this.film.filmId, 
                        this.moviedate = this.film.publishDate.substring(0, 10), this.loadMovieList(), this.scrollType = "";
                    },
                    userlogin: function() {
                        n.getStorageSync("userinfo").nickname ? this.closeDialog2() : this.showDialog2();
                    },
                    login: function(t) {
                        var a = this;
                        this.closeDialog2(), n.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? n.getUserProfile({
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
                    userAuth: function(a, ee, i) {
                        var o = this;
                        "getUserProfile:ok" == ee.errMsg ? n.login({
                            success: function(e) {
                                var t = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "userinfo"
                                }), e = {
                                    code: e.code,
                                    encryptedData: ee.encryptedData,
                                    iv: ee.iv,
                                    openid: n.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                n.request({
                                    url: t,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: e,
                                    success: function(e) {
                                        1 == e.data.status ? (e = r.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                        e = JSON.parse(e), "login" == i && (o.closeDialog2(), n.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        })), "call" == i && (o.mobile = e.mobile)) : n.showToast({
                                            title: "您取消了请求",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        }) : n.showToast({
                            title: "您取消了操作",
                            icon: "none"
                        });
                    },
                    closeAlert: function() {
                        this.closeDialog2();
                    },
                    onShareAppMessage: function() {
                        var e = "pages/index/index?to=meituan&uid=" + n.getStorageSync("userinfo").user_id;
                        return {
                            title: n.getStorageSync("setting").sharetitle,
                            imageUrl: n.getStorageSync("setting").sharethumb,
                            path: e
                        };
                    }
                }
            };
            t.default = e;
        }).call(this, a("543d").default);
    }
}, [ [ "a19c", "common/runtime", "common/vendor", "pagesA/common/vendor" ] ] ]);