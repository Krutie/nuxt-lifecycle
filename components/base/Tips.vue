<template>
  <div class="tips">
    <slot :activeItem="activeItem" name="title"> </slot>
    <slot :activeItem="activeItem" name="tip" class="split-text"> </slot>
    <slot name="introduction" v-if="!autoplay">
      <div class="indicators translate-center">
        <span @click="start" style="cursor: pointer;">
          Skip
        </span>
        <span
          v-for="(item, index) in items"
          :class="[{ active: item.completed }, 'material-icons']"
        >
          {{ icons[index] }}
        </span>
        <span
          v-if="activeItem < items.length"
          @click="next()"
          style="cursor: pointer;"
        >
          Next
        </span>
      </div>
      <div
        style="top: 40%; position: absolute; transform: translate(-50%, -50%); left: 50%;"
      >
        <expand-button>
          <div
            class="heading"
            v-if="ready"
            @click="start"
            style="cursor: pointer;"
          >
            <span style="width: 250px; position: inherit;">
              Start
            </span>
          </div>
        </expand-button>
      </div>
    </slot>
  </div>
</template>
<script>
import ExpandButton from "@/components/transitions/ExpandButton";
export default {
  components: { ExpandButton },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array
    },
    icons: {
      type: Array
    }
  },
  data() {
    return {
      activeItem: 0,
      ready: false
    };
  },
  watch: {
    activeItem(newVal) {
      if (newVal == this.items.length) {
        setTimeout(() => (this.ready = true), 3000);
      }
    }
  },
  mounted() {
    if (this.autoplay) {
      setInterval(() => {
        if (this.activeItem < this.items.length) {
          this.activeItem++;
        } else {
          this.activeItem = 0;
        }
      }, 6000);
    }
  },
  methods: {
    start() {
      this.$emit("start");
    },
    next() {
      this.$emit("next", this.activeItem);
      this.activeItem++;
    }
  }
};
</script>
