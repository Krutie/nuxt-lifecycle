<template>
  <div id="page-navigation" v-if="pagesLength > 0">
    <transition
      :name="item.transition"
      v-for="(item, index) in navigationArray"
      :key="index"
    >
      <div
        v-if="item.condition"
        @click="item.action"
        :class="['btn', item.class]"
      >
        <slot :name="item.slot"> </slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    pagesLength: {
      required: true
    },

    // determines which contextual menu
    // items to display
    activeKey: {
      required: true
    },

    isOpen: {
      // to control the visiblity of a back and next buttons
      // i.e. if content is open, hide both
      // the navigation buttons
      default: false
    },

    firstKey: {
      // decides whether back-button shows for first item
      // to send user back on home page
      default: -1
    }
  },
  computed: {
    navigationArray() {
      return [
        {
          action: this.back,
          condition: !this.isOpen && this.activeKey > this.firstKey,
          slot: "back",
          class: "back",
          transition: "slide-left"
        },
        {
          action: this.next,
          condition:
            !this.isOpen &&
            this.activeKey === -1 &&
            this.$route.name === `summary___${this.$i18n.locale}`,
          slot: "start-again",
          class: "next",
          transition: "slide-right"
        },
        {
          action: this.next,
          condition:
            !this.isOpen &&
            this.activeKey < this.pagesLength - 1 &&
            this.activeKey > -1,
          slot: "next",
          class: "next",
          transition: "slide-right"
        },
        {
          action: this.summary,
          condition: !this.isOpen && this.activeKey === this.pagesLength - 1,
          slot: "summary",
          class: "next",
          transition: "slide-right"
        }
      ];
    }
  },
  methods: {
    back() {
      this.$emit("back");
    },
    next() {
      this.$emit("next");
    },
    summary() {
      this.$emit("summary");
    }
  }
};
</script>
