'use strict'
const _ = require('underscore')
const m = require('../models')
const Interface = m.Interface

exports.insertMany = function (obj) {
    return Interface.insertMany(obj)
}

exports.newAndSave = function (obj) {
    const entity = new Interface(obj)
    return entity.save()
}
exports.findOne = function (query,opt) {
    return Interface.findOne(query,{},opt)
}
exports.find = function (query,opt) {
    return Interface.find(query,{},opt)
}
exports.queryByPage = function (query,opt,pageSize,Count) {
    return Interface.find(query,{},opt).limit(parseInt(pageSize)).skip(parseInt(Count))
}
exports.count = function (query) {
    return Interface.count(query,function () {})
}
exports.getById = function (id) {
    return Interface.findById(id).populate('PROJECT')
}
exports.updateById2 = function (intface){
    return Interface.update({
        _id: intface._id
    }, {
        $set: intface
    })
}
exports.updateById = function (intface){
    const keys = _.keys(intface), obj = {}
    _.each(keys,function (k) {
        obj[k] = intface[k]
    })
    return Interface.update({
        _id: intface._id
    }, {
        $set: obj
    })
}
exports.removeById = function (id){
    return Interface.remove(id)
}