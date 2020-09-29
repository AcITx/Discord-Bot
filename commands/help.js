const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
    .setTitle(`${client.user.username}`)
    .setDescription(`<a:27:758257361143070760>***Daftar Command***`)
    .addField("Prefix: `pc!`", "*contoh:* `pc!serverinfo`, `pc!invite` untuk invite bot")
    .setColor("#d0192c")
    .setThumbnail(
      client.user.displayAvatarURL({ format: "png", dynamic: true }) +
        "?size=2048")
    .addField("**Admin**", "| `ban` | `eval` | `kick` |" )
    .addField("**Core**", "| `avatar` | `botinfo` | `help` | `infouser` | `ping` | `serverinfo` | `uptime` |")
    .addField("**Fun**", "| `anime` | `kucing` | `meme` | `meme2` | `nekos` | `penis` |")
    .addField("***Other***", "| `cuaca` | `esay` | `gempa` | `kalkulator` | `say` |")
    .setFooter(message.guild.name, client.user.displayAvatarURL())
    .setTimestamp();
  message.channel.send(embed);
};
