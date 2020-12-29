module.exports = {
    name: "wires",
    description: "Horizontal wires defusing kit",
    execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        message.reply("Enter the number of wires, will expire in 10 seconds").then(r => r.delete({ timeout: 10000 }));
        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
            let input = collected.first().content;

            if (input === "cancel") {
                return message.reply("Canceled");
            }

            else if (input === "3") {
                message.reply("Are there any red wires? Will expire in 10 seconds").then(r => r.delete({ timeout: 10000 }));
                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                    let input = collected.first().content;

                    if (input === "cancel") {
                        return message.reply("Canceled");
                    }

                    else if (input === "no") {
                        return message.reply("Cut the last wire");
                    }

                    else {
                        message.reply("Is the last wire white? Will expire in 10 seconds").then(r => r.delete({ timeout: 10000 }));
                        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                            let input = collected.first().content;

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            }

                            else if (input === "yes") {
                                return message.reply("Cut the last wire");
                            }

                            else {
                                message.reply("Is there more than one blue wire? Will expire in 10 seconds").then(r => r.delete({ timeout: 10000 }));
                                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                    let input = collected.first().content;

                                    if (input === "cancel") {
                                        return message.reply("Canceled");
                                    }

                                    else if (input === "yes") {
                                        return message.reply("Cut the last blue wire");
                                    }

                                    else {
                                        return message.reply("Cut the last wire");
                                    }

                                }).catch(err => {
                                    message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                                });
                            }

                        }).catch(err => {
                            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                        });
                    }

                }).catch(err => {
                    message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                });
            }

            else {
                return message.channel.send("nuts");
            }

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}