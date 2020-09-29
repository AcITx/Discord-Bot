const Discord = require("discord.js");
const client = new Discord.Client();
//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("Pinging");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("ready", async () => {
  console.log(`${client.user.tag} sudah aktif!`);
  let status = [
    `${client.users.cache.size} Pengguna!`,
    `${client.guilds.cache.size} Server!`,
    `pc!help`
  ];

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random], {
      type: "STREAMING"
    });
  }, 5000);
});
//snipe
client.snipes = new Map();
client.on("messageDelete", function(message, channel) {
  client.snipes.set(message.channel.tag, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});
//message konteks
client.on("message", message => {
  if (message.content === "indonesia") message.reply(":flag_id:");

  if (message.content === "anjay")
    message.channel.send(":police_officer: ***FBI Open the door***");

  if (message.content === "Anjay")
    message.channel.send(":police_officer: ***FBI Open the door***");

  if (message.content === "Anjayyy")
    message.channel.send(":police_officer: ***FBI Open the door***");

  if (message.content === "anjayyy")
    message.channel.send(":police_officer: ***FBI Open the door***");

  if (message.content === "sepi")
    message.channel.send(
      "**Iya kaya hatimu** ***dasar jomblo!!*** :stuck_out_tongue_closed_eyes:"
    );

  if (message.content === "Sepi")
    message.channel.send(
      "**Iya kaya hatimu** ***dasar jomblo!!*** :stuck_out_tongue_closed_eyes:"
    );

  if (message.content === "sepi oi")
    message.channel.send(
      "**Iya kaya hatimu** ***dasar jomblo!!*** :stuck_out_tongue_closed_eyes:"
    );

  if (message.content === "Sepi oi")
    message.channel.send(
      "**Iya kaya hatimu** ***dasar jomblo!!*** :stuck_out_tongue_closed_eyes:"
    );

  if (message.content === "ok bot siapa jodoh ku")
    message.channel.send(
      ":robot:**Jangan tanya aku, Aku bukan google...** ||``Dasar jomblo``|| :stuck_out_tongue_closed_eyes:"
    );

  if (message.content === "ok bot siapa jodohku")
    message.channel.send(
      ":robot:**Jangan tanya aku, Aku bukan google...** ||``Dasar jomblo``|| :stuck_out_tongue_closed_eyes:"
    );

  if (message.content === "anjimc")
    message.channel.send(" <:anjim:748465432658444359> ");

  if (message.content === "welcome")
    message.channel.send(
      "> Selamat datang semoga anda betah dan nyaman :pray:"
    );

  if (message.content === "test1")
    message.channel.send("<b:trolljoget:757784601824460822>");

  if (message.content === "oke")
    message.channel.send("<:ten4:751381581503135775>");

  if (message.content === "server link") message.channel.send("DUARR UHUYYY");

  if (message.content === "scroll up")
    message.channel.send("<757199039501697044>");
  
  if (message.content === "command")
    message.channel.send("<a:27:758257361143070760>");

  if (message.content === "new post")
    message.channel.send("<a:26:758261230921056306>");

  //COMMAND BOT DI SERVER.JS
  const prefix = "pc!";
  if (!message.content.startsWith(prefix)) return null;
  let msg = message.content.toLowerCase();
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  let command = cmd;

  let commandFiles;
  try {
    commandFiles = require(`./commands/${cmd}.js`);
  } catch (err) {}
  const db = require("quick.db");
  const now = Date.now();
  if (db.has(`cd_${message.author.id}`)) {
    const expirationTime = db.get(`cd_${message.author.id}`) + 3000;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(
          1
        )} more second(s) before reusing the \`${cmd}\` command.`
      );
    }
  }
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`);
  }, 3000);
  try {
    commandFiles.run(client, message, args);
  } catch (err) {
  } finally {
    console.log(`${message.author.tag} menggunakan command ${prefix}${cmd}`);
  }
});
client.login(process.env.TERSERAH);
