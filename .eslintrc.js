// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo"],
  plugins: ["react-native"],
  ignorePatterns: ["/dist/*"],
  rules: {
    "react-native/no-unused-styles": "error",
  },
};
