
const Discord = require('discord.js')
const pagination = require('discord.js-pagination');
exports.run = async (bot,message,args) => {

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('**?kick**', 'Kicks a member from your server via mention or ID.')
        .addField('**?ban**', 'Bans a member from your server via mention or ID.')
        .addField('**?unban**', 'unBans a member from your server via ID.')
        .addField('**?purge**', 'Purges messages')
        .addField('**?mute**' , 'Mutes a user in the server.')
        .addField('**?unmute**' , 'unMutes a user in the server.')
        .addField('**?nuke**' , 'Nukes a channel and recreates it.')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('**?meme**', 'Generates a random meme.')
        .addField('**?say**' , 'Lets the bot say anything.')
        .addField('**?avatar**' , 'Shows the avatar of  a user in the server.')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('**?ping**', 'Get the bot\'s API ping.')
        .addField('**?invite**', 'invite me to your server.')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }

exports.help = {
    name: 'help'
    }