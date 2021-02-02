module.exports = {
  name: "help",
  description: "Displays all commands and how to use them",
  execute(message, args) {
    const Discord = require("discord.js");

    const helpEmbed = new Discord.MessageEmbed()
      .setTitle("These are the supported commands")
      .setColor("#0099ff")
      .addFields({
        name: "**!help**",
        value: "Displays all commands and explains how to use them"
      })
      .addFields({
        name: "**!wires**",
        value: "Explains how to defuse the wires, input the number of wires and then respond yes and no"
      })
      .addFields({
        name: "**!button**",
        value: "Explains how to defuse the button, respond yes and no and enter the strip colour"
      })
      .addFields({
        name: "**!keypad**",
        value: "Explains how to defuse the keypad, input the keypad symbols seperated by a space"
      })
      .addFields({
        name: "**!keypadsymbols**",
        value: "Shows a list of each symbol and their respective codename"
      })
      .addFields({
        name: "**!simonsays**",
        value: "Explains how to defuse simon says, input if the serial number contains a vowel and the number of strikes"
      })
      .addFields({
        name: "**!whosonfirst**",
        value: "Explains how to defuse who's on first, input the display word and then the label on the button"
      })
      .addFields({
        name: "**!memory**",
        value: "Explains how to defuse memory, input the display number and then the button labels from left to right seperated by a space"
      })
      .addFields({
        name: "**!morsecode**",
        value: "Explains how to defuse morse code, input the ordered letters in dots and dashes separated by a space"
      })
      .addFields({
        name: "**!complicatedwires**",
        value: "Explains how to defuse complicated wires, input the colour(s) of the wire, input the word 'led' if the LED is lit, and input the word 'star' if there is a star symbol"
      })
      .addFields({
        name: "**!wiresequences**",
        value: "Explains how to defuse wire sequences. Input the colour of the wire followed by the letter it is connected to, seperated by a space. Input 'end' once completed"
      });

    return message.channel.send(helpEmbed);

    //   return message.channel.send(`
    //         These are the supported commands: 

    // **!help** - Displays all commands and explains how to use them
    // **!wires** - Explains how to defuse the wires, type the number of wires and then respond yes and no
    // **!button** - Explains how to defuse the button, respond yes and no and enter the strip colour
    // **!keypad** - Explains how to defuse the keypad, enter the keypad symbols seperated by a space
    // **!keypadsymbols** - Shows a list of each symbol and their respective codename
    // **!simonsays** - Explains how to defuse simon says, input if the serial number contains a vowel and the number of strikes
    // **!whosonfirst** - Explains how to defuse who's on first, input the display word and then the label on the button
    // **!memory** - Explains how to defuse memory, input the display number and then the button labels from left to right seperated by a space
    // **!morsecode** - Explains how to defuse morse code, input the ordered letters in dots and dashes separated by a space
    // **!complicatedwires** - Explains how to defuse complicated wires, input the colour(s) of the wire, enter the word 'led' if the LED is lit, and enter the word 'star' if there is a star symbol
    //         `);
  },
};
