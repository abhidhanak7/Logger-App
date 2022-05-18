const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    },
    userMessage: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,

    },
    requestId: {
        type: String,
    },
    createdTime: {
        type: Date,
        default: new Date()
    }

})
const Message = mongoose.model('Message', messageSchema)

module.exports = Message