const { Client, Intents } = require('discord.js');
const TOKEN='';

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);
const client = new Client({ intents: myIntents });

const Handler = require('./src/Handler.js');
const handler = new Handler;

client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", async message => {
    if (message.channel.type == 'dm' || message.author.bot) return;
    
    const args = message.content.replace(/\s+/g, " ").trim().split(/ +/);

    for (let x = 0; x != args.length; x++){
        let y = x;
        let command = handler.findCommand(args[x].toLowerCase());
        try {
            command.exe(message, args);
            return;
        }catch(err) {
            let z = y + 1;
            if (args.length != z && args.length > z){
                command = handler.findCommand(`${args[y].toLowerCase()} ${args[z].toLowerCase()}`);
                try {
                    command.exe(message, args);
                    return;
                }catch(err) {
                }

            }
        }

    }

});

client.login(TOKEN);