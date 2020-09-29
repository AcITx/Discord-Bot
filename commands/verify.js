exports.run = async (client, message, args) => {
  if (message.channel.id !== "VERIFICATION_CHANNEL_ID") {
   // Jika saluran itu bukan saluran verifikasi, abaikan saja.
    return;
  }
  
  await message.delete();
  await message.member.roles.add("ROLE_ID"); // Member role.
  
  // Gunakan ini jika Anda ingin menghapus peran dari pengguna.
  await message.member.roles.remove("ROLE_ID");
  return;
}

exports.help = {
  name: "verify",
  description: "Verify yourself to make sure you are not a robot."
}

exports.conf = {
  aliases: [],
  cooldown: 20
}
