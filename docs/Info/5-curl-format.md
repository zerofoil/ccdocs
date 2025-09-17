# Curl Arguments

Curl arguments are to make your code readable, understandable and also to have more control over some functions that supports curl.

Instead of using parameter arrays like `$functionName[one;two;three]`, curl arguments allow you to specify options using a key-value format.

## Example

Curl arguments look like this:

```ts
{key=value}
// OR
{key:value}
```

Let's say you want to create a text channel. Using traditional parameters, you might need to include several empty values for optional settings.

Here's the approach using curl:

```php
$createChannel[
    {name=channelName}
    {type=text}
    {topic=channel topic}
]
```