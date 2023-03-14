const Player = require('../src/player.js');
const chai = require('chai');
const { expect } = require('chai');

describe('Player class tests', () => {
    let mockPlayer = '';

    beforeEach(async () => {
        mockPlayer = new Player("mocky");
    });

    afterEach(() => {
        mockPlayer = undefined;
    });

    it('1. should return a Player', () => {
        // Arrange        

        // Act

        // Assert
        expect(mockPlayer).be.eql({ name: 'mocky', victories: 0 });
    });

    it('2. should add a victory', () => {
        // Arrange

        // Act
        mockPlayer.winDuel();

        // Assert
        expect(mockPlayer.victories).be.eql(1);
    })


})
