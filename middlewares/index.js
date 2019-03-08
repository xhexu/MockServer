/**
 * auth:hx
 * 1.系统异常处理
 * 2.错误日志打印
 * 3.系统返回数据定义
 */
'use strict'
const _ = require('underscore')
const moment = require('moment')
const config = require('config')
const routerPrefix = config.get('routerPrefix')
const logUtil = require('../util/logUtil')

global._ = _
global._moment = moment

exports.commmon = function *(next) {
    const codeMap = {
        '-1': 'fail',
        '200': 'success',
        '401': 'token error',
        '500': 'server error'
    }
    this.util = {
        resuccess (message,data, code) {
            return {
                timeStamp: moment().format('YYYY-MM-DD HH:mm:ss'),
                success: true,
                message: message || codeMap[code || '200'] || codeMap['200'],
                data: data || []
            }
        },
        resuccessLimit (message,data,total,code) {
            return {
                timeStamp: moment().format('YYYY-MM-DD HH:mm:ss'),
                success: true,
                message: message || codeMap[code || '200'] || codeMap['200'],
                total: total,
                data: data || []
            }
        },
        refail (message, data, code) {
            if(_.isArray(data)){
                message = message+'\n';
                _.each(data,function (k,i) {
                    message+=_.map(k,function (n,key) {
                        return n
                    })+'\n'
                })
            }
            return {
                timeStamp: moment().format('YYYY-MM-DD HH:mm:ss'),
                success: false,
                message: message || codeMap[code || '-1'] || codeMap['-1'],
                data: data || []
            }
        },
        checkMockRole (data) {
            try{
                const Mock = require('mockjs')
                const { VM } = require('vm2')
                const vm = new VM({
                    sandbox: {
                        Mock: Mock
                    }
                })
                vm.run('Mock.mock('+data+')')
            }catch (err){
                throw new Error(err.message)
            }
        },
        checkJsonRole (data) {
            try{
                JSON.parse(data)
            }catch (err){
                throw new Error(err.message)
            }
        }
    }
    yield next
}

exports.onerror = function *(next){
    const start = new Date;
    var ms;
    try {
        yield* next;
        ms = new Date - start;
        logUtil.logResponse(this,ms);
        this.body.responseTime = ms+'毫秒';
        console.log('%s %s - %s', this.method, this.url, ms);
    } catch (e) {
        ms = new Date - start;
        logUtil.logError(this,e,ms);
        this.status = 500
        this.body = e.message
    }
    if(parseInt(this.status) === 404){
        var text = yield getErrorPage('404.html')
        this.body = text
    }
}

function getErrorPage(pageName){
    return new Promise(function(resolve){
        require('fs').readFile(require('path').join(__dirname,'../views/'+pageName), 'utf-8', function(err, data){
            resolve(data)
        })
    });
}
