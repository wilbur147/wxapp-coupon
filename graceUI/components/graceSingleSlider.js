(global.webpackJsonp = global.webpackJsonp || []).push([ [ "graceUI/components/graceSingleSlider" ], {
    "0093": function(t, e, n) {
        n.r(e);
        var i, a = n("2e2d"), r = n("a500");
        for (i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("1ea5");
        var c = n("f0c5"), a = Object(c.a)(r.default, a.b, a.c, !1, null, "7a91eae0", null, !1, a.a, void 0);
        e.default = a.exports;
    },
    "1ea5": function(t, e, n) {
        var i = n("d0f7");
        n.n(i).a;
    },
    "2e2d": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    a500: function(t, e, n) {
        n.r(e);
        var i, a = n("f75d"), r = n.n(a);
        for (i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = r.a;
    },
    d0f7: function(t, e, n) {},
    f75d: function(t, e, n) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = {
                props: {
                    barHeight: {
                        type: Number,
                        default: 32
                    },
                    barWidth: {
                        type: Number,
                        default: 168
                    },
                    barColor: {
                        type: String,
                        default: "#FFFFFF"
                    },
                    barBgColor: {
                        type: String,
                        default: "linear-gradient(to right, #3688FF,#3688FF)"
                    },
                    bglineSize: {
                        type: Number,
                        default: 2
                    },
                    bglineColor: {
                        type: String,
                        default: "rgba(54,136,255,0.5)"
                    },
                    bglineAColor: {
                        type: String,
                        default: "#3688FF"
                    },
                    barText: {
                        type: String,
                        default: ""
                    },
                    barTextSize: {
                        type: String,
                        default: "20rpx"
                    },
                    borderRadius: {
                        type: String,
                        default: "32rpx"
                    },
                    canSlide: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        left: 0,
                        startLeft: 0,
                        width: 0,
                        barWidthPX: 30
                    };
                },
                created: function() {
                    this.init();
                },
                methods: {
                    init: function() {
                        var e = this;
                        n.createSelectorQuery().in(this).select("#gracesgslider").fields({
                            size: !0,
                            rect: !0
                        }, function(t) {
                            null != t ? (e.startLeft = t.left, e.width = t.width, e.barWidthPX = n.upx2px(e.barWidth)) : setTimeout(function() {
                                e.init();
                            }, 100);
                        }).exec();
                    },
                    touchstart: function(t) {
                        this.canSlide && (t = t.touches[0] || t.changedTouches[0], this.changeBar(t.pageX));
                    },
                    touchmove: function(t) {
                        this.canSlide && (t = t.touches[0] || t.changedTouches[0], this.changeBar(t.pageX));
                    },
                    touchend: function(t) {
                        this.canSlide && (t = t.touches[0] || t.changedTouches[0], this.changeBar(t.pageX, !0));
                    },
                    changeBar: function(t) {
                        t -= this.startLeft;
                        t <= 0 ? (this.left = 0, this.$emit("change", 0)) : t + this.barWidthPX > this.width ? (t = this.width - this.barWidthPX, 
                        this.left = t, this.$emit("change", 100)) : (this.left = t, t = this.left / (this.width - this.barWidthPX), 
                        this.$emit("change", Math.round(100 * t)));
                    },
                    setProgress: function(t) {
                        var e = this;
                        this.width < 1 ? setTimeout(function() {
                            e.setProgress(t);
                        }) : (t < 0 && (t = 0), 100 < t && (t = 100), this.left = t / 100 * (this.width - this.barWidthPX));
                    }
                }
            };
            e.default = t;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "graceUI/components/graceSingleSlider-create-component", {
    "graceUI/components/graceSingleSlider-create-component": function(t, e, n) {
        n("543d").createComponent(n("0093"));
    }
}, [ [ "graceUI/components/graceSingleSlider-create-component" ] ] ]);