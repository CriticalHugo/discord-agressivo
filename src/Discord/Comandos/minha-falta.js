const xingamento = [
    "Nada ilumina mais um cômodo do que a sua ausência"
];

module.exports = {
    name: "minha falta",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}