---
order: 2
---

# Report Command

**Difficulty:** <Easy/>

Here are instruction on how to create a simple report command.

## 1. Trigger Options

Users will report using word command `!report`, so let's set a corresponding trigger.

First - look at the options we have. Command type is set to `word` correctly. What we need to change again is trigger:
<Pic src="/images/tutorials/report/1.png"/>

Since users will use `!report`, we will put that into the command trigger.
<Pic src="/images/tutorials/report/2.png"/>

## 2. Getting User ID

Let's begin by loading the ID of given user. For that we will have to use these functions:
- [`$message`](../Functions/Message/message.md) - To get user input
- [`$findMember`](../Functions/Member/findMember.md) - To get the user ID from user input
- [`$let`](../Functions/Variables/let.md) - To save user ID into a variable

### 2.1 - $let

```php
$let[reportedUser; ... ] // This will save every function output inside
```

### 2.2 - $findMember

```php
$let[reportedUser;$findMember[ ... ]] // Now we need to fill up the arguments
```

### 2.3 - $message

```php
// To find user from first word in the command, we will use $message[1]
$let[reportedUser;$findMember[$message[1];no]]
```

## 3. Getting Reason

Users should be able to describe what's the report for. Let's save it into another variable.

```php{2}
$let[reportedUser;$findMember[$message[1];no]] // Save user ID
$let[reason;$message[2+]] // [!code focus] 2+ means 2 and more
```

## 4. Get Channel ID

We are almost ready to send, but we still don't know where. Here you need to either enter the channel ID manually, or use function [`$channelID`](../Functions/Channel/channelID.md) to retrive channel ID from its name. Choose one way to save the ID.

```php{3,4}
$let[reportedUser;$findMember[$message[1];no]] // Save user ID
$let[reason;$message[2+]] // Save reason
$let[reportChannel;123456789123456789] // [!code focus] The channel ID
$let[reportChannel;$channelID[reports]] // [!code focus] The channel ID from name
```

## 5. Sending report

Now that we have every variable set up, we need to send the report to the report channel. We will also let the user know, that the report was succesfully sent.

For this we will need 2 similar functions:
- [`$channelSendMessage`](../Functions/Message/channelSendMessage.md) - To send a report
- [`$sendMessage`](../Functions/Message/sendMessage.md) - To send confirmation message

```php{5,6}
$let[reportedUser;$findMember[$message[1];no]] // Save user ID
$let[reason;$message[2+]] // Save reason
$let[reportChannel;123456789123456789] // Save channel ID

$channelSendMessage[$reportChannel;$mention reported <@$reportedUser> for $reason.] // [!code focus]
$sendMessage[$mention your report has been submitted.] // [!code focus]
```

### 6. Testing

Now just test your command, and see how it works!

##### #main-chat

<Discord>
    <UserMessage>
        !report <Mention text="User 2"/> Spamming in main chat
    </UserMessage>
    <BotMessage>
        <Mention/> your report has been submitted.
    </BotMessage>
</Discord>

<br/>

##### #reports

<Discord>
    <BotMessage>
        <Mention/> reported <Mention text="User 2"/> for Spamming in main chat.
    </BotMessage>
</Discord>