module.exports = {
    name: "whosonfirst",
    description: "Who's On First defusing kit",
    execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        message.reply("Enter the word on the display. If there is no word, press '.' and enter. These messages will expire in 30 seconds").then(r => r.delete({ timeout: 30000 }));
        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
            let input = collected.first().content.toLowerCase().toString();

            if (input === "cancel") {
                return message.reply("Canceled");
            } else {
                switch (input) {
                    case "yes":
                    case "they are":
                    case "nothing":
                    case "led":
                        message.reply("What is the label of the middle left button?");
                        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                            let input = collected.first().content.toLowerCase().toString();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else {
                                message.reply(findList(input))
                            }
                        }).catch(err => {
                            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                        });
                        break;
                    case "first":
                    case "okay":
                    case "c":
                        message.reply("What is the label of the top right button?");
                        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                            let input = collected.first().content.toLowerCase().toString();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else {
                                message.reply(findList(input))
                            }

                        }).catch(err => {
                            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                        });
                        break;
                    case "says":
                    case "display":
                    case "no":
                    case "lead":
                    case "hold on":
                    case "you are":
                    case "there":
                    case "see":
                    case "cee":
                        message.reply("What is the label of the bottom right button?");
                        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                            let input = collected.first().content.toLowerCase().toString();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else {
                                message.reply(findList(input))
                            }

                        }).catch(err => {
                            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                        });
                        break;
                    case ".":
                    case "reed":
                    case "leed":
                    case "theyre":
                        message.reply("What is the label of the bottom left button?");
                        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                            let input = collected.first().content.toLowerCase().toString();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else {
                                message.reply(findList(input))
                            }

                        }).catch(err => {
                            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                        });
                        break;
                    case "blank":
                    case "read":
                    case "red":
                    case "you":
                    case "your":
                    case "youre":
                    case "their":
                        message.reply("What is the label of the middle right button?");
                        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                            let input = collected.first().content.toLowerCase().toString();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else {
                                message.reply(findList(input))
                            }

                        }).catch(err => {
                            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                        });
                        break;
                    case "ur":
                        message.reply("What is the label of the top left button?");
                        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
                            let input = collected.first().content.toLowerCase().toString();

                            if (input === "cancel") {
                                return message.reply("Canceled");
                            } else {
                                message.reply(findList(input))
                            }

                        }).catch(err => {
                            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
                        });
                        break;
                    default:
                        return message.reply("Incorrect label");
                }
            }

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}

function findList(label) {
    var bigDict = {
        ready: "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY, NO, FIRST, UHHH, NOTHING, WAIT", first: "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST",
        no: "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO, MIDDLE", blank: "WAIT, RIGHT, OKAY, MIDDLE, BLANK, PRESS, READY, NOTHING, NO, WHAT, LEFT, UHHH, YES, FIRST",
        nothing: "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING, READY", yes: "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES, LEFT, BLANK, NO, WAIT",
        what: "UHHH, WHAT, LEFT, NOTHING, READY, BLANK, MIDDLE, NO, OKAY, FIRST, WAIT, YES, PRESS, RIGHT", uhhh: "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH, MIDDLE, WAIT, FIRST",
        left: "RIGHT, LEFT, FIRST, NO, MIDDLE, YES, BLANK, WHAT, UHHH, WAIT, PRESS, READY, OKAY, NOTHING", right: "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT, MIDDLE, LEFT, UHHH, BLANK, OKAY, FIRST",
        middle: "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE, RIGHT, FIRST, UHHH, YES", okay: "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY, LEFT, READY, BLANK, PRESS, WHAT, RIGHT",
        wait: "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT, NOTHING, READY, RIGHT, MIDDLE", press: "RIGHT, MIDDLE, YES, READY, PRESS, OKAY, NOTHING, UHHH, BLANK, LEFT, FIRST, WHAT, NO, WAIT",
        you: "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU, UH UH, LIKE, DONE, U", youare: "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE",
        your: "UH UH, YOU ARE, UH HUH, YOUR, NEXT, UR, SURE, U, YOU'RE, YOU, WHAT?, HOLD, LIKE, DONE", youre: "YOU, YOU'RE, UR, NEXT, UH UH, YOU ARE, U, YOUR, WHAT?, UH HUH, SURE, DONE, LIKE, HOLD",
        ur: "DONE, U, UR, UH HUH, WHAT?, SURE, YOUR, HOLD, YOU'RE, LIKE, NEXT, UH UH, YOU ARE, YOU", u: "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U, YOU, LIKE, HOLD, YOU ARE, YOUR",
        uhhuh: "UH HUH, YOUR, YOU ARE, YOU, DONE, HOLD, UH UH, NEXT, SURE, LIKE, YOU'RE, UR, U, WHAT?", uhuh: "UR, U, YOU ARE, YOU'RE, NEXT, UH UH, DONE, YOU, UH HUH, LIKE, YOUR, SURE, HOLD, WHAT?",
        whatq: "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?, SURE", done: "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE",
        next: "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT, LIKE, DONE, YOU ARE, UR, YOU'RE, U, YOU", hold: "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD, UH HUH, YOUR, LIKE",
        sure: "YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE, U, WHAT?, NEXT, YOUR, UH UH", like: "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE, SURE, YOU ARE, YOUR"
    };

    for (key in bigDict) {
        if (label == key) {
            return bigDict[key];
        }

        else if (label == "what?" && key == "whatq") {
            return bigDict[key];
        }

        else if (label == "you are" && key == "youare") {
            return bigDict[key];
        }

        else if (label == "uh huh" && key == "uhhuh") {
            return bigDict[key];
        }

        else if (label == "uh uh" && key == "uhuh") {
            return bigDict[key];
        }
    }

    return "Incorrect Label";
}