const xingamento = [
    "Eu uso o deboche porque a violência ainda é crime.",
    "Aprende a xingar, caralho!"
];

module.exports = {
    name: "idiota",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}