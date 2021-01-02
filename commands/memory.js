module.exports = {
    name: "memory",
    description: "Memory defusing kit",
    execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        var pastLabels = [];
        message.reply("Enter the display number followed by the button labels in order from left to right seperated by a space. These messages will expire in 30 seconds").then(r => r.delete({ timeout: 30000 }));
        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
            let input = collected.first().content.toLowerCase().split(" ");

            if (input[0] === "cancel") {
                return message.reply("Canceled");
            } else if (input[0] == "1" || input[0] == "2") {
                message.reply("Press " + input[2]);
                pastLabels[0] = input[2];
                pastLabels[1] = "2";
            } else if (input[0] == "3") {
                message.reply("Press " + input[3]);
                pastLabels[0] = input[3];
                pastLabels[1] = "3";
            } else {
                message.reply("Press " + input[4]);
                pastLabels[0] = input[4];
                pastLabels[1] = "4";
            }

            message.reply("Enter the display number followed by the button labels in order from left to right seperated by a space.").then(r => r.delete({ timeout: 30000 }));
            message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                let input = collected.first().content.toLowerCase().split(" ");

                if (input[0] === "cancel") {
                    return message.reply("Canceled");
                } else if (input[0] == "1") {
                    message.reply("Press 4");

                    for (let i = 1; i < input.length; i++) {
                        if (input[i] == "4") {
                            pastLabels[2] = "4";
                            pastLabels[3] = i;
                        }
                    }
                } else if (input[0] == "3") {
                    message.reply("Press " + input[1]);
                    pastLabels[2] = input[1];
                    pastLabels[3] = "1";
                } else {
                    message.reply("Press " + input[pastLabels[1]]);
                    pastLabels[2] = input[pastLabels[1]];
                    pastLabels[3] = pastLabels[1];
                }

                message.reply("Enter the display number followed by the button labels in order from left to right seperated by a space.").then(r => r.delete({ timeout: 30000 }));
                message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                    let input = collected.first().content.toLowerCase().split(" ");

                    if (input[0] === "cancel") {
                        return message.reply("Canceled");
                    } else if (input[0] == "1") {
                        for (let i = 1; i < input.length; i++) {
                            if (input[i] == pastLabels[2]) {
                                message.reply("Press " + input[i]);
                                pastLabels[4] = pastLabels[2];
                                pastLabels[5] = i;
                            }
                        }
                    } else if (input[0] == "2") {
                        for (let i = 1; i < input.length; i++) {
                            if (input[i] == pastLabels[0]) {
                                message.reply("Press " + input[i]);
                                pastLabels[4] = pastLabels[0];
                                pastLabels[5] = i;
                            }
                        }
                    } else if (input[0] == "3") {
                        message.reply("Press " + input[3]);
                        pastLabels[4] = input[3];
                        pastLabels[5] = "3";
                    } else {
                        message.reply("Press 4");

                        for (let i = 1; i < input.length; i++) {
                            if (input[i] == "4") {
                                pastLabels[4] = "4";
                                pastLabels[5] = i;
                            }
                        }
                    }

                    message.reply("Enter the display number followed by the button labels in order from left to right seperated by a space.").then(r => r.delete({ timeout: 30000 }));
                    message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                        let input = collected.first().content.toLowerCase().split(" ");

                        if (input[0] === "cancel") {
                            return message.reply("Canceled");
                        } else if (input[0] == "1") {
                            message.reply("Press " + input[pastLabels[1]]);
                            pastLabels[6] = input[pastLabels[1]];
                            pastLabels[7] = pastLabels[1];
                        } else if (input[0] == "2") {
                            message.reply("Press " + input[1]);
                            pastLabels[4] = input[1];
                            pastLabels[5] = "1";
                        } else {
                            message.reply("Press " + input[pastLabels[3]]);
                            pastLabels[6] = input[pastLabels[3]];
                            pastLabels[7] = pastLabels[3];
                        }

                        message.reply("Enter the display number followed by the button labels in order from left to right seperated by a space.").then(r => r.delete({ timeout: 30000 }));
                        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                            let input = collected.first().content.toLowerCase().split(" ");

                            if (input[0] === "cancel") {
                                return message.reply("Canceled");
                            } else if (input[0] == "1") {
                                for (let i = 1; i < input.length; i++) {
                                    if (input[i] == pastLabels[0]) {
                                        message.reply("Press " + input[i]);
                                        pastLabels[4] = pastLabels[0];
                                        pastLabels[5] = i;
                                    }
                                }
                            } else if (input[0] == "2") {
                                for (let i = 1; i < input.length; i++) {
                                    if (input[i] == pastLabels[2]) {
                                        message.reply("Press " + input[i]);
                                        pastLabels[4] = pastLabels[2];
                                        pastLabels[5] = i;
                                    }
                                }
                            } else if (input[0] == "3") {
                                for (let i = 1; i < input.length; i++) {
                                    if (input[i] == pastLabels[6]) {
                                        message.reply("Press " + input[i]);
                                        pastLabels[4] = pastLabels[6];
                                        pastLabels[5] = i;
                                    }
                                }
                            } else {
                                for (let i = 1; i < input.length; i++) {
                                    if (input[i] == pastLabels[4]) {
                                        message.reply("Press " + input[i]);
                                        pastLabels[4] = pastLabels[4];
                                        pastLabels[5] = i;
                                    }
                                }
                            }


                        }).catch(err => {
                            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                        });

                    }).catch(err => {
                        message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                    });

                }).catch(err => {
                    message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                });

            }).catch(err => {
                message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
            });

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}