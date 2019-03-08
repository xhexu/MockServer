'use strict'

const m = require('../models')
const MockTest = m.MockTest

exports.save = function (obj) {

    console.log('xxxxxxxxxxxxxxxxxxx')
    const test = new MockTest()
    test.text = obj.text
    test.url = obj.url
    return test.save()
}
