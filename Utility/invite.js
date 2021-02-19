const Discord = require ('discord.js')
const {message,channel} = require('discord.js')
exports.run = async (bot,message,args) => {

    const ping = new Discord.MessageEmbed()
   .addField("Out Cast", "Invite me from [here](https://discord.com/api/oauth2/authorize?client_id=811263133121380402&permissions=8&scope=bot)")

    message.channel.send(ping)

}
exports.help = {
    name: 'invite'
    }