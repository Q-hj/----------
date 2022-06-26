// 统一封装请求
export default function request(url, data, word, method) {
  return new Promise((resolve, reject) => {
    if (word)
      my.showLoading({
        content: `正在${word}中...`,
        delay: 5000,
      });

    const appData = getApp().globalData;

    my.request({
      url: appData.baseUrl + url,
      method,
      data,
      header: {
        "Content-Type": "application/json",
        Authorization: appData.accessToken
          ? "bearer" + appData.accessToken
          : "",
      },
      dataType: "json",
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        // reject(err);
        my.showToast({
          type: "fail",
          content: "请求失败：" + err.errorMessage,
          duration: 3000,
        });
      },
      complete: (res) => {
        if (word) my.hideLoading();
      },
    });
  });
}
