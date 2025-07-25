/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
        ],
        pathGroups: [
          { pattern: "react", group: "external", position: "before" },
          { pattern: "@/*", group: "internal", position: "after" },
          { pattern: "@/app/**", group: "internal", position: "after" },
          { pattern: "@/processes/**", group: "internal", position: "after" },
          { pattern: "@/pages/**", group: "internal", position: "after" },
          { pattern: "@/widgets/**", group: "internal", position: "after" },
          { pattern: "@/features/**", group: "internal", position: "after" },
          { pattern: "@/entities/**", group: "internal", position: "after" },
          { pattern: "@/shared/**", group: "internal", position: "after" },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "external"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: [path.resolve(__dirname, "../../tsconfig.json")],
      },
      alias: {
        map: [
          ["@/app", path.resolve(__dirname, "../../src/app")],
          ["@/pages", path.resolve(__dirname, "../../src/pages")],
          ["@/widgets", path.resolve(__dirname, "../../src/widgets")],
          ["@/entities", path.resolve(__dirname, "../../src/entities")],
          ["@/shared", path.resolve(__dirname, "../../src/shared")],
          ["@/", path.resolve(__dirname, "../../src")],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
