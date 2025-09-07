<script setup>
import { useData, withBase } from 'vitepress';
import { computed } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    width: {
        type: String,
        default: ""
    },
    height: {
        type: String,
        default: ""
    }
});
const { isDark } = useData();
const image = withBase(props.src);
const dark = image.slice(0, -4) + "-dark.png";

const img = computed(() => {
    return isDark.value ? dark : image;
});
</script>

<template>
    <img :src="img" alt="" class="theme-image" :height="height" :width="width"/>
</template>

<style>
.theme-image {
    border-radius: 8px;
}
</style>