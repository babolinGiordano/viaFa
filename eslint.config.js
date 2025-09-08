// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

// ⬇️ Prettier (flat config friendly)
const prettierPlugin = require("eslint-plugin-prettier");
const eslintConfigPrettier = require("eslint-config-prettier");
const unusedImports = require("eslint-plugin-unused-imports");

module.exports = tseslint.config(
  // ✅ Regole per i file TS
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      // ⬇️ Disattiva ogni regola in conflitto con Prettier
      eslintConfigPrettier,
    ],
    // Esegue lint anche sugli inline templates
    processor: angular.processInlineTemplates,
    plugins: {
      // ⬇️ Espone il rule "prettier/prettier"
      prettier: prettierPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      // ⬇️ Segna come errore i file non formattati secondo Prettier
      "prettier/prettier": "error",

      "@angular-eslint/directive-selector": [
        "error",
        {type: "attribute", prefix: "app", style: "camelCase"},
      ],
      "@angular-eslint/component-selector": [
        "error",
        {type: "element", prefix: "app", style: "kebab-case"},
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  // ✅ Regole per i template HTML Angular
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      // ⬇️ Anche qui niente conflitti con Prettier
      eslintConfigPrettier,
    ],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Facoltativo: fai fallire lint se l'HTML non è formattato da Prettier
      "prettier/prettier": "error",
    },
  }
);
