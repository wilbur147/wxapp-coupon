(global.webpackJsonp = global.webpackJsonp || []).push([ [ "graceUI/components/graceLink" ], {
    "06c6": function(n, e, t) {
        var o = t("2772");
        t.n(o).a;
    },
    "10cf": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            props: {
                url: {
                    type: String,
                    default: ""
                },
                title: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: "#3688FF"
                },
                fontSize: {
                    type: String,
                    default: "28rpx"
                },
                lineHeight: {
                    type: String,
                    default: "50rpx"
                }
            },
            methods: {
                openUrlForApp: function(n) {
                    n = n.currentTarget.dataset.url;
                    plus.runtime.openURL(n);
                }
            }
        };
        e.default = o;
    },
    2772: function(n, e, t) {},
    "4a9b": function(n, e, t) {
        t.r(e);
        var o, a = t("f09f"), c = t("b3a2");
        for (o in c) "default" !== o && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(o);
        t("06c6");
        var r = t("f0c5"), a = Object(r.a)(c.default, a.b, a.c, !1, null, "0ae56601", null, !1, a.a, void 0);
        e.default = a.exports;
    },
    b3a2: function(n, e, t) {
        t.r(e);
        var o, a = t("10cf"), c = t.n(a);
        for (o in a) "default" !== o && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(o);
        e.default = c.a;
    },
    f09f: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "graceUI/components/graceLink-create-component", {
    "graceUI/components/graceLink-create-component": function(n, e, t) {
        t("543d").createComponent(t("4a9b"));
    }
}, [ [ "graceUI/components/graceLink-create-component" ] ] ]);