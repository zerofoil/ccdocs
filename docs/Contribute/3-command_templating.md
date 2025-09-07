---
order: 3
---

# Command Templating System

This page explains how to use the new templating system and how to make your commands compatible with it. The new system includes parsing of Metadata and Inputs, making command creation and customization easier.

## Metadata

Metadata adds extra information to your commands, such as descriptions, tags, categories, and more. This helps users find your commands more easily through template search.

::: warning Important
Metadata object **MUST** be commented out to work properly. See [example](#metadata-example).
:::

To add metadata to your code, use the following syntax:

```ts
{{{
    "version": Number,
    "tags": Array<String>,
    "author": String,
    "usecase": String,
    "category": String,
    "preview": String, // URL Here
    "description": Array<String>,
    "link": Array<String>, // URL's
    "custommd"?: String // Optional custom markdown
}}}
```

- <Arg arg="version" required="true"/> - The version of the command.
- <Arg arg="tags" required="true"/> - An array of strings representing keywords related to the command.
- <Arg arg="author" required="true"/> The author username of the command.
- <Arg arg="usecase" required="true"/> A quick explanation of what the command does.
- <Arg arg="category" required="true"/> The category the command belongs to. For example: `economy`, `fun`.
- <Arg arg="preview" required="true"/> A link to a preview image or video demonstrating the command.
- <Arg arg="description" required="true"/> An array of strings providing a detailed description of the command. Each string is a new line. Use `<code>...</code>` to highlight code.
- <Arg arg="link" required="true"/> An array of links to relevant resources, documentation, or examples.
- <Arg arg="custommd"/> A string containing custom markdown to further describe or provide instructions for the command.

## Metadata Example

Here's an example metadata for a `!balance` command:

```ts
/* Metadata :
{{{
    "version": "1",
    "tags": ["economy", "balance", "money"],
    "author": "User",
    "usecase": "Shows user balance.",
    "category": "economy",
    "preview": "https://image.png",
    "description": ["Run <code>!bal</code> to show your balance."] ,
    "link": ["https://image.png"],
    "custommd": ""
}}}
*/
```

## $onTemplate Function

The `$onTemplate` function creates a user interface (UI) for custom values required by your command.

::: warning Important
A UI is only generated if the command has associated metadata.
:::

#### Arguments

```php
$onTemplate[type;field;title;help;default value]
```

- <Arg arg="type" required="true"/> - The type of input field to create. Can be: `category`, `number`, `channel`, `role`, `text`, `boolean`, `id`, `runonlyin`.
- <Arg arg="field" required="true"/> - The style/appearance of the input field. Can be: `input`, `inputarray`, `dropdown`, `dropdownarray`, `checkbox`.
- <Arg arg="title" required="true"/> - The title displayed above the input field in the UI.
- <Arg arg="help" required="true"/> - A helpful description displayed below the input field.
- <Arg arg="default value" required="true"/> - The default value for the input field.

::: warning Important
Characters `[`, `]` and `;` CAN NOT be used within the `$onTemplate` function.

Use this instead:
- `#RIGHT#` for `]`
- `#LEFT#` for `[`
- `#SEMI#` for `;`
:::

## $onTemplate Example

```php
$let[categoryID;$onTemplate[category;dropdown;Ticket Category;Choose the category where the ticket should be created;$channelCategoryID]]
```

![](https://i.ibb.co/LQnfhh3/image.png)

## Arrays

`dropdownarray` and `inputarray` fields split their input by commas (`,`).
