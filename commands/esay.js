const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

exports.help = {
name: "embedsay",
usage: "embedsay <text to say>",
description: "Returns provided text in Embed form.",
example: "mi.embedsay hello world"
}
exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`❌ | `+"You Require Manage Messages Permission to use this Command")
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
  let embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
  .setDescription(`${say}`)
  .setColor("#d0192c")
.setFooter(`by ${message.author.tag}`)
.setTimestamp()
  message.channel.send(embed)
}


exports.help = {
  aliases: ["es"],
  cooldown: 4
}