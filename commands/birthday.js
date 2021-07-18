const Discord = require("discord.js");
const config = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {

    message.channel.send("happy birthday ('USER_ID')!! :partying_face: :cake:")
}


module.exports.config = {
    name: "('COMMAND_NAME)",
    aliases: ["('COMMAND_ALIAS"]

}
