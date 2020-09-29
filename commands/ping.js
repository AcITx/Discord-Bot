const { MessageEmbed } = require("discord.js");
exports.run = async (client, message) => {
  let m = await message.channel.send(
    "*Sedang mengumpulkan info...*<a:giphy27:758300513791246336>"
  );
  let now = Date.now();
  let embed = new MessageEmbed()
    .setColor("#d0192c")
    .addField(
      ":stopwatch: • *Roundtrip took*",
      `**${m.createdTimestamp - message.createdTimestamp} ms**`
    )
    .addField(":heartbeat: • *API*", `**${Math.round(client.ws.ping)} ms**`)
    .addField(
      ":hourglass: • *Latency*",
      `**${Math.round(Date.now() - now)} ms**`
    )
    .setFooter(message.guild.name, client.user.displayAvatarURL());
  return setTimeout(function() {
    m.edit("*Info berhasil dikumpulkan!!*<a:giphy39:758300022965534721>", embed);
  }, 3000);
};
