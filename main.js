const Discord = require('discord.js');
const client = new Discord.Client()

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

    if (command === "oldserver") {
        client.commands.get("oldserver").execute(message, args);
    } else if (command === "aboutfun") {
        client.commands.get("aboutfun").execute(message, args);
    } else if (command === "wires") {
        client.commands.get("wires").execute(message, args);
    } else if (command === "test") {
        client.commands.get("test").execute(message,args);
    } else if (command === "button") {
        client.commands.get("button").execute(message,args);
    } else if (command === "keypad") {
        client.commands.get("keypad").execute(message,args);
    } else if (command === "simonsays") {
        client.commands.get("simonsays").execute(message,args);
    } else {
        message.channel.send("Invalid Command");
    }
});

client.login("NzkzMjcxNDUwNTU0NTk3NDE2.X-p1nA.1-oWfW_oAxCgn-ZJb74DaPuyCX0");