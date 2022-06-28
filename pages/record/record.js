import user from "/utils/User/user";
Page({
  data: { scale: 13 },
  onLoad() {
    user.getLocation().then(({ longitude, latitude, city, district }) => {
      this.setData({
        longitude,
        latitude,
        city,
        district,
      });
    });
  },
});
