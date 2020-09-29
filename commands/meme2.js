const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "MEME2",
    alias: ["M"],
    run: async (client, message, args) => {
        let random = Math.floor(Math.random() * 100 + 1);
        const embed = new MessageEmbed()
   
        .setAuthor("MEME2",client.user.displayAvatarURL({format: "png"}))
        .setImage(`http://ctk-api.herokuapp.com/meme/${random}`)
        .setFooter(message.guild.name)
        .setColor("#d0192c");
        embed.setTimestamp();

       message.channel.send(embed);
    }//:V 
} //O