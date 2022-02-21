const xingamento = [
    "Me escapo"
];

module.exports = {
    name: "eu hein",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}