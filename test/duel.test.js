const chai = require('chai');
const Duel = require('../src/duel.js')
const { expect } = require('chai');
const Player = require('../src/player.js');
const sinon = require('sinon');

describe('Duel class tests ', () => {
    let mockPlayer = '';
    let player = new Player();
    let mockDuel = new Duel();

    beforeEach(async () => {
        mockPlayer = ["mocky", "mocky2"];
    });

    afterEach(() => {
        mockPlayer = undefined;
    });

    it('3. should call constructor of player class', () => {
        // Arrange
        const constructorSpy = sinon.spy(player, "constructor");

        // Act
        mockDuel.setup(mockPlayer);
        // Assert
        expect(constructorSpy.calledWith(mockPlayer)).to.be.true;
    })

    it('4. should create an array of Players of length 2 when adding 2 players', () => {
        // Arrange

        // Act

        // Assert
        mockDuel.setup(mockPlayer);
        expect(mockDuel.players.length).to.equal(2);
    })

    it('5. should return the name of player1', () => {
        // Arrange

        // Act
        mockDuel.setup(mockPlayer);
        // Assert

        expect(mockDuel.players[0].name).to.equal("mocky");
        expect(mockDuel.humanPlayer()).to.equal(mockDuel.players[0]);
    })

    it('6. should return the name of player2', () => {
        // Arrange

        // Act
        mockDuel.setup(mockPlayer);
        // Assert

        expect(mockDuel.players[1].name).to.equal("mocky2");
        expect(mockDuel.botPlayer()).to.equal(mockDuel.players[1]);
    })

    it('7. should add 1 victory to player 1', () => {
        // Arrange

        // Act
        mockDuel.setup(mockPlayer);
        mockDuel.humanVictory();
        // Assert

        expect(mockDuel.players[0].victories).to.equal(1);
    })

    it('8. should add 1 victory to player 2', () => {
        // Arrange

        // Act
        mockDuel.setup(mockPlayer);
        mockDuel.botVictory();
        // Assert

        expect(mockDuel.players[1].victories).to.equal(1);
    })

    it('9. should call handShape from botSelection function', () => {
        // Arrange
        const handShapeSpy = sinon.spy(mockDuel, "handShape");

        // Act
        let selection = mockDuel.botSelection();

        // Assert
        expect(handShapeSpy.calledWith(selection)).to.be.true;
    })

    it('10. should return "rock" when 0 is sent to handShape function', () => {
        // Arrange

        // Act

        // Assert
        expect(mockDuel.handShape(0)).to.equal("rock");
    })

    it('11. should return "paper" when 1 is sent to handShape function', () => {
        // Arrange

        // Act

        // Assert
        expect(mockDuel.handShape(1)).to.equal("paper");
    })

    it('12. should return "scissors" when 2 is sent to handShape function', () => {
        // Arrange

        // Act

        // Assert
        expect(mockDuel.handShape(2)).to.equal("scissors");
    })

    it('13. should return "Spock" when 3 is sent to handShape function', () => {
        // Arrange

        // Act

        // Assert
        expect(mockDuel.handShape(3)).to.equal("Spock");
    })

    it('14. should return "lizard" when 4 is sent to handShape function', () => {
        // Arrange

        // Act

        // Assert
        expect(mockDuel.handShape(4)).to.equal("lizard");
    })
})
