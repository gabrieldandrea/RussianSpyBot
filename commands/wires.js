module.exports = {
    name: "wires",
    description: "Horizontal wires defusing kit",
    execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        message.reply("Enter the number of wires, these messages will expire in 10 seconds").then(r => r.delete({ timeout: 10000 }));
        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
            let input = collected.first().content.toLowerCase();

            if (input === "cancel") {
                return message.reply("Canceled");
            } else if (input === "3") {
                message.reply("Are there any red wires?").then(r => r.delete({ timeout: 10000 }));
                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                    let input = collected.first().content.toLowerCase();

                    if (input === "cancel") {
                        return message.reply("Canceled");
                    } else if (input === "no") {
                        return message.reply("Cut the last wire");
                    } else {
                        message.reply("Is the last wire white?").then(r => r.delete({ timeout: 10000 }));
                        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                            let input = collected.first().content.toLowerCase();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else if (input === "yes") {
                                return message.reply("Cut the last wire");
                            } else {
                                message.reply("Are there more than one blue wire?").then(r => r.delete({ timeout: 10000 }));
                                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                    let input = collected.first().content.toLowerCase();

                                    if (input === "cancel") {
                                        return message.reply("Canceled");
                                    } else if (input === "yes") {
                                        return message.reply("Cut the last blue wire");
                                    } else {
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
            } else if (input === "4") {
                message.reply("Are there more than one red wire and is the last digit of the serial number odd?").then(r => r.delete({ timeout: 10000 }));
                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                    let input = collected.first().content.toLowerCase();

                    if (input === "cancel") {
                        return message.reply("Canceled");
                    } else if (input === "yes") {
                        return message.reply("Cut the last red wire");
                    } else {
                        message.reply("Is the last wire yellow and are there no red wires?").then(r => r.delete({ timeout: 10000 }));
                        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                            let input = collected.first().content.toLowerCase();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else if (input === "yes") {
                                return message.reply("Cut the first wire");
                            } else {
                                message.reply("Is there exactly one blue wire?").then(r => r.delete({ timeout: 10000 }));
                                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                    let input = collected.first().content.toLowerCase();

                                    if (input === "cancel") {
                                        return message.reply("Canceled");
                                    } else if (input === "yes") {
                                        return message.reply("Cut the first wire");
                                    } else {
                                        message.reply("Are there more than one yellow wire?").then(r => r.delete({ timeout: 10000 }));
                                        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                            let input = collected.first().content.toLowerCase();

                                            if (input === "cancel") {
                                                return message.reply("Canceled");
                                            } else if (input === "yes") {
                                                return message.reply("Cut the last wire");
                                            } else {
                                                return message.reply("Cut the second wire");
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
            } else if (input === "5") {
                message.reply("Is the last wire black and is the last digit of the serial number odd?").then(r => r.delete({ timeout: 10000 }));
                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                    let input = collected.first().content.toLowerCase();

                    if (input === "cancel") {
                        return message.reply("Canceled");
                    } else if (input === "yes") {
                        return message.reply("Cut the fourth wire");
                    } else {
                        message.reply("Is there exactly one red wire and more than one yellow wire?").then(r => r.delete({ timeout: 10000 }));
                        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                            let input = collected.first().content.toLowerCase();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else if (input === "yes") {
                                return message.reply("Cut the first wire");
                            } else {
                                message.reply("Are there no black wires?").then(r => r.delete({ timeout: 10000 }));
                                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                    let input = collected.first().content.toLowerCase();

                                    if (input === "cancel") {
                                        return message.reply("Canceled");
                                    } else if (input === "yes") {
                                        return message.reply("Cut the second wire");
                                    } else {
                                        return message.reply("Cut the first wire");
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
            } else if (input === "6") {
                message.reply("Are there no yellow wires and is the last digit of the serial number odd?").then(r => r.delete({ timeout: 10000 }));
                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                    let input = collected.first().content.toLowerCase();

                    if (input === "cancel") {
                        return message.reply("Canceled");
                    } else if (input === "yes") {
                        return message.reply("Cut the third wire");
                    } else {
                        message.reply("Is there exactly one yellow wire and more than one white wire?").then(r => r.delete({ timeout: 10000 }));
                        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                            let input = collected.first().content.toLowerCase();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else if (input === "yes") {
                                return message.reply("Cut the fourth wire");
                            } else {
                                message.reply("Are there any red wires?").then(r => r.delete({ timeout: 10000 }));
                                message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                                    let input = collected.first().content.toLowerCase();

                                    if (input === "cancel") {
                                        return message.reply("Canceled");
                                    } else if (input === "yes") {
                                        return message.reply("Cut the last wire");
                                    } else {
                                        return message.reply("Cut the fourth wire");
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
            } else {
                if (input < "3") {return message.channel.send("Not enough wires");}
                else {return message.channel.send("Too many wires");}
            }

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}