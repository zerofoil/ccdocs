# $replaceTextWithRegex
Uses a regular expression to replace matching queries

#### Usage: 
`$replaceTextWithRegex[text;regex;flags;new text]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $replaceTextWithRegex[Today is my birthday;/(birthday|party)/;gi;birthday 🎉]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Today is my birthday 🎉
	</discord-message>
</discord-messages>


##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Replace Text With Regex" vertical="middle" /> <Badge type="tip" text="Replace" vertical="middle" /> <Badge type="tip" text="regex" vertical="middle" />