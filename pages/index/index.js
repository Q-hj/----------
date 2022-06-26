var app = getApp();
Page({
  data: {
    imageLoad: false,
    list: [],
    imgPath: "",
  },
  // handleImageLoad() {
  //   this.setData({ imageLoad: true });
  //   console.log(this);
  // },

  onLoad(query) {
    // 页面加载
    this.setData({
      imgPath: app.globalData.imgPath,
      imageLoad: true,
    });
    // this.setData({ imageLoad: true });
    let list = [];
    for (let i = 1; i < 5; i++) {
      list.push({
        title: "一起来感受美丽的湘湖吧！",
        tag: "热门",
        imgPath: `https://1485642186.oss-cn-hangzhou.aliyuncs.com/image/photo/xianghu${i}.jpg`,
        content:
          "湘湖以风景秀丽而被誉为西湖的“姐妹湖”。是一个位于中国浙江省杭州市萧山区的湖泊，湘湖还是华夏文明的发源地之一。",
      });
    }
    this.setData({ list: list.concat(list.concat(list)) });
  },

  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index",
    };
  },
});
