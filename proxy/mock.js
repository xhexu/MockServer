'use strict'

const m = require('../models')
const MockModel = m.Mock

exports.newAndSave = function (obj) {
    // const mock = new MockModel()
    // mock.description = obj.description
    //     mock.mode = obj.mode
    //     mock.method = obj.method
    //     mock.url = obj.url
    // return mock.save()
    return MockModel.insertMany(obj)
}
