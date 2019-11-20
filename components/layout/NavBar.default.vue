<template>
    <div class="navbar">
        <!-- CLOSE BUTTON - VISIBLE ONLY WHEN THE CONTENT IS OPEN -->
        <transition name="bounce">
            <div v-if="isOpen" @click="resetPage" class="btn close">
                <span class="material-icons"> close </span>
                <span> {{ $t("language.close") }} </span>
            </div>
        </transition>

        <!-- PAGE INDICATORS IN THE TOP SECTION -->
        <!-- SUB NAVIGATION -->
        <transition name="fly-in-top">
            <div class="nav-indicators" v-if="!hide && !isOpen">
                <span
                    v-for="(item, index) in pages"
                    :class="[
                        { active: index === activePageIndex },
                        'material-icons'
                    ]"
                    @click="goToPage(index)"
                >
                    {{ icons[index] }}
                </span>
            </div>
        </transition>

        <!-- I18N -->
        <div class="i18n">
            <div v-for="locale in $i18n.locales">
                <a
                    :href="switchLocalePath(locale.code)"
                    v-if="$i18n.locale !== locale.code"
                >
                    {{ locale.name }}
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            icons: process.env.icons.pages
        };
    },
    computed: {
        ...mapGetters({
            isOpen: "isOpen",
            activePage: "activePage",
            activePageIndex: "activePageIndex",
            pages: "pages"
        }),
        hide() {
            // Hide an entire sub navigation from homepage
            return this.activePageIndex == -1 ? true : false;
        }
    },
    methods: {
        ...mapActions({
            goToPage: "goToPage",
            toggleState: "toggleState"
        }),
        resetPage() {
            this.toggleState({ key: "isOpen", value: false });
            setTimeout(
                () =>
                    this.$router.push(
                        this.localePath({ path: `/` + this.activePage.slug })
                    ),
                2000
            );
        }
    }
};
</script>
