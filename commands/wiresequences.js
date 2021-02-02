module.exports = {
    name: "wiresequences",
    description: "Wire sequences defusing kit",
    async execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        let red = ["c", "b", "a", "a,c", "b", "a,c", "a,b,c", "a,b", "b"];
        let blue = ["b", "a,c", "b", "a", "b", "b,c", "c", "a,c", "a"];
        let black = ["a,b,c", "a,c", "b", "a,c", "b", "b,c", "a,b", "c", "c"];
        let redCounter = 0;
        let blueCounter = 0;
        let blackCounter = 0;
        let input = ["null"];

        while (input[0] !== "end") {
            message.reply("Input the colour of the wire followed by the letter it is connected to, seperated by a space. Input 'end' once completed. These messages will expire in 30 seconds").then(r => r.delete({ timeout: 30000 }));
            await message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                input = collected.first().content.toLowerCase().split(" ");
                if (input[0] === "cancel") {
                    return message.reply("Canceled");
                }

                else if (input[0] === "red") {
                    if (red[redCounter].includes(input[1])) {
                        message.reply("Cut the wire");
                    }

                    else {
                        message.reply("Do not cut the wire");
                    }

                    redCounter++;
                }

                else if (input[0] === "blue") {
                    if (blue[blueCounter].includes(input[1])) {
                        message.reply("Cut the wire");
                    }

                    else {
                        message.reply("Do not cut the wire");
                    }

                    blueCounter++;
                }

                else if (input[0] === "black") {
                    if (black[blackCounter].includes(input[1])) {
                        message.reply("Cut the wire");
                    }

                    else {
                        message.reply("Do not cut the wire");
                    }

                    blackCounter++;
                }

                else if (input.includes("end")) {
                    return message.reply("Sequence complete");
                }

                else if (input.length !== 2) {
                    message.reply("Invalid input");
                }

                else {
                    message.reply("Invalid input");
                }
            }).catch(err => {
                message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
            });
        }
    }
}
