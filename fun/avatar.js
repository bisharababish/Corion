const Discord = require ('discord.js')
const {message,channel} = require('discord.js')

    const talkedRecently = new Set();
    
    exports.run = async (bot,message,args) => {
        if (talkedRecently.has(message.author.id)) {
            
            message.channel.send("Wait 5 Seconds before using this again. ");
    } else {
    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({size: 256})


    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.username}'s avatar`)
    .setImage(avatar)
    .setColor("RANDOM")
    .setFooter('Created By wearelivingart#1242')
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 5000);
    message.channel.send(embed);

    }
}

exports.help = {
    name: 'av'
    }