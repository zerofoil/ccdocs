# Bot Syntax

Learning about the syntax used by this bot is necessary to understand how to write commands.

## Syntax Overview

The bot's code uses two types:

1.  [Text](#what-is-text)
2.  [Function](#what-is-a-function)

## What is Text?

Anything in the code that isn't a [function](#what-is-a-function) is considered text.

For example, in the following code snippet:

```php
Hello $username, how are you?
```

- `Hello` - Text
- `$username` - Function
- `, how are you?` - Text

## What is a Function?

A function is a special instruction that begins with a `$` symbol, for example [`$username`](../Functions/Member/username.md).

```php
Hello $username, how are you?
```

- [`$username`](../Functions/Member/username.md) is the only function present. Function [`$username`](../Functions/Member/username.md) returns the users name, that means it will get replaced by it.

<Discord>
    <UserMessage>
        !!exec Hello $username, how are you?
    </UserMessage>
    <BotMessage>
        Hello user, how are you?
    </BotMessage>
</Discord>

## Function Actions

Functions performs one of these three actions:

- **Replace with a value:** The function is replaced by a specific value.
- **Perform an action:** The function executes a task.
- **Perform an action and replace with a value:** The function executes a task and then is replaced by a specific value.

## Function Arguments

Some functions require input from you to customize their behavior. Functions are case-insensitive! The format is as follows:

```php
$function[arguments]
```

We previously used [`$username`](../Functions/Member/username.md) without any input. This is because, as its documentation specifies, it defaults to returning the executor's name.  To get someone else's username, you need to provide their User ID as input.

Let's say we want to get username from User 2 instead of User:

<Discord>
    <UserMessage>
        !!exec $username[123456789123456789]
    </UserMessage>
    <BotMessage>
        user2
    </BotMessage>
</Discord>

---

### Multiple Arguments

Some functions require multiple arguments. For example [`$msg`](../Functions/Message/msg.md) has required and optional arguments:

```php
$msg[channelID;messageID;option;additional 1;additional 2]
```

- <Arg arg="channelid" required="true"/>
- <Arg arg="messageid" required="true"/>
- <Arg arg="option" required="true"/>
- <Arg arg="additional 1"/>
- <Arg arg="additional 2"/>

### Example

Example of using $msg with multiple arguments

<Discord>
    <UserMessage>
        !!exec Message content: $msg[$channelID;$messageID;content]
    </UserMessage>
    <BotMessage>
        !!exec Message content: $msg[$channelID;$messageID;content]
    </BotMessage>
</Discord>

## Escaping

Certain characters can cause unexpected behavior and need to be escaped. For example, if you want to send the literal text `$username` instead of having it replaced with the username, use backslash (`\`):

<Discord>
    <UserMessage>
        !!exec Hello \$username, how are you?
    </UserMessage>
    <BotMessage>
        Hello $username, how are you?
    </BotMessage>
</Discord>

Characters that may need escaping in your code:

`$`, `[`, `]`, `;`, `:`, `>`, `<`, `=`, `{`, `}`

Escape alternatives:

- `#RIGHT#` -> `[`
- `#LEFT#` -> `]`
- `#SEMI#` -> `;`
- `#COLON#` -> `:`
- `#DOLLAR#` -> `$`
- `#CHAR#` -> `$`
- `#RIGHT_CLICK#` -> `>`
- `#LEFT_CLICK#` -> `<`
- `#EQUAL#` -> `=`
- `#RIGHT_BRACKET#` -> `}`
- `#LEFT_BRACKET#` -> `{`
- `#NL#` -> New line
- `#BR#` -> New line
- `#SP#` -> Space
- `#TAB#` -> Tab
- `#SLASH#` -> `/`
- `#BACKSLASH#` -> `\`