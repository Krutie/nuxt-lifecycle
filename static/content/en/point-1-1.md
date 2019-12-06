This is the first lifecycle hook that's run after booting Nuxt application. Unlike other hooks we are about to learn, this is the only hook that's not defined on page component, because it is defined in Vuex store.

> **nuxtServerInit** cannot exist without Vuex store.

nuxtServerInit() method is declared in store actions, and it receives two arguments,

- Vuex Context and

- Nuxt Context
