1. actions- `getPosts`: As you can see that, once again, we're accessing `$axiosClient` to get post data. By adding async-await, we can be sure that `setCurrentUserPosts` will have the response data before committing the mutation.

2. mutation- `setCurrentUserPosts`: This is where we set the state variable to hold all posts we just fetched using `getPosts` action.

Alternatively, you can write `getPosts` action using async/await.

```javascript
async getPosts ({ commit }, userId) {

  let { data } = await this.$axiosClient.getData('/posts?userId=' + userId)
  commit('setCurrentUserPosts', data)
},
```

When you access dynamic route after implemeting fetch, if everything went well, you should see that the Vuex store is now filled with the posts for active user.

And the console message from fetch hook is seen to be called in terminal as well.

_Image goes here_

### Difference between fetch and nuxtServerInit

`fetch()` may seem similar to `nuxtServerInit()`, but the key difference between the two is, that `fetch()` is called on particular page component where it defined, while the data extracted by `nuxtServerInit()` will be available on client-side even before any code has been executed on page component.

### Difference between fetch and asyncData

The key difference between these two is, that `fetch()` doesn't set component's local data, while `asyncData()` does.
