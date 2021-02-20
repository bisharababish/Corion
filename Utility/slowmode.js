
exports.run = async (bot,message,args) => {

    if (!args[0])
    return message.channel.send(
      `Specify a number for the slowmode!`
    );
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
    );
    if (!reason) {
    reason == "No reason provided!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
    `Set the slowmode of this channel to **${args[0]}**!`
    );
}
exports.help = {
    name: 'slowmode'
    }