<template>
    <a :href="url">
        <Badge type="related" :text="text"/>
    </a>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: "/"
    }
})
</script>

<style>
.VPBadge.related {
    color: rgba(172, 100, 255, 1);
    background-color: rgba(172, 100, 255, 0.16);
}
</style>