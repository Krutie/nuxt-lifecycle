## Nuxt ServerInit

This is the first lifecycle hook that's run after booting Nuxt application. Unlike other hooks we are about to learn, this is the only hook that's not defined on page component, rather it is defined in (Vuex) store.
nuxtServerInit cannot exist without Vuex store.

Let's create index.js in store directory and create Vuex store.

nuxtServerInit() method is declared in store actions, and it receives two arguments,

-   Vuex Context and
-   Nuxt Context

```javascript
// store/index.js
import Vuex from "vuex";
const createStore = () => {
    return new Vuex.Store({
        actions: {
            nuxtServerInit(vuexContext, nuxtContext) {
                console.log("nuxtServerInit called");
            }
        }
    });
};
```
