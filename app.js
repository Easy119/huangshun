const Koa = require("koa");
const server = new Koa();
const koaStatic = require("koa-static");
var Router = require('koa-router');
var router = new Router();
const path = require("path");
const axios = require("./config/api");
const w_path = path.resolve(__dirname,"./file/result.txt");
const r_path = path.resolve(__dirname,"./file/result.json");
const util = require("./config/asyncCreateFile");
const jsonFrom = require("./config/getJson");

router.get("/test",async (ctx)=>{
  //  let result  = await axios(6);
  //  let writeResult = await util.writeFileAsync(f_path,result);
  //  jsonFrom.getJson();
   for(let i = 2;i < 10 ; i++){
      let result  = await axios(6);
      let writeResult = await util.writeFileAsync(w_path,result);
      jsonFrom.getJson();
   }
   let result = await util.readFileAsync(r_path);
   ctx.body = JSON.stringify(result);
})
server
  .use(router.routes())
  .use(router.allowedMethods());
server.listen(8083,()=>{
    console.log("server is running 8083")
})