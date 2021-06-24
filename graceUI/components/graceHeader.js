(global.webpackJsonp = global.webpackJsonp || []).push([ [ "graceUI/components/graceHeader" ], {
    "266b": function(e, t, n) {
        n.r(t);
        var a, o = n("29aa"), c = n("c5c4");
        for (a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        n("c46d");
        var u = n("f0c5"), o = Object(u.a)(c.default, o.b, o.c, !1, null, "41bf5b09", null, !1, o.a, void 0);
        t.default = o.exports;
    },
    "29aa": function(e, t, n) {
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
    "5be7": function(e, t, n) {},
    c46d: function(e, t, n) {
        var a = n("5be7");
        n.n(a).a;
    },
    c5c4: function(e, t, n) {
        n.r(t);
        var a, o = n("ebd3"), c = n.n(o);
        for (a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = c.a;
    },
    ebd3: function(e, n, t) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                props: {
                    background: {
                        type: String,
                        default: "#F8F8F8"
                    },
                    height: {
                        type: Number,
                        default: 90
                    },
                    haveStatusBar: {
                        type: Boolean,
                        default: !0
                    },
                    zIndex: {
                        type: Number,
                        default: 99
                    },
                    isSeize: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        top: 0,
                        viewHeight: 0,
                        BoundingWidth: "0px"
                    };
                },
                created: function() {
                    var e = t.getSystemInfoSync();
                    this.top = e.statusBarHeight, this.viewHeight = this.top + t.upx2px(this.height), 
                    e = t.getMenuButtonBoundingClientRect(), this.BoundingWidth = e.width + 20 + "px";
                }
            };
            n.default = e;
        }).call(this, t("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "graceUI/components/graceHeader-create-component", {
    "graceUI/components/graceHeader-create-component": function(e, t, n) {
        n("543d").createComponent(n("266b"));
    }
}, [ [ "graceUI/components/graceHeader-create-component" ] ] ]);