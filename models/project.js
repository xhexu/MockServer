'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    NAME: String,
    REMARK: {
        type: String,
        default: '没人认领的项目'
    },
    URL: String,
    MOCK_URL: String,
    RESPONSE_ROLE: String,
    STATE: {
        type: Number,
        default: 0
    },
    ICON: {
        type: String,
        default: 'images/icon.jpg'
    },
    CREATE_TIME: {
        type: Date,
        default: Date.now
    },
    UPDATE_TIME: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Project', schema)
