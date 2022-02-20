const xingamento = [
    "Passando pra te lembrar que o seu brilho é oleosidade"
];

module.exports = {
    name: "invejoso",
    aliases: ["invejosa", "recalcado", "recalcada"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}