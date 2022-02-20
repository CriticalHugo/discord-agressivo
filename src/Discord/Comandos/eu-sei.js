const xingamento = ["A menos que seu nome seja Google, pare de agir como se você soubesse tudo."];

module.exports = {
    name: "eu sei",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}