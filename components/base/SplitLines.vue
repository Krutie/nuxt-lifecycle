<template>
    <div class="lines">
        <span v-for="item in chunkText">
            {{ item.join(" ") }}
        </span>
    </div>
</template>
<script>
const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
export default {
    props: {
        text: {
            type: String
        }
    },
    computed: {
        textArray() {
            return this.text.split(" ");
        },
        chunkText() {
            return chunk(this.textArray, 6);
        }
    }
};
</script>
