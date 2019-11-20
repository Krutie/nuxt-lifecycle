We're simply checking the value of parameter against the users data in the code above.

If validate fails and returns false, it automagically redirects & displays an error page. As a result, don't forget to create a custom error page in layouts directory to make sure validate hook can finish its job as intended.

Although we don't have access to `context.error` in `validate()` hook, we can still get away with using custom error page.

This error page is nothing but a Vue component that is titled `error.vue`. And it receives `error` object as `props`. Here's an example.

```javascript
// layouts/error.vue

<template>
  <section class="container">
    <h2 class="subtitle">
      {{ error.statusCode }} | {{ error.message }}
    </h2>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>
```

Keeping up with the order of lifecycle hooks, you can see the console message from `validate()` hook appear in the terminal right after all middleware.

_Image goes here_
