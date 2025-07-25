/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./config/eslint/base.js");
const imports = require("./config/eslint/imports.js");
const prettier = require("./config/eslint/prettier.js");
const react = require("./config/eslint/react.js");
const typescript = require("./config/eslint/typescript.js");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ...base,
  parser: typescript.parser,
  plugins: [
    ...(base.plugins || []),
    ...(imports.plugins || []),
    ...(prettier.plugins || []),
    ...(react.plugins || []),
    ...(typescript.plugins || []),
  ],
  extends: [
    ...(base.extends || []),
    ...(imports.extends || []),
    ...(prettier.extends || []),
    ...(react.extends || []),
    ...(typescript.extends || []),
  ],
  overrides: [
    ...(base.overrides || []),
    ...(imports.overrides || []),
    ...(prettier.overrides || []),
    ...(react.overrides || []),
    ...(typescript.overrides || []),
  ],
  settings: {
    ...(base.settings || {}),
    ...(imports.settings || {}),
    ...(prettier.settings || {}),
    ...(react.settings || {}),
    ...(typescript.settings || {}),
  },
  rules: {
    ...(base.rules || {}),
    ...(imports.rules || {}),
    ...(prettier.rules || {}),
    ...(react.rules || {}),
    ...(typescript.rules || {}),
  },
};
