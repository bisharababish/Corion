const {Message} = require('discord.js')
const talkedRecently = new Set();

exports.run = async (bot,message,args) => {

if (talkedRecently.has(message.author.id)) {
        
    message.channel.send("Wait 5 Seconds before using this again. ");
} else {

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply("I'm Missing **MANAGE_CHANNELS** permissions")
message.channel.clone().then((ch) => {
ch.setParent(message.channel.parent.id);
ch.setPosition(message.channel.position);
message.channel.delete();
    ch.send('this channel has been nuked!')
talkedRecently.add(message.author.id);
setTimeout(() => {
  // Removes the user from the set after a minute
  talkedRecently.delete(message.author.id);
}, 5000);
})}
}
    exports.help = {
        name: 'nuke'
        }