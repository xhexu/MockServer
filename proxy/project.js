'use strict'

const m = require('../models')
const _ = require('underscore')
const Project = m.Project
const waitAuditProject = m.waitAuditProject

exports.insertMany = function (obj) {
    return Project.insertMany(obj)
}

exports.newAndSave = function (obj) {
    const entity = new Project(obj)
    return entity.save()
}
exports.findOne = function (query,opt) {
    return Project.findOne(query,{},opt)
}
exports.findOneWAP = function (query,opt) {
	return waitAuditProject.findOne(query,{},opt)
}
exports.find = function (query,opt) {
    return Project.find(query,{},opt)
}
exports.findWAP = function (query,opt) {
	return waitAuditProject.find(query,{},opt).populate('PROJECT')
}
exports.getById = function (projectId) {
    return Project.findById({_id:projectId})
}
exports.updateById2 = function (project){
    return Project.update({
        _id: project._id
    }, {
        $set: project
    })
}
exports.updateById = function (project){
    const keys = _.keys(project), obj = {}
    _.each(keys,function (k) {
        obj[k] = project[k]
    })
    return Project.update({
        _id: project._id
    }, {
        $set: obj
    })
}

exports.removeById = function (condition) {
    return Project.remove(condition)
}

exports.insertIntoWAP = function (obj) {
    const WAPentity = new waitAuditProject(obj);
    return WAPentity.save();
}

exports.removeWAP = function (condition) {
	return waitAuditProject.remove(condition)
}
