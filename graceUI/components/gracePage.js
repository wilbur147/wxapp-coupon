(global.webpackJsonp = global.webpackJsonp || []).push([ [ "graceUI/components/gracePage" ], {
    1021: function(e, t, n) {
        n.r(t);
        var o, a = n("c885"), r = n("e420");
        for (o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("e97e");
        var u = n("f0c5"), a = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = a.exports;
    },
    af84: function(e, t, n) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                props: {
                    customHeader: {
                        type: Boolean,
                        default: !0
                    },
                    headerHeight: {
                        type: Number,
                        default: 44
                    },
                    headerIndex: {
                        type: Number,
                        default: 98
                    },
                    headerBG: {
                        type: String,
                        default: "none"
                    },
                    statusBarBG: {
                        type: String,
                        default: "none"
                    },
                    footerIndex: {
                        type: Number,
                        default: 98
                    },
                    footerBg: {
                        type: String,
                        default: ""
                    },
                    isSwitchPage: {
                        type: Boolean,
                        default: !1
                    },
                    rbWidth: {
                        type: Number,
                        default: 100
                    },
                    rbBottom: {
                        type: Number,
                        default: 100
                    },
                    rbRight: {
                        type: Number,
                        default: 20
                    },
                    rbIndex: {
                        type: Number,
                        default: 1
                    },
                    borderWidth: {
                        type: String,
                        default: "0"
                    },
                    borderColor: {
                        type: String,
                        default: "#D1D1D1"
                    },
                    loadingBG: {
                        type: String,
                        default: "rgba(255,255,255, 0.1)"
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    },
                    loadingPointBg: {
                        type: String,
                        default: "#3688FF"
                    },
                    bounding: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        statusBarHeight: 44,
                        iphoneXButtomHeight: 0,
                        BoundingWidth: "0px",
                        fixedTop: 0
                    };
                },
                created: function() {
                    try {
                        var e = n.getSystemInfoSync();
                        if (e.model = e.model.replace(" ", ""), e.model = e.model.toLowerCase(), -1 == e.model.indexOf("iphonex") && -1 == e.model.indexOf("iphone11") || (this.iphoneXButtomHeight = n.upx2px(50)), 
                        this.customHeader ? this.fixedTop = this.headerHeight + e.statusBarHeight : this.fixedTop = 0, 
                        !this.customHeader) return;
                        this.statusBarHeight = e.statusBarHeight;
                        var t = n.getMenuButtonBoundingClientRect();
                        this.BoundingWidth = t.width + e.windowWidth - t.right + 10 + "px";
                    } catch (e) {
                        return null;
                    }
                },
                methods: {
                    getHeaderHeight: function() {
                        return this.headerHeight + this.statusBarHeight;
                    },
                    stopfun: function() {}
                }
            };
            t.default = e;
        }).call(this, n("543d").default);
    },
    c885: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    cec6: function(e, t, n) {},
    e420: function(e, t, n) {
        n.r(t);
        var o, a = n("af84"), r = n.n(a);
        for (o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = r.a;
    },
    e97e: function(e, t, n) {
        var o = n("cec6");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "graceUI/components/gracePage-create-component", {
    "graceUI/components/gracePage-create-component": function(e, t, n) {
        n("543d").createComponent(n("1021"));
    }
}, [ [ "graceUI/components/gracePage-create-component" ] ] ]);