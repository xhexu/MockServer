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
	STATE: {
		type: Number,
		default: 0
	},
	_PROJECT: {
		type: Schema.Types.ObjectId,
		ref: 'Project'
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

module.exports = mongoose.model('waitAuditProject', schema)
