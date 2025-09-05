---
order: 4
---

# Reward Collection

**Difficulty:** <Normal/>

This time, you will learn how to make a one-time use command.

## 1. Trigger Options

Create a new command, and set the word trigger to `!collect` (your choice).

## 2. Code

Now that we have the trigger set, we have to make a code.

We will need these functions:
- [`$getUserVar`](../Functions/Variables/getUserVar.md) - To get variable value
- [`$setUserVar`](../Functions/Variables/setUserVar.md) - To set variable value
- [`$increaseUserVar`](../Functions/Variables/increaseUserVar.md) - To increase variable value
- [`$onlyIf`](../Functions/only/onlyIf.md) - To stop the code if expression returns false

We start with checking if the user has already collected the reward:

```php
$onlyIf[$getUserVar[collected]!=true;You have already collected this reward!]
```

After checking, we need to set it to collected:

```php{2}
$onlyIf[$getUserVar[collected]!=true;You have already collected this reward!]
$setUserVar[collected;true] // [!code focus]
```

Now we just increase the money variable, and let them know it was collected successfully:

```php{3,4}
$onlyIf[$getUserVar[collected]!=true;You have already collected this reward!]
$setUserVar[collected;true]
$increaseUserVar[money;100] // [!code focus] change to your needs
Reward collected! // [!code focus]
```

## 3. Collect

Try your collect command and earn!

<Discord>
    <UserMessage>
        !collect
    </UserMessage>
    <BotMessage>
        Reward collected!
    </BotMessage>
</Discord>