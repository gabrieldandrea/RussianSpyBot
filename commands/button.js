module.exports = {
    name: "button",
    description: "Button defusing kit",
    execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        message.reply("Is the button blue and does it say 'Abort'? These messages will expire in 10 seconds").then(r => r.delete({ timeout: 10000 }));
        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
            let input = collected.first().content.toLowerCase();

            if (input === "cancel") {
                return message.reply("Canceled");
            } else if (input === "yes") {
                message.reply("Hold the button, what is the colour of the strip?").then(r => r.delete({ timeout: 10000 }));
                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                    let input = collected.first().content.toLowerCase();

                    return message.channel.send(stripColour(input));
                }).catch(err => {
                    message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                });
            } else {
                message.reply("Is there is more than 1 battery on the bomb and the button says 'Detonate'?").then(r => r.delete({ timeout: 10000 }));
                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                    let input = collected.first().content.toLowerCase();

                    if (input === "cancel") {
                        return message.reply("Canceled");
                    } else if (input === "yes") {
                        return message.channel.send("Press and immediately release the button");
                    } else {
                        message.reply("Is the button white and there is a lit indicator labelled 'CAR'?").then(r => r.delete({ timeout: 10000 }));
                        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                            let input = collected.first().content.toLowerCase();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else if (input === "yes") {
                                message.reply("Hold the button, what is the colour of the strip?").then(r => r.delete({ timeout: 10000 }));
                                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                    let input = collected.first().content.toLowerCase();

                                    return message.channel.send(stripColour(input));
                                }).catch(err => {
                                    message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                                });
                            } else {
                                message.reply("Are there are more than 2 batteries on the bomb and a lit indicator labelled 'FRK'?").then(r => r.delete({ timeout: 10000 }));
                                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                    let input = collected.first().content.toLowerCase();

                                    if (input === "cancel") {
                                        return message.reply("Canceled");
                                    } else if (input === "yes") {
                                        return message.channel.send("Press and immediately release the button");
                                    } else {
                                        message.reply("Is the button yellow?").then(r => r.delete({ timeout: 10000 }));
                                        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                            let input = collected.first().content.toLowerCase();

                                            if (input === "cancel") {
                                                return message.reply("Canceled");
                                            } else if (input === "yes") {
                                                message.reply("Hold the button, what is the colour of the strip?").then(r => r.delete({ timeout: 10000 }));
                                                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                                    let input = collected.first().content.toLowerCase();

                                                    return message.channel.send(stripColour(input));
                                                }).catch(err => {
                                                    message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                                                });
                                            } else {
                                                message.reply("Is the button red and does it say 'Hold'?").then(r => r.delete({ timeout: 10000 }));
                                                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                                    let input = collected.first().content.toLowerCase();

                                                    if (input === "cancel") {
                                                        return message.reply("Canceled");
                                                    } else if (input === "yes") {
                                                        return message.channel.send("Press and immediately release the button");
                                                    } else {
                                                        message.reply("Hold the button, what is the colour of the strip?").then(r => r.delete({ timeout: 10000 }));
                                                        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                                            let input = collected.first().content.toLowerCase();
        
                                                            return message.channel.send(stripColour(input));
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

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}

function stripColour(colour) {
    colour = colour.toLowerCase().toString();

    switch (colour) {
        case "yellow":
            return "Release when the countdown timer has a 5 in any position";
        case "blue":
            return "Release when the countdown timer has a 4 in any position";
        case "white":
        default:
            return "Release when the countdown timer has a 1 in any position";
    }
}