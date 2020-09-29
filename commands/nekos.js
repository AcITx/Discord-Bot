const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
  let m = await message.channel.send(
    "*Sedang mencari...*<a:giphy27:758300513791246336>"
  );
  try {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/neko");

    const embed = new Discord.MessageEmbed()
      .setColor("#d4d3cc")
      .setFooter(`Req ${message.author.tag}`)
      .setDescription(`**UwU, Inilah Neko-mu!**`)
      .setTimestamp()
      .setImage(body.url);
    return setTimeout(function() {
      m.edit("*Berhasil didapatkan!!.*<a:giphy39:758300022965534721>", embed);
    }, 3000);
  } catch (e) {
    message.channel.send("Sedang Maintenace Oni-Chann!!");
  }
};
