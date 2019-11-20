<script>
import { mapActions } from "vuex";
export default {
  render(h, content) {
    return h("div", this.$slots.default);
  },
  methods: {
    ...mapActions({
      toggleState: "toggleState"
    }),
    start() {
      this.toggleState({ key: "loading", value: true });
    },
    finish() {
      this.toggleState({ key: "loading", value: false });
    }
  }
};
</script>
