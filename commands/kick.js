const { MessageEmbed } = require("discord.js");
const prefix = "pc!";
exports.run = async (client, message, args) => {
  if (message.content.startsWith(`${prefix}kick`)) {
  }
  let member = message.mentions.members.first();
  if (!member) return message.reply("Mention user to kick!");
  
  let reason = args.slice(1).join(" ");
  if (!reason) return message.reply("``Mohon berikan penjelasan..!!``")
  member
    .kick()
    .then(member => {
      let embed = new MessageEmbed()
        .setColor("#d0192c")
        .setFooter(`Request ${message.author.username}`, client.user.displayAvatarURL())
        .setTimestamp()
        .addField("Kick User", `\`\`\`${member.displayName}\`\`\``)
        .addField("Reason", `\`\`\`${reason}\`\`\``)
        .addField("Kick By", `\`\`\`${message.author.username}\`\`\``);
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
        message.reply(
          "You don't have permission to kick or this user have permission KICK_MEMBERS, BAN_MEMBERS, ADMINISTRATOR"
        );
      } else if (
        member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR"])
      ) {
        message.reply(
          "You don't have permission to kick or this user have permission KICK_MEMBERS, BAN_MEMBERS, ADMINISTRATOR"
        );
      }
    });
};
