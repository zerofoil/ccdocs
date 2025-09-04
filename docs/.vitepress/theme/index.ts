import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "./styles/styles.scss";

import {
    BadgeEasy,
    BadgeMedium,
    BadgeHard,
    BadgeDeprecated,
    BadgeRelated,
    BadgePremium,
    BadgeNormal,

    DiscordWrapper,
    UserMessage,
    BotMessage,
} from "./components";

import Cooldowns from "./Cooldowns.vue";

import {
  DiscordButton,
  DiscordButtons,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordInteraction,
  DiscordMarkdown,
  DiscordMention,
  DiscordMessage,
  DiscordMessages,
  DiscordReaction,
  DiscordReactions,
  //DiscordMessageComponents
} from "@discord-message-components/vue";

import "@discord-message-components/vue/dist/style.css";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // Discord conmponents
        //app.use(DiscordMessageComponents, {});
        app.component("DiscordButton", DiscordButton);
        app.component("DiscordButtons", DiscordButtons);
        app.component("DiscordEmbed", DiscordEmbed);
        app.component("DiscordEmbedField", DiscordEmbedField);
        app.component("DiscordEmbedFields", DiscordEmbedFields);
        app.component("DiscordInteraction", DiscordInteraction);
        app.component("DiscordMarkdown", DiscordMarkdown);
        app.component("DiscordMention", DiscordMention);
        app.component("DiscordMessage", DiscordMessage);
        app.component("DiscordMessages", DiscordMessages);
        app.component("DiscordReaction", DiscordReaction);
        app.component("DiscordReactions", DiscordReactions);

        // Custom components
        app.component("Easy", BadgeEasy);
        app.component("Medium", BadgeMedium);
        app.component("Hard", BadgeHard);
        app.component("Deprecated", BadgeDeprecated);
        app.component("Related", BadgeRelated);
        app.component("Premium", BadgePremium);
        app.component("Normal", BadgeNormal);

        app.component("UserMessage", UserMessage);
        app.component("BotMessage", BotMessage);
        app.component("Discord", DiscordWrapper);

        app.component("Cooldown", Cooldowns);
    }
} satisfies Theme