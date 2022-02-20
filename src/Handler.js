const { Collection } = require('discord.js');
const fs = require("fs");

class Handler {
    constructor() {
        this.commands = new Collection();
        
        let cmds = fs.readdirSync("./src/Discord/Comandos").filter(cmd => cmd.endsWith("js"));
        for (let command of cmds) {
            const cmdobj = require(`./Discord/Comandos/${command}`);
            this.commands.set(cmdobj.name, cmdobj);
        }

    }

    findCommand(name) {
        return this.commands.get(name) || this.commands.find(cmd => cmd.aliases && cmd.aliases.some(p => p == name));
    }

}

module.exports = Handler;