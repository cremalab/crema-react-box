const path = require("path");
const webpack = require("webpack")

const libraryName = "react-boxen";

module.exports = function() {
  return {
    entry: {
      // native: "./src/components/native/Box",
      web: "./src/components/web/Box"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name]/index.js",
      library: libraryName,
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    externals: {
      "glamor": {
        commonjs: "glamor",
        commonjs2: "glamor",
        amd: "glamor",
        root: "glamor"
      },
      ramda: {
        commonjs: "ramda",
        commonjs2: "ramda",
        amd: "ramda",
        root: "ramda"
      },
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: "react"
      },
      'prop-types': {
        commonjs: "prop-types",
        commonjs2: "prop-types",
        amd: "prop-types",
        root: "prop-types"
      }
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            cacheDirectory: true
          }
        }
      ]
    },
    plugins: [],
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "src")],
      extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
    }
  };
};
