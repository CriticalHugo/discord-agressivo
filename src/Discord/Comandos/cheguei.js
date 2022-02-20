const xingamento = ["Pode dar meia volta... ninguém te quer aqui", "Desculpa se eu me atrasei. É que eu não queria vir."];

module.exports = {
    name: "cheguei",
    exe(message, args) {
       message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}