const { Client, Intents } = require('discord.js');
const TOKEN='OTQ0NzQxMjI1MDk1OTIxNjc1.YhGA1A.yyfYCs7Yx9ZbP7X0UJ5dnF-yKbI';
const OWNER='428779441410277377';

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
            if (y >= args.length){
                command = handler.findCommand(`${args[y].toLowerCase()} ${args[y+1].toLowerCase()}`);
                
                try {
                    command.exe(message, args);
                    return;
                }catch {

                }

            }
        }

    }

});

client.login(TOKEN);