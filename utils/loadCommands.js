const fs = require('fs');

function loadCommands(bot) {
    fs.readdir('commands/', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js');


        if (jsfile.length <= 0) return console.log("Could not find commands!")

        jsfile.forEach(f => {
            let props = require(`../commands/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })}

module.exports = {
    loadCommands
}