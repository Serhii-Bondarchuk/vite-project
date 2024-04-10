import { j as t } from "./jsx-runtime-CKrituN3.js";
import "./index-CBqU2yxZ.js";
import "./_commonjsHelpers-BosuxZz1.js";
var r = "a11y";
const i = Object.freeze(
    Object.defineProperty(
      { __proto__: null, PARAM_KEY: r },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  a = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxHeight: "auto",
    flexWrap: "wrap",
    height: "100%",
    gap: "10px 30px",
  };
console.log(i, 1111);
const c = [(e) => t.jsx("div", { style: a, children: t.jsx(e, {}) })],
  p = {
    parameters: {
      controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
      options: {
        storySort: (e, o) =>
          o.name === "Docs"
            ? 1
            : e.id === o.id
              ? 0
              : e.id.localeCompare(o.id, void 0, { numeric: !0 }),
      },
    },
  };
export { c as decorators, p as default };
