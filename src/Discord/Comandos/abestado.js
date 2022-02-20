const xingamento = [
    "Me diga com quem tu andas e eu te direi se vou ou não.",
    "Mula!"
]

module.exports = {
    name: "abestado",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random() * xingamento.length)]}`);
    }
}