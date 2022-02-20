const xingamento = ["Para de me marcar fdp", "Marca a mãe"];

module.exports = {
    name: "<@!944741225095921675>",
    aliases: ["dona creusa", "dona creuza", "creusa", "creuza"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}