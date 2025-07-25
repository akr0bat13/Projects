module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["**/src/declare/*.d.ts"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "no-console": "off",
    eqeqeq: ["error", "always"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "comma-spacing": ["error", { before: false, after: true }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          function: { after: false },
        },
      },
    ],
  },
};
