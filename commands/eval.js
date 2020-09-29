const { MessageEmbed } = require("discord.js");
const { inspect } = require("util");
const prefix = "pc!";
exports.run = async (client, message, args) => {
  if (message.content.startsWith(`${prefix}eval`)) {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.slice(1).join(" ");

    if (message.author.id !== "739317981821141062")
      return message.channel.send("```Hanya dapat digunakan oleh developer!```");
    if (!command)
      return message.channel.send(
        "``Butuh penjelasan untuk melakukan eval !!!``"
      );

    try {
      const evaled = eval(command);

      var embed = new MessageEmbed()
        .setColor("#d0192c")
        .setFooter(message.guild.name)
        .setTimestamp()
        .setTitle("Evaluated")
        .addField(`To eval`, `\`\`\`${command}\`\`\``)
        .addField(
          `Evaled`,
          `\`\`\`js\n${inspect(evaled, { depth: 0 })}\`\`\``
        )
        .addField(`Type of`, `\`\`\`${typeof evaled}\`\`\``);
      message.channel.send(embed);
    } catch (error) {
      var embed = new MessageEmbed()
        .setColor("#d0192c")
        .setFooter(message.guild.name)
        .setTitle("Gagal")
        .addField(`Gagal`, `${error}`)
        .setTimestamp();
      message.channel.send(embed);
    }
  }
};
