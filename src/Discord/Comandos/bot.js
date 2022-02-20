const xingamento = [
    "Para de me marcar fdp",
    "Marca a mãe, pentelho!",
    "Estou pedindo demissão porque quero ir atrás do meu sonho de trabalho que é não trabalhar aqui.",
    `Vou anotar a sua opinião aqui, no meu caderninho de "não me importo".`,
    "Você não tem habilitação para me dirigir a palavra",
    "Venho por meio desse informar que eu não dou a mínima. Grata, a assessoria.",
    "Meu nível de ironia depende do grau de absurdo que eu ouço."
];

module.exports = {
    name: "<@!944741225095921675>",
    aliases: ["dona creusa", "dona creuza", "creusa", "creuza"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}