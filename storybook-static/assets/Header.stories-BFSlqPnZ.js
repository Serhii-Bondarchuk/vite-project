import { f as o } from "./index-BASH1HpE.js";
import { H as p } from "./Header-BU9wkus3.js";
import "./jsx-runtime-CKrituN3.js";
import "./index-CBqU2yxZ.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./Button-Cm-FjYci.js";
const L = {
    title: "Example/Header",
    component: p,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    args: { onLogin: o(), onLogout: o(), onCreateAccount: o() },
  },
  e = { args: { user: { name: "Jane Doe" } } },
  r = {};
var a, s, t;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((a = e.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,
      ...((t = (s = e.parameters) == null ? void 0 : s.docs) == null
        ? void 0
        : t.source),
    },
  },
};
var n, m, c;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((n = r.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: "{}",
      ...((c = (m = r.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : c.source),
    },
  },
};
const x = ["LoggedIn", "LoggedOut"];
export {
  e as LoggedIn,
  r as LoggedOut,
  x as __namedExportsOrder,
  L as default,
};
