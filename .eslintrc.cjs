/*
 * Author  Vincy.Li
 * Date  2023-07-05 14:57:41
 * LastEditors  Vincy.Li
 * LastEditTime  2023-07-05 17:03:54
 * Description
 */
// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react/jsx-runtime",
//     "plugin:react-hooks/recommended",
//   ],
//   parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//   settings: { react: { version: "18.2" } },
//   plugins: ["react-refresh"],
//   rules: {
//     "react-refresh/only-export-components": "warn",
//   },
// };

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "eslint-config-alloy/react",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    env: { es6: true },
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    React: false,
    jQuery: false,
    $: false,
    ht: false,
    SockJS: false,
    Stomp: false,
    api: "readonly",
    useHistory: "readonly",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ["react", "import", "jsx-a11y", "react-hooks", "prettier"],
  rules: {
    indent: "off",
    camelcase: "warn", //使用驼峰命名
    semi: ["warn", "always"],
    radix: "warn", //必须指定parseInt的第二个参数，基数
    eqeqeq: "error", //必须使用三个=
    "class-methods-use-this": "off",
    "require-atomic-updates": "off",
    "max-nested-callbacks": ["error", 6],
    "no-undef": "error",
    "no-tabs": "warn",
    "no-console": ["warn", { allow: ["error"] }], //警告未删除的console
    "no-lone-blocks": "error",
    "no-unused-vars": "warn",
    "no-useless-escape": "warn",
    "no-mixed-spaces-and-tabs": "warn", //禁止空格和tabs混用
    "no-multi-spaces": "warn",
    "no-new-func": "warn",
    "no-multiple-empty-lines": "off",
    "no-cond-assign": "error",
    "no-multi-assign": "warn",
    "no-unreachable": "warn",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react/jsx-key": "error",
    "no-unsafe-optional-chaining": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
