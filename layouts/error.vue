<template>
    <div class="container error-container">
        <div class="alpha-circle"></div>
        <div class="alpha-circle"></div>
        <div class="alpha-circle"></div>
        <div class="alpha-circle"></div>
        <div
            class="card"
            style="display: flex; flex-flow: column; align-items: center;"
        >
            <transition name="fade">
                <span
                    @click="home"
                    v-if="show"
                    class="material-icons"
                    style="color: #e4d069; font-size: 10rem;"
                >
                    error
                </span>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    props: ["error"],
    data() {
        return {
            show: false
        };
    },
    mounted() {
        this.show = true;
        this.setCircles();
    },
    methods: {
        home() {
            this.$nextTick(() => {
                this.show = false;
                this.resetCircles();
                setTimeout(() => window.location.replace("/"), 1500);
            });
        },
        setCircles() {
            let circles = document.querySelectorAll("div.alpha-circle");
            circles.forEach((item, index) => {
                TweenMax.fromTo(
                    item,
                    1.5,
                    {
                        scale: 0,
                        x: "-50%",
                        y: "-50%",
                        transformOrigin: "50% 50%"
                    },
                    {
                        scale: index + 1.5,
                        x: "-50%",
                        y: "-50%",
                        transformOrigin: "50% 50%"
                    },
                    1.5
                );
            });
        },
        resetCircles() {
            let circles = document.querySelectorAll("div.alpha-circle");
            circles.forEach((item, index) => {
                TweenMax.to(
                    item,
                    1.5,
                    {
                        opacity: 0,
                        scale: index + 0.2
                    },
                    1.5
                );
            });
        }
    }
};
</script>
<style>
.alpha-circle {
    left: 50%;
    top: 50%;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
    z-index: -1;
}
.alpha-circle {
    background-color: rgba(183, 74, 112, 0.2);
}
</style>
