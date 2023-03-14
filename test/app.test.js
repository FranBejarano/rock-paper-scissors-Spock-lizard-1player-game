const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const server = require('../app.js');

chai.use(chaiHttp);

describe('Server tests', () => {
    it('should return 200 in the get request in index', async () => {
        const testServer = chai.request(server).keepOpen();
        await testServer.get(`/`);
        // Act
        const res = await testServer.get(`/`);
        // Assert
        expect(res.status).to.be.equal(200);
    })

    it('should return 200 when sending the right data in the post request to /game', async () => {
        const testServer = chai.request(server).keepOpen();
        await testServer.post(`/game`, { humanPlayer: "mocky" });
        // Act
        const res = await testServer.post(`/game`);
        // Assert
        expect(res.status).to.be.equal(302);
    })

})
