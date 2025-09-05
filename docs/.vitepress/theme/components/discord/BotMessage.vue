<script setup>
import { useData, withBase } from 'vitepress';
const path = withBase("bot-profile.png");
</script>

<template>
    <div class="discord-bot">
        <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" :avatar="path">
            <slot></slot>
        </discord-message>
    </div>
</template>

<style>
.discord-bot .discord-message .discord-author-info .discord-author-username {
    color: rgb(55, 158, 255) !important;
}
html.dark .discord-bot .discord-message .discord-author-info .discord-author-username {
    color: #5fb0fa !important;
}
</style>