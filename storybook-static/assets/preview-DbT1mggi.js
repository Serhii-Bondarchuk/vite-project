let l;
const S = new Uint8Array(16);
function D() {
  if (
    !l &&
    ((l =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !l)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    );
  return l(S);
}
const c = [];
for (let t = 0; t < 256; ++t) c.push((t + 256).toString(16).slice(1));
function T(t, e = 0) {
  return (
    c[t[e + 0]] +
    c[t[e + 1]] +
    c[t[e + 2]] +
    c[t[e + 3]] +
    "-" +
    c[t[e + 4]] +
    c[t[e + 5]] +
    "-" +
    c[t[e + 6]] +
    c[t[e + 7]] +
    "-" +
    c[t[e + 8]] +
    c[t[e + 9]] +
    "-" +
    c[t[e + 10]] +
    c[t[e + 11]] +
    c[t[e + 12]] +
    c[t[e + 13]] +
    c[t[e + 14]] +
    c[t[e + 15]]
  );
}
const w =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  m = { randomUUID: w };
function U(t, e, i) {
  if (m.randomUUID && !e && !t) return m.randomUUID();
  t = t || {};
  const n = t.random || (t.rng || D)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), e)) {
    i = i || 0;
    for (let o = 0; o < 16; ++o) e[i + o] = n[o];
    return e;
  }
  return T(n);
}
const { addons: j } = __STORYBOOK_MODULE_PREVIEW_API__,
  { global: R } = __STORYBOOK_MODULE_GLOBAL__,
  { ImplicitActionsDuringRendering: x } =
    __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
var V = "storybook/actions",
  f = `${V}/action-event`,
  P = { depth: 10, clearOnStoryChange: !0, limit: 50 },
  E = (t, e) => {
    let i = Object.getPrototypeOf(t);
    return !i || e(i) ? i : E(i, e);
  },
  F = (t) =>
    !!(
      typeof t == "object" &&
      t &&
      E(t, (e) => /^Synthetic(?:Base)?Event$/.test(e.constructor.name)) &&
      typeof t.persist == "function"
    ),
  M = (t) => {
    if (F(t)) {
      let e = Object.create(
        t.constructor.prototype,
        Object.getOwnPropertyDescriptors(t),
      );
      e.persist();
      let i = Object.getOwnPropertyDescriptor(e, "view"),
        n = i == null ? void 0 : i.value;
      return (
        typeof n == "object" &&
          (n == null ? void 0 : n.constructor.name) === "Window" &&
          Object.defineProperty(e, "view", {
            ...i,
            value: Object.create(n.constructor.prototype),
          }),
        e
      );
    }
    return t;
  },
  B = () =>
    typeof crypto == "object" && typeof crypto.getRandomValues == "function"
      ? U()
      : Date.now().toString(36) + Math.random().toString(36).substring(2);
function y(t, e = {}) {
  let i = { ...P, ...e },
    n = function (...o) {
      var g, u;
      if (e.implicit) {
        let _ =
          (g =
            "__STORYBOOK_PREVIEW__" in R ? R.__STORYBOOK_PREVIEW__ : void 0) ==
          null
            ? void 0
            : g.storyRenders.find(
                (d) => d.phase === "playing" || d.phase === "rendering",
              );
        if (_) {
          let d = !(
              (u = window == null ? void 0 : window.FEATURES) != null &&
              u.disallowImplicitActionsInRenderV8
            ),
            O = new x({ phase: _.phase, name: t, deprecated: d });
          if (d) console.warn(O);
          else throw O;
        }
      }
      let r = j.getChannel(),
        a = B(),
        p = 5,
        s = o.map(M),
        I = o.length > 1 ? s : s[0],
        b = {
          id: a,
          count: 0,
          data: { name: t, args: I },
          options: {
            ...i,
            maxDepth: p + (i.depth || 3),
            allowFunction: i.allowFunction || !1,
          },
        };
      r.emit(f, b);
    };
  return (n.isAction = !0), (n.implicit = e.implicit), n;
}
var A = (t, e) => typeof e[t] > "u" && !(t in e),
  v = (t) => {
    let {
      initialArgs: e,
      argTypes: i,
      id: n,
      parameters: { actions: o },
    } = t;
    if (!o || o.disable || !o.argTypesRegex || !i) return {};
    let r = new RegExp(o.argTypesRegex);
    return Object.entries(i)
      .filter(([a]) => !!r.test(a))
      .reduce(
        (a, [p, s]) => (A(p, e) && (a[p] = y(p, { implicit: !0, id: n })), a),
        {},
      );
  },
  k = (t) => {
    let {
      initialArgs: e,
      argTypes: i,
      parameters: { actions: n },
    } = t;
    return (n != null && n.disable) || !i
      ? {}
      : Object.entries(i)
          .filter(([o, r]) => !!r.action)
          .reduce(
            (o, [r, a]) => (
              A(r, e) && (o[r] = y(typeof a.action == "string" ? a.action : r)),
              o
            ),
            {},
          );
  },
  L = [k, v],
  h = Symbol.for("tinyspy:spy"),
  K = (t) => {
    let {
      args: e,
      parameters: { actions: i },
    } = t;
    (i != null && i.disable) ||
      Object.entries(e)
        .filter(
          ([, n]) =>
            typeof n == "function" &&
            "_isMockFunction" in n &&
            n._isMockFunction,
        )
        .forEach(([n, o]) => {
          var a;
          let r =
            o.getMockImplementation() ??
            (h in o ? ((a = o[h]) == null ? void 0 : a.getOriginal()) : void 0);
          if (
            (r == null ? void 0 : r._actionAttached) !== !0 &&
            (r == null ? void 0 : r.isAction) !== !0
          ) {
            let p = (...s) => (y(n)(...s), r == null ? void 0 : r(...s));
            (p._actionAttached = !0), o.mockImplementation(p);
          }
        });
  },
  W = [K];
export { L as argsEnhancers, W as loaders, h as tinySpyInternalState };
