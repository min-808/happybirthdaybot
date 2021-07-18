const Discord = require("discord.js");
const config = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {
    
    let uEmbed = new Discord.RichEmbed()
    .setColor(colors.blue_dark)
    .setTitle("**commands**")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("b!help", "idk what you expected.")
    .addField("b!('COMMAND_NAME')", "happy birthday ('COMMAND_NAME')")
    .setFooter(`Happy Birthday Bot`, bot.user.displayAvatarURL);
    message.channel.send({embed: uEmbed});
}

module.exports.config = {
    name: "help",
    aliases: ["help", "guide"]

}
