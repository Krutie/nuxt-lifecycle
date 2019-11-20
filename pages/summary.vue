<template>
    <div class="result-container" id="app">
        <!-- <h1 class="title">{{ $i18n.t("title") }}</h1> -->
        <chars-fade-in-out :title="$i18n.t('title')" :delay="delay + 2">
            <!-- :delay="4.5" -->
            <div v-if="show" class="title"></div>
        </chars-fade-in-out>
        <div class="inner-result-container">
            <div class="inner-result-border">
                <div class="result-title">
                    <div>
                        <span v-if="currentIndex === -1">
                            Knowing Nuxt Lifecycle Hooks will improve the way
                            you think about building your app.
                        </span>
                        <transition v-else name="fade">
                            <span>
                                {{ activeItem }}
                            </span>
                        </transition>
                    </div>
                </div>
                <div v-for="(item, index) in objToArray" class="invisible-box">
                    <div
                        class="result-circle"
                        :style="
                            'transform: rotate(' +
                                -(angle * index) +
                                'deg); color:' +
                                item.color
                        "
                        @click="updateIndex(index)"
                    >
                        <span
                            class="material-icons"
                            :class="{ active: index === currentIndex }"
                            :style="'border-color:' + item.color"
                        >
                            {{ item.icon }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { ObjectToArray } from "@/utils/helper.js";
import CharsFadeInOut from "@/components/transitions/CharsFadeInOut";
export default {
    data() {
        return {
            currentIndex: -1,
            show: false
        };
    },
    components: { CharsFadeInOut },
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
    asyncData(ctx) {
        console.log("process.server  asyncData - ", process.server);
        let delay = process.server ? 0 : 2;
        return { delay };
    },
    mounted() {
        this.show = true;
        TweenMax.to([".invisible-box"], 1, {
            delay: this.delay + 2,
            rotation: i => {
                return this.angle * i;
            }
        });
        TweenMax.fromTo(
            [".inner-result-container", ".result-container"],
            1,
            { scale: 0 },
            { delay: this.delay + 1, scale: 1 },
            1
        );
        TweenMax.fromTo(
            [".result-circle"],
            1,
            {
                autoAlpha: 0,
                scale: 0
            },
            {
                delay: this.delay,
                autoAlpha: 0.95,
                scale: 1
            },
            2
        );
    },
    computed: {
        ...mapGetters({
            titleTemplate: "titleTemplate"
        }),
        title() {
            return this.titleTemplate(this.$t("summary"), this.$t("title"));
        },
        angle() {
            return 360 / this.objToArray.length;
        },
        objToArray() {
            return ObjectToArray(this.$store.state.pages);
        },
        activeItem() {
            return this.objToArray[this.currentIndex].content;
        }
    },
    methods: {
        updateIndex(index) {
            this.currentIndex = index;
        }
    }
};
</script>
