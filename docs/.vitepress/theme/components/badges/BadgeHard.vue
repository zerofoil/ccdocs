<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Hard"
    }
})
</script>

<template>
    <Badge type="danger" :text="text"/>
</template>