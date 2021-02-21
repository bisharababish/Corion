const randomPuppy = require('random-puppy');
const Discord = require('discord.js')
    const talkedRecently = new Set();
    exports.run = async (bot,message,args) => {
       
            
                if (talkedRecently.has(message.author.id)) {
                    
                    message.channel.send("Wait 1 Second before using this again. ");
            } else {
            
               
                const subReddits = ["dankmemes", "meme"]
                const random = subReddits[Math.floor(Math.random() * subReddits.length)]
            
                const img = await randomPuppy(random);
            
                const memeEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setImage(img)
                .setTitle(`Your meme is from r/${random}`)
                .setURL(`https://reddit.com/r/${random}`)
            
                message.channel.send(memeEmbed);
    
                     // Adds the user to the set so that they can't talk for a minute
                talkedRecently.add(message.author.id);
                setTimeout(() => {
                  // Removes the user from the set after a minute
                  talkedRecently.delete(message.author.id);
                }, 1000);
            
    
            }
            
    
    }
    
        
exports.help = {
name: 'meme'
}