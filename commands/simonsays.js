module.exports = {
    name: "simonsays",
    description: "Simon Says defusing kit",
    execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        let vowelNoStrikes = ["red => blue", " blue => red", " green => yellow", " yellow => green"];
        let vowelOneStrike = ["red => yellow", " blue => green", " green => blue", " yellow => red"];
        let vowelTwoStrikes = ["red => green", " blue => red", " green => yellow", " yellow => blue"];
        let noVowelsNoStrikes = ["red => blue", " blue => yellow", " green => green", " yellow => red"];
        let noVowelsOneStrike = ["red => red", " blue => blue", " green => yellow", " yellow => green"];
        let noVowelsTwoStrike = ["red => yellow", " blue => green", " green => blue", " yellow => red"];

        message.reply("Does the serial number contain a vowel? Input the number of strikes. These messages will expire in 30 seconds").then(r => r.delete({ timeout: 30000 }));
        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
            let input = collected.first().content.toLowerCase().split(" ");

            if (input[0] === "cancel") {
                return message.reply("Canceled");
            } else {
                if (input[0] === "yes") {
                    switch (input[1]) {
                        case "0":
                            return message.channel.send(vowelNoStrikes.toString());
                        case "1":
                            return message.channel.send(vowelOneStrike.toString());
                        case "2":
                            return message.channel.send(vowelTwoStrikes.toString());
                        default:
                            return message.channel.send("Incorrect input");
                    }
                } 
                
                else {
                    switch (input[1]) {
                        case "0":
                            return message.channel.send(noVowelsNoStrikes.toString());
                        case "1":
                            return message.channel.send(noVowelsOneStrike.toString());
                        case "2":
                            return message.channel.send(noVowelsTwoStrike.toString());
                        default:
                            return message.channel.send("Incorrect input");
                    }
                }
            }

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}
