export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["node_modules/**", ".next/**", "out/**"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    extends: ["next/core-web-vitals", "prettier"],
    rules: {}
  }
];
