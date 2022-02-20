//Pesquisa no google, forgado/otário
const xingamento = ["forgado", "otário"];
module.exports = {
    name: "como faz",
    exe(message, args) {
       message.channel.send(`Pesquisa no google, ${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}
