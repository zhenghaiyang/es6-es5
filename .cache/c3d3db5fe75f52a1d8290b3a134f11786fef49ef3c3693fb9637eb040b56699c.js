{"source":"!function(n) {\n    var r = {};\n    function o(e) {\n        if (r[e]) return r[e].exports;\n        var t = r[e] = {\n            i: e,\n            l: !1,\n            exports: {}\n        };\n        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;\n    }\n    o.m = n, o.c = r, o.d = function(e, t, n) {\n        o.o(e, t) || Object.defineProperty(e, t, {\n            enumerable: !0,\n            get: n\n        });\n    }, o.r = function(e) {\n        \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {\n            value: \"Module\"\n        }), Object.defineProperty(e, \"__esModule\", {\n            value: !0\n        });\n    }, o.t = function(t, e) {\n        if (1 & e && (t = o(t)), 8 & e) return t;\n        if (4 & e && \"object\" == typeof t && t && t.__esModule) return t;\n        var n = Object.create(null);\n        if (o.r(n), Object.defineProperty(n, \"default\", {\n            enumerable: !0,\n            value: t\n        }), 2 & e && \"string\" != typeof t) for (var r in t) o.d(n, r, function(e) {\n            return t[e];\n        }.bind(null, r));\n        return n;\n    }, o.n = function(e) {\n        var t = e && e.__esModule ? function() {\n            return e.default;\n        } : function() {\n            return e;\n        };\n        return o.d(t, \"a\", t), t;\n    }, o.o = function(e, t) {\n        return Object.prototype.hasOwnProperty.call(e, t);\n    }, o.p = \"\", o(o.s = 0);\n}([ function(e, t, n) {\n    \"use strict\";\n    var r = function() {\n        function r(e, t) {\n            for (var n = 0; n < t.length; n++) {\n                var r = t[n];\n                r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), \n                Object.defineProperty(e, r.key, r);\n            }\n        }\n        return function(e, t, n) {\n            return t && r(e.prototype, t), n && r(e, n), e;\n        };\n    }();\n    var o = function() {\n        function t(e) {\n            !function(e, t) {\n                if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n            }(this, t), this.value = e;\n        }\n        return r(t, [ {\n            key: \"testFn\",\n            value: function() {\n                alert(this.value);\n            }\n        } ]), t;\n    }();\n    window.testES6 = o;\n} ]);"}