---
title: Documentation Template
order: 2
---

# $functionName

<br/>

Short description of the function, what does the function do? Make sure this is straightforward and understandable.

## Arguments

```php
$functionName[argument;another]
```

- <Arg arg="argument" :required="false" default="value"/> - Argument description here.
- <Arg arg="another" :required="true"/> - If it's not optional, set the required parameter to true.

## Example

What does this example show?
- **`arguments`** - Argument description here. If it's not optional, say `Required`.
  - Optional - Default value: `value`.
- **`another`** ~ - Add as many arguments as the function has.

<Discord>
    <UserMessage>
        !!exec This is example command
    </UserMessage>
    <BotMessage>
        This is example command
    </BotMessage>
</Discord>

<Cooldown/>

##### Related: <Related text="Contributing to the Documentation" url="./main"/>
##### Function difficulty: <Easy/>