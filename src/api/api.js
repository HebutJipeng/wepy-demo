import {
    wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://api.kuaifawu.com/'

/**
 * 小程序接口
 * @params { query: Object, method: String }
 */

// 计算
const getResult = (params) => wxRequest(params, apiMall + 'h5/taxsaving/compute');
// 获取计算节税的企业数
const getCompany = (params) => wxRequest(params, apiMall + 'h5/taxsaving/getcount');
// 获取图片验证码
const getCaptcha = (params) => wxRequest(params, apiMall + 'h5/taxsaving/getcaptcha');
// 发送短信验证码
const getSMSCode = (params) => wxRequest(params, apiMall + 'h5/taxsaving/sendvcode');
// 添加手机号
const getVerification = (params) => wxRequest(params, apiMall + 'h5/taxsaving/addmobile');

module.exports = {
    getResult,
    getCompany,
    getCaptcha,
    getSMSCode,
    getVerification,
}
