module.exports = {
    name: "thony",
    aliases: ["<@!844999176319926294>"],
    exe(message, args){
        const xingamento = [`<@!${message.author.id}> menor, não fala esse nome na minha frente mais não`, "Turbina", "Cachoeira"];
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}