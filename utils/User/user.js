import store from "/utils/Storage/storage";

class User {
  constructor() {
    this.name = "user";
  }
  getInfo() {
    return new Promise((resolve, reject) => {
      my.getOpenUserInfo({
        success: (res) => resolve(JSON.parse(res.response).response),
        fail: (err) => reject(err),
      });
    });
  }
}
export default new User();
