module.exports = {
    name: "help",
    description: "Displays all commands and how to use them",
    execute(message, args) {
        return message.channel.send(`
        These are the supported commands: 

**!help** - Displays all commands and explains how to use them
**!wires** - Explains how to defuse the wires, type the number of wires and then respond yes and no
**!button** - Explains how to defuse the button, respond yes and no and enter the strip colour
**!keypad** - Explains how to defuse the keypad, enter the keypad symbols seperated by a space
**!keypadsymbols** - Shows a list of each symbol and their respective codename
**!simonsays** - Explains how to defuse simon says, input if the serial number contains a vowel and the number of strikes
**!whosonfirst** - Explains how to defuse who's on first, input the display word and then the label on the button
**!memory** - Explains how to defuse memory, input the display number and then the button labels from left to right seperated by a space
**!morsecode** - Explains how to defuse morse code, input the ordered letters in dots and dashes separated by a space
        `);
    }
}