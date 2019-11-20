<template>
    <div id="home">
        <chars-fade-in-out :title="$i18n.t('title')" :isNext="isNext">
            <div v-if="show" class="title site-title"></div>
        </chars-fade-in-out>
        <transition name="fade">
            <h2 v-if="show">
                {{ $t("subtitle") }}
            </h2>
        </transition>
        <expand-button>
            <div
                v-if="show"
                class="heading"
                @click="go"
                style="cursor: pointer;"
            >
                <span style="width: 250px; position: inherit;">
                    {{ $i18n.t("language.start") }}
                </span>
            </div>
        </expand-button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ExpandButton from "@/components/transitions/ExpandButton";
import CharsFadeInOut from "@/components/transitions/CharsFadeInOut";
export default {
    data() {
        return {
            show: false
        };
    },
    components: { CharsFadeInOut, ExpandButton },
    computed: {
        ...mapGetters({
            isNext: "isNext"
        })
    },
    mounted() {
        this.show = true;
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 3000);
        });
    },
    methods: {
        go() {
            this.$nextTick(() => {
                this.show = false;
                setTimeout(
                    () =>
                        this.$router.push(
                            this.localePath({
                                path: "/introduction"
                            })
                        ),
                    3000
                );
            });
        }
    }
};
</script>
