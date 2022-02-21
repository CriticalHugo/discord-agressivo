const xingamento = [
    "Que delícia"
];

module.exports = {
    name: "credo",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}