class Storage {
  constructor() {
    const currentStorage = my.getStorageInfo();
    this.keys = currentStorage.keys;
    this.currentSize = currentStorage.currentSize;
    this.limitSize = currentStorage.limitSize;
  }
  set(key, data, Sync) {
    const type = Sync ? "Sync" : "";
    my["setStorage" + type]({ key, data, fail });
  }
  get(key, Sync) {
    const type = Sync ? "Sync" : "";
    my["getStorage" + type]({ key, fail });
  }
  remove(key, Sync) {
    const type = Sync ? "Sync" : "";
    my["removeStorage" + type]({ key });
  }
  clear() {
    my.clearStorage();
  }
}
function success(res) {
  console.log(res.data);
}
function fail(err) {
  console.log(res.errorMessage);
}
export default new Storage();
