const xingamento = [
    "Vou apagar esse teu fogo no rabo",
    "É a menopausa"
];

module.exports = {
    name: "que calor",
    aliases: ["q calor"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}