# Troubleshooting

Our custom language syntax and widely customizable commands can cause new users to encounter problems with their work. This page explains the most common problems.

## My command doesn't trigger

This is a very broad term. First thing you need to check, is if your command is enabled. You can see a switch in the right-top corner in the command editor. If this doesn't help, check your other command settings and code closely. If this issue persists, check section [# My word command doesn't trigger](#My-word-command-doesnt-trigger) or consider asking for help in our [support server](https://ccommandbot.com/join).

## My word command doesn't trigger

To make sure your word command triggers correctly, you need to make sure the permissions are set correctly. The default minimum required permission should be set to `None`.

If that didn't fix your issue, check if your command trigger contains any special characters. Special characters can sometimes interfere with trigger recognition. If your trigger is a RegEx, ensure it's correct.

The issue might also be in ingnored roles or the code.

## Bot doesn't give/take a role

There can be 2 problems:
- **Insufficient permission:** If the bot doesn't have a role/permission that can give roles to other users, you have to change the bot's permissions in Discord roles settings.
- **Role hierarchy:** Discord role system allows to give roles only **under** the bot's highest role. If you want to change that, you need to move the bot's role above the role you wish to give.

## Undescribed/Unknown error

If the bot gives you error without any description or says the error is unknown, please ask for help in our discord [support server](https://ccommandbot.com/join).