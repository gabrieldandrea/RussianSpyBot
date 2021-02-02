module.exports = {
    name: "morsecode",
    description: "Morse Code defusing kit",
    execute(message, args) {
        const filter = m => m.author.id === message.author.id;
        var alphabet = {
            ".-": "a",
            "-...": "b",
            "-.-.": "c",
            "-..": "d",
            ".": "e",
            "..-.": "f",
            "--.": "g",
            "....": "h",
            "..": "i",
            ".---": "j",
            "-.-": "k",
            ".-..": "l",
            "--": "m",
            "-.": "n",
            "---": "o",
            ".--.": "p",
            "--.-": "q",
            ".-.": "r",
            "...": "s",
            "-": "t",
            "..-": "u",
            "...-": "v",
            ".--": "w",
            "-..-": "x",
            "-.--": "y",
            "--..": "z"
        };
        var frequency = {
            "shell" : "3.505 MHz",
            "halls" : "3.515 MHz",
            "slick" : "3.522 MHz",
            "trick" : "3.532 MHz",
            "boxes" : "3.535 MHz",
            "leaks" : "3.542 MHz",
            "strobe" : "3.545 MHz",
            "bistro" : "3.552 MHz",
            "flick" : "3.555 MHz",
            "bombs" : "3.565 MHz",
            "break" : "3.572 MHz",
            "brick" : "3.575 MHz",
            "steak" : "3.582 MHz",
            "sting" : "3.592 MHz",
            "vector" : "3.595 MHz",
            "beats" : "3.600 MHz"
        };
        var letters = [];
        message.reply("Input the ordered letters in dots and dashes, separate the letters by a space. These messages will expire in 30 seconds").then(r => r.delete({ timeout: 30000 }));
        message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then(collected => {
            let input = collected.first().content.toLowerCase();

            if (input[0] === "cancel") {
                return message.reply("Canceled");
            } else {
                input.split("   ").map(function (word) {
                    word.split(" ").map(function (letter) {
                        letters.push(alphabet[letter]);
                    });
                    letters.push(" ");
                });
            }

            letters = letters.join("").trim();

            for (key in frequency) {
                if (key == letters) {
                    return message.channel.send("Input this frequency: " + frequency[key])
                }
            }

            return message.channel.send("Incorrect morse code");

        }).catch(err => {
            message.reply("Time has expired").then(r => r.delete({ timeout: 5000 }));
        });
    }
}