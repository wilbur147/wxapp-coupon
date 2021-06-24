(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/sj-tab-bar/sj-tab-bar" ], {
    "1ba9": function(t, e, n) {
        n.r(e);
        var a, o = n("c4b4"), c = n("2a8d");
        for (a in c) "default" !== a && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(a);
        n("50e7");
        var i = n("f0c5"), o = Object(i.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = o.exports;
    },
    "2a8d": function(t, e, n) {
        n.r(e);
        var a, o = n("9778"), c = n.n(o);
        for (a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = c.a;
    },
    "50e7": function(t, e, n) {
        var a = n("bb0f");
        n.n(a).a;
    },
    9778: function(t, a, e) {
        (function(t) {
            var n;
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var app = getApp(), e = {
                data: function() {
                    return {
                        curKey: ""
                    };
                },
                props: {
                    tabBar: {
                        type: Object
                    },
                    mode: {
                        default: "1",
                        type: String
                    },
                    ckey: {
                        default: 0,
                        type: Number
                    }
                },
                watch: {
                    tabBar: {
                        handler: function(t, e) {},
                        immediate: !0,
                        deep: !0
                    }
                },
                created: function() {
                    (n = this).getContentHeight();
                },
                methods: {
                    NavChange: function(t) {
                        console.log(t), n.curKey = t, n.$emit("change", t, app);
                    },
                    getContentHeight: function() {
                        t.getSystemInfo({
                            success: function(e) {
								let ll = 0;
                                t.createSelectorQuery().in(n).select(".cu-bar").boundingClientRect(function(t) {
                                    null != t ? (ll = t.height, t = e.windowHeight - t.top, n.height = "height:" + (e.windowHeight - t) + "px", 
                                    n.$emit("fatherHeight", n.height, ll)) : n.getContentHeight();
                                }).exec();
                            },
                            fail: function(t) {
                                n.getContentHeight();
                            }
                        });
                    }
                }
            };
            a.default = e;
        }).call(this, e("543d").default);
    },
    bb0f: function(t, e, n) {},
    c4b4: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/sj-tab-bar/sj-tab-bar-create-component", {
    "components/sj-tab-bar/sj-tab-bar-create-component": function(t, e, n) {
        n("543d").createComponent(n("1ba9"));
    }
}, [ [ "components/sj-tab-bar/sj-tab-bar-create-component" ] ] ]);