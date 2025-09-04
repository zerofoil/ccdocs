<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Medium"
    }
})
</script>

<template>
    <Badge type="warning" :text="text"/>
</template>