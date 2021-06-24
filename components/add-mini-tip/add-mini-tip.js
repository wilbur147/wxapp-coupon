(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/add-mini-tip/add-mini-tip" ], {
    "00a6": function(n, i, t) {
        t.r(i);
        var e, o = t("0b40"), a = t("11de");
        for (e in a) "default" !== e && function(n) {
            t.d(i, n, function() {
                return a[n];
            });
        }(e);
        t("ed69");
        var r = t("f0c5"), o = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        i.default = o.exports;
    },
    "0b40": function(n, i, t) {
        t.d(i, "b", function() {
            return e;
        }), t.d(i, "c", function() {
            return o;
        }), t.d(i, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "11de": function(n, i, t) {
        t.r(i);
        var e, o = t("f9c6"), a = t.n(o);
        for (e in o) "default" !== e && function(n) {
            t.d(i, n, function() {
                return o[n];
            });
        }(e);
        i.default = a.a;
    },
    ed69: function(n, i, t) {
        var e = t("f103");
        t.n(e).a;
    },
    f103: function(n, i, t) {},
    f9c6: function(n, t, e) {
        (function(i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, e("b5b2");
            var n = getApp(), n = {
                data: function() {
                    return {
                        addMiniProgramTipsTimer: null,
                        showAddMiniProgramTips: !1
                    };
                },
                components: {},
                props: {
                    statusBarHeight: {
                        type: Number,
                        default: n.globalData.statusBar
                    }
                },
                beforeMount: function() {
                    var n = this;
                    i.getStorageSync("whetherShowAddMiniProgramTips") || (n.addMiniProgramTipsTimer = setTimeout(function() {
                        n.showAddMiniProgramTips = !0, i.setStorageSync("whetherShowAddMiniProgramTips", !0), 
                        clearTimeout(n.addMiniProgramTipsTimer);
                    }, 1e3));
                },
                methods: {
                    closeAddMiniProgramTips: function() {
                        clearTimeout(this.addMiniProgramTipsTimer), this.showAddMiniProgramTips = !1;
                    }
                }
            };
            t.default = n;
        }).call(this, e("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/add-mini-tip/add-mini-tip-create-component", {
    "components/add-mini-tip/add-mini-tip-create-component": function(n, i, t) {
        t("543d").createComponent(t("00a6"));
    }
}, [ [ "components/add-mini-tip/add-mini-tip-create-component" ] ] ]);