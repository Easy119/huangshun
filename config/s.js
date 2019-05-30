function s(e) {
    function t(e, t) {
        return e << t | e >>> 32 - t
    }
    function n(e, t) {
        var n, r, o, a, i;
        return o = 2147483648 & e,
        a = 2147483648 & t,
        n = 1073741824 & e,
        r = 1073741824 & t,
        i = (1073741823 & e) + (1073741823 & t),
        n & r ? 2147483648 ^ i ^ o ^ a: n | r ? 1073741824 & i ? 3221225472 ^ i ^ o ^ a: 1073741824 ^ i ^ o ^ a: i ^ o ^ a
    }
    function r(e, t, n) {
        return e & t | ~e & n
    }
    function o(e, t, n) {
        return e & n | t & ~n
    }
    function a(e, t, n) {
        return e ^ t ^ n
    }
    function i(e, t, n) {
        return t ^ (e | ~n)
    }
    function s(e, o, a, i, s, l, u) {
        return e = n(e, n(n(r(o, a, i), s), u)),
        n(t(e, l), o)
    }
    function l(e, r, a, i, s, l, u) {
        return e = n(e, n(n(o(r, a, i), s), u)),
        n(t(e, l), r)
    }
    function u(e, r, o, i, s, l, u) {
        return e = n(e, n(n(a(r, o, i), s), u)),
        n(t(e, l), r)
    }
    function c(e, r, o, a, s, l, u) {
        return e = n(e, n(n(i(r, o, a), s), u)),
        n(t(e, l), r)
    }
    function f(e) {
        for (var t, n = e.length,
        r = n + 8,
        o = (r - r % 64) / 64, a = 16 * (o + 1), i = new Array(a - 1), s = 0, l = 0; n > l;) t = (l - l % 4) / 4,
        s = l % 4 * 8,
        i[t] = i[t] | e.charCodeAt(l) << s,
        l++;
        return t = (l - l % 4) / 4,
        s = l % 4 * 8,
        i[t] = i[t] | 128 << s,
        i[a - 2] = n << 3,
        i[a - 1] = n >>> 29,
        i
    }
    function p(e) {
        var t, n, r = "",
        o = "";
        for (n = 0; 3 >= n; n++) t = e >>> 8 * n & 255,
        o = "0" + t.toString(16),
        r += o.substr(o.length - 2, 2);
        return r
    }
    function d(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "",
        n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
        }
        return t
    }
    var h, m, y, g, v, b, w, O, _, E = [],
    C = 7,
    x = 12,
    S = 17,
    P = 22,
    T = 5,
    j = 9,
    k = 14,
    M = 20,
    D = 4,
    N = 11,
    A = 16,
    I = 23,
    L = 6,
    R = 10,
    B = 15,
    z = 21;
    for (e = d(e), E = f(e), b = 1732584193, w = 4023233417, O = 2562383102, _ = 271733878, h = 0; h < E.length; h += 16) m = b,
    y = w,
    g = O,
    v = _,
    b = s(b, w, O, _, E[h + 0], 7, 3614090360),
    _ = s(_, b, w, O, E[h + 1], x, 3905402710),
    O = s(O, _, b, w, E[h + 2], S, 606105819),
    w = s(w, O, _, b, E[h + 3], P, 3250441966),
    b = s(b, w, O, _, E[h + 4], 7, 4118548399),
    _ = s(_, b, w, O, E[h + 5], x, 1200080426),
    O = s(O, _, b, w, E[h + 6], S, 2821735955),
    w = s(w, O, _, b, E[h + 7], P, 4249261313),
    b = s(b, w, O, _, E[h + 8], 7, 1770035416),
    _ = s(_, b, w, O, E[h + 9], x, 2336552879),
    O = s(O, _, b, w, E[h + 10], S, 4294925233),
    w = s(w, O, _, b, E[h + 11], P, 2304563134),
    b = s(b, w, O, _, E[h + 12], 7, 1804603682),
    _ = s(_, b, w, O, E[h + 13], x, 4254626195),
    O = s(O, _, b, w, E[h + 14], S, 2792965006),
    w = s(w, O, _, b, E[h + 15], P, 1236535329),
    b = l(b, w, O, _, E[h + 1], 5, 4129170786),
    _ = l(_, b, w, O, E[h + 6], 9, 3225465664),
    O = l(O, _, b, w, E[h + 11], k, 643717713),
    w = l(w, O, _, b, E[h + 0], M, 3921069994),
    b = l(b, w, O, _, E[h + 5], 5, 3593408605),
    _ = l(_, b, w, O, E[h + 10], 9, 38016083),
    O = l(O, _, b, w, E[h + 15], k, 3634488961),
    w = l(w, O, _, b, E[h + 4], M, 3889429448),
    b = l(b, w, O, _, E[h + 9], 5, 568446438),
    _ = l(_, b, w, O, E[h + 14], 9, 3275163606),
    O = l(O, _, b, w, E[h + 3], k, 4107603335),
    w = l(w, O, _, b, E[h + 8], M, 1163531501),
    b = l(b, w, O, _, E[h + 13], 5, 2850285829),
    _ = l(_, b, w, O, E[h + 2], 9, 4243563512),
    O = l(O, _, b, w, E[h + 7], k, 1735328473),
    w = l(w, O, _, b, E[h + 12], M, 2368359562),
    b = u(b, w, O, _, E[h + 5], 4, 4294588738),
    _ = u(_, b, w, O, E[h + 8], N, 2272392833),
    O = u(O, _, b, w, E[h + 11], A, 1839030562),
    w = u(w, O, _, b, E[h + 14], I, 4259657740),
    b = u(b, w, O, _, E[h + 1], 4, 2763975236),
    _ = u(_, b, w, O, E[h + 4], N, 1272893353),
    O = u(O, _, b, w, E[h + 7], A, 4139469664),
    w = u(w, O, _, b, E[h + 10], I, 3200236656),
    b = u(b, w, O, _, E[h + 13], 4, 681279174),
    _ = u(_, b, w, O, E[h + 0], N, 3936430074),
    O = u(O, _, b, w, E[h + 3], A, 3572445317),
    w = u(w, O, _, b, E[h + 6], I, 76029189),
    b = u(b, w, O, _, E[h + 9], 4, 3654602809),
    _ = u(_, b, w, O, E[h + 12], N, 3873151461),
    O = u(O, _, b, w, E[h + 15], A, 530742520),
    w = u(w, O, _, b, E[h + 2], I, 3299628645),
    b = c(b, w, O, _, E[h + 0], 6, 4096336452),
    _ = c(_, b, w, O, E[h + 7], R, 1126891415),
    O = c(O, _, b, w, E[h + 14], B, 2878612391),
    w = c(w, O, _, b, E[h + 5], z, 4237533241),
    b = c(b, w, O, _, E[h + 12], 6, 1700485571),
    _ = c(_, b, w, O, E[h + 3], R, 2399980690),
    O = c(O, _, b, w, E[h + 10], B, 4293915773),
    w = c(w, O, _, b, E[h + 1], z, 2240044497),
    b = c(b, w, O, _, E[h + 8], 6, 1873313359),
    _ = c(_, b, w, O, E[h + 15], R, 4264355552),
    O = c(O, _, b, w, E[h + 6], B, 2734768916),
    w = c(w, O, _, b, E[h + 13], z, 1309151649),
    b = c(b, w, O, _, E[h + 4], 6, 4149444226),
    _ = c(_, b, w, O, E[h + 11], R, 3174756917),
    O = c(O, _, b, w, E[h + 2], B, 718787259),
    w = c(w, O, _, b, E[h + 9], z, 3951481745),
    b = n(b, m),
    w = n(w, y),
    O = n(O, g),
    _ = n(_, v);
    return (p(b) + p(w) + p(O) + p(_)).toLowerCase()
}
module.exports = s;