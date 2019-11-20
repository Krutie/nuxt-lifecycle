<template>
    <div class="introduction">
        <slide-show />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import SlideShow from "@/components/page/SlideShow.introduction";

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
    computed: {
        ...mapGetters({
            titleTemplate: "titleTemplate"
        }),
        title() {
            return this.titleTemplate(
                this.$t("introduction"),
                this.$t("title")
            );
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 3000);
        });
    },
    components: {
        SlideShow
    }
};
</script>
