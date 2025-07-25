import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration, ProgressPlugin, RuleSetRule } from "webpack";

import { paths } from "./webpack.paths";

export const commonWebpackConfig: Configuration = {
  entry: paths.appIndex,
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": path.resolve(paths.src),
      "@styles": path.resolve(__dirname, "../src/app/styles"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheCompression: false,
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  cache: {
    type: "filesystem",
  },
  output: {
    path: paths.appBuild,
    publicPath: "/",
    filename: "[name].[chunkhash].bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      favicon: paths.appFavicon,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      },
    }),
    new ProgressPlugin(),
  ],
  stats: "errors-only",
};

export const commonStyleRules: RuleSetRule[] = [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader", "postcss-loader"],
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            auto: (resourcePath: string) => resourcePath.includes(".module."),
            localIdentName: "[name]_[hash:base64:5]",
          },
        },
      },
      {
        loader: "sass-loader",
        options: {
          sassOptions: {
            silenceDeprecations: ["legacy-js-api"],
          },
        },
      },
      "postcss-loader",
    ],
  },
];
