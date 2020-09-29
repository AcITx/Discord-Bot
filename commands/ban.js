const { MessageEmbed } = require("discord.js");
const prefix = "pc!";

exports.run = async (client, message, args) => {
  if (message.content.startsWith(`${prefix}ban`)) {
  }
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("``Mention user to ban!``");
  
  let reason = args.slice(1).join(" ");
  if (!member) return message.channel.send("``Mohon berikan penjelasan..!!``")
  member
    .ban()
    .then(member => {
      let embed = new MessageEmbed()
        .setColor("#d0192c")
        .addField("Banned User", `\`\`\`${member.displayName}\`\`\``)
        .addField("Reason", `\`\`\`${reason}\`\`\``)
        .addField("Banned By", `\`\`\`${message.author.username}\`\`\``)
        .setFooter(`Request ${message.author.username}`, client.user.displayAvatarURL())
        .setTimestamp();
      message.channel.send(embed);
    })
    .catch(() => {
      if (
        !message.member.hasPermission([
          "KICK_MEMBERS",
          "BAN_MEMBERS",
          "ADMINISTRATOR"
        ])
      ) {
        message.reply("You don't have permission ban,kick");
      } else if (
        member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR"])
      ) {
        message.reply(
          "You don't have permission or this member have permission ban,kick"
        );
      }
    });
};
