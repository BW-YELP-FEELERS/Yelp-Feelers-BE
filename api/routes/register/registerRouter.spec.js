const request = require('supertest');
const db = require('../../../data/dbConfig');
const server = require('../../server');
const yfusersdb = require('./registerModel');
const validuser = require('../../../utils/middleware/validateUser')

describe('/register tests', () => {
    beforeEach(async () => {
        await db("yfusers").truncate();
    });
    const userlogin = {username:"test50", password: "test" }
    describe('POST /register', () => {
        it('it returns status of 200 ok', () => {
            return request(server)
            .post('/register')
            .send(userlogin)
            .then(res => {
                expect(res.status).toBe(201)
            })
        });

        it('should return statusType of 2', () => {
            return request(server)
            .post('/register')
            .then(res => {
                expect(res.statusType).toBe(4)
            })
        });

        it('it returns "WE ARE UP AND RUNNING!!"', () => {
            return request(server)
            .post('/register')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })
        });

        it('it returns "WE ARE UP AND RUNNING!!"', () => {
            return request(server)
            .post('/register')
            .send(userlogin)
            .then(res => {
                expect(res.text).toContain('Successfully registered as: ')
            })
        });

        it('it returns "WE ARE UP AND RUNNING!!"', () => {
            const valuetype = 'number'
            return request(server)
            .post('/register')
            .send(userlogin)
            .then(res => {
                expect(typeof res.body.newuser.id).toBe(valuetype)
            })
        });

        it('it returns "WE ARE UP AND RUNNING!!"', () => {
            const valuetype = 'string'
            return request(server)
            .post('/register')
            .send(userlogin)
            .then(res => {
                expect(typeof res.body.newuser.username).toBe(valuetype)
            })
        });
    });
})
