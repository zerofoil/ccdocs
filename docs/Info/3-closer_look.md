# Closer Look

Here you can find more about bot, and its documentation. 

## Bot Commands

Custom Command bot has also some built in commands. For example `!!commands` where you can see them all. There would be two important of them: `!!exec` and `!!func`. Using `!!exec` you can execute code without creating any commands. If you need to know or search for any function, you can use `!!func`.



## Understanding the Docs

Almost every function needs parameters. Function parameters (arguments) are values that a function needs to operate correctly.

```php
$functionName[arguments]
```

All function arguments are separated with a semicolon (`;`). Function arguments can be either required or optional.

<Arg arg="argument 1" default="Hello World!"/> - This is how arguements are shown in our documentation. By hovering or clicking over the `?` icon, it will tell you if it's optional and the default value if provided.
<Arg arg="example arg 2" :required="true"/> - If an argument is required, it will show this color.

## Triggers

A trigger defines what action causes your code to run. All triggers are documentated in the [Trigger Types](../Triggers/) category.