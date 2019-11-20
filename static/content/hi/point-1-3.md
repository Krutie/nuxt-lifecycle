### Mutation

Create mutation, setUsers, in the same store which will accept and set users.

```javascript
// store/index.js
mutations: {
   setUsers: (state, users) => {
     state.users = users
   },
 },
...
```

Add more functionality in nuxtServerInit by using \$axiosClient plugin to get users data. And finally commit the mutation.

```javascript
// store/index.js
nuxtServerInit (vuexContext, nuxtContext) {
  console.log('nuxtServerInit called')
  return nuxtContext.app.$axiosClient.getData('users')
     .then(response => {
        console.log('Total Users from nuxtServerInit - ' + response.data.length)
        nuxtContext.store.commit('setUsers', response.data)
   })
}
```

When accessed `localhost:3000`, you should see two things happen,
Console message with `total-users-count` from `nuxtServerInit()` in the Terminal and
`state.users` variable showing all 10 users in Chrome Dev Tool.
