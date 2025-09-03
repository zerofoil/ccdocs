# $deleteChannelVar

<br/>

Deletes a channel variable.

## Arguments

```php
$deleteChannelVar[variable;channelID]
```
- **`variable`** - Variable name to delete.
- **`channelID`** - (Optional) Default value: `$channelID`. ID of the channel you want to remove variable from.

## Example

<Discord>
    <UserMessage>
        !!exec Before: $getChannelVar[money]
        <br/>
        $deleteChannelVar[money]
        <br/>
        After: $getChannelVar[money]
    </UserMessage>
    <BotMessage>
        Before: 10
        <br/>
        After: undefined
    </BotMessage>
</Discord>

<br/>

::: tip Related Functions
Check out: [$setChannelVar](../Functions/Variables/setChannelVar)

Check out: [$getChannelVar](../Functions/Variables/getChannelVar)
:::
