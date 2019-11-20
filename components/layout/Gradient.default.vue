<template>
  <div class="bg-container">
    <div class="gradient">
      <div class="segment intro"></div>
      <div class="segment morning"></div>
      <div class="segment afternoon"></div>
      <div class="segment evening"></div>
      <div class="segment night"></div>
    </div>

    <div class="circle-container">
      <div class="circle sun"></div>
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
    </div>
    <div class="back-drop"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { TweenMax, TimelineMax } from "gsap";
export default {
  mounted() {
    this.initBackgroundAnimation();
  },
  computed: {
    ...mapGetters({
      activePageIndex: "activePageIndex"
    })
  },
  watch: {
    activePageIndex() {
      this.initBackgroundAnimation();
    }
  },
  methods: {
    initBackgroundAnimation() {
      this.changeBackground(() => {
        this.$emit("complete");
      });
    },
    changeBackground(fn) {
      const tl = new TimelineMax();
      TweenMax.to(
        ".gradient",
        2,
        {
          delay: 2,
          x: -(this.activePageIndex + 1) * 20 + "%",
          ease: Circ.easeOut
        },
        1
      );
      TweenMax.to(
        ".back-drop",
        2,
        {
          delay: 2,
          autoAlpha: 1 - this.activePageIndex * 0.1
        },
        1
      );
      TweenMax.to(
        ".circle-container",
        10,
        {
          delay: 2,
          x: (this.activePageIndex + 1) * 25 + "%",
          ease: Power2.easeOut
        },
        1
      );
      tl.eventCallback("onComplete", fn);
    }
  }
};
</script>
<style></style>
