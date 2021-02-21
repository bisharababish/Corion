const Discord = require('discord.js')
exports.run = async (bot,message,args) => {
    let member  = message.mentions.members.first() ||message.author

const embed = new Discord.MessageEmbed()
.setAuthor(`${member.username} information:`)
.addField('Joined' , `${message.member.joinedAt}`)
.addField('Registered' , `${member.createdAt}`)
.addField('is bot?' , `${member.bot}`)
.addField("Status", member.presence.status)
.addField('ID' , `${member.id}`)
.setTimestamp()
.setColor("RANDOM")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setFooter('Created By wearelivingart#1242')
message.channel.send(embed)

    
}
  exports.help = {
      name: 'whois'
      }