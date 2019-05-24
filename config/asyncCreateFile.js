const path = require("path");
const fs = require("fs");
const f_path = path.resolve(__dirname,"../file/result.txt");
module.exports.writeFileAsync = (f_path,content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(f_path, content, function (err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}
module.exports.readFileAsync = (f_path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(f_path, {
            encoding: "utf-8"
        }, (err, content) => {
            if (err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}

module.exports.readFileImgAsync = (f_path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(f_path,'binary', (err, content) => {
            if (err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}