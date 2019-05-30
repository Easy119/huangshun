const path = require("path");
const fs = require("fs");
const request = require("request");
const dataJson = require("../file/result.json");

let getImg = ()=>{
    for(let i = 0;i< dataJson.length;i++){
        let imgUrlArray = dataJson[i].elements;
        let imgName = dataJson[i].gmtCreate;
        let imgLocalPath = path.resolve(__dirname,`../IMG/${imgName}.jpg`);
        // console.log(imgLocalPath);
        for(let j = 0 ; j < imgUrlArray.length ;j++){
            let imgLocalPath = path.resolve(__dirname,`../IMG/${imgName}_${j}.jpg`);
            let result_url = imgUrlArray[j].path;
            request(result_url).pipe(fs.createWriteStream(imgLocalPath));
        }
        // for(const url of imgUrlArray){
        //     let result_url = url.path;
        //     request(result_url).pipe(fs.createWriteStream(imgLocalPath));
        // }
        // let imgLocalPath = path.resolve(__dirname,`../IMG/`)
    }
}
getImg();