const xingamento = [
    "Não te interessa"
];

module.exports = {
    name: "que foi?",
    aliases: ["q foi?"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}