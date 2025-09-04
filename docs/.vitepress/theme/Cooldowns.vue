<script setup>
import cooldowns from "../cooldowns.json";
import { useData } from "vitepress";
const { page } = useData();
var cool = ""
const title = page.value.title
if (title in cooldowns) {
    cool += `<h2 id="Cooldown" tabindex="-1">Cooldown<a class="header-anchor" href="#cooldown" aria-label="Permalink to &quot;Cooldown&quot;">​</a></h2>\n`
    cool += `<li>Time: ${cooldowns[title].time}</li>\n`
    cool += `<li>Type: ${cooldowns[title].type}</li>\n`
    cool += `<li>Per: ${cooldowns[title].per}</li>\n`
}
cool += `<br/>`
</script>

<template>
    <div v-html="cool"></div>
</template>

