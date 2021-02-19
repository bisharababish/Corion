const {Message} = require('discord.js')
exports.run = async (bot,message,args) => {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply("I'm Missing **MANAGE_CHANNELS** permissions")
message.channel.clone().then((ch) => {
ch.setParent(message.channel.parent.id);
ch.setPosition(message.channel.position);
message.channel.delete();
    ch.send('this channel has been nuked!')
})
}
    exports.help = {
        name: 'nuke'
        }