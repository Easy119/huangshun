const fs = require("fs");
const pathLib = require("path");
const dataJson = require("../file/result.json");
const request = require("request");
const util = require("./asyncCreateFile");
const zlib = require("zlib"); // 下载zip 文件
let getPipe = (obj_url)=>{
    return new Promise((resolve,reject) =>{
        request({method:"get",url:obj_url},(err, response, body)=>{
            if (!err && response.statusCode == 200) {
                resolve(body)
            } 
            reject(err)
        })
    })
}
// 时间格式
let getTimerString = (timer) =>{
    return timer
}
let createImg = async (url,dest)=>{
    let imgPath = pathLib.resolve(__dirname,`../IMG/${dest}.jpg`);
    let writerStream = fs.createWriteStream(imgPath);
    return new Promise(resolve =>{
        request(url).pipe(writerStream).on("close",()=>{
            resolve("下载OK")
        })   
    })
}
let asyncMethods = async ()=>{
    let count = 1;
    for(let i = 0, max = dataJson.length; i < max; i++){
        let urlArray = dataJson[i].elements;
        for(let k = 0 ; k < urlArray.length;k++){
            let dest = dataJson[i].gmtCreate + "_" + k ;
            let is_ok = await createImg(urlArray[k].path,dest);
            count ++;
            console.log(`第 ${count} 图片 ${is_ok}`)
           
        }
    }
}
let creatZip = async ()=>{
    const gzip = zlib.createGzip();
    // const zip_path = path.resolve(__dirname,"../zip/img.zip");
    const img_dir_path = pathLib.resolve(__dirname,"../IMG/");
    // const inp = fs.createReadStream(zip_path); // 创建文件流
    // const out = fs.createWriteStream('input.txt.gz'); // 创建文件流
    // util.readFileImgAsync();
    fs.readdir(img_dir_path,(err,files)=>{
        if(err){
            console.warn(err);
        }
        console.log(files);
    })
    // inp.pipe(gzip).pipe(out);
}
creatZip()
// module.export.writeImg = ()=>{
    
// }