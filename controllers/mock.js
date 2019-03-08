'use strict'

const config = require('config')
const _ = require('underscore')
const Mock = require('mockjs')
const { VM } = require('vm2')
const p = require('../proxy')
const IntfaceProxy = p.Interface
const ProjectProxy = p.Project

let mockRole = {};
//第三方调用接口
exports.getMock = function * () {
    const mockRole = yield resolveParams(this.url)
    if(mockRole){
        Mock.Handler.function = function (options) {
            options.Mock = Mock
            return options.template.call(options.context.currentContext, options)
        }.bind(this)
        const vm = new VM({
            sandbox: {
                Mock: Mock
            }
        })
        let data = vm.run('Mock.mock('+mockRole+')')
        //如果模拟生成多组数据，模拟规则属性名为‘key’
        data = data.hasOwnProperty('key')?data.key:data;
        //组装返回值  todo...
        let role = getMockRole(),responseObj = {}
        if(role){
            role = JSON.parse(role)
            let keys = _.allKeys(role)
            _.each(keys,function (k) {
                if(typeof role[k] === 'string'){
                    if(role[k].toLowerCase()==='array'){
                        responseObj[k] = data
                    }else if(role[k].toLowerCase()==='object'){
                        let keys = _.allKeys(role[k])
                        _.each(keys,function (key) {
                            if(role[key].toLowerCase()==='array'){
                                responseObj[key] = data
                            }else if(role[k].toLowerCase()==='string'){
                                responseObj[key] = '数据组装成功'
                            }else if(role[key].toLowerCase() === 'boolean'){
                                responseObj[key] = true
                            }
                        })
                    }else if(role[k].toLowerCase()==='string'){
                        responseObj[k] = '数据组装成功'
                    }else if(role[k].toLowerCase() === 'boolean'){
                        responseObj[k] = true
                    }
                }else if(typeof role[k] === 'object'){
                    let keys = _.allKeys(role[k])
                    responseObj[k] = {}
                    _.each(keys,function (key) {
                        if(role[k][key].toLowerCase()==='array'){
                            responseObj[k][key] = data
                        }else if(role[k][key].toLowerCase()==='string'){
                            responseObj[k][key] = '数据组装成功'
                        }else if(role[k][key].toLowerCase() === 'boolean'){
                            responseObj[k][key] = true
                        }
                    })
                }
            })
            this.body = responseObj
        }else{
            this.body = this.util.resuccess('数据组装成功',data)
        }
        return
    }
    this.body = this.util.refail('模拟数据获取失败')
}

/**
 * 模拟请求地址：
 *  http://模拟服务地址:端口/mock/项目(MOCK_URL)/接口(URL)
 * @param url
 * @returns {Promise}
 */
function resolveParams (url){
    return new Promise((resolve,reject) => {
        if(url&&url.indexOf('mock')>-1&&url.indexOf('/')>-1){
            const urlObj = url.substr(1,url.length).split('/')
            //0:mock ，1：项目mock地址， 2：接口mock地址
            if(urlObj.length>=3){
                //校验项目
                ProjectProxy.findOne({MOCK_URL:'/'+urlObj[1]}).then(function (project) {
                    if(project){
                        setMockRole(project.RESPONSE_ROLE)
                        //校验接口
                        IntfaceProxy.findOne({URL:'/'+urlObj[2]}).then(function (intface) {
                            if(intface){
                                //模拟规则
                                resolve(intface.MOCK_ROLE)
                            }else{
                                reject('模拟数据请求不规范，请校验URL')
                            }
                        })
                    }else{
                        reject('模拟数据请求不规范，请校验URL')
                    }
                })
            }else{
                reject(new Error('模拟数据请求不规范，请校验URL'))
            }
        }else{
            reject('模拟数据请求不规范，请校验URL')
        }
    })
}

function setMockRole(role){
    mockRole = role;
}

function getMockRole() {
    return mockRole
}