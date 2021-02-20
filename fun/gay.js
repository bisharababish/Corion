const Discord = require('discord.js')
exports.run = async (bot,message,args) => {
   let member = message.mentions.user.first() || message.author
   let rng = Math.floor(math.random() * 101);
   const howgay =  new Discord.MessageEmbed()
   .setTitle('Gay Machine Calculator')
   .setDescription(`${member.username} is + rng + "% Gay🏳️‍🌈 `)
   .setColor("RANDOM")
   message.channel.send(howgay)

}

        exports.help = {
            name: 'gay'
        }