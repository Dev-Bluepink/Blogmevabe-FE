import { A as a, u as o, a as r, r as i, j as n } from "./index-Be8K0jJq.js";
import { I as u } from "./InfinitePosts-BR17nx9P.js";
import "./Post-qweXuIAK.js";
function p() {
  const { isAuthenticated: e } = a(),
    s = o(),
    { feedName: t } = r();
  return t == "home" && !e
    ? s("/login")
    : (i.useEffect(() => {
        document.title = `Mebe | ${t}`;
      }, [t]),
      n.jsx(u, { linkUrl: `posts/${t || "all"}`, apiQueryKey: t }));
}
export { p as Feed, p as default };
