/*
 * @Date: 2022-06-27 08:59:27
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-06-27 09:38:49
 * @Description: 全局应用实例
 */
import request from "/utils/http/index";
import user from "/utils/User/user";
import store from "/utils/Storage/storage";
App({
	globalData: {
		imgPath: "https://1485642186.oss-cn-hangzhou.aliyuncs.com/image",
		clientId: "SPuggfCQVFTlLohuRF4NPQr6QkafyfvP",
		userInfo: null,
		accessToken: null,
		// baseUrl: 'https://xfcgyy.119.gov.cn/publicApi',
		// baseUrl: "http://124.222.90.238:9120/wx/publicApi",
		// baseUrl: "http://192.168.0.117:9121/zfb/publicApi",
		baseUrl: "http://124.222.90.238:9121/zfb/publicApi",
		// fileHost: "https://xfcgyy.119.gov.cn/publicApi/img/obs?url=",
	},
	onLaunch(options) {
		// 第一次打开
		this.login();
	},
	onShow(options) {
		// 从后台被 scheme 重新打开
	},
	async login() {
		const code = await user.getAuthCode();
		const params = {
			clientId: this.globalData.clientId,
			code,
		};

		// this.post("/aliApi/oauth/mina/token", params, "登录").then((res) => {
		//   console.log(res);
		// store.set()
		// });
	},
	get(url, data, word) {
		return request(url, data, word, "GET");
	},
	post(url, data, word) {
		return request(url, data, word, "POST");
	},
});
