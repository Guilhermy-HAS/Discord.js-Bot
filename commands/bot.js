const Discord = require('discord.js');

 exports.run = async (client, message, argumentos, arg_texto, chat) => {

  const name = client.user
const avatar = client.user.avatarURL();
  const sta = client.presence.status;
let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let temp = `${days.toFixed()} days, ${hours.toFixed()} hours, ${minutes.toFixed()} minutes, ${seconds.toFixed()} seconds`;
    
  const bot = new Discord.MessageEmbed()
  .setTitle(`Informations of ${nome.tag}`)
  .setDescription("**Insert your bot description here**")
  
  .setColor("RED")
  .setThumbnail(avatar)
  
  .addField('<:emojiname:emojiid> Informations', `**Tag:** \`${nome.tag}\`\n🔰 **Version:** \`1.1.0\`\n<:emojiname:emojiid> **Programmed on:** \`node.js\`\n<:emojiname:emojiid> **Principal package:** \`Discord.js\``)
  
  .addField('<emojiname:emojiid> Status', `<emojiname:emojiid> **Ping:** \`${client.ws.ping}\`\n<:emojiname:emojiid> **Status:** \`${sta}\`\n<:emojiname:emojiid> **Uptime:** \`${temp}\``)
  message.channel.send(bot)
  
 }
