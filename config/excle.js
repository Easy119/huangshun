const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require("path");

var data = [
    {
        name: 'sheet1',
        data: [
            [
                'ID',
                'Name',
                'Score'
            ],
            [
                '1',
                'Michael',
                '99'

            ],
            [
                '2',
                'Jordan',
                '98'
            ]
        ]
    }
]

// 写xlsx
// var buffer = xlsx.build(data);
// fs.writeFile(path.resolve(__dirname, "../excle/huangshun.xls"), buffer, function (err) {
//     if (err)
//         throw err;
//     console.log('Write to xls has finished');

//     // 读xlsx
//     // var obj = xlsx.parse("./" + "resut.xls");
//     // console.log(JSON.stringify(obj));
// }
// );
module.exports.toExcle = (dataJson) => {
    console.log(dataJson.length);
    return new Promise((resolve, reject) => {
        var buffer = xlsx.build(dataJson);
        fs.writeFile(path.resolve(__dirname, "../www/excle/huangshun.xls"), buffer, function (err) {
            if (err){
                throw err;
            }
            console.log('Write to xls has finished');
            resolve(true)
        }
        );
    })
}