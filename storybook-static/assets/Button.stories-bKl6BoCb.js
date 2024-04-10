import { f as k } from "./index-BASH1HpE.js";
import { B as z } from "./Button-Cm-FjYci.js";
import "./jsx-runtime-CKrituN3.js";
import "./index-CBqU2yxZ.js";
import "./_commonjsHelpers-BosuxZz1.js";
const L = {
    title: "Example/Button",
    component: z,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: { backgroundColor: { control: "color" } },
    args: { onClick: k() },
  },
  r = { args: { primary: !0, label: "Button" } },
  e = { args: { label: "Button" } },
  a = { args: { primary: !0, label: "Delete now", backgroundColor: "red" } },
  o = { args: { size: "large", label: "Button" } },
  s = { args: { size: "small", label: "Button" } };
var t, n, c;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    primary: true,
    label: 'Button'
  }
}`,
      ...((c = (n = r.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : c.source),
    },
  },
};
var l, m, p;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((l = e.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Button'
  }
}`,
      ...((p = (m = e.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : p.source),
    },
  },
};
var u, i, d;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((u = a.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red'
  }
}`,
      ...((d = (i = a.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : d.source),
    },
  },
};
var g, b, B;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((g = o.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,
      ...((B = (b = o.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : B.source),
    },
  },
};
var y, S, f;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((y = s.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,
      ...((f = (S = s.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : f.source),
    },
  },
};
const P = ["Primary", "Secondary", "Warning", "Large", "Small"];
export {
  o as Large,
  r as Primary,
  e as Secondary,
  s as Small,
  a as Warning,
  P as __namedExportsOrder,
  L as default,
};
