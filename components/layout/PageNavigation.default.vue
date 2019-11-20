<template>
    <!-- BACK AND NEXT NAVIGATION -->
    <navigation-array
        :pagesLength="pages.length"
        :activeKey="activePageIndex"
        :isOpen="isOpen"
        @back="back"
        @next="next"
        @summary="showSummary"
    >
        <!-- NEXT BUTTON -->
        <template #next>
            <span class="material-icons"> arrow_forward_ios </span>
            <span> {{ $t("language.next") }} </span>
        </template>

        <!-- START AGAIN BUTTON -->
        <template #start-again>
            <span class="material-icons"> arrow_forward </span>
            <span> {{ $t("language.startAgain") }} </span>
        </template>

        <!-- SUMMARY BUTTON -->
        <template #summary>
            <span class="material-icons"> filter_tilt_shift </span>
            <span>
                {{ $t("language.summary") }}
            </span>
        </template>

        <!-- BACK BUTTON -->
        <template #back>
            <span class="material-icons"> arrow_back_ios </span>
            <span> {{ $t("language.back") }} </span>
        </template>
    </navigation-array>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import NavigationArray from "@/components/base/NavigationArray";
export default {
    components: {
        NavigationArray
    },
    computed: {
        ...mapGetters({
            activePageIndex: "activePageIndex",
            pages: "pages",
            isOpen: "isOpen"
        })
    },
    methods: {
        ...mapActions({
            back: "back",
            next: "next"
        }),
        showSummary() {
            this.$router.push(
                this.localePath({
                    path: "/summary"
                })
            );
        }
    }
};
</script>
