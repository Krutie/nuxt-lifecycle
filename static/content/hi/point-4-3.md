## fetch()

`fetch()` hook is used when you need to 'fetch' contextual data for the `store` especially for a specific page, such as search results or filtered dataset.

To continue with the example above, let's fetch all 'posts' written by a user. Let's fill the store with posts on the same dynamic route where we set the user detail using asyncData above.

```javascript
// pages/_id.vue
fetch ( {store, params} ) {
  console.log('fetch called')
  return store.dispatch('getPosts', params.id)
}
```

We'll be working in `store/index.js` to setup `getPosts` action and a mutation to set posts for an active user of the page.

```javascript
// store/index.js
state: {
  ...
  posts: []
},
actions: {
  getPosts ({ commit }, userId) {
    return this.$axiosClient.getData('/posts?userId='+userId)
      .then( response => {
         commit('setCurrentUserPosts', response.data)
      })
  },
  ...
},
mutations: {
  setCurrentUserPosts: (state, posts) => {
    state.posts = posts
  }
},
```
