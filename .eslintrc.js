module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  plugins: ["baseui"],
  rules: {
    "baseui/deprecated-theme-api": "warn",
    "baseui/deprecated-component-api": "warn",
    "baseui/no-deep-imports": "warn",
  },
}
