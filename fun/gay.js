
const Discord = require ('discord.js')
const {message,channel} = require('discord.js')

    const talkedRecently = new Set();
    
    exports.run = async (bot,message,args) => {
        if (talkedRecently.has(message.author.id)) {
            
            message.channel.send("Wait 5 Seconds before using this again. ");
    } else {
    
        let member = message.mentions.users.first() || message.author
        let rng = Math.floor(Math.random() * 101);
       const howgay =  new Discord.MessageEmbed()
       .setTitle('Gay Machine')
       .setDescription(`${member.username} is **%${rng}**  Gay 🏳️‍🌈 `)
       .setColor("RANDOM")
       .setFooter('Created By wearelivingart#1242')
    
       message.channel.send(howgay)
             // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);
    
    
    }
    
    }
        exports.help = {
            name: 'gay'
        }