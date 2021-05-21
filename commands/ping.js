const Discord = require('discord.js');

 exports.run = async (client, message, args) => {

   let espr = await message.channel.send("🚀 Calculamdo ping")
   

     espr.edit(`API: ${Math.floor(client.ws.ping)}`)

}
