// Nzc3NjE0ODU0MDk2ODE0MDkx.X7GARA.fsxcwb0gok9LqkTxAvvcAKJOw98
// asfhiabwegweg
const Discord = require('discord.js') 
const bot = new Discord.Client();
const fs = require("fs")
const client = require('discord.js')
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log('Bot online')

    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'with depression',
            type: 'PLAYING',
        }
    })




    fs.readdir('./moderation', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js');


        if (jsfile.length <= 0) return console.log("Could not find commands!")

        jsfile.forEach(f => {
            let props = require(`./moderation/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })

    fs.readdir('./fun', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js');


        if (jsfile.length <= 0) return console.log("Could not find commands!")

        jsfile.forEach(f => {
            let props = require(`./fun/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })

    fs.readdir('./Utility', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js');


        if (jsfile.length <= 0) return console.log("Could not find commands!")

        jsfile.forEach(f => {
            let props = require(`./Utility/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '?';
    // hello there ['hello', 'there']
    // !ban user reason ['user', 'reason']
    // Breaking Rules ['breaking', 'rules'] breaking rules
    // hello
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}

})

bot.login("ODExMjYzMTMzMTIxMzgwNDAy.YCvpqw.X3cZHbjlvXRm6Cv9uON-ChMQulQ")