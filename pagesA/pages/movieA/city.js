require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/movieA/city" ], {
    "2cdb": function(t, e, a) {
        var n = a("6fae");
        a.n(n).a;
    },
    "6fae": function(t, e, a) {},
    "90f5": function(t, e, a) {
        a.r(e);
        var n, i = a("bd0e"), c = a.n(i);
        for (n in i) "default" !== n && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(n);
        e.default = c.a;
    },
    bd0e: function(t, e, a) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = getApp(), t = {
                data: function() {
                    return {
                        module_name: i.globalData.module_name,
                        setting: n.getStorageSync("setting"),
                        userinfo: n.getStorageSync("userinfo"),
                        mainHeight: 500,
                        ocityData: [],
                        cityData: [],
                        AZ: [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z" ],
                        currentCity: "",
                        currentCityid: 0,
                        hotCities: [ {
                            cityId: 1,
                            pinYin: "S",
                            regionName: "上海"
                        }, {
                            cityId: 2,
                            pinYin: "B",
                            regionName: "北京"
                        }, {
                            cityId: 3,
                            pinYin: "H",
                            regionName: "杭州"
                        }, {
                            cityId: 4,
                            pinYin: "G",
                            regionName: "广州"
                        }, {
                            cityId: 5,
                            pinYin: "N",
                            regionName: "南京"
                        }, {
                            cityId: 6,
                            pinYin: "S",
                            regionName: "苏州"
                        }, {
                            cityId: 7,
                            pinYin: "S",
                            regionName: "深圳"
                        }, {
                            cityId: 8,
                            pinYin: "C",
                            regionName: "成都"
                        }, {
                            cityId: 9,
                            pinYin: "C",
                            regionName: "重庆"
                        }, {
                            cityId: 10,
                            pinYin: "T",
                            regionName: "天津"
                        } ],
                        showCityId: "",
                        searchTimer: null,
                        searchIndex: -1,
                        lon: "",
                        lat: ""
                    };
                },
                onLoad: function(t) {
                    this.module_name = i.globalData.module_name;
                    n.setStorageSync("invite_uid", t.uid), this.loadcityData(), this.setting = n.getStorageSync("setting"), 
                    this.userinfo = n.getStorageSync("userinfo");
                },
                onReady: function() {
                    var a = this;
                    setTimeout(function() {
                        n.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(e) {
                            n.createSelectorQuery().select("#hSearch").fields({
                                size: !0
                            }, function(t) {
                                a.mainHeight = e.height - t.height;
                            }).exec();
                        }).exec();
                    }, 1e3);
                },
                methods: {
                    loadcityData: function() {
                        var e = this, t = i.globalData.util.url("entry/wxapp/api", {
                            m: i.globalData.module_name,
                            o: "moviecity"
                        });
                        n.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {},
                            success: function(t) {
                                t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.ocityData = t.data.ocityData, e.cityData = t.data.cityData, e.getLocation();
                            }
                        });
                    },
                    getLocation: function() {
                        var a = this;
                        n.getLocation({
                            type: "wgs84",
                            success: function(t) {
                                var e = i.globalData.util.url("entry/wxapp/api", {
                                    m: i.globalData.module_name,
                                    o: "movieaddress"
                                });
                                n.setStorageSync("lon", t.longitude), n.setStorageSync("lat", t.latitude), n.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        lon: t.longitude,
                                        lat: t.latitude
                                    },
                                    success: function(t) {
                                        t = i.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                        a.currentCity = t.data.city;
                                        for (var e = 0; e < a.ocityData.length; e++) if (a.ocityData[e].regionName == a.currentCity) {
                                            a.currentCityid = a.ocityData[e].cityId;
                                            break;
                                        }
                                    }
                                });
                            },
                            fail: function(t) {
                                a.lat = 0, a.lon = 0;
                            }
                        });
                    },
                    again_getLocation: function() {
                        var e = this;
                        n.getSetting({
                            success: function(t) {
                                null != t.authSetting["scope.userLocation"] && 1 != t.authSetting["scope.userLocation"] ? n.showModal({
                                    title: "是否授权当前位置",
                                    content: "需要获取您的地理位置，请确认授权，否则无法获取您所需数据",
                                    success: function(t) {
                                        t.cancel ? n.showToast({
                                            title: "授权失败",
                                            icon: "success",
                                            duration: 1e3
                                        }) : t.confirm && n.openSetting({
                                            success: function(t) {
                                                1 == t.authSetting["scope.userLocation"] ? (n.showToast({
                                                    title: "授权成功",
                                                    icon: "success",
                                                    duration: 1e3
                                                }), e.getLocation(e)) : n.showToast({
                                                    title: "授权失败",
                                                    icon: "success",
                                                    duration: 1e3
                                                });
                                            }
                                        });
                                    }
                                }) : (t.authSetting["scope.userLocation"], e.getLocation(e));
                            }
                        });
                    },
                    chooseCity: function(t) {
                        var e = t.currentTarget.dataset.cityname, t = t.currentTarget.dataset.citycode;
                        n.setStorageSync("cityname", e), n.setStorageSync("cityid", t), this.currentCity = e, 
                        n.navigateBack({
                            delta: 1
                        });
                    },
                    search: function(t) {
                        var e = this;
                        "" != (t = t.toLowerCase()) ? (null != this.searchTimer && clearTimeout(this.searchTimer), 
                        this.searchTimer = setTimeout(function() {
                            e.searchBase(t);
                        }, 500)) : this.showCityId = "pageTop";
                    },
                    searchBase: function(t) {
                        for (var e in this.searchIndex = -1, this.cityData) {
                            for (var a = 0; a < this.cityData[e].length; a++) if (0 == this.cityData[e][a].regionName.indexOf(t) || 0 == this.cityData[e][a].pinYin.indexOf(t)) {
                                this.searchIndex = this.cityData[e][a].cityId;
                                break;
                            }
                            if (-1 != this.searchIndex) break;
                        }
                        -1 != this.searchIndex && (this.showCityId = "grace-city-list-" + this.searchIndex);
                    },
                    changAZ: function(t) {
                        t = t.currentTarget.dataset.char;
                        this.showCityId = "grace-city-AZ-" + t;
                    }
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
                    }
                }
            };
            e.default = t;
        }).call(this, a("543d").default);
    },
    d6df: function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    d76e: function(t, e, a) {
        a.r(e);
        var n, i = a("d6df"), c = a("90f5");
        for (n in c) "default" !== n && function(t) {
            a.d(e, t, function() {
                return c[t];
            });
        }(n);
        a("2cdb");
        var o = a("f0c5"), i = Object(o.a)(c.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = i.exports;
    },
    e866: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("0cda"), e(a("66fd")), t(e(a("d76e")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "e866", "common/runtime", "common/vendor" ] ] ]);