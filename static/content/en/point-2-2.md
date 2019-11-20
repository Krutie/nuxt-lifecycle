## Global Middleware

They are registered in Nuxt configuration

Use this option, when middleware is required for **every incoming request**. They will be called every time the route changes within app.

```javascript
// nuxt.config.js
router: {
    middleware: "app-wide-middleware";
}
```

Let's create an app-wide-middleware.

```javascript
// middleware/app-wide-middleware.js
export default context => {
    console.log("1. App-wide middleware called from nuxt config");
};
```

Use `npm run dev` and access any routes on `localhost:3000`. Notice how middleware has run after nuxtServerinit.
