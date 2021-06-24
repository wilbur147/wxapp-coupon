(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/sj-movietab-bar/sj-movietab-bar" ], {
    "0c44": function(t, e, n) {
        n.r(e);
        var o, a = n("4941"), c = n.n(a);
        for (o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = c.a;
    },
    "2c4c": function(t, e, n) {
        var o = n("7d65");
        n.n(o).a;
    },
    4941: function(t, o, e) {
        (function(t) {
            var n;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var e = {
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
                        console.log(t), n.curKey = t, n.$emit("change", t);
                    },
                    getContentHeight: function() {
                        t.getSystemInfo({
                            success: function(e) {
                                t.createSelectorQuery().in(n).select(".cu-bar").boundingClientRect(function(t) {
                                    null != t ? (t = e.windowHeight - t.top, n.height = "height:" + (e.windowHeight - t) + "px", 
                                    n.$emit("fatherHeight", n.height)) : n.getContentHeight();
                                }).exec();
                            },
                            fail: function(t) {
                                n.getContentHeight();
                            }
                        });
                    }
                }
            };
            o.default = e;
        }).call(this, e("543d").default);
    },
    "58ff": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "7d65": function(t, e, n) {},
    d433: function(t, e, n) {
        n.r(e);
        var o, a = n("58ff"), c = n("0c44");
        for (o in c) "default" !== o && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(o);
        n("2c4c");
        var i = n("f0c5"), a = Object(i.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = a.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/sj-movietab-bar/sj-movietab-bar-create-component", {
    "components/sj-movietab-bar/sj-movietab-bar-create-component": function(t, e, n) {
        n("543d").createComponent(n("d433"));
    }
}, [ [ "components/sj-movietab-bar/sj-movietab-bar-create-component" ] ] ]);