module.exports = {
  plugins: ["react", "react-hooks"],
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  rules: {
    "react/react-in-jsx-scope": "off",
    // "react-hooks/exhaustive-deps": ["warn"],
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-uses-vars": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
