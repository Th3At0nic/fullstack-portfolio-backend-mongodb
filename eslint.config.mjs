import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'dist'],
    rules: {
      // Standard JS rules
      'no-unused-vars': 'off', // Turn off the base rule
      'no-unused-expressions': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',

      // TypeScript specific rules (This is likely what you're seeing)
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
    },
  },
];
