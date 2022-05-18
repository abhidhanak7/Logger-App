const mongoose = require('mongoose')
const client = require('../../db/redis')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const Message = require('../../models/message')


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

const messageOne = [
    {
        "message": "hello world how are you all!!"
    }
]

const setUpDatabase = async () => {
    await User.deleteMany()
    const userAfterSave = await new User(userOne).save()
    // await console.log(await userAfterSave)
    const userKey = 'user_' + userAfterSave.username
    await client.json.set(userKey, '.', { id:userAfterSave._id, username: userAfterSave.username, password: userAfterSave.password, requestCounter: 0 });
    await client.json.get(userKey)
    await Message.deleteMany()
    await new Message(messageOne).save()
    return userAfterSave
    // await new User(userTwo).save()
}


module.exports = {setUpDatabase, userOne, userTwo}