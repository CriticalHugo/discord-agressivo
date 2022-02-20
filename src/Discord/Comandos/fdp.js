const xingamento = ["Filha da puta é você", "Arrombado"];

module.exports = {
    name: "da puta",
    aliases: ["fdp"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random() * xingamento.length)]}`);
    }
}