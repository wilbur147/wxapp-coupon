require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/userA/info" ], {
    "1f96": function(e, t, n) {
        n.r(t);
        var a, o = n("ac64"), i = n.n(o);
        for (a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = i.a;
    },
    "554d": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("0cda"), t(n("66fd")), e(t(n("c771")).default);
        }).call(this, n("543d").createPage);
    },
    "74c8": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    ac64: function(e, n, i) {
        (function(a) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = getApp(), e = (i("01b2"), {
                data: function() {
                    return {
                        module_name: o.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: a.getStorageSync("userinfo"),
                        setting: a.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        graceAddressPickerShow: !1,
                        area: ""
                    };
                },
                props: {},
                onLoad: function(e) {
                    var n = this;
                    a.setStorageSync("invite_uid", e.uid), this.module_name = o.globalData.module_name, 
                    this.user_info(), this.setting = a.getStorageSync("setting"), null != a.getStorageSync("userinfo") && a.getStorageSync("userinfo") || a.login({
                        success: function(e) {
                            n.wxCode = e.code;
                            e = e.code;
                            o.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: e
                                },
                                cachetime: 0,
                                success: function(e) {
                                    var n;
                                    e.data.errno || (a.setStorageSync("openid", e.data.data.openid), a.setStorageSync("unionid", e.data.data.userinfo.unionid), 
                                    n = o.globalData.util.url("entry/wxapp/api", {
                                        m: o.globalData.module_name,
                                        o: "userinfo"
                                    }), a.request({
                                        url: n,
                                        method: "GET",
                                        data: {
                                            openid: e.data.data.openid,
                                            invite_uid: a.getStorageSync("invite_uid")
                                        },
                                        success: function(e) {
                                            e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                            e.openid && (a.setStorageSync("userinfo", e.userinfo), a.setStorageSync("pid_use_time", e.pid_time), 
                                            a.getStorageSync("pid_time") != a.getStorageSync("pid_use_time") && (a.setStorageSync("elmwm_url", ""), 
                                            a.setStorageSync("elmsc_url", ""), a.setStorageSync("elmwmposter", ""), a.setStorageSync("elmscposter", ""), 
                                            a.setStorageSync("pid_time", a.getStorageSync("pid_use_time"))), t.systemtype = a.getStorageSync("systemtype"), 
                                            t.userinfo = e.userinfo);
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                onPullDownRefresh: function() {
                    this.user_info();
                },
                methods: {
                    openPicker: function() {
                        this.graceAddressPickerShow = !0;
                    },
                    pickerConfirm: function(e) {
                        this.area = e.names[0] + " " + e.names[1] + " " + e.names[2], this.closePicker();
                    },
                    closePicker: function() {
                        this.graceAddressPickerShow = !1;
                    },
                    formSubmit: function(e) {
                        var t = e.detail.value, e = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "edit_userinfo"
                        });
                        a.request({
                            url: e,
                            method: "GET",
                            data: {
                                openid: a.getStorageSync("openid"),
                                realname: t.realname,
                                mobile: t.mobile,
                                alipayno: t.alipayno
                            },
                            success: function(e) {
                                a.showToast({
                                    title: "修改成功",
                                    icon: "none"
                                }), a.navigateTo({
                                    url: "../../../pages/user/index"
                                });
                            }
                        });
                    },
                    user_info: function() {
                        var t = this, e = o.globalData.util.url("entry/wxapp/api", {
                            m: o.globalData.module_name,
                            o: "userinfo"
                        });
                        a.request({
                            url: e,
                            method: "GET",
                            data: {
                                openid: a.getStorageSync("openid"),
                                invite_uid: a.getStorageSync("invite_uid")
                            },
                            success: function(e) {
                                e = o.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                e.openid && (a.setStorageSync("userinfo", e.userinfo), t.userinfo = e.userinfo, 
                                a.stopPullDownRefresh());
                            }
                        });
                    }
                },
                components: {
                    gracePage: function() {
                        i.e("graceUI/components/gracePage").then(function() {
                            return resolve(i("1021"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceAddressPicker: function() {
                        Promise.all([ i.e("common/vendor"), i.e("graceUI/components/graceAddressPicker") ]).then(function() {
                            return resolve(i("527e"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    graceSelectImgAndUpload: function() {
                        Promise.all([ i.e("common/vendor"), i.e("graceUI/components/graceSelectImgAndUpload") ]).then(function() {
                            return resolve(i("784c"));
                        }.bind(null, i)).catch(i.oe);
                    }
                }
            });
            n.default = e;
        }).call(this, i("543d").default);
    },
    c771: function(e, t, n) {
        n.r(t);
        var a, o = n("74c8"), i = n("1f96");
        for (a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        var r = n("f0c5"), o = Object(r.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = o.exports;
    }
}, [ [ "554d", "common/runtime", "common/vendor", "pagesA/common/vendor" ] ] ]);