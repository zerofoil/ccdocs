---
order: 1
---

# Ping Command

**Difficulty:** <Easy/>

Let's make a simple ping command, where you send a command `!ping` and the bot replies with `pong!`.

## 1. Creating Command

First step every time is to create a new custom command. [Here's a step-by-step guide.](../Guide/1-creating_cc.md)

## 2. Trigger Options

Second step is to set your trigger properly. We will be using [`word`](../Triggers/2-word.md) trigger.

Currently, you should see this at your screen:
<Pic src="images/tutorials/ping/1.png"/>

Let's zoom on trigger options:
<Pic src="/images/tutorials/ping/2.png"/>

Make sure your trigger type is `Word`.

All we need to do here, is to enter the trigger phrase. As said before, we will use `!ping`:
<Pic src="/images/tutorials/ping/3.png"/>

## 3. Response

To make the bot respond with `pong!`, we need to write it into the code editor.
<Pic src="/images/tutorials/ping/4.png"/>

## 4. Optional changes

All that's left here is to save the command and test it out!

But remmember you can also change the name of your command, so you can recognize it in the dashboard:
<Pic src="/images/tutorials/ping/5.png"/>

## 5. Testing

After you have saved the command, you can send `!ping` into your Discord server, and see what happens!

<Discord>
    <UserMessage>
        !ping
    </UserMessage>
    <BotMessage>
        pong!
    </BotMessage>
</Discord>