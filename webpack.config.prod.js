const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",

  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "./[name]-[contenthash:6].js",
    path: path.join(__dirname, "./dist"),
    assetModuleFilename: "assets/[name][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        dependency: { not: ["url"] },
        type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./assets",
              name: "[name].[ext]",
              publicPath: "./assets",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                quality: 70,
                progressive: true,
              },
            },
          },
        ],
        type: "javascript/auto",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    require("autoprefixer"),

    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Nowa aplikacja",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash:6].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/assets",
          to: "./assets",
        },
      ],
    }),
  ],
};
