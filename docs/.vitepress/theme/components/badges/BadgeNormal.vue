<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Normal"
    }
})
</script>

<template>
    <Badge type="tip" :text="text"/>
</template>