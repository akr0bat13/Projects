import path from "path";

import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import dotenv from "dotenv";
import { DefinePlugin } from "webpack";

export const prodWebpackConfig: Configuration = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new DefinePlugin({
      "process.env.APP_HOST": null,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
  resolve: {
    symlinks: false,
  },
};
