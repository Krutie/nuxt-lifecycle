<template>
  <div
    :class="[
      'content',
      { 'content-close': !isOpen },
      { 'content-open': isOpen }
    ]"
  ></div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title || ""
        }
      ]
    };
  },
  mounted() {
    this.toggleState({ key: "isOpen", value: false });
  },
  validate({ params, store }) {
    return store.state.pages.find(page => page.slug === params.slug);
  },
  computed: {
    ...mapGetters({
      titleTemplate: "titleTemplate",
      activePage: "activePage",
      isOpen: "isOpen"
    }),
    title() {
      return this.titleTemplate(this.activePage.title, this.$t("title"));
    }
  },
  methods: {
    ...mapActions({
      toggleState: "toggleState"
    })
  }
};
</script>
