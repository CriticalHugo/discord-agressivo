const xingamento = [
    "Só não esquece a cabeça porque tá grudada no pescoço"
];

module.exports = {
    name: "esqueci",
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}