exports.run = async (bot,message,args) => {

    const member = message.mentions.members.first();
    if(!member) return message.reply("Please specify a member!");
    const arguments = args.slice(1).join(" ");
    if(!args) return message.reply("Please specify a nickname!");

    try {
        member.setNickname(arguments);
        message.reply(" i've changed his nickname.")

    }
    catch (err)
    {
console.log(err);
message.reply("I do not have permission to set " + member.toString() + " nickname");

    }
    

}

exports.help = {
name: 'nick'
}