require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/movieA/cinema" ], {
    "2f44": function(e, t, a) {
        (function(o) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c = getApp(), e = {
                data: function() {
                    return {
                        module_name: c.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: o.getStorageSync("userinfo"),
                        setting: o.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        mainHeight: 900,
                        pageLoading: !0,
                        city: 0,
                        currentIndex: 0,
                        current: 0,
                        movie_id: 0,
                        cinema_id: 0,
                        cinemaMovieList: [],
                        cinemaMovieList_list: [],
                        day: [],
                        day_detail: [],
                        date: 0,
                        pageIndex: 1,
                        pageSize: 20,
                        lon: "",
                        lat: "",
                        shows: [],
                        film: [],
                        item: "",
                        moviedate: "",
                        cinemadetail: ""
                    };
                },
                components: {
                    gracePage: function() {
                        a.e("graceUI/components/gracePage").then(function() {
                            return resolve(a("1021"));
                        }.bind(null, a)).catch(a.oe);
                    },
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
                    }
                },
                props: {},
                onShow: function() {
                    this.userinfo = o.getStorageSync("userinfo");
                },
                onReady: function() {},
                onLoad: function(e) {
                    var t = this, a = this;
                    this.module_name = c.globalData.module_name;
                    a.movie_id = e.movie_id, a.cinema_id = e.cinema_id, e.date && (a.moviedate = e.date), 
                    a.cinemadetail = o.getStorageSync("cinemadetail"), o.setStorageSync("invite_uid", e.uid), 
                    this.loadcinemaMovieList(), this.setting = o.getStorageSync("setting"), this.userinfo = o.getStorageSync("userinfo"), 
                    null != o.getStorageSync("userinfo") && o.getStorageSync("userinfo") || o.login({
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
                                    e.data.errno || (o.setStorageSync("openid", e.data.data.openid), o.setStorageSync("unionid", e.data.data.userinfo.unionid), 
                                    t = c.globalData.util.url("entry/wxapp/api", {
                                        m: c.globalData.module_name,
                                        o: "userinfo"
                                    }), o.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: o.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (o.setStorageSync("userinfo", e.userinfo), o.setStorageSync("pid_use_time", e.pid_time), 
                                            o.getStorageSync("pid_time") != o.getStorageSync("pid_use_time") && (o.setStorageSync("elmwm_url", ""), 
                                            o.setStorageSync("elmsc_url", ""), o.setStorageSync("elmwmposter", ""), o.setStorageSync("elmscposter", ""), 
                                            o.setStorageSync("pid_time", o.getStorageSync("pid_use_time"))), a.systemtype = o.getStorageSync("systemtype"), 
                                            a.userinfo = e.userinfo, a.getWxCode());
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                methods: {
                    buy: function(e) {
                        console.log(e), o.setStorageSync("showdetail", e.currentTarget.dataset.show), o.navigateTo({
                            url: "seat?showid=" + e.currentTarget.dataset.showid
                        });
                    },
                    opencinema: function(e) {
                        o.navigateTo({
                            url: "cinema?movie_id=" + e.currentTarget.dataset.movieid + "&cinema_id=" + e.currentTarget.dataset.cinemaid
                        });
                    },
                    navChange: function(e) {
                        this.currentIndex = e, this.shows = [], this.pageIndex = 1, this.moviedate = this.day[e], 
                        this.loadMovieList(), o.showLoading({
                            title: "加载中...",
                            mask: !1
                        });
                    },
                    swiperChange: function(e) {
                        console.log(e);
                        e = e.detail.current;
                        this.currentIndex = e, this.shows = [], this.pageIndex = 1, this.moviedate = this.day[e], 
                        this.loadMovieList(), o.showLoading({
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
                        var e = this;
                        console.log(e.cinemadetail), wx.openLocation({
                            latitude: e.cinemadetail.latitude,
                            longitude: e.cinemadetail.longitude,
                            address: e.cinemadetail.address,
                            name: e.cinemadetail.cinemaName,
                            scale: 18
                        });
                    },
                    loadmoviedetail: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "moviedetail"
                        });
                        o.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid"),
                                id: t.movie_id,
                                cityid: o.getStorageSync("cityid")
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.movie_detail = e.data.detail, t.pageIndex = 1, t.currentIndex = 0, 
                                t.loadcinemaList();
                            }
                        });
                    },
                    loadshows: function() {
                        var t = this;
                        t.shows = [];
                        var e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "shows"
                        });
                        o.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid"),
                                id: t.movie_id,
                                cityid: o.getStorageSync("cityid"),
                                date: t.date,
                                pageIndex: t.pageIndex,
                                pageSize: t.pageSize,
                                cinemaId: t.cinema_id
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.shows = e.data.shows, o.hideLoading();
                            }
                        });
                    },
                    loadcinemaMovieList: function() {
                        o.showLoading({
                            title: "加载中...",
                            mask: !1
                        });
                        var i = this;
                        if (o.getStorageSync("cinemaMovieList")) {
                            for (var e in i.cinemaMovieList_list = o.getStorageSync("cinemaMovieList"), i.lat = o.getStorageSync("cinemadetail").latitude, 
                            i.lon = o.getStorageSync("cinemadetail").longitude, o.getStorageSync("cinemaMovieList")) o.getStorageSync("cinemaMovieList")[e].filmId == i.movie_id && (i.film = o.getStorageSync("cinemaMovieList")[e], 
                            i.current = e);
                            i.loadMovieList();
                        } else {
                            var t = c.globalData.util.url("entry/wxapp/api", {
                                m: c.globalData.module_name,
                                o: "cinemaMovieList"
                            });
                            o.request({
                                url: t,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: {
                                    openid: o.getStorageSync("openid"),
                                    id: i.movie_id,
                                    type: 1,
                                    cinemaId: i.cinema_id,
                                    hotmovie: JSON.stringify(o.getStorageSync("hotmovie"))
                                },
                                success: function(e) {
                                    var t, e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), a = JSON.parse(e);
                                    for (t in console.log(a), i.cinemaMovieList_list = a.data.movieList, o.setStorageSync("cinemaMovieList", a.data.movieList), 
                                    i.lat = o.getStorageSync("cinemadetail").latitude, i.lon = o.getStorageSync("cinemadetail").longitude, 
                                    a.data.movieList) a.data.movieList[t].filmId == i.movie_id && (i.film = a.data.movieList[t], 
                                    i.current = t);
                                    i.loadMovieList();
                                }
                            });
                        }
                    },
                    loadMovieList: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "cinemaMovieList"
                        });
                        o.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid"),
                                id: t.movie_id,
                                type: 2,
                                cinemaId: t.cinema_id,
                                moviedate: t.moviedate,
                                hotmovie: JSON.stringify(o.getStorageSync("hotmovie"))
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.shows = e.data.movieaction, t.day = e.data.moviedate, t.currentIndex = e.data.cdate, 
                                o.hideLoading();
                            }
                        });
                    },
                    loadmovieday: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "cinemaMovieList"
                        });
                        o.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid"),
                                id: t.movie_id,
                                type: 3,
                                cinemaId: t.cinema_id
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), t.day = e.data.day, t.day_detail = e.data.day_detail, t.date = t.day_detail[0].date, 
                                t.loadMovieList(), o.hideLoading();
                            }
                        });
                    },
                    changemovie: function(e) {
                        this.film = e.currentTarget.dataset.movie, this.movie_id = this.film.filmId, this.moviedate = this.film.publishDate.substring(0, 10), 
                        this.loadMovieList();
                    },
                    swiperChangeHandler: function(e) {
                        e = e.detail.current;
                        this.scrollType = "loading", this.currentTab = 0, this.current = e, this.shows = [];
                        e = this.cinemaMovieList_list[e];
                        this.film = e, o.setStorageSync("moviedetail", e), this.movie_id = this.film.filmId, 
                        o.showLoading({
                            title: "加载中...",
                            mask: !1
                        }), this.loadMovieList(), this.scrollType = "";
                    },
                    userlogin: function() {
                        o.getStorageSync("userinfo").nickname ? this.closeDialog2() : this.showDialog2();
                    },
                    login: function(t) {
                        var a = this;
                        this.closeDialog2(), o.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? o.getUserProfile({
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
                        var n = this;
                        "getUserProfile:ok" == ee.errMsg ? wx.login({
                            success: function(e) {
                                var t = c.globalData.util.url("entry/wxapp/api", {
                                    m: c.globalData.module_name,
                                    o: "userinfo"
                                }), e = {
                                    code: e.code,
                                    encryptedData: ee.encryptedData,
                                    iv: ee.iv,
                                    openid: o.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                o.request({
                                    url: t,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: e,
                                    success: function(e) {
                                        1 == e.data.status ? (e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                        e = JSON.parse(e), o.setStorageSync("userinfo", e.userinfo), n.userinfo = e.userinfo, 
                                        "login" == i && (n.closeDialog2(), o.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        })), 1 == n.currentIndex ? n.load_mtscqrcode2() : n.load_mtwmqrcode2()) : o.showToast({
                                            title: "您取消了请求",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        }) : o.showToast({
                            title: "获取用户信息失败",
                            icon: "none"
                        });
                    },
                    closeAlert: function() {
                        this.closeDialog2();
                    },
                    onShareAppMessage: function() {
                        var e = "pages/index/index?to=meituan&uid=" + o.getStorageSync("userinfo").user_id;
                        return {
                            title: o.getStorageSync("setting").sharetitle,
                            imageUrl: o.getStorageSync("setting").sharethumb,
                            path: e
                        };
                    }
                }
            };
            t.default = e;
        }).call(this, a("543d").default);
    },
    4199: function(e, t, a) {
        var i = a("9cbd");
        a.n(i).a;
    },
    5866: function(e, t, a) {
        a.r(t);
        var i, n = a("2f44"), o = a.n(n);
        for (i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = o.a;
    },
    "5a77": function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("6d1d")).default);
        }).call(this, a("543d").createPage);
    },
    "6d1d": function(e, t, a) {
        a.r(t);
        var i, n = a("9055"), o = a("5866");
        for (i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        a("4199");
        var c = a("f0c5"), n = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = n.exports;
    },
    9055: function(e, t, a) {
        a.d(t, "b", function() {
            return i;
        }), a.d(t, "c", function() {
            return n;
        }), a.d(t, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    "9cbd": function(e, t, a) {}
}, [ [ "5a77", "common/runtime", "common/vendor" ] ] ]);