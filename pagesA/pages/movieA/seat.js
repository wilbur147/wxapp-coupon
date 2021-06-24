require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/pages/movieA/seat" ], {
    1680: function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "2f54": function(t, e, a) {},
    "8ede": function(t, e, a) {
        var o = a("2f54");
        a.n(o).a;
    },
    "91ff": function(t, e, a) {
        a.r(e);
        var o, i = a("a40b"), n = a.n(i);
        for (o in i) "default" !== o && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = n.a;
    },
    a40b: function(t, e, a) {
        (function(r) {
            function u(t, e) {
                var a;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return s(t, e);
                            var a = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? s(t, e) : void 0;
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                        a && (t = a);
                        var o = 0, e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return o >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[o++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: e
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, n = !0, r = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]();
                    },
                    n: function() {
                        var t = a.next();
                        return n = t.done, t;
                    },
                    e: function(t) {
                        r = !0, i = t;
                    },
                    f: function() {
                        try {
                            n || null == a.return || a.return();
                        } finally {
                            if (r) throw i;
                        }
                    }
                };
            }
            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, o = new Array(e); a < e; a++) o[a] = t[a];
                return o;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = getApp(), t = {
                data: function() {
                    return {
                        module_name: o.globalData.module_name,
                        showAlert_login: !1,
                        userinfo: r.getStorageSync("userinfo"),
                        setting: r.getStorageSync("setting"),
                        wxCode: "",
                        systemtype: "",
                        moviedetail: r.getStorageSync("moviedetail"),
                        cinemadetail: r.getStorageSync("cinemadetail"),
                        showdetail: r.getStorageSync("showdetail"),
                        seatData: [],
                        scaleMin: 1,
                        boxWidth: 400,
                        space: " ",
                        seatArray: [],
                        seatRow: 0,
                        seatCol: 0,
                        seatSize: 0,
                        SelectNum: 0,
                        moveX: 0,
                        scale: 1,
                        minRow: 0,
                        minCol: 0,
                        showTis: !0,
                        seatList: [],
                        mArr: [],
                        optArr: [],
                        isWXAPP: !1,
                        is_sub: 0
                    };
                },
                computed: {
                    aPrice: function() {
                        return Math.round(this.SelectNum * r.getStorageSync("showdetail").price * 100) / 100;
                    },
                    yPrice: function() {
                        return Math.round(this.SelectNum * r.getStorageSync("showdetail").netPrice * 100) / 100;
                    },
                    rpxNum: function() {
                        return this.boxWidth / 750;
                    },
                    pxNum: function() {
                        return 750 / this.boxWidth;
                    }
                },
                onLoad: function(t) {
                    var e = this, a = this;
                    this.module_name = o.globalData.module_name;
                    a.moviedetail = r.getStorageSync("moviedetail"), a.cinemadetail = r.getStorageSync("cinemadetail"), 
                    a.showdetail = r.getStorageSync("showdetail"), a.showid = t.showid, r.setStorageSync("invite_uid", t.uid), 
                    r.getSystemInfo({
                        success: function(t) {
                            a.boxWidth = t.screenWidth;
                        }
                    });
                    t = o.globalData.util.url("entry/wxapp/api", {
                        m: o.globalData.module_name,
                        o: "seat"
                    });
                    r.request({
                        url: t,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            openid: r.getStorageSync("openid"),
                            showid: a.showid
                        },
                        success: function(t) {
                            t = o.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                            console.log(t), a.seatData = t.data.seatData.seats, e.initData();
                        }
                    }), r.setNavigationBarTitle({
                        title: a.cinemadetail.cinemaName
                    });
                },
                methods: {
                    openOrderPage: function() {
                        var t, e, a, o, i, n;
                        this.SelectNum <= 0 ? r.showToast({
                            title: "请选座",
                            icon: "none"
                        }) : (e = r.getStorageSync("cinemadetail"), a = (t = r.getStorageSync("showdetail")).hallName, 
                        n = this.optArr, o = [], n.forEach(function(t) {
                            o.push(t.seatNo);
                        }), i = o.join(","), n = {
                            filmId: t.filmId,
                            showId: t.showId,
                            filmName: t.filmName,
                            filmPic: this.moviedetail.pic,
                            time: t.showDate + " " + t.start_time + " " + t.showVersionType,
                            cinemaName: e.cinemaName,
                            cinemaId: e.cinemaId,
                            hallName: a,
                            seat: i,
                            showTime: t.showTime,
                            stopSellTime: t.stopSellTime,
                            duration: t.duration,
                            hallName_full: t.hallName,
                            movieTheaterName: e.cinemaName,
                            ticketNum: n.length,
                            selectedOriginPrice: this.yPrice,
                            selectedRealPrice: this.aPrice
                        }, r.setStorageSync("order_info", n), console.log(n), r.redirectTo({
                            url: "order"
                        }));
                    },
                    initData: function() {
                        var t = this.seatData, e = 0, a = 0, o = parseInt(t[0].rowNo), i = parseInt(t[0].columnNo), n = u(t);
                        try {
                            for (n.s(); !(r = n.n()).done; ) var r = r.value, i = parseInt(r.rowNo) < i ? parseInt(r.rowNo) : i, o = parseInt(r.columnNo) < o ? parseInt(r.columnNo) : o, e = parseInt(r.rowNo) > e ? parseInt(r.rowNo) : e, a = parseInt(r.columnNo) > a ? parseInt(r.columnNo) : a;
                        } catch (t) {
                            n.e(t);
                        } finally {
                            n.f();
                        }
                        this.seatList = t, this.seatRow = e - i + 1, this.seatCol = a - o + 3, this.minRow = i, 
                        this.minCol = o - 1, this.initSeatArray();
                    },
                    initSeatArray: function() {
                        var t = this, e = Array(this.seatRow).fill(0).map(function() {
                            return Array(t.seatCol).fill({
                                seatNo: "",
                                seatId: "",
                                status: ""
                            });
                        });
                        this.seatArray = e, this.seatSize = 0 < this.boxWidth ? parseInt(parseInt(this.boxWidth, 10) / (this.seatCol + 1), 10) : parseInt(parseInt(414, 10) / (this.seatCol + 1), 10), 
                        this.initNonSeatPlace();
                    },
                    initNonSeatPlace: function() {
                        var t, e = this.seatList.slice(), a = this.seatArray.slice();
                        for (t in e) {
                            var o = 2;
                            "N" === e[t].status ? o = 0 : -1 === e[t].status && (o = -1);
                            var i = 0;
                            1 === e[t].lovestatus ? i = 1 : 2 === e[t].lovestatus && (i = 2), a[parseInt(e[t].rowNo) - this.minRow][parseInt(e[t].columnNo) - this.minCol] = {
                                type: o,
                                lovestatus: i,
                                SeatCode: e[t].seatId,
                                seatNo: e[t].seatNo,
                                RowNum: e[t].seatNo.replace("座", "").split("排")[0],
                                ColumnNum: e[t].seatNo.replace("座", "").split("排")[1]
                            };
                        }
                        this.seatArray = a.slice();
                        var n, r = [];
                        for (n in a) {
                            var s = "", l = u(a[n]);
                            try {
                                for (l.s(); !(c = l.n()).done; ) {
                                    var c = c.value;
                                    c.SeatCode && (s = c.RowNum);
                                }
                            } catch (t) {
                                l.e(t);
                            } finally {
                                l.f();
                            }
                            s ? r.push(s) : r.push("");
                        }
                        this.mArr = r;
                    },
                    onScale: function(t) {
                        this.showTis = !1;
                        var e = .5 * this.boxWidth, a = 1 - t.detail.scale;
                        this.moveX = e * a, this.scale = t.detail.scale, (0 < a || 0 == a) && (this.showTis = !0);
                    },
                    onMove: function(t) {
                        console.log("onmove"), this.showTis = !1, this.moveX = t.detail.x, console.log(t.detail.x);
                    },
                    resetSeat: function() {
                        this.SelectNum = 0, this.optArr = [];
                        for (var t = this.seatArray.slice(), e = 0; e < this.seatRow; e++) for (var a = 0; a < this.seatCol; a++) 1 === t[e][a].type && (t[e][a].type = 0);
                        this.seatArray = t;
                    },
                    buySeat: function() {
                        if (0 !== this.SelectNum) for (var t = [], e = 0; e < this.seatRow; e++) for (var a = 0; a < this.seatCol; a++) 1 === this.seatArray[e][a].type && t.push(this.seatArray[e][a].seatNo);
                    },
                    handleChooseSeat: function(t, e) {
                        var a = this.seatArray[t][e].type, o = this.seatArray;
                        if (2 !== a && -1 !== a) {
                            if (1 === a) o[t][e].type = 0, this.SelectNum--, this.getOptArr(o[t][e], 0); else if (0 === a) {
                                if (4 <= this.optArr.length) return void r.showToast({
                                    title: "最多只能选择4个座位",
                                    icon: "none"
                                });
                                o[t][e].type = 1, this.SelectNum++, this.getOptArr(o[t][e], 1);
                            }
                            this.seatArray = o.slice();
                        }
                    },
                    getOptArr: function(e, t) {
                        var a, o = this.optArr;
                        1 === t ? o.push(e) : 0 === t && (a = [], o.forEach(function(t) {
                            t.SeatCode !== e.SeatCode && a.push(t);
                        }), o = a), this.optArr = o.slice();
                    },
                    smartChoose: function(t) {
                        console.log("num===", t), this.resetSeat();
                        var e = parseInt((this.seatRow - 1) / 2, 10) + 1, a = this.searchSeatByDirection(e, this.seatRow - 1, t);
                        if (0 < a.length) return this.chooseSeat(a), void (this.SelectNum += t);
                        e = this.searchSeatByDirection(e - 1, 0, t);
                        if (0 < e.length) return this.chooseSeat(e), void (this.SelectNum += t);
                        alert("无合法位置可选!");
                    },
                    searchSeatByDirection: function(t, e, a) {
                        for (var o = [], i = e < t ? t : e, n = e < t ? e : t; n <= i; n++) {
                            for (var r, s = [], l = 1 / 0, c = 0; c <= this.seatCol - a; c++) this.checkRowSeatContinusAndEmpty(n, c, c + a - 1) && (r = parseInt(c + a / 2, 10), 
                            (r = Math.abs(parseInt(this.seatCol / 2) - r)) < l && (l = r, s = this.generateRowResult(n, c, c + a - 1)));
                            o.push({
                                result: s,
                                offset: l
                            });
                        }
                        var u = [], h = 1 / 0;
                        return t < e ? o.forEach(function(t) {
                            t.offset < h && (u = t.result, h = t.offset);
                        }) : o.reverse().forEach(function(t) {
                            t.offset < h && (u = t.result, h = t.offset);
                        }), u;
                    },
                    checkRowSeatContinusAndEmpty: function(t, e, a) {
                        for (var o = !0, i = e; i <= a; i++) if (0 !== this.seatArray[t][i].type) {
                            o = !1;
                            break;
                        }
                        return o;
                    },
                    generateRowResult: function(t, e, a) {
                        for (var o = [], i = e; i <= a; i++) o.push([ t, i ]);
                        return o;
                    },
                    chooseSeat: function(t) {
                        this.optArr;
                        for (var e = this.seatArray.slice(), a = 0; a < t.length; a++) e[t[a][0]][t[a][1]].type = 1, 
                        this.optArr.push(e[t[a][0]][t[a][1]]);
                        this.seatArray = e;
                    }
                }
            };
            e.default = t;
        }).call(this, a("543d").default);
    },
    b3b1: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("0cda"), e(a("66fd")), t(e(a("e770")).default);
        }).call(this, a("543d").createPage);
    },
    e770: function(t, e, a) {
        a.r(e);
        var o, i = a("1680"), n = a("91ff");
        for (o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        a("8ede");
        var r = a("f0c5"), i = Object(r.a)(n.default, i.b, i.c, !1, null, "4813b65c", null, !1, i.a, void 0);
        e.default = i.exports;
    }
}, [ [ "b3b1", "common/runtime", "common/vendor" ] ] ]);