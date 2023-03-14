class Rules {

    prime(humanSelector, botSelector) {
        let duelResult = "";
        if (humanSelector === botSelector) duelResult = "ties"
        else if (humanSelector === "rock" && (botSelector === "scissors" || botSelector === "lizard")) duelResult = "wins"
        else if (humanSelector === "paper" && (botSelector === "rock" || botSelector === "Spock")) duelResult = "wins"
        else if (humanSelector === "scissors" && (botSelector === "paper" || botSelector === "lizard")) duelResult = "wins"
        else if (humanSelector === "Spock" && (botSelector === "rock" || botSelector === "scissors")) duelResult = "wins"
        else if (humanSelector === "lizard" && (botSelector === "paper" || botSelector === "Spock")) duelResult = "wins"
        else duelResult = "loses"

        return duelResult;
    }
}

module.exports = Rules;