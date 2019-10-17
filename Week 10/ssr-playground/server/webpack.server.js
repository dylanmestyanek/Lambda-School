const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  /*=== inform webpack that we're building a bundle for node rather than the browser ===*/
  target: "node" /*=== tell webpack root file of our server app ===*/,

  entry:
    "./src/index.js" /*=== tell webpack where to put the output file that's generated ===*/,

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
