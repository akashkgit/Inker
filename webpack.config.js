// Generated using webpack-cli https://github.com/webpack/webpack-cli
const copyPlugin=require("copy-webpack-plugin")
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;
const config = {
  devtool: "cheap-module-source-map",
  entry: {
    popup:"./popup.tsx",
    cS1:"./cS1.tsx",
    service:"./service.tsx"
  },
  output:{
    path: path.resolve(__dirname,"dist"),
    filename:"[name].js"
  },
  devServer: {
    open: true,
    
    host: "localhost",
    static:{
      directory:path.join(__dirname,"")
    }
  },
  plugins: [
    new copyPlugin({
        patterns:[
          { 
            from:"./*.png",
            to:"./"
        }
        ]
    }),
    new HtmlWebpackPlugin({
      filename: "popup.html",
      chunks:["popup"]
    }),
    new HtmlWebpackPlugin({
      filename: "options.html",
      chunks:["options"]
    }),

    new MiniCssExtractPlugin(),
    new copyPlugin({
      patterns:[
     {   from:"./manifest.json"         ,to:"./[name].json"}
      ]
    })
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: [path.resolve(__dirname,"node_modules")],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "...",".css",".json"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
