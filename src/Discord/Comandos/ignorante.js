const xingamento = [
    "Sabe o que cairia bem em você? Um raio!",
    "Ignorante é você!"
];

module.exports = {
    name: "ignorante",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}