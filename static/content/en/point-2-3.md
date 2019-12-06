Layout Middleware are also known as group middleware and they are registered in layouts.

Layout middleware makes it more convenient to assign a single middleware to specific set of pages. Register middleware at layout level and simply use this layout for a group of pages.

Let's create a middleware, and call it layout-middleware.js

```javascript
// middleware/layout-middleware.js
export default () => {
    console.log("2. Layout middleware called");
};
```

Add the middleware on default layout.

```javascript
// layouts/default.vue
export default {
    middleware: "layout-middleware"
};
```

Default layout is applied to all pages by default.

So, use npm run dev and access routes where default layout is available on `localhost:3000`. Note how layout middleware has run after the app-wide middleware.

_Image goes here_

**All middleware discussed here receives Nuxt context**, and context can be very powerful here to perform various checks and verifications to control the application flow.

```javascript
// middleware/layout-middleware.vue
export default ({ store, redirect }) => {
    // if user is not authenticated, redirect on login page
    if (!store.state.authenticated) {
        return redirect("/login");
    }
};
```
