const Discord = require('discord.js')
exports.run = async (bot,message,args) => {
    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({size: 1024})


    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.username}'s avatar`)
    .setImage(avatar)
    .setColor("RANDOM")

    message.channel.send(embed);
}

exports.help = {
    name: 'avatar'
    }