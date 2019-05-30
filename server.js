const Koa = require("koa");
const app = new Koa();
const path = require("path");
const koaStatic = require("koa-static");
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const Router = require('koa-router');
const router = new Router();
const dataJson = require("./file/result.json")
const fileFun = require("./config/writeFile");
app.use(koaStatic(path.resolve(__dirname,"./www")))


// router.get('/', async (ctx)=>{
//     ctx.body = '<h1>Welcome Realtime Server</h1>';
// })
io.on('connection', async function (socket) {
    let result = await fileFun.asyncMethods(dataJson);
    socket.emit('news', { hello: result });
    socket.on('my other event', async function (data) {
        console.log(data);
    });
  });
io.on('disconnect', function(data) {
    console.log('断开',data)
    socket.emit('c_leave','离开');
})
app
  .use(router.routes())
  .use(router.allowedMethods());
  server.listen(8084,()=>{
    console.log("run port 8084")
})