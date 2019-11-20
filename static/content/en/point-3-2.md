For example,

-   check whether an `id` is an integer or
-   (if using Vuex store), check and verify whether `id` exists and matches with the value in database.

Let's take an example of **'users'** data we've been working with. Create dynamic route in `/pages` directory, and call it `_id.vue`

** For validate hook to work, it must return true or false to trigger next steps. If nothing is returned, validation fails by default.**

```javascript
// pages/_id.vue

export default {
    validate({ params, query, store }) {
        console.log("Validate hook called from dynamic route");
        let user = store.state.users.find(obj => {
            return obj.id == params.id;
        });
        return user ? true : false;
    }
};
```
