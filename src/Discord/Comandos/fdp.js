const xingamento = [
    "Filha da puta é você",
    "Arrombado",
    "Filha de rapariga!",
    "Lazarento!"
];

module.exports = {
    name: "da puta",
    aliases: ["fdp"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random() * xingamento.length)]}`);
    }
}