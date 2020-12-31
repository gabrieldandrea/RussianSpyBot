module.exports = {
  name: "keypadsymbols",
  description: "Displays all keypad symbols and their respective codenames",
  execute(message, args) {
    const Discord = require('discord.js');

    const symbols = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Symbol Codenames")
    .setImage("https://i.ibb.co/1s1hZNv/symbols.png");
    
    return message.channel.send(symbols);
  },
};
