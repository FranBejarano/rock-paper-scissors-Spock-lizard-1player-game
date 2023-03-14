const chai = require('chai');
const { expect } = require('chai');
const Rules = require('../src/rules.js');

describe('Rules class tests', () => {
    let mockRules = '';
    let mockResults;

    beforeEach(() => {
        mockRules = new Rules();
        mockResults = '';
    });

    afterEach(() => {
        mockRules = null;
        mockResults = null;
    });

    it('15. should return "ties" when "rock" and "rock" are sent to "prime()" in Duel clas ', () => {
        // Arrange
        mockResults = "ties";

        // Act

        // Assert
        expect(mockRules.prime("rock", "rock")).to.eql(mockResults);
    });

    it('16. should return "wins" when "rock" and "scissors" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("rock", "scissors")).to.eql(mockResults);
    });

    it('17. should return "wins" when "rock" and "lizard" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("rock", "lizard")).to.eql(mockResults);
    });

    it('18. should return "loses" when "rock" and "paper" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("rock", "paper")).to.eql(mockResults);
    });

    it('19. should return "loses" when "rock" and "Spock" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("rock", "Spock")).to.eql(mockResults);
    });

    it('20. should return "ties" when "paper" and "paper" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "ties";

        // Act

        // Assert
        expect(mockRules.prime("paper", "paper")).to.eql(mockResults);
    });

    it('21. should return "wins" when "paper" and "rock" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("paper", "rock")).to.eql(mockResults);
    });

    it('22. should return "wins" when "paper" and "Spock" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("paper", "Spock")).to.eql(mockResults);
    });

    it('23. should return "loses" when "paper" and "scissors" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("paper", "scissors")).to.eql(mockResults);
    });

    it('24. should return "loses" when "paper" and "lizard" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("paper", "lizard")).to.eql(mockResults);
    });

    it('25. should return "ties" when "scissors" and "scissors" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "ties";

        // Act

        // Assert
        expect(mockRules.prime("scissors", "scissors")).to.eql(mockResults);
    });

    it('26. should return "wins" when "scissors" and "paper" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("scissors", "paper")).to.eql(mockResults);
    });

    it('27. should return "wins" when "scissors" and "lizard" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("scissors", "lizard")).to.eql(mockResults);
    });

    it('28. should return "loses" when "scissors" and "rock" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("scissors", "rock")).to.eql(mockResults);
    });

    it('29. should return "loses" when "scissors" and "Spock" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("scissors", "Spock")).to.eql(mockResults);
    });

    it('30. should return "ties" when "Spock" and "Spock" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "ties";

        // Act

        // Assert
        expect(mockRules.prime("Spock", "Spock")).to.eql(mockResults);
    });

    it('31. should return "wins" when "Spock" and "rock" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("Spock", "rock")).to.eql(mockResults);
    });

    it('32. should return "wins" when "Spock" and "scissors" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("Spock", "scissors")).to.eql(mockResults);
    });

    it('33. should return "loses" when "Spock" and "paper" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("Spock", "paper")).to.eql(mockResults);
    });

    it('34. should return "loses" when "Spock" and "lizard" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("Spock", "lizard")).to.eql(mockResults);
    });

    it('35. should return "ties" when "lizard" and "lizard" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "ties";

        // Act

        // Assert
        expect(mockRules.prime("lizard", "lizard")).to.eql(mockResults);
    });

    it('36. should return "wins" when "lizard" and "paper" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("lizard", "paper")).to.eql(mockResults);
    });

    it('37. should return "wins" when "lizard" and "Spock" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "wins";

        // Act

        // Assert
        expect(mockRules.prime("lizard", "Spock")).to.eql(mockResults);
    });

    it('38. should return "loses" when "lizard" and "rock" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("lizard", "rock")).to.eql(mockResults);
    });

    it('39. should return "loses" when "lizard" and "scissors" are sent to "prime()" in Duel class', () => {
        // Arrange
        mockResults = "loses";

        // Act

        // Assert
        expect(mockRules.prime("lizard", "scissors")).to.eql(mockResults);
    });
});
