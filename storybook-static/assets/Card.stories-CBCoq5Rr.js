import { j as f } from "./jsx-runtime-CKrituN3.js";
import { f as A } from "./index-BASH1HpE.js";
import { g as P } from "./_commonjsHelpers-BosuxZz1.js";
import "./index-CBqU2yxZ.js";
var E = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (r) {
  (function () {
    var o = {}.hasOwnProperty;
    function a() {
      for (var e = "", s = 0; s < arguments.length; s++) {
        var t = arguments[s];
        t && (e = d(e, i(t)));
      }
      return e;
    }
    function i(e) {
      if (typeof e == "string" || typeof e == "number") return e;
      if (typeof e != "object") return "";
      if (Array.isArray(e)) return a.apply(null, e);
      if (
        e.toString !== Object.prototype.toString &&
        !e.toString.toString().includes("[native code]")
      )
        return e.toString();
      var s = "";
      for (var t in e) o.call(e, t) && e[t] && (s = d(s, t));
      return s;
    }
    function d(e, s) {
      return s ? (e ? e + " " + s : e + s) : e;
    }
    r.exports ? ((a.default = a), (r.exports = a)) : (window.classNames = a);
  })();
})(E);
var R = E.exports;
const V = P(R),
  y = ({
    children: r,
    color: o = "primary",
    size: a,
    className: i,
    isClickable: d,
    isDragable: e,
    onClick: s,
    styles: t,
    title: _,
  }) =>
    f.jsxs("div", {
      className: V("card", {
        [`color-${o}`]: o,
        [`size-${a}`]: a,
        [`${i}`]: i,
        "is-clickable": d,
        "is-dragable": e,
      }),
      onClick: s,
      style: t,
      children: [f.jsx("p", { children: _ }), r],
    });
y.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Card",
  props: {
    children: { required: !1, tsType: { name: "ReactNode" }, description: "" },
    color: {
      required: !1,
      tsType: {
        name: "union",
        raw: "'primary' | 'secondary'",
        elements: [
          { name: "literal", value: "'primary'" },
          { name: "literal", value: "'secondary'" },
        ],
      },
      description: "",
      defaultValue: { value: "'primary'", computed: !1 },
    },
    size: {
      required: !1,
      tsType: {
        name: "union",
        raw: "'small' | 'medium' | 'large'",
        elements: [
          { name: "literal", value: "'small'" },
          { name: "literal", value: "'medium'" },
          { name: "literal", value: "'large'" },
        ],
      },
      description: "",
    },
    className: { required: !1, tsType: { name: "string" }, description: "" },
    isClickable: { required: !1, tsType: { name: "boolean" }, description: "" },
    isDragable: { required: !1, tsType: { name: "boolean" }, description: "" },
    onClick: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "() => void",
        signature: { arguments: [], return: { name: "void" } },
      },
      description: "",
    },
    styles: {
      required: !1,
      tsType: { name: "CSSProperties" },
      description: "",
    },
    title: { required: !1, tsType: { name: "string" }, description: "" },
  },
};
const n = {
    colors: ["primary", "secondary"],
    size: ["small", "medium", "large"],
  },
  G = {
    title: "Example/Card",
    component: y,
    parameters: {},
    tags: ["autodocs"],
    argTypes: {
      color: {
        description: "**options:**",
        table: { type: { summary: n.colors.map((r) => `'${r}'`).join("|") } },
        control: { type: "select", options: n.colors },
      },
      size: {
        description: "**options:**",
        table: { type: { summary: n.size.map((r) => `'${r}'`).join("|") } },
        control: { type: "select", options: n.size },
      },
    },
    args: { onClick: A(), children: "This is default" },
  },
  g = (r) => f.jsx(y, { ...r }),
  u = g.bind({}),
  c = g.bind({});
c.args = { isClickable: !0 };
const l = g.bind({});
l.args = { isDragable: !0 };
Object.keys(n).map((r) => n[r].map((a) => [{ [r]: a }]).flat());
const O = ({ items: r, ...o }) => r.map((a, i) => f.jsx(y, { ...o, ...a }, i)),
  p = O.bind({});
p.args = { items: n.colors.map((r) => ({ color: r, children: `${r}` })) };
const m = O.bind({});
m.args = {
  items: n.size.map((r) => ({ size: r, children: `${r}`, color: "primary" })),
};
var b, C, x;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((b = u.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: "(args: CardType) => <Card {...args} />",
      ...((x = (C = u.parameters) == null ? void 0 : C.docs) == null
        ? void 0
        : x.source),
    },
  },
};
var T, v, S;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((T = c.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: "(args: CardType) => <Card {...args} />",
      ...((S = (v = c.parameters) == null ? void 0 : v.docs) == null
        ? void 0
        : S.source),
    },
  },
};
var j, h, q;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((j = l.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource: "(args: CardType) => <Card {...args} />",
      ...((q = (h = l.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : q.source),
    },
  },
};
var k, z, D;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((k = p.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `({
  items,
  ...args
}: {
  items: typeof convertType;
}) => {
  return items.map((item, index) => {
    return <Card key={index} {...args} {...item} />;
  });
}`,
      ...((D = (z = p.parameters) == null ? void 0 : z.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var $, N, w;
m.parameters = {
  ...m.parameters,
  docs: {
    ...(($ = m.parameters) == null ? void 0 : $.docs),
    source: {
      originalSource: `({
  items,
  ...args
}: {
  items: typeof convertType;
}) => {
  return items.map((item, index) => {
    return <Card key={index} {...args} {...item} />;
  });
}`,
      ...((w = (N = m.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : w.source),
    },
  },
};
const H = ["Default", "Clickable", "Dragable", "Colors", "Sizes"];
export {
  c as Clickable,
  p as Colors,
  u as Default,
  l as Dragable,
  m as Sizes,
  H as __namedExportsOrder,
  G as default,
};
