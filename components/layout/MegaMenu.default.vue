<template>
  <div>
    <!-- FOR DYNAMIC PAGES _SLUG.VUE -->
    <div class="mega-menu" v-for="(page, index) in pages">
      <!-- TOPIC TITLE FOR DYNAMIC PAGES -->
      <chars-fade-in-out :title="page.title" :isNext="isNext">
        <div v-if="activePageIndex === index" :class="['title']"></div>
      </chars-fade-in-out>

      <!-- AUTOPLAY SLIDE-SHOW -->
      <transition name="fade" v-if="!isOpen">
        <tips v-if="activePageIndex === index" :items="page.points">
          <template slot-scope="{ activeItem }" slot="tip">
            <transition
              name="fade"
              v-for="(item, index) in page.points"
              :key="index"
            >
              <div v-if="index === activeItem" :key="index" class="slide-show">
                {{ item.content }}
              </div>
            </transition>
          </template>
        </tips>
      </transition>

      <!-- SUB-TOPIC CIRCLES -->
      <rotate-in-out :isNext="isNext" tag="div">
        <div
          :class="['elements-container', { opened: isOpen }]"
          :key="activePageIndex"
          v-if="activePageIndex === index"
        >
          <div
            v-for="(point, key) in page.points"
            :key="key"
            :class="['outer-element', { 'pointer-events-none-0': isOpen }]"
          >
            <nuxt-link
              :to="localePath({ path: '/' + page.slug + '/' + point.id })"
            >
              <div
                :class="[
                  'inner-element',
                  { 'scaled-up': !isOpen },
                  { 'scaled-down': isOpen }
                ]"
              >
                <div
                  :style="{ 'border-color': page.color }"
                  :class="{ active: point.id === $route.params.id }"
                >
                  <span :style="{ color: page.color }" class="material-icons">
                    {{ point.icon }}
                  </span>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </rotate-in-out>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Tips from "@/components/base/Tips";
import RotateInOut from "@/components/transitions/RotateInOut";
import CharsFadeInOut from "@/components/transitions/CharsFadeInOut.vue";
export default {
  components: {
    Tips,
    CharsFadeInOut,
    RotateInOut
  },
  computed: {
    ...mapGetters({
      activePageIndex: "activePageIndex",
      isOpen: "isOpen",
      isNext: "isNext",
      pages: "pages"
    })
  }
};
</script>
