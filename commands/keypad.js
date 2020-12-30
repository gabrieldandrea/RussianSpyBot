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
                var ans;

                //fix check only works for the first array
                var check = input.every((el) => {
                    for (i = 0; i < bigarr.length; i++) {
                        if ((bigarr[i].indexOf(el) !== -1)) {
                            return ans = bigarr[i];
                        }

                    return ans = "Incorrect symbols";
                    }
                });

                check;

                if (ans === "Incorrect symbols") {
                    return message.channel.send(ans);
                }

                input.sort(function(a, b) {
                    return ans.indexOf(a) - ans.indexOf(b);
                });

                return message.reply("Press the symbols in this order: " + input.toString());
            }

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}
