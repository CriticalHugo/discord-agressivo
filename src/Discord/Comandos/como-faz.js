//Pesquisa no google, forgado/otário
const xingamento = ["Pesquisa no google, forgado", "Pesquisa no google, otário", "Vai perguntar pro Google, lazarento!"];
module.exports = {
    name: "como faz",
    exe(message, args) {
       message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}
