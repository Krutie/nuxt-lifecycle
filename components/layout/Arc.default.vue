<template lang="html">
    <!-- SVG ARC FOR CIRCLES TO TRAVEL -->
    <!-- Markup only component -->
    <div class="timeline-arc">
        <svg class="arc" x="0px" y="0px" viewBox="0 0 1440 115" alt="svg arc">
            <path
                :class="{ 'loading-bar': loading }"
                fill="none"
                d="M0,112C165.6,59.6,411.9,1.5,714.4,1.5c308-0.5,558.5,59.8,725.6,112"
                style="stroke-dashoffset: 0px; stroke-dasharray: 1500;"
            ></path>
        </svg>
        <svg
            class="arc-opaque"
            x="0px"
            y="0px"
            viewBox="0 0 1440 115"
            alt="svg opaque arc"
        >
            <path
                fill="none"
                d="M0,112C165.6,59.6,411.9,1.5,714.4,1.5c308-0.5,558.5,59.8,725.6,112"
            ></path>
        </svg>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            loading: "loading"
        })
    }
};
</script>
