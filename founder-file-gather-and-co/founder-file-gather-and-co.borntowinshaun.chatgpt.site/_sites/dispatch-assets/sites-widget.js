var R1 = Object.create,
    Sp = Object.defineProperty,
    N1 = Object.getOwnPropertyDescriptor,
    M1 = Object.getOwnPropertyNames,
    H1 = Object.getPrototypeOf,
    x1 = Object.prototype.hasOwnProperty,
    He = (e, i) => () => (i || e((i = {
        exports: {}
    }).exports, i), i.exports),
    L1 = (e, i, r, u) => {
        if (i && typeof i == "object" || typeof i == "function")
            for (var c = M1(i), f = 0, d = c.length, m; f < d; f++)
                m = c[f], !x1.call(e, m) && m !== r && Sp(e, m, {
                    get: ((p) => i[p]).bind(null, m),
                    enumerable: !(u = N1(i, m)) || u.enumerable
                });
        return e;
    },
    ks = (e, i, r) => (r = e != null ? R1(H1(e)) : {}, L1(i || !e || !e.__esModule ? Sp(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));

function U1(e) {
    return /(?:^|\s)CodexBrowser(?:\/|\s|$)/i.test(e ? ? "");
}

function Tp(e) {
    return /iPad|iPhone|iPod/.test(e);
}

function B1(e) {
    return /Android/.test(e);
}

function j1(e) {
    return Tp(e) && e.includes("CriOS");
}

function Z1(e) {
    return Tp(e) || B1(e) || j1(e);
}
var G1 = [
    "; wv",
    "webview",
    "fbav",
    "fb_iab",
    "fban",
    "instagram",
    "line/",
    "kakaotalk",
    "snapchat",
    "tiktok"
];

function X1(e) {
    const i = e.trim();
    if (!i) return !1;
    const r = /iPhone|iPad|iPod/.test(i),
        u = /Android/.test(i),
        c = r && !/Safari/.test(i),
        f = u && /Version\/\d+\.\d+/.test(i),
        d = G1.some((m) => i.toLowerCase().includes(m));
    return c || f || d;
}

function P1(e) {
    return U1(e) || X1(e ? ? "");
}

function Ap(e) {
    var i, r, u = "";
    if (typeof e == "string" || typeof e == "number") u += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var c = e.length;
            for (i = 0; i < c; i++) e[i] && (r = Ap(e[i])) && (u && (u += " "), u += r);
        } else
            for (r in e) e[r] && (u && (u += " "), u += r);
    return u;
}

function Bn() {
    for (var e, i, r = 0, u = "", c = arguments.length; r < c; r++)(e = arguments[r]) && (i = Ap(e)) && (u && (u += " "), u += i);
    return u;
}
var Y1 = /* @__PURE__ */ He(((e) => {
        var i = /* @__PURE__ */ Symbol.for("react.transitional.element"),
            r = /* @__PURE__ */ Symbol.for("react.portal"),
            u = /* @__PURE__ */ Symbol.for("react.fragment"),
            c = /* @__PURE__ */ Symbol.for("react.strict_mode"),
            f = /* @__PURE__ */ Symbol.for("react.profiler"),
            d = /* @__PURE__ */ Symbol.for("react.consumer"),
            m = /* @__PURE__ */ Symbol.for("react.context"),
            p = /* @__PURE__ */ Symbol.for("react.forward_ref"),
            g = /* @__PURE__ */ Symbol.for("react.suspense"),
            v = /* @__PURE__ */ Symbol.for("react.memo"),
            b = /* @__PURE__ */ Symbol.for("react.lazy"),
            _ = /* @__PURE__ */ Symbol.for("react.activity"),
            T = Symbol.iterator;

        function O(w) {
            return w === null || typeof w != "object" ? null : (w = T && w[T] || w["@@iterator"], typeof w == "function" ? w : null);
        }
        var D = {
                isMounted: function() {
                    return !1;
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            x = Object.assign,
            U = {};

        function G(w, X, K) {
            this.props = w, this.context = X, this.refs = U, this.updater = K || D;
        }
        G.prototype.isReactComponent = {}, G.prototype.setState = function(w, X) {
            if (typeof w != "object" && typeof w != "function" && w != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, w, X, "setState");
        }, G.prototype.forceUpdate = function(w) {
            this.updater.enqueueForceUpdate(this, w, "forceUpdate");
        };

        function k() {}
        k.prototype = G.prototype;

        function L(w, X, K) {
            this.props = w, this.context = X, this.refs = U, this.updater = K || D;
        }
        var q = L.prototype = new k();
        q.constructor = L, x(q, G.prototype), q.isPureReactComponent = !0;
        var H = Array.isArray;

        function I() {}
        var Q = {
                H: null,
                A: null,
                T: null,
                S: null
            },
            lt = Object.prototype.hasOwnProperty;

        function ft(w, X, K) {
            var tt = K.ref;
            return {
                $$typeof: i,
                type: w,
                key: X,
                ref: tt !== void 0 ? tt : null,
                props: K
            };
        }

        function W(w, X) {
            return ft(w.type, X, w.props);
        }

        function J(w) {
            return typeof w == "object" && w !== null && w.$$typeof === i;
        }

        function pt(w) {
            var X = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + w.replace(/[=:]/g, function(K) {
                return X[K];
            });
        }
        var ht = /\/+/g;

        function yt(w, X) {
            return typeof w == "object" && w !== null && w.key != null ? pt("" + w.key) : X.toString(36);
        }

        function F(w) {
            switch (w.status) {
                case "fulfilled":
                    return w.value;
                case "rejected":
                    throw w.reason;
                default:
                    switch (typeof w.status == "string" ? w.then(I, I) : (w.status = "pending", w.then(function(X) {
                        w.status === "pending" && (w.status = "fulfilled", w.value = X);
                    }, function(X) {
                        w.status === "pending" && (w.status = "rejected", w.reason = X);
                    })), w.status) {
                        case "fulfilled":
                            return w.value;
                        case "rejected":
                            throw w.reason;
                    }
            }
            throw w;
        }

        function j(w, X, K, tt, mt) {
            var st = typeof w;
            (st === "undefined" || st === "boolean") && (w = null);
            var wt = !1;
            if (w === null) wt = !0;
            else switch (st) {
                case "bigint":
                case "string":
                case "number":
                    wt = !0;
                    break;
                case "object":
                    switch (w.$$typeof) {
                        case i:
                        case r:
                            wt = !0;
                            break;
                        case b:
                            return wt = w._init, j(wt(w._payload), X, K, tt, mt);
                    }
            }
            if (wt) return mt = mt(w), wt = tt === "" ? "." + yt(w, 0) : tt, H(mt) ? (K = "", wt != null && (K = wt.replace(ht, "$&/") + "/"), j(mt, X, K, "", function(Ee) {
                return Ee;
            })) : mt != null && (J(mt) && (mt = W(mt, K + (mt.key == null || w && w.key === mt.key ? "" : ("" + mt.key).replace(ht, "$&/") + "/") + wt)), X.push(mt)), 1;
            wt = 0;
            var ee = tt === "" ? "." : tt + ":";
            if (H(w))
                for (var nt = 0; nt < w.length; nt++) tt = w[nt], st = ee + yt(tt, nt), wt += j(tt, X, K, st, mt);
            else if (nt = O(w), typeof nt == "function")
                for (w = nt.call(w), nt = 0; !(tt = w.next()).done;) tt = tt.value, st = ee + yt(tt, nt++), wt += j(tt, X, K, st, mt);
            else if (st === "object") {
                if (typeof w.then == "function") return j(F(w), X, K, tt, mt);
                throw X = String(w), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.");
            }
            return wt;
        }

        function V(w, X, K) {
            if (w == null) return w;
            var tt = [],
                mt = 0;
            return j(w, tt, "", "", function(st) {
                return X.call(K, st, mt++);
            }), tt;
        }

        function ot(w) {
            if (w._status === -1) {
                var X = w._result;
                X = X(), X.then(function(K) {
                    (w._status === 0 || w._status === -1) && (w._status = 1, w._result = K);
                }, function(K) {
                    (w._status === 0 || w._status === -1) && (w._status = 2, w._result = K);
                }), w._status === -1 && (w._status = 0, w._result = X);
            }
            if (w._status === 1) return w._result.default;
            throw w._result;
        }
        var gt = typeof reportError == "function" ? reportError : function(w) {
                if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                    var X = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
                        error: w
                    });
                    if (!window.dispatchEvent(X)) return;
                } else if (typeof process == "object" && typeof process.emit == "function") {
                    process.emit("uncaughtException", w);
                    return;
                }
                console.error(w);
            },
            te = {
                map: V,
                forEach: function(w, X, K) {
                    V(w, function() {
                        X.apply(this, arguments);
                    }, K);
                },
                count: function(w) {
                    var X = 0;
                    return V(w, function() {
                        X++;
                    }), X;
                },
                toArray: function(w) {
                    return V(w, function(X) {
                        return X;
                    }) || [];
                },
                only: function(w) {
                    if (!J(w)) throw Error("React.Children.only expected to receive a single React element child.");
                    return w;
                }
            };
        e.Activity = _, e.Children = te, e.Component = G, e.Fragment = u, e.Profiler = f, e.PureComponent = L, e.StrictMode = c, e.Suspense = g, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, e.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(w) {
                return Q.H.useMemoCache(w);
            }
        }, e.cache = function(w) {
            return function() {
                return w.apply(null, arguments);
            };
        }, e.cacheSignal = function() {
            return null;
        }, e.cloneElement = function(w, X, K) {
            if (w == null) throw Error("The argument must be a React element, but you passed " + w + ".");
            var tt = x({}, w.props),
                mt = w.key;
            if (X != null)
                for (st in X.key !== void 0 && (mt = "" + X.key), X) !lt.call(X, st) || st === "key" || st === "__self" || st === "__source" || st === "ref" && X.ref === void 0 || (tt[st] = X[st]);
            var st = arguments.length - 2;
            if (st === 1) tt.children = K;
            else if (1 < st) {
                for (var wt = Array(st), ee = 0; ee < st; ee++) wt[ee] = arguments[ee + 2];
                tt.children = wt;
            }
            return ft(w.type, mt, tt);
        }, e.createContext = function(w) {
            return w = {
                $$typeof: m,
                _currentValue: w,
                _currentValue2: w,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, w.Provider = w, w.Consumer = {
                $$typeof: d,
                _context: w
            }, w;
        }, e.createElement = function(w, X, K) {
            var tt, mt = {},
                st = null;
            if (X != null)
                for (tt in X.key !== void 0 && (st = "" + X.key), X) lt.call(X, tt) && tt !== "key" && tt !== "__self" && tt !== "__source" && (mt[tt] = X[tt]);
            var wt = arguments.length - 2;
            if (wt === 1) mt.children = K;
            else if (1 < wt) {
                for (var ee = Array(wt), nt = 0; nt < wt; nt++) ee[nt] = arguments[nt + 2];
                mt.children = ee;
            }
            if (w && w.defaultProps)
                for (tt in wt = w.defaultProps, wt) mt[tt] === void 0 && (mt[tt] = wt[tt]);
            return ft(w, st, mt);
        }, e.createRef = function() {
            return {
                current: null
            };
        }, e.forwardRef = function(w) {
            return {
                $$typeof: p,
                render: w
            };
        }, e.isValidElement = J, e.lazy = function(w) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: w
                },
                _init: ot
            };
        }, e.memo = function(w, X) {
            return {
                $$typeof: v,
                type: w,
                compare: X === void 0 ? null : X
            };
        }, e.startTransition = function(w) {
            var X = Q.T,
                K = {};
            Q.T = K;
            try {
                var tt = w(),
                    mt = Q.S;
                mt !== null && mt(K, tt), typeof tt == "object" && tt !== null && typeof tt.then == "function" && tt.then(I, gt);
            } catch (st) {
                gt(st);
            } finally {
                X !== null && K.types !== null && (X.types = K.types), Q.T = X;
            }
        }, e.unstable_useCacheRefresh = function() {
            return Q.H.useCacheRefresh();
        }, e.use = function(w) {
            return Q.H.use(w);
        }, e.useActionState = function(w, X, K) {
            return Q.H.useActionState(w, X, K);
        }, e.useCallback = function(w, X) {
            return Q.H.useCallback(w, X);
        }, e.useContext = function(w) {
            return Q.H.useContext(w);
        }, e.useDebugValue = function() {}, e.useDeferredValue = function(w, X) {
            return Q.H.useDeferredValue(w, X);
        }, e.useEffect = function(w, X) {
            return Q.H.useEffect(w, X);
        }, e.useEffectEvent = function(w) {
            return Q.H.useEffectEvent(w);
        }, e.useId = function() {
            return Q.H.useId();
        }, e.useImperativeHandle = function(w, X, K) {
            return Q.H.useImperativeHandle(w, X, K);
        }, e.useInsertionEffect = function(w, X) {
            return Q.H.useInsertionEffect(w, X);
        }, e.useLayoutEffect = function(w, X) {
            return Q.H.useLayoutEffect(w, X);
        }, e.useMemo = function(w, X) {
            return Q.H.useMemo(w, X);
        }, e.useOptimistic = function(w, X) {
            return Q.H.useOptimistic(w, X);
        }, e.useReducer = function(w, X, K) {
            return Q.H.useReducer(w, X, K);
        }, e.useRef = function(w) {
            return Q.H.useRef(w);
        }, e.useState = function(w) {
            return Q.H.useState(w);
        }, e.useSyncExternalStore = function(w, X, K) {
            return Q.H.useSyncExternalStore(w, X, K);
        }, e.useTransition = function() {
            return Q.H.useTransition();
        }, e.version = "19.2.8";
    })),
    Is = /* @__PURE__ */ He(((e, i) => {
        i.exports = Y1();
    })),
    E = /* @__PURE__ */ ks(Is()),
    Ss = function(e, i) {
        return Ss = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(r, u) {
            r.__proto__ = u;
        } || function(r, u) {
            for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (r[c] = u[c]);
        }, Ss(e, i);
    };

function Ve(e, i) {
    if (typeof i != "function" && i !== null) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    Ss(e, i);

    function r() {
        this.constructor = e;
    }
    e.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r());
}
var it = function() {
    return it = Object.assign || function(i) {
        for (var r, u = 1, c = arguments.length; u < c; u++) {
            r = arguments[u];
            for (var f in r) Object.prototype.hasOwnProperty.call(r, f) && (i[f] = r[f]);
        }
        return i;
    }, it.apply(this, arguments);
};

function ja(e, i) {
    var r = {};
    for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && i.indexOf(u) < 0 && (r[u] = e[u]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var c = 0, u = Object.getOwnPropertySymbols(e); c < u.length; c++) i.indexOf(u[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, u[c]) && (r[u[c]] = e[u[c]]);
    return r;
}

function on(e, i, r) {
    if (r || arguments.length === 2)
        for (var u = 0, c = i.length, f; u < c; u++)(f || !(u in i)) && (f || (f = Array.prototype.slice.call(i, 0, u)), f[u] = i[u]);
    return e.concat(f || Array.prototype.slice.call(i));
}

function rn(e, i) {
    var r = i && i.cache ? i.cache : F1,
        u = i && i.serializer ? i.serializer : I1;
    return (i && i.strategy ? i.strategy : V1)(e, {
        cache: r,
        serializer: u
    });
}

function q1(e) {
    return e == null || typeof e == "number" || typeof e == "boolean";
}

function wp(e, i, r, u) {
    var c = q1(u) ? u : r(u),
        f = i.get(c);
    return typeof f > "u" && (f = e.call(this, u), i.set(c, f)), f;
}

function Op(e, i, r) {
    var u = Array.prototype.slice.call(arguments, 3),
        c = r(u),
        f = i.get(c);
    return typeof f > "u" && (f = e.apply(this, u), i.set(c, f)), f;
}

function Qs(e, i, r, u, c) {
    return r.bind(i, e, u, c);
}

function V1(e, i) {
    var r = e.length === 1 ? wp : Op;
    return Qs(e, this, r, i.cache.create(), i.serializer);
}

function $1(e, i) {
    return Qs(e, this, Op, i.cache.create(), i.serializer);
}

function k1(e, i) {
    return Qs(e, this, wp, i.cache.create(), i.serializer);
}
var I1 = function() {
        return JSON.stringify(arguments);
    },
    Q1 = (function() {
        function e() {
            this.cache = /* @__PURE__ */ Object.create(null);
        }
        return e.prototype.get = function(i) {
            return this.cache[i];
        }, e.prototype.set = function(i, r) {
            this.cache[i] = r;
        }, e;
    })(),
    F1 = {
        create: function() {
            return new Q1();
        }
    },
    un = {
        variadic: $1,
        monadic: k1
    },
    At;
(function(e) {
    e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(At || (At = {}));
var Zt;
(function(e) {
    e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Zt || (Zt = {}));
var Ui;
(function(e) {
    e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Ui || (Ui = {}));

function vv(e) {
    return e.type === Zt.literal;
}

function K1(e) {
    return e.type === Zt.argument;
}

function Cp(e) {
    return e.type === Zt.number;
}

function Dp(e) {
    return e.type === Zt.date;
}

function zp(e) {
    return e.type === Zt.time;
}

function Rp(e) {
    return e.type === Zt.select;
}

function Np(e) {
    return e.type === Zt.plural;
}

function W1(e) {
    return e.type === Zt.pound;
}

function Mp(e) {
    return e.type === Zt.tag;
}

function Hp(e) {
    return !!(e && typeof e == "object" && e.type === Ui.number);
}

function Ts(e) {
    return !!(e && typeof e == "object" && e.type === Ui.dateTime);
}
var xp = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
    J1 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

function tb(e) {
    var i = {};
    return e.replace(J1, function(r) {
        var u = r.length;
        switch (r[0]) {
            case "G":
                i.era = u === 4 ? "long" : u === 5 ? "narrow" : "short";
                break;
            case "y":
                i.year = u === 2 ? "2-digit" : "numeric";
                break;
            case "Y":
            case "u":
            case "U":
            case "r":
                throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
                throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
                i.month = [
                    "numeric",
                    "2-digit",
                    "short",
                    "long",
                    "narrow"
                ][u - 1];
                break;
            case "w":
            case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
                i.day = ["numeric", "2-digit"][u - 1];
                break;
            case "D":
            case "F":
            case "g":
                throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
                i.weekday = u === 4 ? "long" : u === 5 ? "narrow" : "short";
                break;
            case "e":
                if (u < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                i.weekday = [
                    "short",
                    "long",
                    "narrow",
                    "short"
                ][u - 4];
                break;
            case "c":
                if (u < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                i.weekday = [
                    "short",
                    "long",
                    "narrow",
                    "short"
                ][u - 4];
                break;
            case "a":
                i.hour12 = !0;
                break;
            case "b":
            case "B":
                throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
                i.hourCycle = "h12", i.hour = ["numeric", "2-digit"][u - 1];
                break;
            case "H":
                i.hourCycle = "h23", i.hour = ["numeric", "2-digit"][u - 1];
                break;
            case "K":
                i.hourCycle = "h11", i.hour = ["numeric", "2-digit"][u - 1];
                break;
            case "k":
                i.hourCycle = "h24", i.hour = ["numeric", "2-digit"][u - 1];
                break;
            case "j":
            case "J":
            case "C":
                throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
                i.minute = ["numeric", "2-digit"][u - 1];
                break;
            case "s":
                i.second = ["numeric", "2-digit"][u - 1];
                break;
            case "S":
            case "A":
                throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
                i.timeZoneName = u < 4 ? "short" : "long";
                break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
                throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        }
        return "";
    }), i;
}
var eb = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

function nb(e) {
    if (e.length === 0) throw new Error("Number skeleton cannot be empty");
    for (var i = e.split(eb).filter(function(v) {
            return v.length > 0;
        }), r = [], u = 0, c = i; u < c.length; u++) {
        var f = c[u].split("/");
        if (f.length === 0) throw new Error("Invalid number skeleton");
        for (var d = f[0], m = f.slice(1), p = 0, g = m; p < g.length; p++)
            if (g[p].length === 0) throw new Error("Invalid number skeleton");
        r.push({
            stem: d,
            options: m
        });
    }
    return r;
}

function ab(e) {
    return e.replace(/^(.*?)-/, "");
}
var pv = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    Lp = /^(@+)?(\+|#+)?[rs]?$/g,
    ib = /(\*)(0+)|(#+)(0+)|(0+)/g,
    Up = /^(0+)$/;

function gv(e) {
    var i = {};
    return e[e.length - 1] === "r" ? i.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (i.roundingPriority = "lessPrecision"), e.replace(Lp, function(r, u, c) {
        return typeof c != "string" ? (i.minimumSignificantDigits = u.length, i.maximumSignificantDigits = u.length) : c === "+" ? i.minimumSignificantDigits = u.length : u[0] === "#" ? i.maximumSignificantDigits = u.length : (i.minimumSignificantDigits = u.length, i.maximumSignificantDigits = u.length + (typeof c == "string" ? c.length : 0)), "";
    }), i;
}

function Bp(e) {
    switch (e) {
        case "sign-auto":
            return {
                signDisplay: "auto"
            };
        case "sign-accounting":
        case "()":
            return {
                currencySign: "accounting"
            };
        case "sign-always":
        case "+!":
            return {
                signDisplay: "always"
            };
        case "sign-accounting-always":
        case "()!":
            return {
                signDisplay: "always",
                currencySign: "accounting"
            };
        case "sign-except-zero":
        case "+?":
            return {
                signDisplay: "exceptZero"
            };
        case "sign-accounting-except-zero":
        case "()?":
            return {
                signDisplay: "exceptZero",
                currencySign: "accounting"
            };
        case "sign-never":
        case "+_":
            return {
                signDisplay: "never"
            };
    }
}

function lb(e) {
    var i;
    if (e[0] === "E" && e[1] === "E" ? (i = {
            notation: "engineering"
        }, e = e.slice(2)) : e[0] === "E" && (i = {
            notation: "scientific"
        }, e = e.slice(1)), i) {
        var r = e.slice(0, 2);
        if (r === "+!" ? (i.signDisplay = "always", e = e.slice(2)) : r === "+?" && (i.signDisplay = "exceptZero", e = e.slice(2)), !Up.test(e)) throw new Error("Malformed concise eng/scientific notation");
        i.minimumIntegerDigits = e.length;
    }
    return i;
}

function yv(e) {
    var i = {},
        r = Bp(e);
    return r || i;
}

function rb(e) {
    for (var i = {}, r = 0, u = e; r < u.length; r++) {
        var c = u[r];
        switch (c.stem) {
            case "percent":
            case "%":
                i.style = "percent";
                continue;
            case "%x100":
                i.style = "percent", i.scale = 100;
                continue;
            case "currency":
                i.style = "currency", i.currency = c.options[0];
                continue;
            case "group-off":
            case ",_":
                i.useGrouping = !1;
                continue;
            case "precision-integer":
            case ".":
                i.maximumFractionDigits = 0;
                continue;
            case "measure-unit":
            case "unit":
                i.style = "unit", i.unit = ab(c.options[0]);
                continue;
            case "compact-short":
            case "K":
                i.notation = "compact", i.compactDisplay = "short";
                continue;
            case "compact-long":
            case "KK":
                i.notation = "compact", i.compactDisplay = "long";
                continue;
            case "scientific":
                i = it(it(it({}, i), {
                    notation: "scientific"
                }), c.options.reduce(function(p, g) {
                    return it(it({}, p), yv(g));
                }, {}));
                continue;
            case "engineering":
                i = it(it(it({}, i), {
                    notation: "engineering"
                }), c.options.reduce(function(p, g) {
                    return it(it({}, p), yv(g));
                }, {}));
                continue;
            case "notation-simple":
                i.notation = "standard";
                continue;
            case "unit-width-narrow":
                i.currencyDisplay = "narrowSymbol", i.unitDisplay = "narrow";
                continue;
            case "unit-width-short":
                i.currencyDisplay = "code", i.unitDisplay = "short";
                continue;
            case "unit-width-full-name":
                i.currencyDisplay = "name", i.unitDisplay = "long";
                continue;
            case "unit-width-iso-code":
                i.currencyDisplay = "symbol";
                continue;
            case "scale":
                i.scale = parseFloat(c.options[0]);
                continue;
            case "rounding-mode-floor":
                i.roundingMode = "floor";
                continue;
            case "rounding-mode-ceiling":
                i.roundingMode = "ceil";
                continue;
            case "rounding-mode-down":
                i.roundingMode = "trunc";
                continue;
            case "rounding-mode-up":
                i.roundingMode = "expand";
                continue;
            case "rounding-mode-half-even":
                i.roundingMode = "halfEven";
                continue;
            case "rounding-mode-half-down":
                i.roundingMode = "halfTrunc";
                continue;
            case "rounding-mode-half-up":
                i.roundingMode = "halfExpand";
                continue;
            case "integer-width":
                if (c.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                c.options[0].replace(ib, function(p, g, v, b, _, T) {
                    if (g) i.minimumIntegerDigits = v.length;
                    else {
                        if (b && _) throw new Error("We currently do not support maximum integer digits");
                        if (T) throw new Error("We currently do not support exact integer digits");
                    }
                    return "";
                });
                continue;
        }
        if (Up.test(c.stem)) {
            i.minimumIntegerDigits = c.stem.length;
            continue;
        }
        if (pv.test(c.stem)) {
            if (c.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            c.stem.replace(pv, function(p, g, v, b, _, T) {
                return v === "*" ? i.minimumFractionDigits = g.length : b && b[0] === "#" ? i.maximumFractionDigits = b.length : _ && T ? (i.minimumFractionDigits = _.length, i.maximumFractionDigits = _.length + T.length) : (i.minimumFractionDigits = g.length, i.maximumFractionDigits = g.length), "";
            });
            var f = c.options[0];
            f === "w" ? i = it(it({}, i), {
                trailingZeroDisplay: "stripIfInteger"
            }) : f && (i = it(it({}, i), gv(f)));
            continue;
        }
        if (Lp.test(c.stem)) {
            i = it(it({}, i), gv(c.stem));
            continue;
        }
        var d = Bp(c.stem);
        d && (i = it(it({}, i), d));
        var m = lb(c.stem);
        m && (i = it(it({}, i), m));
    }
    return i;
}
var fu = {
    "001": ["H", "h"],
    419: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    AC: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    AD: ["H", "hB"],
    AE: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    AF: [
        "H",
        "hb",
        "hB",
        "h"
    ],
    AG: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    AI: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    AL: [
        "h",
        "H",
        "hB"
    ],
    AM: ["H", "hB"],
    AO: ["H", "hB"],
    AR: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    AS: ["h", "H"],
    AT: ["H", "hB"],
    AU: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    AW: ["H", "hB"],
    AX: ["H"],
    AZ: [
        "H",
        "hB",
        "h"
    ],
    BA: [
        "H",
        "hB",
        "h"
    ],
    BB: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    BD: [
        "h",
        "hB",
        "H"
    ],
    BE: ["H", "hB"],
    BF: ["H", "hB"],
    BG: [
        "H",
        "hB",
        "h"
    ],
    BH: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    BI: ["H", "h"],
    BJ: ["H", "hB"],
    BL: ["H", "hB"],
    BM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    BN: [
        "hb",
        "hB",
        "h",
        "H"
    ],
    BO: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    BQ: ["H"],
    BR: ["H", "hB"],
    BS: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    BT: ["h", "H"],
    BW: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    BY: ["H", "h"],
    BZ: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    CA: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    CC: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    CD: ["hB", "H"],
    CF: [
        "H",
        "h",
        "hB"
    ],
    CG: ["H", "hB"],
    CH: [
        "H",
        "hB",
        "h"
    ],
    CI: ["H", "hB"],
    CK: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    CL: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    CM: [
        "H",
        "h",
        "hB"
    ],
    CN: [
        "H",
        "hB",
        "hb",
        "h"
    ],
    CO: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    CP: ["H"],
    CR: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    CU: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    CV: ["H", "hB"],
    CW: ["H", "hB"],
    CX: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    CY: [
        "h",
        "H",
        "hb",
        "hB"
    ],
    CZ: ["H"],
    DE: ["H", "hB"],
    DG: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    DJ: ["h", "H"],
    DK: ["H"],
    DM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    DO: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    DZ: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    EA: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    EC: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    EE: ["H", "hB"],
    EG: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    EH: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    ER: ["h", "H"],
    ES: [
        "H",
        "hB",
        "h",
        "hb"
    ],
    ET: [
        "hB",
        "hb",
        "h",
        "H"
    ],
    FI: ["H"],
    FJ: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    FK: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    FM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    FO: ["H", "h"],
    FR: ["H", "hB"],
    GA: ["H", "hB"],
    GB: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    GD: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    GE: [
        "H",
        "hB",
        "h"
    ],
    GF: ["H", "hB"],
    GG: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    GH: ["h", "H"],
    GI: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    GL: ["H", "h"],
    GM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    GN: ["H", "hB"],
    GP: ["H", "hB"],
    GQ: [
        "H",
        "hB",
        "h",
        "hb"
    ],
    GR: [
        "h",
        "H",
        "hb",
        "hB"
    ],
    GT: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    GU: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    GW: ["H", "hB"],
    GY: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    HK: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    HN: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    HR: ["H", "hB"],
    HU: ["H", "h"],
    IC: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    ID: ["H"],
    IE: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    IL: ["H", "hB"],
    IM: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    IN: ["h", "H"],
    IO: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    IQ: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    IR: ["hB", "H"],
    IS: ["H"],
    IT: ["H", "hB"],
    JE: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    JM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    JO: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    JP: [
        "H",
        "K",
        "h"
    ],
    KE: [
        "hB",
        "hb",
        "H",
        "h"
    ],
    KG: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    KH: [
        "hB",
        "h",
        "H",
        "hb"
    ],
    KI: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    KM: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    KN: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    KP: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    KR: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    KW: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    KY: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    KZ: ["H", "hB"],
    LA: [
        "H",
        "hb",
        "hB",
        "h"
    ],
    LB: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    LC: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    LI: [
        "H",
        "hB",
        "h"
    ],
    LK: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    LR: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    LS: ["h", "H"],
    LT: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    LU: [
        "H",
        "h",
        "hB"
    ],
    LV: [
        "H",
        "hB",
        "hb",
        "h"
    ],
    LY: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    MA: [
        "H",
        "h",
        "hB",
        "hb"
    ],
    MC: ["H", "hB"],
    MD: ["H", "hB"],
    ME: [
        "H",
        "hB",
        "h"
    ],
    MF: ["H", "hB"],
    MG: ["H", "h"],
    MH: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    MK: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    ML: ["H"],
    MM: [
        "hB",
        "hb",
        "H",
        "h"
    ],
    MN: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    MO: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    MP: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    MQ: ["H", "hB"],
    MR: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    MS: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    MT: ["H", "h"],
    MU: ["H", "h"],
    MV: ["H", "h"],
    MW: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    MX: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    MY: [
        "hb",
        "hB",
        "h",
        "H"
    ],
    MZ: ["H", "hB"],
    NA: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    NC: ["H", "hB"],
    NE: ["H"],
    NF: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    NG: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    NI: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    NL: ["H", "hB"],
    NO: ["H", "h"],
    NP: [
        "H",
        "h",
        "hB"
    ],
    NR: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    NU: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    NZ: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    OM: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    PA: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    PE: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    PF: [
        "H",
        "h",
        "hB"
    ],
    PG: ["h", "H"],
    PH: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    PK: [
        "h",
        "hB",
        "H"
    ],
    PL: ["H", "h"],
    PM: ["H", "hB"],
    PN: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    PR: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    PS: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    PT: ["H", "hB"],
    PW: ["h", "H"],
    PY: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    QA: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    RE: ["H", "hB"],
    RO: ["H", "hB"],
    RS: [
        "H",
        "hB",
        "h"
    ],
    RU: ["H"],
    RW: ["H", "h"],
    SA: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    SB: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    SC: [
        "H",
        "h",
        "hB"
    ],
    SD: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    SE: ["H"],
    SG: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    SH: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    SI: ["H", "hB"],
    SJ: ["H"],
    SK: ["H"],
    SL: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    SM: [
        "H",
        "h",
        "hB"
    ],
    SN: [
        "H",
        "h",
        "hB"
    ],
    SO: ["h", "H"],
    SR: ["H", "hB"],
    SS: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    ST: ["H", "hB"],
    SV: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    SX: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    SY: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    SZ: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    TA: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    TC: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    TD: [
        "h",
        "H",
        "hB"
    ],
    TF: [
        "H",
        "h",
        "hB"
    ],
    TG: ["H", "hB"],
    TH: ["H", "h"],
    TJ: ["H", "h"],
    TL: [
        "H",
        "hB",
        "hb",
        "h"
    ],
    TM: ["H", "h"],
    TN: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    TO: ["h", "H"],
    TR: ["H", "hB"],
    TT: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    TW: [
        "hB",
        "hb",
        "h",
        "H"
    ],
    TZ: [
        "hB",
        "hb",
        "H",
        "h"
    ],
    UA: [
        "H",
        "hB",
        "h"
    ],
    UG: [
        "hB",
        "hb",
        "H",
        "h"
    ],
    UM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    US: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    UY: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    UZ: [
        "H",
        "hB",
        "h"
    ],
    VA: [
        "H",
        "h",
        "hB"
    ],
    VC: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    VE: [
        "h",
        "H",
        "hB",
        "hb"
    ],
    VG: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    VI: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    VN: ["H", "h"],
    VU: ["h", "H"],
    WF: ["H", "hB"],
    WS: ["h", "H"],
    XK: [
        "H",
        "hB",
        "h"
    ],
    YE: [
        "h",
        "hB",
        "hb",
        "H"
    ],
    YT: ["H", "hB"],
    ZA: [
        "H",
        "h",
        "hb",
        "hB"
    ],
    ZM: [
        "h",
        "hb",
        "H",
        "hB"
    ],
    ZW: ["H", "h"],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-HK": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-IL": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "en-MY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ]
};

function ub(e, i) {
    for (var r = "", u = 0; u < e.length; u++) {
        var c = e.charAt(u);
        if (c === "j") {
            for (var f = 0; u + 1 < e.length && e.charAt(u + 1) === c;)
                f++, u++;
            var d = 1 + (f & 1),
                m = f < 2 ? 1 : 3 + (f >> 1),
                p = "a",
                g = ob(i);
            for ((g == "H" || g == "k") && (m = 0); m-- > 0;) r += p;
            for (; d-- > 0;) r = g + r;
        } else c === "J" ? r += "H" : r += c;
    }
    return r;
}

function ob(e) {
    var i = e.hourCycle;
    if (i === void 0 && e.hourCycles && e.hourCycles.length && (i = e.hourCycles[0]), i) switch (i) {
        case "h24":
            return "k";
        case "h23":
            return "H";
        case "h12":
            return "h";
        case "h11":
            return "K";
        default:
            throw new Error("Invalid hourCycle");
    }
    var r = e.language,
        u;
    return r !== "root" && (u = e.maximize().region), (fu[u || ""] || fu[r || ""] || fu["".concat(r, "-001")] || fu["001"])[0];
}
var cs, cb = new RegExp("^".concat(xp.source, "*")),
    sb = new RegExp("".concat(xp.source, "*$"));

function Ot(e, i) {
    return {
        start: e,
        end: i
    };
}
var fb = !!String.prototype.startsWith && "_a".startsWith("a", 1),
    db = !!String.fromCodePoint,
    hb = !!Object.fromEntries,
    mb = !!String.prototype.codePointAt,
    vb = !!String.prototype.trimStart,
    pb = !!String.prototype.trimEnd,
    gb = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
        return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
    },
    As = !0;
try {
    As = ((cs = Zp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) === null || cs === void 0 ? void 0 : cs[0]) === "a";
} catch {
    As = !1;
}
var bv = fb ? function(i, r, u) {
        return i.startsWith(r, u);
    } : function(i, r, u) {
        return i.slice(u, u + r.length) === r;
    },
    ws = db ? String.fromCodePoint : function() {
        for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
        for (var u = "", c = i.length, f = 0, d; c > f;) {
            if (d = i[f++], d > 1114111) throw RangeError(d + " is not a valid code point");
            u += d < 65536 ? String.fromCharCode(d) : String.fromCharCode(((d -= 65536) >> 10) + 55296, d % 1024 + 56320);
        }
        return u;
    },
    _v = hb ? Object.fromEntries : function(i) {
        for (var r = {}, u = 0, c = i; u < c.length; u++) {
            var f = c[u],
                d = f[0];
            r[d] = f[1];
        }
        return r;
    },
    jp = mb ? function(i, r) {
        return i.codePointAt(r);
    } : function(i, r) {
        var u = i.length;
        if (!(r < 0 || r >= u)) {
            var c = i.charCodeAt(r),
                f;
            return c < 55296 || c > 56319 || r + 1 === u || (f = i.charCodeAt(r + 1)) < 56320 || f > 57343 ? c : (c - 55296 << 10) + (f - 56320) + 65536;
        }
    },
    yb = vb ? function(i) {
        return i.trimStart();
    } : function(i) {
        return i.replace(cb, "");
    },
    bb = pb ? function(i) {
        return i.trimEnd();
    } : function(i) {
        return i.replace(sb, "");
    };

function Zp(e, i) {
    return new RegExp(e, i);
}
var Os;
if (As) {
    var Ev = Zp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    Os = function(i, r) {
        var u;
        return Ev.lastIndex = r, (u = Ev.exec(i)[1]) !== null && u !== void 0 ? u : "";
    };
} else Os = function(i, r) {
    for (var u = [];;) {
        var c = jp(i, r);
        if (c === void 0 || Gp(c) || Tb(c)) break;
        u.push(c), r += c >= 65536 ? 2 : 1;
    }
    return ws.apply(void 0, u);
};
var _b = (function() {
    function e(i, r) {
        r === void 0 && (r = {}), this.message = i, this.position = {
            offset: 0,
            line: 1,
            column: 1
        }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
        if (this.offset() !== 0) throw Error("parser can only be used once");
        return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(i, r, u) {
        for (var c = []; !this.isEOF();) {
            var f = this.char();
            if (f === 123) {
                var d = this.parseArgument(i, u);
                if (d.err) return d;
                c.push(d.val);
            } else {
                if (f === 125 && i > 0) break;
                if (f === 35 && (r === "plural" || r === "selectordinal")) {
                    var m = this.clonePosition();
                    this.bump(), c.push({
                        type: Zt.pound,
                        location: Ot(m, this.clonePosition())
                    });
                } else if (f === 60 && !this.ignoreTag && this.peek() === 47) {
                    if (u) break;
                    return this.error(At.UNMATCHED_CLOSING_TAG, Ot(this.clonePosition(), this.clonePosition()));
                } else if (f === 60 && !this.ignoreTag && Cs(this.peek() || 0)) {
                    var d = this.parseTag(i, r);
                    if (d.err) return d;
                    c.push(d.val);
                } else {
                    var d = this.parseLiteral(i, r);
                    if (d.err) return d;
                    c.push(d.val);
                }
            }
        }
        return {
            val: c,
            err: null
        };
    }, e.prototype.parseTag = function(i, r) {
        var u = this.clonePosition();
        this.bump();
        var c = this.parseTagName();
        if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
                type: Zt.literal,
                value: "<".concat(c, "/>"),
                location: Ot(u, this.clonePosition())
            },
            err: null
        };
        if (this.bumpIf(">")) {
            var f = this.parseMessage(i + 1, r, !0);
            if (f.err) return f;
            var d = f.val,
                m = this.clonePosition();
            if (this.bumpIf("</")) {
                if (this.isEOF() || !Cs(this.char())) return this.error(At.INVALID_TAG, Ot(m, this.clonePosition()));
                var p = this.clonePosition();
                return c !== this.parseTagName() ? this.error(At.UNMATCHED_CLOSING_TAG, Ot(p, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                    val: {
                        type: Zt.tag,
                        value: c,
                        children: d,
                        location: Ot(u, this.clonePosition())
                    },
                    err: null
                } : this.error(At.INVALID_TAG, Ot(m, this.clonePosition())));
            } else return this.error(At.UNCLOSED_TAG, Ot(u, this.clonePosition()));
        } else return this.error(At.INVALID_TAG, Ot(u, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
        var i = this.offset();
        for (this.bump(); !this.isEOF() && Sb(this.char());) this.bump();
        return this.message.slice(i, this.offset());
    }, e.prototype.parseLiteral = function(i, r) {
        for (var u = this.clonePosition(), c = "";;) {
            var f = this.tryParseQuote(r);
            if (f) {
                c += f;
                continue;
            }
            var d = this.tryParseUnquoted(i, r);
            if (d) {
                c += d;
                continue;
            }
            var m = this.tryParseLeftAngleBracket();
            if (m) {
                c += m;
                continue;
            }
            break;
        }
        var p = Ot(u, this.clonePosition());
        return {
            val: {
                type: Zt.literal,
                value: c,
                location: p
            },
            err: null
        };
    }, e.prototype.tryParseLeftAngleBracket = function() {
        return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Eb(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(i) {
        if (this.isEOF() || this.char() !== 39) return null;
        switch (this.peek()) {
            case 39:
                return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35:
                if (i === "plural" || i === "selectordinal") break;
                return null;
            default:
                return null;
        }
        this.bump();
        var r = [this.char()];
        for (this.bump(); !this.isEOF();) {
            var u = this.char();
            if (u === 39)
                if (this.peek() === 39)
                    r.push(39), this.bump();
                else {
                    this.bump();
                    break;
                }
            else r.push(u);
            this.bump();
        }
        return ws.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(i, r) {
        if (this.isEOF()) return null;
        var u = this.char();
        return u === 60 || u === 123 || u === 35 && (r === "plural" || r === "selectordinal") || u === 125 && i > 0 ? null : (this.bump(), ws(u));
    }, e.prototype.parseArgument = function(i, r) {
        var u = this.clonePosition();
        if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(At.EXPECT_ARGUMENT_CLOSING_BRACE, Ot(u, this.clonePosition()));
        if (this.char() === 125)
            return this.bump(), this.error(At.EMPTY_ARGUMENT, Ot(u, this.clonePosition()));
        var c = this.parseIdentifierIfPossible().value;
        if (!c) return this.error(At.MALFORMED_ARGUMENT, Ot(u, this.clonePosition()));
        if (this.bumpSpace(), this.isEOF()) return this.error(At.EXPECT_ARGUMENT_CLOSING_BRACE, Ot(u, this.clonePosition()));
        switch (this.char()) {
            case 125:
                return this.bump(), {
                    val: {
                        type: Zt.argument,
                        value: c,
                        location: Ot(u, this.clonePosition())
                    },
                    err: null
                };
            case 44:
                return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(At.EXPECT_ARGUMENT_CLOSING_BRACE, Ot(u, this.clonePosition())) : this.parseArgumentOptions(i, r, c, u);
            default:
                return this.error(At.MALFORMED_ARGUMENT, Ot(u, this.clonePosition()));
        }
    }, e.prototype.parseIdentifierIfPossible = function() {
        var i = this.clonePosition(),
            r = this.offset(),
            u = Os(this.message, r),
            c = r + u.length;
        return this.bumpTo(c), {
            value: u,
            location: Ot(i, this.clonePosition())
        };
    }, e.prototype.parseArgumentOptions = function(i, r, u, c) {
        var f, d = this.clonePosition(),
            m = this.parseIdentifierIfPossible().value,
            p = this.clonePosition();
        switch (m) {
            case "":
                return this.error(At.EXPECT_ARGUMENT_TYPE, Ot(d, p));
            case "number":
            case "date":
            case "time":
                this.bumpSpace();
                var g = null;
                if (this.bumpIf(",")) {
                    this.bumpSpace();
                    var v = this.clonePosition(),
                        b = this.parseSimpleArgStyleIfPossible();
                    if (b.err) return b;
                    var _ = bb(b.val);
                    if (_.length === 0) return this.error(At.EXPECT_ARGUMENT_STYLE, Ot(this.clonePosition(), this.clonePosition()));
                    g = {
                        style: _,
                        styleLocation: Ot(v, this.clonePosition())
                    };
                }
                var L = this.tryParseArgumentClose(c);
                if (L.err) return L;
                var T = Ot(c, this.clonePosition());
                if (g && bv(g ? .style, "::", 0)) {
                    var O = yb(g.style.slice(2));
                    if (m === "number") {
                        var b = this.parseNumberSkeletonFromString(O, g.styleLocation);
                        return b.err ? b : {
                            val: {
                                type: Zt.number,
                                value: u,
                                location: T,
                                style: b.val
                            },
                            err: null
                        };
                    } else {
                        if (O.length === 0) return this.error(At.EXPECT_DATE_TIME_SKELETON, T);
                        var D = O;
                        this.locale && (D = ub(O, this.locale));
                        var _ = {
                            type: Ui.dateTime,
                            pattern: D,
                            location: g.styleLocation,
                            parsedOptions: this.shouldParseSkeletons ? tb(D) : {}
                        };
                        return {
                            val: {
                                type: m === "date" ? Zt.date : Zt.time,
                                value: u,
                                location: T,
                                style: _
                            },
                            err: null
                        };
                    }
                }
                return {
                    val: {
                        type: m === "number" ? Zt.number : m === "date" ? Zt.date : Zt.time,
                        value: u,
                        location: T,
                        style: (f = g ? .style) !== null && f !== void 0 ? f : null
                    },
                    err: null
                };
            case "plural":
            case "selectordinal":
            case "select":
                var x = this.clonePosition();
                if (this.bumpSpace(), !this.bumpIf(",")) return this.error(At.EXPECT_SELECT_ARGUMENT_OPTIONS, Ot(x, it({}, x)));
                this.bumpSpace();
                var U = this.parseIdentifierIfPossible(),
                    G = 0;
                if (m !== "select" && U.value === "offset") {
                    if (!this.bumpIf(":")) return this.error(At.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ot(this.clonePosition(), this.clonePosition()));
                    this.bumpSpace();
                    var b = this.tryParseDecimalInteger(At.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, At.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (b.err) return b;
                    this.bumpSpace(), U = this.parseIdentifierIfPossible(), G = b.val;
                }
                var k = this.tryParsePluralOrSelectOptions(i, m, r, U);
                if (k.err) return k;
                var L = this.tryParseArgumentClose(c);
                if (L.err) return L;
                var q = Ot(c, this.clonePosition());
                return m === "select" ? {
                    val: {
                        type: Zt.select,
                        value: u,
                        options: _v(k.val),
                        location: q
                    },
                    err: null
                } : {
                    val: {
                        type: Zt.plural,
                        value: u,
                        options: _v(k.val),
                        offset: G,
                        pluralType: m === "plural" ? "cardinal" : "ordinal",
                        location: q
                    },
                    err: null
                };
            default:
                return this.error(At.INVALID_ARGUMENT_TYPE, Ot(d, p));
        }
    }, e.prototype.tryParseArgumentClose = function(i) {
        return this.isEOF() || this.char() !== 125 ? this.error(At.EXPECT_ARGUMENT_CLOSING_BRACE, Ot(i, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
        });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
        for (var i = 0, r = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
                this.bump();
                var u = this.clonePosition();
                if (!this.bumpUntil("'")) return this.error(At.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ot(u, this.clonePosition()));
                this.bump();
                break;
            case 123:
                i += 1, this.bump();
                break;
            case 125:
                if (i > 0) i -= 1;
                else return {
                    val: this.message.slice(r.offset, this.offset()),
                    err: null
                };
                break;
            default:
                this.bump();
                break;
        }
        return {
            val: this.message.slice(r.offset, this.offset()),
            err: null
        };
    }, e.prototype.parseNumberSkeletonFromString = function(i, r) {
        var u = [];
        try {
            u = nb(i);
        } catch {
            return this.error(At.INVALID_NUMBER_SKELETON, r);
        }
        return {
            val: {
                type: Ui.number,
                tokens: u,
                location: r,
                parsedOptions: this.shouldParseSkeletons ? rb(u) : {}
            },
            err: null
        };
    }, e.prototype.tryParsePluralOrSelectOptions = function(i, r, u, c) {
        for (var f, d = !1, m = [], p = /* @__PURE__ */ new Set(), g = c.value, v = c.location;;) {
            if (g.length === 0) {
                var b = this.clonePosition();
                if (r !== "select" && this.bumpIf("=")) {
                    var _ = this.tryParseDecimalInteger(At.EXPECT_PLURAL_ARGUMENT_SELECTOR, At.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (_.err) return _;
                    v = Ot(b, this.clonePosition()), g = this.message.slice(b.offset, this.offset());
                } else break;
            }
            if (p.has(g)) return this.error(r === "select" ? At.DUPLICATE_SELECT_ARGUMENT_SELECTOR : At.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, v);
            g === "other" && (d = !0), this.bumpSpace();
            var T = this.clonePosition();
            if (!this.bumpIf("{")) return this.error(r === "select" ? At.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : At.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ot(this.clonePosition(), this.clonePosition()));
            var O = this.parseMessage(i + 1, r, u);
            if (O.err) return O;
            var D = this.tryParseArgumentClose(T);
            if (D.err) return D;
            m.push([g, {
                value: O.val,
                location: Ot(T, this.clonePosition())
            }]), p.add(g), this.bumpSpace(), f = this.parseIdentifierIfPossible(), g = f.value, v = f.location;
        }
        return m.length === 0 ? this.error(r === "select" ? At.EXPECT_SELECT_ARGUMENT_SELECTOR : At.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ot(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !d ? this.error(At.MISSING_OTHER_CLAUSE, Ot(this.clonePosition(), this.clonePosition())) : {
            val: m,
            err: null
        };
    }, e.prototype.tryParseDecimalInteger = function(i, r) {
        var u = 1,
            c = this.clonePosition();
        this.bumpIf("+") || this.bumpIf("-") && (u = -1);
        for (var f = !1, d = 0; !this.isEOF();) {
            var m = this.char();
            if (m >= 48 && m <= 57)
                f = !0, d = d * 10 + (m - 48), this.bump();
            else break;
        }
        var p = Ot(c, this.clonePosition());
        return f ? (d *= u, gb(d) ? {
            val: d,
            err: null
        } : this.error(r, p)) : this.error(i, p);
    }, e.prototype.offset = function() {
        return this.position.offset;
    }, e.prototype.isEOF = function() {
        return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
        };
    }, e.prototype.char = function() {
        var i = this.position.offset;
        if (i >= this.message.length) throw Error("out of bound");
        var r = jp(this.message, i);
        if (r === void 0) throw Error("Offset ".concat(i, " is at invalid UTF-16 code unit boundary"));
        return r;
    }, e.prototype.error = function(i, r) {
        return {
            val: null,
            err: {
                kind: i,
                message: this.message,
                location: r
            }
        };
    }, e.prototype.bump = function() {
        if (!this.isEOF()) {
            var i = this.char();
            i === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += i < 65536 ? 1 : 2);
        }
    }, e.prototype.bumpIf = function(i) {
        if (bv(this.message, i, this.offset())) {
            for (var r = 0; r < i.length; r++) this.bump();
            return !0;
        }
        return !1;
    }, e.prototype.bumpUntil = function(i) {
        var r = this.offset(),
            u = this.message.indexOf(i, r);
        return u >= 0 ? (this.bumpTo(u), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(i) {
        if (this.offset() > i) throw Error("targetOffset ".concat(i, " must be greater than or equal to the current offset ").concat(this.offset()));
        for (i = Math.min(i, this.message.length);;) {
            var r = this.offset();
            if (r === i) break;
            if (r > i) throw Error("targetOffset ".concat(i, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break;
        }
    }, e.prototype.bumpSpace = function() {
        for (; !this.isEOF() && Gp(this.char());) this.bump();
    }, e.prototype.peek = function() {
        if (this.isEOF()) return null;
        var i = this.char(),
            r = this.offset(),
            u = this.message.charCodeAt(r + (i >= 65536 ? 2 : 1));
        return u ? ? null;
    }, e;
})();

function Cs(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}

function Eb(e) {
    return Cs(e) || e === 47;
}

function Sb(e) {
    return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}

function Gp(e) {
    return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}

function Tb(e) {
    return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}

function Ds(e) {
    e.forEach(function(i) {
        if (delete i.location, Rp(i) || Np(i))
            for (var r in i.options)
                delete i.options[r].location, Ds(i.options[r].value);
        else Cp(i) && Hp(i.style) || (Dp(i) || zp(i)) && Ts(i.style) ? delete i.style.location : Mp(i) && Ds(i.children);
    });
}

function Ab(e, i) {
    i === void 0 && (i = {}), i = it({
        shouldParseSkeletons: !0,
        requiresOtherClause: !0
    }, i);
    var r = new _b(e, i).parse();
    if (r.err) {
        var u = SyntaxError(At[r.err.kind]);
        throw u.location = r.err.location, u.originalMessage = r.err.message, u;
    }
    return i ? .captureLocation || Ds(r.val), r.val;
}
var fn;
(function(e) {
    e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(fn || (fn = {}));
var da = (function(e) {
        Ve(i, e);

        function i(r, u, c) {
            var f = e.call(this, r) || this;
            return f.code = u, f.originalMessage = c, f;
        }
        return i.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
        }, i;
    })(Error),
    Sv = (function(e) {
        Ve(i, e);

        function i(r, u, c, f) {
            return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(u, '". Options are "').concat(Object.keys(c).join('", "'), '"'), fn.INVALID_VALUE, f) || this;
        }
        return i;
    })(da),
    wb = (function(e) {
        Ve(i, e);

        function i(r, u, c) {
            return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(u), fn.INVALID_VALUE, c) || this;
        }
        return i;
    })(da),
    Ob = (function(e) {
        Ve(i, e);

        function i(r, u) {
            return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(u, '"'), fn.MISSING_VALUE, u) || this;
        }
        return i;
    })(da),
    he;
(function(e) {
    e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(he || (he = {}));

function Cb(e) {
    return e.length < 2 ? e : e.reduce(function(i, r) {
        var u = i[i.length - 1];
        return !u || u.type !== he.literal || r.type !== he.literal ? i.push(r) : u.value += r.value, i;
    }, []);
}

function Xp(e) {
    return typeof e == "function";
}

function Tu(e, i, r, u, c, f, d) {
    if (e.length === 1 && vv(e[0])) return [{
        type: he.literal,
        value: e[0].value
    }];
    for (var m = [], p = 0, g = e; p < g.length; p++) {
        var v = g[p];
        if (vv(v)) {
            m.push({
                type: he.literal,
                value: v.value
            });
            continue;
        }
        if (W1(v)) {
            typeof f == "number" && m.push({
                type: he.literal,
                value: r.getNumberFormat(i).format(f)
            });
            continue;
        }
        var b = v.value;
        if (!(c && b in c)) throw new Ob(b, d);
        var _ = c[b];
        if (K1(v)) {
            (!_ || typeof _ == "string" || typeof _ == "number") && (_ = typeof _ == "string" || typeof _ == "number" ? String(_) : ""), m.push({
                type: typeof _ == "string" ? he.literal : he.object,
                value: _
            });
            continue;
        }
        if (Dp(v)) {
            var T = typeof v.style == "string" ? u.date[v.style] : Ts(v.style) ? v.style.parsedOptions : void 0;
            m.push({
                type: he.literal,
                value: r.getDateTimeFormat(i, T).format(_)
            });
            continue;
        }
        if (zp(v)) {
            var T = typeof v.style == "string" ? u.time[v.style] : Ts(v.style) ? v.style.parsedOptions : u.time.medium;
            m.push({
                type: he.literal,
                value: r.getDateTimeFormat(i, T).format(_)
            });
            continue;
        }
        if (Cp(v)) {
            var T = typeof v.style == "string" ? u.number[v.style] : Hp(v.style) ? v.style.parsedOptions : void 0;
            T && T.scale && (_ = _ * (T.scale || 1)), m.push({
                type: he.literal,
                value: r.getNumberFormat(i, T).format(_)
            });
            continue;
        }
        if (Mp(v)) {
            var O = v.children,
                D = v.value,
                x = c[D];
            if (!Xp(x)) throw new wb(D, "function", d);
            var U = x(Tu(O, i, r, u, c, f).map(function(L) {
                return L.value;
            }));
            Array.isArray(U) || (U = [U]), m.push.apply(m, U.map(function(L) {
                return {
                    type: typeof L == "string" ? he.literal : he.object,
                    value: L
                };
            }));
        }
        if (Rp(v)) {
            var G = v.options[_] || v.options.other;
            if (!G) throw new Sv(v.value, _, Object.keys(v.options), d);
            m.push.apply(m, Tu(G.value, i, r, u, c));
            continue;
        }
        if (Np(v)) {
            var G = v.options["=".concat(_)];
            if (!G) {
                if (!Intl.PluralRules) throw new da(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, fn.MISSING_INTL_API, d);
                var k = r.getPluralRules(i, {
                    type: v.pluralType
                }).select(_ - (v.offset || 0));
                G = v.options[k] || v.options.other;
            }
            if (!G) throw new Sv(v.value, _, Object.keys(v.options), d);
            m.push.apply(m, Tu(G.value, i, r, u, c, _ - (v.offset || 0)));
            continue;
        }
    }
    return Cb(m);
}

function Db(e, i) {
    return i ? it(it(it({}, e || {}), i || {}), Object.keys(e).reduce(function(r, u) {
        return r[u] = it(it({}, e[u]), i[u] || {}), r;
    }, {})) : e;
}

function zb(e, i) {
    return i ? Object.keys(e).reduce(function(r, u) {
        return r[u] = Db(e[u], i[u]), r;
    }, it({}, e)) : e;
}

function ss(e) {
    return {
        create: function() {
            return {
                get: function(i) {
                    return e[i];
                },
                set: function(i, r) {
                    e[i] = r;
                }
            };
        }
    };
}

function Rb(e) {
    return e === void 0 && (e = {
        number: {},
        dateTime: {},
        pluralRules: {}
    }), {
        getNumberFormat: rn(function() {
            for (var i, r = [], u = 0; u < arguments.length; u++) r[u] = arguments[u];
            return new((i = Intl.NumberFormat).bind.apply(i, on([void 0], r, !1)))();
        }, {
            cache: ss(e.number),
            strategy: un.variadic
        }),
        getDateTimeFormat: rn(function() {
            for (var i, r = [], u = 0; u < arguments.length; u++) r[u] = arguments[u];
            return new((i = Intl.DateTimeFormat).bind.apply(i, on([void 0], r, !1)))();
        }, {
            cache: ss(e.dateTime),
            strategy: un.variadic
        }),
        getPluralRules: rn(function() {
            for (var i, r = [], u = 0; u < arguments.length; u++) r[u] = arguments[u];
            return new((i = Intl.PluralRules).bind.apply(i, on([void 0], r, !1)))();
        }, {
            cache: ss(e.pluralRules),
            strategy: un.variadic
        })
    };
}
var Pp = (function() {
        function e(i, r, u, c) {
            r === void 0 && (r = e.defaultLocale);
            var f = this;
            if (this.formatterCache = {
                    number: {},
                    dateTime: {},
                    pluralRules: {}
                }, this.format = function(p) {
                    var g = f.formatToParts(p);
                    if (g.length === 1) return g[0].value;
                    var v = g.reduce(function(b, _) {
                        return !b.length || _.type !== he.literal || typeof b[b.length - 1] != "string" ? b.push(_.value) : b[b.length - 1] += _.value, b;
                    }, []);
                    return v.length <= 1 ? v[0] || "" : v;
                }, this.formatToParts = function(p) {
                    return Tu(f.ast, f.locales, f.formatters, f.formats, p, void 0, f.message);
                }, this.resolvedOptions = function() {
                    var p;
                    return {
                        locale: ((p = f.resolvedLocale) === null || p === void 0 ? void 0 : p.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
                    };
                }, this.getAst = function() {
                    return f.ast;
                }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof i == "string") {
                if (this.message = i, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                var d = c || {};
                d.formatters;
                var m = ja(d, ["formatters"]);
                this.ast = e.__parse(i, it(it({}, m), {
                    locale: this.resolvedLocale
                }));
            } else this.ast = i;
            if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
            this.formats = zb(e.formats, u), this.formatters = c && c.formatters || Rb(this.formatterCache);
        }
        return Object.defineProperty(e, "defaultLocale", {
            get: function() {
                return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
            },
            enumerable: !1,
            configurable: !0
        }), e.memoizedDefaultLocale = null, e.resolveLocale = function(i) {
            if (!(typeof Intl.Locale > "u")) {
                var r = Intl.NumberFormat.supportedLocalesOf(i);
                return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof i == "string" ? i : i[0]);
            }
        }, e.__parse = Ab, e.formats = {
            number: {
                integer: {
                    maximumFractionDigits: 0
                },
                currency: {
                    style: "currency"
                },
                percent: {
                    style: "percent"
                }
            },
            date: {
                short: {
                    month: "numeric",
                    day: "numeric",
                    year: "2-digit"
                },
                medium: {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                },
                long: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
                full: {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            time: {
                short: {
                    hour: "numeric",
                    minute: "numeric"
                },
                medium: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
                long: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                },
                full: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }
            }
        }, e;
    })(),
    Za;
(function(e) {
    e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Za || (Za = {}));
var Pl = (function(e) {
        Ve(i, e);

        function i(r, u, c) {
            var f = this,
                d = c ? c instanceof Error ? c : new Error(String(c)) : void 0;
            return f = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(u, `
`).concat(d ? `
`.concat(d.message, `
`).concat(d.stack) : "")) || this, f.code = r, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(f, i), f;
        }
        return i;
    })(Error),
    Nb = (function(e) {
        Ve(i, e);

        function i(r, u) {
            return e.call(this, Za.UNSUPPORTED_FORMATTER, r, u) || this;
        }
        return i;
    })(Pl),
    Mb = (function(e) {
        Ve(i, e);

        function i(r, u) {
            return e.call(this, Za.INVALID_CONFIG, r, u) || this;
        }
        return i;
    })(Pl),
    Tv = (function(e) {
        Ve(i, e);

        function i(r, u) {
            return e.call(this, Za.MISSING_DATA, r, u) || this;
        }
        return i;
    })(Pl),
    $e = (function(e) {
        Ve(i, e);

        function i(r, u, c) {
            var f = e.call(this, Za.FORMAT_ERROR, "".concat(r, `
Locale: `).concat(u, `
`), c) || this;
            return f.locale = u, f;
        }
        return i;
    })(Pl),
    fs = (function(e) {
        Ve(i, e);

        function i(r, u, c, f) {
            var d = e.call(this, "".concat(r, `
MessageID: `).concat(c ? .id, `
Default Message: `).concat(c ? .defaultMessage, `
Description: `).concat(c ? .description, `
`), u, f) || this;
            return d.descriptor = c, d.locale = u, d;
        }
        return i;
    })($e),
    Hb = (function(e) {
        Ve(i, e);

        function i(r, u) {
            var c = e.call(this, Za.MISSING_TRANSLATION, 'Missing message: "'.concat(r.id, '" for locale "').concat(u, '", using ').concat(r.defaultMessage ? "default message (".concat(typeof r.defaultMessage == "string" ? r.defaultMessage : r.defaultMessage.map(function(f) {
                var d;
                return (d = f.value) !== null && d !== void 0 ? d : JSON.stringify(f);
            }).join(), ")") : "id", " as fallback.")) || this;
            return c.descriptor = r, c;
        }
        return i;
    })(Pl);

function xb(e, i, r) {
    if (r === void 0 && (r = Error), !e) throw new r(i);
}

function Gi(e, i, r) {
    return r === void 0 && (r = {}), i.reduce(function(u, c) {
        return c in e ? u[c] = e[c] : c in r && (u[c] = r[c]), u;
    }, {});
}
var Lb = function(e) {},
    Ub = function(e) {},
    Yp = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: Lb,
        onWarn: Ub
    };

function qp() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    };
}

function Ua(e) {
    return {
        create: function() {
            return {
                get: function(i) {
                    return e[i];
                },
                set: function(i, r) {
                    e[i] = r;
                }
            };
        }
    };
}

function Bb(e) {
    e === void 0 && (e = qp());
    var i = Intl.RelativeTimeFormat,
        r = Intl.ListFormat,
        u = Intl.DisplayNames,
        c = rn(function() {
            for (var m, p = [], g = 0; g < arguments.length; g++) p[g] = arguments[g];
            return new((m = Intl.DateTimeFormat).bind.apply(m, on([void 0], p, !1)))();
        }, {
            cache: Ua(e.dateTime),
            strategy: un.variadic
        }),
        f = rn(function() {
            for (var m, p = [], g = 0; g < arguments.length; g++) p[g] = arguments[g];
            return new((m = Intl.NumberFormat).bind.apply(m, on([void 0], p, !1)))();
        }, {
            cache: Ua(e.number),
            strategy: un.variadic
        }),
        d = rn(function() {
            for (var m, p = [], g = 0; g < arguments.length; g++) p[g] = arguments[g];
            return new((m = Intl.PluralRules).bind.apply(m, on([void 0], p, !1)))();
        }, {
            cache: Ua(e.pluralRules),
            strategy: un.variadic
        });
    return {
        getDateTimeFormat: c,
        getNumberFormat: f,
        getMessageFormat: rn(function(m, p, g, v) {
            return new Pp(m, p, g, it({
                formatters: {
                    getNumberFormat: f,
                    getDateTimeFormat: c,
                    getPluralRules: d
                }
            }, v || {}));
        }, {
            cache: Ua(e.message),
            strategy: un.variadic
        }),
        getRelativeTimeFormat: rn(function() {
            for (var m = [], p = 0; p < arguments.length; p++) m[p] = arguments[p];
            return new(i.bind.apply(i, on([void 0], m, !1)))();
        }, {
            cache: Ua(e.relativeTime),
            strategy: un.variadic
        }),
        getPluralRules: d,
        getListFormat: rn(function() {
            for (var m = [], p = 0; p < arguments.length; p++) m[p] = arguments[p];
            return new(r.bind.apply(r, on([void 0], m, !1)))();
        }, {
            cache: Ua(e.list),
            strategy: un.variadic
        }),
        getDisplayNames: rn(function() {
            for (var m = [], p = 0; p < arguments.length; p++) m[p] = arguments[p];
            return new(u.bind.apply(u, on([void 0], m, !1)))();
        }, {
            cache: Ua(e.displayNames),
            strategy: un.variadic
        })
    };
}

function Fs(e, i, r, u) {
    var c = e && e[i],
        f;
    if (c && (f = c[r]), f) return f;
    u(new Nb("No ".concat(i, " format named: ").concat(r)));
}

function du(e, i) {
    return Object.keys(e).reduce(function(r, u) {
        return r[u] = it({
            timeZone: i
        }, e[u]), r;
    }, {});
}

function Av(e, i) {
    return Object.keys(it(it({}, e), i)).reduce(function(r, u) {
        return r[u] = it(it({}, e[u] || {}), i[u] || {}), r;
    }, {});
}

function wv(e, i) {
    if (!i) return e;
    var r = Pp.formats;
    return it(it(it({}, r), e), {
        date: Av(du(r.date, i), du(e.date || {}, i)),
        time: Av(du(r.time, i), du(e.time || {}, i))
    });
}
var zs = function(e, i, r, u, c) {
        var f = e.locale,
            d = e.formats,
            m = e.messages,
            p = e.defaultLocale,
            g = e.defaultFormats,
            v = e.fallbackOnEmptyString,
            b = e.onError,
            _ = e.timeZone,
            T = e.defaultRichTextElements;
        r === void 0 && (r = {
            id: ""
        });
        var O = r.id,
            D = r.defaultMessage;
        xb(!!O, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
        var x = String(O),
            U = m && Object.prototype.hasOwnProperty.call(m, x) && m[x];
        if (Array.isArray(U) && U.length === 1 && U[0].type === Zt.literal) return U[0].value;
        if (!u && U && typeof U == "string" && !T) return U.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (u = it(it({}, T), u || {}), d = wv(d, _), g = wv(g, _), !U) {
            if (v === !1 && U === "") return U;
            if ((!D || f && f.toLowerCase() !== p.toLowerCase()) && b(new Hb(r, f)), D) try {
                var G = i.getMessageFormat(D, p, g, c);
                return G.format(u);
            } catch (k) {
                return b(new fs('Error formatting default message for: "'.concat(x, '", rendering default message verbatim'), f, r, k)), typeof D == "string" ? D : x;
            }
            return x;
        }
        try {
            var G = i.getMessageFormat(U, f, d, it({
                formatters: i
            }, c || {}));
            return G.format(u);
        } catch (k) {
            b(new fs('Error formatting message: "'.concat(x, '", using ').concat(D ? "default message" : "id", " as fallback."), f, r, k));
        }
        if (D) try {
            var G = i.getMessageFormat(D, p, g, c);
            return G.format(u);
        } catch (k) {
            b(new fs('Error formatting the default message for: "'.concat(x, '", rendering message verbatim'), f, r, k));
        }
        return typeof U == "string" ? U : typeof D == "string" ? D : x;
    },
    jb = [
        "formatMatcher",
        "timeZone",
        "hour12",
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "hourCycle",
        "dateStyle",
        "timeStyle",
        "calendar",
        "numberingSystem",
        "fractionalSecondDigits"
    ];

function Yl(e, i, r, u) {
    var c = e.locale,
        f = e.formats,
        d = e.onError,
        m = e.timeZone;
    u === void 0 && (u = {});
    var p = u.format,
        g = it(it({}, m && {
            timeZone: m
        }), p && Fs(f, i, p, d)),
        v = Gi(u, jb, g);
    return i === "time" && !v.hour && !v.minute && !v.second && !v.timeStyle && !v.dateStyle && (v = it(it({}, v), {
        hour: "numeric",
        minute: "numeric"
    })), r(c, v);
}

function Zb(e, i) {
    for (var r = [], u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
    var c = r[0],
        f = r[1],
        d = f === void 0 ? {} : f,
        m = typeof c == "string" ? new Date(c || 0) : c;
    try {
        return Yl(e, "date", i, d).format(m);
    } catch (p) {
        e.onError(new $e("Error formatting date.", e.locale, p));
    }
    return String(m);
}

function Gb(e, i) {
    for (var r = [], u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
    var c = r[0],
        f = r[1],
        d = f === void 0 ? {} : f,
        m = typeof c == "string" ? new Date(c || 0) : c;
    try {
        return Yl(e, "time", i, d).format(m);
    } catch (p) {
        e.onError(new $e("Error formatting time.", e.locale, p));
    }
    return String(m);
}

function Xb(e, i) {
    for (var r = [], u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
    var c = r[0],
        f = r[1],
        d = r[2],
        m = d === void 0 ? {} : d,
        p = typeof c == "string" ? new Date(c || 0) : c,
        g = typeof f == "string" ? new Date(f || 0) : f;
    try {
        return Yl(e, "dateTimeRange", i, m).formatRange(p, g);
    } catch (v) {
        e.onError(new $e("Error formatting date time range.", e.locale, v));
    }
    return String(p);
}

function Pb(e, i) {
    for (var r = [], u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
    var c = r[0],
        f = r[1],
        d = f === void 0 ? {} : f,
        m = typeof c == "string" ? new Date(c || 0) : c;
    try {
        return Yl(e, "date", i, d).formatToParts(m);
    } catch (p) {
        e.onError(new $e("Error formatting date.", e.locale, p));
    }
    return [];
}

function Yb(e, i) {
    for (var r = [], u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
    var c = r[0],
        f = r[1],
        d = f === void 0 ? {} : f,
        m = typeof c == "string" ? new Date(c || 0) : c;
    try {
        return Yl(e, "time", i, d).formatToParts(m);
    } catch (p) {
        e.onError(new $e("Error formatting time.", e.locale, p));
    }
    return [];
}
var qb = [
    "style",
    "type",
    "fallback",
    "languageDisplay"
];

function Vb(e, i, r, u) {
    var c = e.locale,
        f = e.onError;
    Intl.DisplayNames || f(new da(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, fn.MISSING_INTL_API));
    var d = Gi(u, qb);
    try {
        return i(c, d).of(r);
    } catch (m) {
        f(new $e("Error formatting display name.", c, m));
    }
}
var $b = ["type", "style"],
    Ov = Date.now();

function kb(e) {
    return "".concat(Ov, "_").concat(e, "_").concat(Ov);
}

function Ib(e, i, r, u) {
    u === void 0 && (u = {});
    var c = Vp(e, i, r, u).reduce(function(f, d) {
        var m = d.value;
        return typeof m != "string" ? f.push(m) : typeof f[f.length - 1] == "string" ? f[f.length - 1] += m : f.push(m), f;
    }, []);
    return c.length === 1 ? c[0] : c.length === 0 ? "" : c;
}

function Vp(e, i, r, u) {
    var c = e.locale,
        f = e.onError;
    u === void 0 && (u = {}), Intl.ListFormat || f(new da(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, fn.MISSING_INTL_API));
    var d = Gi(u, $b);
    try {
        var m = {},
            p = r.map(function(g, v) {
                if (typeof g == "object") {
                    var b = kb(v);
                    return m[b] = g, b;
                }
                return String(g);
            });
        return i(c, d).formatToParts(p).map(function(g) {
            return g.type === "literal" ? g : it(it({}, g), {
                value: m[g.value] || g.value
            });
        });
    } catch (g) {
        f(new $e("Error formatting list.", c, g));
    }
    return r;
}
var Qb = ["type"];

function Fb(e, i, r, u) {
    var c = e.locale,
        f = e.onError;
    u === void 0 && (u = {}), Intl.PluralRules || f(new da(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, fn.MISSING_INTL_API));
    var d = Gi(u, Qb);
    try {
        return i(c, d).select(r);
    } catch (m) {
        f(new $e("Error formatting plural.", c, m));
    }
    return "other";
}
var Kb = ["numeric", "style"];

function Wb(e, i, r) {
    var u = e.locale,
        c = e.formats,
        f = e.onError;
    r === void 0 && (r = {});
    var d = r.format,
        m = !!d && Fs(c, "relative", d, f) || {};
    return i(u, Gi(r, Kb, m));
}

function Jb(e, i, r, u, c) {
    c === void 0 && (c = {}), u || (u = "second"), Intl.RelativeTimeFormat || e.onError(new da(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, fn.MISSING_INTL_API));
    try {
        return Wb(e, i, c).format(r, u);
    } catch (f) {
        e.onError(new $e("Error formatting relative time.", e.locale, f));
    }
    return String(r);
}
var t_ = [
    "style",
    "currency",
    "unit",
    "unitDisplay",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "currencyDisplay",
    "currencySign",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "numberingSystem",
    "trailingZeroDisplay",
    "roundingPriority",
    "roundingIncrement",
    "roundingMode"
];

function $p(e, i, r) {
    var u = e.locale,
        c = e.formats,
        f = e.onError;
    r === void 0 && (r = {});
    var d = r.format,
        m = d && Fs(c, "number", d, f) || {};
    return i(u, Gi(r, t_, m));
}

function e_(e, i, r, u) {
    u === void 0 && (u = {});
    try {
        return $p(e, i, u).format(r);
    } catch (c) {
        e.onError(new $e("Error formatting number.", e.locale, c));
    }
    return String(r);
}

function n_(e, i, r, u) {
    u === void 0 && (u = {});
    try {
        return $p(e, i, u).formatToParts(r);
    } catch (c) {
        e.onError(new $e("Error formatting number.", e.locale, c));
    }
    return [];
}

function a_(e) {
    return typeof(e ? e[Object.keys(e)[0]] : void 0) == "string";
}

function i_(e) {
    e.onWarn && e.defaultRichTextElements && a_(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}

function l_(e, i) {
    var r = Bb(i),
        u = it(it({}, Yp), e),
        c = u.locale,
        f = u.defaultLocale,
        d = u.onError;
    return c ? !Intl.NumberFormat.supportedLocalesOf(c).length && d ? d(new Tv('Missing locale data for locale: "'.concat(c, '" in Intl.NumberFormat. Using default locale: "').concat(f, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(c).length && d && d(new Tv('Missing locale data for locale: "'.concat(c, '" in Intl.DateTimeFormat. Using default locale: "').concat(f, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (d && d(new Mb('"locale" was not configured, using "'.concat(f, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), u.locale = u.defaultLocale || "en"), i_(u), it(it({}, u), {
        formatters: r,
        formatNumber: e_.bind(null, u, r.getNumberFormat),
        formatNumberToParts: n_.bind(null, u, r.getNumberFormat),
        formatRelativeTime: Jb.bind(null, u, r.getRelativeTimeFormat),
        formatDate: Zb.bind(null, u, r.getDateTimeFormat),
        formatDateToParts: Pb.bind(null, u, r.getDateTimeFormat),
        formatTime: Gb.bind(null, u, r.getDateTimeFormat),
        formatDateTimeRange: Xb.bind(null, u, r.getDateTimeFormat),
        formatTimeToParts: Yb.bind(null, u, r.getDateTimeFormat),
        formatPlural: Fb.bind(null, u, r.getPluralRules),
        formatMessage: zs.bind(null, u, r),
        $t: zs.bind(null, u, r),
        formatList: Ib.bind(null, u, r.getListFormat),
        formatListToParts: Vp.bind(null, u, r.getListFormat),
        formatDisplayName: Vb.bind(null, u, r.getDisplayNames)
    });
}

function r_(e, i, r) {
    if (r === void 0 && (r = Error), !e) throw new r(i);
}

function kp(e) {
    r_(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Ip = it(it({}, Yp), {
        textComponent: E.Fragment
    }),
    u_ = {
        key: 42
    },
    o_ = function(e) {
        return E.isValidElement(e) ? E.createElement(E.Fragment, u_, e) : e;
    },
    c_ = function(e) {
        var i;
        return (i = E.Children.map(e, o_)) !== null && i !== void 0 ? i : [];
    };

function s_(e) {
    return function(i) {
        return e(E.Children.toArray(i));
    };
}

function Rs(e, i) {
    if (e === i) return !0;
    if (!e || !i) return !1;
    var r = Object.keys(e),
        u = Object.keys(i),
        c = r.length;
    if (u.length !== c) return !1;
    for (var f = 0; f < c; f++) {
        var d = r[f];
        if (e[d] !== i[d] || !Object.prototype.hasOwnProperty.call(i, d)) return !1;
    }
    return !0;
}
var f_ = /* @__PURE__ */ He(((e) => {
        var i = typeof Symbol == "function" && Symbol.for,
            r = i ? /* @__PURE__ */ Symbol.for("react.element") : 60103,
            u = i ? /* @__PURE__ */ Symbol.for("react.portal") : 60106,
            c = i ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107,
            f = i ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108,
            d = i ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114,
            m = i ? /* @__PURE__ */ Symbol.for("react.provider") : 60109,
            p = i ? /* @__PURE__ */ Symbol.for("react.context") : 60110,
            g = i ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111,
            v = i ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111,
            b = i ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112,
            _ = i ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113,
            T = i ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120,
            O = i ? /* @__PURE__ */ Symbol.for("react.memo") : 60115,
            D = i ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116,
            x = i ? /* @__PURE__ */ Symbol.for("react.block") : 60121,
            U = i ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117,
            G = i ? /* @__PURE__ */ Symbol.for("react.responder") : 60118,
            k = i ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;

        function L(H) {
            if (typeof H == "object" && H !== null) {
                var I = H.$$typeof;
                switch (I) {
                    case r:
                        switch (H = H.type, H) {
                            case g:
                            case v:
                            case c:
                            case d:
                            case f:
                            case _:
                                return H;
                            default:
                                switch (H = H && H.$$typeof, H) {
                                    case p:
                                    case b:
                                    case D:
                                    case O:
                                    case m:
                                        return H;
                                    default:
                                        return I;
                                }
                        }
                    case u:
                        return I;
                }
            }
        }

        function q(H) {
            return L(H) === v;
        }
        e.AsyncMode = g, e.ConcurrentMode = v, e.ContextConsumer = p, e.ContextProvider = m, e.Element = r, e.ForwardRef = b, e.Fragment = c, e.Lazy = D, e.Memo = O, e.Portal = u, e.Profiler = d, e.StrictMode = f, e.Suspense = _, e.isAsyncMode = function(H) {
            return q(H) || L(H) === g;
        }, e.isConcurrentMode = q, e.isContextConsumer = function(H) {
            return L(H) === p;
        }, e.isContextProvider = function(H) {
            return L(H) === m;
        }, e.isElement = function(H) {
            return typeof H == "object" && H !== null && H.$$typeof === r;
        }, e.isForwardRef = function(H) {
            return L(H) === b;
        }, e.isFragment = function(H) {
            return L(H) === c;
        }, e.isLazy = function(H) {
            return L(H) === D;
        }, e.isMemo = function(H) {
            return L(H) === O;
        }, e.isPortal = function(H) {
            return L(H) === u;
        }, e.isProfiler = function(H) {
            return L(H) === d;
        }, e.isStrictMode = function(H) {
            return L(H) === f;
        }, e.isSuspense = function(H) {
            return L(H) === _;
        }, e.isValidElementType = function(H) {
            return typeof H == "string" || typeof H == "function" || H === c || H === v || H === d || H === f || H === _ || H === T || typeof H == "object" && H !== null && (H.$$typeof === D || H.$$typeof === O || H.$$typeof === m || H.$$typeof === p || H.$$typeof === b || H.$$typeof === U || H.$$typeof === G || H.$$typeof === k || H.$$typeof === x);
        }, e.typeOf = L;
    })),
    d_ = /* @__PURE__ */ He(((e, i) => {
        i.exports = f_();
    })),
    h_ = /* @__PURE__ */ He(((e, i) => {
        var r = d_(),
            u = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            },
            c = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            },
            f = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            },
            d = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            },
            m = {};
        m[r.ForwardRef] = f, m[r.Memo] = d;

        function p(x) {
            return r.isMemo(x) ? d : m[x.$$typeof] || u;
        }
        var g = Object.defineProperty,
            v = Object.getOwnPropertyNames,
            b = Object.getOwnPropertySymbols,
            _ = Object.getOwnPropertyDescriptor,
            T = Object.getPrototypeOf,
            O = Object.prototype;

        function D(x, U, G) {
            if (typeof U != "string") {
                if (O) {
                    var k = T(U);
                    k && k !== O && D(x, k, G);
                }
                var L = v(U);
                b && (L = L.concat(b(U)));
                for (var q = p(x), H = p(U), I = 0; I < L.length; ++I) {
                    var Q = L[I];
                    if (!c[Q] && !(G && G[Q]) && !(H && H[Q]) && !(q && q[Q])) {
                        var lt = _(U, Q);
                        try {
                            g(x, Q, lt);
                        } catch {}
                    }
                }
            }
            return x;
        }
        i.exports = D;
    })),
    r3 = /* @__PURE__ */ ks(h_()),
    Ks = E.createContext(null),
    u3 = Ks.Consumer,
    m_ = Ks.Provider,
    v_ = m_,
    p_ = Ks;

function Xi() {
    var e = E.useContext(p_);
    return kp(e), e;
}
var Ns;
(function(e) {
    e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Ns || (Ns = {}));
var Ms;
(function(e) {
    e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Ms || (Ms = {}));
var Qp = function(e) {
    var i = Xi(),
        r = e.value,
        u = e.children,
        c = ja(e, ["value", "children"]);
    return u(i.formatNumberToParts(r, c));
};
Qp.displayName = "FormattedNumberParts";
Qp.displayName = "FormattedNumberParts";

function Fp(e) {
    var i = function(r) {
        var u = Xi(),
            c = r.value,
            f = r.children,
            d = ja(r, ["value", "children"]),
            m = typeof c == "string" ? new Date(c || 0) : c;
        return f(e === "formatDate" ? u.formatDateToParts(m, d) : u.formatTimeToParts(m, d));
    };
    return i.displayName = Ms[e], i;
}

function ql(e) {
    var i = function(r) {
        var u = Xi(),
            c = r.value,
            f = r.children,
            d = ja(r, ["value", "children"]),
            m = u[e](c, d);
        if (typeof f == "function") return f(m);
        var p = u.textComponent || E.Fragment;
        return E.createElement(p, null, m);
    };
    return i.displayName = Ns[e], i;
}

function Kp(e) {
    return e && Object.keys(e).reduce(function(i, r) {
        var u = e[r];
        return i[r] = Xp(u) ? s_(u) : u, i;
    }, {});
}
var Cv = function(e, i, r, u) {
        for (var c = [], f = 4; f < arguments.length; f++) c[f - 4] = arguments[f];
        var d = Kp(u),
            m = zs.apply(void 0, on([
                e,
                i,
                r,
                d
            ], c, !1));
        return Array.isArray(m) ? c_(m) : m;
    },
    Dv = function(e, i) {
        var r = e.defaultRichTextElements,
            u = ja(e, ["defaultRichTextElements"]),
            c = Kp(r),
            f = l_(it(it(it({}, Ip), u), {
                defaultRichTextElements: c
            }), i),
            d = {
                locale: f.locale,
                timeZone: f.timeZone,
                fallbackOnEmptyString: f.fallbackOnEmptyString,
                formats: f.formats,
                defaultLocale: f.defaultLocale,
                defaultFormats: f.defaultFormats,
                messages: f.messages,
                onError: f.onError,
                defaultRichTextElements: c
            };
        return it(it({}, f), {
            formatMessage: Cv.bind(null, d, f.formatters),
            $t: Cv.bind(null, d, f.formatters)
        });
    };

function g_(e, i) {
    var r = e.values,
        u = ja(e, ["values"]),
        c = i.values,
        f = ja(i, ["values"]);
    return Rs(c, r) && Rs(u, f);
}

function Wp(e) {
    var i = Xi(),
        r = i.formatMessage,
        u = i.textComponent,
        c = u === void 0 ? E.Fragment : u,
        f = e.id,
        d = e.description,
        m = e.defaultMessage,
        p = e.values,
        g = e.children,
        v = e.tagName,
        b = v === void 0 ? c : v,
        _ = e.ignoreTag,
        T = r({
            id: f,
            description: d,
            defaultMessage: m
        }, p, {
            ignoreTag: _
        });
    return typeof g == "function" ? g(Array.isArray(T) ? T : [T]) : b ? E.createElement(b, null, T) : E.createElement(E.Fragment, null, T);
}
Wp.displayName = "FormattedMessage";
var Hi = E.memo(Wp, g_);
Hi.displayName = "MemoizedFormattedMessage";

function ds(e) {
    return {
        locale: e.locale,
        timeZone: e.timeZone,
        fallbackOnEmptyString: e.fallbackOnEmptyString,
        formats: e.formats,
        textComponent: e.textComponent,
        messages: e.messages,
        defaultLocale: e.defaultLocale,
        defaultFormats: e.defaultFormats,
        onError: e.onError,
        onWarn: e.onWarn,
        wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
        defaultRichTextElements: e.defaultRichTextElements
    };
}
var y_ = (function(e) {
    Ve(i, e);

    function i() {
        var r = e !== null && e.apply(this, arguments) || this;
        return r.cache = qp(), r.state = {
            cache: r.cache,
            intl: Dv(ds(r.props), r.cache),
            prevConfig: ds(r.props)
        }, r;
    }
    return i.getDerivedStateFromProps = function(r, u) {
        var c = u.prevConfig,
            f = u.cache,
            d = ds(r);
        return Rs(c, d) ? null : {
            intl: Dv(d, f),
            prevConfig: d
        };
    }, i.prototype.render = function() {
        return kp(this.state.intl), E.createElement(v_, {
            value: this.state.intl
        }, this.props.children);
    }, i.displayName = "IntlProvider", i.defaultProps = Ip, i;
})(E.PureComponent);
var o3 = ql("formatDate"),
    c3 = ql("formatTime"),
    s3 = ql("formatNumber"),
    f3 = ql("formatList"),
    d3 = ql("formatDisplayName"),
    h3 = Fp("formatDate"),
    m3 = Fp("formatTime"),
    zv = (e) => {
        let i;
        const r = /* @__PURE__ */ new Set(),
            u = (g, v) => {
                const b = typeof g == "function" ? g(i) : g;
                if (!Object.is(b, i)) {
                    const _ = i;
                    i = v ? ? (typeof b != "object" || b === null) ? b : Object.assign({}, i, b), r.forEach((T) => T(i, _));
                }
            },
            c = () => i,
            m = {
                setState: u,
                getState: c,
                getInitialState: () => p,
                subscribe: (g) => (r.add(g), () => r.delete(g))
            },
            p = i = e(u, c, m);
        return m;
    },
    b_ = ((e) => e ? zv(e) : zv),
    __ = (e) => e;

function E_(e, i = __) {
    const r = E.useSyncExternalStore(e.subscribe, E.useCallback(() => i(e.getState()), [e, i]), E.useCallback(() => i(e.getInitialState()), [e, i]));
    return E.useDebugValue(r), r;
}
var Bl = "en-US",
    Jp = [
        "am",
        "ar",
        "bg-BG",
        "bn-BD",
        "bs-BA",
        "ca-ES",
        "cs-CZ",
        "da-DK",
        "de-DE",
        "el-GR",
        "es-419",
        "es-ES",
        "et-EE",
        "fa",
        "fi-FI",
        "fr-CA",
        "fr-FR",
        "gu-IN",
        "hi-IN",
        "hr-HR",
        "hu-HU",
        "hy-AM",
        "id-ID",
        "is-IS",
        "it-IT",
        "ja-JP",
        "ka-GE",
        "kk",
        "kn-IN",
        "ko-KR",
        "lt",
        "lv-LV",
        "mk-MK",
        "ml",
        "mn",
        "mr-IN",
        "ms-MY",
        "my-MM",
        "nb-NO",
        "nl-NL",
        "pa",
        "pl-PL",
        "pt-BR",
        "pt-PT",
        "ro-RO",
        "ru-RU",
        "sk-SK",
        "sl-SI",
        "so-SO",
        "sq-AL",
        "sr-RS",
        "sv-SE",
        "sw-TZ",
        "ta-IN",
        "te-IN",
        "th-TH",
        "tl",
        "tr-TR",
        "uk-UA",
        "ur",
        "vi-VN",
        "zh-CN",
        "zh-HK",
        "zh-TW"
    ],
    S_ = new Map(Jp.map((e) => [e.toLowerCase(), e])),
    fe = new Map([
        [Bl.toLowerCase(), Bl], ...S_
    ]);
for (const e of [Bl, ...Jp]) {
    const i = new Intl.Locale(e).language.toLowerCase();
    fe.set(i, fe.get(i) ? ? e);
}
fe.set("es", "es-ES");
fe.set("fr", "fr-FR");
fe.set("bn-in", "bn-BD");
fe.set("en-in", Bl);
fe.set("ml-in", "ml");
fe.set("pa-guru", "pa");
fe.set("pa-guru-in", "pa");
for (const e of [
        "pt-ao",
        "pt-ch",
        "pt-cv",
        "pt-fr",
        "pt-gq",
        "pt-gw",
        "pt-lu",
        "pt-mo",
        "pt-mz",
        "pt-st",
        "pt-tl"
    ]) fe.set(e, "pt-PT");
fe.set("ur-in", "ur");
fe.set("zh-hant", "zh-TW");
fe.set("zh-hant-tw", "zh-TW");
fe.set("zh-hant-hk", "zh-HK");

function T_(e) {
    const i = e.trim().replaceAll("_", "-").toLowerCase();
    if (!i || i === "pa-arab" || i.startsWith("pa-arab-")) return;
    if (i.startsWith("es-") && i !== "es-es" && i !== "es-419") return "es-419";
    const r = fe.get(i);
    if (r) return r;
    const u = i.split("-");
    for (let c = u.length - 1; c >= 1; c -= 1) {
        const f = fe.get(u.slice(0, c).join("-"));
        if (f) return f;
    }
}

function Ws(e) {
    const i = e.split("-", 1)[0];
    return i && [
        "ar",
        "fa",
        "ur"
    ].includes(i) ? "rtl" : "ltr";
}
var Wt = {
        editorWidgetHideHint: {
            id: "sites.dispatch.widget.editor.hide_hint",
            defaultMessage: "Hover over this corner to bring back the toolbar.",
            description: "Tooltip at the corner after first hiding the Site editor widget, and on sustained hover over the hidden widget corner. A restore keyboard shortcut is shown beside this text."
        },
        editorWidgetRestoreAction: {
            id: "sites.dispatch.widget.editor.restore_action",
            defaultMessage: "Bring back toolbar",
            description: "Action beside the keyboard shortcut that restores the tucked Site editor widget."
        },
        invitationBannerLabel: {
            id: "sites.dispatch.widget.invitation_banner.label",
            defaultMessage: "Site editing controls",
            description: "Accessible label for the banner inviting someone to edit a ChatGPT Site."
        },
        invitationBannerMessage: {
            id: "sites.dispatch.widget.invitation_banner.message",
            defaultMessage: "You have been invited to edit this site.",
            description: "Message shown to someone who has been invited to edit a ChatGPT Site when the owner's name is unavailable."
        },
        invitationBannerMessageWithOwner: {
            id: "sites.dispatch.widget.invitation_banner.message_with_owner",
            defaultMessage: "<strong>{ownerName}</strong> has invited you to edit this site.",
            description: "Message shown to someone invited to edit a ChatGPT Site. ownerName is the site owner's display name."
        },
        invitationBannerEditAction: {
            id: "sites.dispatch.widget.invitation_banner.edit_action",
            defaultMessage: "Edit in ChatGPT",
            description: "Link that opens ChatGPT so an invited editor can edit a ChatGPT Site."
        },
        editorWidgetDefaultEditPrompt: {
            id: "sites.dispatch.widget.editor.default_edit_prompt",
            defaultMessage: "{site} make these changes…",
            description: "Default editable prompt when the Site widget logo opens ChatGPT. Matches the desktop Site edit prompt. site is the complete Site reference and must remain a placeholder."
        },
        invitationBannerEditPrompt: {
            id: "sites.dispatch.widget.invitation_banner.edit_prompt",
            defaultMessage: "Make the following changes to {site}:",
            description: "Prompt prefilled in ChatGPT when an invited editor opens a Site. site is the complete Site reference and must remain a placeholder."
        },
        invitationBannerDismissAction: {
            id: "sites.dispatch.widget.invitation_banner.dismiss_action",
            defaultMessage: "Dismiss",
            description: "Accessible label for the button that dismisses a ChatGPT Site editing invitation banner."
        },
        editorWidgetLaunchAction: {
            id: "sites.dispatch.widget.editor.launch_action",
            defaultMessage: "Edit site",
            description: "Short button label in the floating editor-only widget on a hosted website. Opens a text composer for describing changes to that website. Site means a hosted website, not a physical location. No placeholders."
        },
        editorWidgetOpenAction: {
            id: "sites.dispatch.widget.editor.open_action",
            defaultMessage: "Edit site in ChatGPT",
            description: "Accessible label and tooltip for the ChatGPT logo link in the floating editor-only Site widget. Opens this website's full-screen editor in ChatGPT in a new tab. Short action label; no placeholders."
        },
        editorWidgetLaunchTooltip: {
            id: "sites.dispatch.widget.editor.launch_tooltip",
            defaultMessage: "Describe your changes to ChatGPT",
            description: "Tooltip on the Edit site button in the floating editor-only Site widget. The button opens a text composer for describing desired changes to this website. Short action phrase; no placeholders."
        },
        editorWidgetComposerLabel: {
            id: "sites.dispatch.widget.editor.composer_label",
            defaultMessage: "Describe your edits",
            description: "Screen-reader label for the plain-text composer in the floating editor-only widget on a hosted website. Asks the editor to describe changes they want ChatGPT to make to this website. No placeholders."
        },
        editorWidgetComposerPlaceholder: {
            id: "sites.dispatch.widget.editor.composer_placeholder",
            defaultMessage: "Describe your edits",
            description: "Short placeholder in the empty plain-text composer in the floating editor-only widget on a hosted website. Asks the editor to describe changes they want ChatGPT to make to this website. No placeholders."
        },
        editorWidgetSendAction: {
            id: "sites.dispatch.widget.editor.send_action",
            defaultMessage: "Send edits",
            description: "Accessible label for the button that sends requested Site edits to ChatGPT."
        },
        editorWidgetHideAction: {
            id: "sites.dispatch.widget.editor.hide_action",
            defaultMessage: "Hide toolbar",
            description: "Accessible label and tooltip for the X button in the floating editor-only widget on a hosted website. Hides this editing widget from the current page without changing the website or its access permissions. Short action label; no placeholders."
        }
    },
    v3 = Object.freeze({
        status: "aborted"
    });

function $(e, i, r) {
    function u(m, p) {
        var g;
        Object.defineProperty(m, "_zod", {
            value: m._zod ? ? {},
            enumerable: !1
        }), (g = m._zod).traits ? ? (g.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(e), i(m, p);
        for (const v in d.prototype) v in m || Object.defineProperty(m, v, {
            value: d.prototype[v].bind(m)
        });
        m._zod.constr = d, m._zod.def = p;
    }
    const c = r ? .Parent ? ? Object;
    class f extends c {}
    Object.defineProperty(f, "name", {
        value: e
    });

    function d(m) {
        var p;
        const g = r ? .Parent ? new f() : this;
        u(g, m), (p = g._zod).deferred ? ? (p.deferred = []);
        for (const v of g._zod.deferred) v();
        return g;
    }
    return Object.defineProperty(d, "init", {
        value: u
    }), Object.defineProperty(d, Symbol.hasInstance, {
        value: (m) => r ? .Parent && m instanceof r.Parent ? !0 : m ? ._zod ? .traits ? .has(e)
    }), Object.defineProperty(d, "name", {
        value: e
    }), d;
}
var xi = class extends Error {
        constructor() {
            super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
        }
    },
    tg = class extends Error {
        constructor(e) {
            super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
        }
    },
    Hs = {};

function Ga(e) {
    return e && Object.assign(Hs, e), Hs;
}

function A_(e) {
    const i = Object.values(e).filter((r) => typeof r == "number");
    return Object.entries(e).filter(([r, u]) => i.indexOf(+r) === -1).map(([r, u]) => u);
}

function xs(e, i) {
    return typeof i == "bigint" ? i.toString() : i;
}

function Js(e) {
    return {
        get value() {
            {
                const i = e();
                return Object.defineProperty(this, "value", {
                    value: i
                }), i;
            }
            throw new Error("cached value already set");
        }
    };
}

function tf(e) {
    return e == null;
}

function ef(e) {
    const i = e.startsWith("^") ? 1 : 0,
        r = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(i, r);
}
var Rv = /* @__PURE__ */ Symbol("evaluating");

function Ut(e, i, r) {
    let u;
    Object.defineProperty(e, i, {
        get() {
            if (u !== Rv)
                return u === void 0 && (u = Rv, u = r()), u;
        },
        set(c) {
            Object.defineProperty(e, i, {
                value: c
            });
        },
        configurable: !0
    });
}

function qa(e, i, r) {
    Object.defineProperty(e, i, {
        value: r,
        writable: !0,
        enumerable: !0,
        configurable: !0
    });
}

function Va(...e) {
    const i = {};
    for (const r of e) Object.assign(i, Object.getOwnPropertyDescriptors(r));
    return Object.defineProperties({}, i);
}

function Nv(e) {
    return JSON.stringify(e);
}
var eg = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};

function wu(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
var w_ = Js(() => {
    if (typeof navigator < "u" && navigator ? .userAgent ? .includes("Cloudflare")) return !1;
    try {
        return new Function(""), !0;
    } catch {
        return !1;
    }
});

function jl(e) {
    if (wu(e) === !1) return !1;
    const i = e.constructor;
    if (i === void 0) return !0;
    const r = i.prototype;
    return !(wu(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}

function ng(e) {
    return jl(e) ? { ...e
    } : Array.isArray(e) ? [...e] : e;
}
var O_ = /* @__PURE__ */ new Set([
    "string",
    "number",
    "symbol"
]);

function xu(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function ha(e, i, r) {
    const u = new e._zod.constr(i ? ? e._zod.def);
    return (!i || r ? .parent) && (u._zod.parent = e), u;
}

function ct(e) {
    const i = e;
    if (!i) return {};
    if (typeof i == "string") return {
        error: () => i
    };
    if (i ? .message !== void 0) {
        if (i ? .error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
        i.error = i.message;
    }
    return delete i.message, typeof i.error == "string" ? {
        ...i,
        error: () => i.error
    } : i;
}

function C_(e) {
    return Object.keys(e).filter((i) => e[i]._zod.optin === "optional" && e[i]._zod.optout === "optional");
}
var p3 = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};

function D_(e, i) {
    const r = e._zod.def;
    return ha(e, Va(e._zod.def, {
        get shape() {
            const u = {};
            for (const c in i) {
                if (!(c in r.shape)) throw new Error(`Unrecognized key: "${c}"`);
                i[c] && (u[c] = r.shape[c]);
            }
            return qa(this, "shape", u), u;
        },
        checks: []
    }));
}

function z_(e, i) {
    const r = e._zod.def;
    return ha(e, Va(e._zod.def, {
        get shape() {
            const u = { ...e._zod.def.shape
            };
            for (const c in i) {
                if (!(c in r.shape)) throw new Error(`Unrecognized key: "${c}"`);
                i[c] && delete u[c];
            }
            return qa(this, "shape", u), u;
        },
        checks: []
    }));
}

function R_(e, i) {
    if (!jl(i)) throw new Error("Invalid input to extend: expected a plain object");
    const r = e._zod.def.checks;
    if (r && r.length > 0) throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
    return ha(e, Va(e._zod.def, {
        get shape() {
            const u = {
                ...e._zod.def.shape,
                ...i
            };
            return qa(this, "shape", u), u;
        },
        checks: []
    }));
}

function N_(e, i) {
    if (!jl(i)) throw new Error("Invalid input to safeExtend: expected a plain object");
    return ha(e, {
        ...e._zod.def,
        get shape() {
            const r = {
                ...e._zod.def.shape,
                ...i
            };
            return qa(this, "shape", r), r;
        },
        checks: e._zod.def.checks
    });
}

function M_(e, i) {
    return ha(e, Va(e._zod.def, {
        get shape() {
            const r = {
                ...e._zod.def.shape,
                ...i._zod.def.shape
            };
            return qa(this, "shape", r), r;
        },
        get catchall() {
            return i._zod.def.catchall;
        },
        checks: []
    }));
}

function H_(e, i, r) {
    return ha(i, Va(i._zod.def, {
        get shape() {
            const u = i._zod.def.shape,
                c = { ...u
                };
            if (r)
                for (const f in r) {
                    if (!(f in u)) throw new Error(`Unrecognized key: "${f}"`);
                    r[f] && (c[f] = e ? new e({
                        type: "optional",
                        innerType: u[f]
                    }) : u[f]);
                }
            else
                for (const f in u) c[f] = e ? new e({
                    type: "optional",
                    innerType: u[f]
                }) : u[f];
            return qa(this, "shape", c), c;
        },
        checks: []
    }));
}

function x_(e, i, r) {
    return ha(i, Va(i._zod.def, {
        get shape() {
            const u = i._zod.def.shape,
                c = { ...u
                };
            if (r)
                for (const f in r) {
                    if (!(f in c)) throw new Error(`Unrecognized key: "${f}"`);
                    r[f] && (c[f] = new e({
                        type: "nonoptional",
                        innerType: u[f]
                    }));
                }
            else
                for (const f in u) c[f] = new e({
                    type: "nonoptional",
                    innerType: u[f]
                });
            return qa(this, "shape", c), c;
        },
        checks: []
    }));
}

function Mi(e, i = 0) {
    if (e.aborted === !0) return !0;
    for (let r = i; r < e.issues.length; r++)
        if (e.issues[r] ? .continue !== !0) return !0;
    return !1;
}

function ag(e, i) {
    return i.map((r) => {
        var u;
        return (u = r).path ? ? (u.path = []), r.path.unshift(e), r;
    });
}

function hu(e) {
    return typeof e == "string" ? e : e ? .message;
}

function Xa(e, i, r) {
    const u = {
        ...e,
        path: e.path ? ? []
    };
    return e.message || (u.message = hu(e.inst ? ._zod.def ? .error ? .(e)) ? ? hu(i ? .error ? .(e)) ? ? hu(r.customError ? .(e)) ? ? hu(r.localeError ? .(e)) ? ? "Invalid input"), delete u.inst, delete u.continue, i ? .reportInput || delete u.input, u;
}

function nf(e) {
    return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}

function Zl(...e) {
    const [i, r, u] = e;
    return typeof i == "string" ? {
        message: i,
        code: "custom",
        input: r,
        inst: u
    } : { ...i
    };
}
var ig = (e, i) => {
        e.name = "$ZodError", Object.defineProperty(e, "_zod", {
            value: e._zod,
            enumerable: !1
        }), Object.defineProperty(e, "issues", {
            value: i,
            enumerable: !1
        }), e.message = JSON.stringify(i, xs, 2), Object.defineProperty(e, "toString", {
            value: () => e.message,
            enumerable: !1
        });
    },
    lg = $("$ZodError", ig),
    rg = $("$ZodError", ig, {
        Parent: Error
    });

function L_(e, i = (r) => r.message) {
    const r = {},
        u = [];
    for (const c of e.issues) c.path.length > 0 ? (r[c.path[0]] = r[c.path[0]] || [], r[c.path[0]].push(i(c))) : u.push(i(c));
    return {
        formErrors: u,
        fieldErrors: r
    };
}

function U_(e, i = (r) => r.message) {
    const r = {
            _errors: []
        },
        u = (c) => {
            for (const f of c.issues)
                if (f.code === "invalid_union" && f.errors.length) f.errors.map((d) => u({
                    issues: d
                }));
                else if (f.code === "invalid_key") u({
                issues: f.issues
            });
            else if (f.code === "invalid_element") u({
                issues: f.issues
            });
            else if (f.path.length === 0) r._errors.push(i(f));
            else {
                let d = r,
                    m = 0;
                for (; m < f.path.length;) {
                    const p = f.path[m];
                    m !== f.path.length - 1 ? d[p] = d[p] || {
                        _errors: []
                    } : (d[p] = d[p] || {
                        _errors: []
                    }, d[p]._errors.push(i(f))), d = d[p], m++;
                }
            }
        };
    return u(e), r;
}
var af = (e) => (i, r, u, c) => {
    const f = u ? Object.assign(u, {
            async: !1
        }) : {
            async: !1
        },
        d = i._zod.run({
            value: r,
            issues: []
        }, f);
    if (d instanceof Promise) throw new xi();
    if (d.issues.length) {
        const m = new(c ? .Err ? ? e)(d.issues.map((p) => Xa(p, f, Ga())));
        throw eg(m, c ? .callee), m;
    }
    return d.value;
};
var lf = (e) => async (i, r, u, c) => {
    const f = u ? Object.assign(u, {
        async: !0
    }) : {
        async: !0
    };
    let d = i._zod.run({
        value: r,
        issues: []
    }, f);
    if (d instanceof Promise && (d = await d), d.issues.length) {
        const m = new(c ? .Err ? ? e)(d.issues.map((p) => Xa(p, f, Ga())));
        throw eg(m, c ? .callee), m;
    }
    return d.value;
};
var Lu = (e) => (i, r, u) => {
        const c = u ? {
                ...u,
                async: !1
            } : {
                async: !1
            },
            f = i._zod.run({
                value: r,
                issues: []
            }, c);
        if (f instanceof Promise) throw new xi();
        return f.issues.length ? {
            success: !1,
            error: new(e ? ? lg)(f.issues.map((d) => Xa(d, c, Ga())))
        } : {
            success: !0,
            data: f.value
        };
    },
    B_ = /* @__PURE__ */ Lu(rg),
    Uu = (e) => async (i, r, u) => {
        const c = u ? Object.assign(u, {
            async: !0
        }) : {
            async: !0
        };
        let f = i._zod.run({
            value: r,
            issues: []
        }, c);
        return f instanceof Promise && (f = await f), f.issues.length ? {
            success: !1,
            error: new e(f.issues.map((d) => Xa(d, c, Ga())))
        } : {
            success: !0,
            data: f.value
        };
    },
    j_ = /* @__PURE__ */ Uu(rg),
    Z_ = (e) => (i, r, u) => {
        const c = u ? Object.assign(u, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return af(e)(i, r, c);
    };
var G_ = (e) => (i, r, u) => af(e)(i, r, u);
var X_ = (e) => async (i, r, u) => {
    const c = u ? Object.assign(u, {
        direction: "backward"
    }) : {
        direction: "backward"
    };
    return lf(e)(i, r, c);
};
var P_ = (e) => async (i, r, u) => lf(e)(i, r, u);
var Y_ = (e) => (i, r, u) => {
    const c = u ? Object.assign(u, {
        direction: "backward"
    }) : {
        direction: "backward"
    };
    return Lu(e)(i, r, c);
};
var q_ = (e) => (i, r, u) => Lu(e)(i, r, u);
var V_ = (e) => async (i, r, u) => {
    const c = u ? Object.assign(u, {
        direction: "backward"
    }) : {
        direction: "backward"
    };
    return Uu(e)(i, r, c);
};
var $_ = (e) => async (i, r, u) => Uu(e)(i, r, u);
var k_ = /^[cC][^\s-]{8,}$/,
    I_ = /^[0-9a-z]+$/,
    Q_ = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
    F_ = /^[0-9a-vA-V]{20}$/,
    K_ = /^[A-Za-z0-9]{27}$/,
    W_ = /^[a-zA-Z0-9_-]{21}$/,
    J_ = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    tE = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    Mv = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    eE = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    nE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";

function aE() {
    return new RegExp(nE, "u");
}
var iE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    lE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    rE = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    uE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    oE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    ug = /^[A-Za-z0-9_-]*$/,
    cE = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
    sE = /^\+(?:[0-9]){6,14}[0-9]$/,
    og = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    fE = /* @__PURE__ */ new RegExp(`^${og}$`);

function cg(e) {
    const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof e.precision == "number" ? e.precision === -1 ? `${i}` : e.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${e.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}

function dE(e) {
    return new RegExp(`^${cg(e)}$`);
}

function hE(e) {
    const i = cg({
            precision: e.precision
        }),
        r = ["Z"];
    e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const u = `${i}(?:${r.join("|")})`;
    return new RegExp(`^${og}T(?:${u})$`);
}
var mE = (e) => {
        const i = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
        return new RegExp(`^${i}$`);
    },
    vE = /^(?:true|false)$/i,
    pE = /^[^A-Z]*$/,
    gE = /^[^a-z]*$/,
    hn = /* @__PURE__ */ $("$ZodCheck", (e, i) => {
        var r;
        e._zod ? ? (e._zod = {}), e._zod.def = i, (r = e._zod).onattach ? ? (r.onattach = []);
    }),
    yE = /* @__PURE__ */ $("$ZodCheckMaxLength", (e, i) => {
        var r;
        hn.init(e, i), (r = e._zod.def).when ? ? (r.when = (u) => {
            const c = u.value;
            return !tf(c) && c.length !== void 0;
        }), e._zod.onattach.push((u) => {
            const c = u._zod.bag.maximum ? ? Number.POSITIVE_INFINITY;
            i.maximum < c && (u._zod.bag.maximum = i.maximum);
        }), e._zod.check = (u) => {
            const c = u.value;
            if (c.length <= i.maximum) return;
            const f = nf(c);
            u.issues.push({
                origin: f,
                code: "too_big",
                maximum: i.maximum,
                inclusive: !0,
                input: c,
                inst: e,
                continue: !i.abort
            });
        };
    }),
    bE = /* @__PURE__ */ $("$ZodCheckMinLength", (e, i) => {
        var r;
        hn.init(e, i), (r = e._zod.def).when ? ? (r.when = (u) => {
            const c = u.value;
            return !tf(c) && c.length !== void 0;
        }), e._zod.onattach.push((u) => {
            const c = u._zod.bag.minimum ? ? Number.NEGATIVE_INFINITY;
            i.minimum > c && (u._zod.bag.minimum = i.minimum);
        }), e._zod.check = (u) => {
            const c = u.value;
            if (c.length >= i.minimum) return;
            const f = nf(c);
            u.issues.push({
                origin: f,
                code: "too_small",
                minimum: i.minimum,
                inclusive: !0,
                input: c,
                inst: e,
                continue: !i.abort
            });
        };
    }),
    _E = /* @__PURE__ */ $("$ZodCheckLengthEquals", (e, i) => {
        var r;
        hn.init(e, i), (r = e._zod.def).when ? ? (r.when = (u) => {
            const c = u.value;
            return !tf(c) && c.length !== void 0;
        }), e._zod.onattach.push((u) => {
            const c = u._zod.bag;
            c.minimum = i.length, c.maximum = i.length, c.length = i.length;
        }), e._zod.check = (u) => {
            const c = u.value,
                f = c.length;
            if (f === i.length) return;
            const d = nf(c),
                m = f > i.length;
            u.issues.push({
                origin: d,
                ...m ? {
                    code: "too_big",
                    maximum: i.length
                } : {
                    code: "too_small",
                    minimum: i.length
                },
                inclusive: !0,
                exact: !0,
                input: u.value,
                inst: e,
                continue: !i.abort
            });
        };
    }),
    Bu = /* @__PURE__ */ $("$ZodCheckStringFormat", (e, i) => {
        var r, u;
        hn.init(e, i), e._zod.onattach.push((c) => {
            const f = c._zod.bag;
            f.format = i.format, i.pattern && (f.patterns ? ? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(i.pattern));
        }), i.pattern ? (r = e._zod).check ? ? (r.check = (c) => {
            i.pattern.lastIndex = 0, !i.pattern.test(c.value) && c.issues.push({
                origin: "string",
                code: "invalid_format",
                format: i.format,
                input: c.value,
                ...i.pattern ? {
                    pattern: i.pattern.toString()
                } : {},
                inst: e,
                continue: !i.abort
            });
        }) : (u = e._zod).check ? ? (u.check = () => {});
    }),
    EE = /* @__PURE__ */ $("$ZodCheckRegex", (e, i) => {
        Bu.init(e, i), e._zod.check = (r) => {
            i.pattern.lastIndex = 0, !i.pattern.test(r.value) && r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "regex",
                input: r.value,
                pattern: i.pattern.toString(),
                inst: e,
                continue: !i.abort
            });
        };
    }),
    SE = /* @__PURE__ */ $("$ZodCheckLowerCase", (e, i) => {
        i.pattern ? ? (i.pattern = pE), Bu.init(e, i);
    }),
    TE = /* @__PURE__ */ $("$ZodCheckUpperCase", (e, i) => {
        i.pattern ? ? (i.pattern = gE), Bu.init(e, i);
    }),
    AE = /* @__PURE__ */ $("$ZodCheckIncludes", (e, i) => {
        hn.init(e, i);
        const r = xu(i.includes),
            u = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${r}` : r);
        i.pattern = u, e._zod.onattach.push((c) => {
            const f = c._zod.bag;
            f.patterns ? ? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(u);
        }), e._zod.check = (c) => {
            c.value.includes(i.includes, i.position) || c.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "includes",
                includes: i.includes,
                input: c.value,
                inst: e,
                continue: !i.abort
            });
        };
    }),
    wE = /* @__PURE__ */ $("$ZodCheckStartsWith", (e, i) => {
        hn.init(e, i);
        const r = new RegExp(`^${xu(i.prefix)}.*`);
        i.pattern ? ? (i.pattern = r), e._zod.onattach.push((u) => {
            const c = u._zod.bag;
            c.patterns ? ? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(r);
        }), e._zod.check = (u) => {
            u.value.startsWith(i.prefix) || u.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "starts_with",
                prefix: i.prefix,
                input: u.value,
                inst: e,
                continue: !i.abort
            });
        };
    }),
    OE = /* @__PURE__ */ $("$ZodCheckEndsWith", (e, i) => {
        hn.init(e, i);
        const r = new RegExp(`.*${xu(i.suffix)}$`);
        i.pattern ? ? (i.pattern = r), e._zod.onattach.push((u) => {
            const c = u._zod.bag;
            c.patterns ? ? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(r);
        }), e._zod.check = (u) => {
            u.value.endsWith(i.suffix) || u.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "ends_with",
                suffix: i.suffix,
                input: u.value,
                inst: e,
                continue: !i.abort
            });
        };
    }),
    CE = /* @__PURE__ */ $("$ZodCheckOverwrite", (e, i) => {
        hn.init(e, i), e._zod.check = (r) => {
            r.value = i.tx(r.value);
        };
    }),
    DE = class {
        constructor(e = []) {
            this.content = [], this.indent = 0, this && (this.args = e);
        }
        indented(e) {
            this.indent += 1, e(this), this.indent -= 1;
        }
        write(e) {
            if (typeof e == "function") {
                e(this, {
                    execution: "sync"
                }), e(this, {
                    execution: "async"
                });
                return;
            }
            const i = e.split(`
`).filter((c) => c),
                r = Math.min(...i.map((c) => c.length - c.trimStart().length)),
                u = i.map((c) => c.slice(r)).map((c) => " ".repeat(this.indent * 2) + c);
            for (const c of u) this.content.push(c);
        }
        compile() {
            const e = Function,
                i = this ? .args,
                r = [...(this ? .content ? ? [""]).map((u) => `  ${u}`)];
            return new e(...i, r.join(`
`));
        }
    },
    zE = {
        major: 4,
        minor: 1,
        patch: 12
    },
    Jt = /* @__PURE__ */ $("$ZodType", (e, i) => {
        var r;
        e ? ? (e = {}), e._zod.def = i, e._zod.bag = e._zod.bag || {}, e._zod.version = zE;
        const u = [...e._zod.def.checks ? ? []];
        e._zod.traits.has("$ZodCheck") && u.unshift(e);
        for (const c of u)
            for (const f of c._zod.onattach) f(e);
        if (u.length === 0)
            (r = e._zod).deferred ? ? (r.deferred = []), e._zod.deferred ? .push(() => {
                e._zod.run = e._zod.parse;
            });
        else {
            const c = (d, m, p) => {
                    let g = Mi(d),
                        v;
                    for (const b of m) {
                        if (b._zod.def.when) {
                            if (!b._zod.def.when(d)) continue;
                        } else if (g) continue;
                        const _ = d.issues.length,
                            T = b._zod.check(d);
                        if (T instanceof Promise && p ? .async === !1) throw new xi();
                        if (v || T instanceof Promise) v = (v ? ? Promise.resolve()).then(async () => {
                            await T, d.issues.length !== _ && (g || (g = Mi(d, _)));
                        });
                        else {
                            if (d.issues.length === _) continue;
                            g || (g = Mi(d, _));
                        }
                    }
                    return v ? v.then(() => d) : d;
                },
                f = (d, m, p) => {
                    if (Mi(d))
                        return d.aborted = !0, d;
                    const g = c(m, u, p);
                    if (g instanceof Promise) {
                        if (p.async === !1) throw new xi();
                        return g.then((v) => e._zod.parse(v, p));
                    }
                    return e._zod.parse(g, p);
                };
            e._zod.run = (d, m) => {
                if (m.skipChecks) return e._zod.parse(d, m);
                if (m.direction === "backward") {
                    const g = e._zod.parse({
                        value: d.value,
                        issues: []
                    }, {
                        ...m,
                        skipChecks: !0
                    });
                    return g instanceof Promise ? g.then((v) => f(v, d, m)) : f(g, d, m);
                }
                const p = e._zod.parse(d, m);
                if (p instanceof Promise) {
                    if (m.async === !1) throw new xi();
                    return p.then((g) => c(g, u, m));
                }
                return c(p, u, m);
            };
        }
        e["~standard"] = {
            validate: (c) => {
                try {
                    const f = B_(e, c);
                    return f.success ? {
                        value: f.data
                    } : {
                        issues: f.error ? .issues
                    };
                } catch {
                    return j_(e, c).then((d) => d.success ? {
                        value: d.data
                    } : {
                        issues: d.error ? .issues
                    });
                }
            },
            vendor: "zod",
            version: 1
        };
    }),
    rf = /* @__PURE__ */ $("$ZodString", (e, i) => {
        Jt.init(e, i), e._zod.pattern = [...e ? ._zod.bag ? .patterns ? ? []].pop() ? ? mE(e._zod.bag), e._zod.parse = (r, u) => {
            if (i.coerce) try {
                r.value = String(r.value);
            } catch {}
            return typeof r.value == "string" || r.issues.push({
                expected: "string",
                code: "invalid_type",
                input: r.value,
                inst: e
            }), r;
        };
    }),
    Xt = /* @__PURE__ */ $("$ZodStringFormat", (e, i) => {
        Bu.init(e, i), rf.init(e, i);
    }),
    RE = /* @__PURE__ */ $("$ZodGUID", (e, i) => {
        i.pattern ? ? (i.pattern = tE), Xt.init(e, i);
    }),
    NE = /* @__PURE__ */ $("$ZodUUID", (e, i) => {
        if (i.version) {
            const r = {
                v1: 1,
                v2: 2,
                v3: 3,
                v4: 4,
                v5: 5,
                v6: 6,
                v7: 7,
                v8: 8
            }[i.version];
            if (r === void 0) throw new Error(`Invalid UUID version: "${i.version}"`);
            i.pattern ? ? (i.pattern = Mv(r));
        } else i.pattern ? ? (i.pattern = Mv());
        Xt.init(e, i);
    }),
    ME = /* @__PURE__ */ $("$ZodEmail", (e, i) => {
        i.pattern ? ? (i.pattern = eE), Xt.init(e, i);
    }),
    HE = /* @__PURE__ */ $("$ZodURL", (e, i) => {
        Xt.init(e, i), e._zod.check = (r) => {
            try {
                const u = r.value.trim(),
                    c = new URL(u);
                i.hostname && (i.hostname.lastIndex = 0, i.hostname.test(c.hostname) || r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: cE.source,
                    input: r.value,
                    inst: e,
                    continue: !i.abort
                })), i.protocol && (i.protocol.lastIndex = 0, i.protocol.test(c.protocol.endsWith(":") ? c.protocol.slice(0, -1) : c.protocol) || r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: i.protocol.source,
                    input: r.value,
                    inst: e,
                    continue: !i.abort
                })), i.normalize ? r.value = c.href : r.value = u;
                return;
            } catch {
                r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: r.value,
                    inst: e,
                    continue: !i.abort
                });
            }
        };
    }),
    xE = /* @__PURE__ */ $("$ZodEmoji", (e, i) => {
        i.pattern ? ? (i.pattern = aE()), Xt.init(e, i);
    }),
    LE = /* @__PURE__ */ $("$ZodNanoID", (e, i) => {
        i.pattern ? ? (i.pattern = W_), Xt.init(e, i);
    }),
    UE = /* @__PURE__ */ $("$ZodCUID", (e, i) => {
        i.pattern ? ? (i.pattern = k_), Xt.init(e, i);
    }),
    BE = /* @__PURE__ */ $("$ZodCUID2", (e, i) => {
        i.pattern ? ? (i.pattern = I_), Xt.init(e, i);
    }),
    jE = /* @__PURE__ */ $("$ZodULID", (e, i) => {
        i.pattern ? ? (i.pattern = Q_), Xt.init(e, i);
    }),
    ZE = /* @__PURE__ */ $("$ZodXID", (e, i) => {
        i.pattern ? ? (i.pattern = F_), Xt.init(e, i);
    }),
    GE = /* @__PURE__ */ $("$ZodKSUID", (e, i) => {
        i.pattern ? ? (i.pattern = K_), Xt.init(e, i);
    }),
    XE = /* @__PURE__ */ $("$ZodISODateTime", (e, i) => {
        i.pattern ? ? (i.pattern = hE(i)), Xt.init(e, i);
    }),
    PE = /* @__PURE__ */ $("$ZodISODate", (e, i) => {
        i.pattern ? ? (i.pattern = fE), Xt.init(e, i);
    }),
    YE = /* @__PURE__ */ $("$ZodISOTime", (e, i) => {
        i.pattern ? ? (i.pattern = dE(i)), Xt.init(e, i);
    }),
    qE = /* @__PURE__ */ $("$ZodISODuration", (e, i) => {
        i.pattern ? ? (i.pattern = J_), Xt.init(e, i);
    }),
    VE = /* @__PURE__ */ $("$ZodIPv4", (e, i) => {
        i.pattern ? ? (i.pattern = iE), Xt.init(e, i), e._zod.onattach.push((r) => {
            const u = r._zod.bag;
            u.format = "ipv4";
        });
    }),
    $E = /* @__PURE__ */ $("$ZodIPv6", (e, i) => {
        i.pattern ? ? (i.pattern = lE), Xt.init(e, i), e._zod.onattach.push((r) => {
            const u = r._zod.bag;
            u.format = "ipv6";
        }), e._zod.check = (r) => {
            try {
                new URL(`http://[${r.value}]`);
            } catch {
                r.issues.push({
                    code: "invalid_format",
                    format: "ipv6",
                    input: r.value,
                    inst: e,
                    continue: !i.abort
                });
            }
        };
    }),
    kE = /* @__PURE__ */ $("$ZodCIDRv4", (e, i) => {
        i.pattern ? ? (i.pattern = rE), Xt.init(e, i);
    }),
    IE = /* @__PURE__ */ $("$ZodCIDRv6", (e, i) => {
        i.pattern ? ? (i.pattern = uE), Xt.init(e, i), e._zod.check = (r) => {
            const u = r.value.split("/");
            try {
                if (u.length !== 2) throw new Error();
                const [c, f] = u;
                if (!f) throw new Error();
                const d = Number(f);
                if (`${d}` !== f) throw new Error();
                if (d < 0 || d > 128) throw new Error();
                new URL(`http://[${c}]`);
            } catch {
                r.issues.push({
                    code: "invalid_format",
                    format: "cidrv6",
                    input: r.value,
                    inst: e,
                    continue: !i.abort
                });
            }
        };
    });

function sg(e) {
    if (e === "") return !0;
    if (e.length % 4 !== 0) return !1;
    try {
        return atob(e), !0;
    } catch {
        return !1;
    }
}
var QE = /* @__PURE__ */ $("$ZodBase64", (e, i) => {
    i.pattern ? ? (i.pattern = oE), Xt.init(e, i), e._zod.onattach.push((r) => {
        r._zod.bag.contentEncoding = "base64";
    }), e._zod.check = (r) => {
        sg(r.value) || r.issues.push({
            code: "invalid_format",
            format: "base64",
            input: r.value,
            inst: e,
            continue: !i.abort
        });
    };
});

function FE(e) {
    if (!ug.test(e)) return !1;
    const i = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/");
    return sg(i.padEnd(Math.ceil(i.length / 4) * 4, "="));
}
var KE = /* @__PURE__ */ $("$ZodBase64URL", (e, i) => {
        i.pattern ? ? (i.pattern = ug), Xt.init(e, i), e._zod.onattach.push((r) => {
            r._zod.bag.contentEncoding = "base64url";
        }), e._zod.check = (r) => {
            FE(r.value) || r.issues.push({
                code: "invalid_format",
                format: "base64url",
                input: r.value,
                inst: e,
                continue: !i.abort
            });
        };
    }),
    WE = /* @__PURE__ */ $("$ZodE164", (e, i) => {
        i.pattern ? ? (i.pattern = sE), Xt.init(e, i);
    });

function JE(e, i = null) {
    try {
        const r = e.split(".");
        if (r.length !== 3) return !1;
        const [u] = r;
        if (!u) return !1;
        const c = JSON.parse(atob(u));
        return !("typ" in c && c ? .typ !== "JWT" || !c.alg || i && (!("alg" in c) || c.alg !== i));
    } catch {
        return !1;
    }
}
var tS = /* @__PURE__ */ $("$ZodJWT", (e, i) => {
        Xt.init(e, i), e._zod.check = (r) => {
            JE(r.value, i.alg) || r.issues.push({
                code: "invalid_format",
                format: "jwt",
                input: r.value,
                inst: e,
                continue: !i.abort
            });
        };
    }),
    eS = /* @__PURE__ */ $("$ZodBoolean", (e, i) => {
        Jt.init(e, i), e._zod.pattern = vE, e._zod.parse = (r, u) => {
            if (i.coerce) try {
                r.value = !!r.value;
            } catch {}
            const c = r.value;
            return typeof c == "boolean" || r.issues.push({
                expected: "boolean",
                code: "invalid_type",
                input: c,
                inst: e
            }), r;
        };
    }),
    nS = /* @__PURE__ */ $("$ZodUnknown", (e, i) => {
        Jt.init(e, i), e._zod.parse = (r) => r;
    }),
    aS = /* @__PURE__ */ $("$ZodNever", (e, i) => {
        Jt.init(e, i), e._zod.parse = (r, u) => (r.issues.push({
            expected: "never",
            code: "invalid_type",
            input: r.value,
            inst: e
        }), r);
    });

function Hv(e, i, r) {
    e.issues.length && i.issues.push(...ag(r, e.issues)), i.value[r] = e.value;
}
var iS = /* @__PURE__ */ $("$ZodArray", (e, i) => {
    Jt.init(e, i), e._zod.parse = (r, u) => {
        const c = r.value;
        if (!Array.isArray(c))
            return r.issues.push({
                expected: "array",
                code: "invalid_type",
                input: c,
                inst: e
            }), r;
        r.value = Array(c.length);
        const f = [];
        for (let d = 0; d < c.length; d++) {
            const m = c[d],
                p = i.element._zod.run({
                    value: m,
                    issues: []
                }, u);
            p instanceof Promise ? f.push(p.then((g) => Hv(g, r, d))) : Hv(p, r, d);
        }
        return f.length ? Promise.all(f).then(() => r) : r;
    };
});

function Ou(e, i, r, u) {
    e.issues.length && i.issues.push(...ag(r, e.issues)), e.value === void 0 ? r in u && (i.value[r] = void 0) : i.value[r] = e.value;
}

function fg(e) {
    const i = Object.keys(e.shape);
    for (const u of i)
        if (!e.shape ? .[u] ? ._zod ? .traits ? .has("$ZodType")) throw new Error(`Invalid element at key "${u}": expected a Zod schema`);
    const r = C_(e.shape);
    return {
        ...e,
        keys: i,
        keySet: new Set(i),
        numKeys: i.length,
        optionalKeys: new Set(r)
    };
}

function dg(e, i, r, u, c, f) {
    const d = [],
        m = c.keySet,
        p = c.catchall._zod,
        g = p.def.type;
    for (const v of Object.keys(i)) {
        if (m.has(v)) continue;
        if (g === "never") {
            d.push(v);
            continue;
        }
        const b = p.run({
            value: i[v],
            issues: []
        }, u);
        b instanceof Promise ? e.push(b.then((_) => Ou(_, r, v, i))) : Ou(b, r, v, i);
    }
    return d.length && r.issues.push({
        code: "unrecognized_keys",
        keys: d,
        input: i,
        inst: f
    }), e.length ? Promise.all(e).then(() => r) : r;
}
var lS = /* @__PURE__ */ $("$ZodObject", (e, i) => {
        if (Jt.init(e, i), !Object.getOwnPropertyDescriptor(i, "shape") ? .get) {
            const d = i.shape;
            Object.defineProperty(i, "shape", {
                get: () => {
                    const m = { ...d
                    };
                    return Object.defineProperty(i, "shape", {
                        value: m
                    }), m;
                }
            });
        }
        const r = Js(() => fg(i));
        Ut(e._zod, "propValues", () => {
            const d = i.shape,
                m = {};
            for (const p in d) {
                const g = d[p]._zod;
                if (g.values) {
                    m[p] ? ? (m[p] = /* @__PURE__ */ new Set());
                    for (const v of g.values) m[p].add(v);
                }
            }
            return m;
        });
        const u = wu,
            c = i.catchall;
        let f;
        e._zod.parse = (d, m) => {
            f ? ? (f = r.value);
            const p = d.value;
            if (!u(p))
                return d.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: p,
                    inst: e
                }), d;
            d.value = {};
            const g = [],
                v = f.shape;
            for (const b of f.keys) {
                const _ = v[b]._zod.run({
                    value: p[b],
                    issues: []
                }, m);
                _ instanceof Promise ? g.push(_.then((T) => Ou(T, d, b, p))) : Ou(_, d, b, p);
            }
            return c ? dg(g, p, d, m, r.value, e) : g.length ? Promise.all(g).then(() => d) : d;
        };
    }),
    rS = /* @__PURE__ */ $("$ZodObjectJIT", (e, i) => {
        lS.init(e, i);
        const r = e._zod.parse,
            u = Js(() => fg(i)),
            c = (_) => {
                const T = new DE([
                        "shape",
                        "payload",
                        "ctx"
                    ]),
                    O = u.value,
                    D = (k) => {
                        const L = Nv(k);
                        return `shape[${L}]._zod.run({ value: input[${L}], issues: [] }, ctx)`;
                    };
                T.write("const input = payload.value;");
                const x = /* @__PURE__ */ Object.create(null);
                let U = 0;
                for (const k of O.keys) x[k] = `key_${U++}`;
                T.write("const newResult = {};");
                for (const k of O.keys) {
                    const L = x[k],
                        q = Nv(k);
                    T.write(`const ${L} = ${D(k)};`), T.write(`
        if (${L}.issues.length) {
          payload.issues = payload.issues.concat(${L}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${q}, ...iss.path] : [${q}]
          })));
        }
        
        
        if (${L}.value === undefined) {
          if (${q} in input) {
            newResult[${q}] = undefined;
          }
        } else {
          newResult[${q}] = ${L}.value;
        }
        
      `);
                }
                T.write("payload.value = newResult;"), T.write("return payload;");
                const G = T.compile();
                return (k, L) => G(_, k, L);
            };
        let f;
        const d = wu,
            m = !Hs.jitless,
            g = m && w_.value,
            v = i.catchall;
        let b;
        e._zod.parse = (_, T) => {
            b ? ? (b = u.value);
            const O = _.value;
            return d(O) ? m && g && T ? .async === !1 && T.jitless !== !0 ? (f || (f = c(i.shape)), _ = f(_, T), v ? dg([], O, _, T, b, e) : _) : r(_, T) : (_.issues.push({
                expected: "object",
                code: "invalid_type",
                input: O,
                inst: e
            }), _);
        };
    });

function xv(e, i, r, u) {
    for (const f of e)
        if (f.issues.length === 0)
            return i.value = f.value, i;
    const c = e.filter((f) => !Mi(f));
    return c.length === 1 ? (i.value = c[0].value, c[0]) : (i.issues.push({
        code: "invalid_union",
        input: i.value,
        inst: r,
        errors: e.map((f) => f.issues.map((d) => Xa(d, u, Ga())))
    }), i);
}
var uS = /* @__PURE__ */ $("$ZodUnion", (e, i) => {
        Jt.init(e, i), Ut(e._zod, "optin", () => i.options.some((c) => c._zod.optin === "optional") ? "optional" : void 0), Ut(e._zod, "optout", () => i.options.some((c) => c._zod.optout === "optional") ? "optional" : void 0), Ut(e._zod, "values", () => {
            if (i.options.every((c) => c._zod.values)) return new Set(i.options.flatMap((c) => Array.from(c._zod.values)));
        }), Ut(e._zod, "pattern", () => {
            if (i.options.every((c) => c._zod.pattern)) {
                const c = i.options.map((f) => f._zod.pattern);
                return new RegExp(`^(${c.map((f) => ef(f.source)).join("|")})$`);
            }
        });
        const r = i.options.length === 1,
            u = i.options[0]._zod.run;
        e._zod.parse = (c, f) => {
            if (r) return u(c, f);
            let d = !1;
            const m = [];
            for (const p of i.options) {
                const g = p._zod.run({
                    value: c.value,
                    issues: []
                }, f);
                if (g instanceof Promise)
                    m.push(g), d = !0;
                else {
                    if (g.issues.length === 0) return g;
                    m.push(g);
                }
            }
            return d ? Promise.all(m).then((p) => xv(p, c, e, f)) : xv(m, c, e, f);
        };
    }),
    oS = /* @__PURE__ */ $("$ZodIntersection", (e, i) => {
        Jt.init(e, i), e._zod.parse = (r, u) => {
            const c = r.value,
                f = i.left._zod.run({
                    value: c,
                    issues: []
                }, u),
                d = i.right._zod.run({
                    value: c,
                    issues: []
                }, u);
            return f instanceof Promise || d instanceof Promise ? Promise.all([f, d]).then(([m, p]) => Lv(r, m, p)) : Lv(r, f, d);
        };
    });

function Ls(e, i) {
    if (e === i) return {
        valid: !0,
        data: e
    };
    if (e instanceof Date && i instanceof Date && +e == +i) return {
        valid: !0,
        data: e
    };
    if (jl(e) && jl(i)) {
        const r = Object.keys(i),
            u = Object.keys(e).filter((f) => r.indexOf(f) !== -1),
            c = {
                ...e,
                ...i
            };
        for (const f of u) {
            const d = Ls(e[f], i[f]);
            if (!d.valid) return {
                valid: !1,
                mergeErrorPath: [f, ...d.mergeErrorPath]
            };
            c[f] = d.data;
        }
        return {
            valid: !0,
            data: c
        };
    }
    if (Array.isArray(e) && Array.isArray(i)) {
        if (e.length !== i.length) return {
            valid: !1,
            mergeErrorPath: []
        };
        const r = [];
        for (let u = 0; u < e.length; u++) {
            const c = e[u],
                f = i[u],
                d = Ls(c, f);
            if (!d.valid) return {
                valid: !1,
                mergeErrorPath: [u, ...d.mergeErrorPath]
            };
            r.push(d.data);
        }
        return {
            valid: !0,
            data: r
        };
    }
    return {
        valid: !1,
        mergeErrorPath: []
    };
}

function Lv(e, i, r) {
    if (i.issues.length && e.issues.push(...i.issues), r.issues.length && e.issues.push(...r.issues), Mi(e)) return e;
    const u = Ls(i.value, r.value);
    if (!u.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(u.mergeErrorPath)}`);
    return e.value = u.data, e;
}
var cS = /* @__PURE__ */ $("$ZodEnum", (e, i) => {
        Jt.init(e, i);
        const r = A_(i.entries),
            u = new Set(r);
        e._zod.values = u, e._zod.pattern = new RegExp(`^(${r.filter((c) => O_.has(typeof c)).map((c) => typeof c == "string" ? xu(c) : c.toString()).join("|")})$`), e._zod.parse = (c, f) => {
            const d = c.value;
            return u.has(d) || c.issues.push({
                code: "invalid_value",
                values: r,
                input: d,
                inst: e
            }), c;
        };
    }),
    sS = /* @__PURE__ */ $("$ZodTransform", (e, i) => {
        Jt.init(e, i), e._zod.parse = (r, u) => {
            if (u.direction === "backward") throw new tg(e.constructor.name);
            const c = i.transform(r.value, r);
            if (u.async) return (c instanceof Promise ? c : Promise.resolve(c)).then((f) => (r.value = f, r));
            if (c instanceof Promise) throw new xi();
            return r.value = c, r;
        };
    });

function Uv(e, i) {
    return e.issues.length && i === void 0 ? {
        issues: [],
        value: void 0
    } : e;
}
var fS = /* @__PURE__ */ $("$ZodOptional", (e, i) => {
        Jt.init(e, i), e._zod.optin = "optional", e._zod.optout = "optional", Ut(e._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), Ut(e._zod, "pattern", () => {
            const r = i.innerType._zod.pattern;
            return r ? new RegExp(`^(${ef(r.source)})?$`) : void 0;
        }), e._zod.parse = (r, u) => {
            if (i.innerType._zod.optin === "optional") {
                const c = i.innerType._zod.run(r, u);
                return c instanceof Promise ? c.then((f) => Uv(f, r.value)) : Uv(c, r.value);
            }
            return r.value === void 0 ? r : i.innerType._zod.run(r, u);
        };
    }),
    dS = /* @__PURE__ */ $("$ZodNullable", (e, i) => {
        Jt.init(e, i), Ut(e._zod, "optin", () => i.innerType._zod.optin), Ut(e._zod, "optout", () => i.innerType._zod.optout), Ut(e._zod, "pattern", () => {
            const r = i.innerType._zod.pattern;
            return r ? new RegExp(`^(${ef(r.source)}|null)$`) : void 0;
        }), Ut(e._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), e._zod.parse = (r, u) => r.value === null ? r : i.innerType._zod.run(r, u);
    }),
    hS = /* @__PURE__ */ $("$ZodDefault", (e, i) => {
        Jt.init(e, i), e._zod.optin = "optional", Ut(e._zod, "values", () => i.innerType._zod.values), e._zod.parse = (r, u) => {
            if (u.direction === "backward") return i.innerType._zod.run(r, u);
            if (r.value === void 0)
                return r.value = i.defaultValue, r;
            const c = i.innerType._zod.run(r, u);
            return c instanceof Promise ? c.then((f) => Bv(f, i)) : Bv(c, i);
        };
    });

function Bv(e, i) {
    return e.value === void 0 && (e.value = i.defaultValue), e;
}
var mS = /* @__PURE__ */ $("$ZodPrefault", (e, i) => {
        Jt.init(e, i), e._zod.optin = "optional", Ut(e._zod, "values", () => i.innerType._zod.values), e._zod.parse = (r, u) => (u.direction === "backward" || r.value === void 0 && (r.value = i.defaultValue), i.innerType._zod.run(r, u));
    }),
    vS = /* @__PURE__ */ $("$ZodNonOptional", (e, i) => {
        Jt.init(e, i), Ut(e._zod, "values", () => {
            const r = i.innerType._zod.values;
            return r ? new Set([...r].filter((u) => u !== void 0)) : void 0;
        }), e._zod.parse = (r, u) => {
            const c = i.innerType._zod.run(r, u);
            return c instanceof Promise ? c.then((f) => jv(f, e)) : jv(c, e);
        };
    });

function jv(e, i) {
    return !e.issues.length && e.value === void 0 && e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: i
    }), e;
}
var pS = /* @__PURE__ */ $("$ZodCatch", (e, i) => {
        Jt.init(e, i), Ut(e._zod, "optin", () => i.innerType._zod.optin), Ut(e._zod, "optout", () => i.innerType._zod.optout), Ut(e._zod, "values", () => i.innerType._zod.values), e._zod.parse = (r, u) => {
            if (u.direction === "backward") return i.innerType._zod.run(r, u);
            const c = i.innerType._zod.run(r, u);
            return c instanceof Promise ? c.then((f) => (r.value = f.value, f.issues.length && (r.value = i.catchValue({
                ...r,
                error: {
                    issues: f.issues.map((d) => Xa(d, u, Ga()))
                },
                input: r.value
            }), r.issues = []), r)) : (r.value = c.value, c.issues.length && (r.value = i.catchValue({
                ...r,
                error: {
                    issues: c.issues.map((f) => Xa(f, u, Ga()))
                },
                input: r.value
            }), r.issues = []), r);
        };
    }),
    gS = /* @__PURE__ */ $("$ZodPipe", (e, i) => {
        Jt.init(e, i), Ut(e._zod, "values", () => i.in._zod.values), Ut(e._zod, "optin", () => i.in._zod.optin), Ut(e._zod, "optout", () => i.out._zod.optout), Ut(e._zod, "propValues", () => i.in._zod.propValues), e._zod.parse = (r, u) => {
            if (u.direction === "backward") {
                const f = i.out._zod.run(r, u);
                return f instanceof Promise ? f.then((d) => mu(d, i.in, u)) : mu(f, i.in, u);
            }
            const c = i.in._zod.run(r, u);
            return c instanceof Promise ? c.then((f) => mu(f, i.out, u)) : mu(c, i.out, u);
        };
    });

function mu(e, i, r) {
    return e.issues.length ? (e.aborted = !0, e) : i._zod.run({
        value: e.value,
        issues: e.issues
    }, r);
}
var yS = /* @__PURE__ */ $("$ZodReadonly", (e, i) => {
    Jt.init(e, i), Ut(e._zod, "propValues", () => i.innerType._zod.propValues), Ut(e._zod, "values", () => i.innerType._zod.values), Ut(e._zod, "optin", () => i.innerType._zod.optin), Ut(e._zod, "optout", () => i.innerType._zod.optout), e._zod.parse = (r, u) => {
        if (u.direction === "backward") return i.innerType._zod.run(r, u);
        const c = i.innerType._zod.run(r, u);
        return c instanceof Promise ? c.then(Zv) : Zv(c);
    };
});

function Zv(e) {
    return e.value = Object.freeze(e.value), e;
}
var bS = /* @__PURE__ */ $("$ZodCustom", (e, i) => {
    hn.init(e, i), Jt.init(e, i), e._zod.parse = (r, u) => r, e._zod.check = (r) => {
        const u = r.value,
            c = i.fn(u);
        if (c instanceof Promise) return c.then((f) => Gv(f, r, u, e));
        Gv(c, r, u, e);
    };
});

function Gv(e, i, r, u) {
    if (!e) {
        const c = {
            code: "custom",
            input: r,
            inst: u,
            path: [...u._zod.def.path ? ? []],
            continue: !u._zod.def.abort
        };
        u._zod.def.params && (c.params = u._zod.def.params), i.issues.push(Zl(c));
    }
}
var _S = class {
    constructor() {
        this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
    }
    add(e, ...i) {
        const r = i[0];
        if (this._map.set(e, r), r && typeof r == "object" && "id" in r) {
            if (this._idmap.has(r.id)) throw new Error(`ID ${r.id} already exists in the registry`);
            this._idmap.set(r.id, e);
        }
        return this;
    }
    clear() {
        return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
    }
    remove(e) {
        const i = this._map.get(e);
        return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(e), this;
    }
    get(e) {
        const i = e._zod.parent;
        if (i) {
            const r = { ...this.get(i) ? ? {}
            };
            delete r.id;
            const u = {
                ...r,
                ...this._map.get(e)
            };
            return Object.keys(u).length ? u : void 0;
        }
        return this._map.get(e);
    }
    has(e) {
        return this._map.has(e);
    }
};

function ES() {
    return new _S();
}
var vu = /* @__PURE__ */ ES();

function SS(e, i) {
    return new e({
        type: "string",
        ...ct(i)
    });
}

function TS(e, i) {
    return new e({
        type: "string",
        format: "email",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function Xv(e, i) {
    return new e({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function AS(e, i) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function wS(e, i) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v4",
        ...ct(i)
    });
}

function OS(e, i) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v6",
        ...ct(i)
    });
}

function CS(e, i) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v7",
        ...ct(i)
    });
}

function DS(e, i) {
    return new e({
        type: "string",
        format: "url",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function zS(e, i) {
    return new e({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function RS(e, i) {
    return new e({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function NS(e, i) {
    return new e({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function MS(e, i) {
    return new e({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function HS(e, i) {
    return new e({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function xS(e, i) {
    return new e({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function LS(e, i) {
    return new e({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function US(e, i) {
    return new e({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function BS(e, i) {
    return new e({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function jS(e, i) {
    return new e({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function ZS(e, i) {
    return new e({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function GS(e, i) {
    return new e({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function XS(e, i) {
    return new e({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function PS(e, i) {
    return new e({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function YS(e, i) {
    return new e({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: !1,
        ...ct(i)
    });
}

function qS(e, i) {
    return new e({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...ct(i)
    });
}

function VS(e, i) {
    return new e({
        type: "string",
        format: "date",
        check: "string_format",
        ...ct(i)
    });
}

function $S(e, i) {
    return new e({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...ct(i)
    });
}

function kS(e, i) {
    return new e({
        type: "string",
        format: "duration",
        check: "string_format",
        ...ct(i)
    });
}

function IS(e, i) {
    return new e({
        type: "boolean",
        ...ct(i)
    });
}

function QS(e) {
    return new e({
        type: "unknown"
    });
}

function FS(e, i) {
    return new e({
        type: "never",
        ...ct(i)
    });
}

function hg(e, i) {
    return new yE({
        check: "max_length",
        ...ct(i),
        maximum: e
    });
}

function Cu(e, i) {
    return new bE({
        check: "min_length",
        ...ct(i),
        minimum: e
    });
}

function mg(e, i) {
    return new _E({
        check: "length_equals",
        ...ct(i),
        length: e
    });
}

function KS(e, i) {
    return new EE({
        check: "string_format",
        format: "regex",
        ...ct(i),
        pattern: e
    });
}

function WS(e) {
    return new SE({
        check: "string_format",
        format: "lowercase",
        ...ct(e)
    });
}

function JS(e) {
    return new TE({
        check: "string_format",
        format: "uppercase",
        ...ct(e)
    });
}

function tT(e, i) {
    return new AE({
        check: "string_format",
        format: "includes",
        ...ct(i),
        includes: e
    });
}

function eT(e, i) {
    return new wE({
        check: "string_format",
        format: "starts_with",
        ...ct(i),
        prefix: e
    });
}

function nT(e, i) {
    return new OE({
        check: "string_format",
        format: "ends_with",
        ...ct(i),
        suffix: e
    });
}

function Vl(e) {
    return new CE({
        check: "overwrite",
        tx: e
    });
}

function aT(e) {
    return Vl((i) => i.normalize(e));
}

function iT() {
    return Vl((e) => e.trim());
}

function lT() {
    return Vl((e) => e.toLowerCase());
}

function rT() {
    return Vl((e) => e.toUpperCase());
}

function uT(e, i, r) {
    return new e({
        type: "array",
        element: i,
        ...ct(r)
    });
}

function oT(e, i, r) {
    return new e({
        type: "custom",
        check: "custom",
        fn: i,
        ...ct(r)
    });
}

function cT(e) {
    const i = sT((r) => (r.addIssue = (u) => {
        if (typeof u == "string") r.issues.push(Zl(u, r.value, i._zod.def));
        else {
            const c = u;
            c.fatal && (c.continue = !1), c.code ? ? (c.code = "custom"), c.input ? ? (c.input = r.value), c.inst ? ? (c.inst = i), c.continue ? ? (c.continue = !i._zod.def.abort), r.issues.push(Zl(c));
        }
    }, e(r.value, r)));
    return i;
}

function sT(e, i) {
    const r = new hn({
        check: "custom",
        ...ct(i)
    });
    return r._zod.check = e, r;
}
var fT = /* @__PURE__ */ $("ZodISODateTime", (e, i) => {
    XE.init(e, i), Pt.init(e, i);
});

function dT(e) {
    return qS(fT, e);
}
var hT = /* @__PURE__ */ $("ZodISODate", (e, i) => {
    PE.init(e, i), Pt.init(e, i);
});

function mT(e) {
    return VS(hT, e);
}
var vT = /* @__PURE__ */ $("ZodISOTime", (e, i) => {
    YE.init(e, i), Pt.init(e, i);
});

function pT(e) {
    return $S(vT, e);
}
var gT = /* @__PURE__ */ $("ZodISODuration", (e, i) => {
    qE.init(e, i), Pt.init(e, i);
});

function yT(e) {
    return kS(gT, e);
}
var vg = (e, i) => {
        lg.init(e, i), e.name = "ZodError", Object.defineProperties(e, {
            format: {
                value: (r) => U_(e, r)
            },
            flatten: {
                value: (r) => L_(e, r)
            },
            addIssue: {
                value: (r) => {
                    e.issues.push(r), e.message = JSON.stringify(e.issues, xs, 2);
                }
            },
            addIssues: {
                value: (r) => {
                    e.issues.push(...r), e.message = JSON.stringify(e.issues, xs, 2);
                }
            },
            isEmpty: {
                get() {
                    return e.issues.length === 0;
                }
            }
        });
    },
    g3 = $("ZodError", vg),
    ke = $("ZodError", vg, {
        Parent: Error
    }),
    bT = /* @__PURE__ */ af(ke),
    _T = /* @__PURE__ */ lf(ke),
    ET = /* @__PURE__ */ Lu(ke),
    ST = /* @__PURE__ */ Uu(ke),
    TT = /* @__PURE__ */ Z_(ke),
    AT = /* @__PURE__ */ G_(ke),
    wT = /* @__PURE__ */ X_(ke),
    OT = /* @__PURE__ */ P_(ke),
    CT = /* @__PURE__ */ Y_(ke),
    DT = /* @__PURE__ */ q_(ke),
    zT = /* @__PURE__ */ V_(ke),
    RT = /* @__PURE__ */ $_(ke),
    ae = /* @__PURE__ */ $("ZodType", (e, i) => (Jt.init(e, i), e.def = i, e.type = i.type, Object.defineProperty(e, "_def", {
        value: i
    }), e.check = (...r) => e.clone(Va(i, {
        checks: [...i.checks ? ? [], ...r.map((u) => typeof u == "function" ? {
            _zod: {
                check: u,
                def: {
                    check: "custom"
                },
                onattach: []
            }
        } : u)]
    })), e.clone = (r, u) => ha(e, r, u), e.brand = () => e, e.register = ((r, u) => (r.add(e, u), e)), e.parse = (r, u) => bT(e, r, u, {
        callee: e.parse
    }), e.safeParse = (r, u) => ET(e, r, u), e.parseAsync = async (r, u) => _T(e, r, u, {
        callee: e.parseAsync
    }), e.safeParseAsync = async (r, u) => ST(e, r, u), e.spa = e.safeParseAsync, e.encode = (r, u) => TT(e, r, u), e.decode = (r, u) => AT(e, r, u), e.encodeAsync = async (r, u) => wT(e, r, u), e.decodeAsync = async (r, u) => OT(e, r, u), e.safeEncode = (r, u) => CT(e, r, u), e.safeDecode = (r, u) => DT(e, r, u), e.safeEncodeAsync = async (r, u) => zT(e, r, u), e.safeDecodeAsync = async (r, u) => RT(e, r, u), e.refine = (r, u) => e.check(S2(r, u)), e.superRefine = (r) => e.check(T2(r)), e.overwrite = (r) => e.check(Vl(r)), e.optional = () => $v(e), e.nullable = () => kv(e), e.nullish = () => $v(kv(e)), e.nonoptional = (r) => v2(e, r), e.array = () => e2(e), e.or = (r) => i2([e, r]), e.and = (r) => r2(e, r), e.transform = (r) => Iv(e, c2(r)), e.default = (r) => d2(e, r), e.prefault = (r) => m2(e, r), e.catch = (r) => g2(e, r), e.pipe = (r) => Iv(e, r), e.readonly = () => _2(e), e.describe = (r) => {
        const u = e.clone();
        return vu.add(u, {
            description: r
        }), u;
    }, Object.defineProperty(e, "description", {
        get() {
            return vu.get(e) ? .description;
        },
        configurable: !0
    }), e.meta = (...r) => {
        if (r.length === 0) return vu.get(e);
        const u = e.clone();
        return vu.add(u, r[0]), u;
    }, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)),
    pg = /* @__PURE__ */ $("_ZodString", (e, i) => {
        rf.init(e, i), ae.init(e, i);
        const r = e._zod.bag;
        e.format = r.format ? ? null, e.minLength = r.minimum ? ? null, e.maxLength = r.maximum ? ? null, e.regex = (...u) => e.check(KS(...u)), e.includes = (...u) => e.check(tT(...u)), e.startsWith = (...u) => e.check(eT(...u)), e.endsWith = (...u) => e.check(nT(...u)), e.min = (...u) => e.check(Cu(...u)), e.max = (...u) => e.check(hg(...u)), e.length = (...u) => e.check(mg(...u)), e.nonempty = (...u) => e.check(Cu(1, ...u)), e.lowercase = (u) => e.check(WS(u)), e.uppercase = (u) => e.check(JS(u)), e.trim = () => e.check(iT()), e.normalize = (...u) => e.check(aT(...u)), e.toLowerCase = () => e.check(lT()), e.toUpperCase = () => e.check(rT());
    }),
    NT = /* @__PURE__ */ $("ZodString", (e, i) => {
        rf.init(e, i), pg.init(e, i), e.email = (r) => e.check(TS(MT, r)), e.url = (r) => e.check(DS(HT, r)), e.jwt = (r) => e.check(YS(IT, r)), e.emoji = (r) => e.check(zS(xT, r)), e.guid = (r) => e.check(Xv(Yv, r)), e.uuid = (r) => e.check(AS(pu, r)), e.uuidv4 = (r) => e.check(wS(pu, r)), e.uuidv6 = (r) => e.check(OS(pu, r)), e.uuidv7 = (r) => e.check(CS(pu, r)), e.nanoid = (r) => e.check(RS(LT, r)), e.guid = (r) => e.check(Xv(Yv, r)), e.cuid = (r) => e.check(NS(UT, r)), e.cuid2 = (r) => e.check(MS(BT, r)), e.ulid = (r) => e.check(HS(jT, r)), e.base64 = (r) => e.check(GS(VT, r)), e.base64url = (r) => e.check(XS($T, r)), e.xid = (r) => e.check(xS(ZT, r)), e.ksuid = (r) => e.check(LS(GT, r)), e.ipv4 = (r) => e.check(US(XT, r)), e.ipv6 = (r) => e.check(BS(PT, r)), e.cidrv4 = (r) => e.check(jS(YT, r)), e.cidrv6 = (r) => e.check(ZS(qT, r)), e.e164 = (r) => e.check(PS(kT, r)), e.datetime = (r) => e.check(dT(r)), e.date = (r) => e.check(mT(r)), e.time = (r) => e.check(pT(r)), e.duration = (r) => e.check(yT(r));
    });

function Pv(e) {
    return SS(NT, e);
}
var Pt = /* @__PURE__ */ $("ZodStringFormat", (e, i) => {
        Xt.init(e, i), pg.init(e, i);
    }),
    MT = /* @__PURE__ */ $("ZodEmail", (e, i) => {
        ME.init(e, i), Pt.init(e, i);
    }),
    Yv = /* @__PURE__ */ $("ZodGUID", (e, i) => {
        RE.init(e, i), Pt.init(e, i);
    }),
    pu = /* @__PURE__ */ $("ZodUUID", (e, i) => {
        NE.init(e, i), Pt.init(e, i);
    }),
    HT = /* @__PURE__ */ $("ZodURL", (e, i) => {
        HE.init(e, i), Pt.init(e, i);
    }),
    xT = /* @__PURE__ */ $("ZodEmoji", (e, i) => {
        xE.init(e, i), Pt.init(e, i);
    }),
    LT = /* @__PURE__ */ $("ZodNanoID", (e, i) => {
        LE.init(e, i), Pt.init(e, i);
    }),
    UT = /* @__PURE__ */ $("ZodCUID", (e, i) => {
        UE.init(e, i), Pt.init(e, i);
    }),
    BT = /* @__PURE__ */ $("ZodCUID2", (e, i) => {
        BE.init(e, i), Pt.init(e, i);
    }),
    jT = /* @__PURE__ */ $("ZodULID", (e, i) => {
        jE.init(e, i), Pt.init(e, i);
    }),
    ZT = /* @__PURE__ */ $("ZodXID", (e, i) => {
        ZE.init(e, i), Pt.init(e, i);
    }),
    GT = /* @__PURE__ */ $("ZodKSUID", (e, i) => {
        GE.init(e, i), Pt.init(e, i);
    }),
    XT = /* @__PURE__ */ $("ZodIPv4", (e, i) => {
        VE.init(e, i), Pt.init(e, i);
    }),
    PT = /* @__PURE__ */ $("ZodIPv6", (e, i) => {
        $E.init(e, i), Pt.init(e, i);
    }),
    YT = /* @__PURE__ */ $("ZodCIDRv4", (e, i) => {
        kE.init(e, i), Pt.init(e, i);
    }),
    qT = /* @__PURE__ */ $("ZodCIDRv6", (e, i) => {
        IE.init(e, i), Pt.init(e, i);
    }),
    VT = /* @__PURE__ */ $("ZodBase64", (e, i) => {
        QE.init(e, i), Pt.init(e, i);
    }),
    $T = /* @__PURE__ */ $("ZodBase64URL", (e, i) => {
        KE.init(e, i), Pt.init(e, i);
    }),
    kT = /* @__PURE__ */ $("ZodE164", (e, i) => {
        WE.init(e, i), Pt.init(e, i);
    }),
    IT = /* @__PURE__ */ $("ZodJWT", (e, i) => {
        tS.init(e, i), Pt.init(e, i);
    }),
    QT = /* @__PURE__ */ $("ZodBoolean", (e, i) => {
        eS.init(e, i), ae.init(e, i);
    });

function FT(e) {
    return IS(QT, e);
}
var KT = /* @__PURE__ */ $("ZodUnknown", (e, i) => {
    nS.init(e, i), ae.init(e, i);
});

function qv() {
    return QS(KT);
}
var WT = /* @__PURE__ */ $("ZodNever", (e, i) => {
    aS.init(e, i), ae.init(e, i);
});

function JT(e) {
    return FS(WT, e);
}
var t2 = /* @__PURE__ */ $("ZodArray", (e, i) => {
    iS.init(e, i), ae.init(e, i), e.element = i.element, e.min = (r, u) => e.check(Cu(r, u)), e.nonempty = (r) => e.check(Cu(1, r)), e.max = (r, u) => e.check(hg(r, u)), e.length = (r, u) => e.check(mg(r, u)), e.unwrap = () => e.element;
});

function e2(e, i) {
    return uT(t2, e, i);
}
var n2 = /* @__PURE__ */ $("ZodObject", (e, i) => {
    rS.init(e, i), ae.init(e, i), Ut(e, "shape", () => i.shape), e.keyof = () => u2(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({
        ...e._zod.def,
        catchall: r
    }), e.passthrough = () => e.clone({
        ...e._zod.def,
        catchall: qv()
    }), e.loose = () => e.clone({
        ...e._zod.def,
        catchall: qv()
    }), e.strict = () => e.clone({
        ...e._zod.def,
        catchall: JT()
    }), e.strip = () => e.clone({
        ...e._zod.def,
        catchall: void 0
    }), e.extend = (r) => R_(e, r), e.safeExtend = (r) => N_(e, r), e.merge = (r) => M_(e, r), e.pick = (r) => D_(e, r), e.omit = (r) => z_(e, r), e.partial = (...r) => H_(gg, e, r[0]), e.required = (...r) => x_(yg, e, r[0]);
});

function Vv(e, i) {
    return new n2({
        type: "object",
        shape: e ? ? {},
        ...ct(i)
    });
}
var a2 = /* @__PURE__ */ $("ZodUnion", (e, i) => {
    uS.init(e, i), ae.init(e, i), e.options = i.options;
});

function i2(e, i) {
    return new a2({
        type: "union",
        options: e,
        ...ct(i)
    });
}
var l2 = /* @__PURE__ */ $("ZodIntersection", (e, i) => {
    oS.init(e, i), ae.init(e, i);
});

function r2(e, i) {
    return new l2({
        type: "intersection",
        left: e,
        right: i
    });
}
var Us = /* @__PURE__ */ $("ZodEnum", (e, i) => {
    cS.init(e, i), ae.init(e, i), e.enum = i.entries, e.options = Object.values(i.entries);
    const r = new Set(Object.keys(i.entries));
    e.extract = (u, c) => {
        const f = {};
        for (const d of u)
            if (r.has(d)) f[d] = i.entries[d];
            else throw new Error(`Key ${d} not found in enum`);
        return new Us({
            ...i,
            checks: [],
            ...ct(c),
            entries: f
        });
    }, e.exclude = (u, c) => {
        const f = { ...i.entries
        };
        for (const d of u)
            if (r.has(d)) delete f[d];
            else throw new Error(`Key ${d} not found in enum`);
        return new Us({
            ...i,
            checks: [],
            ...ct(c),
            entries: f
        });
    };
});

function u2(e, i) {
    return new Us({
        type: "enum",
        entries: Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e,
        ...ct(i)
    });
}
var o2 = /* @__PURE__ */ $("ZodTransform", (e, i) => {
    sS.init(e, i), ae.init(e, i), e._zod.parse = (r, u) => {
        if (u.direction === "backward") throw new tg(e.constructor.name);
        r.addIssue = (f) => {
            if (typeof f == "string") r.issues.push(Zl(f, r.value, i));
            else {
                const d = f;
                d.fatal && (d.continue = !1), d.code ? ? (d.code = "custom"), d.input ? ? (d.input = r.value), d.inst ? ? (d.inst = e), r.issues.push(Zl(d));
            }
        };
        const c = i.transform(r.value, r);
        return c instanceof Promise ? c.then((f) => (r.value = f, r)) : (r.value = c, r);
    };
});

function c2(e) {
    return new o2({
        type: "transform",
        transform: e
    });
}
var gg = /* @__PURE__ */ $("ZodOptional", (e, i) => {
    fS.init(e, i), ae.init(e, i), e.unwrap = () => e._zod.def.innerType;
});

function $v(e) {
    return new gg({
        type: "optional",
        innerType: e
    });
}
var s2 = /* @__PURE__ */ $("ZodNullable", (e, i) => {
    dS.init(e, i), ae.init(e, i), e.unwrap = () => e._zod.def.innerType;
});

function kv(e) {
    return new s2({
        type: "nullable",
        innerType: e
    });
}
var f2 = /* @__PURE__ */ $("ZodDefault", (e, i) => {
    hS.init(e, i), ae.init(e, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});

function d2(e, i) {
    return new f2({
        type: "default",
        innerType: e,
        get defaultValue() {
            return typeof i == "function" ? i() : ng(i);
        }
    });
}
var h2 = /* @__PURE__ */ $("ZodPrefault", (e, i) => {
    mS.init(e, i), ae.init(e, i), e.unwrap = () => e._zod.def.innerType;
});

function m2(e, i) {
    return new h2({
        type: "prefault",
        innerType: e,
        get defaultValue() {
            return typeof i == "function" ? i() : ng(i);
        }
    });
}
var yg = /* @__PURE__ */ $("ZodNonOptional", (e, i) => {
    vS.init(e, i), ae.init(e, i), e.unwrap = () => e._zod.def.innerType;
});

function v2(e, i) {
    return new yg({
        type: "nonoptional",
        innerType: e,
        ...ct(i)
    });
}
var p2 = /* @__PURE__ */ $("ZodCatch", (e, i) => {
    pS.init(e, i), ae.init(e, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});

function g2(e, i) {
    return new p2({
        type: "catch",
        innerType: e,
        catchValue: typeof i == "function" ? i : () => i
    });
}
var y2 = /* @__PURE__ */ $("ZodPipe", (e, i) => {
    gS.init(e, i), ae.init(e, i), e.in = i.in, e.out = i.out;
});

function Iv(e, i) {
    return new y2({
        type: "pipe",
        in: e,
        out: i
    });
}
var b2 = /* @__PURE__ */ $("ZodReadonly", (e, i) => {
    yS.init(e, i), ae.init(e, i), e.unwrap = () => e._zod.def.innerType;
});

function _2(e) {
    return new b2({
        type: "readonly",
        innerType: e
    });
}
var E2 = /* @__PURE__ */ $("ZodCustom", (e, i) => {
    bS.init(e, i), ae.init(e, i);
});

function S2(e, i = {}) {
    return oT(E2, e, i);
}

function T2(e) {
    return cT(e);
}
var A2 = Vv({
    hidden: FT(),
    edit_context: Vv({
        codex_thread_id: Pv().nullable(),
        chatgpt_conversation_id: Pv().nullable()
    })
});
var w2 = "/_internal/sites_widget/log_event",
    O2 = "/_internal/sites_widget/editor/config";
async function C2() {
    const e = await fetch(O2, {
        credentials: "same-origin",
        cache: "no-store",
        redirect: "error",
        signal: AbortSignal.timeout(1e4)
    });
    if (!e.ok) throw new Error("Unable to load editor widget configuration");
    return A2.parse(await e.json());
}

function D2() {
    let e = Promise.resolve();
    return (i) => (e = e.then(async () => {
        if (!(await fetch("/_internal/sites_widget/editor/config", {
                method: "POST",
                credentials: "same-origin",
                redirect: "error",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    hidden: i
                }),
                keepalive: !0,
                signal: AbortSignal.timeout(1e4)
            })).ok) throw new Error("Unable to save editor widget preference");
    }).catch(() => {
        console.warn("Unable to save editor widget preference");
    }), e);
}

function xn(e) {
    fetch(w2, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            interaction_type: e
        }),
        keepalive: !0
    }).catch(() => {});
}
var z2 = "_Button_guvzm_1",
    R2 = "_ButtonInner_guvzm_107",
    Du = {
        Button: z2,
        ButtonInner: R2
    },
    N2 = /* @__PURE__ */ He(((e) => {
        var i = /* @__PURE__ */ Symbol.for("react.transitional.element"),
            r = /* @__PURE__ */ Symbol.for("react.fragment");

        function u(c, f, d) {
            var m = null;
            if (d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), "key" in f) {
                d = {};
                for (var p in f) p !== "key" && (d[p] = f[p]);
            } else d = f;
            return f = d.ref, {
                $$typeof: i,
                type: c,
                key: m,
                ref: f !== void 0 ? f : null,
                props: d
            };
        }
        e.Fragment = r, e.jsx = u, e.jsxs = u;
    })),
    M2 = /* @__PURE__ */ He(((e, i) => {
        i.exports = N2();
    })),
    Y = M2();

function bg(e) {
    const i = e.currentTarget.offsetWidth;
    let r = 0.985;
    i <= 80 ? r = 0.96 : i <= 150 ? r = 0.97 : i <= 220 ? r = 0.98 : i > 600 && (r = 0.995), e.currentTarget.style.setProperty("--button-press-scale", String(r));
}

function Qv({
    type: e = "button",
    color: i = "primary",
    variant: r = "solid",
    pill: u = !1,
    uniform: c = !1,
    size: f = "md",
    iconSize: d,
    children: m,
    className: p,
    disabled: g,
    onClick: v,
    onPointerEnter: b,
    ..._
}) {
    const T = (0, E.useCallback)((D) => {
            g || v ? .(D);
        }, [g, v]),
        O = (0, E.useCallback)((D) => {
            bg(D), b ? .(D);
        }, [b]);
    return /* @__PURE__ */ (0, Y.jsx)("button", {
        ..._,
        type: e,
        className: Bn(Du.Button, p),
        "data-color": i,
        "data-variant": r,
        "data-pill": u ? "" : void 0,
        "data-uniform": c ? "" : void 0,
        "data-size": f,
        "data-icon-size": d,
        "data-disabled": g ? "" : void 0,
        disabled: g,
        "aria-disabled": g || void 0,
        onClick: T,
        onPointerEnter: O,
        children: /* @__PURE__ */ (0, Y.jsx)("span", {
            className: Du.ButtonInner,
            children: m
        })
    });
}

function H2({
    color: e = "primary",
    variant: i = "solid",
    pill: r = !1,
    uniform: u = !1,
    size: c = "md",
    iconSize: f,
    children: d,
    className: m,
    onPointerEnter: p,
    ...g
}) {
    return /* @__PURE__ */ (0, Y.jsx)("a", {
        ...g,
        className: Bn(Du.Button, m),
        "data-color": e,
        "data-variant": i,
        "data-pill": r ? "" : void 0,
        "data-uniform": u ? "" : void 0,
        "data-size": c,
        "data-icon-size": f,
        onPointerEnter: (v) => {
            bg(v), p ? .(v);
        },
        children: /* @__PURE__ */ (0, Y.jsx)("span", {
            className: Du.ButtonInner,
            children: d
        })
    });
}

function x2(e, i) {
    const r = (0, E.useRef)(0),
        u = (0, E.useRef)(null),
        c = (0, E.useCallback)((f, d = "") => {
            f.style.height = "0px";
            const {
                scrollHeight: m,
                offsetHeight: p,
                offsetWidth: g,
                clientHeight: v
            } = f, b = m + (p - v);
            f.style.height = `${b}px`, r.current < m && f.selectionEnd === d.length && (f.scrollTop = m), r.current = f.scrollHeight, u.current = g;
        }, []);
    (0, E.useLayoutEffect)(() => {
        const f = e.current;
        f !== null && c(f, i);
    }, [
        c,
        e,
        i
    ]), (0, E.useEffect)(() => {
        const f = e.current;
        if (f === null) return;
        const d = new ResizeObserver(() => {
            const m = f.offsetWidth;
            (u.current === null || m !== u.current) && c(f, f.value);
        });
        return d.observe(f), () => d.disconnect();
    }, [c, e]);
}
var L2 = typeof navigator < "u",
    U2 = L2 ? navigator.userAgent ? ? "" : "";

function _g() {
    return Z1(U2);
}

function B2() {
    return typeof navigator < "u" && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}

function j2() {
    return typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform);
}
var Z2 = () => {
    const e = (0, E.useRef)(!1),
        i = (0, E.useRef)(null);
    (0, E.useEffect)(() => () => {
        i.current !== null && clearTimeout(i.current);
    }, []);
    const r = () => {
            i.current !== null && (clearTimeout(i.current), i.current = null);
        },
        u = () => {
            r(), i.current = setTimeout(() => {
                e.current = !1, i.current = null;
            }, 0);
        };
    return {
        handleCompositionStart: () => {
            r(), e.current = !0;
        },
        handleCompositionEnd: () => {
            e.current = !0, u();
        },
        isComposing: (m) => {
            const p = "nativeEvent" in m ? m.nativeEvent : m;
            return p.isComposing || e.current || p.keyCode === 229;
        }
    };
};

function G2({
    textareaRef: e,
    value: i,
    onChange: r,
    onKeyDown: u,
    onCompositionStart: c,
    onCompositionEnd: f,
    ...d
}) {
    x2(e, i);
    const {
        handleCompositionStart: m,
        handleCompositionEnd: p,
        isComposing: g
    } = Z2();
    return /* @__PURE__ */ (0, Y.jsx)("textarea", {
        ...d,
        ref: e,
        rows: 1,
        value: i,
        onChange: r,
        onCompositionStart: (v) => {
            m(), c ? .(v);
        },
        onCompositionEnd: (v) => {
            p(), f ? .(v);
        },
        onKeyDown: (v) => {
            u ? .(v), !(v.defaultPrevented || v.key !== "Enter" || v.shiftKey || g(v) || _g()) && (v.preventDefault(), v.repeat || v.currentTarget.form ? .requestSubmit());
        }
    });
}
var X2 = "_Image_1l1xj_1",
    P2 = {
        Image: X2
    },
    Fv = /* @__PURE__ */ new Set();

function Y2({
    src: e,
    className: i,
    draggable: r = !1,
    onLoad: u,
    onError: c,
    forceRenderAfterLoadFail: f = !1,
    ...d
}) {
    const [m, p] = (0, E.useState)(() => e && Fv.has(e)), [g, v] = (0, E.useState)(!1), b = m || g && f;
    return !e || !f && g ? null : /* @__PURE__ */ (0, Y.jsx)("img", {
        ...d,
        src: e,
        className: Bn(P2.Image, i),
        onLoad: (_) => {
            p(!0), Fv.add(e), u ? .(_);
        },
        onError: (_) => {
            v(!0), c ? .(_);
        },
        "data-loaded": b ? "" : void 0,
        draggable: r
    });
}
var q2 = /* @__PURE__ */ He(((e) => {
        var i = Is();

        function r(g) {
            var v = "https://react.dev/errors/" + g;
            if (1 < arguments.length) {
                v += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var b = 2; b < arguments.length; b++) v += "&args[]=" + encodeURIComponent(arguments[b]);
            }
            return "Minified React error #" + g + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }

        function u() {}
        var c = {
                d: {
                    f: u,
                    r: function() {
                        throw Error(r(522));
                    },
                    D: u,
                    C: u,
                    L: u,
                    m: u,
                    X: u,
                    S: u,
                    M: u
                },
                p: 0,
                findDOMNode: null
            },
            f = /* @__PURE__ */ Symbol.for("react.portal");

        function d(g, v, b) {
            var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: f,
                key: _ == null ? null : "" + _,
                children: g,
                containerInfo: v,
                implementation: b
            };
        }
        var m = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

        function p(g, v) {
            if (g === "font") return "";
            if (typeof v == "string") return v === "use-credentials" ? v : "";
        }
        e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, e.createPortal = function(g, v) {
            var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(r(299));
            return d(g, v, null, b);
        }, e.flushSync = function(g) {
            var v = m.T,
                b = c.p;
            try {
                if (m.T = null, c.p = 2, g) return g();
            } finally {
                m.T = v, c.p = b, c.d.f();
            }
        }, e.preconnect = function(g, v) {
            typeof g == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(g, v));
        }, e.prefetchDNS = function(g) {
            typeof g == "string" && c.d.D(g);
        }, e.preinit = function(g, v) {
            if (typeof g == "string" && v && typeof v.as == "string") {
                var b = v.as,
                    _ = p(b, v.crossOrigin),
                    T = typeof v.integrity == "string" ? v.integrity : void 0,
                    O = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
                b === "style" ? c.d.S(g, typeof v.precedence == "string" ? v.precedence : void 0, {
                    crossOrigin: _,
                    integrity: T,
                    fetchPriority: O
                }) : b === "script" && c.d.X(g, {
                    crossOrigin: _,
                    integrity: T,
                    fetchPriority: O,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0
                });
            }
        }, e.preinitModule = function(g, v) {
            if (typeof g == "string")
                if (typeof v == "object" && v !== null) {
                    if (v.as == null || v.as === "script") {
                        var b = p(v.as, v.crossOrigin);
                        c.d.M(g, {
                            crossOrigin: b,
                            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                            nonce: typeof v.nonce == "string" ? v.nonce : void 0
                        });
                    }
                } else v ? ? c.d.M(g);
        }, e.preload = function(g, v) {
            if (typeof g == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
                var b = v.as,
                    _ = p(b, v.crossOrigin);
                c.d.L(g, b, {
                    crossOrigin: _,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0,
                    type: typeof v.type == "string" ? v.type : void 0,
                    fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
                    referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
                    imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
                    imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
                    media: typeof v.media == "string" ? v.media : void 0
                });
            }
        }, e.preloadModule = function(g, v) {
            if (typeof g == "string")
                if (v) {
                    var b = p(v.as, v.crossOrigin);
                    c.d.m(g, {
                        as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                        crossOrigin: b,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0
                    });
                } else c.d.m(g);
        }, e.requestFormReset = function(g) {
            c.d.r(g);
        }, e.unstable_batchedUpdates = function(g, v) {
            return g(v);
        }, e.useFormState = function(g, v, b) {
            return m.H.useFormState(g, v, b);
        }, e.useFormStatus = function() {
            return m.H.useHostTransitionStatus();
        }, e.version = "19.2.8";
    })),
    Eg = /* @__PURE__ */ He(((e, i) => {
        function r() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
                } catch (u) {
                    console.error(u);
                }
        }
        r(), i.exports = q2();
    }));

function Kv(e, i) {
    if (typeof e == "function") return e(i);
    e != null && (e.current = i);
}

function Sg(...e) {
    return (i) => {
        let r = !1;
        const u = e.map((c) => {
            const f = Kv(c, i);
            return !r && typeof f == "function" && (r = !0), f;
        });
        if (r) return () => {
            for (let c = 0; c < u.length; c++) {
                const f = u[c];
                typeof f == "function" ? f() : Kv(e[c], null);
            }
        };
    };
}

function $a(...e) {
    return E.useCallback(Sg(...e), e);
}
var Tg = E.forwardRef((e, i) => {
    const {
        children: r,
        ...u
    } = e, c = E.Children.toArray(r), f = c.find(V2);
    if (f) {
        const d = f.props.children,
            m = c.map((p) => p === f ? E.Children.count(d) > 1 ? E.Children.only(null) : E.isValidElement(d) ? d.props.children : null : p);
        return /* @__PURE__ */ (0, Y.jsx)(Bs, {
            ...u,
            ref: i,
            children: E.isValidElement(d) ? E.cloneElement(d, void 0, m) : null
        });
    }
    return /* @__PURE__ */ (0, Y.jsx)(Bs, {
        ...u,
        ref: i,
        children: r
    });
});
Tg.displayName = "Slot";
var Bs = E.forwardRef((e, i) => {
    const {
        children: r,
        ...u
    } = e;
    if (E.isValidElement(r)) {
        const c = k2(r),
            f = $2(u, r.props);
        return r.type !== E.Fragment && (f.ref = i ? Sg(i, c) : c), E.cloneElement(r, f);
    }
    return E.Children.count(r) > 1 ? E.Children.only(null) : null;
});
Bs.displayName = "SlotClone";
var Ag = ({
    children: e
}) => /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, {
    children: e
});

function V2(e) {
    return E.isValidElement(e) && e.type === Ag;
}

function $2(e, i) {
    const r = { ...i
    };
    for (const u in i) {
        const c = e[u],
            f = i[u];
        /^on[A-Z]/.test(u) ? c && f ? r[u] = (...d) => {
            f(...d), c(...d);
        } : c && (r[u] = c) : u === "style" ? r[u] = {
            ...c,
            ...f
        } : u === "className" && (r[u] = [c, f].filter(Boolean).join(" "));
    }
    return {
        ...e,
        ...r
    };
}

function k2(e) {
    let i = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        r = i && "isReactWarning" in i && i.isReactWarning;
    return r ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref") ? .get, r = i && "isReactWarning" in i && i.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var ju = /* @__PURE__ */ ks(Eg(), 1),
    ma = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul"
    ].reduce((e, i) => {
        const r = E.forwardRef((u, c) => {
            const {
                asChild: f,
                ...d
            } = u, m = f ? Tg : i;
            return typeof window < "u" && (window[ /* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, Y.jsx)(m, {
                ...d,
                ref: c
            });
        });
        return r.displayName = `Primitive.${i}`, {
            ...e,
            [i]: r
        };
    }, {});

function I2(e, i) {
    e && ju.flushSync(() => e.dispatchEvent(i));
}
var Q2 = "VisuallyHidden",
    wg = E.forwardRef((e, i) => /* @__PURE__ */ (0, Y.jsx)(ma.span, {
        ...e,
        ref: i,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
wg.displayName = Q2;
var F2 = wg;

function Og(e, i = []) {
    let r = [];

    function u(f, d) {
        const m = E.createContext(d),
            p = r.length;
        r = [...r, d];
        const g = (b) => {
            const {
                scope: _,
                children: T,
                ...O
            } = b, D = _ ? .[e] ? .[p] || m, x = E.useMemo(() => O, Object.values(O));
            return /* @__PURE__ */ (0, Y.jsx)(D.Provider, {
                value: x,
                children: T
            });
        };
        g.displayName = f + "Provider";

        function v(b, _) {
            const T = _ ? .[e] ? .[p] || m,
                O = E.useContext(T);
            if (O) return O;
            if (d !== void 0) return d;
            throw new Error(`\`${b}\` must be used within \`${f}\``);
        }
        return [g, v];
    }
    const c = () => {
        const f = r.map((d) => E.createContext(d));
        return function(m) {
            const p = m ? .[e] || f;
            return E.useMemo(() => ({
                [`__scope${e}`]: {
                    ...m,
                    [e]: p
                }
            }), [m, p]);
        };
    };
    return c.scopeName = e, [u, K2(c, ...i)];
}

function K2(...e) {
    const i = e[0];
    if (e.length === 1) return i;
    const r = () => {
        const u = e.map((c) => ({
            useScope: c(),
            scopeName: c.scopeName
        }));
        return function(f) {
            const d = u.reduce((m, {
                useScope: p,
                scopeName: g
            }) => {
                const v = p(f)[`__scope${g}`];
                return {
                    ...m,
                    ...v
                };
            }, {});
            return E.useMemo(() => ({
                [`__scope${i.scopeName}`]: d
            }), [d]);
        };
    };
    return r.scopeName = i.scopeName, r;
}

function Ln(e, i, {
    checkForDefaultPrevented: r = !0
} = {}) {
    return function(c) {
        if (e ? .(c), r === !1 || !c.defaultPrevented) return i ? .(c);
    };
}

function Pi(e) {
    const i = E.useRef(e);
    return E.useEffect(() => {
        i.current = e;
    }), E.useMemo(() => (...r) => i.current ? .(...r), []);
}

function W2({
    prop: e,
    defaultProp: i,
    onChange: r = () => {}
}) {
    const [u, c] = J2({
        defaultProp: i,
        onChange: r
    }), f = e !== void 0, d = f ? e : u, m = Pi(r);
    return [d, E.useCallback((p) => {
        if (f) {
            const g = typeof p == "function" ? p(e) : p;
            g !== e && m(g);
        } else c(p);
    }, [
        f,
        e,
        c,
        m
    ])];
}

function J2({
    defaultProp: e,
    onChange: i
}) {
    const r = E.useState(e),
        [u] = r,
        c = E.useRef(u),
        f = Pi(i);
    return E.useEffect(() => {
        c.current !== u && (f(u), c.current = u);
    }, [
        u,
        c,
        f
    ]), r;
}
var Pa = globalThis ? .document ? E.useLayoutEffect : () => {};

function tA(e, i) {
    return E.useReducer((r, u) => i[r][u] ? ? r, e);
}
var uf = (e) => {
    const {
        present: i,
        children: r
    } = e, u = eA(i), c = typeof r == "function" ? r({
        present: u.isPresent
    }) : E.Children.only(r), f = $a(u.ref, nA(c));
    return typeof r == "function" || u.isPresent ? E.cloneElement(c, {
        ref: f
    }) : null;
};
uf.displayName = "Presence";

function eA(e) {
    const [i, r] = E.useState(), u = E.useRef({}), c = E.useRef(e), f = E.useRef("none"), [d, m] = tA(e ? "mounted" : "unmounted", {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return E.useEffect(() => {
        const p = gu(u.current);
        f.current = d === "mounted" ? p : "none";
    }, [d]), Pa(() => {
        const p = u.current,
            g = c.current;
        if (g !== e) {
            const v = f.current,
                b = gu(p);
            e ? m("MOUNT") : b === "none" || p ? .display === "none" ? m("UNMOUNT") : m(g && v !== b ? "ANIMATION_OUT" : "UNMOUNT"), c.current = e;
        }
    }, [e, m]), Pa(() => {
        if (i) {
            let p;
            const g = i.ownerDocument.defaultView ? ? window,
                v = (_) => {
                    const T = gu(u.current).includes(_.animationName);
                    if (_.target === i && T && (m("ANIMATION_END"), !c.current)) {
                        const O = i.style.animationFillMode;
                        i.style.animationFillMode = "forwards", p = g.setTimeout(() => {
                            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = O);
                        });
                    }
                },
                b = (_) => {
                    _.target === i && (f.current = gu(u.current));
                };
            return i.addEventListener("animationstart", b), i.addEventListener("animationcancel", v), i.addEventListener("animationend", v), () => {
                g.clearTimeout(p), i.removeEventListener("animationstart", b), i.removeEventListener("animationcancel", v), i.removeEventListener("animationend", v);
            };
        } else m("ANIMATION_END");
    }, [i, m]), {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: E.useCallback((p) => {
            p && (u.current = getComputedStyle(p)), r(p);
        }, [])
    };
}

function gu(e) {
    return e ? .animationName || "none";
}

function nA(e) {
    let i = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        r = i && "isReactWarning" in i && i.isReactWarning;
    return r ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref") ? .get, r = i && "isReactWarning" in i && i.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var aA = E.useId || (() => {}),
    iA = 0;

function lA(e) {
    const [i, r] = E.useState(aA());
    return Pa(() => {
        e || r((u) => u ? ? String(iA++));
    }, [e]), e || (i ? `radix-${i}` : "");
}

function rA(e, i = globalThis ? .document) {
    const r = Pi(e);
    E.useEffect(() => {
        const u = (c) => {
            c.key === "Escape" && r(c);
        };
        return i.addEventListener("keydown", u, {
            capture: !0
        }), () => i.removeEventListener("keydown", u, {
            capture: !0
        });
    }, [r, i]);
}
var uA = "DismissableLayer",
    js = "dismissableLayer.update",
    oA = "dismissableLayer.pointerDownOutside",
    cA = "dismissableLayer.focusOutside",
    Wv, Cg = E.createContext({
        layers: /* @__PURE__ */ new Set(),
        layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
        branches: /* @__PURE__ */ new Set()
    }),
    Dg = E.forwardRef((e, i) => {
        const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: u,
            onPointerDownOutside: c,
            onFocusOutside: f,
            onInteractOutside: d,
            onDismiss: m,
            ...p
        } = e, g = E.useContext(Cg), [v, b] = E.useState(null), _ = v ? .ownerDocument ? ? globalThis ? .document, [, T] = E.useState({}), O = $a(i, (I) => b(I)), D = Array.from(g.layers), [x] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), U = D.indexOf(x), G = v ? D.indexOf(v) : -1, k = g.layersWithOutsidePointerEventsDisabled.size > 0, L = G >= U, q = dA((I) => {
            const Q = I.target,
                lt = [...g.branches].some((ft) => ft.contains(Q));
            !L || lt || (c ? .(I), d ? .(I), I.defaultPrevented || m ? .());
        }, _), H = hA((I) => {
            const Q = I.target;
            [...g.branches].some((lt) => lt.contains(Q)) || (f ? .(I), d ? .(I), I.defaultPrevented || m ? .());
        }, _);
        return rA((I) => {
            G === g.layers.size - 1 && (u ? .(I), !I.defaultPrevented && m && (I.preventDefault(), m()));
        }, _), E.useEffect(() => {
            if (v)
                return r && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (Wv = _.body.style.pointerEvents, _.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(v)), g.layers.add(v), Jv(), () => {
                    r && g.layersWithOutsidePointerEventsDisabled.size === 1 && (_.body.style.pointerEvents = Wv);
                };
        }, [
            v,
            _,
            r,
            g
        ]), E.useEffect(() => () => {
            v && (g.layers.delete(v), g.layersWithOutsidePointerEventsDisabled.delete(v), Jv());
        }, [v, g]), E.useEffect(() => {
            const I = () => T({});
            return document.addEventListener(js, I), () => document.removeEventListener(js, I);
        }, []), /* @__PURE__ */ (0, Y.jsx)(ma.div, {
            ...p,
            ref: O,
            style: {
                pointerEvents: k ? L ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: Ln(e.onFocusCapture, H.onFocusCapture),
            onBlurCapture: Ln(e.onBlurCapture, H.onBlurCapture),
            onPointerDownCapture: Ln(e.onPointerDownCapture, q.onPointerDownCapture)
        });
    });
Dg.displayName = uA;
var sA = "DismissableLayerBranch",
    fA = E.forwardRef((e, i) => {
        const r = E.useContext(Cg),
            u = E.useRef(null),
            c = $a(i, u);
        return E.useEffect(() => {
            const f = u.current;
            if (f)
                return r.branches.add(f), () => {
                    r.branches.delete(f);
                };
        }, [r.branches]), /* @__PURE__ */ (0, Y.jsx)(ma.div, {
            ...e,
            ref: c
        });
    });
fA.displayName = sA;

function dA(e, i = globalThis ? .document) {
    const r = Pi(e),
        u = E.useRef(!1),
        c = E.useRef(() => {});
    return E.useEffect(() => {
        const f = (m) => {
                if (m.target && !u.current) {
                    let p = function() {
                        zg(oA, r, g, {
                            discrete: !0
                        });
                    };
                    const g = {
                        originalEvent: m
                    };
                    m.pointerType === "touch" ? (i.removeEventListener("click", c.current), c.current = p, i.addEventListener("click", c.current, {
                        once: !0
                    })) : p();
                } else i.removeEventListener("click", c.current);
                u.current = !1;
            },
            d = window.setTimeout(() => {
                i.addEventListener("pointerdown", f);
            }, 0);
        return () => {
            window.clearTimeout(d), i.removeEventListener("pointerdown", f), i.removeEventListener("click", c.current);
        };
    }, [i, r]), {
        onPointerDownCapture: () => u.current = !0
    };
}

function hA(e, i = globalThis ? .document) {
    const r = Pi(e),
        u = E.useRef(!1);
    return E.useEffect(() => {
        const c = (f) => {
            f.target && !u.current && zg(cA, r, {
                originalEvent: f
            }, {
                discrete: !1
            });
        };
        return i.addEventListener("focusin", c), () => i.removeEventListener("focusin", c);
    }, [i, r]), {
        onFocusCapture: () => u.current = !0,
        onBlurCapture: () => u.current = !1
    };
}

function Jv() {
    const e = new CustomEvent(js);
    document.dispatchEvent(e);
}

function zg(e, i, r, {
    discrete: u
}) {
    const c = r.originalEvent.target,
        f = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
        });
    i && c.addEventListener(e, i, {
        once: !0
    }), u ? I2(c, f) : c.dispatchEvent(f);
}
var mA = "Portal",
    Rg = E.forwardRef((e, i) => {
        const {
            container: r,
            ...u
        } = e, [c, f] = E.useState(!1);
        Pa(() => f(!0), []);
        const d = r || c && globalThis ? .document ? .body;
        return d ? ju.createPortal( /* @__PURE__ */ (0, Y.jsx)(ma.div, {
            ...u,
            ref: i
        }), d) : null;
    });
Rg.displayName = mA;

function vA(e) {
    const [i, r] = E.useState(void 0);
    return Pa(() => {
        if (e) {
            r({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const u = new ResizeObserver((c) => {
                if (!Array.isArray(c) || !c.length) return;
                const f = c[0];
                let d, m;
                if ("borderBoxSize" in f) {
                    const p = f.borderBoxSize,
                        g = Array.isArray(p) ? p[0] : p;
                    d = g.inlineSize, m = g.blockSize;
                } else
                    d = e.offsetWidth, m = e.offsetHeight;
                r({
                    width: d,
                    height: m
                });
            });
            return u.observe(e, {
                box: "border-box"
            }), () => u.unobserve(e);
        } else r(void 0);
    }, [e]), i;
}
var pA = [
        "top",
        "right",
        "bottom",
        "left"
    ],
    sa = Math.min,
    Ne = Math.max,
    zu = Math.round,
    yu = Math.floor,
    sn = (e) => ({
        x: e,
        y: e
    }),
    gA = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    yA = {
        start: "end",
        end: "start"
    };

function Zs(e, i, r) {
    return Ne(e, sa(i, r));
}

function jn(e, i) {
    return typeof e == "function" ? e(i) : e;
}

function Zn(e) {
    return e.split("-")[0];
}

function Yi(e) {
    return e.split("-")[1];
}

function of (e) {
    return e === "x" ? "y" : "x";
}

function cf(e) {
    return e === "y" ? "height" : "width";
}
var bA = /* @__PURE__ */ new Set(["top", "bottom"]);

function cn(e) {
    return bA.has(Zn(e)) ? "y" : "x";
}

function sf(e) {
    return of(cn(e));
}

function _A(e, i, r) {
    r === void 0 && (r = !1);
    const u = Yi(e),
        c = sf(e),
        f = cf(c);
    let d = c === "x" ? u === (r ? "end" : "start") ? "right" : "left" : u === "start" ? "bottom" : "top";
    return i.reference[f] > i.floating[f] && (d = Ru(d)), [d, Ru(d)];
}

function EA(e) {
    const i = Ru(e);
    return [
        Gs(e),
        i,
        Gs(i)
    ];
}

function Gs(e) {
    return e.replace(/start|end/g, (i) => yA[i]);
}
var tp = ["left", "right"],
    ep = ["right", "left"],
    SA = ["top", "bottom"],
    TA = ["bottom", "top"];

function AA(e, i, r) {
    switch (e) {
        case "top":
        case "bottom":
            return r ? i ? ep : tp : i ? tp : ep;
        case "left":
        case "right":
            return i ? SA : TA;
        default:
            return [];
    }
}

function wA(e, i, r, u) {
    const c = Yi(e);
    let f = AA(Zn(e), r === "start", u);
    return c && (f = f.map((d) => d + "-" + c), i && (f = f.concat(f.map(Gs)))), f;
}

function Ru(e) {
    return e.replace(/left|right|bottom|top/g, (i) => gA[i]);
}

function OA(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    };
}

function Ng(e) {
    return typeof e != "number" ? OA(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    };
}

function Nu(e) {
    const {
        x: i,
        y: r,
        width: u,
        height: c
    } = e;
    return {
        width: u,
        height: c,
        top: r,
        left: i,
        right: i + u,
        bottom: r + c,
        x: i,
        y: r
    };
}

function np(e, i, r) {
    let {
        reference: u,
        floating: c
    } = e;
    const f = cn(i),
        d = sf(i),
        m = cf(d),
        p = Zn(i),
        g = f === "y",
        v = u.x + u.width / 2 - c.width / 2,
        b = u.y + u.height / 2 - c.height / 2,
        _ = u[m] / 2 - c[m] / 2;
    let T;
    switch (p) {
        case "top":
            T = {
                x: v,
                y: u.y - c.height
            };
            break;
        case "bottom":
            T = {
                x: v,
                y: u.y + u.height
            };
            break;
        case "right":
            T = {
                x: u.x + u.width,
                y: b
            };
            break;
        case "left":
            T = {
                x: u.x - c.width,
                y: b
            };
            break;
        default:
            T = {
                x: u.x,
                y: u.y
            };
    }
    switch (Yi(i)) {
        case "start":
            T[d] -= _ * (r && g ? -1 : 1);
            break;
        case "end":
            T[d] += _ * (r && g ? -1 : 1);
            break;
    }
    return T;
}
var CA = async (e, i, r) => {
    const {
        placement: u = "bottom",
        strategy: c = "absolute",
        middleware: f = [],
        platform: d
    } = r, m = f.filter(Boolean), p = await (d.isRTL == null ? void 0 : d.isRTL(i));
    let g = await d.getElementRects({
            reference: e,
            floating: i,
            strategy: c
        }),
        {
            x: v,
            y: b
        } = np(g, u, p),
        _ = u,
        T = {},
        O = 0;
    for (let D = 0; D < m.length; D++) {
        const {
            name: x,
            fn: U
        } = m[D], {
            x: G,
            y: k,
            data: L,
            reset: q
        } = await U({
            x: v,
            y: b,
            initialPlacement: u,
            placement: _,
            strategy: c,
            middlewareData: T,
            rects: g,
            platform: d,
            elements: {
                reference: e,
                floating: i
            }
        });
        v = G ? ? v, b = k ? ? b, T = {
            ...T,
            [x]: {
                ...T[x],
                ...L
            }
        }, q && O <= 50 && (O++, typeof q == "object" && (q.placement && (_ = q.placement), q.rects && (g = q.rects === !0 ? await d.getElementRects({
            reference: e,
            floating: i,
            strategy: c
        }) : q.rects), {
            x: v,
            y: b
        } = np(g, _, p)), D = -1);
    }
    return {
        x: v,
        y: b,
        placement: _,
        strategy: c,
        middlewareData: T
    };
};
async function Gl(e, i) {
    var r;
    i === void 0 && (i = {});
    const {
        x: u,
        y: c,
        platform: f,
        rects: d,
        elements: m,
        strategy: p
    } = e, {
        boundary: g = "clippingAncestors",
        rootBoundary: v = "viewport",
        elementContext: b = "floating",
        altBoundary: _ = !1,
        padding: T = 0
    } = jn(i, e), O = Ng(T), D = m[_ ? b === "floating" ? "reference" : "floating" : b], x = Nu(await f.getClippingRect({
        element: (r = await (f.isElement == null ? void 0 : f.isElement(D))) == null || r ? D : D.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(m.floating)),
        boundary: g,
        rootBoundary: v,
        strategy: p
    })), U = b === "floating" ? {
        x: u,
        y: c,
        width: d.floating.width,
        height: d.floating.height
    } : d.reference, G = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m.floating)), k = await (f.isElement == null ? void 0 : f.isElement(G)) ? await (f.getScale == null ? void 0 : f.getScale(G)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, L = Nu(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: m,
        rect: U,
        offsetParent: G,
        strategy: p
    }) : U);
    return {
        top: (x.top - L.top + O.top) / k.y,
        bottom: (L.bottom - x.bottom + O.bottom) / k.y,
        left: (x.left - L.left + O.left) / k.x,
        right: (L.right - x.right + O.right) / k.x
    };
}
var DA = (e) => ({
        name: "arrow",
        options: e,
        async fn(i) {
            const {
                x: r,
                y: u,
                placement: c,
                rects: f,
                platform: d,
                elements: m,
                middlewareData: p
            } = i, {
                element: g,
                padding: v = 0
            } = jn(e, i) || {};
            if (g == null) return {};
            const b = Ng(v),
                _ = {
                    x: r,
                    y: u
                },
                T = sf(c),
                O = cf(T),
                D = await d.getDimensions(g),
                x = T === "y",
                U = x ? "top" : "left",
                G = x ? "bottom" : "right",
                k = x ? "clientHeight" : "clientWidth",
                L = f.reference[O] + f.reference[T] - _[T] - f.floating[O],
                q = _[T] - f.reference[T],
                H = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(g));
            let I = H ? H[k] : 0;
            (!I || !await (d.isElement == null ? void 0 : d.isElement(H))) && (I = m.floating[k] || f.floating[O]);
            const Q = L / 2 - q / 2,
                lt = I / 2 - D[O] / 2 - 1,
                ft = sa(b[U], lt),
                W = sa(b[G], lt),
                J = ft,
                pt = I - D[O] - W,
                ht = I / 2 - D[O] / 2 + Q,
                yt = Zs(J, ht, pt),
                F = !p.arrow && Yi(c) != null && ht !== yt && f.reference[O] / 2 - (ht < J ? ft : W) - D[O] / 2 < 0,
                j = F ? ht < J ? ht - J : ht - pt : 0;
            return {
                [T]: _[T] + j,
                data: {
                    [T]: yt,
                    centerOffset: ht - yt - j,
                    ...F && {
                        alignmentOffset: j
                    }
                },
                reset: F
            };
        }
    }),
    zA = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(i) {
                var r, u;
                const {
                    placement: c,
                    middlewareData: f,
                    rects: d,
                    initialPlacement: m,
                    platform: p,
                    elements: g
                } = i, {
                    mainAxis: v = !0,
                    crossAxis: b = !0,
                    fallbackPlacements: _,
                    fallbackStrategy: T = "bestFit",
                    fallbackAxisSideDirection: O = "none",
                    flipAlignment: D = !0,
                    ...x
                } = jn(e, i);
                if ((r = f.arrow) != null && r.alignmentOffset) return {};
                const U = Zn(c),
                    G = cn(m),
                    k = Zn(m) === m,
                    L = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)),
                    q = _ || (k || !D ? [Ru(m)] : EA(m)),
                    H = O !== "none";
                !_ && H && q.push(...wA(m, D, O, L));
                const I = [m, ...q],
                    Q = await Gl(i, x),
                    lt = [];
                let ft = ((u = f.flip) == null ? void 0 : u.overflows) || [];
                if (v && lt.push(Q[U]), b) {
                    const ht = _A(c, d, L);
                    lt.push(Q[ht[0]], Q[ht[1]]);
                }
                if (ft = [...ft, {
                        placement: c,
                        overflows: lt
                    }], !lt.every((ht) => ht <= 0)) {
                    var W, J;
                    const ht = (((W = f.flip) == null ? void 0 : W.index) || 0) + 1,
                        yt = I[ht];
                    if (yt && (!(b === "alignment" && G !== cn(yt)) || ft.every((j) => cn(j.placement) === G ? j.overflows[0] > 0 : !0)))
                        return {
                            data: {
                                index: ht,
                                overflows: ft
                            },
                            reset: {
                                placement: yt
                            }
                        };
                    let F = (J = ft.filter((j) => j.overflows[0] <= 0).sort((j, V) => j.overflows[1] - V.overflows[1])[0]) == null ? void 0 : J.placement;
                    if (!F) switch (T) {
                        case "bestFit":
                            {
                                var pt;
                                const j = (pt = ft.filter((V) => {
                                    if (H) {
                                        const ot = cn(V.placement);
                                        return ot === G || ot === "y";
                                    }
                                    return !0;
                                }).map((V) => [V.placement, V.overflows.filter((ot) => ot > 0).reduce((ot, gt) => ot + gt, 0)]).sort((V, ot) => V[1] - ot[1])[0]) == null ? void 0 : pt[0];
                                j && (F = j);
                                break;
                            }
                        case "initialPlacement":
                            F = m;
                            break;
                    }
                    if (c !== F) return {
                        reset: {
                            placement: F
                        }
                    };
                }
                return {};
            }
        };
    };

function ap(e, i) {
    return {
        top: e.top - i.height,
        right: e.right - i.width,
        bottom: e.bottom - i.height,
        left: e.left - i.width
    };
}

function ip(e) {
    return pA.some((i) => e[i] >= 0);
}
var RA = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(i) {
                const {
                    rects: r
                } = i, {
                    strategy: u = "referenceHidden",
                    ...c
                } = jn(e, i);
                switch (u) {
                    case "referenceHidden":
                        {
                            const f = ap(await Gl(i, {
                                ...c,
                                elementContext: "reference"
                            }), r.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: f,
                                    referenceHidden: ip(f)
                                }
                            };
                        }
                    case "escaped":
                        {
                            const f = ap(await Gl(i, {
                                ...c,
                                altBoundary: !0
                            }), r.floating);
                            return {
                                data: {
                                    escapedOffsets: f,
                                    escaped: ip(f)
                                }
                            };
                        }
                    default:
                        return {};
                }
            }
        };
    },
    Mg = /* @__PURE__ */ new Set(["left", "top"]);
async function NA(e, i) {
    const {
        placement: r,
        platform: u,
        elements: c
    } = e, f = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), d = Zn(r), m = Yi(r), p = cn(r) === "y", g = Mg.has(d) ? -1 : 1, v = f && p ? -1 : 1, b = jn(i, e);
    let {
        mainAxis: _,
        crossAxis: T,
        alignmentAxis: O
    } = typeof b == "number" ? {
        mainAxis: b,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: b.mainAxis || 0,
        crossAxis: b.crossAxis || 0,
        alignmentAxis: b.alignmentAxis
    };
    return m && typeof O == "number" && (T = m === "end" ? O * -1 : O), p ? {
        x: T * v,
        y: _ * g
    } : {
        x: _ * g,
        y: T * v
    };
}
var MA = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(i) {
                var r, u;
                const {
                    x: c,
                    y: f,
                    placement: d,
                    middlewareData: m
                } = i, p = await NA(i, e);
                return d === ((r = m.offset) == null ? void 0 : r.placement) && (u = m.arrow) != null && u.alignmentOffset ? {} : {
                    x: c + p.x,
                    y: f + p.y,
                    data: {
                        ...p,
                        placement: d
                    }
                };
            }
        };
    },
    HA = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(i) {
                const {
                    x: r,
                    y: u,
                    placement: c
                } = i, {
                    mainAxis: f = !0,
                    crossAxis: d = !1,
                    limiter: m = {
                        fn: (x) => {
                            let {
                                x: U,
                                y: G
                            } = x;
                            return {
                                x: U,
                                y: G
                            };
                        }
                    },
                    ...p
                } = jn(e, i), g = {
                    x: r,
                    y: u
                }, v = await Gl(i, p), b = cn(Zn(c)), _ = of (b);
                let T = g[_],
                    O = g[b];
                if (f) {
                    const x = _ === "y" ? "top" : "left",
                        U = _ === "y" ? "bottom" : "right",
                        G = T + v[x],
                        k = T - v[U];
                    T = Zs(G, T, k);
                }
                if (d) {
                    const x = b === "y" ? "top" : "left",
                        U = b === "y" ? "bottom" : "right",
                        G = O + v[x],
                        k = O - v[U];
                    O = Zs(G, O, k);
                }
                const D = m.fn({
                    ...i,
                    [_]: T,
                    [b]: O
                });
                return {
                    ...D,
                    data: {
                        x: D.x - r,
                        y: D.y - u,
                        enabled: {
                            [_]: f,
                            [b]: d
                        }
                    }
                };
            }
        };
    },
    xA = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(i) {
                const {
                    x: r,
                    y: u,
                    placement: c,
                    rects: f,
                    middlewareData: d
                } = i, {
                    offset: m = 0,
                    mainAxis: p = !0,
                    crossAxis: g = !0
                } = jn(e, i), v = {
                    x: r,
                    y: u
                }, b = cn(c), _ = of (b);
                let T = v[_],
                    O = v[b];
                const D = jn(m, i),
                    x = typeof D == "number" ? {
                        mainAxis: D,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...D
                    };
                if (p) {
                    const k = _ === "y" ? "height" : "width",
                        L = f.reference[_] - f.floating[k] + x.mainAxis,
                        q = f.reference[_] + f.reference[k] - x.mainAxis;
                    T < L ? T = L : T > q && (T = q);
                }
                if (g) {
                    var U, G;
                    const k = _ === "y" ? "width" : "height",
                        L = Mg.has(Zn(c)),
                        q = f.reference[b] - f.floating[k] + (L && ((U = d.offset) == null ? void 0 : U[b]) || 0) + (L ? 0 : x.crossAxis),
                        H = f.reference[b] + f.reference[k] + (L ? 0 : ((G = d.offset) == null ? void 0 : G[b]) || 0) - (L ? x.crossAxis : 0);
                    O < q ? O = q : O > H && (O = H);
                }
                return {
                    [_]: T,
                    [b]: O
                };
            }
        };
    },
    LA = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(i) {
                var r, u;
                const {
                    placement: c,
                    rects: f,
                    platform: d,
                    elements: m
                } = i, {
                    apply: p = () => {},
                    ...g
                } = jn(e, i), v = await Gl(i, g), b = Zn(c), _ = Yi(c), T = cn(c) === "y", {
                    width: O,
                    height: D
                } = f.floating;
                let x, U;
                b === "top" || b === "bottom" ? (x = b, U = _ === (await (d.isRTL == null ? void 0 : d.isRTL(m.floating)) ? "start" : "end") ? "left" : "right") : (U = b, x = _ === "end" ? "top" : "bottom");
                const G = D - v.top - v.bottom,
                    k = O - v.left - v.right,
                    L = sa(D - v[x], G),
                    q = sa(O - v[U], k),
                    H = !i.middlewareData.shift;
                let I = L,
                    Q = q;
                if ((r = i.middlewareData.shift) != null && r.enabled.x && (Q = k), (u = i.middlewareData.shift) != null && u.enabled.y && (I = G), H && !_) {
                    const ft = Ne(v.left, 0),
                        W = Ne(v.right, 0),
                        J = Ne(v.top, 0),
                        pt = Ne(v.bottom, 0);
                    T ? Q = O - 2 * (ft !== 0 || W !== 0 ? ft + W : Ne(v.left, v.right)) : I = D - 2 * (J !== 0 || pt !== 0 ? J + pt : Ne(v.top, v.bottom));
                }
                await p({
                    ...i,
                    availableWidth: Q,
                    availableHeight: I
                });
                const lt = await d.getDimensions(m.floating);
                return O !== lt.width || D !== lt.height ? {
                    reset: {
                        rects: !0
                    }
                } : {};
            }
        };
    };

function Zu() {
    return typeof window < "u";
}

function qi(e) {
    return Hg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}

function Me(e) {
    var i;
    return (e == null || (i = e.ownerDocument) == null ? void 0 : i.defaultView) || window;
}

function mn(e) {
    var i;
    return (i = (Hg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : i.documentElement;
}

function Hg(e) {
    return Zu() ? e instanceof Node || e instanceof Me(e).Node : !1;
}

function Je(e) {
    return Zu() ? e instanceof Element || e instanceof Me(e).Element : !1;
}

function dn(e) {
    return Zu() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}

function lp(e) {
    return !Zu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
var UA = /* @__PURE__ */ new Set(["inline", "contents"]);

function $l(e) {
    const {
        overflow: i,
        overflowX: r,
        overflowY: u,
        display: c
    } = tn(e);
    return /auto|scroll|overlay|hidden|clip/.test(i + u + r) && !UA.has(c);
}
var BA = /* @__PURE__ */ new Set([
    "table",
    "td",
    "th"
]);

function jA(e) {
    return BA.has(qi(e));
}
var ZA = [":popover-open", ":modal"];

function Gu(e) {
    return ZA.some((i) => {
        try {
            return e.matches(i);
        } catch {
            return !1;
        }
    });
}
var GA = [
        "transform",
        "translate",
        "scale",
        "rotate",
        "perspective"
    ],
    XA = [
        "transform",
        "translate",
        "scale",
        "rotate",
        "perspective",
        "filter"
    ],
    PA = [
        "paint",
        "layout",
        "strict",
        "content"
    ];

function ff(e) {
    const i = df(),
        r = Je(e) ? tn(e) : e;
    return GA.some((u) => r[u] ? r[u] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !i && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !i && (r.filter ? r.filter !== "none" : !1) || XA.some((u) => (r.willChange || "").includes(u)) || PA.some((u) => (r.contain || "").includes(u));
}

function YA(e) {
    let i = fa(e);
    for (; dn(i) && !Bi(i);) {
        if (ff(i)) return i;
        if (Gu(i)) return null;
        i = fa(i);
    }
    return null;
}

function df() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var qA = /* @__PURE__ */ new Set([
    "html",
    "body",
    "#document"
]);

function Bi(e) {
    return qA.has(qi(e));
}

function tn(e) {
    return Me(e).getComputedStyle(e);
}

function Xu(e) {
    return Je(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    };
}

function fa(e) {
    if (qi(e) === "html") return e;
    const i = e.assignedSlot || e.parentNode || lp(e) && e.host || mn(e);
    return lp(i) ? i.host : i;
}

function xg(e) {
    const i = fa(e);
    return Bi(i) ? e.ownerDocument ? e.ownerDocument.body : e.body : dn(i) && $l(i) ? i : xg(i);
}

function Xl(e, i, r) {
    var u;
    i === void 0 && (i = []), r === void 0 && (r = !0);
    const c = xg(e),
        f = c === ((u = e.ownerDocument) == null ? void 0 : u.body),
        d = Me(c);
    if (f) {
        const m = Xs(d);
        return i.concat(d, d.visualViewport || [], $l(c) ? c : [], m && r ? Xl(m) : []);
    }
    return i.concat(c, Xl(c, [], r));
}

function Xs(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}

function Lg(e) {
    const i = tn(e);
    let r = parseFloat(i.width) || 0,
        u = parseFloat(i.height) || 0;
    const c = dn(e),
        f = c ? e.offsetWidth : r,
        d = c ? e.offsetHeight : u,
        m = zu(r) !== f || zu(u) !== d;
    return m && (r = f, u = d), {
        width: r,
        height: u,
        $: m
    };
}

function hf(e) {
    return Je(e) ? e : e.contextElement;
}

function Li(e) {
    const i = hf(e);
    if (!dn(i)) return sn(1);
    const r = i.getBoundingClientRect(),
        {
            width: u,
            height: c,
            $: f
        } = Lg(i);
    let d = (f ? zu(r.width) : r.width) / u,
        m = (f ? zu(r.height) : r.height) / c;
    return (!d || !Number.isFinite(d)) && (d = 1), (!m || !Number.isFinite(m)) && (m = 1), {
        x: d,
        y: m
    };
}
var VA = /* @__PURE__ */ sn(0);

function Ug(e) {
    const i = Me(e);
    return !df() || !i.visualViewport ? VA : {
        x: i.visualViewport.offsetLeft,
        y: i.visualViewport.offsetTop
    };
}

function $A(e, i, r) {
    return i === void 0 && (i = !1), !r || i && r !== Me(e) ? !1 : i;
}

function Ya(e, i, r, u) {
    i === void 0 && (i = !1), r === void 0 && (r = !1);
    const c = e.getBoundingClientRect(),
        f = hf(e);
    let d = sn(1);
    i && (u ? Je(u) && (d = Li(u)) : d = Li(e));
    const m = $A(f, r, u) ? Ug(f) : sn(0);
    let p = (c.left + m.x) / d.x,
        g = (c.top + m.y) / d.y,
        v = c.width / d.x,
        b = c.height / d.y;
    if (f) {
        const _ = Me(f),
            T = u && Je(u) ? Me(u) : u;
        let O = _,
            D = Xs(O);
        for (; D && u && T !== O;) {
            const x = Li(D),
                U = D.getBoundingClientRect(),
                G = tn(D),
                k = U.left + (D.clientLeft + parseFloat(G.paddingLeft)) * x.x,
                L = U.top + (D.clientTop + parseFloat(G.paddingTop)) * x.y;
            p *= x.x, g *= x.y, v *= x.x, b *= x.y, p += k, g += L, O = Me(D), D = Xs(O);
        }
    }
    return Nu({
        width: v,
        height: b,
        x: p,
        y: g
    });
}

function Pu(e, i) {
    const r = Xu(e).scrollLeft;
    return i ? i.left + r : Ya(mn(e)).left + r;
}

function Bg(e, i) {
    const r = e.getBoundingClientRect();
    return {
        x: r.left + i.scrollLeft - Pu(e, r),
        y: r.top + i.scrollTop
    };
}

function kA(e) {
    let {
        elements: i,
        rect: r,
        offsetParent: u,
        strategy: c
    } = e;
    const f = c === "fixed",
        d = mn(u),
        m = i ? Gu(i.floating) : !1;
    if (u === d || m && f) return r;
    let p = {
            scrollLeft: 0,
            scrollTop: 0
        },
        g = sn(1);
    const v = sn(0),
        b = dn(u);
    if ((b || !b && !f) && ((qi(u) !== "body" || $l(d)) && (p = Xu(u)), dn(u))) {
        const T = Ya(u);
        g = Li(u), v.x = T.x + u.clientLeft, v.y = T.y + u.clientTop;
    }
    const _ = d && !b && !f ? Bg(d, p) : sn(0);
    return {
        width: r.width * g.x,
        height: r.height * g.y,
        x: r.x * g.x - p.scrollLeft * g.x + v.x + _.x,
        y: r.y * g.y - p.scrollTop * g.y + v.y + _.y
    };
}

function IA(e) {
    return Array.from(e.getClientRects());
}

function QA(e) {
    const i = mn(e),
        r = Xu(e),
        u = e.ownerDocument.body,
        c = Ne(i.scrollWidth, i.clientWidth, u.scrollWidth, u.clientWidth),
        f = Ne(i.scrollHeight, i.clientHeight, u.scrollHeight, u.clientHeight);
    let d = -r.scrollLeft + Pu(e);
    const m = -r.scrollTop;
    return tn(u).direction === "rtl" && (d += Ne(i.clientWidth, u.clientWidth) - c), {
        width: c,
        height: f,
        x: d,
        y: m
    };
}
var rp = 25;

function FA(e, i) {
    const r = Me(e),
        u = mn(e),
        c = r.visualViewport;
    let f = u.clientWidth,
        d = u.clientHeight,
        m = 0,
        p = 0;
    if (c) {
        f = c.width, d = c.height;
        const v = df();
        (!v || v && i === "fixed") && (m = c.offsetLeft, p = c.offsetTop);
    }
    const g = Pu(u);
    if (g <= 0) {
        const v = u.ownerDocument,
            b = v.body,
            _ = getComputedStyle(b),
            T = v.compatMode === "CSS1Compat" && parseFloat(_.marginLeft) + parseFloat(_.marginRight) || 0,
            O = Math.abs(u.clientWidth - b.clientWidth - T);
        O <= rp && (f -= O);
    } else g <= rp && (f += g);
    return {
        width: f,
        height: d,
        x: m,
        y: p
    };
}
var KA = /* @__PURE__ */ new Set(["absolute", "fixed"]);

function WA(e, i) {
    const r = Ya(e, !0, i === "fixed"),
        u = r.top + e.clientTop,
        c = r.left + e.clientLeft,
        f = dn(e) ? Li(e) : sn(1);
    return {
        width: e.clientWidth * f.x,
        height: e.clientHeight * f.y,
        x: c * f.x,
        y: u * f.y
    };
}

function up(e, i, r) {
    let u;
    if (i === "viewport") u = FA(e, r);
    else if (i === "document") u = QA(mn(e));
    else if (Je(i)) u = WA(i, r);
    else {
        const c = Ug(e);
        u = {
            x: i.x - c.x,
            y: i.y - c.y,
            width: i.width,
            height: i.height
        };
    }
    return Nu(u);
}

function jg(e, i) {
    const r = fa(e);
    return r === i || !Je(r) || Bi(r) ? !1 : tn(r).position === "fixed" || jg(r, i);
}

function JA(e, i) {
    const r = i.get(e);
    if (r) return r;
    let u = Xl(e, [], !1).filter((m) => Je(m) && qi(m) !== "body"),
        c = null;
    const f = tn(e).position === "fixed";
    let d = f ? fa(e) : e;
    for (; Je(d) && !Bi(d);) {
        const m = tn(d),
            p = ff(d);
        !p && m.position === "fixed" && (c = null), (f ? !p && !c : !p && m.position === "static" && c && KA.has(c.position) || $l(d) && !p && jg(e, d)) ? u = u.filter((g) => g !== d) : c = m, d = fa(d);
    }
    return i.set(e, u), u;
}

function tw(e) {
    let {
        element: i,
        boundary: r,
        rootBoundary: u,
        strategy: c
    } = e;
    const f = [...r === "clippingAncestors" ? Gu(i) ? [] : JA(i, this._c) : [].concat(r), u],
        d = f[0],
        m = f.reduce((p, g) => {
            const v = up(i, g, c);
            return p.top = Ne(v.top, p.top), p.right = sa(v.right, p.right), p.bottom = sa(v.bottom, p.bottom), p.left = Ne(v.left, p.left), p;
        }, up(i, d, c));
    return {
        width: m.right - m.left,
        height: m.bottom - m.top,
        x: m.left,
        y: m.top
    };
}

function ew(e) {
    const {
        width: i,
        height: r
    } = Lg(e);
    return {
        width: i,
        height: r
    };
}

function nw(e, i, r) {
    const u = dn(i),
        c = mn(i),
        f = r === "fixed",
        d = Ya(e, !0, f, i);
    let m = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const p = sn(0);

    function g() {
        p.x = Pu(c);
    }
    if (u || !u && !f)
        if ((qi(i) !== "body" || $l(c)) && (m = Xu(i)), u) {
            const b = Ya(i, !0, f, i);
            p.x = b.x + i.clientLeft, p.y = b.y + i.clientTop;
        } else c && g();
    f && !u && c && g();
    const v = c && !u && !f ? Bg(c, m) : sn(0);
    return {
        x: d.left + m.scrollLeft - p.x - v.x,
        y: d.top + m.scrollTop - p.y - v.y,
        width: d.width,
        height: d.height
    };
}

function hs(e) {
    return tn(e).position === "static";
}

function op(e, i) {
    if (!dn(e) || tn(e).position === "fixed") return null;
    if (i) return i(e);
    let r = e.offsetParent;
    return mn(e) === r && (r = r.ownerDocument.body), r;
}

function Zg(e, i) {
    const r = Me(e);
    if (Gu(e)) return r;
    if (!dn(e)) {
        let c = fa(e);
        for (; c && !Bi(c);) {
            if (Je(c) && !hs(c)) return c;
            c = fa(c);
        }
        return r;
    }
    let u = op(e, i);
    for (; u && jA(u) && hs(u);) u = op(u, i);
    return u && Bi(u) && hs(u) && !ff(u) ? r : u || YA(e) || r;
}
var aw = async function(e) {
    const i = this.getOffsetParent || Zg,
        r = this.getDimensions,
        u = await r(e.floating);
    return {
        reference: nw(e.reference, await i(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: u.width,
            height: u.height
        }
    };
};

function iw(e) {
    return tn(e).direction === "rtl";
}
var lw = {
    convertOffsetParentRelativeRectToViewportRelativeRect: kA,
    getDocumentElement: mn,
    getClippingRect: tw,
    getOffsetParent: Zg,
    getElementRects: aw,
    getClientRects: IA,
    getDimensions: ew,
    getScale: Li,
    isElement: Je,
    isRTL: iw
};

function Gg(e, i) {
    return e.x === i.x && e.y === i.y && e.width === i.width && e.height === i.height;
}

function rw(e, i) {
    let r = null,
        u;
    const c = mn(e);

    function f() {
        var m;
        clearTimeout(u), (m = r) == null || m.disconnect(), r = null;
    }

    function d(m, p) {
        m === void 0 && (m = !1), p === void 0 && (p = 1), f();
        const g = e.getBoundingClientRect(),
            {
                left: v,
                top: b,
                width: _,
                height: T
            } = g;
        if (m || i(), !_ || !T) return;
        const O = yu(b),
            D = yu(c.clientWidth - (v + _)),
            x = yu(c.clientHeight - (b + T)),
            U = yu(v),
            G = {
                rootMargin: -O + "px " + -D + "px " + -x + "px " + -U + "px",
                threshold: Ne(0, sa(1, p)) || 1
            };
        let k = !0;

        function L(q) {
            const H = q[0].intersectionRatio;
            if (H !== p) {
                if (!k) return d();
                H ? d(!1, H) : u = setTimeout(() => {
                    d(!1, 1e-7);
                }, 1e3);
            }
            H === 1 && !Gg(g, e.getBoundingClientRect()) && d(), k = !1;
        }
        try {
            r = new IntersectionObserver(L, {
                ...G,
                root: c.ownerDocument
            });
        } catch {
            r = new IntersectionObserver(L, G);
        }
        r.observe(e);
    }
    return d(!0), f;
}

function uw(e, i, r, u) {
    u === void 0 && (u = {});
    const {
        ancestorScroll: c = !0,
        ancestorResize: f = !0,
        elementResize: d = typeof ResizeObserver == "function",
        layoutShift: m = typeof IntersectionObserver == "function",
        animationFrame: p = !1
    } = u, g = hf(e), v = c || f ? [...g ? Xl(g) : [], ...Xl(i)] : [];
    v.forEach((U) => {
        c && U.addEventListener("scroll", r, {
            passive: !0
        }), f && U.addEventListener("resize", r);
    });
    const b = g && m ? rw(g, r) : null;
    let _ = -1,
        T = null;
    d && (T = new ResizeObserver((U) => {
        let [G] = U;
        G && G.target === g && T && (T.unobserve(i), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
            var k;
            (k = T) == null || k.observe(i);
        })), r();
    }), g && !p && T.observe(g), T.observe(i));
    let O, D = p ? Ya(e) : null;
    p && x();

    function x() {
        const U = Ya(e);
        D && !Gg(D, U) && r(), D = U, O = requestAnimationFrame(x);
    }
    return r(), () => {
        var U;
        v.forEach((G) => {
            c && G.removeEventListener("scroll", r), f && G.removeEventListener("resize", r);
        }), b ? .(), (U = T) == null || U.disconnect(), T = null, p && cancelAnimationFrame(O);
    };
}
var ow = MA,
    cw = HA,
    sw = zA,
    fw = LA,
    dw = RA,
    cp = DA,
    hw = xA,
    mw = (e, i, r) => {
        const u = /* @__PURE__ */ new Map(),
            c = {
                platform: lw,
                ...r
            },
            f = {
                ...c.platform,
                _c: u
            };
        return CA(e, i, {
            ...c,
            platform: f
        });
    },
    Au = typeof document < "u" ? E.useLayoutEffect : function() {};

function Mu(e, i) {
    if (e === i) return !0;
    if (typeof e != typeof i) return !1;
    if (typeof e == "function" && e.toString() === i.toString()) return !0;
    let r, u, c;
    if (e && i && typeof e == "object") {
        if (Array.isArray(e)) {
            if (r = e.length, r !== i.length) return !1;
            for (u = r; u-- !== 0;)
                if (!Mu(e[u], i[u])) return !1;
            return !0;
        }
        if (c = Object.keys(e), r = c.length, r !== Object.keys(i).length) return !1;
        for (u = r; u-- !== 0;)
            if (!{}.hasOwnProperty.call(i, c[u])) return !1;
        for (u = r; u-- !== 0;) {
            const f = c[u];
            if (!(f === "_owner" && e.$$typeof) && !Mu(e[f], i[f]))
                return !1;
        }
        return !0;
    }
    return e !== e && i !== i;
}

function Xg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}

function sp(e, i) {
    const r = Xg(e);
    return Math.round(i * r) / r;
}

function ms(e) {
    const i = E.useRef(e);
    return Au(() => {
        i.current = e;
    }), i;
}

function vw(e) {
    e === void 0 && (e = {});
    const {
        placement: i = "bottom",
        strategy: r = "absolute",
        middleware: u = [],
        platform: c,
        elements: {
            reference: f,
            floating: d
        } = {},
        transform: m = !0,
        whileElementsMounted: p,
        open: g
    } = e, [v, b] = E.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: i,
        middlewareData: {},
        isPositioned: !1
    }), [_, T] = E.useState(u);
    Mu(_, u) || T(u);
    const [O, D] = E.useState(null), [x, U] = E.useState(null), G = E.useCallback((V) => {
        V !== H.current && (H.current = V, D(V));
    }, []), k = E.useCallback((V) => {
        V !== I.current && (I.current = V, U(V));
    }, []), L = f || O, q = d || x, H = E.useRef(null), I = E.useRef(null), Q = E.useRef(v), lt = p != null, ft = ms(p), W = ms(c), J = ms(g), pt = E.useCallback(() => {
        if (!H.current || !I.current) return;
        const V = {
            placement: i,
            strategy: r,
            middleware: _
        };
        W.current && (V.platform = W.current), mw(H.current, I.current, V).then((ot) => {
            const gt = {
                ...ot,
                isPositioned: J.current !== !1
            };
            ht.current && !Mu(Q.current, gt) && (Q.current = gt, ju.flushSync(() => {
                b(gt);
            }));
        });
    }, [
        _,
        i,
        r,
        W,
        J
    ]);
    Au(() => {
        g === !1 && Q.current.isPositioned && (Q.current.isPositioned = !1, b((V) => ({
            ...V,
            isPositioned: !1
        })));
    }, [g]);
    const ht = E.useRef(!1);
    Au(() => (ht.current = !0, () => {
        ht.current = !1;
    }), []), Au(() => {
        if (L && (H.current = L), q && (I.current = q), L && q) {
            if (ft.current) return ft.current(L, q, pt);
            pt();
        }
    }, [
        L,
        q,
        pt,
        ft,
        lt
    ]);
    const yt = E.useMemo(() => ({
            reference: H,
            floating: I,
            setReference: G,
            setFloating: k
        }), [G, k]),
        F = E.useMemo(() => ({
            reference: L,
            floating: q
        }), [L, q]),
        j = E.useMemo(() => {
            const V = {
                position: r,
                left: 0,
                top: 0
            };
            if (!F.floating) return V;
            const ot = sp(F.floating, v.x),
                gt = sp(F.floating, v.y);
            return m ? {
                ...V,
                transform: "translate(" + ot + "px, " + gt + "px)",
                ...Xg(F.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: r,
                left: ot,
                top: gt
            };
        }, [
            r,
            m,
            F.floating,
            v.x,
            v.y
        ]);
    return E.useMemo(() => ({
        ...v,
        update: pt,
        refs: yt,
        elements: F,
        floatingStyles: j
    }), [
        v,
        pt,
        yt,
        F,
        j
    ]);
}
var pw = (e) => {
        function i(r) {
            return {}.hasOwnProperty.call(r, "current");
        }
        return {
            name: "arrow",
            options: e,
            fn(r) {
                const {
                    element: u,
                    padding: c
                } = typeof e == "function" ? e(r) : e;
                return u && i(u) ? u.current != null ? cp({
                    element: u.current,
                    padding: c
                }).fn(r) : {} : u ? cp({
                    element: u,
                    padding: c
                }).fn(r) : {};
            }
        };
    },
    gw = (e, i) => ({
        ...ow(e),
        options: [e, i]
    }),
    yw = (e, i) => ({
        ...cw(e),
        options: [e, i]
    }),
    bw = (e, i) => ({
        ...hw(e),
        options: [e, i]
    }),
    _w = (e, i) => ({
        ...sw(e),
        options: [e, i]
    }),
    Ew = (e, i) => ({
        ...fw(e),
        options: [e, i]
    }),
    Sw = (e, i) => ({
        ...dw(e),
        options: [e, i]
    }),
    Tw = (e, i) => ({
        ...pw(e),
        options: [e, i]
    }),
    Aw = "Arrow",
    Pg = E.forwardRef((e, i) => {
        const {
            children: r,
            width: u = 10,
            height: c = 5,
            ...f
        } = e;
        return /* @__PURE__ */ (0, Y.jsx)(ma.svg, {
            ...f,
            ref: i,
            width: u,
            height: c,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : /* @__PURE__ */ (0, Y.jsx)("polygon", {
                points: "0,0 30,0 15,10"
            })
        });
    });
Pg.displayName = Aw;
var ww = Pg,
    mf = "Popper",
    [Yg, qg] = Og(mf),
    [Ow, Vg] = Yg(mf),
    $g = (e) => {
        const {
            __scopePopper: i,
            children: r
        } = e, [u, c] = E.useState(null);
        return /* @__PURE__ */ (0, Y.jsx)(Ow, {
            scope: i,
            anchor: u,
            onAnchorChange: c,
            children: r
        });
    };
$g.displayName = mf;
var kg = "PopperAnchor",
    Ig = E.forwardRef((e, i) => {
        const {
            __scopePopper: r,
            virtualRef: u,
            ...c
        } = e, f = Vg(kg, r), d = E.useRef(null), m = $a(i, d);
        return E.useEffect(() => {
            f.onAnchorChange(u ? .current || d.current);
        }), u ? null : /* @__PURE__ */ (0, Y.jsx)(ma.div, {
            ...c,
            ref: m
        });
    });
Ig.displayName = kg;
var vf = "PopperContent",
    [Cw, Dw] = Yg(vf),
    Qg = E.forwardRef((e, i) => {
        const {
            __scopePopper: r,
            side: u = "bottom",
            sideOffset: c = 0,
            align: f = "center",
            alignOffset: d = 0,
            arrowPadding: m = 0,
            avoidCollisions: p = !0,
            collisionBoundary: g = [],
            collisionPadding: v = 0,
            sticky: b = "partial",
            hideWhenDetached: _ = !1,
            updatePositionStrategy: T = "optimized",
            onPlaced: O,
            ...D
        } = e, x = Vg(vf, r), [U, G] = E.useState(null), k = $a(i, (st) => G(st)), [L, q] = E.useState(null), H = vA(L), I = H ? .width ? ? 0, Q = H ? .height ? ? 0, lt = u + (f !== "center" ? "-" + f : ""), ft = typeof v == "number" ? v : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...v
        }, W = Array.isArray(g) ? g : [g], J = W.length > 0, pt = {
            padding: ft,
            boundary: W.filter(Rw),
            altBoundary: J
        }, {
            refs: ht,
            floatingStyles: yt,
            placement: F,
            isPositioned: j,
            middlewareData: V
        } = vw({
            strategy: "fixed",
            placement: lt,
            whileElementsMounted: (...st) => uw(...st, {
                animationFrame: T === "always"
            }),
            elements: {
                reference: x.anchor
            },
            middleware: [
                gw({
                    mainAxis: c + Q,
                    alignmentAxis: d
                }),
                p && yw({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: b === "partial" ? bw() : void 0,
                    ...pt
                }),
                p && _w({ ...pt
                }),
                Ew({
                    ...pt,
                    apply: ({
                        elements: st,
                        rects: wt,
                        availableWidth: ee,
                        availableHeight: nt
                    }) => {
                        const {
                            width: Ee,
                            height: Gn
                        } = wt.reference, Ie = st.floating.style;
                        Ie.setProperty("--radix-popper-available-width", `${ee}px`), Ie.setProperty("--radix-popper-available-height", `${nt}px`), Ie.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ie.setProperty("--radix-popper-anchor-height", `${Gn}px`);
                    }
                }),
                L && Tw({
                    element: L,
                    padding: m
                }),
                Nw({
                    arrowWidth: I,
                    arrowHeight: Q
                }),
                _ && Sw({
                    strategy: "referenceHidden",
                    ...pt
                })
            ]
        }), [ot, gt] = Wg(F), te = Pi(O);
        Pa(() => {
            j && te ? .();
        }, [j, te]);
        const w = V.arrow ? .x,
            X = V.arrow ? .y,
            K = V.arrow ? .centerOffset !== 0,
            [tt, mt] = E.useState();
        return Pa(() => {
            U && mt(window.getComputedStyle(U).zIndex);
        }, [U]), /* @__PURE__ */ (0, Y.jsx)("div", {
            ref: ht.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...yt,
                transform: j ? yt.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: tt,
                "--radix-popper-transform-origin": [V.transformOrigin ? .x, V.transformOrigin ? .y].join(" "),
                ...V.hide ? .referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: /* @__PURE__ */ (0, Y.jsx)(Cw, {
                scope: r,
                placedSide: ot,
                onArrowChange: q,
                arrowX: w,
                arrowY: X,
                shouldHideArrow: K,
                children: /* @__PURE__ */ (0, Y.jsx)(ma.div, {
                    "data-side": ot,
                    "data-align": gt,
                    ...D,
                    ref: k,
                    style: {
                        ...D.style,
                        animation: j ? void 0 : "none"
                    }
                })
            })
        });
    });
Qg.displayName = vf;
var Fg = "PopperArrow",
    zw = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Kg = E.forwardRef(function(i, r) {
        const {
            __scopePopper: u,
            ...c
        } = i, f = Dw(Fg, u), d = zw[f.placedSide];
        return /* @__PURE__ */ (0, Y.jsx)("span", {
            ref: f.onArrowChange,
            style: {
                position: "absolute",
                left: f.arrowX,
                top: f.arrowY,
                [d]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[f.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[f.placedSide],
                visibility: f.shouldHideArrow ? "hidden" : void 0
            },
            children: /* @__PURE__ */ (0, Y.jsx)(ww, {
                ...c,
                ref: r,
                style: {
                    ...c.style,
                    display: "block"
                }
            })
        });
    });
Kg.displayName = Fg;

function Rw(e) {
    return e !== null;
}
var Nw = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(i) {
        const {
            placement: r,
            rects: u,
            middlewareData: c
        } = i, f = c.arrow ? .centerOffset !== 0, d = f ? 0 : e.arrowWidth, m = f ? 0 : e.arrowHeight, [p, g] = Wg(r), v = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[g], b = (c.arrow ? .x ? ? 0) + d / 2, _ = (c.arrow ? .y ? ? 0) + m / 2;
        let T = "",
            O = "";
        return p === "bottom" ? (T = f ? v : `${b}px`, O = `${-m}px`) : p === "top" ? (T = f ? v : `${b}px`, O = `${u.floating.height + m}px`) : p === "right" ? (T = `${-m}px`, O = f ? v : `${_}px`) : p === "left" && (T = `${u.floating.width + m}px`, O = f ? v : `${_}px`), {
            data: {
                x: T,
                y: O
            }
        };
    }
});

function Wg(e) {
    const [i, r = "center"] = e.split("-");
    return [i, r];
}
var Mw = $g,
    Hw = Ig,
    xw = Qg,
    Lw = Kg,
    [Yu, y3] = Og("Tooltip", [qg]),
    qu = qg(),
    Jg = "TooltipProvider",
    Uw = 700,
    Ps = "tooltip.open",
    [Bw, pf] = Yu(Jg),
    t0 = (e) => {
        const {
            __scopeTooltip: i,
            delayDuration: r = Uw,
            skipDelayDuration: u = 300,
            disableHoverableContent: c = !1,
            children: f
        } = e, [d, m] = E.useState(!0), p = E.useRef(!1), g = E.useRef(0);
        return E.useEffect(() => {
            const v = g.current;
            return () => window.clearTimeout(v);
        }, []), /* @__PURE__ */ (0, Y.jsx)(Bw, {
            scope: i,
            isOpenDelayed: d,
            delayDuration: r,
            onOpen: E.useCallback(() => {
                window.clearTimeout(g.current), m(!1);
            }, []),
            onClose: E.useCallback(() => {
                window.clearTimeout(g.current), g.current = window.setTimeout(() => m(!0), u);
            }, [u]),
            isPointerInTransitRef: p,
            onPointerInTransitChange: E.useCallback((v) => {
                p.current = v;
            }, []),
            disableHoverableContent: c,
            children: f
        });
    };
t0.displayName = Jg;
var Vu = "Tooltip",
    [jw, kl] = Yu(Vu),
    e0 = (e) => {
        const {
            __scopeTooltip: i,
            children: r,
            open: u,
            defaultOpen: c = !1,
            onOpenChange: f,
            disableHoverableContent: d,
            delayDuration: m
        } = e, p = pf(Vu, e.__scopeTooltip), g = qu(i), [v, b] = E.useState(null), _ = lA(), T = E.useRef(0), O = d ? ? p.disableHoverableContent, D = m ? ? p.delayDuration, x = E.useRef(!1), [U = !1, G] = W2({
            prop: u,
            defaultProp: c,
            onChange: (I) => {
                I ? (p.onOpen(), document.dispatchEvent(new CustomEvent(Ps))) : p.onClose(), f ? .(I);
            }
        }), k = E.useMemo(() => U ? x.current ? "delayed-open" : "instant-open" : "closed", [U]), L = E.useCallback(() => {
            window.clearTimeout(T.current), T.current = 0, x.current = !1, G(!0);
        }, [G]), q = E.useCallback(() => {
            window.clearTimeout(T.current), T.current = 0, G(!1);
        }, [G]), H = E.useCallback(() => {
            window.clearTimeout(T.current), T.current = window.setTimeout(() => {
                x.current = !0, G(!0), T.current = 0;
            }, D);
        }, [D, G]);
        return E.useEffect(() => () => {
            T.current && (window.clearTimeout(T.current), T.current = 0);
        }, []), /* @__PURE__ */ (0, Y.jsx)(Mw, {
            ...g,
            children: /* @__PURE__ */ (0, Y.jsx)(jw, {
                scope: i,
                contentId: _,
                open: U,
                stateAttribute: k,
                trigger: v,
                onTriggerChange: b,
                onTriggerEnter: E.useCallback(() => {
                    p.isOpenDelayed ? H() : L();
                }, [
                    p.isOpenDelayed,
                    H,
                    L
                ]),
                onTriggerLeave: E.useCallback(() => {
                    O ? q() : (window.clearTimeout(T.current), T.current = 0);
                }, [q, O]),
                onOpen: L,
                onClose: q,
                disableHoverableContent: O,
                children: r
            })
        });
    };
e0.displayName = Vu;
var Ys = "TooltipTrigger",
    n0 = E.forwardRef((e, i) => {
        const {
            __scopeTooltip: r,
            ...u
        } = e, c = kl(Ys, r), f = pf(Ys, r), d = qu(r), m = $a(i, E.useRef(null), c.onTriggerChange), p = E.useRef(!1), g = E.useRef(!1), v = E.useCallback(() => p.current = !1, []);
        return E.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), /* @__PURE__ */ (0, Y.jsx)(Hw, {
            asChild: !0,
            ...d,
            children: /* @__PURE__ */ (0, Y.jsx)(ma.button, {
                "aria-describedby": c.open ? c.contentId : void 0,
                "data-state": c.stateAttribute,
                ...u,
                ref: m,
                onPointerMove: Ln(e.onPointerMove, (b) => {
                    b.pointerType !== "touch" && !g.current && !f.isPointerInTransitRef.current && (c.onTriggerEnter(), g.current = !0);
                }),
                onPointerLeave: Ln(e.onPointerLeave, () => {
                    c.onTriggerLeave(), g.current = !1;
                }),
                onPointerDown: Ln(e.onPointerDown, () => {
                    p.current = !0, document.addEventListener("pointerup", v, {
                        once: !0
                    });
                }),
                onFocus: Ln(e.onFocus, () => {
                    p.current || c.onOpen();
                }),
                onBlur: Ln(e.onBlur, c.onClose),
                onClick: Ln(e.onClick, c.onClose)
            })
        });
    });
n0.displayName = Ys;
var gf = "TooltipPortal",
    [Zw, Gw] = Yu(gf, {
        forceMount: void 0
    }),
    a0 = (e) => {
        const {
            __scopeTooltip: i,
            forceMount: r,
            children: u,
            container: c
        } = e, f = kl(gf, i);
        return /* @__PURE__ */ (0, Y.jsx)(Zw, {
            scope: i,
            forceMount: r,
            children: /* @__PURE__ */ (0, Y.jsx)(uf, {
                present: r || f.open,
                children: /* @__PURE__ */ (0, Y.jsx)(Rg, {
                    asChild: !0,
                    container: c,
                    children: u
                })
            })
        });
    };
a0.displayName = gf;
var ji = "TooltipContent",
    i0 = E.forwardRef((e, i) => {
        const r = Gw(ji, e.__scopeTooltip),
            {
                forceMount: u = r.forceMount,
                side: c = "top",
                ...f
            } = e,
            d = kl(ji, e.__scopeTooltip);
        return /* @__PURE__ */ (0, Y.jsx)(uf, {
            present: u || d.open,
            children: d.disableHoverableContent ? /* @__PURE__ */ (0, Y.jsx)(l0, {
                side: c,
                ...f,
                ref: i
            }) : /* @__PURE__ */ (0, Y.jsx)(Xw, {
                side: c,
                ...f,
                ref: i
            })
        });
    }),
    Xw = E.forwardRef((e, i) => {
        const r = kl(ji, e.__scopeTooltip),
            u = pf(ji, e.__scopeTooltip),
            c = E.useRef(null),
            f = $a(i, c),
            [d, m] = E.useState(null),
            {
                trigger: p,
                onClose: g
            } = r,
            v = c.current,
            {
                onPointerInTransitChange: b
            } = u,
            _ = E.useCallback(() => {
                m(null), b(!1);
            }, [b]),
            T = E.useCallback((O, D) => {
                const x = O.currentTarget,
                    U = {
                        x: O.clientX,
                        y: O.clientY
                    },
                    G = $w(U, Vw(U, x.getBoundingClientRect())),
                    k = kw(D.getBoundingClientRect());
                m(Qw([...G, ...k])), b(!0);
            }, [b]);
        return E.useEffect(() => () => _(), [_]), E.useEffect(() => {
            if (p && v) {
                const O = (x) => T(x, v),
                    D = (x) => T(x, p);
                return p.addEventListener("pointerleave", O), v.addEventListener("pointerleave", D), () => {
                    p.removeEventListener("pointerleave", O), v.removeEventListener("pointerleave", D);
                };
            }
        }, [
            p,
            v,
            T,
            _
        ]), E.useEffect(() => {
            if (d) {
                const O = (D) => {
                    const x = D.target,
                        U = {
                            x: D.clientX,
                            y: D.clientY
                        },
                        G = p ? .contains(x) || v ? .contains(x),
                        k = !Iw(U, d);
                    G ? _() : k && (_(), g());
                };
                return document.addEventListener("pointermove", O), () => document.removeEventListener("pointermove", O);
            }
        }, [
            p,
            v,
            d,
            g,
            _
        ]), /* @__PURE__ */ (0, Y.jsx)(l0, {
            ...e,
            ref: f
        });
    }),
    [Pw, Yw] = Yu(Vu, {
        isInside: !1
    }),
    l0 = E.forwardRef((e, i) => {
        const {
            __scopeTooltip: r,
            children: u,
            "aria-label": c,
            onEscapeKeyDown: f,
            onPointerDownOutside: d,
            ...m
        } = e, p = kl(ji, r), g = qu(r), {
            onClose: v
        } = p;
        return E.useEffect(() => (document.addEventListener(Ps, v), () => document.removeEventListener(Ps, v)), [v]), E.useEffect(() => {
            if (p.trigger) {
                const b = (_) => {
                    _.target ? .contains(p.trigger) && v();
                };
                return window.addEventListener("scroll", b, {
                    capture: !0
                }), () => window.removeEventListener("scroll", b, {
                    capture: !0
                });
            }
        }, [p.trigger, v]), /* @__PURE__ */ (0, Y.jsx)(Dg, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: f,
            onPointerDownOutside: d,
            onFocusOutside: (b) => b.preventDefault(),
            onDismiss: v,
            children: /* @__PURE__ */ (0, Y.jsxs)(xw, {
                "data-state": p.stateAttribute,
                ...g,
                ...m,
                ref: i,
                style: {
                    ...m.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [ /* @__PURE__ */ (0, Y.jsx)(Ag, {
                    children: u
                }), /* @__PURE__ */ (0, Y.jsx)(Pw, {
                    scope: r,
                    isInside: !0,
                    children: /* @__PURE__ */ (0, Y.jsx)(F2, {
                        id: p.contentId,
                        role: "tooltip",
                        children: c || u
                    })
                })]
            })
        });
    });
i0.displayName = ji;
var r0 = "TooltipArrow",
    qw = E.forwardRef((e, i) => {
        const {
            __scopeTooltip: r,
            ...u
        } = e, c = qu(r);
        return Yw(r0, r).isInside ? null : /* @__PURE__ */ (0, Y.jsx)(Lw, {
            ...c,
            ...u,
            ref: i
        });
    });
qw.displayName = r0;

function Vw(e, i) {
    const r = Math.abs(i.top - e.y),
        u = Math.abs(i.bottom - e.y),
        c = Math.abs(i.right - e.x),
        f = Math.abs(i.left - e.x);
    switch (Math.min(r, u, c, f)) {
        case f:
            return "left";
        case c:
            return "right";
        case r:
            return "top";
        case u:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}

function $w(e, i, r = 5) {
    const u = [];
    switch (i) {
        case "top":
            u.push({
                x: e.x - r,
                y: e.y + r
            }, {
                x: e.x + r,
                y: e.y + r
            });
            break;
        case "bottom":
            u.push({
                x: e.x - r,
                y: e.y - r
            }, {
                x: e.x + r,
                y: e.y - r
            });
            break;
        case "left":
            u.push({
                x: e.x + r,
                y: e.y - r
            }, {
                x: e.x + r,
                y: e.y + r
            });
            break;
        case "right":
            u.push({
                x: e.x - r,
                y: e.y - r
            }, {
                x: e.x - r,
                y: e.y + r
            });
            break;
    }
    return u;
}

function kw(e) {
    const {
        top: i,
        right: r,
        bottom: u,
        left: c
    } = e;
    return [{
            x: c,
            y: i
        },
        {
            x: r,
            y: i
        },
        {
            x: r,
            y: u
        },
        {
            x: c,
            y: u
        }
    ];
}

function Iw(e, i) {
    const {
        x: r,
        y: u
    } = e;
    let c = !1;
    for (let f = 0, d = i.length - 1; f < i.length; d = f++) {
        const m = i[f].x,
            p = i[f].y,
            g = i[d].x,
            v = i[d].y;
        p > u != v > u && r < (g - m) * (u - p) / (v - p) + m && (c = !c);
    }
    return c;
}

function Qw(e) {
    const i = e.slice();
    return i.sort((r, u) => r.x < u.x ? -1 : r.x > u.x ? 1 : r.y < u.y ? -1 : r.y > u.y ? 1 : 0), Fw(i);
}

function Fw(e) {
    if (e.length <= 1) return e.slice();
    const i = [];
    for (let u = 0; u < e.length; u++) {
        const c = e[u];
        for (; i.length >= 2;) {
            const f = i[i.length - 1],
                d = i[i.length - 2];
            if ((f.x - d.x) * (c.y - d.y) >= (f.y - d.y) * (c.x - d.x)) i.pop();
            else break;
        }
        i.push(c);
    }
    i.pop();
    const r = [];
    for (let u = e.length - 1; u >= 0; u--) {
        const c = e[u];
        for (; r.length >= 2;) {
            const f = r[r.length - 1],
                d = r[r.length - 2];
            if ((f.x - d.x) * (c.y - d.y) >= (f.y - d.y) * (c.x - d.x)) r.pop();
            else break;
        }
        r.push(c);
    }
    return r.pop(), i.length === 1 && r.length === 1 && i[0].x === r[0].x && i[0].y === r[0].y ? i : i.concat(r);
}
var Kw = t0,
    Ww = e0,
    Jw = n0,
    tO = a0,
    eO = i0;

function nO(e) {
    const i = (0, E.useRef)(e);
    return i.current = e, i;
}
var Zi = [],
    bu = !1,
    fp = (e) => {
        if (e.key === "Escape") {
            const [i] = Zi;
            i && (e.preventDefault(), i.callback.current ? .());
        }
    },
    u0 = () => {
        Zi.length > 0 && !bu ? (document.body.addEventListener("keydown", fp), bu = !0) : Zi.length === 0 && bu && (document.body.removeEventListener("keydown", fp), bu = !1);
    },
    aO = (e) => {
        Zi.unshift(e), u0();
    },
    iO = ({
        id: e
    }) => {
        Zi = Zi.filter((i) => i.id !== e), u0();
    },
    lO = (e, i) => {
        const r = (0, E.useId)(),
            u = nO(i);
        (0, E.useEffect)(() => {
            if (!e) return;
            const c = {
                id: r,
                callback: u
            };
            return aO(c), () => iO(c);
        }, [
            r,
            e,
            u
        ]);
    },
    rO = (e) => {
        e.preventDefault();
    },
    o0 = (0, E.createContext)(void 0);

function uO({
    children: e,
    container: i
}) {
    return /* @__PURE__ */ (0, Y.jsx)(o0.Provider, {
        value: i,
        children: e
    });
}

function oO() {
    return (0, E.useContext)(o0);
}
var cO = "_Tooltip_1iulb_1",
    sO = {
        Tooltip: cO,
        "scale-in": "_scale-in_1iulb_1",
        "scale-out": "_scale-out_1iulb_1"
    },
    fO = 150,
    dO = 300,
    hO = 5,
    mO = 15;

function _u({
    children: e,
    content: i,
    forceOpen: r = i === null ? !1 : void 0,
    onDismiss: u,
    maxWidth: c = dO,
    interactive: f = !1,
    align: d,
    alignOffset: m = 0,
    side: p,
    sideOffset: g = hO,
    contentClassName: v,
    onContentPointerEnter: b,
    onContentPointerLeave: _
}) {
    const [T, O] = (0, E.useState)(!1), D = r ? ? T, x = oO(), U = (G) => {
        typeof r != "boolean" && O(G);
    };
    return lO(D, () => {
        U(!1), u ? .();
    }), /* @__PURE__ */ (0, Y.jsx)(Kw, {
        children: /* @__PURE__ */ (0, Y.jsxs)(Ww, {
            open: D,
            delayDuration: fO,
            onOpenChange: U,
            disableHoverableContent: !f,
            children: [ /* @__PURE__ */ (0, Y.jsx)(Jw, {
                asChild: !0,
                children: e
            }), /* @__PURE__ */ (0, Y.jsx)(tO, {
                container: x,
                children: /* @__PURE__ */ (0, Y.jsx)(eO, {
                    className: Bn(sO.Tooltip, v),
                    align: d,
                    alignOffset: m,
                    side: p,
                    sideOffset: g,
                    collisionPadding: mO,
                    hideWhenDetached: !0,
                    style: {
                        maxWidth: c
                    },
                    onPointerEnter: b,
                    onPointerLeave: _,
                    onEscapeKeyDown: rO,
                    children: i
                })
            })]
        })
    });
}

function Hu(e) {
    if (typeof window.requestAnimationFrame != "function" || document.visibilityState === "hidden") {
        const u = window.setTimeout(e);
        return () => window.clearTimeout(u);
    }
    let i = 2,
        r = window.requestAnimationFrame(function u() {
            i -= 1, i === 0 ? e() : r = window.requestAnimationFrame(u);
        });
    return () => window.cancelAnimationFrame(r);
}

function vO(e) {
    const i = {};
    for (const [r, u] of Object.entries(e))
        u !== void 0 && (i[r.startsWith("--") ? r : `--${r}`] = typeof u == "number" ? `${u}px` : u);
    return i;
}
var vs = (e) => String(e),
    ln = (e) => `${e}ms`;

function ps(e) {
    return typeof e == "number" ? `${e}deg` : e;
}

function gs({
    x: e,
    y: i,
    scale: r,
    rotate: u,
    skewX: c,
    skewY: f
} = {}) {
    const d = [
        e == null ? null : `translateX(${e}px)`,
        i == null ? null : `translateY(${i}px)`,
        r == null ? null : `scale(${r})`,
        u == null ? null : `rotate(${ps(u)})`,
        c == null ? null : `skewX(${ps(c)})`,
        f == null ? null : `skewY(${ps(f)})`
    ].filter(Boolean);
    return d.length ? d.join(" ") : "none";
}

function ys({
    blur: e
} = {}) {
    return e == null ? "none" : `blur(${e}px)`;
}

function Eu(e) {
    const i = [];
    return E.Children.forEach(e, (r) => {
        r && typeof r == "object" && "key" in r && r.key && i.push(r);
    }), i;
}
var Ri = () => {};

function Ni(e) {
    const i = (0, E.useRef)(e);
    return i.current = e, (0, E.useCallback)((r) => i.current(r), []);
}

function pO(e, i, r, u) {
    const c = new Set(e.map((p) => p.key)),
        f = new Set(i.map((p) => p.component.key)),
        d = e.filter((p) => !f.has(p.key)).map(r),
        m = i.map((p) => ({
            ...p,
            component: e.find(({
                key: g
            }) => g === p.component.key) ? ? p.component,
            shouldRender: c.has(p.component.key)
        }));
    return u === "append" ? m.concat(d) : d.concat(m);
}
var gO = "_TransitionGroupChild_1d6a5_1",
    yO = {
        TransitionGroupChild: gO
    },
    c0 = {
        enter: !1,
        enterActive: !1,
        exit: !1,
        exitActive: !1,
        interrupted: !1
    },
    bO = (e) => ({
        ...c0,
        enter: !e
    });

function _O(e, i) {
    switch (i.type) {
        case "enter-before":
            return {
                enter: !0,
                enterActive: !1,
                exit: !1,
                exitActive: !1,
                interrupted: e.interrupted || e.exit
            };
        case "enter-active":
            return {
                enter: !0,
                enterActive: !0,
                exit: !1,
                exitActive: !1,
                interrupted: !1
            };
        case "exit-before":
            return {
                enter: !1,
                enterActive: !1,
                exit: !0,
                exitActive: !1,
                interrupted: e.interrupted || e.enter
            };
        case "exit-active":
            return {
                enter: !1,
                enterActive: !1,
                exit: !0,
                exitActive: !0,
                interrupted: !1
            };
        case "done":
            return c0;
    }
}

function EO({
    as: e,
    children: i,
    className: r,
    style: u,
    preventMountTransition: c,
    shouldRender: f,
    enterDuration: d,
    exitDuration: m,
    removeChild: p,
    onEnter: g,
    onEnterActive: v,
    onEnterComplete: b,
    onExit: _,
    onExitActive: T,
    onExitComplete: O
}) {
    const [D, x] = (0, E.useReducer)(_O, bO(c)), U = (0, E.useRef)(!1), G = (0, E.useRef)(null), k = (0, E.useRef)(d), L = (0, E.useRef)(m), q = (0, E.useRef)(null);
    k.current = d, L.current = m;
    const H = (0, E.useCallback)((I) => {
        const Q = G.current;
        !Q || I === q.current || (q.current = I, {
            enter: g,
            "enter-active": v,
            "enter-complete": b,
            exit: _,
            "exit-active": T,
            "exit-complete": O
        }[I](Q));
    }, [
        g,
        v,
        b,
        _,
        T,
        O
    ]);
    return (0, E.useLayoutEffect)(() => {
        if (!f) {
            let lt;
            x({
                type: "exit-before"
            }), H("exit");
            const ft = Hu(() => {
                x({
                    type: "exit-active"
                }), H("exit-active"), lt = window.setTimeout(() => {
                    H("exit-complete"), p();
                }, L.current);
            });
            return () => {
                ft(), lt !== void 0 && window.clearTimeout(lt);
            };
        }
        if (c && !U.current) {
            U.current = !0;
            return;
        }
        let I;
        x({
            type: "enter-before"
        }), H("enter");
        const Q = Hu(() => {
            x({
                type: "enter-active"
            }), H("enter-active"), I = window.setTimeout(() => {
                x({
                    type: "done"
                }), H("enter-complete");
            }, k.current);
        });
        return () => {
            Q(), I !== void 0 && window.clearTimeout(I);
        };
    }, [
        c,
        p,
        f,
        H
    ]), (0, E.useEffect)(() => () => {
        U.current = !1;
    }, []), /* @__PURE__ */ (0, Y.jsx)(e, {
        ref: G,
        className: Bn(r, yO.TransitionGroupChild),
        style: u,
        "data-entering": D.enter ? "" : void 0,
        "data-entering-active": D.enterActive ? "" : void 0,
        "data-exiting": D.exit ? "" : void 0,
        "data-exiting-active": D.exitActive ? "" : void 0,
        "data-interrupted": D.interrupted ? "" : void 0,
        children: i
    });
}

function SO(e) {
    const i = e.preventMountTransition ? void 0 : e.enterMountDelay,
        [r, u] = (0, E.useState)(i === void 0);
    return (0, E.useEffect)(() => {
        if (r) return;
        const c = window.setTimeout(() => u(!0), i);
        return () => window.clearTimeout(c);
    }, [i, r]), r ? /* @__PURE__ */ (0, Y.jsx)(EO, { ...e
    }) : null;
}

function qs(e) {
    const {
        as: i = "span",
        children: r,
        className: u,
        style: c,
        enterDuration: f = 0,
        exitDuration: d = 0,
        enterMountDelay: m,
        preventInitialTransition: p = !0,
        insertMethod: g = "append",
        disableAnimations: v
    } = e, b = Ni(e.onEnter ? ? Ri), _ = Ni(e.onEnterActive ? ? Ri), T = Ni(e.onEnterComplete ? ? Ri), O = Ni(e.onExit ? ? Ri), D = Ni(e.onExitActive ? ? Ri), x = Ni(e.onExitComplete ? ? Ri);
    E.Children.forEach(r, (q) => {
        if (q && typeof q == "object" && !("key" in q && q.key)) throw new Error("Child elements of <TransitionGroup /> must include a key");
    });
    const U = (0, E.useCallback)((q) => ({
            component: q,
            shouldRender: !0,
            preventMountTransition: !1,
            removeChild: () => {
                k((H) => H.filter(({
                    component: I
                }) => I.key !== q.key));
            },
            onEnter: b,
            onEnterActive: _,
            onEnterComplete: T,
            onExit: O,
            onExitActive: D,
            onExitComplete: x
        }), [
            b,
            _,
            T,
            O,
            D,
            x
        ]),
        [G, k] = (0, E.useState)(() => Eu(r).map((q) => ({
            ...U(q),
            preventMountTransition: p
        })));
    if ((0, E.useLayoutEffect)(() => {
            k((q) => pO(Eu(r), q, U, g));
        }, [
            r,
            U,
            g
        ]), v) return Eu(r).map((q) => /* @__PURE__ */ (0, Y.jsx)(i, {
        className: u,
        style: c,
        children: q
    }, q.key));
    const L = new Map(Eu(r).map((q) => [q.key, q]));
    return G.map(({
        component: q,
        ...H
    }) => {
        const I = L.get(q.key) ? ? q;
        return /* @__PURE__ */ (0, Y.jsx)(SO, {
            ...H,
            as: i,
            className: u,
            enterDuration: f,
            exitDuration: d,
            enterMountDelay: m,
            style: c,
            children: I
        }, I.key);
    });
}
var TO = "_Layout_imkf6_1",
    AO = "_TransitionItem_imkf6_34",
    dp = {
        Layout: TO,
        TransitionItem: AO
    };

function wO(e) {
    const {
        as: i = "span",
        children: r,
        transitionClassName: u,
        insertMethod: c,
        className: f,
        hideOverflow: d = !1,
        preventInitialTransition: m = !0,
        disableAnimations: p,
        itemAnchor: g = "start",
        dimension: v = "height"
    } = e, b = (0, E.useRef)(null), _ = (0, E.useRef)(null), T = (0, E.useRef)(null), {
        enterTotalDuration: O,
        exitTotalDuration: D,
        variables: x
    } = zO(e), U = (I) => {
        const Q = b.current;
        if (!Q) return;
        const lt = T.current !== null && Date.now() - T.current < 50,
            ft = _.current !== null;
        _.current = I, Q.dataset.direction = lt || ft ? "move" : "in", lt || (Q.dataset.interrupted = String(!!Q.style[v])), Q.style[v] = `${Q.getBoundingClientRect()[v]}px`;
    }, G = (I) => {
        const Q = b.current;
        if (!Q || _.current !== I) return;
        const lt = v === "width" ? I.clientWidth : I.clientHeight;
        Q.style[v] = `${lt}px`;
    }, k = (I) => {
        const Q = b.current;
        Hu(() => {
            Q && _.current === I && (Q.style[v] = "");
        });
    }, L = (I) => {
        const Q = b.current,
            lt = !_.current || _.current === I;
        !Q || !lt || (_.current = null, T.current = Date.now(), Q.dataset.direction = "out", Q.dataset.interrupted = String(!!Q.style[v]), Q.style[v] = `${Q.getBoundingClientRect()[v]}px`);
    }, q = () => {
        const I = b.current;
        I && !_.current && (I.style[v] = "0");
    }, H = () => {
        Hu(() => {
            const I = b.current;
            I && !_.current && (I.style[v] = "");
        });
    };
    return /* @__PURE__ */ (0, Y.jsx)(i, {
        ref: b,
        className: Bn(dp.Layout, f),
        style: x,
        "data-item-anchor": g,
        "data-clip": d,
        "data-dimension": v,
        children: /* @__PURE__ */ (0, Y.jsx)(qs, {
            as: i,
            className: Bn(dp.TransitionItem, u),
            insertMethod: c,
            enterDuration: O,
            exitDuration: D,
            preventInitialTransition: m,
            disableAnimations: p,
            onEnter: U,
            onEnterActive: G,
            onEnterComplete: k,
            onExit: L,
            onExitActive: q,
            onExitComplete: H,
            children: r
        })
    });
}
var bs = 300,
    OO = 300,
    CO = 100,
    DO = 200;

function zO({
    initial: e,
    enter: i,
    exit: r,
    forceCompositeLayer: u,
    layoutEnter: c,
    layoutExit: f,
    layoutMove: d
}) {
    const m = gs(e),
        p = gs(i),
        g = gs(r),
        v = [
            m,
            p,
            g
        ].some((H) => H !== "none"),
        b = i ? .duration ? ? OO,
        _ = r ? .duration ? ? DO,
        T = i ? .delay ? ? CO,
        O = r ? .delay ? ? 0,
        D = c ? .duration ? ? bs,
        x = f ? .duration ? ? bs,
        U = d ? .duration ? ? bs,
        G = c ? .delay ? ? 0,
        k = f ? .delay ? ? 0,
        L = d ? .delay ? ? 0,
        q = vO({
            "tg-will-change": u ? "transform, opacity" : "auto",
            "tg-enter-opacity": vs(i ? .opacity ? ? 1),
            "tg-enter-transform": p,
            "tg-enter-filter": ys(i),
            "tg-enter-duration": ln(b),
            "tg-enter-delay": ln(T),
            "tg-enter-timing-function": i ? .timingFunction ? ? (v ? "var(--cubic-enter)" : "ease"),
            "tg-exit-opacity": vs(r ? .opacity ? ? 0),
            "tg-exit-transform": g,
            "tg-exit-filter": ys(r),
            "tg-exit-duration": ln(_),
            "tg-exit-delay": ln(O),
            "tg-exit-timing-function": r ? .timingFunction ? ? (v ? "var(--cubic-exit)" : "ease"),
            "tg-initial-opacity": vs(e ? .opacity ? ? r ? .opacity ? ? 0),
            "tg-initial-transform": m === "none" ? g : m,
            "tg-initial-filter": ys(e ? ? r),
            "tg-layout-enter-duration": ln(D),
            "tg-layout-enter-delay": ln(G),
            "tg-layout-enter-timing-function": c ? .timingFunction ? ? "var(--cubic-move)",
            "tg-layout-exit-duration": ln(x),
            "tg-layout-exit-delay": ln(k),
            "tg-layout-exit-timing-function": f ? .timingFunction ? ? "var(--cubic-move)",
            "tg-layout-move-duration": ln(U),
            "tg-layout-move-delay": ln(L),
            "tg-layout-move-timing-function": d ? .timingFunction ? ? "var(--cubic-move)"
        });
    return {
        enterTotalDuration: Math.max(T + b, G + D, L + U),
        exitTotalDuration: Math.max(O + _, k + x, L + U),
        variables: q
    };
}
var RO = "_Theme_1s223_2",
    NO = "_Portal_1s223_18",
    MO = "_Tooltip_1s223_24",
    HO = "_HideHint_1s223_33",
    xO = "_HideHintContent_1s223_43",
    LO = "_HideHintText_1s223_49",
    UO = "_Shortcut_1s223_54",
    We = {
        Theme: RO,
        Portal: NO,
        Tooltip: MO,
        HideHint: HO,
        HideHintContent: xO,
        HideHintText: LO,
        Shortcut: UO
    },
    BO = "_Widget_13oam_1",
    jO = "_LandingShadow_13oam_46",
    ZO = "_WidgetEntrance_13oam_56",
    GO = "_WidgetExit_13oam_69",
    XO = "_Shell_13oam_82",
    PO = "_ShellControls_13oam_114",
    YO = "_Launcher_13oam_124",
    qO = "_LauncherRow_13oam_147",
    VO = "_LauncherLabel_13oam_151",
    $O = "_CornerTarget_13oam_161",
    kO = "_Panel_13oam_191",
    IO = "_LogoButton_13oam_191",
    QO = "_ShellContent_13oam_231",
    FO = "_ShellLayout_13oam_235",
    KO = "_LauncherLogo_13oam_308",
    WO = "_blossomEntrance_13oam_1",
    JO = "_Composer_13oam_340",
    tC = "_Textarea_13oam_352",
    eC = "_ComposerFooter_13oam_390",
    nC = "_SendButton_13oam_395",
    aC = "_LauncherDismissButton_13oam_406",
    Kt = {
        Widget: BO,
        LandingShadow: jO,
        WidgetEntrance: ZO,
        WidgetExit: GO,
        Shell: XO,
        ShellControls: PO,
        Launcher: YO,
        LauncherRow: qO,
        LauncherLabel: VO,
        CornerTarget: $O,
        Panel: kO,
        LogoButton: IO,
        ShellContent: QO,
        ShellLayout: FO,
        LauncherLogo: KO,
        blossomEntrance: WO,
        Composer: JO,
        Textarea: tC,
        ComposerFooter: eC,
        SendButton: nC,
        LauncherDismissButton: aC
    },
    Un = {
        editorWidgetCorner: "oai/sites-toolbar/corner",
        editorWidgetInteracted: "oai/sites-toolbar/interacted",
        editorWidgetHideHintSeen: "oai/sites-toolbar/hideHintSeen"
    },
    hp = {
        parse: (e) => e === "true",
        serialize: (e) => String(e)
    },
    mp = {
        [Un.editorWidgetCorner]: {
            parse: (e) => e === "top-left" || e === "top-right" || e === "bottom-left" || e === "bottom-right" ? e : "bottom-right",
            serialize: (e) => e
        },
        [Un.editorWidgetInteracted]: hp,
        [Un.editorWidgetHideHintSeen]: hp
    };

function iC() {
    try {
        return localStorage;
    } catch {
        return null;
    }
}

function lC(e = iC()) {
    return {
        read: (i) => {
            let r = null;
            try {
                r = e ? .getItem(i) ? ? null;
            } catch {}
            return mp[i].parse(r);
        },
        write: (i, r) => {
            try {
                e ? .setItem(i, mp[i].serialize(r));
            } catch {}
        }
    };
}

function rC({
    storage: e,
    reducedMotion: i = !1,
    initiallyHidden: r = !1
} = {}) {
    const u = lC(e);
    return b_()((c, f) => {
        const d = (m) => {
            c((p) => {
                const g = m(p.state);
                return g === p.state ? p : {
                    state: g,
                    showHideHint: (g.view === "hiding" || g.view === "hidden") && p.showHideHint,
                    showLogoEntrance: g.view === "launcher" && p.showLogoEntrance
                };
            });
        };
        return {
            state: {
                view: r ? "hidden" : "launcher",
                draft: ""
            },
            corner: u.read(Un.editorWidgetCorner),
            hasInteracted: u.read(Un.editorWidgetInteracted),
            hasSeenHideHint: u.read(Un.editorWidgetHideHintSeen),
            showHideHint: !1,
            showLogoEntrance: !r && !i,
            actions: {
                setCorner: (m) => {
                    f().corner !== m && c({
                        corner: m
                    }), u.write(Un.editorWidgetCorner, m);
                },
                markInteracted: () => {
                    f().hasInteracted || (c({
                        hasInteracted: !0
                    }), u.write(Un.editorWidgetInteracted, !0));
                },
                markHideHintSeen: () => {
                    const m = f();
                    m.hasSeenHideHint || !m.showHideHint || m.state.view !== "hidden" || (c({
                        hasSeenHideHint: !0
                    }), u.write(Un.editorWidgetHideHintSeen, !0));
                },
                finishLogoEntrance: () => {
                    f().showLogoEntrance && c({
                        showLogoEntrance: !1
                    });
                },
                open: () => d((m) => m.view === "launcher" ? {
                    ...m,
                    view: "composer"
                } : m),
                collapse: () => d((m) => m.view === "composer" ? {
                    ...m,
                    view: "launcher"
                } : m),
                changeDraft: (m) => d((p) => p.view === "composer" ? {
                    ...p,
                    draft: m
                } : p),
                hide: () => c((m) => {
                    const {
                        state: p
                    } = m;
                    return p.view !== "launcher" && p.view !== "composer" ? m : {
                        state: {
                            ...p,
                            view: "hiding"
                        },
                        showHideHint: !m.hasSeenHideHint,
                        showLogoEntrance: !1
                    };
                }),
                dismiss: () => d((m) => m.view === "launcher" || m.view === "composer" ? {
                    ...m,
                    view: "dismissed"
                } : m),
                finishHide: () => d((m) => m.view === "hiding" ? {
                    ...m,
                    view: "hidden"
                } : m),
                restoreHidden: () => d((m) => m.view === "hiding" || m.view === "hidden" ? {
                    view: "launcher",
                    draft: m.draft
                } : m),
                beginHandoff: () => {
                    const {
                        state: m
                    } = f();
                    return m.view !== "composer" || !m.draft.trim() ? null : (c({
                        state: {
                            view: "handoff",
                            request: m.draft
                        }
                    }), m.draft);
                },
                finishHandoff: () => d((m) => m.view === "handoff" ? {
                    view: "launcher",
                    draft: m.request
                } : m)
            }
        };
    });
}
var uC = 1e3,
    vp = 3e3,
    oC = 480,
    cC = 1500,
    sC = 2e3,
    fC = 150;

function dC(e, i, r, u = !1) {
    const [c, f] = (0, E.useState)(e && i ? "away" : "tucked"), [d, m] = (0, E.useState)(!1), [p, g] = (0, E.useState)(!1), [v, b] = (0, E.useState)(!1), [_, T] = (0, E.useState)(e && i), [O, D] = (0, E.useState)(!1), [x, U] = (0, E.useState)(!1), G = (0, E.useRef)(!0), k = (0, E.useRef)(e && i), L = d || v;
    return (0, E.useEffect)(() => {
        if (!e) {
            D(!1), U(!1);
            return;
        }
        if (x) return;
        if (O) {
            if (d || p) return;
            const H = window.setTimeout(() => D(!1), fC);
            return () => window.clearTimeout(H);
        }
        if (!d) return;
        const q = window.setTimeout(() => D(!0), sC);
        return () => window.clearTimeout(q);
    }, [
        e,
        d,
        p,
        O,
        x
    ]), (0, E.useEffect)(() => {
        if (!e) {
            G.current = !0, k.current = !1, f("tucked"), m(!1), g(!1), b(!1), T(!1);
            return;
        }
        if (L) {
            k.current = !1, G.current = !1, T(!0), f("expanded");
            return;
        }
        if (p || k.current || (f("tucked"), !i)) return;
        if (r) {
            if (G.current = !1, u) {
                const H = window.setTimeout(() => f("away"), vp);
                return () => window.clearTimeout(H);
            }
            f("away");
            return;
        }
        const q = [];
        return G.current ? q.push(window.setTimeout(() => {
            G.current = !1, f("expanded"), q.push(window.setTimeout(() => f("away"), oC));
        }, u ? vp : uC)) : q.push(window.setTimeout(() => f("away"), cC)), () => q.forEach((H) => window.clearTimeout(H));
    }, [
        e,
        i,
        L,
        p,
        r,
        u
    ]), {
        phase: c,
        quiet: _,
        hoverHintVisible: O,
        hintDismissed: x,
        dismissHint: () => {
            U(!0), D(!1), g(!1);
        },
        hintHandlers: {
            onContentPointerEnter: (q) => {
                q.pointerType !== "touch" && g(!0);
            },
            onContentPointerLeave: () => g(!1)
        },
        targetHandlers: {
            onPointerEnter: (q) => {
                q.pointerType !== "touch" && (U(!1), m(!0));
            },
            onPointerLeave: () => m(!1),
            onFocus: () => b(!0),
            onBlur: () => b(!1)
        }
    };
}
var hC = 5,
    mC = 520,
    vC = 16,
    pC = 24,
    gC = 137,
    yC = 36,
    Su = 32,
    pp = 280,
    bC = 20;

function gp(e, i, r, u) {
    return `${i < u / 2 ? "top" : "bottom"}-${e < r / 2 ? "left" : "right"}`;
}

function _C({
    corner: e,
    onCornerChange: i,
    onInteract: r
}) {
    const [u, c] = (0, E.useState)(null), [f, d] = (0, E.useState)(null), [m, p] = (0, E.useState)(null), [g, v] = (0, E.useState)(!1), [b, _] = (0, E.useState)({
        width: gC,
        height: yC,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight
    }), T = (0, E.useRef)(null), O = (0, E.useRef)(null), D = (0, E.useRef)(!1), x = b.viewportWidth <= mC ? vC : pC;
    (0, E.useLayoutEffect)(() => {
        function W() {
            const pt = f ? .getBoundingClientRect();
            _((ht) => {
                const yt = {
                    width: pt ? .width ? ? ht.width,
                    height: pt ? .height ? ? ht.height,
                    viewportWidth: window.innerWidth,
                    viewportHeight: window.innerHeight
                };
                return yt.width === ht.width && yt.height === ht.height && yt.viewportWidth === ht.viewportWidth && yt.viewportHeight === ht.viewportHeight ? ht : yt;
            });
        }
        W();
        const J = new ResizeObserver(() => (0, ju.flushSync)(W));
        return f && J.observe(f), window.addEventListener("resize", W), () => {
            J.disconnect(), window.removeEventListener("resize", W);
        };
    }, [f]), (0, E.useLayoutEffect)(() => () => {
        O.current !== null && window.clearTimeout(O.current);
    }, []);

    function U() {
        O.current !== null && window.clearTimeout(O.current), v(!0), O.current = window.setTimeout(() => {
            O.current = null, v(!1);
        }, pp + bC);
    }

    function G(W) {
        return {
            x: W.endsWith("left") ? x : Math.max(x, b.viewportWidth - b.width - x),
            y: W.startsWith("top") ? x : Math.max(x, b.viewportHeight - b.height - x)
        };
    }

    function k(W) {
        if (W.pointerType === "touch" || W.button !== 0 || !W.isPrimary || T.current) return;
        const J = u ? .getBoundingClientRect();
        J && (D.current = !1, O.current !== null && window.clearTimeout(O.current), O.current = null, v(!1), T.current = {
            pointerId: W.pointerId,
            x: W.clientX,
            y: W.clientY,
            start: {
                x: J.x,
                y: J.y
            },
            moved: !1,
            candidate: e
        }, W.currentTarget.setPointerCapture(W.pointerId));
    }

    function L(W) {
        const J = T.current;
        if (!J || J.pointerId !== W.pointerId) return;
        const pt = W.clientX - J.x,
            ht = W.clientY - J.y;
        if (!J.moved && Math.hypot(pt, ht) < hC) return;
        J.moved || r(), J.moved = !0;
        const yt = {
            x: Math.max(0, Math.min(J.start.x + pt, b.viewportWidth - b.width)),
            y: Math.max(0, Math.min(J.start.y + ht, b.viewportHeight - b.height))
        };
        J.candidate = gp(yt.x + b.width / 2, yt.y + b.height / 2, b.viewportWidth, b.viewportHeight), p(yt);
    }

    function q(W) {
        const J = T.current;
        !J || J.pointerId !== W.pointerId || (T.current = null, D.current = J.moved, J.moved && (i(J.candidate), U(), p(null)), W.currentTarget.hasPointerCapture(W.pointerId) && W.currentTarget.releasePointerCapture(W.pointerId));
    }

    function H(W) {
        !T.current || T.current.pointerId !== W.pointerId || (D.current = T.current.moved, T.current = null, U(), p(null), W.currentTarget.hasPointerCapture(W.pointerId) && W.currentTarget.releasePointerCapture(W.pointerId));
    }

    function I(W) {
        D.current && W.detail !== 0 && (W.preventDefault(), W.stopPropagation()), D.current = !1;
    }

    function Q(W) {
        if (W.altKey || W.ctrlKey || W.metaKey || W.shiftKey || T.current) return;
        let J;
        switch (W.key) {
            case "ArrowLeft":
                J = e.startsWith("top") ? "top-left" : "bottom-left";
                break;
            case "ArrowRight":
                J = e.startsWith("top") ? "top-right" : "bottom-right";
                break;
            case "ArrowUp":
                J = e.endsWith("left") ? "top-left" : "top-right";
                break;
            case "ArrowDown":
                J = e.endsWith("left") ? "bottom-left" : "bottom-right";
                break;
            default:
                return;
        }
        W.preventDefault(), r(), i(J), U();
    }
    const lt = m ? ? G(e),
        ft = G(m ? gp(m.x + b.width / 2, m.y + b.height / 2, b.viewportWidth, b.viewportHeight) : e);
    return {
        widgetRef: c,
        contentRef: d,
        snapping: g,
        dragging: m !== null,
        style: {
            left: lt.x,
            top: lt.y,
            "--widget-snap-duration": `${pp}ms`,
            "--widget-surface-width": `${b.width}px`,
            "--widget-surface-height": `${b.height}px`,
            "--corner-x-direction": e.endsWith("left") ? -1 : 1,
            "--corner-y-direction": e.startsWith("top") ? -1 : 1,
            "--tuck-x": `${(e.endsWith("left") ? -Su : b.viewportWidth - Su) - lt.x}px`,
            "--tuck-y": `${(e.startsWith("top") ? -Su : b.viewportHeight - Su) - lt.y}px`
        },
        shadowStyle: {
            left: ft.x,
            top: ft.y,
            width: b.width,
            height: b.height
        },
        dragHandlers: {
            onPointerDown: k,
            onPointerMove: L,
            onPointerUp: q,
            onPointerCancel: H,
            onLostPointerCapture: H,
            onClickCapture: I,
            onKeyDown: Q
        }
    };
}
var s0 = "(prefers-reduced-motion: reduce)";

function EC(e) {
    const i = window.matchMedia(s0);
    return i.addEventListener("change", e), () => i.removeEventListener("change", e);
}

function SC() {
    return window.matchMedia(s0).matches;
}

function TC() {
    return (0, E.useSyncExternalStore)(EC, SC);
}
var f0 = "(hover: hover) and (pointer: fine)";

function AC(e) {
    const i = window.matchMedia(f0);
    return i.addEventListener("change", e), () => i.removeEventListener("change", e);
}

function wC() {
    return window.matchMedia(f0).matches;
}

function OC() {
    return (0, E.useSyncExternalStore)(AC, wC);
}

function CC(e) {
    return /* @__PURE__ */ (0, Y.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: /* @__PURE__ */ (0, Y.jsx)("path", {
            d: "M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41422L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
        })
    });
}

function d0(e) {
    return /* @__PURE__ */ (0, Y.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: /* @__PURE__ */ (0, Y.jsx)("path", {
            fillRule: "evenodd",
            d: "M5.636 5.636a1 1 0 0 1 1.414 0l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 0-1.414Z",
            clipRule: "evenodd"
        })
    });
}

function DC({
    accountId: e,
    chatgptOrigin: i,
    projectId: r
}) {
    const u = new URL(r ? `/sites/${encodeURIComponent(r)}/edit` : "/sites", i);
    return r && e && u.searchParams.set("account_id", e), u;
}

function Vs(e, i) {
    return i === null ? e : `[${e.replaceAll(`\r
`, " ").replaceAll("\r", " ").replaceAll(`
`, " ").replaceAll("\\", "\\\\").replaceAll("](", "]\\(").replaceAll("]", "\\]")}](sites-project://${encodeURIComponent(i)})`;
}

function $s({
    accountId: e,
    browserUrl: i,
    chatgptOrigin: r,
    query: u,
    isDefaultPrompt: c = !1,
    projectId: f,
    editContext: d
}) {
    if (f) {
        const p = DC({
            accountId: e,
            chatgptOrigin: r,
            projectId: f
        });
        return d ? .chatgpt_conversation_id && p.searchParams.set("conversation_id", d.chatgpt_conversation_id), d ? .codex_thread_id && p.searchParams.set("codex_thread_id", d.codex_thread_id), c || p.searchParams.set("prompt", u), p.searchParams.set("browser_url", i), p;
    }
    const m = new URL("/codex/open-app", r);
    return m.searchParams.set("app_brand", "chatgpt"), m.searchParams.set("fallback", "work"), e && m.searchParams.set("account_id", e), d ? .codex_thread_id && m.searchParams.set("codex_thread_id", d.codex_thread_id), d ? .chatgpt_conversation_id && m.searchParams.set("chatgpt_conversation_id", d.chatgpt_conversation_id), m.searchParams.set("q", u), m.searchParams.set("browserUrl", i), m;
}
var _s = "cubic-bezier(0.2, 1.25, 0.3, 1)",
    yp = 360,
    bp = 280,
    zC = 1e3,
    RC = 180,
    NC = 100,
    MC = 200,
    HC = 80,
    xC = 140,
    LC = 120,
    Es = 290,
    h0 = 12,
    _p = h0 + 4,
    UC = 280,
    BC = 52,
    jC = -8,
    ZC = -12;

function GC(e) {
    return !(e.defaultPrevented || e.repeat || e.isComposing || e.code !== "KeyM" || !e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.getModifierState("AltGraph") || document.designMode === "on" || e.composedPath().some((i) => i instanceof HTMLElement && (i.isContentEditable || i.matches('input, textarea, select, [role="textbox"], [role="searchbox"], [role="combobox"], [role="spinbutton"]'))));
}

function XC({
    config: e,
    accountId: i,
    chatgptOrigin: r,
    projectId: u,
    siteTitle: c
}) {
    const f = Xi(),
        d = (0, E.useRef)(null),
        m = (0, E.useRef)(null),
        p = (0, E.useRef)(!1),
        g = (0, E.useRef)(!1),
        v = TC(),
        b = OC(),
        [_] = (0, E.useState)(() => rC({
            reducedMotion: v,
            initiallyHidden: e.hidden
        })),
        [T] = (0, E.useState)(D2),
        {
            state: O,
            actions: D,
            corner: x,
            hasInteracted: U,
            showHideHint: G,
            showLogoEntrance: k
        } = E_(_),
        L = O.view === "composer",
        q = L ? NC : 0,
        H = L ? yp : bp,
        I = O.view === "hiding",
        Q = I || O.view === "hidden",
        lt = O.view !== "handoff" && O.view !== "dismissed" && (b || !Q),
        ft = b && Q,
        W = !b || U,
        J = dC(ft, O.view === "hidden", v, G),
        pt = ft && O.view === "hidden" && !J.hintDismissed && (J.hoverHintVisible || G && !J.quiet && J.phase !== "away"),
        {
            widgetRef: ht,
            contentRef: yt,
            style: F,
            dragging: j,
            dragHandlers: V,
            snapping: ot,
            shadowStyle: gt
        } = _C({
            corner: x,
            onCornerChange: D.setCorner,
            onInteract: D.markInteracted
        }),
        te = O.view === "handoff" ? "" : O.draft,
        w = $s({
            accountId: i,
            projectId: u,
            browserUrl: window.location.href,
            chatgptOrigin: r,
            query: f.formatMessage(Wt.editorWidgetDefaultEditPrompt, {
                site: Vs(c, u)
            }),
            isDefaultPrompt: !0,
            editContext: e.edit_context
        });
    (0, E.useEffect)(() => {
        pt && D.markHideHintSeen();
    }, [pt, D]), (0, E.useEffect)(() => {
        !lt || Q || g.current || (g.current = !0, xn("editor_widget_shown"));
    }, [lt, Q]), (0, E.useEffect)(() => {
        if (O.view !== "handoff") return;
        const nt = window.setTimeout(D.finishHandoff, zC);
        return () => window.clearTimeout(nt);
    }, [O.view, D]);
    const X = (0, E.useCallback)(() => {
            const nt = m.current;
            !p.current || !nt || nt.closest("[inert]") || (p.current = !1, nt.focus({
                preventScroll: !0
            }));
        }, []),
        K = (0, E.useCallback)((nt) => {
            m.current = nt, X();
        }, [X]);
    (0, E.useLayoutEffect)(() => {
        v && (I && D.finishHide(), D.finishLogoEntrance());
    }, [
        I,
        v,
        D
    ]), (0, E.useEffect)(() => {
        O.view === "launcher" && X();
    }, [O.view, X]);
    const tt = (0, E.useCallback)(() => {
        p.current = !0, D.restoreHidden(), T(!1), xn("editor_widget_restored");
    }, [D, T]);
    (0, E.useEffect)(() => {
        if (!ft) return;

        function nt(Ee) {
            GC(Ee) && (Ee.preventDefault(), tt());
        }
        return window.addEventListener("keydown", nt), () => window.removeEventListener("keydown", nt);
    }, [ft, tt]);

    function mt(nt) {
        nt.relatedTarget instanceof Node && nt.currentTarget.contains(nt.relatedTarget) || D.collapse();
    }

    function st(nt) {
        L && nt.key === "Escape" && !nt.defaultPrevented && !nt.nativeEvent.isComposing && nt.nativeEvent.keyCode !== 229 && (nt.preventDefault(), p.current = !0, D.collapse());
    }

    function wt() {
        T(!0), b ? D.hide() : D.dismiss(), xn("editor_widget_hidden");
    }

    function ee(nt) {
        nt.preventDefault();
        const Ee = D.beginHandoff();
        if (Ee === null) return;
        xn("editor_widget_edit_request_submitted");
        const Gn = f.formatMessage(Wt.invitationBannerEditPrompt, {
                site: Vs(c, u)
            }),
            Ie = $s({
                accountId: i,
                projectId: u,
                browserUrl: window.location.href,
                chatgptOrigin: r,
                query: `${Gn}

${Ee.trim()}`,
                editContext: e.edit_context
            });
        Ie.searchParams.set("site_edit_source", "widget");
        try {
            window.open(Ie.toString(), "_blank", "noopener,noreferrer");
        } catch {}
    }
    return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, {
        children: [j && /* @__PURE__ */ (0, Y.jsx)("div", {
            className: Kt.LandingShadow,
            style: gt,
            "aria-hidden": "true"
        }), /* @__PURE__ */ (0, Y.jsx)(qs, {
            as: "div",
            className: Kt.WidgetExit,
            disableAnimations: v,
            exitDuration: 0,
            onExit: (nt) => {
                nt.inert = !0;
            },
            onEnter: (nt) => {
                nt.inert = !1, X();
            },
            children: lt && /* @__PURE__ */ (0, Y.jsxs)("div", {
                ref: ht,
                className: Kt.Widget,
                style: F,
                "data-dragging": j ? "" : void 0,
                "data-snapping": ot ? "" : void 0,
                "data-corner": x,
                "data-tucked": Q ? "" : void 0,
                "data-peek-phase": Q ? J.phase : void 0,
                "data-quiet-tuck": J.quiet ? "" : void 0,
                dir: Ws(f.locale),
                lang: f.locale,
                onBlur: mt,
                onClickCapture: D.markInteracted,
                onKeyDown: st,
                children: [ /* @__PURE__ */ (0, Y.jsx)(qs, {
                    as: "div",
                    className: Kt.WidgetEntrance,
                    disableAnimations: v,
                    enterDuration: RC,
                    preventInitialTransition: Q,
                    children: /* @__PURE__ */ (0, Y.jsx)("div", {
                        className: Kt.Panel,
                        "data-expanded": L ? "" : void 0,
                        children: /* @__PURE__ */ (0, Y.jsx)("div", {
                            className: Kt.Shell,
                            onTransitionEnd: (nt) => {
                                nt.target === nt.currentTarget && nt.propertyName === "transform" && !nt.pseudoElement && D.finishHide();
                            },
                            children: /* @__PURE__ */ (0, Y.jsxs)("div", {
                                ref: yt,
                                className: Kt.ShellControls,
                                inert: Q,
                                children: [ /* @__PURE__ */ (0, Y.jsx)(wO, {
                                    as: "div",
                                    className: Kt.ShellLayout,
                                    disableAnimations: v,
                                    transitionClassName: Kt.ShellContent,
                                    dimension: "width",
                                    itemAnchor: x.endsWith("left") ? "start" : "end",
                                    hideOverflow: !0,
                                    initial: {
                                        opacity: 0
                                    },
                                    enter: {
                                        opacity: 1,
                                        delay: L ? MC : HC,
                                        duration: xC
                                    },
                                    exit: {
                                        opacity: 0,
                                        duration: LC
                                    },
                                    layoutEnter: {
                                        delay: q,
                                        duration: yp,
                                        timingFunction: _s
                                    },
                                    layoutExit: {
                                        duration: bp,
                                        timingFunction: _s
                                    },
                                    layoutMove: {
                                        delay: q,
                                        duration: H,
                                        timingFunction: _s
                                    },
                                    children: L ? /* @__PURE__ */ (0, Y.jsxs)("form", {
                                        className: Kt.Composer,
                                        onSubmit: ee,
                                        children: [ /* @__PURE__ */ (0, Y.jsx)(G2, {
                                            textareaRef: d,
                                            className: Kt.Textarea,
                                            autoFocus: !0,
                                            "aria-label": f.formatMessage(Wt.editorWidgetComposerLabel),
                                            placeholder: f.formatMessage(Wt.editorWidgetComposerPlaceholder),
                                            value: te,
                                            onKeyDown: (nt) => {
                                                nt.stopPropagation(), st(nt);
                                            },
                                            onKeyUp: (nt) => nt.stopPropagation(),
                                            onKeyPress: (nt) => nt.stopPropagation(),
                                            onChange: (nt) => D.changeDraft(nt.target.value)
                                        }), /* @__PURE__ */ (0, Y.jsx)("div", {
                                            className: Kt.ComposerFooter,
                                            children: /* @__PURE__ */ (0, Y.jsx)(Qv, {
                                                className: Kt.SendButton,
                                                color: "primary",
                                                variant: "solid",
                                                size: "lg",
                                                iconSize: "lg",
                                                pill: !0,
                                                uniform: !0,
                                                type: "submit",
                                                "aria-label": f.formatMessage(Wt.editorWidgetSendAction),
                                                disabled: !te.trim(),
                                                children: /* @__PURE__ */ (0, Y.jsx)(CC, {
                                                    "aria-hidden": "true",
                                                    focusable: "false"
                                                })
                                            })
                                        })]
                                    }, "composer") : /* @__PURE__ */ (0, Y.jsxs)("div", {
                                        className: Kt.LauncherRow,
                                        children: [ /* @__PURE__ */ (0, Y.jsx)(_u, {
                                            contentClassName: We.Tooltip,
                                            maxWidth: Es,
                                            content: W ? null : f.formatMessage(Wt.editorWidgetOpenAction),
                                            sideOffset: _p,
                                            children: /* @__PURE__ */ (0, Y.jsx)(H2, {
                                                className: Kt.LogoButton,
                                                href: w.toString(),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                onClick: () => xn("editor_widget_open_in_chatgpt_clicked"),
                                                variant: "ghost",
                                                size: "lg",
                                                pill: !0,
                                                uniform: !0,
                                                "aria-label": f.formatMessage(Wt.editorWidgetOpenAction),
                                                children: /* @__PURE__ */ (0, Y.jsx)("span", {
                                                    className: Kt.LauncherLogo,
                                                    "data-entering": k ? "" : void 0,
                                                    "aria-hidden": "true",
                                                    children: /* @__PURE__ */ (0, Y.jsx)(Y2, {
                                                        src: "/_sites/dispatch-assets/app-openai.svg",
                                                        alt: "",
                                                        width: 18,
                                                        height: 18,
                                                        onAnimationEnd: D.finishLogoEntrance
                                                    })
                                                })
                                            })
                                        }), /* @__PURE__ */ (0, Y.jsx)(_u, {
                                            contentClassName: We.Tooltip,
                                            maxWidth: Es,
                                            content: W || j ? null : f.formatMessage(Wt.editorWidgetLaunchTooltip),
                                            sideOffset: h0,
                                            children: /* @__PURE__ */ (0, Y.jsx)("button", {
                                                ref: K,
                                                className: Kt.Launcher,
                                                type: "button",
                                                "aria-expanded": "false",
                                                "aria-keyshortcuts": b ? "ArrowUp ArrowDown ArrowLeft ArrowRight" : void 0,
                                                ...b ? V : {},
                                                "aria-label": f.formatMessage(Wt.editorWidgetLaunchAction),
                                                onClick: () => {
                                                    D.open(), xn("editor_widget_composer_opened");
                                                },
                                                children: /* @__PURE__ */ (0, Y.jsx)("span", {
                                                    className: Kt.LauncherLabel,
                                                    children: /* @__PURE__ */ (0, Y.jsx)(Hi, { ...Wt.editorWidgetLaunchAction
                                                    })
                                                })
                                            })
                                        })]
                                    }, "launcher")
                                }), /* @__PURE__ */ (0, Y.jsx)(_u, {
                                    contentClassName: We.Tooltip,
                                    maxWidth: Es,
                                    content: L || W ? null : f.formatMessage(Wt.editorWidgetHideAction),
                                    sideOffset: _p,
                                    children: /* @__PURE__ */ (0, Y.jsx)(Qv, {
                                        className: Kt.LauncherDismissButton,
                                        variant: "ghost",
                                        size: "lg",
                                        pill: !0,
                                        uniform: !0,
                                        "aria-hidden": L,
                                        tabIndex: L ? -1 : 0,
                                        "aria-label": f.formatMessage(Wt.editorWidgetHideAction),
                                        onClick: wt,
                                        children: /* @__PURE__ */ (0, Y.jsx)(d0, {
                                            "aria-hidden": "true",
                                            focusable: "false"
                                        })
                                    })
                                })]
                            })
                        })
                    }, "panel")
                }), ft && /* @__PURE__ */ (0, Y.jsx)(_u, {
                    contentClassName: Bn(We.Tooltip, We.HideHint),
                    forceOpen: pt,
                    onDismiss: J.dismissHint,
                    interactive: !0,
                    ...J.hintHandlers,
                    side: x.startsWith("top") ? "bottom" : "top",
                    align: x.endsWith("left") ? "start" : "end",
                    alignOffset: BC,
                    sideOffset: x.startsWith("top") ? jC : ZC,
                    maxWidth: UC,
                    content: /* @__PURE__ */ (0, Y.jsxs)("span", {
                        className: We.HideHintContent,
                        children: [ /* @__PURE__ */ (0, Y.jsx)("span", {
                            className: We.HideHintText,
                            children: /* @__PURE__ */ (0, Y.jsx)(Hi, { ...Wt.editorWidgetHideHint
                            })
                        }), /* @__PURE__ */ (0, Y.jsxs)("span", {
                            className: We.Shortcut,
                            children: [ /* @__PURE__ */ (0, Y.jsx)("kbd", {
                                children: j2() ? "⌥" : "Alt"
                            }), /* @__PURE__ */ (0, Y.jsx)("kbd", {
                                children: "M"
                            })]
                        })]
                    }),
                    children: /* @__PURE__ */ (0, Y.jsx)("button", {
                        className: Kt.CornerTarget,
                        type: "button",
                        "aria-label": f.formatMessage(Wt.editorWidgetRestoreAction),
                        "aria-keyshortcuts": "Alt+M",
                        ...J.targetHandlers,
                        onClick: tt
                    })
                })]
            }, "widget")
        })]
    });
}

function PC(e) {
    return /* @__PURE__ */ (0, Y.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: /* @__PURE__ */ (0, Y.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4784 6.06414 21.4784 8.93588 19.7071 10.7071L18.7073 11.7069L11.6135 18.8007C10.8766 19.5376 9.92793 20.0258 8.89999 20.1971L4.16441 20.9864C3.84585 21.0395 3.52127 20.9355 3.29291 20.7071C3.06454 20.4788 2.96053 20.1542 3.01362 19.8356L3.80288 15.1C3.9742 14.0721 4.46243 13.1234 5.19932 12.3865L13.2929 4.29291ZM13 7.41422L6.61353 13.8007C6.1714 14.2428 5.87846 14.8121 5.77567 15.4288L5.21656 18.7835L8.57119 18.2244C9.18795 18.1216 9.75719 17.8286 10.1993 17.3865L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z"
        })
    });
}
var YC = "_Banner_1iivt_1",
    qC = "_Content_1iivt_34",
    VC = "_Message_1iivt_42",
    $C = "_OwnerName_1iivt_50",
    kC = "_Actions_1iivt_54",
    IC = "_EditLink_1iivt_62",
    QC = "_DismissButton_1iivt_63",
    Ba = {
        Banner: YC,
        Content: qC,
        Message: VC,
        OwnerName: $C,
        Actions: kC,
        EditLink: IC,
        DismissButton: QC
    },
    FC = "/_internal/sites_widget/invitation-banner/dismiss";

function Ep(e) {
    const i = e.currentTarget,
        r = i.offsetWidth;
    let u = 0.985;
    r <= 80 ? u = 0.96 : r <= 150 ? u = 0.97 : r <= 220 ? u = 0.98 : r > 600 && (u = 0.995), i.style.setProperty("--scale", u.toString());
}

function KC({
    editContext: e,
    accountId: i,
    chatgptOrigin: r,
    ownerName: u,
    projectId: c,
    siteTitle: f,
    onDismiss: d
}) {
    const m = Xi();
    (0, E.useEffect)(() => {
        xn("editor_invite_banner_shown");
    }, []);
    const p = $s({
        editContext: e,
        accountId: i,
        projectId: c,
        browserUrl: window.location.href,
        chatgptOrigin: r,
        query: m.formatMessage(Wt.invitationBannerEditPrompt, {
            site: Vs(f, c)
        }),
        isDefaultPrompt: !0
    });

    function g() {
        xn("editor_invite_banner_dismissed"), d(), fetch(FC, {
            method: "POST",
            credentials: "same-origin"
        }).catch(() => {});
    }

    function v(b) {
        xn("editor_invite_banner_edit_with_chat_clicked");
        const _ = new URL(b.currentTarget.href);
        _.searchParams.has("browser_url") && _.searchParams.set("browser_url", window.location.href), b.currentTarget.href = _.toString();
    }
    return /* @__PURE__ */ (0, Y.jsx)("aside", {
        className: Ba.Banner,
        "aria-label": m.formatMessage(Wt.invitationBannerLabel),
        dir: Ws(m.locale),
        lang: m.locale,
        children: /* @__PURE__ */ (0, Y.jsxs)("div", {
            className: Ba.Content,
            children: [ /* @__PURE__ */ (0, Y.jsx)("div", {
                className: Ba.Message,
                children: u ? /* @__PURE__ */ (0, Y.jsx)(Hi, {
                    ...Wt.invitationBannerMessageWithOwner,
                    values: {
                        ownerName: u,
                        strong: (b) => /* @__PURE__ */ (0, Y.jsx)("strong", {
                            className: Ba.OwnerName,
                            children: b
                        })
                    }
                }) : /* @__PURE__ */ (0, Y.jsx)(Hi, { ...Wt.invitationBannerMessage
                })
            }), /* @__PURE__ */ (0, Y.jsxs)("div", {
                className: Ba.Actions,
                children: [ /* @__PURE__ */ (0, Y.jsxs)("a", {
                    className: Ba.EditLink,
                    href: p.toString(),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: v,
                    onPointerEnter: Ep,
                    children: [ /* @__PURE__ */ (0, Y.jsx)(PC, {
                        "aria-hidden": "true",
                        focusable: "false"
                    }), /* @__PURE__ */ (0, Y.jsx)(Hi, { ...Wt.invitationBannerEditAction
                    })]
                }), /* @__PURE__ */ (0, Y.jsx)("button", {
                    className: Ba.DismissButton,
                    type: "button",
                    "aria-label": m.formatMessage(Wt.invitationBannerDismissAction),
                    onPointerEnter: Ep,
                    onClick: g,
                    children: /* @__PURE__ */ (0, Y.jsx)(d0, {
                        "aria-hidden": "true",
                        focusable: "false"
                    })
                })]
            })]
        })
    });
}
var WC = /* @__PURE__ */ He(((e) => {
        function i(F, j) {
            var V = F.length;
            F.push(j);
            t: for (; 0 < V;) {
                var ot = V - 1 >>> 1,
                    gt = F[ot];
                if (0 < c(gt, j)) F[ot] = j, F[V] = gt, V = ot;
                else break t;
            }
        }

        function r(F) {
            return F.length === 0 ? null : F[0];
        }

        function u(F) {
            if (F.length === 0) return null;
            var j = F[0],
                V = F.pop();
            if (V !== j) {
                F[0] = V;
                t: for (var ot = 0, gt = F.length, te = gt >>> 1; ot < te;) {
                    var w = 2 * (ot + 1) - 1,
                        X = F[w],
                        K = w + 1,
                        tt = F[K];
                    if (0 > c(X, V)) K < gt && 0 > c(tt, X) ? (F[ot] = tt, F[K] = V, ot = K) : (F[ot] = X, F[w] = V, ot = w);
                    else if (K < gt && 0 > c(tt, V)) F[ot] = tt, F[K] = V, ot = K;
                    else break t;
                }
            }
            return j;
        }

        function c(F, j) {
            var V = F.sortIndex - j.sortIndex;
            return V !== 0 ? V : F.id - j.id;
        }
        if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            e.unstable_now = function() {
                return f.now();
            };
        } else {
            var d = Date,
                m = d.now();
            e.unstable_now = function() {
                return d.now() - m;
            };
        }
        var p = [],
            g = [],
            v = 1,
            b = null,
            _ = 3,
            T = !1,
            O = !1,
            D = !1,
            x = !1,
            U = typeof setTimeout == "function" ? setTimeout : null,
            G = typeof clearTimeout == "function" ? clearTimeout : null,
            k = typeof setImmediate < "u" ? setImmediate : null;

        function L(F) {
            for (var j = r(g); j !== null;) {
                if (j.callback === null) u(g);
                else if (j.startTime <= F) u(g), j.sortIndex = j.expirationTime, i(p, j);
                else break;
                j = r(g);
            }
        }

        function q(F) {
            if (D = !1, L(F), !O)
                if (r(p) !== null) O = !0, H || (H = !0, J());
                else {
                    var j = r(g);
                    j !== null && yt(q, j.startTime - F);
                }
        }
        var H = !1,
            I = -1,
            Q = 5,
            lt = -1;

        function ft() {
            return x ? !0 : !(e.unstable_now() - lt < Q);
        }

        function W() {
            if (x = !1, H) {
                var F = e.unstable_now();
                lt = F;
                var j = !0;
                try {
                    t: {
                        O = !1,
                        D && (D = !1, G(I), I = -1),
                        T = !0;
                        var V = _;
                        try {
                            e: {
                                for (L(F), b = r(p); b !== null && !(b.expirationTime > F && ft());) {
                                    var ot = b.callback;
                                    if (typeof ot == "function") {
                                        b.callback = null, _ = b.priorityLevel;
                                        var gt = ot(b.expirationTime <= F);
                                        if (F = e.unstable_now(), typeof gt == "function") {
                                            b.callback = gt, L(F), j = !0;
                                            break e;
                                        }
                                        b === r(p) && u(p), L(F);
                                    } else u(p);
                                    b = r(p);
                                }
                                if (b !== null) j = !0;
                                else {
                                    var te = r(g);
                                    te !== null && yt(q, te.startTime - F), j = !1;
                                }
                            }
                            break t;
                        }
                        finally {
                            b = null, _ = V, T = !1;
                        }
                        j = void 0;
                    }
                }
                finally {
                    j ? J() : H = !1;
                }
            }
        }
        var J;
        if (typeof k == "function") J = function() {
            k(W);
        };
        else if (typeof MessageChannel < "u") {
            var pt = new MessageChannel(),
                ht = pt.port2;
            pt.port1.onmessage = W, J = function() {
                ht.postMessage(null);
            };
        } else J = function() {
            U(W, 0);
        };

        function yt(F, j) {
            I = U(function() {
                F(e.unstable_now());
            }, j);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
            F.callback = null;
        }, e.unstable_forceFrameRate = function(F) {
            0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < F ? Math.floor(1e3 / F) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return _;
        }, e.unstable_next = function(F) {
            switch (_) {
                case 1:
                case 2:
                case 3:
                    var j = 3;
                    break;
                default:
                    j = _;
            }
            var V = _;
            _ = j;
            try {
                return F();
            } finally {
                _ = V;
            }
        }, e.unstable_requestPaint = function() {
            x = !0;
        }, e.unstable_runWithPriority = function(F, j) {
            switch (F) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    F = 3;
            }
            var V = _;
            _ = F;
            try {
                return j();
            } finally {
                _ = V;
            }
        }, e.unstable_scheduleCallback = function(F, j, V) {
            var ot = e.unstable_now();
            switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? ot + V : ot) : V = ot, F) {
                case 1:
                    var gt = -1;
                    break;
                case 2:
                    gt = 250;
                    break;
                case 5:
                    gt = 1073741823;
                    break;
                case 4:
                    gt = 1e4;
                    break;
                default:
                    gt = 5e3;
            }
            return gt = V + gt, F = {
                id: v++,
                callback: j,
                priorityLevel: F,
                startTime: V,
                expirationTime: gt,
                sortIndex: -1
            }, V > ot ? (F.sortIndex = V, i(g, F), r(p) === null && F === r(g) && (D ? (G(I), I = -1) : D = !0, yt(q, V - ot))) : (F.sortIndex = gt, i(p, F), O || T || (O = !0, H || (H = !0, J()))), F;
        }, e.unstable_shouldYield = ft, e.unstable_wrapCallback = function(F) {
            var j = _;
            return function() {
                var V = _;
                _ = j;
                try {
                    return F.apply(this, arguments);
                } finally {
                    _ = V;
                }
            };
        };
    })),
    JC = /* @__PURE__ */ He(((e, i) => {
        i.exports = WC();
    })),
    t3 = /* @__PURE__ */ He(((e) => {
        var i = JC(),
            r = Is(),
            u = Eg();

        function c(t) {
            var n = "https://react.dev/errors/" + t;
            if (1 < arguments.length) {
                n += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var a = 2; a < arguments.length; a++) n += "&args[]=" + encodeURIComponent(arguments[a]);
            }
            return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }

        function f(t) {
            return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
        }

        function d(t) {
            var n = t,
                a = t;
            if (t.alternate)
                for (; n.return;) n = n.return;
            else {
                t = n;
                do
                    n = t, (n.flags & 4098) !== 0 && (a = n.return), t = n.return;
                while (t);
            }
            return n.tag === 3 ? a : null;
        }

        function m(t) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
            }
            return null;
        }

        function p(t) {
            if (t.tag === 31) {
                var n = t.memoizedState;
                if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
            }
            return null;
        }

        function g(t) {
            if (d(t) !== t) throw Error(c(188));
        }

        function v(t) {
            var n = t.alternate;
            if (!n) {
                if (n = d(t), n === null) throw Error(c(188));
                return n !== t ? null : t;
            }
            for (var a = t, l = n;;) {
                var o = a.return;
                if (o === null) break;
                var s = o.alternate;
                if (s === null) {
                    if (l = o.return, l !== null) {
                        a = l;
                        continue;
                    }
                    break;
                }
                if (o.child === s.child) {
                    for (s = o.child; s;) {
                        if (s === a) return g(o), t;
                        if (s === l) return g(o), n;
                        s = s.sibling;
                    }
                    throw Error(c(188));
                }
                if (a.return !== l.return) a = o, l = s;
                else {
                    for (var h = !1, y = o.child; y;) {
                        if (y === a) {
                            h = !0, a = o, l = s;
                            break;
                        }
                        if (y === l) {
                            h = !0, l = o, a = s;
                            break;
                        }
                        y = y.sibling;
                    }
                    if (!h) {
                        for (y = s.child; y;) {
                            if (y === a) {
                                h = !0, a = s, l = o;
                                break;
                            }
                            if (y === l) {
                                h = !0, l = s, a = o;
                                break;
                            }
                            y = y.sibling;
                        }
                        if (!h) throw Error(c(189));
                    }
                }
                if (a.alternate !== l) throw Error(c(190));
            }
            if (a.tag !== 3) throw Error(c(188));
            return a.stateNode.current === a ? t : n;
        }

        function b(t) {
            var n = t.tag;
            if (n === 5 || n === 26 || n === 27 || n === 6) return t;
            for (t = t.child; t !== null;) {
                if (n = b(t), n !== null) return n;
                t = t.sibling;
            }
            return null;
        }
        var _ = Object.assign,
            T = /* @__PURE__ */ Symbol.for("react.element"),
            O = /* @__PURE__ */ Symbol.for("react.transitional.element"),
            D = /* @__PURE__ */ Symbol.for("react.portal"),
            x = /* @__PURE__ */ Symbol.for("react.fragment"),
            U = /* @__PURE__ */ Symbol.for("react.strict_mode"),
            G = /* @__PURE__ */ Symbol.for("react.profiler"),
            k = /* @__PURE__ */ Symbol.for("react.consumer"),
            L = /* @__PURE__ */ Symbol.for("react.context"),
            q = /* @__PURE__ */ Symbol.for("react.forward_ref"),
            H = /* @__PURE__ */ Symbol.for("react.suspense"),
            I = /* @__PURE__ */ Symbol.for("react.suspense_list"),
            Q = /* @__PURE__ */ Symbol.for("react.memo"),
            lt = /* @__PURE__ */ Symbol.for("react.lazy"),
            ft = /* @__PURE__ */ Symbol.for("react.activity"),
            W = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"),
            J = Symbol.iterator;

        function pt(t) {
            return t === null || typeof t != "object" ? null : (t = J && t[J] || t["@@iterator"], typeof t == "function" ? t : null);
        }
        var ht = /* @__PURE__ */ Symbol.for("react.client.reference");

        function yt(t) {
            if (t == null) return null;
            if (typeof t == "function") return t.$$typeof === ht ? null : t.displayName || t.name || null;
            if (typeof t == "string") return t;
            switch (t) {
                case x:
                    return "Fragment";
                case G:
                    return "Profiler";
                case U:
                    return "StrictMode";
                case H:
                    return "Suspense";
                case I:
                    return "SuspenseList";
                case ft:
                    return "Activity";
            }
            if (typeof t == "object") switch (t.$$typeof) {
                case D:
                    return "Portal";
                case L:
                    return t.displayName || "Context";
                case k:
                    return (t._context.displayName || "Context") + ".Consumer";
                case q:
                    var n = t.render;
                    return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
                case Q:
                    return n = t.displayName || null, n !== null ? n : yt(t.type) || "Memo";
                case lt:
                    n = t._payload, t = t._init;
                    try {
                        return yt(t(n));
                    } catch {}
            }
            return null;
        }
        var F = Array.isArray,
            j = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            V = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            ot = {
                pending: !1,
                data: null,
                method: null,
                action: null
            },
            gt = [],
            te = -1;

        function w(t) {
            return {
                current: t
            };
        }

        function X(t) {
            0 > te || (t.current = gt[te], gt[te] = null, te--);
        }

        function K(t, n) {
            te++, gt[te] = t.current, t.current = n;
        }
        var tt = w(null),
            mt = w(null),
            st = w(null),
            wt = w(null);

        function ee(t, n) {
            switch (K(st, n), K(mt, t), K(tt, null), n.nodeType) {
                case 9:
                case 11:
                    t = (t = n.documentElement) && (t = t.namespaceURI) ? Xm(t) : 0;
                    break;
                default:
                    if (t = n.tagName, n = n.namespaceURI) n = Xm(n), t = Pm(n, t);
                    else switch (t) {
                        case "svg":
                            t = 1;
                            break;
                        case "math":
                            t = 2;
                            break;
                        default:
                            t = 0;
                    }
            }
            X(tt), K(tt, t);
        }

        function nt() {
            X(tt), X(mt), X(st);
        }

        function Ee(t) {
            t.memoizedState !== null && K(wt, t);
            var n = tt.current,
                a = Pm(n, t.type);
            n !== a && (K(mt, t), K(tt, a));
        }

        function Gn(t) {
            mt.current === t && (X(tt), X(mt)), wt.current === t && (X(wt), Hl._currentValue = ot);
        }
        var Ie, yf;

        function va(t) {
            if (Ie === void 0) try {
                throw Error();
            } catch (a) {
                var n = a.stack.trim().match(/\n( *(at )?)/);
                Ie = n && n[1] || "", yf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Ie + t + yf;
        }
        var $u = !1;

        function ku(t, n) {
            if (!t || $u) return "";
            $u = !0;
            var a = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var l = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (n) {
                                var P = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(P.prototype, "props", {
                                        set: function() {
                                            throw Error();
                                        }
                                    }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(P, []);
                                    } catch (M) {
                                        var N = M;
                                    }
                                    Reflect.construct(t, [], P);
                                } else {
                                    try {
                                        P.call();
                                    } catch (M) {
                                        N = M;
                                    }
                                    t.call(P.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (M) {
                                    N = M;
                                }
                                (P = t()) && typeof P.catch == "function" && P.catch(function() {});
                            }
                        } catch (M) {
                            if (M && N && typeof M.stack == "string") return [M.stack, N.stack];
                        }
                        return [null, null];
                    }
                };
                l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var o = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
                o && o.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var s = l.DetermineComponentFrameRoot(),
                    h = s[0],
                    y = s[1];
                if (h && y) {
                    var S = h.split(`
`),
                        R = y.split(`
`);
                    for (o = l = 0; l < S.length && !S[l].includes("DetermineComponentFrameRoot");) l++;
                    for (; o < R.length && !R[o].includes("DetermineComponentFrameRoot");) o++;
                    if (l === S.length || o === R.length)
                        for (l = S.length - 1, o = R.length - 1; 1 <= l && 0 <= o && S[l] !== R[o];) o--;
                    for (; 1 <= l && 0 <= o; l--, o--)
                        if (S[l] !== R[o]) {
                            if (l !== 1 || o !== 1)
                                do
                                    if (l--, o--, 0 > o || S[l] !== R[o]) {
                                        var B = `
` + S[l].replace(" at new ", " at ");
                                        return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), B;
                                    }
                                while (1 <= l && 0 <= o);
                            break;
                        }
                }
            } finally {
                $u = !1, Error.prepareStackTrace = a;
            }
            return (a = t ? t.displayName || t.name : "") ? va(a) : "";
        }

        function m0(t, n) {
            switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    return va(t.type);
                case 16:
                    return va("Lazy");
                case 13:
                    return t.child !== n && n !== null ? va("Suspense Fallback") : va("Suspense");
                case 19:
                    return va("SuspenseList");
                case 0:
                case 15:
                    return ku(t.type, !1);
                case 11:
                    return ku(t.type.render, !1);
                case 1:
                    return ku(t.type, !0);
                case 31:
                    return va("Activity");
                default:
                    return "";
            }
        }

        function bf(t) {
            try {
                var n = "",
                    a = null;
                do
                    n += m0(t, a), a = t, t = t.return;
                while (t);
                return n;
            } catch (l) {
                return `
Error generating stack: ` + l.message + `
` + l.stack;
            }
        }
        var Iu = Object.prototype.hasOwnProperty,
            Qu = i.unstable_scheduleCallback,
            Fu = i.unstable_cancelCallback,
            v0 = i.unstable_shouldYield,
            p0 = i.unstable_requestPaint,
            Se = i.unstable_now,
            g0 = i.unstable_getCurrentPriorityLevel,
            _f = i.unstable_ImmediatePriority,
            Ef = i.unstable_UserBlockingPriority,
            Il = i.unstable_NormalPriority,
            y0 = i.unstable_LowPriority,
            Sf = i.unstable_IdlePriority,
            b0 = i.log,
            _0 = i.unstable_setDisableYieldValue,
            Vi = null,
            Te = null;

        function Xn(t) {
            if (typeof b0 == "function" && _0(t), Te && typeof Te.setStrictMode == "function") try {
                Te.setStrictMode(Vi, t);
            } catch {}
        }
        var Ae = Math.clz32 ? Math.clz32 : T0,
            E0 = Math.log,
            S0 = Math.LN2;

        function T0(t) {
            return t >>>= 0, t === 0 ? 32 : 31 - (E0(t) / S0 | 0) | 0;
        }
        var Ql = 256,
            Fl = 262144,
            Kl = 4194304;

        function pa(t) {
            var n = t & 42;
            if (n !== 0) return n;
            switch (t & -t) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                    return 128;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                    return t & 261888;
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t & 3932160;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return t & 62914560;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return t;
            }
        }

        function Wl(t, n, a) {
            var l = t.pendingLanes;
            if (l === 0) return 0;
            var o = 0,
                s = t.suspendedLanes,
                h = t.pingedLanes;
            t = t.warmLanes;
            var y = l & 134217727;
            return y !== 0 ? (l = y & ~s, l !== 0 ? o = pa(l) : (h &= y, h !== 0 ? o = pa(h) : a || (a = y & ~t, a !== 0 && (o = pa(a))))) : (y = l & ~s, y !== 0 ? o = pa(y) : h !== 0 ? o = pa(h) : a || (a = l & ~t, a !== 0 && (o = pa(a)))), o === 0 ? 0 : n !== 0 && n !== o && (n & s) === 0 && (s = o & -o, a = n & -n, s >= a || s === 32 && (a & 4194048) !== 0) ? n : o;
        }

        function $i(t, n) {
            return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
        }

        function A0(t, n) {
            switch (t) {
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                    return n + 250;
                case 16:
                case 32:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return n + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return -1;
                case 67108864:
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1;
            }
        }

        function Tf() {
            var t = Kl;
            return Kl <<= 1, (Kl & 62914560) === 0 && (Kl = 4194304), t;
        }

        function Ku(t) {
            for (var n = [], a = 0; 31 > a; a++) n.push(t);
            return n;
        }

        function Jl(t, n) {
            t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
        }

        function w0(t, n, a, l, o, s) {
            var h = t.pendingLanes;
            t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
            var y = t.entanglements,
                S = t.expirationTimes,
                R = t.hiddenUpdates;
            for (a = h & ~a; 0 < a;) {
                var B = 31 - Ae(a),
                    P = 1 << B;
                y[B] = 0, S[B] = -1;
                var N = R[B];
                if (N !== null)
                    for (R[B] = null, B = 0; B < N.length; B++) {
                        var M = N[B];
                        M !== null && (M.lane &= -536870913);
                    }
                a &= ~P;
            }
            l !== 0 && Af(t, l, 0), s !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(h & ~n));
        }

        function Af(t, n, a) {
            t.pendingLanes |= n, t.suspendedLanes &= ~n;
            var l = 31 - Ae(n);
            t.entangledLanes |= n, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
        }

        function wf(t, n) {
            var a = t.entangledLanes |= n;
            for (t = t.entanglements; a;) {
                var l = 31 - Ae(a),
                    o = 1 << l;
                o & n | t[l] & n && (t[l] |= n), a &= ~o;
            }
        }

        function Of(t, n) {
            var a = n & -n;
            return a = (a & 42) !== 0 ? 1 : Cf(a), (a & (t.suspendedLanes | n)) !== 0 ? 0 : a;
        }

        function Cf(t) {
            switch (t) {
                case 2:
                    t = 1;
                    break;
                case 8:
                    t = 4;
                    break;
                case 32:
                    t = 16;
                    break;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    t = 128;
                    break;
                case 268435456:
                    t = 134217728;
                    break;
                default:
                    t = 0;
            }
            return t;
        }

        function Wu(t) {
            return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }

        function Df() {
            var t = V.p;
            return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : cv(t.type));
        }

        function zf(t, n) {
            var a = V.p;
            try {
                return V.p = t, n();
            } finally {
                V.p = a;
            }
        }
        var Pn = Math.random().toString(36).slice(2),
            re = "__reactFiber$" + Pn,
            me = "__reactProps$" + Pn,
            ki = "__reactContainer$" + Pn,
            Ju = "__reactEvents$" + Pn,
            O0 = "__reactListeners$" + Pn,
            C0 = "__reactHandles$" + Pn,
            Rf = "__reactResources$" + Pn,
            Ii = "__reactMarker$" + Pn;

        function to(t) {
            delete t[re], delete t[me], delete t[Ju], delete t[O0], delete t[C0];
        }

        function ka(t) {
            var n = t[re];
            if (n) return n;
            for (var a = t.parentNode; a;) {
                if (n = a[ki] || a[re]) {
                    if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
                        for (t = Qm(t); t !== null;) {
                            if (a = t[re]) return a;
                            t = Qm(t);
                        }
                    return n;
                }
                t = a, a = t.parentNode;
            }
            return null;
        }

        function Ia(t) {
            if (t = t[re] || t[ki]) {
                var n = t.tag;
                if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return t;
            }
            return null;
        }

        function Qi(t) {
            var n = t.tag;
            if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
            throw Error(c(33));
        }

        function Qa(t) {
            var n = t[Rf];
            return n || (n = t[Rf] = {
                hoistableStyles: /* @__PURE__ */ new Map(),
                hoistableScripts: /* @__PURE__ */ new Map()
            }), n;
        }

        function ie(t) {
            t[Ii] = !0;
        }
        var Nf = /* @__PURE__ */ new Set(),
            Mf = {};

        function ga(t, n) {
            Fa(t, n), Fa(t + "Capture", n);
        }

        function Fa(t, n) {
            for (Mf[t] = n, t = 0; t < n.length; t++) Nf.add(n[t]);
        }
        var D0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Hf = {},
            xf = {};

        function z0(t) {
            return Iu.call(xf, t) ? !0 : Iu.call(Hf, t) ? !1 : D0.test(t) ? xf[t] = !0 : (Hf[t] = !0, !1);
        }

        function tr(t, n, a) {
            if (z0(n))
                if (a === null) t.removeAttribute(n);
                else {
                    switch (typeof a) {
                        case "undefined":
                        case "function":
                        case "symbol":
                            t.removeAttribute(n);
                            return;
                        case "boolean":
                            var l = n.toLowerCase().slice(0, 5);
                            if (l !== "data-" && l !== "aria-") {
                                t.removeAttribute(n);
                                return;
                            }
                    }
                    t.setAttribute(n, "" + a);
                }
        }

        function er(t, n, a) {
            if (a === null) t.removeAttribute(n);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        t.removeAttribute(n);
                        return;
                }
                t.setAttribute(n, "" + a);
            }
        }

        function vn(t, n, a, l) {
            if (l === null) t.removeAttribute(a);
            else {
                switch (typeof l) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        t.removeAttribute(a);
                        return;
                }
                t.setAttributeNS(n, a, "" + l);
            }
        }

        function xe(t) {
            switch (typeof t) {
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return t;
                case "object":
                    return t;
                default:
                    return "";
            }
        }

        function Lf(t) {
            var n = t.type;
            return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
        }

        function R0(t, n, a) {
            var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
            if (!t.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
                var o = l.get,
                    s = l.set;
                return Object.defineProperty(t, n, {
                    configurable: !0,
                    get: function() {
                        return o.call(this);
                    },
                    set: function(h) {
                        a = "" + h, s.call(this, h);
                    }
                }), Object.defineProperty(t, n, {
                    enumerable: l.enumerable
                }), {
                    getValue: function() {
                        return a;
                    },
                    setValue: function(h) {
                        a = "" + h;
                    },
                    stopTracking: function() {
                        t._valueTracker = null, delete t[n];
                    }
                };
            }
        }

        function eo(t) {
            if (!t._valueTracker) {
                var n = Lf(t) ? "checked" : "value";
                t._valueTracker = R0(t, n, "" + t[n]);
            }
        }

        function Uf(t) {
            if (!t) return !1;
            var n = t._valueTracker;
            if (!n) return !0;
            var a = n.getValue(),
                l = "";
            return t && (l = Lf(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (n.setValue(t), !0) : !1;
        }

        function nr(t) {
            if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
            try {
                return t.activeElement || t.body;
            } catch {
                return t.body;
            }
        }
        var N0 = /[\n"\\]/g;

        function Le(t) {
            return t.replace(N0, function(n) {
                return "\\" + n.charCodeAt(0).toString(16) + " ";
            });
        }

        function no(t, n, a, l, o, s, h, y) {
            t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), n != null ? h === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + xe(n)) : t.value !== "" + xe(n) && (t.value = "" + xe(n)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), n != null ? ao(t, h, xe(n)) : a != null ? ao(t, h, xe(a)) : l != null && t.removeAttribute("value"), o == null && s != null && (t.defaultChecked = !!s), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + xe(y) : t.removeAttribute("name");
        }

        function Bf(t, n, a, l, o, s, h, y) {
            if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), n != null || a != null) {
                if (!(s !== "submit" && s !== "reset" || n != null)) {
                    eo(t);
                    return;
                }
                a = a != null ? "" + xe(a) : "", n = n != null ? "" + xe(n) : a, y || n === t.value || (t.value = n), t.defaultValue = n;
            }
            l = l ? ? o, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = y ? t.checked : !!l, t.defaultChecked = !!l, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), eo(t);
        }

        function ao(t, n, a) {
            n === "number" && nr(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
        }

        function Ka(t, n, a, l) {
            if (t = t.options, n) {
                n = {};
                for (var o = 0; o < a.length; o++) n["$" + a[o]] = !0;
                for (a = 0; a < t.length; a++) o = n.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && l && (t[a].defaultSelected = !0);
            } else {
                for (a = "" + xe(a), n = null, o = 0; o < t.length; o++) {
                    if (t[o].value === a) {
                        t[o].selected = !0, l && (t[o].defaultSelected = !0);
                        return;
                    }
                    n !== null || t[o].disabled || (n = t[o]);
                }
                n !== null && (n.selected = !0);
            }
        }

        function jf(t, n, a) {
            if (n != null && (n = "" + xe(n), n !== t.value && (t.value = n), a == null)) {
                t.defaultValue !== n && (t.defaultValue = n);
                return;
            }
            t.defaultValue = a != null ? "" + xe(a) : "";
        }

        function Zf(t, n, a, l) {
            if (n == null) {
                if (l != null) {
                    if (a != null) throw Error(c(92));
                    if (F(l)) {
                        if (1 < l.length) throw Error(c(93));
                        l = l[0];
                    }
                    a = l;
                }
                a ? ? = "", n = a;
            }
            a = xe(n), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), eo(t);
        }

        function Wa(t, n) {
            if (n) {
                var a = t.firstChild;
                if (a && a === t.lastChild && a.nodeType === 3) {
                    a.nodeValue = n;
                    return;
                }
            }
            t.textContent = n;
        }
        var M0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

        function Gf(t, n, a) {
            var l = n.indexOf("--") === 0;
            a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : l ? t.setProperty(n, a) : typeof a != "number" || a === 0 || M0.has(n) ? n === "float" ? t.cssFloat = a : t[n] = ("" + a).trim() : t[n] = a + "px";
        }

        function Xf(t, n, a) {
            if (n != null && typeof n != "object") throw Error(c(62));
            if (t = t.style, a != null) {
                for (var l in a) !a.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
                for (var o in n) l = n[o], n.hasOwnProperty(o) && a[o] !== l && Gf(t, o, l);
            } else
                for (var s in n) n.hasOwnProperty(s) && Gf(t, s, n[s]);
        }

        function io(t) {
            if (t.indexOf("-") === -1) return !1;
            switch (t) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var H0 = /* @__PURE__ */ new Map([
                ["acceptCharset", "accept-charset"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"],
                ["crossOrigin", "crossorigin"],
                ["accentHeight", "accent-height"],
                ["alignmentBaseline", "alignment-baseline"],
                ["arabicForm", "arabic-form"],
                ["baselineShift", "baseline-shift"],
                ["capHeight", "cap-height"],
                ["clipPath", "clip-path"],
                ["clipRule", "clip-rule"],
                ["colorInterpolation", "color-interpolation"],
                ["colorInterpolationFilters", "color-interpolation-filters"],
                ["colorProfile", "color-profile"],
                ["colorRendering", "color-rendering"],
                ["dominantBaseline", "dominant-baseline"],
                ["enableBackground", "enable-background"],
                ["fillOpacity", "fill-opacity"],
                ["fillRule", "fill-rule"],
                ["floodColor", "flood-color"],
                ["floodOpacity", "flood-opacity"],
                ["fontFamily", "font-family"],
                ["fontSize", "font-size"],
                ["fontSizeAdjust", "font-size-adjust"],
                ["fontStretch", "font-stretch"],
                ["fontStyle", "font-style"],
                ["fontVariant", "font-variant"],
                ["fontWeight", "font-weight"],
                ["glyphName", "glyph-name"],
                ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
                ["glyphOrientationVertical", "glyph-orientation-vertical"],
                ["horizAdvX", "horiz-adv-x"],
                ["horizOriginX", "horiz-origin-x"],
                ["imageRendering", "image-rendering"],
                ["letterSpacing", "letter-spacing"],
                ["lightingColor", "lighting-color"],
                ["markerEnd", "marker-end"],
                ["markerMid", "marker-mid"],
                ["markerStart", "marker-start"],
                ["overlinePosition", "overline-position"],
                ["overlineThickness", "overline-thickness"],
                ["paintOrder", "paint-order"],
                ["panose-1", "panose-1"],
                ["pointerEvents", "pointer-events"],
                ["renderingIntent", "rendering-intent"],
                ["shapeRendering", "shape-rendering"],
                ["stopColor", "stop-color"],
                ["stopOpacity", "stop-opacity"],
                ["strikethroughPosition", "strikethrough-position"],
                ["strikethroughThickness", "strikethrough-thickness"],
                ["strokeDasharray", "stroke-dasharray"],
                ["strokeDashoffset", "stroke-dashoffset"],
                ["strokeLinecap", "stroke-linecap"],
                ["strokeLinejoin", "stroke-linejoin"],
                ["strokeMiterlimit", "stroke-miterlimit"],
                ["strokeOpacity", "stroke-opacity"],
                ["strokeWidth", "stroke-width"],
                ["textAnchor", "text-anchor"],
                ["textDecoration", "text-decoration"],
                ["textRendering", "text-rendering"],
                ["transformOrigin", "transform-origin"],
                ["underlinePosition", "underline-position"],
                ["underlineThickness", "underline-thickness"],
                ["unicodeBidi", "unicode-bidi"],
                ["unicodeRange", "unicode-range"],
                ["unitsPerEm", "units-per-em"],
                ["vAlphabetic", "v-alphabetic"],
                ["vHanging", "v-hanging"],
                ["vIdeographic", "v-ideographic"],
                ["vMathematical", "v-mathematical"],
                ["vectorEffect", "vector-effect"],
                ["vertAdvY", "vert-adv-y"],
                ["vertOriginX", "vert-origin-x"],
                ["vertOriginY", "vert-origin-y"],
                ["wordSpacing", "word-spacing"],
                ["writingMode", "writing-mode"],
                ["xmlnsXlink", "xmlns:xlink"],
                ["xHeight", "x-height"]
            ]),
            x0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

        function ar(t) {
            return x0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
        }

        function pn() {}
        var lo = null;

        function ro(t) {
            return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
        }
        var Ja = null,
            ti = null;

        function Pf(t) {
            var n = Ia(t);
            if (n && (t = n.stateNode)) {
                var a = t[me] || null;
                t: switch (t = n.stateNode, n.type) {
                    case "input":
                        if (no(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), n = a.name, a.type === "radio" && n != null) {
                            for (a = t; a.parentNode;) a = a.parentNode;
                            for (a = a.querySelectorAll('input[name="' + Le("" + n) + '"][type="radio"]'), n = 0; n < a.length; n++) {
                                var l = a[n];
                                if (l !== t && l.form === t.form) {
                                    var o = l[me] || null;
                                    if (!o) throw Error(c(90));
                                    no(l, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                                }
                            }
                            for (n = 0; n < a.length; n++) l = a[n], l.form === t.form && Uf(l);
                        }
                        break t;
                    case "textarea":
                        jf(t, a.value, a.defaultValue);
                        break t;
                    case "select":
                        n = a.value, n != null && Ka(t, !!a.multiple, n, !1);
                }
            }
        }
        var uo = !1;

        function Yf(t, n, a) {
            if (uo) return t(n, a);
            uo = !0;
            try {
                return t(n);
            } finally {
                if (uo = !1, (Ja !== null || ti !== null) && (qr(), Ja && (n = Ja, t = ti, ti = Ja = null, Pf(n), t)))
                    for (n = 0; n < t.length; n++) Pf(t[n]);
            }
        }

        function Fi(t, n) {
            var a = t.stateNode;
            if (a === null) return null;
            var l = a[me] || null;
            if (l === null) return null;
            a = l[n];
            t: switch (n) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
                    break t;
                default:
                    t = !1;
            }
            if (t) return null;
            if (a && typeof a != "function") throw Error(c(231, n, typeof a));
            return a;
        }
        var gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
            oo = !1;
        if (gn) try {
            var Ki = {};
            Object.defineProperty(Ki, "passive", {
                get: function() {
                    oo = !0;
                }
            }), window.addEventListener("test", Ki, Ki), window.removeEventListener("test", Ki, Ki);
        } catch {
            oo = !1;
        }
        var Yn = null,
            co = null,
            ir = null;

        function qf() {
            if (ir) return ir;
            var t, n = co,
                a = n.length,
                l, o = "value" in Yn ? Yn.value : Yn.textContent,
                s = o.length;
            for (t = 0; t < a && n[t] === o[t]; t++);
            var h = a - t;
            for (l = 1; l <= h && n[a - l] === o[s - l]; l++);
            return ir = o.slice(t, 1 < l ? 1 - l : void 0);
        }

        function lr(t) {
            var n = t.keyCode;
            return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
        }

        function rr() {
            return !0;
        }

        function Vf() {
            return !1;
        }

        function ve(t) {
            function n(a, l, o, s, h) {
                this._reactName = a, this._targetInst = o, this.type = l, this.nativeEvent = s, this.target = h, this.currentTarget = null;
                for (var y in t) t.hasOwnProperty(y) && (a = t[y], this[y] = a ? a(s) : s[y]);
                return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? rr : Vf, this.isPropagationStopped = Vf, this;
            }
            return _(n.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var a = this.nativeEvent;
                    a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = rr);
                },
                stopPropagation: function() {
                    var a = this.nativeEvent;
                    a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = rr);
                },
                persist: function() {},
                isPersistent: rr
            }), n;
        }
        var ya = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(t) {
                    return t.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            ur = ve(ya),
            Wi = _({}, ya, {
                view: 0,
                detail: 0
            }),
            L0 = ve(Wi),
            so, fo, Ji, or = _({}, Wi, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: mo,
                button: 0,
                buttons: 0,
                relatedTarget: function(t) {
                    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
                },
                movementX: function(t) {
                    return "movementX" in t ? t.movementX : (t !== Ji && (Ji && t.type === "mousemove" ? (so = t.screenX - Ji.screenX, fo = t.screenY - Ji.screenY) : fo = so = 0, Ji = t), so);
                },
                movementY: function(t) {
                    return "movementY" in t ? t.movementY : fo;
                }
            }),
            $f = ve(or),
            U0 = ve(_({}, or, {
                dataTransfer: 0
            })),
            ho = ve(_({}, Wi, {
                relatedTarget: 0
            })),
            B0 = ve(_({}, ya, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })),
            j0 = ve(_({}, ya, {
                clipboardData: function(t) {
                    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
                }
            })),
            kf = ve(_({}, ya, {
                data: 0
            })),
            Z0 = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            },
            G0 = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            },
            X0 = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };

        function P0(t) {
            var n = this.nativeEvent;
            return n.getModifierState ? n.getModifierState(t) : (t = X0[t]) ? !!n[t] : !1;
        }

        function mo() {
            return P0;
        }
        var Y0 = ve(_({}, Wi, {
                key: function(t) {
                    if (t.key) {
                        var n = Z0[t.key] || t.key;
                        if (n !== "Unidentified") return n;
                    }
                    return t.type === "keypress" ? (t = lr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? G0[t.keyCode] || "Unidentified" : "";
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: mo,
                charCode: function(t) {
                    return t.type === "keypress" ? lr(t) : 0;
                },
                keyCode: function(t) {
                    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
                },
                which: function(t) {
                    return t.type === "keypress" ? lr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
                }
            })),
            If = ve(_({}, or, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })),
            q0 = ve(_({}, Wi, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: mo
            })),
            V0 = ve(_({}, ya, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })),
            $0 = ve(_({}, or, {
                deltaX: function(t) {
                    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
                },
                deltaY: function(t) {
                    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
                },
                deltaZ: 0,
                deltaMode: 0
            })),
            k0 = ve(_({}, ya, {
                newState: 0,
                oldState: 0
            })),
            I0 = [
                9,
                13,
                27,
                32
            ],
            vo = gn && "CompositionEvent" in window,
            tl = null;
        gn && "documentMode" in document && (tl = document.documentMode);
        var Q0 = gn && "TextEvent" in window && !tl,
            Qf = gn && (!vo || tl && 8 < tl && 11 >= tl),
            Ff = " ",
            Kf = !1;

        function Wf(t, n) {
            switch (t) {
                case "keyup":
                    return I0.indexOf(n.keyCode) !== -1;
                case "keydown":
                    return n.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }

        function Jf(t) {
            return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
        }
        var ei = !1;

        function F0(t, n) {
            switch (t) {
                case "compositionend":
                    return Jf(n);
                case "keypress":
                    return n.which !== 32 ? null : (Kf = !0, Ff);
                case "textInput":
                    return t = n.data, t === Ff && Kf ? null : t;
                default:
                    return null;
            }
        }

        function K0(t, n) {
            if (ei) return t === "compositionend" || !vo && Wf(t, n) ? (t = qf(), ir = co = Yn = null, ei = !1, t) : null;
            switch (t) {
                case "paste":
                    return null;
                case "keypress":
                    if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                        if (n.char && 1 < n.char.length) return n.char;
                        if (n.which) return String.fromCharCode(n.which);
                    }
                    return null;
                case "compositionend":
                    return Qf && n.locale !== "ko" ? null : n.data;
                default:
                    return null;
            }
        }
        var W0 = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

        function td(t) {
            var n = t && t.nodeName && t.nodeName.toLowerCase();
            return n === "input" ? !!W0[t.type] : n === "textarea";
        }

        function ed(t, n, a, l) {
            Ja ? ti ? ti.push(l) : ti = [l] : Ja = l, n = Kr(n, "onChange"), 0 < n.length && (a = new ur("onChange", "change", null, a, l), t.push({
                event: a,
                listeners: n
            }));
        }
        var el = null,
            nl = null;

        function J0(t) {
            xm(t, 0);
        }

        function cr(t) {
            if (Uf(Qi(t))) return t;
        }

        function nd(t, n) {
            if (t === "change") return n;
        }
        var ad = !1;
        if (gn) {
            var po;
            if (gn) {
                var go = "oninput" in document;
                if (!go) {
                    var id = document.createElement("div");
                    id.setAttribute("oninput", "return;"), go = typeof id.oninput == "function";
                }
                po = go;
            } else po = !1;
            ad = po && (!document.documentMode || 9 < document.documentMode);
        }

        function ld() {
            el && (el.detachEvent("onpropertychange", rd), nl = el = null);
        }

        function rd(t) {
            if (t.propertyName === "value" && cr(nl)) {
                var n = [];
                ed(n, nl, t, ro(t)), Yf(J0, n);
            }
        }

        function ty(t, n, a) {
            t === "focusin" ? (ld(), el = n, nl = a, el.attachEvent("onpropertychange", rd)) : t === "focusout" && ld();
        }

        function ey(t) {
            if (t === "selectionchange" || t === "keyup" || t === "keydown") return cr(nl);
        }

        function ny(t, n) {
            if (t === "click") return cr(n);
        }

        function ay(t, n) {
            if (t === "input" || t === "change") return cr(n);
        }

        function iy(t, n) {
            return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
        }
        var we = typeof Object.is == "function" ? Object.is : iy;

        function al(t, n) {
            if (we(t, n)) return !0;
            if (typeof t != "object" || t === null || typeof n != "object" || n === null) return !1;
            var a = Object.keys(t),
                l = Object.keys(n);
            if (a.length !== l.length) return !1;
            for (l = 0; l < a.length; l++) {
                var o = a[l];
                if (!Iu.call(n, o) || !we(t[o], n[o])) return !1;
            }
            return !0;
        }

        function ud(t) {
            for (; t && t.firstChild;) t = t.firstChild;
            return t;
        }

        function od(t, n) {
            var a = ud(t);
            t = 0;
            for (var l; a;) {
                if (a.nodeType === 3) {
                    if (l = t + a.textContent.length, t <= n && l >= n) return {
                        node: a,
                        offset: n - t
                    };
                    t = l;
                }
                t: {
                    for (; a;) {
                        if (a.nextSibling) {
                            a = a.nextSibling;
                            break t;
                        }
                        a = a.parentNode;
                    }
                    a = void 0;
                }
                a = ud(a);
            }
        }

        function cd(t, n) {
            return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? cd(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1;
        }

        function sd(t) {
            t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
            for (var n = nr(t.document); n instanceof t.HTMLIFrameElement;) {
                try {
                    var a = typeof n.contentWindow.location.href == "string";
                } catch {
                    a = !1;
                }
                if (a) t = n.contentWindow;
                else break;
                n = nr(t.document);
            }
            return n;
        }

        function yo(t) {
            var n = t && t.nodeName && t.nodeName.toLowerCase();
            return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
        }
        var ly = gn && "documentMode" in document && 11 >= document.documentMode,
            ni = null,
            bo = null,
            il = null,
            _o = !1;

        function fd(t, n, a) {
            var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
            _o || ni == null || ni !== nr(l) || (l = ni, "selectionStart" in l && yo(l) ? l = {
                start: l.selectionStart,
                end: l.selectionEnd
            } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
                anchorNode: l.anchorNode,
                anchorOffset: l.anchorOffset,
                focusNode: l.focusNode,
                focusOffset: l.focusOffset
            }), il && al(il, l) || (il = l, l = Kr(bo, "onSelect"), 0 < l.length && (n = new ur("onSelect", "select", null, n, a), t.push({
                event: n,
                listeners: l
            }), n.target = ni)));
        }

        function ba(t, n) {
            var a = {};
            return a[t.toLowerCase()] = n.toLowerCase(), a["Webkit" + t] = "webkit" + n, a["Moz" + t] = "moz" + n, a;
        }
        var ai = {
                animationend: ba("Animation", "AnimationEnd"),
                animationiteration: ba("Animation", "AnimationIteration"),
                animationstart: ba("Animation", "AnimationStart"),
                transitionrun: ba("Transition", "TransitionRun"),
                transitionstart: ba("Transition", "TransitionStart"),
                transitioncancel: ba("Transition", "TransitionCancel"),
                transitionend: ba("Transition", "TransitionEnd")
            },
            Eo = {},
            dd = {};
        gn && (dd = document.createElement("div").style, "AnimationEvent" in window || (delete ai.animationend.animation, delete ai.animationiteration.animation, delete ai.animationstart.animation), "TransitionEvent" in window || delete ai.transitionend.transition);

        function _a(t) {
            if (Eo[t]) return Eo[t];
            if (!ai[t]) return t;
            var n = ai[t],
                a;
            for (a in n)
                if (n.hasOwnProperty(a) && a in dd) return Eo[t] = n[a];
            return t;
        }
        var hd = _a("animationend"),
            md = _a("animationiteration"),
            vd = _a("animationstart"),
            ry = _a("transitionrun"),
            uy = _a("transitionstart"),
            oy = _a("transitioncancel"),
            pd = _a("transitionend"),
            gd = /* @__PURE__ */ new Map(),
            So = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        So.push("scrollEnd");

        function Qe(t, n) {
            gd.set(t, n), ga(n, [t]);
        }
        var sr = typeof reportError == "function" ? reportError : function(t) {
                if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                    var n = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                        error: t
                    });
                    if (!window.dispatchEvent(n)) return;
                } else if (typeof process == "object" && typeof process.emit == "function") {
                    process.emit("uncaughtException", t);
                    return;
                }
                console.error(t);
            },
            Ue = [],
            ii = 0,
            To = 0;

        function fr() {
            for (var t = ii, n = To = ii = 0; n < t;) {
                var a = Ue[n];
                Ue[n++] = null;
                var l = Ue[n];
                Ue[n++] = null;
                var o = Ue[n];
                Ue[n++] = null;
                var s = Ue[n];
                if (Ue[n++] = null, l !== null && o !== null) {
                    var h = l.pending;
                    h === null ? o.next = o : (o.next = h.next, h.next = o), l.pending = o;
                }
                s !== 0 && yd(a, o, s);
            }
        }

        function dr(t, n, a, l) {
            Ue[ii++] = t, Ue[ii++] = n, Ue[ii++] = a, Ue[ii++] = l, To |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
        }

        function Ao(t, n, a, l) {
            return dr(t, n, a, l), hr(t);
        }

        function Ea(t, n) {
            return dr(t, null, null, n), hr(t);
        }

        function yd(t, n, a) {
            t.lanes |= a;
            var l = t.alternate;
            l !== null && (l.lanes |= a);
            for (var o = !1, s = t.return; s !== null;) s.childLanes |= a, l = s.alternate, l !== null && (l.childLanes |= a), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (o = !0)), t = s, s = s.return;
            return t.tag === 3 ? (s = t.stateNode, o && n !== null && (o = 31 - Ae(a), t = s.hiddenUpdates, l = t[o], l === null ? t[o] = [n] : l.push(n), n.lane = a | 536870912), s) : null;
        }

        function hr(t) {
            if (50 < Ol) throw Ol = 0, Hc = null, Error(c(185));
            for (var n = t.return; n !== null;) t = n, n = t.return;
            return t.tag === 3 ? t.stateNode : null;
        }
        var li = {};

        function cy(t, n, a, l) {
            this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }

        function Oe(t, n, a, l) {
            return new cy(t, n, a, l);
        }

        function wo(t) {
            return t = t.prototype, !(!t || !t.isReactComponent);
        }

        function yn(t, n) {
            var a = t.alternate;
            return a === null ? (a = Oe(t.tag, n, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = n, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, n = t.dependencies, a.dependencies = n === null ? null : {
                lanes: n.lanes,
                firstContext: n.firstContext
            }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
        }

        function bd(t, n) {
            t.flags &= 65011714;
            var a = t.alternate;
            return a === null ? (t.childLanes = 0, t.lanes = n, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, n = a.dependencies, t.dependencies = n === null ? null : {
                lanes: n.lanes,
                firstContext: n.firstContext
            }), t;
        }

        function mr(t, n, a, l, o, s) {
            var h = 0;
            if (l = t, typeof t == "function") wo(t) && (h = 1);
            else if (typeof t == "string") h = v1(t, a, tt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
            else t: switch (t) {
                case ft:
                    return t = Oe(31, a, n, o), t.elementType = ft, t.lanes = s, t;
                case x:
                    return Sa(a.children, o, s, n);
                case U:
                    h = 8, o |= 24;
                    break;
                case G:
                    return t = Oe(12, a, n, o | 2), t.elementType = G, t.lanes = s, t;
                case H:
                    return t = Oe(13, a, n, o), t.elementType = H, t.lanes = s, t;
                case I:
                    return t = Oe(19, a, n, o), t.elementType = I, t.lanes = s, t;
                default:
                    if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                        case L:
                            h = 10;
                            break t;
                        case k:
                            h = 9;
                            break t;
                        case q:
                            h = 11;
                            break t;
                        case Q:
                            h = 14;
                            break t;
                        case lt:
                            h = 16, l = null;
                            break t;
                    }
                    h = 29, a = Error(c(130, t === null ? "null" : typeof t, "")), l = null;
            }
            return n = Oe(h, a, n, o), n.elementType = t, n.type = l, n.lanes = s, n;
        }

        function Sa(t, n, a, l) {
            return t = Oe(7, t, l, n), t.lanes = a, t;
        }

        function Oo(t, n, a) {
            return t = Oe(6, t, null, n), t.lanes = a, t;
        }

        function _d(t) {
            var n = Oe(18, null, null, 0);
            return n.stateNode = t, n;
        }

        function Co(t, n, a) {
            return n = Oe(4, t.children !== null ? t.children : [], t.key, n), n.lanes = a, n.stateNode = {
                containerInfo: t.containerInfo,
                pendingChildren: null,
                implementation: t.implementation
            }, n;
        }
        var Ed = /* @__PURE__ */ new WeakMap();

        function Be(t, n) {
            if (typeof t == "object" && t !== null) {
                var a = Ed.get(t);
                return a !== void 0 ? a : (n = {
                    value: t,
                    source: n,
                    stack: bf(n)
                }, Ed.set(t, n), n);
            }
            return {
                value: t,
                source: n,
                stack: bf(n)
            };
        }
        var ri = [],
            ui = 0,
            vr = null,
            ll = 0,
            je = [],
            Ze = 0,
            qn = null,
            en = 1,
            nn = "";

        function bn(t, n) {
            ri[ui++] = ll, ri[ui++] = vr, vr = t, ll = n;
        }

        function Sd(t, n, a) {
            je[Ze++] = en, je[Ze++] = nn, je[Ze++] = qn, qn = t;
            var l = en;
            t = nn;
            var o = 32 - Ae(l) - 1;
            l &= ~(1 << o), a += 1;
            var s = 32 - Ae(n) + o;
            if (30 < s) {
                var h = o - o % 5;
                s = (l & (1 << h) - 1).toString(32), l >>= h, o -= h, en = 1 << 32 - Ae(n) + o | a << o | l, nn = s + t;
            } else en = 1 << s | a << o | l, nn = t;
        }

        function Do(t) {
            t.return !== null && (bn(t, 1), Sd(t, 1, 0));
        }

        function zo(t) {
            for (; t === vr;) vr = ri[--ui], ri[ui] = null, ll = ri[--ui], ri[ui] = null;
            for (; t === qn;) qn = je[--Ze], je[Ze] = null, nn = je[--Ze], je[Ze] = null, en = je[--Ze], je[Ze] = null;
        }

        function Td(t, n) {
            je[Ze++] = en, je[Ze++] = nn, je[Ze++] = qn, en = n.id, nn = n.overflow, qn = t;
        }
        var ue = null,
            Bt = null,
            Tt = !1,
            Vn = null,
            Ge = !1,
            Ro = Error(c(519));

        function $n(t) {
            throw rl(Be(Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), t)), Ro;
        }

        function Ad(t) {
            var n = t.stateNode,
                a = t.type,
                l = t.memoizedProps;
            switch (n[re] = t, n[me] = l, a) {
                case "dialog":
                    _t("cancel", n), _t("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    _t("load", n);
                    break;
                case "video":
                case "audio":
                    for (a = 0; a < Dl.length; a++) _t(Dl[a], n);
                    break;
                case "source":
                    _t("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    _t("error", n), _t("load", n);
                    break;
                case "details":
                    _t("toggle", n);
                    break;
                case "input":
                    _t("invalid", n), Bf(n, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
                    break;
                case "select":
                    _t("invalid", n);
                    break;
                case "textarea":
                    _t("invalid", n), Zf(n, l.value, l.defaultValue, l.children);
            }
            a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || Zm(n.textContent, a) ? (l.popover != null && (_t("beforetoggle", n), _t("toggle", n)), l.onScroll != null && _t("scroll", n), l.onScrollEnd != null && _t("scrollend", n), l.onClick != null && (n.onclick = pn), n = !0) : n = !1, n || $n(t, !0);
        }

        function wd(t) {
            for (ue = t.return; ue;) switch (ue.tag) {
                case 5:
                case 31:
                case 13:
                    Ge = !1;
                    return;
                case 27:
                case 3:
                    Ge = !0;
                    return;
                default:
                    ue = ue.return;
            }
        }

        function oi(t) {
            if (t !== ue) return !1;
            if (!Tt) return wd(t), Tt = !0, !1;
            var n = t.tag,
                a;
            if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || kc(t.type, t.memoizedProps)), a = !a), a && Bt && $n(t), wd(t), n === 13) {
                if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
                Bt = Im(t);
            } else if (n === 31) {
                if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
                Bt = Im(t);
            } else n === 27 ? (n = Bt, ia(t.type) ? (t = Wc, Wc = null, Bt = t) : Bt = n) : Bt = ue ? Ye(t.stateNode.nextSibling) : null;
            return !0;
        }

        function Ta() {
            Bt = ue = null, Tt = !1;
        }

        function No() {
            var t = Vn;
            return t !== null && (be === null ? be = t : be.push.apply(be, t), Vn = null), t;
        }

        function rl(t) {
            Vn === null ? Vn = [t] : Vn.push(t);
        }
        var Mo = w(null),
            Aa = null,
            _n = null;

        function kn(t, n, a) {
            K(Mo, n._currentValue), n._currentValue = a;
        }

        function En(t) {
            t._currentValue = Mo.current, X(Mo);
        }

        function Ho(t, n, a) {
            for (; t !== null;) {
                var l = t.alternate;
                if ((t.childLanes & n) !== n ? (t.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), t === a) break;
                t = t.return;
            }
        }

        function xo(t, n, a, l) {
            var o = t.child;
            for (o !== null && (o.return = t); o !== null;) {
                var s = o.dependencies;
                if (s !== null) {
                    var h = o.child;
                    s = s.firstContext;
                    t: for (; s !== null;) {
                        var y = s;
                        s = o;
                        for (var S = 0; S < n.length; S++)
                            if (y.context === n[S]) {
                                s.lanes |= a, y = s.alternate, y !== null && (y.lanes |= a), Ho(s.return, a, t), l || (h = null);
                                break t;
                            }
                        s = y.next;
                    }
                } else if (o.tag === 18) {
                    if (h = o.return, h === null) throw Error(c(341));
                    h.lanes |= a, s = h.alternate, s !== null && (s.lanes |= a), Ho(h, a, t), h = null;
                } else h = o.child;
                if (h !== null) h.return = o;
                else
                    for (h = o; h !== null;) {
                        if (h === t) {
                            h = null;
                            break;
                        }
                        if (o = h.sibling, o !== null) {
                            o.return = h.return, h = o;
                            break;
                        }
                        h = h.return;
                    }
                o = h;
            }
        }

        function ci(t, n, a, l) {
            t = null;
            for (var o = n, s = !1; o !== null;) {
                if (!s) {
                    if ((o.flags & 524288) !== 0) s = !0;
                    else if ((o.flags & 262144) !== 0) break;
                }
                if (o.tag === 10) {
                    var h = o.alternate;
                    if (h === null) throw Error(c(387));
                    if (h = h.memoizedProps, h !== null) {
                        var y = o.type;
                        we(o.pendingProps.value, h.value) || (t !== null ? t.push(y) : t = [y]);
                    }
                } else if (o === wt.current) {
                    if (h = o.alternate, h === null) throw Error(c(387));
                    h.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(Hl) : t = [Hl]);
                }
                o = o.return;
            }
            t !== null && xo(n, t, a, l), n.flags |= 262144;
        }

        function pr(t) {
            for (t = t.firstContext; t !== null;) {
                if (!we(t.context._currentValue, t.memoizedValue)) return !0;
                t = t.next;
            }
            return !1;
        }

        function wa(t) {
            Aa = t, _n = null, t = t.dependencies, t !== null && (t.firstContext = null);
        }

        function oe(t) {
            return Od(Aa, t);
        }

        function gr(t, n) {
            return Aa === null && wa(t), Od(t, n);
        }

        function Od(t, n) {
            var a = n._currentValue;
            if (n = {
                    context: n,
                    memoizedValue: a,
                    next: null
                }, _n === null) {
                if (t === null) throw Error(c(308));
                _n = n, t.dependencies = {
                    lanes: 0,
                    firstContext: n
                }, t.flags |= 524288;
            } else _n = _n.next = n;
            return a;
        }
        var sy = typeof AbortController < "u" ? AbortController : function() {
                var t = [],
                    n = this.signal = {
                        aborted: !1,
                        addEventListener: function(a, l) {
                            t.push(l);
                        }
                    };
                this.abort = function() {
                    n.aborted = !0, t.forEach(function(a) {
                        return a();
                    });
                };
            },
            fy = i.unstable_scheduleCallback,
            dy = i.unstable_NormalPriority,
            kt = {
                $$typeof: L,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0
            };

        function Lo() {
            return {
                controller: new sy(),
                data: /* @__PURE__ */ new Map(),
                refCount: 0
            };
        }

        function ul(t) {
            t.refCount--, t.refCount === 0 && fy(dy, function() {
                t.controller.abort();
            });
        }
        var ol = null,
            Uo = 0,
            si = 0,
            fi = null;

        function hy(t, n) {
            if (ol === null) {
                var a = ol = [];
                Uo = 0, si = Zc(), fi = {
                    status: "pending",
                    value: void 0,
                    then: function(l) {
                        a.push(l);
                    }
                };
            }
            return Uo++, n.then(Cd, Cd), n;
        }

        function Cd() {
            if (--Uo === 0 && ol !== null) {
                fi !== null && (fi.status = "fulfilled");
                var t = ol;
                ol = null, si = 0, fi = null;
                for (var n = 0; n < t.length; n++)(0, t[n])();
            }
        }

        function my(t, n) {
            var a = [],
                l = {
                    status: "pending",
                    value: null,
                    reason: null,
                    then: function(o) {
                        a.push(o);
                    }
                };
            return t.then(function() {
                l.status = "fulfilled", l.value = n;
                for (var o = 0; o < a.length; o++)(0, a[o])(n);
            }, function(o) {
                for (l.status = "rejected", l.reason = o, o = 0; o < a.length; o++)(0, a[o])(void 0);
            }), l;
        }
        var Dd = j.S;
        j.S = function(t, n) {
            om = Se(), typeof n == "object" && n !== null && typeof n.then == "function" && hy(t, n), Dd !== null && Dd(t, n);
        };
        var Oa = w(null);

        function Bo() {
            var t = Oa.current;
            return t !== null ? t : Lt.pooledCache;
        }

        function yr(t, n) {
            n === null ? K(Oa, Oa.current) : K(Oa, n.pool);
        }

        function zd() {
            var t = Bo();
            return t === null ? null : {
                parent: kt._currentValue,
                pool: t
            };
        }
        var di = Error(c(460)),
            jo = Error(c(474)),
            br = Error(c(542)),
            _r = {
                then: function() {}
            };

        function Rd(t) {
            return t = t.status, t === "fulfilled" || t === "rejected";
        }

        function Nd(t, n, a) {
            switch (a = t[a], a === void 0 ? t.push(n) : a !== n && (n.then(pn, pn), n = a), n.status) {
                case "fulfilled":
                    return n.value;
                case "rejected":
                    throw t = n.reason, Hd(t), t;
                default:
                    if (typeof n.status == "string") n.then(pn, pn);
                    else {
                        if (t = Lt, t !== null && 100 < t.shellSuspendCounter) throw Error(c(482));
                        t = n, t.status = "pending", t.then(function(l) {
                            if (n.status === "pending") {
                                var o = n;
                                o.status = "fulfilled", o.value = l;
                            }
                        }, function(l) {
                            if (n.status === "pending") {
                                var o = n;
                                o.status = "rejected", o.reason = l;
                            }
                        });
                    }
                    switch (n.status) {
                        case "fulfilled":
                            return n.value;
                        case "rejected":
                            throw t = n.reason, Hd(t), t;
                    }
                    throw Da = n, di;
            }
        }

        function Ca(t) {
            try {
                var n = t._init;
                return n(t._payload);
            } catch (a) {
                throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Da = a, di) : a;
            }
        }
        var Da = null;

        function Md() {
            if (Da === null) throw Error(c(459));
            var t = Da;
            return Da = null, t;
        }

        function Hd(t) {
            if (t === di || t === br) throw Error(c(483));
        }
        var hi = null,
            cl = 0;

        function Er(t) {
            var n = cl;
            return cl += 1, hi === null && (hi = []), Nd(hi, t, n);
        }

        function sl(t, n) {
            n = n.props.ref, t.ref = n !== void 0 ? n : null;
        }

        function Sr(t, n) {
            throw n.$$typeof === T ? Error(c(525)) : (t = Object.prototype.toString.call(n), Error(c(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)));
        }

        function xd(t) {
            function n(C, A) {
                if (t) {
                    var z = C.deletions;
                    z === null ? (C.deletions = [A], C.flags |= 16) : z.push(A);
                }
            }

            function a(C, A) {
                if (!t) return null;
                for (; A !== null;) n(C, A), A = A.sibling;
                return null;
            }

            function l(C) {
                for (var A = /* @__PURE__ */ new Map(); C !== null;) C.key !== null ? A.set(C.key, C) : A.set(C.index, C), C = C.sibling;
                return A;
            }

            function o(C, A) {
                return C = yn(C, A), C.index = 0, C.sibling = null, C;
            }

            function s(C, A, z) {
                return C.index = z, t ? (z = C.alternate, z !== null ? (z = z.index, z < A ? (C.flags |= 67108866, A) : z) : (C.flags |= 67108866, A)) : (C.flags |= 1048576, A);
            }

            function h(C) {
                return t && C.alternate === null && (C.flags |= 67108866), C;
            }

            function y(C, A, z, Z) {
                return A === null || A.tag !== 6 ? (A = Oo(z, C.mode, Z), A.return = C, A) : (A = o(A, z), A.return = C, A);
            }

            function S(C, A, z, Z) {
                var rt = z.type;
                return rt === x ? B(C, A, z.props.children, Z, z.key) : A !== null && (A.elementType === rt || typeof rt == "object" && rt !== null && rt.$$typeof === lt && Ca(rt) === A.type) ? (A = o(A, z.props), sl(A, z), A.return = C, A) : (A = mr(z.type, z.key, z.props, null, C.mode, Z), sl(A, z), A.return = C, A);
            }

            function R(C, A, z, Z) {
                return A === null || A.tag !== 4 || A.stateNode.containerInfo !== z.containerInfo || A.stateNode.implementation !== z.implementation ? (A = Co(z, C.mode, Z), A.return = C, A) : (A = o(A, z.children || []), A.return = C, A);
            }

            function B(C, A, z, Z, rt) {
                return A === null || A.tag !== 7 ? (A = Sa(z, C.mode, Z, rt), A.return = C, A) : (A = o(A, z), A.return = C, A);
            }

            function P(C, A, z) {
                if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = Oo("" + A, C.mode, z), A.return = C, A;
                if (typeof A == "object" && A !== null) {
                    switch (A.$$typeof) {
                        case O:
                            return z = mr(A.type, A.key, A.props, null, C.mode, z), sl(z, A), z.return = C, z;
                        case D:
                            return A = Co(A, C.mode, z), A.return = C, A;
                        case lt:
                            return A = Ca(A), P(C, A, z);
                    }
                    if (F(A) || pt(A)) return A = Sa(A, C.mode, z, null), A.return = C, A;
                    if (typeof A.then == "function") return P(C, Er(A), z);
                    if (A.$$typeof === L) return P(C, gr(C, A), z);
                    Sr(C, A);
                }
                return null;
            }

            function N(C, A, z, Z) {
                var rt = A !== null ? A.key : null;
                if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return rt !== null ? null : y(C, A, "" + z, Z);
                if (typeof z == "object" && z !== null) {
                    switch (z.$$typeof) {
                        case O:
                            return z.key === rt ? S(C, A, z, Z) : null;
                        case D:
                            return z.key === rt ? R(C, A, z, Z) : null;
                        case lt:
                            return z = Ca(z), N(C, A, z, Z);
                    }
                    if (F(z) || pt(z)) return rt !== null ? null : B(C, A, z, Z, null);
                    if (typeof z.then == "function") return N(C, A, Er(z), Z);
                    if (z.$$typeof === L) return N(C, A, gr(C, z), Z);
                    Sr(C, z);
                }
                return null;
            }

            function M(C, A, z, Z, rt) {
                if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint") return C = C.get(z) || null, y(A, C, "" + Z, rt);
                if (typeof Z == "object" && Z !== null) {
                    switch (Z.$$typeof) {
                        case O:
                            return C = C.get(Z.key === null ? z : Z.key) || null, S(A, C, Z, rt);
                        case D:
                            return C = C.get(Z.key === null ? z : Z.key) || null, R(A, C, Z, rt);
                        case lt:
                            return Z = Ca(Z), M(C, A, z, Z, rt);
                    }
                    if (F(Z) || pt(Z)) return C = C.get(z) || null, B(A, C, Z, rt, null);
                    if (typeof Z.then == "function") return M(C, A, z, Er(Z), rt);
                    if (Z.$$typeof === L) return M(C, A, z, gr(A, Z), rt);
                    Sr(A, Z);
                }
                return null;
            }

            function et(C, A, z, Z) {
                for (var rt = null, Ct = null, at = A, vt = A = 0, St = null; at !== null && vt < z.length; vt++) {
                    at.index > vt ? (St = at, at = null) : St = at.sibling;
                    var Dt = N(C, at, z[vt], Z);
                    if (Dt === null) {
                        at === null && (at = St);
                        break;
                    }
                    t && at && Dt.alternate === null && n(C, at), A = s(Dt, A, vt), Ct === null ? rt = Dt : Ct.sibling = Dt, Ct = Dt, at = St;
                }
                if (vt === z.length) return a(C, at), Tt && bn(C, vt), rt;
                if (at === null) {
                    for (; vt < z.length; vt++) at = P(C, z[vt], Z), at !== null && (A = s(at, A, vt), Ct === null ? rt = at : Ct.sibling = at, Ct = at);
                    return Tt && bn(C, vt), rt;
                }
                for (at = l(at); vt < z.length; vt++) St = M(at, C, vt, z[vt], Z), St !== null && (t && St.alternate !== null && at.delete(St.key === null ? vt : St.key), A = s(St, A, vt), Ct === null ? rt = St : Ct.sibling = St, Ct = St);
                return t && at.forEach(function(ca) {
                    return n(C, ca);
                }), Tt && bn(C, vt), rt;
            }

            function ut(C, A, z, Z) {
                if (z == null) throw Error(c(151));
                for (var rt = null, Ct = null, at = A, vt = A = 0, St = null, Dt = z.next(); at !== null && !Dt.done; vt++, Dt = z.next()) {
                    at.index > vt ? (St = at, at = null) : St = at.sibling;
                    var ca = N(C, at, Dt.value, Z);
                    if (ca === null) {
                        at === null && (at = St);
                        break;
                    }
                    t && at && ca.alternate === null && n(C, at), A = s(ca, A, vt), Ct === null ? rt = ca : Ct.sibling = ca, Ct = ca, at = St;
                }
                if (Dt.done) return a(C, at), Tt && bn(C, vt), rt;
                if (at === null) {
                    for (; !Dt.done; vt++, Dt = z.next()) Dt = P(C, Dt.value, Z), Dt !== null && (A = s(Dt, A, vt), Ct === null ? rt = Dt : Ct.sibling = Dt, Ct = Dt);
                    return Tt && bn(C, vt), rt;
                }
                for (at = l(at); !Dt.done; vt++, Dt = z.next()) Dt = M(at, C, vt, Dt.value, Z), Dt !== null && (t && Dt.alternate !== null && at.delete(Dt.key === null ? vt : Dt.key), A = s(Dt, A, vt), Ct === null ? rt = Dt : Ct.sibling = Dt, Ct = Dt);
                return t && at.forEach(function(z1) {
                    return n(C, z1);
                }), Tt && bn(C, vt), rt;
            }

            function xt(C, A, z, Z) {
                if (typeof z == "object" && z !== null && z.type === x && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
                    switch (z.$$typeof) {
                        case O:
                            t: {
                                for (var rt = z.key; A !== null;) {
                                    if (A.key === rt) {
                                        if (rt = z.type, rt === x) {
                                            if (A.tag === 7) {
                                                a(C, A.sibling), Z = o(A, z.props.children), Z.return = C, C = Z;
                                                break t;
                                            }
                                        } else if (A.elementType === rt || typeof rt == "object" && rt !== null && rt.$$typeof === lt && Ca(rt) === A.type) {
                                            a(C, A.sibling), Z = o(A, z.props), sl(Z, z), Z.return = C, C = Z;
                                            break t;
                                        }
                                        a(C, A);
                                        break;
                                    } else n(C, A);
                                    A = A.sibling;
                                }
                                z.type === x ? (Z = Sa(z.props.children, C.mode, Z, z.key), Z.return = C, C = Z) : (Z = mr(z.type, z.key, z.props, null, C.mode, Z), sl(Z, z), Z.return = C, C = Z);
                            }
                            return h(C);
                        case D:
                            t: {
                                for (rt = z.key; A !== null;) {
                                    if (A.key === rt)
                                        if (A.tag === 4 && A.stateNode.containerInfo === z.containerInfo && A.stateNode.implementation === z.implementation) {
                                            a(C, A.sibling), Z = o(A, z.children || []), Z.return = C, C = Z;
                                            break t;
                                        } else {
                                            a(C, A);
                                            break;
                                        }
                                    else n(C, A);
                                    A = A.sibling;
                                }
                                Z = Co(z, C.mode, Z),
                                Z.return = C,
                                C = Z;
                            }
                            return h(C);
                        case lt:
                            return z = Ca(z), xt(C, A, z, Z);
                    }
                    if (F(z)) return et(C, A, z, Z);
                    if (pt(z)) {
                        if (rt = pt(z), typeof rt != "function") throw Error(c(150));
                        return z = rt.call(z), ut(C, A, z, Z);
                    }
                    if (typeof z.then == "function") return xt(C, A, Er(z), Z);
                    if (z.$$typeof === L) return xt(C, A, gr(C, z), Z);
                    Sr(C, z);
                }
                return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, A !== null && A.tag === 6 ? (a(C, A.sibling), Z = o(A, z), Z.return = C, C = Z) : (a(C, A), Z = Oo(z, C.mode, Z), Z.return = C, C = Z), h(C)) : a(C, A);
            }
            return function(C, A, z, Z) {
                try {
                    cl = 0;
                    var rt = xt(C, A, z, Z);
                    return hi = null, rt;
                } catch (at) {
                    if (at === di || at === br) throw at;
                    var Ct = Oe(29, at, null, C.mode);
                    return Ct.lanes = Z, Ct.return = C, Ct;
                }
            };
        }
        var za = xd(!0),
            Ld = xd(!1),
            In = !1;

        function Zo(t) {
            t.updateQueue = {
                baseState: t.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            };
        }

        function Go(t, n) {
            t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                callbacks: null
            });
        }

        function Ra(t) {
            return {
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }

        function Na(t, n, a) {
            var l = t.updateQueue;
            if (l === null) return null;
            if (l = l.shared, (zt & 2) !== 0) {
                var o = l.pending;
                return o === null ? n.next = n : (n.next = o.next, o.next = n), l.pending = n, n = hr(t), yd(t, null, a), n;
            }
            return dr(t, l, n, a), hr(t);
        }

        function fl(t, n, a) {
            if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
                var l = n.lanes;
                l &= t.pendingLanes, a |= l, n.lanes = a, wf(t, a);
            }
        }

        function Xo(t, n) {
            var a = t.updateQueue,
                l = t.alternate;
            if (l !== null && (l = l.updateQueue, a === l)) {
                var o = null,
                    s = null;
                if (a = a.firstBaseUpdate, a !== null) {
                    do {
                        var h = {
                            lane: a.lane,
                            tag: a.tag,
                            payload: a.payload,
                            callback: null,
                            next: null
                        };
                        s === null ? o = s = h : s = s.next = h, a = a.next;
                    } while (a !== null);
                    s === null ? o = s = n : s = s.next = n;
                } else o = s = n;
                a = {
                    baseState: l.baseState,
                    firstBaseUpdate: o,
                    lastBaseUpdate: s,
                    shared: l.shared,
                    callbacks: l.callbacks
                }, t.updateQueue = a;
                return;
            }
            t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = n : t.next = n, a.lastBaseUpdate = n;
        }
        var Po = !1;

        function dl() {
            if (Po) {
                var t = fi;
                if (t !== null) throw t;
            }
        }

        function hl(t, n, a, l) {
            Po = !1;
            var o = t.updateQueue;
            In = !1;
            var s = o.firstBaseUpdate,
                h = o.lastBaseUpdate,
                y = o.shared.pending;
            if (y !== null) {
                o.shared.pending = null;
                var S = y,
                    R = S.next;
                S.next = null, h === null ? s = R : h.next = R, h = S;
                var B = t.alternate;
                B !== null && (B = B.updateQueue, y = B.lastBaseUpdate, y !== h && (y === null ? B.firstBaseUpdate = R : y.next = R, B.lastBaseUpdate = S));
            }
            if (s !== null) {
                var P = o.baseState;
                h = 0, B = R = S = null, y = s;
                do {
                    var N = y.lane & -536870913,
                        M = N !== y.lane;
                    if (M ? (Et & N) === N : (l & N) === N) {
                        N !== 0 && N === si && (Po = !0), B !== null && (B = B.next = {
                            lane: 0,
                            tag: y.tag,
                            payload: y.payload,
                            callback: null,
                            next: null
                        });
                        t: {
                            var et = t,
                                ut = y;
                            N = n;
                            var xt = a;
                            switch (ut.tag) {
                                case 1:
                                    if (et = ut.payload, typeof et == "function") {
                                        P = et.call(xt, P, N);
                                        break t;
                                    }
                                    P = et;
                                    break t;
                                case 3:
                                    et.flags = et.flags & -65537 | 128;
                                case 0:
                                    if (et = ut.payload, N = typeof et == "function" ? et.call(xt, P, N) : et, N == null) break t;
                                    P = _({}, P, N);
                                    break t;
                                case 2:
                                    In = !0;
                            }
                        }
                        N = y.callback, N !== null && (t.flags |= 64, M && (t.flags |= 8192), M = o.callbacks, M === null ? o.callbacks = [N] : M.push(N));
                    } else M = {
                        lane: N,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    }, B === null ? (R = B = M, S = P) : B = B.next = M, h |= N;
                    if (y = y.next, y === null) {
                        if (y = o.shared.pending, y === null) break;
                        M = y, y = M.next, M.next = null, o.lastBaseUpdate = M, o.shared.pending = null;
                    }
                } while (!0);
                B === null && (S = P), o.baseState = S, o.firstBaseUpdate = R, o.lastBaseUpdate = B, s === null && (o.shared.lanes = 0), Jn |= h, t.lanes = h, t.memoizedState = P;
            }
        }

        function Ud(t, n) {
            if (typeof t != "function") throw Error(c(191, t));
            t.call(n);
        }

        function Bd(t, n) {
            var a = t.callbacks;
            if (a !== null)
                for (t.callbacks = null, t = 0; t < a.length; t++) Ud(a[t], n);
        }
        var mi = w(null),
            Tr = w(0);

        function jd(t, n) {
            t = Rn, K(Tr, t), K(mi, n), Rn = t | n.baseLanes;
        }

        function Yo() {
            K(Tr, Rn), K(mi, mi.current);
        }

        function qo() {
            Rn = Tr.current, X(mi), X(Tr);
        }
        var Ce = w(null),
            Xe = null;

        function Qn(t) {
            var n = t.alternate;
            K(Vt, Vt.current & 1), K(Ce, t), Xe === null && (n === null || mi.current !== null || n.memoizedState !== null) && (Xe = t);
        }

        function Vo(t) {
            K(Vt, Vt.current), K(Ce, t), Xe === null && (Xe = t);
        }

        function Zd(t) {
            t.tag === 22 ? (K(Vt, Vt.current), K(Ce, t), Xe === null && (Xe = t)) : Fn(t);
        }

        function Fn() {
            K(Vt, Vt.current), K(Ce, Ce.current);
        }

        function De(t) {
            X(Ce), Xe === t && (Xe = null), X(Vt);
        }
        var Vt = w(0);

        function Ar(t) {
            for (var n = t; n !== null;) {
                if (n.tag === 13) {
                    var a = n.memoizedState;
                    if (a !== null && (a = a.dehydrated, a === null || Fc(a) || Kc(a))) return n;
                } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
                    if ((n.flags & 128) !== 0) return n;
                } else if (n.child !== null) {
                    n.child.return = n, n = n.child;
                    continue;
                }
                if (n === t) break;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === t) return null;
                    n = n.return;
                }
                n.sibling.return = n.return, n = n.sibling;
            }
            return null;
        }
        var Sn = 0,
            dt = null,
            Mt = null,
            It = null,
            wr = !1,
            vi = !1,
            Ma = !1,
            Or = 0,
            ml = 0,
            pi = null,
            vy = 0;

        function Yt() {
            throw Error(c(321));
        }

        function $o(t, n) {
            if (n === null) return !1;
            for (var a = 0; a < n.length && a < t.length; a++)
                if (!we(t[a], n[a])) return !1;
            return !0;
        }

        function ko(t, n, a, l, o, s) {
            return Sn = s, dt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, j.H = t === null || t.memoizedState === null ? Sh : oc, Ma = !1, s = a(l, o), Ma = !1, vi && (s = Xd(n, a, l, o)), Gd(t), s;
        }

        function Gd(t) {
            j.H = gl;
            var n = Mt !== null && Mt.next !== null;
            if (Sn = 0, It = Mt = dt = null, wr = !1, ml = 0, pi = null, n) throw Error(c(300));
            t === null || Qt || (t = t.dependencies, t !== null && pr(t) && (Qt = !0));
        }

        function Xd(t, n, a, l) {
            dt = t;
            var o = 0;
            do {
                if (vi && (pi = null), ml = 0, vi = !1, 25 <= o) throw Error(c(301));
                if (o += 1, It = Mt = null, t.updateQueue != null) {
                    var s = t.updateQueue;
                    s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
                }
                j.H = Th, s = n(a, l);
            } while (vi);
            return s;
        }

        function py() {
            var t = j.H,
                n = t.useState()[0];
            return n = typeof n.then == "function" ? vl(n) : n, t = t.useState()[0], (Mt !== null ? Mt.memoizedState : null) !== t && (dt.flags |= 1024), n;
        }

        function Io() {
            var t = Or !== 0;
            return Or = 0, t;
        }

        function Qo(t, n, a) {
            n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~a;
        }

        function Fo(t) {
            if (wr) {
                for (t = t.memoizedState; t !== null;) {
                    var n = t.queue;
                    n !== null && (n.pending = null), t = t.next;
                }
                wr = !1;
            }
            Sn = 0, It = Mt = dt = null, vi = !1, ml = Or = 0, pi = null;
        }

        function de() {
            var t = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return It === null ? dt.memoizedState = It = t : It = It.next = t, It;
        }

        function $t() {
            if (Mt === null) {
                var t = dt.alternate;
                t = t !== null ? t.memoizedState : null;
            } else t = Mt.next;
            var n = It === null ? dt.memoizedState : It.next;
            if (n !== null) It = n, Mt = t;
            else {
                if (t === null)
                    throw dt.alternate === null ? Error(c(467)) : Error(c(310));
                Mt = t, t = {
                    memoizedState: Mt.memoizedState,
                    baseState: Mt.baseState,
                    baseQueue: Mt.baseQueue,
                    queue: Mt.queue,
                    next: null
                }, It === null ? dt.memoizedState = It = t : It = It.next = t;
            }
            return It;
        }

        function Cr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }

        function vl(t) {
            var n = ml;
            return ml += 1, pi === null && (pi = []), t = Nd(pi, t, n), n = dt, (It === null ? n.memoizedState : It.next) === null && (n = n.alternate, j.H = n === null || n.memoizedState === null ? Sh : oc), t;
        }

        function Dr(t) {
            if (t !== null && typeof t == "object") {
                if (typeof t.then == "function") return vl(t);
                if (t.$$typeof === L) return oe(t);
            }
            throw Error(c(438, String(t)));
        }

        function Ko(t) {
            var n = null,
                a = dt.updateQueue;
            if (a !== null && (n = a.memoCache), n == null) {
                var l = dt.alternate;
                l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
                    data: l.data.map(function(o) {
                        return o.slice();
                    }),
                    index: 0
                })));
            }
            if (n ? ? = {
                    data: [],
                    index: 0
                }, a === null && (a = Cr(), dt.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
                for (a = n.data[n.index] = Array(t), l = 0; l < t; l++) a[l] = W;
            return n.index++, a;
        }

        function Tn(t, n) {
            return typeof n == "function" ? n(t) : n;
        }

        function zr(t) {
            return Wo($t(), Mt, t);
        }

        function Wo(t, n, a) {
            var l = t.queue;
            if (l === null) throw Error(c(311));
            l.lastRenderedReducer = a;
            var o = t.baseQueue,
                s = l.pending;
            if (s !== null) {
                if (o !== null) {
                    var h = o.next;
                    o.next = s.next, s.next = h;
                }
                n.baseQueue = o = s, l.pending = null;
            }
            if (s = t.baseState, o === null) t.memoizedState = s;
            else {
                n = o.next;
                var y = h = null,
                    S = null,
                    R = n,
                    B = !1;
                do {
                    var P = R.lane & -536870913;
                    if (P !== R.lane ? (Et & P) === P : (Sn & P) === P) {
                        var N = R.revertLane;
                        if (N === 0) S !== null && (S = S.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: R.action,
                            hasEagerState: R.hasEagerState,
                            eagerState: R.eagerState,
                            next: null
                        }), P === si && (B = !0);
                        else if ((Sn & N) === N) {
                            R = R.next, N === si && (B = !0);
                            continue;
                        } else P = {
                            lane: 0,
                            revertLane: R.revertLane,
                            gesture: null,
                            action: R.action,
                            hasEagerState: R.hasEagerState,
                            eagerState: R.eagerState,
                            next: null
                        }, S === null ? (y = S = P, h = s) : S = S.next = P, dt.lanes |= N, Jn |= N;
                        P = R.action, Ma && a(s, P), s = R.hasEagerState ? R.eagerState : a(s, P);
                    } else N = {
                        lane: P,
                        revertLane: R.revertLane,
                        gesture: R.gesture,
                        action: R.action,
                        hasEagerState: R.hasEagerState,
                        eagerState: R.eagerState,
                        next: null
                    }, S === null ? (y = S = N, h = s) : S = S.next = N, dt.lanes |= P, Jn |= P;
                    R = R.next;
                } while (R !== null && R !== n);
                if (S === null ? h = s : S.next = y, !we(s, t.memoizedState) && (Qt = !0, B && (a = fi, a !== null))) throw a;
                t.memoizedState = s, t.baseState = h, t.baseQueue = S, l.lastRenderedState = s;
            }
            return o === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
        }

        function Jo(t) {
            var n = $t(),
                a = n.queue;
            if (a === null) throw Error(c(311));
            a.lastRenderedReducer = t;
            var l = a.dispatch,
                o = a.pending,
                s = n.memoizedState;
            if (o !== null) {
                a.pending = null;
                var h = o = o.next;
                do
                    s = t(s, h.action), h = h.next;
                while (h !== o);
                we(s, n.memoizedState) || (Qt = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), a.lastRenderedState = s;
            }
            return [s, l];
        }

        function Pd(t, n, a) {
            var l = dt,
                o = $t(),
                s = Tt;
            if (s) {
                if (a === void 0) throw Error(c(407));
                a = a();
            } else a = n();
            var h = !we((Mt || o).memoizedState, a);
            if (h && (o.memoizedState = a, Qt = !0), o = o.queue, nc(Vd.bind(null, l, o, t), [t]), o.getSnapshot !== n || h || It !== null && It.memoizedState.tag & 1) {
                if (l.flags |= 2048, gi(9, {
                        destroy: void 0
                    }, qd.bind(null, l, o, a, n), null), Lt === null) throw Error(c(349));
                s || (Sn & 127) !== 0 || Yd(l, n, a);
            }
            return a;
        }

        function Yd(t, n, a) {
            t.flags |= 16384, t = {
                getSnapshot: n,
                value: a
            }, n = dt.updateQueue, n === null ? (n = Cr(), dt.updateQueue = n, n.stores = [t]) : (a = n.stores, a === null ? n.stores = [t] : a.push(t));
        }

        function qd(t, n, a, l) {
            n.value = a, n.getSnapshot = l, $d(n) && kd(t);
        }

        function Vd(t, n, a) {
            return a(function() {
                $d(n) && kd(t);
            });
        }

        function $d(t) {
            var n = t.getSnapshot;
            t = t.value;
            try {
                var a = n();
                return !we(t, a);
            } catch {
                return !0;
            }
        }

        function kd(t) {
            var n = Ea(t, 2);
            n !== null && _e(n, t, 2);
        }

        function tc(t) {
            var n = de();
            if (typeof t == "function") {
                var a = t;
                if (t = a(), Ma) {
                    Xn(!0);
                    try {
                        a();
                    } finally {
                        Xn(!1);
                    }
                }
            }
            return n.memoizedState = n.baseState = t, n.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Tn,
                lastRenderedState: t
            }, n;
        }

        function Id(t, n, a, l) {
            return t.baseState = a, Wo(t, Mt, typeof l == "function" ? l : Tn);
        }

        function gy(t, n, a, l, o) {
            if (Mr(t)) throw Error(c(485));
            if (t = n.action, t !== null) {
                var s = {
                    payload: o,
                    action: t,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(h) {
                        s.listeners.push(h);
                    }
                };
                j.T !== null ? a(!0) : s.isTransition = !1, l(s), a = n.pending, a === null ? (s.next = n.pending = s, Qd(n, s)) : (s.next = a.next, n.pending = a.next = s);
            }
        }

        function Qd(t, n) {
            var a = n.action,
                l = n.payload,
                o = t.state;
            if (n.isTransition) {
                var s = j.T,
                    h = {};
                j.T = h;
                try {
                    var y = a(o, l),
                        S = j.S;
                    S !== null && S(h, y), Fd(t, n, y);
                } catch (R) {
                    ec(t, n, R);
                } finally {
                    s !== null && h.types !== null && (s.types = h.types), j.T = s;
                }
            } else try {
                s = a(o, l), Fd(t, n, s);
            } catch (R) {
                ec(t, n, R);
            }
        }

        function Fd(t, n, a) {
            a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
                Kd(t, n, l);
            }, function(l) {
                return ec(t, n, l);
            }) : Kd(t, n, a);
        }

        function Kd(t, n, a) {
            n.status = "fulfilled", n.value = a, Wd(n), t.state = a, n = t.pending, n !== null && (a = n.next, a === n ? t.pending = null : (a = a.next, n.next = a, Qd(t, a)));
        }

        function ec(t, n, a) {
            var l = t.pending;
            if (t.pending = null, l !== null) {
                l = l.next;
                do
                    n.status = "rejected", n.reason = a, Wd(n), n = n.next;
                while (n !== l);
            }
            t.action = null;
        }

        function Wd(t) {
            t = t.listeners;
            for (var n = 0; n < t.length; n++)(0, t[n])();
        }

        function Jd(t, n) {
            return n;
        }

        function th(t, n) {
            if (Tt) {
                var a = Lt.formState;
                if (a !== null) {
                    t: {
                        var l = dt;
                        if (Tt) {
                            if (Bt) {
                                e: {
                                    for (var o = Bt, s = Ge; o.nodeType !== 8;) {
                                        if (!s) {
                                            o = null;
                                            break e;
                                        }
                                        if (o = Ye(o.nextSibling), o === null) {
                                            o = null;
                                            break e;
                                        }
                                    }
                                    s = o.data,
                                    o = s === "F!" || s === "F" ? o : null;
                                }
                                if (o) {
                                    Bt = Ye(o.nextSibling), l = o.data === "F!";
                                    break t;
                                }
                            }
                            $n(l);
                        }
                        l = !1;
                    }
                    l && (n = a[0]);
                }
            }
            return a = de(), a.memoizedState = a.baseState = n, l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Jd,
                lastRenderedState: n
            }, a.queue = l, a = bh.bind(null, dt, l), l.dispatch = a, l = tc(!1), s = uc.bind(null, dt, !1, l.queue), l = de(), o = {
                state: n,
                dispatch: null,
                action: t,
                pending: null
            }, l.queue = o, a = gy.bind(null, dt, o, s, a), o.dispatch = a, l.memoizedState = t, [
                n,
                a, !1
            ];
        }

        function eh(t) {
            return nh($t(), Mt, t);
        }

        function nh(t, n, a) {
            if (n = Wo(t, n, Jd)[0], t = zr(Tn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
                var l = vl(n);
            } catch (h) {
                throw h === di ? br : h;
            }
            else l = n;
            n = $t();
            var o = n.queue,
                s = o.dispatch;
            return a !== n.memoizedState && (dt.flags |= 2048, gi(9, {
                destroy: void 0
            }, yy.bind(null, o, a), null)), [
                l,
                s,
                t
            ];
        }

        function yy(t, n) {
            t.action = n;
        }

        function ah(t) {
            var n = $t(),
                a = Mt;
            if (a !== null) return nh(n, a, t);
            $t(), n = n.memoizedState, a = $t();
            var l = a.queue.dispatch;
            return a.memoizedState = t, [
                n,
                l, !1
            ];
        }

        function gi(t, n, a, l) {
            return t = {
                tag: t,
                create: a,
                deps: l,
                inst: n,
                next: null
            }, n = dt.updateQueue, n === null && (n = Cr(), dt.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, n.lastEffect = t), t;
        }

        function ih() {
            return $t().memoizedState;
        }

        function Rr(t, n, a, l) {
            var o = de();
            dt.flags |= t, o.memoizedState = gi(1 | n, {
                destroy: void 0
            }, a, l === void 0 ? null : l);
        }

        function Nr(t, n, a, l) {
            var o = $t();
            l = l === void 0 ? null : l;
            var s = o.memoizedState.inst;
            Mt !== null && l !== null && $o(l, Mt.memoizedState.deps) ? o.memoizedState = gi(n, s, a, l) : (dt.flags |= t, o.memoizedState = gi(1 | n, s, a, l));
        }

        function lh(t, n) {
            Rr(8390656, 8, t, n);
        }

        function nc(t, n) {
            Nr(2048, 8, t, n);
        }

        function by(t) {
            dt.flags |= 4;
            var n = dt.updateQueue;
            if (n === null) n = Cr(), dt.updateQueue = n, n.events = [t];
            else {
                var a = n.events;
                a === null ? n.events = [t] : a.push(t);
            }
        }

        function rh(t) {
            var n = $t().memoizedState;
            return by({
                    ref: n,
                    nextImpl: t
                }),
                function() {
                    if ((zt & 2) !== 0) throw Error(c(440));
                    return n.impl.apply(void 0, arguments);
                };
        }

        function uh(t, n) {
            return Nr(4, 2, t, n);
        }

        function oh(t, n) {
            return Nr(4, 4, t, n);
        }

        function ch(t, n) {
            if (typeof n == "function") {
                t = t();
                var a = n(t);
                return function() {
                    typeof a == "function" ? a() : n(null);
                };
            }
            if (n != null) return t = t(), n.current = t,
                function() {
                    n.current = null;
                };
        }

        function sh(t, n, a) {
            a = a != null ? a.concat([t]) : null, Nr(4, 4, ch.bind(null, n, t), a);
        }

        function ac() {}

        function fh(t, n) {
            var a = $t();
            n = n === void 0 ? null : n;
            var l = a.memoizedState;
            return n !== null && $o(n, l[1]) ? l[0] : (a.memoizedState = [t, n], t);
        }

        function dh(t, n) {
            var a = $t();
            n = n === void 0 ? null : n;
            var l = a.memoizedState;
            if (n !== null && $o(n, l[1])) return l[0];
            if (l = t(), Ma) {
                Xn(!0);
                try {
                    t();
                } finally {
                    Xn(!1);
                }
            }
            return a.memoizedState = [l, n], l;
        }

        function ic(t, n, a) {
            return a === void 0 || (Sn & 1073741824) !== 0 && (Et & 261930) === 0 ? t.memoizedState = n : (t.memoizedState = a, t = sm(), dt.lanes |= t, Jn |= t, a);
        }

        function hh(t, n, a, l) {
            return we(a, n) ? a : mi.current !== null ? (t = ic(t, a, l), we(t, n) || (Qt = !0), t) : (Sn & 42) === 0 || (Sn & 1073741824) !== 0 && (Et & 261930) === 0 ? (Qt = !0, t.memoizedState = a) : (t = sm(), dt.lanes |= t, Jn |= t, n);
        }

        function mh(t, n, a, l, o) {
            var s = V.p;
            V.p = s !== 0 && 8 > s ? s : 8;
            var h = j.T,
                y = {};
            j.T = y, uc(t, !1, n, a);
            try {
                var S = o(),
                    R = j.S;
                R !== null && R(y, S), S !== null && typeof S == "object" && typeof S.then == "function" ? pl(t, n, my(S, l), Pe(t)) : pl(t, n, l, Pe(t));
            } catch (B) {
                pl(t, n, {
                    then: function() {},
                    status: "rejected",
                    reason: B
                }, Pe());
            } finally {
                V.p = s, h !== null && y.types !== null && (h.types = y.types), j.T = h;
            }
        }

        function _y() {}

        function lc(t, n, a, l) {
            if (t.tag !== 5) throw Error(c(476));
            var o = vh(t).queue;
            mh(t, o, n, ot, a === null ? _y : function() {
                return ph(t), a(l);
            });
        }

        function vh(t) {
            var n = t.memoizedState;
            if (n !== null) return n;
            n = {
                memoizedState: ot,
                baseState: ot,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Tn,
                    lastRenderedState: ot
                },
                next: null
            };
            var a = {};
            return n.next = {
                memoizedState: a,
                baseState: a,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Tn,
                    lastRenderedState: a
                },
                next: null
            }, t.memoizedState = n, t = t.alternate, t !== null && (t.memoizedState = n), n;
        }

        function ph(t) {
            var n = vh(t);
            n.next === null && (n = t.alternate.memoizedState), pl(t, n.next.queue, {}, Pe());
        }

        function rc() {
            return oe(Hl);
        }

        function gh() {
            return $t().memoizedState;
        }

        function yh() {
            return $t().memoizedState;
        }

        function Ey(t) {
            for (var n = t.return; n !== null;) {
                switch (n.tag) {
                    case 24:
                    case 3:
                        var a = Pe();
                        t = Ra(a);
                        var l = Na(n, t, a);
                        l !== null && (_e(l, n, a), fl(l, n, a)), n = {
                            cache: Lo()
                        }, t.payload = n;
                        return;
                }
                n = n.return;
            }
        }

        function Sy(t, n, a) {
            var l = Pe();
            a = {
                lane: l,
                revertLane: 0,
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Mr(t) ? _h(n, a) : (a = Ao(t, n, a, l), a !== null && (_e(a, t, l), Eh(a, n, l)));
        }

        function bh(t, n, a) {
            pl(t, n, a, Pe());
        }

        function pl(t, n, a, l) {
            var o = {
                lane: l,
                revertLane: 0,
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Mr(t)) _h(n, o);
            else {
                var s = t.alternate;
                if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null)) try {
                    var h = n.lastRenderedState,
                        y = s(h, a);
                    if (o.hasEagerState = !0, o.eagerState = y, we(y, h)) return dr(t, n, o, 0), Lt === null && fr(), !1;
                } catch {}
                if (a = Ao(t, n, o, l), a !== null) return _e(a, t, l), Eh(a, n, l), !0;
            }
            return !1;
        }

        function uc(t, n, a, l) {
            if (l = {
                    lane: 2,
                    revertLane: Zc(),
                    gesture: null,
                    action: l,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, Mr(t)) {
                if (n) throw Error(c(479));
            } else n = Ao(t, a, l, 2), n !== null && _e(n, t, 2);
        }

        function Mr(t) {
            var n = t.alternate;
            return t === dt || n !== null && n === dt;
        }

        function _h(t, n) {
            vi = wr = !0;
            var a = t.pending;
            a === null ? n.next = n : (n.next = a.next, a.next = n), t.pending = n;
        }

        function Eh(t, n, a) {
            if ((a & 4194048) !== 0) {
                var l = n.lanes;
                l &= t.pendingLanes, a |= l, n.lanes = a, wf(t, a);
            }
        }
        var gl = {
            readContext: oe,
            use: Dr,
            useCallback: Yt,
            useContext: Yt,
            useEffect: Yt,
            useImperativeHandle: Yt,
            useLayoutEffect: Yt,
            useInsertionEffect: Yt,
            useMemo: Yt,
            useReducer: Yt,
            useRef: Yt,
            useState: Yt,
            useDebugValue: Yt,
            useDeferredValue: Yt,
            useTransition: Yt,
            useSyncExternalStore: Yt,
            useId: Yt,
            useHostTransitionStatus: Yt,
            useFormState: Yt,
            useActionState: Yt,
            useOptimistic: Yt,
            useMemoCache: Yt,
            useCacheRefresh: Yt
        };
        gl.useEffectEvent = Yt;
        var Sh = {
                readContext: oe,
                use: Dr,
                useCallback: function(t, n) {
                    return de().memoizedState = [t, n === void 0 ? null : n], t;
                },
                useContext: oe,
                useEffect: lh,
                useImperativeHandle: function(t, n, a) {
                    a = a != null ? a.concat([t]) : null, Rr(4194308, 4, ch.bind(null, n, t), a);
                },
                useLayoutEffect: function(t, n) {
                    return Rr(4194308, 4, t, n);
                },
                useInsertionEffect: function(t, n) {
                    Rr(4, 2, t, n);
                },
                useMemo: function(t, n) {
                    var a = de();
                    n = n === void 0 ? null : n;
                    var l = t();
                    if (Ma) {
                        Xn(!0);
                        try {
                            t();
                        } finally {
                            Xn(!1);
                        }
                    }
                    return a.memoizedState = [l, n], l;
                },
                useReducer: function(t, n, a) {
                    var l = de();
                    if (a !== void 0) {
                        var o = a(n);
                        if (Ma) {
                            Xn(!0);
                            try {
                                a(n);
                            } finally {
                                Xn(!1);
                            }
                        }
                    } else o = n;
                    return l.memoizedState = l.baseState = o, t = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: t,
                        lastRenderedState: o
                    }, l.queue = t, t = t.dispatch = Sy.bind(null, dt, t), [l.memoizedState, t];
                },
                useRef: function(t) {
                    var n = de();
                    return t = {
                        current: t
                    }, n.memoizedState = t;
                },
                useState: function(t) {
                    t = tc(t);
                    var n = t.queue,
                        a = bh.bind(null, dt, n);
                    return n.dispatch = a, [t.memoizedState, a];
                },
                useDebugValue: ac,
                useDeferredValue: function(t, n) {
                    return ic(de(), t, n);
                },
                useTransition: function() {
                    var t = tc(!1);
                    return t = mh.bind(null, dt, t.queue, !0, !1), de().memoizedState = t, [!1, t];
                },
                useSyncExternalStore: function(t, n, a) {
                    var l = dt,
                        o = de();
                    if (Tt) {
                        if (a === void 0) throw Error(c(407));
                        a = a();
                    } else {
                        if (a = n(), Lt === null) throw Error(c(349));
                        (Et & 127) !== 0 || Yd(l, n, a);
                    }
                    o.memoizedState = a;
                    var s = {
                        value: a,
                        getSnapshot: n
                    };
                    return o.queue = s, lh(Vd.bind(null, l, s, t), [t]), l.flags |= 2048, gi(9, {
                        destroy: void 0
                    }, qd.bind(null, l, s, a, n), null), a;
                },
                useId: function() {
                    var t = de(),
                        n = Lt.identifierPrefix;
                    if (Tt) {
                        var a = nn,
                            l = en;
                        a = (l & ~(1 << 32 - Ae(l) - 1)).toString(32) + a, n = "_" + n + "R_" + a, a = Or++, 0 < a && (n += "H" + a.toString(32)), n += "_";
                    } else a = vy++, n = "_" + n + "r_" + a.toString(32) + "_";
                    return t.memoizedState = n;
                },
                useHostTransitionStatus: rc,
                useFormState: th,
                useActionState: th,
                useOptimistic: function(t) {
                    var n = de();
                    n.memoizedState = n.baseState = t;
                    var a = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: null,
                        lastRenderedState: null
                    };
                    return n.queue = a, n = uc.bind(null, dt, !0, a), a.dispatch = n, [t, n];
                },
                useMemoCache: Ko,
                useCacheRefresh: function() {
                    return de().memoizedState = Ey.bind(null, dt);
                },
                useEffectEvent: function(t) {
                    var n = de(),
                        a = {
                            impl: t
                        };
                    return n.memoizedState = a,
                        function() {
                            if ((zt & 2) !== 0) throw Error(c(440));
                            return a.impl.apply(void 0, arguments);
                        };
                }
            },
            oc = {
                readContext: oe,
                use: Dr,
                useCallback: fh,
                useContext: oe,
                useEffect: nc,
                useImperativeHandle: sh,
                useInsertionEffect: uh,
                useLayoutEffect: oh,
                useMemo: dh,
                useReducer: zr,
                useRef: ih,
                useState: function() {
                    return zr(Tn);
                },
                useDebugValue: ac,
                useDeferredValue: function(t, n) {
                    return hh($t(), Mt.memoizedState, t, n);
                },
                useTransition: function() {
                    var t = zr(Tn)[0],
                        n = $t().memoizedState;
                    return [typeof t == "boolean" ? t : vl(t), n];
                },
                useSyncExternalStore: Pd,
                useId: gh,
                useHostTransitionStatus: rc,
                useFormState: eh,
                useActionState: eh,
                useOptimistic: function(t, n) {
                    return Id($t(), Mt, t, n);
                },
                useMemoCache: Ko,
                useCacheRefresh: yh
            };
        oc.useEffectEvent = rh;
        var Th = {
            readContext: oe,
            use: Dr,
            useCallback: fh,
            useContext: oe,
            useEffect: nc,
            useImperativeHandle: sh,
            useInsertionEffect: uh,
            useLayoutEffect: oh,
            useMemo: dh,
            useReducer: Jo,
            useRef: ih,
            useState: function() {
                return Jo(Tn);
            },
            useDebugValue: ac,
            useDeferredValue: function(t, n) {
                var a = $t();
                return Mt === null ? ic(a, t, n) : hh(a, Mt.memoizedState, t, n);
            },
            useTransition: function() {
                var t = Jo(Tn)[0],
                    n = $t().memoizedState;
                return [typeof t == "boolean" ? t : vl(t), n];
            },
            useSyncExternalStore: Pd,
            useId: gh,
            useHostTransitionStatus: rc,
            useFormState: ah,
            useActionState: ah,
            useOptimistic: function(t, n) {
                var a = $t();
                return Mt !== null ? Id(a, Mt, t, n) : (a.baseState = t, [t, a.queue.dispatch]);
            },
            useMemoCache: Ko,
            useCacheRefresh: yh
        };
        Th.useEffectEvent = rh;

        function cc(t, n, a, l) {
            n = t.memoizedState, a = a(l, n), a = a == null ? n : _({}, n, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
        }
        var sc = {
            enqueueSetState: function(t, n, a) {
                t = t._reactInternals;
                var l = Pe(),
                    o = Ra(l);
                o.payload = n, a != null && (o.callback = a), n = Na(t, o, l), n !== null && (_e(n, t, l), fl(n, t, l));
            },
            enqueueReplaceState: function(t, n, a) {
                t = t._reactInternals;
                var l = Pe(),
                    o = Ra(l);
                o.tag = 1, o.payload = n, a != null && (o.callback = a), n = Na(t, o, l), n !== null && (_e(n, t, l), fl(n, t, l));
            },
            enqueueForceUpdate: function(t, n) {
                t = t._reactInternals;
                var a = Pe(),
                    l = Ra(a);
                l.tag = 2, n != null && (l.callback = n), n = Na(t, l, a), n !== null && (_e(n, t, a), fl(n, t, a));
            }
        };

        function Ah(t, n, a, l, o, s, h) {
            return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, s, h) : n.prototype && n.prototype.isPureReactComponent ? !al(a, l) || !al(o, s) : !0;
        }

        function wh(t, n, a, l) {
            t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, l), n.state !== t && sc.enqueueReplaceState(n, n.state, null);
        }

        function Ha(t, n) {
            var a = n;
            if ("ref" in n) {
                a = {};
                for (var l in n) l !== "ref" && (a[l] = n[l]);
            }
            if (t = t.defaultProps) {
                a === n && (a = _({}, a));
                for (var o in t) a[o] === void 0 && (a[o] = t[o]);
            }
            return a;
        }

        function Ty(t) {
            sr(t);
        }

        function Ay(t) {
            console.error(t);
        }

        function wy(t) {
            sr(t);
        }

        function Hr(t, n) {
            try {
                var a = t.onUncaughtError;
                a(n.value, {
                    componentStack: n.stack
                });
            } catch (l) {
                setTimeout(function() {
                    throw l;
                });
            }
        }

        function Oh(t, n, a) {
            try {
                var l = t.onCaughtError;
                l(a.value, {
                    componentStack: a.stack,
                    errorBoundary: n.tag === 1 ? n.stateNode : null
                });
            } catch (o) {
                setTimeout(function() {
                    throw o;
                });
            }
        }

        function fc(t, n, a) {
            return a = Ra(a), a.tag = 3, a.payload = {
                element: null
            }, a.callback = function() {
                Hr(t, n);
            }, a;
        }

        function Ch(t) {
            return t = Ra(t), t.tag = 3, t;
        }

        function Dh(t, n, a, l) {
            var o = a.type.getDerivedStateFromError;
            if (typeof o == "function") {
                var s = l.value;
                t.payload = function() {
                    return o(s);
                }, t.callback = function() {
                    Oh(n, a, l);
                };
            }
            var h = a.stateNode;
            h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
                Oh(n, a, l), typeof o != "function" && (ta === null ? ta = /* @__PURE__ */ new Set([this]) : ta.add(this));
                var y = l.stack;
                this.componentDidCatch(l.value, {
                    componentStack: y !== null ? y : ""
                });
            });
        }

        function Oy(t, n, a, l, o) {
            if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                if (n = a.alternate, n !== null && ci(n, a, o, !0), a = Ce.current, a !== null) {
                    switch (a.tag) {
                        case 31:
                        case 13:
                            return Xe === null ? Vr() : a.alternate === null && qt === 0 && (qt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, l === _r ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), Uc(t, l, o)), !1;
                        case 22:
                            return a.flags |= 65536, l === _r ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: /* @__PURE__ */ new Set([l])
                            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Uc(t, l, o)), !1;
                    }
                    throw Error(c(435, a.tag));
                }
                return Uc(t, l, o), Vr(), !1;
            }
            if (Tt) return n = Ce.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = o, l !== Ro && (t = Error(c(422), {
                cause: l
            }), rl(Be(t, a)))) : (l !== Ro && (n = Error(c(423), {
                cause: l
            }), rl(Be(n, a))), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, l = Be(l, a), o = fc(t.stateNode, l, o), Xo(t, o), qt !== 4 && (qt = 2)), !1;
            var s = Error(c(520), {
                cause: l
            });
            if (s = Be(s, a), wl === null ? wl = [s] : wl.push(s), qt !== 4 && (qt = 2), n === null) return !0;
            l = Be(l, a), a = n;
            do {
                switch (a.tag) {
                    case 3:
                        return a.flags |= 65536, t = o & -o, a.lanes |= t, t = fc(a.stateNode, l, t), Xo(a, t), !1;
                    case 1:
                        if (n = a.type, s = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ta === null || !ta.has(s)))) return a.flags |= 65536, o &= -o, a.lanes |= o, o = Ch(o), Dh(o, t, a, l), Xo(a, o), !1;
                }
                a = a.return;
            } while (a !== null);
            return !1;
        }
        var dc = Error(c(461)),
            Qt = !1;

        function ce(t, n, a, l) {
            n.child = t === null ? Ld(n, null, a, l) : za(n, t.child, a, l);
        }

        function zh(t, n, a, l, o) {
            a = a.render;
            var s = n.ref;
            if ("ref" in l) {
                var h = {};
                for (var y in l) y !== "ref" && (h[y] = l[y]);
            } else h = l;
            return wa(n), l = ko(t, n, a, h, s, o), y = Io(), t !== null && !Qt ? (Qo(t, n, o), An(t, n, o)) : (Tt && y && Do(n), n.flags |= 1, ce(t, n, l, o), n.child);
        }

        function Rh(t, n, a, l, o) {
            if (t === null) {
                var s = a.type;
                return typeof s == "function" && !wo(s) && s.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = s, Nh(t, n, s, l, o)) : (t = mr(a.type, null, l, n, n.mode, o), t.ref = n.ref, t.return = n, n.child = t);
            }
            if (s = t.child, !_c(t, o)) {
                var h = s.memoizedProps;
                if (a = a.compare, a = a !== null ? a : al, a(h, l) && t.ref === n.ref) return An(t, n, o);
            }
            return n.flags |= 1, t = yn(s, l), t.ref = n.ref, t.return = n, n.child = t;
        }

        function Nh(t, n, a, l, o) {
            if (t !== null) {
                var s = t.memoizedProps;
                if (al(s, l) && t.ref === n.ref)
                    if (Qt = !1, n.pendingProps = l = s, _c(t, o))(t.flags & 131072) !== 0 && (Qt = !0);
                    else return n.lanes = t.lanes, An(t, n, o);
            }
            return hc(t, n, a, l, o);
        }

        function Mh(t, n, a, l) {
            var o = l.children,
                s = t !== null ? t.memoizedState : null;
            if (t === null && n.stateNode === null && (n.stateNode = {
                    _visibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null
                }), l.mode === "hidden") {
                if ((n.flags & 128) !== 0) {
                    if (s = s !== null ? s.baseLanes | a : a, t !== null) {
                        for (l = n.child = t.child, o = 0; l !== null;) o = o | l.lanes | l.childLanes, l = l.sibling;
                        l = o & ~s;
                    } else l = 0, n.child = null;
                    return Hh(t, n, s, a, l);
                }
                if ((a & 536870912) !== 0) n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, t !== null && yr(n, s !== null ? s.cachePool : null), s !== null ? jd(n, s) : Yo(), Zd(n);
                else return l = n.lanes = 536870912, Hh(t, n, s !== null ? s.baseLanes | a : a, a, l);
            } else s !== null ? (yr(n, s.cachePool), jd(n, s), Fn(n), n.memoizedState = null) : (t !== null && yr(n, null), Yo(), Fn(n));
            return ce(t, n, o, a), n.child;
        }

        function yl(t, n) {
            return t !== null && t.tag === 22 || n.stateNode !== null || (n.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), n.sibling;
        }

        function Hh(t, n, a, l, o) {
            var s = Bo();
            return s = s === null ? null : {
                parent: kt._currentValue,
                pool: s
            }, n.memoizedState = {
                baseLanes: a,
                cachePool: s
            }, t !== null && yr(n, null), Yo(), Zd(n), t !== null && ci(t, n, l, !0), n.childLanes = o, null;
        }

        function xr(t, n) {
            return n = Ur({
                mode: n.mode,
                children: n.children
            }, t.mode), n.ref = t.ref, t.child = n, n.return = t, n;
        }

        function xh(t, n, a) {
            return za(n, t.child, null, a), t = xr(n, n.pendingProps), t.flags |= 2, De(n), n.memoizedState = null, t;
        }

        function Cy(t, n, a) {
            var l = n.pendingProps,
                o = (n.flags & 128) !== 0;
            if (n.flags &= -129, t === null) {
                if (Tt) {
                    if (l.mode === "hidden") return t = xr(n, l), n.lanes = 536870912, yl(null, t);
                    if (Vo(n), (t = Bt) ? (t = km(t, Ge), t = t !== null && t.data === "&" ? t : null, t !== null && (n.memoizedState = {
                            dehydrated: t,
                            treeContext: qn !== null ? {
                                id: en,
                                overflow: nn
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, a = _d(t), a.return = n, n.child = a, ue = n, Bt = null)) : t = null, t === null) throw $n(n);
                    return n.lanes = 536870912, null;
                }
                return xr(n, l);
            }
            var s = t.memoizedState;
            if (s !== null) {
                var h = s.dehydrated;
                if (Vo(n), o)
                    if (n.flags & 256) n.flags &= -257, n = xh(t, n, a);
                    else if (n.memoizedState !== null) n.child = t.child, n.flags |= 128, n = null;
                else throw Error(c(558));
                else if (Qt || ci(t, n, a, !1), o = (a & t.childLanes) !== 0, Qt || o) {
                    if (l = Lt, l !== null && (h = Of(l, a), h !== 0 && h !== s.retryLane)) throw s.retryLane = h, Ea(t, h), _e(l, t, h), dc;
                    Vr(), n = xh(t, n, a);
                } else t = s.treeContext, Bt = Ye(h.nextSibling), ue = n, Tt = !0, Vn = null, Ge = !1, t !== null && Td(n, t), n = xr(n, l), n.flags |= 4096;
                return n;
            }
            return t = yn(t.child, {
                mode: l.mode,
                children: l.children
            }), t.ref = n.ref, n.child = t, t.return = n, t;
        }

        function Lr(t, n) {
            var a = n.ref;
            if (a === null) t !== null && t.ref !== null && (n.flags |= 4194816);
            else {
                if (typeof a != "function" && typeof a != "object") throw Error(c(284));
                (t === null || t.ref !== a) && (n.flags |= 4194816);
            }
        }

        function hc(t, n, a, l, o) {
            return wa(n), a = ko(t, n, a, l, void 0, o), l = Io(), t !== null && !Qt ? (Qo(t, n, o), An(t, n, o)) : (Tt && l && Do(n), n.flags |= 1, ce(t, n, a, o), n.child);
        }

        function Lh(t, n, a, l, o, s) {
            return wa(n), n.updateQueue = null, a = Xd(n, l, a, o), Gd(t), l = Io(), t !== null && !Qt ? (Qo(t, n, s), An(t, n, s)) : (Tt && l && Do(n), n.flags |= 1, ce(t, n, a, s), n.child);
        }

        function Uh(t, n, a, l, o) {
            if (wa(n), n.stateNode === null) {
                var s = li,
                    h = a.contextType;
                typeof h == "object" && h !== null && (s = oe(h)), s = new a(l, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = sc, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = l, s.state = n.memoizedState, s.refs = {}, Zo(n), h = a.contextType, s.context = typeof h == "object" && h !== null ? oe(h) : li, s.state = n.memoizedState, h = a.getDerivedStateFromProps, typeof h == "function" && (cc(n, a, h, l), s.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (h = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), h !== s.state && sc.enqueueReplaceState(s, s.state, null), hl(n, l, s, o), dl(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
            } else if (t === null) {
                s = n.stateNode;
                var y = n.memoizedProps,
                    S = Ha(a, y);
                s.props = S;
                var R = s.context,
                    B = a.contextType;
                h = li, typeof B == "object" && B !== null && (h = oe(B));
                var P = a.getDerivedStateFromProps;
                B = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function", y = n.pendingProps !== y, B || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (y || R !== h) && wh(n, s, l, h), In = !1;
                var N = n.memoizedState;
                s.state = N, hl(n, l, s, o), dl(), R = n.memoizedState, y || N !== R || In ? (typeof P == "function" && (cc(n, a, P, l), R = n.memoizedState), (S = In || Ah(n, a, S, l, N, R, h)) ? (B || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = R), s.props = l, s.state = R, s.context = h, l = S) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
            } else {
                s = n.stateNode, Go(t, n), h = n.memoizedProps, B = Ha(a, h), s.props = B, P = n.pendingProps, N = s.context, R = a.contextType, S = li, typeof R == "object" && R !== null && (S = oe(R)), y = a.getDerivedStateFromProps, (R = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (h !== P || N !== S) && wh(n, s, l, S), In = !1, N = n.memoizedState, s.state = N, hl(n, l, s, o), dl();
                var M = n.memoizedState;
                h !== P || N !== M || In || t !== null && t.dependencies !== null && pr(t.dependencies) ? (typeof y == "function" && (cc(n, a, y, l), M = n.memoizedState), (B = In || Ah(n, a, B, l, N, M, S) || t !== null && t.dependencies !== null && pr(t.dependencies)) ? (R || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, M, S), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(l, M, S)), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = M), s.props = l, s.state = M, s.context = S, l = B) : (typeof s.componentDidUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (n.flags |= 1024), l = !1);
            }
            return s = l, Lr(t, n), l = (n.flags & 128) !== 0, s || l ? (s = n.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, t !== null && l ? (n.child = za(n, t.child, null, o), n.child = za(n, null, a, o)) : ce(t, n, a, o), n.memoizedState = s.state, t = n.child) : t = An(t, n, o), t;
        }

        function Bh(t, n, a, l) {
            return Ta(), n.flags |= 256, ce(t, n, a, l), n.child;
        }
        var mc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };

        function vc(t) {
            return {
                baseLanes: t,
                cachePool: zd()
            };
        }

        function pc(t, n, a) {
            return t = t !== null ? t.childLanes & ~a : 0, n && (t |= Re), t;
        }

        function jh(t, n, a) {
            var l = n.pendingProps,
                o = !1,
                s = (n.flags & 128) !== 0,
                h;
            if ((h = s) || (h = t !== null && t.memoizedState === null ? !1 : (Vt.current & 2) !== 0), h && (o = !0, n.flags &= -129), h = (n.flags & 32) !== 0, n.flags &= -33, t === null) {
                if (Tt) {
                    if (o ? Qn(n) : Fn(n), (t = Bt) ? (t = km(t, Ge), t = t !== null && t.data !== "&" ? t : null, t !== null && (n.memoizedState = {
                            dehydrated: t,
                            treeContext: qn !== null ? {
                                id: en,
                                overflow: nn
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, a = _d(t), a.return = n, n.child = a, ue = n, Bt = null)) : t = null, t === null) throw $n(n);
                    return Kc(t) ? n.lanes = 32 : n.lanes = 536870912, null;
                }
                var y = l.children;
                return l = l.fallback, o ? (Fn(n), o = n.mode, y = Ur({
                    mode: "hidden",
                    children: y
                }, o), l = Sa(l, o, a, null), y.return = n, l.return = n, y.sibling = l, n.child = y, l = n.child, l.memoizedState = vc(a), l.childLanes = pc(t, h, a), n.memoizedState = mc, yl(null, l)) : (Qn(n), gc(n, y));
            }
            var S = t.memoizedState;
            if (S !== null && (y = S.dehydrated, y !== null)) {
                if (s) n.flags & 256 ? (Qn(n), n.flags &= -257, n = yc(t, n, a)) : n.memoizedState !== null ? (Fn(n), n.child = t.child, n.flags |= 128, n = null) : (Fn(n), y = l.fallback, o = n.mode, l = Ur({
                    mode: "visible",
                    children: l.children
                }, o), y = Sa(y, o, a, null), y.flags |= 2, l.return = n, y.return = n, l.sibling = y, n.child = l, za(n, t.child, null, a), l = n.child, l.memoizedState = vc(a), l.childLanes = pc(t, h, a), n.memoizedState = mc, n = yl(null, l));
                else if (Qn(n), Kc(y)) {
                    if (h = y.nextSibling && y.nextSibling.dataset, h) var R = h.dgst;
                    h = R, l = Error(c(419)), l.stack = "", l.digest = h, rl({
                        value: l,
                        source: null,
                        stack: null
                    }), n = yc(t, n, a);
                } else if (Qt || ci(t, n, a, !1), h = (a & t.childLanes) !== 0, Qt || h) {
                    if (h = Lt, h !== null && (l = Of(h, a), l !== 0 && l !== S.retryLane)) throw S.retryLane = l, Ea(t, l), _e(h, t, l), dc;
                    Fc(y) || Vr(), n = yc(t, n, a);
                } else Fc(y) ? (n.flags |= 192, n.child = t.child, n = null) : (t = S.treeContext, Bt = Ye(y.nextSibling), ue = n, Tt = !0, Vn = null, Ge = !1, t !== null && Td(n, t), n = gc(n, l.children), n.flags |= 4096);
                return n;
            }
            return o ? (Fn(n), y = l.fallback, o = n.mode, S = t.child, R = S.sibling, l = yn(S, {
                mode: "hidden",
                children: l.children
            }), l.subtreeFlags = S.subtreeFlags & 65011712, R !== null ? y = yn(R, y) : (y = Sa(y, o, a, null), y.flags |= 2), y.return = n, l.return = n, l.sibling = y, n.child = l, yl(null, l), l = n.child, y = t.child.memoizedState, y === null ? y = vc(a) : (o = y.cachePool, o !== null ? (S = kt._currentValue, o = o.parent !== S ? {
                parent: S,
                pool: S
            } : o) : o = zd(), y = {
                baseLanes: y.baseLanes | a,
                cachePool: o
            }), l.memoizedState = y, l.childLanes = pc(t, h, a), n.memoizedState = mc, yl(t.child, l)) : (Qn(n), a = t.child, t = a.sibling, a = yn(a, {
                mode: "visible",
                children: l.children
            }), a.return = n, a.sibling = null, t !== null && (h = n.deletions, h === null ? (n.deletions = [t], n.flags |= 16) : h.push(t)), n.child = a, n.memoizedState = null, a);
        }

        function gc(t, n) {
            return n = Ur({
                mode: "visible",
                children: n
            }, t.mode), n.return = t, t.child = n;
        }

        function Ur(t, n) {
            return t = Oe(22, t, null, n), t.lanes = 0, t;
        }

        function yc(t, n, a) {
            return za(n, t.child, null, a), t = gc(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
        }

        function Zh(t, n, a) {
            t.lanes |= n;
            var l = t.alternate;
            l !== null && (l.lanes |= n), Ho(t.return, n, a);
        }

        function bc(t, n, a, l, o, s) {
            var h = t.memoizedState;
            h === null ? t.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: l,
                tail: a,
                tailMode: o,
                treeForkCount: s
            } : (h.isBackwards = n, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = a, h.tailMode = o, h.treeForkCount = s);
        }

        function Gh(t, n, a) {
            var l = n.pendingProps,
                o = l.revealOrder,
                s = l.tail;
            l = l.children;
            var h = Vt.current,
                y = (h & 2) !== 0;
            if (y ? (h = h & 1 | 2, n.flags |= 128) : h &= 1, K(Vt, h), ce(t, n, l, a), l = Tt ? ll : 0, !y && t !== null && (t.flags & 128) !== 0) t: for (t = n.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && Zh(t, a, n);
                else if (t.tag === 19) Zh(t, a, n);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === n) break t;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === n) break t;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
            switch (o) {
                case "forwards":
                    for (a = n.child, o = null; a !== null;) t = a.alternate, t !== null && Ar(t) === null && (o = a), a = a.sibling;
                    a = o, a === null ? (o = n.child, n.child = null) : (o = a.sibling, a.sibling = null), bc(n, !1, o, a, s, l);
                    break;
                case "backwards":
                case "unstable_legacy-backwards":
                    for (a = null, o = n.child, n.child = null; o !== null;) {
                        if (t = o.alternate, t !== null && Ar(t) === null) {
                            n.child = o;
                            break;
                        }
                        t = o.sibling, o.sibling = a, a = o, o = t;
                    }
                    bc(n, !0, a, null, s, l);
                    break;
                case "together":
                    bc(n, !1, null, null, void 0, l);
                    break;
                default:
                    n.memoizedState = null;
            }
            return n.child;
        }

        function An(t, n, a) {
            if (t !== null && (n.dependencies = t.dependencies), Jn |= n.lanes, (a & n.childLanes) === 0)
                if (t !== null) {
                    if (ci(t, n, a, !1), (a & n.childLanes) === 0) return null;
                } else return null;
            if (t !== null && n.child !== t.child) throw Error(c(153));
            if (n.child !== null) {
                for (t = n.child, a = yn(t, t.pendingProps), n.child = a, a.return = n; t.sibling !== null;) t = t.sibling, a = a.sibling = yn(t, t.pendingProps), a.return = n;
                a.sibling = null;
            }
            return n.child;
        }

        function _c(t, n) {
            return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && pr(t)));
        }

        function Dy(t, n, a) {
            switch (n.tag) {
                case 3:
                    ee(n, n.stateNode.containerInfo), kn(n, kt, t.memoizedState.cache), Ta();
                    break;
                case 27:
                case 5:
                    Ee(n);
                    break;
                case 4:
                    ee(n, n.stateNode.containerInfo);
                    break;
                case 10:
                    kn(n, n.type, n.memoizedProps.value);
                    break;
                case 31:
                    if (n.memoizedState !== null) return n.flags |= 128, Vo(n), null;
                    break;
                case 13:
                    var l = n.memoizedState;
                    if (l !== null)
                        return l.dehydrated !== null ? (Qn(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? jh(t, n, a) : (Qn(n), t = An(t, n, a), t !== null ? t.sibling : null);
                    Qn(n);
                    break;
                case 19:
                    var o = (t.flags & 128) !== 0;
                    if (l = (a & n.childLanes) !== 0, l || (ci(t, n, a, !1), l = (a & n.childLanes) !== 0), o) {
                        if (l) return Gh(t, n, a);
                        n.flags |= 128;
                    }
                    if (o = n.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(Vt, Vt.current), l) break;
                    return null;
                case 22:
                    return n.lanes = 0, Mh(t, n, a, n.pendingProps);
                case 24:
                    kn(n, kt, t.memoizedState.cache);
            }
            return An(t, n, a);
        }

        function Xh(t, n, a) {
            if (t !== null)
                if (t.memoizedProps !== n.pendingProps) Qt = !0;
                else {
                    if (!_c(t, a) && (n.flags & 128) === 0) return Qt = !1, Dy(t, n, a);
                    Qt = (t.flags & 131072) !== 0;
                }
            else Qt = !1, Tt && (n.flags & 1048576) !== 0 && Sd(n, ll, n.index);
            switch (n.lanes = 0, n.tag) {
                case 16:
                    t: {
                        var l = n.pendingProps;
                        if (t = Ca(n.elementType), n.type = t, typeof t == "function") wo(t) ? (l = Ha(t, l), n.tag = 1, n = Uh(null, n, t, l, a)) : (n.tag = 0, n = hc(null, n, t, l, a));
                        else {
                            if (t != null) {
                                var o = t.$$typeof;
                                if (o === q) {
                                    n.tag = 11, n = zh(null, n, t, l, a);
                                    break t;
                                } else if (o === Q) {
                                    n.tag = 14, n = Rh(null, n, t, l, a);
                                    break t;
                                }
                            }
                            throw n = yt(t) || t, Error(c(306, n, ""));
                        }
                    }
                    return n;
                case 0:
                    return hc(t, n, n.type, n.pendingProps, a);
                case 1:
                    return l = n.type, o = Ha(l, n.pendingProps), Uh(t, n, l, o, a);
                case 3:
                    t: {
                        if (ee(n, n.stateNode.containerInfo), t === null) throw Error(c(387));
                        l = n.pendingProps;
                        var s = n.memoizedState;
                        o = s.element,
                        Go(t, n),
                        hl(n, l, null, a);
                        var h = n.memoizedState;
                        if (l = h.cache, kn(n, kt, l), l !== s.cache && xo(n, [kt], a, !0), dl(), l = h.element, s.isDehydrated)
                            if (s = {
                                    element: l,
                                    isDehydrated: !1,
                                    cache: h.cache
                                }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
                                n = Bh(t, n, l, a);
                                break t;
                            } else if (l !== o) {
                            o = Be(Error(c(424)), n), rl(o), n = Bh(t, n, l, a);
                            break t;
                        } else
                            for (t = n.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Bt = Ye(t.firstChild), ue = n, Tt = !0, Vn = null, Ge = !0, a = Ld(n, null, l, a), n.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
                        else {
                            if (Ta(), l === o) {
                                n = An(t, n, a);
                                break t;
                            }
                            ce(t, n, l, a);
                        }
                        n = n.child;
                    }
                    return n;
                case 26:
                    return Lr(t, n), t === null ? (a = Jm(n.type, null, n.pendingProps, null)) ? n.memoizedState = a : Tt || (a = n.type, t = n.pendingProps, l = Wr(st.current).createElement(a), l[re] = n, l[me] = t, se(l, a, t), ie(l), n.stateNode = l) : n.memoizedState = Jm(n.type, t.memoizedProps, n.pendingProps, t.memoizedState), null;
                case 27:
                    return Ee(n), t === null && Tt && (l = n.stateNode = Fm(n.type, n.pendingProps, st.current), ue = n, Ge = !0, o = Bt, ia(n.type) ? (Wc = o, Bt = Ye(l.firstChild)) : Bt = o), ce(t, n, n.pendingProps.children, a), Lr(t, n), t === null && (n.flags |= 4194304), n.child;
                case 5:
                    return t === null && Tt && ((o = l = Bt) && (l = n1(l, n.type, n.pendingProps, Ge), l !== null ? (n.stateNode = l, ue = n, Bt = Ye(l.firstChild), Ge = !1, o = !0) : o = !1), o || $n(n)), Ee(n), o = n.type, s = n.pendingProps, h = t !== null ? t.memoizedProps : null, l = s.children, kc(o, s) ? l = null : h !== null && kc(o, h) && (n.flags |= 32), n.memoizedState !== null && (o = ko(t, n, py, null, null, a), Hl._currentValue = o), Lr(t, n), ce(t, n, l, a), n.child;
                case 6:
                    return t === null && Tt && ((t = a = Bt) && (a = a1(a, n.pendingProps, Ge), a !== null ? (n.stateNode = a, ue = n, Bt = null, t = !0) : t = !1), t || $n(n)), null;
                case 13:
                    return jh(t, n, a);
                case 4:
                    return ee(n, n.stateNode.containerInfo), l = n.pendingProps, t === null ? n.child = za(n, null, l, a) : ce(t, n, l, a), n.child;
                case 11:
                    return zh(t, n, n.type, n.pendingProps, a);
                case 7:
                    return ce(t, n, n.pendingProps, a), n.child;
                case 8:
                    return ce(t, n, n.pendingProps.children, a), n.child;
                case 12:
                    return ce(t, n, n.pendingProps.children, a), n.child;
                case 10:
                    return l = n.pendingProps, kn(n, n.type, l.value), ce(t, n, l.children, a), n.child;
                case 9:
                    return o = n.type._context, l = n.pendingProps.children, wa(n), o = oe(o), l = l(o), n.flags |= 1, ce(t, n, l, a), n.child;
                case 14:
                    return Rh(t, n, n.type, n.pendingProps, a);
                case 15:
                    return Nh(t, n, n.type, n.pendingProps, a);
                case 19:
                    return Gh(t, n, a);
                case 31:
                    return Cy(t, n, a);
                case 22:
                    return Mh(t, n, a, n.pendingProps);
                case 24:
                    return wa(n), l = oe(kt), t === null ? (o = Bo(), o === null && (o = Lt, s = Lo(), o.pooledCache = s, s.refCount++, s !== null && (o.pooledCacheLanes |= a), o = s), n.memoizedState = {
                        parent: l,
                        cache: o
                    }, Zo(n), kn(n, kt, o)) : ((t.lanes & a) !== 0 && (Go(t, n), hl(n, null, null, a), dl()), o = t.memoizedState, s = n.memoizedState, o.parent !== l ? (o = {
                        parent: l,
                        cache: l
                    }, n.memoizedState = o, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = o), kn(n, kt, l)) : (l = s.cache, kn(n, kt, l), l !== o.cache && xo(n, [kt], a, !0))), ce(t, n, n.pendingProps.children, a), n.child;
                case 29:
                    throw n.pendingProps;
            }
            throw Error(c(156, n.tag));
        }

        function wn(t) {
            t.flags |= 4;
        }

        function Ec(t, n, a, l, o) {
            if ((n = (t.mode & 32) !== 0) && (n = !1), n) {
                if (t.flags |= 16777216, (o & 335544128) === o)
                    if (t.stateNode.complete) t.flags |= 8192;
                    else if (mm()) t.flags |= 8192;
                else throw Da = _r, jo;
            } else t.flags &= -16777217;
        }

        function Ph(t, n) {
            if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217;
            else if (t.flags |= 16777216, !iv(n))
                if (mm()) t.flags |= 8192;
                else throw Da = _r, jo;
        }

        function Br(t, n) {
            n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? Tf() : 536870912, t.lanes |= n, Ei |= n);
        }

        function bl(t, n) {
            if (!Tt) switch (t.tailMode) {
                case "hidden":
                    n = t.tail;
                    for (var a = null; n !== null;) n.alternate !== null && (a = n), n = n.sibling;
                    a === null ? t.tail = null : a.sibling = null;
                    break;
                case "collapsed":
                    a = t.tail;
                    for (var l = null; a !== null;) a.alternate !== null && (l = a), a = a.sibling;
                    l === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
            }
        }

        function jt(t) {
            var n = t.alternate !== null && t.alternate.child === t.child,
                a = 0,
                l = 0;
            if (n)
                for (var o = t.child; o !== null;) a |= o.lanes | o.childLanes, l |= o.subtreeFlags & 65011712, l |= o.flags & 65011712, o.return = t, o = o.sibling;
            else
                for (o = t.child; o !== null;) a |= o.lanes | o.childLanes, l |= o.subtreeFlags, l |= o.flags, o.return = t, o = o.sibling;
            return t.subtreeFlags |= l, t.childLanes = a, n;
        }

        function zy(t, n, a) {
            var l = n.pendingProps;
            switch (zo(n), n.tag) {
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return jt(n), null;
                case 1:
                    return jt(n), null;
                case 3:
                    return a = n.stateNode, l = null, t !== null && (l = t.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), En(kt), nt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (oi(n) ? wn(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, No())), jt(n), null;
                case 26:
                    var o = n.type,
                        s = n.memoizedState;
                    return t === null ? (wn(n), s !== null ? (jt(n), Ph(n, s)) : (jt(n), Ec(n, o, null, l, a))) : s ? s !== t.memoizedState ? (wn(n), jt(n), Ph(n, s)) : (jt(n), n.flags &= -16777217) : (t = t.memoizedProps, t !== l && wn(n), jt(n), Ec(n, o, t, l, a)), null;
                case 27:
                    if (Gn(n), a = st.current, o = n.type, t !== null && n.stateNode != null) t.memoizedProps !== l && wn(n);
                    else {
                        if (!l) {
                            if (n.stateNode === null) throw Error(c(166));
                            return jt(n), null;
                        }
                        t = tt.current, oi(n) ? Ad(n, t) : (t = Fm(o, l, a), n.stateNode = t, wn(n));
                    }
                    return jt(n), null;
                case 5:
                    if (Gn(n), o = n.type, t !== null && n.stateNode != null) t.memoizedProps !== l && wn(n);
                    else {
                        if (!l) {
                            if (n.stateNode === null) throw Error(c(166));
                            return jt(n), null;
                        }
                        if (s = tt.current, oi(n)) Ad(n, s);
                        else {
                            var h = Wr(st.current);
                            switch (s) {
                                case 1:
                                    s = h.createElementNS("http://www.w3.org/2000/svg", o);
                                    break;
                                case 2:
                                    s = h.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                    break;
                                default:
                                    switch (o) {
                                        case "svg":
                                            s = h.createElementNS("http://www.w3.org/2000/svg", o);
                                            break;
                                        case "math":
                                            s = h.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                            break;
                                        case "script":
                                            s = h.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(s.firstChild);
                                            break;
                                        case "select":
                                            s = typeof l.is == "string" ? h.createElement("select", {
                                                is: l.is
                                            }) : h.createElement("select"), l.multiple ? s.multiple = !0 : l.size && (s.size = l.size);
                                            break;
                                        default:
                                            s = typeof l.is == "string" ? h.createElement(o, {
                                                is: l.is
                                            }) : h.createElement(o);
                                    }
                            }
                            s[re] = n, s[me] = l;
                            t: for (h = n.child; h !== null;) {
                                if (h.tag === 5 || h.tag === 6) s.appendChild(h.stateNode);
                                else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                                    h.child.return = h, h = h.child;
                                    continue;
                                }
                                if (h === n) break t;
                                for (; h.sibling === null;) {
                                    if (h.return === null || h.return === n) break t;
                                    h = h.return;
                                }
                                h.sibling.return = h.return, h = h.sibling;
                            }
                            n.stateNode = s;
                            t: switch (se(s, o, l), o) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l = !!l.autoFocus;
                                    break t;
                                case "img":
                                    l = !0;
                                    break t;
                                default:
                                    l = !1;
                            }
                            l && wn(n);
                        }
                    }
                    return jt(n), Ec(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, a), null;
                case 6:
                    if (t && n.stateNode != null) t.memoizedProps !== l && wn(n);
                    else {
                        if (typeof l != "string" && n.stateNode === null) throw Error(c(166));
                        if (t = st.current, oi(n)) {
                            if (t = n.stateNode, a = n.memoizedProps, l = null, o = ue, o !== null) switch (o.tag) {
                                case 27:
                                case 5:
                                    l = o.memoizedProps;
                            }
                            t[re] = n, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Zm(t.nodeValue, a)), t || $n(n, !0);
                        } else t = Wr(t).createTextNode(l), t[re] = n, n.stateNode = t;
                    }
                    return jt(n), null;
                case 31:
                    if (a = n.memoizedState, t === null || t.memoizedState !== null) {
                        if (l = oi(n), a !== null) {
                            if (t === null) {
                                if (!l) throw Error(c(318));
                                if (t = n.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
                                t[re] = n;
                            } else Ta(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                            jt(n), t = !1;
                        } else a = No(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
                        if (!t)
                            return n.flags & 256 ? (De(n), n) : (De(n), null);
                        if ((n.flags & 128) !== 0) throw Error(c(558));
                    }
                    return jt(n), null;
                case 13:
                    if (l = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                        if (o = oi(n), l !== null && l.dehydrated !== null) {
                            if (t === null) {
                                if (!o) throw Error(c(318));
                                if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(c(317));
                                o[re] = n;
                            } else Ta(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                            jt(n), o = !1;
                        } else o = No(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
                        if (!o)
                            return n.flags & 256 ? (De(n), n) : (De(n), null);
                    }
                    return De(n), (n.flags & 128) !== 0 ? (n.lanes = a, n) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = n.child, o = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (o = l.alternate.memoizedState.cachePool.pool), s = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool), s !== o && (l.flags |= 2048)), a !== t && a && (n.child.flags |= 8192), Br(n, n.updateQueue), jt(n), null);
                case 4:
                    return nt(), t === null && Lm(n.stateNode.containerInfo), jt(n), null;
                case 10:
                    return En(n.type), jt(n), null;
                case 19:
                    if (X(Vt), l = n.memoizedState, l === null) return jt(n), null;
                    if (o = (n.flags & 128) !== 0, s = l.rendering, s === null)
                        if (o) bl(l, !1);
                        else {
                            if (qt !== 0 || t !== null && (t.flags & 128) !== 0)
                                for (t = n.child; t !== null;) {
                                    if (s = Ar(t), s !== null) {
                                        for (n.flags |= 128, bl(l, !1), t = s.updateQueue, n.updateQueue = t, Br(n, t), n.subtreeFlags = 0, t = a, a = n.child; a !== null;) bd(a, t), a = a.sibling;
                                        return K(Vt, Vt.current & 1 | 2), Tt && bn(n, l.treeForkCount), n.child;
                                    }
                                    t = t.sibling;
                                }
                            l.tail !== null && Se() > Pr && (n.flags |= 128, o = !0, bl(l, !1), n.lanes = 4194304);
                        }
                    else {
                        if (!o)
                            if (t = Ar(s), t !== null) {
                                if (n.flags |= 128, o = !0, t = t.updateQueue, n.updateQueue = t, Br(n, t), bl(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !Tt) return jt(n), null;
                            } else 2 * Se() - l.renderingStartTime > Pr && a !== 536870912 && (n.flags |= 128, o = !0, bl(l, !1), n.lanes = 4194304);
                        l.isBackwards ? (s.sibling = n.child, n.child = s) : (t = l.last, t !== null ? t.sibling = s : n.child = s, l.last = s);
                    }
                    return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Se(), t.sibling = null, a = Vt.current, K(Vt, o ? a & 1 | 2 : a & 1), Tt && bn(n, l.treeForkCount), t) : (jt(n), null);
                case 22:
                case 23:
                    return De(n), qo(), l = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (jt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : jt(n), a = n.updateQueue, a !== null && Br(n, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== a && (n.flags |= 2048), t !== null && X(Oa), null;
                case 24:
                    return a = null, t !== null && (a = t.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), En(kt), jt(n), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(c(156, n.tag));
        }

        function Ry(t, n) {
            switch (zo(n), n.tag) {
                case 1:
                    return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
                case 3:
                    return En(kt), nt(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
                case 26:
                case 27:
                case 5:
                    return Gn(n), null;
                case 31:
                    if (n.memoizedState !== null) {
                        if (De(n), n.alternate === null) throw Error(c(340));
                        Ta();
                    }
                    return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
                case 13:
                    if (De(n), t = n.memoizedState, t !== null && t.dehydrated !== null) {
                        if (n.alternate === null) throw Error(c(340));
                        Ta();
                    }
                    return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
                case 19:
                    return X(Vt), null;
                case 4:
                    return nt(), null;
                case 10:
                    return En(n.type), null;
                case 22:
                case 23:
                    return De(n), qo(), t !== null && X(Oa), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
                case 24:
                    return En(kt), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }

        function Yh(t, n) {
            switch (zo(n), n.tag) {
                case 3:
                    En(kt), nt();
                    break;
                case 26:
                case 27:
                case 5:
                    Gn(n);
                    break;
                case 4:
                    nt();
                    break;
                case 31:
                    n.memoizedState !== null && De(n);
                    break;
                case 13:
                    De(n);
                    break;
                case 19:
                    X(Vt);
                    break;
                case 10:
                    En(n.type);
                    break;
                case 22:
                case 23:
                    De(n), qo(), t !== null && X(Oa);
                    break;
                case 24:
                    En(kt);
            }
        }

        function _l(t, n) {
            try {
                var a = n.updateQueue,
                    l = a !== null ? a.lastEffect : null;
                if (l !== null) {
                    var o = l.next;
                    a = o;
                    do {
                        if ((a.tag & t) === t) {
                            l = void 0;
                            var s = a.create,
                                h = a.inst;
                            l = s(), h.destroy = l;
                        }
                        a = a.next;
                    } while (a !== o);
                }
            } catch (y) {
                Nt(n, n.return, y);
            }
        }

        function Kn(t, n, a) {
            try {
                var l = n.updateQueue,
                    o = l !== null ? l.lastEffect : null;
                if (o !== null) {
                    var s = o.next;
                    l = s;
                    do {
                        if ((l.tag & t) === t) {
                            var h = l.inst,
                                y = h.destroy;
                            if (y !== void 0) {
                                h.destroy = void 0, o = n;
                                var S = a,
                                    R = y;
                                try {
                                    R();
                                } catch (B) {
                                    Nt(o, S, B);
                                }
                            }
                        }
                        l = l.next;
                    } while (l !== s);
                }
            } catch (B) {
                Nt(n, n.return, B);
            }
        }

        function qh(t) {
            var n = t.updateQueue;
            if (n !== null) {
                var a = t.stateNode;
                try {
                    Bd(n, a);
                } catch (l) {
                    Nt(t, t.return, l);
                }
            }
        }

        function Vh(t, n, a) {
            a.props = Ha(t.type, t.memoizedProps), a.state = t.memoizedState;
            try {
                a.componentWillUnmount();
            } catch (l) {
                Nt(t, n, l);
            }
        }

        function El(t, n) {
            try {
                var a = t.ref;
                if (a !== null) {
                    switch (t.tag) {
                        case 26:
                        case 27:
                        case 5:
                            var l = t.stateNode;
                            break;
                        case 30:
                            l = t.stateNode;
                            break;
                        default:
                            l = t.stateNode;
                    }
                    typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
                }
            } catch (o) {
                Nt(t, n, o);
            }
        }

        function an(t, n) {
            var a = t.ref,
                l = t.refCleanup;
            if (a !== null)
                if (typeof l == "function") try {
                    l();
                } catch (o) {
                    Nt(t, n, o);
                } finally {
                    t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
                }
            else if (typeof a == "function") try {
                a(null);
            } catch (o) {
                Nt(t, n, o);
            }
            else a.current = null;
        }

        function $h(t) {
            var n = t.type,
                a = t.memoizedProps,
                l = t.stateNode;
            try {
                t: switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a.autoFocus && l.focus();
                        break t;
                    case "img":
                        a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
                }
            }
            catch (o) {
                Nt(t, t.return, o);
            }
        }

        function Sc(t, n, a) {
            try {
                var l = t.stateNode;
                Fy(l, t.type, a, n), l[me] = n;
            } catch (o) {
                Nt(t, t.return, o);
            }
        }

        function kh(t) {
            return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ia(t.type) || t.tag === 4;
        }

        function Tc(t) {
            t: for (;;) {
                for (; t.sibling === null;) {
                    if (t.return === null || kh(t.return)) return null;
                    t = t.return;
                }
                for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                    if (t.tag === 27 && ia(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                    t.child.return = t, t = t.child;
                }
                if (!(t.flags & 2)) return t.stateNode;
            }
        }

        function Ac(t, n, a) {
            var l = t.tag;
            if (l === 5 || l === 6) t = t.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(t), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = pn));
            else if (l !== 4 && (l === 27 && ia(t.type) && (a = t.stateNode, n = null), t = t.child, t !== null))
                for (Ac(t, n, a), t = t.sibling; t !== null;) Ac(t, n, a), t = t.sibling;
        }

        function jr(t, n, a) {
            var l = t.tag;
            if (l === 5 || l === 6) t = t.stateNode, n ? a.insertBefore(t, n) : a.appendChild(t);
            else if (l !== 4 && (l === 27 && ia(t.type) && (a = t.stateNode), t = t.child, t !== null))
                for (jr(t, n, a), t = t.sibling; t !== null;) jr(t, n, a), t = t.sibling;
        }

        function Ih(t) {
            var n = t.stateNode,
                a = t.memoizedProps;
            try {
                for (var l = t.type, o = n.attributes; o.length;) n.removeAttributeNode(o[0]);
                se(n, l, a), n[re] = t, n[me] = a;
            } catch (s) {
                Nt(t, t.return, s);
            }
        }
        var On = !1,
            Ft = !1,
            wc = !1,
            Qh = typeof WeakSet == "function" ? WeakSet : Set,
            le = null;

        function Ny(t, n) {
            if (t = t.containerInfo, Vc = lu, t = sd(t), yo(t)) {
                if ("selectionStart" in t) var a = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
                else t: {
                    a = (a = t.ownerDocument) && a.defaultView || window;
                    var l = a.getSelection && a.getSelection();
                    if (l && l.rangeCount !== 0) {
                        a = l.anchorNode;
                        var o = l.anchorOffset,
                            s = l.focusNode;
                        l = l.focusOffset;
                        try {
                            a.nodeType, s.nodeType;
                        } catch {
                            a = null;
                            break t;
                        }
                        var h = 0,
                            y = -1,
                            S = -1,
                            R = 0,
                            B = 0,
                            P = t,
                            N = null;
                        e: for (;;) {
                            for (var M; P !== a || o !== 0 && P.nodeType !== 3 || (y = h + o), P !== s || l !== 0 && P.nodeType !== 3 || (S = h + l), P.nodeType === 3 && (h += P.nodeValue.length), (M = P.firstChild) !== null;)
                                N = P, P = M;
                            for (;;) {
                                if (P === t) break e;
                                if (N === a && ++R === o && (y = h), N === s && ++B === l && (S = h), (M = P.nextSibling) !== null) break;
                                P = N, N = P.parentNode;
                            }
                            P = M;
                        }
                        a = y === -1 || S === -1 ? null : {
                            start: y,
                            end: S
                        };
                    } else a = null;
                }
                a = a || {
                    start: 0,
                    end: 0
                };
            } else a = null;
            for ($c = {
                    focusedElem: t,
                    selectionRange: a
                }, lu = !1, le = n; le !== null;)
                if (n = le, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null) t.return = n, le = t;
                else
                    for (; le !== null;) {
                        switch (n = le, s = n.alternate, t = n.flags, n.tag) {
                            case 0:
                                if ((t & 4) !== 0 && (t = n.updateQueue, t = t !== null ? t.events : null, t !== null))
                                    for (a = 0; a < t.length; a++) o = t[a], o.ref.impl = o.nextImpl;
                                break;
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if ((t & 1024) !== 0 && s !== null) {
                                    t = void 0, a = n, o = s.memoizedProps, s = s.memoizedState, l = a.stateNode;
                                    try {
                                        var et = Ha(a.type, o);
                                        t = l.getSnapshotBeforeUpdate(et, s), l.__reactInternalSnapshotBeforeUpdate = t;
                                    } catch (ut) {
                                        Nt(a, a.return, ut);
                                    }
                                }
                                break;
                            case 3:
                                if ((t & 1024) !== 0) {
                                    if (t = n.stateNode.containerInfo, a = t.nodeType, a === 9) Qc(t);
                                    else if (a === 1) switch (t.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            Qc(t);
                                            break;
                                        default:
                                            t.textContent = "";
                                    }
                                }
                                break;
                            case 5:
                            case 26:
                            case 27:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                if ((t & 1024) !== 0) throw Error(c(163));
                        }
                        if (t = n.sibling, t !== null) {
                            t.return = n.return, le = t;
                            break;
                        }
                        le = n.return;
                    }
        }

        function Fh(t, n, a) {
            var l = a.flags;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    Dn(t, a), l & 4 && _l(5, a);
                    break;
                case 1:
                    if (Dn(t, a), l & 4)
                        if (t = a.stateNode, n === null) try {
                            t.componentDidMount();
                        } catch (h) {
                            Nt(a, a.return, h);
                        }
                    else {
                        var o = Ha(a.type, n.memoizedProps);
                        n = n.memoizedState;
                        try {
                            t.componentDidUpdate(o, n, t.__reactInternalSnapshotBeforeUpdate);
                        } catch (h) {
                            Nt(a, a.return, h);
                        }
                    }
                    l & 64 && qh(a), l & 512 && El(a, a.return);
                    break;
                case 3:
                    if (Dn(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
                        if (n = null, a.child !== null) switch (a.child.tag) {
                            case 27:
                            case 5:
                                n = a.child.stateNode;
                                break;
                            case 1:
                                n = a.child.stateNode;
                        }
                        try {
                            Bd(t, n);
                        } catch (h) {
                            Nt(a, a.return, h);
                        }
                    }
                    break;
                case 27:
                    n === null && l & 4 && Ih(a);
                case 26:
                case 5:
                    Dn(t, a), n === null && l & 4 && $h(a), l & 512 && El(a, a.return);
                    break;
                case 12:
                    Dn(t, a);
                    break;
                case 31:
                    Dn(t, a), l & 4 && Jh(t, a);
                    break;
                case 13:
                    Dn(t, a), l & 4 && tm(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = Gy.bind(null, a), i1(t, a))));
                    break;
                case 22:
                    if (l = a.memoizedState !== null || On, !l) {
                        n = n !== null && n.memoizedState !== null || Ft, o = On;
                        var s = Ft;
                        On = l, (Ft = n) && !s ? zn(t, a, (a.subtreeFlags & 8772) !== 0) : Dn(t, a), On = o, Ft = s;
                    }
                    break;
                case 30:
                    break;
                default:
                    Dn(t, a);
            }
        }

        function Kh(t) {
            var n = t.alternate;
            n !== null && (t.alternate = null, Kh(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && to(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
        }
        var Gt = null,
            pe = !1;

        function Cn(t, n, a) {
            for (a = a.child; a !== null;) Wh(t, n, a), a = a.sibling;
        }

        function Wh(t, n, a) {
            if (Te && typeof Te.onCommitFiberUnmount == "function") try {
                Te.onCommitFiberUnmount(Vi, a);
            } catch {}
            switch (a.tag) {
                case 26:
                    Ft || an(a, n), Cn(t, n, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                    break;
                case 27:
                    Ft || an(a, n);
                    var l = Gt,
                        o = pe;
                    ia(a.type) && (Gt = a.stateNode, pe = !1), Cn(t, n, a), Rl(a.stateNode), Gt = l, pe = o;
                    break;
                case 5:
                    Ft || an(a, n);
                case 6:
                    if (l = Gt, o = pe, Gt = null, Cn(t, n, a), Gt = l, pe = o, Gt !== null)
                        if (pe) try {
                            (Gt.nodeType === 9 ? Gt.body : Gt.nodeName === "HTML" ? Gt.ownerDocument.body : Gt).removeChild(a.stateNode);
                        } catch (s) {
                            Nt(a, n, s);
                        }
                    else try {
                        Gt.removeChild(a.stateNode);
                    } catch (s) {
                        Nt(a, n, s);
                    }
                    break;
                case 18:
                    Gt !== null && (pe ? (t = Gt, Vm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode), zi(t)) : Vm(Gt, a.stateNode));
                    break;
                case 4:
                    l = Gt, o = pe, Gt = a.stateNode.containerInfo, pe = !0, Cn(t, n, a), Gt = l, pe = o;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Kn(2, a, n), Ft || Kn(4, a, n), Cn(t, n, a);
                    break;
                case 1:
                    Ft || (an(a, n), l = a.stateNode, typeof l.componentWillUnmount == "function" && Vh(a, n, l)), Cn(t, n, a);
                    break;
                case 21:
                    Cn(t, n, a);
                    break;
                case 22:
                    Ft = (l = Ft) || a.memoizedState !== null, Cn(t, n, a), Ft = l;
                    break;
                default:
                    Cn(t, n, a);
            }
        }

        function Jh(t, n) {
            if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null))) {
                t = t.dehydrated;
                try {
                    zi(t);
                } catch (a) {
                    Nt(n, n.return, a);
                }
            }
        }

        function tm(t, n) {
            if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
                zi(t);
            } catch (a) {
                Nt(n, n.return, a);
            }
        }

        function My(t) {
            switch (t.tag) {
                case 31:
                case 13:
                case 19:
                    var n = t.stateNode;
                    return n === null && (n = t.stateNode = new Qh()), n;
                case 22:
                    return t = t.stateNode, n = t._retryCache, n === null && (n = t._retryCache = new Qh()), n;
                default:
                    throw Error(c(435, t.tag));
            }
        }

        function Zr(t, n) {
            var a = My(t);
            n.forEach(function(l) {
                if (!a.has(l)) {
                    a.add(l);
                    var o = Xy.bind(null, t, l);
                    l.then(o, o);
                }
            });
        }

        function ge(t, n) {
            var a = n.deletions;
            if (a !== null)
                for (var l = 0; l < a.length; l++) {
                    var o = a[l],
                        s = t,
                        h = n,
                        y = h;
                    t: for (; y !== null;) {
                        switch (y.tag) {
                            case 27:
                                if (ia(y.type)) {
                                    Gt = y.stateNode, pe = !1;
                                    break t;
                                }
                                break;
                            case 5:
                                Gt = y.stateNode, pe = !1;
                                break t;
                            case 3:
                            case 4:
                                Gt = y.stateNode.containerInfo, pe = !0;
                                break t;
                        }
                        y = y.return;
                    }
                    if (Gt === null) throw Error(c(160));
                    Wh(s, h, o), Gt = null, pe = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
                }
            if (n.subtreeFlags & 13886)
                for (n = n.child; n !== null;) em(n, t), n = n.sibling;
        }
        var Fe = null;

        function em(t, n) {
            var a = t.alternate,
                l = t.flags;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ge(n, t), ye(t), l & 4 && (Kn(3, t, t.return), _l(3, t), Kn(5, t, t.return));
                    break;
                case 1:
                    ge(n, t), ye(t), l & 512 && (Ft || a === null || an(a, a.return)), l & 64 && On && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
                    break;
                case 26:
                    var o = Fe;
                    if (ge(n, t), ye(t), l & 512 && (Ft || a === null || an(a, a.return)), l & 4) {
                        var s = a !== null ? a.memoizedState : null;
                        if (l = t.memoizedState, a === null)
                            if (l === null)
                                if (t.stateNode === null) {
                                    t: {
                                        l = t.type,
                                        a = t.memoizedProps,
                                        o = o.ownerDocument || o;
                                        e: switch (l) {
                                            case "title":
                                                s = o.getElementsByTagName("title")[0], (!s || s[Ii] || s[re] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = o.createElement(l), o.head.insertBefore(s, o.querySelector("head > title"))), se(s, l, a), s[re] = t, ie(s), l = s;
                                                break t;
                                            case "link":
                                                var h = nv("link", "href", o).get(l + (a.href || ""));
                                                if (h) {
                                                    for (var y = 0; y < h.length; y++)
                                                        if (s = h[y], s.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && s.getAttribute("rel") === (a.rel == null ? null : a.rel) && s.getAttribute("title") === (a.title == null ? null : a.title) && s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                            h.splice(y, 1);
                                                            break e;
                                                        }
                                                }
                                                s = o.createElement(l), se(s, l, a), o.head.appendChild(s);
                                                break;
                                            case "meta":
                                                if (h = nv("meta", "content", o).get(l + (a.content || ""))) {
                                                    for (y = 0; y < h.length; y++)
                                                        if (s = h[y], s.getAttribute("content") === (a.content == null ? null : "" + a.content) && s.getAttribute("name") === (a.name == null ? null : a.name) && s.getAttribute("property") === (a.property == null ? null : a.property) && s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && s.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                            h.splice(y, 1);
                                                            break e;
                                                        }
                                                }
                                                s = o.createElement(l), se(s, l, a), o.head.appendChild(s);
                                                break;
                                            default:
                                                throw Error(c(468, l));
                                        }
                                        s[re] = t,
                                        ie(s),
                                        l = s;
                                    }
                                    t.stateNode = l;
                                }
                        else av(o, t.type, t.stateNode);
                        else t.stateNode = ev(o, l, t.memoizedProps);
                        else s !== l ? (s === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : s.count--, l === null ? av(o, t.type, t.stateNode) : ev(o, l, t.memoizedProps)) : l === null && t.stateNode !== null && Sc(t, t.memoizedProps, a.memoizedProps);
                    }
                    break;
                case 27:
                    ge(n, t), ye(t), l & 512 && (Ft || a === null || an(a, a.return)), a !== null && l & 4 && Sc(t, t.memoizedProps, a.memoizedProps);
                    break;
                case 5:
                    if (ge(n, t), ye(t), l & 512 && (Ft || a === null || an(a, a.return)), t.flags & 32) {
                        o = t.stateNode;
                        try {
                            Wa(o, "");
                        } catch (et) {
                            Nt(t, t.return, et);
                        }
                    }
                    l & 4 && t.stateNode != null && (o = t.memoizedProps, Sc(t, o, a !== null ? a.memoizedProps : o)), l & 1024 && (wc = !0);
                    break;
                case 6:
                    if (ge(n, t), ye(t), l & 4) {
                        if (t.stateNode === null) throw Error(c(162));
                        l = t.memoizedProps, a = t.stateNode;
                        try {
                            a.nodeValue = l;
                        } catch (et) {
                            Nt(t, t.return, et);
                        }
                    }
                    break;
                case 3:
                    if (eu = null, o = Fe, Fe = Jr(n.containerInfo), ge(n, t), Fe = o, ye(t), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
                        zi(n.containerInfo);
                    } catch (et) {
                        Nt(t, t.return, et);
                    }
                    wc && (wc = !1, nm(t));
                    break;
                case 4:
                    l = Fe, Fe = Jr(t.stateNode.containerInfo), ge(n, t), ye(t), Fe = l;
                    break;
                case 12:
                    ge(n, t), ye(t);
                    break;
                case 31:
                    ge(n, t), ye(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Zr(t, l)));
                    break;
                case 13:
                    ge(n, t), ye(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Xr = Se()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Zr(t, l)));
                    break;
                case 22:
                    o = t.memoizedState !== null;
                    var S = a !== null && a.memoizedState !== null,
                        R = On,
                        B = Ft;
                    if (On = R || o, Ft = B || S, ge(n, t), Ft = B, On = R, ye(t), l & 8192) t: for (n = t.stateNode, n._visibility = o ? n._visibility & -2 : n._visibility | 1, o && (a === null || S || On || Ft || xa(t)), a = null, n = t;;) {
                        if (n.tag === 5 || n.tag === 26) {
                            if (a === null) {
                                S = a = n;
                                try {
                                    if (s = S.stateNode, o) h = s.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                    else {
                                        y = S.stateNode;
                                        var P = S.memoizedProps.style,
                                            N = P != null && P.hasOwnProperty("display") ? P.display : null;
                                        y.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                                    }
                                } catch (et) {
                                    Nt(S, S.return, et);
                                }
                            }
                        } else if (n.tag === 6) {
                            if (a === null) {
                                S = n;
                                try {
                                    S.stateNode.nodeValue = o ? "" : S.memoizedProps;
                                } catch (et) {
                                    Nt(S, S.return, et);
                                }
                            }
                        } else if (n.tag === 18) {
                            if (a === null) {
                                S = n;
                                try {
                                    var M = S.stateNode;
                                    o ? $m(M, !0) : $m(S.stateNode, !1);
                                } catch (et) {
                                    Nt(S, S.return, et);
                                }
                            }
                        } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
                            n.child.return = n, n = n.child;
                            continue;
                        }
                        if (n === t) break t;
                        for (; n.sibling === null;) {
                            if (n.return === null || n.return === t) break t;
                            a === n && (a = null), n = n.return;
                        }
                        a === n && (a = null), n.sibling.return = n.return, n = n.sibling;
                    }
                    l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Zr(t, a))));
                    break;
                case 19:
                    ge(n, t), ye(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Zr(t, l)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    ge(n, t), ye(t);
            }
        }

        function ye(t) {
            var n = t.flags;
            if (n & 2) {
                try {
                    for (var a, l = t.return; l !== null;) {
                        if (kh(l)) {
                            a = l;
                            break;
                        }
                        l = l.return;
                    }
                    if (a == null) throw Error(c(160));
                    switch (a.tag) {
                        case 27:
                            var o = a.stateNode;
                            jr(t, Tc(t), o);
                            break;
                        case 5:
                            var s = a.stateNode;
                            a.flags & 32 && (Wa(s, ""), a.flags &= -33), jr(t, Tc(t), s);
                            break;
                        case 3:
                        case 4:
                            var h = a.stateNode.containerInfo;
                            Ac(t, Tc(t), h);
                            break;
                        default:
                            throw Error(c(161));
                    }
                } catch (y) {
                    Nt(t, t.return, y);
                }
                t.flags &= -3;
            }
            n & 4096 && (t.flags &= -4097);
        }

        function nm(t) {
            if (t.subtreeFlags & 1024)
                for (t = t.child; t !== null;) {
                    var n = t;
                    nm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), t = t.sibling;
                }
        }

        function Dn(t, n) {
            if (n.subtreeFlags & 8772)
                for (n = n.child; n !== null;) Fh(t, n.alternate, n), n = n.sibling;
        }

        function xa(t) {
            for (t = t.child; t !== null;) {
                var n = t;
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Kn(4, n, n.return), xa(n);
                        break;
                    case 1:
                        an(n, n.return);
                        var a = n.stateNode;
                        typeof a.componentWillUnmount == "function" && Vh(n, n.return, a), xa(n);
                        break;
                    case 27:
                        Rl(n.stateNode);
                    case 26:
                    case 5:
                        an(n, n.return), xa(n);
                        break;
                    case 22:
                        n.memoizedState === null && xa(n);
                        break;
                    case 30:
                        xa(n);
                        break;
                    default:
                        xa(n);
                }
                t = t.sibling;
            }
        }

        function zn(t, n, a) {
            for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
                var l = n.alternate,
                    o = t,
                    s = n,
                    h = s.flags;
                switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                        zn(o, s, a), _l(4, s);
                        break;
                    case 1:
                        if (zn(o, s, a), l = s, o = l.stateNode, typeof o.componentDidMount == "function") try {
                            o.componentDidMount();
                        } catch (R) {
                            Nt(l, l.return, R);
                        }
                        if (l = s, o = l.updateQueue, o !== null) {
                            var y = l.stateNode;
                            try {
                                var S = o.shared.hiddenCallbacks;
                                if (S !== null)
                                    for (o.shared.hiddenCallbacks = null, o = 0; o < S.length; o++) Ud(S[o], y);
                            } catch (R) {
                                Nt(l, l.return, R);
                            }
                        }
                        a && h & 64 && qh(s), El(s, s.return);
                        break;
                    case 27:
                        Ih(s);
                    case 26:
                    case 5:
                        zn(o, s, a), a && l === null && h & 4 && $h(s), El(s, s.return);
                        break;
                    case 12:
                        zn(o, s, a);
                        break;
                    case 31:
                        zn(o, s, a), a && h & 4 && Jh(o, s);
                        break;
                    case 13:
                        zn(o, s, a), a && h & 4 && tm(o, s);
                        break;
                    case 22:
                        s.memoizedState === null && zn(o, s, a), El(s, s.return);
                        break;
                    case 30:
                        break;
                    default:
                        zn(o, s, a);
                }
                n = n.sibling;
            }
        }

        function Oc(t, n) {
            var a = null;
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && ul(a));
        }

        function Cc(t, n) {
            t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && ul(t));
        }

        function Ke(t, n, a, l) {
            if (n.subtreeFlags & 10256)
                for (n = n.child; n !== null;) am(t, n, a, l), n = n.sibling;
        }

        function am(t, n, a, l) {
            var o = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    Ke(t, n, a, l), o & 2048 && _l(9, n);
                    break;
                case 1:
                    Ke(t, n, a, l);
                    break;
                case 3:
                    Ke(t, n, a, l), o & 2048 && (t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && ul(t)));
                    break;
                case 12:
                    if (o & 2048) {
                        Ke(t, n, a, l), t = n.stateNode;
                        try {
                            var s = n.memoizedProps,
                                h = s.id,
                                y = s.onPostCommit;
                            typeof y == "function" && y(h, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
                        } catch (S) {
                            Nt(n, n.return, S);
                        }
                    } else Ke(t, n, a, l);
                    break;
                case 31:
                    Ke(t, n, a, l);
                    break;
                case 13:
                    Ke(t, n, a, l);
                    break;
                case 23:
                    break;
                case 22:
                    s = n.stateNode, h = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? Ke(t, n, a, l) : Sl(t, n) : s._visibility & 2 ? Ke(t, n, a, l) : (s._visibility |= 2, yi(t, n, a, l, (n.subtreeFlags & 10256) !== 0 || !1)), o & 2048 && Oc(h, n);
                    break;
                case 24:
                    Ke(t, n, a, l), o & 2048 && Cc(n.alternate, n);
                    break;
                default:
                    Ke(t, n, a, l);
            }
        }

        function yi(t, n, a, l, o) {
            for (o = o && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null;) {
                var s = t,
                    h = n,
                    y = a,
                    S = l,
                    R = h.flags;
                switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                        yi(s, h, y, S, o), _l(8, h);
                        break;
                    case 23:
                        break;
                    case 22:
                        var B = h.stateNode;
                        h.memoizedState !== null ? B._visibility & 2 ? yi(s, h, y, S, o) : Sl(s, h) : (B._visibility |= 2, yi(s, h, y, S, o)), o && R & 2048 && Oc(h.alternate, h);
                        break;
                    case 24:
                        yi(s, h, y, S, o), o && R & 2048 && Cc(h.alternate, h);
                        break;
                    default:
                        yi(s, h, y, S, o);
                }
                n = n.sibling;
            }
        }

        function Sl(t, n) {
            if (n.subtreeFlags & 10256)
                for (n = n.child; n !== null;) {
                    var a = t,
                        l = n,
                        o = l.flags;
                    switch (l.tag) {
                        case 22:
                            Sl(a, l), o & 2048 && Oc(l.alternate, l);
                            break;
                        case 24:
                            Sl(a, l), o & 2048 && Cc(l.alternate, l);
                            break;
                        default:
                            Sl(a, l);
                    }
                    n = n.sibling;
                }
        }
        var Tl = 8192;

        function bi(t, n, a) {
            if (t.subtreeFlags & Tl)
                for (t = t.child; t !== null;) im(t, n, a), t = t.sibling;
        }

        function im(t, n, a) {
            switch (t.tag) {
                case 26:
                    bi(t, n, a), t.flags & Tl && t.memoizedState !== null && p1(a, Fe, t.memoizedState, t.memoizedProps);
                    break;
                case 5:
                    bi(t, n, a);
                    break;
                case 3:
                case 4:
                    var l = Fe;
                    Fe = Jr(t.stateNode.containerInfo), bi(t, n, a), Fe = l;
                    break;
                case 22:
                    t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Tl, Tl = 16777216, bi(t, n, a), Tl = l) : bi(t, n, a));
                    break;
                default:
                    bi(t, n, a);
            }
        }

        function lm(t) {
            var n = t.alternate;
            if (n !== null && (t = n.child, t !== null)) {
                n.child = null;
                do
                    n = t.sibling, t.sibling = null, t = n;
                while (t !== null);
            }
        }

        function Al(t) {
            var n = t.deletions;
            if ((t.flags & 16) !== 0) {
                if (n !== null)
                    for (var a = 0; a < n.length; a++) {
                        var l = n[a];
                        le = l, um(l, t);
                    }
                lm(t);
            }
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null;) rm(t), t = t.sibling;
        }

        function rm(t) {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    Al(t), t.flags & 2048 && Kn(9, t, t.return);
                    break;
                case 3:
                    Al(t);
                    break;
                case 12:
                    Al(t);
                    break;
                case 22:
                    var n = t.stateNode;
                    t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, Gr(t)) : Al(t);
                    break;
                default:
                    Al(t);
            }
        }

        function Gr(t) {
            var n = t.deletions;
            if ((t.flags & 16) !== 0) {
                if (n !== null)
                    for (var a = 0; a < n.length; a++) {
                        var l = n[a];
                        le = l, um(l, t);
                    }
                lm(t);
            }
            for (t = t.child; t !== null;) {
                switch (n = t, n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Kn(8, n, n.return), Gr(n);
                        break;
                    case 22:
                        a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, Gr(n));
                        break;
                    default:
                        Gr(n);
                }
                t = t.sibling;
            }
        }

        function um(t, n) {
            for (; le !== null;) {
                var a = le;
                switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Kn(8, a, n);
                        break;
                    case 23:
                    case 22:
                        if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                            var l = a.memoizedState.cachePool.pool;
                            l != null && l.refCount++;
                        }
                        break;
                    case 24:
                        ul(a.memoizedState.cache);
                }
                if (l = a.child, l !== null) l.return = a, le = l;
                else t: for (a = t; le !== null;) {
                    l = le;
                    var o = l.sibling,
                        s = l.return;
                    if (Kh(l), l === a) {
                        le = null;
                        break t;
                    }
                    if (o !== null) {
                        o.return = s, le = o;
                        break t;
                    }
                    le = s;
                }
            }
        }
        var Hy = {
                getCacheForType: function(t) {
                    var n = oe(kt),
                        a = n.data.get(t);
                    return a === void 0 && (a = t(), n.data.set(t, a)), a;
                },
                cacheSignal: function() {
                    return oe(kt).controller.signal;
                }
            },
            xy = typeof WeakMap == "function" ? WeakMap : Map,
            zt = 0,
            Lt = null,
            bt = null,
            Et = 0,
            Rt = 0,
            ze = null,
            Wn = !1,
            _i = !1,
            Dc = !1,
            Rn = 0,
            qt = 0,
            Jn = 0,
            La = 0,
            zc = 0,
            Re = 0,
            Ei = 0,
            wl = null,
            be = null,
            Rc = !1,
            Xr = 0,
            om = 0,
            Pr = 1 / 0,
            Yr = null,
            ta = null,
            ne = 0,
            ea = null,
            Si = null,
            Nn = 0,
            Nc = 0,
            Mc = null,
            cm = null,
            Ol = 0,
            Hc = null;

        function Pe() {
            return (zt & 2) !== 0 && Et !== 0 ? Et & -Et : j.T !== null ? Zc() : Df();
        }

        function sm() {
            if (Re === 0)
                if ((Et & 536870912) === 0 || Tt) {
                    var t = Fl;
                    Fl <<= 1, (Fl & 3932160) === 0 && (Fl = 262144), Re = t;
                } else Re = 536870912;
            return t = Ce.current, t !== null && (t.flags |= 32), Re;
        }

        function _e(t, n, a) {
            (t === Lt && (Rt === 2 || Rt === 9) || t.cancelPendingCommit !== null) && (Ti(t, 0), na(t, Et, Re, !1)), Jl(t, a), ((zt & 2) === 0 || t !== Lt) && (t === Lt && ((zt & 2) === 0 && (La |= a), qt === 4 && na(t, Et, Re, !1)), Mn(t));
        }

        function fm(t, n, a) {
            if ((zt & 6) !== 0) throw Error(c(327));
            var l = !a && (n & 127) === 0 && (n & t.expiredLanes) === 0 || $i(t, n),
                o = l ? By(t, n) : Lc(t, n, !0),
                s = l;
            do {
                if (o === 0) {
                    _i && !l && na(t, n, 0, !1);
                    break;
                } else {
                    if (a = t.current.alternate, s && !Ly(a)) {
                        o = Lc(t, n, !1), s = !1;
                        continue;
                    }
                    if (o === 2) {
                        if (s = n, t.errorRecoveryDisabledLanes & s) var h = 0;
                        else h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                        if (h !== 0) {
                            n = h;
                            t: {
                                var y = t;
                                o = wl;
                                var S = y.current.memoizedState.isDehydrated;
                                if (S && (Ti(y, h).flags |= 256), h = Lc(y, h, !1), h !== 2) {
                                    if (Dc && !S) {
                                        y.errorRecoveryDisabledLanes |= s, La |= s, o = 4;
                                        break t;
                                    }
                                    s = be, be = o, s !== null && (be === null ? be = s : be.push.apply(be, s));
                                }
                                o = h;
                            }
                            if (s = !1, o !== 2) continue;
                        }
                    }
                    if (o === 1) {
                        Ti(t, 0), na(t, n, 0, !0);
                        break;
                    }
                    t: {
                        switch (l = t, s = o, s) {
                            case 0:
                            case 1:
                                throw Error(c(345));
                            case 4:
                                if ((n & 4194048) !== n) break;
                            case 6:
                                na(l, n, Re, !Wn);
                                break t;
                            case 2:
                                be = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(c(329));
                        }
                        if ((n & 62914560) === n && (o = Xr + 300 - Se(), 10 < o)) {
                            if (na(l, n, Re, !Wn), Wl(l, 0, !0) !== 0) break t;
                            Nn = n, l.timeoutHandle = Ym(dm.bind(null, l, a, be, Yr, Rc, n, Re, La, Ei, Wn, s, "Throttled", -0, 0), o);
                            break t;
                        }
                        dm(l, a, be, Yr, Rc, n, Re, La, Ei, Wn, s, null, -0, 0);
                    }
                }
                break;
            } while (!0);
            Mn(t);
        }

        function dm(t, n, a, l, o, s, h, y, S, R, B, P, N, M) {
            if (t.timeoutHandle = -1, P = n.subtreeFlags, P & 8192 || (P & 16785408) === 16785408) {
                P = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: pn
                }, im(n, s, P);
                var et = (s & 62914560) === s ? Xr - Se() : (s & 4194048) === s ? om - Se() : 0;
                if (et = g1(P, et), et !== null) {
                    Nn = s, t.cancelPendingCommit = et(_m.bind(null, t, n, s, a, l, o, h, y, S, B, P, null, N, M)), na(t, s, h, !R);
                    return;
                }
            }
            _m(t, n, s, a, l, o, h, y, S);
        }

        function Ly(t) {
            for (var n = t;;) {
                var a = n.tag;
                if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
                    for (var l = 0; l < a.length; l++) {
                        var o = a[l],
                            s = o.getSnapshot;
                        o = o.value;
                        try {
                            if (!we(s(), o)) return !1;
                        } catch {
                            return !1;
                        }
                    }
                if (a = n.child, n.subtreeFlags & 16384 && a !== null) a.return = n, n = a;
                else {
                    if (n === t) break;
                    for (; n.sibling === null;) {
                        if (n.return === null || n.return === t) return !0;
                        n = n.return;
                    }
                    n.sibling.return = n.return, n = n.sibling;
                }
            }
            return !0;
        }

        function na(t, n, a, l) {
            n &= ~zc, n &= ~La, t.suspendedLanes |= n, t.pingedLanes &= ~n, l && (t.warmLanes |= n), l = t.expirationTimes;
            for (var o = n; 0 < o;) {
                var s = 31 - Ae(o),
                    h = 1 << s;
                l[s] = -1, o &= ~h;
            }
            a !== 0 && Af(t, a, n);
        }

        function qr() {
            return (zt & 6) === 0 ? (Cl(0, !1), !1) : !0;
        }

        function xc() {
            if (bt !== null) {
                if (Rt === 0) var t = bt.return;
                else t = bt, _n = Aa = null, Fo(t), hi = null, cl = 0, t = bt;
                for (; t !== null;) Yh(t.alternate, t), t = t.return;
                bt = null;
            }
        }

        function Ti(t, n) {
            var a = t.timeoutHandle;
            a !== -1 && (t.timeoutHandle = -1, Jy(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Nn = 0, xc(), Lt = t, bt = a = yn(t.current, null), Et = n, Rt = 0, ze = null, Wn = !1, _i = $i(t, n), Dc = !1, Ei = Re = zc = La = Jn = qt = 0, be = wl = null, Rc = !1, (n & 8) !== 0 && (n |= n & 32);
            var l = t.entangledLanes;
            if (l !== 0)
                for (t = t.entanglements, l &= n; 0 < l;) {
                    var o = 31 - Ae(l),
                        s = 1 << o;
                    n |= t[o], l &= ~s;
                }
            return Rn = n, fr(), a;
        }

        function hm(t, n) {
            dt = null, j.H = gl, n === di || n === br ? (n = Md(), Rt = 3) : n === jo ? (n = Md(), Rt = 4) : Rt = n === dc ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, ze = n, bt === null && (qt = 1, Hr(t, Be(n, t.current)));
        }

        function mm() {
            var t = Ce.current;
            return t === null ? !0 : (Et & 4194048) === Et ? Xe === null : (Et & 62914560) === Et || (Et & 536870912) !== 0 ? t === Xe : !1;
        }

        function vm() {
            var t = j.H;
            return j.H = gl, t === null ? gl : t;
        }

        function pm() {
            var t = j.A;
            return j.A = Hy, t;
        }

        function Vr() {
            qt = 4, Wn || (Et & 4194048) !== Et && Ce.current !== null || (_i = !0), (Jn & 134217727) === 0 && (La & 134217727) === 0 || Lt === null || na(Lt, Et, Re, !1);
        }

        function Lc(t, n, a) {
            var l = zt;
            zt |= 2;
            var o = vm(),
                s = pm();
            (Lt !== t || Et !== n) && (Yr = null, Ti(t, n)), n = !1;
            var h = qt;
            t: do
                    try {
                        if (Rt !== 0 && bt !== null) {
                            var y = bt,
                                S = ze;
                            switch (Rt) {
                                case 8:
                                    xc(), h = 6;
                                    break t;
                                case 3:
                                case 2:
                                case 9:
                                case 6:
                                    Ce.current === null && (n = !0);
                                    var R = Rt;
                                    if (Rt = 0, ze = null, Ai(t, y, S, R), a && _i) {
                                        h = 0;
                                        break t;
                                    }
                                    break;
                                default:
                                    R = Rt, Rt = 0, ze = null, Ai(t, y, S, R);
                            }
                        }
                        Uy(), h = qt;
                        break;
                    } catch (B) {
                        hm(t, B);
                    }
                while (!0);
            return n && t.shellSuspendCounter++, _n = Aa = null, zt = l, j.H = o, j.A = s, bt === null && (Lt = null, Et = 0, fr()), h;
        }

        function Uy() {
            for (; bt !== null;) gm(bt);
        }

        function By(t, n) {
            var a = zt;
            zt |= 2;
            var l = vm(),
                o = pm();
            Lt !== t || Et !== n ? (Yr = null, Pr = Se() + 500, Ti(t, n)) : _i = $i(t, n);
            t: do
                    try {
                        if (Rt !== 0 && bt !== null) {
                            n = bt;
                            var s = ze;
                            e: switch (Rt) {
                                case 1:
                                    Rt = 0, ze = null, Ai(t, n, s, 1);
                                    break;
                                case 2:
                                case 9:
                                    if (Rd(s)) {
                                        Rt = 0, ze = null, ym(n);
                                        break;
                                    }
                                    n = function() {
                                        Rt !== 2 && Rt !== 9 || Lt !== t || (Rt = 7), Mn(t);
                                    }, s.then(n, n);
                                    break t;
                                case 3:
                                    Rt = 7;
                                    break t;
                                case 4:
                                    Rt = 5;
                                    break t;
                                case 7:
                                    Rd(s) ? (Rt = 0, ze = null, ym(n)) : (Rt = 0, ze = null, Ai(t, n, s, 7));
                                    break;
                                case 5:
                                    var h = null;
                                    switch (bt.tag) {
                                        case 26:
                                            h = bt.memoizedState;
                                        case 5:
                                        case 27:
                                            var y = bt;
                                            if (h ? iv(h) : y.stateNode.complete) {
                                                Rt = 0, ze = null;
                                                var S = y.sibling;
                                                if (S !== null) bt = S;
                                                else {
                                                    var R = y.return;
                                                    R !== null ? (bt = R, $r(R)) : bt = null;
                                                }
                                                break e;
                                            }
                                    }
                                    Rt = 0, ze = null, Ai(t, n, s, 5);
                                    break;
                                case 6:
                                    Rt = 0, ze = null, Ai(t, n, s, 6);
                                    break;
                                case 8:
                                    xc(), qt = 6;
                                    break t;
                                default:
                                    throw Error(c(462));
                            }
                        }
                        jy();
                        break;
                    } catch (B) {
                        hm(t, B);
                    }
                while (!0);
            return _n = Aa = null, j.H = l, j.A = o, zt = a, bt !== null ? 0 : (Lt = null, Et = 0, fr(), qt);
        }

        function jy() {
            for (; bt !== null && !v0();) gm(bt);
        }

        function gm(t) {
            var n = Xh(t.alternate, t, Rn);
            t.memoizedProps = t.pendingProps, n === null ? $r(t) : bt = n;
        }

        function ym(t) {
            var n = t,
                a = n.alternate;
            switch (n.tag) {
                case 15:
                case 0:
                    n = Lh(a, n, n.pendingProps, n.type, void 0, Et);
                    break;
                case 11:
                    n = Lh(a, n, n.pendingProps, n.type.render, n.ref, Et);
                    break;
                case 5:
                    Fo(n);
                default:
                    Yh(a, n), n = bt = bd(n, Rn), n = Xh(a, n, Rn);
            }
            t.memoizedProps = t.pendingProps, n === null ? $r(t) : bt = n;
        }

        function Ai(t, n, a, l) {
            _n = Aa = null, Fo(n), hi = null, cl = 0;
            var o = n.return;
            try {
                if (Oy(t, o, n, a, Et)) {
                    qt = 1, Hr(t, Be(a, t.current)), bt = null;
                    return;
                }
            } catch (s) {
                if (o !== null) throw bt = o, s;
                qt = 1, Hr(t, Be(a, t.current)), bt = null;
                return;
            }
            n.flags & 32768 ? (Tt || l === 1 ? t = !0 : _i || (Et & 536870912) !== 0 ? t = !1 : (Wn = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ce.current, l !== null && l.tag === 13 && (l.flags |= 16384))), bm(n, t)) : $r(n);
        }

        function $r(t) {
            var n = t;
            do {
                if ((n.flags & 32768) !== 0) {
                    bm(n, Wn);
                    return;
                }
                t = n.return;
                var a = zy(n.alternate, n, Rn);
                if (a !== null) {
                    bt = a;
                    return;
                }
                if (n = n.sibling, n !== null) {
                    bt = n;
                    return;
                }
                bt = n = t;
            } while (n !== null);
            qt === 0 && (qt = 5);
        }

        function bm(t, n) {
            do {
                var a = Ry(t.alternate, t);
                if (a !== null) {
                    a.flags &= 32767, bt = a;
                    return;
                }
                if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (t = t.sibling, t !== null)) {
                    bt = t;
                    return;
                }
                bt = t = a;
            } while (t !== null);
            qt = 6, bt = null;
        }

        function _m(t, n, a, l, o, s, h, y, S) {
            t.cancelPendingCommit = null;
            do
                kr();
            while (ne !== 0);
            if ((zt & 6) !== 0) throw Error(c(327));
            if (n !== null) {
                if (n === t.current) throw Error(c(177));
                if (s = n.lanes | n.childLanes, s |= To, w0(t, a, s, h, y, S), t === Lt && (bt = Lt = null, Et = 0), Si = n, ea = t, Nn = a, Nc = s, Mc = o, cm = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Py(Il, function() {
                        return wm(), null;
                    })) : (t.callbackNode = null, t.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
                    l = j.T, j.T = null, o = V.p, V.p = 2, h = zt, zt |= 4;
                    try {
                        Ny(t, n, a);
                    } finally {
                        zt = h, V.p = o, j.T = l;
                    }
                }
                ne = 1, Em(), Sm(), Tm();
            }
        }

        function Em() {
            if (ne === 1) {
                ne = 0;
                var t = ea,
                    n = Si,
                    a = (n.flags & 13878) !== 0;
                if ((n.subtreeFlags & 13878) !== 0 || a) {
                    a = j.T, j.T = null;
                    var l = V.p;
                    V.p = 2;
                    var o = zt;
                    zt |= 4;
                    try {
                        em(n, t);
                        var s = $c,
                            h = sd(t.containerInfo),
                            y = s.focusedElem,
                            S = s.selectionRange;
                        if (h !== y && y && y.ownerDocument && cd(y.ownerDocument.documentElement, y)) {
                            if (S !== null && yo(y)) {
                                var R = S.start,
                                    B = S.end;
                                if (B === void 0 && (B = R), "selectionStart" in y) y.selectionStart = R, y.selectionEnd = Math.min(B, y.value.length);
                                else {
                                    var P = y.ownerDocument || document,
                                        N = P && P.defaultView || window;
                                    if (N.getSelection) {
                                        var M = N.getSelection(),
                                            et = y.textContent.length,
                                            ut = Math.min(S.start, et),
                                            xt = S.end === void 0 ? ut : Math.min(S.end, et);
                                        !M.extend && ut > xt && (h = xt, xt = ut, ut = h);
                                        var C = od(y, ut),
                                            A = od(y, xt);
                                        if (C && A && (M.rangeCount !== 1 || M.anchorNode !== C.node || M.anchorOffset !== C.offset || M.focusNode !== A.node || M.focusOffset !== A.offset)) {
                                            var z = P.createRange();
                                            z.setStart(C.node, C.offset), M.removeAllRanges(), ut > xt ? (M.addRange(z), M.extend(A.node, A.offset)) : (z.setEnd(A.node, A.offset), M.addRange(z));
                                        }
                                    }
                                }
                            }
                            for (P = [], M = y; M = M.parentNode;) M.nodeType === 1 && P.push({
                                element: M,
                                left: M.scrollLeft,
                                top: M.scrollTop
                            });
                            for (typeof y.focus == "function" && y.focus(), y = 0; y < P.length; y++) {
                                var Z = P[y];
                                Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
                            }
                        }
                        lu = !!Vc, $c = Vc = null;
                    } finally {
                        zt = o, V.p = l, j.T = a;
                    }
                }
                t.current = n, ne = 2;
            }
        }

        function Sm() {
            if (ne === 2) {
                ne = 0;
                var t = ea,
                    n = Si,
                    a = (n.flags & 8772) !== 0;
                if ((n.subtreeFlags & 8772) !== 0 || a) {
                    a = j.T, j.T = null;
                    var l = V.p;
                    V.p = 2;
                    var o = zt;
                    zt |= 4;
                    try {
                        Fh(t, n.alternate, n);
                    } finally {
                        zt = o, V.p = l, j.T = a;
                    }
                }
                ne = 3;
            }
        }

        function Tm() {
            if (ne === 4 || ne === 3) {
                ne = 0, p0();
                var t = ea,
                    n = Si,
                    a = Nn,
                    l = cm;
                (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ne = 5 : (ne = 0, Si = ea = null, Am(t, t.pendingLanes));
                var o = t.pendingLanes;
                if (o === 0 && (ta = null), Wu(a), n = n.stateNode, Te && typeof Te.onCommitFiberRoot == "function") try {
                    Te.onCommitFiberRoot(Vi, n, void 0, (n.current.flags & 128) === 128);
                } catch {}
                if (l !== null) {
                    n = j.T, o = V.p, V.p = 2, j.T = null;
                    try {
                        for (var s = t.onRecoverableError, h = 0; h < l.length; h++) {
                            var y = l[h];
                            s(y.value, {
                                componentStack: y.stack
                            });
                        }
                    } finally {
                        j.T = n, V.p = o;
                    }
                }
                (Nn & 3) !== 0 && kr(), Mn(t), o = t.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? t === Hc ? Ol++ : (Ol = 0, Hc = t) : Ol = 0, Cl(0, !1);
            }
        }

        function Am(t, n) {
            (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, ul(n)));
        }

        function kr() {
            return Em(), Sm(), Tm(), wm();
        }

        function wm() {
            if (ne !== 5) return !1;
            var t = ea,
                n = Nc;
            Nc = 0;
            var a = Wu(Nn),
                l = j.T,
                o = V.p;
            try {
                V.p = 32 > a ? 32 : a, j.T = null, a = Mc, Mc = null;
                var s = ea,
                    h = Nn;
                if (ne = 0, Si = ea = null, Nn = 0, (zt & 6) !== 0) throw Error(c(331));
                var y = zt;
                if (zt |= 4, rm(s.current), am(s, s.current, h, a), zt = y, Cl(0, !1), Te && typeof Te.onPostCommitFiberRoot == "function") try {
                    Te.onPostCommitFiberRoot(Vi, s);
                } catch {}
                return !0;
            } finally {
                V.p = o, j.T = l, Am(t, n);
            }
        }

        function Om(t, n, a) {
            n = Be(a, n), n = fc(t.stateNode, n, 2), t = Na(t, n, 2), t !== null && (Jl(t, 2), Mn(t));
        }

        function Nt(t, n, a) {
            if (t.tag === 3) Om(t, t, a);
            else
                for (; n !== null;) {
                    if (n.tag === 3) {
                        Om(n, t, a);
                        break;
                    } else if (n.tag === 1) {
                        var l = n.stateNode;
                        if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ta === null || !ta.has(l))) {
                            t = Be(a, t), a = Ch(2), l = Na(n, a, 2), l !== null && (Dh(a, l, n, t), Jl(l, 2), Mn(l));
                            break;
                        }
                    }
                    n = n.return;
                }
        }

        function Uc(t, n, a) {
            var l = t.pingCache;
            if (l === null) {
                l = t.pingCache = new xy();
                var o = /* @__PURE__ */ new Set();
                l.set(n, o);
            } else o = l.get(n), o === void 0 && (o = /* @__PURE__ */ new Set(), l.set(n, o));
            o.has(a) || (Dc = !0, o.add(a), t = Zy.bind(null, t, n, a), n.then(t, t));
        }

        function Zy(t, n, a) {
            var l = t.pingCache;
            l !== null && l.delete(n), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Lt === t && (Et & a) === a && (qt === 4 || qt === 3 && (Et & 62914560) === Et && 300 > Se() - Xr ? (zt & 2) === 0 && Ti(t, 0) : zc |= a, Ei === Et && (Ei = 0)), Mn(t);
        }

        function Cm(t, n) {
            n === 0 && (n = Tf()), t = Ea(t, n), t !== null && (Jl(t, n), Mn(t));
        }

        function Gy(t) {
            var n = t.memoizedState,
                a = 0;
            n !== null && (a = n.retryLane), Cm(t, a);
        }

        function Xy(t, n) {
            var a = 0;
            switch (t.tag) {
                case 31:
                case 13:
                    var l = t.stateNode,
                        o = t.memoizedState;
                    o !== null && (a = o.retryLane);
                    break;
                case 19:
                    l = t.stateNode;
                    break;
                case 22:
                    l = t.stateNode._retryCache;
                    break;
                default:
                    throw Error(c(314));
            }
            l !== null && l.delete(n), Cm(t, a);
        }

        function Py(t, n) {
            return Qu(t, n);
        }
        var Ir = null,
            wi = null,
            Bc = !1,
            Qr = !1,
            jc = !1,
            aa = 0;

        function Mn(t) {
            t !== wi && t.next === null && (wi === null ? Ir = wi = t : wi = wi.next = t), Qr = !0, Bc || (Bc = !0, qy());
        }

        function Cl(t, n) {
            if (!jc && Qr) {
                jc = !0;
                do
                    for (var a = !1, l = Ir; l !== null;) {
                        if (!n)
                            if (t !== 0) {
                                var o = l.pendingLanes;
                                if (o === 0) var s = 0;
                                else {
                                    var h = l.suspendedLanes,
                                        y = l.pingedLanes;
                                    s = (1 << 31 - Ae(42 | t) + 1) - 1, s &= o & ~(h & ~y), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
                                }
                                s !== 0 && (a = !0, Nm(l, s));
                            } else s = Et, s = Wl(l, l === Lt ? s : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (s & 3) === 0 || $i(l, s) || (a = !0, Nm(l, s));
                        l = l.next;
                    }
                while (a);
                jc = !1;
            }
        }

        function Yy() {
            Dm();
        }

        function Dm() {
            Qr = Bc = !1;
            var t = 0;
            aa !== 0 && Wy() && (t = aa);
            for (var n = Se(), a = null, l = Ir; l !== null;) {
                var o = l.next,
                    s = zm(l, n);
                s === 0 ? (l.next = null, a === null ? Ir = o : a.next = o, o === null && (wi = a)) : (a = l, (t !== 0 || (s & 3) !== 0) && (Qr = !0)), l = o;
            }
            ne !== 0 && ne !== 5 || Cl(t, !1), aa !== 0 && (aa = 0);
        }

        function zm(t, n) {
            for (var a = t.suspendedLanes, l = t.pingedLanes, o = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s;) {
                var h = 31 - Ae(s),
                    y = 1 << h,
                    S = o[h];
                S === -1 ? ((y & a) === 0 || (y & l) !== 0) && (o[h] = A0(y, n)) : S <= n && (t.expiredLanes |= y), s &= ~y;
            }
            if (n = Lt, a = Et, a = Wl(t, t === n ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, a === 0 || t === n && (Rt === 2 || Rt === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && Fu(l), t.callbackNode = null, t.callbackPriority = 0;
            if ((a & 3) === 0 || $i(t, a)) {
                if (n = a & -a, n === t.callbackPriority) return n;
                switch (l !== null && Fu(l), Wu(a)) {
                    case 2:
                    case 8:
                        a = Ef;
                        break;
                    case 32:
                        a = Il;
                        break;
                    case 268435456:
                        a = Sf;
                        break;
                    default:
                        a = Il;
                }
                return l = Rm.bind(null, t), a = Qu(a, l), t.callbackPriority = n, t.callbackNode = a, n;
            }
            return l !== null && l !== null && Fu(l), t.callbackPriority = 2, t.callbackNode = null, 2;
        }

        function Rm(t, n) {
            if (ne !== 0 && ne !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
            var a = t.callbackNode;
            if (kr() && t.callbackNode !== a) return null;
            var l = Et;
            return l = Wl(t, t === Lt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (fm(t, l, n), zm(t, Se()), t.callbackNode != null && t.callbackNode === a ? Rm.bind(null, t) : null);
        }

        function Nm(t, n) {
            if (kr()) return null;
            fm(t, n, !0);
        }

        function qy() {
            t1(function() {
                (zt & 6) !== 0 ? Qu(_f, Yy) : Dm();
            });
        }

        function Zc() {
            if (aa === 0) {
                var t = si;
                t === 0 && (t = Ql, Ql <<= 1, (Ql & 261888) === 0 && (Ql = 256)), aa = t;
            }
            return aa;
        }

        function Mm(t) {
            return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ar("" + t);
        }

        function Hm(t, n) {
            var a = n.ownerDocument.createElement("input");
            return a.name = n.name, a.value = n.value, t.id && a.setAttribute("form", t.id), n.parentNode.insertBefore(a, n), t = new FormData(t), a.parentNode.removeChild(a), t;
        }

        function Vy(t, n, a, l, o) {
            if (n === "submit" && a && a.stateNode === o) {
                var s = Mm((o[me] || null).action),
                    h = l.submitter;
                h && (n = (n = h[me] || null) ? Mm(n.formAction) : h.getAttribute("formAction"), n !== null && (s = n, h = null));
                var y = new ur("action", "action", null, l, o);
                t.push({
                    event: y,
                    listeners: [{
                        instance: null,
                        listener: function() {
                            if (l.defaultPrevented) {
                                if (aa !== 0) {
                                    var S = h ? Hm(o, h) : new FormData(o);
                                    lc(a, {
                                        pending: !0,
                                        data: S,
                                        method: o.method,
                                        action: s
                                    }, null, S);
                                }
                            } else typeof s == "function" && (y.preventDefault(), S = h ? Hm(o, h) : new FormData(o), lc(a, {
                                pending: !0,
                                data: S,
                                method: o.method,
                                action: s
                            }, s, S));
                        },
                        currentTarget: o
                    }]
                });
            }
        }
        for (var Gc = 0; Gc < So.length; Gc++) {
            var Xc = So[Gc];
            Qe(Xc.toLowerCase(), "on" + (Xc[0].toUpperCase() + Xc.slice(1)));
        }
        Qe(hd, "onAnimationEnd"), Qe(md, "onAnimationIteration"), Qe(vd, "onAnimationStart"), Qe("dblclick", "onDoubleClick"), Qe("focusin", "onFocus"), Qe("focusout", "onBlur"), Qe(ry, "onTransitionRun"), Qe(uy, "onTransitionStart"), Qe(oy, "onTransitionCancel"), Qe(pd, "onTransitionEnd"), Fa("onMouseEnter", ["mouseout", "mouseover"]), Fa("onMouseLeave", ["mouseout", "mouseover"]), Fa("onPointerEnter", ["pointerout", "pointerover"]), Fa("onPointerLeave", ["pointerout", "pointerover"]), ga("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ga("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ga("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), ga("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ga("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ga("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Dl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            $y = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));

        function xm(t, n) {
            n = (n & 4) !== 0;
            for (var a = 0; a < t.length; a++) {
                var l = t[a],
                    o = l.event;
                l = l.listeners;
                t: {
                    var s = void 0;
                    if (n)
                        for (var h = l.length - 1; 0 <= h; h--) {
                            var y = l[h],
                                S = y.instance,
                                R = y.currentTarget;
                            if (y = y.listener, S !== s && o.isPropagationStopped()) break t;
                            s = y, o.currentTarget = R;
                            try {
                                s(o);
                            } catch (B) {
                                sr(B);
                            }
                            o.currentTarget = null, s = S;
                        }
                    else
                        for (h = 0; h < l.length; h++) {
                            if (y = l[h], S = y.instance, R = y.currentTarget, y = y.listener, S !== s && o.isPropagationStopped()) break t;
                            s = y, o.currentTarget = R;
                            try {
                                s(o);
                            } catch (B) {
                                sr(B);
                            }
                            o.currentTarget = null, s = S;
                        }
                }
            }
        }

        function _t(t, n) {
            var a = n[Ju];
            a === void 0 && (a = n[Ju] = /* @__PURE__ */ new Set());
            var l = t + "__bubble";
            a.has(l) || (Um(n, t, 2, !1), a.add(l));
        }

        function Pc(t, n, a) {
            var l = 0;
            n && (l |= 4), Um(a, t, l, n);
        }
        var Fr = "_reactListening" + Math.random().toString(36).slice(2);

        function Lm(t) {
            if (!t[Fr]) {
                t[Fr] = !0, Nf.forEach(function(a) {
                    a !== "selectionchange" && ($y.has(a) || Pc(a, !1, t), Pc(a, !0, t));
                });
                var n = t.nodeType === 9 ? t : t.ownerDocument;
                n === null || n[Fr] || (n[Fr] = !0, Pc("selectionchange", !1, n));
            }
        }

        function Um(t, n, a, l) {
            switch (cv(n)) {
                case 2:
                    var o = S1;
                    break;
                case 8:
                    o = T1;
                    break;
                default:
                    o = as;
            }
            a = o.bind(null, n, a, t), o = void 0, !oo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (o = !0), l ? o !== void 0 ? t.addEventListener(n, a, {
                capture: !0,
                passive: o
            }) : t.addEventListener(n, a, !0) : o !== void 0 ? t.addEventListener(n, a, {
                passive: o
            }) : t.addEventListener(n, a, !1);
        }

        function Yc(t, n, a, l, o) {
            var s = l;
            if ((n & 1) === 0 && (n & 2) === 0 && l !== null) t: for (;;) {
                if (l === null) return;
                var h = l.tag;
                if (h === 3 || h === 4) {
                    var y = l.stateNode.containerInfo;
                    if (y === o) break;
                    if (h === 4)
                        for (h = l.return; h !== null;) {
                            var S = h.tag;
                            if ((S === 3 || S === 4) && h.stateNode.containerInfo === o) return;
                            h = h.return;
                        }
                    for (; y !== null;) {
                        if (h = ka(y), h === null) return;
                        if (S = h.tag, S === 5 || S === 6 || S === 26 || S === 27) {
                            l = s = h;
                            continue t;
                        }
                        y = y.parentNode;
                    }
                }
                l = l.return;
            }
            Yf(function() {
                var R = s,
                    B = ro(a),
                    P = [];
                t: {
                    var N = gd.get(t);
                    if (N !== void 0) {
                        var M = ur,
                            et = t;
                        switch (t) {
                            case "keypress":
                                if (lr(a) === 0) break t;
                            case "keydown":
                            case "keyup":
                                M = Y0;
                                break;
                            case "focusin":
                                et = "focus", M = ho;
                                break;
                            case "focusout":
                                et = "blur", M = ho;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                M = ho;
                                break;
                            case "click":
                                if (a.button === 2) break t;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                M = $f;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                M = U0;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                M = q0;
                                break;
                            case hd:
                            case md:
                            case vd:
                                M = B0;
                                break;
                            case pd:
                                M = V0;
                                break;
                            case "scroll":
                            case "scrollend":
                                M = L0;
                                break;
                            case "wheel":
                                M = $0;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                M = j0;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                M = If;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                M = k0;
                        }
                        var ut = (n & 4) !== 0,
                            xt = !ut && (t === "scroll" || t === "scrollend"),
                            C = ut ? N !== null ? N + "Capture" : null : N;
                        ut = [];
                        for (var A = R, z; A !== null;) {
                            var Z = A;
                            if (z = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || z === null || C === null || (Z = Fi(A, C), Z != null && ut.push(zl(A, Z, z))), xt) break;
                            A = A.return;
                        }
                        0 < ut.length && (N = new M(N, et, null, a, B), P.push({
                            event: N,
                            listeners: ut
                        }));
                    }
                }
                if ((n & 7) === 0) {
                    t: {
                        if (N = t === "mouseover" || t === "pointerover", M = t === "mouseout" || t === "pointerout", N && a !== lo && (et = a.relatedTarget || a.fromElement) && (ka(et) || et[ki])) break t;
                        if ((M || N) && (N = B.window === B ? B : (N = B.ownerDocument) ? N.defaultView || N.parentWindow : window, M ? (et = a.relatedTarget || a.toElement, M = R, et = et ? ka(et) : null, et !== null && (xt = d(et), ut = et.tag, et !== xt || ut !== 5 && ut !== 27 && ut !== 6) && (et = null)) : (M = null, et = R), M !== et)) {
                            if (ut = $f, Z = "onMouseLeave", C = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (ut = If, Z = "onPointerLeave", C = "onPointerEnter", A = "pointer"), xt = M == null ? N : Qi(M), z = et == null ? N : Qi(et), N = new ut(Z, A + "leave", M, a, B), N.target = xt, N.relatedTarget = z, Z = null, ka(B) === R && (ut = new ut(C, A + "enter", et, a, B), ut.target = z, ut.relatedTarget = xt, Z = ut), xt = Z, M && et) e: {
                                for (ut = ky, C = M, A = et, z = 0, Z = C; Z; Z = ut(Z)) z++;
                                Z = 0;
                                for (var rt = A; rt; rt = ut(rt)) Z++;
                                for (; 0 < z - Z;) C = ut(C),
                                z--;
                                for (; 0 < Z - z;) A = ut(A),
                                Z--;
                                for (; z--;) {
                                    if (C === A || A !== null && C === A.alternate) {
                                        ut = C;
                                        break e;
                                    }
                                    C = ut(C), A = ut(A);
                                }
                                ut = null;
                            }
                            else ut = null;
                            M !== null && Bm(P, N, M, ut, !1), et !== null && xt !== null && Bm(P, xt, et, ut, !0);
                        }
                    }
                    t: {
                        if (N = R ? Qi(R) : window, M = N.nodeName && N.nodeName.toLowerCase(), M === "select" || M === "input" && N.type === "file") var Ct = nd;
                        else if (td(N))
                            if (ad) Ct = ay;
                            else {
                                Ct = ey;
                                var at = ty;
                            }
                        else M = N.nodeName,
                        !M || M.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? R && io(R.elementType) && (Ct = nd) : Ct = ny;
                        if (Ct && (Ct = Ct(t, R))) {
                            ed(P, Ct, a, B);
                            break t;
                        }
                        at && at(t, N, R),
                        t === "focusout" && R && N.type === "number" && R.memoizedProps.value != null && ao(N, "number", N.value);
                    }
                    switch (at = R ? Qi(R) : window, t) {
                        case "focusin":
                            (td(at) || at.contentEditable === "true") && (ni = at, bo = R, il = null);
                            break;
                        case "focusout":
                            il = bo = ni = null;
                            break;
                        case "mousedown":
                            _o = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            _o = !1, fd(P, a, B);
                            break;
                        case "selectionchange":
                            if (ly) break;
                        case "keydown":
                        case "keyup":
                            fd(P, a, B);
                    }
                    var vt;
                    if (vo) t: {
                        switch (t) {
                            case "compositionstart":
                                var St = "onCompositionStart";
                                break t;
                            case "compositionend":
                                St = "onCompositionEnd";
                                break t;
                            case "compositionupdate":
                                St = "onCompositionUpdate";
                                break t;
                        }
                        St = void 0;
                    }
                    else ei ? Wf(t, a) && (St = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (St = "onCompositionStart");
                    St && (Qf && a.locale !== "ko" && (ei || St !== "onCompositionStart" ? St === "onCompositionEnd" && ei && (vt = qf()) : (Yn = B, co = "value" in Yn ? Yn.value : Yn.textContent, ei = !0)), at = Kr(R, St), 0 < at.length && (St = new kf(St, t, null, a, B), P.push({
                        event: St,
                        listeners: at
                    }), vt ? St.data = vt : (vt = Jf(a), vt !== null && (St.data = vt)))),
                    (vt = Q0 ? F0(t, a) : K0(t, a)) && (St = Kr(R, "onBeforeInput"), 0 < St.length && (at = new kf("onBeforeInput", "beforeinput", null, a, B), P.push({
                        event: at,
                        listeners: St
                    }), at.data = vt)),
                    Vy(P, t, R, a, B);
                }
                xm(P, n);
            });
        }

        function zl(t, n, a) {
            return {
                instance: t,
                listener: n,
                currentTarget: a
            };
        }

        function Kr(t, n) {
            for (var a = n + "Capture", l = []; t !== null;) {
                var o = t,
                    s = o.stateNode;
                if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = Fi(t, a), o != null && l.unshift(zl(t, o, s)), o = Fi(t, n), o != null && l.push(zl(t, o, s))), t.tag === 3) return l;
                t = t.return;
            }
            return [];
        }

        function ky(t) {
            if (t === null) return null;
            do
                t = t.return;
            while (t && t.tag !== 5 && t.tag !== 27);
            return t || null;
        }

        function Bm(t, n, a, l, o) {
            for (var s = n._reactName, h = []; a !== null && a !== l;) {
                var y = a,
                    S = y.alternate,
                    R = y.stateNode;
                if (y = y.tag, S !== null && S === l) break;
                y !== 5 && y !== 26 && y !== 27 || R === null || (S = R, o ? (R = Fi(a, s), R != null && h.unshift(zl(a, R, S))) : o || (R = Fi(a, s), R != null && h.push(zl(a, R, S)))), a = a.return;
            }
            h.length !== 0 && t.push({
                event: n,
                listeners: h
            });
        }
        var Iy = /\r\n?/g,
            Qy = /\u0000|\uFFFD/g;

        function jm(t) {
            return (typeof t == "string" ? t : "" + t).replace(Iy, `
`).replace(Qy, "");
        }

        function Zm(t, n) {
            return n = jm(n), jm(t) === n;
        }

        function Ht(t, n, a, l, o, s) {
            switch (a) {
                case "children":
                    typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Wa(t, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Wa(t, "" + l);
                    break;
                case "className":
                    er(t, "class", l);
                    break;
                case "tabIndex":
                    er(t, "tabindex", l);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    er(t, a, l);
                    break;
                case "style":
                    Xf(t, l, s);
                    break;
                case "data":
                    if (n !== "object") {
                        er(t, "data", l);
                        break;
                    }
                case "src":
                case "href":
                    if (l === "" && (n !== "a" || a !== "href")) {
                        t.removeAttribute(a);
                        break;
                    }
                    if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                        t.removeAttribute(a);
                        break;
                    }
                    l = ar("" + l), t.setAttribute(a, l);
                    break;
                case "action":
                case "formAction":
                    if (typeof l == "function") {
                        t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof s == "function" && (a === "formAction" ? (n !== "input" && Ht(t, n, "name", o.name, o, null), Ht(t, n, "formEncType", o.formEncType, o, null), Ht(t, n, "formMethod", o.formMethod, o, null), Ht(t, n, "formTarget", o.formTarget, o, null)) : (Ht(t, n, "encType", o.encType, o, null), Ht(t, n, "method", o.method, o, null), Ht(t, n, "target", o.target, o, null)));
                    if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                        t.removeAttribute(a);
                        break;
                    }
                    l = ar("" + l), t.setAttribute(a, l);
                    break;
                case "onClick":
                    l != null && (t.onclick = pn);
                    break;
                case "onScroll":
                    l != null && _t("scroll", t);
                    break;
                case "onScrollEnd":
                    l != null && _t("scrollend", t);
                    break;
                case "dangerouslySetInnerHTML":
                    if (l != null) {
                        if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
                        if (a = l.__html, a != null) {
                            if (o.children != null) throw Error(c(60));
                            t.innerHTML = a;
                        }
                    }
                    break;
                case "multiple":
                    t.multiple = l && typeof l != "function" && typeof l != "symbol";
                    break;
                case "muted":
                    t.muted = l && typeof l != "function" && typeof l != "symbol";
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                    break;
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                        t.removeAttribute("xlink:href");
                        break;
                    }
                    a = ar("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
                    break;
                case "capture":
                case "download":
                    l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
                    break;
                case "rowSpan":
                case "start":
                    l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
                    break;
                case "popover":
                    _t("beforetoggle", t), _t("toggle", t), tr(t, "popover", l);
                    break;
                case "xlinkActuate":
                    vn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                    break;
                case "xlinkArcrole":
                    vn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                    break;
                case "xlinkRole":
                    vn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
                    break;
                case "xlinkShow":
                    vn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
                    break;
                case "xlinkTitle":
                    vn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
                    break;
                case "xlinkType":
                    vn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
                    break;
                case "xmlBase":
                    vn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                    break;
                case "xmlLang":
                    vn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                    break;
                case "xmlSpace":
                    vn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                    break;
                case "is":
                    tr(t, "is", l);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = H0.get(a) || a, tr(t, a, l));
            }
        }

        function qc(t, n, a, l, o, s) {
            switch (a) {
                case "style":
                    Xf(t, l, s);
                    break;
                case "dangerouslySetInnerHTML":
                    if (l != null) {
                        if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
                        if (a = l.__html, a != null) {
                            if (o.children != null) throw Error(c(60));
                            t.innerHTML = a;
                        }
                    }
                    break;
                case "children":
                    typeof l == "string" ? Wa(t, l) : (typeof l == "number" || typeof l == "bigint") && Wa(t, "" + l);
                    break;
                case "onScroll":
                    l != null && _t("scroll", t);
                    break;
                case "onScrollEnd":
                    l != null && _t("scrollend", t);
                    break;
                case "onClick":
                    l != null && (t.onclick = pn);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!Mf.hasOwnProperty(a)) t: {
                        if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), n = a.slice(2, o ? a.length - 7 : void 0), s = t[me] || null, s = s != null ? s[a] : null, typeof s == "function" && t.removeEventListener(n, s, o), typeof l == "function")) {
                            typeof s != "function" && s !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(n, l, o);
                            break t;
                        }
                        a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : tr(t, a, l);
                    }
            }
        }

        function se(t, n, a) {
            switch (n) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    _t("error", t), _t("load", t);
                    var l = !1,
                        o = !1,
                        s;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var h = a[s];
                            if (h != null) switch (s) {
                                case "src":
                                    l = !0;
                                    break;
                                case "srcSet":
                                    o = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(c(137, n));
                                default:
                                    Ht(t, n, s, h, a, null);
                            }
                        }
                    o && Ht(t, n, "srcSet", a.srcSet, a, null), l && Ht(t, n, "src", a.src, a, null);
                    return;
                case "input":
                    _t("invalid", t);
                    var y = s = h = o = null,
                        S = null,
                        R = null;
                    for (l in a)
                        if (a.hasOwnProperty(l)) {
                            var B = a[l];
                            if (B != null) switch (l) {
                                case "name":
                                    o = B;
                                    break;
                                case "type":
                                    h = B;
                                    break;
                                case "checked":
                                    S = B;
                                    break;
                                case "defaultChecked":
                                    R = B;
                                    break;
                                case "value":
                                    s = B;
                                    break;
                                case "defaultValue":
                                    y = B;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (B != null) throw Error(c(137, n));
                                    break;
                                default:
                                    Ht(t, n, l, B, a, null);
                            }
                        }
                    Bf(t, s, y, S, R, h, o, !1);
                    return;
                case "select":
                    _t("invalid", t), l = h = s = null;
                    for (o in a)
                        if (a.hasOwnProperty(o) && (y = a[o], y != null)) switch (o) {
                            case "value":
                                s = y;
                                break;
                            case "defaultValue":
                                h = y;
                                break;
                            case "multiple":
                                l = y;
                            default:
                                Ht(t, n, o, y, a, null);
                        }
                    n = s, a = h, t.multiple = !!l, n != null ? Ka(t, !!l, n, !1) : a != null && Ka(t, !!l, a, !0);
                    return;
                case "textarea":
                    _t("invalid", t), s = o = l = null;
                    for (h in a)
                        if (a.hasOwnProperty(h) && (y = a[h], y != null)) switch (h) {
                            case "value":
                                l = y;
                                break;
                            case "defaultValue":
                                o = y;
                                break;
                            case "children":
                                s = y;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (y != null) throw Error(c(91));
                                break;
                            default:
                                Ht(t, n, h, y, a, null);
                        }
                    Zf(t, l, o, s);
                    return;
                case "option":
                    for (S in a) a.hasOwnProperty(S) && (l = a[S], l != null) && (S === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Ht(t, n, S, l, a, null));
                    return;
                case "dialog":
                    _t("beforetoggle", t), _t("toggle", t), _t("cancel", t), _t("close", t);
                    break;
                case "iframe":
                case "object":
                    _t("load", t);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Dl.length; l++) _t(Dl[l], t);
                    break;
                case "image":
                    _t("error", t), _t("load", t);
                    break;
                case "details":
                    _t("toggle", t);
                    break;
                case "embed":
                case "source":
                case "link":
                    _t("error", t), _t("load", t);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for (R in a)
                        if (a.hasOwnProperty(R) && (l = a[R], l != null)) switch (R) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(c(137, n));
                            default:
                                Ht(t, n, R, l, a, null);
                        }
                    return;
                default:
                    if (io(n)) {
                        for (B in a) a.hasOwnProperty(B) && (l = a[B], l !== void 0 && qc(t, n, B, l, a, void 0));
                        return;
                    }
            }
            for (y in a) a.hasOwnProperty(y) && (l = a[y], l != null && Ht(t, n, y, l, a, null));
        }

        function Fy(t, n, a, l) {
            switch (n) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "input":
                    var o = null,
                        s = null,
                        h = null,
                        y = null,
                        S = null,
                        R = null,
                        B = null;
                    for (M in a) {
                        var P = a[M];
                        if (a.hasOwnProperty(M) && P != null) switch (M) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                S = P;
                            default:
                                l.hasOwnProperty(M) || Ht(t, n, M, null, l, P);
                        }
                    }
                    for (var N in l) {
                        var M = l[N];
                        if (P = a[N], l.hasOwnProperty(N) && (M != null || P != null)) switch (N) {
                            case "type":
                                s = M;
                                break;
                            case "name":
                                o = M;
                                break;
                            case "checked":
                                R = M;
                                break;
                            case "defaultChecked":
                                B = M;
                                break;
                            case "value":
                                h = M;
                                break;
                            case "defaultValue":
                                y = M;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (M != null) throw Error(c(137, n));
                                break;
                            default:
                                M !== P && Ht(t, n, N, M, l, P);
                        }
                    }
                    no(t, h, y, S, R, B, s, o);
                    return;
                case "select":
                    M = h = y = N = null;
                    for (s in a)
                        if (S = a[s], a.hasOwnProperty(s) && S != null) switch (s) {
                            case "value":
                                break;
                            case "multiple":
                                M = S;
                            default:
                                l.hasOwnProperty(s) || Ht(t, n, s, null, l, S);
                        }
                    for (o in l)
                        if (s = l[o], S = a[o], l.hasOwnProperty(o) && (s != null || S != null)) switch (o) {
                            case "value":
                                N = s;
                                break;
                            case "defaultValue":
                                y = s;
                                break;
                            case "multiple":
                                h = s;
                            default:
                                s !== S && Ht(t, n, o, s, l, S);
                        }
                    n = y, a = h, l = M, N != null ? Ka(t, !!a, N, !1) : !!l != !!a && (n != null ? Ka(t, !!a, n, !0) : Ka(t, !!a, a ? [] : "", !1));
                    return;
                case "textarea":
                    M = N = null;
                    for (y in a)
                        if (o = a[y], a.hasOwnProperty(y) && o != null && !l.hasOwnProperty(y)) switch (y) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                Ht(t, n, y, null, l, o);
                        }
                    for (h in l)
                        if (o = l[h], s = a[h], l.hasOwnProperty(h) && (o != null || s != null)) switch (h) {
                            case "value":
                                N = o;
                                break;
                            case "defaultValue":
                                M = o;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (o != null) throw Error(c(91));
                                break;
                            default:
                                o !== s && Ht(t, n, h, o, l, s);
                        }
                    jf(t, N, M);
                    return;
                case "option":
                    for (var et in a) N = a[et], a.hasOwnProperty(et) && N != null && !l.hasOwnProperty(et) && (et === "selected" ? t.selected = !1 : Ht(t, n, et, null, l, N));
                    for (S in l) N = l[S], M = a[S], l.hasOwnProperty(S) && N !== M && (N != null || M != null) && (S === "selected" ? t.selected = N && typeof N != "function" && typeof N != "symbol" : Ht(t, n, S, N, l, M));
                    return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                    for (var ut in a) N = a[ut], a.hasOwnProperty(ut) && N != null && !l.hasOwnProperty(ut) && Ht(t, n, ut, null, l, N);
                    for (R in l)
                        if (N = l[R], M = a[R], l.hasOwnProperty(R) && N !== M && (N != null || M != null)) switch (R) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (N != null) throw Error(c(137, n));
                                break;
                            default:
                                Ht(t, n, R, N, l, M);
                        }
                    return;
                default:
                    if (io(n)) {
                        for (var xt in a) N = a[xt], a.hasOwnProperty(xt) && N !== void 0 && !l.hasOwnProperty(xt) && qc(t, n, xt, void 0, l, N);
                        for (B in l) N = l[B], M = a[B], !l.hasOwnProperty(B) || N === M || N === void 0 && M === void 0 || qc(t, n, B, N, l, M);
                        return;
                    }
            }
            for (var C in a) N = a[C], a.hasOwnProperty(C) && N != null && !l.hasOwnProperty(C) && Ht(t, n, C, null, l, N);
            for (P in l) N = l[P], M = a[P], !l.hasOwnProperty(P) || N === M || N == null && M == null || Ht(t, n, P, N, l, M);
        }

        function Gm(t) {
            switch (t) {
                case "css":
                case "script":
                case "font":
                case "img":
                case "image":
                case "input":
                case "link":
                    return !0;
                default:
                    return !1;
            }
        }

        function Ky() {
            if (typeof performance.getEntriesByType == "function") {
                for (var t = 0, n = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
                    var o = a[l],
                        s = o.transferSize,
                        h = o.initiatorType,
                        y = o.duration;
                    if (s && y && Gm(h)) {
                        for (h = 0, y = o.responseEnd, l += 1; l < a.length; l++) {
                            var S = a[l],
                                R = S.startTime;
                            if (R > y) break;
                            var B = S.transferSize,
                                P = S.initiatorType;
                            B && Gm(P) && (S = S.responseEnd, h += B * (S < y ? 1 : (y - R) / (S - R)));
                        }
                        if (--l, n += 8 * (s + h) / (o.duration / 1e3), t++, 10 < t) break;
                    }
                }
                if (0 < t) return n / t / 1e6;
            }
            return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
        }
        var Vc = null,
            $c = null;

        function Wr(t) {
            return t.nodeType === 9 ? t : t.ownerDocument;
        }

        function Xm(t) {
            switch (t) {
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }

        function Pm(t, n) {
            if (t === 0) switch (n) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
            return t === 1 && n === "foreignObject" ? 0 : t;
        }

        function kc(t, n) {
            return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
        }
        var Ic = null;

        function Wy() {
            var t = window.event;
            return t && t.type === "popstate" ? t === Ic ? !1 : (Ic = t, !0) : (Ic = null, !1);
        }
        var Ym = typeof setTimeout == "function" ? setTimeout : void 0,
            Jy = typeof clearTimeout == "function" ? clearTimeout : void 0,
            qm = typeof Promise == "function" ? Promise : void 0,
            t1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof qm < "u" ? function(t) {
                return qm.resolve(null).then(t).catch(e1);
            } : Ym;

        function e1(t) {
            setTimeout(function() {
                throw t;
            });
        }

        function ia(t) {
            return t === "head";
        }

        function Vm(t, n) {
            var a = n,
                l = 0;
            do {
                var o = a.nextSibling;
                if (t.removeChild(a), o && o.nodeType === 8)
                    if (a = o.data, a === "/$" || a === "/&") {
                        if (l === 0) {
                            t.removeChild(o), zi(n);
                            return;
                        }
                        l--;
                    } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++;
                else if (a === "html") Rl(t.ownerDocument.documentElement);
                else if (a === "head") {
                    a = t.ownerDocument.head, Rl(a);
                    for (var s = a.firstChild; s;) {
                        var h = s.nextSibling,
                            y = s.nodeName;
                        s[Ii] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && s.rel.toLowerCase() === "stylesheet" || a.removeChild(s), s = h;
                    }
                } else a === "body" && Rl(t.ownerDocument.body);
                a = o;
            } while (a);
            zi(n);
        }

        function $m(t, n) {
            var a = t;
            t = 0;
            do {
                var l = a.nextSibling;
                if (a.nodeType === 1 ? n ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (n ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
                    if (a = l.data, a === "/$") {
                        if (t === 0) break;
                        t--;
                    } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
                a = l;
            } while (a);
        }

        function Qc(t) {
            var n = t.firstChild;
            for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
                var a = n;
                switch (n = n.nextSibling, a.nodeName) {
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Qc(a), to(a);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (a.rel.toLowerCase() === "stylesheet") continue;
                }
                t.removeChild(a);
            }
        }

        function n1(t, n, a, l) {
            for (; t.nodeType === 1;) {
                var o = a;
                if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
                    if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
                } else if (l) {
                    if (!t[Ii]) switch (n) {
                        case "meta":
                            if (!t.hasAttribute("itemprop")) break;
                            return t;
                        case "link":
                            if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence")) break;
                            if (s !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title)) break;
                            return t;
                        case "style":
                            if (t.hasAttribute("data-precedence")) break;
                            return t;
                        case "script":
                            if (s = t.getAttribute("src"), (s !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                            return t;
                        default:
                            return t;
                    }
                } else if (n === "input" && t.type === "hidden") {
                    var s = o.name == null ? null : "" + o.name;
                    if (o.type === "hidden" && t.getAttribute("name") === s) return t;
                } else return t;
                if (t = Ye(t.nextSibling), t === null) break;
            }
            return null;
        }

        function a1(t, n, a) {
            if (n === "") return null;
            for (; t.nodeType !== 3;)
                if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Ye(t.nextSibling), t === null)) return null;
            return t;
        }

        function km(t, n) {
            for (; t.nodeType !== 8;)
                if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ye(t.nextSibling), t === null)) return null;
            return t;
        }

        function Fc(t) {
            return t.data === "$?" || t.data === "$~";
        }

        function Kc(t) {
            return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
        }

        function i1(t, n) {
            var a = t.ownerDocument;
            if (t.data === "$~") t._reactRetry = n;
            else if (t.data !== "$?" || a.readyState !== "loading") n();
            else {
                var l = function() {
                    n(), a.removeEventListener("DOMContentLoaded", l);
                };
                a.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
            }
        }

        function Ye(t) {
            for (; t != null; t = t.nextSibling) {
                var n = t.nodeType;
                if (n === 1 || n === 3) break;
                if (n === 8) {
                    if (n = t.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F") break;
                    if (n === "/$" || n === "/&") return null;
                }
            }
            return t;
        }
        var Wc = null;

        function Im(t) {
            t = t.nextSibling;
            for (var n = 0; t;) {
                if (t.nodeType === 8) {
                    var a = t.data;
                    if (a === "/$" || a === "/&") {
                        if (n === 0) return Ye(t.nextSibling);
                        n--;
                    } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || n++;
                }
                t = t.nextSibling;
            }
            return null;
        }

        function Qm(t) {
            t = t.previousSibling;
            for (var n = 0; t;) {
                if (t.nodeType === 8) {
                    var a = t.data;
                    if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                        if (n === 0) return t;
                        n--;
                    } else a !== "/$" && a !== "/&" || n++;
                }
                t = t.previousSibling;
            }
            return null;
        }

        function Fm(t, n, a) {
            switch (n = Wr(a), t) {
                case "html":
                    if (t = n.documentElement, !t) throw Error(c(452));
                    return t;
                case "head":
                    if (t = n.head, !t) throw Error(c(453));
                    return t;
                case "body":
                    if (t = n.body, !t) throw Error(c(454));
                    return t;
                default:
                    throw Error(c(451));
            }
        }

        function Rl(t) {
            for (var n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
            to(t);
        }
        var qe = /* @__PURE__ */ new Map(),
            Km = /* @__PURE__ */ new Set();

        function Jr(t) {
            return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
        }
        var Hn = V.d;
        V.d = {
            f: l1,
            r: r1,
            D: u1,
            C: o1,
            L: c1,
            m: s1,
            X: d1,
            S: f1,
            M: h1
        };

        function l1() {
            var t = Hn.f(),
                n = qr();
            return t || n;
        }

        function r1(t) {
            var n = Ia(t);
            n !== null && n.tag === 5 && n.type === "form" ? ph(n) : Hn.r(t);
        }
        var Oi = typeof document > "u" ? null : document;

        function Wm(t, n, a) {
            var l = Oi;
            if (l && typeof n == "string" && n) {
                var o = Le(n);
                o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), Km.has(o) || (Km.add(o), t = {
                    rel: t,
                    crossOrigin: a,
                    href: n
                }, l.querySelector(o) === null && (n = l.createElement("link"), se(n, "link", t), ie(n), l.head.appendChild(n)));
            }
        }

        function u1(t) {
            Hn.D(t), Wm("dns-prefetch", t, null);
        }

        function o1(t, n) {
            Hn.C(t, n), Wm("preconnect", t, n);
        }

        function c1(t, n, a) {
            Hn.L(t, n, a);
            var l = Oi;
            if (l && t && n) {
                var o = 'link[rel="preload"][as="' + Le(n) + '"]';
                n === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Le(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Le(a.imageSizes) + '"]')) : o += '[href="' + Le(t) + '"]';
                var s = o;
                switch (n) {
                    case "style":
                        s = Ci(t);
                        break;
                    case "script":
                        s = Di(t);
                }
                qe.has(s) || (t = _({
                    rel: "preload",
                    href: n === "image" && a && a.imageSrcSet ? void 0 : t,
                    as: n
                }, a), qe.set(s, t), l.querySelector(o) !== null || n === "style" && l.querySelector(Nl(s)) || n === "script" && l.querySelector(Ml(s)) || (n = l.createElement("link"), se(n, "link", t), ie(n), l.head.appendChild(n)));
            }
        }

        function s1(t, n) {
            Hn.m(t, n);
            var a = Oi;
            if (a && t) {
                var l = n && typeof n.as == "string" ? n.as : "script",
                    o = 'link[rel="modulepreload"][as="' + Le(l) + '"][href="' + Le(t) + '"]',
                    s = o;
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        s = Di(t);
                }
                if (!qe.has(s) && (t = _({
                        rel: "modulepreload",
                        href: t
                    }, n), qe.set(s, t), a.querySelector(o) === null)) {
                    switch (l) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (a.querySelector(Ml(s))) return;
                    }
                    l = a.createElement("link"), se(l, "link", t), ie(l), a.head.appendChild(l);
                }
            }
        }

        function f1(t, n, a) {
            Hn.S(t, n, a);
            var l = Oi;
            if (l && t) {
                var o = Qa(l).hoistableStyles,
                    s = Ci(t);
                n = n || "default";
                var h = o.get(s);
                if (!h) {
                    var y = {
                        loading: 0,
                        preload: null
                    };
                    if (h = l.querySelector(Nl(s))) y.loading = 5;
                    else {
                        t = _({
                            rel: "stylesheet",
                            href: t,
                            "data-precedence": n
                        }, a), (a = qe.get(s)) && Jc(t, a);
                        var S = h = l.createElement("link");
                        ie(S), se(S, "link", t), S._p = new Promise(function(R, B) {
                            S.onload = R, S.onerror = B;
                        }), S.addEventListener("load", function() {
                            y.loading |= 1;
                        }), S.addEventListener("error", function() {
                            y.loading |= 2;
                        }), y.loading |= 4, tu(h, n, l);
                    }
                    h = {
                        type: "stylesheet",
                        instance: h,
                        count: 1,
                        state: y
                    }, o.set(s, h);
                }
            }
        }

        function d1(t, n) {
            Hn.X(t, n);
            var a = Oi;
            if (a && t) {
                var l = Qa(a).hoistableScripts,
                    o = Di(t),
                    s = l.get(o);
                s || (s = a.querySelector(Ml(o)), s || (t = _({
                    src: t,
                    async: !0
                }, n), (n = qe.get(o)) && ts(t, n), s = a.createElement("script"), ie(s), se(s, "link", t), a.head.appendChild(s)), s = {
                    type: "script",
                    instance: s,
                    count: 1,
                    state: null
                }, l.set(o, s));
            }
        }

        function h1(t, n) {
            Hn.M(t, n);
            var a = Oi;
            if (a && t) {
                var l = Qa(a).hoistableScripts,
                    o = Di(t),
                    s = l.get(o);
                s || (s = a.querySelector(Ml(o)), s || (t = _({
                    src: t,
                    async: !0,
                    type: "module"
                }, n), (n = qe.get(o)) && ts(t, n), s = a.createElement("script"), ie(s), se(s, "link", t), a.head.appendChild(s)), s = {
                    type: "script",
                    instance: s,
                    count: 1,
                    state: null
                }, l.set(o, s));
            }
        }

        function Jm(t, n, a, l) {
            var o = (o = st.current) ? Jr(o) : null;
            if (!o) throw Error(c(446));
            switch (t) {
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Ci(a.href), a = Qa(o).hoistableStyles, l = a.get(n), l || (l = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, a.set(n, l)), l) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                        t = Ci(a.href);
                        var s = Qa(o).hoistableStyles,
                            h = s.get(t);
                        if (h || (o = o.ownerDocument || o, h = {
                                type: "stylesheet",
                                instance: null,
                                count: 0,
                                state: {
                                    loading: 0,
                                    preload: null
                                }
                            }, s.set(t, h), (s = o.querySelector(Nl(t))) && !s._p && (h.instance = s, h.state.loading = 5), qe.has(t) || (a = {
                                rel: "preload",
                                as: "style",
                                href: a.href,
                                crossOrigin: a.crossOrigin,
                                integrity: a.integrity,
                                media: a.media,
                                hrefLang: a.hrefLang,
                                referrerPolicy: a.referrerPolicy
                            }, qe.set(t, a), s || m1(o, t, a, h.state))), n && l === null) throw Error(c(528, ""));
                        return h;
                    }
                    if (n && l !== null) throw Error(c(529, ""));
                    return null;
                case "script":
                    return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Di(a), a = Qa(o).hoistableScripts, l = a.get(n), l || (l = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, a.set(n, l)), l) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(c(444, t));
            }
        }

        function Ci(t) {
            return 'href="' + Le(t) + '"';
        }

        function Nl(t) {
            return 'link[rel="stylesheet"][' + t + "]";
        }

        function tv(t) {
            return _({}, t, {
                "data-precedence": t.precedence,
                precedence: null
            });
        }

        function m1(t, n, a, l) {
            t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = t.createElement("link"), l.preload = n, n.addEventListener("load", function() {
                return l.loading |= 1;
            }), n.addEventListener("error", function() {
                return l.loading |= 2;
            }), se(n, "link", a), ie(n), t.head.appendChild(n));
        }

        function Di(t) {
            return '[src="' + Le(t) + '"]';
        }

        function Ml(t) {
            return "script[async]" + t;
        }

        function ev(t, n, a) {
            if (n.count++, n.instance === null) switch (n.type) {
                case "style":
                    var l = t.querySelector('style[data-href~="' + Le(a.href) + '"]');
                    if (l) return n.instance = l, ie(l), l;
                    var o = _({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null
                    });
                    return l = (t.ownerDocument || t).createElement("style"), ie(l), se(l, "style", o), tu(l, a.precedence, t), n.instance = l;
                case "stylesheet":
                    o = Ci(a.href);
                    var s = t.querySelector(Nl(o));
                    if (s) return n.state.loading |= 4, n.instance = s, ie(s), s;
                    l = tv(a), (o = qe.get(o)) && Jc(l, o), s = (t.ownerDocument || t).createElement("link"), ie(s);
                    var h = s;
                    return h._p = new Promise(function(y, S) {
                        h.onload = y, h.onerror = S;
                    }), se(s, "link", l), n.state.loading |= 4, tu(s, a.precedence, t), n.instance = s;
                case "script":
                    return s = Di(a.src), (o = t.querySelector(Ml(s))) ? (n.instance = o, ie(o), o) : (l = a, (o = qe.get(s)) && (l = _({}, a), ts(l, o)), t = t.ownerDocument || t, o = t.createElement("script"), ie(o), se(o, "link", l), t.head.appendChild(o), n.instance = o);
                case "void":
                    return null;
                default:
                    throw Error(c(443, n.type));
            }
            else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, tu(l, a.precedence, t));
            return n.instance;
        }

        function tu(t, n, a) {
            for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = l.length ? l[l.length - 1] : null, s = o, h = 0; h < l.length; h++) {
                var y = l[h];
                if (y.dataset.precedence === n) s = y;
                else if (s !== o) break;
            }
            s ? s.parentNode.insertBefore(t, s.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(t, n.firstChild));
        }

        function Jc(t, n) {
            t.crossOrigin ? ? = n.crossOrigin, t.referrerPolicy ? ? = n.referrerPolicy, t.title ? ? = n.title;
        }

        function ts(t, n) {
            t.crossOrigin ? ? = n.crossOrigin, t.referrerPolicy ? ? = n.referrerPolicy, t.integrity ? ? = n.integrity;
        }
        var eu = null;

        function nv(t, n, a) {
            if (eu === null) {
                var l = /* @__PURE__ */ new Map(),
                    o = eu = /* @__PURE__ */ new Map();
                o.set(a, l);
            } else o = eu, l = o.get(a), l || (l = /* @__PURE__ */ new Map(), o.set(a, l));
            if (l.has(t)) return l;
            for (l.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
                var s = a[o];
                if (!(s[Ii] || s[re] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var h = s.getAttribute(n) || "";
                    h = t + h;
                    var y = l.get(h);
                    y ? y.push(s) : l.set(h, [s]);
                }
            }
            return l;
        }

        function av(t, n, a) {
            t = t.ownerDocument || t, t.head.insertBefore(a, n === "title" ? t.querySelector("head > title") : null);
        }

        function v1(t, n, a) {
            if (a === 1 || n.itemProp != null) return !1;
            switch (t) {
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
                    return !0;
                case "link":
                    if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
                    return n.rel === "stylesheet" ? (t = n.disabled, typeof n.precedence == "string" && t == null) : !0;
                case "script":
                    if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0;
            }
            return !1;
        }

        function iv(t) {
            return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
        }

        function p1(t, n, a, l) {
            if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
                if (a.instance === null) {
                    var o = Ci(l.href),
                        s = n.querySelector(Nl(o));
                    if (s) {
                        n = s._p, n !== null && typeof n == "object" && typeof n.then == "function" && (t.count++, t = nu.bind(t), n.then(t, t)), a.state.loading |= 4, a.instance = s, ie(s);
                        return;
                    }
                    s = n.ownerDocument || n, l = tv(l), (o = qe.get(o)) && Jc(l, o), s = s.createElement("link"), ie(s);
                    var h = s;
                    h._p = new Promise(function(y, S) {
                        h.onload = y, h.onerror = S;
                    }), se(s, "link", l), a.instance = s;
                }
                t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, n), (n = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = nu.bind(t), n.addEventListener("load", a), n.addEventListener("error", a));
            }
        }
        var es = 0;

        function g1(t, n) {
            return t.stylesheets && t.count === 0 && iu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
                var l = setTimeout(function() {
                    if (t.stylesheets && iu(t, t.stylesheets), t.unsuspend) {
                        var s = t.unsuspend;
                        t.unsuspend = null, s();
                    }
                }, 6e4 + n);
                0 < t.imgBytes && es === 0 && (es = 62500 * Ky());
                var o = setTimeout(function() {
                    if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && iu(t, t.stylesheets), t.unsuspend)) {
                        var s = t.unsuspend;
                        t.unsuspend = null, s();
                    }
                }, (t.imgBytes > es ? 50 : 800) + n);
                return t.unsuspend = a,
                    function() {
                        t.unsuspend = null, clearTimeout(l), clearTimeout(o);
                    };
            } : null;
        }

        function nu() {
            if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets) iu(this, this.stylesheets);
                else if (this.unsuspend) {
                    var t = this.unsuspend;
                    this.unsuspend = null, t();
                }
            }
        }
        var au = null;

        function iu(t, n) {
            t.stylesheets = null, t.unsuspend !== null && (t.count++, au = /* @__PURE__ */ new Map(), n.forEach(y1, t), au = null, nu.call(t));
        }

        function y1(t, n) {
            if (!(n.state.loading & 4)) {
                var a = au.get(t);
                if (a) var l = a.get(null);
                else {
                    a = /* @__PURE__ */ new Map(), au.set(t, a);
                    for (var o = t.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < o.length; s++) {
                        var h = o[s];
                        (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (a.set(h.dataset.precedence, h), l = h);
                    }
                    l && a.set(null, l);
                }
                o = n.instance, h = o.getAttribute("data-precedence"), s = a.get(h) || l, s === l && a.set(null, o), a.set(h, o), this.count++, l = nu.bind(this), o.addEventListener("load", l), o.addEventListener("error", l), s ? s.parentNode.insertBefore(o, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), n.state.loading |= 4;
            }
        }
        var Hl = {
            $$typeof: L,
            Provider: null,
            Consumer: null,
            _currentValue: ot,
            _currentValue2: ot,
            _threadCount: 0
        };

        function b1(t, n, a, l, o, s, h, y, S) {
            this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ku(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ku(0), this.hiddenUpdates = Ku(null), this.identifierPrefix = l, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
        }

        function _1(t, n, a, l, o, s, h, y, S, R, B, P) {
            return t = new b1(t, n, a, h, S, R, B, P, y), n = 1, s === !0 && (n |= 24), s = Oe(3, null, null, n), t.current = s, s.stateNode = t, n = Lo(), n.refCount++, t.pooledCache = n, n.refCount++, s.memoizedState = {
                element: l,
                isDehydrated: a,
                cache: n
            }, Zo(s), t;
        }

        function E1(t) {
            return t ? (t = li, t) : li;
        }

        function lv(t, n, a, l, o, s) {
            o = E1(o), l.context === null ? l.context = o : l.pendingContext = o, l = Ra(n), l.payload = {
                element: a
            }, s = s === void 0 ? null : s, s !== null && (l.callback = s), a = Na(t, l, n), a !== null && (_e(a, t, n), fl(a, t, n));
        }

        function rv(t, n) {
            if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
                var a = t.retryLane;
                t.retryLane = a !== 0 && a < n ? a : n;
            }
        }

        function ns(t, n) {
            rv(t, n), (t = t.alternate) && rv(t, n);
        }

        function uv(t) {
            if (t.tag === 13 || t.tag === 31) {
                var n = Ea(t, 67108864);
                n !== null && _e(n, t, 67108864), ns(t, 67108864);
            }
        }

        function ov(t) {
            if (t.tag === 13 || t.tag === 31) {
                var n = Pe();
                n = Cf(n);
                var a = Ea(t, n);
                a !== null && _e(a, t, n), ns(t, n);
            }
        }
        var lu = !0;

        function S1(t, n, a, l) {
            var o = j.T;
            j.T = null;
            var s = V.p;
            try {
                V.p = 2, as(t, n, a, l);
            } finally {
                V.p = s, j.T = o;
            }
        }

        function T1(t, n, a, l) {
            var o = j.T;
            j.T = null;
            var s = V.p;
            try {
                V.p = 8, as(t, n, a, l);
            } finally {
                V.p = s, j.T = o;
            }
        }

        function as(t, n, a, l) {
            if (lu) {
                var o = is(l);
                if (o === null) Yc(t, n, l, ru, a), sv(t, l);
                else if (w1(o, t, n, a, l)) l.stopPropagation();
                else if (sv(t, l), n & 4 && -1 < A1.indexOf(t)) {
                    for (; o !== null;) {
                        var s = Ia(o);
                        if (s !== null) switch (s.tag) {
                            case 3:
                                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                                    var h = pa(s.pendingLanes);
                                    if (h !== 0) {
                                        var y = s;
                                        for (y.pendingLanes |= 2, y.entangledLanes |= 2; h;) {
                                            var S = 1 << 31 - Ae(h);
                                            y.entanglements[1] |= S, h &= ~S;
                                        }
                                        Mn(s), (zt & 6) === 0 && (Pr = Se() + 500, Cl(0, !1));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                y = Ea(s, 2), y !== null && _e(y, s, 2), qr(), ns(s, 2);
                        }
                        if (s = is(l), s === null && Yc(t, n, l, ru, a), s === o) break;
                        o = s;
                    }
                    o !== null && l.stopPropagation();
                } else Yc(t, n, l, null, a);
            }
        }

        function is(t) {
            return t = ro(t), ls(t);
        }
        var ru = null;

        function ls(t) {
            if (ru = null, t = ka(t), t !== null) {
                var n = d(t);
                if (n === null) t = null;
                else {
                    var a = n.tag;
                    if (a === 13) {
                        if (t = m(n), t !== null) return t;
                        t = null;
                    } else if (a === 31) {
                        if (t = p(n), t !== null) return t;
                        t = null;
                    } else if (a === 3) {
                        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
                        t = null;
                    } else n !== t && (t = null);
                }
            }
            return ru = t, null;
        }

        function cv(t) {
            switch (t) {
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch (g0()) {
                        case _f:
                            return 2;
                        case Ef:
                            return 8;
                        case Il:
                        case y0:
                            return 32;
                        case Sf:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var rs = !1,
            la = null,
            ra = null,
            ua = null,
            xl = /* @__PURE__ */ new Map(),
            Ll = /* @__PURE__ */ new Map(),
            oa = [],
            A1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

        function sv(t, n) {
            switch (t) {
                case "focusin":
                case "focusout":
                    la = null;
                    break;
                case "dragenter":
                case "dragleave":
                    ra = null;
                    break;
                case "mouseover":
                case "mouseout":
                    ua = null;
                    break;
                case "pointerover":
                case "pointerout":
                    xl.delete(n.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Ll.delete(n.pointerId);
            }
        }

        function Ul(t, n, a, l, o, s) {
            return t === null || t.nativeEvent !== s ? (t = {
                blockedOn: n,
                domEventName: a,
                eventSystemFlags: l,
                nativeEvent: s,
                targetContainers: [o]
            }, n !== null && (n = Ia(n), n !== null && uv(n)), t) : (t.eventSystemFlags |= l, n = t.targetContainers, o !== null && n.indexOf(o) === -1 && n.push(o), t);
        }

        function w1(t, n, a, l, o) {
            switch (n) {
                case "focusin":
                    return la = Ul(la, t, n, a, l, o), !0;
                case "dragenter":
                    return ra = Ul(ra, t, n, a, l, o), !0;
                case "mouseover":
                    return ua = Ul(ua, t, n, a, l, o), !0;
                case "pointerover":
                    var s = o.pointerId;
                    return xl.set(s, Ul(xl.get(s) || null, t, n, a, l, o)), !0;
                case "gotpointercapture":
                    return s = o.pointerId, Ll.set(s, Ul(Ll.get(s) || null, t, n, a, l, o)), !0;
            }
            return !1;
        }

        function fv(t) {
            var n = ka(t.target);
            if (n !== null) {
                var a = d(n);
                if (a !== null) {
                    if (n = a.tag, n === 13) {
                        if (n = m(a), n !== null) {
                            t.blockedOn = n, zf(t.priority, function() {
                                ov(a);
                            });
                            return;
                        }
                    } else if (n === 31) {
                        if (n = p(a), n !== null) {
                            t.blockedOn = n, zf(t.priority, function() {
                                ov(a);
                            });
                            return;
                        }
                    } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                        t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            t.blockedOn = null;
        }

        function uu(t) {
            if (t.blockedOn !== null) return !1;
            for (var n = t.targetContainers; 0 < n.length;) {
                var a = is(t.nativeEvent);
                if (a === null) {
                    a = t.nativeEvent;
                    var l = new a.constructor(a.type, a);
                    lo = l, a.target.dispatchEvent(l), lo = null;
                } else return n = Ia(a), n !== null && uv(n), t.blockedOn = a, !1;
                n.shift();
            }
            return !0;
        }

        function dv(t, n, a) {
            uu(t) && a.delete(n);
        }

        function O1() {
            rs = !1, la !== null && uu(la) && (la = null), ra !== null && uu(ra) && (ra = null), ua !== null && uu(ua) && (ua = null), xl.forEach(dv), Ll.forEach(dv);
        }

        function ou(t, n) {
            t.blockedOn === n && (t.blockedOn = null, rs || (rs = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, O1)));
        }
        var cu = null;

        function hv(t) {
            cu !== t && (cu = t, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
                cu === t && (cu = null);
                for (var n = 0; n < t.length; n += 3) {
                    var a = t[n],
                        l = t[n + 1],
                        o = t[n + 2];
                    if (typeof l != "function") {
                        if (ls(l || a) === null) continue;
                        break;
                    }
                    var s = Ia(a);
                    s !== null && (t.splice(n, 3), n -= 3, lc(s, {
                        pending: !0,
                        data: o,
                        method: a.method,
                        action: l
                    }, l, o));
                }
            }));
        }

        function zi(t) {
            function n(S) {
                return ou(S, t);
            }
            la !== null && ou(la, t), ra !== null && ou(ra, t), ua !== null && ou(ua, t), xl.forEach(n), Ll.forEach(n);
            for (var a = 0; a < oa.length; a++) {
                var l = oa[a];
                l.blockedOn === t && (l.blockedOn = null);
            }
            for (; 0 < oa.length && (a = oa[0], a.blockedOn === null);) fv(a), a.blockedOn === null && oa.shift();
            if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
                for (l = 0; l < a.length; l += 3) {
                    var o = a[l],
                        s = a[l + 1],
                        h = o[me] || null;
                    if (typeof s == "function") h || hv(a);
                    else if (h) {
                        var y = null;
                        if (s && s.hasAttribute("formAction")) {
                            if (o = s, h = s[me] || null) y = h.formAction;
                            else if (ls(o) !== null) continue;
                        } else y = h.action;
                        typeof y == "function" ? a[l + 1] = y : (a.splice(l, 3), l -= 3), hv(a);
                    }
                }
        }

        function C1() {
            function t(s) {
                s.canIntercept && s.info === "react-transition" && s.intercept({
                    handler: function() {
                        return new Promise(function(h) {
                            return o = h;
                        });
                    },
                    focusReset: "manual",
                    scroll: "manual"
                });
            }

            function n() {
                o !== null && (o(), o = null), l || setTimeout(a, 20);
            }

            function a() {
                if (!l && !navigation.transition) {
                    var s = navigation.currentEntry;
                    s && s.url != null && navigation.navigate(s.url, {
                        state: s.getState(),
                        info: "react-transition",
                        history: "replace"
                    });
                }
            }
            if (typeof navigation == "object") {
                var l = !1,
                    o = null;
                return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(a, 100),
                    function() {
                        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), o !== null && (o(), o = null);
                    };
            }
        }

        function us(t) {
            this._internalRoot = t;
        }
        os.prototype.render = us.prototype.render = function(t) {
            var n = this._internalRoot;
            if (n === null) throw Error(c(409));
            var a = n.current;
            lv(a, Pe(), t, n, null, null);
        }, os.prototype.unmount = us.prototype.unmount = function() {
            var t = this._internalRoot;
            if (t !== null) {
                this._internalRoot = null;
                var n = t.containerInfo;
                lv(t.current, 2, null, t, null, null), qr(), n[ki] = null;
            }
        };

        function os(t) {
            this._internalRoot = t;
        }
        os.prototype.unstable_scheduleHydration = function(t) {
            if (t) {
                var n = Df();
                t = {
                    blockedOn: null,
                    target: t,
                    priority: n
                };
                for (var a = 0; a < oa.length && n !== 0 && n < oa[a].priority; a++);
                oa.splice(a, 0, t), a === 0 && fv(t);
            }
        };
        var mv = r.version;
        if (mv !== "19.2.8") throw Error(c(527, mv, "19.2.8"));
        V.findDOMNode = function(t) {
            var n = t._reactInternals;
            if (n === void 0)
                throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
            return t = v(n), t = t !== null ? b(t) : null, t = t === null ? null : t.stateNode, t;
        };
        var D1 = {
            bundleType: 0,
            version: "19.2.8",
            rendererPackageName: "react-dom",
            currentDispatcherRef: j,
            reconcilerVersion: "19.2.8"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!su.isDisabled && su.supportsFiber) try {
                Vi = su.inject(D1), Te = su;
            } catch {}
        }
        e.createRoot = function(t, n) {
            if (!f(t)) throw Error(c(299));
            var a = !1,
                l = "",
                o = Ty,
                s = Ay,
                h = wy;
            return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), n = _1(t, 1, !1, null, null, a, l, null, o, s, h, C1), t[ki] = n.current, Lm(t), new us(n);
        };
    })),
    e3 = /* @__PURE__ */ He(((e, i) => {
        function r() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
                } catch (u) {
                    console.error(u);
                }
        }
        r(), i.exports = t3();
    })),
    n3 = e3();
async function a3(e) {
    if (e === "en-US") return {};
    try {
        const i = await fetch(`/_sites/dispatch-assets/sites-widget-locales/${encodeURIComponent(e)}.json`);
        if (!i.ok) return {};
        const r = await i.json();
        return r === null || typeof r != "object" || Array.isArray(r) ? {} : Object.fromEntries(Object.entries(r).filter(([u, c]) => u.startsWith("sites.dispatch.widget.") && Array.isArray(c)));
    } catch {
        return {};
    }
}

function i3({
    onMount: e
}) {
    return (0, E.useLayoutEffect)(e, [e]), null;
}

function l3(e, i) {
    const r = document.createElement("div");
    r.dataset.sitesWidget = e.kind, document.body.append(r);
    let u;
    const c = () => {
        u ? .unmount(), r.remove();
    };
    return {
        ready: (async () => {
            const f = T_(e.locale ? ? "") ? ? "en-US",
                d = r.attachShadow({
                    mode: "open"
                }),
                m = document.createElement("style");
            m.textContent = `
      :host {
        all: initial !important;
        display: block !important;
        inset: 0 !important;
        pointer-events: none !important;
        position: fixed !important;
        z-index: 2147483647 !important;
      }
    `;
            const p = document.createElement("style");
            p.textContent = "._Button_guvzm_1{--button-press-scale:.96;--button-size:32px;--button-icon-size:18px;all:initial;box-sizing:border-box;color:var(--button-text-color);cursor:pointer;font:inherit;height:var(--button-size);-webkit-user-select:none;user-select:none;white-space:nowrap;flex-shrink:0;padding:0 12px;display:inline-block;position:relative}._Button_guvzm_1:before,._Button_guvzm_1:after{border-radius:inherit;content:\"\";pointer-events:none;will-change:transform;transition:background-color .15s,box-shadow .15s,transform .15s;position:absolute;inset:0}._Button_guvzm_1:before{background:var(--button-background-color)}._Button_guvzm_1:focus{outline:0}._Button_guvzm_1:focus-visible:after{outline:2px solid var(--button-ring-color,currentColor);outline-offset:var(--button-ring-offset,2px)}._Button_guvzm_1[data-size=lg]{--button-size:36px}._Button_guvzm_1[data-icon-size=lg]{--button-icon-size:20px}._Button_guvzm_1[data-pill]{border-radius:9999px}._Button_guvzm_1[data-uniform]{width:var(--button-size);padding:0}._Button_guvzm_1[data-variant=solid][data-color=primary]{--button-background-color:#171717;--button-background-color-hover:#303030;--button-background-color-active:#444;--button-text-color:#fff}._Button_guvzm_1[data-variant=solid][data-color=secondary]{--button-background-color:#fff;--button-background-color-hover:#f7f7f7;--button-background-color-active:#ededed;--button-text-color:#171717}._Button_guvzm_1[data-variant=ghost]{--button-background-color:transparent;--button-background-color-hover:#f2f2f2;--button-background-color-active:#e8e8e8}._Button_guvzm_1:not(:disabled):hover:before{background:var(--button-background-color-hover)}._Button_guvzm_1:not(:disabled):active:before{background:var(--button-background-color-active);transform:scale(var(--button-press-scale))}._Button_guvzm_1:not(:disabled):active:after{transform:scale(var(--button-press-scale))}._Button_guvzm_1:disabled{cursor:default;opacity:.32}._Button_guvzm_1 svg:not([data-no-autosize]){height:var(--button-icon-size);width:var(--button-icon-size)}._ButtonInner_guvzm_107{align-items:center;gap:inherit;justify-content:center;width:100%;height:100%;display:flex;position:relative}@media (prefers-reduced-motion:reduce){._Button_guvzm_1:before,._Button_guvzm_1:after{transition:none}}._Image_1l1xj_1{opacity:0;transition:opacity .3s var(--transition-ease-basic,ease);display:block}._Image_1l1xj_1[data-loaded]{opacity:1}@media (prefers-reduced-motion:reduce){._Image_1l1xj_1{transition:none}}._Tooltip_1iulb_1{border-radius:var(--tooltip-border-radius);max-width:300px;animation-name:_scale-in_1iulb_1;animation-duration:.25s;animation-timing-function:var(--cubic-enter);background:var(--tooltip-background-color);box-shadow:var(--tooltip-box-shadow);color:var(--tooltip-text-color);font-size:var(--tooltip-font-size);font-weight:var(--tooltip-font-weight);line-height:var(--tooltip-line-height);transform-origin:var(--radix-tooltip-content-transform-origin);transition:background-color .15s}._Tooltip_1iulb_1[data-state=closed]{animation:_scale-out_1iulb_1 .25s var(--cubic-enter)}._Tooltip_1iulb_1{padding:var(--tooltip-padding-md)}@keyframes _scale-in_1iulb_1{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes _scale-out_1iulb_1{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.97)}}._TransitionGroupChild_1d6a5_1{display:block}._Layout_imkf6_1{flex-shrink:0;transition-property:height,width;display:block;position:relative}._Layout_imkf6_1[data-clip=true]{overflow:hidden}._Layout_imkf6_1[data-direction=in]{transition-delay:var(--tg-layout-enter-delay);transition-duration:var(--tg-layout-enter-duration);transition-timing-function:var(--tg-layout-enter-timing-function)}._Layout_imkf6_1[data-direction=out]{transition-delay:var(--tg-layout-exit-delay);transition-duration:var(--tg-layout-exit-duration);transition-timing-function:var(--tg-layout-exit-timing-function)}._Layout_imkf6_1[data-direction=move]{transition-delay:var(--tg-layout-move-delay);transition-duration:var(--tg-layout-move-duration);transition-timing-function:var(--tg-layout-move-timing-function)}._Layout_imkf6_1[data-interrupted=true]{transition-delay:0s}._TransitionItem_imkf6_34{will-change:var(--tg-will-change,auto);flex-shrink:0}._TransitionItem_imkf6_34[data-entering],._TransitionItem_imkf6_34[data-exiting]{width:100%;position:absolute;top:0;left:0}._Layout_imkf6_1[data-dimension=width]>._TransitionItem_imkf6_34[data-entering],._Layout_imkf6_1[data-dimension=width]>._TransitionItem_imkf6_34[data-exiting]{width:auto}._Layout_imkf6_1[data-item-anchor=end]>._TransitionItem_imkf6_34[data-entering],._Layout_imkf6_1[data-item-anchor=end]>._TransitionItem_imkf6_34[data-exiting]{bottom:0;top:initial}._Layout_imkf6_1[data-item-anchor=end][data-dimension=width]>._TransitionItem_imkf6_34[data-entering],._Layout_imkf6_1[data-item-anchor=end][data-dimension=width]>._TransitionItem_imkf6_34[data-exiting]{left:initial;right:0}._TransitionItem_imkf6_34[data-entering]{filter:var(--tg-initial-filter);opacity:var(--tg-initial-opacity);transform:var(--tg-initial-transform)}._TransitionItem_imkf6_34[data-exiting]{filter:var(--tg-enter-filter);opacity:var(--tg-enter-opacity);transform:var(--tg-enter-transform)}._TransitionItem_imkf6_34[data-entering-active],._TransitionItem_imkf6_34[data-entering][data-interrupted]{filter:var(--tg-enter-filter);opacity:var(--tg-enter-opacity);transform:var(--tg-enter-transform);transition:opacity var(--tg-enter-duration) var(--tg-enter-timing-function) var(--tg-enter-delay), transform var(--tg-enter-duration) var(--tg-enter-timing-function) var(--tg-enter-delay), filter var(--tg-enter-duration) var(--tg-enter-timing-function) var(--tg-enter-delay)}._TransitionItem_imkf6_34[data-exiting-active],._TransitionItem_imkf6_34[data-exiting][data-interrupted]{filter:var(--tg-exit-filter);opacity:var(--tg-exit-opacity);transform:var(--tg-exit-transform);transition:opacity var(--tg-exit-duration) var(--tg-exit-timing-function) var(--tg-exit-delay), transform var(--tg-exit-duration) var(--tg-exit-timing-function) var(--tg-exit-delay), filter var(--tg-exit-duration) var(--tg-exit-timing-function) var(--tg-exit-delay)}._Theme_1s223_2{--cubic-enter:cubic-bezier(.19, 1, .22, 1);--cubic-exit:cubic-bezier(.8, 0, .4, 1);--tooltip-border-radius:9999px;--tooltip-background-color:#1d1d1d;--tooltip-text-color:#fff;--tooltip-box-shadow:0 4px 12px #0000001f;--tooltip-font-size:14px;--tooltip-font-weight:500;--tooltip-line-height:20px;--tooltip-padding-md:5px 12px;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}._Portal_1s223_18{pointer-events:none;z-index:2147483647;position:relative}._Tooltip_1s223_24{box-sizing:border-box;cursor:default;letter-spacing:0;pointer-events:auto;text-align:center;border:1px solid #ffffff1f}._HideHint_1s223_33{--tooltip-border-radius:14px;--tooltip-padding-md:10px 12px;pointer-events:auto;text-align:left;border:0;width:280px}._HideHintContent_1s223_43{align-items:center;gap:12px;display:flex}._HideHintText_1s223_49{flex:1;min-width:0}._Shortcut_1s223_54{flex-shrink:0;gap:4px;display:inline-flex}._Shortcut_1s223_54 kbd{box-sizing:border-box;font:inherit;background:#ffffff17;border:1px solid #ffffff24;border-radius:5px;justify-content:center;align-items:center;min-width:22px;height:22px;padding:0 4px;font-size:12px;display:inline-flex;box-shadow:0 1px 1px #ffffff1f}@media (prefers-reduced-motion:reduce){._Portal_1s223_18 ._Tooltip_1s223_24[data-state]{animation:none}}._Widget_13oam_1,._Widget_13oam_1 *,._Widget_13oam_1 :before,._Widget_13oam_1 :after{box-sizing:border-box}._Widget_13oam_1{--button-ring-color:#171717;--button-ring-offset:3px;--widget-surface:#ffffffc7;--widget-surface-highlight:#ffffffc7;--widget-text:#171717;--widget-text-secondary:#444;--widget-text-tertiary:#8f8f8f;--widget-placeholder:#777;--widget-border:#0d0d0d1f;--widget-border-highlight:#0d0d0d2e;--widget-control-hover:#0d0d0d0f;--widget-control-active:#0d0d0d1a;--widget-shadow:#00000024;all:initial;box-sizing:border-box;color:var(--widget-text);--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;pointer-events:auto;z-index:2147483647;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;position:fixed}@media (prefers-color-scheme:dark){._Widget_13oam_1{--lightningcss-light: ;--lightningcss-dark:initial}}._Widget_13oam_1{pointer-events:none;bottom:auto;right:auto}._Widget_13oam_1[data-snapping]{transition:left var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1), top var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1)}._LandingShadow_13oam_46{box-sizing:border-box;pointer-events:none;z-index:2147483646;background:#64748b29;border-radius:18px;position:fixed;box-shadow:0 4px 20px #00000014}._WidgetEntrance_13oam_56[data-entering]{opacity:0;transform:translateY(4px)}._WidgetEntrance_13oam_56[data-entering-active]{opacity:1;transition:opacity .18s cubic-bezier(.19,1,.22,1),transform .18s cubic-bezier(.19,1,.22,1);transform:translateY(0)}._WidgetExit_13oam_69[data-exiting]{opacity:0}._WidgetExit_13oam_69{contain:paint;pointer-events:none;z-index:2147483647;position:fixed;inset:0}._Widget_13oam_1[data-tucked] ._Shell_13oam_82{width:64px;height:64px;transform:translate(var(--tuck-x), var(--tuck-y));border-radius:32px}._Widget_13oam_1[data-peek-phase=expanded] ._Shell_13oam_82{width:88px;height:88px;transform:translate(calc(var(--tuck-x) - 12px), calc(var(--tuck-y) - 12px));--widget-morph-easing:cubic-bezier(.2, 1.4, .4, 1);border-radius:32px}._Widget_13oam_1[data-quiet-tuck] ._Shell_13oam_82{--widget-morph-duration:.22s;--widget-morph-easing:ease}._Widget_13oam_1[data-peek-phase=away] ._Shell_13oam_82{transform:translate(calc(var(--tuck-x) + var(--corner-x-direction) * 80px), calc(var(--tuck-y) + var(--corner-y-direction) * 80px));--widget-morph-duration:.36s;--widget-morph-easing:cubic-bezier(.55, 0, .85, .4)}._ShellControls_13oam_114{width:max-content;transition:opacity .12s .14s}._Widget_13oam_1[data-tucked] ._ShellControls_13oam_114{opacity:0;transition:opacity .1s}._Launcher_13oam_124{cursor:pointer;font:inherit;color:var(--widget-text);white-space:nowrap;-webkit-user-select:none;user-select:none;z-index:1;background:0 0;border:0;justify-content:center;align-items:center;gap:12px;min-width:137px;height:36px;padding:0 40px;font-size:13px;font-weight:400;display:inline-flex}._LauncherRow_13oam_147{position:relative}._LauncherLabel_13oam_151{line-height:20px;display:inline-block}._Widget_13oam_1[data-dragging] ._Launcher_13oam_124{cursor:grabbing}._CornerTarget_13oam_161{cursor:pointer;pointer-events:auto;touch-action:none;z-index:2147483647;background:0 0;border:0;width:44px;height:44px;padding:0;position:fixed}._CornerTarget_13oam_161:hover,._CornerTarget_13oam_161:focus-visible{width:52px;height:52px}._CornerTarget_13oam_161:focus-visible{outline:2px solid var(--button-ring-color);outline-offset:-3px}._Widget_13oam_1[data-corner=top-left] ._CornerTarget_13oam_161{border-radius:0 0 32px;top:0;left:0}._Widget_13oam_1[data-corner=top-right] ._CornerTarget_13oam_161{border-radius:0 0 0 32px;top:0;right:0}._Widget_13oam_1[data-corner=bottom-left] ._CornerTarget_13oam_161{border-radius:0 32px 0 0;bottom:0;left:0}._Widget_13oam_1[data-corner=bottom-right] ._CornerTarget_13oam_161{border-radius:32px 0 0;bottom:0;right:0}._Panel_13oam_191 ._LogoButton_13oam_191[data-variant][data-color]{--button-background-color-hover:var(--widget-control-hover);--button-background-color-active:var(--widget-control-active);--button-text-color:var(--widget-text);--button-size:28px;z-index:2;position:absolute;top:4px;left:4px}._LogoButton_13oam_191:focus-visible:before{background:var(--button-background-color-hover)}._Shell_13oam_82{--widget-morph-duration:.42s;--widget-morph-easing:cubic-bezier(.4, 0, .2, 1);pointer-events:auto;width:var(--widget-surface-width,137px);height:var(--widget-surface-height,36px);transition:transform var(--widget-morph-duration) var(--widget-morph-easing), width var(--widget-morph-duration) var(--widget-morph-easing), height var(--widget-morph-duration) var(--widget-morph-easing), border-radius var(--widget-morph-duration) var(--widget-morph-easing), opacity .15s ease;border-radius:18px;position:relative;transform:translate(0)}._Panel_13oam_191[data-expanded] ._Shell_13oam_82{transition:none}._Widget_13oam_1:not([data-tucked]) ._Shell_13oam_82:has(._ShellContent_13oam_231[data-entering],._ShellContent_13oam_231[data-exiting]){transition-property:transform,border-radius,opacity}._ShellLayout_13oam_235{border-radius:inherit;width:max-content;min-height:36px;transition-property:width}._ShellContent_13oam_231{z-index:1;min-height:36px;position:relative}._Widget_13oam_1[data-corner^=top] ._ShellContent_13oam_231:is([data-entering],[data-exiting]){top:0;bottom:auto}._Widget_13oam_1[data-corner^=bottom] ._ShellContent_13oam_231:is([data-entering],[data-exiting]){top:auto;bottom:0}._ShellContent_13oam_231[data-exiting],._ShellContent_13oam_231[data-exiting] *{pointer-events:none}._Shell_13oam_82:before{-webkit-backdrop-filter:blur(18px)saturate(1.25);backdrop-filter:blur(18px)saturate(1.25);background:var(--widget-surface);border-radius:inherit;box-shadow:0 0 0 1px var(--widget-border), 0 10px 30px var(--widget-shadow), 0 2px 6px #00000014;content:\"\";pointer-events:none;will-change:transform;transition:background-color .15s,box-shadow .15s,transform .15s;position:absolute;inset:0}._Shell_13oam_82:hover:before,._Shell_13oam_82:focus-within:before{background:var(--widget-surface-highlight)}._Shell_13oam_82:after{border-radius:inherit;content:\"\";pointer-events:none;transition:transform .15s;position:absolute;inset:0}._Panel_13oam_191:not([data-expanded]) ._Shell_13oam_82:has(._Launcher_13oam_124:focus-visible):after{outline:2px solid var(--button-ring-color);outline-offset:var(--button-ring-offset)}._Shell_13oam_82:has(._Launcher_13oam_124:active):before{transform:scale(.98)}._Shell_13oam_82:has(._Launcher_13oam_124:active):after{transform:scale(.98)}._LauncherLogo_13oam_308{flex:none;width:18px;height:18px;display:block}._LauncherLogo_13oam_308[data-entering] img[data-loaded]{transform-origin:50%;animation:.7s cubic-bezier(.22,1,.36,1) both _blossomEntrance_13oam_1}@keyframes _blossomEntrance_13oam_1{0%{transform:rotate(-60deg)scale(.9)}to{transform:rotate(0)scale(1)}}._Panel_13oam_191{--widget-panel-width:min(360px, calc(100vw - 48px));width:var(--widget-panel-width);flex-direction:column;align-items:flex-start;display:flex;position:relative}._Panel_13oam_191:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){align-items:flex-end}._Composer_13oam_340{min-height:36px;width:var(--widget-panel-width);background:0 0;grid-template-columns:minmax(0,1fr) 24px;align-items:end;gap:8px;padding:6px;display:grid;overflow:hidden}._Textarea_13oam_352{all:initial;box-sizing:border-box;color:var(--widget-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;resize:none;align-self:center;width:calc(100% - 12px);height:24px;min-height:24px;max-height:180px;margin-left:12px;padding:3px 0;font-family:inherit;font-size:14px;font-weight:400;line-height:18px;transition:none;display:block;overflow-y:auto}._Textarea_13oam_352::placeholder{color:var(--widget-placeholder);opacity:1}._Textarea_13oam_352:placeholder-shown{white-space:pre;overflow-x:hidden}._Textarea_13oam_352:focus{outline:0}._ComposerFooter_13oam_390{justify-content:flex-end;display:flex}._Panel_13oam_191 ._SendButton_13oam_395[data-variant][data-color]{--button-size:24px;--button-icon-size:16px;align-self:end}._Launcher_13oam_124:focus{outline:0}._Panel_13oam_191 ._LauncherDismissButton_13oam_406[data-variant][data-color]{--button-background-color-hover:var(--widget-control-hover);--button-background-color-active:var(--widget-control-active);--button-text-color:var(--widget-text-tertiary);--button-size:28px;--button-icon-size:16px;opacity:0;pointer-events:none;z-index:2;transition:opacity 80ms;position:absolute;bottom:4px;right:4px}._LauncherDismissButton_13oam_406:focus-visible:before{background:var(--button-background-color-hover)}._Panel_13oam_191:not([data-expanded]) ._LauncherDismissButton_13oam_406[data-variant][data-color]{opacity:1;pointer-events:auto}._Panel_13oam_191:not([data-expanded]) ._Shell_13oam_82:has(._ShellContent_13oam_231[data-entering]) ._LauncherDismissButton_13oam_406[data-variant][data-color]{opacity:0;pointer-events:none}@media (prefers-reduced-motion:reduce){._WidgetEntrance_13oam_56[data-entering]{opacity:1;transition:none;transform:none}._Widget_13oam_1[data-snapping],._LauncherLogo_13oam_308[data-entering] img[data-loaded],._Widget_13oam_1[data-tucked] ._Shell_13oam_82,._Widget_13oam_1[data-peek-phase] ._Shell_13oam_82,._Widget_13oam_1[data-quiet-tuck] ._Shell_13oam_82,._ShellControls_13oam_114,._Widget_13oam_1[data-tucked] ._ShellControls_13oam_114,._Composer_13oam_340,._Launcher_13oam_124,._Launcher_13oam_124:before,._Shell_13oam_82,._ShellLayout_13oam_235,._Shell_13oam_82:before,._Shell_13oam_82:after,._Panel_13oam_191 ._LauncherDismissButton_13oam_406[data-variant][data-color],._Textarea_13oam_352{transition:none;animation:none}}@media (hover:hover){._Shell_13oam_82:hover{--widget-border:var(--widget-border-highlight)}}@media (prefers-color-scheme:dark){._Widget_13oam_1{--button-ring-color:#fff;--widget-surface:#282828c2;--widget-surface-highlight:#383838c2;--widget-text:#f5f5f5;--widget-text-secondary:#d0d0d0;--widget-placeholder:#aaa;--widget-border:#ffffff24;--widget-border-highlight:#ffffff38;--widget-control-hover:#ffffff1a;--widget-control-active:#ffffff29;--widget-shadow:#0000004d}._LauncherLogo_13oam_308{filter:invert()}}@media (max-width:520px){._Textarea_13oam_352{font-size:16px}._Panel_13oam_191{--widget-panel-width:calc(100vw - 32px)}}._Banner_1iivt_1,._Banner_1iivt_1 *,._Banner_1iivt_1 :before,._Banner_1iivt_1 :after{box-sizing:border-box}._Banner_1iivt_1{all:initial;box-sizing:border-box;color:#171717;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;pointer-events:auto;z-index:2147483647;background:#fff;border-radius:24px;align-items:center;width:min(640px,100vw - 48px);min-height:68px;padding:12px 14px 12px 20px;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;display:flex;position:fixed;top:24px;left:50%;transform:translate(-50%);box-shadow:0 0 0 1px #0d0d0d1a,0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a}._Content_1iivt_34{flex:1;justify-content:space-between;align-items:center;min-width:0;display:flex}._Message_1iivt_42{overflow-wrap:break-word;flex:1;min-width:0;font-size:14px;line-height:1.5}._OwnerName_1iivt_50{font-weight:600}._Actions_1iivt_54{flex:none;align-items:center;gap:8px;margin-left:16px;display:flex}._EditLink_1iivt_62,._DismissButton_1iivt_63{--scale:.985;font:inherit;isolation:isolate;border:0;justify-content:center;align-items:center;transition:color .15s;display:inline-flex;position:relative}._EditLink_1iivt_62:before,._DismissButton_1iivt_63:before{border-radius:inherit;content:\"\";will-change:transform;z-index:-1;transition:background-color .15s,opacity .15s,transform .15s;position:absolute;inset:0}._EditLink_1iivt_62{color:#fff;white-space:nowrap;background:0 0;border-radius:9999px;flex:none;gap:6px;min-height:36px;padding:0 16px;font-size:13px;font-weight:400;text-decoration:none}._EditLink_1iivt_62 svg{width:18px;height:18px}._EditLink_1iivt_62:before{background:#171717}._EditLink_1iivt_62:hover:before{background:#2f2f2f}._EditLink_1iivt_62:active:before{transform:scale(var(--scale));background:#3a3a3a}._EditLink_1iivt_62:focus-visible,._DismissButton_1iivt_63:focus-visible{outline-offset:2px;outline:2px solid #0d6efd}._DismissButton_1iivt_63{color:#5f5f5f;cursor:pointer;background:0 0;border-radius:9999px;flex:none;width:36px;height:36px;padding:0;font-size:20px}._DismissButton_1iivt_63:before{opacity:0;transform:scale(var(--scale));background:#f2f2f2}._DismissButton_1iivt_63:hover{color:#171717}._DismissButton_1iivt_63:hover:before{opacity:1;transform:scale(1)}._DismissButton_1iivt_63:active:before{opacity:1;transform:scale(var(--scale));background:#e8e8e8}@media (prefers-reduced-motion:reduce){._EditLink_1iivt_62,._EditLink_1iivt_62:before,._DismissButton_1iivt_63,._DismissButton_1iivt_63:before{transition:none}}@media (max-width:520px){._Banner_1iivt_1{width:calc(100vw - 24px);padding:14px 16px 16px 20px;top:12px}._Content_1iivt_34{flex-wrap:wrap;gap:12px}._Message_1iivt_42{flex-basis:calc(100% - 48px)}._Actions_1iivt_54{display:contents}._EditLink_1iivt_62{order:2}._DismissButton_1iivt_63{order:1;align-self:flex-start}}\n/*$vite$:1*/";
            const g = document.createElement("div");
            g.className = We.Theme;
            const v = document.createElement("div");
            v.className = Bn(We.Theme, We.Portal), v.lang = f, v.dir = Ws(f), d.append(m, p, g, v);
            const b = await a3(f);
            if (r.isConnected) {
                if (typeof r.showPopover == "function") {
                    r.popover = "manual";
                    try {
                        r.showPopover(), r.matches(":popover-open") || r.removeAttribute("popover");
                    } catch {
                        r.removeAttribute("popover");
                    }
                }
                await new Promise((_, T) => {
                    u = (0, n3.createRoot)(g, {
                        onUncaughtError: T
                    }), u.render( /* @__PURE__ */ (0, Y.jsx)(y_, {
                        locale: f,
                        defaultLocale: Bl,
                        messages: b,
                        onError: (O) => {
                            if (O.code !== "MISSING_TRANSLATION") throw O;
                        },
                        children: /* @__PURE__ */ (0, Y.jsxs)(uO, {
                            container: v,
                            children: [i({
                                shadowHost: r,
                                onDismiss: c
                            }), /* @__PURE__ */ (0, Y.jsx)(i3, {
                                onMount: _
                            })]
                        })
                    }));
                });
            }
        })(),
        dispose: c
    };
}

function b3(e) {
    if (e.kind === "preview-annotations") return;
    try {
        if (window.self !== window.top) return;
    } catch {
        return;
    }
    if (P1(navigator.userAgent) || _g() || B2()) return;
    const i = e.projectTitle ? .trim() || document.title.trim() || window.location.hostname;
    C2().then((r) => {
        const u = l3(e, ({
            onDismiss: c
        }) => e.kind === "editor-composer" ? /* @__PURE__ */ (0, Y.jsx)(XC, {
            accountId: e.accountId,
            chatgptOrigin: e.chatgptOrigin,
            projectId: e.projectId,
            siteTitle: i,
            config: r
        }) : /* @__PURE__ */ (0, Y.jsx)(KC, {
            accountId: e.accountId,
            chatgptOrigin: e.chatgptOrigin,
            ownerName: e.ownerName,
            projectId: e.projectId,
            siteTitle: i,
            editContext: r.edit_context,
            onDismiss: c
        }));
        u.ready.catch(u.dispose);
    }).catch(() => {});
}
export {
    b3 as mountSiteWidget
};