const request = require('supertest');
const server = require('./server');

describe('LOGIN', () => {
    describe('GET /', () => {
        it('it returns status of 200 ok', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        });

        it('should return statusType of 2', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.statusType).toBe(2)
            })
        });

        it('it returns "WE ARE UP AND RUNNING!!"', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/text\/html/i)
            })
        });

        it('it returns "WE ARE UP AND RUNNING!!"', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.text).toBe('WE ARE UP AND RUNNING!!')
            })
        });
    });
})
