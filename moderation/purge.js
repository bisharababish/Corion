    const Discord = require ('discord.js')
const {message,channel} = require('discord.js')

    const talkedRecently = new Set();
    
    exports.run = async (bot,message,args) => {
        if (talkedRecently.has(message.author.id)) {
            
            message.channel.send("Wait 5 Seconds before using this again. ");
    } else {
    
        const amount = args.join(" ");

        if(!amount) return message.reply('please provide an amount of messages for me to delete')
    
        if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)
    
        if(amount < 1) return message.reply(`you need to delete at least one message`)
    
        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});
    
    
    message.channel.send('Success!')
    .then(m => m,(5000))
       
             // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);
    
    
    }
    
  

}



exports.help = {
    name: 'purge'
}