
const Discord = require('discord.js')
const pagination = require('discord.js-pagination');
const talkedRecently = new Set();

exports.run = async (bot,message,args) => {
    if (talkedRecently.has(message.author.id)) {
        
        message.channel.send("Wait 5 Seconds before using this again. ");
    } else {

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('**?kick**', 'Kicks a member from your server via mention or ID.')
        .addField('**?ban**', 'Bans a member from your server via mention or ID.')
        .addField('**?unban**', 'unBans a member from your server via ID.')
        .addField('**?purge**', 'Purges messages')
        .addField('**?mute**' , 'Mutes a user in the server.')
        .addField('**?unmute**' , 'unMutes a user in the server.')
        .addField('**?nick**' , 'Changes a user nickname in the server.')
        .addField('**?resetnick**' , 'Resets a nickname of the user in the server.')
        .addField('**?nuke**' , 'Nukes a channel and recreates it.')
        .setFooter('Created By wearelivingart#1242')

        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('**?meme**', 'Generates a random meme.')
        .addField('**?gay**' , 'GayRate of a user in the server.')
        .addField('**?simp**' , 'SimpRate of a user in the server.')
        .addField('**?av**' , 'Shows the avatar of  a user in the server.')
        .setFooter('Created By wearelivingart#1242')

        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('**?ping**', 'Get the bot\'s API ping.')
        .addField('**?invite**', 'invite me to your server.')
        .addField('**?slowmode**', 'Sets a slowmode to the channel.')
        .addField('**?whois**' , 'Information of a user.')
        .addField(`**?gw**` , "Starts a giveaway! - >  To Use `?gw <time(1m,1h,1d)> <#channel> <prize>")
        .setFooter('Created By wearelivingart#1242')

        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 5000);
}
}
exports.help = {
    name: 'help'
    }