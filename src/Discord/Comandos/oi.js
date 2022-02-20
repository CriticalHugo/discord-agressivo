const xingamento = ["Ih, to saindo...", "Oi"];

module.exports = {
    name: "oi",
    aliases: ["oie", "oii"],
    exe(message, args) {
       message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}