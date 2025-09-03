<template>
    <div class="discord-user">
        <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
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