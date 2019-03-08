'use strict'
const path = require('path')

const errorLogPath = path.resolve(__dirname,"../logs/error/error");

const responseLogPath = path.resolve(__dirname,"../logs/response/response");

module.exports = {
    appenders:{
        errorLogger:{
            "category":"errorLogger",             //logger名称
            "type": "dateFile",                   //日志类型
            "filename": errorLogPath,             //日志输出位置
            "alwaysIncludePattern":true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd.log"       //后缀，每小时创建一个新的日志文件
        },
        //响应日志
        resLogger:
            {
                "category":"resLogger",
                "type": "dateFile",
                "filename": responseLogPath,
                "alwaysIncludePattern":true,
                "pattern": "-yyyy-MM-dd.log"
            },
        console: { type: 'console' }
    },
    categories:{
        errorLogger:{appenders: ['errorLogger'], level: 'info' },
        resLogger:{appenders: ['resLogger'], level: 'info' },
        default: { appenders: ['console'], level: 'info' }
    },
}
