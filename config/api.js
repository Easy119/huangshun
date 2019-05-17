const request = require("request");
const h = require("./h");
const s = require("./s");
const a = require("./creatUrl");
const writeFileAsync = require("./asyncCreateFile");
// 加密算法
const crypto = require("crypto");
let md5Hex = crypto.createHash("md5");
let timer = new Date().getTime();
let str1 = "6cf2ab86e5d5429e66d4398115f2968c&" + timer + "&12574478&" + '{"sceneName":"query_buyer_show_4_merchant","paramMap":"{\"params\":\"{\\\"sourceType\\\":\\\"1\\\",\\\"bizCode\\\":\\\"buyershow\\\"}\",\"pagination\":{\"hasMore\":\"true\",\"pageNum\":2,\"pageSize\":\"20\",\"totalCount\":\"858\"}}"}';
md5Hex.update(str1,'utf-8');
// console.log(md5Hex.digest('hex')); 
// let token = "9df5ef7f93a9387a62ab57c981a5303b";
let token = "bcd787d6503f37891e056929d80721ef";
let appKey = "12574478";
let data = {"sceneName":"query_buyer_show_4_merchant","paramMap":"{\"params\":\"{\\\"sourceType\\\":\\\"1\\\",\\\"bizCode\\\":\\\"buyershow\\\"}\",\"pagination\":{\"hasMore\":\"true\",\"pageNum\":2,\"pageSize\":\"20\",\"totalCount\":\"861\"}}"};
// console.log(s(`${token}&${timer}&${appKey}&${JSON.stringify(data)}`)) ;
let md5_sign = s(`${token}&${timer}&${appKey}&${JSON.stringify(data)}`);

// md5Hex(token&t&appKey&data)
// const url = "https://h5api.m.taobao.com/h5/mtop.taobao.ugc.tql.facade/1.0/";
const abc = "https://h5api.m.taobao.com/h5/mtop.taobao.ugc.tql.facade/1.0/?jsv=2.4.12&appKey=12574478&t=1557889113669&sign=d716c68f816b537886b1d2fef9b10f47&api=mtop.taobao.ugc.tql.facade&v=1.0&type=jsonp&timeout=300000&timer=300000&AntiCreep=true&AntiFlood=true&dataType=jsonp&callback=mtopjsonp10&data=%7B%22sceneName%22%3A%22query_buyer_show_4_merchant%22%2C%22paramMap%22%3A%22%7B%5C%22params%5C%22%3A%5C%22%7B%5C%5C%5C%22sourceType%5C%5C%5C%22%3A%5C%5C%5C%221%5C%5C%5C%22%2C%5C%5C%5C%22bizCode%5C%5C%5C%22%3A%5C%5C%5C%22buyershow%5C%5C%5C%22%7D%5C%22%2C%5C%22pagination%5C%22%3A%7B%5C%22hasMore%5C%22%3A%5C%22true%5C%22%2C%5C%22pageNum%5C%22%3A2%2C%5C%22pageSize%5C%22%3A%5C%2220%5C%22%2C%5C%22totalCount%5C%22%3A%5C%22862%5C%22%7D%7D%22%7D";
const url = "https://h5api.m.taobao.com/h5/mtop.taobao.ugc.tql.facade/1.0/?jsv=2.4.12&appKey=12574478&t=1557900465685&sign=26e25e56f1aa875bc3dfa47f03ac328d&api=mtop.taobao.ugc.tql.facade&v=1.0&type=jsonp&timeout=300000&timer=300000&AntiCreep=true&AntiFlood=true&dataType=jsonp&callback=mtopjsonp10&data=%7B%22sceneName%22%3A%22query_buyer_show_4_merchant%22%2C%22paramMap%22%3A%22%7B%5C%22params%5C%22%3A%5C%22%7B%5C%5C%5C%22sourceType%5C%5C%5C%22%3A%5C%5C%5C%221%5C%5C%5C%22%2C%5C%5C%5C%22bizCode%5C%5C%5C%22%3A%5C%5C%5C%22buyershow%5C%5C%5C%22%7D%5C%22%2C%5C%22pagination%5C%22%3A%7B%5C%22hasMore%5C%22%3A%5C%22true%5C%22%2C%5C%22pageNum%5C%22%3A3%2C%5C%22pageSize%5C%22%3A%5C%2220%5C%22%2C%5C%22totalCount%5C%22%3A%5C%22858%5C%22%7D%7D%22%7D";
const str = "https://h5api.m.taobao.com/h5/mtop.taobao.ugc.tql.facade/1.0/?jsv=2.4.12&appKey=12574478&t=1557900756030&sign=26e25e56f1aa875bc3dfa47f03ac328d&api=mtop.taobao.ugc.tql.facade&v=1.0&type=jsonp&timeout=300000&timer=300000&AntiCreep=true&AntiFlood=true&dataType=jsonp&callback=mtopjsonp11&data=%7B%22sceneName%22%3A%22query_buyer_show_4_merchant%22%2C%22paramMap%22%3A%22%7B%5C%22params%5C%22%3A%5C%22%7B%5C%5C%5C%22sourceType%5C%5C%5C%22%3A%5C%5C%5C%221%5C%5C%5C%22%2C%5C%5C%5C%22bizCode%5C%5C%5C%22%3A%5C%5C%5C%22buyershow%5C%5C%5C%22%7D%5C%22%2C%5C%22pagination%5C%22%3A%7B%5C%22hasMore%5C%22%3A%5C%22true%5C%22%2C%5C%22pageNum%5C%22%3A3%2C%5C%22pageSize%5C%22%3A%5C%2220%5C%22%2C%5C%22totalCount%5C%22%3A%5C%22858%5C%22%7D%7D%22%7D";
const edf = "https://h5api.m.taobao.com/h5/mtop.taobao.ugc.tql.facade/1.0/?jsv=2.4.12&appKey=12574478&t=1557908657134&sign=ce867f38f7c8d2d8c274648d4bf011a8&api=mtop.taobao.ugc.tql.facade&v=1.0&type=jsonp&timeout=300000&timer=300000&AntiCreep=true&AntiFlood=true&dataType=jsonp&callback=mtopjsonp10&data=%7B%22sceneName%22%3A%22query_buyer_show_4_merchant%22%2C%22paramMap%22%3A%22%7B%5C%22params%5C%22%3A%5C%22%7B%5C%5C%5C%22sourceType%5C%5C%5C%22%3A%5C%5C%5C%221%5C%5C%5C%22%2C%5C%5C%5C%22bizCode%5C%5C%5C%22%3A%5C%5C%5C%22buyershow%5C%5C%5C%22%7D%5C%22%2C%5C%22pagination%5C%22%3A%7B%5C%22hasMore%5C%22%3A%5C%22true%5C%22%2C%5C%22pageNum%5C%22%3A2%2C%5C%22pageSize%5C%22%3A%5C%2220%5C%22%2C%5C%22totalCount%5C%22%3A%5C%22858%5C%22%7D%7D%22%7D";
// const cookie = "t=c0c4616bfeaa3a7f6d28eee1cb612cf3; cna=Wf89Fdy1ZFkCAdpPwIA1weHA; uc3=id2=&nk2=&lg2=; tracknick=; cookie2=1692e452be082ec6ae5506b2de4fd7fe; _tb_token_=eeeb863bb7a79; x=3299055857; skt=18ce52c8d4a8194d; sn=%E5%90%B1%E9%9F%B3%E6%97%97%E8%88%B0%E5%BA%97%3Anetwork1; unb=3327961988; csg=f90fdb80; v=0; _m_h5_tk=9df5ef7f93a9387a62ab57c981a5303b_1558008914878; _m_h5_tk_enc=5600e000bebc358abe13090dc5e484c8; uc1=lng=zh_CN&cookie14=UoTZ48xqVhc3fA%3D%3D; l=bBjCW1A4vVCpvJQLBOCg5uI8Lv_OSIRAguPRwCV2i_5Z01Y6dabOlpT2Aev6Vj5R_tYB4-WVu-e9-etXi; isg=BMrKoCK0othfyy5y-6_zKJZUG7asE0-Mb_9jhlQDdp2oB2rBPEueJRBxE3Pb98at";
// const cookie = "t=c0c4616bfeaa3a7f6d28eee1cb612cf3; cna=Wf89Fdy1ZFkCAdpPwIA1weHA; uc3=id2=&nk2=&lg2=; tracknick=; cookie2=1692e452be082ec6ae5506b2de4fd7fe; _tb_token_=eeeb863bb7a79; x=3299055857; skt=18ce52c8d4a8194d; sn=%E5%90%B1%E9%9F%B3%E6%97%97%E8%88%B0%E5%BA%97%3Anetwork1; unb=3327961988; csg=f90fdb80; v=0; _m_h5_tk=9df5ef7f93a9387a62ab57c981a5303b_1558008914878; _m_h5_tk_enc=5600e000bebc358abe13090dc5e484c8; uc1=lng=zh_CN&cookie14=UoTZ48xqVhc3fA%3D%3D; l=bBjCW1A4vVCpvJQLBOCg5uI8Lv_OSIRAguPRwCV2i_5Z01Y6dabOlpT2Aev6Vj5R_tYB4-WVu-e9-etXi; isg=BP39gdnVfcGEwdkrUC78ob2FDF83MjB1FA40_79CotSj9h8oh-hDv93gpCqw9kmk";
const signStr = `https://h5api.m.taobao.com/h5/mtop.taobao.ugc.tql.facade/1.0/?jsv=2.4.12&appKey=12574478&t=${timer}&sign=${md5_sign}&api=mtop.taobao.ugc.tql.facade&v=1.0&type=jsonp&timeout=300000&timer=300000&AntiCreep=true&AntiFlood=true&dataType=jsonp&callback=mtopjsonp9&data=%7B%22sceneName%22%3A%22query_buyer_show_4_merchant%22%2C%22paramMap%22%3A%22%7B%5C%22params%5C%22%3A%5C%22%7B%5C%5C%5C%22sourceType%5C%5C%5C%22%3A%5C%5C%5C%221%5C%5C%5C%22%2C%5C%5C%5C%22bizCode%5C%5C%5C%22%3A%5C%5C%5C%22buyershow%5C%5C%5C%22%7D%5C%22%2C%5C%22pagination%5C%22%3A%7B%5C%22hasMore%5C%22%3A%5C%22true%5C%22%2C%5C%22pageNum%5C%22%3A2%2C%5C%22pageSize%5C%22%3A%5C%2220%5C%22%2C%5C%22totalCount%5C%22%3A%5C%22861%5C%22%7D%7D%22%7D`;
const aaa = 'https://h5api.m.taobao.com/h5/mtop.taobao.ugc.tql.facade/1.0/?jsv=2.4.12&appKey=12574478&t=1557999551347&sign=fa1dd0280d7bdb25a405ea517879106d&api=mtop.taobao.ugc.tql.facade&v=1.0&type=jsonp&timeout=300000&timer=300000&AntiCreep=true&AntiFlood=true&dataType=jsonp&callback=mtopjsonp9&data=%7B%22sceneName%22%3A%22query_buyer_show_4_merchant%22%2C%22paramMap%22%3A%22%7B%5C%22params%5C%22%3A%5C%22%7B%5C%5C%5C%22sourceType%5C%5C%5C%22%3A%5C%5C%5C%221%5C%5C%5C%22%2C%5C%5C%5C%22bizCode%5C%5C%5C%22%3A%5C%5C%5C%22buyershow%5C%5C%5C%22%7D%5C%22%2C%5C%22pagination%5C%22%3A%7B%5C%22hasMore%5C%22%3A%5C%22true%5C%22%2C%5C%22pageNum%5C%22%3A2%2C%5C%22pageSize%5C%22%3A%5C%2220%5C%22%2C%5C%22totalCount%5C%22%3A%5C%22861%5C%22%7D%7D%22%7D';
// console.log(aaa);

const cookie = "t=c0c4616bfeaa3a7f6d28eee1cb612cf3; cna=Wf89Fdy1ZFkCAdpPwIA1weHA; uc3=id2=&nk2=&lg2=; tracknick=; cookie2=1692e452be082ec6ae5506b2de4fd7fe; _tb_token_=eeeb863bb7a79; x=3299055857; skt=18ce52c8d4a8194d; sn=%E5%90%B1%E9%9F%B3%E6%97%97%E8%88%B0%E5%BA%97%3Anetwork1; unb=3327961988; csg=f90fdb80; v=0; uc1=cookie14=UoTZ48xqVhc3fA%3D%3D&lng=zh_CN; l=bBjCW1A4vVCpvQkEBOCg5uI8Lv_tSIRAguPRwCV2i_5wy1Y5e8bOlp1Oyev6Vj5R_tYB4-WVu-e9-etXi; _m_h5_tk=bcd787d6503f37891e056929d80721ef_1558018869427; _m_h5_tk_enc=b7afcf4ba6b37a077b8245dc73da4b99; isg=BNvb5Hd0A7-Mv3_NwpTyr6__ajmFGO4rxgQSWc0YxlrZrPmOVYGAAe1qQgwijEeq";
module.exports = function(pageNum){
    let obj_url = a(pageNum,token);
    return new Promise((resolve,reject)=>{
        request({method:"get",url:obj_url,headers:{cookie}},(err, response, body)=>{
            if (!err && response.statusCode == 200) {
                resolve(body)
            } 
            reject(err)
        })
    })
}   