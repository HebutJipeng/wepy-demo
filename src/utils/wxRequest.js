import wepy from 'wepy';
import util from './util';
import tip from './tip'
import md5 from "./md5";

const API_SECRET_KEY = 'jF4kWopUn67d'
const TIMESTAMP = util.getTimeStamp()

const wxRequest = async(params = {}, url) => {
    tip.loading();
    let data = params.query || {};
    let SIGN = util.transKeyValue(data);
    let TOKEN = md5.hex_md5(SIGN + TIMESTAMP + API_SECRET_KEY);

    data.token = TOKEN;
    data.timestamp = TIMESTAMP;

    // 请求后台请求头需为： "Content-Type": "application/x-www-form-urlencoded"
    // 如果是json 则接受不到数据

    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    tip.loaded();
    return res;
};

module.exports = {
    wxRequest
}
