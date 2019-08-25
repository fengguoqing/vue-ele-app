const mockData = require("./data.json");
function init(app) {
  app.post("/api/seller", (req, res) => {
    res.json({
      errno: 0,
      data: mockData.seller
    });
  });
  app.post("/api/goods", (req, res) => {
    res.json({
      errno: 0,
      data: mockData.goods
    });
  });
  app.post("/api/ratings", (req, res) => {
    res.json({
      errno: 0,
      data: mockData.ratings
    });
  });
}

module.exports = {
  init: init
};
