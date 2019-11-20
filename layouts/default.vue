<template>
  <div class="default">
    <!-- 1. GRADIENT BRACKGROUND WITH SUN AND CIRCLES -->
    <gradient-background />

    <!-- 2. SVG ARC FOR CIRCLES TO TRAVEL -->
    <arc />

    <!-- 3. MEGA-MENU, i.e. SUB-NAVIGATION FOR POINTS -->
    <mega-menu />

    <main>
      <nuxt />
    </main>

    <nav>
      <!-- 4. PAGE NAVIGATION, i.e. BACK AND NEXT NAVIGATION -->
      <page-navigation />
      <!-- 5. NAVBAR -->
      <nav-bar />
    </nav>

    <!-- 6. NUXT SHAPE -->
    <footer>
      <nuxt-shape />
    </footer>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { openTimeline, closeTimeline } from "../utils/animations";
import {
  GradientBackground,
  Arc,
  MegaMenu,
  NavBar,
  PageNavigation,
  NuxtShape
} from "@/components/layout/";

export default {
  components: {
    GradientBackground,
    Arc,
    MegaMenu,
    NavBar,
    PageNavigation,
    NuxtShape
  },
  data() {
    return {
      pointsMap: process.env.pointsMap,
      icons: process.env.icons.items
    };
  },
  created() {
    // When user hard-refresh the page
    // update ActivePageIndex by params.slug
    this.updateActivePageIndex(this.$route.params);
  },
  computed: {
    ...mapGetters({
      activePageIndex: "activePageIndex",
      isOpen: "isOpen"
    }),
    slug() {
      return this.$route.params.slug;
    }
  },
  watch: {
    slug(newVal) {
      // update ActivePageIndex by params.slug
      this.updateActivePageIndex(this.$route.params);
    },
    activePageIndex(newVal, oldVal) {
      // keep track of ActivePageIndex to determine
      // direction of transitions
      this.updateDirection({
        newVal: newVal,
        oldVal: oldVal
      });
    },
    // when the content opens or closes,
    // call respective GSAP animation
    isOpen(newVal) {
      if (newVal) {
        openTimeline();
      } else {
        closeTimeline(this.pointsMap);
      }
    }
  },
  methods: {
    ...mapActions({
      updateDirection: "updateDirection",
      updateActivePageIndex: "updateActivePageIndex",
      toggleState: "toggleState"
    })
  }
};
</script>
