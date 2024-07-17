# RemoteHost API - Binder

### Context
RemoteHost is a program to host Minecraft servers and manage them remotely. It is open source [here](https://github.com/BlastyTheDev/RemoteHost). The frontend of RemoteHost is still under development, however, the API is ready to be used for server creation, running, and management.

RemoteHost was originally intended to allow members of a "small" Discord server to run some Minecraft servers, without the need of the host to be online to start and maintain the server. This is also why accounts must be linked to a Discord account that is in the Discord server. This is done using a bot.

### Features
These are some of the features that RemoteHost currently has (as of July 17 2024)
- Security system using accounts using token authentication with JWT (JSON Web Token)
- SQL Database support to store data such as account information
- Different account "tiers" to determine what a user account can and cannot do
- Discord bot for account verification, as accounts must be linked to a Discord account
- Minecraft server creation with support for Paper and Purpur (other software support planned)
- Running of Minecraft servers
- Streaming server console output to clients via websocket
- Sending of commands by the end user to the Minecraft server via API endpoint

There may be some others that are not listed here

### Notes
- Within the documentation, `(no name)` represents a parameter that should be sent and received as just the value. For example, many of RemoteHost's just return an object such as a string, number, or object with the properties of a created Minecraft server, for instance.
- Some of the endpoints display statuses such as `403`, of which the reason is very obvious. However, this is still documented as the backend may set the status to something like `418` depending on the contents of the request. See the descriptions of these for the details.
- Some endpoints require the user to have the tier `ADMIN`. The endpoint will return a `403` status if not.
- The RemoteHost API is subject to change in future versions. RemoteHost is currently in a very early "release". Access to it has not been given to any users for testing yet.