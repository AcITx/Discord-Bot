const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  // 4096 adalah ukuran avatar terbesar yang baru.
   // Mengaktifkan dinamika, ketika avatar pengguna dianimasikan / GIF, itu akan menghasilkan format GIF atau gambar beregerak.
   // Jika tidak dianimasikan, ini akan menghasilkan format gambar normal.
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Menampilkan avatar`)
  .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
  .setColor("#d0192c")
  .setFooter(`Request ${message.author.tag}`, client.user.displayAvatarURL())
  .setImage(avatar)
  
  return message.channel.send(embed);
}

exports.help = {
  name: "avatar",
  description: "Display a user avatar",
  usage: "avatar [@user | user ID]",
  example: "avatar @ray#1337 \navatar"
}

exports.conf = {
  aliases: ["icon", "pfp", "ava"],
  cooldown: 5
}
