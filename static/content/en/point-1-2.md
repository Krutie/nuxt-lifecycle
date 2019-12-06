Most common use-case for this hook is to set default data on server and make it available directly on the client-side.

> All lifecycle hooks receives Nuxt context as the first argument, except for nuxtServerInit!
> In nuxtServerInit, Nuxt context is received as the second argument. And the first argument is Vuex context.

### Example 1

We're using this hook in this project itself to the set pages.

```javascript
// store/actions.js
export default {
  /*
   ** First lifecycle hook of Nuxt
   ** nuxtServerInit sets the initial data for pages and items
   ** at the same time keeping locale i18n in check
   */
  nuxtServerInit(vuexContext, nuxtContext) {
    vuexContext.commit("SET_PAGES", nuxtContext.app.i18n.t("pages"));
  }
};
```

### Example 2

Unlike this project, if your data is provided by the API, you can even use Nuxt plugin like [Nuxt Axios Module](https://axios.nuxtjs.org/) to get the data from the API.

```javascript
// store/index.js
import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    actions: {
      nuxtServerInit(vuexContext, nuxtContext) {
        return nuxtContext.app.$axiosClient.getData("users").then(response => {
          nuxtContext.store.commit("SET_USERS", response.data);
        });
      }
    }
  });
};
```
