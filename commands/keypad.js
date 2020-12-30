module.exports = {
    name: "keypad",
    description: "Keypad defusing kit",
    execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        let arr1 = ["q", "at", "lambda", "bolt", "squid", "x", "backc"];
        let arr2 = ["backe", "q", "backc", "tail", "whitestar", "x", "question"];
        let arr3 = ["copyright", "w", "tail", "doublek", "half3", "lambda", "whitestar"];
        let arr4 = ["6", "p", "bt", "squid", "doublek", "question", "smiley"];
        let arr5 = ["trident", "smiley", "bt", "c", "p", "3tail", "blackstar"];
        let arr6 = ["6", "backe", "puzzle", "ae", "trident", "backn", "omega"];
        let bigarr = [arr1, arr2, arr3, arr4, arr5, arr6];

        message.reply("Enter the symbols. These messages will expire in 30 seconds").then(r => r.delete({ timeout: 30000 }));
        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
            let input = collected.first().content.split(" ");

            if (input === "cancel") {
                return message.reply("Canceled");
            } else {
                for (i = 0; i < bigarr.length; i++) {
                    if ((input.every(val => bigarr[i].includes(val))) == true) {
                        input.sort(function(a, b) {
                            return bigarr[i].indexOf(a) - bigarr[i].indexOf(b);
                        });
                        break;
                    }

                    if (i == bigarr.length - 1) {
                        return message.channel.send("Incorrect symbols");
                    }
                }

                return message.channel.send("Press the symbols in this order: " + input.toString());
            }

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}
