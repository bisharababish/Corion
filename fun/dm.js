    const Discord = require ('discord.js')
    const {message,channel} = require('discord.js')
    
        const talkedRecently = new Set();
        
        exports.run = async (bot,message,args) => {
            if (talkedRecently.has(message.author.id)) {
                
                message.channel.send("Wait 5 Seconds before using this again. ");
        } else {
        
if (!message.member.permissions.has("MANAGE_MESSAGES"))
return message.channel.send("You do not have enough permissions!");
let user =message.mentions.members.first() ||message.guild.members.cache.get(args[0]);
if (!user) return message.channel.send(`You did not mention a user, or you gave an invalid id`
);
if (!args.slice(1).join(" ")) return message.channel.send("You did not specify your message");
user.user.send(args.slice(1).join(" "))
.catch(() => message.channel.send("That user could not be DMed!"))
.then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
talkedRecently.add(message.author.id);
setTimeout(() => {
  // Removes the user from the set after a minute
  talkedRecently.delete(message.author.id);
}, 5000);
        }
    }
exports.help = {
    name: 'dm'
}