module.exports = {
    name: "thony",
    exe(message, args){
        message.channel.send(`<@!${message.author.id}> menor, não fala esse nome na minha frente mais não`);
    }
}