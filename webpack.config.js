const path = require("path");

module.exports = {
  // mode: "development",
  entry: {
    index: "./src/index.js",
    home: "./src/home.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
