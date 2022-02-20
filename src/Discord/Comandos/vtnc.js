const xingamento = [
    "Tentando achar aqui onde está escrito que eu sou obrigado.",
    "Vai tu, arrombado! "
];

module.exports = {
    name: "vtnc",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}