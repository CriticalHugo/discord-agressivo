const xingamento = [
    "Arrebentou as prega, foi?"
];

module.exports = {
    name: "caguei",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}