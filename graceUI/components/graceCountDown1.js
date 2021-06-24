(global.webpackJsonp = global.webpackJsonp || []).push([ [ "graceUI/components/graceCountDown1" ], {
    "0130": function(t, e, n) {
        n.r(e);
        var r, i = n("6e9f"), o = n("1166");
        for (r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("8083");
        var u = n("f0c5"), i = Object(u.a)(o.default, i.b, i.c, !1, null, "3f2e7e6c", null, !1, i.a, void 0);
        e.default = i.exports;
    },
    1166: function(t, e, n) {
        n.r(e);
        var r, i = n("1c21"), o = n.n(i);
        for (r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    },
    "1c21": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            name: "graceCountDown",
            props: {
                bgrColor: {
                    type: String,
                    default: "#FFFFFF"
                },
                borderColor: {
                    type: String,
                    default: "#000000"
                },
                fontColor: {
                    type: String,
                    default: "#000000"
                },
                fontSize: {
                    type: String,
                    default: "22rpx"
                },
                splitorColor: {
                    type: String,
                    default: "#000000"
                },
                timer: {
                    type: String,
                    default: ""
                },
                width: {
                    type: String,
                    default: "40rpx"
                },
                splitorText: {
                    type: Array,
                    default: function() {
                        return [ ":", ":", ":", "" ];
                    }
                },
                show: {
                    type: Boolean,
                    default: !0
                },
                zeroShow: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    d: 0,
                    h: "",
                    i: "",
                    s: "",
                    leftTime: 0,
                    outTimer: null,
                    timerIn: "",
                    leftTimeNum: 0
                };
            },
            created: function() {
                this.timerIn = this.timer, this.runbase();
            },
            methods: {
                runbase: function() {
                    var t = this, e = this.timerIn.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);
                    if (null == e) return this.outTimer = setTimeout(function() {
                        t.runbase();
                    }, 1e3), !1;
                    var n = parseInt(e[1]);
                    if (n < 1e3) return !1;
                    var r = parseInt(e[2]), i = parseInt(e[3]), o = parseInt(e[4]);
                    if (o < 0 || 24 < o) return !1;
                    var u = parseInt(e[5]);
                    if (u < 0 || 60 < u) return !1;
                    e = parseInt(e[6]);
                    if (e < 0 || 60 < e) return !1;
                    e = new Date(n, r - 1, i, o, u, e);
                    this.leftTime = e, clearTimeout(this.outTimer), this.countDown();
                },
                countDown: function() {
                    var t, e, n, r = this, i = this.leftTime - new Date();
                    0 < (this.leftTimeNum = i) ? (t = parseInt(i / 864e5), (e = parseInt(i % 864e5 / 36e5)) < 10 && (e = "0" + e), 
                    (n = parseInt(i % 36e5 / 6e4)) < 10 && (n = "0" + n), (i = parseInt(i % 6e4 / 1e3)) < 10 && (i = "0" + i), 
                    this.h = e, this.i = n, this.s = i, this.d = t, this.outTimer = setTimeout(function() {
                        r.countDown();
                    }, 1e3)) : (clearTimeout(this.outTimer), this.h = "00", this.i = "00", this.s = "00", 
                    this.d = 0, this.$emit("endDo"));
                },
                reSetTimer: function(t) {
                    clearTimeout(this.outTimer), this.timerIn = t, this.runbase();
                },
                getTimeRemaining: function() {
                    return this.leftTimeNum < 0 ? 0 : parseInt(this.leftTimeNum / 1e3);
                }
            }
        };
        e.default = r;
    },
    "6e9f": function(t, e, n) {
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    8083: function(t, e, n) {
        var r = n("fe34");
        n.n(r).a;
    },
    fe34: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "graceUI/components/graceCountDown1-create-component", {
    "graceUI/components/graceCountDown1-create-component": function(t, e, n) {
        n("543d").createComponent(n("0130"));
    }
}, [ [ "graceUI/components/graceCountDown1-create-component" ] ] ]);