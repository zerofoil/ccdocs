---
order: 5
---

# Confession

**Difficulty:** <Medium/>

In this guide, you will learn how to make a simple slash command called `/confess`, where user can privately confess inside of embed.

<Discord>
    <BotMessage>
        <discord-embed borderColor="#00ff00" embedTitle="Anonymous confession">
            I luv CC
        </discord-embed>
    </BotMessage>
</Discord>

## 1. Create a Slash

The first step is to create a new slash command. [Here's a step-by-step guide.](../Triggers/3-slash.md) Create a slash command named `/confess` with text option `message`.

## 2. Trigger Options

If you've already created slash command, you need also a normal custom command. Create a new command and set the trigger type to `Slash Command`. Then in trigger slash you can select your slash command from the dropdown menu:
<Pic src="/images/tutorials/confession/1.png"/>

## 3. Code

Next, you need to send an embed with your message. We will use [curl format](../Info/5-curl.md) with [`$sendMessage`](../Functions/Message/sendMessage.md) to send an embed. To retrive the message entered, use [`$getOption`](../Functions/Interaction/getOption.md).

```php
$sendMessage[
    {title:Anonymous confession}
    {description:$getOption[message]}
    {color:green}
]
```

If you'd like to see who sent the confession, use [`$interactionReply`](../Functions/Interaction/interactionReply.md):

```php
$interactionReply[
    {title:Confession by $displayName}
    {description:$getOption[message]}
    {color:green}
]
```

## 4. Confess

Confess and see how it works!

<Discord>
    <BotMessage>
        <DiscordEmbed borderColor="#00ff00" embedTitle="Anonymous confession">
            Am i the only one that doesn't like JavaScript/TypeScript?
        </DiscordEmbed>
    </BotMessage>
</Discord>
