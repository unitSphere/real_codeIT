
const app = require('./server.js');    //server.js exports app for testing while app.js listens on port
const supertest = require('supertest');
const request = supertest(app);

describe('Test / Endpoint:', () => {
    it('Return a string', async done => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.type).toBe('text/html');
        done();
    });
});


describe('Test /array Endpoint:', () => {
    it('Return an array', async done => {
        const response = await request.get('/array');
        expect(response.status).toBe(200);
        console.log(response.body.Array[response.body.Array.length - 1]);
        expect(response.body.Array[response.body.Array.length - 1]).toBe('c');
        done();
    });
});
