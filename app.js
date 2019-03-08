const app = require('koa')(),
    logger = require('koa-logger'),
    json = require('koa-json'),
    views = require('koa-views'),
    onerror = require('koa-onerror'),
    validate = require('koa-validate'),
    cors = require('koa-cors'),
    favicon = require('koa-favicon'),
    bodyParser = require('koa-bodyparser'),
    path = require('path'),
    routerConfig = require('./router-config'),
    middleware = require('./middlewares');

validate(app);
onerror(app);
app.use(favicon(path.join(__dirname, '/public/images/icon.png')));
app.use(require('koa-static')(path.join(__dirname , '/views')));
app.use(require('koa-static')(path.join(__dirname , '/views/kyeeUI')));
app.use(require('koa-static')(path.join(__dirname , '/views/mock')));

app.use(views('views',{
    root:__dirname + '/views',
    map:{
        html:'ejs'
    }
}));
app.use(cors());
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(middleware.commmon);

app.use(middleware.onerror);
app.use(routerConfig.mock.routes());
app.use(routerConfig.mock.allowedMethods());
app.use(routerConfig.api.routes());
app.use(routerConfig.api.allowedMethods());

//----服务无关项目 start----
app.use(routerConfig.kyeeUI.routes());
app.use(routerConfig.kyeeUI.allowedMethods());
app.use(routerConfig.mockView.routes());
app.use(routerConfig.mockView.allowedMethods());
//----服务无关项目 end----
module.exports = app;
