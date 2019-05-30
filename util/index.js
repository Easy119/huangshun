const data = require("../file/result.json");
const resultData =  [
    {
        "gmtCreate": "1553339183000",
        "id": "221948531802",
        "itemId": "554782482696",
        "refId": "221948531802",
        "sellerId": "3299055857",
        "sourceType": "1",
        "title": "参加女神节活动买的，休假回来后才收货，品质不错，第一次在网上购买大件家具，往常都是到实体店选购的，原本老爸还不放心，安装后还算满意。就是床安装师傅花了点时间，主要是液压杆安装要注意两个床边位置是有要求的，不然液压杆装了后压不下去。",
        "top": "0",
        "elite": "true",
        "display": "true",
        "elements": [
            {
                "id": "1485606521486744900",
                "cover": "true",
                "type": "pic",
                "width": "1242",
                "height": "932",
                "videoPath": null,
                "path": "https://gw3.alicdn.com/tfscom/tuitui/O1CN01877ikE1lk5nuXmAWC_!!0-rate.jpg"
            },
            {
                "id": "1485606523808095770",
                "cover": "false",
                "type": "pic",
                "width": "1242",
                "height": "1656",
                "videoPath": null,
                "path": "https://gw3.alicdn.com/tfscom/tuitui/O1CN019jiXeh1lk5nx4sJvG_!!0-rate.jpg"
            }
        ],
        "itemInfo": {
            "itemId": "554782482696",
            "picUrl": "https://gw3.alicdn.com/tfscom/tuitui/i2/3299055857/O1CN01pLmD3l1t8YHll4ZGy_!!0-item_pic.jpg",
            "title": "吱音大度床 实木床双人床现代中式橡木收纳1.8米主卧箱体床储物床"
        },
        "userInfo": {
            "userNick": "e***w",
            "userLogo": "https://gw.alicdn.com/tfs/TB14KBUQFXXXXXxXFXXXXXXXXXX-210-210.png",
            "userUrl": null
        },
        "forwardInfo": {
            "isForwardToFeiZhu": "false"
        },
        "toWeitaoInfo": {
            "isForward": "false"
        },
        "contentScene": {
            "source": ""
        },
        "contentAward": {
            "hasAward": "false"
        }
    }
]
let excleArray = [];
let urlArray = [];
data.forEach(item => {
    let discussObj = {
        title:item.title,
        timeStamp: item.gmtCreate,
        userInfo:item.userInfo
    }
    let urlObj = {
        imgArray:item.elements,
        userInfo:item.userInfo
    }
    excleArray.push(discussObj);
    urlArray.push(urlObj);
});
console.log(excleArray)
console.log(urlArray)