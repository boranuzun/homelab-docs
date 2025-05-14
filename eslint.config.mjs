import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import pluginDocusaurus from "@docusaurus/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS config
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },

  // Define global variables (e.g., window, document)
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // TypeScript recommended config
  tseslint.configs.recommended,

  // React plugin config (restricted to JSX/TSX)
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { react: pluginReact },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },

  // Docusaurus plugin config (also JSX files)
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { "@docusaurus": pluginDocusaurus },
    rules: pluginDocusaurus.configs.recommended.rules,
  },

  // JSON files
  {
    files: ["**/*.json"],
    ignores: ["tsconfig.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },

  // Markdown files
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    processor: markdown.processors.markdown,
    // No React rules applied here — avoids crashing
  },

  // Optional: exclude node_modules, package-lock.json and build output
  {
    ignores: [".docusaurus", "node_modules", "package-lock.json", "build"],
  },
]);
