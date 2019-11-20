## asyncData()

You can pull data into page component and set them locally using asyncData method. `asyncData()` is called every time before loading page component. And it receives Nuxt context as its first argument.

Let's **set** user detail using asyncData to understand how it works.

First create a `data()` and define an empty array variable, **user** - so that we can use `asyncData()` to set user detail.

```javascript
// pages/index.vue

<script>
export default {
  data () {
    return {
      user: {}
    }
  }
}
</script>
```
