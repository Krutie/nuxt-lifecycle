<template>
    <tips
        :items="tips"
        :icons="icons"
        :autoplay="false"
        @start="start"
        @next="next"
    >
        <template slot="title" slot-scope="{ activeItem }">
            <chars-fade-in-out
                v-for="(tip, index) in tips"
                :title="tip.title"
                :key="index"
                :delay="1.3"
            >
                <div v-if="activeItem === index" class="title"></div>
            </chars-fade-in-out>
        </template>
        <template slot="tip" slot-scope="{ activeItem }">
            <lines-slide-up v-for="(tip, index) in tips" :key="index">
                <split-lines v-if="activeItem == index" :text="tip.text">
                </split-lines>
            </lines-slide-up>
        </template>
        <template slot="introduction"> </template>
    </tips>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Tips from "@/components/base/Tips";
import CharsFadeInOut from "@/components/transitions/CharsFadeInOut";
import LinesSlideUp from "@/components/transitions/LinesSlideUp";

import SplitLines from "@/components/base/SplitLines";

export default {
    data() {
        return {
            icons: process.env.icons.pages
        };
    },
    components: {
        Tips,
        CharsFadeInOut,
        LinesSlideUp,
        SplitLines
    },
    computed: {
        ...mapGetters({
            tips: "tips"
        })
    },
    methods: {
        ...mapActions({
            setCompleted: "setCompleted"
        }),
        start() {
            this.$router.push(
                this.localePath({
                    path: "/nuxt-server-init"
                })
            );
        },
        next(activeItem) {
            this.setCompleted(activeItem);
        }
    }
};
</script>
