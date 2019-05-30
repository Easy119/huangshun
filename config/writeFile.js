const fs = require("fs");
const pathLib = require("path");
const request = require("request");
const util = require("./asyncCreateFile");
const zlib = require("zlib"); // 下载zip 文件
const localZip = require("zip-local");
const moment = require("moment");
moment.locale('zh-cn');

let createImg = async (url, dest) => {
    let imgPath = pathLib.resolve(__dirname, `../IMG/${dest}.jpg`);
    let writerStream = fs.createWriteStream(imgPath);
    return new Promise(resolve => {
        request(url).pipe(writerStream).on("close", () => {
            resolve("下载成功")
        })
    })
}
let asyncMethods =  (dataJson) => { // 异步下载图片到本地
    return new Promise(async (resolve, reject) => {
        let count = 0;
        let allMax = 0;
        for (let i = 0, max = dataJson.length; i < max; i++) {
            let urlArray = dataJson[i].elements;
            allMax += urlArray.length;
            for (let k = 0, urlMax = urlArray.length; k < urlMax; k++) {
                let timer = moment(Number(dataJson[i].gmtCreate)).format('YYYY-MM-DD-HH-mm-ss');
                let nickName = dataJson[i].userInfo.userNick.replace(/\*/,"某");
                nickName.replace(/\?/,"某");
                // let dest = "昵称" + "_" + nickName + "_" + "id_" + dataJson[i].refId + "_" + "时间_" + timer + "第" + (k+1) + "张";
                let dest = "昵称" +  "_" + "id_" + dataJson[i].refId + "_" + "时间_" + timer + "第" + (k+1) + "张";
                let is_ok = await createImg(urlArray[k].path, dest);
                count++;
                console.log(`一共${allMax}张图片,第 ${count} 图片 ${is_ok}`);
                // resolve(`第 ${count} 图片 ${is_ok}`);
                // console.log(allMax,count)
            }
        }
        if (count == allMax) {
            resolve("全部下载成功")
        }
    })

}

let creatZip = async () => { // 文件打包同步
    const zip_path = pathLib.resolve(__dirname, "../zip/img.zip");
    const img_dir_path = pathLib.resolve(__dirname, "../IMG/");
    localZip.sync.zip(img_dir_path).compress().save(zip_path);
}
let asyncCreatZip = () => {
    const img_dir_path = pathLib.resolve(__dirname, "../IMG/");
    const zip_path = pathLib.resolve(__dirname, "../zip/img.zip");
    return new Promise((resolve, reject) => {
        localZip.zip(img_dir_path, function (error, zipped) {
            if (!error) {
                zipped.compress(); // compress before exporting
                var buff = zipped.memory(); // get the zipped file as a Buffer
                // or save the zipped file to disk
                zipped.save(zip_path, function (error) {
                    if (!error) {
                        resolve("saved successfully !");
                    }
                    reject("打包失败")
                });
            }
        })
    })

}
module.exports = {
    asyncMethods,
    asyncCreatZip
}