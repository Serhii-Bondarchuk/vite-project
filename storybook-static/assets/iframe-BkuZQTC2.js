function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "./Configure-DjeHFNNh.js",
      "./jsx-runtime-CKrituN3.js",
      "./index-CBqU2yxZ.js",
      "./_commonjsHelpers-BosuxZz1.js",
      "./index-DSz_1G2r.js",
      "./index-CL4AuUwb.js",
      "./index-BtM5VmRH.js",
      "./index-B_J8iUie.js",
      "./index-DLle_QMf.js",
      "./index-DrFu-skq.js",
      "./Button.stories-bKl6BoCb.js",
      "./index-BASH1HpE.js",
      "./Button-Cm-FjYci.js",
      "./Button-BfyGbg8N.css",
      "./Card.stories-CBCoq5Rr.js",
      "./Card-BR6NXRqj.css",
      "./Header.stories-BFSlqPnZ.js",
      "./Header-BU9wkus3.js",
      "./Header-BjLH3naM.css",
      "./Page.stories-BmTL5BMX.js",
      "./Page-B9ntr4df.css",
      "./entry-preview-DAq4ziin.js",
      "./react-18-D8cruF67.js",
      "./entry-preview-docs-DRmoonR_.js",
      "./preview-DzbRFJg_.js",
      "./preview-CwqMn10d.js",
      "./preview-BAz7FMXc.js",
      "./preview-Bi_jGxxs.js",
      "./preview-suOw5ksT.js",
      "./preview-BcEJ9ZDr.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import "../sb-preview/runtime.js";
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) u(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && u(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function u(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = c(e);
    fetch(e.href, r);
  }
})();
const f = "modulepreload",
  R = function (n, s) {
    return new URL(n, s).href;
  },
  O = {},
  t = function (s, c, u) {
    let e = Promise.resolve();
    if (c && c.length > 0) {
      const r = document.getElementsByTagName("link"),
        o = document.querySelector("meta[property=csp-nonce]"),
        E =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      e = Promise.all(
        c.map((i) => {
          if (((i = R(i, u)), i in O)) return;
          O[i] = !0;
          const l = i.endsWith(".css"),
            p = l ? '[rel="stylesheet"]' : "";
          if (!!u)
            for (let a = r.length - 1; a >= 0; a--) {
              const m = r[a];
              if (m.href === i && (!l || m.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${i}"]${p}`)) return;
          const _ = document.createElement("link");
          if (
            ((_.rel = l ? "stylesheet" : f),
            l || ((_.as = "script"), (_.crossOrigin = "")),
            (_.href = i),
            E && _.setAttribute("nonce", E),
            document.head.appendChild(_),
            l)
          )
            return new Promise((a, m) => {
              _.addEventListener("load", a),
                _.addEventListener("error", () =>
                  m(new Error(`Unable to preload CSS for ${i}`)),
                );
            });
        }),
      );
    }
    return e
      .then(() => s())
      .catch((r) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = r), window.dispatchEvent(o), !o.defaultPrevented))
          throw r;
      });
  },
  { createBrowserChannel: P } = __STORYBOOK_MODULE_CHANNELS__,
  { addons: T } = __STORYBOOK_MODULE_PREVIEW_API__,
  d = P({ page: "preview" });
T.setChannel(d);
window.__STORYBOOK_ADDONS_CHANNEL__ = d;
window.CONFIG_TYPE === "DEVELOPMENT" &&
  (window.__STORYBOOK_SERVER_CHANNEL__ = d);
const L = {
  "./src/stories/Configure.mdx": async () =>
    t(
      () => import("./Configure-DjeHFNNh.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      import.meta.url,
    ),
  "./src/stories/button/Button.stories.ts": async () =>
    t(
      () => import("./Button.stories-bKl6BoCb.js"),
      __vite__mapDeps([10, 11, 12, 1, 2, 3, 13]),
      import.meta.url,
    ),
  "./src/stories/card/Card.stories.tsx": async () =>
    t(
      () => import("./Card.stories-CBCoq5Rr.js"),
      __vite__mapDeps([14, 1, 2, 3, 11, 15]),
      import.meta.url,
    ),
  "./src/stories/header/Header.stories.ts": async () =>
    t(
      () => import("./Header.stories-BFSlqPnZ.js"),
      __vite__mapDeps([16, 11, 17, 1, 2, 3, 12, 13, 18]),
      import.meta.url,
    ),
  "./src/stories/pages/mainPage/Page.stories.ts": async () =>
    t(
      () => import("./Page.stories-BmTL5BMX.js"),
      __vite__mapDeps([19, 11, 1, 2, 3, 17, 12, 13, 18, 20]),
      import.meta.url,
    ),
};
async function v(n) {
  return L[n]();
}
const {
    composeConfigs: w,
    PreviewWeb: A,
    ClientApi: V,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  h = async () => {
    const n = await Promise.all([
      t(
        () => import("./entry-preview-DAq4ziin.js"),
        __vite__mapDeps([21, 2, 3, 22, 6]),
        import.meta.url,
      ),
      t(
        () => import("./entry-preview-docs-DRmoonR_.js"),
        __vite__mapDeps([23, 8, 3, 9, 2]),
        import.meta.url,
      ),
      t(
        () => import("./preview-DzbRFJg_.js"),
        __vite__mapDeps([24, 7]),
        import.meta.url,
      ),
      t(() => import("./preview-3xyIWqzy.js"), [], import.meta.url),
      t(() => import("./preview-DbT1mggi.js"), [], import.meta.url),
      t(
        () => import("./preview-CwqMn10d.js"),
        __vite__mapDeps([25, 9]),
        import.meta.url,
      ),
      t(() => import("./preview-B4GcaC1c.js"), [], import.meta.url),
      t(() => import("./preview-Db4Idchh.js"), [], import.meta.url),
      t(
        () => import("./preview-BAz7FMXc.js"),
        __vite__mapDeps([26, 9]),
        import.meta.url,
      ),
      t(() => import("./preview-Cv3rAi2i.js"), [], import.meta.url),
      t(
        () => import("./preview-Bi_jGxxs.js"),
        __vite__mapDeps([27, 11]),
        import.meta.url,
      ),
      t(() => import("./preview-Dj_ic6-N.js"), [], import.meta.url),
      t(
        () => import("./preview-suOw5ksT.js"),
        __vite__mapDeps([28, 1, 2, 3, 29]),
        import.meta.url,
      ),
    ]);
    return w(n);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new A(v, h);
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export { t as _ };
