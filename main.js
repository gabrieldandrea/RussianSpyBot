const Discord = require('discord.js');
const client = new Discord.Client();

var token = config.TOKEN;

const prefix = "!";
const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log("Russian Spy is online!");

    client.user.setActivity("Defusing Bombs", {type: "COMPETING"}).catch(console.error);
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case "oldserver":
            client.commands.get("oldserver").execute(message, args);
            break;
        case "aboutfun":
            client.commands.get("aboutfun").execute(message, args);
            break;
        case "wires":
            client.commands.get("wires").execute(message, args);
            break;
        case "test":
            client.commands.get("test").execute(message, args);
            break;   
        case "button":
            client.commands.get("button").execute(message, args);
            break;  
        case "keypad":
            client.commands.get("keypad").execute(message, args);
            break;    
        case "simonsays":
            client.commands.get("simonsays").execute(message, args);
            break;    
        case "help":
            client.commands.get("help").execute(message, args);
            break;   
        case "keypadsymbols":
            client.commands.get("keypadsymbols").execute(message, args);
            break;   
        case "whosonfirst":
            client.commands.get("whosonfirst").execute(message, args);
            break;
        case "memory":
            client.commands.get("memory").execute(message, args);
            break;
        default:
            message.channel.send("Invalid Command");
            break;
    }
});

client.login(token);