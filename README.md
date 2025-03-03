# Corion

A powerful Discord moderation bot that helps server administrators manage their communities efficiently.

## Overview

Corion is a Discord bot designed to handle administrative tasks in your server. With a comprehensive set of moderation commands, Corion acts as your reliable admin assistant, helping maintain server order and discipline.

## Features

- **Member Management**
  - Ban users who violate server rules
  - Kick troublesome members
  - Temporarily or permanently mute disruptive users
  - Assign and manage roles

- **Moderation Tools**
  - Message purging and cleanup
  - Warning system for rule violations
  - Infraction logging for administrative transparency
  - Customizable auto-moderation

- **Server Administration**
  - Welcome new members with customizable messages
  - Set up verification systems
  - Configure permission-based command access
  - Track member activity

## Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `/ban` | Bans a user from the server | `/ban @user [reason]` |
| `/kick` | Removes a user from the server | `/kick @user [reason]` |
| `/mute` | Prevents a user from sending messages | `/mute @user [duration] [reason]` |
| `/unmute` | Restores a user's ability to send messages | `/unmute @user` |
| `/warn` | Issues a warning to a user | `/warn @user [reason]` |
| `/purge` | Deletes a specified number of messages | `/purge [amount]` |

## Setup

1. Invite Corion to your server using [this link](#)
2. Grant necessary permissions
3. Configure Corion's settings with `/config`
4. Set up admin roles with `/admin-roles`

## Self-Hosting

Requirements:
- Node.js v16.9.0 or higher
- Discord.js library
- A MongoDB database (optional)

```bash
# Clone the repository
git clone https://github.com/yourusername/corion.git

# Install dependencies
cd corion
npm install

# Configure your .env file with your bot token
# Start the bot
npm start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)

## Support

If you need help with Corion, join our [support server](#) or open an issue on GitHub.
