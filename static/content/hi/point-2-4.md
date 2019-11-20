## Page Middleware

They are registered on page components.

If an application requires middleware for a specific route, assign the middleware key in page component directly. This way, middleware will be called for this specific page.

Let's create page middleware, and call it page-middleware.js

```javascript
// middleware/page-middleware.js
export default context => {
    console.log("3. Page middleware called");
};
```

Use it on index.vue under middleware key.

```javascript
// pages/index.vue
middleware: "page-middleware";
```

Then perform`npm run dev` and access `localhost:3000`. Note how page middleware is last one to run after app-wide and layout middleware.

_Image goes here_
