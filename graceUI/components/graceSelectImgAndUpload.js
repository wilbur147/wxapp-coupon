(global.webpackJsonp = global.webpackJsonp || []).push([ [ "graceUI/components/graceSelectImgAndUpload" ], {
    "0b10": function(t, e, i) {
        i.r(e);
        var s, r = i("b104"), o = i.n(r);
        for (s in r) "default" !== s && function(t) {
            i.d(e, t, function() {
                return r[t];
            });
        }(s);
        e.default = o.a;
    },
    1871: function(t, e, i) {
        var s = i("edb2");
        i.n(s).a;
    },
    "52b8": function(t, e, i) {
        i.d(e, "b", function() {
            return s;
        }), i.d(e, "c", function() {
            return r;
        }), i.d(e, "a", function() {});
        var s = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "784c": function(t, e, i) {
        i.r(e);
        var s, r = i("52b8"), o = i("0b10");
        for (s in o) "default" !== s && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(s);
        i("1871");
        var n = i("f0c5"), r = Object(n.a)(o.default, r.b, r.c, !1, null, "6d05df1a", null, !1, r.a, void 0);
        e.default = r.exports;
    },
    b104: function(t, i, o) {
        (function(s, t) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var r = o("e5c8"), e = {
                props: {
                    maxFileNumber: {
                        type: Number,
                        default: 9
                    },
                    btnName: {
                        type: String,
                        default: "添加照片"
                    },
                    items: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    closeBtnColor: {
                        type: String,
                        default: "#666666"
                    },
                    uploadServerUrl: {
                        type: String,
                        default: ""
                    },
                    progressSize: {
                        type: Number,
                        default: 1
                    },
                    progressColor: {
                        type: String,
                        default: "#27BD81"
                    },
                    progressBGColor: {
                        type: String,
                        default: "#F8F8F8"
                    },
                    fileName: {
                        type: String,
                        default: "img"
                    },
                    formData: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    imgMode: {
                        type: String,
                        default: "aspectFill"
                    },
                    header: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    save2uniCloud: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        imgLists: [],
                        updatting: !1
                    };
                },
                watch: {
                    imgLists: function(t, e) {
                        this.updatting || this.$emit("change", t);
                    }
                },
                methods: {
                    clearAllImgs: function() {
                        this.imgLists = [];
                    },
                    addImg: function() {
                        var i = this, t = this.maxFileNumber - this.imgLists.length;
                        if (t < 1) return !1;
                        s.chooseImage({
                            count: t,
                            sizeType: [ "compressed" ],
                            success: function(t) {
                                for (var e = 0; e < t.tempFilePaths.length; e++) i.imgLists.push({
                                    url: t.tempFilePaths[e],
                                    progress: 0,
                                    error: !1
                                });
                            },
                            complete: function() {},
                            fail: function() {}
                        });
                    },
                    removeImg: function(t) {
                        t = t.currentTarget.id.replace("grace-items-img-", ""), t = this.imgLists.splice(t, 1);
                        this.$emit("removeImg", t[0]);
                    },
                    showImgs: function(t) {
                        for (var t = t.currentTarget.dataset.imgurl, e = [], i = 0; i < this.imgLists.length; i++) e.push(this.imgLists[i].url);
                        s.previewImage({
                            urls: e,
                            current: t
                        });
                    },
                    upload: function(t) {
                        this.updatting || (this.updatting = !0, t = t || 0, s.showLoading({
                            title: "图片上传中"
                        }), this.save2uniCloud ? this.upload2cloud(t) : this.uploadBase(t));
                    },
                    upload2cloud: function(e) {
                        var i = this;
                        if (e > this.imgLists.length - 1) return s.hideLoading(), this.updatting = !1, void this.$emit("uploaded", this.imgLists);
                        1 <= this.imgLists[e].progress ? this.upload2cloud(e + 1) : (this.imgLists[e].error = !1, 
                        t.uploadFile({
                            filePath: this.imgLists[e].url,
                            cloudPath: r.uuid() + ".png",
                            onUploadProgress: function(t) {
                                t = Math.round(100 * t.loaded / t.total);
                                i.imgLists[e].progress = t, i.imgLists.splice(e, 1, i.imgLists[e]);
                            },
                            success: function(t) {
                                i.imgLists[e].progress = 100, i.imgLists[e].url = t.fileID, i.imgLists[e].result = t, 
                                i.upload2cloud(e + 1);
                            },
                            fail: function() {
                                s.showToast({
                                    title: "上传失败",
                                    icon: "none"
                                }), i.error(e);
                            }
                        }));
                    },
                    retry: function(t) {
                        t = t.currentTarget.dataset.index;
                        this.upload(t);
                    },
                    uploadBase: function(e) {
                        var i = this;
                        if (e > this.imgLists.length - 1) return s.hideLoading(), this.updatting = !1, void this.$emit("uploaded", this.imgLists);
                        "" != this.uploadServerUrl ? 1 <= this.imgLists[e].progress ? this.uploadBase(e + 1) : (this.imgLists[e].error = !1, 
                        s.uploadFile({
                            url: this.uploadServerUrl,
                            filePath: this.imgLists[e].url,
                            name: this.fileName,
                            formData: this.formData,
                            header: this.header,
                            success: function(t) {
                                "ok" != (t = JSON.parse(t.data)).status ? (s.showToast({
                                    title: "上传失败 : " + t.data,
                                    icon: "none"
                                }), i.error(e)) : (i.imgLists[e].progress = 100, i.imgLists[e].url = t.data, i.imgLists[e].result = t, 
                                i.uploadBase(e + 1));
                            },
                            fail: function(t) {
                                s.showToast({
                                    title: "上传失败，请点击图片重试",
                                    icon: "none"
                                }), i.error(e);
                            }
                        }).onProgressUpdate(function(t) {
                            0 < t.progress && (i.imgLists[e].progress = t.progress, i.imgLists.splice(e, 1, i.imgLists[e]));
                        })) : s.showToast({
                            title: "请设置上传服务器地址",
                            icon: "none"
                        });
                    },
                    error: function(t) {
                        var e = this;
                        this.updatting = !1, setTimeout(function() {
                            e.imgLists[t].progress = 0, e.imgLists[t].error = !0, e.$emit("uploaderror");
                        }, 500);
                    },
                    setItems: function(t) {
                        this.imgLists = [];
                        for (var e = 0; e < t.length; e++) this.imgLists.push({
                            url: t[e],
                            progress: 100
                        });
                    }
                }
            };
            i.default = e;
        }).call(this, o("543d").default, o("a9ff").default);
    },
    edb2: function(t, e, i) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "graceUI/components/graceSelectImgAndUpload-create-component", {
    "graceUI/components/graceSelectImgAndUpload-create-component": function(t, e, i) {
        i("543d").createComponent(i("784c"));
    }
}, [ [ "graceUI/components/graceSelectImgAndUpload-create-component" ] ] ]);