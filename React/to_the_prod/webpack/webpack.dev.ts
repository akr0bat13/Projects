import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import dotenv from "dotenv";
import ESLintPlugin from "eslint-webpack-plugin";
import path from "path";
import { DefinePlugin } from "webpack";

import { commonStyleRules } from "./webpack.common";
import { IDevConfiguration } from "./webpack.typings";

const PROXIED_API_PREFIX = "/proxied-api";
const cwd = process.cwd();

const staticFilesPaths = ["/mibs/.*", "/logs/.*"];

export const devWebpackConfig = (): IDevConfiguration => {
  const parsedConfig = dotenv.config().parsed;
  return {
    mode: "development",
    devtool: "cheap-module-source-map",
    module: {
      rules: commonStyleRules,
    },
    ignoreWarnings: [
      {
        module: /sass-loader/,
      },
    ],
    devServer: {
      port: 3000,
      historyApiFallback: {
        htmlAcceptHeaders: ["text/html"],
        rewrites: [
          {
            from: new RegExp(`^(${staticFilesPaths.join("|")})$`),
            to: ({ parsedUrl }) => String(parsedUrl.pathname),
          },
        ],
      },
      hot: true,
      open: true,
      proxy: {
        [PROXIED_API_PREFIX]: {
          target: `http://${parsedConfig?.APP_HOST}`,
          changeOrigin: true,
          pathRewrite: { [`^${PROXIED_API_PREFIX}`]: "" },
        },
      },
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: "node_modules",
        emitWarning: false,
        emitError: false,
        cache: true,
      }),
      new DefinePlugin({
        "process.env": JSON.stringify(parsedConfig),
      }),
    ],
    watchOptions: {
      ignored: [
        path.resolve(cwd, "node_modules"),
        path.resolve(cwd, "public/locales"),
        path.resolve(cwd, "build"),
        path.resolve(cwd, "@types"),
      ],
    },
  };
};
