<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "User"
    }
})
</script>

<template>
    <discord-mention :highlight="true">{{text}}</discord-mention>
</template>