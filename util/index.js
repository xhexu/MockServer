'use strict'
const config = require('config')
const routerPrefix = config.get('routerPrefix')
exports.view = function * (next) {
    if(this.url.indexOf(routerPrefix.kyeeUI)>-1){
        this.body = yield new Promise(function(resolve){
            require('fs').readFile(require('path').join(__dirname,'../views/kyeeUI/index.html'), 'utf-8', function(err, data){
                resolve(data);
            })
        });
    }else if(this.url.indexOf(routerPrefix.kyeeMock)>-1){
        this.body = yield new Promise(function(resolve){
            require('fs').readFile(require('path').join(__dirname,'../views/mock/index.html'), 'utf-8', function(err, data){
                resolve(data);
            })
        });
    }
}