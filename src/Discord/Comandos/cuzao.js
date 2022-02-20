const xingamento = [
    "Se eu ofendi não peço desculpas, essa era mesmo a minha intenção.",
    "Teu cu no avesso!"
];

module.exports = {
    name: "cuzão",
    aliases: ["cuzao"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}