<script setup>
const props = defineProps({
    arg: {
        type: String,
        required: true
    },
    required: {
        type: Boolean,
        default: false
    },
    default: {
        type: String,
        default: ""
    }
})
const final = `${(props.required) ? "!" : "?"} ${props.arg}`;
const type = (props.required) ? "Rarg" : "Oarg";
const def = (type == "Oarg" && props.default != "") ? "Default:" : "";
</script>

<template>
    <Badge :type="type" :text="final"/> {{ def }} <code v-if="def">{{ default }}</code>
</template>

<style>
.VPBadge.Rarg {
    border-radius: 6px;
    color: rgb(200, 100, 150);
    background-color: rgba(200, 100, 150, 0.16);
}
.VPBadge.Oarg {
    border-radius: 6px;
    color: rgb(150, 150, 200);
    background-color: rgba(100, 100, 200, 0.16);
}
</style>