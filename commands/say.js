const Discord = require('discord.js')

 exports.run = async (client, message, args) => {
 
    let say = args.join(" ");
   if(!say) return message.reply("Insert a message");
      else if (say) {
     message.channel.send(say);
    message.delete();
   }
 
}
