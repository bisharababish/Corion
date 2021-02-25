const Discord = require ('discord.js')
const {message,channel} = require('discord.js')

    const talkedRecently = new Set();
    
    exports.run = async (bot,message,args) => {
        if (talkedRecently.has(message.author.id)) {
            
            message.channel.send("Wait 5 Seconds before using this again. ");
    } else {
    
        const ping = new Discord.MessageEmbed()
        .addField(`**${message.guild.name}**`, `Invite me from [here](https://discord.com/api/oauth2/authorize?client_id=811263133121380402&permissions=8&scope=bot)`)
        .setFooter('Created By wearelivingart#1242')
     
         message.channel.send(ping)
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);
    
    
    }
    
  

}
exports.help = {
    name: 'invite'
    }