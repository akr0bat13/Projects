import { merge } from "webpack-merge";

import { commonWebpackConfig } from "./webpack.common";
import { devWebpackConfig } from "./webpack.dev";
import { prodWebpackConfig } from "./webpack.prod";
import { IEnvVars } from "./webpack.typings";

module.exports = (envVars: IEnvVars) => {
  const { mode } = envVars;
  const isProd = mode === "production";
  const modeConfig = isProd ? prodWebpackConfig : devWebpackConfig();
  return merge(commonWebpackConfig, modeConfig);
};
