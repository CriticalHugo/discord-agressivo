const xingamento = [
    "Meu pau no seu ouvido"
];

module.exports = {
    name: "duvido",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}