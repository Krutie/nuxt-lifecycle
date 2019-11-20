# Routes Middleware

Middleware allows you to intercept incoming request and conditionally modify or enforce business logic before serving the page on client-side.

> You can use middleware to check or set conditions based on given state of data or even redirect user to control how your application behaves in any given scenarios.

Nuxt provides three ways to incorporate route middleware. All middleware are stored in `/middleware` directory, but they're called at three different locations in Nuxt application depending on requirements.
