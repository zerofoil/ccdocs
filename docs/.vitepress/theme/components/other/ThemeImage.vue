<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true
    }
});
const image = props.src;
const dark = image.slice(0, -4) + "-dark.png";

const { isDark } = useData();

const img = computed(() => {
    return isDark.value ? dark : image;
});
</script>

<template>
    <img :src="src" alt="" class="theme-image"/>
</template>

<style>
.theme-image {
    border-radius: 8px;
}
</style>