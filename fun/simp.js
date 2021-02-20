const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (bot,message,args) => {

    let member = message.mentions.users.first() || message.author
    let rng = Math.floor(Math.random() * 101);
   const howgay =  new Discord.MessageEmbed()
   .setTitle('Simp Machine')
   .setDescription(`${member.username} is **%${rng}** simp!`)
   .setColor("RANDOM")
   message.channel.send(howgay)

}

        exports.help = {
            name: 'simp'
        }