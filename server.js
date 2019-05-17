const Koa = require("koa");
const server = new Koa();
const koaStatic = require("koa-static");
const path = require("path");
server.use(koaStatic(path.join(__dirname,"./static")));
server.use(async (ctx)=>{
    ctx.body = "html";
})
server.listen(2001,()=>{
    console.log("server is running 2001")
})