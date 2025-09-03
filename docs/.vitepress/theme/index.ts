import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "./styles/styles.scss";
import BadgeEasy from "./components/BadgeEasy.vue";
import BadgeMedium from "./components/BadgeMedium.vue";
import BadgeHard from "./components/BadgeHard.vue";
import BadgeDeprecated from "./components/BadgeDeprecated.vue";
import BadgeRelated from "./components/BadgeRelated.vue";

import UserMessage from "./components/UserMessage.vue";
import BotMessage from "./components/BotMessage.vue";
import DiscordWrapper from "./components/DiscordWrapper.vue";

import dc from "@discord-message-components/vue";
const {
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
  install: DiscordMessageComponents
} = dc;

import "@discord-message-components/vue/dist/style.css";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // Discord conmponents
        app.use(DiscordMessageComponents, {});
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

        app.component("UserMessage", UserMessage);
        app.component("BotMessage", BotMessage);
        app.component("Discord", DiscordWrapper)
    }
} satisfies Theme