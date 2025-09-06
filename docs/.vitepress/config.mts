const base = "/ccdocs/"
const quickAccess = {
    // Likely to edit
    docs_title: "Custom Command",
    embed_title: "Custom Command Bot Documentation",
    desc: "Discover clear, practical instructions to configure and customize your Custom Command Bot.",

    // Just in case
    image: "/images/bot-profile.png",
    banner: `${base || "/"}images/banner.png`,
    icon: `${base || "/"}favicon.ico`,
    discord_url: "https://ccommandbot.com/join",
    github_url: "https://github.com/raspdevpy/ccdoc",
}

import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitePressConfig = {
    base: base,
    vite: { ssr: { noExternal: ['@discord-message-components/vue'] } },
    ignoreDeadLinks: true,
    
    title: quickAccess.docs_title,
    description: quickAccess.desc,
    head: [
        ['link', { rel: "icon", href: quickAccess.icon }],

		["meta", { property: "og:title", content: quickAccess.embed_title }],
		["meta", { property: "og:type", content: "website" }],
		["meta", { property: "og:description", content: quickAccess.desc }],
		["meta", { property: "og:url", content: "https://ccommandbot.com" }],
		["meta", { property: "og:image", content: quickAccess.banner }],

		["meta", { name: "twitter:title", content: quickAccess.embed_title }],
		["meta", { name: "twitter:description", content: quickAccess.desc }],
		["meta", { name: "twitter:card", content: "summary_large_image" }],

        ["meta", { name: "theme-color", content: "#5fb0fa" }]
    ],
    themeConfig: {
        logo: quickAccess.image,
        search: { provider: "local" },
        nav: [
            { text: "Guide", link: "/" },
        ],
        socialLinks: [
            { icon: "discord", link: quickAccess["discord_url"] },
            { icon: "github", link: quickAccess["github_url"] },
        ],
    }, 
    markdown: {
        theme: {
            light: "vitesse-light",
            dark: "vitesse-dark"
        }
    },
}

const sidebarOptions = {

    documentRootPath: "/docs",

    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,

    collapsed: true,
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,

    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true
}

export default defineConfig(
    // @ts-ignore
    withSidebar(vitePressConfig, sidebarOptions)
)
