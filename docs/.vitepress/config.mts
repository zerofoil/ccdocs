const quickAccess = {
    // Likely to edit
    docs_title: "Custom Command",
    embed_title: "Custom Command Bot Documentation",
    desc: "Discover clear, practical instructions to configure, command, and customize your Custom Command Bot documentation.",

    // Just in case
    image: "/bot-profile.png",
    icon: "/favicon.ico",
    discord_url: "https://ccommandbot.com/join",
    github_url: "https://github.com/raspdevpy/ccdoc",
}

import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import { BundledTheme } from "shiki";
const light: BundledTheme = "vitesse-light"
const dark: BundledTheme = "vitesse-dark"

const vitePressConfig = {
    base: "/ccdocs/",
    vite: { ssr: { noExternal: ['@discord-message-components/vue'] } },
    ignoreDeadLinks: true,
    
    title: quickAccess["docs_title"],
    description: quickAccess["desc"],
    themeConfig: {
        logo: quickAccess["image"],
        head: [
            ["link", { rel: "icon", href: quickAccess["icon"] }],
            ["meta", { name: "theme-color", content: "#74b0f7" }],

		    ["meta", { property: "og:title", content: quickAccess["embed_title"] }],
		    ["meta", { property: "og:description", content: quickAccess["desc"] }],
		    ["meta", { property: "og:image", content: quickAccess["image"] }],
		    //["meta", { property: "og:url", content: "https://ccommandbot.com" }],
            
		    ["meta", { name: "twitter:title", content: quickAccess["embed_title"] }],
		    ["meta", { name: "twitter:description", content: quickAccess["desc"] }],
		    ["meta", { name: "twitter:image", content: quickAccess["image"] }]
        ],
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
            light: light,
            dark: dark
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
    withSidebar(vitePressConfig, sidebarOptions)
)