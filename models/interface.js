'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    OP_NAME: String,
    REMARK: {
        type: String,
        default: '还没有接口说明'
    },
    URL: String,
    IN_PARAMS: {
        type: String
    },
    OUT_PARAMS: {
        type: String
    },
    METHOD: {
        type: String
    },
    MOCK_ROLE: {
        type: String
    },
    STATE: {
        type: Number,
        default: 0
    },
    _PROJECT: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    CREATE_USER: {
        type: String,
        default: 'hx'
    },
    CREATE_TIME: {
        type: Date,
        default: Date.now
    },
    UPDATE_USER: {
        type: String,
        default: 'hx'
    },
    UPDATE_TIME: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Interface', schema)
