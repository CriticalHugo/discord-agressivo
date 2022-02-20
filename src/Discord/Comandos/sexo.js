const xingamento = [
    "No meu tempo não tinha essa safadeza..",
    "Eita bixo sexokkkkkkkkk"
];

module.exports = {
    name: "sexo",
    aliases: ["suruba", "gf", "websexo", "brasileirinhas", "pornô"],
    exe(message, args) {
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}