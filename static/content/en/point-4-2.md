And now we'll use asyncData to pull user detail based on the `id` url-parameter.

Again, we'll use the same `axios-proxy` plugin to return a promise.

```javascript
// pages/_id.vue

asyncData ({app, params}) {

  console.log('asyncData called')
  return app.$axiosClient.getData('/users/'+params.id)
    .then(response => {
      // set data in local variable
      return { user: response.data }
  })
}
```

Alternatively, you can write the same with **async/await**.

```javascript
// pages/_id.vue
async asyncData ({app, params}) {
  let response = await app.$axiosClient.getData('/users/'+params.id)

  // set data in local variable
  return { user: response.data }
}
```

While you have set the local data with user detail, make sure to check out terminal console to see that asyncData is called only after validate hook has passed.

_Image goes here_

In the dynamic route parameter, try using `id` that doesn't exist, and you'll see that the validation will fail and lifecycle sequence is terminated.

_Image goes here - Validate hooks stops incoming request._
