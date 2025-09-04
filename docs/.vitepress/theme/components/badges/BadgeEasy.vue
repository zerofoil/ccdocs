<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Easy"
    }
})
</script>

<template>
    <Badge type="easy" :text="text"/>
</template>

<style>
.VPBadge.easy {
    color: rgba(100, 255, 100, 1);
    background-color: rgba(100, 255, 100, 0.16);
}
</style>