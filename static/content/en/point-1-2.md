## Vuex Store

```javascript
export default createStore;
```

Most common use-case for this hook is to set default data on server and make it available directly on the client-side.
All lifecycle hooks receives Nuxt context as the first argument, except for nuxtServerInit(), where Nuxt context is received as the second argument. This is because the first argument is Vuex context.

Above code will console message in terminal right after the URL is rendered.

Let's use the axios-proxy plugin we created earlier, and make 'users' data available throughout the app.
Set state variable users of an array type and

```javascript
// store/index.js
return new Vuex.Store({
 state: {
   users: []
 },
```
