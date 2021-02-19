const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

exports.run = async (bot,message,args) => {

    const subReddits = ["dankmemes", "meme", "memes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random);

    const memeEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`Your meme is from r/${random}`)
    .setURL(`https://reddit.com/r/${random}`)

    message.channel.send(memeEmbed);

}
exports.help = {
name: 'meme'
}