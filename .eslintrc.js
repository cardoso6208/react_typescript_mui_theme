module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jquery: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "prettier", "@typescript-eslint", "react-hooks"],
  parserOptions: {
    version: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "error"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
