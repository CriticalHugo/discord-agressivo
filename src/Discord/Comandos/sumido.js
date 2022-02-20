const xingamento = [
    "Sim, estou sumida evitando gente falsa igual você."
];

module.exports = {
    name: "sumido",
    aliases: ["sumida"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}