<script setup>
const props = defineProps({
    type: {
        type: String,
        default: "primary"
    }
})
</script>

<template>
    <discord-button :type="type">
        <slot></slot>
    </discord-button>
</template>