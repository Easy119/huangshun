const s = require("./s"); // 引入算法

module.exports = (pageNum,token)=>{
    let timer = new Date().getTime();
    let appKey = "12574478";
    let data = {"sceneName":"query_buyer_show_4_merchant","paramMap":`{\"params\":\"{\\\"sourceType\\\":\\\"1\\\",\\\"bizCode\\\":\\\"buyershow\\\"}\",\"pagination\":{\"hasMore\":\"true\",\"pageNum\":${pageNum},\"pageSize\":\"20\",\"totalCount\":\"861\"}}` };
    let data_1 = {"sceneName":"query_buyer_show_4_merchant","paramMap":"{\"params\":\"{\\\"sourceType\\\":\\\"1\\\",\\\"bizCode\\\":\\\"buyershow\\\"}\"}"};
    let md5_sign = pageNum == 1 ? s(`${token}&${timer}&${appKey}&${JSON.stringify(data_1)}`) :  s(`${token}&${timer}&${appKey}&${JSON.stringify(data)}`);
    const signStr = `https://h5api.m.taobao.com/h5/mtop.taobao.ugc.tql.facade/1.0/?jsv=2.4.12&appKey=12574478&t=${timer}&sign=${md5_sign}&api=mtop.taobao.ugc.tql.facade&v=1.0&type=jsonp&timeout=300000&timer=300000&AntiCreep=true&AntiFlood=true&dataType=jsonp&callback=mtopjsonp9&data=%7B%22sceneName%22%3A%22query_buyer_show_4_merchant%22%2C%22paramMap%22%3A%22%7B%5C%22params%5C%22%3A%5C%22%7B%5C%5C%5C%22sourceType%5C%5C%5C%22%3A%5C%5C%5C%221%5C%5C%5C%22%2C%5C%5C%5C%22bizCode%5C%5C%5C%22%3A%5C%5C%5C%22buyershow%5C%5C%5C%22%7D%5C%22%2C%5C%22pagination%5C%22%3A%7B%5C%22hasMore%5C%22%3A%5C%22true%5C%22%2C%5C%22pageNum%5C%22%3A${pageNum}%2C%5C%22pageSize%5C%22%3A%5C%2220%5C%22%2C%5C%22totalCount%5C%22%3A%5C%22861%5C%22%7D%7D%22%7D`;
    const signStr_1 = `https://h5api.m.taobao.com/h5/mtop.taobao.ugc.tql.facade/1.0/?jsv=2.4.12&appKey=12574478&t=${timer}&sign=${md5_sign}&api=mtop.taobao.ugc.tql.facade&v=1.0&type=jsonp&timeout=300000&timer=300000&AntiCreep=true&AntiFlood=true&dataType=jsonp&callback=mtopjsonp8&data=%7B%22sceneName%22%3A%22query_buyer_show_4_merchant%22%2C%22paramMap%22%3A%22%7B%5C%22params%5C%22%3A%5C%22%7B%5C%5C%5C%22sourceType%5C%5C%5C%22%3A%5C%5C%5C%221%5C%5C%5C%22%2C%5C%5C%5C%22bizCode%5C%5C%5C%22%3A%5C%5C%5C%22buyershow%5C%5C%5C%22%7D%5C%22%7D%22%7D`;
    return pageNum == 1 ?signStr_1 : signStr
}
