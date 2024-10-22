const path = require("path");

module.exports = {
  entry: {
    background: "./src/background.ts",
    "content-script": "./src/content-script.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist/angular-web-extension/browser"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
