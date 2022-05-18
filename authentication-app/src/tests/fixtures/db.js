const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')


const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    username: 'abhishek',
    password: 'abhi123'
}
const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    username: 'hello',
    password: 'world'
}

const setUpDatabase = async () => {
    await User.deleteMany()
    await new User(userOne).save()
    // await new User(userTwo).save()
}


module.exports = {setUpDatabase, userOne, userTwo}