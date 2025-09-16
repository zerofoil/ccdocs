<script setup>
import { useData, withBase } from 'vitepress';
import { computed } from 'vue';

const url = withBase("/images/tooltip.png");
const dark = url.slice(0, -4) + "-dark.png";
const { isDark } = useData();
const img = computed(() => {
    return isDark.value ? dark : url;
});

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
const final = `${/*(props.required) ? "!" : "?"*/""} ${props.arg}`;
const type = (props.required) ? "Rarg" : "Oarg";
const def = (type == "Oarg" && props.default != "") ? "Default:" : "";
const req = (props.required) ? "Required Argument" : "Optional Argument";
</script>

<template>
    <Badge :type="type">
        <div class="tooltip">
            <img :src="img" width="12" height="12">
                <span class="tooltiptext">{{ req }} {{ def }} <code v-if="def">{{ default }}</code></span>
            </img>
        </div>
        {{ final }}
    </Badge> 
</template>

<style>
.VPBadge.Rarg {
    display: inline-flex;
    gap: 5px;
    align-items: center;
    border-radius: 6px;
    color: rgb(200, 100, 150);
    background-color: rgba(200, 100, 150, 0.16);
    transform: none;
}
.VPBadge.Oarg {
    display: inline-flex;
    gap: 5px;
    align-items: center;
    border-radius: 6px;
    color: rgb(150, 150, 200);
    background-color: rgba(100, 100, 200, 0.16);
    transform: none;
}

@media screen and (max-width: 959px) {
    .tooltip {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }
    .tooltip .tooltiptext {
        visibility: hidden;
        opacity: 0;
        width: 150px;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        text-align: center;
        border-radius: 8px;
        padding: 5px 10px;
        position: absolute;
        z-index: 26;
        top: 350%;
        left: -100%;
        transition: opacity 0.4s ease-in-out, top 0.2s ease-out;
    }
    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 13px;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
    }
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
        top: 250%;
    }
}

@media screen and (min-width: 960px) {
    .tooltip {
        cursor: pointer;
        position: relative;
        display: inline-block;
    }
    .tooltip .tooltiptext {
        visibility: hidden;
        opacity: 0;
        width: 150px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        text-align: center;
        border-radius: 8px;
        padding: 5px 10px;
        position: absolute;
        z-index: 26;
        top: -10px;
        right: 280%;
        transition: opacity 0.4s ease-in-out, right 0.2s ease-out;
    }
    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 16px;
        left: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent rgba(0, 0, 0, 0.5);
    }
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
        right: 250%;
    }
}
</style>