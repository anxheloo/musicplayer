import eslintConfigPrettier from 'eslint-config-prettier/flat';
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
	expoConfig,
	{
		ignores: ['dist/*'],
	},
	eslintConfigPrettier,
]);

// import js from '@eslint/js';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';
// import pluginReact from 'eslint-plugin-react';
// import { defineConfig } from 'eslint/config';
// import eslintConfigPrettier from 'eslint-config-prettier';

// export default defineConfig([
// 	{
// 		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
// 		plugins: { js },
// 		extends: ['js/recommended'],
// 		languageOptions: { globals: globals.browser },
// 		linterOptions: {
// 			reportUnusedInlineConfigs: 'error',
// 		},
// 		rules: {
// 			eqeqeq: 'off',
// 			'no-unused-expressions': 'error',
// 			'no-unused-vars': 'error',
// 			'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
// 			module: 'off',
// 		},
// 	},
// 	tseslint.configs.recommended,
// 	pluginReact.configs.flat.recommended,
// 	eslintConfigPrettier,
// ]);
