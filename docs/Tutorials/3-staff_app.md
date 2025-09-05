---
order: 3
---

# Staff Application

**Difficulty:** <Hard/>

In this guide you will learn how to use [`$modal`](../Functions/Interaction/modal.md) function and button type command.

Quick preview:
<Pic src="/images/tutorials/staff-app/1.png"/>

## 1. Button

First of all, we need a button so we can enter the form. You can use `!!exec` command to execute [`$button`](../Functions/Buttons/button.md) quickly without creating a new command.

<Discord>
    <UserMessage>
        !!exec $button[Apply;green;staff-app]
    </UserMessage>
    <BotMessage>
        <Buttons>
            <Button type="success">
                Apply
            </Button>
        </Buttons>
    </BotMessage>
</Discord>

## 2. Button Command

Now create a new command, and set the trigger type to [`On Button Click`](../Triggers/12-button.md) and enter the button ID. In our case, the button ID is `staff-app`.
<Pic src="/images/tutorials/staff-app/2.png"/>

## 3. Button Code

To make the button send a modal upon clicking, you will have to use function [`$modal`](../Functions/Interaction/modal.md).

We will use 2 inputs:
- Position
- Reason

```php
$modal[
    {title=Staff Application} // Modal title
    {id=staff-app} // Modal ID
    
    {input=
        {name=Position}
        {ph=What position would you like to apply for?}
        {id=position}
        {type=short}
        {min=5}
        {max=100}
    }
    
    {input=
        {name=Reason}
        {ph=Why should we take you?}
        {id=reason}
        {type=long}
        {min=20}
    }
]
```

## 4. Modal Handling

As you may have noticed, after clicking the button modal appears, but submitting it doesn't do anything.

We'll now create a command to catch all the submitted forms.

In order to detect submitted forms, we need to set the type to [`On Modal Submit`](../Triggers/14-modal.md), and modal ID to `staff-app`.
<Pic src="/images/tutorials/staff-app/3.png"/>

After we catch a submitted form, we need to do a few things:
- Get answers by users
- Send the answers to a channel
- Let user know the application was sent

```php
// Save answers to different variables
$let[position;$modalAnswer[position]]
$let[reason;$modalAnswer[reason]]

// Send message to #applications
$channelSendMessage[$channelID[applications];
    {author:$displayName:$authorAvatar}
    {title:Staff application}
    {description:$mention has submitted the staff application!}
    {field:Position:$position}
    {field:Reason:$reason}
    {color:orange}
]

// Send an ephemeral interaction reply
$interactionReply[Submission sent!;yes]
```

## 5. Apply

Now let the members apply!

<Discord>
    <BotMessage>
        <discord-embed authorIcon="https://cdn.discordapp.com/embed/avatars/0.png" authorName="User" embedTitle="Staff application" borderColor="#ff5100">
            <Mention/> has submitted the staff application!
            <discord-embed-fields>
                <discord-embed-field fieldTitle="Position">
                    Moderator
                </discord-embed-field>
                <discord-embed-field fieldTitle="Reason">
                    Because I'm active :)
                </discord-embed-field>
            </discord-embed-fields>
        </discord-embed>
    </BotMessage>
</Discord>