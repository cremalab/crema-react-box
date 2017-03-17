const path = require("path");

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
      "styled-components": {
        commonjs: "styled-components",
        commonjs2: "styled-components",
        amd: "styled-components",
        root: "_"
      },
      "styled-components/native": {
        commonjs: "styled-components/native",
        commonjs2: "styled-components/native",
        amd: "styled-components/native",
        root: "_"
      },
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: "_"
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "react-dom",
        root: "_"
      },
      "react-native": {
        commonjs: "react-native",
        commonjs2: "react-native",
        amd: "react-native",
        root: "_"
      },
      "react-native-web": {
        commonjs: "react-native-web",
        commonjs2: "react-native-web",
        amd: "react-native-web",
        root: "_"
      },
      ramda: {
        commonjs: "ramda",
        commonjs2: "ramda",
        amd: "ramda",
        root: "_"
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
