module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
