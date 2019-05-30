const Koa = require("koa");
const server = new Koa();
const koaStatic = require("koa-static");
var Router = require('koa-router');
// 引入模块
const bodyParser = require('koa-bodyparser');
server.use(bodyParser());
var router = new Router();
const path = require("path");
const axios = require("./config/api");
const w_path = path.resolve(__dirname, "./file/result.txt");
const r_path = path.resolve(__dirname, "./file/result.json");
const util = require("./config/asyncCreateFile");
const jsonFrom = require("./config/getJson");
const fileFun = require("./config/writeFile");
// const dataJson = require("./file/result.json")
const excleFun = require("./config/excle");
// const excleDataJson = require("./file/excel.json")
// const allResult = require("./file/result.json");
// 静态文件
server.use(koaStatic(path.resolve(__dirname,"./www")));
// 获取cookie 
let getCookie = (cookie) => {
  const array = cookie.split("_m_h5_tk=");
  const getToken = array[1].substr(0, array[1].indexOf("_"));
  return getToken
}
let allImgData = [];
router.post("/getList", async (ctx) => { // 获取图片资源链接
  let { cookie, pageStartNum ,pageNum } = ctx.request.body;
  pageStartNum = Number(pageStartNum);
  pageNum = Number(pageNum);
  // 清空文件内容
  await util.writeFileAsync(w_path, "");
  await util.writeFileAsync(r_path, []);
  let getToken = getCookie(cookie); // 从cookie里面获取token
  allImgData = [];
  for (let i = pageStartNum; i < pageNum; i++) {
    let result = await axios(i,getToken,cookie); // 获取数据字符串
    let resultJson = await jsonFrom.creatDataJson(result); // 整理为json对象
    resultJson.forEach(item =>{
      allImgData.push(item)
    })
    let writeResult = await util.writeFileAsync(w_path, result);
    jsonFrom.getJson(); // 写入文件 并合并文件
  }
  // 下载图片
  let downloadResult = await fileFun.asyncMethods(allImgData); // 异步下载图片到本地
  let result = await util.readFileAsync(r_path);
  ctx.body = JSON.stringify({
    dataList:result,
    downloadStatus:downloadResult,
    flag:true
  });
})
// router.get("/uploadImg",async (ctx)=>{
//    let result = await fileFun.asyncMethods(dataJson); // 异步下载图片到本地
//    ctx.body = result;
// })
// router.get("/uploadZip",async (ctx) =>{
//     let result = await fileFun.asyncCreatZip();
//     console.log(result)
//     ctx.body  = "result";
// })
router.get("/uploadExcle", async (ctx) =>{
   // 获取excle表格数据
   let excleArray = [["title","refId" ,"userNick","userLogo","gmtCreate"]];
   allImgData.forEach((item) =>{
       let obj = [
           item.title,
           item.refId,
           item.userInfo.userNick,
           item.userInfo.userLogo,
           new Date(Number(item.gmtCreate)).toLocaleString()
       ]
       excleArray.push(obj);
   })
  //  拼接数据
  let finishData = [
      {
        name: 'sheet1',
        data: excleArray
      }
  ];
  let result = await excleFun.toExcle(finishData);
    if(result){
      ctx.body = "/excle/huangshun.xls";
    } else {
      ctx.body = "导出表格失败";
    }
})
server
  .use(router.routes())
  .use(router.allowedMethods());
server.listen(8083, () => {
  console.log("server is running 8083")
})