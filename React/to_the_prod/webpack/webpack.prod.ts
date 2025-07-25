import CopyPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration } from "webpack";
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
                auto: (resourcePath: string) =>
                  resourcePath.includes(".module."),
                localIdentName: "[hash:base64:5]",
                // "[name]_[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
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
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public/locales"),
          to: "locales",
        },
      ],
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
