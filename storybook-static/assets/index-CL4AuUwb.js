function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "./syntaxhighlighter-JOJW2KGS-wOANYJ7P.js",
      "./iframe-BkuZQTC2.js",
      "./index-CBqU2yxZ.js",
      "./_commonjsHelpers-BosuxZz1.js",
      "./index-BtM5VmRH.js",
      "./index-B_J8iUie.js",
      "./index-DLle_QMf.js",
      "./index-DrFu-skq.js",
      "./formatter-B5HCVTEV-BYK-8YPD.js",
      "./WithTooltip-Y7J54OF7-DVGJnHct.js",
      "./Color-RQJUDNI5-Cln0QlOz.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import { _ as Ft } from "./iframe-BkuZQTC2.js";
import { r as o, a as Tl, R as u } from "./index-CBqU2yxZ.js";
import { g as On, c as ta } from "./_commonjsHelpers-BosuxZz1.js";
import { r as x0, R as Z1 } from "./index-BtM5VmRH.js";
import { L as E0, O as J1 } from "./index-B_J8iUie.js";
import {
  q as S0,
  r as Q1,
  s as C0,
  t as ed,
  i as Tn,
  v as td,
  w as rd,
  x as nd,
  c as R0,
  y as I0,
  z as ad,
  A as A0,
  B as od,
  C as ld,
  D as id,
  E as sd,
  F as cd,
  G as dd,
  H as _0,
  I as ud,
  J as pd,
  K as k0,
  _ as fd,
  L as hd,
  M as gd,
  N as ho,
  d as O0,
  O as T0,
  P as M0,
  Q as md,
  R as vd,
  U as bd,
  e as yd,
  S as Ml,
  k as ra,
} from "./index-DLle_QMf.js";
import { d as wd } from "./index-DrFu-skq.js";
var Fe = (e) => `control-${e.replace(/\s+/g, "-")}`,
  Mn = (e) => `set-${e.replace(/\s+/g, "-")}`;
const { global: xd } = __STORYBOOK_MODULE_GLOBAL__,
  { logger: Ed } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var Sd = Object.create,
  $0 = Object.defineProperty,
  Cd = Object.getOwnPropertyDescriptor,
  L0 = Object.getOwnPropertyNames,
  Rd = Object.getPrototypeOf,
  Id = Object.prototype.hasOwnProperty,
  go = (e, t) =>
    function () {
      return t || (0, e[L0(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Ad = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let a of L0(t))
        !Id.call(e, a) &&
          a !== r &&
          $0(e, a, {
            get: () => t[a],
            enumerable: !(n = Cd(t, a)) || n.enumerable,
          });
    return e;
  },
  z0 = (e, t, r) => (
    (r = e != null ? Sd(Rd(e)) : {}),
    Ad(
      t || !e || !e.__esModule
        ? $0(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  );
function vt() {
  return (
    (vt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    vt.apply(this, arguments)
  );
}
function _d(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Ar(e, t) {
  return (
    (Ar = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Ar(e, t)
  );
}
function kd(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ar(e, t);
}
function La(e) {
  return (
    (La = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    La(e)
  );
}
function Od(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Td() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function sn(e, t, r) {
  return (
    Td()
      ? (sn = Reflect.construct.bind())
      : (sn = function (n, a, l) {
          var i = [null];
          i.push.apply(i, a);
          var c = Function.bind.apply(n, i),
            s = new c();
          return l && Ar(s, l.prototype), s;
        }),
    sn.apply(null, arguments)
  );
}
function za(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (za = function (r) {
      if (r === null || !Od(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function",
        );
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, n);
      }
      function n() {
        return sn(r, arguments, La(this).constructor);
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Ar(n, r)
      );
    }),
    za(e)
  );
}
var Md = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`,
};
function $d() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0],
    a = [],
    l;
  for (l = 1; l < t.length; l += 1) a.push(t[l]);
  return (
    a.forEach(function (i) {
      n = n.replace(/%[a-z]/, i);
    }),
    n
  );
}
var Qe = (function (e) {
  kd(t, e);
  function t(r) {
    for (
      var n, a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), i = 1;
      i < a;
      i++
    )
      l[i - 1] = arguments[i];
    return (
      (n = e.call(this, $d.apply(void 0, [Md[r]].concat(l))) || this), _d(n)
    );
  }
  return t;
})(za(Error));
function na(e) {
  return Math.round(e * 255);
}
function Ld(e, t, r) {
  return na(e) + "," + na(t) + "," + na(r);
}
function _r(e, t, r, n) {
  if ((n === void 0 && (n = Ld), t === 0)) return n(r, r, r);
  var a = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((a % 2) - 1)),
    c = 0,
    s = 0,
    d = 0;
  a >= 0 && a < 1
    ? ((c = l), (s = i))
    : a >= 1 && a < 2
      ? ((c = i), (s = l))
      : a >= 2 && a < 3
        ? ((s = l), (d = i))
        : a >= 3 && a < 4
          ? ((s = i), (d = l))
          : a >= 4 && a < 5
            ? ((c = i), (d = l))
            : a >= 5 && a < 6 && ((c = l), (d = i));
  var p = r - l / 2,
    h = c + p,
    m = s + p,
    f = d + p;
  return n(h, m, f);
}
var $l = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function zd(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return $l[t] ? "#" + $l[t] : e;
}
var Bd = /^#[a-fA-F0-9]{6}$/,
  Pd = /^#[a-fA-F0-9]{8}$/,
  Hd = /^#[a-fA-F0-9]{3}$/,
  Fd = /^#[a-fA-F0-9]{4}$/,
  aa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  jd =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  Nd =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  Dd =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function $n(e) {
  if (typeof e != "string") throw new Qe(3);
  var t = zd(e);
  if (t.match(Bd))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(Pd)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(Hd))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(Fd)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var a = aa.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10),
    };
  var l = jd.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha:
        parseFloat("" + l[4]) > 1
          ? parseFloat("" + l[4]) / 100
          : parseFloat("" + l[4]),
    };
  var i = Nd.exec(t);
  if (i) {
    var c = parseInt("" + i[1], 10),
      s = parseInt("" + i[2], 10) / 100,
      d = parseInt("" + i[3], 10) / 100,
      p = "rgb(" + _r(c, s, d) + ")",
      h = aa.exec(p);
    if (!h) throw new Qe(4, t, p);
    return {
      red: parseInt("" + h[1], 10),
      green: parseInt("" + h[2], 10),
      blue: parseInt("" + h[3], 10),
    };
  }
  var m = Dd.exec(t.substring(0, 50));
  if (m) {
    var f = parseInt("" + m[1], 10),
      v = parseInt("" + m[2], 10) / 100,
      g = parseInt("" + m[3], 10) / 100,
      E = "rgb(" + _r(f, v, g) + ")",
      x = aa.exec(E);
    if (!x) throw new Qe(4, t, E);
    return {
      red: parseInt("" + x[1], 10),
      green: parseInt("" + x[2], 10),
      blue: parseInt("" + x[3], 10),
      alpha:
        parseFloat("" + m[4]) > 1
          ? parseFloat("" + m[4]) / 100
          : parseFloat("" + m[4]),
    };
  }
  throw new Qe(5);
}
function Vd(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    a = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (a + l) / 2;
  if (a === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var c,
    s = a - l,
    d = i > 0.5 ? s / (2 - a - l) : s / (a + l);
  switch (a) {
    case t:
      c = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      c = (n - t) / s + 2;
      break;
    default:
      c = (t - r) / s + 4;
      break;
  }
  return (
    (c *= 60),
    e.alpha !== void 0
      ? { hue: c, saturation: d, lightness: i, alpha: e.alpha }
      : { hue: c, saturation: d, lightness: i }
  );
}
function B0(e) {
  return Vd($n(e));
}
var Ud = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? "#" + e[1] + e[3] + e[5]
      : e;
  },
  Ba = Ud;
function At(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function oa(e) {
  return At(Math.round(e * 255));
}
function Wd(e, t, r) {
  return Ba("#" + oa(e) + oa(t) + oa(r));
}
function bn(e, t, r) {
  return _r(e, t, r, Wd);
}
function qd(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return bn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return bn(e.hue, e.saturation, e.lightness);
  throw new Qe(1);
}
function Gd(e, t, r, n) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof r == "number" &&
    typeof n == "number"
  )
    return n >= 1 ? bn(e, t, r) : "rgba(" + _r(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? bn(e.hue, e.saturation, e.lightness)
      : "rgba(" + _r(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Qe(2);
}
function Pa(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Ba("#" + At(e) + At(t) + At(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Ba("#" + At(e.red) + At(e.green) + At(e.blue));
  throw new Qe(6);
}
function kr(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var a = $n(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof n == "number"
    )
      return n >= 1
        ? Pa(e, t, r)
        : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Pa(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Qe(7);
}
var Yd = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  Kd = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      typeof e.alpha == "number"
    );
  },
  Xd = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  Zd = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      typeof e.alpha == "number"
    );
  };
function P0(e) {
  if (typeof e != "object") throw new Qe(8);
  if (Kd(e)) return kr(e);
  if (Yd(e)) return Pa(e);
  if (Zd(e)) return Gd(e);
  if (Xd(e)) return qd(e);
  throw new Qe(8);
}
function H0(e, t, r) {
  return function () {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : H0(e, t, n);
  };
}
function Ln(e) {
  return H0(e, e.length, []);
}
function zn(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Jd(e, t) {
  if (t === "transparent") return t;
  var r = B0(t);
  return P0(vt({}, r, { lightness: zn(0, 1, r.lightness - parseFloat(e)) }));
}
var Qd = Ln(Jd),
  eu = Qd;
function tu(e, t) {
  if (t === "transparent") return t;
  var r = B0(t);
  return P0(vt({}, r, { lightness: zn(0, 1, r.lightness + parseFloat(e)) }));
}
var ru = Ln(tu),
  nu = ru;
function au(e, t) {
  if (t === "transparent") return t;
  var r = $n(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    a = vt({}, r, { alpha: zn(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
  return kr(a);
}
var ou = Ln(au),
  lu = ou;
function iu(e, t) {
  if (t === "transparent") return t;
  var r = $n(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    a = vt({}, r, {
      alpha: zn(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return kr(a);
}
var su = Ln(iu),
  cu = su,
  H = {
    primary: "#FF4785",
    secondary: "#029CFD",
    tertiary: "#FAFBFC",
    ancillary: "#22a699",
    orange: "#FC521F",
    gold: "#FFAE00",
    green: "#66BF3C",
    seafoam: "#37D5D3",
    purple: "#6F2CAC",
    ultraviolet: "#2A0481",
    lightest: "#FFFFFF",
    lighter: "#F7FAFC",
    light: "#EEF3F6",
    mediumlight: "#ECF4F9",
    medium: "#D9E8F2",
    mediumdark: "#73828C",
    dark: "#5C6870",
    darker: "#454E54",
    darkest: "#2E3438",
    border: "hsla(203, 50%, 30%, 0.15)",
    positive: "#66BF3C",
    negative: "#FF4400",
    warning: "#E69D00",
    critical: "#FFFFFF",
    defaultText: "#2E3438",
    inverseText: "#FFFFFF",
    positiveText: "#448028",
    negativeText: "#D43900",
    warningText: "#A15C20",
  },
  mt = {
    app: "#F6F9FC",
    bar: H.lightest,
    content: H.lightest,
    preview: H.lightest,
    gridCellSize: 10,
    hoverable: cu(0.9, H.secondary),
    positive: "#E1FFD4",
    negative: "#FEDED2",
    warning: "#FFF5CF",
    critical: "#FF4400",
  },
  et = {
    fonts: {
      base: [
        '"Nunito Sans"',
        "-apple-system",
        '".SFNSText-Regular"',
        '"San Francisco"',
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(", "),
      mono: [
        "ui-monospace",
        "Menlo",
        "Monaco",
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Droid Sans Mono"',
        '"Courier New"',
        "monospace",
      ].join(", "),
    },
    weight: { regular: 400, bold: 700 },
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
      code: 90,
    },
  },
  du = {
    base: "light",
    colorPrimary: "#FF4785",
    colorSecondary: "#029CFD",
    appBg: mt.app,
    appContentBg: H.lightest,
    appPreviewBg: H.lightest,
    appBorderColor: H.border,
    appBorderRadius: 4,
    fontBase: et.fonts.base,
    fontCode: et.fonts.mono,
    textColor: H.darkest,
    textInverseColor: H.lightest,
    textMutedColor: H.dark,
    barTextColor: H.mediumdark,
    barHoverColor: H.secondary,
    barSelectedColor: H.secondary,
    barBg: H.lightest,
    buttonBg: mt.app,
    buttonBorder: H.medium,
    booleanBg: H.mediumlight,
    booleanSelectedBg: H.lightest,
    inputBg: H.lightest,
    inputBorder: H.border,
    inputTextColor: H.darkest,
    inputBorderRadius: 4,
  },
  yn = du,
  uu = {
    base: "dark",
    colorPrimary: "#FF4785",
    colorSecondary: "#029CFD",
    appBg: "#222425",
    appContentBg: "#1B1C1D",
    appPreviewBg: H.lightest,
    appBorderColor: "rgba(255,255,255,.1)",
    appBorderRadius: 4,
    fontBase: et.fonts.base,
    fontCode: et.fonts.mono,
    textColor: "#C9CDCF",
    textInverseColor: "#222425",
    textMutedColor: "#798186",
    barTextColor: H.mediumdark,
    barHoverColor: H.secondary,
    barSelectedColor: H.secondary,
    barBg: "#292C2E",
    buttonBg: "#222425",
    buttonBorder: "rgba(255,255,255,.1)",
    booleanBg: "#222425",
    booleanSelectedBg: "#2E3438",
    inputBg: "#1B1C1D",
    inputBorder: "rgba(255,255,255,.1)",
    inputTextColor: H.lightest,
    inputBorderRadius: 4,
  },
  pu = uu,
  { window: la } = xd,
  fu = (e) => ({ color: e }),
  hu = (e) =>
    typeof e != "string"
      ? (Ed.warn(
          `Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`,
        ),
        !1)
      : !0,
  gu = (e) => !/(gradient|var|calc)/.test(e),
  mu = (e, t) =>
    e === "darken"
      ? kr(`${eu(1, t)}`, 0.95)
      : e === "lighten"
        ? kr(`${nu(1, t)}`, 0.95)
        : t,
  vu = (e) => (t) => {
    if (!hu(t) || !gu(t)) return t;
    try {
      return mu(e, t);
    } catch {
      return t;
    }
  },
  Cr = vu("lighten"),
  F0 = () =>
    !la || !la.matchMedia
      ? "light"
      : la.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
  Ha = { light: yn, dark: pu, normal: yn };
F0();
var bu = function (t) {
    return t();
  },
  j0 = Tl.useInsertionEffect ? Tl.useInsertionEffect : !1,
  mo = j0 || bu,
  Ll = j0 || o.useLayoutEffect;
function Jr(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var N0 = { exports: {} };
(function (e, t) {
  (function (r) {
    e.exports = r();
  })(function () {
    return (function r(n, a, l) {
      function i(d, p) {
        if (!a[d]) {
          if (!n[d]) {
            var h = typeof Jr == "function" && Jr;
            if (!p && h) return h(d, !0);
            if (c) return c(d, !0);
            var m = new Error("Cannot find module '" + d + "'");
            throw ((m.code = "MODULE_NOT_FOUND"), m);
          }
          var f = (a[d] = { exports: {} });
          n[d][0].call(
            f.exports,
            function (v) {
              var g = n[d][1][v];
              return i(g || v);
            },
            f,
            f.exports,
            r,
            n,
            a,
            l,
          );
        }
        return a[d].exports;
      }
      for (var c = typeof Jr == "function" && Jr, s = 0; s < l.length; s++)
        i(l[s]);
      return i;
    })(
      {
        1: [
          function (r, n, a) {
            n.exports = function (l) {
              if (typeof Map != "function" || l) {
                var i = r("./similar");
                return new i();
              } else return new Map();
            };
          },
          { "./similar": 2 },
        ],
        2: [
          function (r, n, a) {
            function l() {
              return (
                (this.list = []),
                (this.lastItem = void 0),
                (this.size = 0),
                this
              );
            }
            (l.prototype.get = function (i) {
              var c;
              if (this.lastItem && this.isEqual(this.lastItem.key, i))
                return this.lastItem.val;
              if (((c = this.indexOf(i)), c >= 0))
                return (this.lastItem = this.list[c]), this.list[c].val;
            }),
              (l.prototype.set = function (i, c) {
                var s;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? ((this.lastItem.val = c), this)
                  : ((s = this.indexOf(i)),
                    s >= 0
                      ? ((this.lastItem = this.list[s]),
                        (this.list[s].val = c),
                        this)
                      : ((this.lastItem = { key: i, val: c }),
                        this.list.push(this.lastItem),
                        this.size++,
                        this));
              }),
              (l.prototype.delete = function (i) {
                var c;
                if (
                  (this.lastItem &&
                    this.isEqual(this.lastItem.key, i) &&
                    (this.lastItem = void 0),
                  (c = this.indexOf(i)),
                  c >= 0)
                )
                  return this.size--, this.list.splice(c, 1)[0];
              }),
              (l.prototype.has = function (i) {
                var c;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? !0
                  : ((c = this.indexOf(i)),
                    c >= 0 ? ((this.lastItem = this.list[c]), !0) : !1);
              }),
              (l.prototype.forEach = function (i, c) {
                var s;
                for (s = 0; s < this.size; s++)
                  i.call(c || this, this.list[s].val, this.list[s].key, this);
              }),
              (l.prototype.indexOf = function (i) {
                var c;
                for (c = 0; c < this.size; c++)
                  if (this.isEqual(this.list[c].key, i)) return c;
                return -1;
              }),
              (l.prototype.isEqual = function (i, c) {
                return i === c || (i !== i && c !== c);
              }),
              (n.exports = l);
          },
          {},
        ],
        3: [
          function (r, n, a) {
            var l = r("map-or-similar");
            n.exports = function (d) {
              var p = new l(!1),
                h = [];
              return function (m) {
                var f = function () {
                  var v = p,
                    g,
                    E,
                    x = arguments.length - 1,
                    y = Array(x + 1),
                    b = !0,
                    w;
                  if ((f.numArgs || f.numArgs === 0) && f.numArgs !== x + 1)
                    throw new Error(
                      "Memoizerific functions should always be called with the same number of arguments",
                    );
                  for (w = 0; w < x; w++) {
                    if (
                      ((y[w] = { cacheItem: v, arg: arguments[w] }),
                      v.has(arguments[w]))
                    ) {
                      v = v.get(arguments[w]);
                      continue;
                    }
                    (b = !1), (g = new l(!1)), v.set(arguments[w], g), (v = g);
                  }
                  return (
                    b &&
                      (v.has(arguments[x])
                        ? (E = v.get(arguments[x]))
                        : (b = !1)),
                    b ||
                      ((E = m.apply(null, arguments)), v.set(arguments[x], E)),
                    d > 0 &&
                      ((y[x] = { cacheItem: v, arg: arguments[x] }),
                      b ? i(h, y) : h.push(y),
                      h.length > d && c(h.shift())),
                    (f.wasMemoized = b),
                    (f.numArgs = x + 1),
                    E
                  );
                };
                return (
                  (f.limit = d),
                  (f.wasMemoized = !1),
                  (f.cache = p),
                  (f.lru = h),
                  f
                );
              };
            };
            function i(d, p) {
              var h = d.length,
                m = p.length,
                f,
                v,
                g;
              for (v = 0; v < h; v++) {
                for (f = !0, g = 0; g < m; g++)
                  if (!s(d[v][g].arg, p[g].arg)) {
                    f = !1;
                    break;
                  }
                if (f) break;
              }
              d.push(d.splice(v, 1)[0]);
            }
            function c(d) {
              var p = d.length,
                h = d[p - 1],
                m,
                f;
              for (
                h.cacheItem.delete(h.arg), f = p - 2;
                f >= 0 &&
                ((h = d[f]), (m = h.cacheItem.get(h.arg)), !m || !m.size);
                f--
              )
                h.cacheItem.delete(h.arg);
            }
            function s(d, p) {
              return d === p || (d !== d && p !== p);
            }
          },
          { "map-or-similar": 1 },
        ],
      },
      {},
      [3],
    )(3);
  });
})(N0);
var yu = N0.exports;
const Dt = On(yu),
  { logger: wu } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var xu = go({
    "../../node_modules/react-is/cjs/react-is.development.js"(e) {
      (function () {
        var t = typeof Symbol == "function" && Symbol.for,
          r = t ? Symbol.for("react.element") : 60103,
          n = t ? Symbol.for("react.portal") : 60106,
          a = t ? Symbol.for("react.fragment") : 60107,
          l = t ? Symbol.for("react.strict_mode") : 60108,
          i = t ? Symbol.for("react.profiler") : 60114,
          c = t ? Symbol.for("react.provider") : 60109,
          s = t ? Symbol.for("react.context") : 60110,
          d = t ? Symbol.for("react.async_mode") : 60111,
          p = t ? Symbol.for("react.concurrent_mode") : 60111,
          h = t ? Symbol.for("react.forward_ref") : 60112,
          m = t ? Symbol.for("react.suspense") : 60113,
          f = t ? Symbol.for("react.suspense_list") : 60120,
          v = t ? Symbol.for("react.memo") : 60115,
          g = t ? Symbol.for("react.lazy") : 60116,
          E = t ? Symbol.for("react.block") : 60121,
          x = t ? Symbol.for("react.fundamental") : 60117,
          y = t ? Symbol.for("react.responder") : 60118,
          b = t ? Symbol.for("react.scope") : 60119;
        function w(z) {
          return (
            typeof z == "string" ||
            typeof z == "function" ||
            z === a ||
            z === p ||
            z === i ||
            z === l ||
            z === m ||
            z === f ||
            (typeof z == "object" &&
              z !== null &&
              (z.$$typeof === g ||
                z.$$typeof === v ||
                z.$$typeof === c ||
                z.$$typeof === s ||
                z.$$typeof === h ||
                z.$$typeof === x ||
                z.$$typeof === y ||
                z.$$typeof === b ||
                z.$$typeof === E))
          );
        }
        function S(z) {
          if (typeof z == "object" && z !== null) {
            var Pe = z.$$typeof;
            switch (Pe) {
              case r:
                var Ne = z.type;
                switch (Ne) {
                  case d:
                  case p:
                  case a:
                  case i:
                  case l:
                  case m:
                    return Ne;
                  default:
                    var St = Ne && Ne.$$typeof;
                    switch (St) {
                      case s:
                      case h:
                      case g:
                      case v:
                      case c:
                        return St;
                      default:
                        return Pe;
                    }
                }
              case n:
                return Pe;
            }
          }
        }
        var C = d,
          R = p,
          I = s,
          _ = c,
          k = r,
          O = h,
          T = a,
          M = g,
          F = v,
          $ = n,
          L = i,
          j = l,
          V = m,
          P = !1;
        function D(z) {
          return (
            P ||
              ((P = !0),
              console.warn(
                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.",
              )),
            Z(z) || S(z) === d
          );
        }
        function Z(z) {
          return S(z) === p;
        }
        function ne(z) {
          return S(z) === s;
        }
        function X(z) {
          return S(z) === c;
        }
        function J(z) {
          return typeof z == "object" && z !== null && z.$$typeof === r;
        }
        function B(z) {
          return S(z) === h;
        }
        function U(z) {
          return S(z) === a;
        }
        function q(z) {
          return S(z) === g;
        }
        function se(z) {
          return S(z) === v;
        }
        function ve(z) {
          return S(z) === n;
        }
        function lt(z) {
          return S(z) === i;
        }
        function _e(z) {
          return S(z) === l;
        }
        function je(z) {
          return S(z) === m;
        }
        (e.AsyncMode = C),
          (e.ConcurrentMode = R),
          (e.ContextConsumer = I),
          (e.ContextProvider = _),
          (e.Element = k),
          (e.ForwardRef = O),
          (e.Fragment = T),
          (e.Lazy = M),
          (e.Memo = F),
          (e.Portal = $),
          (e.Profiler = L),
          (e.StrictMode = j),
          (e.Suspense = V),
          (e.isAsyncMode = D),
          (e.isConcurrentMode = Z),
          (e.isContextConsumer = ne),
          (e.isContextProvider = X),
          (e.isElement = J),
          (e.isForwardRef = B),
          (e.isFragment = U),
          (e.isLazy = q),
          (e.isMemo = se),
          (e.isPortal = ve),
          (e.isProfiler = lt),
          (e.isStrictMode = _e),
          (e.isSuspense = je),
          (e.isValidElementType = w),
          (e.typeOf = S);
      })();
    },
  }),
  Eu = go({
    "../../node_modules/react-is/index.js"(e, t) {
      t.exports = xu();
    },
  }),
  D0 = go({
    "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t,
    ) {
      var r = Eu(),
        n = {
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
          type: !0,
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        l = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        c = {};
      (c[r.ForwardRef] = l), (c[r.Memo] = i);
      function s(E) {
        return r.isMemo(E) ? i : c[E.$$typeof] || n;
      }
      var d = Object.defineProperty,
        p = Object.getOwnPropertyNames,
        h = Object.getOwnPropertySymbols,
        m = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        v = Object.prototype;
      function g(E, x, y) {
        if (typeof x != "string") {
          if (v) {
            var b = f(x);
            b && b !== v && g(E, b, y);
          }
          var w = p(x);
          h && (w = w.concat(h(x)));
          for (var S = s(E), C = s(x), R = 0; R < w.length; ++R) {
            var I = w[R];
            if (!a[I] && !(y && y[I]) && !(C && C[I]) && !(S && S[I])) {
              var _ = m(x, I);
              try {
                d(E, I, _);
              } catch {}
            }
          }
        }
        return E;
      }
      t.exports = g;
    },
  });
function V0(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Su =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  vo = V0(function (e) {
    return (
      Su.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function Cu(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Ru(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Iu = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (a) {
        var l;
        n.tags.length === 0
          ? n.insertionPoint
            ? (l = n.insertionPoint.nextSibling)
            : n.prepend
              ? (l = n.container.firstChild)
              : (l = n.before)
          : (l = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, l),
          n.tags.push(a);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !1 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Ru(this));
        var n = this.tags[this.tags.length - 1],
          a = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
        if (
          (a &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                r +
                "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.",
            ),
          (this._alreadyInsertedOrderInsensitiveRule =
            this._alreadyInsertedOrderInsensitiveRule || !a),
          this.isSpeedy)
        ) {
          var l = Cu(n);
          try {
            l.insertRule(r, l.cssRules.length);
          } catch (i) {
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              r,
            ) ||
              console.error(
                'There was a problem inserting the following rule: "' + r + '"',
                i,
              );
          }
        } else n.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      e
    );
  })(),
  ge = "-ms-",
  wn = "-moz-",
  Y = "-webkit-",
  bo = "comm",
  yo = "rule",
  wo = "decl",
  Au = "@import",
  U0 = "@keyframes",
  _u = "@layer",
  ku = Math.abs,
  Bn = String.fromCharCode,
  Ou = Object.assign;
function Tu(e, t) {
  return ue(e, 0) ^ 45
    ? (((((((t << 2) ^ ue(e, 0)) << 2) ^ ue(e, 1)) << 2) ^ ue(e, 2)) << 2) ^
        ue(e, 3)
    : 0;
}
function W0(e) {
  return e.trim();
}
function Mu(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, r) {
  return e.replace(t, r);
}
function Fa(e, t) {
  return e.indexOf(t);
}
function ue(e, t) {
  return e.charCodeAt(t) | 0;
}
function Or(e, t, r) {
  return e.slice(t, r);
}
function Ke(e) {
  return e.length;
}
function xo(e) {
  return e.length;
}
function Qr(e, t) {
  return t.push(e), e;
}
function $u(e, t) {
  return e.map(t).join("");
}
var Pn = 1,
  Qt = 1,
  q0 = 0,
  Ee = 0,
  oe = 0,
  cr = "";
function Hn(e, t, r, n, a, l, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: l,
    line: Pn,
    column: Qt,
    length: i,
    return: "",
  };
}
function yr(e, t) {
  return Ou(Hn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Lu() {
  return oe;
}
function zu() {
  return (
    (oe = Ee > 0 ? ue(cr, --Ee) : 0), Qt--, oe === 10 && ((Qt = 1), Pn--), oe
  );
}
function Se() {
  return (
    (oe = Ee < q0 ? ue(cr, Ee++) : 0), Qt++, oe === 10 && ((Qt = 1), Pn++), oe
  );
}
function nt() {
  return ue(cr, Ee);
}
function cn() {
  return Ee;
}
function Nr(e, t) {
  return Or(cr, e, t);
}
function Tr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function G0(e) {
  return (Pn = Qt = 1), (q0 = Ke((cr = e))), (Ee = 0), [];
}
function Y0(e) {
  return (cr = ""), e;
}
function dn(e) {
  return W0(Nr(Ee - 1, ja(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Bu(e) {
  for (; (oe = nt()) && oe < 33; ) Se();
  return Tr(e) > 2 || Tr(oe) > 3 ? "" : " ";
}
function Pu(e, t) {
  for (
    ;
    --t &&
    Se() &&
    !(oe < 48 || oe > 102 || (oe > 57 && oe < 65) || (oe > 70 && oe < 97));

  );
  return Nr(e, cn() + (t < 6 && nt() == 32 && Se() == 32));
}
function ja(e) {
  for (; Se(); )
    switch (oe) {
      case e:
        return Ee;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ja(oe);
        break;
      case 40:
        e === 41 && ja(e);
        break;
      case 92:
        Se();
        break;
    }
  return Ee;
}
function Hu(e, t) {
  for (; Se() && e + oe !== 57 && !(e + oe === 84 && nt() === 47); );
  return "/*" + Nr(t, Ee - 1) + "*" + Bn(e === 47 ? e : Se());
}
function Fu(e) {
  for (; !Tr(nt()); ) Se();
  return Nr(e, Ee);
}
function ju(e) {
  return Y0(un("", null, null, null, [""], (e = G0(e)), 0, [0], e));
}
function un(e, t, r, n, a, l, i, c, s) {
  for (
    var d = 0,
      p = 0,
      h = i,
      m = 0,
      f = 0,
      v = 0,
      g = 1,
      E = 1,
      x = 1,
      y = 0,
      b = "",
      w = a,
      S = l,
      C = n,
      R = b;
    E;

  )
    switch (((v = y), (y = Se()))) {
      case 40:
        if (v != 108 && ue(R, h - 1) == 58) {
          Fa((R += K(dn(y), "&", "&\f")), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += dn(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Bu(v);
        break;
      case 92:
        R += Pu(cn() - 1, 7);
        continue;
      case 47:
        switch (nt()) {
          case 42:
          case 47:
            Qr(Nu(Hu(Se(), cn()), t, r), s);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * g:
        c[d++] = Ke(R) * x;
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            E = 0;
          case 59 + p:
            x == -1 && (R = K(R, /\f/g, "")),
              f > 0 &&
                Ke(R) - h &&
                Qr(
                  f > 32
                    ? Bl(R + ";", n, r, h - 1)
                    : Bl(K(R, " ", "") + ";", n, r, h - 2),
                  s,
                );
            break;
          case 59:
            R += ";";
          default:
            if (
              (Qr((C = zl(R, t, r, d, p, a, c, b, (w = []), (S = []), h)), l),
              y === 123)
            )
              if (p === 0) un(R, t, C, C, w, l, h, c, S);
              else
                switch (m === 99 && ue(R, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    un(
                      e,
                      C,
                      C,
                      n && Qr(zl(e, C, C, 0, 0, a, c, b, a, (w = []), h), S),
                      a,
                      S,
                      h,
                      c,
                      n ? w : S,
                    );
                    break;
                  default:
                    un(R, C, C, C, [""], S, 0, c, S);
                }
        }
        (d = p = f = 0), (g = x = 1), (b = R = ""), (h = i);
        break;
      case 58:
        (h = 1 + Ke(R)), (f = v);
      default:
        if (g < 1) {
          if (y == 123) --g;
          else if (y == 125 && g++ == 0 && zu() == 125) continue;
        }
        switch (((R += Bn(y)), y * g)) {
          case 38:
            x = p > 0 ? 1 : ((R += "\f"), -1);
            break;
          case 44:
            (c[d++] = (Ke(R) - 1) * x), (x = 1);
            break;
          case 64:
            nt() === 45 && (R += dn(Se())),
              (m = nt()),
              (p = h = Ke((b = R += Fu(cn())))),
              y++;
            break;
          case 45:
            v === 45 && Ke(R) == 2 && (g = 0);
        }
    }
  return l;
}
function zl(e, t, r, n, a, l, i, c, s, d, p) {
  for (
    var h = a - 1, m = a === 0 ? l : [""], f = xo(m), v = 0, g = 0, E = 0;
    v < n;
    ++v
  )
    for (var x = 0, y = Or(e, h + 1, (h = ku((g = i[v])))), b = e; x < f; ++x)
      (b = W0(g > 0 ? m[x] + " " + y : K(y, /&\f/g, m[x]))) && (s[E++] = b);
  return Hn(e, t, r, a === 0 ? yo : c, s, d, p);
}
function Nu(e, t, r) {
  return Hn(e, t, r, bo, Bn(Lu()), Or(e, 2, -2), 0);
}
function Bl(e, t, r, n) {
  return Hn(e, t, r, wo, Or(e, 0, n), Or(e, n + 1, -1), n);
}
function Jt(e, t) {
  for (var r = "", n = xo(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Du(e, t, r, n) {
  switch (e.type) {
    case _u:
      if (e.children.length) break;
    case Au:
    case wo:
      return (e.return = e.return || e.value);
    case bo:
      return "";
    case U0:
      return (e.return = e.value + "{" + Jt(e.children, n) + "}");
    case yo:
      e.value = e.props.join(",");
  }
  return Ke((r = Jt(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function Vu(e) {
  var t = xo(e);
  return function (r, n, a, l) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, l) || "";
    return i;
  };
}
var Pl = function (e) {
    var t = new WeakMap();
    return function (r) {
      if (t.has(r)) return t.get(r);
      var n = e(r);
      return t.set(r, n), n;
    };
  },
  Uu = function (e, t, r) {
    for (
      var n = 0, a = 0;
      (n = a), (a = nt()), n === 38 && a === 12 && (t[r] = 1), !Tr(a);

    )
      Se();
    return Nr(e, Ee);
  },
  Wu = function (e, t) {
    var r = -1,
      n = 44;
    do
      switch (Tr(n)) {
        case 0:
          n === 38 && nt() === 12 && (t[r] = 1), (e[r] += Uu(Ee - 1, t, r));
          break;
        case 2:
          e[r] += dn(n);
          break;
        case 4:
          if (n === 44) {
            (e[++r] = nt() === 58 ? "&\f" : ""), (t[r] = e[r].length);
            break;
          }
        default:
          e[r] += Bn(n);
      }
    while ((n = Se()));
    return e;
  },
  qu = function (e, t) {
    return Y0(Wu(G0(e), t));
  },
  Hl = new WeakMap(),
  Gu = function (e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          r = e.parent,
          n = e.column === r.column && e.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Hl.get(r)) &&
        !n
      ) {
        Hl.set(e, !0);
        for (
          var a = [], l = qu(t, a), i = r.props, c = 0, s = 0;
          c < l.length;
          c++
        )
          for (var d = 0; d < i.length; d++, s++)
            e.props[s] = a[c] ? l[c].replace(/&\f/g, i[d]) : i[d] + " " + l[c];
      }
    }
  },
  Yu = function (e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ""), (e.value = ""));
    }
  },
  Ku =
    "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",
  Xu = function (e) {
    return e.type === "comm" && e.children.indexOf(Ku) > -1;
  },
  Zu = function (e) {
    return function (t, r, n) {
      if (!(t.type !== "rule" || e.compat)) {
        var a = t.value.match(/(:first|:nth|:nth-last)-child/g);
        if (a) {
          for (
            var l = !!t.parent, i = l ? t.parent.children : n, c = i.length - 1;
            c >= 0;
            c--
          ) {
            var s = i[c];
            if (s.line < t.line) break;
            if (s.column < t.column) {
              if (Xu(s)) return;
              break;
            }
          }
          a.forEach(function (d) {
            console.error(
              'The pseudo class "' +
                d +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                d.split("-child")[0] +
                '-of-type".',
            );
          });
        }
      }
    };
  },
  K0 = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
  },
  Ju = function (e, t) {
    for (var r = e - 1; r >= 0; r--) if (!K0(t[r])) return !0;
    return !1;
  },
  Fl = function (e) {
    (e.type = ""),
      (e.value = ""),
      (e.return = ""),
      (e.children = ""),
      (e.props = "");
  },
  Qu = function (e, t, r) {
    K0(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.",
          ),
          Fl(e))
        : Ju(t, r) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.",
          ),
          Fl(e)));
  };
function X0(e, t) {
  switch (Tu(e, t)) {
    case 5103:
      return Y + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + wn + e + ge + e + e;
    case 6828:
    case 4268:
      return Y + e + ge + e + e;
    case 6165:
      return Y + e + ge + "flex-" + e + e;
    case 5187:
      return (
        Y + e + K(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + ge + "flex-$1$2") + e
      );
    case 5443:
      return Y + e + ge + "flex-item-" + K(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Y +
        e +
        ge +
        "flex-line-pack" +
        K(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Y + e + ge + K(e, "shrink", "negative") + e;
    case 5292:
      return Y + e + ge + K(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Y +
        "box-" +
        K(e, "-grow", "") +
        Y +
        e +
        ge +
        K(e, "grow", "positive") +
        e
      );
    case 4554:
      return Y + K(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
    case 6187:
      return (
        K(K(K(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return K(e, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return (
        K(
          K(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + ge + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Y +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ke(e) - 1 - t > 6)
        switch (ue(e, t + 1)) {
          case 109:
            if (ue(e, t + 4) !== 45) break;
          case 102:
            return (
              K(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Y +
                  "$2-$3$1" +
                  wn +
                  (ue(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Fa(e, "stretch")
              ? X0(K(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ue(e, t + 1) !== 115) break;
    case 6444:
      switch (ue(e, Ke(e) - 3 - (~Fa(e, "!important") && 10))) {
        case 107:
          return K(e, ":", ":" + Y) + e;
        case 101:
          return (
            K(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Y +
                (ue(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Y +
                "$2$3$1" +
                ge +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (ue(e, t + 11)) {
        case 114:
          return Y + e + ge + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Y + e + ge + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Y + e + ge + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Y + e + ge + e + e;
  }
  return e;
}
var ep = function (e, t, r, n) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case wo:
          e.return = X0(e.value, e.length);
          break;
        case U0:
          return Jt([yr(e, { value: K(e.value, "@", "@" + Y) })], n);
        case yo:
          if (e.length)
            return $u(e.props, function (a) {
              switch (Mu(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Jt(
                    [yr(e, { props: [K(a, /:(read-\w+)/, ":" + wn + "$1")] })],
                    n,
                  );
                case "::placeholder":
                  return Jt(
                    [
                      yr(e, {
                        props: [K(a, /:(plac\w+)/, ":" + Y + "input-$1")],
                      }),
                      yr(e, { props: [K(a, /:(plac\w+)/, ":" + wn + "$1")] }),
                      yr(e, { props: [K(a, /:(plac\w+)/, ge + "input-$1")] }),
                    ],
                    n,
                  );
              }
              return "";
            });
      }
  },
  tp = [ep],
  rp = function (e) {
    var t = e.key;
    if (!t)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var g = v.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || tp;
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          t +
          '" was passed',
      );
    var a = {},
      l,
      i = [];
    (l = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (v) {
          for (
            var g = v.getAttribute("data-emotion").split(" "), E = 1;
            E < g.length;
            E++
          )
            a[g[E]] = !0;
          i.push(v);
        },
      );
    var c,
      s = [Gu, Yu];
    s.push(
      Zu({
        get compat() {
          return f.compat;
        },
      }),
      Qu,
    );
    {
      var d,
        p = [
          Du,
          function (v) {
            v.root ||
              (v.return
                ? d.insert(v.return)
                : v.value && v.type !== bo && d.insert(v.value + "{}"));
          },
        ],
        h = Vu(s.concat(n, p)),
        m = function (v) {
          return Jt(ju(v), h);
        };
      c = function (v, g, E, x) {
        (d = E),
          g.map !== void 0 &&
            (d = {
              insert: function (y) {
                E.insert(y + g.map);
              },
            }),
          m(v ? v + "{" + g.styles + "}" : g.styles),
          x && (f.inserted[g.name] = !0);
      };
    }
    var f = {
      key: t,
      sheet: new Iu({
        key: t,
        container: l,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: a,
      registered: {},
      insert: c,
    };
    return f.sheet.hydrate(i), f;
  };
z0(D0());
var np = !0;
function Eo(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : (n += a + " ");
    }),
    n
  );
}
var Fn = function (e, t, r) {
    var n = e.key + "-" + t.name;
    (r === !1 || np === !1) &&
      e.registered[n] === void 0 &&
      (e.registered[n] = t.styles);
  },
  jn = function (e, t, r) {
    Fn(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var a = t;
      do e.insert(t === a ? "." + n : "", a, e.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function ap(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var op = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  jl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  lp =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  ip = /[A-Z]|^ms/g,
  Z0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  So = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Nl = function (e) {
    return e != null && typeof e != "boolean";
  },
  ia = V0(function (e) {
    return So(e) ? e : e.replace(ip, "-$&").toLowerCase();
  }),
  xn = function (e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string")
          return t.replace(Z0, function (r, n, a) {
            return (Xe = { name: n, styles: a, next: Xe }), n;
          });
    }
    return op[e] !== 1 && !So(e) && typeof t == "number" && t !== 0
      ? t + "px"
      : t;
  };
(Dl =
  /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (Vl = ["normal", "none", "initial", "inherit", "unset"]),
  (Ul = xn),
  (Wl = /^-ms-/),
  (ql = /-(.)/g),
  (sa = {}),
  (xn = function (e, t) {
    if (
      e === "content" &&
      (typeof t != "string" ||
        (Vl.indexOf(t) === -1 &&
          !Dl.test(t) &&
          (t.charAt(0) !== t.charAt(t.length - 1) ||
            (t.charAt(0) !== '"' && t.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          t +
          "\"'`",
      );
    var r = Ul(e, t);
    return (
      r !== "" &&
        !So(e) &&
        e.indexOf("-") !== -1 &&
        sa[e] === void 0 &&
        ((sa[e] = !0),
        console.error(
          "Using kebab-case for css properties in objects is not supported. Did you mean " +
            e.replace(Wl, "ms-").replace(ql, function (n, a) {
              return a.toUpperCase();
            }) +
            "?",
        )),
      r
    );
  });
var Dl,
  Vl,
  Ul,
  Wl,
  ql,
  sa,
  J0 =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Mr(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === "NO_COMPONENT_SELECTOR") throw new Error(J0);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Xe = { name: r.name, styles: r.styles, next: Xe }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Xe = { name: n.name, styles: n.styles, next: Xe }), (n = n.next);
        var a = r.styles + ";";
        return r.map !== void 0 && (a += r.map), a;
      }
      return sp(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Xe,
          i = r(e);
        return (Xe = l), Mr(e, t, i);
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`",
        );
      break;
    }
    case "string":
      var c = [],
        s = r.replace(Z0, function (p, h, m) {
          var f = "animation" + c.length;
          return (
            c.push(
              "const " +
                f +
                " = keyframes`" +
                m.replace(/^@keyframes animation-\w+/, "") +
                "`",
            ),
            "${" + f + "}"
          );
        });
      c.length &&
        console.error(
          "`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" +
            [].concat(c, ["`" + s + "`"]).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ("css`" + s + "`"),
        );
      break;
  }
  if (t == null) return r;
  var d = t[r];
  return d !== void 0 ? d : r;
}
function sp(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++) n += Mr(e, t, r[a]) + ";";
  else
    for (var l in r) {
      var i = r[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0
          ? (n += l + "{" + t[i] + "}")
          : Nl(i) && (n += ia(l) + ":" + xn(l, i) + ";");
      else {
        if (l === "NO_COMPONENT_SELECTOR") throw new Error(J0);
        if (
          Array.isArray(i) &&
          typeof i[0] == "string" &&
          (t == null || t[i[0]] === void 0)
        )
          for (var c = 0; c < i.length; c++)
            Nl(i[c]) && (n += ia(l) + ":" + xn(l, i[c]) + ";");
        else {
          var s = Mr(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              n += ia(l) + ":" + s + ";";
              break;
            }
            default:
              l === "undefined" && console.error(lp), (n += l + "{" + s + "}");
          }
        }
      }
    }
  return n;
}
var Gl = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Q0;
Q0 = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Xe,
  er = function (e, t, r) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var n = !0,
      a = "";
    Xe = void 0;
    var l = e[0];
    l == null || l.raw === void 0
      ? ((n = !1), (a += Mr(r, t, l)))
      : (l[0] === void 0 && console.error(jl), (a += l[0]));
    for (var i = 1; i < e.length; i++)
      (a += Mr(r, t, e[i])),
        n && (l[i] === void 0 && console.error(jl), (a += l[i]));
    var c;
    (a = a.replace(Q0, function (h) {
      return (c = h), "";
    })),
      (Gl.lastIndex = 0);
    for (var s = "", d; (d = Gl.exec(a)) !== null; ) s += "-" + d[1];
    var p = ap(a) + s;
    return {
      name: p,
      styles: a,
      map: c,
      next: Xe,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    };
  },
  cp = {}.hasOwnProperty,
  Co = o.createContext(typeof HTMLElement < "u" ? rp({ key: "css" }) : null);
Co.displayName = "EmotionCacheContext";
Co.Provider;
var Nn = function (e) {
    return o.forwardRef(function (t, r) {
      var n = o.useContext(Co);
      return e(t, n, r);
    });
  },
  bt = o.createContext({});
bt.displayName = "EmotionThemeContext";
var es = function () {
    return o.useContext(bt);
  },
  dp = function (e, t) {
    if (typeof t == "function") {
      var r = t(e);
      if (r == null || typeof r != "object" || Array.isArray(r))
        throw new Error(
          "[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!",
        );
      return r;
    }
    if (t == null || typeof t != "object" || Array.isArray(t))
      throw new Error(
        "[ThemeProvider] Please make your theme prop a plain object",
      );
    return vt({}, e, t);
  },
  up = Pl(function (e) {
    return Pl(function (t) {
      return dp(e, t);
    });
  }),
  ts = function (e) {
    var t = o.useContext(bt);
    return (
      e.theme !== t && (t = up(t)(e.theme)),
      o.createElement(bt.Provider, { value: t }, e.children)
    );
  },
  Yl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Kl = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__",
  pp = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag;
    return (
      Fn(t, r, n),
      mo(function () {
        return jn(t, r, n);
      }),
      null
    );
  },
  fp = Nn(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Yl],
      l = [n],
      i = "";
    typeof e.className == "string"
      ? (i = Eo(t.registered, l, e.className))
      : e.className != null && (i = e.className + " ");
    var c = er(l, void 0, o.useContext(bt));
    if (c.name.indexOf("-") === -1) {
      var s = e[Kl];
      s && (c = er([c, "label:" + s + ";"]));
    }
    i += t.key + "-" + c.name;
    var d = {};
    for (var p in e)
      cp.call(e, p) && p !== "css" && p !== Yl && p !== Kl && (d[p] = e[p]);
    return (
      (d.ref = r),
      (d.className = i),
      o.createElement(
        o.Fragment,
        null,
        o.createElement(pp, {
          cache: t,
          serialized: c,
          isStringTag: typeof a == "string",
        }),
        o.createElement(a, d),
      )
    );
  });
fp.displayName = "EmotionCssPropInternal";
z0(D0());
var hp = {
    name: "@emotion/react",
    version: "11.11.1",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    browser: {
      "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js",
    },
    exports: {
      ".": {
        module: {
          worker: "./dist/emotion-react.worker.esm.js",
          browser: "./dist/emotion-react.browser.esm.js",
          default: "./dist/emotion-react.esm.js",
        },
        import: "./dist/emotion-react.cjs.mjs",
        default: "./dist/emotion-react.cjs.js",
      },
      "./jsx-runtime": {
        module: {
          worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
          browser:
            "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
          default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
        },
        import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js",
      },
      "./_isolated-hnrs": {
        module: {
          worker:
            "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
          browser:
            "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
          default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
        },
        import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js",
      },
      "./jsx-dev-runtime": {
        module: {
          worker:
            "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
          browser:
            "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
          default:
            "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
        },
        import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js",
      },
      "./package.json": "./package.json",
      "./types/css-prop": "./types/css-prop.d.ts",
      "./macro": {
        types: { import: "./macro.d.mts", default: "./macro.d.ts" },
        default: "./macro.js",
      },
    },
    types: "types/index.d.ts",
    files: [
      "src",
      "dist",
      "jsx-runtime",
      "jsx-dev-runtime",
      "_isolated-hnrs",
      "types/*.d.ts",
      "macro.*",
    ],
    sideEffects: !1,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: { "test:typescript": "dtslint types" },
    dependencies: {
      "@babel/runtime": "^7.18.3",
      "@emotion/babel-plugin": "^11.11.0",
      "@emotion/cache": "^11.11.0",
      "@emotion/serialize": "^1.1.2",
      "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
      "@emotion/utils": "^1.2.1",
      "@emotion/weak-memoize": "^0.3.1",
      "hoist-non-react-statics": "^3.3.1",
    },
    peerDependencies: { react: ">=16.8.0" },
    peerDependenciesMeta: { "@types/react": { optional: !0 } },
    devDependencies: {
      "@definitelytyped/dtslint": "0.0.112",
      "@emotion/css": "11.11.0",
      "@emotion/css-prettifier": "1.1.3",
      "@emotion/server": "11.11.0",
      "@emotion/styled": "11.11.0",
      "html-tag-names": "^1.1.2",
      react: "16.14.0",
      "svg-tag-names": "^1.1.1",
      typescript: "^4.5.5",
    },
    repository:
      "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: { access: "public" },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
      entrypoints: [
        "./index.js",
        "./jsx-runtime.js",
        "./jsx-dev-runtime.js",
        "./_isolated-hnrs.js",
      ],
      umdName: "emotionReact",
      exports: {
        envConditions: ["browser", "worker"],
        extra: {
          "./types/css-prop": "./types/css-prop.d.ts",
          "./macro": {
            types: { import: "./macro.d.mts", default: "./macro.d.ts" },
            default: "./macro.js",
          },
        },
      },
    },
  },
  Xl = !1,
  gp = Nn(function (e, t) {
    !Xl &&
      (e.className || e.css) &&
      (console.error(
        "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?",
      ),
      (Xl = !0));
    var r = e.styles,
      n = er([r], void 0, o.useContext(bt)),
      a = o.useRef();
    return (
      Ll(
        function () {
          var l = t.key + "-global",
            i = new t.sheet.constructor({
              key: l,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            c = !1,
            s = document.querySelector(
              'style[data-emotion="' + l + " " + n.name + '"]',
            );
          return (
            t.sheet.tags.length && (i.before = t.sheet.tags[0]),
            s !== null &&
              ((c = !0), s.setAttribute("data-emotion", l), i.hydrate([s])),
            (a.current = [i, c]),
            function () {
              i.flush();
            }
          );
        },
        [t],
      ),
      Ll(
        function () {
          var l = a.current,
            i = l[0],
            c = l[1];
          if (c) {
            l[1] = !1;
            return;
          }
          if ((n.next !== void 0 && jn(t, n.next, !0), i.tags.length)) {
            var s = i.tags[i.tags.length - 1].nextElementSibling;
            (i.before = s), i.flush();
          }
          t.insert("", n, i, !1);
        },
        [t, n.name],
      ),
      null
    );
  });
gp.displayName = "EmotionGlobal";
function Ro() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return er(t);
}
var dr = function () {
    var e = Ro.apply(void 0, arguments),
      t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  mp = function e(t) {
    for (var r = t.length, n = 0, a = ""; n < r; n++) {
      var l = t[n];
      if (l != null) {
        var i = void 0;
        switch (typeof l) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(l)) i = e(l);
            else {
              l.styles !== void 0 &&
                l.name !== void 0 &&
                console.error(
                  "You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.",
                ),
                (i = "");
              for (var c in l) l[c] && c && (i && (i += " "), (i += c));
            }
            break;
          }
          default:
            i = l;
        }
        i && (a && (a += " "), (a += i));
      }
    }
    return a;
  };
function vp(e, t, r) {
  var n = [],
    a = Eo(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var bp = function (e) {
    var t = e.cache,
      r = e.serializedArr;
    return (
      mo(function () {
        for (var n = 0; n < r.length; n++) jn(t, r[n], !1);
      }),
      null
    );
  },
  yp = Nn(function (e, t) {
    var r = !1,
      n = [],
      a = function () {
        if (r) throw new Error("css can only be used during render");
        for (var s = arguments.length, d = new Array(s), p = 0; p < s; p++)
          d[p] = arguments[p];
        var h = er(d, t.registered);
        return n.push(h), Fn(t, h, !1), t.key + "-" + h.name;
      },
      l = function () {
        if (r) throw new Error("cx can only be used during render");
        for (var s = arguments.length, d = new Array(s), p = 0; p < s; p++)
          d[p] = arguments[p];
        return vp(t.registered, a, mp(d));
      },
      i = { css: a, cx: l, theme: o.useContext(bt) },
      c = e.children(i);
    return (
      (r = !0),
      o.createElement(
        o.Fragment,
        null,
        o.createElement(bp, { cache: t, serializedArr: n }),
        c,
      )
    );
  });
yp.displayName = "EmotionClassNames";
(ca = !0),
  (Zl = typeof jest < "u" || typeof vi < "u"),
  ca &&
    !Zl &&
    ((da = typeof globalThis < "u" ? globalThis : ca ? window : global),
    (ua = "__EMOTION_REACT_" + hp.version.split(".")[0] + "__"),
    da[ua] &&
      console.warn(
        "You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.",
      ),
    (da[ua] = !0));
var ca,
  Zl,
  da,
  ua,
  wp = vo,
  xp = function (e) {
    return e !== "theme";
  },
  Jl = function (e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? wp : xp;
  },
  Ql = function (e, t, r) {
    var n;
    if (t) {
      var a = t.shouldForwardProp;
      n =
        e.__emotion_forwardProp && a
          ? function (l) {
              return e.__emotion_forwardProp(l) && a(l);
            }
          : a;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  },
  ei = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  Ep = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag;
    return (
      Fn(t, r, n),
      mo(function () {
        return jn(t, r, n);
      }),
      null
    );
  },
  Sp = function e(t, r) {
    if (t === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
    var n = t.__emotion_real === t,
      a = (n && t.__emotion_base) || t,
      l,
      i;
    r !== void 0 && ((l = r.label), (i = r.target));
    var c = Ql(t, r, n),
      s = c || Jl(a),
      d = !s("as");
    return function () {
      var p = arguments,
        h =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (l !== void 0 && h.push("label:" + l + ";"),
        p[0] == null || p[0].raw === void 0)
      )
        h.push.apply(h, p);
      else {
        p[0][0] === void 0 && console.error(ei), h.push(p[0][0]);
        for (var m = p.length, f = 1; f < m; f++)
          p[0][f] === void 0 && console.error(ei), h.push(p[f], p[0][f]);
      }
      var v = Nn(function (g, E, x) {
        var y = (d && g.as) || a,
          b = "",
          w = [],
          S = g;
        if (g.theme == null) {
          S = {};
          for (var C in g) S[C] = g[C];
          S.theme = o.useContext(bt);
        }
        typeof g.className == "string"
          ? (b = Eo(E.registered, w, g.className))
          : g.className != null && (b = g.className + " ");
        var R = er(h.concat(w), E.registered, S);
        (b += E.key + "-" + R.name), i !== void 0 && (b += " " + i);
        var I = d && c === void 0 ? Jl(y) : s,
          _ = {};
        for (var k in g) (d && k === "as") || (I(k) && (_[k] = g[k]));
        return (
          (_.className = b),
          (_.ref = x),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(Ep, {
              cache: E,
              serialized: R,
              isStringTag: typeof y == "string",
            }),
            o.createElement(y, _),
          )
        );
      });
      return (
        (v.displayName =
          l !== void 0
            ? l
            : "Styled(" +
              (typeof a == "string"
                ? a
                : a.displayName || a.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = a),
        (v.__emotion_styles = h),
        (v.__emotion_forwardProp = c),
        Object.defineProperty(v, "toString", {
          value: function () {
            return i === void 0 ? "NO_COMPONENT_SELECTOR" : "." + i;
          },
        }),
        (v.withComponent = function (g, E) {
          return e(g, vt({}, r, E, { shouldForwardProp: Ql(v, E, !0) })).apply(
            void 0,
            h,
          );
        }),
        v
      );
    };
  },
  Cp = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  A = Sp.bind();
Cp.forEach(function (e) {
  A[e] = A(e);
});
var Rp = Dt(1)(({ typography: e }) => ({
  body: {
    fontFamily: e.fonts.base,
    fontSize: e.size.s3,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitOverflowScrolling: "touch",
  },
  "*": { boxSizing: "border-box" },
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: e.weight.regular,
    margin: 0,
    padding: 0,
  },
  "button, input, textarea, select": {
    fontFamily: "inherit",
    fontSize: "inherit",
    boxSizing: "border-box",
  },
  sub: { fontSize: "0.8em", bottom: "-0.2em" },
  sup: { fontSize: "0.8em", top: "-0.2em" },
  "b, strong": { fontWeight: e.weight.bold },
  hr: {
    border: "none",
    borderTop: "1px solid silver",
    clear: "both",
    marginBottom: "1.25rem",
  },
  code: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit",
  },
  pre: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: "18px",
    padding: "11px 1rem",
    whiteSpace: "pre-wrap",
    color: "inherit",
    borderRadius: 3,
    margin: "1rem 0",
  },
}));
Dt(1)(({ color: e, background: t, typography: r }) => {
  let n = Rp({ typography: r });
  return {
    ...n,
    body: {
      ...n.body,
      color: e.defaultText,
      background: t.app,
      overflow: "hidden",
    },
    hr: { ...n.hr, borderTop: `1px solid ${e.border}` },
  };
});
var Ip = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" },
  Ap = dr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  rs = dr`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  _p = dr`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  kp = dr`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  Op = Ro`
  animation: ${rs} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
  Tp = Ro`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
  Mp = {
    rotate360: Ap,
    glow: rs,
    float: _p,
    jiggle: kp,
    inlineGlow: Op,
    hoverable: Tp,
  },
  $p = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
    BASE_COLOR: "rgb(213, 213, 213)",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
    OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
    HTML_TAG_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
    HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "rgb(145, 145, 145)",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
    TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
    TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
    TABLE_SORT_ICON_COLOR: "black",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  Lp = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "white",
    BASE_COLOR: "black",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
    OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
    HTML_TAG_COLOR: "rgb(168, 148, 166)",
    HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
    HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "#6e6e6e",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "#aaa",
    TABLE_TH_BACKGROUND_COLOR: "#eee",
    TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
    TABLE_SORT_ICON_COLOR: "#6e6e6e",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  zp = (e) =>
    Object.entries(e).reduce((t, [r, n]) => ({ ...t, [r]: fu(n) }), {}),
  Bp = ({ colors: e, mono: t }) => {
    let r = zp(e);
    return {
      token: {
        fontFamily: t,
        WebkitFontSmoothing: "antialiased",
        "&.tag": r.red3,
        "&.comment": { ...r.green1, fontStyle: "italic" },
        "&.prolog": { ...r.green1, fontStyle: "italic" },
        "&.doctype": { ...r.green1, fontStyle: "italic" },
        "&.cdata": { ...r.green1, fontStyle: "italic" },
        "&.string": r.red1,
        "&.url": r.cyan1,
        "&.symbol": r.cyan1,
        "&.number": r.cyan1,
        "&.boolean": r.cyan1,
        "&.variable": r.cyan1,
        "&.constant": r.cyan1,
        "&.inserted": r.cyan1,
        "&.atrule": r.blue1,
        "&.keyword": r.blue1,
        "&.attr-value": r.blue1,
        "&.punctuation": r.gray1,
        "&.operator": r.gray1,
        "&.function": r.gray1,
        "&.deleted": r.red2,
        "&.important": { fontWeight: "bold" },
        "&.bold": { fontWeight: "bold" },
        "&.italic": { fontStyle: "italic" },
        "&.class-name": r.cyan2,
        "&.selector": r.red3,
        "&.attr-name": r.red4,
        "&.property": r.red4,
        "&.regex": r.red4,
        "&.entity": r.red4,
        "&.directive.tag .tag": { background: "#ffff00", ...r.gray1 },
      },
      "language-json .token.boolean": r.blue1,
      "language-json .token.number": r.blue1,
      "language-json .token.property": r.cyan2,
      namespace: { opacity: 0.7 },
    };
  },
  Pp = {
    green1: "#008000",
    red1: "#A31515",
    red2: "#9a050f",
    red3: "#800000",
    red4: "#ff0000",
    gray1: "#393A34",
    cyan1: "#36acaa",
    cyan2: "#2B91AF",
    blue1: "#0000ff",
    blue2: "#00009f",
  },
  Hp = {
    green1: "#7C7C7C",
    red1: "#92C379",
    red2: "#9a050f",
    red3: "#A8FF60",
    red4: "#96CBFE",
    gray1: "#EDEDED",
    cyan1: "#C6C5FE",
    cyan2: "#FFFFB6",
    blue1: "#B474DD",
    blue2: "#00009f",
  },
  Fp = (e) => ({
    primary: e.colorPrimary,
    secondary: e.colorSecondary,
    tertiary: H.tertiary,
    ancillary: H.ancillary,
    orange: H.orange,
    gold: H.gold,
    green: H.green,
    seafoam: H.seafoam,
    purple: H.purple,
    ultraviolet: H.ultraviolet,
    lightest: H.lightest,
    lighter: H.lighter,
    light: H.light,
    mediumlight: H.mediumlight,
    medium: H.medium,
    mediumdark: H.mediumdark,
    dark: H.dark,
    darker: H.darker,
    darkest: H.darkest,
    border: H.border,
    positive: H.positive,
    negative: H.negative,
    warning: H.warning,
    critical: H.critical,
    defaultText: e.textColor || H.darkest,
    inverseText: e.textInverseColor || H.lightest,
    positiveText: H.positiveText,
    negativeText: H.negativeText,
    warningText: H.warningText,
  }),
  Na = (e = Ha[F0()]) => {
    let {
      base: t,
      colorPrimary: r,
      colorSecondary: n,
      appBg: a,
      appContentBg: l,
      appPreviewBg: i,
      appBorderColor: c,
      appBorderRadius: s,
      fontBase: d,
      fontCode: p,
      textColor: h,
      textInverseColor: m,
      barTextColor: f,
      barHoverColor: v,
      barSelectedColor: g,
      barBg: E,
      buttonBg: x,
      buttonBorder: y,
      booleanBg: b,
      booleanSelectedBg: w,
      inputBg: S,
      inputBorder: C,
      inputTextColor: R,
      inputBorderRadius: I,
      brandTitle: _,
      brandUrl: k,
      brandImage: O,
      brandTarget: T,
      gridCellSize: M,
      ...F
    } = e;
    return {
      ...F,
      base: t,
      color: Fp(e),
      background: {
        app: a,
        bar: E,
        content: l,
        preview: i,
        gridCellSize: M || mt.gridCellSize,
        hoverable: mt.hoverable,
        positive: mt.positive,
        negative: mt.negative,
        warning: mt.warning,
        critical: mt.critical,
      },
      typography: {
        fonts: { base: d, mono: p },
        weight: et.weight,
        size: et.size,
      },
      animation: Mp,
      easing: Ip,
      input: { background: S, border: C, borderRadius: I, color: R },
      button: { background: x || S, border: y || C },
      boolean: { background: b || C, selectedBackground: w || S },
      layoutMargin: 10,
      appBorderColor: c,
      appBorderRadius: s,
      barTextColor: f,
      barHoverColor: v || n,
      barSelectedColor: g || n,
      barBg: E,
      brand: { title: _, url: k, image: O || (_ ? null : void 0), target: T },
      code: Bp({ colors: t === "light" ? Pp : Hp, mono: p }),
      addonActionsTheme: {
        ...(t === "light" ? Lp : $p),
        BASE_FONT_FAMILY: p,
        BASE_FONT_SIZE: et.size.s2 - 1,
        BASE_LINE_HEIGHT: "18px",
        BASE_BACKGROUND_COLOR: "transparent",
        BASE_COLOR: h,
        ARROW_COLOR: lu(0.2, c),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: p,
        TREENODE_FONT_SIZE: et.size.s2 - 1,
        TREENODE_LINE_HEIGHT: "18px",
        TREENODE_PADDING_LEFT: 12,
      },
    };
  },
  jp = (e) => Object.keys(e).length === 0,
  pa = (e) => e != null && typeof e == "object",
  Np = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t),
  Dp = () => Object.create(null),
  ns = (e, t) =>
    e === t || !pa(e) || !pa(t)
      ? {}
      : Object.keys(e).reduce((r, n) => {
          if (Np(t, n)) {
            let a = ns(e[n], t[n]);
            return (pa(a) && jp(a)) || (r[n] = a), r;
          }
          return (r[n] = void 0), r;
        }, Dp()),
  Vp = ns;
function Up(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a = n.reduce(function (c, s) {
    var d = s.match(/\n([\t ]+|(?!\s).)/g);
    return d
      ? c.concat(
          d.map(function (p) {
            var h, m;
            return (m =
              (h = p.match(/[\t ]/g)) === null || h === void 0
                ? void 0
                : h.length) !== null && m !== void 0
              ? m
              : 0;
          }),
        )
      : c;
  }, []);
  if (a.length) {
    var l = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, a) +
        "}",
      "g",
    );
    n = n.map(function (c) {
      return c.replace(
        l,
        `
`,
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var i = n[0];
  return (
    t.forEach(function (c, s) {
      var d = i.match(/(?:^|\n)( *)$/),
        p = d ? d[1] : "",
        h = c;
      typeof c == "string" &&
        c.includes(`
`) &&
        (h = String(c)
          .split(
            `
`,
          )
          .map(function (m, f) {
            return f === 0 ? m : "" + p + m;
          }).join(`
`)),
        (i += h + n[s + 1]);
    }),
    i
  );
}
var Wp = (e) => {
    if (!e) return Na(yn);
    let t = Vp(yn, e);
    return (
      Object.keys(t).length &&
        wu.warn(
          Up`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
          t,
        ),
      Na(e)
    );
  },
  Da =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
function G() {
  return (
    (G = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    G.apply(this, arguments)
  );
}
function Io(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    l;
  for (l = 0; l < n.length; l++)
    (a = n[l]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var qp = Object.create,
  as = Object.defineProperty,
  Gp = Object.getOwnPropertyDescriptor,
  os = Object.getOwnPropertyNames,
  Yp = Object.getPrototypeOf,
  Kp = Object.prototype.hasOwnProperty,
  N = (e, t) =>
    function () {
      return t || (0, e[os(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Xp = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let a of os(t))
        !Kp.call(e, a) &&
          a !== r &&
          as(e, a, {
            get: () => t[a],
            enumerable: !(n = Gp(t, a)) || n.enumerable,
          });
    return e;
  },
  Re = (e, t, r) => (
    (r = e != null ? qp(Yp(e)) : {}),
    Xp(
      t || !e || !e.__esModule
        ? as(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  Zp = N({
    "../../node_modules/refractor/lang/markdown.js"(e, t) {
      (t.exports = r), (r.displayName = "markdown"), (r.aliases = ["md"]);
      function r(n) {
        (function (a) {
          var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function i(v) {
            return (
              (v = v.replace(/<inner>/g, function () {
                return l;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + v + ")")
            );
          }
          var c = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return c;
              },
            ),
            d =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (a.languages.markdown = a.languages.extend("markup", {})),
            a.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: a.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + s + d + "(?:" + s + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + s + d + ")(?:" + s + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(c),
                        inside: a.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + s + ")" + d + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + s + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(c),
                        alias: "important",
                        inside: a.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: i(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: i(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: i(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (v) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (g) {
                  v !== g &&
                    (a.languages.markdown[v].inside.content.inside[g] =
                      a.languages.markdown[g]);
                },
              );
            }),
            a.hooks.add("after-tokenize", function (v) {
              if (v.language !== "markdown" && v.language !== "md") return;
              function g(E) {
                if (!(!E || typeof E == "string"))
                  for (var x = 0, y = E.length; x < y; x++) {
                    var b = E[x];
                    if (b.type !== "code") {
                      g(b.content);
                      continue;
                    }
                    var w = b.content[1],
                      S = b.content[3];
                    if (
                      w &&
                      S &&
                      w.type === "code-language" &&
                      S.type === "code-block" &&
                      typeof w.content == "string"
                    ) {
                      var C = w.content
                        .replace(/\b#/g, "sharp")
                        .replace(/\b\+\+/g, "pp");
                      C = (/[a-z][\w-]*/i.exec(C) || [""])[0].toLowerCase();
                      var R = "language-" + C;
                      S.alias
                        ? typeof S.alias == "string"
                          ? (S.alias = [S.alias, R])
                          : S.alias.push(R)
                        : (S.alias = [R]);
                    }
                  }
              }
              g(v.tokens);
            }),
            a.hooks.add("wrap", function (v) {
              if (v.type === "code-block") {
                for (var g = "", E = 0, x = v.classes.length; E < x; E++) {
                  var y = v.classes[E],
                    b = /language-(.+)/.exec(y);
                  if (b) {
                    g = b[1];
                    break;
                  }
                }
                var w = a.languages[g];
                if (w) v.content = a.highlight(f(v.content.value), w, g);
                else if (g && g !== "none" && a.plugins.autoloader) {
                  var S =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(Math.random() * 1e16);
                  (v.attributes.id = S),
                    a.plugins.autoloader.loadLanguages(g, function () {
                      var C = document.getElementById(S);
                      C &&
                        (C.innerHTML = a.highlight(
                          C.textContent,
                          a.languages[g],
                          g,
                        ));
                    });
                }
              }
            });
          var p = RegExp(a.languages.markup.tag.pattern.source, "gi"),
            h = { amp: "&", lt: "<", gt: ">", quot: '"' },
            m = String.fromCodePoint || String.fromCharCode;
          function f(v) {
            var g = v.replace(p, "");
            return (
              (g = g.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (E, x) {
                if (((x = x.toLowerCase()), x[0] === "#")) {
                  var y;
                  return (
                    x[1] === "x"
                      ? (y = parseInt(x.slice(2), 16))
                      : (y = Number(x.slice(1))),
                    m(y)
                  );
                } else {
                  var b = h[x];
                  return b || E;
                }
              })),
              g
            );
          }
          a.languages.md = a.languages.markdown;
        })(n);
      }
    },
  }),
  Jp = N({
    "../../node_modules/refractor/lang/yaml.js"(e, t) {
      (t.exports = r), (r.displayName = "yaml"), (r.aliases = ["yml"]);
      function r(n) {
        (function (a) {
          var l = /[*&][^\s[\]{},]+/,
            i =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            c =
              "(?:" +
              i.source +
              "(?:[ 	]+" +
              l.source +
              ")?|" +
              l.source +
              "(?:[ 	]+" +
              i.source +
              ")?)",
            s =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                },
              ),
            d = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function p(h, m) {
            m = (m || "").replace(/m/g, "") + "m";
            var f =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return c;
                })
                .replace(/<<value>>/g, function () {
                  return h;
                });
            return RegExp(f, m);
          }
          (a.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return c;
                  },
                ),
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return c;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + s + "|" + d + ")";
                  }),
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: p(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source,
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: p(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: p(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: p(d), lookbehind: !0, greedy: !0 },
            number: {
              pattern: p(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i",
              ),
              lookbehind: !0,
            },
            tag: i,
            important: l,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (a.languages.yml = a.languages.yaml);
        })(n);
      }
    },
  }),
  ls = N({
    "../../node_modules/refractor/lang/typescript.js"(e, t) {
      (t.exports = r), (r.displayName = "typescript"), (r.aliases = ["ts"]);
      function r(n) {
        (function (a) {
          (a.languages.typescript = a.languages.extend("javascript", {
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            a.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/,
            ),
            delete a.languages.typescript.parameter,
            delete a.languages.typescript["literal-property"];
          var l = a.languages.extend("typescript", {});
          delete l["class-name"],
            (a.languages.typescript["class-name"].inside = l),
            a.languages.insertBefore("typescript", "function", {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: "operator" },
                  function: /^[\s\S]+/,
                },
              },
              "generic-function": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: l,
                  },
                },
              },
            }),
            (a.languages.ts = a.languages.typescript);
        })(n);
      }
    },
  }),
  is = N({
    "../../node_modules/refractor/lang/jsx.js"(e, t) {
      (t.exports = r), (r.displayName = "jsx"), (r.aliases = []);
      function r(n) {
        (function (a) {
          var l = a.util.clone(a.languages.javascript),
            i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            c = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function d(m, f) {
            return (
              (m = m
                .replace(/<S>/g, function () {
                  return i;
                })
                .replace(/<BRACES>/g, function () {
                  return c;
                })
                .replace(/<SPREAD>/g, function () {
                  return s;
                })),
              RegExp(m, f)
            );
          }
          (s = d(s).source),
            (a.languages.jsx = a.languages.extend("markup", l)),
            (a.languages.jsx.tag.pattern = d(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source,
            )),
            (a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (a.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (a.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (a.languages.jsx.tag.inside.comment = l.comment),
            a.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: d(/<SPREAD>/.source),
                  inside: a.languages.jsx,
                },
              },
              a.languages.jsx.tag,
            ),
            a.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: d(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    rest: a.languages.jsx,
                  },
                },
              },
              a.languages.jsx.tag,
            );
          var p = function (m) {
              return m
                ? typeof m == "string"
                  ? m
                  : typeof m.content == "string"
                    ? m.content
                    : m.content.map(p).join("")
                : "";
            },
            h = function (m) {
              for (var f = [], v = 0; v < m.length; v++) {
                var g = m[v],
                  E = !1;
                if (
                  (typeof g != "string" &&
                    (g.type === "tag" &&
                    g.content[0] &&
                    g.content[0].type === "tag"
                      ? g.content[0].content[0].content === "</"
                        ? f.length > 0 &&
                          f[f.length - 1].tagName ===
                            p(g.content[0].content[1]) &&
                          f.pop()
                        : g.content[g.content.length - 1].content === "/>" ||
                          f.push({
                            tagName: p(g.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : f.length > 0 &&
                          g.type === "punctuation" &&
                          g.content === "{"
                        ? f[f.length - 1].openedBraces++
                        : f.length > 0 &&
                            f[f.length - 1].openedBraces > 0 &&
                            g.type === "punctuation" &&
                            g.content === "}"
                          ? f[f.length - 1].openedBraces--
                          : (E = !0)),
                  (E || typeof g == "string") &&
                    f.length > 0 &&
                    f[f.length - 1].openedBraces === 0)
                ) {
                  var x = p(g);
                  v < m.length - 1 &&
                    (typeof m[v + 1] == "string" ||
                      m[v + 1].type === "plain-text") &&
                    ((x += p(m[v + 1])), m.splice(v + 1, 1)),
                    v > 0 &&
                      (typeof m[v - 1] == "string" ||
                        m[v - 1].type === "plain-text") &&
                      ((x = p(m[v - 1]) + x), m.splice(v - 1, 1), v--),
                    (m[v] = new a.Token("plain-text", x, null, x));
                }
                g.content && typeof g.content != "string" && h(g.content);
              }
            };
          a.hooks.add("after-tokenize", function (m) {
            (m.language !== "jsx" && m.language !== "tsx") || h(m.tokens);
          });
        })(n);
      }
    },
  }),
  Qp = N({
    "../../node_modules/refractor/lang/tsx.js"(e, t) {
      var r = is(),
        n = ls();
      (t.exports = a), (a.displayName = "tsx"), (a.aliases = []);
      function a(l) {
        l.register(r),
          l.register(n),
          (function (i) {
            var c = i.util.clone(i.languages.typescript);
            (i.languages.tsx = i.languages.extend("jsx", c)),
              delete i.languages.tsx.parameter,
              delete i.languages.tsx["literal-property"];
            var s = i.languages.tsx.tag;
            (s.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + "(?:" + s.pattern.source + ")",
              s.pattern.flags,
            )),
              (s.lookbehind = !0);
          })(l);
      }
    },
  }),
  e5 = N({
    "../../node_modules/refractor/lang/clike.js"(e, t) {
      (t.exports = r), (r.displayName = "clike"), (r.aliases = []);
      function r(n) {
        n.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        };
      }
    },
  }),
  t5 = N({
    "../../node_modules/refractor/lang/javascript.js"(e, t) {
      (t.exports = r), (r.displayName = "javascript"), (r.aliases = ["js"]);
      function r(n) {
        (n.languages.javascript = n.languages.extend("clike", {
          "class-name": [
            n.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                (/NaN|Infinity/.source +
                  "|" +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  "|" +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  "|" +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  "|" +
                  /\d+(?:_\d+)*n/.source +
                  "|" +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                    .source) +
                ")" +
                /(?![\w$])/.source,
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
          (n.languages.javascript["class-name"][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          n.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: n.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
              },
            },
            "function-variable": {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          n.languages.insertBefore("javascript", "string", {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
            "template-string": {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation",
                    },
                    rest: n.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            "string-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
            },
          }),
          n.languages.insertBefore("javascript", "operator", {
            "literal-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: "property",
            },
          }),
          n.languages.markup &&
            (n.languages.markup.tag.addInlined("script", "javascript"),
            n.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              "javascript",
            )),
          (n.languages.js = n.languages.javascript);
      }
    },
  }),
  ss = N({
    "../../node_modules/refractor/lang/css.js"(e, t) {
      (t.exports = r), (r.displayName = "css"), (r.aliases = []);
      function r(n) {
        (function (a) {
          var l =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (a.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  l.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i",
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + l.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(
                `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                  l.source +
                  ")*(?=\\s*\\{)",
              ),
              lookbehind: !0,
            },
            string: { pattern: l, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (a.languages.css.atrule.inside.rest = a.languages.css);
          var i = a.languages.markup;
          i &&
            (i.tag.addInlined("style", "css"),
            i.tag.addAttribute("style", "css"));
        })(n);
      }
    },
  }),
  cs = N({
    "../../node_modules/refractor/lang/markup.js"(e, t) {
      (t.exports = r),
        (r.displayName = "markup"),
        (r.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"]);
      function r(n) {
        (n.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
          (n.languages.markup.tag.inside["attr-value"].inside.entity =
            n.languages.markup.entity),
          (n.languages.markup.doctype.inside["internal-subset"].inside =
            n.languages.markup),
          n.hooks.add("wrap", function (a) {
            a.type === "entity" &&
              (a.attributes.title = a.content.value.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(n.languages.markup.tag, "addInlined", {
            value: function (a, l) {
              var i = {};
              (i["language-" + l] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: n.languages[l],
              }),
                (i.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var c = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: i,
                },
              };
              c["language-" + l] = {
                pattern: /[\s\S]+/,
                inside: n.languages[l],
              };
              var s = {};
              (s[a] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return a;
                    },
                  ),
                  "i",
                ),
                lookbehind: !0,
                greedy: !0,
                inside: c,
              }),
                n.languages.insertBefore("markup", "cdata", s);
            },
          }),
          Object.defineProperty(n.languages.markup.tag, "addAttribute", {
            value: function (a, l) {
              n.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    "(?:" +
                    a +
                    ")" +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  "i",
                ),
                lookbehind: !0,
                inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [l, "language-" + l],
                        inside: n.languages[l],
                      },
                      punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/,
                      ],
                    },
                  },
                },
              });
            },
          }),
          (n.languages.html = n.languages.markup),
          (n.languages.mathml = n.languages.markup),
          (n.languages.svg = n.languages.markup),
          (n.languages.xml = n.languages.extend("markup", {})),
          (n.languages.ssml = n.languages.xml),
          (n.languages.atom = n.languages.xml),
          (n.languages.rss = n.languages.xml);
      }
    },
  }),
  r5 = N({
    "../../node_modules/xtend/immutable.js"(e, t) {
      t.exports = n;
      var r = Object.prototype.hasOwnProperty;
      function n() {
        for (var a = {}, l = 0; l < arguments.length; l++) {
          var i = arguments[l];
          for (var c in i) r.call(i, c) && (a[c] = i[c]);
        }
        return a;
      }
    },
  }),
  ds = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/util/schema.js"(
      e,
      t,
    ) {
      t.exports = n;
      var r = n.prototype;
      (r.space = null), (r.normal = {}), (r.property = {});
      function n(a, l, i) {
        (this.property = a), (this.normal = l), i && (this.space = i);
      }
    },
  }),
  n5 = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/util/merge.js"(
      e,
      t,
    ) {
      var r = r5(),
        n = ds();
      t.exports = a;
      function a(l) {
        for (var i = l.length, c = [], s = [], d = -1, p, h; ++d < i; )
          (p = l[d]), c.push(p.property), s.push(p.normal), (h = p.space);
        return new n(r.apply(null, c), r.apply(null, s), h);
      }
    },
  }),
  Ao = N({
    "../../node_modules/hastscript/node_modules/property-information/normalize.js"(
      e,
      t,
    ) {
      t.exports = r;
      function r(n) {
        return n.toLowerCase();
      }
    },
  }),
  us = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/util/info.js"(
      e,
      t,
    ) {
      t.exports = n;
      var r = n.prototype;
      (r.space = null),
        (r.attribute = null),
        (r.property = null),
        (r.boolean = !1),
        (r.booleanish = !1),
        (r.overloadedBoolean = !1),
        (r.number = !1),
        (r.commaSeparated = !1),
        (r.spaceSeparated = !1),
        (r.commaOrSpaceSeparated = !1),
        (r.mustUseProperty = !1),
        (r.defined = !1);
      function n(a, l) {
        (this.property = a), (this.attribute = l);
      }
    },
  }),
  _o = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/util/types.js"(
      e,
    ) {
      var t = 0;
      (e.boolean = r()),
        (e.booleanish = r()),
        (e.overloadedBoolean = r()),
        (e.number = r()),
        (e.spaceSeparated = r()),
        (e.commaSeparated = r()),
        (e.commaOrSpaceSeparated = r());
      function r() {
        return Math.pow(2, ++t);
      }
    },
  }),
  ps = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/util/defined-info.js"(
      e,
      t,
    ) {
      var r = us(),
        n = _o();
      (t.exports = i), (i.prototype = new r()), (i.prototype.defined = !0);
      var a = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated",
        ],
        l = a.length;
      function i(s, d, p, h) {
        var m = -1,
          f;
        for (c(this, "space", h), r.call(this, s, d); ++m < l; )
          (f = a[m]), c(this, f, (p & n[f]) === n[f]);
      }
      function c(s, d, p) {
        p && (s[d] = p);
      }
    },
  }),
  Dr = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/util/create.js"(
      e,
      t,
    ) {
      var r = Ao(),
        n = ds(),
        a = ps();
      t.exports = l;
      function l(i) {
        var c = i.space,
          s = i.mustUseProperty || [],
          d = i.attributes || {},
          p = i.properties,
          h = i.transform,
          m = {},
          f = {},
          v,
          g;
        for (v in p)
          (g = new a(v, h(d, v), p[v], c)),
            s.indexOf(v) !== -1 && (g.mustUseProperty = !0),
            (m[v] = g),
            (f[r(v)] = v),
            (f[r(g.attribute)] = v);
        return new n(m, f, c);
      }
    },
  }),
  a5 = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/xlink.js"(
      e,
      t,
    ) {
      var r = Dr();
      t.exports = r({
        space: "xlink",
        transform: n,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
      function n(a, l) {
        return "xlink:" + l.slice(5).toLowerCase();
      }
    },
  }),
  o5 = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/xml.js"(
      e,
      t,
    ) {
      var r = Dr();
      t.exports = r({
        space: "xml",
        transform: n,
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
      function n(a, l) {
        return "xml:" + l.slice(3).toLowerCase();
      }
    },
  }),
  l5 = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/util/case-sensitive-transform.js"(
      e,
      t,
    ) {
      t.exports = r;
      function r(n, a) {
        return a in n ? n[a] : a;
      }
    },
  }),
  fs = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/util/case-insensitive-transform.js"(
      e,
      t,
    ) {
      var r = l5();
      t.exports = n;
      function n(a, l) {
        return r(a, l.toLowerCase());
      }
    },
  }),
  i5 = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/xmlns.js"(
      e,
      t,
    ) {
      var r = Dr(),
        n = fs();
      t.exports = r({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: n,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
  }),
  s5 = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/aria.js"(
      e,
      t,
    ) {
      var r = _o(),
        n = Dr(),
        a = r.booleanish,
        l = r.number,
        i = r.spaceSeparated;
      t.exports = n({
        transform: c,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: a,
          ariaAutoComplete: null,
          ariaBusy: a,
          ariaChecked: a,
          ariaColCount: l,
          ariaColIndex: l,
          ariaColSpan: l,
          ariaControls: i,
          ariaCurrent: null,
          ariaDescribedBy: i,
          ariaDetails: null,
          ariaDisabled: a,
          ariaDropEffect: i,
          ariaErrorMessage: null,
          ariaExpanded: a,
          ariaFlowTo: i,
          ariaGrabbed: a,
          ariaHasPopup: null,
          ariaHidden: a,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: i,
          ariaLevel: l,
          ariaLive: null,
          ariaModal: a,
          ariaMultiLine: a,
          ariaMultiSelectable: a,
          ariaOrientation: null,
          ariaOwns: i,
          ariaPlaceholder: null,
          ariaPosInSet: l,
          ariaPressed: a,
          ariaReadOnly: a,
          ariaRelevant: null,
          ariaRequired: a,
          ariaRoleDescription: i,
          ariaRowCount: l,
          ariaRowIndex: l,
          ariaRowSpan: l,
          ariaSelected: a,
          ariaSetSize: l,
          ariaSort: null,
          ariaValueMax: l,
          ariaValueMin: l,
          ariaValueNow: l,
          ariaValueText: null,
          role: null,
        },
      });
      function c(s, d) {
        return d === "role" ? d : "aria-" + d.slice(4).toLowerCase();
      }
    },
  }),
  c5 = N({
    "../../node_modules/hastscript/node_modules/property-information/lib/html.js"(
      e,
      t,
    ) {
      var r = _o(),
        n = Dr(),
        a = fs(),
        l = r.boolean,
        i = r.overloadedBoolean,
        c = r.booleanish,
        s = r.number,
        d = r.spaceSeparated,
        p = r.commaSeparated;
      t.exports = n({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        transform: a,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: p,
          acceptCharset: d,
          accessKey: d,
          action: null,
          allow: null,
          allowFullScreen: l,
          allowPaymentRequest: l,
          allowUserMedia: l,
          alt: null,
          as: null,
          async: l,
          autoCapitalize: null,
          autoComplete: d,
          autoFocus: l,
          autoPlay: l,
          capture: l,
          charSet: null,
          checked: l,
          cite: null,
          className: d,
          cols: s,
          colSpan: null,
          content: null,
          contentEditable: c,
          controls: l,
          controlsList: d,
          coords: s | p,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: l,
          defer: l,
          dir: null,
          dirName: null,
          disabled: l,
          download: i,
          draggable: c,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: l,
          formTarget: null,
          headers: d,
          height: s,
          hidden: l,
          high: s,
          href: null,
          hrefLang: null,
          htmlFor: d,
          httpEquiv: d,
          id: null,
          imageSizes: null,
          imageSrcSet: p,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: l,
          itemId: null,
          itemProp: d,
          itemRef: d,
          itemScope: l,
          itemType: d,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: l,
          low: s,
          manifest: null,
          max: null,
          maxLength: s,
          media: null,
          method: null,
          min: null,
          minLength: s,
          multiple: l,
          muted: l,
          name: null,
          nonce: null,
          noModule: l,
          noValidate: l,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: l,
          optimum: s,
          pattern: null,
          ping: d,
          placeholder: null,
          playsInline: l,
          poster: null,
          preload: null,
          readOnly: l,
          referrerPolicy: null,
          rel: d,
          required: l,
          reversed: l,
          rows: s,
          rowSpan: s,
          sandbox: d,
          scope: null,
          scoped: l,
          seamless: l,
          selected: l,
          shape: null,
          size: s,
          sizes: null,
          slot: null,
          span: s,
          spellCheck: c,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: p,
          start: s,
          step: null,
          style: null,
          tabIndex: s,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: l,
          useMap: null,
          value: c,
          width: s,
          wrap: null,
          align: null,
          aLink: null,
          archive: d,
          axis: null,
          background: null,
          bgColor: null,
          border: s,
          borderColor: null,
          bottomMargin: s,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: l,
          declare: l,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: s,
          leftMargin: s,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: s,
          marginWidth: s,
          noResize: l,
          noHref: l,
          noShade: l,
          noWrap: l,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: s,
          rules: null,
          scheme: null,
          scrolling: c,
          standby: null,
          summary: null,
          text: null,
          topMargin: s,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: s,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: l,
          disableRemotePlayback: l,
          prefix: null,
          property: null,
          results: s,
          security: null,
          unselectable: null,
        },
      });
    },
  }),
  d5 = N({
    "../../node_modules/hastscript/node_modules/property-information/html.js"(
      e,
      t,
    ) {
      var r = n5(),
        n = a5(),
        a = o5(),
        l = i5(),
        i = s5(),
        c = c5();
      t.exports = r([a, n, l, i, c]);
    },
  }),
  u5 = N({
    "../../node_modules/hastscript/node_modules/property-information/find.js"(
      e,
      t,
    ) {
      var r = Ao(),
        n = ps(),
        a = us(),
        l = "data";
      t.exports = d;
      var i = /^data[-\w.:]+$/i,
        c = /-[a-z]/g,
        s = /[A-Z]/g;
      function d(v, g) {
        var E = r(g),
          x = g,
          y = a;
        return E in v.normal
          ? v.property[v.normal[E]]
          : (E.length > 4 &&
              E.slice(0, 4) === l &&
              i.test(g) &&
              (g.charAt(4) === "-" ? (x = p(g)) : (g = h(g)), (y = n)),
            new y(x, g));
      }
      function p(v) {
        var g = v.slice(5).replace(c, f);
        return l + g.charAt(0).toUpperCase() + g.slice(1);
      }
      function h(v) {
        var g = v.slice(4);
        return c.test(g)
          ? v
          : ((g = g.replace(s, m)),
            g.charAt(0) !== "-" && (g = "-" + g),
            l + g);
      }
      function m(v) {
        return "-" + v.toLowerCase();
      }
      function f(v) {
        return v.charAt(1).toUpperCase();
      }
    },
  }),
  p5 = N({
    "../../node_modules/hast-util-parse-selector/index.js"(e, t) {
      t.exports = n;
      var r = /[#.]/g;
      function n(a, l) {
        for (
          var i = a || "", c = l || "div", s = {}, d = 0, p, h, m;
          d < i.length;

        )
          (r.lastIndex = d),
            (m = r.exec(i)),
            (p = i.slice(d, m ? m.index : i.length)),
            p &&
              (h
                ? h === "#"
                  ? (s.id = p)
                  : s.className
                    ? s.className.push(p)
                    : (s.className = [p])
                : (c = p),
              (d += p.length)),
            m && ((h = m[0]), d++);
        return { type: "element", tagName: c, properties: s, children: [] };
      }
    },
  }),
  f5 = N({
    "../../node_modules/hastscript/node_modules/space-separated-tokens/index.js"(
      e,
    ) {
      (e.parse = a), (e.stringify = l);
      var t = "",
        r = " ",
        n = /[ \t\n\r\f]+/g;
      function a(i) {
        var c = String(i || t).trim();
        return c === t ? [] : c.split(n);
      }
      function l(i) {
        return i.join(r).trim();
      }
    },
  }),
  h5 = N({
    "../../node_modules/hastscript/node_modules/comma-separated-tokens/index.js"(
      e,
    ) {
      (e.parse = a), (e.stringify = l);
      var t = ",",
        r = " ",
        n = "";
      function a(i) {
        for (
          var c = [], s = String(i || n), d = s.indexOf(t), p = 0, h = !1, m;
          !h;

        )
          d === -1 && ((d = s.length), (h = !0)),
            (m = s.slice(p, d).trim()),
            (m || !h) && c.push(m),
            (p = d + 1),
            (d = s.indexOf(t, p));
        return c;
      }
      function l(i, c) {
        var s = c || {},
          d = s.padLeft === !1 ? n : r,
          p = s.padRight ? r : n;
        return (
          i[i.length - 1] === n && (i = i.concat(n)), i.join(p + t + d).trim()
        );
      }
    },
  }),
  g5 = N({
    "../../node_modules/hastscript/factory.js"(e, t) {
      var r = u5(),
        n = Ao(),
        a = p5(),
        l = f5().parse,
        i = h5().parse;
      t.exports = s;
      var c = {}.hasOwnProperty;
      function s(E, x, y) {
        var b = y ? g(y) : null;
        return w;
        function w(C, R) {
          var I = a(C, x),
            _ = Array.prototype.slice.call(arguments, 2),
            k = I.tagName.toLowerCase(),
            O;
          if (
            ((I.tagName = b && c.call(b, k) ? b[k] : k),
            R && d(R, I) && (_.unshift(R), (R = null)),
            R)
          )
            for (O in R) S(I.properties, O, R[O]);
          return (
            h(I.children, _),
            I.tagName === "template" &&
              ((I.content = { type: "root", children: I.children }),
              (I.children = [])),
            I
          );
        }
        function S(C, R, I) {
          var _, k, O;
          I == null ||
            I !== I ||
            ((_ = r(E, R)),
            (k = _.property),
            (O = I),
            typeof O == "string" &&
              (_.spaceSeparated
                ? (O = l(O))
                : _.commaSeparated
                  ? (O = i(O))
                  : _.commaOrSpaceSeparated && (O = l(i(O).join(" ")))),
            k === "style" && typeof I != "string" && (O = v(O)),
            k === "className" && C.className && (O = C.className.concat(O)),
            (C[k] = m(_, k, O)));
        }
      }
      function d(E, x) {
        return typeof E == "string" || "length" in E || p(x.tagName, E);
      }
      function p(E, x) {
        var y = x.type;
        return E === "input" || !y || typeof y != "string"
          ? !1
          : typeof x.children == "object" && "length" in x.children
            ? !0
            : ((y = y.toLowerCase()),
              E === "button"
                ? y !== "menu" &&
                  y !== "submit" &&
                  y !== "reset" &&
                  y !== "button"
                : "value" in x);
      }
      function h(E, x) {
        var y, b;
        if (typeof x == "string" || typeof x == "number") {
          E.push({ type: "text", value: String(x) });
          return;
        }
        if (typeof x == "object" && "length" in x) {
          for (y = -1, b = x.length; ++y < b; ) h(E, x[y]);
          return;
        }
        if (typeof x != "object" || !("type" in x))
          throw new Error("Expected node, nodes, or string, got `" + x + "`");
        E.push(x);
      }
      function m(E, x, y) {
        var b, w, S;
        if (typeof y != "object" || !("length" in y)) return f(E, x, y);
        for (w = y.length, b = -1, S = []; ++b < w; ) S[b] = f(E, x, y[b]);
        return S;
      }
      function f(E, x, y) {
        var b = y;
        return (
          E.number || E.positiveNumber
            ? !isNaN(b) && b !== "" && (b = Number(b))
            : (E.boolean || E.overloadedBoolean) &&
              typeof b == "string" &&
              (b === "" || n(y) === n(x)) &&
              (b = !0),
          b
        );
      }
      function v(E) {
        var x = [],
          y;
        for (y in E) x.push([y, E[y]].join(": "));
        return x.join("; ");
      }
      function g(E) {
        for (var x = E.length, y = -1, b = {}, w; ++y < x; )
          (w = E[y]), (b[w.toLowerCase()] = w);
        return b;
      }
    },
  }),
  m5 = N({
    "../../node_modules/hastscript/html.js"(e, t) {
      var r = d5(),
        n = g5(),
        a = n(r, "div");
      (a.displayName = "html"), (t.exports = a);
    },
  }),
  v5 = N({
    "../../node_modules/hastscript/index.js"(e, t) {
      t.exports = m5();
    },
  }),
  b5 = N({
    "../../node_modules/refractor/node_modules/character-entities-legacy/index.json"(
      e,
      t,
    ) {
      t.exports = {
        AElig: "Æ",
        AMP: "&",
        Aacute: "Á",
        Acirc: "Â",
        Agrave: "À",
        Aring: "Å",
        Atilde: "Ã",
        Auml: "Ä",
        COPY: "©",
        Ccedil: "Ç",
        ETH: "Ð",
        Eacute: "É",
        Ecirc: "Ê",
        Egrave: "È",
        Euml: "Ë",
        GT: ">",
        Iacute: "Í",
        Icirc: "Î",
        Igrave: "Ì",
        Iuml: "Ï",
        LT: "<",
        Ntilde: "Ñ",
        Oacute: "Ó",
        Ocirc: "Ô",
        Ograve: "Ò",
        Oslash: "Ø",
        Otilde: "Õ",
        Ouml: "Ö",
        QUOT: '"',
        REG: "®",
        THORN: "Þ",
        Uacute: "Ú",
        Ucirc: "Û",
        Ugrave: "Ù",
        Uuml: "Ü",
        Yacute: "Ý",
        aacute: "á",
        acirc: "â",
        acute: "´",
        aelig: "æ",
        agrave: "à",
        amp: "&",
        aring: "å",
        atilde: "ã",
        auml: "ä",
        brvbar: "¦",
        ccedil: "ç",
        cedil: "¸",
        cent: "¢",
        copy: "©",
        curren: "¤",
        deg: "°",
        divide: "÷",
        eacute: "é",
        ecirc: "ê",
        egrave: "è",
        eth: "ð",
        euml: "ë",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        gt: ">",
        iacute: "í",
        icirc: "î",
        iexcl: "¡",
        igrave: "ì",
        iquest: "¿",
        iuml: "ï",
        laquo: "«",
        lt: "<",
        macr: "¯",
        micro: "µ",
        middot: "·",
        nbsp: " ",
        not: "¬",
        ntilde: "ñ",
        oacute: "ó",
        ocirc: "ô",
        ograve: "ò",
        ordf: "ª",
        ordm: "º",
        oslash: "ø",
        otilde: "õ",
        ouml: "ö",
        para: "¶",
        plusmn: "±",
        pound: "£",
        quot: '"',
        raquo: "»",
        reg: "®",
        sect: "§",
        shy: "­",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        szlig: "ß",
        thorn: "þ",
        times: "×",
        uacute: "ú",
        ucirc: "û",
        ugrave: "ù",
        uml: "¨",
        uuml: "ü",
        yacute: "ý",
        yen: "¥",
        yuml: "ÿ",
      };
    },
  }),
  y5 = N({
    "../../node_modules/refractor/node_modules/character-reference-invalid/index.json"(
      e,
      t,
    ) {
      t.exports = {
        0: "�",
        128: "€",
        130: "‚",
        131: "ƒ",
        132: "„",
        133: "…",
        134: "†",
        135: "‡",
        136: "ˆ",
        137: "‰",
        138: "Š",
        139: "‹",
        140: "Œ",
        142: "Ž",
        145: "‘",
        146: "’",
        147: "“",
        148: "”",
        149: "•",
        150: "–",
        151: "—",
        152: "˜",
        153: "™",
        154: "š",
        155: "›",
        156: "œ",
        158: "ž",
        159: "Ÿ",
      };
    },
  }),
  hs = N({
    "../../node_modules/refractor/node_modules/is-decimal/index.js"(e, t) {
      t.exports = r;
      function r(n) {
        var a = typeof n == "string" ? n.charCodeAt(0) : n;
        return a >= 48 && a <= 57;
      }
    },
  }),
  w5 = N({
    "../../node_modules/refractor/node_modules/is-hexadecimal/index.js"(e, t) {
      t.exports = r;
      function r(n) {
        var a = typeof n == "string" ? n.charCodeAt(0) : n;
        return (
          (a >= 97 && a <= 102) || (a >= 65 && a <= 70) || (a >= 48 && a <= 57)
        );
      }
    },
  }),
  x5 = N({
    "../../node_modules/refractor/node_modules/is-alphabetical/index.js"(e, t) {
      t.exports = r;
      function r(n) {
        var a = typeof n == "string" ? n.charCodeAt(0) : n;
        return (a >= 97 && a <= 122) || (a >= 65 && a <= 90);
      }
    },
  }),
  E5 = N({
    "../../node_modules/refractor/node_modules/is-alphanumerical/index.js"(
      e,
      t,
    ) {
      var r = x5(),
        n = hs();
      t.exports = a;
      function a(l) {
        return r(l) || n(l);
      }
    },
  }),
  S5 = N({
    "../../node_modules/refractor/node_modules/parse-entities/decode-entity.browser.js"(
      e,
      t,
    ) {
      var r,
        n = 59;
      t.exports = a;
      function a(l) {
        var i = "&" + l + ";",
          c;
        return (
          (r = r || document.createElement("i")),
          (r.innerHTML = i),
          (c = r.textContent),
          (c.charCodeAt(c.length - 1) === n && l !== "semi") || c === i ? !1 : c
        );
      }
    },
  }),
  C5 = N({
    "../../node_modules/refractor/node_modules/parse-entities/index.js"(e, t) {
      var r = b5(),
        n = y5(),
        a = hs(),
        l = w5(),
        i = E5(),
        c = S5();
      t.exports = Z;
      var s = {}.hasOwnProperty,
        d = String.fromCharCode,
        p = Function.prototype,
        h = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        m = 9,
        f = 10,
        v = 12,
        g = 32,
        E = 38,
        x = 59,
        y = 60,
        b = 61,
        w = 35,
        S = 88,
        C = 120,
        R = 65533,
        I = "named",
        _ = "hexadecimal",
        k = "decimal",
        O = {};
      (O[_] = 16), (O[k] = 10);
      var T = {};
      (T[I] = i), (T[k] = a), (T[_] = l);
      var M = 1,
        F = 2,
        $ = 3,
        L = 4,
        j = 5,
        V = 6,
        P = 7,
        D = {};
      (D[M] = "Named character references must be terminated by a semicolon"),
        (D[F] =
          "Numeric character references must be terminated by a semicolon"),
        (D[$] = "Named character references cannot be empty"),
        (D[L] = "Numeric character references cannot be empty"),
        (D[j] = "Named character references must be known"),
        (D[V] = "Numeric character references cannot be disallowed"),
        (D[P] =
          "Numeric character references cannot be outside the permissible Unicode range");
      function Z(B, U) {
        var q = {},
          se,
          ve;
        U || (U = {});
        for (ve in h) (se = U[ve]), (q[ve] = se ?? h[ve]);
        return (
          (q.position.indent || q.position.start) &&
            ((q.indent = q.position.indent || []),
            (q.position = q.position.start)),
          ne(B, q)
        );
      }
      function ne(B, U) {
        var q = U.additional,
          se = U.nonTerminated,
          ve = U.text,
          lt = U.reference,
          _e = U.warning,
          je = U.textContext,
          z = U.referenceContext,
          Pe = U.warningContext,
          Ne = U.position,
          St = U.indent || [],
          Wt = B.length,
          De = 0,
          Kr = -1,
          be = Ne.column || 1,
          Ct = Ne.line || 1,
          Ve = "",
          qt = [],
          Ue,
          Gt,
          We,
          pe,
          He,
          ce,
          ae,
          qe,
          Xr,
          Qn,
          Rt,
          mr,
          It,
          it,
          Al,
          vr,
          Zr,
          Ge,
          de;
        for (
          typeof q == "string" && (q = q.charCodeAt(0)),
            vr = br(),
            qe = _e ? X1 : p,
            De--,
            Wt++;
          ++De < Wt;

        )
          if (
            (He === f && (be = St[Kr] || 1), (He = B.charCodeAt(De)), He === E)
          ) {
            if (
              ((ae = B.charCodeAt(De + 1)),
              ae === m ||
                ae === f ||
                ae === v ||
                ae === g ||
                ae === E ||
                ae === y ||
                ae !== ae ||
                (q && ae === q))
            ) {
              (Ve += d(He)), be++;
              continue;
            }
            for (
              It = De + 1,
                mr = It,
                de = It,
                ae === w
                  ? ((de = ++mr),
                    (ae = B.charCodeAt(de)),
                    ae === S || ae === C ? ((it = _), (de = ++mr)) : (it = k))
                  : (it = I),
                Ue = "",
                Rt = "",
                pe = "",
                Al = T[it],
                de--;
              ++de < Wt && ((ae = B.charCodeAt(de)), !!Al(ae));

            )
              (pe += d(ae)),
                it === I && s.call(r, pe) && ((Ue = pe), (Rt = r[pe]));
            (We = B.charCodeAt(de) === x),
              We &&
                (de++,
                (Gt = it === I ? c(pe) : !1),
                Gt && ((Ue = pe), (Rt = Gt))),
              (Ge = 1 + de - It),
              (!We && !se) ||
                (pe
                  ? it === I
                    ? (We && !Rt
                        ? qe(j, 1)
                        : (Ue !== pe &&
                            ((de = mr + Ue.length),
                            (Ge = 1 + de - mr),
                            (We = !1)),
                          We ||
                            ((Xr = Ue ? M : $),
                            U.attribute
                              ? ((ae = B.charCodeAt(de)),
                                ae === b
                                  ? (qe(Xr, Ge), (Rt = null))
                                  : i(ae)
                                    ? (Rt = null)
                                    : qe(Xr, Ge))
                              : qe(Xr, Ge))),
                      (ce = Rt))
                    : (We || qe(F, Ge),
                      (ce = parseInt(pe, O[it])),
                      X(ce)
                        ? (qe(P, Ge), (ce = d(R)))
                        : ce in n
                          ? (qe(V, Ge), (ce = n[ce]))
                          : ((Qn = ""),
                            J(ce) && qe(V, Ge),
                            ce > 65535 &&
                              ((ce -= 65536),
                              (Qn += d((ce >>> 10) | 55296)),
                              (ce = 56320 | (ce & 1023))),
                            (ce = Qn + d(ce))))
                  : it !== I && qe(L, Ge)),
              ce
                ? (_l(),
                  (vr = br()),
                  (De = de - 1),
                  (be += de - It + 1),
                  qt.push(ce),
                  (Zr = br()),
                  Zr.offset++,
                  lt &&
                    lt.call(z, ce, { start: vr, end: Zr }, B.slice(It - 1, de)),
                  (vr = Zr))
                : ((pe = B.slice(It - 1, de)),
                  (Ve += pe),
                  (be += pe.length),
                  (De = de - 1));
          } else
            He === 10 && (Ct++, Kr++, (be = 0)),
              He === He ? ((Ve += d(He)), be++) : _l();
        return qt.join("");
        function br() {
          return { line: Ct, column: be, offset: De + (Ne.offset || 0) };
        }
        function X1(kl, Ol) {
          var ea = br();
          (ea.column += Ol), (ea.offset += Ol), _e.call(Pe, D[kl], ea, kl);
        }
        function _l() {
          Ve &&
            (qt.push(Ve),
            ve && ve.call(je, Ve, { start: vr, end: br() }),
            (Ve = ""));
        }
      }
      function X(B) {
        return (B >= 55296 && B <= 57343) || B > 1114111;
      }
      function J(B) {
        return (
          (B >= 1 && B <= 8) ||
          B === 11 ||
          (B >= 13 && B <= 31) ||
          (B >= 127 && B <= 159) ||
          (B >= 64976 && B <= 65007) ||
          (B & 65535) === 65535 ||
          (B & 65535) === 65534
        );
      }
    },
  }),
  R5 = N({
    "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(
      e,
      t,
    ) {
      var r =
          typeof window < "u"
            ? window
            : typeof WorkerGlobalScope < "u" &&
                self instanceof WorkerGlobalScope
              ? self
              : {},
        n = (function (a) {
          var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            i = 0,
            c = {},
            s = {
              manual: a.Prism && a.Prism.manual,
              disableWorkerMessageHandler:
                a.Prism && a.Prism.disableWorkerMessageHandler,
              util: {
                encode: function b(w) {
                  return w instanceof d
                    ? new d(w.type, b(w.content), w.alias)
                    : Array.isArray(w)
                      ? w.map(b)
                      : w
                          .replace(/&/g, "&amp;")
                          .replace(/</g, "&lt;")
                          .replace(/\u00a0/g, " ");
                },
                type: function (b) {
                  return Object.prototype.toString.call(b).slice(8, -1);
                },
                objId: function (b) {
                  return (
                    b.__id || Object.defineProperty(b, "__id", { value: ++i }),
                    b.__id
                  );
                },
                clone: function b(w, S) {
                  S = S || {};
                  var C, R;
                  switch (s.util.type(w)) {
                    case "Object":
                      if (((R = s.util.objId(w)), S[R])) return S[R];
                      (C = {}), (S[R] = C);
                      for (var I in w)
                        w.hasOwnProperty(I) && (C[I] = b(w[I], S));
                      return C;
                    case "Array":
                      return (
                        (R = s.util.objId(w)),
                        S[R]
                          ? S[R]
                          : ((C = []),
                            (S[R] = C),
                            w.forEach(function (_, k) {
                              C[k] = b(_, S);
                            }),
                            C)
                      );
                    default:
                      return w;
                  }
                },
                getLanguage: function (b) {
                  for (; b; ) {
                    var w = l.exec(b.className);
                    if (w) return w[1].toLowerCase();
                    b = b.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (b, w) {
                  (b.className = b.className.replace(RegExp(l, "gi"), "")),
                    b.classList.add("language-" + w);
                },
                currentScript: function () {
                  if (typeof document > "u") return null;
                  if ("currentScript" in document)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (C) {
                    var b = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      C.stack,
                    ) || [])[1];
                    if (b) {
                      var w = document.getElementsByTagName("script");
                      for (var S in w) if (w[S].src == b) return w[S];
                    }
                    return null;
                  }
                },
                isActive: function (b, w, S) {
                  for (var C = "no-" + w; b; ) {
                    var R = b.classList;
                    if (R.contains(w)) return !0;
                    if (R.contains(C)) return !1;
                    b = b.parentElement;
                  }
                  return !!S;
                },
              },
              languages: {
                plain: c,
                plaintext: c,
                text: c,
                txt: c,
                extend: function (b, w) {
                  var S = s.util.clone(s.languages[b]);
                  for (var C in w) S[C] = w[C];
                  return S;
                },
                insertBefore: function (b, w, S, C) {
                  C = C || s.languages;
                  var R = C[b],
                    I = {};
                  for (var _ in R)
                    if (R.hasOwnProperty(_)) {
                      if (_ == w)
                        for (var k in S) S.hasOwnProperty(k) && (I[k] = S[k]);
                      S.hasOwnProperty(_) || (I[_] = R[_]);
                    }
                  var O = C[b];
                  return (
                    (C[b] = I),
                    s.languages.DFS(s.languages, function (T, M) {
                      M === O && T != b && (this[T] = I);
                    }),
                    I
                  );
                },
                DFS: function b(w, S, C, R) {
                  R = R || {};
                  var I = s.util.objId;
                  for (var _ in w)
                    if (w.hasOwnProperty(_)) {
                      S.call(w, _, w[_], C || _);
                      var k = w[_],
                        O = s.util.type(k);
                      O === "Object" && !R[I(k)]
                        ? ((R[I(k)] = !0), b(k, S, null, R))
                        : O === "Array" &&
                          !R[I(k)] &&
                          ((R[I(k)] = !0), b(k, S, _, R));
                    }
                },
              },
              plugins: {},
              highlightAll: function (b, w) {
                s.highlightAllUnder(document, b, w);
              },
              highlightAllUnder: function (b, w, S) {
                var C = {
                  callback: S,
                  container: b,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                s.hooks.run("before-highlightall", C),
                  (C.elements = Array.prototype.slice.apply(
                    C.container.querySelectorAll(C.selector),
                  )),
                  s.hooks.run("before-all-elements-highlight", C);
                for (var R = 0, I; (I = C.elements[R++]); )
                  s.highlightElement(I, w === !0, C.callback);
              },
              highlightElement: function (b, w, S) {
                var C = s.util.getLanguage(b),
                  R = s.languages[C];
                s.util.setLanguage(b, C);
                var I = b.parentElement;
                I &&
                  I.nodeName.toLowerCase() === "pre" &&
                  s.util.setLanguage(I, C);
                var _ = b.textContent,
                  k = { element: b, language: C, grammar: R, code: _ };
                function O(M) {
                  (k.highlightedCode = M),
                    s.hooks.run("before-insert", k),
                    (k.element.innerHTML = k.highlightedCode),
                    s.hooks.run("after-highlight", k),
                    s.hooks.run("complete", k),
                    S && S.call(k.element);
                }
                if (
                  (s.hooks.run("before-sanity-check", k),
                  (I = k.element.parentElement),
                  I &&
                    I.nodeName.toLowerCase() === "pre" &&
                    !I.hasAttribute("tabindex") &&
                    I.setAttribute("tabindex", "0"),
                  !k.code)
                ) {
                  s.hooks.run("complete", k), S && S.call(k.element);
                  return;
                }
                if ((s.hooks.run("before-highlight", k), !k.grammar)) {
                  O(s.util.encode(k.code));
                  return;
                }
                if (w && a.Worker) {
                  var T = new Worker(s.filename);
                  (T.onmessage = function (M) {
                    O(M.data);
                  }),
                    T.postMessage(
                      JSON.stringify({
                        language: k.language,
                        code: k.code,
                        immediateClose: !0,
                      }),
                    );
                } else O(s.highlight(k.code, k.grammar, k.language));
              },
              highlight: function (b, w, S) {
                var C = { code: b, grammar: w, language: S };
                if ((s.hooks.run("before-tokenize", C), !C.grammar))
                  throw new Error(
                    'The language "' + C.language + '" has no grammar.',
                  );
                return (
                  (C.tokens = s.tokenize(C.code, C.grammar)),
                  s.hooks.run("after-tokenize", C),
                  d.stringify(s.util.encode(C.tokens), C.language)
                );
              },
              tokenize: function (b, w) {
                var S = w.rest;
                if (S) {
                  for (var C in S) w[C] = S[C];
                  delete w.rest;
                }
                var R = new m();
                return f(R, R.head, b), h(b, R, w, R.head, 0), g(R);
              },
              hooks: {
                all: {},
                add: function (b, w) {
                  var S = s.hooks.all;
                  (S[b] = S[b] || []), S[b].push(w);
                },
                run: function (b, w) {
                  var S = s.hooks.all[b];
                  if (!(!S || !S.length))
                    for (var C = 0, R; (R = S[C++]); ) R(w);
                },
              },
              Token: d,
            };
          a.Prism = s;
          function d(b, w, S, C) {
            (this.type = b),
              (this.content = w),
              (this.alias = S),
              (this.length = (C || "").length | 0);
          }
          d.stringify = function b(w, S) {
            if (typeof w == "string") return w;
            if (Array.isArray(w)) {
              var C = "";
              return (
                w.forEach(function (O) {
                  C += b(O, S);
                }),
                C
              );
            }
            var R = {
                type: w.type,
                content: b(w.content, S),
                tag: "span",
                classes: ["token", w.type],
                attributes: {},
                language: S,
              },
              I = w.alias;
            I &&
              (Array.isArray(I)
                ? Array.prototype.push.apply(R.classes, I)
                : R.classes.push(I)),
              s.hooks.run("wrap", R);
            var _ = "";
            for (var k in R.attributes)
              _ +=
                " " +
                k +
                '="' +
                (R.attributes[k] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              R.tag +
              ' class="' +
              R.classes.join(" ") +
              '"' +
              _ +
              ">" +
              R.content +
              "</" +
              R.tag +
              ">"
            );
          };
          function p(b, w, S, C) {
            b.lastIndex = w;
            var R = b.exec(S);
            if (R && C && R[1]) {
              var I = R[1].length;
              (R.index += I), (R[0] = R[0].slice(I));
            }
            return R;
          }
          function h(b, w, S, C, R, I) {
            for (var _ in S)
              if (!(!S.hasOwnProperty(_) || !S[_])) {
                var k = S[_];
                k = Array.isArray(k) ? k : [k];
                for (var O = 0; O < k.length; ++O) {
                  if (I && I.cause == _ + "," + O) return;
                  var T = k[O],
                    M = T.inside,
                    F = !!T.lookbehind,
                    $ = !!T.greedy,
                    L = T.alias;
                  if ($ && !T.pattern.global) {
                    var j = T.pattern.toString().match(/[imsuy]*$/)[0];
                    T.pattern = RegExp(T.pattern.source, j + "g");
                  }
                  for (
                    var V = T.pattern || T, P = C.next, D = R;
                    P !== w.tail && !(I && D >= I.reach);
                    D += P.value.length, P = P.next
                  ) {
                    var Z = P.value;
                    if (w.length > b.length) return;
                    if (!(Z instanceof d)) {
                      var ne = 1,
                        X;
                      if ($) {
                        if (((X = p(V, D, b, F)), !X || X.index >= b.length))
                          break;
                        var q = X.index,
                          J = X.index + X[0].length,
                          B = D;
                        for (B += P.value.length; q >= B; )
                          (P = P.next), (B += P.value.length);
                        if (
                          ((B -= P.value.length), (D = B), P.value instanceof d)
                        )
                          continue;
                        for (
                          var U = P;
                          U !== w.tail && (B < J || typeof U.value == "string");
                          U = U.next
                        )
                          ne++, (B += U.value.length);
                        ne--, (Z = b.slice(D, B)), (X.index -= D);
                      } else if (((X = p(V, 0, Z, F)), !X)) continue;
                      var q = X.index,
                        se = X[0],
                        ve = Z.slice(0, q),
                        lt = Z.slice(q + se.length),
                        _e = D + Z.length;
                      I && _e > I.reach && (I.reach = _e);
                      var je = P.prev;
                      ve && ((je = f(w, je, ve)), (D += ve.length)),
                        v(w, je, ne);
                      var z = new d(_, M ? s.tokenize(se, M) : se, L, se);
                      if (((P = f(w, je, z)), lt && f(w, P, lt), ne > 1)) {
                        var Pe = { cause: _ + "," + O, reach: _e };
                        h(b, w, S, P.prev, D, Pe),
                          I && Pe.reach > I.reach && (I.reach = Pe.reach);
                      }
                    }
                  }
                }
              }
          }
          function m() {
            var b = { value: null, prev: null, next: null },
              w = { value: null, prev: b, next: null };
            (b.next = w), (this.head = b), (this.tail = w), (this.length = 0);
          }
          function f(b, w, S) {
            var C = w.next,
              R = { value: S, prev: w, next: C };
            return (w.next = R), (C.prev = R), b.length++, R;
          }
          function v(b, w, S) {
            for (var C = w.next, R = 0; R < S && C !== b.tail; R++) C = C.next;
            (w.next = C), (C.prev = w), (b.length -= R);
          }
          function g(b) {
            for (var w = [], S = b.head.next; S !== b.tail; )
              w.push(S.value), (S = S.next);
            return w;
          }
          if (!a.document)
            return (
              a.addEventListener &&
                (s.disableWorkerMessageHandler ||
                  a.addEventListener(
                    "message",
                    function (b) {
                      var w = JSON.parse(b.data),
                        S = w.language,
                        C = w.code,
                        R = w.immediateClose;
                      a.postMessage(s.highlight(C, s.languages[S], S)),
                        R && a.close();
                    },
                    !1,
                  )),
              s
            );
          var E = s.util.currentScript();
          E &&
            ((s.filename = E.src),
            E.hasAttribute("data-manual") && (s.manual = !0));
          function x() {
            s.manual || s.highlightAll();
          }
          if (!s.manual) {
            var y = document.readyState;
            y === "loading" || (y === "interactive" && E && E.defer)
              ? document.addEventListener("DOMContentLoaded", x)
              : window.requestAnimationFrame
                ? window.requestAnimationFrame(x)
                : window.setTimeout(x, 16);
          }
          return s;
        })(r);
      typeof t < "u" && t.exports && (t.exports = n),
        typeof global < "u" && (global.Prism = n);
    },
  }),
  I5 = N({
    "../../node_modules/refractor/core.js"(e, t) {
      var r =
          typeof globalThis == "object"
            ? globalThis
            : typeof self == "object"
              ? self
              : typeof window == "object"
                ? window
                : typeof global == "object"
                  ? global
                  : {},
        n = R();
      r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var a = v5(),
        l = C5(),
        i = R5(),
        c = cs(),
        s = ss(),
        d = e5(),
        p = t5();
      n();
      var h = {}.hasOwnProperty;
      function m() {}
      m.prototype = i;
      var f = new m();
      (t.exports = f),
        (f.highlight = E),
        (f.register = v),
        (f.alias = g),
        (f.registered = x),
        (f.listLanguages = y),
        v(c),
        v(s),
        v(d),
        v(p),
        (f.util.encode = S),
        (f.Token.stringify = b);
      function v(I) {
        if (typeof I != "function" || !I.displayName)
          throw new Error("Expected `function` for `grammar`, got `" + I + "`");
        f.languages[I.displayName] === void 0 && I(f);
      }
      function g(I, _) {
        var k = f.languages,
          O = I,
          T,
          M,
          F,
          $;
        _ && ((O = {}), (O[I] = _));
        for (T in O)
          for (
            M = O[T], M = typeof M == "string" ? [M] : M, F = M.length, $ = -1;
            ++$ < F;

          )
            k[M[$]] = k[T];
      }
      function E(I, _) {
        var k = i.highlight,
          O;
        if (typeof I != "string")
          throw new Error("Expected `string` for `value`, got `" + I + "`");
        if (f.util.type(_) === "Object") (O = _), (_ = null);
        else {
          if (typeof _ != "string")
            throw new Error("Expected `string` for `name`, got `" + _ + "`");
          if (h.call(f.languages, _)) O = f.languages[_];
          else
            throw new Error("Unknown language: `" + _ + "` is not registered");
        }
        return k.call(this, I, O, _);
      }
      function x(I) {
        if (typeof I != "string")
          throw new Error("Expected `string` for `language`, got `" + I + "`");
        return h.call(f.languages, I);
      }
      function y() {
        var I = f.languages,
          _ = [],
          k;
        for (k in I) h.call(I, k) && typeof I[k] == "object" && _.push(k);
        return _;
      }
      function b(I, _, k) {
        var O;
        return typeof I == "string"
          ? { type: "text", value: I }
          : f.util.type(I) === "Array"
            ? w(I, _)
            : ((O = {
                type: I.type,
                content: f.Token.stringify(I.content, _, k),
                tag: "span",
                classes: ["token", I.type],
                attributes: {},
                language: _,
                parent: k,
              }),
              I.alias && (O.classes = O.classes.concat(I.alias)),
              f.hooks.run("wrap", O),
              a(O.tag + "." + O.classes.join("."), C(O.attributes), O.content));
      }
      function w(I, _) {
        for (var k = [], O = I.length, T = -1, M; ++T < O; )
          (M = I[T]), M !== "" && M !== null && M !== void 0 && k.push(M);
        for (T = -1, O = k.length; ++T < O; )
          (M = k[T]), (k[T] = f.Token.stringify(M, _, k));
        return k;
      }
      function S(I) {
        return I;
      }
      function C(I) {
        var _;
        for (_ in I) I[_] = l(I[_]);
        return I;
      }
      function R() {
        var I = "Prism" in r,
          _ = I ? r.Prism : void 0;
        return k;
        function k() {
          I ? (r.Prism = _) : delete r.Prism, (I = void 0), (_ = void 0);
        }
      }
    },
  }),
  A5 = N({
    "../../node_modules/refractor/lang/bash.js"(e, t) {
      (t.exports = r), (r.displayName = "bash"), (r.aliases = ["shell"]);
      function r(n) {
        (function (a) {
          var l =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            i = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            c = {
              bash: i,
              environment: { pattern: RegExp("\\$" + l), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + l),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (a.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + l),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: c,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: i },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: c,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: c.entity },
              },
            ],
            environment: { pattern: RegExp("\\$?" + l), alias: "constant" },
            variable: c.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (i.inside = a.languages.bash);
          for (
            var s = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              d = c.variable[1].inside,
              p = 0;
            p < s.length;
            p++
          )
            d[s[p]] = a.languages.bash[s[p]];
          a.languages.shell = a.languages.bash;
        })(n);
      }
    },
  }),
  _5 = N({
    "../../node_modules/refractor/lang/js-extras.js"(e, t) {
      (t.exports = r), (r.displayName = "jsExtras"), (r.aliases = []);
      function r(n) {
        (function (a) {
          a.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  a.languages.javascript["function-variable"].pattern.source,
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            a.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + a.languages.javascript.function.source,
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            a.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            });
          function l(h, m) {
            return RegExp(
              h.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              m,
            );
          }
          a.languages.insertBefore("javascript", "keyword", {
            imports: {
              pattern: l(
                /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                  .source,
              ),
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            exports: {
              pattern: l(
                /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                  .source,
              ),
              lookbehind: !0,
              inside: a.languages.javascript,
            },
          }),
            a.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" },
            ),
            a.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            a.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: l(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var i = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              c = 0;
            c < i.length;
            c++
          ) {
            var s = i[c],
              d = a.languages.javascript[s];
            a.util.type(d) === "RegExp" &&
              (d = a.languages.javascript[s] = { pattern: d });
            var p = d.inside || {};
            (d.inside = p), (p["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(n);
      }
    },
  }),
  k5 = N({
    "../../node_modules/refractor/lang/json.js"(e, t) {
      (t.exports = r), (r.displayName = "json"), (r.aliases = ["webmanifest"]);
      function r(n) {
        (n.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
          (n.languages.webmanifest = n.languages.json);
      }
    },
  }),
  O5 = N({
    "../../node_modules/refractor/lang/graphql.js"(e, t) {
      (t.exports = r), (r.displayName = "graphql"), (r.aliases = []);
      function r(n) {
        (n.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: n.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-mutation": {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-query": {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
          n.hooks.add("after-tokenize", function (a) {
            if (a.language !== "graphql") return;
            var l = a.tokens.filter(function (y) {
                return (
                  typeof y != "string" &&
                  y.type !== "comment" &&
                  y.type !== "scalar"
                );
              }),
              i = 0;
            function c(y) {
              return l[i + y];
            }
            function s(y, b) {
              b = b || 0;
              for (var w = 0; w < y.length; w++) {
                var S = c(w + b);
                if (!S || S.type !== y[w]) return !1;
              }
              return !0;
            }
            function d(y, b) {
              for (var w = 1, S = i; S < l.length; S++) {
                var C = l[S],
                  R = C.content;
                if (C.type === "punctuation" && typeof R == "string") {
                  if (y.test(R)) w++;
                  else if (b.test(R) && (w--, w === 0)) return S;
                }
              }
              return -1;
            }
            function p(y, b) {
              var w = y.alias;
              w ? Array.isArray(w) || (y.alias = w = [w]) : (y.alias = w = []),
                w.push(b);
            }
            for (; i < l.length; ) {
              var h = l[i++];
              if (h.type === "keyword" && h.content === "mutation") {
                var m = [];
                if (
                  s(["definition-mutation", "punctuation"]) &&
                  c(1).content === "("
                ) {
                  i += 2;
                  var f = d(/^\($/, /^\)$/);
                  if (f === -1) continue;
                  for (; i < f; i++) {
                    var v = c(0);
                    v.type === "variable" &&
                      (p(v, "variable-input"), m.push(v.content));
                  }
                  i = f + 1;
                }
                if (
                  s(["punctuation", "property-query"]) &&
                  c(0).content === "{" &&
                  (i++, p(c(0), "property-mutation"), m.length > 0)
                ) {
                  var g = d(/^\{$/, /^\}$/);
                  if (g === -1) continue;
                  for (var E = i; E < g; E++) {
                    var x = l[E];
                    x.type === "variable" &&
                      m.indexOf(x.content) >= 0 &&
                      p(x, "variable-input");
                  }
                }
              }
            }
          });
      }
    },
  });
function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
function T5(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function M5(...e) {
  return (t) => e.forEach((r) => T5(r, t));
}
const ko = o.forwardRef((e, t) => {
  const { children: r, ...n } = e,
    a = o.Children.toArray(r),
    l = a.find(L5);
  if (l) {
    const i = l.props.children,
      c = a.map((s) =>
        s === l
          ? o.Children.count(i) > 1
            ? o.Children.only(null)
            : o.isValidElement(i)
              ? i.props.children
              : null
          : s,
      );
    return o.createElement(
      Va,
      me({}, n, { ref: t }),
      o.isValidElement(i) ? o.cloneElement(i, void 0, c) : null,
    );
  }
  return o.createElement(Va, me({}, n, { ref: t }), r);
});
ko.displayName = "Slot";
const Va = o.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  return o.isValidElement(r)
    ? o.cloneElement(r, { ...z5(n, r.props), ref: t ? M5(t, r.ref) : r.ref })
    : o.Children.count(r) > 1
      ? o.Children.only(null)
      : null;
});
Va.displayName = "SlotClone";
const $5 = ({ children: e }) => o.createElement(o.Fragment, null, e);
function L5(e) {
  return o.isValidElement(e) && e.type === $5;
}
function z5(e, t) {
  const r = { ...t };
  for (const n in t) {
    const a = e[n],
      l = t[n];
    /^on[A-Z]/.test(n)
      ? a && l
        ? (r[n] = (...c) => {
            l(...c), a(...c);
          })
        : a && (r[n] = a)
      : n === "style"
        ? (r[n] = { ...a, ...l })
        : n === "className" && (r[n] = [a, l].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
const { logger: B5 } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { global: P5 } = __STORYBOOK_MODULE_GLOBAL__;
var H5 = Re(is()),
  F5 = H5.default,
  j5 = Re(A5()),
  N5 = j5.default,
  D5 = Re(ss()),
  V5 = D5.default,
  U5 = Re(_5()),
  W5 = U5.default,
  q5 = Re(k5()),
  G5 = q5.default,
  Y5 = Re(O5()),
  K5 = Y5.default,
  X5 = Re(cs()),
  Z5 = X5.default,
  J5 = Re(Zp()),
  Q5 = J5.default,
  ef = Re(Jp()),
  tf = ef.default,
  rf = Re(Qp()),
  nf = rf.default,
  af = Re(ls()),
  of = af.default;
function lf(e, t) {
  if (e == null) return {};
  var r = Io(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      (n = l[a]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Ua(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function sf(e) {
  if (Array.isArray(e)) return Ua(e);
}
function cf(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function df(e, t) {
  if (e) {
    if (typeof e == "string") return Ua(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ua(e, t);
  }
}
function uf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pf(e) {
  return sf(e) || cf(e) || df(e) || uf();
}
function $r(e) {
  "@babel/helpers - typeof";
  return (
    ($r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $r(e)
  );
}
function ff(e, t) {
  if ($r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if ($r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hf(e) {
  var t = ff(e, "string");
  return $r(t) == "symbol" ? t : String(t);
}
function gs(e, t, r) {
  return (
    (t = hf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ti(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ti(Object(r), !0).forEach(function (n) {
          gs(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ti(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gf(e) {
  var t = e.length;
  if (t === 0 || t === 1) return e;
  if (t === 2)
    return [
      e[0],
      e[1],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0]),
    ];
  if (t === 3)
    return [
      e[0],
      e[1],
      e[2],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2]),
      "".concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
    ];
  if (t >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[3]),
      "".concat(e[3], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0]),
    ];
}
var fa = {};
function mf(e) {
  if (e.length === 0 || e.length === 1) return e;
  var t = e.join(".");
  return fa[t] || (fa[t] = gf(e)), fa[t];
}
function vf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    n = e.filter(function (l) {
      return l !== "token";
    }),
    a = mf(n);
  return a.reduce(function (l, i) {
    return Xt(Xt({}, l), r[i]);
  }, t);
}
function ri(e) {
  return e.join(" ");
}
function bf(e, t) {
  var r = 0;
  return function (n) {
    return (
      (r += 1),
      n.map(function (a, l) {
        return Oo({
          node: a,
          stylesheet: e,
          useInlineStyles: t,
          key: "code-segment-".concat(r, "-").concat(l),
        });
      })
    );
  };
}
function Oo(e) {
  var t = e.node,
    r = e.stylesheet,
    n = e.style,
    a = n === void 0 ? {} : n,
    l = e.useInlineStyles,
    i = e.key,
    c = t.properties,
    s = t.type,
    d = t.tagName,
    p = t.value;
  if (s === "text") return p;
  if (d) {
    var h = bf(r, l),
      m;
    if (!l) m = Xt(Xt({}, c), {}, { className: ri(c.className) });
    else {
      var f = Object.keys(r).reduce(function (x, y) {
          return (
            y.split(".").forEach(function (b) {
              x.includes(b) || x.push(b);
            }),
            x
          );
        }, []),
        v = c.className && c.className.includes("token") ? ["token"] : [],
        g =
          c.className &&
          v.concat(
            c.className.filter(function (x) {
              return !f.includes(x);
            }),
          );
      m = Xt(
        Xt({}, c),
        {},
        {
          className: ri(g) || void 0,
          style: vf(c.className, Object.assign({}, c.style, a), r),
        },
      );
    }
    var E = h(t.children);
    return u.createElement(d, G({ key: i }, m), E);
  }
}
var yf = function (e, t) {
    var r = e.listLanguages();
    return r.indexOf(t) !== -1;
  },
  wf = [
    "language",
    "children",
    "style",
    "customStyle",
    "codeTagProps",
    "useInlineStyles",
    "showLineNumbers",
    "showInlineLineNumbers",
    "startingLineNumber",
    "lineNumberContainerStyle",
    "lineNumberStyle",
    "wrapLines",
    "wrapLongLines",
    "lineProps",
    "renderer",
    "PreTag",
    "CodeTag",
    "code",
    "astGenerator",
  ];
function ni(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ni(Object(r), !0).forEach(function (n) {
          gs(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ni(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var xf = /\n/g;
function Ef(e) {
  return e.match(xf);
}
function Sf(e) {
  var t = e.lines,
    r = e.startingLineNumber,
    n = e.style;
  return t.map(function (a, l) {
    var i = l + r;
    return u.createElement(
      "span",
      {
        key: "line-".concat(l),
        className: "react-syntax-highlighter-line-number",
        style: typeof n == "function" ? n(i) : n,
      },
      "".concat(
        i,
        `
`,
      ),
    );
  });
}
function Cf(e) {
  var t = e.codeString,
    r = e.codeStyle,
    n = e.containerStyle,
    a = n === void 0 ? { float: "left", paddingRight: "10px" } : n,
    l = e.numberStyle,
    i = l === void 0 ? {} : l,
    c = e.startingLineNumber;
  return u.createElement(
    "code",
    { style: Object.assign({}, r, a) },
    Sf({
      lines: t.replace(/\n$/, "").split(`
`),
      style: i,
      startingLineNumber: c,
    }),
  );
}
function Rf(e) {
  return "".concat(e.toString().length, ".25em");
}
function ms(e, t) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e),
      className: [
        "comment",
        "linenumber",
        "react-syntax-highlighter-line-number",
      ],
      style: t,
    },
    children: [{ type: "text", value: e }],
  };
}
function vs(e, t, r) {
  var n = {
      display: "inline-block",
      minWidth: Rf(r),
      paddingRight: "1em",
      textAlign: "right",
      userSelect: "none",
    },
    a = typeof e == "function" ? e(t) : e,
    l = Ze(Ze({}, n), a);
  return l;
}
function pn(e) {
  var t = e.children,
    r = e.lineNumber,
    n = e.lineNumberStyle,
    a = e.largestLineNumber,
    l = e.showInlineLineNumbers,
    i = e.lineProps,
    c = i === void 0 ? {} : i,
    s = e.className,
    d = s === void 0 ? [] : s,
    p = e.showLineNumbers,
    h = e.wrapLongLines,
    m = typeof c == "function" ? c(r) : c;
  if (((m.className = d), r && l)) {
    var f = vs(n, r, a);
    t.unshift(ms(r, f));
  }
  return (
    h & p && (m.style = Ze(Ze({}, m.style), {}, { display: "flex" })),
    { type: "element", tagName: "span", properties: m, children: t }
  );
}
function bs(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      n = 0;
    n < e.length;
    n++
  ) {
    var a = e[n];
    if (a.type === "text")
      r.push(pn({ children: [a], className: pf(new Set(t)) }));
    else if (a.children) {
      var l = t.concat(a.properties.className);
      bs(a.children, l).forEach(function (i) {
        return r.push(i);
      });
    }
  }
  return r;
}
function If(e, t, r, n, a, l, i, c, s) {
  var d,
    p = bs(e.value),
    h = [],
    m = -1,
    f = 0;
  function v(S, C) {
    var R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return pn({
      children: S,
      lineNumber: C,
      lineNumberStyle: c,
      largestLineNumber: i,
      showInlineLineNumbers: a,
      lineProps: r,
      className: R,
      showLineNumbers: n,
      wrapLongLines: s,
    });
  }
  function g(S, C) {
    if (n && C && a) {
      var R = vs(c, C, i);
      S.unshift(ms(C, R));
    }
    return S;
  }
  function E(S, C) {
    var R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || R.length > 0 ? v(S, C, R) : g(S, C);
  }
  for (
    var x = function () {
      var S = p[f],
        C = S.children[0].value,
        R = Ef(C);
      if (R) {
        var I = C.split(`
`);
        I.forEach(function (_, k) {
          var O = n && h.length + l,
            T = {
              type: "text",
              value: "".concat(
                _,
                `
`,
              ),
            };
          if (k === 0) {
            var M = p
                .slice(m + 1, f)
                .concat(
                  pn({ children: [T], className: S.properties.className }),
                ),
              F = E(M, O);
            h.push(F);
          } else if (k === I.length - 1) {
            var $ = p[f + 1] && p[f + 1].children && p[f + 1].children[0],
              L = { type: "text", value: "".concat(_) };
            if ($) {
              var j = pn({ children: [L], className: S.properties.className });
              p.splice(f + 1, 0, j);
            } else {
              var V = [L],
                P = E(V, O, S.properties.className);
              h.push(P);
            }
          } else {
            var D = [T],
              Z = E(D, O, S.properties.className);
            h.push(Z);
          }
        }),
          (m = f);
      }
      f++;
    };
    f < p.length;

  )
    x();
  if (m !== p.length - 1) {
    var y = p.slice(m + 1, p.length);
    if (y && y.length) {
      var b = n && h.length + l,
        w = E(y, b);
      h.push(w);
    }
  }
  return t ? h : (d = []).concat.apply(d, h);
}
function Af(e) {
  var t = e.rows,
    r = e.stylesheet,
    n = e.useInlineStyles;
  return t.map(function (a, l) {
    return Oo({
      node: a,
      stylesheet: r,
      useInlineStyles: n,
      key: "code-segement".concat(l),
    });
  });
}
function ys(e) {
  return e && typeof e.highlightAuto < "u";
}
function _f(e) {
  var t = e.astGenerator,
    r = e.language,
    n = e.code,
    a = e.defaultCodeValue;
  if (ys(t)) {
    var l = yf(t, r);
    return r === "text"
      ? { value: a, language: "text" }
      : l
        ? t.highlight(r, n)
        : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? { value: t.highlight(n, r) } : { value: a };
  } catch {
    return { value: a };
  }
}
function kf(e, t) {
  return function (r) {
    var n = r.language,
      a = r.children,
      l = r.style,
      i = l === void 0 ? t : l,
      c = r.customStyle,
      s = c === void 0 ? {} : c,
      d = r.codeTagProps,
      p =
        d === void 0
          ? {
              className: n ? "language-".concat(n) : void 0,
              style: Ze(
                Ze({}, i['code[class*="language-"]']),
                i['code[class*="language-'.concat(n, '"]')],
              ),
            }
          : d,
      h = r.useInlineStyles,
      m = h === void 0 ? !0 : h,
      f = r.showLineNumbers,
      v = f === void 0 ? !1 : f,
      g = r.showInlineLineNumbers,
      E = g === void 0 ? !0 : g,
      x = r.startingLineNumber,
      y = x === void 0 ? 1 : x,
      b = r.lineNumberContainerStyle,
      w = r.lineNumberStyle,
      S = w === void 0 ? {} : w,
      C = r.wrapLines,
      R = r.wrapLongLines,
      I = R === void 0 ? !1 : R,
      _ = r.lineProps,
      k = _ === void 0 ? {} : _,
      O = r.renderer,
      T = r.PreTag,
      M = T === void 0 ? "pre" : T,
      F = r.CodeTag,
      $ = F === void 0 ? "code" : F,
      L = r.code,
      j = L === void 0 ? (Array.isArray(a) ? a[0] : a) || "" : L,
      V = r.astGenerator,
      P = lf(r, wf);
    V = V || e;
    var D = v
        ? u.createElement(Cf, {
            containerStyle: b,
            codeStyle: p.style || {},
            numberStyle: S,
            startingLineNumber: y,
            codeString: j,
          })
        : null,
      Z = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: "#fff" },
      ne = ys(V) ? "hljs" : "prismjs",
      X = m
        ? Object.assign({}, P, { style: Object.assign({}, Z, s) })
        : Object.assign({}, P, {
            className: P.className
              ? "".concat(ne, " ").concat(P.className)
              : ne,
            style: Object.assign({}, s),
          });
    if (
      (I
        ? (p.style = Ze(Ze({}, p.style), {}, { whiteSpace: "pre-wrap" }))
        : (p.style = Ze(Ze({}, p.style), {}, { whiteSpace: "pre" })),
      !V)
    )
      return u.createElement(M, X, D, u.createElement($, p, j));
    ((C === void 0 && O) || I) && (C = !0), (O = O || Af);
    var J = [{ type: "text", value: j }],
      B = _f({ astGenerator: V, language: n, code: j, defaultCodeValue: J });
    B.language === null && (B.value = J);
    var U = B.value.length + y,
      q = If(B, C, k, v, E, y, U, S, I);
    return u.createElement(
      M,
      X,
      u.createElement(
        $,
        p,
        !E && D,
        O({ rows: q, stylesheet: i, useInlineStyles: m }),
      ),
    );
  };
}
var To = Re(I5()),
  Mo = kf(To.default, {});
Mo.registerLanguage = function (e, t) {
  return To.default.register(t);
};
Mo.alias = function (e, t) {
  return To.default.alias(e, t);
};
var $o = Mo,
  Of = A.div(({ theme: e }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e.background.content,
    zIndex: 1,
  })),
  ws = A.button(
    ({ theme: e }) => ({
      margin: 0,
      border: "0 none",
      padding: "4px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: e.color.defaultText,
      background: e.background.content,
      fontSize: 12,
      lineHeight: "16px",
      fontFamily: e.typography.fonts.base,
      fontWeight: e.typography.weight.bold,
      borderTop: `1px solid ${e.appBorderColor}`,
      borderLeft: `1px solid ${e.appBorderColor}`,
      marginLeft: -1,
      borderRadius: "4px 0 0 0",
      "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` },
      "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 },
      "&:focus": {
        boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`,
        outline: "0 none",
      },
    }),
    ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 },
  );
ws.displayName = "ActionButton";
var Lo = ({ actionItems: e, ...t }) =>
    u.createElement(
      Of,
      { ...t },
      e.map(({ title: r, className: n, onClick: a, disabled: l }, i) =>
        u.createElement(
          ws,
          { key: i, className: n, onClick: a, disabled: l },
          r,
        ),
      ),
    ),
  Tf = [
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
    "ul",
  ],
  Vr = Tf.reduce((e, t) => {
    let r = o.forwardRef((n, a) => {
      let { asChild: l, ...i } = n,
        c = l ? ko : t;
      return (
        o.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        o.createElement(c, G({}, i, { ref: a }))
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function Mf(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function $f(...e) {
  return (t) => e.forEach((r) => Mf(r, t));
}
function Vt(...e) {
  return o.useCallback($f(...e), e);
}
var Wa =
  globalThis != null && globalThis.document ? o.useLayoutEffect : () => {};
function Lf(e, t) {
  return o.useReducer((r, n) => t[r][n] ?? r, e);
}
var Ur = (e) => {
  let { present: t, children: r } = e,
    n = zf(t),
    a =
      typeof r == "function" ? r({ present: n.isPresent }) : o.Children.only(r),
    l = Vt(n.ref, a.ref);
  return typeof r == "function" || n.isPresent
    ? o.cloneElement(a, { ref: l })
    : null;
};
Ur.displayName = "Presence";
function zf(e) {
  let [t, r] = o.useState(),
    n = o.useRef({}),
    a = o.useRef(e),
    l = o.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [c, s] = Lf(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    o.useEffect(() => {
      let d = en(n.current);
      l.current = c === "mounted" ? d : "none";
    }, [c]),
    Wa(() => {
      let d = n.current,
        p = a.current;
      if (p !== e) {
        let h = l.current,
          m = en(d);
        e
          ? s("MOUNT")
          : m === "none" || (d == null ? void 0 : d.display) === "none"
            ? s("UNMOUNT")
            : s(p && h !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (a.current = e);
      }
    }, [e, s]),
    Wa(() => {
      if (t) {
        let d = (h) => {
            let m = en(n.current).includes(h.animationName);
            h.target === t && m && x0.flushSync(() => s("ANIMATION_END"));
          },
          p = (h) => {
            h.target === t && (l.current = en(n.current));
          };
        return (
          t.addEventListener("animationstart", p),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            t.removeEventListener("animationstart", p),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(c),
      ref: o.useCallback((d) => {
        d && (n.current = getComputedStyle(d)), r(d);
      }, []),
    }
  );
}
function en(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Bf(e, t = []) {
  let r = [];
  function n(l, i) {
    let c = o.createContext(i),
      s = r.length;
    r = [...r, i];
    function d(h) {
      let { scope: m, children: f, ...v } = h,
        g = (m == null ? void 0 : m[e][s]) || c,
        E = o.useMemo(() => v, Object.values(v));
      return o.createElement(g.Provider, { value: E }, f);
    }
    function p(h, m) {
      let f = (m == null ? void 0 : m[e][s]) || c,
        v = o.useContext(f);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${h}\` must be used within \`${l}\``);
    }
    return (d.displayName = l + "Provider"), [d, p];
  }
  let a = () => {
    let l = r.map((i) => o.createContext(i));
    return function (i) {
      let c = (i == null ? void 0 : i[e]) || l;
      return o.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: c } }), [i, c]);
    };
  };
  return (a.scopeName = e), [n, Pf(a, ...t)];
}
function Pf(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let r = () => {
    let n = e.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (a) {
      let l = n.reduce((i, { useScope: c, scopeName: s }) => {
        let d = c(a)[`__scope${s}`];
        return { ...i, ...d };
      }, {});
      return o.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function Tt(e) {
  let t = o.useRef(e);
  return (
    o.useEffect(() => {
      t.current = e;
    }),
    o.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) === null || n === void 0
            ? void 0
            : n.call(t, ...r);
        },
      [],
    )
  );
}
var Hf = o.createContext(void 0);
function Ff(e) {
  let t = o.useContext(Hf);
  return e || t || "ltr";
}
function jf(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Lt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (n) {
    if ((e == null || e(n), r === !1 || !n.defaultPrevented))
      return t == null ? void 0 : t(n);
  };
}
function Nf(e, t) {
  return o.useReducer((r, n) => t[r][n] ?? r, e);
}
var xs = "ScrollArea",
  [Es, AA] = Bf(xs),
  [Df, ze] = Es(xs),
  Vf = o.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        type: n = "hover",
        dir: a,
        scrollHideDelay: l = 600,
        ...i
      } = e,
      [c, s] = o.useState(null),
      [d, p] = o.useState(null),
      [h, m] = o.useState(null),
      [f, v] = o.useState(null),
      [g, E] = o.useState(null),
      [x, y] = o.useState(0),
      [b, w] = o.useState(0),
      [S, C] = o.useState(!1),
      [R, I] = o.useState(!1),
      _ = Vt(t, (O) => s(O)),
      k = Ff(a);
    return o.createElement(
      Df,
      {
        scope: r,
        type: n,
        dir: k,
        scrollHideDelay: l,
        scrollArea: c,
        viewport: d,
        onViewportChange: p,
        content: h,
        onContentChange: m,
        scrollbarX: f,
        onScrollbarXChange: v,
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: C,
        scrollbarY: g,
        onScrollbarYChange: E,
        scrollbarYEnabled: R,
        onScrollbarYEnabledChange: I,
        onCornerWidthChange: y,
        onCornerHeightChange: w,
      },
      o.createElement(
        Vr.div,
        G({ dir: k }, i, {
          ref: _,
          style: {
            position: "relative",
            "--radix-scroll-area-corner-width": x + "px",
            "--radix-scroll-area-corner-height": b + "px",
            ...e.style,
          },
        }),
      ),
    );
  }),
  Uf = "ScrollAreaViewport",
  Wf = o.forwardRef((e, t) => {
    let { __scopeScrollArea: r, children: n, ...a } = e,
      l = ze(Uf, r),
      i = o.useRef(null),
      c = Vt(t, i, l.onViewportChange);
    return o.createElement(
      o.Fragment,
      null,
      o.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      o.createElement(
        Vr.div,
        G({ "data-radix-scroll-area-viewport": "" }, a, {
          ref: c,
          style: {
            overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
        }),
        o.createElement(
          "div",
          {
            ref: l.onContentChange,
            style: { minWidth: "100%", display: "table" },
          },
          n,
        ),
      ),
    );
  }),
  dt = "ScrollAreaScrollbar",
  qf = o.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e,
      a = ze(dt, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i } = a,
      c = e.orientation === "horizontal";
    return (
      o.useEffect(
        () => (
          c ? l(!0) : i(!0),
          () => {
            c ? l(!1) : i(!1);
          }
        ),
        [c, l, i],
      ),
      a.type === "hover"
        ? o.createElement(Gf, G({}, n, { ref: t, forceMount: r }))
        : a.type === "scroll"
          ? o.createElement(Yf, G({}, n, { ref: t, forceMount: r }))
          : a.type === "auto"
            ? o.createElement(Ss, G({}, n, { ref: t, forceMount: r }))
            : a.type === "always"
              ? o.createElement(zo, G({}, n, { ref: t }))
              : null
    );
  }),
  Gf = o.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e,
      a = ze(dt, e.__scopeScrollArea),
      [l, i] = o.useState(!1);
    return (
      o.useEffect(() => {
        let c = a.scrollArea,
          s = 0;
        if (c) {
          let d = () => {
              window.clearTimeout(s), i(!0);
            },
            p = () => {
              s = window.setTimeout(() => i(!1), a.scrollHideDelay);
            };
          return (
            c.addEventListener("pointerenter", d),
            c.addEventListener("pointerleave", p),
            () => {
              window.clearTimeout(s),
                c.removeEventListener("pointerenter", d),
                c.removeEventListener("pointerleave", p);
            }
          );
        }
      }, [a.scrollArea, a.scrollHideDelay]),
      o.createElement(
        Ur,
        { present: r || l },
        o.createElement(
          Ss,
          G({ "data-state": l ? "visible" : "hidden" }, n, { ref: t }),
        ),
      )
    );
  }),
  Yf = o.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e,
      a = ze(dt, e.__scopeScrollArea),
      l = e.orientation === "horizontal",
      i = Vn(() => s("SCROLL_END"), 100),
      [c, s] = Nf("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      o.useEffect(() => {
        if (c === "idle") {
          let d = window.setTimeout(() => s("HIDE"), a.scrollHideDelay);
          return () => window.clearTimeout(d);
        }
      }, [c, a.scrollHideDelay, s]),
      o.useEffect(() => {
        let d = a.viewport,
          p = l ? "scrollLeft" : "scrollTop";
        if (d) {
          let h = d[p],
            m = () => {
              let f = d[p];
              h !== f && (s("SCROLL"), i()), (h = f);
            };
          return (
            d.addEventListener("scroll", m),
            () => d.removeEventListener("scroll", m)
          );
        }
      }, [a.viewport, l, s, i]),
      o.createElement(
        Ur,
        { present: r || c !== "hidden" },
        o.createElement(
          zo,
          G({ "data-state": c === "hidden" ? "hidden" : "visible" }, n, {
            ref: t,
            onPointerEnter: Lt(e.onPointerEnter, () => s("POINTER_ENTER")),
            onPointerLeave: Lt(e.onPointerLeave, () => s("POINTER_LEAVE")),
          }),
        ),
      )
    );
  }),
  Ss = o.forwardRef((e, t) => {
    let r = ze(dt, e.__scopeScrollArea),
      { forceMount: n, ...a } = e,
      [l, i] = o.useState(!1),
      c = e.orientation === "horizontal",
      s = Vn(() => {
        if (r.viewport) {
          let d = r.viewport.offsetWidth < r.viewport.scrollWidth,
            p = r.viewport.offsetHeight < r.viewport.scrollHeight;
          i(c ? d : p);
        }
      }, 10);
    return (
      tr(r.viewport, s),
      tr(r.content, s),
      o.createElement(
        Ur,
        { present: n || l },
        o.createElement(
          zo,
          G({ "data-state": l ? "visible" : "hidden" }, a, { ref: t }),
        ),
      )
    );
  }),
  zo = o.forwardRef((e, t) => {
    let { orientation: r = "vertical", ...n } = e,
      a = ze(dt, e.__scopeScrollArea),
      l = o.useRef(null),
      i = o.useRef(0),
      [c, s] = o.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      d = As(c.viewport, c.content),
      p = {
        ...n,
        sizes: c,
        onSizesChange: s,
        hasThumb: d > 0 && d < 1,
        onThumbChange: (m) => (l.current = m),
        onThumbPointerUp: () => (i.current = 0),
        onThumbPointerDown: (m) => (i.current = m),
      };
    function h(m, f) {
      return rh(m, i.current, c, f);
    }
    return r === "horizontal"
      ? o.createElement(
          Kf,
          G({}, p, {
            ref: t,
            onThumbPositionChange: () => {
              if (a.viewport && l.current) {
                let m = a.viewport.scrollLeft,
                  f = ai(m, c, a.dir);
                l.current.style.transform = `translate3d(${f}px, 0, 0)`;
              }
            },
            onWheelScroll: (m) => {
              a.viewport && (a.viewport.scrollLeft = m);
            },
            onDragScroll: (m) => {
              a.viewport && (a.viewport.scrollLeft = h(m, a.dir));
            },
          }),
        )
      : r === "vertical"
        ? o.createElement(
            Xf,
            G({}, p, {
              ref: t,
              onThumbPositionChange: () => {
                if (a.viewport && l.current) {
                  let m = a.viewport.scrollTop,
                    f = ai(m, c);
                  l.current.style.transform = `translate3d(0, ${f}px, 0)`;
                }
              },
              onWheelScroll: (m) => {
                a.viewport && (a.viewport.scrollTop = m);
              },
              onDragScroll: (m) => {
                a.viewport && (a.viewport.scrollTop = h(m));
              },
            }),
          )
        : null;
  }),
  Kf = o.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: n, ...a } = e,
      l = ze(dt, e.__scopeScrollArea),
      [i, c] = o.useState(),
      s = o.useRef(null),
      d = Vt(t, s, l.onScrollbarXChange);
    return (
      o.useEffect(() => {
        s.current && c(getComputedStyle(s.current));
      }, [s]),
      o.createElement(
        Rs,
        G({ "data-orientation": "horizontal" }, a, {
          ref: d,
          sizes: r,
          style: {
            bottom: 0,
            left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right:
              l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": Dn(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (p) => e.onThumbPointerDown(p.x),
          onDragScroll: (p) => e.onDragScroll(p.x),
          onWheelScroll: (p, h) => {
            if (l.viewport) {
              let m = l.viewport.scrollLeft + p.deltaX;
              e.onWheelScroll(m), ks(m, h) && p.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              l.viewport &&
              i &&
              n({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                  size: s.current.clientWidth,
                  paddingStart: En(i.paddingLeft),
                  paddingEnd: En(i.paddingRight),
                },
              });
          },
        }),
      )
    );
  }),
  Xf = o.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: n, ...a } = e,
      l = ze(dt, e.__scopeScrollArea),
      [i, c] = o.useState(),
      s = o.useRef(null),
      d = Vt(t, s, l.onScrollbarYChange);
    return (
      o.useEffect(() => {
        s.current && c(getComputedStyle(s.current));
      }, [s]),
      o.createElement(
        Rs,
        G({ "data-orientation": "vertical" }, a, {
          ref: d,
          sizes: r,
          style: {
            top: 0,
            right: l.dir === "ltr" ? 0 : void 0,
            left: l.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": Dn(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (p) => e.onThumbPointerDown(p.y),
          onDragScroll: (p) => e.onDragScroll(p.y),
          onWheelScroll: (p, h) => {
            if (l.viewport) {
              let m = l.viewport.scrollTop + p.deltaY;
              e.onWheelScroll(m), ks(m, h) && p.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              l.viewport &&
              i &&
              n({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                  size: s.current.clientHeight,
                  paddingStart: En(i.paddingTop),
                  paddingEnd: En(i.paddingBottom),
                },
              });
          },
        }),
      )
    );
  }),
  [Zf, Cs] = Es(dt),
  Rs = o.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        sizes: n,
        hasThumb: a,
        onThumbChange: l,
        onThumbPointerUp: i,
        onThumbPointerDown: c,
        onThumbPositionChange: s,
        onDragScroll: d,
        onWheelScroll: p,
        onResize: h,
        ...m
      } = e,
      f = ze(dt, r),
      [v, g] = o.useState(null),
      E = Vt(t, (_) => g(_)),
      x = o.useRef(null),
      y = o.useRef(""),
      b = f.viewport,
      w = n.content - n.viewport,
      S = Tt(p),
      C = Tt(s),
      R = Vn(h, 10);
    function I(_) {
      if (x.current) {
        let k = _.clientX - x.current.left,
          O = _.clientY - x.current.top;
        d({ x: k, y: O });
      }
    }
    return (
      o.useEffect(() => {
        let _ = (k) => {
          let O = k.target;
          v != null && v.contains(O) && S(k, w);
        };
        return (
          document.addEventListener("wheel", _, { passive: !1 }),
          () => document.removeEventListener("wheel", _, { passive: !1 })
        );
      }, [b, v, w, S]),
      o.useEffect(C, [n, C]),
      tr(v, R),
      tr(f.content, R),
      o.createElement(
        Zf,
        {
          scope: r,
          scrollbar: v,
          hasThumb: a,
          onThumbChange: Tt(l),
          onThumbPointerUp: Tt(i),
          onThumbPositionChange: C,
          onThumbPointerDown: Tt(c),
        },
        o.createElement(
          Vr.div,
          G({}, m, {
            ref: E,
            style: { position: "absolute", ...m.style },
            onPointerDown: Lt(e.onPointerDown, (_) => {
              _.button === 0 &&
                (_.target.setPointerCapture(_.pointerId),
                (x.current = v.getBoundingClientRect()),
                (y.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                f.viewport && (f.viewport.style.scrollBehavior = "auto"),
                I(_));
            }),
            onPointerMove: Lt(e.onPointerMove, I),
            onPointerUp: Lt(e.onPointerUp, (_) => {
              let k = _.target;
              k.hasPointerCapture(_.pointerId) &&
                k.releasePointerCapture(_.pointerId),
                (document.body.style.webkitUserSelect = y.current),
                f.viewport && (f.viewport.style.scrollBehavior = ""),
                (x.current = null);
            }),
          }),
        ),
      )
    );
  }),
  qa = "ScrollAreaThumb",
  Jf = o.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e,
      a = Cs(qa, e.__scopeScrollArea);
    return o.createElement(
      Ur,
      { present: r || a.hasThumb },
      o.createElement(Qf, G({ ref: t }, n)),
    );
  }),
  Qf = o.forwardRef((e, t) => {
    let { __scopeScrollArea: r, style: n, ...a } = e,
      l = ze(qa, r),
      i = Cs(qa, r),
      { onThumbPositionChange: c } = i,
      s = Vt(t, (h) => i.onThumbChange(h)),
      d = o.useRef(),
      p = Vn(() => {
        d.current && (d.current(), (d.current = void 0));
      }, 100);
    return (
      o.useEffect(() => {
        let h = l.viewport;
        if (h) {
          let m = () => {
            if ((p(), !d.current)) {
              let f = nh(h, c);
              (d.current = f), c();
            }
          };
          return (
            c(),
            h.addEventListener("scroll", m),
            () => h.removeEventListener("scroll", m)
          );
        }
      }, [l.viewport, p, c]),
      o.createElement(
        Vr.div,
        G({ "data-state": i.hasThumb ? "visible" : "hidden" }, a, {
          ref: s,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...n,
          },
          onPointerDownCapture: Lt(e.onPointerDownCapture, (h) => {
            let m = h.target.getBoundingClientRect(),
              f = h.clientX - m.left,
              v = h.clientY - m.top;
            i.onThumbPointerDown({ x: f, y: v });
          }),
          onPointerUp: Lt(e.onPointerUp, i.onThumbPointerUp),
        }),
      )
    );
  }),
  Is = "ScrollAreaCorner",
  eh = o.forwardRef((e, t) => {
    let r = ze(Is, e.__scopeScrollArea),
      n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n
      ? o.createElement(th, G({}, e, { ref: t }))
      : null;
  }),
  th = o.forwardRef((e, t) => {
    let { __scopeScrollArea: r, ...n } = e,
      a = ze(Is, r),
      [l, i] = o.useState(0),
      [c, s] = o.useState(0),
      d = !!(l && c);
    return (
      tr(a.scrollbarX, () => {
        var p;
        let h =
          ((p = a.scrollbarX) === null || p === void 0
            ? void 0
            : p.offsetHeight) || 0;
        a.onCornerHeightChange(h), s(h);
      }),
      tr(a.scrollbarY, () => {
        var p;
        let h =
          ((p = a.scrollbarY) === null || p === void 0
            ? void 0
            : p.offsetWidth) || 0;
        a.onCornerWidthChange(h), i(h);
      }),
      d
        ? o.createElement(
            Vr.div,
            G({}, n, {
              ref: t,
              style: {
                width: l,
                height: c,
                position: "absolute",
                right: a.dir === "ltr" ? 0 : void 0,
                left: a.dir === "rtl" ? 0 : void 0,
                bottom: 0,
                ...e.style,
              },
            }),
          )
        : null
    );
  });
function En(e) {
  return e ? parseInt(e, 10) : 0;
}
function As(e, t) {
  let r = e / t;
  return isNaN(r) ? 0 : r;
}
function Dn(e) {
  let t = As(e.viewport, e.content),
    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function rh(e, t, r, n = "ltr") {
  let a = Dn(r),
    l = a / 2,
    i = t || l,
    c = a - i,
    s = r.scrollbar.paddingStart + i,
    d = r.scrollbar.size - r.scrollbar.paddingEnd - c,
    p = r.content - r.viewport,
    h = n === "ltr" ? [0, p] : [p * -1, 0];
  return _s([s, d], h)(e);
}
function ai(e, t, r = "ltr") {
  let n = Dn(t),
    a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    l = t.scrollbar.size - a,
    i = t.content - t.viewport,
    c = l - n,
    s = r === "ltr" ? [0, i] : [i * -1, 0],
    d = jf(e, s);
  return _s([0, i], [0, c])(d);
}
function _s(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function ks(e, t) {
  return e > 0 && e < t;
}
var nh = (e, t = () => {}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop },
    n = 0;
  return (
    (function a() {
      let l = { left: e.scrollLeft, top: e.scrollTop },
        i = r.left !== l.left,
        c = r.top !== l.top;
      (i || c) && t(), (r = l), (n = window.requestAnimationFrame(a));
    })(),
    () => window.cancelAnimationFrame(n)
  );
};
function Vn(e, t) {
  let r = Tt(e),
    n = o.useRef(0);
  return (
    o.useEffect(() => () => window.clearTimeout(n.current), []),
    o.useCallback(() => {
      window.clearTimeout(n.current), (n.current = window.setTimeout(r, t));
    }, [r, t])
  );
}
function tr(e, t) {
  let r = Tt(t);
  Wa(() => {
    let n = 0;
    if (e) {
      let a = new ResizeObserver(() => {
        cancelAnimationFrame(n), (n = window.requestAnimationFrame(r));
      });
      return (
        a.observe(e),
        () => {
          window.cancelAnimationFrame(n), a.unobserve(e);
        }
      );
    }
  }, [e, r]);
}
var ah = Vf,
  oh = Wf,
  lh = qf,
  ih = Jf,
  sh = eh,
  ch = A(ah)(({ scrollbarsize: e, offset: t }) => ({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    "--scrollbar-size": `${e + t}px`,
    "--radix-scroll-area-thumb-width": `${e}px`,
  })),
  dh = A(oh)({ width: "100%", height: "100%" }),
  oi = A(lh)(({ offset: e, horizontal: t, vertical: r }) => ({
    display: "flex",
    userSelect: "none",
    touchAction: "none",
    background: "transparent",
    transition: "all 0.2s ease-out",
    borderRadius: "var(--scrollbar-size)",
    '&[data-orientation="vertical"]': {
      width: "var(--scrollbar-size)",
      paddingRight: e,
      marginTop: e,
      marginBottom: t === "true" && r === "true" ? 0 : e,
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: "var(--scrollbar-size)",
      paddingBottom: e,
      marginLeft: e,
      marginRight: t === "true" && r === "true" ? 0 : e,
    },
  })),
  li = A(ih)(({ theme: e }) => ({
    flex: 1,
    background: e.textMutedColor,
    opacity: 0.5,
    borderRadius: "var(--scrollbar-size)",
    position: "relative",
    transition: "opacity 0.2s ease-out",
    "&:hover": { opacity: 0.8 },
    "::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100%",
      height: "100%",
    },
  })),
  Bo = ({
    children: e,
    horizontal: t = !1,
    vertical: r = !1,
    offset: n = 2,
    scrollbarSize: a = 6,
    className: l,
  }) =>
    u.createElement(
      ch,
      { scrollbarsize: a, offset: n, className: l },
      u.createElement(dh, null, e),
      t &&
        u.createElement(
          oi,
          {
            orientation: "horizontal",
            offset: n,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          u.createElement(li, null),
        ),
      r &&
        u.createElement(
          oi,
          {
            orientation: "vertical",
            offset: n,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          u.createElement(li, null),
        ),
      t && r && u.createElement(sh, null),
    ),
  { navigator: tn, document: wr, window: uh } = P5,
  ph = {
    jsextra: W5,
    jsx: F5,
    json: G5,
    yml: tf,
    md: Q5,
    bash: N5,
    css: V5,
    html: Z5,
    tsx: nf,
    typescript: of,
    graphql: K5,
  };
Object.entries(ph).forEach(([e, t]) => {
  $o.registerLanguage(e, t);
});
var fh = Dt(2)((e) =>
    Object.entries(e.code || {}).reduce(
      (t, [r, n]) => ({ ...t, [`* .${r}`]: n }),
      {},
    ),
  ),
  hh = Os();
function Os() {
  return tn != null && tn.clipboard
    ? (e) => tn.clipboard.writeText(e)
    : async (e) => {
        let t = wr.createElement("TEXTAREA"),
          r = wr.activeElement;
        (t.value = e),
          wr.body.appendChild(t),
          t.select(),
          wr.execCommand("copy"),
          wr.body.removeChild(t),
          r.focus();
      };
}
var gh = A.div(
    ({ theme: e }) => ({
      position: "relative",
      overflow: "hidden",
      color: e.color.defaultText,
    }),
    ({ theme: e, bordered: t }) =>
      t
        ? {
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.borderRadius,
            background: e.background.content,
          }
        : {},
    ({ showLineNumbers: e }) =>
      e
        ? {
            ".react-syntax-highlighter-line-number::before": {
              content: "attr(data-line-number)",
            },
          }
        : {},
  ),
  mh = ({ children: e, className: t }) =>
    u.createElement(Bo, { horizontal: !0, vertical: !0, className: t }, e),
  vh = A(mh)({ position: "relative" }, ({ theme: e }) => fh(e)),
  bh = A.pre(({ theme: e, padded: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t ? e.layoutMargin : 0,
  })),
  yh = A.div(({ theme: e }) => ({
    flex: 1,
    paddingLeft: 2,
    paddingRight: e.layoutMargin,
    opacity: 1,
    fontFamily: e.typography.fonts.mono,
  })),
  Ts = (e) => {
    let t = [...e.children],
      r = t[0],
      n = r.children[0].value,
      a = {
        ...r,
        children: [],
        properties: {
          ...r.properties,
          "data-line-number": n,
          style: { ...r.properties.style, userSelect: "auto" },
        },
      };
    return (t[0] = a), { ...e, children: t };
  },
  wh = ({ rows: e, stylesheet: t, useInlineStyles: r }) =>
    e.map((n, a) =>
      Oo({
        node: Ts(n),
        stylesheet: t,
        useInlineStyles: r,
        key: `code-segement${a}`,
      }),
    ),
  xh = (e, t) =>
    t
      ? e
        ? ({ rows: r, ...n }) => e({ rows: r.map((a) => Ts(a)), ...n })
        : wh
      : e,
  Po = ({
    children: e,
    language: t = "jsx",
    copyable: r = !1,
    bordered: n = !1,
    padded: a = !1,
    format: l = !0,
    formatter: i = null,
    className: c = null,
    showLineNumbers: s = !1,
    ...d
  }) => {
    if (typeof e != "string" || !e.trim()) return null;
    let [p, h] = o.useState("");
    o.useEffect(() => {
      i ? i(l, e).then(h) : h(e.trim());
    }, [e, l, i]);
    let [m, f] = o.useState(!1),
      v = o.useCallback(
        (E) => {
          E.preventDefault(),
            hh(p)
              .then(() => {
                f(!0), uh.setTimeout(() => f(!1), 1500);
              })
              .catch(B5.error);
        },
        [p],
      ),
      g = xh(d.renderer, s);
    return u.createElement(
      gh,
      { bordered: n, padded: a, showLineNumbers: s, className: c },
      u.createElement(
        vh,
        null,
        u.createElement(
          $o,
          {
            padded: a || n,
            language: t,
            showLineNumbers: s,
            showInlineLineNumbers: s,
            useInlineStyles: !1,
            PreTag: bh,
            CodeTag: yh,
            lineNumberContainerStyle: {},
            ...d,
            renderer: g,
          },
          p,
        ),
      ),
      r
        ? u.createElement(Lo, {
            actionItems: [{ title: m ? "Copied" : "Copy", onClick: v }],
          })
        : null,
    );
  };
Po.registerLanguage = (...e) => $o.registerLanguage(...e);
var _A = Po;
const { global: Eh } = __STORYBOOK_MODULE_GLOBAL__;
var Sh = N({
    "../../node_modules/react-fast-compare/index.js"(e, t) {
      var r = typeof Element < "u",
        n = typeof Map == "function",
        a = typeof Set == "function",
        l = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
      function i(c, s) {
        if (c === s) return !0;
        if (c && s && typeof c == "object" && typeof s == "object") {
          if (c.constructor !== s.constructor) return !1;
          var d, p, h;
          if (Array.isArray(c)) {
            if (((d = c.length), d != s.length)) return !1;
            for (p = d; p-- !== 0; ) if (!i(c[p], s[p])) return !1;
            return !0;
          }
          var m;
          if (n && c instanceof Map && s instanceof Map) {
            if (c.size !== s.size) return !1;
            for (m = c.entries(); !(p = m.next()).done; )
              if (!s.has(p.value[0])) return !1;
            for (m = c.entries(); !(p = m.next()).done; )
              if (!i(p.value[1], s.get(p.value[0]))) return !1;
            return !0;
          }
          if (a && c instanceof Set && s instanceof Set) {
            if (c.size !== s.size) return !1;
            for (m = c.entries(); !(p = m.next()).done; )
              if (!s.has(p.value[0])) return !1;
            return !0;
          }
          if (l && ArrayBuffer.isView(c) && ArrayBuffer.isView(s)) {
            if (((d = c.length), d != s.length)) return !1;
            for (p = d; p-- !== 0; ) if (c[p] !== s[p]) return !1;
            return !0;
          }
          if (c.constructor === RegExp)
            return c.source === s.source && c.flags === s.flags;
          if (
            c.valueOf !== Object.prototype.valueOf &&
            typeof c.valueOf == "function" &&
            typeof s.valueOf == "function"
          )
            return c.valueOf() === s.valueOf();
          if (
            c.toString !== Object.prototype.toString &&
            typeof c.toString == "function" &&
            typeof s.toString == "function"
          )
            return c.toString() === s.toString();
          if (
            ((h = Object.keys(c)), (d = h.length), d !== Object.keys(s).length)
          )
            return !1;
          for (p = d; p-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(s, h[p])) return !1;
          if (r && c instanceof Element) return !1;
          for (p = d; p-- !== 0; )
            if (
              !(
                (h[p] === "_owner" || h[p] === "__v" || h[p] === "__o") &&
                c.$$typeof
              ) &&
              !i(c[h[p]], s[h[p]])
            )
              return !1;
          return !0;
        }
        return c !== c && s !== s;
      }
      t.exports = function (c, s) {
        try {
          return i(c, s);
        } catch (d) {
          if ((d.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw d;
        }
      };
    },
  }),
  ii = function (e) {
    return e.reduce(function (t, r) {
      var n = r[0],
        a = r[1];
      return (t[n] = a), t;
    }, {});
  },
  si =
    typeof window < "u" && window.document && window.document.createElement
      ? o.useLayoutEffect
      : o.useEffect,
  we = "top",
  $e = "bottom",
  Le = "right",
  xe = "left",
  Ho = "auto",
  Wr = [we, $e, Le, xe],
  rr = "start",
  Lr = "end",
  Ch = "clippingParents",
  Ms = "viewport",
  xr = "popper",
  Rh = "reference",
  ci = Wr.reduce(function (e, t) {
    return e.concat([t + "-" + rr, t + "-" + Lr]);
  }, []),
  $s = [].concat(Wr, [Ho]).reduce(function (e, t) {
    return e.concat([t, t + "-" + rr, t + "-" + Lr]);
  }, []),
  Ih = "beforeRead",
  Ah = "read",
  _h = "afterRead",
  kh = "beforeMain",
  Oh = "main",
  Th = "afterMain",
  Mh = "beforeWrite",
  $h = "write",
  Lh = "afterWrite",
  zh = [Ih, Ah, _h, kh, Oh, Th, Mh, $h, Lh];
function ot(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ce(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function jt(e) {
  var t = Ce(e).Element;
  return e instanceof t || e instanceof Element;
}
function Me(e) {
  var t = Ce(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Fo(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ce(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Bh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      l = t.elements[r];
    !Me(l) ||
      !ot(l) ||
      (Object.assign(l.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? l.removeAttribute(i) : l.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function Ph(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var a = t.elements[n],
          l = t.attributes[n] || {},
          i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          c = i.reduce(function (s, d) {
            return (s[d] = ""), s;
          }, {});
        !Me(a) ||
          !ot(a) ||
          (Object.assign(a.style, c),
          Object.keys(l).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
var Hh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Bh,
  effect: Ph,
  requires: ["computeStyles"],
};
function at(e) {
  return e.split("-")[0];
}
var zt = Math.max,
  Sn = Math.min,
  nr = Math.round;
function Ga() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Ls() {
  return !/^((?!chrome|android).)*safari/i.test(Ga());
}
function ar(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    a = 1,
    l = 1;
  t &&
    Me(e) &&
    ((a = (e.offsetWidth > 0 && nr(n.width) / e.offsetWidth) || 1),
    (l = (e.offsetHeight > 0 && nr(n.height) / e.offsetHeight) || 1));
  var i = jt(e) ? Ce(e) : window,
    c = i.visualViewport,
    s = !Ls() && r,
    d = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    p = (n.top + (s && c ? c.offsetTop : 0)) / l,
    h = n.width / a,
    m = n.height / l;
  return {
    width: h,
    height: m,
    top: p,
    right: d + h,
    bottom: p + m,
    left: d,
    x: d,
    y: p,
  };
}
function jo(e) {
  var t = ar(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function zs(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Fo(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function ct(e) {
  return Ce(e).getComputedStyle(e);
}
function Fh(e) {
  return ["table", "td", "th"].indexOf(ot(e)) >= 0;
}
function yt(e) {
  return ((jt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Un(e) {
  return ot(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Fo(e) ? e.host : null) || yt(e);
}
function di(e) {
  return !Me(e) || ct(e).position === "fixed" ? null : e.offsetParent;
}
function jh(e) {
  var t = /firefox/i.test(Ga()),
    r = /Trident/i.test(Ga());
  if (r && Me(e)) {
    var n = ct(e);
    if (n.position === "fixed") return null;
  }
  var a = Un(e);
  for (Fo(a) && (a = a.host); Me(a) && ["html", "body"].indexOf(ot(a)) < 0; ) {
    var l = ct(a);
    if (
      l.transform !== "none" ||
      l.perspective !== "none" ||
      l.contain === "paint" ||
      ["transform", "perspective"].indexOf(l.willChange) !== -1 ||
      (t && l.willChange === "filter") ||
      (t && l.filter && l.filter !== "none")
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function qr(e) {
  for (var t = Ce(e), r = di(e); r && Fh(r) && ct(r).position === "static"; )
    r = di(r);
  return r &&
    (ot(r) === "html" || (ot(r) === "body" && ct(r).position === "static"))
    ? t
    : r || jh(e) || t;
}
function No(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Rr(e, t, r) {
  return zt(e, Sn(t, r));
}
function Nh(e, t, r) {
  var n = Rr(e, t, r);
  return n > r ? r : n;
}
function Bs() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ps(e) {
  return Object.assign({}, Bs(), e);
}
function Hs(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var Dh = function (e, t) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    Ps(typeof e != "number" ? e : Hs(e, Wr))
  );
};
function Vh(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    l = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = at(r.placement),
    s = No(c),
    d = [xe, Le].indexOf(c) >= 0,
    p = d ? "height" : "width";
  if (!(!l || !i)) {
    var h = Dh(a.padding, r),
      m = jo(l),
      f = s === "y" ? we : xe,
      v = s === "y" ? $e : Le,
      g =
        r.rects.reference[p] + r.rects.reference[s] - i[s] - r.rects.popper[p],
      E = i[s] - r.rects.reference[s],
      x = qr(l),
      y = x ? (s === "y" ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
      b = g / 2 - E / 2,
      w = h[f],
      S = y - m[p] - h[v],
      C = y / 2 - m[p] / 2 + b,
      R = Rr(w, C, S),
      I = s;
    r.modifiersData[n] = ((t = {}), (t[I] = R), (t.centerOffset = R - C), t);
  }
}
function Uh(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (zs(t.elements.popper, a) && (t.elements.arrow = a)));
}
var Wh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Vh,
  effect: Uh,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function or(e) {
  return e.split("-")[1];
}
var qh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Gh(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: nr(r * a) / a || 0, y: nr(n * a) / a || 0 };
}
function ui(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    l = e.variation,
    i = e.offsets,
    c = e.position,
    s = e.gpuAcceleration,
    d = e.adaptive,
    p = e.roundOffsets,
    h = e.isFixed,
    m = i.x,
    f = m === void 0 ? 0 : m,
    v = i.y,
    g = v === void 0 ? 0 : v,
    E = typeof p == "function" ? p({ x: f, y: g }) : { x: f, y: g };
  (f = E.x), (g = E.y);
  var x = i.hasOwnProperty("x"),
    y = i.hasOwnProperty("y"),
    b = xe,
    w = we,
    S = window;
  if (d) {
    var C = qr(r),
      R = "clientHeight",
      I = "clientWidth";
    if (
      (C === Ce(r) &&
        ((C = yt(r)),
        ct(C).position !== "static" &&
          c === "absolute" &&
          ((R = "scrollHeight"), (I = "scrollWidth"))),
      (C = C),
      a === we || ((a === xe || a === Le) && l === Lr))
    ) {
      w = $e;
      var _ = h && C === S && S.visualViewport ? S.visualViewport.height : C[R];
      (g -= _ - n.height), (g *= s ? 1 : -1);
    }
    if (a === xe || ((a === we || a === $e) && l === Lr)) {
      b = Le;
      var k = h && C === S && S.visualViewport ? S.visualViewport.width : C[I];
      (f -= k - n.width), (f *= s ? 1 : -1);
    }
  }
  var O = Object.assign({ position: c }, d && qh),
    T = p === !0 ? Gh({ x: f, y: g }, Ce(r)) : { x: f, y: g };
  if (((f = T.x), (g = T.y), s)) {
    var M;
    return Object.assign(
      {},
      O,
      ((M = {}),
      (M[w] = y ? "0" : ""),
      (M[b] = x ? "0" : ""),
      (M.transform =
        (S.devicePixelRatio || 1) <= 1
          ? "translate(" + f + "px, " + g + "px)"
          : "translate3d(" + f + "px, " + g + "px, 0)"),
      M),
    );
  }
  return Object.assign(
    {},
    O,
    ((t = {}),
    (t[w] = y ? g + "px" : ""),
    (t[b] = x ? f + "px" : ""),
    (t.transform = ""),
    t),
  );
}
function Yh(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    l = r.adaptive,
    i = l === void 0 ? !0 : l,
    c = r.roundOffsets,
    s = c === void 0 ? !0 : c,
    d = {
      placement: at(t.placement),
      variation: or(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ui(
        Object.assign({}, d, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ui(
          Object.assign({}, d, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
var Kh = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Yh,
    data: {},
  },
  rn = { passive: !0 };
function Xh(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    l = a === void 0 ? !0 : a,
    i = n.resize,
    c = i === void 0 ? !0 : i,
    s = Ce(t.elements.popper),
    d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    l &&
      d.forEach(function (p) {
        p.addEventListener("scroll", r.update, rn);
      }),
    c && s.addEventListener("resize", r.update, rn),
    function () {
      l &&
        d.forEach(function (p) {
          p.removeEventListener("scroll", r.update, rn);
        }),
        c && s.removeEventListener("resize", r.update, rn);
    }
  );
}
var Zh = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Xh,
    data: {},
  },
  Jh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function fn(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Jh[t];
  });
}
var Qh = { start: "end", end: "start" };
function pi(e) {
  return e.replace(/start|end/g, function (t) {
    return Qh[t];
  });
}
function Do(e) {
  var t = Ce(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Vo(e) {
  return ar(yt(e)).left + Do(e).scrollLeft;
}
function eg(e, t) {
  var r = Ce(e),
    n = yt(e),
    a = r.visualViewport,
    l = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    (l = a.width), (i = a.height);
    var d = Ls();
    (d || (!d && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: l, height: i, x: c + Vo(e), y: s };
}
function tg(e) {
  var t,
    r = yt(e),
    n = Do(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    l = zt(
      r.scrollWidth,
      r.clientWidth,
      a ? a.scrollWidth : 0,
      a ? a.clientWidth : 0,
    ),
    i = zt(
      r.scrollHeight,
      r.clientHeight,
      a ? a.scrollHeight : 0,
      a ? a.clientHeight : 0,
    ),
    c = -n.scrollLeft + Vo(e),
    s = -n.scrollTop;
  return (
    ct(a || r).direction === "rtl" &&
      (c += zt(r.clientWidth, a ? a.clientWidth : 0) - l),
    { width: l, height: i, x: c, y: s }
  );
}
function Uo(e) {
  var t = ct(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Fs(e) {
  return ["html", "body", "#document"].indexOf(ot(e)) >= 0
    ? e.ownerDocument.body
    : Me(e) && Uo(e)
      ? e
      : Fs(Un(e));
}
function Ir(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Fs(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = Ce(n),
    i = a ? [l].concat(l.visualViewport || [], Uo(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(Ir(Un(i)));
}
function Ya(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function rg(e, t) {
  var r = ar(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function fi(e, t, r) {
  return t === Ms ? Ya(eg(e, r)) : jt(t) ? rg(t, r) : Ya(tg(yt(e)));
}
function ng(e) {
  var t = Ir(Un(e)),
    r = ["absolute", "fixed"].indexOf(ct(e).position) >= 0,
    n = r && Me(e) ? qr(e) : e;
  return jt(n)
    ? t.filter(function (a) {
        return jt(a) && zs(a, n) && ot(a) !== "body";
      })
    : [];
}
function ag(e, t, r, n) {
  var a = t === "clippingParents" ? ng(e) : [].concat(t),
    l = [].concat(a, [r]),
    i = l[0],
    c = l.reduce(
      function (s, d) {
        var p = fi(e, d, n);
        return (
          (s.top = zt(p.top, s.top)),
          (s.right = Sn(p.right, s.right)),
          (s.bottom = Sn(p.bottom, s.bottom)),
          (s.left = zt(p.left, s.left)),
          s
        );
      },
      fi(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function js(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? at(n) : null,
    l = n ? or(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case we:
      s = { x: i, y: t.y - r.height };
      break;
    case $e:
      s = { x: i, y: t.y + t.height };
      break;
    case Le:
      s = { x: t.x + t.width, y: c };
      break;
    case xe:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var d = a ? No(a) : null;
  if (d != null) {
    var p = d === "y" ? "height" : "width";
    switch (l) {
      case rr:
        s[d] = s[d] - (t[p] / 2 - r[p] / 2);
        break;
      case Lr:
        s[d] = s[d] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return s;
}
function zr(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    l = r.strategy,
    i = l === void 0 ? e.strategy : l,
    c = r.boundary,
    s = c === void 0 ? Ch : c,
    d = r.rootBoundary,
    p = d === void 0 ? Ms : d,
    h = r.elementContext,
    m = h === void 0 ? xr : h,
    f = r.altBoundary,
    v = f === void 0 ? !1 : f,
    g = r.padding,
    E = g === void 0 ? 0 : g,
    x = Ps(typeof E != "number" ? E : Hs(E, Wr)),
    y = m === xr ? Rh : xr,
    b = e.rects.popper,
    w = e.elements[v ? y : m],
    S = ag(jt(w) ? w : w.contextElement || yt(e.elements.popper), s, p, i),
    C = ar(e.elements.reference),
    R = js({ reference: C, element: b, strategy: "absolute", placement: a }),
    I = Ya(Object.assign({}, b, R)),
    _ = m === xr ? I : C,
    k = {
      top: S.top - _.top + x.top,
      bottom: _.bottom - S.bottom + x.bottom,
      left: S.left - _.left + x.left,
      right: _.right - S.right + x.right,
    },
    O = e.modifiersData.offset;
  if (m === xr && O) {
    var T = O[a];
    Object.keys(k).forEach(function (M) {
      var F = [Le, $e].indexOf(M) >= 0 ? 1 : -1,
        $ = [we, $e].indexOf(M) >= 0 ? "y" : "x";
      k[M] += T[$] * F;
    });
  }
  return k;
}
function og(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    l = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    d = s === void 0 ? $s : s,
    p = or(n),
    h = p
      ? c
        ? ci
        : ci.filter(function (v) {
            return or(v) === p;
          })
      : Wr,
    m = h.filter(function (v) {
      return d.indexOf(v) >= 0;
    });
  m.length === 0 && (m = h);
  var f = m.reduce(function (v, g) {
    return (
      (v[g] = zr(e, { placement: g, boundary: a, rootBoundary: l, padding: i })[
        at(g)
      ]),
      v
    );
  }, {});
  return Object.keys(f).sort(function (v, g) {
    return f[v] - f[g];
  });
}
function lg(e) {
  if (at(e) === Ho) return [];
  var t = fn(e);
  return [pi(e), t, pi(t)];
}
function ig(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        l = a === void 0 ? !0 : a,
        i = r.altAxis,
        c = i === void 0 ? !0 : i,
        s = r.fallbackPlacements,
        d = r.padding,
        p = r.boundary,
        h = r.rootBoundary,
        m = r.altBoundary,
        f = r.flipVariations,
        v = f === void 0 ? !0 : f,
        g = r.allowedAutoPlacements,
        E = t.options.placement,
        x = at(E),
        y = x === E,
        b = s || (y || !v ? [fn(E)] : lg(E)),
        w = [E].concat(b).reduce(function (J, B) {
          return J.concat(
            at(B) === Ho
              ? og(t, {
                  placement: B,
                  boundary: p,
                  rootBoundary: h,
                  padding: d,
                  flipVariations: v,
                  allowedAutoPlacements: g,
                })
              : B,
          );
        }, []),
        S = t.rects.reference,
        C = t.rects.popper,
        R = new Map(),
        I = !0,
        _ = w[0],
        k = 0;
      k < w.length;
      k++
    ) {
      var O = w[k],
        T = at(O),
        M = or(O) === rr,
        F = [we, $e].indexOf(T) >= 0,
        $ = F ? "width" : "height",
        L = zr(t, {
          placement: O,
          boundary: p,
          rootBoundary: h,
          altBoundary: m,
          padding: d,
        }),
        j = F ? (M ? Le : xe) : M ? $e : we;
      S[$] > C[$] && (j = fn(j));
      var V = fn(j),
        P = [];
      if (
        (l && P.push(L[T] <= 0),
        c && P.push(L[j] <= 0, L[V] <= 0),
        P.every(function (J) {
          return J;
        }))
      ) {
        (_ = O), (I = !1);
        break;
      }
      R.set(O, P);
    }
    if (I)
      for (
        var D = v ? 3 : 1,
          Z = function (J) {
            var B = w.find(function (U) {
              var q = R.get(U);
              if (q)
                return q.slice(0, J).every(function (se) {
                  return se;
                });
            });
            if (B) return (_ = B), "break";
          },
          ne = D;
        ne > 0;
        ne--
      ) {
        var X = Z(ne);
        if (X === "break") break;
      }
    t.placement !== _ &&
      ((t.modifiersData[n]._skip = !0), (t.placement = _), (t.reset = !0));
  }
}
var sg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ig,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function hi(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function gi(e) {
  return [we, Le, $e, xe].some(function (t) {
    return e[t] >= 0;
  });
}
function cg(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    l = t.modifiersData.preventOverflow,
    i = zr(t, { elementContext: "reference" }),
    c = zr(t, { altBoundary: !0 }),
    s = hi(i, n),
    d = hi(c, a, l),
    p = gi(s),
    h = gi(d);
  (t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: d,
    isReferenceHidden: p,
    hasPopperEscaped: h,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": p,
      "data-popper-escaped": h,
    }));
}
var dg = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: cg,
};
function ug(e, t, r) {
  var n = at(e),
    a = [xe, we].indexOf(n) >= 0 ? -1 : 1,
    l = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = l[0],
    c = l[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [xe, Le].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function pg(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    l = a === void 0 ? [0, 0] : a,
    i = $s.reduce(function (p, h) {
      return (p[h] = ug(h, t.rects, l)), p;
    }, {}),
    c = i[t.placement],
    s = c.x,
    d = c.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s),
    (t.modifiersData.popperOffsets.y += d)),
    (t.modifiersData[n] = i);
}
var fg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pg,
};
function hg(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = js({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
var gg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: hg,
  data: {},
};
function mg(e) {
  return e === "x" ? "y" : "x";
}
function vg(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    l = a === void 0 ? !0 : a,
    i = r.altAxis,
    c = i === void 0 ? !1 : i,
    s = r.boundary,
    d = r.rootBoundary,
    p = r.altBoundary,
    h = r.padding,
    m = r.tether,
    f = m === void 0 ? !0 : m,
    v = r.tetherOffset,
    g = v === void 0 ? 0 : v,
    E = zr(t, { boundary: s, rootBoundary: d, padding: h, altBoundary: p }),
    x = at(t.placement),
    y = or(t.placement),
    b = !y,
    w = No(x),
    S = mg(w),
    C = t.modifiersData.popperOffsets,
    R = t.rects.reference,
    I = t.rects.popper,
    _ =
      typeof g == "function"
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    k =
      typeof _ == "number"
        ? { mainAxis: _, altAxis: _ }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, _),
    O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    T = { x: 0, y: 0 };
  if (C) {
    if (l) {
      var M,
        F = w === "y" ? we : xe,
        $ = w === "y" ? $e : Le,
        L = w === "y" ? "height" : "width",
        j = C[w],
        V = j + E[F],
        P = j - E[$],
        D = f ? -I[L] / 2 : 0,
        Z = y === rr ? R[L] : I[L],
        ne = y === rr ? -I[L] : -R[L],
        X = t.elements.arrow,
        J = f && X ? jo(X) : { width: 0, height: 0 },
        B = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Bs(),
        U = B[F],
        q = B[$],
        se = Rr(0, R[L], J[L]),
        ve = b ? R[L] / 2 - D - se - U - k.mainAxis : Z - se - U - k.mainAxis,
        lt = b ? -R[L] / 2 + D + se + q + k.mainAxis : ne + se + q + k.mainAxis,
        _e = t.elements.arrow && qr(t.elements.arrow),
        je = _e ? (w === "y" ? _e.clientTop || 0 : _e.clientLeft || 0) : 0,
        z = (M = O == null ? void 0 : O[w]) != null ? M : 0,
        Pe = j + ve - z - je,
        Ne = j + lt - z,
        St = Rr(f ? Sn(V, Pe) : V, j, f ? zt(P, Ne) : P);
      (C[w] = St), (T[w] = St - j);
    }
    if (c) {
      var Wt,
        De = w === "x" ? we : xe,
        Kr = w === "x" ? $e : Le,
        be = C[S],
        Ct = S === "y" ? "height" : "width",
        Ve = be + E[De],
        qt = be - E[Kr],
        Ue = [we, xe].indexOf(x) !== -1,
        Gt = (Wt = O == null ? void 0 : O[S]) != null ? Wt : 0,
        We = Ue ? Ve : be - R[Ct] - I[Ct] - Gt + k.altAxis,
        pe = Ue ? be + R[Ct] + I[Ct] - Gt - k.altAxis : qt,
        He = f && Ue ? Nh(We, be, pe) : Rr(f ? We : Ve, be, f ? pe : qt);
      (C[S] = He), (T[S] = He - be);
    }
    t.modifiersData[n] = T;
  }
}
var bg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: vg,
  requiresIfExists: ["offset"],
};
function yg(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function wg(e) {
  return e === Ce(e) || !Me(e) ? Do(e) : yg(e);
}
function xg(e) {
  var t = e.getBoundingClientRect(),
    r = nr(t.width) / e.offsetWidth || 1,
    n = nr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Eg(e, t, r) {
  r === void 0 && (r = !1);
  var n = Me(t),
    a = Me(t) && xg(t),
    l = yt(t),
    i = ar(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((ot(t) !== "body" || Uo(l)) && (c = wg(t)),
      Me(t)
        ? ((s = ar(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop))
        : l && (s.x = Vo(l))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function Sg(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (l) {
    t.set(l.name, l);
  });
  function a(l) {
    r.add(l.name);
    var i = [].concat(l.requires || [], l.requiresIfExists || []);
    i.forEach(function (c) {
      if (!r.has(c)) {
        var s = t.get(c);
        s && a(s);
      }
    }),
      n.push(l);
  }
  return (
    e.forEach(function (l) {
      r.has(l.name) || a(l);
    }),
    n
  );
}
function Cg(e) {
  var t = Sg(e);
  return zh.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function Rg(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function Ig(e) {
  var t = e.reduce(function (r, n) {
    var a = r[n.name];
    return (
      (r[n.name] = a
        ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var mi = { placement: "bottom", modifiers: [], strategy: "absolute" };
function bi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Ag(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    l = a === void 0 ? mi : a;
  return function (i, c, s) {
    s === void 0 && (s = l);
    var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, mi, l),
        modifiersData: {},
        elements: { reference: i, popper: c },
        attributes: {},
        styles: {},
      },
      p = [],
      h = !1,
      m = {
        state: d,
        setOptions: function (g) {
          var E = typeof g == "function" ? g(d.options) : g;
          v(),
            (d.options = Object.assign({}, l, d.options, E)),
            (d.scrollParents = {
              reference: jt(i)
                ? Ir(i)
                : i.contextElement
                  ? Ir(i.contextElement)
                  : [],
              popper: Ir(c),
            });
          var x = Cg(Ig([].concat(n, d.options.modifiers)));
          return (
            (d.orderedModifiers = x.filter(function (y) {
              return y.enabled;
            })),
            f(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var g = d.elements,
              E = g.reference,
              x = g.popper;
            if (bi(E, x)) {
              (d.rects = {
                reference: Eg(E, qr(x), d.options.strategy === "fixed"),
                popper: jo(x),
              }),
                (d.reset = !1),
                (d.placement = d.options.placement),
                d.orderedModifiers.forEach(function (I) {
                  return (d.modifiersData[I.name] = Object.assign({}, I.data));
                });
              for (var y = 0; y < d.orderedModifiers.length; y++) {
                if (d.reset === !0) {
                  (d.reset = !1), (y = -1);
                  continue;
                }
                var b = d.orderedModifiers[y],
                  w = b.fn,
                  S = b.options,
                  C = S === void 0 ? {} : S,
                  R = b.name;
                typeof w == "function" &&
                  (d = w({ state: d, options: C, name: R, instance: m }) || d);
              }
            }
          }
        },
        update: Rg(function () {
          return new Promise(function (g) {
            m.forceUpdate(), g(d);
          });
        }),
        destroy: function () {
          v(), (h = !0);
        },
      };
    if (!bi(i, c)) return m;
    m.setOptions(s).then(function (g) {
      !h && s.onFirstUpdate && s.onFirstUpdate(g);
    });
    function f() {
      d.orderedModifiers.forEach(function (g) {
        var E = g.name,
          x = g.options,
          y = x === void 0 ? {} : x,
          b = g.effect;
        if (typeof b == "function") {
          var w = b({ state: d, name: E, instance: m, options: y }),
            S = function () {};
          p.push(w || S);
        }
      });
    }
    function v() {
      p.forEach(function (g) {
        return g();
      }),
        (p = []);
    }
    return m;
  };
}
var _g = [Zh, gg, Kh, Hh, fg, sg, bg, Wh, dg],
  kg = Ag({ defaultModifiers: _g }),
  Og = Re(Sh()),
  Tg = [],
  Mg = function (e, t, r) {
    r === void 0 && (r = {});
    var n = o.useRef(null),
      a = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || "bottom",
        strategy: r.strategy || "absolute",
        modifiers: r.modifiers || Tg,
      },
      l = o.useState({
        styles: {
          popper: { position: a.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      i = l[0],
      c = l[1],
      s = o.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (h) {
            var m = h.state,
              f = Object.keys(m.elements);
            x0.flushSync(function () {
              c({
                styles: ii(
                  f.map(function (v) {
                    return [v, m.styles[v] || {}];
                  }),
                ),
                attributes: ii(
                  f.map(function (v) {
                    return [v, m.attributes[v]];
                  }),
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      d = o.useMemo(
        function () {
          var h = {
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [
              s,
              { name: "applyStyles", enabled: !1 },
            ]),
          };
          return (0, Og.default)(n.current, h)
            ? n.current || h
            : ((n.current = h), h);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, s],
      ),
      p = o.useRef();
    return (
      si(
        function () {
          p.current && p.current.setOptions(d);
        },
        [d],
      ),
      si(
        function () {
          if (!(e == null || t == null)) {
            var h = r.createPopper || kg,
              m = h(e, t, d);
            return (
              (p.current = m),
              function () {
                m.destroy(), (p.current = null);
              }
            );
          }
        },
        [e, t, r.createPopper],
      ),
      {
        state: p.current ? p.current.state : null,
        styles: i.styles,
        attributes: i.attributes,
        update: p.current ? p.current.update : null,
        forceUpdate: p.current ? p.current.forceUpdate : null,
      }
    );
  };
function Ns(e) {
  var t = o.useRef(e);
  return (
    (t.current = e),
    o.useCallback(function () {
      return t.current;
    }, [])
  );
}
var $g = function () {};
function Lg(e) {
  var t = e.initial,
    r = e.value,
    n = e.onChange,
    a = n === void 0 ? $g : n;
  if (t === void 0 && r === void 0)
    throw new TypeError(
      'Either "value" or "initial" variable must be set. Now both are undefined',
    );
  var l = o.useState(t),
    i = l[0],
    c = l[1],
    s = Ns(i),
    d = o.useCallback(
      function (h) {
        var m = s(),
          f = typeof h == "function" ? h(m) : h;
        typeof f.persist == "function" && f.persist(),
          c(f),
          typeof a == "function" && a(f);
      },
      [s, a],
    ),
    p = r !== void 0;
  return [p ? r : i, p ? a : d];
}
function Ds(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: t,
        right: e,
        bottom: t,
        left: e,
        x: 0,
        y: 0,
        toJSON: function () {
          return null;
        },
      };
    }
  );
}
var zg = ["styles", "attributes"],
  yi = { getBoundingClientRect: Ds() },
  wi = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 },
    offset: [0, 6],
    trigger: "hover",
  };
function Bg(e, t) {
  var r, n, a;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var l = Object.keys(wi).reduce(function ($, L) {
      var j;
      return G({}, $, ((j = {}), (j[L] = $[L] !== void 0 ? $[L] : wi[L]), j));
    }, e),
    i = o.useMemo(
      function () {
        return [{ name: "offset", options: { offset: l.offset } }];
      },
      Array.isArray(l.offset) ? l.offset : [],
    ),
    c = G({}, t, {
      placement: t.placement || l.placement,
      modifiers: t.modifiers || i,
    }),
    s = o.useState(null),
    d = s[0],
    p = s[1],
    h = o.useState(null),
    m = h[0],
    f = h[1],
    v = Lg({
      initial: l.defaultVisible,
      value: l.visible,
      onChange: l.onVisibleChange,
    }),
    g = v[0],
    E = v[1],
    x = o.useRef();
  o.useEffect(function () {
    return function () {
      return clearTimeout(x.current);
    };
  }, []);
  var y = Mg(l.followCursor ? yi : d, m, c),
    b = y.styles,
    w = y.attributes,
    S = Io(y, zg),
    C = S.update,
    R = Ns({ visible: g, triggerRef: d, tooltipRef: m, finalConfig: l }),
    I = o.useCallback(
      function ($) {
        return Array.isArray(l.trigger)
          ? l.trigger.includes($)
          : l.trigger === $;
      },
      Array.isArray(l.trigger) ? l.trigger : [l.trigger],
    ),
    _ = o.useCallback(
      function () {
        clearTimeout(x.current),
          (x.current = window.setTimeout(function () {
            return E(!1);
          }, l.delayHide));
      },
      [l.delayHide, E],
    ),
    k = o.useCallback(
      function () {
        clearTimeout(x.current),
          (x.current = window.setTimeout(function () {
            return E(!0);
          }, l.delayShow));
      },
      [l.delayShow, E],
    ),
    O = o.useCallback(
      function () {
        R().visible ? _() : k();
      },
      [R, _, k],
    );
  o.useEffect(
    function () {
      if (R().finalConfig.closeOnOutsideClick) {
        var $ = function (L) {
          var j,
            V = R(),
            P = V.tooltipRef,
            D = V.triggerRef,
            Z =
              (L.composedPath == null || (j = L.composedPath()) == null
                ? void 0
                : j[0]) || L.target;
          Z instanceof Node &&
            P != null &&
            D != null &&
            !P.contains(Z) &&
            !D.contains(Z) &&
            _();
        };
        return (
          document.addEventListener("mousedown", $),
          function () {
            return document.removeEventListener("mousedown", $);
          }
        );
      }
    },
    [R, _],
  ),
    o.useEffect(
      function () {
        if (!(d == null || !I("click")))
          return (
            d.addEventListener("click", O),
            function () {
              return d.removeEventListener("click", O);
            }
          );
      },
      [d, I, O],
    ),
    o.useEffect(
      function () {
        if (!(d == null || !I("double-click")))
          return (
            d.addEventListener("dblclick", O),
            function () {
              return d.removeEventListener("dblclick", O);
            }
          );
      },
      [d, I, O],
    ),
    o.useEffect(
      function () {
        if (!(d == null || !I("right-click"))) {
          var $ = function (L) {
            L.preventDefault(), O();
          };
          return (
            d.addEventListener("contextmenu", $),
            function () {
              return d.removeEventListener("contextmenu", $);
            }
          );
        }
      },
      [d, I, O],
    ),
    o.useEffect(
      function () {
        if (!(d == null || !I("focus")))
          return (
            d.addEventListener("focus", k),
            d.addEventListener("blur", _),
            function () {
              d.removeEventListener("focus", k),
                d.removeEventListener("blur", _);
            }
          );
      },
      [d, I, k, _],
    ),
    o.useEffect(
      function () {
        if (!(d == null || !I("hover")))
          return (
            d.addEventListener("mouseenter", k),
            d.addEventListener("mouseleave", _),
            function () {
              d.removeEventListener("mouseenter", k),
                d.removeEventListener("mouseleave", _);
            }
          );
      },
      [d, I, k, _],
    ),
    o.useEffect(
      function () {
        if (!(m == null || !I("hover") || !R().finalConfig.interactive))
          return (
            m.addEventListener("mouseenter", k),
            m.addEventListener("mouseleave", _),
            function () {
              m.removeEventListener("mouseenter", k),
                m.removeEventListener("mouseleave", _);
            }
          );
      },
      [m, I, k, _, R],
    );
  var T =
    S == null ||
    (r = S.state) == null ||
    (n = r.modifiersData) == null ||
    (a = n.hide) == null
      ? void 0
      : a.isReferenceHidden;
  o.useEffect(
    function () {
      l.closeOnTriggerHidden && T && _();
    },
    [l.closeOnTriggerHidden, _, T],
  ),
    o.useEffect(
      function () {
        if (!l.followCursor || d == null) return;
        function $(L) {
          var j = L.clientX,
            V = L.clientY;
          (yi.getBoundingClientRect = Ds(j, V)), C == null || C();
        }
        return (
          d.addEventListener("mousemove", $),
          function () {
            return d.removeEventListener("mousemove", $);
          }
        );
      },
      [l.followCursor, d, C],
    ),
    o.useEffect(
      function () {
        if (!(m == null || C == null || l.mutationObserverOptions == null)) {
          var $ = new MutationObserver(C);
          return (
            $.observe(m, l.mutationObserverOptions),
            function () {
              return $.disconnect();
            }
          );
        }
      },
      [l.mutationObserverOptions, m, C],
    );
  var M = function ($) {
      return (
        $ === void 0 && ($ = {}),
        G({}, $, { style: G({}, $.style, b.popper) }, w.popper, {
          "data-popper-interactive": l.interactive,
        })
      );
    },
    F = function ($) {
      return (
        $ === void 0 && ($ = {}),
        G({}, $, w.arrow, {
          style: G({}, $.style, b.arrow),
          "data-popper-arrow": !0,
        })
      );
    };
  return G(
    {
      getArrowProps: F,
      getTooltipProps: M,
      setTooltipRef: f,
      setTriggerRef: p,
      tooltipRef: m,
      triggerRef: d,
      visible: g,
    },
    S,
  );
}
var ke = Dt(1e3)((e, t, r, n = 0) => (t.split("-")[0] === e ? r : n)),
  pt = 8,
  Pg = A.div(
    { position: "absolute", borderStyle: "solid" },
    ({ placement: e }) => {
      let t = 0,
        r = 0;
      switch (!0) {
        case e.startsWith("left") || e.startsWith("right"): {
          r = 8;
          break;
        }
        case e.startsWith("top") || e.startsWith("bottom"): {
          t = 8;
          break;
        }
      }
      return { transform: `translate3d(${t}px, ${r}px, 0px)` };
    },
    ({ theme: e, color: t, placement: r }) => ({
      bottom: `${ke("top", r, `${pt * -1}px`, "auto")}`,
      top: `${ke("bottom", r, `${pt * -1}px`, "auto")}`,
      right: `${ke("left", r, `${pt * -1}px`, "auto")}`,
      left: `${ke("right", r, `${pt * -1}px`, "auto")}`,
      borderBottomWidth: `${ke("top", r, "0", pt)}px`,
      borderTopWidth: `${ke("bottom", r, "0", pt)}px`,
      borderRightWidth: `${ke("left", r, "0", pt)}px`,
      borderLeftWidth: `${ke("right", r, "0", pt)}px`,
      borderTopColor: ke(
        "top",
        r,
        e.color[t] || t || e.base === "light"
          ? Cr(e.background.app)
          : e.background.app,
        "transparent",
      ),
      borderBottomColor: ke(
        "bottom",
        r,
        e.color[t] || t || e.base === "light"
          ? Cr(e.background.app)
          : e.background.app,
        "transparent",
      ),
      borderLeftColor: ke(
        "left",
        r,
        e.color[t] || t || e.base === "light"
          ? Cr(e.background.app)
          : e.background.app,
        "transparent",
      ),
      borderRightColor: ke(
        "right",
        r,
        e.color[t] || t || e.base === "light"
          ? Cr(e.background.app)
          : e.background.app,
        "transparent",
      ),
    }),
  ),
  Hg = A.div(
    ({ hidden: e }) => ({
      display: e ? "none" : "inline-block",
      zIndex: 2147483647,
    }),
    ({ theme: e, color: t, hasChrome: r }) =>
      r
        ? {
            background:
              e.color[t] || t || e.base === "light"
                ? Cr(e.background.app)
                : e.background.app,
            filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
            borderRadius: e.appBorderRadius,
            fontSize: e.typography.size.s1,
          }
        : {},
  ),
  Wo = u.forwardRef(
    (
      {
        placement: e,
        hasChrome: t,
        children: r,
        arrowProps: n,
        tooltipRef: a,
        color: l,
        withArrows: i,
        ...c
      },
      s,
    ) =>
      u.createElement(
        Hg,
        { "data-testid": "tooltip", hasChrome: t, ref: s, ...c, color: l },
        t && i && u.createElement(Pg, { placement: e, ...n, color: l }),
        r,
      ),
  );
Wo.displayName = "Tooltip";
Wo.defaultProps = {
  color: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: "top",
  arrowProps: {},
};
var { document: hn } = Eh,
  Fg = A.div`
  display: inline-block;
  cursor: ${(e) => (e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer")};
`,
  jg = A.g`
  cursor: ${(e) => (e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer")};
`,
  Vs = ({
    svg: e,
    trigger: t,
    closeOnOutsideClick: r,
    placement: n,
    hasChrome: a,
    withArrows: l,
    offset: i,
    tooltip: c,
    children: s,
    closeOnTriggerHidden: d,
    mutationObserverOptions: p,
    defaultVisible: h,
    delayHide: m,
    visible: f,
    interactive: v,
    delayShow: g,
    modifiers: E,
    strategy: x,
    followCursor: y,
    onVisibleChange: b,
    ...w
  }) => {
    let S = e ? jg : Fg,
      {
        getArrowProps: C,
        getTooltipProps: R,
        setTooltipRef: I,
        setTriggerRef: _,
        visible: k,
        state: O,
      } = Bg(
        {
          trigger: t,
          placement: n,
          defaultVisible: h,
          delayHide: m,
          interactive: v,
          closeOnOutsideClick: r,
          closeOnTriggerHidden: d,
          onVisibleChange: b,
          delayShow: g,
          followCursor: y,
          mutationObserverOptions: p,
          visible: f,
          offset: i,
        },
        { modifiers: E, strategy: x },
      ),
      T = u.createElement(
        Wo,
        {
          placement: O == null ? void 0 : O.placement,
          ref: I,
          hasChrome: a,
          arrowProps: C(),
          withArrows: l,
          ...R(),
        },
        typeof c == "function" ? c({ onHide: () => b(!1) }) : c,
      );
    return u.createElement(
      u.Fragment,
      null,
      u.createElement(S, { trigger: t, ref: _, ...w }, s),
      k && Z1.createPortal(T, hn.body),
    );
  };
Vs.defaultProps = {
  svg: !1,
  trigger: "click",
  closeOnOutsideClick: !1,
  placement: "top",
  modifiers: [
    { name: "preventOverflow", options: { padding: 8 } },
    { name: "offset", options: { offset: [8, 8] } },
    { name: "arrow", options: { padding: 8 } },
  ],
  hasChrome: !0,
  defaultVisible: !1,
};
var Ng = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
    let [n, a] = o.useState(e),
      l = o.useCallback(
        (i) => {
          (t && t(i) === !1) || a(i);
        },
        [t],
      );
    return (
      o.useEffect(() => {
        let i = () => l(!1);
        hn.addEventListener("keydown", i, !1);
        let c = Array.from(hn.getElementsByTagName("iframe")),
          s = [];
        return (
          c.forEach((d) => {
            let p = () => {
              try {
                d.contentWindow.document &&
                  (d.contentWindow.document.addEventListener("click", i),
                  s.push(() => {
                    try {
                      d.contentWindow.document.removeEventListener("click", i);
                    } catch {}
                  }));
              } catch {}
            };
            p(),
              d.addEventListener("load", p),
              s.push(() => {
                d.removeEventListener("load", p);
              });
          }),
          () => {
            hn.removeEventListener("keydown", i),
              s.forEach((d) => {
                d();
              });
          }
        );
      }),
      u.createElement(Vs, { ...r, visible: n, onVisibleChange: l })
    );
  },
  Dg = [
    {
      name: "Images",
      icons: [
        "PhotoIcon",
        "ComponentIcon",
        "GridIcon",
        "OutlineIcon",
        "PhotoDragIcon",
        "GridAltIcon",
        "SearchIcon",
        "ZoomIcon",
        "ZoomOutIcon",
        "ZoomResetIcon",
        "EyeIcon",
        "EyeCloseIcon",
        "LightningIcon",
        "LightningOffIcon",
        "ContrastIcon",
        "SwitchAltIcon",
        "MirrorIcon",
        "GrowIcon",
        "PaintBrushIcon",
        "RulerIcon",
        "StopIcon",
        "CameraIcon",
        "VideoIcon",
        "SpeakerIcon",
        "PlayIcon",
        "PlayBackIcon",
        "PlayNextIcon",
        "RewindIcon",
        "FastForwardIcon",
        "StopAltIcon",
        "SideBySideIcon",
        "StackedIcon",
        "SunIcon",
        "MoonIcon",
      ],
    },
    {
      name: "Documents",
      icons: [
        "BookIcon",
        "DocumentIcon",
        "CopyIcon",
        "CategoryIcon",
        "FolderIcon",
        "PrintIcon",
        "GraphLineIcon",
        "CalendarIcon",
        "GraphBarIcon",
        "AlignLeftIcon",
        "AlignRightIcon",
        "FilterIcon",
        "DocChartIcon",
        "DocListIcon",
        "DragIcon",
        "MenuIcon",
      ],
    },
    {
      name: "Editing",
      icons: [
        "MarkupIcon",
        "BoldIcon",
        "ItalicIcon",
        "PaperClipIcon",
        "ListOrderedIcon",
        "ListUnorderedIcon",
        "ParagraphIcon",
        "MarkdownIcon",
      ],
    },
    {
      name: "Git",
      icons: [
        "RepoIcon",
        "CommitIcon",
        "BranchIcon",
        "PullRequestIcon",
        "MergeIcon",
      ],
    },
    {
      name: "OS",
      icons: [
        "AppleIcon",
        "LinuxIcon",
        "UbuntuIcon",
        "WindowsIcon",
        "ChromeIcon",
      ],
    },
    {
      name: "Logos",
      icons: [
        "StorybookIcon",
        "AzureDevOpsIcon",
        "BitbucketIcon",
        "ChromaticIcon",
        "ComponentDrivenIcon",
        "DiscordIcon",
        "FacebookIcon",
        "FigmaIcon",
        "GDriveIcon",
        "GithubIcon",
        "GitlabIcon",
        "GoogleIcon",
        "GraphqlIcon",
        "MediumIcon",
        "ReduxIcon",
        "TwitterIcon",
        "YoutubeIcon",
        "VSCodeIcon",
        "LinkedinIcon",
        "XIcon",
      ],
    },
    {
      name: "Devices",
      icons: [
        "BrowserIcon",
        "TabletIcon",
        "MobileIcon",
        "WatchIcon",
        "SidebarIcon",
        "SidebarAltIcon",
        "SidebarAltToggleIcon",
        "SidebarToggleIcon",
        "BottomBarIcon",
        "BottomBarToggleIcon",
        "CPUIcon",
        "DatabaseIcon",
        "MemoryIcon",
        "StructureIcon",
        "BoxIcon",
        "PowerIcon",
      ],
    },
    {
      name: "CRUD",
      icons: [
        "EditIcon",
        "CogIcon",
        "NutIcon",
        "WrenchIcon",
        "EllipsisIcon",
        "WandIcon",
        "CheckIcon",
        "FormIcon",
        "BatchDenyIcon",
        "BatchAcceptIcon",
        "ControlsIcon",
        "PlusIcon",
        "CloseAltIcon",
        "CrossIcon",
        "TrashIcon",
        "PinAltIcon",
        "UnpinIcon",
        "AddIcon",
        "SubtractIcon",
        "CloseIcon",
        "DeleteIcon",
        "PassedIcon",
        "ChangedIcon",
        "FailedIcon",
        "ClearIcon",
        "CommentIcon",
        "CommentAddIcon",
        "RequestChangeIcon",
        "CommentsIcon",
        "ChatIcon",
        "LockIcon",
        "UnlockIcon",
        "KeyIcon",
        "OutboxIcon",
        "CreditIcon",
        "ButtonIcon",
        "TypeIcon",
        "PointerDefaultIcon",
        "PointerHandIcon",
        "CommandIcon",
      ],
    },
    {
      name: "Communicate",
      icons: [
        "InfoIcon",
        "QuestionIcon",
        "SupportIcon",
        "AlertIcon",
        "AlertAltIcon",
        "EmailIcon",
        "PhoneIcon",
        "LinkIcon",
        "LinkBrokenIcon",
        "BellIcon",
        "RSSIcon",
        "ShareAltIcon",
        "ShareIcon",
        "JumpToIcon",
        "CircleHollowIcon",
        "CircleIcon",
        "BookmarkHollowIcon",
        "BookmarkIcon",
        "DiamondIcon",
        "HeartHollowIcon",
        "HeartIcon",
        "StarHollowIcon",
        "StarIcon",
        "CertificateIcon",
        "VerifiedIcon",
        "ThumbsUpIcon",
        "ShieldIcon",
        "BasketIcon",
        "BeakerIcon",
        "HourglassIcon",
        "FlagIcon",
        "CloudHollowIcon",
        "CloudIcon",
        "StickerIcon",
      ],
    },
    {
      name: "Wayfinding",
      icons: [
        "ChevronUpIcon",
        "ChevronDownIcon",
        "ChevronLeftIcon",
        "ChevronRightIcon",
        "ChevronSmallUpIcon",
        "ChevronSmallDownIcon",
        "ChevronSmallLeftIcon",
        "ChevronSmallRightIcon",
        "ArrowUpIcon",
        "ArrowDownIcon",
        "ArrowLeftIcon",
        "ArrowRightIcon",
        "ArrowTopLeftIcon",
        "ArrowTopRightIcon",
        "ArrowBottomLeftIcon",
        "ArrowBottomRightIcon",
        "ArrowSolidUpIcon",
        "ArrowSolidDownIcon",
        "ArrowSolidLeftIcon",
        "ArrowSolidRightIcon",
        "ExpandAltIcon",
        "CollapseIcon",
        "ExpandIcon",
        "UnfoldIcon",
        "TransferIcon",
        "RedirectIcon",
        "UndoIcon",
        "ReplyIcon",
        "SyncIcon",
        "UploadIcon",
        "DownloadIcon",
        "BackIcon",
        "ProceedIcon",
        "RefreshIcon",
        "GlobeIcon",
        "CompassIcon",
        "LocationIcon",
        "PinIcon",
        "TimeIcon",
        "DashboardIcon",
        "TimerIcon",
        "HomeIcon",
        "AdminIcon",
        "DirectionIcon",
      ],
    },
    {
      name: "People",
      icons: [
        "UserIcon",
        "UserAltIcon",
        "UserAddIcon",
        "UsersIcon",
        "ProfileIcon",
        "FaceHappyIcon",
        "FaceNeutralIcon",
        "FaceSadIcon",
        "AccessibilityIcon",
        "AccessibilityAltIcon",
      ],
    },
  ],
  Vg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z",
        fill: e,
      }),
    ),
  ),
  Ug = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
        fill: e,
      }),
    ),
  ),
  Wg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5H6a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H1.5a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5h3.5v3.5H2zM7.5 1.504a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5zM1.5 7.504a.5.5 0 00-.5.5v4.5a.5.5 0 00.5.5H6a.5.5 0 00.5-.5v-4.5a.5.5 0 00-.5-.5H1.5zm.5 1v3.5h3.5v-3.5H2zM7.5 8.004a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5z",
        fill: e,
      }),
    ),
  ),
  qg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2 2.004v2H1v-2.5a.5.5 0 01.5-.5H4v1H2zM1 9.004v-4h1v4H1zM1 10.004v2.5a.5.5 0 00.5.5H4v-1H2v-2H1zM10 13.004h2.5a.5.5 0 00.5-.5v-2.5h-1v2h-2v1zM12 4.004h1v-2.5a.5.5 0 00-.5-.5H10v1h2v2zM9 12.004v1H5v-1h4zM9 1.004v1H5v-1h4zM13 9.004h-1v-4h1v4zM7 8.004a1 1 0 100-2 1 1 0 000 2z",
        fill: e,
      }),
    ),
  ),
  Gg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.25 3.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7.003v-6.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v2.5h1v-2h2v6.5a.5.5 0 00.5.5H10v2H8v1h2.5a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-3.5zm-10-6v5.794L5.646 5.15a.5.5 0 01.708 0L7.5 6.297l2.646-2.647a.5.5 0 01.708 0L13 5.797V1.004H4zm9 6.208l-2.5-2.5-2.293 2.293L9.354 8.15a.5.5 0 11-.708.707L6 6.211l-2 2v1.793h9V7.21z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M0 10.004v-3h1v3H0zM0 13.504v-2.5h1v2h2v1H.5a.5.5 0 01-.5-.5zM7 14.004H4v-1h3v1z",
        fill: e,
      }),
    ),
  ),
  Yg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M4 3V1h1v2H4zM4 6v2h1V6H4zM4 11v2h1v-2H4zM9 11v2h1v-2H9zM9 8V6h1v2H9zM9 1v2h1V1H9zM13 5h-2V4h2v1zM11 10h2V9h-2v1zM3 10H1V9h2v1zM1 5h2V4H1v1zM8 5H6V4h2v1zM6 10h2V9H6v1zM4 4h1v1H4V4zM10 4H9v1h1V4zM9 9h1v1H9V9zM5 9H4v1h1V9z",
        fill: e,
      }),
    ),
  ),
  Kg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
        fill: e,
      }),
    ),
  ),
  Us = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M6 3.5a.5.5 0 01.5.5v1.5H8a.5.5 0 010 1H6.5V8a.5.5 0 01-1 0V6.5H4a.5.5 0 010-1h1.5V4a.5.5 0 01.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
        fill: e,
      }),
    ),
  ),
  Ws = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M4 5.5a.5.5 0 000 1h4a.5.5 0 000-1H4z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 11.5c1.35 0 2.587-.487 3.544-1.294a.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 106 11.5zm0-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9z",
        fill: e,
      }),
    ),
  ),
  qs = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.5 2.837V1.5a.5.5 0 00-1 0V4a.5.5 0 00.5.5h2.5a.5.5 0 000-1H2.258a4.5 4.5 0 11-.496 4.016.5.5 0 10-.942.337 5.502 5.502 0 008.724 2.353.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 101.5 2.837z",
        fill: e,
      }),
    ),
  ),
  Gs = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7l-.21.293C13.669 7.465 10.739 11.5 7 11.5S.332 7.465.21 7.293L0 7l.21-.293C.331 6.536 3.261 2.5 7 2.5s6.668 4.036 6.79 4.207L14 7zM2.896 5.302A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5c1.518 0 2.958-.83 4.104-1.802A12.72 12.72 0 0012.755 7c-.297-.37-.875-1.04-1.65-1.698C9.957 4.33 8.517 3.5 7 3.5c-1.519 0-2.958.83-4.104 1.802z",
        fill: e,
      }),
    ),
  ),
  Ys = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11zM11.104 8.698c-.177.15-.362.298-.553.439l.714.714a13.25 13.25 0 002.526-2.558L14 7l-.21-.293C13.669 6.536 10.739 2.5 7 2.5c-.89 0-1.735.229-2.506.58l.764.763A4.859 4.859 0 017 3.5c1.518 0 2.958.83 4.104 1.802A12.724 12.724 0 0112.755 7a12.72 12.72 0 01-1.65 1.698zM.21 6.707c.069-.096 1.03-1.42 2.525-2.558l.714.714c-.191.141-.376.288-.553.439A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5a4.86 4.86 0 001.742-.344l.764.764c-.772.351-1.616.58-2.506.58C3.262 11.5.332 7.465.21 7.293L0 7l.21-.293z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M4.5 7c0-.322.061-.63.172-.914l3.242 3.242A2.5 2.5 0 014.5 7zM9.328 7.914L6.086 4.672a2.5 2.5 0 013.241 3.241z",
        fill: e,
      }),
    ),
  ),
  Xg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.522 6.6a.566.566 0 00-.176.544.534.534 0 00.382.41l2.781.721-1.493 5.013a.563.563 0 00.216.627.496.496 0 00.63-.06l6.637-6.453a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L2.522 6.6zm7.72.63l-3.067-.804L9.02 2.29 3.814 6.803l2.95.764-1.277 4.285 4.754-4.622zM4.51 13.435l.037.011-.037-.011z",
        fill: e,
      }),
    ),
  ),
  Ks = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
        fill: e,
      }),
    ),
  ),
  Zg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z",
        fill: e,
      }),
    ),
  ),
  Jg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 3.004v-2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H11v2.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H3zm1 0v-2h9v9h-2v-6.5a.5.5 0 00-.5-.5H4zm6 8v2H1v-9h2v6.5a.5.5 0 00.5.5H10zm0-1H4v-6h6v6z",
        fill: e,
      }),
    ),
  ),
  Qg = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5h10v-10l-10 10z",
        fill: e,
      }),
    ),
  ),
  em = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.5 1.004a.5.5 0 100 1H12v10.5a.5.5 0 001 0v-10.5a1 1 0 00-1-1H1.5z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M1 3.504a.5.5 0 01.5-.5H10a1 1 0 011 1v8.5a.5.5 0 01-1 0v-8.5H1.5a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 5.004a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7zm.5 1v6h6v-6H2z",
        fill: e,
      }),
    ),
  ),
  tm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.854.146a.5.5 0 00-.708 0L2.983 8.31a2.24 2.24 0 00-1.074.6C.677 10.14.24 11.902.085 12.997 0 13.6 0 14 0 14s.4 0 1.002-.085c1.095-.155 2.857-.592 4.089-1.824a2.24 2.24 0 00.6-1.074l8.163-8.163a.5.5 0 000-.708l-2-2zM5.6 9.692l.942-.942L5.25 7.457l-.942.943A2.242 2.242 0 015.6 9.692zm1.649-1.65L12.793 2.5 11.5 1.207 5.957 6.75 7.25 8.043zM4.384 9.617a1.25 1.25 0 010 1.768c-.767.766-1.832 1.185-2.78 1.403-.17.04-.335.072-.49.098.027-.154.06-.318.099-.49.219-.947.637-2.012 1.403-2.779a1.25 1.25 0 011.768 0z",
        fill: e,
      }),
    ),
  ),
  rm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.5 1.004a.5.5 0 01.5.5v.5h10v-.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-.5H2v.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-11zM2 7v5h10V7h-1v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H7.5v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H4v2.5a.5.5 0 01-1 0V7H2z",
        fill: e,
      }),
    ),
  ),
  nm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: e,
      }),
    ),
  ),
  am = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 7a3 3 0 11-6 0 3 3 0 016 0zM9 7a2 2 0 11-4 0 2 2 0 014 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.5 1a.5.5 0 00-.5.5v.504H.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H6V1.5a.5.5 0 00-.5-.5h-3zM1 3.004v8h12v-8H1z",
        fill: e,
      }),
    ),
  ),
  Xs = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2.5 10a.5.5 0 100-1 .5.5 0 000 1z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 4a2 2 0 012-2h6a2 2 0 012 2v.5l3.189-2.391A.5.5 0 0114 2.5v9a.5.5 0 01-.804.397L10 9.5v.5a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm9 0v1.5a.5.5 0 00.8.4L13 3.5v7L9.8 8.1a.5.5 0 00-.8.4V10a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1z",
        fill: e,
      }),
    ),
  ),
  om = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 4.5v5a.5.5 0 00.5.5H4l3.17 2.775a.5.5 0 00.83-.377V1.602a.5.5 0 00-.83-.376L4 4H1.5a.5.5 0 00-.5.5zM4 9V5H2v4h2zm.998.545A.504.504 0 005 9.5v-5c0-.015 0-.03-.002-.044L7 2.704v8.592L4.998 9.545z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M10.15 1.752a.5.5 0 00-.3.954 4.502 4.502 0 010 8.588.5.5 0 00.3.954 5.502 5.502 0 000-10.496z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M10.25 3.969a.5.5 0 00-.5.865 2.499 2.499 0 010 4.332.5.5 0 10.5.866 3.499 3.499 0 000-6.063z",
        fill: e,
      }),
    ),
  ),
  lm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z",
        fill: e,
      }),
    ),
  ),
  im = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.24 12.035L3.697 7.427A.494.494 0 013.5 7.2v4.05a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0V6.8a.494.494 0 01.198-.227l7.541-4.608A.5.5 0 0112 2.39v9.217a.5.5 0 01-.76.427z",
        fill: e,
      }),
    ),
  ),
  sm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2.76 12.035l7.542-4.608A.495.495 0 0010.5 7.2v4.05a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0V6.8a.495.495 0 00-.198-.227L2.76 1.965A.5.5 0 002 2.39v9.217a.5.5 0 00.76.427z",
        fill: e,
      }),
    ),
  ),
  cm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M9 2.42v2.315l4.228-2.736a.5.5 0 01.772.42v9.162a.5.5 0 01-.772.42L9 9.263v2.317a.5.5 0 01-.772.42L1.5 7.647v3.603a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0v3.603L8.228 2A.5.5 0 019 2.42z",
        fill: e,
      }),
    ),
  ),
  dm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5 2.42v2.315L.772 1.999a.5.5 0 00-.772.42v9.162a.5.5 0 00.772.42L5 9.263v2.317a.5.5 0 00.772.42L12.5 7.647v3.603a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0v3.603L5.772 2A.5.5 0 005 2.42z",
        fill: e,
      }),
    ),
  ),
  um = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z",
        fill: e,
      }),
    ),
  ),
  pm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5v-10h5v10H2z",
        fill: e,
      }),
    ),
  ),
  fm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.5 1.004a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11zm-10.5 1h10v5H2v-5z",
        fill: e,
      }),
    ),
  ),
  hm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1107_3492)", fill: e },
        o.createElement("path", {
          d: "M7.5.5a.5.5 0 00-1 0V2a.5.5 0 001 0V.5z",
        }),
        o.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7 10a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 100-4 2 2 0 000 4z",
        }),
        o.createElement("path", {
          d: "M7 11.5a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V12a.5.5 0 01.5-.5zM11.5 7a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zM.5 6.5a.5.5 0 000 1H2a.5.5 0 000-1H.5zM3.818 10.182a.5.5 0 010 .707l-1.06 1.06a.5.5 0 11-.708-.706l1.06-1.06a.5.5 0 01.708 0zM11.95 2.757a.5.5 0 10-.707-.707l-1.061 1.061a.5.5 0 10.707.707l1.06-1.06zM10.182 10.182a.5.5 0 01.707 0l1.06 1.06a.5.5 0 11-.706.708l-1.061-1.06a.5.5 0 010-.708zM2.757 2.05a.5.5 0 10-.707.707l1.06 1.061a.5.5 0 00.708-.707l-1.06-1.06z",
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1107_3492" },
          o.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
        ),
      ),
    ),
  ),
  gm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1107_3493)" },
        o.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.335.047l-.15-.015a7.499 7.499 0 106.14 10.577c.103-.229-.156-.447-.386-.346a5.393 5.393 0 01-.771.27A5.356 5.356 0 019.153.691C9.37.568 9.352.23 9.106.175a7.545 7.545 0 00-.77-.128zM6.977 1.092a6.427 6.427 0 005.336 10.671A6.427 6.427 0 116.977 1.092z",
          fill: e,
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1107_3493" },
          o.createElement("path", {
            fill: "#fff",
            transform: "scale(1.07124)",
            d: "M0 0h14.001v14.002H0z",
          }),
        ),
      ),
    ),
  ),
  mm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13 2a2 2 0 00-2-2H1.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H11a2 2 0 002-2V2zM3 13h8a1 1 0 001-1V2a1 1 0 00-1-1H7v6.004a.5.5 0 01-.856.352l-.002-.002L5.5 6.71l-.645.647A.5.5 0 014 7.009V1H3v12zM5 1v4.793l.146-.146a.5.5 0 01.743.039l.111.11V1H5z",
        fill: e,
      }),
    ),
  ),
  Cn = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
        fill: e,
      }),
    ),
  ),
  vm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.746.07A.5.5 0 0011.5.003h-6a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2.5h4.5a.5.5 0 00.5-.5v-8a.498.498 0 00-.15-.357L11.857.154a.506.506 0 00-.11-.085zM9 10.003h4v-7h-1.5a.5.5 0 01-.5-.5v-1.5H6v2h.5a.5.5 0 01.357.15L8.85 5.147c.093.09.15.217.15.357v4.5zm-8-6v9h7v-7H6.5a.5.5 0 01-.5-.5v-1.5H1z",
        fill: e,
      }),
    ),
  ),
  bm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3 1.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM2 3.504a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 5.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-7zM2 12V6h10v6H2z",
        fill: e,
      }),
    ),
  ),
  ym = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
        fill: e,
      }),
    ),
  ),
  wm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M4.5 8.004a.5.5 0 100 1h5a.5.5 0 000-1h-5zM4.5 10.004a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 1.504a.5.5 0 01.5-.5h8a.498.498 0 01.357.15l.993.993c.093.09.15.217.15.357v1.5h1.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H12v2.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5H2v-2.5zm11 7.5h-1v-2.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v2.5H1v-4h12v4zm-2-6v1H3v-2h7v.5a.5.5 0 00.5.5h.5zm-8 9h8v-5H3v5z",
        fill: e,
      }),
    ),
  ),
  xm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.146 6.15a.5.5 0 01.708 0L7 7.297 9.146 5.15a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.707L9.5 6.211 7.354 8.357a.5.5 0 01-.708 0L5.5 7.211 3.854 8.857a.5.5 0 11-.708-.707l2-2z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 1.004a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11zm.5 1v10h10v-10H2z",
        fill: e,
      }),
    ),
  ),
  Em = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 0a.5.5 0 01.5.5V1h6V.5a.5.5 0 011 0V1h1.5a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H3V.5a.5.5 0 01.5-.5zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 4v2.3h3V4H9zM5.5 6.3h3V4h-3v2.3z",
        fill: e,
      }),
    ),
  ),
  Sm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M12 2.5a.5.5 0 00-1 0v10a.5.5 0 001 0v-10zM9 4.5a.5.5 0 00-1 0v8a.5.5 0 001 0v-8zM5.5 7a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zM3 10.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z",
        fill: e,
      }),
    ),
  ),
  Cm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M13 2a.5.5 0 010 1H1a.5.5 0 010-1h12zM10 5a.5.5 0 010 1H1a.5.5 0 010-1h9zM11.5 8.5A.5.5 0 0011 8H1a.5.5 0 000 1h10a.5.5 0 00.5-.5zM7.5 11a.5.5 0 010 1H1a.5.5 0 010-1h6.5z",
        fill: e,
      }),
    ),
  ),
  Rm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM4 5a.5.5 0 000 1h9a.5.5 0 000-1H4zM2.5 8.5A.5.5 0 013 8h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1H13a.5.5 0 000-1H6.5z",
        fill: e,
      }),
    ),
  ),
  Im = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM3 5a.5.5 0 000 1h8a.5.5 0 000-1H3zM4.5 8.5A.5.5 0 015 8h4a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
        fill: e,
      }),
    ),
  ),
  Am = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 6.3h3V4H9v2.3zm-3.5 0h3V4h-3v2.3z",
        fill: e,
      }),
    ),
  ),
  _m = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.5 6.5A.5.5 0 014 6h6a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 9a.5.5 0 000 1h6a.5.5 0 000-1H4z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v8h10V4H2z",
        fill: e,
      }),
    ),
  ),
  km = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M13 4a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 9.5A.5.5 0 0013 9H1a.5.5 0 000 1h12a.5.5 0 00.5-.5z",
        fill: e,
      }),
    ),
  ),
  Om = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M13 3.5a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 10a.5.5 0 00-.5-.5H1a.5.5 0 000 1h12a.5.5 0 00.5-.5zM13 6.5a.5.5 0 010 1H1a.5.5 0 010-1h12z",
        fill: e,
      }),
    ),
  ),
  Tm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M8.982 1.632a.5.5 0 00-.964-.263l-3 11a.5.5 0 10.964.263l3-11zM3.32 3.616a.5.5 0 01.064.704L1.151 7l2.233 2.68a.5.5 0 11-.768.64l-2.5-3a.5.5 0 010-.64l2.5-3a.5.5 0 01.704-.064zM10.68 3.616a.5.5 0 00-.064.704L12.849 7l-2.233 2.68a.5.5 0 00.768.64l2.5-3a.5.5 0 000-.64l-2.5-3a.5.5 0 00-.704-.064z",
        fill: e,
      }),
    ),
  ),
  Mm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 2v1.5h1v7H3V12h5a3 3 0 001.791-5.407A2.75 2.75 0 008 2.011V2H3zm5 5.5H5.5v3H8a1.5 1.5 0 100-3zm-.25-4H5.5V6h2.25a1.25 1.25 0 100-2.5z",
        fill: e,
      }),
    ),
  ),
  $m = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2z",
        fill: e,
      }),
    ),
  ),
  Lm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M10.553 2.268a1.5 1.5 0 00-2.12 0L2.774 7.925a2.5 2.5 0 003.536 3.535l3.535-3.535a.5.5 0 11.707.707l-3.535 3.536-.002.002a3.5 3.5 0 01-4.959-4.941l.011-.011L7.725 1.56l.007-.008a2.5 2.5 0 013.53 3.541l-.002.002-5.656 5.657-.003.003a1.5 1.5 0 01-2.119-2.124l3.536-3.536a.5.5 0 11.707.707L4.189 9.34a.5.5 0 00.707.707l5.657-5.657a1.5 1.5 0 000-2.121z",
        fill: e,
      }),
    ),
  ),
  zm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5 2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2.5 2H1v1h1v3h1V2.5a.5.5 0 00-.5-.5zM3 8.5v1a.5.5 0 01-1 0V9h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5zM2 10.5a.5.5 0 00-1 0V12h2v-1H2v-.5z",
        fill: e,
      }),
    ),
  ),
  Bm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2.75 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.5 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2 12.25a.75.75 0 100-1.5.75.75 0 000 1.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM2 7.75a.75.75 0 100-1.5.75.75 0 000 1.5z",
        fill: e,
      }),
    ),
  ),
  Pm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z",
        fill: e,
      }),
    ),
  ),
  Hm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2 4.5h1.5L5 6.375 6.5 4.5H8v5H6.5V7L5 8.875 3.5 7v2.5H2v-5zM9.75 4.5h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5zM1 3v8h12V3H1z",
        fill: e,
      }),
    ),
  ),
  Fm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 5a.5.5 0 100-1 .5.5 0 000 1zM5 6.5a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 0a2 2 0 012 2v10a2 2 0 01-2 2H1.5a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5H11zm0 1H3v12h8a1 1 0 001-1V2a1 1 0 00-1-1z",
        fill: e,
      }),
    ),
  ),
  jm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.031 7.5a4 4 0 007.938 0H13.5a.5.5 0 000-1h-2.53a4 4 0 00-7.94 0H.501a.5.5 0 000 1h2.531zM7 10a3 3 0 100-6 3 3 0 000 6z",
        fill: e,
      }),
    ),
  ),
  Nm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 2.5a1.5 1.5 0 01-1 1.415v4.053C5.554 7.4 6.367 7 7.5 7c.89 0 1.453-.252 1.812-.557.218-.184.374-.4.482-.62a1.5 1.5 0 111.026.143c-.155.423-.425.87-.86 1.24C9.394 7.685 8.59 8 7.5 8c-1.037 0-1.637.42-1.994.917a2.81 2.81 0 00-.472 1.18A1.5 1.5 0 114 10.086v-6.17A1.5 1.5 0 116 2.5zm-2 9a.5.5 0 111 0 .5.5 0 01-1 0zm1-9a.5.5 0 11-1 0 .5.5 0 011 0zm6 2a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: e,
      }),
    ),
  ),
  Dm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.354 1.354L7.707 2H8.5A2.5 2.5 0 0111 4.5v5.585a1.5 1.5 0 11-1 0V4.5A1.5 1.5 0 008.5 3h-.793l.647.646a.5.5 0 11-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708zM11 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 3.915a1.5 1.5 0 10-1 0v6.17a1.5 1.5 0 101 0v-6.17zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zm0-8a.5.5 0 100-1 .5.5 0 000 1z",
        fill: e,
      }),
    ),
  ),
  Vm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.108 3.872A1.5 1.5 0 103 3.915v6.17a1.5 1.5 0 101 0V6.41c.263.41.573.77.926 1.083 1.108.98 2.579 1.433 4.156 1.5A1.5 1.5 0 109.09 7.99c-1.405-.065-2.62-.468-3.5-1.248-.723-.64-1.262-1.569-1.481-2.871zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zM4 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm7 6a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: e,
      }),
    ),
  ),
  Um = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.03 8.103a3.044 3.044 0 01-.202-1.744 2.697 2.697 0 011.4-1.935c-.749-1.18-1.967-1.363-2.35-1.403-.835-.086-2.01.56-2.648.57h-.016c-.639-.01-1.814-.656-2.649-.57-.415.044-1.741.319-2.541 1.593-.281.447-.498 1.018-.586 1.744a6.361 6.361 0 00-.044.85c.005.305.028.604.07.895.09.62.259 1.207.477 1.744.242.595.543 1.13.865 1.585.712 1.008 1.517 1.59 1.971 1.6.934.021 1.746-.61 2.416-.594.006.002.014.003.02.002h.017c.007 0 .014 0 .021-.002.67-.017 1.481.615 2.416.595.453-.011 1.26-.593 1.971-1.6a7.95 7.95 0 00.97-1.856c-.697-.217-1.27-.762-1.578-1.474zm-2.168-5.97c.717-.848.69-2.07.624-2.125-.065-.055-1.25.163-1.985.984-.735.82-.69 2.071-.624 2.125.064.055 1.268-.135 1.985-.984z",
        fill: e,
      }),
    ),
  ),
  Wm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 0a3 3 0 013 3v1.24c.129.132.25.27.362.415.113.111.283.247.515.433l.194.155c.325.261.711.582 1.095.966.765.765 1.545 1.806 1.823 3.186a.501.501 0 01-.338.581 3.395 3.395 0 01-1.338.134 2.886 2.886 0 01-1.049-.304 5.535 5.535 0 01-.17.519 2 2 0 11-2.892 2.55A5.507 5.507 0 017 13c-.439 0-.838-.044-1.201-.125a2 2 0 11-2.892-2.55 5.553 5.553 0 01-.171-.519c-.349.182-.714.27-1.05.304A3.395 3.395 0 01.35 9.977a.497.497 0 01-.338-.582c.278-1.38 1.058-2.42 1.823-3.186.384-.384.77-.705 1.095-.966l.194-.155c.232-.186.402-.322.515-.433.112-.145.233-.283.362-.414V3a3 3 0 013-3zm1.003 11.895a2 2 0 012.141-1.89c.246-.618.356-1.322.356-2.005 0-.514-.101-1.07-.301-1.599l-.027-.017a6.387 6.387 0 00-.857-.42 6.715 6.715 0 00-1.013-.315l-.852.638a.75.75 0 01-.9 0l-.852-.638a6.716 6.716 0 00-1.693.634 4.342 4.342 0 00-.177.101l-.027.017A4.6 4.6 0 003.501 8c0 .683.109 1.387.355 2.005a2 2 0 012.142 1.89c.295.067.627.105 1.002.105s.707-.038 1.003-.105zM5 12a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM6.1 4.3a1.5 1.5 0 011.8 0l.267.2L7 5.375 5.833 4.5l.267-.2zM8.5 2a.5.5 0 01.5.5V3a.5.5 0 01-1 0v-.5a.5.5 0 01.5-.5zM6 2.5a.5.5 0 00-1 0V3a.5.5 0 001 0v-.5z",
        fill: e,
      }),
    ),
  ),
  qm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1107_3497)", fill: e },
        o.createElement("path", {
          d: "M12.261 2.067c0 1.142-.89 2.068-1.988 2.068-1.099 0-1.99-.926-1.99-2.068C8.283.926 9.174 0 10.273 0c1.098 0 1.989.926 1.989 2.067zM3.978 6.6c0 1.142-.89 2.068-1.989 2.068C.891 8.668 0 7.742 0 6.601c0-1.142.89-2.068 1.989-2.068 1.099 0 1.989.926 1.989 2.068zM6.475 11.921A4.761 4.761 0 014.539 11a4.993 4.993 0 01-1.367-1.696 2.765 2.765 0 01-1.701.217 6.725 6.725 0 001.844 2.635 6.379 6.379 0 004.23 1.577 3.033 3.033 0 01-.582-1.728 4.767 4.767 0 01-.488-.083zM11.813 11.933c0 1.141-.89 2.067-1.989 2.067-1.098 0-1.989-.926-1.989-2.067 0-1.142.891-2.068 1.99-2.068 1.098 0 1.989.926 1.989 2.068zM12.592 11.173a6.926 6.926 0 001.402-3.913 6.964 6.964 0 00-1.076-4.023A2.952 2.952 0 0111.8 4.6c.398.78.592 1.656.564 2.539a5.213 5.213 0 01-.724 2.495c.466.396.8.935.952 1.54zM1.987 3.631c-.05 0-.101.002-.151.004C3.073 1.365 5.504.024 8.005.23a3.07 3.07 0 00-.603 1.676 4.707 4.707 0 00-2.206.596 4.919 4.919 0 00-1.7 1.576 2.79 2.79 0 00-1.509-.447z",
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1107_3497" },
          o.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
        ),
      ),
    ),
  ),
  Gm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M6.5 1H1v5.5h5.5V1zM13 1H7.5v5.5H13V1zM7.5 7.5H13V13H7.5V7.5zM6.5 7.5H1V13h5.5V7.5z",
        fill: e,
      }),
    ),
  ),
  Ym = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1107_3496)" },
        o.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M13.023 3.431a.115.115 0 01-.099.174H7.296A3.408 3.408 0 003.7 6.148a.115.115 0 01-.21.028l-1.97-3.413a.115.115 0 01.01-.129A6.97 6.97 0 017 0a6.995 6.995 0 016.023 3.431zM7 9.615A2.619 2.619 0 014.384 7 2.62 2.62 0 017 4.383 2.619 2.619 0 019.616 7 2.619 2.619 0 017 9.615zm1.034.71a.115.115 0 00-.121-.041 3.4 3.4 0 01-.913.124 3.426 3.426 0 01-3.091-1.973L1.098 3.567a.115.115 0 00-.2.001 7.004 7.004 0 005.058 10.354l.017.001c.04 0 .078-.021.099-.057l1.971-3.414a.115.115 0 00-.009-.128zm1.43-5.954h3.947c.047 0 .09.028.107.072.32.815.481 1.675.481 2.557a6.957 6.957 0 01-2.024 4.923A6.957 6.957 0 017.08 14h-.001a.115.115 0 01-.1-.172L9.794 8.95A3.384 3.384 0 0010.408 7c0-.921-.364-1.785-1.024-2.433a.115.115 0 01.08-.196z",
          fill: e,
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1107_3496" },
          o.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
        ),
      ),
    ),
  ),
  Km = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.042.616a.704.704 0 00-.66.729L1.816 12.9c.014.367.306.66.672.677l9.395.422h.032a.704.704 0 00.704-.703V.704c0-.015 0-.03-.002-.044a.704.704 0 00-.746-.659l-.773.049.057 1.615a.105.105 0 01-.17.086l-.52-.41-.617.468a.105.105 0 01-.168-.088L9.746.134 2.042.616zm8.003 4.747c-.247.192-2.092.324-2.092.05.04-1.045-.429-1.091-.689-1.091-.247 0-.662.075-.662.634 0 .57.607.893 1.32 1.27 1.014.538 2.24 1.188 2.24 2.823 0 1.568-1.273 2.433-2.898 2.433-1.676 0-3.141-.678-2.976-3.03.065-.275 2.197-.21 2.197 0-.026.971.195 1.256.753 1.256.43 0 .624-.236.624-.634 0-.602-.633-.958-1.361-1.367-.987-.554-2.148-1.205-2.148-2.7 0-1.494 1.027-2.489 2.86-2.489 1.832 0 2.832.98 2.832 2.845z",
        fill: e,
      }),
    ),
  ),
  Xm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1107_3503)" },
        o.createElement("path", {
          d: "M0 5.176l1.31-1.73 4.902-1.994V.014l4.299 3.144-8.78 1.706v4.8L0 9.162V5.176zm14-2.595v8.548l-3.355 2.857-5.425-1.783v1.783L1.73 9.661l8.784 1.047v-7.55L14 2.581z",
          fill: e,
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1107_3503" },
          o.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
        ),
      ),
    ),
  ),
  Zm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.522a.411.411 0 00-.412.476l1.746 10.597a.56.56 0 00.547.466h8.373a.411.411 0 00.412-.345l1.017-6.248h-3.87L8.35 9.18H5.677l-.724-3.781h7.904L13.412 2A.411.411 0 0013 1.524L1 1.522z",
        fill: e,
      }),
    ),
  ),
  Jm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7a7 7 0 1014 0A7 7 0 000 7zm5.215-3.869a1.967 1.967 0 013.747.834v1.283l-3.346-1.93a2.486 2.486 0 00-.401-.187zm3.484 2.58l-3.346-1.93a1.968 1.968 0 00-2.685.72 1.954 1.954 0 00.09 2.106 2.45 2.45 0 01.362-.254l1.514-.873a.27.27 0 01.268 0l2.1 1.21 1.697-.978zm-.323 4.972L6.86 9.81a.268.268 0 01-.134-.231V7.155l-1.698-.98v3.86a1.968 1.968 0 003.747.835 2.488 2.488 0 01-.4-.187zm.268-.464a1.967 1.967 0 002.685-.719 1.952 1.952 0 00-.09-2.106c-.112.094-.233.18-.361.253L7.53 9.577l1.113.642zm-4.106.257a1.974 1.974 0 01-1.87-.975A1.95 1.95 0 012.47 8.01c.136-.507.461-.93.916-1.193L4.5 6.175v3.86c0 .148.013.295.039.44zM11.329 4.5a1.973 1.973 0 00-1.87-.976c.025.145.039.292.039.44v1.747a.268.268 0 01-.135.232l-2.1 1.211v1.96l3.346-1.931a1.966 1.966 0 00.72-2.683z",
        fill: e,
      }),
    ),
  ),
  Qm = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M10.847 2.181L8.867.201a.685.685 0 00-.97 0l-4.81 4.81a.685.685 0 000 .969l2.466 2.465-2.405 2.404a.685.685 0 000 .97l1.98 1.98a.685.685 0 00.97 0l4.81-4.81a.685.685 0 000-.969L8.441 5.555l2.405-2.404a.685.685 0 000-.97z",
        fill: e,
      }),
    ),
  ),
  e2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.852 2.885c-.893-.41-1.85-.712-2.85-.884a.043.043 0 00-.046.021c-.123.22-.26.505-.355.73a10.658 10.658 0 00-3.2 0 7.377 7.377 0 00-.36-.73.045.045 0 00-.046-.021c-1 .172-1.957.474-2.85.884a.04.04 0 00-.019.016C.311 5.612-.186 8.257.058 10.869a.048.048 0 00.018.033 11.608 11.608 0 003.496 1.767.045.045 0 00.049-.016c.27-.368.51-.755.715-1.163a.044.044 0 00-.024-.062 7.661 7.661 0 01-1.092-.52.045.045 0 01-.005-.075c.074-.055.147-.112.217-.17a.043.043 0 01.046-.006c2.29 1.046 4.771 1.046 7.035 0a.043.043 0 01.046.006c.07.057.144.115.218.17a.045.045 0 01-.004.075 7.186 7.186 0 01-1.093.52.045.045 0 00-.024.062c.21.407.45.795.715 1.162.011.016.03.023.05.017a11.57 11.57 0 003.5-1.767.045.045 0 00.019-.032c.292-3.02-.49-5.643-2.07-7.969a.036.036 0 00-.018-.016zM4.678 9.279c-.69 0-1.258-.634-1.258-1.411 0-.778.558-1.411 1.258-1.411.707 0 1.27.639 1.259 1.41 0 .778-.558 1.412-1.259 1.412zm4.652 0c-.69 0-1.258-.634-1.258-1.411 0-.778.557-1.411 1.258-1.411.707 0 1.27.639 1.258 1.41 0 .778-.551 1.412-1.258 1.412z",
        fill: e,
      }),
    ),
  ),
  t2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.399 14H5.06V7H3.5V4.588l1.56-.001-.002-1.421C5.058 1.197 5.533 0 7.6 0h1.721v2.413H8.246c-.805 0-.844.337-.844.966l-.003 1.208h1.934l-.228 2.412L7.401 7l-.002 7z",
        fill: e,
      }),
    ),
  ),
  r2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.2 0H4.803A2.603 2.603 0 003.41 4.802a2.603 2.603 0 000 4.396 2.602 2.602 0 103.998 2.199v-2.51a2.603 2.603 0 103.187-4.085A2.604 2.604 0 009.2 0zM7.407 7a1.793 1.793 0 103.586 0 1.793 1.793 0 00-3.586 0zm-.81 2.603H4.803a1.793 1.793 0 101.794 1.794V9.603zM4.803 4.397h1.794V.81H4.803a1.793 1.793 0 000 3.587zm0 .81a1.793 1.793 0 000 3.586h1.794V5.207H4.803zm4.397-.81H7.407V.81H9.2a1.794 1.794 0 010 3.587z",
        fill: e,
      }),
    ),
  ),
  n2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M6.37 8.768l-2.042 3.537h6.755l2.042-3.537H6.37zm6.177-1.003l-3.505-6.07H4.96l3.504 6.07h4.084zM4.378 2.7L.875 8.77l2.042 3.536L6.42 6.236 4.378 2.7z",
        fill: e,
      }),
    ),
  ),
  a2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 0C3.132 0 0 3.132 0 7a6.996 6.996 0 004.786 6.641c.35.062.482-.149.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.823-.079-.2-.42-.822-.717-.988-.246-.132-.596-.455-.01-.464.552-.009.946.508 1.077.717.63 1.06 1.636.762 2.039.578.061-.455.245-.761.446-.936-1.558-.175-3.185-.779-3.185-3.457 0-.76.271-1.39.717-1.88-.07-.176-.314-.893.07-1.856 0 0 .587-.183 1.925.718a6.495 6.495 0 011.75-.236c.595 0 1.19.078 1.75.236 1.34-.91 1.926-.718 1.926-.718.385.963.14 1.68.07 1.855.446.49.717 1.111.717 1.881 0 2.687-1.636 3.282-3.194 3.457.254.218.473.638.473 1.295 0 .936-.009 1.688-.009 1.925 0 .184.131.402.481.332A7.012 7.012 0 0014 7c0-3.868-3.133-7-7-7z",
        fill: e,
      }),
    ),
  ),
  o2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.068 5.583l1.487-4.557a.256.256 0 01.487 0L4.53 5.583H1.068L7 13.15 4.53 5.583h4.941l-2.47 7.565 5.931-7.565H9.471l1.488-4.557a.256.256 0 01.486 0l1.488 4.557.75 2.3a.508.508 0 01-.185.568L7 13.148v.001H7L.503 8.452a.508.508 0 01-.186-.57l.75-2.299z",
        fill: e,
      }),
    ),
  ),
  l2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M10.925 1.094H7.262c-1.643 0-3.189 1.244-3.189 2.685 0 1.473 1.12 2.661 2.791 2.661.116 0 .23-.002.34-.01a1.49 1.49 0 00-.186.684c0 .41.22.741.498 1.012-.21 0-.413.006-.635.006-2.034 0-3.6 1.296-3.6 2.64 0 1.323 1.717 2.15 3.75 2.15 2.32 0 3.6-1.315 3.6-2.639 0-1.06-.313-1.696-1.28-2.38-.331-.235-.965-.805-.965-1.14 0-.392.112-.586.703-1.047.606-.474 1.035-1.14 1.035-1.914 0-.92-.41-1.819-1.18-2.115h1.161l.82-.593zm-1.335 8.96c.03.124.045.25.045.378 0 1.07-.688 1.905-2.665 1.905-1.406 0-2.421-.89-2.421-1.96 0-1.047 1.259-1.92 2.665-1.904.328.004.634.057.911.146.764.531 1.311.832 1.465 1.436zM7.34 6.068c-.944-.028-1.841-1.055-2.005-2.295-.162-1.24.47-2.188 1.415-2.16.943.029 1.84 1.023 2.003 2.262.163 1.24-.47 2.222-1.414 2.193z",
        fill: e,
      }),
    ),
  ),
  i2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.873 11.608a1.167 1.167 0 00-1.707-.027L3.46 10.018l.01-.04h7.072l.022.076-2.69 1.554zM6.166 2.42l.031.03-3.535 6.124a1.265 1.265 0 00-.043-.012V5.438a1.166 1.166 0 00.84-1.456L6.167 2.42zm4.387 1.562a1.165 1.165 0 00.84 1.456v3.124l-.043.012-3.536-6.123a1.2 1.2 0 00.033-.032l2.706 1.563zM3.473 9.42a1.168 1.168 0 00-.327-.568L6.68 2.73a1.17 1.17 0 00.652 0l3.536 6.123a1.169 1.169 0 00-.327.567H3.473zm8.79-.736a1.169 1.169 0 00-.311-.124V5.44a1.17 1.17 0 10-1.122-1.942L8.13 1.938a1.168 1.168 0 00-1.122-1.5 1.17 1.17 0 00-1.121 1.5l-2.702 1.56a1.168 1.168 0 00-1.86.22 1.17 1.17 0 00.739 1.722v3.12a1.168 1.168 0 00-.74 1.721 1.17 1.17 0 001.861.221l2.701 1.56a1.169 1.169 0 102.233-.035l2.687-1.552a1.168 1.168 0 101.457-1.791z",
        fill: e,
      }),
    ),
  ),
  s2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M0 0v14h14V0H0zm11.63 3.317l-.75.72a.22.22 0 00-.083.212v-.001 5.289a.22.22 0 00.083.21l.733.72v.159H7.925v-.158l.76-.738c.074-.074.074-.096.074-.21V5.244l-2.112 5.364h-.285l-2.46-5.364V8.84a.494.494 0 00.136.413h.001l.988 1.198v.158H2.226v-.158l.988-1.198a.477.477 0 00.126-.416v.003-4.157a.363.363 0 00-.118-.307l-.878-1.058v-.158h2.727l2.107 4.622L9.031 3.16h2.6v.158z",
        fill: e,
      }),
    ),
  ),
  c2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.06 9.689c.016.49.423.88.912.88h.032a.911.911 0 00.88-.945.916.916 0 00-.912-.88h-.033c-.033 0-.08 0-.113.016-.669-1.108-.946-2.314-.848-3.618.065-.978.391-1.825.961-2.526.473-.603 1.386-.896 2.005-.913 1.728-.032 2.461 2.119 2.51 2.983.212.049.57.163.815.244C10.073 2.29 8.444.92 6.88.92c-1.467 0-2.82 1.06-3.357 2.625-.75 2.086-.261 4.09.651 5.671a.74.74 0 00-.114.473zm8.279-2.298c-1.239-1.45-3.064-2.249-5.15-2.249h-.261a.896.896 0 00-.798-.489h-.033A.912.912 0 006.13 6.48h.031a.919.919 0 00.8-.554h.293c1.239 0 2.412.358 3.472 1.059.814.538 1.401 1.238 1.727 2.086.277.684.261 1.353-.033 1.923-.456.864-1.222 1.337-2.232 1.337a4.16 4.16 0 01-1.597-.343 9.58 9.58 0 01-.734.587c.7.326 1.418.505 2.102.505 1.565 0 2.722-.863 3.162-1.727.473-.946.44-2.575-.782-3.961zm-7.433 5.51a4.005 4.005 0 01-.977.113c-1.206 0-2.298-.505-2.836-1.32C.376 10.603.13 8.289 2.494 6.577c.05.261.147.62.212.832-.31.228-.798.685-1.108 1.303-.44.864-.391 1.729.13 2.527.359.537.93.864 1.663.962.896.114 1.793-.05 2.657-.505 1.271-.669 2.119-1.467 2.672-2.56a.944.944 0 01-.26-.603.913.913 0 01.88-.945h.033a.915.915 0 01.098 1.825c-.897 1.842-2.478 3.08-4.565 3.488z",
        fill: e,
      }),
    ),
  ),
  d2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 2.547a5.632 5.632 0 01-1.65.464 2.946 2.946 0 001.263-1.63 5.67 5.67 0 01-1.823.715 2.837 2.837 0 00-2.097-.93c-1.586 0-2.872 1.319-2.872 2.946 0 .23.025.456.074.67C4.508 4.66 2.392 3.488.975 1.706c-.247.435-.389.941-.389 1.481 0 1.022.507 1.923 1.278 2.452a2.806 2.806 0 01-1.3-.368l-.001.037c0 1.427.99 2.617 2.303 2.888a2.82 2.82 0 01-1.297.05c.366 1.17 1.427 2.022 2.683 2.045A5.671 5.671 0 010 11.51a7.985 7.985 0 004.403 1.323c5.283 0 8.172-4.488 8.172-8.38 0-.128-.003-.255-.009-.38A5.926 5.926 0 0014 2.546z",
        fill: e,
      }),
    ),
  ),
  u2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.99 8.172c.005-.281.007-.672.007-1.172 0-.5-.002-.89-.007-1.172a14.952 14.952 0 00-.066-1.066 9.638 9.638 0 00-.169-1.153c-.083-.38-.264-.7-.542-.96a1.667 1.667 0 00-.972-.454C11.084 2.065 9.337 2 6.999 2s-4.085.065-5.241.195a1.65 1.65 0 00-.969.453c-.276.26-.455.58-.539.961a8.648 8.648 0 00-.176 1.153c-.039.43-.061.785-.066 1.066C.002 6.11 0 6.5 0 7c0 .5.002.89.008 1.172.005.281.027.637.066 1.067.04.43.095.813.168 1.152.084.38.265.7.543.96.279.261.603.412.973.453 1.156.13 2.902.196 5.24.196 2.34 0 4.087-.065 5.243-.196a1.65 1.65 0 00.967-.453c.276-.26.456-.58.54-.96.077-.339.136-.722.175-1.152.04-.43.062-.786.067-1.067zM9.762 6.578A.45.45 0 019.997 7a.45.45 0 01-.235.422l-3.998 2.5a.442.442 0 01-.266.078.538.538 0 01-.242-.063.465.465 0 01-.258-.437v-5c0-.197.086-.343.258-.437a.471.471 0 01.508.016l3.998 2.5z",
        fill: e,
      }),
    ),
  ),
  p2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.243.04a.87.87 0 01.38.087l2.881 1.386a.874.874 0 01.496.79V11.713a.875.875 0 01-.496.775l-2.882 1.386a.872.872 0 01-.994-.17L4.11 8.674l-2.404 1.823a.583.583 0 01-.744-.034l-.771-.7a.583.583 0 010-.862L2.274 7 .19 5.1a.583.583 0 010-.862l.772-.701a.583.583 0 01.744-.033L4.11 5.327 9.628.296a.871.871 0 01.615-.255zm.259 3.784L6.315 7l4.187 3.176V3.824z",
        fill: e,
      }),
    ),
  ),
  f2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.667 13H2.333A1.333 1.333 0 011 11.667V2.333C1 1.597 1.597 1 2.333 1h9.334C12.403 1 13 1.597 13 2.333v9.334c0 .736-.597 1.333-1.333 1.333zm-2.114-1.667h1.78V7.675c0-1.548-.877-2.296-2.102-2.296-1.226 0-1.742.955-1.742.955v-.778H5.773v5.777h1.716V8.3c0-.812.374-1.296 1.09-1.296.658 0 .974.465.974 1.296v3.033zm-6.886-7.6c0 .589.474 1.066 1.058 1.066.585 0 1.058-.477 1.058-1.066 0-.589-.473-1.066-1.058-1.066-.584 0-1.058.477-1.058 1.066zm1.962 7.6h-1.79V5.556h1.79v5.777z",
        fill: e,
      }),
    ),
  ),
  h2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.02.446h2.137L8.49 5.816l5.51 7.28H9.67L6.298 8.683l-3.88 4.413H.282l5.004-5.735L0 .446h4.442l3.064 4.048L11.02.446zm-.759 11.357h1.18L3.796 1.655H2.502l7.759 10.148z",
        fill: e,
      }),
    ),
  ),
  g2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-8h12v8H1zm1-9.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: e,
      }),
    ),
  ),
  m2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5.004a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5h-7zm0 1h7a.5.5 0 01.5.5v9.5H3v-9.5a.5.5 0 01.5-.5zm2.5 11a.5.5 0 000 1h2a.5.5 0 000-1H6z",
        fill: e,
      }),
    ),
  ),
  v2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 1.504a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-11zm1 10.5v-10h6v10H4z",
        fill: e,
      }),
    ),
  ),
  b2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 .504a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm5.5 2.5h-5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-5-1a1.5 1.5 0 00-1.5 1.5v7a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5v-7a1.5 1.5 0 00-1.5-1.5h-5zm2.5 2a.5.5 0 01.5.5v2h1a.5.5 0 110 1H7a.5.5 0 01-.5-.5v-2.5a.5.5 0 01.5-.5zm-2.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
        fill: e,
      }),
    ),
  ),
  y2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5zM3 6.004a.5.5 0 100 1h1a.5.5 0 000-1H3zM2.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h3v10H2zm4-10h6v10H6v-10z",
        fill: e,
      }),
    ),
  ),
  w2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M9.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM10 6.004a.5.5 0 100 1h1a.5.5 0 000-1h-1zM9.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h6v10H2zm7-10h3v10H9v-10z",
        fill: e,
      }),
    ),
  ),
  x2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.5 4.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM11 6.004a.5.5 0 010 1h-1a.5.5 0 010-1h1zM11.5 8.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm7.5-1h3v-10H9v10zm-1 0H2v-10h6v4.5H5.207l.65-.65a.5.5 0 10-.707-.708L3.646 6.65a.5.5 0 000 .707l1.497 1.497a.5.5 0 10.707-.708l-.643-.642H8v4.5z",
        fill: e,
      }),
    ),
  ),
  E2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5zM2 6.004a.5.5 0 100 1h1a.5.5 0 000-1H2zM1.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-10h3v10H1zm4 0v-4.5h2.793l-.643.642a.5.5 0 10.707.708l1.497-1.497a.5.5 0 000-.707L7.85 5.146a.5.5 0 10-.707.708l.65.65H5v-4.5h6v10H5z",
        fill: e,
      }),
    ),
  ),
  S2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM6.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 6.5v-6h10v6H2zm10 1v3H2v-3h10z",
        fill: e,
      }),
    ),
  ),
  C2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM6 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM9.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 12.504v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5zm1-.5v-3h10v3H2zm4.5-4H2v-6h10v6H7.5V5.21l.646.646a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0l-1.5 1.5a.5.5 0 10.708.707l.646-.646v2.793z",
        fill: e,
      }),
    ),
  ),
  R2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 5.504a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm1 2.5v-2h2v2H6z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.5.004a.5.5 0 01.5.5v1.5h2v-1.5a.5.5 0 011 0v1.5h2.5a.5.5 0 01.5.5v2.5h1.5a.5.5 0 010 1H12v2h1.5a.5.5 0 010 1H12v2.5a.5.5 0 01-.5.5H9v1.5a.5.5 0 01-1 0v-1.5H6v1.5a.5.5 0 01-1 0v-1.5H2.5a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 010-1H2v-2H.5a.5.5 0 010-1H2v-2.5a.5.5 0 01.5-.5H5v-1.5a.5.5 0 01.5-.5zm5.5 3H3v8h8v-8z",
        fill: e,
      }),
    ),
  ),
  I2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3c0-1.105-2.239-2-5-2s-5 .895-5 2v8c0 .426.26.752.544.977.29.228.68.413 1.116.558.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.436-.145.825-.33 1.116-.558.285-.225.544-.551.544-.977V3zm-1.03 0a.787.787 0 00-.05-.052c-.13-.123-.373-.28-.756-.434C9.404 2.21 8.286 2 7 2c-1.286 0-2.404.21-3.164.514-.383.153-.625.31-.756.434A.756.756 0 003.03 3a.756.756 0 00.05.052c.13.123.373.28.756.434C4.596 3.79 5.714 4 7 4c1.286 0 2.404-.21 3.164-.514.383-.153.625-.31.756-.434A.787.787 0 0010.97 3zM11 5.75V4.2c-.912.486-2.364.8-4 .8-1.636 0-3.088-.314-4-.8v1.55l.002.008a.147.147 0 00.016.033.618.618 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.62.62 0 00.146-.15.149.149 0 00.015-.033A.03.03 0 0011 5.75zM3 7.013c.2.103.423.193.66.272.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.237-.079.46-.17.66-.272V8.5l-.002.008a.149.149 0 01-.015.033.62.62 0 01-.146.15c-.165.13-.435.27-.813.395-.751.25-1.82.414-3.024.414s-2.273-.163-3.024-.414c-.378-.126-.648-.265-.813-.395a.618.618 0 01-.145-.15.147.147 0 01-.016-.033A.027.027 0 013 8.5V7.013zm0 2.75V11l.002.008a.147.147 0 00.016.033.617.617 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 00.146-.15.148.148 0 00.015-.033L11 11V9.763c-.2.103-.423.193-.66.272-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465A4.767 4.767 0 013 9.763z",
        fill: e,
      }),
    ),
  ),
  A2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5 3a.5.5 0 00-1 0v3a.5.5 0 001 0V3zM7 2.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V3a.5.5 0 01.5-.5zM10 4.504a.5.5 0 10-1 0V6a.5.5 0 001 0V4.504z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.54l-.001-.002a.499.499 0 00-.145-.388l-3-3a.499.499 0 00-.388-.145L8.464.004H2.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V3.54zM3 1.004h5.293L11 3.71v5.293H3v-8zm0 9v3h8v-3H3z",
        fill: e,
      }),
    ),
  ),
  _2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.164 3.446a1.5 1.5 0 10-2.328 0L1.81 10.032A1.503 1.503 0 000 11.5a1.5 1.5 0 002.915.5h8.17a1.5 1.5 0 101.104-1.968L8.164 3.446zm-1.475.522a1.506 1.506 0 00.622 0l4.025 6.586a1.495 1.495 0 00-.25.446H2.914a1.497 1.497 0 00-.25-.446l4.024-6.586z",
        fill: e,
      }),
    ),
  ),
  k2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.21.046l6.485 2.994A.5.5 0 0114 3.51v6.977a.495.495 0 01-.23.432.481.481 0 01-.071.038L7.23 13.944a.499.499 0 01-.46 0L.3 10.958a.498.498 0 01-.3-.47V3.511a.497.497 0 01.308-.473L6.78.051a.499.499 0 01.43-.005zM1 4.282v5.898l5.5 2.538V6.82L1 4.282zm6.5 8.436L13 10.18V4.282L7.5 6.82v5.898zM12.307 3.5L7 5.95 1.693 3.5 7 1.05l5.307 2.45z",
        fill: e,
      }),
    ),
  ),
  O2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.5.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M4.273 2.808a.5.5 0 00-.546-.837 6 6 0 106.546 0 .5.5 0 00-.546.837 5 5 0 11-5.454 0z",
        fill: e,
      }),
    ),
  ),
  T2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z",
        fill: e,
      }),
    ),
  ),
  M2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z",
        fill: e,
      }),
    ),
  ),
  $2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.585 8.414a2 2 0 113.277-.683.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 00-.365-.93 2 2 0 01-2.146-.449z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.5.289a1 1 0 011 0l5.062 2.922a1 1 0 01.5.866v5.846a1 1 0 01-.5.866L7.5 13.71a1 1 0 01-1 0L1.437 10.79a1 1 0 01-.5-.866V4.077a1 1 0 01.5-.866L6.5.29zm.5.866l5.062 2.922v5.846L7 12.845 1.937 9.923V4.077L7 1.155z",
        fill: e,
      }),
    ),
  ),
  L2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.5 1c.441 0 .564.521.252.833l-.806.807a.51.51 0 000 .72l.694.694a.51.51 0 00.72 0l.807-.806c.312-.312.833-.19.833.252a2.5 2.5 0 01-3.414 2.328l-6.879 6.88a1 1 0 01-1.414-1.415l6.88-6.88A2.5 2.5 0 0110.5 1zM2 12.5a.5.5 0 100-1 .5.5 0 000 1z",
        fill: e,
      }),
    ),
  ),
  z2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
        fill: e,
      }),
    ),
  ),
  B2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.634l-.485.271a.107.107 0 01-.158-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.131a.214.214 0 00-.12.37l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.5 12.797l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.04l1.293 1.293zM.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2z",
        fill: e,
      }),
    ),
  ),
  P2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z",
        fill: e,
      }),
    ),
  ),
  H2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V6.393a.5.5 0 00-1 0v5.61H2v-10h7.5a.5.5 0 000-1H2z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M6.354 9.857l7.5-7.5a.5.5 0 00-.708-.707L6 8.797 3.854 6.65a.5.5 0 10-.708.707l2.5 2.5a.5.5 0 00.708 0z",
        fill: e,
      }),
    ),
  ),
  F2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8.854 2.646a.5.5 0 010 .708L5.207 7l3.647 3.646a.5.5 0 01-.708.708L4.5 7.707.854 11.354a.5.5 0 01-.708-.708L3.793 7 .146 3.354a.5.5 0 11.708-.708L4.5 6.293l3.646-3.647a.5.5 0 01.708 0zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
        fill: e,
      }),
    ),
  ),
  j2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
        fill: e,
      }),
    ),
  ),
  N2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M10.5 1a.5.5 0 01.5.5V2h1.5a.5.5 0 010 1H11v.5a.5.5 0 01-1 0V3H1.5a.5.5 0 010-1H10v-.5a.5.5 0 01.5-.5zM1.5 11a.5.5 0 000 1H10v.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H11v-.5a.5.5 0 00-1 0v.5H1.5zM1 7a.5.5 0 01.5-.5H3V6a.5.5 0 011 0v.5h8.5a.5.5 0 010 1H4V8a.5.5 0 01-1 0v-.5H1.5A.5.5 0 011 7z",
        fill: e,
      }),
    ),
  ),
  D2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.5.5a.5.5 0 00-1 0v6h-6a.5.5 0 000 1h6v6a.5.5 0 001 0v-6h6a.5.5 0 000-1h-6v-6z",
        fill: e,
      }),
    ),
  ),
  V2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2.03.97A.75.75 0 00.97 2.03L5.94 7 .97 11.97a.75.75 0 101.06 1.06L7 8.06l4.97 4.97a.75.75 0 101.06-1.06L8.06 7l4.97-4.97A.75.75 0 0011.97.97L7 5.94 2.03.97z",
        fill: e,
      }),
    ),
  ),
  U2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.854 1.146a.5.5 0 10-.708.708L6.293 7l-5.147 5.146a.5.5 0 00.708.708L7 7.707l5.146 5.147a.5.5 0 00.708-.708L7.707 7l5.147-5.146a.5.5 0 00-.708-.708L7 6.293 1.854 1.146z",
        fill: e,
      }),
    ),
  ),
  W2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.5 4.5A.5.5 0 016 5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zM9 5a.5.5 0 00-1 0v5a.5.5 0 001 0V5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.5.5A.5.5 0 015 0h4a.5.5 0 01.5.5V2h3a.5.5 0 010 1H12v8a2 2 0 01-2 2H4a2 2 0 01-2-2V3h-.5a.5.5 0 010-1h3V.5zM3 3v8a1 1 0 001 1h6a1 1 0 001-1V3H3zm2.5-2h3v1h-3V1z",
        fill: e,
      }),
    ),
  ),
  q2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1107_3502)" },
        o.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5 5H3.657A4 4 0 00.828 6.17l-.474.475a.5.5 0 000 .707l2.793 2.793-3 3a.5.5 0 00.707.708l3-3 2.792 2.792a.5.5 0 00.708 0l.474-.475A4 4 0 009 10.343V9l2-2a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM11 5.585l-3 3v1.757a3 3 0 01-.879 2.121L7 12.586 1.414 7l.122-.122A3 3 0 013.656 6h1.758l3-3-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586z",
          fill: e,
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1107_3502" },
          o.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
        ),
      ),
    ),
  ),
  G2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1107_3501)", fill: e },
        o.createElement("path", {
          d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5.707 4.293 6.414 5l2-2-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586l-2 2 .707.707L11 7a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM.828 6.171a4 4 0 012.758-1.17l1 .999h-.93a3 3 0 00-2.12.878L1.414 7 7 12.586l.121-.122A3 3 0 008 10.343v-.929l1 1a4 4 0 01-1.172 2.757l-.474.475a.5.5 0 01-.708 0l-2.792-2.792-3 3a.5.5 0 01-.708-.708l3-3L.355 7.353a.5.5 0 010-.707l.474-.475zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1107_3501" },
          o.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
        ),
      ),
    ),
  ),
  Zs = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: e,
      }),
    ),
  ),
  Js = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: e,
      }),
    ),
  ),
  Y2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: e,
      }),
    ),
  ),
  K2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0a6 6 0 01-9.874 4.582l8.456-8.456A5.976 5.976 0 0113 7zM2.418 10.874l8.456-8.456a6 6 0 00-8.456 8.456z",
        fill: e,
      }),
    ),
  ),
  X2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
        fill: e,
      }),
    ),
  ),
  Z2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
        fill: e,
      }),
    ),
  ),
  J2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
        fill: e,
      }),
    ),
  ),
  Q2 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 2h7a2 2 0 012 2v6a2 2 0 01-2 2H5a1.994 1.994 0 01-1.414-.586l-3-3a2 2 0 010-2.828l3-3A1.994 1.994 0 015 2zm1.146 3.146a.5.5 0 01.708 0L8 6.293l1.146-1.147a.5.5 0 11.708.708L8.707 7l1.147 1.146a.5.5 0 01-.708.708L8 7.707 6.854 8.854a.5.5 0 11-.708-.708L7.293 7 6.146 5.854a.5.5 0 010-.708z",
        fill: e,
      }),
    ),
  ),
  e4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.5 5.004a.5.5 0 100 1h7a.5.5 0 000-1h-7zM3 8.504a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.5 12.004H5.707l-1.853 1.854a.5.5 0 01-.351.146h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zm-10.5-1v-8h10v8H2z",
        fill: e,
      }),
    ),
  ),
  t4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.5 5.004a.5.5 0 10-1 0v1.5H5a.5.5 0 100 1h1.5v1.5a.5.5 0 001 0v-1.5H9a.5.5 0 000-1H7.5v-1.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
        fill: e,
      }),
    ),
  ),
  r4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M9.854 6.65a.5.5 0 010 .707l-2 2a.5.5 0 11-.708-.707l1.15-1.15-3.796.004a.5.5 0 010-1L8.29 6.5 7.145 5.357a.5.5 0 11.708-.707l2 2z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
        fill: e,
      }),
    ),
  ),
  n4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M8.5 7.004a.5.5 0 000-1h-5a.5.5 0 100 1h5zM9 8.504a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 11.504v-1.5h1.5a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v1.5H.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5H2v1.5a.499.499 0 00.497.5h.006a.498.498 0 00.35-.146l1.854-1.854H11.5a.5.5 0 00.5-.5zm-9-8.5v-1h10v7h-1v-5.5a.5.5 0 00-.5-.5H3zm-2 8v-7h10v7H1z",
        fill: e,
      }),
    ),
  ),
  a4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 2a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6.986a.444.444 0 01-.124.103l-3.219 1.84A.43.43 0 013 13.569V12a2 2 0 01-2-2V2zm3.42 4.78a.921.921 0 110-1.843.921.921 0 010 1.842zm1.658-.922a.921.921 0 101.843 0 .921.921 0 00-1.843 0zm2.58 0a.921.921 0 101.842 0 .921.921 0 00-1.843 0z",
        fill: e,
      }),
    ),
  ),
  o4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z",
        fill: e,
      }),
    ),
  ),
  l4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1107_3614)", fill: e },
        o.createElement("path", {
          d: "M6.5 8.87a1 1 0 111 0v1.634a.5.5 0 01-1 0V8.87z",
        }),
        o.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7 1a3 3 0 00-3 3v1.004h8.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3V4a4 4 0 017.755-1.381.5.5 0 01-.939.345A3.001 3.001 0 007 1zM2 6.004h10v7H2v-7z",
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1107_3614" },
          o.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
        ),
      ),
    ),
  ),
  i4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11 4a1 1 0 11-2 0 1 1 0 012 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.5 8.532V9.5a.5.5 0 01-.5.5H5.5v1.5a.5.5 0 01-.5.5H3.5v1.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.155-.362l5.11-5.11A4.5 4.5 0 117.5 8.532zM6 4.5a3.5 3.5 0 111.5 2.873c-.29-.203-1-.373-1 .481V9H5a.5.5 0 00-.5.5V11H3a.5.5 0 00-.5.5V13H1v-1.293l5.193-5.193a.552.552 0 00.099-.613A3.473 3.473 0 016 4.5z",
        fill: e,
      }),
    ),
  ),
  s4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.354.15a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.707L6.5 1.711v6.793a.5.5 0 001 0V1.71l1.146 1.146a.5.5 0 10.708-.707l-2-2z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M2 7.504a.5.5 0 10-1 0v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-1 0v4.5H2v-4.5z",
        fill: e,
      }),
    ),
  ),
  c4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2.5 8.004a.5.5 0 100 1h3a.5.5 0 000-1h-3z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 11.504a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v9zm1-8.5v1h12v-1H1zm0 8h12v-5H1v5z",
        fill: e,
      }),
    ),
  ),
  d4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1 3.004a1 1 0 00-1 1v5a1 1 0 001 1h3.5a.5.5 0 100-1H1v-5h12v5h-1a.5.5 0 000 1h1a1 1 0 001-1v-5a1 1 0 00-1-1H1z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M6.45 7.006a.498.498 0 01.31.07L10.225 9.1a.5.5 0 01-.002.873l-1.074.621.75 1.3a.75.75 0 01-1.3.75l-.75-1.3-1.074.62a.497.497 0 01-.663-.135.498.498 0 01-.095-.3L6 7.515a.497.497 0 01.45-.509z",
        fill: e,
      }),
    ),
  ),
  u4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M4 1.504a.5.5 0 01.5-.5h5a.5.5 0 110 1h-2v10h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-10h-2a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M0 4.504a.5.5 0 01.5-.5h4a.5.5 0 110 1H1v4h3.5a.5.5 0 110 1h-4a.5.5 0 01-.5-.5v-5zM9.5 4.004a.5.5 0 100 1H13v4H9.5a.5.5 0 100 1h4a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-4z",
        fill: e,
      }),
    ),
  ),
  p4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.943 12.457a.27.27 0 00.248-.149L7.77 9.151l2.54 2.54a.257.257 0 00.188.073c.082 0 .158-.03.21-.077l.788-.79a.27.27 0 000-.392L8.891 7.9l3.416-1.708a.29.29 0 00.117-.106.222.222 0 00.033-.134.332.332 0 00-.053-.161.174.174 0 00-.092-.072l-.02-.007-10.377-4.15a.274.274 0 00-.355.354l4.15 10.372a.275.275 0 00.233.169zm-.036 1l-.02-.002c-.462-.03-.912-.31-1.106-.796L.632 2.287A1.274 1.274 0 012.286.633l10.358 4.143c.516.182.782.657.81 1.114a1.25 1.25 0 01-.7 1.197L10.58 8.174l1.624 1.624a1.27 1.27 0 010 1.807l-.8.801-.008.007c-.491.46-1.298.48-1.792-.014l-1.56-1.56-.957 1.916a1.27 1.27 0 01-1.142.702h-.037z",
        fill: e,
      }),
    ),
  ),
  f4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.87 6.008a.505.505 0 00-.003-.028v-.002c-.026-.27-.225-.48-.467-.498a.5.5 0 00-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47V5.17a.6.6 0 00-.002-.05c-.023-.268-.223-.49-.468-.5a.5.5 0 00-.52.5v1.65a.486.486 0 01-.47.47.48.48 0 01-.47-.47V4.62a.602.602 0 00-.002-.05v-.002c-.023-.266-.224-.48-.468-.498a.5.5 0 00-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 01-.47-.47V1.8c0-.017 0-.034-.002-.05-.022-.268-.214-.49-.468-.5a.5.5 0 00-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47l.001-.1c.001-.053.002-.104 0-.155a.775.775 0 00-.06-.315.65.65 0 00-.16-.22 29.67 29.67 0 01-.21-.189c-.2-.182-.4-.365-.617-.532l-.003-.003A6.366 6.366 0 003.06 7l-.01-.007c-.433-.331-.621-.243-.69-.193-.26.14-.29.5-.13.74l1.73 2.6v.01h-.016l-.035.023.05-.023s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.039-.591.036-1.189.032-1.783l-.002-.507v-.032zm.969 2.376c-.057 1.285-.254 2.667-1.082 3.72-.88 1.118-2.283 1.646-4.227 1.646-1.574 0-2.714-.87-3.406-1.623a6.958 6.958 0 01-1.046-1.504l-.006-.012-1.674-2.516a1.593 1.593 0 01-.25-1.107 1.44 1.44 0 01.69-1.041c.195-.124.485-.232.856-.186.357.044.681.219.976.446.137.106.272.22.4.331V1.75A1.5 1.5 0 015.63.25c.93.036 1.431.856 1.431 1.55v1.335a1.5 1.5 0 01.53-.063h.017c.512.04.915.326 1.153.71a1.5 1.5 0 01.74-.161c.659.025 1.115.458 1.316.964a1.493 1.493 0 01.644-.103h.017c.856.067 1.393.814 1.393 1.558l.002.48c.004.596.007 1.237-.033 1.864z",
        fill: e,
      }),
    ),
  ),
  h4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 6A2.5 2.5 0 116 3.5V5h2V3.5A2.5 2.5 0 1110.5 6H9v2h1.5A2.5 2.5 0 118 10.5V9H6v1.5A2.5 2.5 0 113.5 8H5V6H3.5zM2 3.5a1.5 1.5 0 113 0V5H3.5A1.5 1.5 0 012 3.5zM6 6v2h2V6H6zm3-1h1.5A1.5 1.5 0 109 3.5V5zM3.5 9H5v1.5A1.5 1.5 0 113.5 9zM9 9v1.5A1.5 1.5 0 1010.5 9H9z",
        fill: e,
      }),
    ),
  ),
  g4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: e,
      }),
    ),
  ),
  m4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: e,
      }),
    ),
  ),
  v4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z",
        fill: e,
      }),
    ),
  ),
  b4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z",
        fill: e,
      }),
    ),
  ),
  y4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM6.5 8a.5.5 0 001 0V4a.5.5 0 00-1 0v4zm-.25 2.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z",
        fill: e,
      }),
    ),
  ),
  w4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 2.504a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-9zm1 1.012v7.488h12V3.519L7.313 7.894a.496.496 0 01-.526.062.497.497 0 01-.1-.062L1 3.516zm11.03-.512H1.974L7 6.874l5.03-3.87z",
        fill: e,
      }),
    ),
  ),
  x4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.76 8.134l-.05.05a.2.2 0 01-.28.03 6.76 6.76 0 01-1.63-1.65.21.21 0 01.04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 00-.51.13A3.23 3.23 0 00.9 3.424c-.13 1.1.26 2.37 1.17 3.78a16.679 16.679 0 004.55 4.6 6.57 6.57 0 003.53 1.32 3.2 3.2 0 002.85-1.66c.14-.24.24-.64-.07-1.18a7.803 7.803 0 00-1.73-1.81c-.64-.5-1.52-1.11-2.13-1.11a.97.97 0 00-.34.06c-.472.164-.74.458-.947.685l-.023.025zm4.32 2.678a6.801 6.801 0 00-1.482-1.54l-.007-.005-.006-.005a8.418 8.418 0 00-.957-.662 2.7 2.7 0 00-.4-.193.683.683 0 00-.157-.043l-.004.002-.009.003c-.224.078-.343.202-.56.44l-.014.016-.046.045a1.2 1.2 0 01-1.602.149A7.76 7.76 0 014.98 7.134l-.013-.019-.013-.02a1.21 1.21 0 01.195-1.522l.06-.06.026-.024c.219-.19.345-.312.422-.533l.003-.01v-.008a.518.518 0 00-.032-.142c-.06-.178-.203-.453-.502-.872l-.005-.008-.005-.007A10.18 10.18 0 004.013 2.59l-.005-.005c-.31-.314-.543-.5-.716-.605-.147-.088-.214-.096-.222-.097h-.016l-.006.003-.01.006a2.23 2.23 0 00-1.145 1.656c-.09.776.175 1.806 1.014 3.108a15.68 15.68 0 004.274 4.32l.022.014.022.016a5.57 5.57 0 002.964 1.117 2.2 2.2 0 001.935-1.141l.006-.012.004-.007a.182.182 0 00-.007-.038.574.574 0 00-.047-.114z",
        fill: e,
      }),
    ),
  ),
  Qs = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.841 2.159a2.25 2.25 0 00-3.182 0l-2.5 2.5a2.25 2.25 0 000 3.182.5.5 0 01-.707.707 3.25 3.25 0 010-4.596l2.5-2.5a3.25 3.25 0 014.596 4.596l-2.063 2.063a4.27 4.27 0 00-.094-1.32l1.45-1.45a2.25 2.25 0 000-3.182z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M3.61 7.21c-.1-.434-.132-.88-.095-1.321L1.452 7.952a3.25 3.25 0 104.596 4.596l2.5-2.5a3.25 3.25 0 000-4.596.5.5 0 00-.707.707 2.25 2.25 0 010 3.182l-2.5 2.5A2.25 2.25 0 112.159 8.66l1.45-1.45z",
        fill: e,
      }),
    ),
  ),
  E4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.452 7.952l1.305-1.305.708.707-1.306 1.305a2.25 2.25 0 103.182 3.182l1.306-1.305.707.707-1.306 1.305a3.25 3.25 0 01-4.596-4.596zM12.548 6.048l-1.305 1.306-.707-.708 1.305-1.305a2.25 2.25 0 10-3.182-3.182L7.354 3.464l-.708-.707 1.306-1.305a3.25 3.25 0 014.596 4.596zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.707-.707l-11-11z",
        fill: e,
      }),
    ),
  ),
  S4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.994 1.11a1 1 0 10-1.988 0A4.502 4.502 0 002.5 5.5v3.882l-.943 1.885a.497.497 0 00-.053.295.5.5 0 00.506.438h3.575a1.5 1.5 0 102.83 0h3.575a.5.5 0 00.453-.733L11.5 9.382V5.5a4.502 4.502 0 00-3.506-4.39zM2.81 11h8.382l-.5-1H3.31l-.5 1zM10.5 9V5.5a3.5 3.5 0 10-7 0V9h7zm-4 3.5a.5.5 0 111 0 .5.5 0 01-1 0z",
        fill: e,
      }),
    ),
  ),
  C4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.5.5A.5.5 0 012 0c6.627 0 12 5.373 12 12a.5.5 0 01-1 0C13 5.925 8.075 1 2 1a.5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M1.5 4.5A.5.5 0 012 4a8 8 0 018 8 .5.5 0 01-1 0 7 7 0 00-7-7 .5.5 0 01-.5-.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 11a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 11-2 0 1 1 0 012 0z",
        fill: e,
      }),
    ),
  ),
  R4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z",
        fill: e,
      }),
    ),
  ),
  I4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M6.646.15a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.707L7.5 1.711v6.793a.5.5 0 01-1 0V1.71L5.354 2.857a.5.5 0 11-.708-.707l2-2z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M2 4.004a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H9.5a.5.5 0 100 1H12v7H2v-7h2.5a.5.5 0 000-1H2z",
        fill: e,
      }),
    ),
  ),
  A4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M13.854 6.646a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.293 7.5H5.5a.5.5 0 010-1h6.793l-1.147-1.146a.5.5 0 01.708-.708l2 2z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M10 2a1 1 0 00-1-1H2a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V9.5a.5.5 0 00-1 0V12H2V2h7v2.5a.5.5 0 001 0V2z",
        fill: e,
      }),
    ),
  ),
  _4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 13A6 6 0 107 1a6 6 0 000 12zm0 1A7 7 0 107 0a7 7 0 000 14z",
        fill: e,
      }),
    ),
  ),
  k4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0z",
        fill: e,
      }),
    ),
  ),
  O4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
        fill: e,
      }),
    ),
  ),
  T4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5z",
        fill: e,
      }),
    ),
  ),
  M4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1449_588)" },
        o.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z",
          fill: e,
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1449_588" },
          o.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
        ),
      ),
    ),
  ),
  $4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584zM1.2 3.526c.128-.333.304-.598.52-.806.218-.212.497-.389.849-.522m-1.37 1.328A3.324 3.324 0 001 4.708c0 .225.032.452.101.686.082.265.183.513.307.737.135.246.294.484.479.716.188.237.386.454.59.652l.001.002 4.514 4.355 4.519-4.344c.2-.193.398-.41.585-.648l.003-.003c.184-.23.345-.472.486-.726l.004-.007c.131-.23.232-.474.31-.732v-.002c.068-.224.101-.45.101-.686 0-.457-.07-.849-.195-1.185a2.177 2.177 0 00-.515-.802l.007-.012-.008.009a2.383 2.383 0 00-.85-.518l-.003-.001C11.1 2.072 10.692 2 10.203 2c-.21 0-.406.03-.597.09h-.001c-.22.07-.443.167-.663.289l-.007.003c-.22.12-.434.262-.647.426-.226.174-.42.341-.588.505l-.684.672-.7-.656a9.967 9.967 0 00-.615-.527 4.82 4.82 0 00-.635-.422l-.01-.005a3.289 3.289 0 00-.656-.281l-.008-.003A2.014 2.014 0 003.785 2c-.481 0-.881.071-1.217.198",
        fill: e,
      }),
    ),
  ),
  L4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584z",
        fill: e,
      }),
    ),
  ),
  z4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.319.783a.75.75 0 011.362 0l1.63 3.535 3.867.458a.75.75 0 01.42 1.296L10.74 8.715l.76 3.819a.75.75 0 01-1.103.8L7 11.434l-3.398 1.902a.75.75 0 01-1.101-.801l.758-3.819L.401 6.072a.75.75 0 01.42-1.296l3.867-.458L6.318.783zm.68.91l-1.461 3.17a.75.75 0 01-.593.431l-3.467.412 2.563 2.37a.75.75 0 01.226.697l-.68 3.424 3.046-1.705a.75.75 0 01.733 0l3.047 1.705-.68-3.424a.75.75 0 01.226-.697l2.563-2.37-3.467-.412a.75.75 0 01-.593-.43L7 1.694z",
        fill: e,
      }),
    ),
  ),
  B4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.68.783a.75.75 0 00-1.361 0l-1.63 3.535-3.867.458A.75.75 0 00.4 6.072l2.858 2.643-.758 3.819a.75.75 0 001.101.8L7 11.434l3.397 1.902a.75.75 0 001.102-.801l-.759-3.819L13.6 6.072a.75.75 0 00-.421-1.296l-3.866-.458L7.68.783z",
        fill: e,
      }),
    ),
  ),
  P4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 7.854a4.5 4.5 0 10-6 0V13a.5.5 0 00.497.5h.006c.127 0 .254-.05.35-.146L7 11.207l2.146 2.147A.5.5 0 0010 13V7.854zM7 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-.354 2.146a.5.5 0 01.708 0L9 11.793v-3.26C8.398 8.831 7.718 9 7 9a4.481 4.481 0 01-2-.468v3.26l1.646-1.646z",
        fill: e,
      }),
    ),
  ),
  H4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.565 13.123a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97c.25.473.83.661 1.31.426l.987-.482zm4.289-8.477a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
        fill: e,
      }),
    ),
  ),
  F4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.493 5.493 0 01-1.3-.16c-.42-.1-.91-.25-1.47-.45a5.056 5.056 0 00-.95-.27H2.88a.84.84 0 01-.62-.26.84.84 0 01-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 01.62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 01.62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7.15.31.23.73.23 1.27a3 3 0 01-.32 1.31h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98a2.05 2.05 0 01-.4 1.51 1.9 1.9 0 01-.57 1.5zm.473-5.33a.965.965 0 00.027-.25.742.742 0 00-.227-.513.683.683 0 00-.523-.227H7.927l.73-1.45a2 2 0 00.213-.867c0-.444-.068-.695-.127-.822a.53.53 0 00-.245-.244 1.296 1.296 0 00-.539-.116.989.989 0 00-.141.28 9.544 9.544 0 00-.174.755c-.069.387-.213.779-.484 1.077l-.009.01-.009.01c-.195.202-.41.46-.67.798l-.003.004c-.235.3-.44.555-.613.753-.151.173-.343.381-.54.516l-.255.176H5v4.133l.018.003c.384.07.76.176 1.122.318.532.189.98.325 1.352.413l.007.002a4.5 4.5 0 001.063.131h.878c.429 0 .683-.115.871-.285a.9.9 0 00.262-.702l-.028-.377.229-.3a1.05 1.05 0 00.205-.774l-.044-.333.165-.292a.969.969 0 00.13-.487.457.457 0 00-.019-.154l-.152-.458.263-.404a1.08 1.08 0 00.152-.325zM3.5 10.8a.5.5 0 100-1 .5.5 0 000 1z",
        fill: e,
      }),
    ),
  ),
  j4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.765 2.076A.5.5 0 0112 2.5v6.009a.497.497 0 01-.17.366L7.337 12.87a.497.497 0 01-.674 0L2.17 8.875l-.009-.007a.498.498 0 01-.16-.358L2 8.5v-6a.5.5 0 01.235-.424l.018-.011c.016-.01.037-.024.065-.04.056-.032.136-.077.24-.128a6.97 6.97 0 01.909-.371C4.265 1.26 5.443 1 7 1s2.735.26 3.533.526c.399.133.702.267.91.37a4.263 4.263 0 01.304.169l.018.01zM3 2.793v5.482l1.068.95 6.588-6.588a6.752 6.752 0 00-.44-.163C9.517 2.24 8.444 2 7 2c-1.443 0-2.515.24-3.217.474-.351.117-.61.233-.778.317L3 2.793zm4 9.038l-2.183-1.94L11 3.706v4.568l-4 3.556z",
        fill: e,
      }),
    ),
  ),
  N4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M10.354 2.854a.5.5 0 10-.708-.708l-3 3a.5.5 0 10.708.708l3-3z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M2.09 6H4.5a.5.5 0 000-1H1.795a.75.75 0 00-.74.873l.813 4.874A1.5 1.5 0 003.348 12h7.305a1.5 1.5 0 001.48-1.253l.812-4.874a.75.75 0 00-.74-.873H10a.5.5 0 000 1h1.91l-.764 4.582a.5.5 0 01-.493.418H3.347a.5.5 0 01-.493-.418L2.09 6z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M4.5 7a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 7.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM6.5 9.5v-2a.5.5 0 011 0v2a.5.5 0 01-1 0z",
        fill: e,
      }),
    ),
  ),
  D4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.5 2h.75v3.866l-3.034 5.26A1.25 1.25 0 003.299 13H10.7a1.25 1.25 0 001.083-1.875L8.75 5.866V2h.75a.5.5 0 100-1h-5a.5.5 0 000 1zm1.75 4V2h1.5v4.134l.067.116L8.827 8H5.173l1.01-1.75.067-.116V6zM4.597 9l-1.515 2.625A.25.25 0 003.3 12H10.7a.25.25 0 00.217-.375L9.404 9H4.597z",
        fill: e,
      }),
    ),
  ),
  V4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.5 10.5a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 1a.5.5 0 00-.5.5c0 1.063.137 1.892.678 2.974.346.692.858 1.489 1.598 2.526-.89 1.247-1.455 2.152-1.798 2.956-.377.886-.477 1.631-.478 2.537v.007a.5.5 0 00.5.5h7c.017 0 .034 0 .051-.003A.5.5 0 0011 12.5v-.007c0-.906-.1-1.65-.478-2.537-.343-.804-.909-1.709-1.798-2.956.74-1.037 1.252-1.834 1.598-2.526C10.863 3.392 11 2.563 11 1.5a.5.5 0 00-.5-.5h-7zm6.487 11a4.675 4.675 0 00-.385-1.652c-.277-.648-.735-1.407-1.499-2.494-.216.294-.448.606-.696.937a.497.497 0 01-.195.162.5.5 0 01-.619-.162c-.248-.331-.48-.643-.696-.937-.764 1.087-1.222 1.846-1.499 2.494A4.675 4.675 0 004.013 12h5.974zM6.304 6.716c.212.293.443.609.696.948a90.058 90.058 0 00.709-.965c.48-.664.86-1.218 1.163-1.699H5.128a32.672 32.672 0 001.176 1.716zM4.559 4h4.882c.364-.735.505-1.312.546-2H4.013c.04.688.182 1.265.546 2z",
        fill: e,
      }),
    ),
  ),
  U4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.5 1h-9a.5.5 0 00-.5.5v11a.5.5 0 001 0V8h8.5a.5.5 0 00.354-.854L9.207 4.5l2.647-2.646A.499.499 0 0011.5 1zM8.146 4.146L10.293 2H3v5h7.293L8.146 4.854a.5.5 0 010-.708z",
        fill: e,
      }),
    ),
  ),
  W4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 7V6a3 3 0 00-5.91-.736l-.17.676-.692.075A2.5 2.5 0 003.5 11h3c.063 0 .125-.002.187-.007l.076-.005.076.006c.053.004.106.006.161.006h4a2 2 0 100-4h-1zM3.12 5.02A3.5 3.5 0 003.5 12h3c.087 0 .174-.003.26-.01.079.007.16.01.24.01h4a3 3 0 100-6 4 4 0 00-7.88-.98z",
        fill: e,
      }),
    ),
  ),
  q4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7 2a4 4 0 014 4 3 3 0 110 6H7c-.08 0-.161-.003-.24-.01-.086.007-.173.01-.26.01h-3a3.5 3.5 0 01-.38-6.98A4.002 4.002 0 017 2z",
        fill: e,
      }),
    ),
  ),
  G4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 7a4 4 0 11-8 0 4 4 0 018 0zm-1 0a3 3 0 11-6 0 3 3 0 016 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.268 13.18c.25.472.83.66 1.31.425l.987-.482a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97zm5.096-1.44l-.511.963-.979-.478a1.99 1.99 0 00-1.748 0l-.979.478-.51-.962a1.991 1.991 0 00-1.415-1.028l-1.073-.188.152-1.079a1.991 1.991 0 00-.54-1.663L1.004 7l.757-.783a1.991 1.991 0 00.54-1.663L2.15 3.475l1.073-.188A1.991 1.991 0 004.636 2.26l.511-.962.979.478a1.99 1.99 0 001.748 0l.979-.478.51.962c.288.543.81.922 1.415 1.028l1.073.188-.152 1.079a1.99 1.99 0 00.54 1.663l.757.783-.757.783a1.99 1.99 0 00-.54 1.663l.152 1.079-1.073.188a1.991 1.991 0 00-1.414 1.028z",
        fill: e,
      }),
    ),
  ),
  Y4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.354 3.896l5.5 5.5a.5.5 0 01-.708.708L7 4.957l-5.146 5.147a.5.5 0 01-.708-.708l5.5-5.5a.5.5 0 01.708 0z",
        fill: e,
      }),
    ),
  ),
  ec = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z",
        fill: e,
      }),
    ),
  ),
  K4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z",
        fill: e,
      }),
    ),
  ),
  qo = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
        fill: e,
      }),
    ),
  ),
  tc = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.854 9.104a.5.5 0 11-.708-.708l3.5-3.5a.5.5 0 01.708 0l3.5 3.5a.5.5 0 01-.708.708L7 5.957 3.854 9.104z",
        fill: e,
      }),
    ),
  ),
  Go = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.854 4.896a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l3.5-3.5a.5.5 0 00-.708-.708L7 8.043 3.854 4.896z",
        fill: e,
      }),
    ),
  ),
  X4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.104 10.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 11.708.708L5.957 7l3.147 3.146z",
        fill: e,
      }),
    ),
  ),
  Z4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.896 10.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 10-.708.708L8.043 7l-3.147 3.146z",
        fill: e,
      }),
    ),
  ),
  J4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M11.854 4.646l-4.5-4.5a.5.5 0 00-.708 0l-4.5 4.5a.5.5 0 10.708.708L6.5 1.707V13.5a.5.5 0 001 0V1.707l3.646 3.647a.5.5 0 00.708-.708z",
        fill: e,
      }),
    ),
  ),
  Q4 = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.5.5a.5.5 0 00-1 0v11.793L2.854 8.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.351.146h.006c.127 0 .254-.05.35-.146l4.5-4.5a.5.5 0 00-.707-.708L7.5 12.293V.5z",
        fill: e,
      }),
    ),
  ),
  ev = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.354 2.146a.5.5 0 010 .708L1.707 6.5H13.5a.5.5 0 010 1H1.707l3.647 3.646a.5.5 0 01-.708.708l-4.5-4.5a.5.5 0 010-.708l4.5-4.5a.5.5 0 01.708 0z",
        fill: e,
      }),
    ),
  ),
  tv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M8.646 2.146a.5.5 0 01.708 0l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L12.293 7.5H.5a.5.5 0 010-1h11.793L8.646 2.854a.5.5 0 010-.708z",
        fill: e,
      }),
    ),
  ),
  rv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.904 8.768V2.404a.5.5 0 01.5-.5h6.364a.5.5 0 110 1H3.61l8.339 8.339a.5.5 0 01-.707.707l-8.34-8.34v5.158a.5.5 0 01-1 0z",
        fill: e,
      }),
    ),
  ),
  nv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M12.096 8.768V2.404a.5.5 0 00-.5-.5H5.232a.5.5 0 100 1h5.157L2.05 11.243a.5.5 0 10.707.707l8.34-8.34v5.158a.5.5 0 101 0z",
        fill: e,
      }),
    ),
  ),
  av = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.904 5.232v6.364a.5.5 0 00.5.5h6.364a.5.5 0 000-1H3.61l8.339-8.339a.5.5 0 00-.707-.707l-8.34 8.34V5.231a.5.5 0 00-1 0z",
        fill: e,
      }),
    ),
  ),
  ov = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M12.096 5.232v6.364a.5.5 0 01-.5.5H5.232a.5.5 0 010-1h5.157L2.05 2.757a.5.5 0 01.707-.707l8.34 8.34V5.231a.5.5 0 111 0z",
        fill: e,
      }),
    ),
  ),
  lv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.772 3.59c.126-.12.33-.12.456 0l5.677 5.387c.203.193.06.523-.228.523H1.323c-.287 0-.431-.33-.228-.523L6.772 3.59z",
        fill: e,
      }),
    ),
  ),
  iv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.228 10.41a.335.335 0 01-.456 0L1.095 5.023c-.203-.193-.06-.523.228-.523h11.354c.287 0 .431.33.228.523L7.228 10.41z",
        fill: e,
      }),
    ),
  ),
  sv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.712 7.212a.3.3 0 010-.424l5.276-5.276a.3.3 0 01.512.212v10.552a.3.3 0 01-.512.212L3.712 7.212z",
        fill: e,
      }),
    ),
  ),
  cv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.288 7.212a.3.3 0 000-.424L5.012 1.512a.3.3 0 00-.512.212v10.552a.3.3 0 00.512.212l5.276-5.276z",
        fill: e,
      }),
    ),
  ),
  dv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z",
        fill: e,
      }),
    ),
  ),
  uv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z",
        fill: e,
      }),
    ),
  ),
  pv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.5 1h2a.5.5 0 010 1h-.793l3.147 3.146a.5.5 0 11-.708.708L2 2.707V3.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-.793L8.854 5.854a.5.5 0 11-.708-.708L11.293 2H10.5a.5.5 0 01-.5-.5zM12.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.793L8.146 8.854a.5.5 0 11.708-.708L12 11.293V10.5a.5.5 0 01.5-.5zM2 11.293V10.5a.5.5 0 00-1 0v2a.5.5 0 00.5.5h2a.5.5 0 000-1h-.793l3.147-3.146a.5.5 0 10-.708-.708L2 11.293z",
        fill: e,
      }),
    ),
  ),
  fv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M6.646.147l-1.5 1.5a.5.5 0 10.708.707l.646-.647V5a.5.5 0 001 0V1.707l.646.647a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M1.309 4.038a.498.498 0 00-.16.106l-.005.005a.498.498 0 00.002.705L3.293 7 1.146 9.146A.498.498 0 001.5 10h3a.5.5 0 000-1H2.707l1.5-1.5h5.586l2.353 2.354a.5.5 0 00.708-.708L10.707 7l2.146-2.146.11-.545-.107.542A.499.499 0 0013 4.503v-.006a.5.5 0 00-.144-.348l-.005-.005A.498.498 0 0012.5 4h-3a.5.5 0 000 1h1.793l-1.5 1.5H4.207L2.707 5H4.5a.5.5 0 000-1h-3a.498.498 0 00-.191.038z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M7 8.5a.5.5 0 01.5.5v3.293l.646-.647a.5.5 0 01.708.708l-1.5 1.5a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l.646.647V9a.5.5 0 01.5-.5zM9 9.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z",
        fill: e,
      }),
    ),
  ),
  hv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z",
        fill: e,
      }),
    ),
  ),
  gv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.5 1a.5.5 0 01.5.5V10a2 2 0 004 0V4a3 3 0 016 0v7.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L11 11.793V4a2 2 0 10-4 0v6.002a3 3 0 01-6 0V1.5a.5.5 0 01.5-.5z",
        fill: e,
      }),
    ),
  ),
  rc = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z",
        fill: e,
      }),
    ),
  ),
  mv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M4.354 2.146a.5.5 0 010 .708L1.707 5.5H9.5A4.5 4.5 0 0114 10v1.5a.5.5 0 01-1 0V10a3.5 3.5 0 00-3.5-3.5H1.707l2.647 2.646a.5.5 0 11-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0z",
        fill: e,
      }),
    ),
  ),
  vv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z",
        fill: e,
      }),
    ),
  ),
  bv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M8.646 5.854L7.5 4.707V10.5a.5.5 0 01-1 0V4.707L5.354 5.854a.5.5 0 11-.708-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.708z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: e,
      }),
    ),
  ),
  yv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.354 8.146L6.5 9.293V3.5a.5.5 0 011 0v5.793l1.146-1.147a.5.5 0 11.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm1 0a6 6 0 1112 0A6 6 0 011 7z",
        fill: e,
      }),
    ),
  ),
  wv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M5.854 5.354L4.707 6.5H10.5a.5.5 0 010 1H4.707l1.147 1.146a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 11.708.708z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1a6 6 0 110 12A6 6 0 017 1z",
        fill: e,
      }),
    ),
  ),
  xv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.5 6.5h5.793L8.146 5.354a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 11-.708-.708L9.293 7.5H3.5a.5.5 0 010-1z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 117 0a7 7 0 010 14zm0-1A6 6 0 117 1a6 6 0 010 12z",
        fill: e,
      }),
    ),
  ),
  Ev = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.092.5H7a6.5 6.5 0 106.41 7.583.5.5 0 10-.986-.166A5.495 5.495 0 017 12.5a5.5 5.5 0 010-11h.006a5.5 5.5 0 014.894 3H10a.5.5 0 000 1h3a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v1.535A6.495 6.495 0 007.092.5z",
        fill: e,
      }),
    ),
  ),
  Sv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 100 7a7 7 0 0014 0zm-6.535 5.738c-.233.23-.389.262-.465.262-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182-.434-1.012-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.043-.79 4.056-.24.56-.5.948-.737 1.182zM8.992 6.5H5.008c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182C6.768 1.032 6.924 1 7 1c.076 0 .232.032.465.262.238.234.497.623.737 1.182.434 1.012.738 2.433.79 4.056zm1 1c-.065 2.176-.558 4.078-1.282 5.253A6.005 6.005 0 0012.98 7.5H9.992zm2.987-1H9.992c-.065-2.176-.558-4.078-1.282-5.253A6.005 6.005 0 0112.98 6.5zm-8.971 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 001.02 6.5h2.988zm-2.987 1a6.005 6.005 0 004.27 5.253C4.565 11.578 4.072 9.676 4.007 7.5H1.02z",
        fill: e,
      }),
    ),
  ),
  Cv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.087 3.397L5.95 5.793a.374.374 0 00-.109.095.377.377 0 00-.036.052l-2.407 4.147a.374.374 0 00-.004.384c.104.179.334.24.513.136l4.142-2.404a.373.373 0 00.148-.143l2.406-4.146a.373.373 0 00-.037-.443.373.373 0 00-.478-.074zM4.75 9.25l2.847-1.652-1.195-1.195L4.75 9.25z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: e,
      }),
    ),
  ),
  Rv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z",
        fill: e,
      }),
    ),
  ),
  Iv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 5a2 2 0 11-4 0 2 2 0 014 0zM8 5a1 1 0 11-2 0 1 1 0 012 0z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 5A5 5 0 002 5c0 2.633 2.273 6.154 4.65 8.643.192.2.508.2.7 0C9.726 11.153 12 7.633 12 5zM7 1a4 4 0 014 4c0 1.062-.471 2.42-1.303 3.88-.729 1.282-1.69 2.562-2.697 3.67-1.008-1.108-1.968-2.388-2.697-3.67C3.47 7.42 3 6.063 3 5a4 4 0 014-4z",
        fill: e,
      }),
    ),
  ),
  Av = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7 2a.5.5 0 01.5.5v4H10a.5.5 0 010 1H7a.5.5 0 01-.5-.5V2.5A.5.5 0 017 2z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: e,
      }),
    ),
  ),
  _v = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M9.79 4.093a.5.5 0 01.117.698L7.91 7.586a1 1 0 11-.814-.581l1.997-2.796a.5.5 0 01.698-.116z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.069 12.968a7 7 0 119.863 0A12.962 12.962 0 007 12c-1.746 0-3.41.344-4.931.968zm9.582-1.177a6 6 0 10-9.301 0A13.98 13.98 0 017 11c1.629 0 3.194.279 4.65.791z",
        fill: e,
      }),
    ),
  ),
  kv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z",
        fill: e,
      }),
    ),
  ),
  Ov = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.354 1.146l5.5 5.5a.5.5 0 01-.708.708L12 7.207V12.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V9H6v3.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V7.207l-.146.147a.5.5 0 11-.708-.708l1-1 4.5-4.5a.5.5 0 01.708 0zM3 6.207V12h2V8.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V12h2V6.207l-4-4-4 4z",
        fill: e,
      }),
    ),
  ),
  Tv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.213 4.094a.5.5 0 01.056-.034l5.484-2.995a.498.498 0 01.494 0L12.73 4.06a.507.507 0 01.266.389.498.498 0 01-.507.555H1.51a.5.5 0 01-.297-.91zm2.246-.09h7.082L7 2.07 3.459 4.004z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M4 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM11 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM5.75 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM8.75 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM1.5 12.504a.5.5 0 01.5-.5h10a.5.5 0 010 1H2a.5.5 0 01-.5-.5z",
        fill: e,
      }),
    ),
  ),
  Mv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement(
        "g",
        { clipPath: "url(#prefix__clip0_1107_3594)" },
        o.createElement("path", {
          d: "M11.451.537l.01 12.922h0L7.61 8.946a1.077 1.077 0 00-.73-.374L.964 8.087 11.45.537h0z",
          stroke: e,
          strokeWidth: 1.077,
        }),
      ),
      o.createElement(
        "defs",
        null,
        o.createElement(
          "clipPath",
          { id: "prefix__clip0_1107_3594" },
          o.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
        ),
      ),
    ),
  ),
  $v = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z",
        fill: e,
      }),
    ),
  ),
  Lv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M7.275 13.16a11.388 11.388 0 005.175-1.232v-.25c0-1.566-3.237-2.994-4.104-3.132-.27-.043-.276-.783-.276-.783s.791-.783.964-1.836c.463 0 .75-1.119.286-1.513C9.34 4 9.916 1.16 6.997 1.16c-2.92 0-2.343 2.84-2.324 3.254-.463.394-.177 1.513.287 1.513.172 1.053.963 1.836.963 1.836s-.006.74-.275.783c-.858.136-4.036 1.536-4.103 3.082a11.388 11.388 0 005.73 1.532z",
        fill: e,
      }),
    ),
  ),
  zv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M1.183 11.906a10.645 10.645 0 01-1.181-.589c.062-1.439 3.02-2.74 3.818-2.868.25-.04.256-.728.256-.728s-.736-.729-.896-1.709c-.432 0-.698-1.041-.267-1.408A2.853 2.853 0 002.9 4.46c-.072-.672-.31-2.884 2.175-2.884 2.486 0 2.248 2.212 2.176 2.884-.007.062-.012.112-.014.144.432.367.165 1.408-.266 1.408-.16.98-.896 1.709-.896 1.709s.005.688.256.728c.807.129 3.82 1.457 3.82 2.915v.233a10.598 10.598 0 01-4.816 1.146c-1.441 0-2.838-.282-4.152-.837zM11.5 2.16a.5.5 0 01.5.5v1.5h1.5a.5.5 0 010 1H12v1.5a.5.5 0 01-1 0v-1.5H9.5a.5.5 0 110-1H11v-1.5a.5.5 0 01.5-.5z",
        fill: e,
      }),
    ),
  ),
  Bv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M9.21 11.623a10.586 10.586 0 01-4.031.787A10.585 10.585 0 010 11.07c.06-1.354 2.933-2.578 3.708-2.697.243-.038.249-.685.249-.685s-.715-.685-.87-1.607c-.42 0-.679-.979-.26-1.323a2.589 2.589 0 00-.013-.136c-.07-.632-.3-2.712 2.113-2.712 2.414 0 2.183 2.08 2.113 2.712-.007.059-.012.105-.013.136.419.344.16 1.323-.259 1.323-.156.922-.87 1.607-.87 1.607s.005.647.248.685c.784.12 3.71 1.37 3.71 2.74v.22c-.212.103-.427.2-.646.29z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M8.81 8.417a9.643 9.643 0 00-.736-.398c.61-.42 1.396-.71 1.7-.757.167-.026.171-.471.171-.471s-.491-.471-.598-1.104c-.288 0-.466-.674-.178-.91-.001-.022-.005-.053-.01-.094-.048-.434-.206-1.864 1.453-1.864 1.66 0 1.5 1.43 1.453 1.864l-.01.094c.289.236.11.91-.178.91-.107.633-.598 1.104-.598 1.104s.004.445.171.47c.539.084 2.55.942 2.55 1.884v.628a10.604 10.604 0 01-3.302.553 2.974 2.974 0 00-.576-.879c-.375-.408-.853-.754-1.312-1.03z",
        fill: e,
      }),
    ),
  ),
  Pv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M9.106 7.354c-.627.265-1.295.4-1.983.4a5.062 5.062 0 01-2.547-.681c.03-.688 1.443-1.31 1.824-1.37.12-.02.122-.348.122-.348s-.351-.348-.428-.816c-.206 0-.333-.498-.127-.673 0-.016-.003-.04-.007-.07C5.926 3.477 5.812 2.42 7 2.42c1.187 0 1.073 1.057 1.039 1.378l-.007.069c.207.175.08.673-.127.673-.076.468-.428.816-.428.816s.003.329.122.348c.386.06 1.825.696 1.825 1.392v.111c-.104.053-.21.102-.318.148zM3.75 11.25A.25.25 0 014 11h6a.25.25 0 110 .5H4a.25.25 0 01-.25-.25zM4 9a.25.25 0 000 .5h6a.25.25 0 100-.5H4z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 .5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V.5zM2 13V1h10v12H2z",
        fill: e,
      }),
    ),
  ),
  Hv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.968 8.75a.5.5 0 00-.866.5A4.498 4.498 0 007 11.5c1.666 0 3.12-.906 3.898-2.25a.5.5 0 10-.866-.5A3.498 3.498 0 017 10.5a3.498 3.498 0 01-3.032-1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: e,
      }),
    ),
  ),
  Fv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M4.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: e,
      }),
    ),
  ),
  jv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.968 10.25a.5.5 0 01-.866-.5A4.498 4.498 0 017 7.5c1.666 0 3.12.906 3.898 2.25a.5.5 0 11-.866.5A3.498 3.498 0 007 8.5a3.498 3.498 0 00-3.032 1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: e,
      }),
    ),
  ),
  Nv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        d: "M3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
        fill: e,
      }),
      o.createElement("path", {
        d: "M7 4.5a1 1 0 100-2 1 1 0 000 2z",
        fill: e,
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: e,
      }),
    ),
  ),
  Dv = o.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) =>
    o.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 15 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: n,
        ...r,
      },
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zM8 3.5a1 1 0 11-2 0 1 1 0 012 0zM3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
        fill: e,
      }),
    ),
  );
const Vv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        AccessibilityAltIcon: Dv,
        AccessibilityIcon: Nv,
        AddIcon: Zs,
        AdminIcon: Tv,
        AlertAltIcon: y4,
        AlertIcon: b4,
        AlignLeftIcon: Cm,
        AlignRightIcon: Rm,
        AppleIcon: Um,
        ArrowBottomLeftIcon: av,
        ArrowBottomRightIcon: ov,
        ArrowDownIcon: Q4,
        ArrowLeftIcon: ev,
        ArrowRightIcon: tv,
        ArrowSolidDownIcon: iv,
        ArrowSolidLeftIcon: sv,
        ArrowSolidRightIcon: cv,
        ArrowSolidUpIcon: lv,
        ArrowTopLeftIcon: rv,
        ArrowTopRightIcon: nv,
        ArrowUpIcon: J4,
        AzureDevOpsIcon: Xm,
        BackIcon: wv,
        BasketIcon: N4,
        BatchAcceptIcon: j2,
        BatchDenyIcon: F2,
        BeakerIcon: D4,
        BellIcon: S4,
        BitbucketIcon: Zm,
        BoldIcon: Mm,
        BookIcon: mm,
        BookmarkHollowIcon: O4,
        BookmarkIcon: T4,
        BottomBarIcon: S2,
        BottomBarToggleIcon: C2,
        BoxIcon: k2,
        BranchIcon: Nm,
        BrowserIcon: g2,
        ButtonIcon: d4,
        CPUIcon: R2,
        CalendarIcon: Em,
        CameraIcon: am,
        CategoryIcon: bm,
        CertificateIcon: P4,
        ChangedIcon: Z2,
        ChatIcon: a4,
        CheckIcon: P2,
        ChevronDownIcon: ec,
        ChevronLeftIcon: K4,
        ChevronRightIcon: qo,
        ChevronSmallDownIcon: Go,
        ChevronSmallLeftIcon: X4,
        ChevronSmallRightIcon: Z4,
        ChevronSmallUpIcon: tc,
        ChevronUpIcon: Y4,
        ChromaticIcon: Jm,
        ChromeIcon: Ym,
        CircleHollowIcon: _4,
        CircleIcon: k4,
        ClearIcon: Q2,
        CloseAltIcon: V2,
        CloseIcon: Y2,
        CloudHollowIcon: W4,
        CloudIcon: q4,
        CogIcon: M2,
        CollapseIcon: uv,
        CommandIcon: h4,
        CommentAddIcon: t4,
        CommentIcon: e4,
        CommentsIcon: n4,
        CommitIcon: jm,
        CompassIcon: Cv,
        ComponentDrivenIcon: Qm,
        ComponentIcon: Ug,
        ContrastIcon: Zg,
        ControlsIcon: N2,
        CopyIcon: vm,
        CreditIcon: c4,
        CrossIcon: U2,
        DashboardIcon: _v,
        DatabaseIcon: I2,
        DeleteIcon: K2,
        DiamondIcon: M4,
        DirectionIcon: Mv,
        DiscordIcon: e2,
        DocChartIcon: Am,
        DocListIcon: _m,
        DocumentIcon: Cn,
        DownloadIcon: yv,
        DragIcon: km,
        EditIcon: T2,
        EllipsisIcon: z2,
        EmailIcon: w4,
        ExpandAltIcon: dv,
        ExpandIcon: pv,
        EyeCloseIcon: Ys,
        EyeIcon: Gs,
        FaceHappyIcon: Hv,
        FaceNeutralIcon: Fv,
        FaceSadIcon: jv,
        FacebookIcon: t2,
        FailedIcon: J2,
        FastForwardIcon: dm,
        FigmaIcon: r2,
        FilterIcon: Im,
        FlagIcon: U4,
        FolderIcon: ym,
        FormIcon: H2,
        GDriveIcon: n2,
        GithubIcon: a2,
        GitlabIcon: o2,
        GlobeIcon: Sv,
        GoogleIcon: l2,
        GraphBarIcon: Sm,
        GraphLineIcon: xm,
        GraphqlIcon: i2,
        GridAltIcon: Yg,
        GridIcon: Wg,
        GrowIcon: em,
        HeartHollowIcon: $4,
        HeartIcon: L4,
        HomeIcon: Ov,
        HourglassIcon: V4,
        InfoIcon: g4,
        ItalicIcon: $m,
        JumpToIcon: A4,
        KeyIcon: i4,
        LightningIcon: Xg,
        LightningOffIcon: Ks,
        LinkBrokenIcon: E4,
        LinkIcon: Qs,
        LinkedinIcon: f2,
        LinuxIcon: Wm,
        ListOrderedIcon: zm,
        ListUnorderedIcon: Bm,
        LocationIcon: Rv,
        LockIcon: o4,
        MarkdownIcon: Hm,
        MarkupIcon: Tm,
        MediumIcon: s2,
        MemoryIcon: A2,
        MenuIcon: Om,
        MergeIcon: Vm,
        MirrorIcon: Qg,
        MobileIcon: v2,
        MoonIcon: gm,
        NutIcon: $2,
        OutboxIcon: s4,
        OutlineIcon: qg,
        PaintBrushIcon: tm,
        PaperClipIcon: Lm,
        ParagraphIcon: Pm,
        PassedIcon: X2,
        PhoneIcon: x4,
        PhotoDragIcon: Gg,
        PhotoIcon: Vg,
        PinAltIcon: q2,
        PinIcon: Iv,
        PlayBackIcon: im,
        PlayIcon: lm,
        PlayNextIcon: sm,
        PlusIcon: D2,
        PointerDefaultIcon: p4,
        PointerHandIcon: f4,
        PowerIcon: O2,
        PrintIcon: wm,
        ProceedIcon: xv,
        ProfileIcon: Pv,
        PullRequestIcon: Dm,
        QuestionIcon: m4,
        RSSIcon: C4,
        RedirectIcon: gv,
        ReduxIcon: c2,
        RefreshIcon: Ev,
        ReplyIcon: mv,
        RepoIcon: Fm,
        RequestChangeIcon: r4,
        RewindIcon: cm,
        RulerIcon: rm,
        SearchIcon: Kg,
        ShareAltIcon: R4,
        ShareIcon: I4,
        ShieldIcon: j4,
        SideBySideIcon: pm,
        SidebarAltIcon: w2,
        SidebarAltToggleIcon: x2,
        SidebarIcon: y2,
        SidebarToggleIcon: E2,
        SpeakerIcon: om,
        StackedIcon: fm,
        StarHollowIcon: z4,
        StarIcon: B4,
        StickerIcon: G4,
        StopAltIcon: um,
        StopIcon: nm,
        StorybookIcon: Km,
        StructureIcon: _2,
        SubtractIcon: Js,
        SunIcon: hm,
        SupportIcon: v4,
        SwitchAltIcon: Jg,
        SyncIcon: vv,
        TabletIcon: m2,
        ThumbsUpIcon: F4,
        TimeIcon: Av,
        TimerIcon: kv,
        TransferIcon: hv,
        TrashIcon: W2,
        TwitterIcon: d2,
        TypeIcon: u4,
        UbuntuIcon: qm,
        UndoIcon: rc,
        UnfoldIcon: fv,
        UnlockIcon: l4,
        UnpinIcon: G2,
        UploadIcon: bv,
        UserAddIcon: zv,
        UserAltIcon: Lv,
        UserIcon: $v,
        UsersIcon: Bv,
        VSCodeIcon: p2,
        VerifiedIcon: H4,
        VideoIcon: Xs,
        WandIcon: B2,
        WatchIcon: b2,
        WindowsIcon: Gm,
        WrenchIcon: L2,
        XIcon: h2,
        YoutubeIcon: u2,
        ZoomIcon: Us,
        ZoomOutIcon: Ws,
        ZoomResetIcon: qs,
        iconList: Dg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  { global: Uv } = __STORYBOOK_MODULE_GLOBAL__,
  { deprecate: nc, logger: Wv } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var te = ({ ...e }, t) => {
  let r = [e.class, e.className];
  return (
    delete e.class,
    (e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" ")),
    e
  );
};
function qv(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Br(e, t) {
  return (
    (Br = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Br(e, t)
  );
}
function Gv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Br(e, t);
}
function Ka(e) {
  return (
    (Ka = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Ka(e)
  );
}
function Yv(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Kv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function gn(e, t, r) {
  return (
    Kv()
      ? (gn = Reflect.construct.bind())
      : (gn = function (n, a, l) {
          var i = [null];
          i.push.apply(i, a);
          var c = Function.bind.apply(n, i),
            s = new c();
          return l && Br(s, l.prototype), s;
        }),
    gn.apply(null, arguments)
  );
}
function Xa(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Xa = function (r) {
      if (r === null || !Yv(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function",
        );
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, n);
      }
      function n() {
        return gn(r, arguments, Ka(this).constructor);
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Br(n, r)
      );
    }),
    Xa(e)
  );
}
var Xv = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`,
};
function Zv() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0],
    a = [],
    l;
  for (l = 1; l < t.length; l += 1) a.push(t[l]);
  return (
    a.forEach(function (i) {
      n = n.replace(/%[a-z]/, i);
    }),
    n
  );
}
var tt = (function (e) {
  Gv(t, e);
  function t(r) {
    for (
      var n, a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), i = 1;
      i < a;
      i++
    )
      l[i - 1] = arguments[i];
    return (
      (n = e.call(this, Zv.apply(void 0, [Xv[r]].concat(l))) || this), qv(n)
    );
  }
  return t;
})(Xa(Error));
function ha(e) {
  return Math.round(e * 255);
}
function Jv(e, t, r) {
  return ha(e) + "," + ha(t) + "," + ha(r);
}
function Pr(e, t, r, n) {
  if ((n === void 0 && (n = Jv), t === 0)) return n(r, r, r);
  var a = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((a % 2) - 1)),
    c = 0,
    s = 0,
    d = 0;
  a >= 0 && a < 1
    ? ((c = l), (s = i))
    : a >= 1 && a < 2
      ? ((c = i), (s = l))
      : a >= 2 && a < 3
        ? ((s = l), (d = i))
        : a >= 3 && a < 4
          ? ((s = i), (d = l))
          : a >= 4 && a < 5
            ? ((c = i), (d = l))
            : a >= 5 && a < 6 && ((c = l), (d = i));
  var p = r - l / 2,
    h = c + p,
    m = s + p,
    f = d + p;
  return n(h, m, f);
}
var xi = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function Qv(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return xi[t] ? "#" + xi[t] : e;
}
var e3 = /^#[a-fA-F0-9]{6}$/,
  t3 = /^#[a-fA-F0-9]{8}$/,
  r3 = /^#[a-fA-F0-9]{3}$/,
  n3 = /^#[a-fA-F0-9]{4}$/,
  ga = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  a3 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  o3 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  l3 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Yo(e) {
  if (typeof e != "string") throw new tt(3);
  var t = Qv(e);
  if (t.match(e3))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(t3)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(r3))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(n3)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var a = ga.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10),
    };
  var l = a3.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha:
        parseFloat("" + l[4]) > 1
          ? parseFloat("" + l[4]) / 100
          : parseFloat("" + l[4]),
    };
  var i = o3.exec(t);
  if (i) {
    var c = parseInt("" + i[1], 10),
      s = parseInt("" + i[2], 10) / 100,
      d = parseInt("" + i[3], 10) / 100,
      p = "rgb(" + Pr(c, s, d) + ")",
      h = ga.exec(p);
    if (!h) throw new tt(4, t, p);
    return {
      red: parseInt("" + h[1], 10),
      green: parseInt("" + h[2], 10),
      blue: parseInt("" + h[3], 10),
    };
  }
  var m = l3.exec(t.substring(0, 50));
  if (m) {
    var f = parseInt("" + m[1], 10),
      v = parseInt("" + m[2], 10) / 100,
      g = parseInt("" + m[3], 10) / 100,
      E = "rgb(" + Pr(f, v, g) + ")",
      x = ga.exec(E);
    if (!x) throw new tt(4, t, E);
    return {
      red: parseInt("" + x[1], 10),
      green: parseInt("" + x[2], 10),
      blue: parseInt("" + x[3], 10),
      alpha:
        parseFloat("" + m[4]) > 1
          ? parseFloat("" + m[4]) / 100
          : parseFloat("" + m[4]),
    };
  }
  throw new tt(5);
}
function i3(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    a = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (a + l) / 2;
  if (a === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var c,
    s = a - l,
    d = i > 0.5 ? s / (2 - a - l) : s / (a + l);
  switch (a) {
    case t:
      c = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      c = (n - t) / s + 2;
      break;
    default:
      c = (t - r) / s + 4;
      break;
  }
  return (
    (c *= 60),
    e.alpha !== void 0
      ? { hue: c, saturation: d, lightness: i, alpha: e.alpha }
      : { hue: c, saturation: d, lightness: i }
  );
}
function ac(e) {
  return i3(Yo(e));
}
var s3 = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? "#" + e[1] + e[3] + e[5]
      : e;
  },
  Za = s3;
function _t(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ma(e) {
  return _t(Math.round(e * 255));
}
function c3(e, t, r) {
  return Za("#" + ma(e) + ma(t) + ma(r));
}
function Rn(e, t, r) {
  return Pr(e, t, r, c3);
}
function d3(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Rn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Rn(e.hue, e.saturation, e.lightness);
  throw new tt(1);
}
function u3(e, t, r, n) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof r == "number" &&
    typeof n == "number"
  )
    return n >= 1 ? Rn(e, t, r) : "rgba(" + Pr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? Rn(e.hue, e.saturation, e.lightness)
      : "rgba(" + Pr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new tt(2);
}
function Ja(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Za("#" + _t(e) + _t(t) + _t(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Za("#" + _t(e.red) + _t(e.green) + _t(e.blue));
  throw new tt(6);
}
function In(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var a = Yo(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof n == "number"
    )
      return n >= 1
        ? Ja(e, t, r)
        : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Ja(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new tt(7);
}
var p3 = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  f3 = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      typeof e.alpha == "number"
    );
  },
  h3 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  g3 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      typeof e.alpha == "number"
    );
  };
function oc(e) {
  if (typeof e != "object") throw new tt(8);
  if (f3(e)) return In(e);
  if (p3(e)) return Ja(e);
  if (g3(e)) return u3(e);
  if (h3(e)) return d3(e);
  throw new tt(8);
}
function lc(e, t, r) {
  return function () {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : lc(e, t, n);
  };
}
function Ko(e) {
  return lc(e, e.length, []);
}
function Xo(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function m3(e, t) {
  if (t === "transparent") return t;
  var r = ac(t);
  return oc(G({}, r, { lightness: Xo(0, 1, r.lightness - parseFloat(e)) }));
}
var v3 = Ko(m3),
  Zt = v3;
function b3(e, t) {
  if (t === "transparent") return t;
  var r = ac(t);
  return oc(G({}, r, { lightness: Xo(0, 1, r.lightness + parseFloat(e)) }));
}
var y3 = Ko(b3),
  Ei = y3;
function w3(e, t) {
  if (t === "transparent") return t;
  var r = Yo(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    a = G({}, r, {
      alpha: Xo(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return In(a);
}
var x3 = Ko(w3),
  Oe = x3,
  ur = ({ theme: e }) => ({
    margin: "20px 0 8px",
    padding: 0,
    cursor: "text",
    position: "relative",
    color: e.color.defaultText,
    "&:first-of-type": { marginTop: 0, paddingTop: 0 },
    "&:hover a.anchor": { textDecoration: "none" },
    "& tt, & code": { fontSize: "inherit" },
  }),
  ut = ({ theme: e }) => ({
    lineHeight: 1,
    margin: "0 2px",
    padding: "3px 5px",
    whiteSpace: "nowrap",
    borderRadius: 3,
    fontSize: e.typography.size.s2 - 1,
    border:
      e.base === "light"
        ? `1px solid ${e.color.mediumlight}`
        : `1px solid ${e.color.darker}`,
    color:
      e.base === "light"
        ? Oe(0.1, e.color.defaultText)
        : Oe(0.3, e.color.defaultText),
    backgroundColor: e.base === "light" ? e.color.lighter : e.color.border,
  }),
  re = ({ theme: e }) => ({
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s3,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitOverflowScrolling: "touch",
  }),
  Ut = { margin: "16px 0" },
  E3 = ({ href: e, ...t }) => {
    let r = /^\//.test(e) ? `./?path=${e}` : e,
      n = /^#.*/.test(e) ? "_self" : "_top";
    return u.createElement("a", { href: r, target: n, ...t });
  },
  ic = A(E3)(re, ({ theme: e }) => ({
    fontSize: "inherit",
    lineHeight: "24px",
    color: e.color.secondary,
    textDecoration: "none",
    "&.absent": { color: "#cc0000" },
    "&.anchor": {
      display: "block",
      paddingLeft: 30,
      marginLeft: -30,
      cursor: "pointer",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
    },
  })),
  sc = A.blockquote(re, Ut, ({ theme: e }) => ({
    borderLeft: `4px solid ${e.color.medium}`,
    padding: "0 15px",
    color: e.color.dark,
    "& > :first-of-type": { marginTop: 0 },
    "& > :last-child": { marginBottom: 0 },
  })),
  S3 = (e) => typeof e == "string",
  C3 = /[\n\r]/g,
  R3 = A.code(
    ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit",
    }),
    ut,
  ),
  I3 = A(Po)(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: "19px",
    margin: "25px 0 40px",
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    "pre.prismjs": { padding: 20, background: "inherit" },
  })),
  Zo = ({ className: e, children: t, ...r }) => {
    let n = (e || "").match(/lang-(\S+)/),
      a = o.Children.toArray(t);
    return a.filter(S3).some((l) => l.match(C3))
      ? u.createElement(
          I3,
          {
            bordered: !0,
            copyable: !0,
            language: (n == null ? void 0 : n[1]) ?? "text",
            format: !1,
            ...r,
          },
          t,
        )
      : u.createElement(R3, { ...r, className: e }, a);
  },
  cc = A.div(re),
  dc = A.dl(re, Ut, {
    padding: 0,
    "& dt": {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "italic",
      padding: 0,
      margin: "16px 0 4px",
    },
    "& dt:first-of-type": { padding: 0 },
    "& dt > :first-of-type": { marginTop: 0 },
    "& dt > :last-child": { marginBottom: 0 },
    "& dd": { margin: "0 0 16px", padding: "0 15px" },
    "& dd > :first-of-type": { marginTop: 0 },
    "& dd > :last-child": { marginBottom: 0 },
  }),
  uc = A.h1(re, ur, ({ theme: e }) => ({
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold,
  })),
  Jo = A.h2(re, ur, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m2}px`,
    paddingBottom: 4,
    borderBottom: `1px solid ${e.appBorderColor}`,
  })),
  Qo = A.h3(re, ur, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m1}px`,
  })),
  pc = A.h4(re, ur, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s3}px`,
  })),
  fc = A.h5(re, ur, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
  })),
  hc = A.h6(re, ur, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    color: e.color.dark,
  })),
  gc = A.hr(({ theme: e }) => ({
    border: "0 none",
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0,
  })),
  mc = A.img({ maxWidth: "100%" }),
  vc = A.li(re, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    color: e.color.defaultText,
    lineHeight: "24px",
    "& + li": { marginTop: ".25em" },
    "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
    "& code": ut({ theme: e }),
  })),
  A3 = {
    paddingLeft: 30,
    "& :first-of-type": { marginTop: 0 },
    "& :last-child": { marginBottom: 0 },
  },
  bc = A.ol(re, Ut, A3, { listStyle: "decimal" }),
  yc = A.p(re, Ut, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: "24px",
    color: e.color.defaultText,
    "& code": ut({ theme: e }),
  })),
  wc = A.pre(re, Ut, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: "18px",
    padding: "11px 1rem",
    whiteSpace: "pre-wrap",
    color: "inherit",
    borderRadius: 3,
    margin: "1rem 0",
    "&:not(.prismjs)": {
      background: "transparent",
      border: "none",
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    "& pre, &.prismjs": {
      padding: 15,
      margin: 0,
      whiteSpace: "pre-wrap",
      color: "inherit",
      fontSize: "13px",
      lineHeight: "19px",
      code: { color: "inherit", fontSize: "inherit" },
    },
    "& code": { whiteSpace: "pre" },
    "& code, & tt": { border: "none" },
  })),
  xc = A.span(re, ({ theme: e }) => ({
    "&.frame": {
      display: "block",
      overflow: "hidden",
      "& > span": {
        border: `1px solid ${e.color.medium}`,
        display: "block",
        float: "left",
        overflow: "hidden",
        margin: "13px 0 0",
        padding: 7,
        width: "auto",
      },
      "& span img": { display: "block", float: "left" },
      "& span span": {
        clear: "both",
        color: e.color.darkest,
        display: "block",
        padding: "5px 0 0",
      },
    },
    "&.align-center": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "center",
      },
      "& span img": { margin: "0 auto", textAlign: "center" },
    },
    "&.align-right": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px 0 0",
        textAlign: "right",
      },
      "& span img": { margin: 0, textAlign: "right" },
    },
    "&.float-left": {
      display: "block",
      marginRight: 13,
      overflow: "hidden",
      float: "left",
      "& span": { margin: "13px 0 0" },
    },
    "&.float-right": {
      display: "block",
      marginLeft: 13,
      overflow: "hidden",
      float: "right",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "right",
      },
    },
  })),
  Ec = A.table(re, Ut, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: "24px",
    padding: 0,
    borderCollapse: "collapse",
    "& tr": {
      borderTop: `1px solid ${e.appBorderColor}`,
      backgroundColor: e.appContentBg,
      margin: 0,
      padding: 0,
    },
    "& tr:nth-of-type(2n)": {
      backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter,
    },
    "& tr th": {
      fontWeight: "bold",
      color: e.color.defaultText,
      border: `1px solid ${e.appBorderColor}`,
      margin: 0,
      padding: "6px 13px",
    },
    "& tr td": {
      border: `1px solid ${e.appBorderColor}`,
      color: e.color.defaultText,
      margin: 0,
      padding: "6px 13px",
    },
    "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
    "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
  })),
  Sc = A.title(ut),
  _3 = {
    paddingLeft: 30,
    "& :first-of-type": { marginTop: 0 },
    "& :last-child": { marginBottom: 0 },
  },
  Cc = A.ul(re, Ut, _3, { listStyle: "disc" }),
  el = A.div(re),
  Rc = {
    h1: (e) => u.createElement(uc, { ...te(e, "h1") }),
    h2: (e) => u.createElement(Jo, { ...te(e, "h2") }),
    h3: (e) => u.createElement(Qo, { ...te(e, "h3") }),
    h4: (e) => u.createElement(pc, { ...te(e, "h4") }),
    h5: (e) => u.createElement(fc, { ...te(e, "h5") }),
    h6: (e) => u.createElement(hc, { ...te(e, "h6") }),
    pre: (e) => u.createElement(wc, { ...te(e, "pre") }),
    a: (e) => u.createElement(ic, { ...te(e, "a") }),
    hr: (e) => u.createElement(gc, { ...te(e, "hr") }),
    dl: (e) => u.createElement(dc, { ...te(e, "dl") }),
    blockquote: (e) => u.createElement(sc, { ...te(e, "blockquote") }),
    table: (e) => u.createElement(Ec, { ...te(e, "table") }),
    img: (e) => u.createElement(mc, { ...te(e, "img") }),
    div: (e) => u.createElement(cc, { ...te(e, "div") }),
    span: (e) => u.createElement(xc, { ...te(e, "span") }),
    li: (e) => u.createElement(vc, { ...te(e, "li") }),
    ul: (e) => u.createElement(Cc, { ...te(e, "ul") }),
    ol: (e) => u.createElement(bc, { ...te(e, "ol") }),
    p: (e) => u.createElement(yc, { ...te(e, "p") }),
    code: (e) => u.createElement(Zo, { ...te(e, "code") }),
    tt: (e) => u.createElement(Sc, { ...te(e, "tt") }),
    resetwrapper: (e) => u.createElement(el, { ...te(e, "resetwrapper") }),
  },
  k3 = A.div(
    ({ theme: e }) => ({
      display: "inline-block",
      fontSize: 11,
      lineHeight: "12px",
      alignSelf: "center",
      padding: "4px 12px",
      borderRadius: "3em",
      fontWeight: e.typography.weight.bold,
    }),
    {
      svg: {
        height: 12,
        width: 12,
        marginRight: 4,
        marginTop: -2,
        path: { fill: "currentColor" },
      },
    },
    ({ theme: e, status: t }) => {
      switch (t) {
        case "critical":
          return { color: e.color.critical, background: e.background.critical };
        case "negative":
          return {
            color: e.color.negativeText,
            background: e.background.negative,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${Oe(0.9, e.color.negativeText)}`
                : "none",
          };
        case "warning":
          return {
            color: e.color.warningText,
            background: e.background.warning,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${Oe(0.9, e.color.warningText)}`
                : "none",
          };
        case "neutral":
          return {
            color: e.color.dark,
            background: e.color.mediumlight,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${Oe(0.9, e.color.dark)}`
                : "none",
          };
        case "positive":
          return {
            color: e.color.positiveText,
            background: e.background.positive,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${Oe(0.9, e.color.positiveText)}`
                : "none",
          };
        default:
          return {};
      }
    },
  ),
  O3 = ({ ...e }) => u.createElement(k3, { ...e }),
  T3 = 0,
  M3 = (e) =>
    e.button === T3 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
  $3 = (e, t) => {
    M3(e) && (e.preventDefault(), t(e));
  },
  L3 = A.span(
    ({ withArrow: e }) =>
      e
        ? {
            "> svg:last-of-type": {
              height: "0.7em",
              width: "0.7em",
              marginRight: 0,
              marginLeft: "0.25em",
              bottom: "auto",
              verticalAlign: "inherit",
            },
          }
        : {},
    ({ containsIcon: e }) =>
      e
        ? {
            svg: {
              height: "1em",
              width: "1em",
              verticalAlign: "middle",
              position: "relative",
              bottom: 0,
              marginRight: 0,
            },
          }
        : {},
  ),
  z3 = A.a(
    ({ theme: e }) => ({
      display: "inline-block",
      transition: "all 150ms ease-out",
      textDecoration: "none",
      color: e.color.secondary,
      "&:hover, &:focus": {
        cursor: "pointer",
        color: Zt(0.07, e.color.secondary),
        "svg path:not([fill])": { fill: Zt(0.07, e.color.secondary) },
      },
      "&:active": {
        color: Zt(0.1, e.color.secondary),
        "svg path:not([fill])": { fill: Zt(0.1, e.color.secondary) },
      },
      svg: {
        display: "inline-block",
        height: "1em",
        width: "1em",
        verticalAlign: "text-top",
        position: "relative",
        bottom: "-0.125em",
        marginRight: "0.4em",
        "& path": { fill: e.color.secondary },
      },
    }),
    ({ theme: e, secondary: t, tertiary: r }) => {
      let n;
      return (
        t && (n = [e.textMutedColor, e.color.dark, e.color.darker]),
        r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]),
        n
          ? {
              color: n[0],
              "svg path:not([fill])": { fill: n[0] },
              "&:hover": {
                color: n[1],
                "svg path:not([fill])": { fill: n[1] },
              },
              "&:active": {
                color: n[2],
                "svg path:not([fill])": { fill: n[2] },
              },
            }
          : {}
      );
    },
    ({ nochrome: e }) =>
      e
        ? {
            color: "inherit",
            "&:hover, &:active": {
              color: "inherit",
              textDecoration: "underline",
            },
          }
        : {},
    ({ theme: e, inverse: t }) =>
      t
        ? {
            color: e.color.lightest,
            ":not([fill])": { fill: e.color.lightest },
            "&:hover": {
              color: e.color.lighter,
              "svg path:not([fill])": { fill: e.color.lighter },
            },
            "&:active": {
              color: e.color.light,
              "svg path:not([fill])": { fill: e.color.light },
            },
          }
        : {},
    ({ isButton: e }) =>
      e
        ? {
            border: 0,
            borderRadius: 0,
            background: "none",
            padding: 0,
            fontSize: "inherit",
          }
        : {},
  ),
  Bt = ({
    cancel: e = !0,
    children: t,
    onClick: r = void 0,
    withArrow: n = !1,
    containsIcon: a = !1,
    className: l = void 0,
    style: i = void 0,
    ...c
  }) =>
    u.createElement(
      z3,
      { ...c, onClick: r && e ? (s) => $3(s, r) : r, className: l },
      u.createElement(
        L3,
        { withArrow: n, containsIcon: a },
        t,
        n && u.createElement(qo, null),
      ),
    ),
  B3 = A.div(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    lineHeight: "1.6",
    h1: {
      fontSize: `${e.typography.size.l1}px`,
      fontWeight: e.typography.weight.bold,
    },
    h2: {
      fontSize: `${e.typography.size.m2}px`,
      borderBottom: `1px solid ${e.appBorderColor}`,
    },
    h3: { fontSize: `${e.typography.size.m1}px` },
    h4: { fontSize: `${e.typography.size.s3}px` },
    h5: { fontSize: `${e.typography.size.s2}px` },
    h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
    "pre:not(.prismjs)": {
      background: "transparent",
      border: "none",
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    "pre pre, pre.prismjs": {
      padding: 15,
      margin: 0,
      whiteSpace: "pre-wrap",
      color: "inherit",
      fontSize: "13px",
      lineHeight: "19px",
    },
    "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" },
    "pre code": {
      margin: 0,
      padding: 0,
      whiteSpace: "pre",
      border: "none",
      background: "transparent",
    },
    "pre code, pre tt": { backgroundColor: "transparent", border: "none" },
    "body > *:first-of-type": { marginTop: "0 !important" },
    "body > *:last-child": { marginBottom: "0 !important" },
    a: { color: e.color.secondary, textDecoration: "none" },
    "a.absent": { color: "#cc0000" },
    "a.anchor": {
      display: "block",
      paddingLeft: 30,
      marginLeft: -30,
      cursor: "pointer",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
    },
    "h1, h2, h3, h4, h5, h6": {
      margin: "20px 0 10px",
      padding: 0,
      cursor: "text",
      position: "relative",
      "&:first-of-type": { marginTop: 0, paddingTop: 0 },
      "&:hover a.anchor": { textDecoration: "none" },
      "& tt, & code": { fontSize: "inherit" },
    },
    "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 },
    "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" },
    hr: {
      border: "0 none",
      borderTop: `1px solid ${e.appBorderColor}`,
      height: 4,
      padding: 0,
    },
    "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type":
      { marginTop: 0, paddingTop: 0 },
    "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 },
    "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6":
      { marginTop: 0, paddingTop: 0 },
    "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 },
    "li p.first": { display: "inline-block" },
    "ul, ol": {
      paddingLeft: 30,
      "& :first-of-type": { marginTop: 0 },
      "& :last-child": { marginBottom: 0 },
    },
    dl: { padding: 0 },
    "dl dt": {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "italic",
      margin: "0 0 15px",
      padding: "0 15px",
      "&:first-of-type": { padding: 0 },
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
    },
    blockquote: {
      borderLeft: `4px solid ${e.color.medium}`,
      padding: "0 15px",
      color: e.color.dark,
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
    },
    table: {
      padding: 0,
      borderCollapse: "collapse",
      "& tr": {
        borderTop: `1px solid ${e.appBorderColor}`,
        backgroundColor: "white",
        margin: 0,
        padding: 0,
        "& th": {
          fontWeight: "bold",
          border: `1px solid ${e.appBorderColor}`,
          textAlign: "left",
          margin: 0,
          padding: "6px 13px",
        },
        "& td": {
          border: `1px solid ${e.appBorderColor}`,
          textAlign: "left",
          margin: 0,
          padding: "6px 13px",
        },
        "&:nth-of-type(2n)": { backgroundColor: e.color.lighter },
        "& th :first-of-type, & td :first-of-type": { marginTop: 0 },
        "& th :last-child, & td :last-child": { marginBottom: 0 },
      },
    },
    img: { maxWidth: "100%" },
    "span.frame": {
      display: "block",
      overflow: "hidden",
      "& > span": {
        border: `1px solid ${e.color.medium}`,
        display: "block",
        float: "left",
        overflow: "hidden",
        margin: "13px 0 0",
        padding: 7,
        width: "auto",
      },
      "& span img": { display: "block", float: "left" },
      "& span span": {
        clear: "both",
        color: e.color.darkest,
        display: "block",
        padding: "5px 0 0",
      },
    },
    "span.align-center": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "center",
      },
      "& span img": { margin: "0 auto", textAlign: "center" },
    },
    "span.align-right": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px 0 0",
        textAlign: "right",
      },
      "& span img": { margin: 0, textAlign: "right" },
    },
    "span.float-left": {
      display: "block",
      marginRight: 13,
      overflow: "hidden",
      float: "left",
      "& span": { margin: "13px 0 0" },
    },
    "span.float-right": {
      display: "block",
      marginLeft: 13,
      overflow: "hidden",
      float: "right",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "right",
      },
    },
    "code, tt": {
      margin: "0 2px",
      padding: "0 5px",
      whiteSpace: "nowrap",
      border: `1px solid ${e.color.mediumlight}`,
      backgroundColor: e.color.lighter,
      borderRadius: 3,
      color: e.base === "dark" && e.color.darkest,
    },
  })),
  Pt = [],
  lr = null,
  P3 = o.lazy(async () => {
    let { SyntaxHighlighter: e } = await Ft(
      () => import("./syntaxhighlighter-JOJW2KGS-wOANYJ7P.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url,
    );
    return (
      Pt.length > 0 &&
        (Pt.forEach((t) => {
          e.registerLanguage(...t);
        }),
        (Pt = [])),
      lr === null && (lr = e),
      { default: (t) => u.createElement(e, { ...t }) }
    );
  }),
  H3 = o.lazy(async () => {
    let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([
      Ft(
        () => import("./syntaxhighlighter-JOJW2KGS-wOANYJ7P.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
        import.meta.url,
      ),
      Ft(
        () => import("./formatter-B5HCVTEV-BYK-8YPD.js"),
        __vite__mapDeps([8, 1, 2, 3, 4, 5, 6, 7]),
        import.meta.url,
      ),
    ]);
    return (
      Pt.length > 0 &&
        (Pt.forEach((r) => {
          e.registerLanguage(...r);
        }),
        (Pt = [])),
      lr === null && (lr = e),
      { default: (r) => u.createElement(e, { ...r, formatter: t }) }
    );
  }),
  Wn = (e) =>
    u.createElement(
      o.Suspense,
      { fallback: u.createElement("div", null) },
      e.format !== !1
        ? u.createElement(H3, { ...e })
        : u.createElement(P3, { ...e }),
    );
Wn.registerLanguage = (...e) => {
  if (lr !== null) {
    lr.registerLanguage(...e);
    return;
  }
  Pt.push(e);
};
var F3 = (e) => (typeof e == "number" ? e : Number(e)),
  j3 = A.div(
    ({ theme: e, col: t, row: r = 1 }) =>
      t
        ? {
            display: "inline-block",
            verticalAlign: "inherit",
            "& > *": {
              marginLeft: t * e.layoutMargin,
              verticalAlign: "inherit",
            },
            [`& > *:first-child${Da}`]: { marginLeft: 0 },
          }
        : {
            "& > *": { marginTop: r * e.layoutMargin },
            [`& > *:first-child${Da}`]: { marginTop: 0 },
          },
    ({ theme: e, outer: t, col: r, row: n }) => {
      switch (!0) {
        case !!(t && r):
          return {
            marginLeft: t * e.layoutMargin,
            marginRight: t * e.layoutMargin,
          };
        case !!(t && n):
          return {
            marginTop: t * e.layoutMargin,
            marginBottom: t * e.layoutMargin,
          };
        default:
          return {};
      }
    },
  ),
  N3 = ({ col: e, row: t, outer: r, children: n, ...a }) => {
    let l = F3(typeof r == "number" || !r ? r : e || t);
    return u.createElement(j3, { col: e, row: t, outer: l, ...a }, n);
  },
  D3 = A.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  V3 = A.div(),
  U3 = A.div(({ theme: e }) => ({
    padding: 30,
    textAlign: "center",
    color: e.color.defaultText,
    fontSize: e.typography.size.s2 - 1,
  })),
  W3 = ({ children: e, ...t }) => {
    let [r, n] = o.Children.toArray(e);
    return u.createElement(
      U3,
      { ...t },
      u.createElement(D3, null, r),
      n && u.createElement(V3, null, n),
    );
  };
function q3(e, t) {
  var r = o.useRef(null),
    n = o.useRef(null);
  n.current = t;
  var a = o.useRef(null);
  o.useEffect(function () {
    l();
  });
  var l = o.useCallback(
    function () {
      var i = a.current,
        c = n.current,
        s = i || (c ? (c instanceof Element ? c : c.current) : null);
      (r.current && r.current.element === s && r.current.subscriber === e) ||
        (r.current && r.current.cleanup && r.current.cleanup(),
        (r.current = {
          element: s,
          subscriber: e,
          cleanup: s ? e(s) : void 0,
        }));
    },
    [e],
  );
  return (
    o.useEffect(function () {
      return function () {
        r.current &&
          r.current.cleanup &&
          (r.current.cleanup(), (r.current = null));
      };
    }, []),
    o.useCallback(
      function (i) {
        (a.current = i), l();
      },
      [l],
    )
  );
}
function Si(e, t, r) {
  return e[t]
    ? e[t][0]
      ? e[t][0][r]
      : e[t][r]
    : t === "contentBoxSize"
      ? e.contentRect[r === "inlineSize" ? "width" : "height"]
      : void 0;
}
function Ic(e) {
  e === void 0 && (e = {});
  var t = e.onResize,
    r = o.useRef(void 0);
  r.current = t;
  var n = e.round || Math.round,
    a = o.useRef(),
    l = o.useState({ width: void 0, height: void 0 }),
    i = l[0],
    c = l[1],
    s = o.useRef(!1);
  o.useEffect(function () {
    return (
      (s.current = !1),
      function () {
        s.current = !0;
      }
    );
  }, []);
  var d = o.useRef({ width: void 0, height: void 0 }),
    p = q3(
      o.useCallback(
        function (h) {
          return (
            (!a.current || a.current.box !== e.box || a.current.round !== n) &&
              (a.current = {
                box: e.box,
                round: n,
                instance: new ResizeObserver(function (m) {
                  var f = m[0],
                    v =
                      e.box === "border-box"
                        ? "borderBoxSize"
                        : e.box === "device-pixel-content-box"
                          ? "devicePixelContentBoxSize"
                          : "contentBoxSize",
                    g = Si(f, v, "inlineSize"),
                    E = Si(f, v, "blockSize"),
                    x = g ? n(g) : void 0,
                    y = E ? n(E) : void 0;
                  if (d.current.width !== x || d.current.height !== y) {
                    var b = { width: x, height: y };
                    (d.current.width = x),
                      (d.current.height = y),
                      r.current ? r.current(b) : s.current || c(b);
                  }
                }),
              }),
            a.current.instance.observe(h, { box: e.box }),
            function () {
              a.current && a.current.instance.unobserve(h);
            }
          );
        },
        [e.box, n],
      ),
      e.ref,
    );
  return o.useMemo(
    function () {
      return { ref: p, width: i.width, height: i.height };
    },
    [p, i.width, i.height],
  );
}
var G3 = A.div(({ scale: e = 1, elementHeight: t }) => ({
  height: t || "auto",
  transformOrigin: "top left",
  transform: `scale(${1 / e})`,
}));
function Y3({ scale: e, children: t }) {
  let r = o.useRef(null),
    [n, a] = o.useState(0),
    l = o.useCallback(
      ({ height: i }) => {
        i && a(i / e);
      },
      [e],
    );
  return (
    o.useEffect(() => {
      r.current && a(r.current.getBoundingClientRect().height);
    }, [e]),
    Ic({ ref: r, onResize: l }),
    u.createElement(
      G3,
      { scale: e, elementHeight: n },
      u.createElement(
        "div",
        { ref: r, className: "innerZoomElementWrapper" },
        t,
      ),
    )
  );
}
var K3 = class extends o.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { iFrameRef: e } = this.props;
      this.iframe = e.current;
    }
    shouldComponentUpdate(e) {
      let { scale: t, active: r } = this.props;
      return (
        t !== e.scale && this.setIframeInnerZoom(e.scale),
        r !== e.active &&
          this.iframe.setAttribute(
            "data-is-storybook",
            e.active ? "true" : "false",
          ),
        e.children.props.src !== this.props.children.props.src
      );
    }
    setIframeInnerZoom(e) {
      try {
        Object.assign(this.iframe.contentDocument.body.style, {
          width: `${e * 100}%`,
          height: `${e * 100}%`,
          transform: `scale(${1 / e})`,
          transformOrigin: "top left",
        });
      } catch {
        this.setIframeZoom(e);
      }
    }
    setIframeZoom(e) {
      Object.assign(this.iframe.style, {
        width: `${e * 100}%`,
        height: `${e * 100}%`,
        transform: `scale(${1 / e})`,
        transformOrigin: "top left",
      });
    }
    render() {
      let { children: e } = this.props;
      return u.createElement(u.Fragment, null, e);
    }
  },
  Ac = { Element: Y3, IFrame: K3 },
  { document: X3 } = Uv,
  Z3 = A.strong(({ theme: e }) => ({ color: e.color.orange })),
  J3 = A.strong(({ theme: e }) => ({
    color: e.color.ancillary,
    textDecoration: "underline",
  })),
  Ci = A.em(({ theme: e }) => ({ color: e.textMutedColor })),
  Q3 = /(Error): (.*)\n/,
  e7 = /at (?:(.*) )?\(?(.+)\)?/,
  t7 = /([^@]+)?(?:\/<)?@(.+)?/,
  r7 = /([^@]+)?@(.+)?/,
  _c = ({ error: e }) => {
    if (!e)
      return u.createElement(
        o.Fragment,
        null,
        "This error has no stack or message",
      );
    if (!e.stack)
      return u.createElement(
        o.Fragment,
        null,
        e.message || "This error has no stack or message",
      );
    let t = e.stack.toString();
    t &&
      e.message &&
      !t.includes(e.message) &&
      (t = `Error: ${e.message}

${t}`);
    let r = t.match(Q3);
    if (!r) return u.createElement(o.Fragment, null, t);
    let [, n, a] = r,
      l = t.split(/\n/).slice(1),
      [, ...i] = l
        .map((c) => {
          let s = c.match(e7) || c.match(t7) || c.match(r7);
          return s
            ? {
                name: (s[1] || "").replace("/<", ""),
                location: s[2].replace(X3.location.origin, ""),
              }
            : null;
        })
        .filter(Boolean);
    return u.createElement(
      o.Fragment,
      null,
      u.createElement("span", null, n),
      ": ",
      u.createElement(Z3, null, a),
      u.createElement("br", null),
      i.map((c, s) =>
        c.name
          ? u.createElement(
              o.Fragment,
              { key: s },
              "  ",
              "at ",
              u.createElement(J3, null, c.name),
              " (",
              u.createElement(Ci, null, c.location),
              ")",
              u.createElement("br", null),
            )
          : u.createElement(
              o.Fragment,
              { key: s },
              "  ",
              "at ",
              u.createElement(Ci, null, c.location),
              u.createElement("br", null),
            ),
      ),
    );
  },
  wt = o.forwardRef(
    (
      {
        asChild: e = !1,
        animation: t = "none",
        size: r = "small",
        variant: n = "outline",
        padding: a = "medium",
        disabled: l = !1,
        active: i = !1,
        onClick: c,
        ...s
      },
      d,
    ) => {
      let p = "button";
      s.isLink && (p = "a"), e && (p = ko);
      let h = n,
        m = r,
        [f, v] = o.useState(!1),
        g = (E) => {
          c && c(E), t !== "none" && v(!0);
        };
      if (
        (o.useEffect(() => {
          let E = setTimeout(() => {
            f && v(!1);
          }, 1e3);
          return () => clearTimeout(E);
        }, [f]),
        s.primary && ((h = "solid"), (m = "medium")),
        (s.secondary || s.tertiary || s.gray || s.outline || s.inForm) &&
          ((h = "outline"), (m = "medium")),
        s.small ||
          s.isLink ||
          s.primary ||
          s.secondary ||
          s.tertiary ||
          s.gray ||
          s.outline ||
          s.inForm ||
          s.containsIcon)
      ) {
        let E = u.Children.toArray(s.children).filter(
          (x) => typeof x == "string" && x !== "",
        );
        nc(
          `Use of deprecated props in the button ${E.length > 0 ? `"${E.join(" ")}"` : "component"} detected, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-ui-and-props-for-button-and-iconbutton-components`,
        );
      }
      return u.createElement(n7, {
        as: p,
        ref: d,
        variant: h,
        size: m,
        padding: a,
        disabled: l,
        active: i,
        animating: f,
        animation: t,
        onClick: g,
        ...s,
      });
    },
  );
wt.displayName = "Button";
var n7 = A("button", { shouldForwardProp: (e) => vo(e) })(
    ({
      theme: e,
      variant: t,
      size: r,
      disabled: n,
      active: a,
      animating: l,
      animation: i,
      padding: c,
    }) => ({
      border: 0,
      cursor: n ? "not-allowed" : "pointer",
      display: "inline-flex",
      gap: "6px",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding:
        c === "small" && r === "small"
          ? "0 7px"
          : c === "small" && r === "medium"
            ? "0 9px"
            : r === "small"
              ? "0 10px"
              : r === "medium"
                ? "0 12px"
                : 0,
      height: r === "small" ? "28px" : "32px",
      position: "relative",
      textAlign: "center",
      textDecoration: "none",
      transitionProperty: "background, box-shadow",
      transitionDuration: "150ms",
      transitionTimingFunction: "ease-out",
      verticalAlign: "top",
      whiteSpace: "nowrap",
      userSelect: "none",
      opacity: n ? 0.5 : 1,
      margin: 0,
      fontSize: `${e.typography.size.s1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: "1",
      background:
        t === "solid"
          ? e.color.secondary
          : t === "outline"
            ? e.button.background
            : t === "ghost" && a
              ? e.background.hoverable
              : "transparent",
      ...(t === "ghost"
        ? {
            ".sb-bar &": {
              background: a ? Oe(0.9, e.barTextColor) : "transparent",
              color: a ? e.barSelectedColor : e.barTextColor,
              "&:hover": {
                color: e.barHoverColor,
                background: Oe(0.86, e.barHoverColor),
              },
              "&:active": {
                color: e.barSelectedColor,
                background: Oe(0.9, e.barSelectedColor),
              },
              "&:focus": {
                boxShadow: `${In(e.barHoverColor, 1)} 0 0 0 1px inset`,
                outline: "none",
              },
            },
          }
        : {}),
      color:
        t === "solid"
          ? e.color.lightest
          : t === "outline"
            ? e.input.color
            : t === "ghost" && a
              ? e.color.secondary
              : t === "ghost"
                ? e.color.mediumdark
                : e.input.color,
      boxShadow:
        t === "outline" ? `${e.button.border} 0 0 0 1px inset` : "none",
      borderRadius: e.input.borderRadius,
      flexShrink: 0,
      "&:hover": {
        color: t === "ghost" ? e.color.secondary : null,
        background: (() => {
          let s = e.color.secondary;
          return (
            t === "solid" && (s = e.color.secondary),
            t === "outline" && (s = e.button.background),
            t === "ghost"
              ? Oe(0.86, e.color.secondary)
              : e.base === "light"
                ? Zt(0.02, s)
                : Ei(0.03, s)
          );
        })(),
      },
      "&:active": {
        color: t === "ghost" ? e.color.secondary : null,
        background: (() => {
          let s = e.color.secondary;
          return (
            t === "solid" && (s = e.color.secondary),
            t === "outline" && (s = e.button.background),
            t === "ghost"
              ? e.background.hoverable
              : e.base === "light"
                ? Zt(0.02, s)
                : Ei(0.03, s)
          );
        })(),
      },
      "&:focus": {
        boxShadow: `${In(e.color.secondary, 1)} 0 0 0 1px inset`,
        outline: "none",
      },
      "> svg": {
        animation: l && i !== "none" ? `${e.animation[i]} 1000ms ease-out` : "",
      },
    }),
  ),
  Ht = o.forwardRef(({ padding: e = "small", variant: t = "ghost", ...r }, n) =>
    u.createElement(wt, { padding: e, variant: t, ref: n, ...r }),
  );
Ht.displayName = "IconButton";
var a7 = A.label(({ theme: e }) => ({
    display: "flex",
    borderBottom: `1px solid ${e.appBorderColor}`,
    margin: "0 15px",
    padding: "8px 0",
    "&:last-child": { marginBottom: "3rem" },
  })),
  o7 = A.span(({ theme: e }) => ({
    minWidth: 100,
    fontWeight: e.typography.weight.bold,
    marginRight: 15,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    lineHeight: "16px",
  })),
  kc = ({ label: e, children: t, ...r }) =>
    u.createElement(
      a7,
      { ...r },
      e ? u.createElement(o7, null, u.createElement("span", null, e)) : null,
      t,
    );
kc.defaultProps = { label: void 0 };
var l7 = o.useLayoutEffect,
  i7 = l7,
  s7 = function (e) {
    var t = o.useRef(e);
    return (
      i7(function () {
        t.current = e;
      }),
      t
    );
  },
  Ri = function (e, t) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    e.current = t;
  },
  c7 = function (e, t) {
    var r = o.useRef();
    return o.useCallback(
      function (n) {
        (e.current = n),
          r.current && Ri(r.current, null),
          (r.current = t),
          t && Ri(t, n);
      },
      [t],
    );
  },
  d7 = c7,
  Ii = {
    "min-height": "0",
    "max-height": "none",
    height: "0",
    visibility: "hidden",
    overflow: "hidden",
    position: "absolute",
    "z-index": "-1000",
    top: "0",
    right: "0",
  },
  u7 = function (e) {
    Object.keys(Ii).forEach(function (t) {
      e.style.setProperty(t, Ii[t], "important");
    });
  },
  Ai = u7,
  ye = null,
  _i = function (e, t) {
    var r = e.scrollHeight;
    return t.sizingStyle.boxSizing === "border-box"
      ? r + t.borderSize
      : r - t.paddingSize;
  };
function p7(e, t, r, n) {
  r === void 0 && (r = 1),
    n === void 0 && (n = 1 / 0),
    ye ||
      ((ye = document.createElement("textarea")),
      ye.setAttribute("tabindex", "-1"),
      ye.setAttribute("aria-hidden", "true"),
      Ai(ye)),
    ye.parentNode === null && document.body.appendChild(ye);
  var a = e.paddingSize,
    l = e.borderSize,
    i = e.sizingStyle,
    c = i.boxSizing;
  Object.keys(i).forEach(function (m) {
    var f = m;
    ye.style[f] = i[f];
  }),
    Ai(ye),
    (ye.value = t);
  var s = _i(ye, e);
  (ye.value = t), (s = _i(ye, e)), (ye.value = "x");
  var d = ye.scrollHeight - a,
    p = d * r;
  c === "border-box" && (p = p + a + l), (s = Math.max(p, s));
  var h = d * n;
  return c === "border-box" && (h = h + a + l), (s = Math.min(h, s)), [s, d];
}
var ki = function () {},
  f7 = function (e, t) {
    return e.reduce(function (r, n) {
      return (r[n] = t[n]), r;
    }, {});
  },
  h7 = [
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderTopWidth",
    "boxSizing",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "tabSize",
    "textIndent",
    "textRendering",
    "textTransform",
    "width",
    "wordBreak",
  ],
  g7 = !!document.documentElement.currentStyle,
  m7 = function (e) {
    var t = window.getComputedStyle(e);
    if (t === null) return null;
    var r = f7(h7, t),
      n = r.boxSizing;
    if (n === "") return null;
    g7 &&
      n === "border-box" &&
      (r.width =
        parseFloat(r.width) +
        parseFloat(r.borderRightWidth) +
        parseFloat(r.borderLeftWidth) +
        parseFloat(r.paddingRight) +
        parseFloat(r.paddingLeft) +
        "px");
    var a = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
      l = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
    return { sizingStyle: r, paddingSize: a, borderSize: l };
  },
  v7 = m7;
function Oc(e, t, r) {
  var n = s7(r);
  o.useLayoutEffect(function () {
    var a = function (l) {
      return n.current(l);
    };
    if (e)
      return (
        e.addEventListener(t, a),
        function () {
          return e.removeEventListener(t, a);
        }
      );
  }, []);
}
var b7 = function (e) {
    Oc(window, "resize", e);
  },
  y7 = function (e) {
    Oc(document.fonts, "loadingdone", e);
  },
  w7 = [
    "cacheMeasurements",
    "maxRows",
    "minRows",
    "onChange",
    "onHeightChange",
  ],
  x7 = function (e, t) {
    var r = e.cacheMeasurements,
      n = e.maxRows,
      a = e.minRows,
      l = e.onChange,
      i = l === void 0 ? ki : l,
      c = e.onHeightChange,
      s = c === void 0 ? ki : c,
      d = Io(e, w7),
      p = d.value !== void 0,
      h = o.useRef(null),
      m = d7(h, t),
      f = o.useRef(0),
      v = o.useRef(),
      g = function () {
        var x = h.current,
          y = r && v.current ? v.current : v7(x);
        if (y) {
          v.current = y;
          var b = p7(y, x.value || x.placeholder || "x", a, n),
            w = b[0],
            S = b[1];
          f.current !== w &&
            ((f.current = w),
            x.style.setProperty("height", w + "px", "important"),
            s(w, { rowHeight: S }));
        }
      },
      E = function (x) {
        p || g(), i(x);
      };
    return (
      o.useLayoutEffect(g),
      b7(g),
      y7(g),
      o.createElement("textarea", G({}, d, { onChange: E, ref: m }))
    );
  },
  E7 = o.forwardRef(x7),
  S7 = {
    appearance: "none",
    border: "0 none",
    boxSizing: "inherit",
    display: " block",
    margin: " 0",
    background: "transparent",
    padding: 0,
    fontSize: "inherit",
    position: "relative",
  },
  tl = ({ theme: e }) => ({
    ...S7,
    transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
    color: e.input.color || "inherit",
    background: e.input.background,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    borderRadius: e.input.borderRadius,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: "20px",
    padding: "6px 10px",
    boxSizing: "border-box",
    height: 32,
    '&[type="file"]': { height: "auto" },
    "&:focus": {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: "none",
    },
    "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset`,
    },
    "&::placeholder": { color: e.textMutedColor, opacity: 1 },
  }),
  rl = ({ size: e }) => {
    switch (e) {
      case "100%":
        return { width: "100%" };
      case "flex":
        return { flex: 1 };
      case "auto":
      default:
        return { display: "inline" };
    }
  },
  Tc = ({ align: e }) => {
    switch (e) {
      case "end":
        return { textAlign: "right" };
      case "center":
        return { textAlign: "center" };
      case "start":
      default:
        return { textAlign: "left" };
    }
  },
  nl = ({ valid: e, theme: t }) => {
    switch (e) {
      case "valid":
        return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
      case "error":
        return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
      case "warn":
        return { boxShadow: `${t.color.warning} 0 0 0 1px inset` };
      case void 0:
      case null:
      default:
        return {};
    }
  },
  C7 = Object.assign(
    A(
      o.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
        return u.createElement("input", { ...n, ref: a });
      }),
    )(tl, rl, Tc, nl, { minHeight: 32 }),
    { displayName: "Input" },
  ),
  R7 = Object.assign(
    A(
      o.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
        return u.createElement("select", { ...n, ref: a });
      }),
    )(tl, rl, nl, {
      height: 32,
      userSelect: "none",
      paddingRight: 20,
      appearance: "menulist",
    }),
    { displayName: "Select" },
  ),
  I7 = Object.assign(
    A(
      o.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
        return u.createElement(E7, { ...n, ref: a });
      }),
    )(tl, rl, Tc, nl, ({ height: e = 400 }) => ({
      overflow: "visible",
      maxHeight: e,
    })),
    { displayName: "Textarea" },
  ),
  Nt = Object.assign(A.form({ boxSizing: "border-box", width: "100%" }), {
    Field: kc,
    Input: C7,
    Select: R7,
    Textarea: I7,
    Button: wt,
  }),
  A7 = o.lazy(() =>
    Ft(
      () => import("./WithTooltip-Y7J54OF7-DVGJnHct.js"),
      __vite__mapDeps([9, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url,
    ).then((e) => ({ default: e.WithTooltip })),
  ),
  _7 = (e) =>
    u.createElement(
      o.Suspense,
      { fallback: u.createElement("div", null) },
      u.createElement(A7, { ...e }),
    ),
  k7 = o.lazy(() =>
    Ft(
      () => import("./WithTooltip-Y7J54OF7-DVGJnHct.js"),
      __vite__mapDeps([9, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url,
    ).then((e) => ({ default: e.WithTooltipPure })),
  ),
  Mc = (e) =>
    u.createElement(
      o.Suspense,
      { fallback: u.createElement("div", null) },
      u.createElement(k7, { ...e }),
    ),
  O7 = A.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  T7 = A.span(),
  M7 = A.div(({ theme: e }) => ({
    marginTop: 8,
    textAlign: "center",
    "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold },
  })),
  $7 = A.div(({ theme: e }) => ({
    color: e.color.defaultText,
    lineHeight: "18px",
  })),
  L7 = A.div({ padding: 15, width: 280, boxSizing: "border-box" }),
  $c = ({ title: e, desc: t, links: r }) =>
    u.createElement(
      L7,
      null,
      u.createElement(
        $7,
        null,
        e && u.createElement(O7, null, e),
        t && u.createElement(T7, null, t),
      ),
      r &&
        u.createElement(
          M7,
          null,
          r.map(({ title: n, ...a }) =>
            u.createElement(Bt, { ...a, key: n }, n),
          ),
        ),
    );
$c.defaultProps = { title: null, desc: null, links: null };
var z7 = A.div(({ theme: e }) => ({
    padding: "2px 6px",
    lineHeight: "16px",
    fontSize: 10,
    fontWeight: e.typography.weight.bold,
    color: e.color.lightest,
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
    borderRadius: 4,
    whiteSpace: "nowrap",
    pointerEvents: "none",
    zIndex: -1,
    background:
      e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
    margin: 6,
  })),
  B7 = ({ note: e, ...t }) => u.createElement(z7, { ...t }, e),
  P7 = A(({ active: e, loading: t, disabled: r, ...n }) =>
    u.createElement("span", { ...n }),
  )(
    ({ theme: e }) => ({
      color: e.color.defaultText,
      fontWeight: e.typography.weight.regular,
    }),
    ({ active: e, theme: t }) =>
      e
        ? { color: t.color.secondary, fontWeight: t.typography.weight.bold }
        : {},
    ({ loading: e, theme: t }) =>
      e
        ? { display: "inline-block", flex: "none", ...t.animation.inlineGlow }
        : {},
    ({ disabled: e, theme: t }) =>
      e ? { color: Oe(0.7, t.color.defaultText) } : {},
  ),
  H7 = A.span({
    display: "flex",
    "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" },
    "& path": { fill: "inherit" },
  }),
  F7 = A.span(
    { flex: 1, textAlign: "left", display: "flex", flexDirection: "column" },
    ({ isIndented: e }) => (e ? { marginLeft: 24 } : {}),
  ),
  j7 = A.span(
    ({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary } : {}),
    ({ theme: e, disabled: t }) => (t ? { color: e.textMutedColor } : {}),
  ),
  N7 = A.span(
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary } : {}),
    () => ({ display: "flex", maxWidth: 14 }),
  ),
  D7 = A.a(
    ({ theme: e }) => ({
      fontSize: e.typography.size.s1,
      transition: "all 150ms ease-out",
      color: e.color.dark,
      textDecoration: "none",
      cursor: "pointer",
      justifyContent: "space-between",
      lineHeight: "18px",
      padding: "7px 10px",
      display: "flex",
      alignItems: "center",
      "& > * + *": { paddingLeft: 10 },
      "&:hover": { background: e.background.hoverable },
      "&:hover svg": { opacity: 1 },
    }),
    ({ disabled: e }) => (e ? { cursor: "not-allowed" } : {}),
  ),
  V7 = Dt(100)((e, t, r) => {
    let n = {};
    return (
      e && Object.assign(n, { onClick: e }),
      t && Object.assign(n, { href: t }),
      r && t && Object.assign(n, { to: t, as: r }),
      n
    );
  }),
  Lc = ({
    loading: e,
    title: t,
    center: r,
    right: n,
    icon: a,
    active: l,
    disabled: i,
    isIndented: c,
    href: s,
    onClick: d,
    LinkWrapper: p,
    ...h
  }) => {
    let m = V7(d, s, p),
      f = { active: l, disabled: i };
    return u.createElement(
      D7,
      { ...f, ...h, ...m },
      a && u.createElement(N7, { ...f }, a),
      t || r
        ? u.createElement(
            F7,
            { isIndented: !a && c },
            t && u.createElement(P7, { ...f, loading: e }, t),
            r && u.createElement(j7, { ...f }, r),
          )
        : null,
      n && u.createElement(H7, { ...f }, n),
    );
  };
Lc.defaultProps = {
  loading: !1,
  title: u.createElement("span", null, "Loading state"),
  center: null,
  right: null,
  active: !1,
  disabled: !1,
  href: null,
  LinkWrapper: null,
  onClick: null,
};
var al = Lc,
  U7 = A.div(
    {
      minWidth: 180,
      overflow: "hidden",
      overflowY: "auto",
      maxHeight: 15.5 * 32,
    },
    ({ theme: e }) => ({ borderRadius: e.appBorderRadius }),
  ),
  W7 = (e) => {
    let { LinkWrapper: t, onClick: r, id: n, isIndented: a, ...l } = e,
      { title: i, href: c, active: s } = l,
      d = o.useCallback(
        (h) => {
          r(h, l);
        },
        [r],
      ),
      p = !!r;
    return u.createElement(al, {
      title: i,
      active: s,
      href: c,
      id: `list-item-${n}`,
      LinkWrapper: t,
      isIndented: a,
      ...l,
      ...(p ? { onClick: d } : {}),
    });
  },
  ol = ({ links: e, LinkWrapper: t }) => {
    let r = e.some((n) => n.icon);
    return u.createElement(
      U7,
      null,
      e.map(({ isGatsby: n, ...a }) =>
        u.createElement(W7, {
          key: a.id,
          LinkWrapper: n ? t : null,
          isIndented: r,
          ...a,
        }),
      ),
    );
  };
ol.defaultProps = { LinkWrapper: al.defaultProps.LinkWrapper };
var q7 = (e) => typeof e.props.href == "string",
  G7 = (e) => typeof e.props.href != "string";
function Y7({ children: e, ...t }, r) {
  let n = { props: t, ref: r };
  if (q7(n)) return u.createElement("a", { ref: n.ref, ...n.props }, e);
  if (G7(n))
    return u.createElement(
      "button",
      { ref: n.ref, type: "button", ...n.props },
      e,
    );
  throw new Error("invalid props");
}
var zc = o.forwardRef(Y7);
zc.displayName = "ButtonOrLink";
var Gr = A(zc, { shouldForwardProp: vo })(
  {
    whiteSpace: "normal",
    display: "inline-flex",
    overflow: "hidden",
    verticalAlign: "top",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    "&:empty": { display: "none" },
    "&[hidden]": { display: "none" },
  },
  ({ theme: e }) => ({
    padding: "0 15px",
    transition: "color 0.2s linear, border-bottom-color 0.2s linear",
    height: 40,
    lineHeight: "12px",
    cursor: "pointer",
    background: "transparent",
    border: "0 solid transparent",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    fontWeight: "bold",
    fontSize: 13,
    "&:focus": { outline: "0 none", borderBottomColor: e.barSelectedColor },
  }),
  ({ active: e, textColor: t, theme: r }) =>
    e
      ? {
          color: t || r.barSelectedColor,
          borderBottomColor: r.barSelectedColor,
        }
      : {
          color: t || r.barTextColor,
          borderBottomColor: "transparent",
          "&:hover": { color: r.barHoverColor },
        },
);
Gr.displayName = "TabButton";
var K7 = A.div(({ theme: e }) => ({
    width: 14,
    height: 14,
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  })),
  X7 = A.div(() => ({ marginTop: 6, padding: 7, height: 28 })),
  Z7 = () => u.createElement(X7, null, u.createElement(K7, null)),
  Qa = A.div(
    {
      display: "flex",
      whiteSpace: "nowrap",
      flexBasis: "auto",
      marginLeft: 3,
      marginRight: 3,
    },
    ({ scrollable: e }) => (e ? { flexShrink: 0 } : {}),
    ({ left: e }) => (e ? { "& > *": { marginLeft: 4 } } : {}),
    ({ right: e }) =>
      e ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {},
  );
Qa.displayName = "Side";
var J7 = ({ children: e, className: t, scrollable: r }) =>
    r
      ? u.createElement(Bo, { vertical: !1, className: t }, e)
      : u.createElement("div", { className: t }, e),
  ll = A(J7)(
    ({ theme: e, scrollable: t = !0 }) => ({
      color: e.barTextColor,
      width: "100%",
      height: 40,
      flexShrink: 0,
      overflow: t ? "auto" : "hidden",
      overflowY: "hidden",
    }),
    ({ theme: e, border: t = !1 }) =>
      t
        ? {
            boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
            background: e.barBg,
          }
        : {},
  );
ll.displayName = "Bar";
var Q7 = A.div(({ bgColor: e }) => ({
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    flexWrap: "nowrap",
    flexShrink: 0,
    height: 40,
    backgroundColor: e || "",
  })),
  qn = ({ children: e, backgroundColor: t, className: r, ...n }) => {
    let [a, l] = o.Children.toArray(e);
    return u.createElement(
      ll,
      { className: `sb-bar ${r}`, ...n },
      u.createElement(
        Q7,
        { bgColor: t },
        u.createElement(Qa, { scrollable: n.scrollable, left: !0 }, a),
        l ? u.createElement(Qa, { right: !0 }, l) : null,
      ),
    );
  };
qn.displayName = "FlexBar";
var Bc = A.div(({ active: e }) =>
    e ? { display: "block" } : { display: "none" },
  ),
  Oi = (e) =>
    o.Children.toArray(e).map(
      ({ props: { title: t, id: r, color: n, children: a } }) => {
        let l = Array.isArray(a) ? a[0] : a;
        return {
          title: t,
          id: r,
          ...(n ? { color: n } : {}),
          render:
            typeof l == "function"
              ? l
              : ({ active: i }) =>
                  u.createElement(Bc, { active: i, role: "tabpanel" }, l),
        };
      },
    ),
  eb = A.span(({ theme: e, isActive: t }) => ({
    display: "inline-block",
    width: 0,
    height: 0,
    marginLeft: 8,
    color: t ? e.color.secondary : e.color.mediumdark,
    borderRight: "3px solid transparent",
    borderLeft: "3px solid transparent",
    borderTop: "3px solid",
    transition: "transform .1s ease-out",
  })),
  tb = A(Gr)(
    ({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.barSelectedColor : t.barTextColor};
    .addon-collapsible-icon {
      color: ${r || e ? t.barSelectedColor : t.barTextColor};
    }
    &:hover {
      color: ${t.barHoverColor};
      .addon-collapsible-icon {
        color: ${t.barHoverColor};
      }
    }
  `,
  );
function rb(e) {
  let t = o.useRef(),
    r = o.useRef(),
    n = o.useRef(new Map()),
    { width: a = 1 } = Ic({ ref: t }),
    [l, i] = o.useState(e),
    [c, s] = o.useState([]),
    d = o.useRef(e),
    p = o.useCallback(
      ({ menuName: m, actions: f }) => {
        let v = c.some(({ active: x }) => x),
          [g, E] = o.useState(!1);
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            Ng,
            {
              interactive: !0,
              visible: g,
              onVisibleChange: E,
              placement: "bottom",
              delayHide: 100,
              tooltip: u.createElement(ol, {
                links: c.map(({ title: x, id: y, color: b, active: w }) => ({
                  id: y,
                  title: x,
                  color: b,
                  active: w,
                  onClick: (S) => {
                    S.preventDefault(), f.onSelect(y);
                  },
                })),
              }),
            },
            u.createElement(
              tb,
              {
                ref: r,
                active: v,
                preActive: g,
                style: { visibility: c.length ? "visible" : "hidden" },
                "aria-hidden": !c.length,
                className: "tabbutton",
                type: "button",
                role: "tab",
              },
              m,
              u.createElement(eb, {
                className: "addon-collapsible-icon",
                isActive: v || g,
              }),
            ),
          ),
          c.map(({ title: x, id: y, color: b }, w) => {
            let S = `index-${w}`;
            return u.createElement(
              Gr,
              {
                id: `tabbutton-${E0(y) ?? S}`,
                style: { visibility: "hidden" },
                "aria-hidden": !0,
                tabIndex: -1,
                ref: (C) => {
                  n.current.set(y, C);
                },
                className: "tabbutton",
                type: "button",
                key: y,
                textColor: b,
                role: "tab",
              },
              x,
            );
          }),
        );
      },
      [c],
    ),
    h = o.useCallback(() => {
      if (!t.current || !r.current) return;
      let { x: m, width: f } = t.current.getBoundingClientRect(),
        { width: v } = r.current.getBoundingClientRect(),
        g = c.length ? m + f - v : m + f,
        E = [],
        x = 0,
        y = e.filter((b) => {
          let { id: w } = b,
            S = n.current.get(w),
            { width: C = 0 } =
              (S == null ? void 0 : S.getBoundingClientRect()) || {},
            R = m + x + C > g;
          return (!R || !S) && E.push(b), (x += C), R;
        });
      (E.length !== l.length || d.current !== e) &&
        (i(E), s(y), (d.current = e));
    }, [c.length, e, l]);
  return (
    o.useLayoutEffect(h, [h, a]),
    {
      tabRefs: n,
      addonsRef: r,
      tabBarRef: t,
      visibleList: l,
      invisibleList: c,
      AddonTab: p,
    }
  );
}
var nb = A.div(({ theme: e }) => ({
    height: "100%",
    display: "flex",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 15,
    background: e.background.content,
  })),
  ab = A.div({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    maxWidth: 415,
  }),
  ob = A.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    textAlign: "center",
    color: e.textColor,
  })),
  lb = A.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s2 - 1,
    textAlign: "center",
    color: e.textMutedColor,
  })),
  il = ({ title: e, description: t, footer: r }) =>
    u.createElement(
      nb,
      null,
      u.createElement(
        ab,
        null,
        u.createElement(ob, null, e),
        t && u.createElement(lb, null, t),
      ),
      r,
    ),
  ib =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",
  sb = A.div(
    ({ theme: e, bordered: t }) =>
      t
        ? {
            backgroundClip: "padding-box",
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.appBorderRadius,
            overflow: "hidden",
            boxSizing: "border-box",
          }
        : {},
    ({ absolute: e }) =>
      e
        ? {
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }
        : { display: "block" },
  ),
  sl = A.div({
    overflow: "hidden",
    "&:first-of-type": { marginLeft: -3 },
    whiteSpace: "nowrap",
    flexGrow: 1,
  });
sl.displayName = "TabBar";
var cb = A.div(
    { display: "block", position: "relative" },
    ({ theme: e }) => ({
      fontSize: e.typography.size.s2 - 1,
      background: e.background.content,
    }),
    ({ bordered: e, theme: t }) =>
      e
        ? {
            borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px`,
          }
        : {},
    ({ absolute: e, bordered: t }) =>
      e
        ? {
            height: `calc(100% - ${t ? 42 : 40}px)`,
            position: "absolute",
            left: 0 + (t ? 1 : 0),
            right: 0 + (t ? 1 : 0),
            bottom: 0 + (t ? 1 : 0),
            top: 40 + (t ? 1 : 0),
            overflow: "auto",
            [`& > *:first-child${ib}`]: {
              position: "absolute",
              left: 0 + (t ? 1 : 0),
              right: 0 + (t ? 1 : 0),
              bottom: 0 + (t ? 1 : 0),
              top: 0 + (t ? 1 : 0),
              height: `calc(100% - ${t ? 2 : 0}px)`,
              overflow: "auto",
            },
          }
        : {},
  ),
  db = ({ active: e, render: t, children: r }) =>
    u.createElement(Bc, { active: e }, t ? t() : r),
  Gn = o.memo(
    ({
      children: e,
      selected: t,
      actions: r,
      absolute: n,
      bordered: a,
      tools: l,
      backgroundColor: i,
      id: c,
      menuName: s,
      emptyState: d,
      showToolsWhenEmpty: p,
    }) => {
      let h = Oi(e)
          .map((y) => y.id)
          .join(","),
        m = o.useMemo(
          () =>
            Oi(e).map((y, b) => ({ ...y, active: t ? y.id === t : b === 0 })),
          [t, h],
        ),
        { visibleList: f, tabBarRef: v, tabRefs: g, AddonTab: E } = rb(m),
        x = d ?? u.createElement(il, { title: "Nothing found" });
      return !p && m.length === 0
        ? x
        : u.createElement(
            sb,
            { absolute: n, bordered: a, id: c },
            u.createElement(
              qn,
              { scrollable: !1, border: !0, backgroundColor: i },
              u.createElement(
                sl,
                { style: { whiteSpace: "normal" }, ref: v, role: "tablist" },
                f.map(({ title: y, id: b, active: w, color: S }, C) => {
                  let R = `index-${C}`;
                  return u.createElement(
                    Gr,
                    {
                      id: `tabbutton-${E0(b) ?? R}`,
                      ref: (I) => {
                        g.current.set(b, I);
                      },
                      className: `tabbutton ${w ? "tabbutton-active" : ""}`,
                      type: "button",
                      key: b,
                      active: w,
                      textColor: S,
                      onClick: (I) => {
                        I.preventDefault(), r.onSelect(b);
                      },
                      role: "tab",
                    },
                    typeof y == "function" ? u.createElement("title", null) : y,
                  );
                }),
                u.createElement(E, { menuName: s, actions: r }),
              ),
              l,
            ),
            u.createElement(
              cb,
              { id: "panel-tab-content", bordered: a, absolute: n },
              m.length
                ? m.map(({ id: y, active: b, render: w }) =>
                    u.createElement(w, { key: y, active: b }, null),
                  )
                : x,
            ),
          );
    },
  );
Gn.displayName = "Tabs";
Gn.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
  menuName: "Tabs",
};
var cl = class extends o.Component {
  constructor(e) {
    super(e),
      (this.handlers = { onSelect: (t) => this.setState({ selected: t }) }),
      (this.state = { selected: e.initial });
  }
  render() {
    let {
        bordered: e = !1,
        absolute: t = !1,
        children: r,
        backgroundColor: n,
        menuName: a,
      } = this.props,
      { selected: l } = this.state;
    return u.createElement(
      Gn,
      {
        bordered: e,
        absolute: t,
        selected: l,
        backgroundColor: n,
        menuName: a,
        actions: this.handlers,
      },
      r,
    );
  }
};
cl.defaultProps = {
  children: [],
  initial: null,
  absolute: !1,
  bordered: !1,
  backgroundColor: "",
  menuName: void 0,
};
var dl = A.span(
  ({ theme: e }) => ({
    width: 1,
    height: 20,
    background: e.appBorderColor,
    marginLeft: 2,
    marginRight: 2,
  }),
  ({ force: e }) => (e ? {} : { "& + &": { display: "none" } }),
);
dl.displayName = "Separator";
var ub = (e) =>
    e.reduce(
      (t, r, n) =>
        r
          ? u.createElement(
              o.Fragment,
              { key: r.id || r.key || `f-${n}` },
              t,
              n > 0 ? u.createElement(dl, { key: `s-${n}` }) : null,
              r.render() || r,
            )
          : t,
      null,
    ),
  pb = (e) => {
    let t = o.useRef();
    return (
      o.useEffect(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  },
  fb = (e, t) => {
    let r = pb(t);
    return e ? t : r;
  },
  hb = ({ active: e, children: t }) =>
    u.createElement("div", { hidden: !e }, fb(e, t)),
  gb = Vv,
  mb = A.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;
  path {
    fill: currentColor;
  }
`,
  vb = ({
    icon: e,
    useSymbol: t,
    __suppressDeprecationWarning: r = !1,
    ...n
  }) => {
    r ||
      nc(
        `Use of the deprecated Icons ${`(${e})` || ""} component detected. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`,
      );
    let a = An[e] || null;
    if (!a)
      return (
        Wv.warn(
          `Use of an unknown prop ${`(${e})` || ""} in the Icons component. The Icons component is deprecated. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`,
        ),
        null
      );
    let l = gb[a];
    return u.createElement(l, { ...n });
  },
  bb = o.memo(function ({ icons: e = Object.keys(An) }) {
    return u.createElement(
      mb,
      {
        viewBox: "0 0 14 14",
        style: { position: "absolute", width: 0, height: 0 },
        "data-chromatic": "ignore",
      },
      e.map((t) =>
        u.createElement("symbol", { id: `icon--${t}`, key: t }, An[t]),
      ),
    );
  }),
  An = {
    user: "UserIcon",
    useralt: "UserAltIcon",
    useradd: "UserAddIcon",
    users: "UsersIcon",
    profile: "ProfileIcon",
    facehappy: "FaceHappyIcon",
    faceneutral: "FaceNeutralIcon",
    facesad: "FaceSadIcon",
    accessibility: "AccessibilityIcon",
    accessibilityalt: "AccessibilityAltIcon",
    arrowup: "ChevronUpIcon",
    arrowdown: "ChevronDownIcon",
    arrowleft: "ChevronLeftIcon",
    arrowright: "ChevronRightIcon",
    arrowupalt: "ArrowUpIcon",
    arrowdownalt: "ArrowDownIcon",
    arrowleftalt: "ArrowLeftIcon",
    arrowrightalt: "ArrowRightIcon",
    expandalt: "ExpandAltIcon",
    collapse: "CollapseIcon",
    expand: "ExpandIcon",
    unfold: "UnfoldIcon",
    transfer: "TransferIcon",
    redirect: "RedirectIcon",
    undo: "UndoIcon",
    reply: "ReplyIcon",
    sync: "SyncIcon",
    upload: "UploadIcon",
    download: "DownloadIcon",
    back: "BackIcon",
    proceed: "ProceedIcon",
    refresh: "RefreshIcon",
    globe: "GlobeIcon",
    compass: "CompassIcon",
    location: "LocationIcon",
    pin: "PinIcon",
    time: "TimeIcon",
    dashboard: "DashboardIcon",
    timer: "TimerIcon",
    home: "HomeIcon",
    admin: "AdminIcon",
    info: "InfoIcon",
    question: "QuestionIcon",
    support: "SupportIcon",
    alert: "AlertIcon",
    email: "EmailIcon",
    phone: "PhoneIcon",
    link: "LinkIcon",
    unlink: "LinkBrokenIcon",
    bell: "BellIcon",
    rss: "RSSIcon",
    sharealt: "ShareAltIcon",
    share: "ShareIcon",
    circle: "CircleIcon",
    circlehollow: "CircleHollowIcon",
    bookmarkhollow: "BookmarkHollowIcon",
    bookmark: "BookmarkIcon",
    hearthollow: "HeartHollowIcon",
    heart: "HeartIcon",
    starhollow: "StarHollowIcon",
    star: "StarIcon",
    certificate: "CertificateIcon",
    verified: "VerifiedIcon",
    thumbsup: "ThumbsUpIcon",
    shield: "ShieldIcon",
    basket: "BasketIcon",
    beaker: "BeakerIcon",
    hourglass: "HourglassIcon",
    flag: "FlagIcon",
    cloudhollow: "CloudHollowIcon",
    edit: "EditIcon",
    cog: "CogIcon",
    nut: "NutIcon",
    wrench: "WrenchIcon",
    ellipsis: "EllipsisIcon",
    check: "CheckIcon",
    form: "FormIcon",
    batchdeny: "BatchDenyIcon",
    batchaccept: "BatchAcceptIcon",
    controls: "ControlsIcon",
    plus: "PlusIcon",
    closeAlt: "CloseAltIcon",
    cross: "CrossIcon",
    trash: "TrashIcon",
    pinalt: "PinAltIcon",
    unpin: "UnpinIcon",
    add: "AddIcon",
    subtract: "SubtractIcon",
    close: "CloseIcon",
    delete: "DeleteIcon",
    passed: "PassedIcon",
    changed: "ChangedIcon",
    failed: "FailedIcon",
    clear: "ClearIcon",
    comment: "CommentIcon",
    commentadd: "CommentAddIcon",
    requestchange: "RequestChangeIcon",
    comments: "CommentsIcon",
    lock: "LockIcon",
    unlock: "UnlockIcon",
    key: "KeyIcon",
    outbox: "OutboxIcon",
    credit: "CreditIcon",
    button: "ButtonIcon",
    type: "TypeIcon",
    pointerdefault: "PointerDefaultIcon",
    pointerhand: "PointerHandIcon",
    browser: "BrowserIcon",
    tablet: "TabletIcon",
    mobile: "MobileIcon",
    watch: "WatchIcon",
    sidebar: "SidebarIcon",
    sidebaralt: "SidebarAltIcon",
    sidebaralttoggle: "SidebarAltToggleIcon",
    sidebartoggle: "SidebarToggleIcon",
    bottombar: "BottomBarIcon",
    bottombartoggle: "BottomBarToggleIcon",
    cpu: "CPUIcon",
    database: "DatabaseIcon",
    memory: "MemoryIcon",
    structure: "StructureIcon",
    box: "BoxIcon",
    power: "PowerIcon",
    photo: "PhotoIcon",
    component: "ComponentIcon",
    grid: "GridIcon",
    outline: "OutlineIcon",
    photodrag: "PhotoDragIcon",
    search: "SearchIcon",
    zoom: "ZoomIcon",
    zoomout: "ZoomOutIcon",
    zoomreset: "ZoomResetIcon",
    eye: "EyeIcon",
    eyeclose: "EyeCloseIcon",
    lightning: "LightningIcon",
    lightningoff: "LightningOffIcon",
    contrast: "ContrastIcon",
    switchalt: "SwitchAltIcon",
    mirror: "MirrorIcon",
    grow: "GrowIcon",
    paintbrush: "PaintBrushIcon",
    ruler: "RulerIcon",
    stop: "StopIcon",
    camera: "CameraIcon",
    video: "VideoIcon",
    speaker: "SpeakerIcon",
    play: "PlayIcon",
    playback: "PlayBackIcon",
    playnext: "PlayNextIcon",
    rewind: "RewindIcon",
    fastforward: "FastForwardIcon",
    stopalt: "StopAltIcon",
    sidebyside: "SideBySideIcon",
    stacked: "StackedIcon",
    sun: "SunIcon",
    moon: "MoonIcon",
    book: "BookIcon",
    document: "DocumentIcon",
    copy: "CopyIcon",
    category: "CategoryIcon",
    folder: "FolderIcon",
    print: "PrintIcon",
    graphline: "GraphLineIcon",
    calendar: "CalendarIcon",
    graphbar: "GraphBarIcon",
    menu: "MenuIcon",
    menualt: "MenuIcon",
    filter: "FilterIcon",
    docchart: "DocChartIcon",
    doclist: "DocListIcon",
    markup: "MarkupIcon",
    bold: "BoldIcon",
    paperclip: "PaperClipIcon",
    listordered: "ListOrderedIcon",
    listunordered: "ListUnorderedIcon",
    paragraph: "ParagraphIcon",
    markdown: "MarkdownIcon",
    repository: "RepoIcon",
    commit: "CommitIcon",
    branch: "BranchIcon",
    pullrequest: "PullRequestIcon",
    merge: "MergeIcon",
    apple: "AppleIcon",
    linux: "LinuxIcon",
    ubuntu: "UbuntuIcon",
    windows: "WindowsIcon",
    storybook: "StorybookIcon",
    azuredevops: "AzureDevOpsIcon",
    bitbucket: "BitbucketIcon",
    chrome: "ChromeIcon",
    chromatic: "ChromaticIcon",
    componentdriven: "ComponentDrivenIcon",
    discord: "DiscordIcon",
    facebook: "FacebookIcon",
    figma: "FigmaIcon",
    gdrive: "GDriveIcon",
    github: "GithubIcon",
    gitlab: "GitlabIcon",
    google: "GoogleIcon",
    graphql: "GraphqlIcon",
    medium: "MediumIcon",
    redux: "ReduxIcon",
    twitter: "TwitterIcon",
    youtube: "YoutubeIcon",
    vscode: "VSCodeIcon",
  },
  yb = ({ alt: e, ...t }) =>
    u.createElement(
      "svg",
      {
        width: "200px",
        height: "40px",
        viewBox: "0 0 200 40",
        ...t,
        role: "img",
      },
      e ? u.createElement("title", null, e) : null,
      u.createElement(
        "defs",
        null,
        u.createElement("path", {
          d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z",
          id: "a",
        }),
      ),
      u.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        u.createElement("path", {
          d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z",
          fill: "currentColor",
        }),
        u.createElement(
          "mask",
          { id: "b", fill: "#fff" },
          u.createElement("use", { xlinkHref: "#a" }),
        ),
        u.createElement("use", {
          fill: "#FF4785",
          fillRule: "nonzero",
          xlinkHref: "#a",
        }),
        u.createElement("path", {
          d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z",
          fill: "#FFF",
          fillRule: "nonzero",
          mask: "url(#b)",
        }),
      ),
    ),
  wb = (e) =>
    u.createElement(
      "svg",
      { viewBox: "0 0 64 64", ...e },
      u.createElement("title", null, "Storybook icon"),
      u.createElement(
        "g",
        {
          id: "Artboard",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
        },
        u.createElement("path", {
          d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z",
          id: "path-1",
          fill: "#FF4785",
          fillRule: "nonzero",
        }),
        u.createElement("path", {
          d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z",
          id: "path9_fill-path",
          fill: "#FFFFFF",
          fillRule: "nonzero",
        }),
        u.createElement("path", {
          d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z",
          id: "Path",
          fill: "#FFFFFF",
        }),
      ),
    ),
  xb = dr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  Eb = A.div(({ size: e = 32 }) => ({
    borderRadius: "50%",
    cursor: "progress",
    display: "inline-block",
    overflow: "hidden",
    position: "absolute",
    transition: "all 200ms ease-out",
    verticalAlign: "top",
    top: "50%",
    left: "50%",
    marginTop: -(e / 2),
    marginLeft: -(e / 2),
    height: e,
    width: e,
    zIndex: 4,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(97, 97, 97, 0.29)",
    borderTopColor: "rgb(100,100,100)",
    animation: `${xb} 0.7s linear infinite`,
    mixBlendMode: "difference",
  })),
  Ti = A.div({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }),
  Sb = A.div(({ theme: e }) => ({
    position: "relative",
    width: "80%",
    marginBottom: "0.75rem",
    maxWidth: 300,
    height: 5,
    borderRadius: 5,
    background: Oe(0.8, e.color.secondary),
    overflow: "hidden",
    cursor: "progress",
  })),
  Cb = A.div(({ theme: e }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    background: e.color.secondary,
  })),
  Mi = A.div(({ theme: e }) => ({
    minHeight: "2em",
    fontSize: `${e.typography.size.s1}px`,
    color: e.barTextColor,
  })),
  Rb = A(Ks)(({ theme: e }) => ({
    width: 20,
    height: 20,
    marginBottom: "0.5rem",
    color: e.textMutedColor,
  })),
  Ib = dr`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
  Ab = A.span({
    "&::after": {
      content: "'...'",
      animation: `${Ib} 1s linear infinite`,
      animationDelay: "1s",
      display: "inline-block",
      width: "1em",
      height: "auto",
    },
  }),
  Pc = ({ progress: e, error: t, size: r, ...n }) => {
    if (t)
      return u.createElement(
        Ti,
        {
          "aria-label": t.toString(),
          "aria-live": "polite",
          role: "status",
          ...n,
        },
        u.createElement(Rb, null),
        u.createElement(Mi, null, t.message),
      );
    if (e) {
      let { value: a, modules: l } = e,
        { message: i } = e;
      return (
        l && (i += ` ${l.complete} / ${l.total} modules`),
        u.createElement(
          Ti,
          {
            "aria-label": "Content is loading...",
            "aria-live": "polite",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": a * 100,
            "aria-valuetext": i,
            role: "progressbar",
            ...n,
          },
          u.createElement(
            Sb,
            null,
            u.createElement(Cb, { style: { width: `${a * 100}%` } }),
          ),
          u.createElement(
            Mi,
            null,
            i,
            a < 1 && u.createElement(Ab, { key: i }),
          ),
        )
      );
    }
    return u.createElement(Eb, {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      role: "status",
      size: r,
      ...n,
    });
  };
function _b(e) {
  let t = {},
    r = e.split("&");
  for (let n = 0; n < r.length; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || "");
  }
  return t;
}
var Hc = (e, t, r = {}) => {
    let [n, a] = e.split("?"),
      l = a ? { ..._b(a), ...r, id: t } : { ...r, id: t };
    return `${n}?${Object.entries(l)
      .map((i) => `${i[0]}=${i[1]}`)
      .join("&")}`;
  },
  kb = A.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${H.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${et.fonts.mono};
  font-size: ${et.size.s2 - 1}px;
`,
  Ob = ({ code: e, ...t }) =>
    u.createElement(kb, { id: "clipboard-code", ...t }, e),
  Fc = Rc,
  jc = {};
Object.keys(Rc).forEach((e) => {
  jc[e] = o.forwardRef((t, r) => o.createElement(e, { ...t, ref: r }));
});
const Tb = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      A: ic,
      ActionBar: Lo,
      AddonPanel: hb,
      Badge: O3,
      Bar: ll,
      Blockquote: sc,
      Button: wt,
      ClipboardCode: Ob,
      Code: Zo,
      DL: dc,
      Div: cc,
      DocumentWrapper: B3,
      EmptyTabContent: il,
      ErrorFormatter: _c,
      FlexBar: qn,
      Form: Nt,
      H1: uc,
      H2: Jo,
      H3: Qo,
      H4: pc,
      H5: fc,
      H6: hc,
      HR: gc,
      IconButton: Ht,
      IconButtonSkeleton: Z7,
      Icons: vb,
      Img: mc,
      LI: vc,
      Link: Bt,
      ListItem: al,
      Loader: Pc,
      OL: bc,
      P: yc,
      Placeholder: W3,
      Pre: wc,
      ResetWrapper: el,
      ScrollArea: Bo,
      Separator: dl,
      Spaced: N3,
      Span: xc,
      StorybookIcon: wb,
      StorybookLogo: yb,
      Symbols: bb,
      SyntaxHighlighter: Wn,
      TT: Sc,
      TabBar: sl,
      TabButton: Gr,
      TabWrapper: db,
      Table: Ec,
      Tabs: Gn,
      TabsState: cl,
      TooltipLinkList: ol,
      TooltipMessage: $c,
      TooltipNote: B7,
      UL: Cc,
      WithTooltip: _7,
      WithTooltipPure: Mc,
      Zoom: Ac,
      codeCommon: ut,
      components: Fc,
      createCopyToClipboardFunction: Os,
      getStoryHref: Hc,
      icons: An,
      interleaveSeparators: ub,
      nameSpaceClassNames: te,
      resetComponents: jc,
      withReset: re,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Mb(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Hr(e, t) {
  return (
    (Hr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Hr(e, t)
  );
}
function $b(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Hr(e, t);
}
function eo(e) {
  return (
    (eo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    eo(e)
  );
}
function Lb(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Nc() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Nc = function () {
    return !!e;
  })();
}
function zb(e, t, r) {
  if (Nc()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return r && Hr(a, r.prototype), a;
}
function to(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (to = function (n) {
      if (n === null || !Lb(n)) return n;
      if (typeof n != "function")
        throw new TypeError(
          "Super expression must either be null or a function",
        );
      if (typeof t < "u") {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return zb(n, arguments, eo(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Hr(a, n)
      );
    }),
    to(e)
  );
}
var rt = (function (e) {
  $b(t, e);
  function t(r) {
    var n;
    return (
      (n =
        e.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            r +
            " for more information.",
        ) || this),
      Mb(n)
    );
  }
  return t;
})(to(Error));
function va(e) {
  return Math.round(e * 255);
}
function Bb(e, t, r) {
  return va(e) + "," + va(t) + "," + va(r);
}
function Fr(e, t, r, n) {
  if ((n === void 0 && (n = Bb), t === 0)) return n(r, r, r);
  var a = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((a % 2) - 1)),
    c = 0,
    s = 0,
    d = 0;
  a >= 0 && a < 1
    ? ((c = l), (s = i))
    : a >= 1 && a < 2
      ? ((c = i), (s = l))
      : a >= 2 && a < 3
        ? ((s = l), (d = i))
        : a >= 3 && a < 4
          ? ((s = i), (d = l))
          : a >= 4 && a < 5
            ? ((c = i), (d = l))
            : a >= 5 && a < 6 && ((c = l), (d = i));
  var p = r - l / 2,
    h = c + p,
    m = s + p,
    f = d + p;
  return n(h, m, f);
}
var $i = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function Pb(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return $i[t] ? "#" + $i[t] : e;
}
var Hb = /^#[a-fA-F0-9]{6}$/,
  Fb = /^#[a-fA-F0-9]{8}$/,
  jb = /^#[a-fA-F0-9]{3}$/,
  Nb = /^#[a-fA-F0-9]{4}$/,
  ba = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  Db =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  Vb =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  Ub =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function ir(e) {
  if (typeof e != "string") throw new rt(3);
  var t = Pb(e);
  if (t.match(Hb))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(Fb)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(jb))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(Nb)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var a = ba.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10),
    };
  var l = Db.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha:
        parseFloat("" + l[4]) > 1
          ? parseFloat("" + l[4]) / 100
          : parseFloat("" + l[4]),
    };
  var i = Vb.exec(t);
  if (i) {
    var c = parseInt("" + i[1], 10),
      s = parseInt("" + i[2], 10) / 100,
      d = parseInt("" + i[3], 10) / 100,
      p = "rgb(" + Fr(c, s, d) + ")",
      h = ba.exec(p);
    if (!h) throw new rt(4, t, p);
    return {
      red: parseInt("" + h[1], 10),
      green: parseInt("" + h[2], 10),
      blue: parseInt("" + h[3], 10),
    };
  }
  var m = Ub.exec(t.substring(0, 50));
  if (m) {
    var f = parseInt("" + m[1], 10),
      v = parseInt("" + m[2], 10) / 100,
      g = parseInt("" + m[3], 10) / 100,
      E = "rgb(" + Fr(f, v, g) + ")",
      x = ba.exec(E);
    if (!x) throw new rt(4, t, E);
    return {
      red: parseInt("" + x[1], 10),
      green: parseInt("" + x[2], 10),
      blue: parseInt("" + x[3], 10),
      alpha:
        parseFloat("" + m[4]) > 1
          ? parseFloat("" + m[4]) / 100
          : parseFloat("" + m[4]),
    };
  }
  throw new rt(5);
}
function Wb(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    a = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (a + l) / 2;
  if (a === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var c,
    s = a - l,
    d = i > 0.5 ? s / (2 - a - l) : s / (a + l);
  switch (a) {
    case t:
      c = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      c = (n - t) / s + 2;
      break;
    default:
      c = (t - r) / s + 4;
      break;
  }
  return (
    (c *= 60),
    e.alpha !== void 0
      ? { hue: c, saturation: d, lightness: i, alpha: e.alpha }
      : { hue: c, saturation: d, lightness: i }
  );
}
function xt(e) {
  return Wb(ir(e));
}
var qb = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
      ? "#" + t[1] + t[3] + t[5]
      : t;
  },
  ro = qb;
function kt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ya(e) {
  return kt(Math.round(e * 255));
}
function Gb(e, t, r) {
  return ro("#" + ya(e) + ya(t) + ya(r));
}
function _n(e, t, r) {
  return Fr(e, t, r, Gb);
}
function Yb(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return _n(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return _n(e.hue, e.saturation, e.lightness);
  throw new rt(1);
}
function Kb(e, t, r, n) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof r == "number" &&
    typeof n == "number"
  )
    return n >= 1 ? _n(e, t, r) : "rgba(" + Fr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? _n(e.hue, e.saturation, e.lightness)
      : "rgba(" + Fr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new rt(2);
}
function no(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return ro("#" + kt(e) + kt(t) + kt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return ro("#" + kt(e.red) + kt(e.green) + kt(e.blue));
  throw new rt(6);
}
function Je(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var a = ir(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof n == "number"
    )
      return n >= 1
        ? no(e, t, r)
        : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? no(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new rt(7);
}
var Xb = function (t) {
    return (
      typeof t.red == "number" &&
      typeof t.green == "number" &&
      typeof t.blue == "number" &&
      (typeof t.alpha != "number" || typeof t.alpha > "u")
    );
  },
  Zb = function (t) {
    return (
      typeof t.red == "number" &&
      typeof t.green == "number" &&
      typeof t.blue == "number" &&
      typeof t.alpha == "number"
    );
  },
  Jb = function (t) {
    return (
      typeof t.hue == "number" &&
      typeof t.saturation == "number" &&
      typeof t.lightness == "number" &&
      (typeof t.alpha != "number" || typeof t.alpha > "u")
    );
  },
  Qb = function (t) {
    return (
      typeof t.hue == "number" &&
      typeof t.saturation == "number" &&
      typeof t.lightness == "number" &&
      typeof t.alpha == "number"
    );
  };
function Et(e) {
  if (typeof e != "object") throw new rt(8);
  if (Zb(e)) return Je(e);
  if (Xb(e)) return no(e);
  if (Qb(e)) return Kb(e);
  if (Jb(e)) return Yb(e);
  throw new rt(8);
}
function Dc(e, t, r) {
  return function () {
    var a = r.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : Dc(e, t, a);
  };
}
function Ie(e) {
  return Dc(e, e.length, []);
}
function ey(e, t) {
  if (t === "transparent") return t;
  var r = xt(t);
  return Et(me({}, r, { hue: r.hue + parseFloat(e) }));
}
Ie(ey);
function pr(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function ty(e, t) {
  if (t === "transparent") return t;
  var r = xt(t);
  return Et(me({}, r, { lightness: pr(0, 1, r.lightness - parseFloat(e)) }));
}
var ry = Ie(ty),
  Ye = ry;
function ny(e, t) {
  if (t === "transparent") return t;
  var r = xt(t);
  return Et(me({}, r, { saturation: pr(0, 1, r.saturation - parseFloat(e)) }));
}
Ie(ny);
function ay(e, t) {
  if (t === "transparent") return t;
  var r = xt(t);
  return Et(me({}, r, { lightness: pr(0, 1, r.lightness + parseFloat(e)) }));
}
var oy = Ie(ay),
  Ot = oy;
function ly(e, t, r) {
  if (t === "transparent") return r;
  if (r === "transparent") return t;
  if (e === 0) return r;
  var n = ir(t),
    a = me({}, n, { alpha: typeof n.alpha == "number" ? n.alpha : 1 }),
    l = ir(r),
    i = me({}, l, { alpha: typeof l.alpha == "number" ? l.alpha : 1 }),
    c = a.alpha - i.alpha,
    s = parseFloat(e) * 2 - 1,
    d = s * c === -1 ? s : s + c,
    p = 1 + s * c,
    h = (d / p + 1) / 2,
    m = 1 - h,
    f = {
      red: Math.floor(a.red * h + i.red * m),
      green: Math.floor(a.green * h + i.green * m),
      blue: Math.floor(a.blue * h + i.blue * m),
      alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
    };
  return Je(f);
}
var iy = Ie(ly),
  Vc = iy;
function sy(e, t) {
  if (t === "transparent") return t;
  var r = ir(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    a = me({}, r, { alpha: pr(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
  return Je(a);
}
var cy = Ie(sy),
  nn = cy;
function dy(e, t) {
  if (t === "transparent") return t;
  var r = xt(t);
  return Et(me({}, r, { saturation: pr(0, 1, r.saturation + parseFloat(e)) }));
}
Ie(dy);
function uy(e, t) {
  return t === "transparent" ? t : Et(me({}, xt(t), { hue: parseFloat(e) }));
}
Ie(uy);
function py(e, t) {
  return t === "transparent"
    ? t
    : Et(me({}, xt(t), { lightness: parseFloat(e) }));
}
Ie(py);
function fy(e, t) {
  return t === "transparent"
    ? t
    : Et(me({}, xt(t), { saturation: parseFloat(e) }));
}
Ie(fy);
function hy(e, t) {
  return t === "transparent" ? t : Vc(parseFloat(e), "rgb(0, 0, 0)", t);
}
Ie(hy);
function gy(e, t) {
  return t === "transparent" ? t : Vc(parseFloat(e), "rgb(255, 255, 255)", t);
}
Ie(gy);
function my(e, t) {
  if (t === "transparent") return t;
  var r = ir(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    a = me({}, r, {
      alpha: pr(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return Je(a);
}
var vy = Ie(my),
  ee = vy,
  by = S0,
  yy = Q1,
  wy = Object.prototype,
  xy = wy.hasOwnProperty;
function Ey(e, t, r) {
  var n = e[t];
  (!(xy.call(e, t) && yy(n, r)) || (r === void 0 && !(t in e))) && by(e, t, r);
}
var ul = Ey,
  Sy = ul,
  Cy = C0,
  Ry = ed,
  Li = Tn,
  Iy = td;
function Ay(e, t, r, n) {
  if (!Li(e)) return e;
  t = Cy(t, e);
  for (var a = -1, l = t.length, i = l - 1, c = e; c != null && ++a < l; ) {
    var s = Iy(t[a]),
      d = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype") return e;
    if (a != i) {
      var p = c[s];
      (d = n ? n(p, s, c) : void 0),
        d === void 0 && (d = Li(p) ? p : Ry(t[a + 1]) ? [] : {});
    }
    Sy(c, s, d), (c = c[s]);
  }
  return e;
}
var _y = Ay,
  ky = rd,
  Oy = _y,
  Ty = C0;
function My(e, t, r) {
  for (var n = -1, a = t.length, l = {}; ++n < a; ) {
    var i = t[n],
      c = ky(e, i);
    r(c, i) && Oy(l, Ty(i, e), c);
  }
  return l;
}
var $y = My,
  Ly = nd,
  zy = R0,
  By = I0,
  Py = ad,
  Hy = Object.getOwnPropertySymbols,
  Fy = Hy
    ? function (e) {
        for (var t = []; e; ) Ly(t, By(e)), (e = zy(e));
        return t;
      }
    : Py,
  Uc = Fy;
function jy(e) {
  var t = [];
  if (e != null) for (var r in Object(e)) t.push(r);
  return t;
}
var Ny = jy,
  Dy = Tn,
  Vy = A0,
  Uy = Ny,
  Wy = Object.prototype,
  qy = Wy.hasOwnProperty;
function Gy(e) {
  if (!Dy(e)) return Uy(e);
  var t = Vy(e),
    r = [];
  for (var n in e) (n == "constructor" && (t || !qy.call(e, n))) || r.push(n);
  return r;
}
var Yy = Gy,
  Ky = od,
  Xy = Yy,
  Zy = ld;
function Jy(e) {
  return Zy(e) ? Ky(e, !0) : Xy(e);
}
var pl = Jy,
  Qy = id,
  e6 = Uc,
  t6 = pl;
function r6(e) {
  return Qy(e, t6, e6);
}
var Wc = r6,
  n6 = sd,
  a6 = cd,
  o6 = $y,
  l6 = Wc;
function i6(e, t) {
  if (e == null) return {};
  var r = n6(l6(e), function (n) {
    return [n];
  });
  return (
    (t = a6(t)),
    o6(e, r, function (n, a) {
      return t(n, a[0]);
    })
  );
}
var s6 = i6;
const c6 = On(s6);
function Mt() {
  return (
    (Mt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Mt.apply(this, arguments)
  );
}
const d6 = ["children", "options"],
  zi = [
    "allowFullScreen",
    "allowTransparency",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "charSet",
    "className",
    "classId",
    "colSpan",
    "contentEditable",
    "contextMenu",
    "crossOrigin",
    "encType",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "hrefLang",
    "inputMode",
    "keyParams",
    "keyType",
    "marginHeight",
    "marginWidth",
    "maxLength",
    "mediaGroup",
    "minLength",
    "noValidate",
    "radioGroup",
    "readOnly",
    "rowSpan",
    "spellCheck",
    "srcDoc",
    "srcLang",
    "srcSet",
    "tabIndex",
    "useMap",
  ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: "htmlFor" }),
  Bi = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" },
  u6 = ["style", "script"],
  p6 =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  f6 = /mailto:/i,
  h6 = /\n{2,}$/,
  qc = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  g6 = /^ *> ?/gm,
  m6 = /^ {2,}\n/,
  v6 = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  Gc = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
  Yc = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  b6 = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  y6 = /^(?:\n *)*\n/,
  w6 = /\r\n?/g,
  x6 = /^\[\^([^\]]+)](:.*)\n/,
  E6 = /^\[\^([^\]]+)]/,
  S6 = /\f/g,
  C6 = /^\s*?\[(x|\s)\]/,
  Kc = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  Xc = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  Zc = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  ao =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  R6 = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
  Jc = /^<!--[\s\S]*?(?:-->)/,
  I6 = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  oo = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  A6 = /^\{.*\}$/,
  _6 = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  k6 = /^<([^ >]+@[^ >]+)>/,
  O6 = /^<([^ >]+:\/[^ >]+)>/,
  T6 = /-([a-z])?/gi,
  Qc = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  M6 = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  $6 = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  L6 = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  z6 = /(\[|\])/g,
  B6 = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  P6 = /\t/g,
  H6 = /^ *\| */,
  F6 = /(^ *\||\| *$)/g,
  j6 = / *$/,
  N6 = /^ *:-+: *$/,
  D6 = /^ *:-+ *$/,
  V6 = /^ *-+: *$/,
  U6 =
    /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  W6 =
    /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  q6 = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
  G6 = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  Y6 = /^\\([^0-9A-Za-z\s])/,
  K6 =
    /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  X6 = /^\n+/,
  Z6 = /^([ \t]*)/,
  J6 = /\\([^\\])/g,
  Pi = / *\n+$/,
  Q6 = /(?:^|\n)( *)$/,
  fl = "(?:\\d+\\.)",
  hl = "(?:[*+-])";
function e1(e) {
  return "( *)(" + (e === 1 ? fl : hl) + ") +";
}
const t1 = e1(1),
  r1 = e1(2);
function n1(e) {
  return new RegExp("^" + (e === 1 ? t1 : r1));
}
const ew = n1(1),
  tw = n1(2);
function a1(e) {
  return new RegExp(
    "^" +
      (e === 1 ? t1 : r1) +
      "[^\\n]*(?:\\n(?!\\1" +
      (e === 1 ? fl : hl) +
      " )[^\\n]*)*(\\n|$)",
    "gm",
  );
}
const o1 = a1(1),
  l1 = a1(2);
function i1(e) {
  const t = e === 1 ? fl : hl;
  return new RegExp(
    "^( *)(" +
      t +
      ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
      t +
      " (?!" +
      t +
      " ))\\n*|\\s*\\n*$)",
  );
}
const s1 = i1(1),
  c1 = i1(2);
function Hi(e, t) {
  const r = t === 1,
    n = r ? s1 : c1,
    a = r ? o1 : l1,
    l = r ? ew : tw;
  return {
    t(i, c, s) {
      const d = Q6.exec(s);
      return d && (c.o || (!c._ && !c.u)) ? n.exec((i = d[1] + i)) : null;
    },
    i: W.HIGH,
    l(i, c, s) {
      const d = r ? +i[2] : void 0,
        p = i[0]
          .replace(
            h6,
            `
`,
          )
          .match(a);
      let h = !1;
      return {
        p: p.map(function (m, f) {
          const v = l.exec(m)[0].length,
            g = new RegExp("^ {1," + v + "}", "gm"),
            E = m.replace(g, "").replace(l, ""),
            x = f === p.length - 1,
            y =
              E.indexOf(`

`) !== -1 ||
              (x && h);
          h = y;
          const b = s._,
            w = s.o;
          let S;
          (s.o = !0),
            y
              ? ((s._ = !1),
                (S = E.replace(
                  Pi,
                  `

`,
                )))
              : ((s._ = !0), (S = E.replace(Pi, "")));
          const C = c(S, s);
          return (s._ = b), (s.o = w), C;
        }),
        m: r,
        g: d,
      };
    },
    h: (i, c, s) =>
      e(
        i.m ? "ol" : "ul",
        { key: s.k, start: i.g },
        i.p.map(function (d, p) {
          return e("li", { key: p }, c(d, s));
        }),
      ),
  };
}
const rw = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  nw = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  d1 = [qc, Gc, Yc, Kc, Zc, Xc, Jc, Qc, o1, s1, l1, c1],
  aw = [...d1, /^[^\n]+(?:  \n|\n{2,})/, ao, oo];
function ow(e) {
  return e
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
    .replace(/[çÇ]/g, "c")
    .replace(/[ðÐ]/g, "d")
    .replace(/[ÈÉÊËéèêë]/g, "e")
    .replace(/[ÏïÎîÍíÌì]/g, "i")
    .replace(/[Ññ]/g, "n")
    .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
    .replace(/[ÜüÛûÚúÙù]/g, "u")
    .replace(/[ŸÿÝý]/g, "y")
    .replace(/[^a-z0-9- ]/gi, "")
    .replace(/ /gi, "-")
    .toLowerCase();
}
function lw(e) {
  return V6.test(e)
    ? "right"
    : N6.test(e)
      ? "center"
      : D6.test(e)
        ? "left"
        : null;
}
function Fi(e, t, r) {
  const n = r.$;
  r.$ = !0;
  const a = t(e.trim(), r);
  r.$ = n;
  let l = [[]];
  return (
    a.forEach(function (i, c) {
      i.type === "tableSeparator"
        ? c !== 0 && c !== a.length - 1 && l.push([])
        : (i.type !== "text" ||
            (a[c + 1] != null && a[c + 1].type !== "tableSeparator") ||
            (i.v = i.v.replace(j6, "")),
          l[l.length - 1].push(i));
    }),
    l
  );
}
function iw(e, t, r) {
  r._ = !0;
  const n = Fi(e[1], t, r),
    a = e[2].replace(F6, "").split("|").map(lw),
    l = (function (i, c, s) {
      return i
        .trim()
        .split(
          `
`,
        )
        .map(function (d) {
          return Fi(d, c, s);
        });
    })(e[3], t, r);
  return (r._ = !1), { S: a, A: l, L: n, type: "table" };
}
function ji(e, t) {
  return e.S[t] == null ? {} : { textAlign: e.S[t] };
}
function ft(e) {
  return function (t, r) {
    return r._ ? e.exec(t) : null;
  };
}
function ht(e) {
  return function (t, r) {
    return r._ || r.u ? e.exec(t) : null;
  };
}
function st(e) {
  return function (t, r) {
    return r._ || r.u ? null : e.exec(t);
  };
}
function Er(e) {
  return function (t) {
    return e.exec(t);
  };
}
function sw(e, t, r) {
  if (
    t._ ||
    t.u ||
    (r &&
      !r.endsWith(`
`))
  )
    return null;
  let n = "";
  e.split(
    `
`,
  ).every(
    (l) =>
      !d1.some((i) => i.test(l)) &&
      ((n +=
        l +
        `
`),
      l.trim()),
  );
  const a = n.trimEnd();
  return a == "" ? null : [n, a];
}
function Yt(e) {
  try {
    if (
      decodeURIComponent(e)
        .replace(/[^A-Za-z0-9/:]/g, "")
        .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
    )
      return;
  } catch {
    return null;
  }
  return e;
}
function Ni(e) {
  return e.replace(J6, "$1");
}
function mn(e, t, r) {
  const n = r._ || !1,
    a = r.u || !1;
  (r._ = !0), (r.u = !0);
  const l = e(t, r);
  return (r._ = n), (r.u = a), l;
}
function cw(e, t, r) {
  const n = r._ || !1,
    a = r.u || !1;
  (r._ = !1), (r.u = !0);
  const l = e(t, r);
  return (r._ = n), (r.u = a), l;
}
function dw(e, t, r) {
  return (r._ = !1), e(t, r);
}
const wa = (e, t, r) => ({ v: mn(t, e[1], r) });
function xa() {
  return {};
}
function Ea() {
  return null;
}
function uw(...e) {
  return e.filter(Boolean).join(" ");
}
function Sa(e, t, r) {
  let n = e;
  const a = t.split(".");
  for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
  return n || r;
}
var W;
function pw(e, t = {}) {
  (t.overrides = t.overrides || {}),
    (t.slugify = t.slugify || ow),
    (t.namedCodesToUnicode = t.namedCodesToUnicode
      ? Mt({}, Bi, t.namedCodesToUnicode)
      : Bi);
  const r = t.createElement || o.createElement;
  function n(f, v, ...g) {
    const E = Sa(t.overrides, `${f}.props`, {});
    return r(
      (function (x, y) {
        const b = Sa(y, x);
        return b
          ? typeof b == "function" || (typeof b == "object" && "render" in b)
            ? b
            : Sa(y, `${x}.component`, x)
          : x;
      })(f, t.overrides),
      Mt({}, v, E, {
        className: uw(v == null ? void 0 : v.className, E.className) || void 0,
      }),
      ...g,
    );
  }
  function a(f) {
    let v = !1;
    t.forceInline ? (v = !0) : t.forceBlock || (v = B6.test(f) === !1);
    const g = p(
      d(
        v
          ? f
          : `${f.trimEnd().replace(X6, "")}

`,
        { _: v },
      ),
    );
    for (; typeof g[g.length - 1] == "string" && !g[g.length - 1].trim(); )
      g.pop();
    if (t.wrapper === null) return g;
    const E = t.wrapper || (v ? "span" : "div");
    let x;
    if (g.length > 1 || t.forceWrapper) x = g;
    else {
      if (g.length === 1)
        return (
          (x = g[0]), typeof x == "string" ? n("span", { key: "outer" }, x) : x
        );
      x = null;
    }
    return o.createElement(E, { key: "outer" }, x);
  }
  function l(f) {
    const v = f.match(p6);
    return v
      ? v.reduce(function (g, E, x) {
          const y = E.indexOf("=");
          if (y !== -1) {
            const b = (function (R) {
                return (
                  R.indexOf("-") !== -1 &&
                    R.match(I6) === null &&
                    (R = R.replace(T6, function (I, _) {
                      return _.toUpperCase();
                    })),
                  R
                );
              })(E.slice(0, y)).trim(),
              w = (function (R) {
                const I = R[0];
                return (I === '"' || I === "'") &&
                  R.length >= 2 &&
                  R[R.length - 1] === I
                  ? R.slice(1, -1)
                  : R;
              })(E.slice(y + 1).trim()),
              S = zi[b] || b,
              C = (g[S] = (function (R, I) {
                return R === "style"
                  ? I.split(/;\s?/).reduce(function (_, k) {
                      const O = k.slice(0, k.indexOf(":"));
                      return (
                        (_[O.replace(/(-[a-z])/g, (T) => T[1].toUpperCase())] =
                          k.slice(O.length + 1).trim()),
                        _
                      );
                    }, {})
                  : R === "href"
                    ? Yt(I)
                    : (I.match(A6) && (I = I.slice(1, I.length - 1)),
                      I === "true" || (I !== "false" && I));
              })(b, w));
            typeof C == "string" &&
              (ao.test(C) || oo.test(C)) &&
              (g[S] = o.cloneElement(a(C.trim()), { key: x }));
          } else E !== "style" && (g[zi[E] || E] = !0);
          return g;
        }, {})
      : null;
  }
  const i = [],
    c = {},
    s = {
      blockQuote: {
        t: st(qc),
        i: W.HIGH,
        l: (f, v, g) => ({ v: v(f[0].replace(g6, ""), g) }),
        h: (f, v, g) => n("blockquote", { key: g.k }, v(f.v, g)),
      },
      breakLine: {
        t: Er(m6),
        i: W.HIGH,
        l: xa,
        h: (f, v, g) => n("br", { key: g.k }),
      },
      breakThematic: {
        t: st(v6),
        i: W.HIGH,
        l: xa,
        h: (f, v, g) => n("hr", { key: g.k }),
      },
      codeBlock: {
        t: st(Yc),
        i: W.MAX,
        l: (f) => ({
          v: f[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
          M: void 0,
        }),
        h: (f, v, g) =>
          n(
            "pre",
            { key: g.k },
            n(
              "code",
              Mt({}, f.O, { className: f.M ? `lang-${f.M}` : "" }),
              f.v,
            ),
          ),
      },
      codeFenced: {
        t: st(Gc),
        i: W.MAX,
        l: (f) => ({
          O: l(f[3] || ""),
          v: f[4],
          M: f[2] || void 0,
          type: "codeBlock",
        }),
      },
      codeInline: {
        t: ht(b6),
        i: W.LOW,
        l: (f) => ({ v: f[2] }),
        h: (f, v, g) => n("code", { key: g.k }, f.v),
      },
      footnote: {
        t: st(x6),
        i: W.MAX,
        l: (f) => (i.push({ I: f[2], j: f[1] }), {}),
        h: Ea,
      },
      footnoteReference: {
        t: ft(E6),
        i: W.HIGH,
        l: (f) => ({ v: f[1], B: `#${t.slugify(f[1])}` }),
        h: (f, v, g) =>
          n("a", { key: g.k, href: Yt(f.B) }, n("sup", { key: g.k }, f.v)),
      },
      gfmTask: {
        t: ft(C6),
        i: W.HIGH,
        l: (f) => ({ R: f[1].toLowerCase() === "x" }),
        h: (f, v, g) =>
          n("input", {
            checked: f.R,
            key: g.k,
            readOnly: !0,
            type: "checkbox",
          }),
      },
      heading: {
        t: st(t.enforceAtxHeadings ? Xc : Kc),
        i: W.HIGH,
        l: (f, v, g) => ({
          v: mn(v, f[2], g),
          T: t.slugify(f[2]),
          C: f[1].length,
        }),
        h: (f, v, g) => n(`h${f.C}`, { id: f.T, key: g.k }, v(f.v, g)),
      },
      headingSetext: {
        t: st(Zc),
        i: W.MAX,
        l: (f, v, g) => ({
          v: mn(v, f[1], g),
          C: f[2] === "=" ? 1 : 2,
          type: "heading",
        }),
      },
      htmlComment: { t: Er(Jc), i: W.HIGH, l: () => ({}), h: Ea },
      image: {
        t: ht(nw),
        i: W.HIGH,
        l: (f) => ({ D: f[1], B: Ni(f[2]), F: f[3] }),
        h: (f, v, g) =>
          n("img", {
            key: g.k,
            alt: f.D || void 0,
            title: f.F || void 0,
            src: Yt(f.B),
          }),
      },
      link: {
        t: ft(rw),
        i: W.LOW,
        l: (f, v, g) => ({ v: cw(v, f[1], g), B: Ni(f[2]), F: f[3] }),
        h: (f, v, g) =>
          n("a", { key: g.k, href: Yt(f.B), title: f.F }, v(f.v, g)),
      },
      linkAngleBraceStyleDetector: {
        t: ft(O6),
        i: W.MAX,
        l: (f) => ({ v: [{ v: f[1], type: "text" }], B: f[1], type: "link" }),
      },
      linkBareUrlDetector: {
        t: (f, v) => (v.N ? null : ft(_6)(f, v)),
        i: W.MAX,
        l: (f) => ({
          v: [{ v: f[1], type: "text" }],
          B: f[1],
          F: void 0,
          type: "link",
        }),
      },
      linkMailtoDetector: {
        t: ft(k6),
        i: W.MAX,
        l(f) {
          let v = f[1],
            g = f[1];
          return (
            f6.test(g) || (g = "mailto:" + g),
            {
              v: [{ v: v.replace("mailto:", ""), type: "text" }],
              B: g,
              type: "link",
            }
          );
        },
      },
      orderedList: Hi(n, 1),
      unorderedList: Hi(n, 2),
      newlineCoalescer: {
        t: st(y6),
        i: W.LOW,
        l: xa,
        h: () => `
`,
      },
      paragraph: {
        t: sw,
        i: W.LOW,
        l: wa,
        h: (f, v, g) => n("p", { key: g.k }, v(f.v, g)),
      },
      ref: {
        t: ft(M6),
        i: W.MAX,
        l: (f) => ((c[f[1]] = { B: f[2], F: f[4] }), {}),
        h: Ea,
      },
      refImage: {
        t: ht($6),
        i: W.MAX,
        l: (f) => ({ D: f[1] || void 0, P: f[2] }),
        h: (f, v, g) =>
          n("img", { key: g.k, alt: f.D, src: Yt(c[f.P].B), title: c[f.P].F }),
      },
      refLink: {
        t: ft(L6),
        i: W.MAX,
        l: (f, v, g) => ({
          v: v(f[1], g),
          Z: v(f[0].replace(z6, "\\$1"), g),
          P: f[2],
        }),
        h: (f, v, g) =>
          c[f.P]
            ? n(
                "a",
                { key: g.k, href: Yt(c[f.P].B), title: c[f.P].F },
                v(f.v, g),
              )
            : n("span", { key: g.k }, v(f.Z, g)),
      },
      table: {
        t: st(Qc),
        i: W.HIGH,
        l: iw,
        h: (f, v, g) =>
          n(
            "table",
            { key: g.k },
            n(
              "thead",
              null,
              n(
                "tr",
                null,
                f.L.map(function (E, x) {
                  return n("th", { key: x, style: ji(f, x) }, v(E, g));
                }),
              ),
            ),
            n(
              "tbody",
              null,
              f.A.map(function (E, x) {
                return n(
                  "tr",
                  { key: x },
                  E.map(function (y, b) {
                    return n("td", { key: b, style: ji(f, b) }, v(y, g));
                  }),
                );
              }),
            ),
          ),
      },
      tableSeparator: {
        t: function (f, v) {
          return v.$ ? ((v._ = !0), H6.exec(f)) : null;
        },
        i: W.HIGH,
        l: function () {
          return { type: "tableSeparator" };
        },
        h: () => " | ",
      },
      text: {
        t: Er(K6),
        i: W.MIN,
        l: (f) => ({
          v: f[0].replace(R6, (v, g) =>
            t.namedCodesToUnicode[g] ? t.namedCodesToUnicode[g] : v,
          ),
        }),
        h: (f) => f.v,
      },
      textBolded: {
        t: ht(U6),
        i: W.MED,
        l: (f, v, g) => ({ v: v(f[2], g) }),
        h: (f, v, g) => n("strong", { key: g.k }, v(f.v, g)),
      },
      textEmphasized: {
        t: ht(W6),
        i: W.LOW,
        l: (f, v, g) => ({ v: v(f[2], g) }),
        h: (f, v, g) => n("em", { key: g.k }, v(f.v, g)),
      },
      textEscaped: {
        t: ht(Y6),
        i: W.HIGH,
        l: (f) => ({ v: f[1], type: "text" }),
      },
      textMarked: {
        t: ht(q6),
        i: W.LOW,
        l: wa,
        h: (f, v, g) => n("mark", { key: g.k }, v(f.v, g)),
      },
      textStrikethroughed: {
        t: ht(G6),
        i: W.LOW,
        l: wa,
        h: (f, v, g) => n("del", { key: g.k }, v(f.v, g)),
      },
    };
  t.disableParsingRawHTML !== !0 &&
    ((s.htmlBlock = {
      t: Er(ao),
      i: W.HIGH,
      l(f, v, g) {
        const [, E] = f[3].match(Z6),
          x = new RegExp(`^${E}`, "gm"),
          y = f[3].replace(x, ""),
          b = ((w = y), aw.some((I) => I.test(w)) ? dw : mn);
        var w;
        const S = f[1].toLowerCase(),
          C = u6.indexOf(S) !== -1;
        g.N = g.N || S === "a";
        const R = C ? f[3] : b(v, y, g);
        return (g.N = !1), { O: l(f[2]), v: R, G: C, H: C ? S : f[1] };
      },
      h: (f, v, g) => n(f.H, Mt({ key: g.k }, f.O), f.G ? f.v : v(f.v, g)),
    }),
    (s.htmlSelfClosing = {
      t: Er(oo),
      i: W.HIGH,
      l: (f) => ({ O: l(f[2] || ""), H: f[1] }),
      h: (f, v, g) => n(f.H, Mt({}, f.O, { key: g.k })),
    }));
  const d = (function (f) {
      let v = Object.keys(f);
      function g(E, x) {
        let y = [],
          b = "";
        for (; E; ) {
          let w = 0;
          for (; w < v.length; ) {
            const S = v[w],
              C = f[S],
              R = C.t(E, x, b);
            if (R) {
              const I = R[0];
              E = E.substring(I.length);
              const _ = C.l(R, g, x);
              _.type == null && (_.type = S), y.push(_), (b = I);
              break;
            }
            w++;
          }
        }
        return y;
      }
      return (
        v.sort(function (E, x) {
          let y = f[E].i,
            b = f[x].i;
          return y !== b ? y - b : E < x ? -1 : 1;
        }),
        function (E, x) {
          return g(
            (function (y) {
              return y
                .replace(
                  w6,
                  `
`,
                )
                .replace(S6, "")
                .replace(P6, "    ");
            })(E),
            x,
          );
        }
      );
    })(s),
    p =
      ((h = (function (f) {
        return function (v, g, E) {
          return f[v.type].h(v, g, E);
        };
      })(s)),
      function f(v, g = {}) {
        if (Array.isArray(v)) {
          const E = g.k,
            x = [];
          let y = !1;
          for (let b = 0; b < v.length; b++) {
            g.k = b;
            const w = f(v[b], g),
              S = typeof w == "string";
            S && y ? (x[x.length - 1] += w) : w !== null && x.push(w), (y = S);
          }
          return (g.k = E), x;
        }
        return h(v, f, g);
      });
  var h;
  const m = a(e);
  return i.length
    ? n(
        "div",
        null,
        m,
        n(
          "footer",
          { key: "footer" },
          i.map(function (f) {
            return n(
              "div",
              { id: t.slugify(f.j), key: f.j },
              f.j,
              p(d(f.I, { _: !0 })),
            );
          }),
        ),
      )
    : m;
}
(function (e) {
  (e[(e.MAX = 0)] = "MAX"),
    (e[(e.HIGH = 1)] = "HIGH"),
    (e[(e.MED = 2)] = "MED"),
    (e[(e.LOW = 3)] = "LOW"),
    (e[(e.MIN = 4)] = "MIN");
})(W || (W = {}));
const u1 = (e) => {
  let { children: t, options: r } = e,
    n = (function (a, l) {
      if (a == null) return {};
      var i,
        c,
        s = {},
        d = Object.keys(a);
      for (c = 0; c < d.length; c++)
        l.indexOf((i = d[c])) >= 0 || (s[i] = a[i]);
      return s;
    })(e, d6);
  return o.cloneElement(pw(t, r), n);
};
function fw(e, t, r, n) {
  for (var a = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < a; )
    if (t(e[l], l, e)) return l;
  return -1;
}
var hw = fw;
function gw(e) {
  return e !== e;
}
var mw = gw;
function vw(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
  return -1;
}
var bw = vw,
  yw = hw,
  ww = mw,
  xw = bw;
function Ew(e, t, r) {
  return t === t ? xw(e, t, r) : yw(e, ww, r);
}
var Sw = Ew,
  Cw = Sw;
function Rw(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Cw(e, t, 0) > -1;
}
var Iw = Rw;
function Aw(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n])) return !0;
  return !1;
}
var _w = Aw;
function kw() {}
var Ow = kw,
  Ca = dd,
  Tw = Ow,
  Mw = _0,
  $w = 1 / 0,
  Lw =
    Ca && 1 / Mw(new Ca([, -0]))[1] == $w
      ? function (e) {
          return new Ca(e);
        }
      : Tw,
  zw = Lw,
  Bw = ud,
  Pw = Iw,
  Hw = _w,
  Fw = pd,
  jw = zw,
  Nw = _0,
  Dw = 200;
function Vw(e, t, r) {
  var n = -1,
    a = Pw,
    l = e.length,
    i = !0,
    c = [],
    s = c;
  if (r) (i = !1), (a = Hw);
  else if (l >= Dw) {
    var d = t ? null : jw(e);
    if (d) return Nw(d);
    (i = !1), (a = Fw), (s = new Bw());
  } else s = t ? [] : c;
  e: for (; ++n < l; ) {
    var p = e[n],
      h = t ? t(p) : p;
    if (((p = r || p !== 0 ? p : 0), i && h === h)) {
      for (var m = s.length; m--; ) if (s[m] === h) continue e;
      t && s.push(h), c.push(p);
    } else a(s, h, r) || (s !== c && s.push(h), c.push(p));
  }
  return c;
}
var Uw = Vw,
  Ww = Uw;
function qw(e) {
  return e && e.length ? Ww(e) : [];
}
var Gw = qw;
const Yw = On(Gw);
function Kw(e, t) {
  for (
    var r = -1, n = e == null ? 0 : e.length;
    ++r < n && t(e[r], r, e) !== !1;

  );
  return e;
}
var Xw = Kw,
  Zw = ul,
  Jw = S0;
function Qw(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var l = -1, i = t.length; ++l < i; ) {
    var c = t[l],
      s = n ? n(r[c], e[c], c, r, e) : void 0;
    s === void 0 && (s = e[c]), a ? Jw(r, c, s) : Zw(r, c, s);
  }
  return r;
}
var Yn = Qw,
  e8 = Yn,
  t8 = k0;
function r8(e, t) {
  return e && e8(t, t8(t), e);
}
var n8 = r8,
  a8 = Yn,
  o8 = pl;
function l8(e, t) {
  return e && a8(t, o8(t), e);
}
var i8 = l8,
  kn = { exports: {} };
kn.exports;
(function (e, t) {
  var r = fd,
    n = t && !t.nodeType && t,
    a = n && !0 && e && !e.nodeType && e,
    l = a && a.exports === n,
    i = l ? r.Buffer : void 0,
    c = i ? i.allocUnsafe : void 0;
  function s(d, p) {
    if (p) return d.slice();
    var h = d.length,
      m = c ? c(h) : new d.constructor(h);
    return d.copy(m), m;
  }
  e.exports = s;
})(kn, kn.exports);
var s8 = kn.exports;
function c8(e, t) {
  var r = -1,
    n = e.length;
  for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
  return t;
}
var d8 = c8,
  u8 = Yn,
  p8 = I0;
function f8(e, t) {
  return u8(e, p8(e), t);
}
var h8 = f8,
  g8 = Yn,
  m8 = Uc;
function v8(e, t) {
  return g8(e, m8(e), t);
}
var b8 = v8,
  y8 = Object.prototype,
  w8 = y8.hasOwnProperty;
function x8(e) {
  var t = e.length,
    r = new e.constructor(t);
  return (
    t &&
      typeof e[0] == "string" &&
      w8.call(e, "index") &&
      ((r.index = e.index), (r.input = e.input)),
    r
  );
}
var E8 = x8,
  Di = hd;
function S8(e) {
  var t = new e.constructor(e.byteLength);
  return new Di(t).set(new Di(e)), t;
}
var gl = S8,
  C8 = gl;
function R8(e, t) {
  var r = t ? C8(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var I8 = R8,
  A8 = /\w*$/;
function _8(e) {
  var t = new e.constructor(e.source, A8.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var k8 = _8,
  Vi = gd,
  Ui = Vi ? Vi.prototype : void 0,
  Wi = Ui ? Ui.valueOf : void 0;
function O8(e) {
  return Wi ? Object(Wi.call(e)) : {};
}
var T8 = O8,
  M8 = gl;
function $8(e, t) {
  var r = t ? M8(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var L8 = $8,
  z8 = gl,
  B8 = I8,
  P8 = k8,
  H8 = T8,
  F8 = L8,
  j8 = "[object Boolean]",
  N8 = "[object Date]",
  D8 = "[object Map]",
  V8 = "[object Number]",
  U8 = "[object RegExp]",
  W8 = "[object Set]",
  q8 = "[object String]",
  G8 = "[object Symbol]",
  Y8 = "[object ArrayBuffer]",
  K8 = "[object DataView]",
  X8 = "[object Float32Array]",
  Z8 = "[object Float64Array]",
  J8 = "[object Int8Array]",
  Q8 = "[object Int16Array]",
  e9 = "[object Int32Array]",
  t9 = "[object Uint8Array]",
  r9 = "[object Uint8ClampedArray]",
  n9 = "[object Uint16Array]",
  a9 = "[object Uint32Array]";
function o9(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Y8:
      return z8(e);
    case j8:
    case N8:
      return new n(+e);
    case K8:
      return B8(e, r);
    case X8:
    case Z8:
    case J8:
    case Q8:
    case e9:
    case t9:
    case r9:
    case n9:
    case a9:
      return F8(e, r);
    case D8:
      return new n();
    case V8:
    case q8:
      return new n(e);
    case U8:
      return P8(e);
    case W8:
      return new n();
    case G8:
      return H8(e);
  }
}
var l9 = o9,
  i9 = Tn,
  qi = Object.create,
  s9 = (function () {
    function e() {}
    return function (t) {
      if (!i9(t)) return {};
      if (qi) return qi(t);
      e.prototype = t;
      var r = new e();
      return (e.prototype = void 0), r;
    };
  })(),
  c9 = s9,
  d9 = c9,
  u9 = R0,
  p9 = A0;
function f9(e) {
  return typeof e.constructor == "function" && !p9(e) ? d9(u9(e)) : {};
}
var h9 = f9,
  g9 = ho,
  m9 = O0,
  v9 = "[object Map]";
function b9(e) {
  return m9(e) && g9(e) == v9;
}
var y9 = b9,
  w9 = y9,
  x9 = M0,
  Gi = T0,
  Yi = Gi && Gi.isMap,
  E9 = Yi ? x9(Yi) : w9,
  S9 = E9,
  C9 = ho,
  R9 = O0,
  I9 = "[object Set]";
function A9(e) {
  return R9(e) && C9(e) == I9;
}
var _9 = A9,
  k9 = _9,
  O9 = M0,
  Ki = T0,
  Xi = Ki && Ki.isSet,
  T9 = Xi ? O9(Xi) : k9,
  M9 = T9,
  $9 = md,
  L9 = Xw,
  z9 = ul,
  B9 = n8,
  P9 = i8,
  H9 = s8,
  F9 = d8,
  j9 = h8,
  N9 = b8,
  D9 = bd,
  V9 = Wc,
  U9 = ho,
  W9 = E8,
  q9 = l9,
  G9 = h9,
  Y9 = yd,
  K9 = vd,
  X9 = S9,
  Z9 = Tn,
  J9 = M9,
  Q9 = k0,
  ex = pl,
  tx = 1,
  rx = 2,
  nx = 4,
  p1 = "[object Arguments]",
  ax = "[object Array]",
  ox = "[object Boolean]",
  lx = "[object Date]",
  ix = "[object Error]",
  f1 = "[object Function]",
  sx = "[object GeneratorFunction]",
  cx = "[object Map]",
  dx = "[object Number]",
  h1 = "[object Object]",
  ux = "[object RegExp]",
  px = "[object Set]",
  fx = "[object String]",
  hx = "[object Symbol]",
  gx = "[object WeakMap]",
  mx = "[object ArrayBuffer]",
  vx = "[object DataView]",
  bx = "[object Float32Array]",
  yx = "[object Float64Array]",
  wx = "[object Int8Array]",
  xx = "[object Int16Array]",
  Ex = "[object Int32Array]",
  Sx = "[object Uint8Array]",
  Cx = "[object Uint8ClampedArray]",
  Rx = "[object Uint16Array]",
  Ix = "[object Uint32Array]",
  Q = {};
Q[p1] =
  Q[ax] =
  Q[mx] =
  Q[vx] =
  Q[ox] =
  Q[lx] =
  Q[bx] =
  Q[yx] =
  Q[wx] =
  Q[xx] =
  Q[Ex] =
  Q[cx] =
  Q[dx] =
  Q[h1] =
  Q[ux] =
  Q[px] =
  Q[fx] =
  Q[hx] =
  Q[Sx] =
  Q[Cx] =
  Q[Rx] =
  Q[Ix] =
    !0;
Q[ix] = Q[f1] = Q[gx] = !1;
function vn(e, t, r, n, a, l) {
  var i,
    c = t & tx,
    s = t & rx,
    d = t & nx;
  if ((r && (i = a ? r(e, n, a, l) : r(e)), i !== void 0)) return i;
  if (!Z9(e)) return e;
  var p = Y9(e);
  if (p) {
    if (((i = W9(e)), !c)) return F9(e, i);
  } else {
    var h = U9(e),
      m = h == f1 || h == sx;
    if (K9(e)) return H9(e, c);
    if (h == h1 || h == p1 || (m && !a)) {
      if (((i = s || m ? {} : G9(e)), !c))
        return s ? N9(e, P9(i, e)) : j9(e, B9(i, e));
    } else {
      if (!Q[h]) return a ? e : {};
      i = q9(e, h, c);
    }
  }
  l || (l = new $9());
  var f = l.get(e);
  if (f) return f;
  l.set(e, i),
    J9(e)
      ? e.forEach(function (E) {
          i.add(vn(E, t, r, E, e, l));
        })
      : X9(e) &&
        e.forEach(function (E, x) {
          i.set(x, vn(E, t, r, x, e, l));
        });
  var v = d ? (s ? V9 : D9) : s ? ex : Q9,
    g = p ? void 0 : v(e);
  return (
    L9(g || e, function (E, x) {
      g && ((x = E), (E = e[x])), z9(i, x, vn(E, t, r, x, e, l));
    }),
    i
  );
}
var Ax = vn,
  _x = Ax,
  kx = 1,
  Ox = 4;
function Tx(e) {
  return _x(e, kx | Ox);
}
var Mx = Tx;
const $x = On(Mx);
var Lx = Object.create,
  g1 = Object.defineProperty,
  zx = Object.getOwnPropertyDescriptor,
  m1 = Object.getOwnPropertyNames,
  Bx = Object.getPrototypeOf,
  Px = Object.prototype.hasOwnProperty,
  Be = (e, t) =>
    function () {
      return t || (0, e[m1(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Hx = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let a of m1(t))
        !Px.call(e, a) &&
          a !== r &&
          g1(e, a, {
            get: () => t[a],
            enumerable: !(n = zx(t, a)) || n.enumerable,
          });
    return e;
  },
  ml = (e, t, r) => (
    (r = e != null ? Lx(Bx(e)) : {}),
    Hx(
      t || !e || !e.__esModule
        ? g1(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  Fx = [
    "bubbles",
    "cancelBubble",
    "cancelable",
    "composed",
    "currentTarget",
    "defaultPrevented",
    "eventPhase",
    "isTrusted",
    "returnValue",
    "srcElement",
    "target",
    "timeStamp",
    "type",
  ],
  jx = ["detail"];
function Nx(e) {
  const t = Fx.filter((r) => e[r] !== void 0).reduce(
    (r, n) => ({ ...r, [n]: e[n] }),
    {},
  );
  return (
    e instanceof CustomEvent &&
      jx
        .filter((r) => e[r] !== void 0)
        .forEach((r) => {
          t[r] = e[r];
        }),
    t
  );
}
var v1 = Be({
    "node_modules/has-symbols/shams.js"(e, t) {
      t.exports = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        )
          return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var n = {},
          a = Symbol("test"),
          l = Object(a);
        if (
          typeof a == "string" ||
          Object.prototype.toString.call(a) !== "[object Symbol]" ||
          Object.prototype.toString.call(l) !== "[object Symbol]"
        )
          return !1;
        var i = 42;
        n[a] = i;
        for (a in n) return !1;
        if (
          (typeof Object.keys == "function" && Object.keys(n).length !== 0) ||
          (typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(n).length !== 0)
        )
          return !1;
        var c = Object.getOwnPropertySymbols(n);
        if (
          c.length !== 1 ||
          c[0] !== a ||
          !Object.prototype.propertyIsEnumerable.call(n, a)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var s = Object.getOwnPropertyDescriptor(n, a);
          if (s.value !== i || s.enumerable !== !0) return !1;
        }
        return !0;
      };
    },
  }),
  b1 = Be({
    "node_modules/has-symbols/index.js"(e, t) {
      var r = typeof Symbol < "u" && Symbol,
        n = v1();
      t.exports = function () {
        return typeof r != "function" ||
          typeof Symbol != "function" ||
          typeof r("foo") != "symbol" ||
          typeof Symbol("bar") != "symbol"
          ? !1
          : n();
      };
    },
  }),
  Dx = Be({
    "node_modules/function-bind/implementation.js"(e, t) {
      var r = "Function.prototype.bind called on incompatible ",
        n = Array.prototype.slice,
        a = Object.prototype.toString,
        l = "[object Function]";
      t.exports = function (c) {
        var s = this;
        if (typeof s != "function" || a.call(s) !== l)
          throw new TypeError(r + s);
        for (
          var d = n.call(arguments, 1),
            p,
            h = function () {
              if (this instanceof p) {
                var E = s.apply(this, d.concat(n.call(arguments)));
                return Object(E) === E ? E : this;
              } else return s.apply(c, d.concat(n.call(arguments)));
            },
            m = Math.max(0, s.length - d.length),
            f = [],
            v = 0;
          v < m;
          v++
        )
          f.push("$" + v);
        if (
          ((p = Function(
            "binder",
            "return function (" +
              f.join(",") +
              "){ return binder.apply(this,arguments); }",
          )(h)),
          s.prototype)
        ) {
          var g = function () {};
          (g.prototype = s.prototype),
            (p.prototype = new g()),
            (g.prototype = null);
        }
        return p;
      };
    },
  }),
  vl = Be({
    "node_modules/function-bind/index.js"(e, t) {
      var r = Dx();
      t.exports = Function.prototype.bind || r;
    },
  }),
  Vx = Be({
    "node_modules/has/src/index.js"(e, t) {
      var r = vl();
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
  }),
  y1 = Be({
    "node_modules/get-intrinsic/index.js"(e, t) {
      var r,
        n = SyntaxError,
        a = Function,
        l = TypeError,
        i = function (T) {
          try {
            return a('"use strict"; return (' + T + ").constructor;")();
          } catch {}
        },
        c = Object.getOwnPropertyDescriptor;
      if (c)
        try {
          c({}, "");
        } catch {
          c = null;
        }
      var s = function () {
          throw new l();
        },
        d = c
          ? (function () {
              try {
                return arguments.callee, s;
              } catch {
                try {
                  return c(arguments, "callee").get;
                } catch {
                  return s;
                }
              }
            })()
          : s,
        p = b1()(),
        h =
          Object.getPrototypeOf ||
          function (T) {
            return T.__proto__;
          },
        m = {},
        f = typeof Uint8Array > "u" ? r : h(Uint8Array),
        v = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": p ? h([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": m,
          "%AsyncGenerator%": m,
          "%AsyncGeneratorFunction%": m,
          "%AsyncIteratorPrototype%": m,
          "%Atomics%": typeof Atomics > "u" ? r : Atomics,
          "%BigInt%": typeof BigInt > "u" ? r : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
          "%FinalizationRegistry%":
            typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
          "%Function%": a,
          "%GeneratorFunction%": m,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": p ? h(h([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%":
            typeof Map > "u" || !p ? r : h(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? r : Promise,
          "%Proxy%": typeof Proxy > "u" ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? r : Set,
          "%SetIteratorPrototype%":
            typeof Set > "u" || !p ? r : h(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%":
            typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": p ? h(""[Symbol.iterator]()) : r,
          "%Symbol%": p ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": d,
          "%TypedArray%": f,
          "%TypeError%": l,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%":
            typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        },
        g = function T(M) {
          var F;
          if (M === "%AsyncFunction%") F = i("async function () {}");
          else if (M === "%GeneratorFunction%") F = i("function* () {}");
          else if (M === "%AsyncGeneratorFunction%")
            F = i("async function* () {}");
          else if (M === "%AsyncGenerator%") {
            var $ = T("%AsyncGeneratorFunction%");
            $ && (F = $.prototype);
          } else if (M === "%AsyncIteratorPrototype%") {
            var L = T("%AsyncGenerator%");
            L && (F = h(L.prototype));
          }
          return (v[M] = F), F;
        },
        E = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        x = vl(),
        y = Vx(),
        b = x.call(Function.call, Array.prototype.concat),
        w = x.call(Function.apply, Array.prototype.splice),
        S = x.call(Function.call, String.prototype.replace),
        C = x.call(Function.call, String.prototype.slice),
        R = x.call(Function.call, RegExp.prototype.exec),
        I =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        _ = /\\(\\)?/g,
        k = function (M) {
          var F = C(M, 0, 1),
            $ = C(M, -1);
          if (F === "%" && $ !== "%")
            throw new n("invalid intrinsic syntax, expected closing `%`");
          if ($ === "%" && F !== "%")
            throw new n("invalid intrinsic syntax, expected opening `%`");
          var L = [];
          return (
            S(M, I, function (j, V, P, D) {
              L[L.length] = P ? S(D, _, "$1") : V || j;
            }),
            L
          );
        },
        O = function (M, F) {
          var $ = M,
            L;
          if ((y(E, $) && ((L = E[$]), ($ = "%" + L[0] + "%")), y(v, $))) {
            var j = v[$];
            if ((j === m && (j = g($)), typeof j > "u" && !F))
              throw new l(
                "intrinsic " +
                  M +
                  " exists, but is not available. Please file an issue!",
              );
            return { alias: L, name: $, value: j };
          }
          throw new n("intrinsic " + M + " does not exist!");
        };
      t.exports = function (M, F) {
        if (typeof M != "string" || M.length === 0)
          throw new l("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof F != "boolean")
          throw new l('"allowMissing" argument must be a boolean');
        if (R(/^%?[^%]*%?$/, M) === null)
          throw new n(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
          );
        var $ = k(M),
          L = $.length > 0 ? $[0] : "",
          j = O("%" + L + "%", F),
          V = j.name,
          P = j.value,
          D = !1,
          Z = j.alias;
        Z && ((L = Z[0]), w($, b([0, 1], Z)));
        for (var ne = 1, X = !0; ne < $.length; ne += 1) {
          var J = $[ne],
            B = C(J, 0, 1),
            U = C(J, -1);
          if (
            (B === '"' ||
              B === "'" ||
              B === "`" ||
              U === '"' ||
              U === "'" ||
              U === "`") &&
            B !== U
          )
            throw new n("property names with quotes must have matching quotes");
          if (
            ((J === "constructor" || !X) && (D = !0),
            (L += "." + J),
            (V = "%" + L + "%"),
            y(v, V))
          )
            P = v[V];
          else if (P != null) {
            if (!(J in P)) {
              if (!F)
                throw new l(
                  "base intrinsic for " +
                    M +
                    " exists, but the property is not available.",
                );
              return;
            }
            if (c && ne + 1 >= $.length) {
              var q = c(P, J);
              (X = !!q),
                X && "get" in q && !("originalValue" in q.get)
                  ? (P = q.get)
                  : (P = P[J]);
            } else (X = y(P, J)), (P = P[J]);
            X && !D && (v[V] = P);
          }
        }
        return P;
      };
    },
  }),
  Ux = Be({
    "node_modules/call-bind/index.js"(e, t) {
      var r = vl(),
        n = y1(),
        a = n("%Function.prototype.apply%"),
        l = n("%Function.prototype.call%"),
        i = n("%Reflect.apply%", !0) || r.call(l, a),
        c = n("%Object.getOwnPropertyDescriptor%", !0),
        s = n("%Object.defineProperty%", !0),
        d = n("%Math.max%");
      if (s)
        try {
          s({}, "a", { value: 1 });
        } catch {
          s = null;
        }
      t.exports = function (m) {
        var f = i(r, l, arguments);
        if (c && s) {
          var v = c(f, "length");
          v.configurable &&
            s(f, "length", {
              value: 1 + d(0, m.length - (arguments.length - 1)),
            });
        }
        return f;
      };
      var p = function () {
        return i(r, a, arguments);
      };
      s ? s(t.exports, "apply", { value: p }) : (t.exports.apply = p);
    },
  }),
  Wx = Be({
    "node_modules/call-bind/callBound.js"(e, t) {
      var r = y1(),
        n = Ux(),
        a = n(r("String.prototype.indexOf"));
      t.exports = function (i, c) {
        var s = r(i, !!c);
        return typeof s == "function" && a(i, ".prototype.") > -1 ? n(s) : s;
      };
    },
  }),
  qx = Be({
    "node_modules/has-tostringtag/shams.js"(e, t) {
      var r = v1();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
  }),
  Gx = Be({
    "node_modules/is-regex/index.js"(e, t) {
      var r = Wx(),
        n = qx()(),
        a,
        l,
        i,
        c;
      n &&
        ((a = r("Object.prototype.hasOwnProperty")),
        (l = r("RegExp.prototype.exec")),
        (i = {}),
        (s = function () {
          throw i;
        }),
        (c = { toString: s, valueOf: s }),
        typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s));
      var s,
        d = r("Object.prototype.toString"),
        p = Object.getOwnPropertyDescriptor,
        h = "[object RegExp]";
      t.exports = n
        ? function (f) {
            if (!f || typeof f != "object") return !1;
            var v = p(f, "lastIndex"),
              g = v && a(v, "value");
            if (!g) return !1;
            try {
              l(f, c);
            } catch (E) {
              return E === i;
            }
          }
        : function (f) {
            return !f || (typeof f != "object" && typeof f != "function")
              ? !1
              : d(f) === h;
          };
    },
  }),
  Yx = Be({
    "node_modules/is-function/index.js"(e, t) {
      t.exports = n;
      var r = Object.prototype.toString;
      function n(a) {
        if (!a) return !1;
        var l = r.call(a);
        return (
          l === "[object Function]" ||
          (typeof a == "function" && l !== "[object RegExp]") ||
          (typeof window < "u" &&
            (a === window.setTimeout ||
              a === window.alert ||
              a === window.confirm ||
              a === window.prompt))
        );
      }
    },
  }),
  Kx = Be({
    "node_modules/is-symbol/index.js"(e, t) {
      var r = Object.prototype.toString,
        n = b1()();
      n
        ? ((a = Symbol.prototype.toString),
          (l = /^Symbol\(.*\)$/),
          (i = function (s) {
            return typeof s.valueOf() != "symbol" ? !1 : l.test(a.call(s));
          }),
          (t.exports = function (s) {
            if (typeof s == "symbol") return !0;
            if (r.call(s) !== "[object Symbol]") return !1;
            try {
              return i(s);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (s) {
            return !1;
          });
      var a, l, i;
    },
  }),
  Xx = ml(Gx()),
  Zx = ml(Yx()),
  Jx = ml(Kx());
function Qx(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var eE =
    typeof global == "object" && global && global.Object === Object && global,
  tE = eE,
  rE = typeof self == "object" && self && self.Object === Object && self,
  nE = tE || rE || Function("return this")(),
  bl = nE,
  aE = bl.Symbol,
  sr = aE,
  w1 = Object.prototype,
  oE = w1.hasOwnProperty,
  lE = w1.toString,
  Sr = sr ? sr.toStringTag : void 0;
function iE(e) {
  var t = oE.call(e, Sr),
    r = e[Sr];
  try {
    e[Sr] = void 0;
    var n = !0;
  } catch {}
  var a = lE.call(e);
  return n && (t ? (e[Sr] = r) : delete e[Sr]), a;
}
var sE = iE,
  cE = Object.prototype,
  dE = cE.toString;
function uE(e) {
  return dE.call(e);
}
var pE = uE,
  fE = "[object Null]",
  hE = "[object Undefined]",
  Zi = sr ? sr.toStringTag : void 0;
function gE(e) {
  return e == null
    ? e === void 0
      ? hE
      : fE
    : Zi && Zi in Object(e)
      ? sE(e)
      : pE(e);
}
var mE = gE,
  Ji = sr ? sr.prototype : void 0;
Ji && Ji.toString;
function vE(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var x1 = vE,
  bE = "[object AsyncFunction]",
  yE = "[object Function]",
  wE = "[object GeneratorFunction]",
  xE = "[object Proxy]";
function EE(e) {
  if (!x1(e)) return !1;
  var t = mE(e);
  return t == yE || t == wE || t == bE || t == xE;
}
var SE = EE,
  CE = bl["__core-js_shared__"],
  Ra = CE,
  Qi = (function () {
    var e = /[^.]+$/.exec((Ra && Ra.keys && Ra.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function RE(e) {
  return !!Qi && Qi in e;
}
var IE = RE,
  AE = Function.prototype,
  _E = AE.toString;
function kE(e) {
  if (e != null) {
    try {
      return _E.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var OE = kE,
  TE = /[\\^$.*+?()[\]{}|]/g,
  ME = /^\[object .+?Constructor\]$/,
  $E = Function.prototype,
  LE = Object.prototype,
  zE = $E.toString,
  BE = LE.hasOwnProperty,
  PE = RegExp(
    "^" +
      zE
        .call(BE)
        .replace(TE, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );
function HE(e) {
  if (!x1(e) || IE(e)) return !1;
  var t = SE(e) ? PE : ME;
  return t.test(OE(e));
}
var FE = HE;
function jE(e, t) {
  return e == null ? void 0 : e[t];
}
var NE = jE;
function DE(e, t) {
  var r = NE(e, t);
  return FE(r) ? r : void 0;
}
var E1 = DE;
function VE(e, t) {
  return e === t || (e !== e && t !== t);
}
var UE = VE,
  WE = E1(Object, "create"),
  jr = WE;
function qE() {
  (this.__data__ = jr ? jr(null) : {}), (this.size = 0);
}
var GE = qE;
function YE(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var KE = YE,
  XE = "__lodash_hash_undefined__",
  ZE = Object.prototype,
  JE = ZE.hasOwnProperty;
function QE(e) {
  var t = this.__data__;
  if (jr) {
    var r = t[e];
    return r === XE ? void 0 : r;
  }
  return JE.call(t, e) ? t[e] : void 0;
}
var eS = QE,
  tS = Object.prototype,
  rS = tS.hasOwnProperty;
function nS(e) {
  var t = this.__data__;
  return jr ? t[e] !== void 0 : rS.call(t, e);
}
var aS = nS,
  oS = "__lodash_hash_undefined__";
function lS(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = jr && t === void 0 ? oS : t),
    this
  );
}
var iS = lS;
function fr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fr.prototype.clear = GE;
fr.prototype.delete = KE;
fr.prototype.get = eS;
fr.prototype.has = aS;
fr.prototype.set = iS;
var e0 = fr;
function sS() {
  (this.__data__ = []), (this.size = 0);
}
var cS = sS;
function dS(e, t) {
  for (var r = e.length; r--; ) if (UE(e[r][0], t)) return r;
  return -1;
}
var Kn = dS,
  uS = Array.prototype,
  pS = uS.splice;
function fS(e) {
  var t = this.__data__,
    r = Kn(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : pS.call(t, r, 1), --this.size, !0;
}
var hS = fS;
function gS(e) {
  var t = this.__data__,
    r = Kn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var mS = gS;
function vS(e) {
  return Kn(this.__data__, e) > -1;
}
var bS = vS;
function yS(e, t) {
  var r = this.__data__,
    n = Kn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var wS = yS;
function hr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
hr.prototype.clear = cS;
hr.prototype.delete = hS;
hr.prototype.get = mS;
hr.prototype.has = bS;
hr.prototype.set = wS;
var xS = hr,
  ES = E1(bl, "Map"),
  SS = ES;
function CS() {
  (this.size = 0),
    (this.__data__ = {
      hash: new e0(),
      map: new (SS || xS)(),
      string: new e0(),
    });
}
var RS = CS;
function IS(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var AS = IS;
function _S(e, t) {
  var r = e.__data__;
  return AS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Xn = _S;
function kS(e) {
  var t = Xn(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var OS = kS;
function TS(e) {
  return Xn(this, e).get(e);
}
var MS = TS;
function $S(e) {
  return Xn(this, e).has(e);
}
var LS = $S;
function zS(e, t) {
  var r = Xn(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var BS = zS;
function gr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
gr.prototype.clear = RS;
gr.prototype.delete = OS;
gr.prototype.get = MS;
gr.prototype.has = LS;
gr.prototype.set = BS;
var S1 = gr,
  PS = "Expected a function";
function yl(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(PS);
  var r = function () {
    var n = arguments,
      a = t ? t.apply(this, n) : n[0],
      l = r.cache;
    if (l.has(a)) return l.get(a);
    var i = e.apply(this, n);
    return (r.cache = l.set(a, i) || l), i;
  };
  return (r.cache = new (yl.Cache || S1)()), r;
}
yl.Cache = S1;
var HS = yl,
  FS = 500;
function jS(e) {
  var t = HS(e, function (n) {
      return r.size === FS && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var NS = jS,
  DS =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  VS = /\\(\\)?/g;
NS(function (e) {
  var t = [];
  return (
    e.charCodeAt(0) === 46 && t.push(""),
    e.replace(DS, function (r, n, a, l) {
      t.push(a ? l.replace(VS, "$1") : n || r);
    }),
    t
  );
});
var US = Qx,
  WS = (e) => {
    let t = null,
      r = !1,
      n = !1,
      a = !1,
      l = "";
    if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
      for (let i = 0; i < e.length; i += 1)
        !t && !r && !n && !a
          ? e[i] === '"' || e[i] === "'" || e[i] === "`"
            ? (t = e[i])
            : e[i] === "/" && e[i + 1] === "*"
              ? (r = !0)
              : e[i] === "/" && e[i + 1] === "/"
                ? (n = !0)
                : e[i] === "/" && e[i + 1] !== "/" && (a = !0)
          : (t &&
              ((e[i] === t && e[i - 1] !== "\\") ||
                (e[i] ===
                  `
` &&
                  t !== "`")) &&
              (t = null),
            a &&
              ((e[i] === "/" && e[i - 1] !== "\\") ||
                e[i] ===
                  `
`) &&
              (a = !1),
            r && e[i - 1] === "/" && e[i - 2] === "*" && (r = !1),
            n &&
              e[i] ===
                `
` &&
              (n = !1)),
          !r && !n && (l += e[i]);
    else l = e;
    return l;
  },
  qS = Dt(1e4)((e) => WS(e).replace(/\n\s*/g, "").trim()),
  GS = function (t, r) {
    const n = r.slice(0, r.indexOf("{")),
      a = r.slice(r.indexOf("{"));
    if (n.includes("=>") || n.includes("function")) return r;
    let l = n;
    return (l = l.replace(t, "function")), l + a;
  },
  YS = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function C1(e) {
  if (!US(e)) return e;
  let t = e,
    r = !1;
  return (
    typeof Event < "u" && e instanceof Event && ((t = Nx(t)), (r = !0)),
    (t = Object.keys(t).reduce((n, a) => {
      try {
        t[a] && t[a].toJSON, (n[a] = t[a]);
      } catch {
        r = !0;
      }
      return n;
    }, {})),
    r ? t : e
  );
}
var KS = function (t) {
    let r, n, a, l;
    return function (c, s) {
      try {
        if (c === "")
          return (
            (l = []), (r = new Map([[s, "[]"]])), (n = new Map()), (a = []), s
          );
        const d = n.get(this) || this;
        for (; a.length && d !== a[0]; ) a.shift(), l.pop();
        if (typeof s == "boolean") return s;
        if (s === void 0) return t.allowUndefined ? "_undefined_" : void 0;
        if (s === null) return null;
        if (typeof s == "number")
          return s === -1 / 0
            ? "_-Infinity_"
            : s === 1 / 0
              ? "_Infinity_"
              : Number.isNaN(s)
                ? "_NaN_"
                : s;
        if (typeof s == "bigint") return `_bigint_${s.toString()}`;
        if (typeof s == "string")
          return YS.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
        if ((0, Xx.default)(s))
          return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
        if ((0, Zx.default)(s)) {
          if (!t.allowFunction) return;
          const { name: h } = s,
            m = s.toString();
          return m.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/,
          )
            ? `_function_${h}|${(() => {}).toString()}`
            : `_function_${h}|${qS(GS(c, m))}`;
        }
        if ((0, Jx.default)(s)) {
          if (!t.allowSymbol) return;
          const h = Symbol.keyFor(s);
          return h !== void 0
            ? `_gsymbol_${h}`
            : `_symbol_${s.toString().slice(7, -1)}`;
        }
        if (a.length >= t.maxDepth)
          return Array.isArray(s) ? `[Array(${s.length})]` : "[Object]";
        if (s === this) return `_duplicate_${JSON.stringify(l)}`;
        if (s instanceof Error && t.allowError)
          return {
            __isConvertedError__: !0,
            errorProperties: {
              ...(s.cause ? { cause: s.cause } : {}),
              ...s,
              name: s.name,
              message: s.message,
              stack: s.stack,
              "_constructor-name_": s.constructor.name,
            },
          };
        if (
          s.constructor &&
          s.constructor.name &&
          s.constructor.name !== "Object" &&
          !Array.isArray(s) &&
          !t.allowClass
        )
          return;
        const p = r.get(s);
        if (!p) {
          const h = Array.isArray(s) ? s : C1(s);
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== "Object" &&
            !Array.isArray(s) &&
            t.allowClass
          )
            try {
              Object.assign(h, { "_constructor-name_": s.constructor.name });
            } catch {}
          return (
            l.push(c),
            a.unshift(h),
            r.set(s, JSON.stringify(l)),
            s !== h && n.set(s, h),
            h
          );
        }
        return `_duplicate_${p}`;
      } catch {
        return;
      }
    };
  },
  XS = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowError: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0,
  },
  ZS = (e, t = {}) => {
    const r = { ...XS, ...t };
    return JSON.stringify(C1(e), KS(r), t.space);
  };
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 *//**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var R1 = { exports: {} },
  Ia,
  t0;
function JS() {
  return (
    t0 ||
      ((t0 = 1),
      (Ia = {
        tocSelector: ".js-toc",
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: ".js-toc-ignore",
        hasInnerContainers: !1,
        linkClass: "toc-link",
        extraLinkClasses: "",
        activeLinkClass: "is-active-link",
        listClass: "toc-list",
        extraListClasses: "",
        isCollapsedClass: "is-collapsed",
        collapsibleClass: "is-collapsible",
        listItemClass: "toc-list-item",
        activeListItemClass: "is-active-li",
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: "is-position-fixed",
        fixedSidebarOffset: "auto",
        includeHtml: !1,
        includeTitleTags: !1,
        onClick: function (e) {},
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1,
        headingLabelCallback: !1,
        ignoreHiddenElements: !1,
        headingObjectCallback: null,
        basePath: "",
        disableTocScrollSync: !1,
        tocScrollOffset: 0,
      })),
    Ia
  );
}
var Aa, r0;
function QS() {
  return (
    r0 ||
      ((r0 = 1),
      (Aa = function (e) {
        var t = [].forEach,
          r = [].some,
          n = document.body,
          a,
          l = !0,
          i = " ";
        function c(y, b) {
          var w = b.appendChild(d(y));
          if (y.children.length) {
            var S = p(y.isCollapsed);
            y.children.forEach(function (C) {
              c(C, S);
            }),
              w.appendChild(S);
          }
        }
        function s(y, b) {
          var w = !1,
            S = p(w);
          if (
            (b.forEach(function (C) {
              c(C, S);
            }),
            (a = y || a),
            a !== null)
          )
            return (
              a.firstChild && a.removeChild(a.firstChild),
              b.length === 0 ? a : a.appendChild(S)
            );
        }
        function d(y) {
          var b = document.createElement("li"),
            w = document.createElement("a");
          return (
            e.listItemClass && b.setAttribute("class", e.listItemClass),
            e.onClick && (w.onclick = e.onClick),
            e.includeTitleTags && w.setAttribute("title", y.textContent),
            e.includeHtml && y.childNodes.length
              ? t.call(y.childNodes, function (S) {
                  w.appendChild(S.cloneNode(!0));
                })
              : (w.textContent = y.textContent),
            w.setAttribute("href", e.basePath + "#" + y.id),
            w.setAttribute(
              "class",
              e.linkClass +
                i +
                "node-name--" +
                y.nodeName +
                i +
                e.extraLinkClasses,
            ),
            b.appendChild(w),
            b
          );
        }
        function p(y) {
          var b = e.orderedList ? "ol" : "ul",
            w = document.createElement(b),
            S = e.listClass + i + e.extraListClasses;
          return (
            y &&
              ((S = S + i + e.collapsibleClass),
              (S = S + i + e.isCollapsedClass)),
            w.setAttribute("class", S),
            w
          );
        }
        function h() {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var y;
            y = document.querySelector(e.scrollContainer).scrollTop;
          } else y = document.documentElement.scrollTop || n.scrollTop;
          var b = document.querySelector(e.positionFixedSelector);
          e.fixedSidebarOffset === "auto" &&
            (e.fixedSidebarOffset = a.offsetTop),
            y > e.fixedSidebarOffset
              ? b.className.indexOf(e.positionFixedClass) === -1 &&
                (b.className += i + e.positionFixedClass)
              : (b.className = b.className.replace(
                  i + e.positionFixedClass,
                  "",
                ));
        }
        function m(y) {
          var b = 0;
          return (
            y !== null &&
              ((b = y.offsetTop),
              e.hasInnerContainers && (b += m(y.offsetParent))),
            b
          );
        }
        function f(y, b) {
          return y && y.className !== b && (y.className = b), y;
        }
        function v(y) {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var b;
            b = document.querySelector(e.scrollContainer).scrollTop;
          } else b = document.documentElement.scrollTop || n.scrollTop;
          e.positionFixedSelector && h();
          var w = y,
            S;
          if (l && a !== null && w.length > 0) {
            r.call(w, function (T, M) {
              if (m(T) > b + e.headingsOffset + 10) {
                var F = M === 0 ? M : M - 1;
                return (S = w[F]), !0;
              } else if (M === w.length - 1) return (S = w[w.length - 1]), !0;
            });
            var C = a.querySelector("." + e.activeLinkClass),
              R = a.querySelector(
                "." +
                  e.linkClass +
                  ".node-name--" +
                  S.nodeName +
                  '[href="' +
                  e.basePath +
                  "#" +
                  S.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") +
                  '"]',
              );
            if (C === R) return;
            var I = a.querySelectorAll("." + e.linkClass);
            t.call(I, function (T) {
              f(T, T.className.replace(i + e.activeLinkClass, ""));
            });
            var _ = a.querySelectorAll("." + e.listItemClass);
            t.call(_, function (T) {
              f(T, T.className.replace(i + e.activeListItemClass, ""));
            }),
              R &&
                R.className.indexOf(e.activeLinkClass) === -1 &&
                (R.className += i + e.activeLinkClass);
            var k = R && R.parentNode;
            k &&
              k.className.indexOf(e.activeListItemClass) === -1 &&
              (k.className += i + e.activeListItemClass);
            var O = a.querySelectorAll(
              "." + e.listClass + "." + e.collapsibleClass,
            );
            t.call(O, function (T) {
              T.className.indexOf(e.isCollapsedClass) === -1 &&
                (T.className += i + e.isCollapsedClass);
            }),
              R &&
                R.nextSibling &&
                R.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
                f(
                  R.nextSibling,
                  R.nextSibling.className.replace(i + e.isCollapsedClass, ""),
                ),
              g(R && R.parentNode.parentNode);
          }
        }
        function g(y) {
          return y &&
            y.className.indexOf(e.collapsibleClass) !== -1 &&
            y.className.indexOf(e.isCollapsedClass) !== -1
            ? (f(y, y.className.replace(i + e.isCollapsedClass, "")),
              g(y.parentNode.parentNode))
            : y;
        }
        function E(y) {
          var b = y.target || y.srcElement;
          typeof b.className != "string" ||
            b.className.indexOf(e.linkClass) === -1 ||
            (l = !1);
        }
        function x() {
          l = !0;
        }
        return {
          enableTocAnimation: x,
          disableTocAnimation: E,
          render: s,
          updateToc: v,
        };
      })),
    Aa
  );
}
var _a, n0;
function eC() {
  return (
    n0 ||
      ((n0 = 1),
      (_a = function (t) {
        var r = [].reduce;
        function n(p) {
          return p[p.length - 1];
        }
        function a(p) {
          return +p.nodeName.toUpperCase().replace("H", "");
        }
        function l(p) {
          try {
            return (
              p instanceof window.HTMLElement ||
              p instanceof window.parent.HTMLElement
            );
          } catch {
            return p instanceof window.HTMLElement;
          }
        }
        function i(p) {
          if (!l(p)) return p;
          if (t.ignoreHiddenElements && (!p.offsetHeight || !p.offsetParent))
            return null;
          const h =
            p.getAttribute("data-heading-label") ||
            (t.headingLabelCallback
              ? String(t.headingLabelCallback(p.innerText))
              : (p.innerText || p.textContent).trim());
          var m = {
            id: p.id,
            children: [],
            nodeName: p.nodeName,
            headingLevel: a(p),
            textContent: h,
          };
          return (
            t.includeHtml && (m.childNodes = p.childNodes),
            t.headingObjectCallback ? t.headingObjectCallback(m, p) : m
          );
        }
        function c(p, h) {
          for (
            var m = i(p),
              f = m.headingLevel,
              v = h,
              g = n(v),
              E = g ? g.headingLevel : 0,
              x = f - E;
            x > 0 && ((g = n(v)), !(g && f === g.headingLevel));

          )
            g && g.children !== void 0 && (v = g.children), x--;
          return f >= t.collapseDepth && (m.isCollapsed = !0), v.push(m), v;
        }
        function s(p, h) {
          var m = h;
          t.ignoreSelector &&
            (m = h.split(",").map(function (v) {
              return v.trim() + ":not(" + t.ignoreSelector + ")";
            }));
          try {
            return p.querySelectorAll(m);
          } catch {
            return console.warn("Headers not found with selector: " + m), null;
          }
        }
        function d(p) {
          return r.call(
            p,
            function (m, f) {
              var v = i(f);
              return v && c(v, m.nest), m;
            },
            { nest: [] },
          );
        }
        return { nestHeadingsArray: d, selectHeadings: s };
      })),
    _a
  );
}
var ka, a0;
function tC() {
  if (a0) return ka;
  a0 = 1;
  const e = 30;
  return (
    (ka = function (r) {
      var n = r.tocElement || document.querySelector(r.tocSelector);
      if (n && n.scrollHeight > n.clientHeight) {
        var a = n.querySelector("." + r.activeListItemClass);
        if (a) {
          var l = n.scrollTop,
            i = l + n.clientHeight,
            c = a.offsetTop,
            s = c + a.clientHeight;
          c < l + r.tocScrollOffset
            ? (n.scrollTop -= l - c + r.tocScrollOffset)
            : s > i - r.tocScrollOffset - e &&
              (n.scrollTop += s - i + r.tocScrollOffset + 2 * e);
        }
      }
    }),
    ka
  );
}
var Oa = {},
  o0;
function rC() {
  if (o0) return Oa;
  (o0 = 1), (Oa.initSmoothScrolling = e);
  function e(r) {
    var n = r.duration,
      a = r.offset,
      l = location.hash ? s(location.href) : location.href;
    i();
    function i() {
      document.body.addEventListener("click", p, !1);
      function p(h) {
        !c(h.target) ||
          h.target.className.indexOf("no-smooth-scroll") > -1 ||
          (h.target.href.charAt(h.target.href.length - 2) === "#" &&
            h.target.href.charAt(h.target.href.length - 1) === "!") ||
          h.target.className.indexOf(r.linkClass) === -1 ||
          t(h.target.hash, {
            duration: n,
            offset: a,
            callback: function () {
              d(h.target.hash);
            },
          });
      }
    }
    function c(p) {
      return (
        p.tagName.toLowerCase() === "a" &&
        (p.hash.length > 0 || p.href.charAt(p.href.length - 1) === "#") &&
        (s(p.href) === l || s(p.href) + "#" === l)
      );
    }
    function s(p) {
      return p.slice(0, p.lastIndexOf("#"));
    }
    function d(p) {
      var h = document.getElementById(p.substring(1));
      h &&
        (/^(?:a|select|input|button|textarea)$/i.test(h.tagName) ||
          (h.tabIndex = -1),
        h.focus());
    }
  }
  function t(r, n) {
    var a = window.pageYOffset,
      l = {
        duration: n.duration,
        offset: n.offset || 0,
        callback: n.callback,
        easing: n.easing || f,
      },
      i =
        document.querySelector(
          '[id="' + decodeURI(r).split("#").join("") + '"]',
        ) || document.querySelector('[id="' + r.split("#").join("") + '"]'),
      c =
        typeof r == "string"
          ? l.offset +
            (r
              ? (i && i.getBoundingClientRect().top) || 0
              : -(
                  document.documentElement.scrollTop || document.body.scrollTop
                ))
          : r,
      s = typeof l.duration == "function" ? l.duration(c) : l.duration,
      d,
      p;
    requestAnimationFrame(function (v) {
      (d = v), h(v);
    });
    function h(v) {
      (p = v - d),
        window.scrollTo(0, l.easing(p, a, c, s)),
        p < s ? requestAnimationFrame(h) : m();
    }
    function m() {
      window.scrollTo(0, a + c),
        typeof l.callback == "function" && l.callback();
    }
    function f(v, g, E, x) {
      return (
        (v /= x / 2),
        v < 1 ? (E / 2) * v * v + g : (v--, (-E / 2) * (v * (v - 2) - 1) + g)
      );
    }
  }
  return Oa;
}
(function (e, t) {
  (function (r, n) {
    e.exports = n(r);
  })(typeof ta < "u" ? ta : window || ta, function (r) {
    var n = JS(),
      a = {},
      l = {},
      i = QS(),
      c = eC(),
      s = tC(),
      d,
      p,
      h =
        !!r &&
        !!r.document &&
        !!r.document.querySelector &&
        !!r.addEventListener;
    if (typeof window > "u" && !h) return;
    var m,
      f = Object.prototype.hasOwnProperty;
    function v() {
      for (var y = {}, b = 0; b < arguments.length; b++) {
        var w = arguments[b];
        for (var S in w) f.call(w, S) && (y[S] = w[S]);
      }
      return y;
    }
    function g(y, b, w) {
      b || (b = 250);
      var S, C;
      return function () {
        var R = w || this,
          I = +new Date(),
          _ = arguments;
        S && I < S + b
          ? (clearTimeout(C),
            (C = setTimeout(function () {
              (S = I), y.apply(R, _);
            }, b)))
          : ((S = I), y.apply(R, _));
      };
    }
    function E(y) {
      try {
        return y.contentElement || document.querySelector(y.contentSelector);
      } catch {
        return (
          console.warn("Contents element not found: " + y.contentSelector), null
        );
      }
    }
    function x(y) {
      try {
        return y.tocElement || document.querySelector(y.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + y.tocSelector), null;
      }
    }
    return (
      (l.destroy = function () {
        var y = x(a);
        y !== null &&
          (a.skipRendering || (y && (y.innerHTML = "")),
          a.scrollContainer && document.querySelector(a.scrollContainer)
            ? (document
                .querySelector(a.scrollContainer)
                .removeEventListener("scroll", this._scrollListener, !1),
              document
                .querySelector(a.scrollContainer)
                .removeEventListener("resize", this._scrollListener, !1),
              d &&
                document
                  .querySelector(a.scrollContainer)
                  .removeEventListener("click", this._clickListener, !1))
            : (document.removeEventListener("scroll", this._scrollListener, !1),
              document.removeEventListener("resize", this._scrollListener, !1),
              d &&
                document.removeEventListener(
                  "click",
                  this._clickListener,
                  !1,
                )));
      }),
      (l.init = function (y) {
        if (h) {
          (a = v(n, y || {})),
            (this.options = a),
            (this.state = {}),
            a.scrollSmooth &&
              ((a.duration = a.scrollSmoothDuration),
              (a.offset = a.scrollSmoothOffset),
              (l.scrollSmooth = rC().initSmoothScrolling(a))),
            (d = i(a)),
            (p = c(a)),
            (this._buildHtml = d),
            (this._parseContent = p),
            (this._headingsArray = m),
            l.destroy();
          var b = E(a);
          if (b !== null) {
            var w = x(a);
            if (
              w !== null &&
              ((m = p.selectHeadings(b, a.headingSelector)), m !== null)
            ) {
              var S = p.nestHeadingsArray(m),
                C = S.nest;
              if (!a.skipRendering) d.render(w, C);
              else return this;
              (this._scrollListener = g(function (I) {
                d.updateToc(m), !a.disableTocScrollSync && s(a);
                var _ =
                  I &&
                  I.target &&
                  I.target.scrollingElement &&
                  I.target.scrollingElement.scrollTop === 0;
                ((I && (I.eventPhase === 0 || I.currentTarget === null)) ||
                  _) &&
                  (d.updateToc(m),
                  a.scrollEndCallback && a.scrollEndCallback(I));
              }, a.throttleTimeout)),
                this._scrollListener(),
                a.scrollContainer && document.querySelector(a.scrollContainer)
                  ? (document
                      .querySelector(a.scrollContainer)
                      .addEventListener("scroll", this._scrollListener, !1),
                    document
                      .querySelector(a.scrollContainer)
                      .addEventListener("resize", this._scrollListener, !1))
                  : (document.addEventListener(
                      "scroll",
                      this._scrollListener,
                      !1,
                    ),
                    document.addEventListener(
                      "resize",
                      this._scrollListener,
                      !1,
                    ));
              var R = null;
              return (
                (this._clickListener = g(function (I) {
                  a.scrollSmooth && d.disableTocAnimation(I),
                    d.updateToc(m),
                    R && clearTimeout(R),
                    (R = setTimeout(function () {
                      d.enableTocAnimation();
                    }, a.scrollSmoothDuration));
                }, a.throttleTimeout)),
                a.scrollContainer && document.querySelector(a.scrollContainer)
                  ? document
                      .querySelector(a.scrollContainer)
                      .addEventListener("click", this._clickListener, !1)
                  : document.addEventListener("click", this._clickListener, !1),
                this
              );
            }
          }
        }
      }),
      (l.refresh = function (y) {
        l.destroy(), l.init(y || this.options);
      }),
      (r.tocbot = l),
      l
    );
  });
})(R1);
var l0 = R1.exports;
const { global: Te } = __STORYBOOK_MODULE_GLOBAL__,
  { once: nC, logger: wl } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    filterArgTypes: i0,
    composeConfigs: kA,
    Preview: OA,
    DocsContext: TA,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  {
    GLOBALS_UPDATED: s0,
    STORY_ARGS_UPDATED: c0,
    UPDATE_STORY_ARGS: aC,
    RESET_STORY_ARGS: oC,
    NAVIGATE_URL: lC,
  } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var iC = A.div(re, ({ theme: e }) => ({
    backgroundColor:
      e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
    borderRadius: e.appBorderRadius,
    border: `1px dashed ${e.appBorderColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: "25px 0 40px",
    color: ee(0.3, e.color.defaultText),
    fontSize: e.typography.size.s2,
  })),
  I1 = (e) =>
    u.createElement(iC, { ...e, className: "docblock-emptyblock sb-unstyled" }),
  sC = A(Wn)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: "19px",
    margin: "25px 0 40px",
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    "pre.prismjs": { padding: 20, background: "inherit" },
  })),
  cC = A.div(({ theme: e }) => ({
    background: e.background.content,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.appBorderColor}`,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    margin: "25px 0 40px",
    padding: "20px 20px 20px 22px",
  })),
  an = A.div(({ theme: e }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: "60%",
    [`&:first-child${Da}`]: { margin: 0 },
  })),
  dC = () =>
    u.createElement(
      cC,
      null,
      u.createElement(an, null),
      u.createElement(an, { style: { width: "80%" } }),
      u.createElement(an, { style: { width: "30%" } }),
      u.createElement(an, { style: { width: "80%" } }),
    ),
  xl = ({
    isLoading: e,
    error: t,
    language: r,
    code: n,
    dark: a,
    format: l,
    ...i
  }) => {
    let { typography: c } = es();
    if (e) return u.createElement(dC, null);
    if (t) return u.createElement(I1, null, t);
    let s = u.createElement(
      sC,
      {
        bordered: !0,
        copyable: !0,
        format: l,
        language: r,
        className: "docblock-source sb-unstyled",
        ...i,
      },
      n,
    );
    if (typeof a > "u") return s;
    let d = a ? Ha.dark : Ha.light;
    return u.createElement(
      ts,
      { theme: Na({ ...d, fontCode: c.fonts.mono, fontBase: c.fonts.base }) },
      s,
    );
  };
xl.defaultProps = { format: !1 };
var le = (e) =>
    `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
  El = 600,
  uC = A.h1(re, ({ theme: e }) => ({
    color: e.color.defaultText,
    fontSize: e.typography.size.m3,
    fontWeight: e.typography.weight.bold,
    lineHeight: "32px",
    [`@media (min-width: ${El}px)`]: {
      fontSize: e.typography.size.l1,
      lineHeight: "36px",
      marginBottom: "16px",
    },
  })),
  pC = A.h2(re, ({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s3,
    lineHeight: "20px",
    borderBottom: "none",
    marginBottom: 15,
    [`@media (min-width: ${El}px)`]: {
      fontSize: e.typography.size.m1,
      lineHeight: "28px",
      marginBottom: 24,
    },
    color: ee(0.25, e.color.defaultText),
  })),
  fC = A.div(({ theme: e }) => {
    let t = {
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s3,
        margin: 0,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        WebkitOverflowScrolling: "touch",
      },
      r = {
        margin: "20px 0 8px",
        padding: 0,
        cursor: "text",
        position: "relative",
        color: e.color.defaultText,
        "&:first-of-type": { marginTop: 0, paddingTop: 0 },
        "&:hover a.anchor": { textDecoration: "none" },
        "& code": { fontSize: "inherit" },
      },
      n = {
        lineHeight: 1,
        margin: "0 2px",
        padding: "3px 5px",
        whiteSpace: "nowrap",
        borderRadius: 3,
        fontSize: e.typography.size.s2 - 1,
        border:
          e.base === "light"
            ? `1px solid ${e.color.mediumlight}`
            : `1px solid ${e.color.darker}`,
        color:
          e.base === "light"
            ? ee(0.1, e.color.defaultText)
            : ee(0.3, e.color.defaultText),
        backgroundColor: e.base === "light" ? e.color.lighter : e.color.border,
      };
    return {
      maxWidth: 1e3,
      width: "100%",
      [le("a")]: {
        ...t,
        fontSize: "inherit",
        lineHeight: "24px",
        color: e.color.secondary,
        textDecoration: "none",
        "&.absent": { color: "#cc0000" },
        "&.anchor": {
          display: "block",
          paddingLeft: 30,
          marginLeft: -30,
          cursor: "pointer",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
        },
      },
      [le("blockquote")]: {
        ...t,
        margin: "16px 0",
        borderLeft: `4px solid ${e.color.medium}`,
        padding: "0 15px",
        color: e.color.dark,
        "& > :first-of-type": { marginTop: 0 },
        "& > :last-child": { marginBottom: 0 },
      },
      [le("div")]: t,
      [le("dl")]: {
        ...t,
        margin: "16px 0",
        padding: 0,
        "& dt": {
          fontSize: "14px",
          fontWeight: "bold",
          fontStyle: "italic",
          padding: 0,
          margin: "16px 0 4px",
        },
        "& dt:first-of-type": { padding: 0 },
        "& dt > :first-of-type": { marginTop: 0 },
        "& dt > :last-child": { marginBottom: 0 },
        "& dd": { margin: "0 0 16px", padding: "0 15px" },
        "& dd > :first-of-type": { marginTop: 0 },
        "& dd > :last-child": { marginBottom: 0 },
      },
      [le("h1")]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.l1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [le("h2")]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m2}px`,
        paddingBottom: 4,
        borderBottom: `1px solid ${e.appBorderColor}`,
      },
      [le("h3")]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [le("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
      [le("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
      [le("h6")]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.s2}px`,
        color: e.color.dark,
      },
      [le("hr")]: {
        border: "0 none",
        borderTop: `1px solid ${e.appBorderColor}`,
        height: 4,
        padding: 0,
      },
      [le("img")]: { maxWidth: "100%" },
      [le("li")]: {
        ...t,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        lineHeight: "24px",
        "& + li": { marginTop: ".25em" },
        "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
        "& code": n,
      },
      [le("ol")]: {
        ...t,
        margin: "16px 0",
        paddingLeft: 30,
        "& :first-of-type": { marginTop: 0 },
        "& :last-child": { marginBottom: 0 },
      },
      [le("p")]: {
        ...t,
        margin: "16px 0",
        fontSize: e.typography.size.s2,
        lineHeight: "24px",
        color: e.color.defaultText,
        "& code": n,
      },
      [le("pre")]: {
        ...t,
        fontFamily: e.typography.fonts.mono,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        lineHeight: "18px",
        padding: "11px 1rem",
        whiteSpace: "pre-wrap",
        color: "inherit",
        borderRadius: 3,
        margin: "1rem 0",
        "&:not(.prismjs)": {
          background: "transparent",
          border: "none",
          borderRadius: 0,
          padding: 0,
          margin: 0,
        },
        "& pre, &.prismjs": {
          padding: 15,
          margin: 0,
          whiteSpace: "pre-wrap",
          color: "inherit",
          fontSize: "13px",
          lineHeight: "19px",
          code: { color: "inherit", fontSize: "inherit" },
        },
        "& code": { whiteSpace: "pre" },
        "& code, & tt": { border: "none" },
      },
      [le("span")]: {
        ...t,
        "&.frame": {
          display: "block",
          overflow: "hidden",
          "& > span": {
            border: `1px solid ${e.color.medium}`,
            display: "block",
            float: "left",
            overflow: "hidden",
            margin: "13px 0 0",
            padding: 7,
            width: "auto",
          },
          "& span img": { display: "block", float: "left" },
          "& span span": {
            clear: "both",
            color: e.color.darkest,
            display: "block",
            padding: "5px 0 0",
          },
        },
        "&.align-center": {
          display: "block",
          overflow: "hidden",
          clear: "both",
          "& > span": {
            display: "block",
            overflow: "hidden",
            margin: "13px auto 0",
            textAlign: "center",
          },
          "& span img": { margin: "0 auto", textAlign: "center" },
        },
        "&.align-right": {
          display: "block",
          overflow: "hidden",
          clear: "both",
          "& > span": {
            display: "block",
            overflow: "hidden",
            margin: "13px 0 0",
            textAlign: "right",
          },
          "& span img": { margin: 0, textAlign: "right" },
        },
        "&.float-left": {
          display: "block",
          marginRight: 13,
          overflow: "hidden",
          float: "left",
          "& span": { margin: "13px 0 0" },
        },
        "&.float-right": {
          display: "block",
          marginLeft: 13,
          overflow: "hidden",
          float: "right",
          "& > span": {
            display: "block",
            overflow: "hidden",
            margin: "13px auto 0",
            textAlign: "right",
          },
        },
      },
      [le("table")]: {
        ...t,
        margin: "16px 0",
        fontSize: e.typography.size.s2,
        lineHeight: "24px",
        padding: 0,
        borderCollapse: "collapse",
        "& tr": {
          borderTop: `1px solid ${e.appBorderColor}`,
          backgroundColor: e.appContentBg,
          margin: 0,
          padding: 0,
        },
        "& tr:nth-of-type(2n)": {
          backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter,
        },
        "& tr th": {
          fontWeight: "bold",
          color: e.color.defaultText,
          border: `1px solid ${e.appBorderColor}`,
          margin: 0,
          padding: "6px 13px",
        },
        "& tr td": {
          border: `1px solid ${e.appBorderColor}`,
          color: e.color.defaultText,
          margin: 0,
          padding: "6px 13px",
        },
        "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
        "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
      },
      [le("ul")]: {
        ...t,
        margin: "16px 0",
        paddingLeft: 30,
        "& :first-of-type": { marginTop: 0 },
        "& :last-child": { marginBottom: 0 },
        listStyle: "disc",
      },
    };
  }),
  hC = A.div(({ theme: e }) => ({
    background: e.background.content,
    display: "flex",
    justifyContent: "center",
    padding: "4rem 20px",
    minHeight: "100vh",
    boxSizing: "border-box",
    gap: "3rem",
    [`@media (min-width: ${El}px)`]: {},
  })),
  gC = ({ children: e, toc: t }) =>
    u.createElement(
      hC,
      { className: "sbdocs sbdocs-wrapper" },
      u.createElement(fC, { className: "sbdocs sbdocs-content" }, e),
      t,
    ),
  Zn = (e) => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    border: `1px solid ${e.appBorderColor}`,
  }),
  mC = A(qn)({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    transition: "transform .2s linear",
  }),
  vC = A.div({ display: "flex", alignItems: "center", gap: 4 }),
  bC = A.div(({ theme: e }) => ({
    width: 14,
    height: 14,
    borderRadius: 2,
    margin: "0 7px",
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  })),
  yC = ({
    isLoading: e,
    storyId: t,
    baseUrl: r,
    zoom: n,
    resetZoom: a,
    ...l
  }) =>
    u.createElement(
      mC,
      { ...l },
      u.createElement(
        vC,
        { key: "left" },
        e
          ? [1, 2, 3].map((i) => u.createElement(bC, { key: i }))
          : u.createElement(
              u.Fragment,
              null,
              u.createElement(
                Ht,
                {
                  key: "zoomin",
                  onClick: (i) => {
                    i.preventDefault(), n(0.8);
                  },
                  title: "Zoom in",
                },
                u.createElement(Us, null),
              ),
              u.createElement(
                Ht,
                {
                  key: "zoomout",
                  onClick: (i) => {
                    i.preventDefault(), n(1.25);
                  },
                  title: "Zoom out",
                },
                u.createElement(Ws, null),
              ),
              u.createElement(
                Ht,
                {
                  key: "zoomreset",
                  onClick: (i) => {
                    i.preventDefault(), a();
                  },
                  title: "Reset zoom",
                },
                u.createElement(qs, null),
              ),
            ),
      ),
    ),
  A1 = o.createContext({ scale: 1 }),
  { window: wC } = Te,
  xC = class extends o.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { id: e } = this.props;
      this.iframe = wC.document.getElementById(e);
    }
    shouldComponentUpdate(e) {
      let { scale: t } = e;
      return (
        t !== this.props.scale &&
          this.setIframeBodyStyle({
            width: `${t * 100}%`,
            height: `${t * 100}%`,
            transform: `scale(${1 / t})`,
            transformOrigin: "top left",
          }),
        !1
      );
    }
    setIframeBodyStyle(e) {
      return Object.assign(this.iframe.contentDocument.body.style, e);
    }
    render() {
      let {
        id: e,
        title: t,
        src: r,
        allowFullScreen: n,
        scale: a,
        ...l
      } = this.props;
      return u.createElement("iframe", {
        id: e,
        title: t,
        src: r,
        ...(n ? { allow: "fullscreen" } : {}),
        loading: "lazy",
        ...l,
      });
    }
  },
  { PREVIEW_URL: EC } = Te,
  SC = EC || "iframe.html",
  lo = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`,
  CC = (e) => {
    let t = o.useRef(),
      [r, n] = o.useState(!0),
      [a, l] = o.useState(),
      {
        story: i,
        height: c,
        autoplay: s,
        forceInitialArgs: d,
        renderStoryToElement: p,
      } = e;
    return (
      o.useEffect(() => {
        if (!(i && t.current)) return () => {};
        let h = t.current,
          m = p(
            i,
            h,
            {
              showMain: () => {},
              showError: ({ title: f, description: v }) =>
                l(new Error(`${f} - ${v}`)),
              showException: (f) => l(f),
            },
            { autoplay: s, forceInitialArgs: d },
          );
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => m());
          }
        );
      }, [s, p, i]),
      a
        ? u.createElement("pre", null, u.createElement(_c, { error: a }))
        : u.createElement(
            u.Fragment,
            null,
            c
              ? u.createElement(
                  "style",
                  null,
                  `#${lo(e)} { min-height: ${c}; transform: translateZ(0); overflow: auto }`,
                )
              : null,
            r && u.createElement(_1, null),
            u.createElement("div", {
              ref: t,
              id: `${lo(e)}-inner`,
              "data-name": i.name,
            }),
          )
    );
  },
  RC = ({ story: e, height: t = "500px" }) =>
    u.createElement(
      "div",
      { style: { width: "100%", height: t } },
      u.createElement(A1.Consumer, null, ({ scale: r }) =>
        u.createElement(xC, {
          key: "iframe",
          id: `iframe--${e.id}`,
          title: e.name,
          src: Hc(SC, e.id, { viewMode: "story" }),
          allowFullScreen: !0,
          scale: r,
          style: { width: "100%", height: "100%", border: "0 none" },
        }),
      ),
    ),
  IC = (e) => {
    let { inline: t } = e;
    return u.createElement(
      "div",
      {
        id: lo(e),
        className: "sb-story sb-unstyled",
        "data-story-block": "true",
      },
      t ? u.createElement(CC, { ...e }) : u.createElement(RC, { ...e }),
    );
  },
  _1 = () => u.createElement(Pc, null),
  AC = A.div(
    ({ isColumn: e, columns: t, layout: r }) => ({
      display: e || !t ? "block" : "flex",
      position: "relative",
      flexWrap: "wrap",
      overflow: "auto",
      flexDirection: e ? "column" : "row",
      "& .innerZoomElementWrapper > *": e
        ? {
            width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
            display: "block",
          }
        : {
            maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
            display: "inline-block",
          },
    }),
    ({ layout: e = "padded" }) =>
      e === "centered" || e === "padded"
        ? {
            padding: "30px 20px",
            "& .innerZoomElementWrapper > *": {
              width: "auto",
              border: "10px solid transparent!important",
            },
          }
        : {},
    ({ layout: e = "padded" }) =>
      e === "centered"
        ? {
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "center",
            alignItems: "center",
          }
        : {},
    ({ columns: e }) =>
      e && e > 1
        ? {
            ".innerZoomElementWrapper > *": {
              minWidth: `calc(100% / ${e} - 20px)`,
            },
          }
        : {},
  ),
  d0 = A(xl)(({ theme: e }) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: "none",
    background:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.85)"
        : Ye(0.05, e.background.content),
    color: e.color.lightest,
    button: {
      background:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.85)"
          : Ye(0.05, e.background.content),
    },
  })),
  _C = A.div(
    ({ theme: e, withSource: t, isExpanded: r }) => ({
      position: "relative",
      overflow: "hidden",
      margin: "25px 0 40px",
      ...Zn(e),
      borderBottomLeftRadius: t && r && 0,
      borderBottomRightRadius: t && r && 0,
      borderBottomWidth: r && 0,
      "h3 + &": { marginTop: "16px" },
    }),
    ({ withToolbar: e }) => e && { paddingTop: 40 },
  ),
  kC = (e, t, r) => {
    switch (!0) {
      case !!(e && e.error):
        return {
          source: null,
          actionItem: {
            title: "No code available",
            className: "docblock-code-toggle docblock-code-toggle--disabled",
            disabled: !0,
            onClick: () => r(!1),
          },
        };
      case t:
        return {
          source: u.createElement(d0, { ...e, dark: !0 }),
          actionItem: {
            title: "Hide code",
            className: "docblock-code-toggle docblock-code-toggle--expanded",
            onClick: () => r(!1),
          },
        };
      default:
        return {
          source: u.createElement(d0, { ...e, dark: !0 }),
          actionItem: {
            title: "Show code",
            className: "docblock-code-toggle",
            onClick: () => r(!0),
          },
        };
    }
  };
function OC(e) {
  if (o.Children.count(e) === 1) {
    let t = e;
    if (t.props) return t.props.id;
  }
  return null;
}
var TC = A(yC)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }),
  MC = A.div({ overflow: "hidden", position: "relative" }),
  k1 = ({
    isLoading: e,
    isColumn: t,
    columns: r,
    children: n,
    withSource: a,
    withToolbar: l = !1,
    isExpanded: i = !1,
    additionalActions: c,
    className: s,
    layout: d = "padded",
    ...p
  }) => {
    let [h, m] = o.useState(i),
      { source: f, actionItem: v } = kC(a, h, m),
      [g, E] = o.useState(1),
      x = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]),
      y = a ? [v] : [],
      [b, w] = o.useState(c ? [...c] : []),
      S = [...y, ...b],
      { window: C } = Te,
      R = o.useCallback(async (_) => {
        let { createCopyToClipboardFunction: k } = await Ft(
          () => Promise.resolve().then(() => Tb),
          void 0,
          import.meta.url,
        );
        k();
      }, []),
      I = (_) => {
        let k = C.getSelection();
        (k && k.type === "Range") ||
          (_.preventDefault(),
          b.filter((O) => O.title === "Copied").length === 0 &&
            R(f.props.code).then(() => {
              w([...b, { title: "Copied", onClick: () => {} }]),
                C.setTimeout(
                  () => w(b.filter((O) => O.title !== "Copied")),
                  1500,
                );
            }));
      };
    return u.createElement(
      _C,
      { withSource: a, withToolbar: l, ...p, className: x.join(" ") },
      l &&
        u.createElement(TC, {
          isLoading: e,
          border: !0,
          zoom: (_) => E(g * _),
          resetZoom: () => E(1),
          storyId: OC(n),
          baseUrl: "./iframe.html",
        }),
      u.createElement(
        A1.Provider,
        { value: { scale: g } },
        u.createElement(
          MC,
          { className: "docs-story", onCopyCapture: a && I },
          u.createElement(
            AC,
            { isColumn: t || !Array.isArray(n), columns: r, layout: d },
            u.createElement(
              Ac.Element,
              { scale: g },
              Array.isArray(n)
                ? n.map((_, k) => u.createElement("div", { key: k }, _))
                : u.createElement("div", null, n),
            ),
          ),
          u.createElement(Lo, { actionItems: S }),
        ),
      ),
      a && h && f,
    );
  };
A(k1)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }));
var $C = A.table(({ theme: e }) => ({
    "&&": {
      borderCollapse: "collapse",
      borderSpacing: 0,
      border: "none",
      tr: { border: "none !important", background: "none" },
      "td, th": { padding: 0, border: "none", width: "auto!important" },
      marginTop: 0,
      marginBottom: 0,
      "th:first-of-type, td:first-of-type": { paddingLeft: 0 },
      "th:last-of-type, td:last-of-type": { paddingRight: 0 },
      td: {
        paddingTop: 0,
        paddingBottom: 4,
        "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 },
      },
      tbody: { boxShadow: "none", border: "none" },
      code: ut({ theme: e }),
      div: { span: { fontWeight: "bold" } },
      "& code": {
        margin: 0,
        display: "inline-block",
        fontSize: e.typography.size.s1,
      },
    },
  })),
  LC = ({ tags: e }) => {
    let t = (e.params || []).filter((l) => l.description),
      r = t.length !== 0,
      n = e.deprecated != null,
      a = e.returns != null && e.returns.description != null;
    return !r && !a && !n
      ? null
      : u.createElement(
          u.Fragment,
          null,
          u.createElement(
            $C,
            null,
            u.createElement(
              "tbody",
              null,
              n &&
                u.createElement(
                  "tr",
                  { key: "deprecated" },
                  u.createElement(
                    "td",
                    { colSpan: 2 },
                    u.createElement("strong", null, "Deprecated"),
                    ": ",
                    e.deprecated.toString(),
                  ),
                ),
              r &&
                t.map((l) =>
                  u.createElement(
                    "tr",
                    { key: l.name },
                    u.createElement(
                      "td",
                      null,
                      u.createElement("code", null, l.name),
                    ),
                    u.createElement("td", null, l.description),
                  ),
                ),
              a &&
                u.createElement(
                  "tr",
                  { key: "returns" },
                  u.createElement(
                    "td",
                    null,
                    u.createElement("code", null, "Returns"),
                  ),
                  u.createElement("td", null, e.returns.description),
                ),
            ),
          ),
        );
  },
  io = 8,
  u0 = A.div(({ isExpanded: e }) => ({
    display: "flex",
    flexDirection: e ? "column" : "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: "-4px",
    minWidth: 100,
  })),
  zC = A.span(ut, ({ theme: e, simple: t = !1 }) => ({
    flex: "0 0 auto",
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    wordBreak: "break-word",
    whiteSpace: "normal",
    maxWidth: "100%",
    margin: 0,
    marginRight: "4px",
    marginBottom: "4px",
    paddingTop: "2px",
    paddingBottom: "2px",
    lineHeight: "13px",
    ...(t && { background: "transparent", border: "0 none", paddingLeft: 0 }),
  })),
  BC = A.button(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    marginBottom: "4px",
    background: "none",
    border: "none",
  })),
  PC = A.div(ut, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    fontSize: e.typography.size.s1,
    margin: 0,
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
  })),
  HC = A.div(({ theme: e, width: t }) => ({
    width: t,
    minWidth: 200,
    maxWidth: 800,
    padding: 15,
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    boxSizing: "content-box",
    "& code": { padding: "0 !important" },
  })),
  FC = A(tc)({ marginLeft: 4 }),
  jC = A(Go)({ marginLeft: 4 }),
  NC = () => u.createElement("span", null, "-"),
  O1 = ({ text: e, simple: t }) => u.createElement(zC, { simple: t }, e),
  DC = Dt(1e3)((e) => {
    let t = e.split(/\r?\n/);
    return `${Math.max(...t.map((r) => r.length))}ch`;
  }),
  VC = (e) => {
    if (!e) return [e];
    let t = e.split("|").map((r) => r.trim());
    return Yw(t);
  },
  p0 = (e, t = !0) => {
    let r = e;
    return (
      t || (r = e.slice(0, io)),
      r.map((n) => u.createElement(O1, { key: n, text: n === "" ? '""' : n }))
    );
  },
  UC = ({ value: e, initialExpandedArgs: t }) => {
    let { summary: r, detail: n } = e,
      [a, l] = o.useState(!1),
      [i, c] = o.useState(t || !1);
    if (r == null) return null;
    let s = typeof r.toString == "function" ? r.toString() : r;
    if (n == null) {
      if (/[(){}[\]<>]/.test(s)) return u.createElement(O1, { text: s });
      let d = VC(s),
        p = d.length;
      return p > io
        ? u.createElement(
            u0,
            { isExpanded: i },
            p0(d, i),
            u.createElement(
              BC,
              { onClick: () => c(!i) },
              i ? "Show less..." : `Show ${p - io} more...`,
            ),
          )
        : u.createElement(u0, null, p0(d));
    }
    return u.createElement(
      Mc,
      {
        closeOnOutsideClick: !0,
        placement: "bottom",
        visible: a,
        onVisibleChange: (d) => {
          l(d);
        },
        tooltip: u.createElement(
          HC,
          { width: DC(n) },
          u.createElement(Wn, { language: "jsx", format: !1 }, n),
        ),
      },
      u.createElement(
        PC,
        { className: "sbdocs-expandable" },
        u.createElement("span", null, s),
        a ? u.createElement(FC, null) : u.createElement(jC, null),
      ),
    );
  },
  Ta = ({ value: e, initialExpandedArgs: t }) =>
    e == null
      ? u.createElement(NC, null)
      : u.createElement(UC, { value: e, initialExpandedArgs: t }),
  WC = A.label(({ theme: e }) => ({
    lineHeight: "18px",
    alignItems: "center",
    marginBottom: 8,
    display: "inline-block",
    position: "relative",
    whiteSpace: "nowrap",
    background: e.boolean.background,
    borderRadius: "3em",
    padding: 1,
    input: {
      appearance: "none",
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      margin: 0,
      padding: 0,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      borderRadius: "3em",
      "&:focus": {
        outline: "none",
        boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
      },
    },
    span: {
      textAlign: "center",
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: "1",
      cursor: "pointer",
      display: "inline-block",
      padding: "7px 15px",
      transition: "all 100ms ease-out",
      userSelect: "none",
      borderRadius: "3em",
      color: ee(0.5, e.color.defaultText),
      background: "transparent",
      "&:hover": { boxShadow: `${nn(0.3, e.appBorderColor)} 0 0 0 1px inset` },
      "&:active": {
        boxShadow: `${nn(0.05, e.appBorderColor)} 0 0 0 2px inset`,
        color: nn(1, e.appBorderColor),
      },
      "&:first-of-type": { paddingRight: 8 },
      "&:last-of-type": { paddingLeft: 8 },
    },
    "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type":
      {
        background: e.boolean.selectedBackground,
        boxShadow:
          e.base === "light"
            ? `${nn(0.1, e.appBorderColor)} 0 0 2px`
            : `${e.appBorderColor} 0 0 0 1px`,
        color: e.color.defaultText,
        padding: "7px 15px",
      },
  })),
  qC = (e) => e === "true",
  GC = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
    let l = o.useCallback(() => r(!1), [r]);
    if (t === void 0)
      return u.createElement(
        wt,
        { variant: "outline", size: "medium", id: Mn(e), onClick: l },
        "Set boolean",
      );
    let i = Fe(e),
      c = typeof t == "string" ? qC(t) : t;
    return u.createElement(
      WC,
      { htmlFor: i, "aria-label": e },
      u.createElement("input", {
        id: i,
        type: "checkbox",
        onChange: (s) => r(s.target.checked),
        checked: c,
        role: "switch",
        name: e,
        onBlur: n,
        onFocus: a,
      }),
      u.createElement("span", { "aria-hidden": "true" }, "False"),
      u.createElement("span", { "aria-hidden": "true" }, "True"),
    );
  },
  YC = (e) => {
    let [t, r, n] = e.split("-"),
      a = new Date();
    return (
      a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
    );
  },
  KC = (e) => {
    let [t, r] = e.split(":"),
      n = new Date();
    return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
  },
  XC = (e) => {
    let t = new Date(e),
      r = `000${t.getFullYear()}`.slice(-4),
      n = `0${t.getMonth() + 1}`.slice(-2),
      a = `0${t.getDate()}`.slice(-2);
    return `${r}-${n}-${a}`;
  },
  ZC = (e) => {
    let t = new Date(e),
      r = `0${t.getHours()}`.slice(-2),
      n = `0${t.getMinutes()}`.slice(-2);
    return `${r}:${n}`;
  },
  JC = A.div(({ theme: e }) => ({
    flex: 1,
    display: "flex",
    input: {
      marginLeft: 10,
      flex: 1,
      height: 32,
      "&::-webkit-calendar-picker-indicator": {
        opacity: 0.5,
        height: 12,
        filter: e.base === "light" ? void 0 : "invert(1)",
      },
    },
    "input:first-of-type": { marginLeft: 0, flexGrow: 4 },
    "input:last-of-type": { flexGrow: 3 },
  })),
  QC = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
    let [l, i] = o.useState(!0),
      c = o.useRef(),
      s = o.useRef();
    o.useEffect(() => {
      l !== !1 &&
        (c && c.current && (c.current.value = XC(t)),
        s && s.current && (s.current.value = ZC(t)));
    }, [t]);
    let d = (m) => {
        let f = YC(m.target.value),
          v = new Date(t);
        v.setFullYear(f.getFullYear(), f.getMonth(), f.getDate());
        let g = v.getTime();
        g && r(g), i(!!g);
      },
      p = (m) => {
        let f = KC(m.target.value),
          v = new Date(t);
        v.setHours(f.getHours()), v.setMinutes(f.getMinutes());
        let g = v.getTime();
        g && r(g), i(!!g);
      },
      h = Fe(e);
    return u.createElement(
      JC,
      null,
      u.createElement(Nt.Input, {
        type: "date",
        max: "9999-12-31",
        ref: c,
        id: `${h}-date`,
        name: `${h}-date`,
        onChange: d,
        onFocus: n,
        onBlur: a,
      }),
      u.createElement(Nt.Input, {
        type: "time",
        id: `${h}-time`,
        name: `${h}-time`,
        ref: s,
        onChange: p,
        onFocus: n,
        onBlur: a,
      }),
      l ? null : u.createElement("div", null, "invalid"),
    );
  },
  eR = A.label({ display: "flex" }),
  tR = (e) => {
    let t = parseFloat(e);
    return Number.isNaN(t) ? void 0 : t;
  },
  rR = ({
    name: e,
    value: t,
    onChange: r,
    min: n,
    max: a,
    step: l,
    onBlur: i,
    onFocus: c,
  }) => {
    let [s, d] = o.useState(typeof t == "number" ? t : ""),
      [p, h] = o.useState(!1),
      [m, f] = o.useState(null),
      v = o.useCallback(
        (x) => {
          d(x.target.value);
          let y = parseFloat(x.target.value);
          Number.isNaN(y)
            ? f(new Error(`'${x.target.value}' is not a number`))
            : (r(y), f(null));
        },
        [r, f],
      ),
      g = o.useCallback(() => {
        d("0"), r(0), h(!0);
      }, [h]),
      E = o.useRef(null);
    return (
      o.useEffect(() => {
        p && E.current && E.current.select();
      }, [p]),
      o.useEffect(() => {
        s !== (typeof t == "number" ? t : "") && d(t);
      }, [t]),
      !p && t === void 0
        ? u.createElement(
            wt,
            { variant: "outline", size: "medium", id: Mn(e), onClick: g },
            "Set number",
          )
        : u.createElement(
            eR,
            null,
            u.createElement(Nt.Input, {
              ref: E,
              id: Fe(e),
              type: "number",
              onChange: v,
              size: "flex",
              placeholder: "Edit number...",
              value: s,
              valid: m ? "error" : null,
              autoFocus: p,
              name: e,
              min: n,
              max: a,
              step: l,
              onFocus: c,
              onBlur: i,
            }),
          )
    );
  },
  T1 = (e, t) => {
    let r = t && Object.entries(t).find(([n, a]) => a === e);
    return r ? r[0] : void 0;
  },
  so = (e, t) =>
    e && t
      ? Object.entries(t)
          .filter((r) => e.includes(r[1]))
          .map((r) => r[0])
      : [],
  M1 = (e, t) => e && t && e.map((r) => t[r]),
  nR = A.div(({ isInline: e }) =>
    e
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 },
        }
      : { label: { display: "flex" } },
  ),
  aR = A.span({}),
  oR = A.label({
    lineHeight: "20px",
    alignItems: "center",
    marginBottom: 8,
    "&:last-child": { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  f0 = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
    if (!t)
      return (
        wl.warn(`Checkbox with no options: ${e}`),
        u.createElement(u.Fragment, null, "-")
      );
    let l = so(r, t),
      [i, c] = o.useState(l),
      s = (p) => {
        let h = p.target.value,
          m = [...i];
        m.includes(h) ? m.splice(m.indexOf(h), 1) : m.push(h),
          n(M1(m, t)),
          c(m);
      };
    o.useEffect(() => {
      c(so(r, t));
    }, [r]);
    let d = Fe(e);
    return u.createElement(
      nR,
      { isInline: a },
      Object.keys(t).map((p, h) => {
        let m = `${d}-${h}`;
        return u.createElement(
          oR,
          { key: m, htmlFor: m },
          u.createElement("input", {
            type: "checkbox",
            id: m,
            name: m,
            value: p,
            onChange: s,
            checked: i == null ? void 0 : i.includes(p),
          }),
          u.createElement(aR, null, p),
        );
      }),
    );
  },
  lR = A.div(({ isInline: e }) =>
    e
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 },
        }
      : { label: { display: "flex" } },
  ),
  iR = A.span({}),
  sR = A.label({
    lineHeight: "20px",
    alignItems: "center",
    marginBottom: 8,
    "&:last-child": { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  h0 = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
    if (!t)
      return (
        wl.warn(`Radio with no options: ${e}`),
        u.createElement(u.Fragment, null, "-")
      );
    let l = T1(r, t),
      i = Fe(e);
    return u.createElement(
      lR,
      { isInline: a },
      Object.keys(t).map((c, s) => {
        let d = `${i}-${s}`;
        return u.createElement(
          sR,
          { key: d, htmlFor: d },
          u.createElement("input", {
            type: "radio",
            id: d,
            name: d,
            value: c,
            onChange: (p) => n(t[p.currentTarget.value]),
            checked: c === l,
          }),
          u.createElement(iR, null, c),
        );
      }),
    );
  },
  cR = {
    appearance: "none",
    border: "0 none",
    boxSizing: "inherit",
    display: " block",
    margin: " 0",
    background: "transparent",
    padding: 0,
    fontSize: "inherit",
    position: "relative",
  },
  $1 = A.select(cR, ({ theme: e }) => ({
    boxSizing: "border-box",
    position: "relative",
    padding: "6px 10px",
    width: "100%",
    color: e.input.color || "inherit",
    background: e.input.background,
    borderRadius: e.input.borderRadius,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: "20px",
    "&:focus": {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: "none",
    },
    "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "::placeholder": { color: e.textMutedColor },
    "&[multiple]": {
      overflow: "auto",
      padding: 0,
      option: {
        display: "block",
        padding: "6px 10px",
        marginLeft: 1,
        marginRight: 1,
      },
    },
  })),
  L1 = A.span(({ theme: e }) => ({
    display: "inline-block",
    lineHeight: "normal",
    overflow: "hidden",
    position: "relative",
    verticalAlign: "top",
    width: "100%",
    svg: {
      position: "absolute",
      zIndex: 1,
      pointerEvents: "none",
      height: "12px",
      marginTop: "-6px",
      right: "12px",
      top: "50%",
      fill: e.textMutedColor,
      path: { fill: e.textMutedColor },
    },
  })),
  g0 = "Choose option...",
  dR = ({ name: e, value: t, options: r, onChange: n }) => {
    let a = (c) => {
        n(r[c.currentTarget.value]);
      },
      l = T1(t, r) || g0,
      i = Fe(e);
    return u.createElement(
      L1,
      null,
      u.createElement(Go, null),
      u.createElement(
        $1,
        { id: i, value: l, onChange: a },
        u.createElement("option", { key: "no-selection", disabled: !0 }, g0),
        Object.keys(r).map((c) =>
          u.createElement("option", { key: c, value: c }, c),
        ),
      ),
    );
  },
  uR = ({ name: e, value: t, options: r, onChange: n }) => {
    let a = (c) => {
        let s = Array.from(c.currentTarget.options)
          .filter((d) => d.selected)
          .map((d) => d.value);
        n(M1(s, r));
      },
      l = so(t, r),
      i = Fe(e);
    return u.createElement(
      L1,
      null,
      u.createElement(
        $1,
        { id: i, multiple: !0, value: l, onChange: a },
        Object.keys(r).map((c) =>
          u.createElement("option", { key: c, value: c }, c),
        ),
      ),
    );
  },
  m0 = (e) => {
    let { name: t, options: r } = e;
    return r
      ? e.isMulti
        ? u.createElement(uR, { ...e })
        : u.createElement(dR, { ...e })
      : (wl.warn(`Select with no options: ${t}`),
        u.createElement(u.Fragment, null, "-"));
  },
  pR = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (r, n) => ((r[(t == null ? void 0 : t[n]) || String(n)] = n), r),
          {},
        )
      : e,
  fR = {
    check: f0,
    "inline-check": f0,
    radio: h0,
    "inline-radio": h0,
    select: m0,
    "multi-select": m0,
  },
  Kt = (e) => {
    let { type: t = "select", labels: r, argType: n } = e,
      a = {
        ...e,
        options: n ? pR(n.options, r) : {},
        isInline: t.includes("inline"),
        isMulti: t.includes("multi"),
      },
      l = fR[t];
    if (l) return u.createElement(l, { ...a });
    throw new Error(`Unknown options type: ${t}`);
  },
  Sl = "value",
  hR = "key",
  gR = "Error",
  mR = "Object",
  vR = "Array",
  bR = "String",
  yR = "Number",
  wR = "Boolean",
  xR = "Date",
  ER = "Null",
  SR = "Undefined",
  CR = "Function",
  RR = "Symbol",
  z1 = "ADD_DELTA_TYPE",
  B1 = "REMOVE_DELTA_TYPE",
  P1 = "UPDATE_DELTA_TYPE";
function $t(e) {
  return e !== null &&
    typeof e == "object" &&
    !Array.isArray(e) &&
    typeof e[Symbol.iterator] == "function"
    ? "Iterable"
    : Object.prototype.toString.call(e).slice(8, -1);
}
function H1(e, t) {
  let r = $t(e),
    n = $t(t);
  return (r === "Function" || n === "Function") && n !== r;
}
var Cl = class extends o.Component {
  constructor(e) {
    super(e),
      (this.state = { inputRefKey: null, inputRefValue: null }),
      (this.refInputValue = this.refInputValue.bind(this)),
      (this.refInputKey = this.refInputKey.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this)),
      (this.onSubmit = this.onSubmit.bind(this));
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: t } = this.state,
      { onlyValue: r } = this.props;
    e && typeof e.focus == "function" && e.focus(),
      r && t && typeof t.focus == "function" && t.focus(),
      document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === "Enter" || e.key === "Enter") &&
        (e.preventDefault(), this.onSubmit()),
      (e.code === "Escape" || e.key === "Escape") &&
        (e.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let {
        handleAdd: e,
        onlyValue: t,
        onSubmitValueParser: r,
        keyPath: n,
        deep: a,
      } = this.props,
      { inputRefKey: l, inputRefValue: i } = this.state,
      c = {};
    if (!t) {
      if (!l.value) return;
      c.key = l.value;
    }
    (c.newValue = r(!1, n, a, c.key, i.value)), e(c);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let {
        handleCancel: e,
        onlyValue: t,
        addButtonElement: r,
        cancelButtonElement: n,
        inputElementGenerator: a,
        keyPath: l,
        deep: i,
      } = this.props,
      c = o.cloneElement(r, { onClick: this.onSubmit }),
      s = o.cloneElement(n, { onClick: e }),
      d = a(Sl, l, i),
      p = o.cloneElement(d, { placeholder: "Value", ref: this.refInputValue }),
      h = null;
    if (!t) {
      let m = a(hR, l, i);
      h = o.cloneElement(m, { placeholder: "Key", ref: this.refInputKey });
    }
    return u.createElement(
      "span",
      { className: "rejt-add-value-node" },
      h,
      p,
      s,
      c,
    );
  }
};
Cl.defaultProps = {
  onlyValue: !1,
  addButtonElement: u.createElement("button", null, "+"),
  cancelButtonElement: u.createElement("button", null, "c"),
};
var F1 = class extends o.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      data: e.data,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    (r[e] = t), this.setState({ data: r });
    let { onUpdate: a } = this.props,
      l = n.length;
    a(n[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: n, keyPath: a, nextDeep: l } = this.state,
        i = n[e];
      t(e, a, l, i)
        .then(() => {
          let c = { keyPath: a, deep: l, key: e, oldValue: i, type: B1 };
          n.splice(e, 1), this.setState({ data: n });
          let { onUpdate: s, onDeltaUpdate: d } = this.props;
          s(a[a.length - 1], n), d(c);
        })
        .catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: n } = this.state,
      { beforeAddAction: a, logger: l } = this.props;
    a(t.length, r, n, e)
      .then(() => {
        let i = [...t, e];
        this.setState({ data: i }), this.handleAddValueCancel();
        let { onUpdate: c, onDeltaUpdate: s } = this.props;
        c(r[r.length - 1], i),
          s({ type: z1, keyPath: r, deep: n, key: i.length - 1, newValue: e });
      })
      .catch(l.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: a } = this.props,
        { data: l, keyPath: i, nextDeep: c } = this.state,
        s = l[e];
      a(e, i, c, s, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: d, onDeltaUpdate: p } = this.props;
          d(i[i.length - 1], l),
            p({
              type: P1,
              keyPath: i,
              deep: c,
              key: e,
              newValue: t,
              oldValue: s,
            }),
            r(void 0);
        })
        .catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state,
      {
        handleRemove: a,
        readOnly: l,
        getStyle: i,
        dataType: c,
        minusMenuElement: s,
      } = this.props,
      { minus: d, collapsed: p } = i(e, t, r, n, c),
      h = l(e, t, r, n, c),
      m = o.cloneElement(s, {
        onClick: a,
        className: "rejt-minus-menu",
        style: d,
      });
    return u.createElement(
      "span",
      { className: "rejt-collapsed" },
      u.createElement(
        "span",
        {
          className: "rejt-collapsed-text",
          style: p,
          onClick: this.handleCollapseMode,
        },
        "[...] ",
        t.length,
        " ",
        t.length === 1 ? "item" : "items",
      ),
      !h && m,
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        addFormVisible: a,
        nextDeep: l,
      } = this.state,
      {
        isCollapsed: i,
        handleRemove: c,
        onDeltaUpdate: s,
        readOnly: d,
        getStyle: p,
        dataType: h,
        addButtonElement: m,
        cancelButtonElement: f,
        editButtonElement: v,
        inputElementGenerator: g,
        textareaElementGenerator: E,
        minusMenuElement: x,
        plusMenuElement: y,
        beforeRemoveAction: b,
        beforeAddAction: w,
        beforeUpdateAction: S,
        logger: C,
        onSubmitValueParser: R,
      } = this.props,
      { minus: I, plus: _, delimiter: k, ul: O, addForm: T } = p(e, t, r, n, h),
      M = d(e, t, r, n, h),
      F = o.cloneElement(y, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: _,
      }),
      $ = o.cloneElement(x, {
        onClick: c,
        className: "rejt-minus-menu",
        style: I,
      });
    return u.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      u.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: k },
        "[",
      ),
      !a && F,
      u.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: O },
        t.map((L, j) =>
          u.createElement(Jn, {
            key: j,
            name: j.toString(),
            data: L,
            keyPath: r,
            deep: l,
            isCollapsed: i,
            handleRemove: this.handleRemoveItem(j),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: d,
            getStyle: p,
            addButtonElement: m,
            cancelButtonElement: f,
            editButtonElement: v,
            inputElementGenerator: g,
            textareaElementGenerator: E,
            minusMenuElement: x,
            plusMenuElement: y,
            beforeRemoveAction: b,
            beforeAddAction: w,
            beforeUpdateAction: S,
            logger: C,
            onSubmitValueParser: R,
          }),
        ),
      ),
      !M &&
        a &&
        u.createElement(
          "div",
          { className: "rejt-add-form", style: T },
          u.createElement(Cl, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: !0,
            addButtonElement: m,
            cancelButtonElement: f,
            inputElementGenerator: g,
            keyPath: r,
            deep: n,
            onSubmitValueParser: R,
          }),
        ),
      u.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: k },
        "]",
      ),
      !M && $,
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
      { dataType: l, getStyle: i } = this.props,
      c = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = i(e, r, n, a, l);
    return u.createElement(
      "div",
      { className: "rejt-array-node" },
      u.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        u.createElement(
          "span",
          { className: "rejt-name", style: s.name },
          e,
          " :",
          " ",
        ),
      ),
      c,
    );
  }
};
F1.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: u.createElement("span", null, " - "),
  plusMenuElement: u.createElement("span", null, " + "),
};
var j1 = class extends o.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: a,
        deep: l,
      } = this.state,
      { readOnly: i, dataType: c } = this.props,
      s = i(r, n, a, l, c);
    e && !s && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === "Enter" || e.key === "Enter") &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === "Escape" || e.key === "Escape") &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: a,
      } = this.props,
      { inputRef: l, name: i, deep: c } = this.state;
    if (!l) return;
    let s = n(!0, a, c, i, l.value);
    e({ value: s, key: i })
      .then(() => {
        H1(t, s) || this.handleCancelEdit();
      })
      .catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: c,
        dataType: s,
        getStyle: d,
        editButtonElement: p,
        cancelButtonElement: h,
        textareaElementGenerator: m,
        minusMenuElement: f,
        keyPath: v,
      } = this.props,
      g = d(e, i, n, a, s),
      E = null,
      x = null,
      y = c(e, i, n, a, s);
    if (r && !y) {
      let b = m(Sl, v, a, e, i, s),
        w = o.cloneElement(p, { onClick: this.handleEdit }),
        S = o.cloneElement(h, { onClick: this.handleCancelEdit }),
        C = o.cloneElement(b, { ref: this.refInput, defaultValue: i });
      (E = u.createElement(
        "span",
        { className: "rejt-edit-form", style: g.editForm },
        C,
        " ",
        S,
        w,
      )),
        (x = null);
    } else {
      E = u.createElement(
        "span",
        {
          className: "rejt-value",
          style: g.value,
          onClick: y ? null : this.handleEditMode,
        },
        t,
      );
      let b = o.cloneElement(f, {
        onClick: l,
        className: "rejt-minus-menu",
        style: g.minus,
      });
      x = y ? null : b;
    }
    return u.createElement(
      "li",
      { className: "rejt-function-value-node", style: g.li },
      u.createElement(
        "span",
        { className: "rejt-name", style: g.name },
        e,
        " :",
        " ",
      ),
      E,
      x,
    );
  }
};
j1.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: u.createElement("button", null, "e"),
  cancelButtonElement: u.createElement("button", null, "c"),
  minusMenuElement: u.createElement("span", null, " - "),
};
var Jn = class extends o.Component {
  constructor(e) {
    super(e),
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: e.keyPath,
        deep: e.deep,
      });
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state,
      {
        isCollapsed: a,
        handleRemove: l,
        handleUpdateValue: i,
        onUpdate: c,
        onDeltaUpdate: s,
        readOnly: d,
        getStyle: p,
        addButtonElement: h,
        cancelButtonElement: m,
        editButtonElement: f,
        inputElementGenerator: v,
        textareaElementGenerator: g,
        minusMenuElement: E,
        plusMenuElement: x,
        beforeRemoveAction: y,
        beforeAddAction: b,
        beforeUpdateAction: w,
        logger: S,
        onSubmitValueParser: C,
      } = this.props,
      R = () => !0,
      I = $t(e);
    switch (I) {
      case gR:
        return u.createElement(co, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: c,
          onDeltaUpdate: s,
          readOnly: R,
          dataType: I,
          getStyle: p,
          addButtonElement: h,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          textareaElementGenerator: g,
          minusMenuElement: E,
          plusMenuElement: x,
          beforeRemoveAction: y,
          beforeAddAction: b,
          beforeUpdateAction: w,
          logger: S,
          onSubmitValueParser: C,
        });
      case mR:
        return u.createElement(co, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: c,
          onDeltaUpdate: s,
          readOnly: d,
          dataType: I,
          getStyle: p,
          addButtonElement: h,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          textareaElementGenerator: g,
          minusMenuElement: E,
          plusMenuElement: x,
          beforeRemoveAction: y,
          beforeAddAction: b,
          beforeUpdateAction: w,
          logger: S,
          onSubmitValueParser: C,
        });
      case vR:
        return u.createElement(F1, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: c,
          onDeltaUpdate: s,
          readOnly: d,
          dataType: I,
          getStyle: p,
          addButtonElement: h,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          textareaElementGenerator: g,
          minusMenuElement: E,
          plusMenuElement: x,
          beforeRemoveAction: y,
          beforeAddAction: b,
          beforeUpdateAction: w,
          logger: S,
          onSubmitValueParser: C,
        });
      case bR:
        return u.createElement(gt, {
          name: t,
          value: `"${e}"`,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: d,
          dataType: I,
          getStyle: p,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          minusMenuElement: E,
          logger: S,
          onSubmitValueParser: C,
        });
      case yR:
        return u.createElement(gt, {
          name: t,
          value: e,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: d,
          dataType: I,
          getStyle: p,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          minusMenuElement: E,
          logger: S,
          onSubmitValueParser: C,
        });
      case wR:
        return u.createElement(gt, {
          name: t,
          value: e ? "true" : "false",
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: d,
          dataType: I,
          getStyle: p,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          minusMenuElement: E,
          logger: S,
          onSubmitValueParser: C,
        });
      case xR:
        return u.createElement(gt, {
          name: t,
          value: e.toISOString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: R,
          dataType: I,
          getStyle: p,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          minusMenuElement: E,
          logger: S,
          onSubmitValueParser: C,
        });
      case ER:
        return u.createElement(gt, {
          name: t,
          value: "null",
          originalValue: "null",
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: d,
          dataType: I,
          getStyle: p,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          minusMenuElement: E,
          logger: S,
          onSubmitValueParser: C,
        });
      case SR:
        return u.createElement(gt, {
          name: t,
          value: "undefined",
          originalValue: "undefined",
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: d,
          dataType: I,
          getStyle: p,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          minusMenuElement: E,
          logger: S,
          onSubmitValueParser: C,
        });
      case CR:
        return u.createElement(j1, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: d,
          dataType: I,
          getStyle: p,
          cancelButtonElement: m,
          editButtonElement: f,
          textareaElementGenerator: g,
          minusMenuElement: E,
          logger: S,
          onSubmitValueParser: C,
        });
      case RR:
        return u.createElement(gt, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: R,
          dataType: I,
          getStyle: p,
          cancelButtonElement: m,
          editButtonElement: f,
          inputElementGenerator: v,
          minusMenuElement: E,
          logger: S,
          onSubmitValueParser: C,
        });
      default:
        return null;
    }
  }
};
Jn.defaultProps = { keyPath: [], deep: 0 };
var co = class extends o.Component {
  constructor(e) {
    super(e);
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
    (this.state = {
      name: e.name,
      data: e.data,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    (r[e] = t), this.setState({ data: r });
    let { onUpdate: a } = this.props,
      l = n.length;
    a(n[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: r, keyPath: n, nextDeep: a } = this.state,
      { beforeAddAction: l, logger: i } = this.props;
    l(e, n, a, t)
      .then(() => {
        (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
        let { onUpdate: c, onDeltaUpdate: s } = this.props;
        c(n[n.length - 1], r),
          s({ type: z1, keyPath: n, deep: a, key: e, newValue: t });
      })
      .catch(i.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: n, keyPath: a, nextDeep: l } = this.state,
        i = n[e];
      t(e, a, l, i)
        .then(() => {
          let c = { keyPath: a, deep: l, key: e, oldValue: i, type: B1 };
          delete n[e], this.setState({ data: n });
          let { onUpdate: s, onDeltaUpdate: d } = this.props;
          s(a[a.length - 1], n), d(c);
        })
        .catch(r.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: a } = this.props,
        { data: l, keyPath: i, nextDeep: c } = this.state,
        s = l[e];
      a(e, i, c, s, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: d, onDeltaUpdate: p } = this.props;
          d(i[i.length - 1], l),
            p({
              type: P1,
              keyPath: i,
              deep: c,
              key: e,
              newValue: t,
              oldValue: s,
            }),
            r();
        })
        .catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state,
      {
        handleRemove: a,
        readOnly: l,
        dataType: i,
        getStyle: c,
        minusMenuElement: s,
      } = this.props,
      { minus: d, collapsed: p } = c(e, n, t, r, i),
      h = Object.getOwnPropertyNames(n),
      m = l(e, n, t, r, i),
      f = o.cloneElement(s, {
        onClick: a,
        className: "rejt-minus-menu",
        style: d,
      });
    return u.createElement(
      "span",
      { className: "rejt-collapsed" },
      u.createElement(
        "span",
        {
          className: "rejt-collapsed-text",
          style: p,
          onClick: this.handleCollapseMode,
        },
        "{...}",
        " ",
        h.length,
        " ",
        h.length === 1 ? "key" : "keys",
      ),
      !m && f,
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        nextDeep: a,
        addFormVisible: l,
      } = this.state,
      {
        isCollapsed: i,
        handleRemove: c,
        onDeltaUpdate: s,
        readOnly: d,
        getStyle: p,
        dataType: h,
        addButtonElement: m,
        cancelButtonElement: f,
        editButtonElement: v,
        inputElementGenerator: g,
        textareaElementGenerator: E,
        minusMenuElement: x,
        plusMenuElement: y,
        beforeRemoveAction: b,
        beforeAddAction: w,
        beforeUpdateAction: S,
        logger: C,
        onSubmitValueParser: R,
      } = this.props,
      { minus: I, plus: _, addForm: k, ul: O, delimiter: T } = p(e, t, r, n, h),
      M = Object.getOwnPropertyNames(t),
      F = d(e, t, r, n, h),
      $ = o.cloneElement(y, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: _,
      }),
      L = o.cloneElement(x, {
        onClick: c,
        className: "rejt-minus-menu",
        style: I,
      }),
      j = M.map((V) =>
        u.createElement(Jn, {
          key: V,
          name: V,
          data: t[V],
          keyPath: r,
          deep: a,
          isCollapsed: i,
          handleRemove: this.handleRemoveValue(V),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: p,
          addButtonElement: m,
          cancelButtonElement: f,
          editButtonElement: v,
          inputElementGenerator: g,
          textareaElementGenerator: E,
          minusMenuElement: x,
          plusMenuElement: y,
          beforeRemoveAction: b,
          beforeAddAction: w,
          beforeUpdateAction: S,
          logger: C,
          onSubmitValueParser: R,
        }),
      );
    return u.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      u.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: T },
        "{",
      ),
      !F && $,
      u.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: O },
        j,
      ),
      !F &&
        l &&
        u.createElement(
          "div",
          { className: "rejt-add-form", style: k },
          u.createElement(Cl, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement: m,
            cancelButtonElement: f,
            inputElementGenerator: g,
            keyPath: r,
            deep: n,
            onSubmitValueParser: R,
          }),
        ),
      u.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: T },
        "}",
      ),
      !F && L,
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
      { getStyle: l, dataType: i } = this.props,
      c = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = l(e, r, n, a, i);
    return u.createElement(
      "div",
      { className: "rejt-object-node" },
      u.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        u.createElement(
          "span",
          { className: "rejt-name", style: s.name },
          e,
          " :",
          " ",
        ),
      ),
      c,
    );
  }
};
co.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: u.createElement("span", null, " - "),
  plusMenuElement: u.createElement("span", null, " + "),
};
var gt = class extends o.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: a,
        deep: l,
      } = this.state,
      { readOnly: i, dataType: c } = this.props,
      s = i(r, n, a, l, c);
    e && !s && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === "Enter" || e.key === "Enter") &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === "Escape" || e.key === "Escape") &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: a,
      } = this.props,
      { inputRef: l, name: i, deep: c } = this.state;
    if (!l) return;
    let s = n(!0, a, c, i, l.value);
    e({ value: s, key: i })
      .then(() => {
        H1(t, s) || this.handleCancelEdit();
      })
      .catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: c,
        dataType: s,
        getStyle: d,
        editButtonElement: p,
        cancelButtonElement: h,
        inputElementGenerator: m,
        minusMenuElement: f,
        keyPath: v,
      } = this.props,
      g = d(e, i, n, a, s),
      E = c(e, i, n, a, s),
      x = r && !E,
      y = m(Sl, v, a, e, i, s),
      b = o.cloneElement(p, { onClick: this.handleEdit }),
      w = o.cloneElement(h, { onClick: this.handleCancelEdit }),
      S = o.cloneElement(y, {
        ref: this.refInput,
        defaultValue: JSON.stringify(i),
      }),
      C = o.cloneElement(f, {
        onClick: l,
        className: "rejt-minus-menu",
        style: g.minus,
      });
    return u.createElement(
      "li",
      { className: "rejt-value-node", style: g.li },
      u.createElement(
        "span",
        { className: "rejt-name", style: g.name },
        e,
        " : ",
      ),
      x
        ? u.createElement(
            "span",
            { className: "rejt-edit-form", style: g.editForm },
            S,
            " ",
            w,
            b,
          )
        : u.createElement(
            "span",
            {
              className: "rejt-value",
              style: g.value,
              onClick: E ? null : this.handleEditMode,
            },
            String(t),
          ),
      !E && !x && C,
    );
  }
};
gt.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: u.createElement("button", null, "e"),
  cancelButtonElement: u.createElement("button", null, "c"),
  minusMenuElement: u.createElement("span", null, " - "),
};
var IR = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  AR = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  _R = {
    minus: { color: "red" },
    editForm: {},
    value: { color: "#7bba3d" },
    li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
    name: { color: "#2287CD" },
  };
function kR(e) {
  let t = e;
  if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {}
  return t;
}
var N1 = class extends o.Component {
  constructor(e) {
    super(e),
      (this.state = { data: e.data, rootName: e.rootName }),
      (this.onUpdate = this.onUpdate.bind(this)),
      (this.removeRoot = this.removeRoot.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName
      ? { data: e.data, rootName: e.rootName }
      : null;
  }
  onUpdate(e, t) {
    this.setState({ data: t }), this.props.onFullyUpdate(t);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data: e, rootName: t } = this.state,
      {
        isCollapsed: r,
        onDeltaUpdate: n,
        readOnly: a,
        getStyle: l,
        addButtonElement: i,
        cancelButtonElement: c,
        editButtonElement: s,
        inputElement: d,
        textareaElement: p,
        minusMenuElement: h,
        plusMenuElement: m,
        beforeRemoveAction: f,
        beforeAddAction: v,
        beforeUpdateAction: g,
        logger: E,
        onSubmitValueParser: x,
        fallback: y = null,
      } = this.props,
      b = $t(e),
      w = a;
    $t(a) === "Boolean" && (w = () => a);
    let S = d;
    d && $t(d) !== "Function" && (S = () => d);
    let C = p;
    return (
      p && $t(p) !== "Function" && (C = () => p),
      b === "Object" || b === "Array"
        ? u.createElement(
            "div",
            { className: "rejt-tree" },
            u.createElement(Jn, {
              data: e,
              name: t,
              deep: -1,
              isCollapsed: r,
              onUpdate: this.onUpdate,
              onDeltaUpdate: n,
              readOnly: w,
              getStyle: l,
              addButtonElement: i,
              cancelButtonElement: c,
              editButtonElement: s,
              inputElementGenerator: S,
              textareaElementGenerator: C,
              minusMenuElement: h,
              plusMenuElement: m,
              handleRemove: this.removeRoot,
              beforeRemoveAction: f,
              beforeAddAction: v,
              beforeUpdateAction: g,
              logger: E,
              onSubmitValueParser: x,
            }),
          )
        : y
    );
  }
};
N1.defaultProps = {
  rootName: "root",
  isCollapsed: (e, t) => t !== -1,
  getStyle: (e, t, r, n, a) => {
    switch (a) {
      case "Object":
      case "Error":
        return IR;
      case "Array":
        return AR;
      default:
        return _R;
    }
  },
  readOnly: () => !1,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: { error: () => {} },
  onSubmitValueParser: (e, t, r, n, a) => kR(a),
  inputElement: () => u.createElement("input", null),
  textareaElement: () => u.createElement("textarea", null),
  fallback: null,
};
var { window: OR } = Te,
  TR = A.div(({ theme: e }) => ({
    position: "relative",
    display: "flex",
    ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" },
    ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed":
      { "& > svg": { opacity: 0, transition: "opacity 0.2s" } },
    ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed":
      { "& > svg": { opacity: 1 } },
    ".rejt-edit-form button": { display: "none" },
    ".rejt-add-form": { marginLeft: 10 },
    ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" },
    ".rejt-name": { lineHeight: "22px" },
    ".rejt-not-collapsed-delimiter": { lineHeight: "22px" },
    ".rejt-plus-menu": { marginLeft: 5 },
    ".rejt-object-node > span > *, .rejt-array-node > span > *": {
      position: "relative",
      zIndex: 2,
    },
    ".rejt-object-node, .rejt-array-node": { position: "relative" },
    ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before":
      {
        content: '""',
        position: "absolute",
        top: 0,
        display: "block",
        width: "100%",
        marginLeft: "-1rem",
        padding: "0 4px 0 1rem",
        height: 22,
      },
    ".rejt-collapsed::before, .rejt-not-collapsed::before": {
      zIndex: 1,
      background: "transparent",
      borderRadius: 4,
      transition: "background 0.2s",
      pointerEvents: "none",
      opacity: 0.1,
    },
    ".rejt-object-node:hover, .rejt-array-node:hover": {
      "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": {
        background: e.color.secondary,
      },
    },
    ".rejt-collapsed::after, .rejt-not-collapsed::after": {
      content: '""',
      position: "absolute",
      display: "inline-block",
      pointerEvents: "none",
      width: 0,
      height: 0,
    },
    ".rejt-collapsed::after": {
      left: -8,
      top: 8,
      borderTop: "3px solid transparent",
      borderBottom: "3px solid transparent",
      borderLeft: "3px solid rgba(153,153,153,0.6)",
    },
    ".rejt-not-collapsed::after": {
      left: -10,
      top: 10,
      borderTop: "3px solid rgba(153,153,153,0.6)",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
    },
    ".rejt-value": {
      display: "inline-block",
      border: "1px solid transparent",
      borderRadius: 4,
      margin: "1px 0",
      padding: "0 4px",
      cursor: "text",
      color: e.color.defaultText,
    },
    ".rejt-value-node:hover > .rejt-value": {
      background: e.color.lighter,
      borderColor: e.appBorderColor,
    },
  })),
  Ma = A.button(({ theme: e, primary: t }) => ({
    border: 0,
    height: 20,
    margin: 1,
    borderRadius: 4,
    background: t ? e.color.secondary : "transparent",
    color: t ? e.color.lightest : e.color.dark,
    fontWeight: t ? "bold" : "normal",
    cursor: "pointer",
    order: t ? "initial" : 9,
  })),
  MR = A(Zs)(({ theme: e, disabled: t }) => ({
    display: "inline-block",
    verticalAlign: "middle",
    width: 15,
    height: 15,
    padding: 3,
    marginLeft: 5,
    cursor: t ? "not-allowed" : "pointer",
    color: e.textMutedColor,
    "&:hover": t ? {} : { color: e.color.ancillary },
    "svg + &": { marginLeft: 0 },
  })),
  $R = A(Js)(({ theme: e, disabled: t }) => ({
    display: "inline-block",
    verticalAlign: "middle",
    width: 15,
    height: 15,
    padding: 3,
    marginLeft: 5,
    cursor: t ? "not-allowed" : "pointer",
    color: e.textMutedColor,
    "&:hover": t ? {} : { color: e.color.negative },
    "svg + &": { marginLeft: 0 },
  })),
  v0 = A.input(({ theme: e, placeholder: t }) => ({
    outline: 0,
    margin: t ? 1 : "1px 0",
    padding: "3px 4px",
    color: e.color.defaultText,
    background: e.background.app,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 4,
    lineHeight: "14px",
    width: t === "Key" ? 80 : 120,
    "&:focus": { border: `1px solid ${e.color.secondary}` },
  })),
  LR = A(Ht)(({ theme: e }) => ({
    position: "absolute",
    zIndex: 2,
    top: 2,
    right: 2,
    height: 21,
    padding: "0 3px",
    background: e.background.bar,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 3,
    color: e.textMutedColor,
    fontSize: "9px",
    fontWeight: "bold",
    textDecoration: "none",
    span: { marginLeft: 3, marginTop: 1 },
  })),
  zR = A(Nt.Textarea)(({ theme: e }) => ({
    flex: 1,
    padding: "7px 6px",
    fontFamily: e.typography.fonts.mono,
    fontSize: "12px",
    lineHeight: "18px",
    "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" },
    "&:placeholder-shown": { padding: "7px 10px" },
  })),
  BR = {
    bubbles: !0,
    cancelable: !0,
    key: "Enter",
    code: "Enter",
    keyCode: 13,
  },
  PR = (e) => {
    e.currentTarget.dispatchEvent(new OR.KeyboardEvent("keydown", BR));
  },
  HR = (e) => {
    e.currentTarget.select();
  },
  FR = (e) => () => ({
    name: { color: e.color.secondary },
    collapsed: { color: e.color.dark },
    ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 },
    li: { outline: 0 },
  }),
  b0 = ({ name: e, value: t, onChange: r }) => {
    let n = es(),
      a = o.useMemo(() => t && $x(t), [t]),
      l = a != null,
      [i, c] = o.useState(!l),
      [s, d] = o.useState(null),
      p = o.useCallback(
        (x) => {
          try {
            x && r(JSON.parse(x)), d(void 0);
          } catch (y) {
            d(y);
          }
        },
        [r],
      ),
      [h, m] = o.useState(!1),
      f = o.useCallback(() => {
        r({}), m(!0);
      }, [m]),
      v = o.useRef(null);
    if (
      (o.useEffect(() => {
        h && v.current && v.current.select();
      }, [h]),
      !l)
    )
      return u.createElement(wt, { id: Mn(e), onClick: f }, "Set object");
    let g = u.createElement(zR, {
        ref: v,
        id: Fe(e),
        name: e,
        defaultValue: t === null ? "" : JSON.stringify(t, null, 2),
        onBlur: (x) => p(x.target.value),
        placeholder: "Edit JSON string...",
        autoFocus: h,
        valid: s ? "error" : null,
      }),
      E =
        Array.isArray(t) ||
        (typeof t == "object" &&
          (t == null ? void 0 : t.constructor) === Object);
    return u.createElement(
      TR,
      null,
      E &&
        u.createElement(
          LR,
          {
            onClick: (x) => {
              x.preventDefault(), c((y) => !y);
            },
          },
          i ? u.createElement(Ys, null) : u.createElement(Gs, null),
          u.createElement("span", null, "RAW"),
        ),
      i
        ? g
        : u.createElement(N1, {
            readOnly: !E,
            isCollapsed: E ? void 0 : () => !0,
            data: a,
            rootName: e,
            onFullyUpdate: r,
            getStyle: FR(n),
            cancelButtonElement: u.createElement(
              Ma,
              { type: "button" },
              "Cancel",
            ),
            editButtonElement: u.createElement(Ma, { type: "submit" }, "Save"),
            addButtonElement: u.createElement(
              Ma,
              { type: "submit", primary: !0 },
              "Save",
            ),
            plusMenuElement: u.createElement(MR, null),
            minusMenuElement: u.createElement($R, null),
            inputElement: (x, y, b, w) =>
              w
                ? u.createElement(v0, { onFocus: HR, onBlur: PR })
                : u.createElement(v0, null),
            fallback: g,
          }),
    );
  },
  jR = A.input(({ theme: e, min: t, max: r, value: n }) => ({
    "&": { width: "100%", backgroundColor: "transparent", appearance: "none" },
    "&::-webkit-slider-runnable-track": {
      background:
        e.base === "light"
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ot(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: "100%",
      height: 6,
      cursor: "pointer",
    },
    "&::-webkit-slider-thumb": {
      marginTop: "-6px",
      width: 16,
      height: 16,
      border: `1px solid ${Je(e.appBorderColor, 0.2)}`,
      borderRadius: "50px",
      boxShadow: `0 1px 3px 0px ${Je(e.appBorderColor, 0.2)}`,
      cursor: "grab",
      appearance: "none",
      background: `${e.input.background}`,
      transition: "all 150ms ease-out",
      "&:hover": {
        background: `${Ye(0.05, e.input.background)}`,
        transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
        transition: "all 50ms ease-out",
      },
      "&:active": {
        background: `${e.input.background}`,
        transform: "scale3d(1, 1, 1) translateY(0px)",
        cursor: "grabbing",
      },
    },
    "&:focus": {
      outline: "none",
      "&::-webkit-slider-runnable-track": {
        borderColor: Je(e.color.secondary, 0.4),
      },
      "&::-webkit-slider-thumb": {
        borderColor: e.color.secondary,
        boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
      },
    },
    "&::-moz-range-track": {
      background:
        e.base === "light"
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ot(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: "100%",
      height: 6,
      cursor: "pointer",
      outline: "none",
    },
    "&::-moz-range-thumb": {
      width: 16,
      height: 16,
      border: `1px solid ${Je(e.appBorderColor, 0.2)}`,
      borderRadius: "50px",
      boxShadow: `0 1px 3px 0px ${Je(e.appBorderColor, 0.2)}`,
      cursor: "grab",
      background: `${e.input.background}`,
      transition: "all 150ms ease-out",
      "&:hover": {
        background: `${Ye(0.05, e.input.background)}`,
        transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
        transition: "all 50ms ease-out",
      },
      "&:active": {
        background: `${e.input.background}`,
        transform: "scale3d(1, 1, 1) translateY(0px)",
        cursor: "grabbing",
      },
    },
    "&::-ms-track": {
      background:
        e.base === "light"
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ot(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      color: "transparent",
      width: "100%",
      height: "6px",
      cursor: "pointer",
    },
    "&::-ms-fill-lower": { borderRadius: 6 },
    "&::-ms-fill-upper": { borderRadius: 6 },
    "&::-ms-thumb": {
      width: 16,
      height: 16,
      background: `${e.input.background}`,
      border: `1px solid ${Je(e.appBorderColor, 0.2)}`,
      borderRadius: 50,
      cursor: "grab",
      marginTop: 0,
    },
    "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } },
  })),
  D1 = A.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: "nowrap",
    fontFeatureSettings: "tnum",
    fontVariantNumeric: "tabular-nums",
  }),
  NR = A(D1)(({ numberOFDecimalsPlaces: e, max: t }) => ({
    width: `${e + t.toString().length * 2 + 3}ch`,
    textAlign: "right",
    flexShrink: 0,
  })),
  DR = A.div({ display: "flex", alignItems: "center", width: "100%" });
function VR(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var UR = ({
    name: e,
    value: t,
    onChange: r,
    min: n = 0,
    max: a = 100,
    step: l = 1,
    onBlur: i,
    onFocus: c,
  }) => {
    let s = (h) => {
        r(tR(h.target.value));
      },
      d = t !== void 0,
      p = o.useMemo(() => VR(l), [l]);
    return u.createElement(
      DR,
      null,
      u.createElement(D1, null, n),
      u.createElement(jR, {
        id: Fe(e),
        type: "range",
        onChange: s,
        name: e,
        value: t,
        min: n,
        max: a,
        step: l,
        onFocus: c,
        onBlur: i,
      }),
      u.createElement(
        NR,
        { numberOFDecimalsPlaces: p, max: a },
        d ? t.toFixed(p) : "--",
        " / ",
        a,
      ),
    );
  },
  WR = A.label({ display: "flex" }),
  qR = A.div(({ isMaxed: e }) => ({
    marginLeft: "0.75rem",
    paddingTop: "0.35rem",
    color: e ? "red" : void 0,
  })),
  GR = ({
    name: e,
    value: t,
    onChange: r,
    onFocus: n,
    onBlur: a,
    maxLength: l,
  }) => {
    let i = (h) => {
        r(h.target.value);
      },
      [c, s] = o.useState(!1),
      d = o.useCallback(() => {
        r(""), s(!0);
      }, [s]);
    if (t === void 0)
      return u.createElement(
        wt,
        { variant: "outline", size: "medium", id: Mn(e), onClick: d },
        "Set string",
      );
    let p = typeof t == "string";
    return u.createElement(
      WR,
      null,
      u.createElement(Nt.Textarea, {
        id: Fe(e),
        maxLength: l,
        onChange: i,
        size: "flex",
        placeholder: "Edit string...",
        autoFocus: c,
        valid: p ? null : "error",
        name: e,
        value: p ? t : "",
        onFocus: n,
        onBlur: a,
      }),
      l &&
        u.createElement(
          qR,
          { isMaxed: (t == null ? void 0 : t.length) === l },
          (t == null ? void 0 : t.length) ?? 0,
          " / ",
          l,
        ),
    );
  },
  YR = A(Nt.Input)({ padding: 10 });
function KR(e) {
  e.forEach((t) => {
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  });
}
var XR = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
    let a = o.useRef(null);
    function l(i) {
      if (!i.target.files) return;
      let c = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
      e(c), KR(n);
    }
    return (
      o.useEffect(() => {
        n == null && a.current && (a.current.value = null);
      }, [n, t]),
      u.createElement(YR, {
        ref: a,
        id: Fe(t),
        type: "file",
        name: t,
        multiple: !0,
        onChange: l,
        accept: r,
        size: "flex",
      })
    );
  },
  ZR = o.lazy(() =>
    Ft(
      () => import("./Color-RQJUDNI5-Cln0QlOz.js"),
      __vite__mapDeps([10, 2, 3, 6, 1, 4, 5, 7]),
      import.meta.url,
    ),
  ),
  JR = (e) =>
    u.createElement(
      o.Suspense,
      { fallback: u.createElement("div", null) },
      u.createElement(ZR, { ...e }),
    ),
  QR = {
    array: b0,
    object: b0,
    boolean: GC,
    color: JR,
    date: QC,
    number: rR,
    check: Kt,
    "inline-check": Kt,
    radio: Kt,
    "inline-radio": Kt,
    select: Kt,
    "multi-select": Kt,
    range: UR,
    text: GR,
    file: XR,
  },
  y0 = () => u.createElement(u.Fragment, null, "-"),
  eI = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
    var g;
    let { key: a, control: l } = e,
      [i, c] = o.useState(!1),
      [s, d] = o.useState({ value: t });
    o.useEffect(() => {
      i || d({ value: t });
    }, [i, t]);
    let p = o.useCallback((E) => (d({ value: E }), r({ [a]: E }), E), [r, a]),
      h = o.useCallback(() => c(!1), []),
      m = o.useCallback(() => c(!0), []);
    if (!l || l.disable) {
      let E =
        (l == null ? void 0 : l.disable) !== !0 &&
        ((g = e == null ? void 0 : e.type) == null ? void 0 : g.name) !==
          "function";
      return n && E
        ? u.createElement(
            Bt,
            {
              href: "https://storybook.js.org/docs/react/essentials/controls",
              target: "_blank",
              withArrow: !0,
            },
            "Setup controls",
          )
        : u.createElement(y0, null);
    }
    let f = {
        name: a,
        argType: e,
        value: s.value,
        onChange: p,
        onBlur: h,
        onFocus: m,
      },
      v = QR[l.type] || y0;
    return u.createElement(v, { ...f, ...l, controlType: l.type });
  },
  tI = A.span({ fontWeight: "bold" }),
  rI = A.span(({ theme: e }) => ({
    color: e.color.negative,
    fontFamily: e.typography.fonts.mono,
    cursor: "help",
  })),
  nI = A.div(({ theme: e }) => ({
    "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } },
    code: {
      ...ut({ theme: e }),
      fontSize: 12,
      fontFamily: e.typography.fonts.mono,
    },
    "& code": { margin: 0, display: "inline-block" },
    "& pre > code": { whiteSpace: "pre-wrap" },
  })),
  aI = A.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === "light"
        ? ee(0.1, e.color.defaultText)
        : ee(0.2, e.color.defaultText),
    marginTop: t ? 4 : 0,
  })),
  oI = A.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === "light"
        ? ee(0.1, e.color.defaultText)
        : ee(0.2, e.color.defaultText),
    marginTop: t ? 12 : 0,
    marginBottom: 12,
  })),
  lI = A.td(({ theme: e, expandable: t }) => ({
    paddingLeft: t ? "40px !important" : "20px !important",
  })),
  iI = (e) => e && { summary: typeof e == "string" ? e : e.name },
  on = (e) => {
    var g;
    let [t, r] = o.useState(!1),
      {
        row: n,
        updateArgs: a,
        compact: l,
        expandable: i,
        initialExpandedArgs: c,
      } = e,
      { name: s, description: d } = n,
      p = n.table || {},
      h = p.type || iI(n.type),
      m = p.defaultValue || n.defaultValue,
      f = (g = n.type) == null ? void 0 : g.required,
      v = d != null && d !== "";
    return u.createElement(
      "tr",
      { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
      u.createElement(
        lI,
        { expandable: i },
        u.createElement(tI, null, s),
        f ? u.createElement(rI, { title: "Required" }, "*") : null,
      ),
      l
        ? null
        : u.createElement(
            "td",
            null,
            v && u.createElement(nI, null, u.createElement(u1, null, d)),
            p.jsDocTags != null
              ? u.createElement(
                  u.Fragment,
                  null,
                  u.createElement(
                    oI,
                    { hasDescription: v },
                    u.createElement(Ta, { value: h, initialExpandedArgs: c }),
                  ),
                  u.createElement(LC, { tags: p.jsDocTags }),
                )
              : u.createElement(
                  aI,
                  { hasDescription: v },
                  u.createElement(Ta, { value: h, initialExpandedArgs: c }),
                ),
          ),
      l
        ? null
        : u.createElement(
            "td",
            null,
            u.createElement(Ta, { value: m, initialExpandedArgs: c }),
          ),
      a
        ? u.createElement(
            "td",
            null,
            u.createElement(eI, { ...e, isHovered: t }),
          )
        : null,
    );
  },
  sI = A(ec)(({ theme: e }) => ({
    marginRight: 8,
    marginLeft: -10,
    marginTop: -2,
    height: 12,
    width: 12,
    color:
      e.base === "light"
        ? ee(0.25, e.color.defaultText)
        : ee(0.3, e.color.defaultText),
    border: "none",
    display: "inline-block",
  })),
  cI = A(qo)(({ theme: e }) => ({
    marginRight: 8,
    marginLeft: -10,
    marginTop: -2,
    height: 12,
    width: 12,
    color:
      e.base === "light"
        ? ee(0.25, e.color.defaultText)
        : ee(0.3, e.color.defaultText),
    border: "none",
    display: "inline-block",
  })),
  dI = A.span(({ theme: e }) => ({
    display: "flex",
    lineHeight: "20px",
    alignItems: "center",
  })),
  uI = A.td(({ theme: e }) => ({
    position: "relative",
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s1 - 1,
    color:
      e.base === "light"
        ? ee(0.4, e.color.defaultText)
        : ee(0.6, e.color.defaultText),
    background: `${e.background.app} !important`,
    "& ~ td": { background: `${e.background.app} !important` },
  })),
  pI = A.td(({ theme: e }) => ({
    position: "relative",
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    background: e.background.app,
  })),
  fI = A.td(() => ({ position: "relative" })),
  hI = A.tr(({ theme: e }) => ({
    "&:hover > td": {
      backgroundColor: `${Ot(0.005, e.background.app)} !important`,
      boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
      cursor: "row-resize",
    },
  })),
  w0 = A.button(() => ({
    background: "none",
    border: "none",
    padding: "0",
    font: "inherit",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    color: "transparent",
    cursor: "row-resize !important",
  })),
  $a = ({
    level: e = "section",
    label: t,
    children: r,
    initialExpanded: n = !0,
    colSpan: a = 3,
  }) => {
    let [l, i] = o.useState(n),
      c = e === "subsection" ? pI : uI,
      s = (r == null ? void 0 : r.length) || 0,
      d = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "",
      p = `${l ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${s !== 1 ? "s" : ""}`;
    return u.createElement(
      u.Fragment,
      null,
      u.createElement(
        hI,
        { title: p },
        u.createElement(
          c,
          { colSpan: 1 },
          u.createElement(w0, { onClick: (h) => i(!l), tabIndex: 0 }, p),
          u.createElement(
            dI,
            null,
            l ? u.createElement(sI, null) : u.createElement(cI, null),
            t,
          ),
        ),
        u.createElement(
          fI,
          { colSpan: a - 1 },
          u.createElement(
            w0,
            { onClick: (h) => i(!l), tabIndex: -1, style: { outline: "none" } },
            p,
          ),
          l ? null : d,
        ),
      ),
      l ? r : null,
    );
  },
  ln = A.div(({ theme: e }) => ({
    display: "flex",
    gap: 16,
    borderBottom: `1px solid ${e.appBorderColor}`,
    "&:last-child": { borderBottom: 0 },
  })),
  fe = A.div(({ numColumn: e }) => ({
    display: "flex",
    flexDirection: "column",
    flex: e || 1,
    gap: 5,
    padding: "12px 20px",
  })),
  ie = A.div(({ theme: e, width: t, height: r }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    width: t || "100%",
    height: r || 16,
    borderRadius: 3,
  })),
  he = [2, 4, 2, 2],
  gI = () =>
    u.createElement(
      u.Fragment,
      null,
      u.createElement(
        ln,
        null,
        u.createElement(
          fe,
          { numColumn: he[0] },
          u.createElement(ie, { width: "60%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[1] },
          u.createElement(ie, { width: "30%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[2] },
          u.createElement(ie, { width: "60%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[3] },
          u.createElement(ie, { width: "60%" }),
        ),
      ),
      u.createElement(
        ln,
        null,
        u.createElement(
          fe,
          { numColumn: he[0] },
          u.createElement(ie, { width: "60%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[1] },
          u.createElement(ie, { width: "80%" }),
          u.createElement(ie, { width: "30%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[2] },
          u.createElement(ie, { width: "60%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[3] },
          u.createElement(ie, { width: "60%" }),
        ),
      ),
      u.createElement(
        ln,
        null,
        u.createElement(
          fe,
          { numColumn: he[0] },
          u.createElement(ie, { width: "60%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[1] },
          u.createElement(ie, { width: "80%" }),
          u.createElement(ie, { width: "30%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[2] },
          u.createElement(ie, { width: "60%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[3] },
          u.createElement(ie, { width: "60%" }),
        ),
      ),
      u.createElement(
        ln,
        null,
        u.createElement(
          fe,
          { numColumn: he[0] },
          u.createElement(ie, { width: "60%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[1] },
          u.createElement(ie, { width: "80%" }),
          u.createElement(ie, { width: "30%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[2] },
          u.createElement(ie, { width: "60%" }),
        ),
        u.createElement(
          fe,
          { numColumn: he[3] },
          u.createElement(ie, { width: "60%" }),
        ),
      ),
    ),
  mI = A.div(({ inAddonPanel: e, theme: t }) => ({
    height: e ? "100%" : "auto",
    display: "flex",
    border: e ? "none" : `1px solid ${t.appBorderColor}`,
    borderRadius: e ? 0 : t.appBorderRadius,
    padding: e ? 0 : 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 15,
    background: t.background.content,
    boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0",
  })),
  vI = A.div(({ theme: e }) => ({
    display: "flex",
    fontSize: e.typography.size.s2 - 1,
    gap: 25,
  })),
  bI = A.div(({ theme: e }) => ({
    width: 1,
    height: 16,
    backgroundColor: e.appBorderColor,
  })),
  yI = ({ inAddonPanel: e }) => {
    let [t, r] = o.useState(!0);
    return (
      o.useEffect(() => {
        let n = setTimeout(() => {
          r(!1);
        }, 100);
        return () => clearTimeout(n);
      }, []),
      t
        ? null
        : u.createElement(
            mI,
            { inAddonPanel: e },
            u.createElement(il, {
              title: e
                ? "Interactive story playground"
                : "Args table with interactive controls couldn't be auto-generated",
              description: u.createElement(
                u.Fragment,
                null,
                "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.",
              ),
              footer: u.createElement(
                vI,
                null,
                e &&
                  u.createElement(
                    u.Fragment,
                    null,
                    u.createElement(
                      Bt,
                      {
                        href: "https://youtu.be/0gOfS6K0x0E",
                        target: "_blank",
                        withArrow: !0,
                      },
                      u.createElement(Xs, null),
                      " Watch 5m video",
                    ),
                    u.createElement(bI, null),
                    u.createElement(
                      Bt,
                      {
                        href: "https://storybook.js.org/docs/essentials/controls",
                        target: "_blank",
                        withArrow: !0,
                      },
                      u.createElement(Cn, null),
                      " Read docs",
                    ),
                  ),
                !e &&
                  u.createElement(
                    Bt,
                    {
                      href: "https://storybook.js.org/docs/essentials/controls",
                      target: "_blank",
                      withArrow: !0,
                    },
                    u.createElement(Cn, null),
                    " Learn how to set that up",
                  ),
              ),
            }),
          )
    );
  },
  wI = A.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
    "&&": {
      borderSpacing: 0,
      color: e.color.defaultText,
      "td, th": {
        padding: 0,
        border: "none",
        verticalAlign: "top",
        textOverflow: "ellipsis",
      },
      fontSize: e.typography.size.s2 - 1,
      lineHeight: "20px",
      textAlign: "left",
      width: "100%",
      marginTop: r ? 0 : 25,
      marginBottom: r ? 0 : 40,
      "thead th:first-of-type, td:first-of-type": { width: "25%" },
      "th:first-of-type, td:first-of-type": { paddingLeft: 20 },
      "th:nth-of-type(2), td:nth-of-type(2)": {
        ...(t ? null : { width: "35%" }),
      },
      "td:nth-of-type(3)": { ...(t ? null : { width: "15%" }) },
      "th:last-of-type, td:last-of-type": {
        paddingRight: 20,
        ...(t ? null : { width: "25%" }),
      },
      th: {
        color:
          e.base === "light"
            ? ee(0.25, e.color.defaultText)
            : ee(0.45, e.color.defaultText),
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
      },
      td: {
        paddingTop: "10px",
        paddingBottom: "10px",
        "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 },
        "&:last-of-type": { paddingRight: 20 },
      },
      marginLeft: r ? 0 : 1,
      marginRight: r ? 0 : 1,
      tbody: {
        ...(r
          ? null
          : {
              filter:
                e.base === "light"
                  ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))"
                  : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))",
            }),
        "> tr > *": {
          background: e.background.content,
          borderTop: `1px solid ${e.appBorderColor}`,
        },
        ...(r
          ? null
          : {
              "> tr:first-of-type > *": {
                borderBlockStart: `1px solid ${e.appBorderColor}`,
              },
              "> tr:last-of-type > *": {
                borderBlockEnd: `1px solid ${e.appBorderColor}`,
              },
              "> tr > *:first-of-type": {
                borderInlineStart: `1px solid ${e.appBorderColor}`,
              },
              "> tr > *:last-of-type": {
                borderInlineEnd: `1px solid ${e.appBorderColor}`,
              },
              "> tr:first-of-type > td:first-of-type": {
                borderTopLeftRadius: e.appBorderRadius,
              },
              "> tr:first-of-type > td:last-of-type": {
                borderTopRightRadius: e.appBorderRadius,
              },
              "> tr:last-of-type > td:first-of-type": {
                borderBottomLeftRadius: e.appBorderRadius,
              },
              "> tr:last-of-type > td:last-of-type": {
                borderBottomRightRadius: e.appBorderRadius,
              },
            }),
      },
    },
  })),
  xI = A(Ht)(({ theme: e }) => ({ margin: "-4px -12px -4px 0" })),
  EI = A.span({ display: "flex", justifyContent: "space-between" }),
  SI = {
    alpha: (e, t) => e.name.localeCompare(t.name),
    requiredFirst: (e, t) => {
      var r, n;
      return (
        +!!((r = t.type) != null && r.required) -
          +!!((n = e.type) != null && n.required) ||
        e.name.localeCompare(t.name)
      );
    },
    none: void 0,
  },
  CI = (e, t) => {
    let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
    if (!e) return r;
    Object.entries(e).forEach(([l, i]) => {
      let { category: c, subcategory: s } =
        (i == null ? void 0 : i.table) || {};
      if (c) {
        let d = r.sections[c] || { ungrouped: [], subsections: {} };
        if (!s) d.ungrouped.push({ key: l, ...i });
        else {
          let p = d.subsections[s] || [];
          p.push({ key: l, ...i }), (d.subsections[s] = p);
        }
        r.sections[c] = d;
      } else if (s) {
        let d = r.ungroupedSubsections[s] || [];
        d.push({ key: l, ...i }), (r.ungroupedSubsections[s] = d);
      } else r.ungrouped.push({ key: l, ...i });
    });
    let n = SI[t],
      a = (l) =>
        n
          ? Object.keys(l).reduce((i, c) => ({ ...i, [c]: l[c].sort(n) }), {})
          : l;
    return {
      ungrouped: r.ungrouped.sort(n),
      ungroupedSubsections: a(r.ungroupedSubsections),
      sections: Object.keys(r.sections).reduce(
        (l, i) => ({
          ...l,
          [i]: {
            ungrouped: r.sections[i].ungrouped.sort(n),
            subsections: a(r.sections[i].subsections),
          },
        }),
        {},
      ),
    };
  },
  RI = (e, t, r) => {
    try {
      return J1(e, t, r);
    } catch (n) {
      return nC.warn(n.message), !1;
    }
  },
  uo = (e) => {
    let {
      updateArgs: t,
      resetArgs: r,
      compact: n,
      inAddonPanel: a,
      initialExpandedArgs: l,
      sort: i = "none",
      isLoading: c,
    } = e;
    if ("error" in e) {
      let { error: y } = e;
      return u.createElement(
        I1,
        null,
        y,
        " ",
        u.createElement(
          Bt,
          {
            href: "http://storybook.js.org/docs/",
            target: "_blank",
            withArrow: !0,
          },
          u.createElement(Cn, null),
          " Read the docs",
        ),
      );
    }
    if (c) return u.createElement(gI, null);
    let { rows: s, args: d, globals: p } = "rows" in e && e,
      h = CI(
        c6(s, (y) => {
          var b;
          return (
            !((b = y == null ? void 0 : y.table) != null && b.disable) &&
            RI(y, d || {}, p || {})
          );
        }),
        i,
      ),
      m = h.ungrouped.length === 0,
      f = Object.entries(h.sections).length === 0,
      v = Object.entries(h.ungroupedSubsections).length === 0;
    if (m && f && v) return u.createElement(yI, { inAddonPanel: a });
    let g = 1;
    t && (g += 1), n || (g += 2);
    let E = Object.keys(h.sections).length > 0,
      x = {
        updateArgs: t,
        compact: n,
        inAddonPanel: a,
        initialExpandedArgs: l,
      };
    return u.createElement(
      el,
      null,
      u.createElement(
        wI,
        {
          compact: n,
          inAddonPanel: a,
          className: "docblock-argstable sb-unstyled",
        },
        u.createElement(
          "thead",
          { className: "docblock-argstable-head" },
          u.createElement(
            "tr",
            null,
            u.createElement("th", null, u.createElement("span", null, "Name")),
            n
              ? null
              : u.createElement(
                  "th",
                  null,
                  u.createElement("span", null, "Description"),
                ),
            n
              ? null
              : u.createElement(
                  "th",
                  null,
                  u.createElement("span", null, "Default"),
                ),
            t
              ? u.createElement(
                  "th",
                  null,
                  u.createElement(
                    EI,
                    null,
                    "Control",
                    " ",
                    !c &&
                      r &&
                      u.createElement(
                        xI,
                        { onClick: () => r(), title: "Reset controls" },
                        u.createElement(rc, { "aria-hidden": !0 }),
                      ),
                  ),
                )
              : null,
          ),
        ),
        u.createElement(
          "tbody",
          { className: "docblock-argstable-body" },
          h.ungrouped.map((y) =>
            u.createElement(on, {
              key: y.key,
              row: y,
              arg: d && d[y.key],
              ...x,
            }),
          ),
          Object.entries(h.ungroupedSubsections).map(([y, b]) =>
            u.createElement(
              $a,
              { key: y, label: y, level: "subsection", colSpan: g },
              b.map((w) =>
                u.createElement(on, {
                  key: w.key,
                  row: w,
                  arg: d && d[w.key],
                  expandable: E,
                  ...x,
                }),
              ),
            ),
          ),
          Object.entries(h.sections).map(([y, b]) =>
            u.createElement(
              $a,
              { key: y, label: y, level: "section", colSpan: g },
              b.ungrouped.map((w) =>
                u.createElement(on, {
                  key: w.key,
                  row: w,
                  arg: d && d[w.key],
                  ...x,
                }),
              ),
              Object.entries(b.subsections).map(([w, S]) =>
                u.createElement(
                  $a,
                  { key: w, label: w, level: "subsection", colSpan: g },
                  S.map((C) =>
                    u.createElement(on, {
                      key: C.key,
                      row: C,
                      arg: d && d[C.key],
                      expandable: E,
                      ...x,
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  },
  II = ({ tabs: e, ...t }) => {
    let r = Object.entries(e);
    return r.length === 1
      ? u.createElement(uo, { ...r[0][1], ...t })
      : u.createElement(
          cl,
          null,
          r.map((n, a) => {
            let [l, i] = n,
              c = `prop_table_div_${l}`,
              s = "div",
              d = a === 0 ? t : { sort: t.sort };
            return u.createElement(
              s,
              { key: c, id: c, title: l },
              ({ active: p }) =>
                p
                  ? u.createElement(uo, { key: `prop_table_${l}`, ...i, ...d })
                  : null,
            );
          }),
        );
  };
A.div(({ theme: e }) => ({
  marginRight: 30,
  fontSize: `${e.typography.size.s1}px`,
  color:
    e.base === "light"
      ? ee(0.4, e.color.defaultText)
      : ee(0.6, e.color.defaultText),
}));
A.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
A.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  "&:not(:last-child)": { marginBottom: "1rem" },
});
A.div(re, ({ theme: e }) => ({
  ...Zn(e),
  margin: "25px 0 40px",
  padding: "30px 20px",
}));
A.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
}));
A.div(({ theme: e }) => ({
  color:
    e.base === "light"
      ? ee(0.2, e.color.defaultText)
      : ee(0.6, e.color.defaultText),
}));
A.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
A.div(({ theme: e }) => ({
  flex: 1,
  textAlign: "center",
  fontFamily: e.typography.fonts.mono,
  fontSize: e.typography.size.s1,
  lineHeight: 1,
  overflow: "hidden",
  color:
    e.base === "light"
      ? ee(0.4, e.color.defaultText)
      : ee(0.6, e.color.defaultText),
  "> div": {
    display: "inline-block",
    overflow: "hidden",
    maxWidth: "100%",
    textOverflow: "ellipsis",
  },
  span: { display: "block", marginTop: 2 },
}));
A.div({ display: "flex", flexDirection: "row" });
A.div(({ background: e }) => ({
  position: "relative",
  flex: 1,
  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: e,
    content: '""',
  },
}));
A.div(({ theme: e }) => ({
  ...Zn(e),
  display: "flex",
  flexDirection: "row",
  height: 50,
  marginBottom: 5,
  overflow: "hidden",
  backgroundColor: "white",
  backgroundImage:
    "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",
  backgroundClip: "padding-box",
}));
A.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  position: "relative",
  marginBottom: 30,
});
A.div({ flex: 1, display: "flex", flexDirection: "row" });
A.div({ display: "flex", alignItems: "flex-start" });
A.div({ flex: "0 0 30%" });
A.div({ flex: 1 });
A.div(({ theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: 20,
  fontWeight: e.typography.weight.bold,
  color:
    e.base === "light"
      ? ee(0.4, e.color.defaultText)
      : ee(0.6, e.color.defaultText),
}));
A.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  display: "flex",
  flexDirection: "column",
}));
A.div(({ theme: e }) => ({
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s2,
  color: e.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2,
}));
A.div(({ theme: e }) => ({
  ...Zn(e),
  overflow: "hidden",
  height: 40,
  width: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "none",
  "> img, > svg": { width: 20, height: 20 },
}));
A.div({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  flex: "0 1 calc(20% - 10px)",
  minWidth: 120,
  margin: "0px 10px 30px 0",
});
A.div({ display: "flex", flexFlow: "row wrap" });
var AI = (e) => `anchor--${e}`,
  V1 = ({ storyId: e, children: t }) =>
    u.createElement("div", { id: AI(e), className: "sb-anchor" }, t);
Te &&
  Te.__DOCS_CONTEXT__ === void 0 &&
  ((Te.__DOCS_CONTEXT__ = o.createContext(null)),
  (Te.__DOCS_CONTEXT__.displayName = "DocsContext"));
var Ae = Te ? Te.__DOCS_CONTEXT__ : o.createContext(null),
  Yr = (e, t) => o.useContext(Ae).resolveOf(e, t),
  _I = (e) =>
    e
      .split("-")
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
      .join(""),
  kI = (e) => {
    if (e)
      return typeof e == "string"
        ? e.includes("-")
          ? _I(e)
          : e
        : e.__docgenInfo && e.__docgenInfo.displayName
          ? e.__docgenInfo.displayName
          : e.name;
  };
function OI(e, t = "start") {
  e.scrollIntoView({ behavior: "smooth", block: t, inline: "nearest" });
}
function U1(e) {
  return ZS(e, { allowFunction: !1 });
}
var W1 = o.createContext({ sources: {} }),
  q1 = "--unknown--",
  TI = ({ children: e, channel: t }) => {
    let [r, n] = o.useState({});
    return (
      o.useEffect(() => {
        let a = (l, i = null, c = !1) => {
          let {
              id: s,
              args: d = void 0,
              source: p,
              format: h,
            } = typeof l == "string" ? { id: l, source: i, format: c } : l,
            m = d ? U1(d) : q1;
          n((f) => ({ ...f, [s]: { ...f[s], [m]: { code: p, format: h } } }));
        };
        return t.on(Ml, a), () => t.off(Ml, a);
      }, []),
      u.createElement(W1.Provider, { value: { sources: r } }, e)
    );
  },
  MI = (e, t, r) => {
    let { sources: n } = r,
      a = n == null ? void 0 : n[e];
    return (
      (a == null ? void 0 : a[U1(t)]) ||
      (a == null ? void 0 : a[q1]) || { code: "" }
    );
  },
  $I = ({
    snippet: e,
    storyContext: t,
    typeFromProps: r,
    transformFromProps: n,
  }) => {
    var s, d;
    let { __isArgsStory: a } = t.parameters,
      l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {},
      i = r || l.type || ra.AUTO;
    if (l.code !== void 0) return l.code;
    let c =
      i === ra.DYNAMIC || (i === ra.AUTO && e && a)
        ? e
        : l.originalSource || "";
    return ((d = n ?? l.transform) == null ? void 0 : d(c, t)) || c;
  },
  LI = (e, t, r) => {
    var f, v, g, E;
    let n,
      { of: a } = e;
    if ("of" in e && a === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?",
      );
    if (a) n = t.resolveOf(a, ["story"]).story;
    else
      try {
        n = t.storyById();
      } catch {}
    let l =
        ((v =
          (f = n == null ? void 0 : n.parameters) == null ? void 0 : f.docs) ==
        null
          ? void 0
          : v.source) || {},
      { code: i } = e,
      c = e.format ?? l.format,
      s = e.language ?? l.language ?? "jsx",
      d = e.dark ?? l.dark ?? !1;
    if (!i && !n) return { error: "Oh no! The source is not available." };
    if (i) return { code: i, format: c, language: s, dark: d };
    let p = t.getStoryContext(n),
      h = e.__forceInitialArgs ? p.initialArgs : p.unmappedArgs,
      m = MI(n.id, h, r);
    return (
      (c =
        m.format ??
        ((E = (g = n.parameters.docs) == null ? void 0 : g.source) == null
          ? void 0
          : E.format) ??
        !1),
      {
        code: $I({
          snippet: m.code,
          storyContext: { ...p, args: h },
          typeFromProps: e.type,
          transformFromProps: e.transform,
        }),
        format: c,
        language: s,
        dark: d,
      }
    );
  };
function zI(e, t) {
  let r = BI([e], t);
  return r && r[0];
}
function BI(e, t) {
  let [r, n] = o.useState({});
  return (
    o.useEffect(() => {
      Promise.all(
        e.map(async (a) => {
          let l = await t.loadStory(a);
          n((i) => (i[a] === l ? i : { ...i, [a]: l }));
        }),
      );
    }),
    e.map((a) => {
      if (r[a]) return r[a];
      try {
        return t.storyById(a);
      } catch {
        return null;
      }
    })
  );
}
var PI = (e, t) => {
    let { of: r, meta: n } = e;
    if ("of" in e && r === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?",
      );
    return (
      n && t.referenceMeta(n, !1), t.resolveOf(r || "story", ["story"]).story.id
    );
  },
  HI = (e, t, r) => {
    let { parameters: n = {} } = t || {},
      { docs: a = {} } = n,
      l = a.story || {};
    if (a.disable) return null;
    if (e.inline ?? l.inline ?? !1) {
      let c = e.height ?? l.height,
        s = e.autoplay ?? l.autoplay ?? !1;
      return {
        story: t,
        inline: !0,
        height: c,
        autoplay: s,
        forceInitialArgs: !!e.__forceInitialArgs,
        primary: !!e.__primary,
        renderStoryToElement: r.renderStoryToElement,
      };
    }
    let i = e.height ?? l.height ?? l.iframeHeight ?? "100px";
    return { story: t, inline: !1, height: i, primary: !!e.__primary };
  },
  FI = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
    let t = o.useContext(Ae),
      r = PI(e, t),
      n = zI(r, t);
    if (!n) return u.createElement(_1, null);
    let a = HI(e, n, t);
    return a ? u.createElement(IC, { ...a }) : null;
  },
  jI = (e) => {
    var m, f, v, g, E, x, y, b, w, S;
    let t = o.useContext(Ae),
      r = o.useContext(W1),
      { of: n, source: a } = e;
    if ("of" in e && n === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?",
      );
    let { story: l } = Yr(n || "story", ["story"]),
      i = LI({ ...a, ...(n && { of: n }) }, t, r),
      c =
        e.layout ??
        l.parameters.layout ??
        ((f = (m = l.parameters.docs) == null ? void 0 : m.canvas) == null
          ? void 0
          : f.layout) ??
        "padded",
      s =
        e.withToolbar ??
        ((g = (v = l.parameters.docs) == null ? void 0 : v.canvas) == null
          ? void 0
          : g.withToolbar) ??
        !1,
      d =
        e.additionalActions ??
        ((x = (E = l.parameters.docs) == null ? void 0 : E.canvas) == null
          ? void 0
          : x.additionalActions),
      p =
        e.sourceState ??
        ((b = (y = l.parameters.docs) == null ? void 0 : y.canvas) == null
          ? void 0
          : b.sourceState) ??
        "hidden",
      h =
        e.className ??
        ((S = (w = l.parameters.docs) == null ? void 0 : w.canvas) == null
          ? void 0
          : S.className);
    return u.createElement(
      k1,
      {
        withSource: p === "none" ? void 0 : i,
        isExpanded: p === "shown",
        withToolbar: s,
        additionalActions: d,
        className: h,
        layout: c,
      },
      u.createElement(FI, {
        of: n || l.moduleExport,
        meta: e.meta,
        ...e.story,
      }),
    );
  },
  NI = (e, t) => {
    let r = t.getStoryContext(e),
      [n, a] = o.useState(r.globals);
    return (
      o.useEffect(() => {
        let l = (i) => {
          a(i.globals);
        };
        return t.channel.on(s0, l), () => t.channel.off(s0, l);
      }, [t.channel]),
      [n]
    );
  },
  DI = (e, t) => {
    let r = VI(e, t);
    if (!r) throw new Error("No result when story was defined");
    return r;
  },
  VI = (e, t) => {
    let r = e ? t.getStoryContext(e) : { args: {} },
      { id: n } = e || { id: "none" },
      [a, l] = o.useState(r.args);
    o.useEffect(() => {
      let s = (d) => {
        d.storyId === n && l(d.args);
      };
      return t.channel.on(c0, s), () => t.channel.off(c0, s);
    }, [n, t.channel]);
    let i = o.useCallback(
        (s) => t.channel.emit(aC, { storyId: n, updatedArgs: s }),
        [n, t.channel],
      ),
      c = o.useCallback(
        (s) => t.channel.emit(oC, { storyId: n, argNames: s }),
        [n, t.channel],
      );
    return e && [a, i, c];
  };
function UI(e, t) {
  let { extractArgTypes: r } = t.docs || {};
  if (!r)
    throw new Error(
      "Args unsupported. See Args documentation for your framework.",
    );
  return r(e);
}
var WI = (e) => {
    var w;
    let { of: t } = e;
    if ("of" in e && t === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?",
      );
    let r = o.useContext(Ae),
      { story: n } = r.resolveOf(t || "story", ["story"]),
      { parameters: a, argTypes: l, component: i, subcomponents: c } = n,
      s = ((w = a.docs) == null ? void 0 : w.controls) || {},
      d = e.include ?? s.include,
      p = e.exclude ?? s.exclude,
      h = e.sort ?? s.sort,
      [m, f, v] = DI(n, r),
      [g] = NI(n, r),
      E = i0(l, d, p);
    if (!(c && Object.keys(c).length > 0))
      return Object.keys(E).length > 0 || Object.keys(m).length > 0
        ? u.createElement(uo, {
            rows: E,
            sort: h,
            args: m,
            globals: g,
            updateArgs: f,
            resetArgs: v,
          })
        : null;
    let x = kI(i),
      y = Object.fromEntries(
        Object.entries(c).map(([S, C]) => [
          S,
          { rows: i0(UI(C, a), d, p), sort: h },
        ]),
      ),
      b = { [x]: { rows: E, sort: h }, ...y };
    return u.createElement(II, {
      tabs: b,
      sort: h,
      args: m,
      globals: g,
      updateArgs: f,
      resetArgs: v,
    });
  },
  { document: G1 } = Te,
  qI = ({ className: e, children: t, ...r }) => {
    if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g)))
      return u.createElement(Zo, null, t);
    let n = e && e.split("-");
    return u.createElement(xl, {
      language: (n && n[1]) || "text",
      format: !1,
      code: t,
      ...r,
    });
  };
function Rl(e, t) {
  e.channel.emit(lC, t);
}
var po = Fc.a,
  GI = ({ hash: e, children: t }) => {
    let r = o.useContext(Ae);
    return u.createElement(
      po,
      {
        href: e,
        target: "_self",
        onClick: (n) => {
          let a = e.substring(1);
          G1.getElementById(a) && Rl(r, e);
        },
      },
      t,
    );
  },
  YI = (e) => {
    let { href: t, target: r, children: n, ...a } = e,
      l = o.useContext(Ae);
    if (t) {
      if (t.startsWith("#")) return u.createElement(GI, { hash: t }, n);
      if (r !== "_blank" && !t.startsWith("https://"))
        return u.createElement(
          po,
          {
            href: t,
            onClick: (i) => {
              i.button === 0 &&
                !i.altKey &&
                !i.ctrlKey &&
                !i.metaKey &&
                !i.shiftKey &&
                (i.preventDefault(),
                Rl(l, i.currentTarget.getAttribute("href")));
            },
            target: r,
            ...a,
          },
          n,
        );
    }
    return u.createElement(po, { ...e });
  },
  Y1 = ["h1", "h2", "h3", "h4", "h5", "h6"],
  KI = Y1.reduce(
    (e, t) => ({
      ...e,
      [t]: A(t)({
        "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" },
        "&:hover svg": { visibility: "visible" },
      }),
    }),
    {},
  ),
  XI = A.a(() => ({
    float: "left",
    lineHeight: "inherit",
    paddingRight: "10px",
    marginLeft: "-24px",
    color: "inherit",
  })),
  ZI = ({ as: e, id: t, children: r, ...n }) => {
    let a = o.useContext(Ae),
      l = KI[e],
      i = `#${t}`;
    return u.createElement(
      l,
      { id: t, ...n },
      u.createElement(
        XI,
        {
          "aria-hidden": "true",
          href: i,
          tabIndex: -1,
          target: "_self",
          onClick: (c) => {
            G1.getElementById(t) && Rl(a, i);
          },
        },
        u.createElement(Qs, null),
      ),
      r,
    );
  },
  Il = (e) => {
    let { as: t, id: r, children: n, ...a } = e;
    if (r) return u.createElement(ZI, { as: t, id: r, ...a }, n);
    let l = t,
      { as: i, ...c } = e;
    return u.createElement(l, { ...te(c, t) });
  },
  JI = Y1.reduce(
    (e, t) => ({ ...e, [t]: (r) => u.createElement(Il, { as: t, ...r }) }),
    {},
  ),
  QI = (e) => {
    var t;
    if (!e.children) return null;
    if (typeof e.children != "string")
      throw new Error(wd`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
    return u.createElement(u1, {
      ...e,
      options: {
        forceBlock: !0,
        overrides: {
          code: qI,
          a: YI,
          ...JI,
          ...((t = e == null ? void 0 : e.options) == null
            ? void 0
            : t.overrides),
        },
        ...(e == null ? void 0 : e.options),
      },
    });
  },
  eA = ((e) => (
    (e.INFO = "info"),
    (e.NOTES = "notes"),
    (e.DOCGEN = "docgen"),
    (e.AUTO = "auto"),
    e
  ))(eA || {}),
  tA = (e) => {
    var t, r, n, a, l, i, c, s;
    switch (e.type) {
      case "story":
        return (
          ((r =
            (t = e.story.parameters.docs) == null ? void 0 : t.description) ==
          null
            ? void 0
            : r.story) || null
        );
      case "meta": {
        let { parameters: d, component: p } = e.preparedMeta;
        return (
          ((a = (n = d.docs) == null ? void 0 : n.description) == null
            ? void 0
            : a.component) ||
          ((i =
            (l = d.docs) == null ? void 0 : l.extractComponentDescription) ==
          null
            ? void 0
            : i.call(l, p, { component: p, parameters: d })) ||
          null
        );
      }
      case "component": {
        let {
          component: d,
          projectAnnotations: { parameters: p },
        } = e;
        return (
          ((s =
            (c = p.docs) == null ? void 0 : c.extractComponentDescription) ==
          null
            ? void 0
            : s.call(c, d, { component: d, parameters: p })) || null
        );
      }
      default:
        throw new Error(
          `Unrecognized module type resolved from 'useOf', got: ${e.type}`,
        );
    }
  },
  fo = (e) => {
    let { of: t } = e;
    if ("of" in e && t === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?",
      );
    let r = Yr(t || "meta"),
      n = tA(r);
    return n ? u.createElement(QI, null, n) : null;
  },
  rA = A.div(({ theme: e }) => ({
    width: "10rem",
    "@media (max-width: 768px)": { display: "none" },
  })),
  nA = A.div(({ theme: e }) => ({
    position: "fixed",
    bottom: 0,
    top: 0,
    width: "10rem",
    paddingTop: "4rem",
    paddingBottom: "2rem",
    overflowY: "auto",
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s2,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitOverflowScrolling: "touch",
    "& *": { boxSizing: "border-box" },
    "& > .toc-wrapper > .toc-list": {
      paddingLeft: 0,
      borderLeft: `solid 2px ${e.color.mediumlight}`,
      ".toc-list": {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
        ".toc-list": {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
        },
      },
    },
    "& .toc-list-item": {
      position: "relative",
      listStyleType: "none",
      marginLeft: 20,
      paddingTop: 3,
      paddingBottom: 3,
    },
    "& .toc-list-item::before": {
      content: '""',
      position: "absolute",
      height: "100%",
      top: 0,
      left: 0,
      transform: "translateX(calc(-2px - 20px))",
      borderLeft: `solid 2px ${e.color.mediumdark}`,
      opacity: 0,
      transition: "opacity 0.2s",
    },
    "& .toc-list-item.is-active-li::before": { opacity: 1 },
    "& .toc-list-item > a": {
      color: e.color.defaultText,
      textDecoration: "none",
    },
    "& .toc-list-item.is-active-li > a": {
      fontWeight: 600,
      color: e.color.secondary,
      textDecoration: "none",
    },
  })),
  aA = A.p(({ theme: e }) => ({
    fontWeight: 600,
    fontSize: "0.875em",
    color: e.textColor,
    textTransform: "uppercase",
    marginBottom: 10,
  })),
  oA = ({ title: e }) =>
    e === null ? null : typeof e == "string" ? u.createElement(aA, null, e) : e,
  lA = ({
    title: e,
    disable: t,
    headingSelector: r,
    contentsSelector: n,
    ignoreSelector: a,
    unsafeTocbotOptions: l,
  }) => (
    o.useEffect(() => {
      let i = {
          tocSelector: ".toc-wrapper",
          contentSelector: n ?? ".sbdocs-content",
          headingSelector: r ?? "h3",
          ignoreSelector: a ?? ".docs-story *, .skip-toc",
          headingsOffset: 40,
          scrollSmoothOffset: -40,
          orderedList: !1,
          onClick: () => !1,
          ...l,
        },
        c = setTimeout(() => l0.init(i), 100);
      return () => {
        clearTimeout(c), l0.destroy();
      };
    }, [t]),
    u.createElement(
      u.Fragment,
      null,
      u.createElement(
        rA,
        null,
        t
          ? null
          : u.createElement(
              nA,
              null,
              u.createElement(oA, { title: e || null }),
              u.createElement("div", { className: "toc-wrapper" }),
            ),
      ),
    )
  ),
  { document: iA, window: sA } = Te,
  cA = ({ context: e, theme: t, children: r }) => {
    var a, l, i, c, s;
    let n;
    try {
      n =
        (l =
          (a = e.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null
            ? void 0
            : a.docs) == null
          ? void 0
          : l.toc;
    } catch {
      n =
        (s =
          (c =
            (i = e == null ? void 0 : e.projectAnnotations) == null
              ? void 0
              : i.parameters) == null
            ? void 0
            : c.docs) == null
          ? void 0
          : s.toc;
    }
    return (
      o.useEffect(() => {
        let d;
        try {
          if (((d = new URL(sA.parent.location.toString())), d.hash)) {
            let p = iA.getElementById(d.hash.substring(1));
            p &&
              setTimeout(() => {
                OI(p);
              }, 200);
          }
        } catch {}
      }),
      u.createElement(
        Ae.Provider,
        { value: e },
        u.createElement(
          TI,
          { channel: e.channel },
          u.createElement(
            ts,
            { theme: Wp(t) },
            u.createElement(
              gC,
              {
                toc: n
                  ? u.createElement(lA, {
                      className: "sbdocs sbdocs-toc--custom",
                      ...n,
                    })
                  : null,
              },
              r,
            ),
          ),
        ),
      )
    );
  },
  dA = /\s*\/\s*/,
  uA = (e) => {
    let t = e.trim().split(dA);
    return (t && t[t.length - 1]) || e;
  },
  pA = ({ children: e }) => {
    let t = o.useContext(Ae),
      r = e || uA(t.storyById().title);
    return r
      ? u.createElement(uC, { className: "sbdocs-title sb-unstyled" }, r)
      : null;
  },
  fA = ({ children: e }) => {
    var n;
    let t = o.useContext(Ae),
      r =
        e ||
        ((n = t.storyById().parameters) == null ? void 0 : n.componentSubtitle);
    return r
      ? u.createElement(pC, { className: "sbdocs-subtitle sb-unstyled" }, r)
      : null;
  },
  hA = ({ children: e, disableAnchor: t }) => {
    if (t || typeof e != "string") return u.createElement(Qo, null, e);
    let r = globalThis.encodeURIComponent(e.toLowerCase());
    return u.createElement(Il, { as: "h3", id: r }, e);
  },
  K1 = ({
    of: e,
    expanded: t = !0,
    withToolbar: r = !1,
    __forceInitialArgs: n = !1,
    __primary: a = !1,
  }) => {
    var c, s;
    let { story: l } = Yr(e || "story", ["story"]),
      i =
        ((s = (c = l.parameters.docs) == null ? void 0 : c.canvas) == null
          ? void 0
          : s.withToolbar) ?? r;
    return u.createElement(
      V1,
      { storyId: l.id },
      t &&
        u.createElement(
          u.Fragment,
          null,
          u.createElement(hA, null, l.name),
          u.createElement(fo, { of: e }),
        ),
      u.createElement(jI, {
        of: e,
        withToolbar: i,
        story: { __forceInitialArgs: n, __primary: a },
        source: { __forceInitialArgs: n },
      }),
    );
  },
  gA = (e) => {
    let { of: t } = e;
    if ("of" in e && t === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?",
      );
    let { csfFile: r } = Yr(t || "meta", ["meta"]),
      n = o.useContext(Ae).componentStoriesFromCSFFile(r)[0];
    return n
      ? u.createElement(K1, {
          of: n.moduleExport,
          expanded: !1,
          __primary: !0,
          withToolbar: !0,
        })
      : null;
  },
  mA = ({ children: e, disableAnchor: t, ...r }) => {
    if (t || typeof e != "string") return u.createElement(Jo, null, e);
    let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    return u.createElement(Il, { as: "h2", id: n, ...r }, e);
  },
  vA = A(mA)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    fontWeight: e.typography.weight.bold,
    lineHeight: "16px",
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    color: e.textMutedColor,
    border: 0,
    marginBottom: "12px",
    "&:first-of-type": { marginTop: "56px" },
  })),
  bA = ({ title: e = "Stories", includePrimary: t = !0 }) => {
    var c;
    let {
        componentStories: r,
        projectAnnotations: n,
        getStoryContext: a,
      } = o.useContext(Ae),
      l = r(),
      { stories: { filter: i } = { filter: void 0 } } =
        ((c = n.parameters) == null ? void 0 : c.docs) || {};
    return (
      i && (l = l.filter((s) => i(s, a(s)))),
      t || (l = l.slice(1)),
      !l || l.length === 0
        ? null
        : u.createElement(
            u.Fragment,
            null,
            u.createElement(vA, null, e),
            l.map(
              (s) =>
                s &&
                u.createElement(K1, {
                  key: s.id,
                  of: s.moduleExport,
                  expanded: !0,
                  __forceInitialArgs: !0,
                }),
            ),
          )
    );
  },
  yA = () => {
    let e = Yr("meta", ["meta"]),
      { stories: t } = e.csfFile,
      r = Object.keys(t).length === 1;
    return u.createElement(
      u.Fragment,
      null,
      u.createElement(pA, null),
      u.createElement(fA, null),
      u.createElement(fo, { of: "meta" }),
      r ? u.createElement(fo, { of: "story" }) : null,
      u.createElement(gA, null),
      u.createElement(WI, null),
      r ? null : u.createElement(bA, null),
    );
  };
function MA({ context: e, docsParameter: t }) {
  let r = t.container || cA,
    n = t.page || yA;
  return u.createElement(
    r,
    { context: e, theme: t.theme },
    u.createElement(n, null),
  );
}
var $A = ({ of: e }) => {
  let t = o.useContext(Ae);
  e && t.referenceMeta(e, !0);
  try {
    let r = t.storyById();
    return u.createElement(V1, { storyId: r.id });
  } catch {
    return null;
  }
};
export {
  YI as A,
  qI as C,
  MA as D,
  Nt as F,
  JI as H,
  Tm as M,
  Po as S,
  B7 as T,
  Ng as W,
  ph as a,
  Vs as b,
  Os as c,
  _7 as d,
  $A as e,
  Fe as g,
  Dt as m,
  A as n,
  _A as s,
};
