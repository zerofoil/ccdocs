# Cooldowns and Ratelimits

To ensure fair usage and prevent abuse, Discord implements rate limits on its API. Our bot also uses a cooldown system to manage requests efficiently. This page explains how these limits work and how they might affect your custom commands.

## What are Cooldowns and Limits

Cooldowns and limits are restirictions, that control how frequently certain actions can be performed.

- **Cooldown:** A waiting period before a function can be used again.
- **Limit:** A maximum number of times a function can be called within single execution.

## Function Cooldowns

Many functions have a built-in cooldown period. This means that after using the function, there will be a delay before it can be used again.

Function cooldowns have also types, on which name the cooldowns will save.

For example if we have 2 functions with the same cooldown type, the second one used will hit cooldown. If the cooldown types are different, functions will execute freely.

Cooldowns are also `per` something. This means, for example if the cooldown is per user, user will hit cooldown if they will execute 2 same functions with cooldown at once, but not if other user will execute the second one.

## Hitting Cooldown

When you hit a cooldown, the bot's behavior depends on the function and its configuration:

- **Wait on cooldown:** The bot waits for the cooldown to expire and then executes the function.
- **Cancel the execution on cooldown with error message:** The bot sends an error message indicating that the function is on cooldown. Code will stop executing and will not continue.

## Function Limits

Even with cooldowns in place, a function can only be called a limited number of times within a single custom command.

A function with cooldown can be called a maximum of **5 times** within a single custom command.

If this limit is reached, the bot will silently cancel the execution of the function.

## Execution Limits

These limits control how many custom commands can run simultaneously and how quickly they can be triggered.

- **Parallel Execution Limit:** The bot supports up to **5 parallel executions** of the same custom command.

- **Execution Cooldown:** The same custom command on free tier bot can only be triggered **once every 5 seconds**.

## Premium

Premium tiers: 3, 4 and 5

Premium tier 3 is for vote credits. You can redeem using the `!!redeem` command. Other tiers are paid for.

### Benefits

- **Custom Bot:** Create your own bot, with custom profile picture, description and name.
- **Function Cooldowns:** Removed entirely.
- **Function Limits:** Hard capped to 20 calls per custom command.
- **Execution Limits:** Hard capped to 60 parallel executions.
- **Execution Cooldown:** Hard capped to 0.5 seconds.
- **Better Resources:** Improved bot preformace and latency.

See [ccommandbot.com/perks](https://ccommandbot.com/perks) for more informations.