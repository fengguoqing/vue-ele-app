const mockData = require("./mock/data.json");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    host: "192.168.2.188",
    port: 8080,
    before(app) {
      app.get("/api/seller", (req, res) => {
        res.json({
          errno: 0,
          data: mockData.seller
        });
      });
      app.get("/api/goods", (req, res) => {
        res.json({
          errno: 0,
          data: mockData.goods
        });
      });
      app.get("/api/ratings", (req, res) => {
        res.json({
          errno: 0,
          data: mockData.ratings
        });
      });
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  }
};
