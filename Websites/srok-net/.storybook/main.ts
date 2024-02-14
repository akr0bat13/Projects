import type { StorybookConfig } from "@storybook/react-webpack5";
import {
  commonWebpackConfig,
  commonStyleRules,
} from "../webpack/webpack.common";
import { RuleSetRule } from "webpack";

const _isRules = (
  rules: (false | "" | 0 | RuleSetRule | "..." | null | undefined)[] | undefined
): rules is RuleSetRule[] => Array.isArray(rules);

const commonRules = _isRules(commonWebpackConfig?.module?.rules)
  ? commonWebpackConfig?.module?.rules ?? []
  : [];

const rules = [...commonRules, ...commonStyleRules];

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        fsCache: true,
      },
    },
  },
  typescript: {
    check: true,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        rules,
      },
      resolve: {
        ...config.resolve,
        ...commonWebpackConfig.resolve,
      },
    };
  },
};
export default config;
