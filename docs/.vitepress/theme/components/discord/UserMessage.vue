<script setup>
import { withBase } from 'vitepress';
const avatar = withBase("/images/0.png");
</script>

<template>
    <div class="discord-user">
        <discord-message :bot="false" role-color="#d6e0ff" author="User" :avatar="avatar">
            <slot></slot>
        </discord-message>
    </div>
</template>

<style>
.discord-user .discord-message .discord-author-info .discord-author-username {
    color: rgb(80, 170, 255) !important;
}
html.dark .discord-user .discord-message .discord-author-info .discord-author-username {
    color: #d6e0ff !important;
}
</style>