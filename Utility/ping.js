const Discord = require('discord.js')
const talkedRecently = new Set();

exports.run = async (bot,message,args) => {
    if (talkedRecently.has(message.author.id)) {
        
        message.channel.send("Wait 5 Seconds before using this again. ");
} else {

    const ping = new Discord.MessageEmbed()
    .setDescription(`🏓\`${bot.ws.ping}\`ms`);
    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 5000);


    message.channel.send(ping);
}

}
exports.help = {
    name: 'ping'
}
