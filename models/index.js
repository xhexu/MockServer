'use strict'
const mongoose = require('mongoose')
const config = require('config')
mongoose.Promise = global.Promise
mongoose.connect(config.get('db'),{useMongoClient:true})
exports.Project = require('./project')
exports.Interface = require('./interface')
exports.waitAuditProject = require('./waitAuditProject')