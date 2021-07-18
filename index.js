const Discord = require("discord.js");
const colors = require("./colors.json");
const config = require("./botconfig.json");
const superagent = require("superagent")

const bot = new Discord.Client({disableEveryone: true});

//This shows the presence of the bot. For example, it should say "Playing "Game""
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`)
  bot.user.setActivity(`happy birthday bot!`);
})

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    return console.log("[LOGS] Couldn't find Commands!");
  }

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    bot.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
      bot.aliases.set(alias, pull.config.name)
    });
  })
});

bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(!message.content.startsWith(prefix)) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
  if(commandfile) commandfile.run(bot,message,args)

})

bot.login(config.token);
