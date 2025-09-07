<template>
    <a :href="link">
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
});
const link = props.url.replace(".md", "");
</script>

<style>
.VPBadge.related {
    color: rgba(172, 100, 255, 1);
    background-color: rgba(172, 100, 255, 0.16);
    text-decoration: underline;
}
</style>