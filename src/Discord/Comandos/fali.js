const xingamento = [
    "Eu avisei"
];

module.exports = {
    name: "fali",
    aliases: ["me ferrei", "me lasquei"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}