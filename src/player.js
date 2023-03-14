class Player {
    constructor(name) {
        // console.log(name)
        this.name = name;
        this.victories = 0
    }

    winDuel() {
        ++this.victories;
    }
}

module.exports = Player;