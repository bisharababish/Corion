const Discord = require('discord.js')
exports.run = async (bot,message,args) => {

    const ping = new Discord.MessageEmbed()
    .setDescription(`🏓\`${bot.ws.ping}\`ms`);


    message.channel.send(ping);
}


exports.help = {
    name: 'ping'
}