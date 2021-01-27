module.exports = {
    name: "complicatedwires",
    description: "Complicated wires defusing kit",
    execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        message.reply("Enter the colour(s) of the wire, if there is a lit LED, enter 'led', and if there is a star, enter 'star'. These messages will expire in 30 seconds").then(r => r.delete({ timeout: 30000 }));
        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
            let input = collected.first().content.toLowerCase().split(" ");

            if (input[0] === "cancel") {
                return message.reply("Canceled");
            } else {
                if (input.includes("led") && input.includes("red") && input.includes("blue") && input.includes("star")) {
                    return message.reply("Do not cut the wire");
                }

                else if (input.includes("red") && input.includes("blue") && input.includes("led")) {
                    return message.reply("Cut the wire if the last digit of the serial number is even");
                }

                else if (input.includes("red") && input.includes("blue") && input.includes("star")) {
                    return message.reply("Cut the wire if the bomb has a parallel port");
                }
                
                else if (input.includes("red") && input.includes("star") && input.includes("led")) {
                    return message.reply("Cut the wire if the bomb has two or more batteries");
                }

                else if (input.includes("blue") && input.includes("star") && input.includes("led")) {
                    return message.reply("Cut the wire if the bomb has a parallel port");
                }

                else if (input.includes("red") && input.includes("blue")) {
                    return message.reply("Cut the wire if the last digit of the serial number is even");
                }

                else if (input.includes("blue") && input.includes("star")) {
                    return message.reply("Do not cut the wire");
                }

                else if (input.includes("red") && input.includes("star")) {
                    return message.reply("Cut the wire");
                }

                else if (input.includes("red") && input.includes("led")) {
                    return message.reply("Cut the wire if the bomb has two or more batteries");
                }

                else if (input.includes("blue") && input.includes("led")) {
                    return message.reply("Cut the wire if the bomb has a parallel port");
                }

                else if (input.includes("led") && input.includes("star")) {
                    return message.reply("Cut the wire if the bomb has two or more batteries");
                }

                else if (input.includes("red")) {
                    return message.reply("Cut the wire if the last digit of the serial number is even");
                }

                else if (input.includes("blue")) {
                    return message.reply("Cut the wire if the last digit of the serial number is even");
                }

                else if (input.includes("led")) {
                    return message.reply("Do not cut the wire");
                }

                else if (input.includes("star")) {
                    return message.reply("Cut the wire");
                }

                else {
                    return message.reply("Cut the wire");
                }
            }

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}
