import _ from "lodash";
import data from "../static/content/pages-EN.json";

let dynamicRoute = (lang = "") => {
  return new Promise(resolve => {
    const prepend = lang === "" ? "" : `/${lang}`;
    const firstLevelRoutes = data.map(el => `${prepend}/${el.slug}`);
    const secondLevelRoutes = data.map(el =>
      el.points.map(t => `${prepend}/${el.slug}/${t.id}`)
    );
    resolve(firstLevelRoutes.concat(_.flattenDeep(secondLevelRoutes)));
  });
};

module.exports = async function routesData() {
  const d1 = await dynamicRoute();
  const d2 = await dynamicRoute("hi");
  return d1.concat(d2);
};
