<template>
    <div
        :class="[
            'content',
            { 'content-close': !isOpen },
            { 'content-open': isOpen }
        ]"
    >
        <expand-button>
            <div
                class="heading"
                v-if="show && isOpen"
                :style="{
                    color: activePage.color,
                    'border-color': activePage.color
                }"
            >
                <span style="width: 250px; position: inherit;">
                    {{ topic.title }}
                </span>
            </div>
        </expand-button>
        <div class="active-page">
            <div :style="{ color: activePage.color }" class="topic">
                {{ activePage.title }}
            </div>
            <div v-html="content"></div>
            <hr />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ExpandButton from "@/components/transitions/ExpandButton";
const importMd = (locale, fileName) => {
    return import(`~/static/content/${locale}/${fileName}`).then(module => {
        return module.default;
    });
};
export default {
    components: { ExpandButton },
    data() {
        return {
            show: false
        };
    },
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
    validate({ params, store }) {
        let page = store.state.pages.find(page => page.slug === params.slug);
        return page.points.find(point => point.id === params.id);
    },
    mounted() {
        this.show = true;
        this.toggleState({ key: "isOpen", value: true });
    },
    async asyncData({ params, app }) {
        let content = await importMd(app.i18n.locale, `${params.id}.md`);
        return { content };
    },
    computed: {
        ...mapGetters({
            titleTemplate: "titleTemplate",
            activePage: "activePage",
            isOpen: "isOpen",
            activeTopic: "activeTopic"
        }),
        title() {
            return this.titleTemplate(
                `${this.$route.params.id}: ${this.activePage.title}`,
                this.$t("title")
            );
        },
        topic() {
            return this.activeTopic(this.$route.params.id);
        }
    },
    methods: {
        ...mapActions({
            toggleState: "toggleState"
        })
    }
};
</script>
