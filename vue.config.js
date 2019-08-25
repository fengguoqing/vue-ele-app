const mock = require("./mock");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    host: "192.168.2.188",
    port: 8080,
    before(app) {
      mock.init(app);
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  }
};
