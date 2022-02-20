const xingamento = [
    "Vaza, noia"
];

module.exports = {
    name: "que brisa",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}