require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/movieA/webview" ], {
    "1b54": function(n, o, e) {
        (function(e) {
            function n(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n;
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var t = (n(t = {
                data: function() {
                    return {
                        url: "",
                        title: "",
                        op: "",
                        home_url: "",
                        userinfo: []
                    };
                },
                components: {},
                props: {},
                onShow: function() {
                    this.userinfo = e.getStorageSync("userinfo"), e.setStorageSync("tabbar", 0);
                },
                onLoad: function(n) {
                    this.op = n.op, n.op;
                    n = getCurrentPages(), n = n[n.length - 1], n = decodeURIComponent(n.options.return_url);
                    "undefined" !== n && (this.home_url = n, this.url = n);
                },
                onReady: function() {}
            }, "onShow", function() {}), n(t, "onHide", function() {}), n(t, "onUnload", function() {}), 
            n(t, "onPullDownRefresh", function() {}), n(t, "onReachBottom", function() {}), 
            n(t, "onShareAppMessage", function(n) {
                n = n.webViewUrl, n = "/pages/kefu/webview?return_url=" + encodeURIComponent(n);
                return {
                    title: e.getStorageSync("setting").sharetitle,
                    path: n,
                    success: function(n) {},
                    fail: function(n) {}
                };
            }), n(t, "methods", {}), t);
            o.default = t;
        }).call(this, e("543d").default);
    },
    "1e2e": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("0cda"), e(t("66fd")), n(e(t("8614")).default);
        }).call(this, t("543d").createPage);
    },
    "278b": function(n, e, t) {
        var o = t("6a0f");
        t.n(o).a;
    },
    4087: function(n, e, t) {
        t.r(e);
        var o, u = t("1b54"), i = t.n(u);
        for (o in u) "default" !== o && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(o);
        e.default = i.a;
    },
    "6a0f": function(n, e, t) {},
    8614: function(n, e, t) {
        t.r(e);
        var o, u = t("e64a"), i = t("4087");
        for (o in i) "default" !== o && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(o);
        t("278b");
        var r = t("f0c5"), u = Object(r.a)(i.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = u.exports;
    },
    e64a: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return u;
        }), t.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    }
}, [ [ "1e2e", "common/runtime", "common/vendor" ] ] ]);