const xingamento = [
    "Para de me marcar fdp", "Marca a mãe, pentelho!",
    "Estou pedindo demissão porque quero ir atrás do meu sonho de trabalho que é não trabalhar aqui.",
    `Vou anotar a sua opinião aqui, no meu caderninho de "não me importo".`
];

module.exports = {
    name: "<@!944741225095921675>",
    aliases: ["dona creusa", "dona creuza", "creusa", "creuza"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}