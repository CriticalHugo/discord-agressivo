module.exports = {
    name: "thony",
    exe(message, args){
        const xingamento = [
            `Menor, não fala esse nome na minha frente mais não`,
            "Turbina",
            "Cachoeira"
        ];
        message.channel.send(`${xingamento[Math.floor(Math.random()*xingamento.length)]}`);
    }
}