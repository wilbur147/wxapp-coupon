(global.webpackJsonp = global.webpackJsonp || []).push([ [ "graceUI/components/graceSwiper" ], {
    "0649": function(t, e, i) {
        i.r(e);
        var n, a = i("5768"), r = i.n(a);
        for (n in a) "default" !== n && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(n);
        e.default = r.a;
    },
    "0a4a": function(t, e, i) {
        var n = i("60ab");
        i.n(n).a;
    },
    "13cd": function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return a;
        }), i.d(e, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    5768: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            props: {
                width: {
                    type: Number,
                    default: 750
                },
                height: {
                    type: Number,
                    default: 300
                },
                swiperItems: {
                    type: Array,
                    default: function() {
                        return new Array();
                    }
                },
                borderRadius: {
                    type: String,
                    default: "10rpx"
                },
                indicatorBarHeight: {
                    type: Number,
                    default: 68
                },
                indicatorBarBgColor: {
                    type: String,
                    default: "rgba(0,0,0,0)"
                },
                indicatorWidth: {
                    type: Number,
                    default: 18
                },
                indicatorActiveWidth: {
                    type: Number,
                    default: 18
                },
                indicatorHeight: {
                    type: Number,
                    default: 18
                },
                indicatorRadius: {
                    type: Number,
                    default: 18
                },
                indicatorColor: {
                    type: String,
                    default: "rgba(255, 255, 255, 0.6)"
                },
                indicatorActiveColor: {
                    type: String,
                    default: "#3688FF"
                },
                indicatorType: {
                    type: String,
                    default: "dot"
                },
                indicatorPosition: {
                    type: String,
                    default: "absolute"
                },
                indicatorDirection: {
                    type: String,
                    default: "center"
                },
                spacing: {
                    type: Number,
                    default: 50
                },
                padding: {
                    type: Number,
                    default: 26
                },
                interval: {
                    type: Number,
                    default: 5e3
                },
                autoplay: {
                    type: Boolean,
                    default: !0
                },
                currentIndex: {
                    type: Number,
                    default: 0
                },
                opacity: {
                    type: Number,
                    default: .66
                },
                titleColor: {
                    type: String,
                    default: "#FFFFFF"
                },
                titleSize: {
                    type: String,
                    default: "28rpx"
                }
            },
            data: function() {
                return {
                    current: 0,
                    isReady: !1,
                    widthIn: 750,
                    heightIn: 300,
                    widthInSamll: 700,
                    heightInSmall: 280,
                    paddingY: 0
                };
            },
            watch: {
                currentIndex: function(t) {
                    this.current = t;
                }
            },
            created: function() {
                this.current = this.currentIndex, this.init();
            },
            methods: {
                init: function() {
                    this.widthIn = this.width - 2 * this.spacing, this.heightIn = this.height / this.width * this.widthIn, 
                    this.paddingY = this.padding * this.height / this.width, this.widthInSamll = this.widthIn - 2 * this.padding, 
                    this.heightInSmall = this.heightIn - 2 * this.paddingY;
                },
                swiperchange: function(t) {
                    t = t.detail.current;
                    this.current = t, this.$emit("swiperchange", t);
                },
                taped: function(t) {
                    this.$emit("taped", t.currentTarget.dataset.index);
                }
            }
        };
        e.default = n;
    },
    "60ab": function(t, e, i) {},
    "9fc3": function(t, e, i) {
        i.r(e);
        var n, a = i("13cd"), r = i("0649");
        for (n in r) "default" !== n && function(t) {
            i.d(e, t, function() {
                return r[t];
            });
        }(n);
        i("0a4a");
        var d = i("f0c5"), a = Object(d.a)(r.default, a.b, a.c, !1, null, "ec366746", null, !1, a.a, void 0);
        e.default = a.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "graceUI/components/graceSwiper-create-component", {
    "graceUI/components/graceSwiper-create-component": function(t, e, i) {
        i("543d").createComponent(i("9fc3"));
    }
}, [ [ "graceUI/components/graceSwiper-create-component" ] ] ]);