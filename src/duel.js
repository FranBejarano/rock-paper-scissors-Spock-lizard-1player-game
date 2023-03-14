const Player = require('./player.js');

class Duel {
    setup(names, playerClass = Player) {
        this.players = names.map(name => new playerClass(name));
    }

    humanPlayer() {
        return this.players[0];
    }

    botPlayer() {
        return this.players[1];
    }

    humanVictory() {
        this.humanPlayer().winDuel();
    }

    botVictory() {
        this.botPlayer().winDuel();
    }

    botSelection() {
        let botSelector = '';

        return botSelector = this.handShape(Math.floor(Math.random() * 5));
    }

    handShape(num) {
        let hand = '';

        if (num === 0) hand = "rock";
        if (num === 1) hand = "paper";
        if (num === 2) hand = "scissors";
        if (num === 3) hand = "Spock";
        if (num === 4) hand = "lizard";

        return hand;
    }
}

module.exports = Duel;