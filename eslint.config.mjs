import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      ecmaVersion: 2020,
      sourceType: "module",
      parser: "@typescript-eslint/parser",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: ["commitlint.config.js", "craco.config.js", "jest.config.js"],
  },
];
