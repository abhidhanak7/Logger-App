const request = require('supertest')
const app = require('../../app')
const {setUpDatabase, userOne, userTwo} = require('./fixtures/db')

setUpDatabase()

test('Register user', async () => {
    const response = await request(app)
        .post('/user/register').send(userTwo)
        .expect(201)
        // console.log(response)
    
})

test('can not Register user with existing username', async () => {
    const response = await request(app)
        .post('/user/register').send(userOne)
        .expect(409)
    
})

test('can not Register user with username length more then 15', async () => {
    const response = await request(app)
        .post('/user/register').send({
            "username": "alpashdjsjjsjhdjjhscohauiovbod",
            "password": "ahhvqorjvb454aasa"
        })
        .expect(400)
    
})

test('can not Register user with username length less then 5', async () => {
    const response = await request(app)
        .post('/user/register').send({
            "username": "hello",
            "password": "world"
        })
        .expect(400)
    
})


test('can not Register user with password length more then 12', async () => {
    const response = await request(app)
        .post('/user/register').send({
            "username": "alphaxhere",
            "password": "ahahahahahahahaha"
        })
        .expect(400)
    
})

test('can not Register user with password length less then 6', async () => {
    const response = await request(app)
        .post('/user/register').send({
            "username": "hibyheloo",
            "password": "kemcho"
        })
        .expect(400)
    
})

test('login user', async () => {
    const response = await request(app)
        .post('/user/login').send(userTwo)
        .expect(200)
        // console.log(response)
    
})

test('can not login user with wrong username', async () => {
    const response = await request(app)
        .post('/user/login').send({
            "username": "sdljcjbv",
            "password": "evoih978v"
        })
        .expect(400)
        // console.log(response)
    
})

test('can not login user with wrong password', async () => {
    const response = await request(app)
        .post('/user/login').send({
            "username": "sdljcjbv",
            "password": "evoih978v"
        })
        .expect(400)
        // console.log(response)
    
})


