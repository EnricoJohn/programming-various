var path = require("path");

module.exports = {
  entry: "./js/ClientApp.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
