const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const autoprefixer = require('autoprefixer');

const appSrc = path.resolve(__dirname, '../src');
const appIndex = path.resolve(appSrc, 'index.js');
const appDist = path.resolve(__dirname, '../dist');

module.exports = {
  mode:'development',
  devtool: 'inline-source-map',
  entry:path.resolve("src/index.tsx"),
  module:{
    rules:[
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        // include: [resolve("src")], //限制范围，提高打包速度
        // exclude: /node_modules/,
        use:[
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ],
      },
      // 解析图片资源
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
              'file-loader'
          ]
      },
      // 解析 字体
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
              'file-loader'
          ]
      },
      // 解析数据资源
      {
          test: /\.(csv|tsv)$/,
          use: [
              'csv-loader'
          ]
      },
      // 解析数据资源
      {
          test: /\.xml$/,
          use: [
              'xml-loader'
          ]
      },
      // 解析 MakeDown 文件
      {
          test: /\.md$/,
          use: [
              'html-loader',
              'markdown-loader'
          ]
      }
    ]
  },
  resolve: {
    alias: {
        "@assets": path.resolve("src/assets"),
        "@components": path.resolve("src/components"),
        "@models": path.resolve("src/models"),
        "@pages": path.resolve("src/pages"),
        "@utils": path.resolve("src/utils")
    },
    extensions: [".js", ".ts", ".tsx", "jsx"]
  },
  devServer: {
    contentBase:path.join(__dirname, 'dist'),
    host:'local-rsp.yiche.com',
    port:8234,
    clientLogLevel: "none",
    compress: true,
    hot: true,
    open: true,
    proxy: {
      '/rsp-web/**': {
        target: 'http://192.168.56.46:8081',  //测试
        // target: 'http://192.168.87.79:1501',//沙盒
        secure: false
      }
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../public/index.html'),
      filename:'index.html'
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output:{
    filename:'public/js/[name].[hash:8].js',
    path:appDist,
    publicPath:'/'
  }
}